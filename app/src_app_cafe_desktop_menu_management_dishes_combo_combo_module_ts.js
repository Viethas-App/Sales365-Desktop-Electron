"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_dishes_combo_combo_module_ts"],{

/***/ 51722:
/*!********************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/dishes/combo/add/add.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






























const _c0 = ["categoryName"];

function AddComponent_ng_template_38_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Combo name is required"), " ");
  }
}

function AddComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AddComponent_ng_template_38_ng_container_0_Template, 3, 3, "ng-container", 54);
  }

  if (rf & 2) {
    const control_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", control_r12.hasError("required"));
  }
}

function AddComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Barcode already exists"));
  }
}

function AddComponent_nz_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 57);
  }

  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", option_r14._id)("nzLabel", option_r14.name);
  }
}

function AddComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_ng_template_67_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r16.addCategory(_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "Enter category name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx_r6.isAddingCategory)("disabled", !_r15.value || _r15.value.trim() === "" || ctx_r6.isAddingCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, "Add"), " ");
  }
}

function AddComponent_ng_template_80_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Unit can not be empty"), " ");
  }
}

function AddComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AddComponent_ng_template_80_ng_container_0_Template, 3, 3, "ng-container", 54);
  }

  if (rf & 2) {
    const control_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", control_r18.hasError("required"));
  }
}

function AddComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "No data"));
  }
}

function AddComponent_div_116_tr_43_nz_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 84);
  }

  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", item_r27.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", item_r27.ratio);
  }
}

function AddComponent_div_116_tr_43_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function AddComponent_div_116_tr_43_input_12_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r29.comboPrice(data_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r25.vhAlgorithm.vhcurrencyunit(data_r22.price))("ngClass", "product-" + data_r22.id_subproduct);
  }
}

function AddComponent_div_116_tr_43_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function AddComponent_div_116_tr_43_input_13_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r33.comboPrice(data_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r26.vhAlgorithm.vhcurrencyunit(data_r22.price))("ngClass", "product-" + data_r22._id);
  }
}

function AddComponent_div_116_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nz-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddComponent_div_116_tr_43_Template_nz_select_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const data_r22 = restoredCtx.$implicit;
      return data_r22.ratio = $event;
    })("ngModelChange", function AddComponent_div_116_tr_43_Template_nz_select_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const data_r22 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r39.changeRatio(data_r22, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AddComponent_div_116_tr_43_nz_option_8_Template, 1, 2, "nz-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-input-number", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddComponent_div_116_tr_43_Template_nz_input_number_ngModelChange_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const data_r22 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      data_r22.quantity = $event;
      return ctx_r40.comboPrice();
    })("ngModelChange", function AddComponent_div_116_tr_43_Template_nz_input_number_ngModelChange_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const data_r22 = restoredCtx.$implicit;
      return data_r22.quantity = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AddComponent_div_116_tr_43_input_12_Template, 1, 2, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AddComponent_div_116_tr_43_input_13_Template, 1, 2, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_div_116_tr_43_Template_i_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const data_r22 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r42.deleteFood(data_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r22.img ? data_r22.img : "./assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 12, "Select unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", data_r22.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r22.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStep", 1)("ngModel", data_r22.quantity)("nzMin", 0.1)("nzMax", 9999999999);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r22.id_subproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !data_r22.id_subproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r21.vhAlgorithm.vhcurrencyunit(data_r22.price * data_r22.quantity), " ");
  }
}

const _c1 = function (a0) {
  return {
    y: a0
  };
};

function AddComponent_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-table", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, AddComponent_div_116_tr_43_Template, 18, 14, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 13, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c1, ctx_r10.heightScroll))("nzData", ctx_r10.show)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 15, "Image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 17, "Component name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 19, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 21, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 23, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 25, "Price total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 27, "Combo price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.vhAlgorithm.vhcurrencyunit(ctx_r10.total), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.show);
  }
}

function AddComponent_nz_modal_117_ng_container_1_nz_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-tab", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    const tab_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, tab_r49));
  }
}

const _c2 = function (a0) {
  return {
    "display": a0
  };
};

function AddComponent_nz_modal_117_ng_container_1_nz_list_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-list-item", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-list-item-meta", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_nz_modal_117_ng_container_1_nz_list_item_11_Template_nz_list_item_meta_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);
      const item_r50 = restoredCtx.$implicit;
      return item_r50.choose = !item_r50.choose;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddComponent_nz_modal_117_ng_container_1_nz_list_item_11_Template_label_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);
      const item_r50 = restoredCtx.$implicit;
      return item_r50.choose = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c2, item_r50.display));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzAvatar", item_r50.img ? item_r50.img : "assets/icon/management/noimage.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzDescription", item_r50.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r50.choose);
  }
}

function AddComponent_nz_modal_117_ng_container_1_nz_list_empty_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-list-empty");
  }
}

const _c3 = function () {
  return {
    standalone: true
  };
};

function AddComponent_nz_modal_117_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddComponent_nz_modal_117_ng_container_1_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r54.tempVal = $event;
    })("ngModelChange", function AddComponent_nz_modal_117_ng_container_1_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r56.searchFood($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-tabset", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSelectedIndexChange", function AddComponent_nz_modal_117_ng_container_1_Template_nz_tabset_nzSelectedIndexChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r57.changeTypeGood($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AddComponent_nz_modal_117_ng_container_1_nz_tab_6_Template, 2, 3, "nz-tab", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "cdk-virtual-scroll-viewport", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AddComponent_nz_modal_117_ng_container_1_nz_list_item_11_Template, 3, 6, "nz-list-item", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AddComponent_nz_modal_117_ng_container_1_nz_list_empty_12_Template, 1, 0, "nz-list-empty", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 8, "Search for product name, barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r43.tempVal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSelectedIndex", ctx_r43.indexTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r43.tabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemSize", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkVirtualForOf", ctx_r43.finalList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r43.finalList.length === 0);
  }
}

function AddComponent_nz_modal_117_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_nz_modal_117_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r58.handleCancelComponent();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_nz_modal_117_ng_template_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r60.handleComponent();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "Save"));
  }
}

function AddComponent_nz_modal_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-modal", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_117_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r61.isVisibleAddComponent = $event;
    })("nzOnOk", function AddComponent_nz_modal_117_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r63.handleComponent();
    })("nzOnCancel", function AddComponent_nz_modal_117_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r64.handleCancelComponent();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddComponent_nz_modal_117_ng_container_1_Template, 13, 11, "ng-container", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AddComponent_nz_modal_117_ng_template_2_Template, 6, 6, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", ctx_r11.languageService.translate("Select combo components"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFooter", _r44)("nzVisible", ctx_r11.isVisibleAddComponent)("nzMaskClosable", false);
  }
}

const _c4 = function (a0) {
  return {
    opacity: a0
  };
};

const _c5 = function (a0) {
  return {
    width: a0
  };
};

const _c6 = function () {
  return {
    minRows: 1,
    maxRows: 2
  };
};

class AddComponent {
  constructor(router, vhImage, vhComponent, languageService, vhQueryCafe, vhAlgorithm, cdRef) {
    this.router = router;
    this.vhImage = vhImage;
    this.vhComponent = vhComponent;
    this.languageService = languageService;
    this.vhQueryCafe = vhQueryCafe;
    this.vhAlgorithm = vhAlgorithm;
    this.cdRef = cdRef;
    this.foodList = [];
    this.searchList = [];
    this.finalList = [];
    this.componentFoods = [];
    this.show = [];
    this.value = 0;
    this.total = 0;
    this.barcode = true;
    this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
    this.editPrice = {};
    this.createProd = false;
    this.list_category = this.vhQueryCafe.getlocalCategorys().filter(item => item.type == 5);
    this.indexTab = 0;
    this.tabs = [this.languageService.translate('All'), 'Product', 'Service', 'Ingredient', 'Topping']; // modal component dishes/beverage

    this.isVisibleAddComponent = false;
    this.tempVal = '';
    /** Nếu là true thì là đang thêm danh mục, dùng để hiển thị trạng thái loading, tránh bị nhấn nhiều lần */

    this.isAddingCategory = false;
  }

  ngOnInit() {
    this.initForm();
    this.getFoodLList();
  }

  ngOnDestroy() {
    if (!this.createProd && this.comboForm.value['img']) this.vhImage.deleteThumbnail([this.comboForm.value['img']]).then(() => {});
  }

  ngAfterViewChecked() {
    if (document.querySelector(".combo-table")) this.heightScroll = document.querySelector(".combo-table").clientHeight - document.querySelector(".ant-table-thead").clientHeight + "px";
    this.cdRef.detectChanges();
  }
  /**
   * khỡi tạo form với các trường để tạo combo lên DB
   * @example this.initForm()
   */


  initForm() {
    this.comboForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      img: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
      barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      // allow_sell: new FormControl(true),
      delete_hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false),
      describe: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0),
      time_warning: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0),
      unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      id_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
  } // set barcode tự động


  setBarcode() {
    let newbarcode = '';

    for (let index = 0; index < 12; index++) {
      newbarcode += Math.floor(Math.random() * 10);
    }

    this.checkBarcode(newbarcode);

    if (this.barcode) {
      this.comboForm.controls['barcode'].setValue(newbarcode);
    }
  }
  /**
   * kiểm tra barcode đã tồn tại hay chưa
   * @example this.checkBarcode('123456')
   */


  checkBarcode(barcode) {
    let detailproduct = this.vhQueryCafe.getlocalDetailProduct_byBarcode_Cafe(barcode);

    if (detailproduct == null) {
      this.barcode = true;
    } else {
      this.barcode = false;
    }
  }

  showComponent() {
    this.indexTab = 0;
    this.isVisibleAddComponent = true;
  }

  handleCancelComponent() {
    this.isVisibleAddComponent = false;
  }
  /**
   * get danh sách sp và dịch vụ để chọn vào thành phần cho combo
   * @example this.getFoodLList()
   */


  getFoodLList() {
    this.foodList = this.vhAlgorithm.sortDatebyASC(this.vhQueryCafe.getlocalDetailProducts().filter(filter => filter.type != 5).map(localProduct => {
      if (localProduct.units) {
        localProduct.units = this.vhAlgorithm.sortNumberbyASC(localProduct.units, 'ratio');
        let unit = this.vhQueryCafe.getUnit_byRatio(localProduct.units, 1);
        return Object.assign(Object.assign(Object.assign({}, localProduct), {
          choose: false,
          display: 'flex',
          quantity: 1
        }), unit);
      } else return Object.assign(Object.assign({}, localProduct), {
        choose: false,
        display: 'flex',
        quantity: 1
      });
    }), 'name');
    this.searchList = this.foodList;
    console.log(this.foodList);
    this.finalList = this.searchList;
  }
  /**
   * lọc tên sp theo tên
   * @example this.searchFood('')
   */


  searchFood(value) {
    let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
    if (value.length) this.finalList = this.vhAlgorithm.searchList(tempVal, this.searchList, ['name']);else this.finalList = this.searchList;
  }
  /**
   * bắt sk thay đổi tab xem loại sản phẩm
   * @param event
   * @example this.changeTypeGood(0)
   */


  changeTypeGood(event) {
    this.indexTab = event;
    if (this.indexTab == 0) this.finalList = this.foodList;else this.finalList = this.foodList.filter(filter => filter.type == this.indexTab);
    this.searchList = this.foodList;
  }
  /**
   * bắt sk nhấn nút ok của modal chọn sp vào combo, xử lý các sp đã chọn vào thành phần của combo
   * @example this.handleComponent()
   */


  handleComponent() {
    this.componentFoods = this.searchList.filter(item => item.choose).map(e => {
      return Object.assign(Object.assign({}, e), {
        quantity: 1,
        price_origin: e.price
      });
    });
    this.show = this.componentFoods;
    setTimeout(() => this.renderPrice(this.componentFoods), 100);
    this.comboPrice();
    this.isVisibleAddComponent = false;
  }
  /**
   * cleavejs cho các sp trong combo để xử lý giá sp
   * @example this.renderPrice([])
   */


  renderPrice(arr) {
    arr.forEach(item => {
      if (!item.id_subproduct) this.editPrice['product-' + item._id] = this.vhAlgorithm.vhnumeral('.product-' + item._id);else this.editPrice['product-' + item.id_subproduct] = this.vhAlgorithm.vhnumeral('.product-' + item.id_subproduct);
    });
  }
  /**
   * tính lại giá tổng combo
   * @example this.comboPrice()
   */


  comboPrice(dish) {
    if (dish) {
      let price = '';

      if (dish.id_subproduct) {
        price = this.editPrice['product-' + dish.id_subproduct].getRawValue();
      } else {
        price = this.editPrice['product-' + dish._id].getRawValue();
      }

      dish.price = parseFloat(price);
    }

    this.total = this.show.reduce((prev, next) => prev + next.quantity * next.price, 0);
    this.comboForm.controls['price'].setValue(this.total);
  } // Thực hiện xóa sản phẩm trong combo


  deleteFood(food) {
    this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", `${this.languageService.translate('Are you sure to delete this product?')}`, "OK", this.languageService.translate('Cancel')).then(() => {
      this.componentFoods.splice(this.componentFoods.findIndex(item => item.name == food.name), 1);
      this.finalList.map(item => {
        if (item.name == food.name) {
          item.display = 'flex';
          item.price = food.price_origin;
          item.choose = false;
        }
      });
      this.show = this.componentFoods;
      this.comboPrice();
      this.editPrice['product-' + food._id] = null;
      Promise.all([this.vhComponent.showLoading("", "transparent-loading", null, null, false)]).finally(() => this.vhComponent.hideLoading(0));
    }, () => {});
  }

  goBack() {
    this.router.navigate(['/cafe/dashboard/management/dishes/combo'], {
      state: this.dataRestore
    });
  }
  /**
   * tạo combo lên DB
   * @example this.saveCombo()
   */


  saveCombo() {
    var _this = this;

    let update = this.cleanForm(this.comboForm).value;
    update['units'] = [{
      barcode: update.barcode,
      price: update.price,
      unit: update.unit,
      ratio: 1,
      default: true
    }];
    delete update.barcode;
    delete update.price;
    delete update.unit;
    this.vhComponent.showLoading("", "transparent-loading").then(() => {
      if (!this.barcode) {
        this.vhComponent.hideLoading(0).then(() => this.vhComponent.showToast(1500, this.languageService.translate("Barcode already exists"), "alert-toast"));
      } else {
        this.vhQueryCafe.addProduct_Cafe(Object.assign(Object.assign({}, update), {
          type: 5
        })).then( /*#__PURE__*/function () {
          var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* ({
            _id,
            name
          }) {
            console.log(_id);
            _this.createProd = true;

            if (_this.show.length) {
              yield _this.addComponentFoods(_id, _this.show);
            }

            _this.vhComponent.hideLoading(0).then(() => {
              _this.vhComponent.showToast(1000, name + " " + _this.languageService.translate("has been added successfully"), "success-toast");

              _this.goBack();
            });
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch(err => {
          this.vhComponent.hideLoading(0).then(() => this.vhComponent.showToast(1500, this.languageService.translate("An error occurred while adding product. Please try again"), "alert-toast"));
        });
      }
    });
  }
  /**
   * bắt sk thay đổi đơn vị của sp trong combo
   * @param data sp trong combo
   * @param event giá trị ratio của đơn vị
   * @example this.changeRatio(combo_prodct, 1)
   */


  changeRatio(data, event) {
    let unit = this.vhQueryCafe.getUnit_byRatio(data.units, event);
    data.price = unit.price;
    data.ratio = event;
    setTimeout(() => {
      this.comboPrice(data);
    }, 100);
  } // Hàm thực hiện xóa space (TRIM) các control trong form


  cleanForm(formGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      if (key === 'name' || key === 'barcode' || key === 'brand' || key === 'unit') {
        if (formGroup.get(key).value) {
          let value = formGroup.get(key).value.toString().trim();
          formGroup.get(key).setValue(value);
        }
      }
    });
    return formGroup;
  }
  /**
   * thêm danh sách thành phần combo lên DB
   * @example this.addComponentFoods(id_combo, [])
   */


  addComponentFoods(_id, foods) {
    return new Promise(resolve => {
      this.vhQueryCafe.addCombosProduct_Cafe(_id, foods.map(food => {
        let data = {
          id_product: food._id,
          type: food.type,
          quantity: food.quantity,
          price: food.price,
          ratio: food.ratio
        };
        if (food.id_subproduct) data['id_subproduct'] = food.id_subproduct;
        return data;
      })).then(combos => {
        if (combos) resolve(true);
      }, error => {
        console.log('error', error);
        resolve(false);
      }).catch(e => {
        console.log(e);
      });
    });
  }

  getFile() {
    document.getElementById("file-upload").click();
  }
  /** Lấy hình ảnh từ Desktop */


  onUpload(e) {
    const file = e.target.files[0];
    this.vhImage.getThumbnailFromDesktop(file, 128, 128, "products", this.comboForm.value.img || null).then(photoURL => {
      this.comboForm.controls["img"].setValue(photoURL);
      this.vhComponent.showToast(2000, this.languageService.translate("Image was loaded successfully"), "success-toast");
    }, () => {
      this.vhComponent.showToast(2000, this.languageService.translate("Image was failed"), "alert-toast");
    });
  }
  /**
   * Thêm danh mục
   */


  addCategory(categoryName) {
    var _a, _b;

    const value = categoryName.value ? (_b = (_a = categoryName.value) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.trim() : '';

    if (value) {
      // Kiểm tra xem danh mục đã tồn tại hay chưa
      let index = this.vhQueryCafe.getlocalCategorys().filter(res => res.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO).findIndex(item => this.vhAlgorithm.changeAlias(item.name).toLowerCase() == this.vhAlgorithm.changeAlias(value).toLowerCase()); // Đã tồn tại

      if (index !== -1) {
        this.vhComponent.showToast(1500, this.languageService.translate("Category existed"), 'alert-toast');
        return;
      } // Chưa tồn tại thì thêm


      this.isAddingCategory = true;
      this.vhQueryCafe.addCategory({
        name: value,
        type: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO
      }).then(res => {
        this.categoryName.nativeElement.value = ''; // Reset input

        this.list_category.unshift(res); // Thêm vào đầu danh sách

        this.comboForm.controls['id_category'].setValue(res._id); // Chọn cái mới thêm

        this.vhComponent.showToast(2000, this.languageService.translate("Category has been added successfully"), 'success-toast');
      }, err => {
        console.log(err);
        this.vhComponent.showToast(1500, this.languageService.translate("An eror occured while adding category. Please try again"), 'alert-toast');
      }).finally(() => {
        this.isAddingCategory = false;
      });
    } else {
      this.vhComponent.showToast(1500, this.languageService.translate('Category name is required'), 'alert-toast');
    }
  }

}

AddComponent.ɵfac = function AddComponent_Factory(t) {
  return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhImage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};

AddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddComponent,
  selectors: [["app-add"]],
  viewQuery: function AddComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.categoryName = _t.first);
    }
  },
  decls: 118,
  vars: 77,
  consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "combo"], [1, "combo-name"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "20", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "4", 1, "add-button"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "disabled", "ngStyle", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], [1, "custom-scroll-bar", 2, "padding-top", "16px", "height", "87%", "overflow-y", "auto"], ["nz-form", "", 2, "height", "100%", 3, "formGroup"], ["nz-row", "", 2, "margin-bottom", "1.6%"], ["nz-col", "", "nzSpan", "3"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "bg-img", "center-all-content", 2, "cursor", "pointer", 3, "click"], ["id", "file-upload", "type", "file", "accept", ".png, .jpg", 2, "display", "none", 3, "change"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", 3, "ngStyle", "src"], ["nz-col", "", "nzSpan", "21"], ["nz-row", "", 2, "justify-content", "space-between", "height", "100%"], ["nz-col", "", "nzSpan", "9", 1, "combo-name-input"], [2, "margin-bottom", "0"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], ["nz-col", "", "nzSpan", "13", 1, "combo-price-input"], [2, "display", "flex"], ["formControlName", "barcode", "nz-input", "", 3, "placeholder", "keyup"], ["qr", ""], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 3, "nzTooltipTitle", "click"], [1, "validation-errors"], ["class", "error-message", 4, "ngIf"], ["nz-row", "", 2, "justify-content", "space-between"], ["nz-col", "", "nzSpan", "12", 1, "small-size", "combo-warning"], [1, "label"], ["formControlName", "id_category", "nzShowSearch", "", "nzAllowClear", "", 3, "nzDropdownRender", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["addCategoryTemplate", ""], ["nz-col", "", "nzSpan", "12"], [2, "margin-bottom", "2%"], ["formControlName", "unit", "nz-input", "", 3, "placeholder"], ["combineTplUnit", ""], ["formControlName", "time_warning", "nz-input", "", "type", "number", 3, "placeholder"], ["nz-input", "", "formControlName", "describe", 2, "border-radius", "5px", 3, "placeholder", "nzAutosize"], [1, "combo-component"], ["nz-row", "", 2, "padding-bottom", "15px"], ["nz-col", "", "nzSpan", "20"], [1, "large-size"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nz-row", "", "class", "content-Component custom-scroll-bar", 4, "ngIf"], ["class", "combo-table", "style", "height: 83%;overflow: hidden;", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzMaskClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel", 4, "ngIf"], [4, "ngIf"], [1, "error-message"], ["color", "vh-red"], [3, "nzValue", "nzLabel"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "6px", "padding", "0px 6px 11px 6px"], ["nz-input", "", "type", "text", 3, "placeholder"], ["categoryName", ""], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-row", "", 1, "content-Component", "custom-scroll-bar"], [1, "no-data"], [1, "combo-table", 2, "height", "83%", "overflow", "hidden"], [3, "nzScroll", "nzNoResult", "nzData", "nzShowPagination"], ["cf", ""], ["nzWidth", "10%", "nzAlign", "center"], ["nzWidth", "25%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "15%", "nzAlign", "right"], [2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer"], ["nzAlign", "center", 2, "padding", "0"], [2, "width", "36px", 3, "src"], ["nzShowSearch", "", 2, "width", "100%", 3, "ngModel", "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["type", "number", "nz-input", "", 3, "nzStep", "ngModel", "nzMin", "nzMax", "ngModelChange"], ["type", "text", "nz-input", "", 3, "value", "ngClass", "blur", 4, "ngIf"], ["nzAlign", "right"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "cus-icon", 3, "click"], [3, "nzLabel", "nzValue"], ["type", "text", "nz-input", "", 3, "value", "ngClass", "blur"], [3, "nzFooter", "nzVisible", "nzTitle", "nzMaskClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["modalFooterEditUnitPrice", ""], ["id", "inputSearchDishes", "nz-input", "", 1, "nz-hover-border", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], [3, "nzSelectedIndex", "nzSelectedIndexChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [1, "infinite-container", 3, "itemSize"], ["style", "cursor: pointer;", 3, "ngStyle", 4, "cdkVirtualFor", "cdkVirtualForOf"], [3, "nzTitle"], [2, "cursor", "pointer", 3, "ngStyle"], [3, "nzAvatar", "nzDescription", "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]],
  template: function AddComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_Template_button_click_13_listener() {
        return ctx.saveCombo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_Template_div_click_23_listener() {
        return ctx.getFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AddComponent_Template_input_change_24_listener($event) {
        return ctx.onUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "nz-form-item", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "nz-form-control", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "nz-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, AddComponent_ng_template_38_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "nz-form-item", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "nz-form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "nz-input-group", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "input", 27, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function AddComponent_Template_input_keyup_48_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r65);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](49);

        return ctx.checkBarcode(_r2.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_Template_i_click_51_listener() {
        return ctx.setBarcode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, AddComponent_div_55_Template, 4, 3, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "b", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "nz-form-control", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "nz-select", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, AddComponent_nz_option_66_Template, 1, 2, "nz-option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, AddComponent_ng_template_67_Template, 8, 8, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "nz-form-item", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "nz-form-control", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "nz-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](79, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, AddComponent_ng_template_80_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](86, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "nz-form-item", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "nz-form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "nz-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](91, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](96, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "nz-form-item", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "nz-form-control");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "nz-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "textarea", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](101, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](108, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "button", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddComponent_Template_button_click_111_listener() {
        return ctx.showComponent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](114, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](115, AddComponent_div_115_Template, 5, 3, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](116, AddComponent_div_116_Template, 44, 31, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](117, AddComponent_nz_modal_117_Template, 4, 4, "nz-modal", 53);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](39);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](68);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](81);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 34, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 36, "Add combo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.comboForm.invalid || !ctx.componentFoods.length)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](72, _c4, ctx.comboForm.invalid || !ctx.componentFoods.length ? 0.5 : 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 38, "Save"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.comboForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](74, _c5, ctx.comboForm.value.img ? "100%" : "60px"))("src", ctx.comboForm.value.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 40, "Combo name"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzErrorTip", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 42, "Enter combo name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 44, "Barcode"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 46, "Enter manually or use the barcode scanner"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 48, "Generate barcodes automatically"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.barcode);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 50, "Category"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 52, "Please select category"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownRender", _r5)("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](65, 54, "Please select category"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.list_category);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](73, 56, "Unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzErrorTip", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](79, 58, "Enter unit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](86, 60, "Warning timeout (minute)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](91, 62, "Enter warning timeout (minutes)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](96, 64, "Description"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](101, 66, "Description"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](76, _c6));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](108, 68, "Combo components"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](114, 70, "Add"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.componentFoods.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.componentFoods.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isVisibleAddComponent);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzAutosizeDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonText, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzOptionComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__.NzDividerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTbodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_22__.NzInputNumberComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_23__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_23__.NzModalContentDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_24__.NzTabSetComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__.NzListComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.CdkVirtualForOf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_24__.NzTabComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__.NzListItemMetaComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__.NzCheckboxComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_26__.NzListEmptyComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-row-gap: 16px;\n  row-gap: 16px;\n  grid-column-gap: 16px;\n  column-gap: 16px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 50% 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .combo-subs[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/2;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n  font-weight: 500;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-left: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 4px;\n  height: 7vw;\n  background: #f2f2f2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 10px;\n  padding: 4px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #8e8e93;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green);\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n  font-weight: 500;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .ant-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .row-checkbox[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .row-checkbox[_ngcontent-%COMP%]   .center-align[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .content-component[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  height: 86%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-divider-horizontal[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%] {\n  padding: 12px 0 12px 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: black !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n  font-style: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   .cus-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n.ant-btn[_ngcontent-%COMP%]:active {\n  color: var(--ion-color-vh-green);\n}\n.content-size[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f5f5f5;\n  border-radius: 10px;\n}\n.content-size[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  background-color: #f5f5f5;\n}\n.custom-scroll-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\nnz-list[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\nnz-list[_ngcontent-%COMP%]   nz-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.ant-avatar[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\nnz-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #fcf9f9;\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 35vh;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.infinite-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  \n}\n.items-food[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.items-food[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 0 !important;\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 35vh;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.infinite-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  \n}\n.cdk-virtual-scroll-content-wrapper[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.combo-name-input[_ngcontent-%COMP%] {\n  max-width: 40.5%;\n  flex-basis: 40.5% !important;\n}\n.combo-warning[_ngcontent-%COMP%] {\n  max-width: 48%;\n  flex-basis: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0ksZUFBQTtBQUVOO0FBRUE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQUVKO0FBREk7RUFHSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUFRO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUVaO0FBQVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUFRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVaO0FBRFk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUdoQjtBQURZO0VBQ0ksWUFBQTtBQUdoQjtBQUFRO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUVaO0FBQVE7RUFDSSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUVaO0FBQVE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBRVo7QUFBUTtFQUNJLFdBQUE7RUFFQSw2QkFBQTtBQUNaO0FBQ1E7RUFDSSxpQkFBQTtBQUNaO0FBQVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFaEI7QUFFSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNaO0FBQ1E7RUFDSSxvQkFBQTtBQUNaO0FBQ1E7RUFDSSxpQ0FBQTtBQUNaO0FBQVk7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0FBRWhCO0FBQVk7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBRWhCO0FBQVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVoQjtBQUtBO0VBQ0UsZ0NBQUE7QUFGRjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFGRjtBQUtBO0VBQ0UsVUFBQTtBQUZGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7QUFIRjtBQUlFO0VBQ0ksaUJBQUE7QUFGTjtBQU1BO0VBQ0UsVUFBQTtFQUNBLGtDQUFBO0FBSEY7QUFNQTtFQUNFLDJCQUFBO0FBSEY7QUFNQTtFQUNFLHlCQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0FBSEY7QUFNQTtFQUNFLHFCQUFBO0VBQ0Esa0NBQUE7QUFIRjtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBSUU7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7QUFGTjtBQU1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7QUFIRjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxrQ0FBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSEYiLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAuY29tYm8ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJvdy1nYXA6IDE2cHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XHJcbiAgICAmLW5hbWUsXHJcbiAgICAmLXN1YnMsXHJcbiAgICAmLWNvbXBvbmVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgICYtbmFtZSB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmctaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDd2dztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOGU4ZTkzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbnQtc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdy1jaGVja2JveCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAuY2VudGVyLWFsaWduIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1jb21wb25lbnQge1xyXG4gICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgICAgICAuY29udGVudC1jb21wb25lbnQge1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgIGhlaWdodDogODYlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYW50LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAxMnB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jdXMtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuLmFudC1idG46YWN0aXZlIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKVxyXG59XHJcblxyXG4uY29udGVudC1zaXplOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zaXplOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbC1iYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4O1xyXG59XHJcblxyXG4vL21vZGFsIGNvbXBvbmVudFxyXG5uei1saXN0IHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIC8qIEZvciBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIG56LWxpc3QtaXRlbS1tZXRhLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG5uei1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcblxyXG4uYW50LWF2YXRhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uei1saXN0LWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI0OSwgMjQ5KTtcclxufVxyXG5cclxuLmluZmluaXRlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIC8qIEZvciBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG59XHJcblxyXG4uaW5maW5pdGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbn1cclxuXHJcbi5pdGVtcy1mb29kIHtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGlucHV0IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmluZmluaXRlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIC8qIEZvciBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG59XHJcblxyXG4uaW5maW5pdGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbn1cclxuXHJcbi5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jb21iby1uYW1lLWlucHV0IHtcclxuICBtYXgtd2lkdGg6IDQwLjUlO1xyXG4gIGZsZXgtYmFzaXM6IDQwLjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21iby13YXJuaW5nIHtcclxuICBtYXgtd2lkdGg6IDQ4JTtcclxuICBmbGV4LWJhc2lzOiA0OCU7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 52408:
/*!******************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/dishes/combo/combo.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComboComponent": () => (/* binding */ ComboComponent)
/* harmony export */ });
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function ComboComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 27);
} }
function ComboComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_tr_56_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const data_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.gotoComboDetail(data_r6, ctx_r7.tab === "Hidden"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", data_r6.img ? data_r6.img : "./assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.combos.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.vhAlgorithm.vhcurrencyunit(data_r6.units[0].price));
} }
function ComboComponent_tr_93_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComboComponent_tr_93_Template_nz_switch_ngModelChange_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const data_r9 = restoredCtx.$implicit; return data_r9.delete_hidden = $event; })("ngModelChange", function ComboComponent_tr_93_Template_nz_switch_ngModelChange_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const data_r9 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.updateProductByField(data_r9._id, { delete_hidden: data_r9.delete_hidden }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", data_r9.img ? data_r9.img : "./assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r9.combos.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.vhAlgorithm.vhcurrencyunit(data_r9.units[0].price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", data_r9.delete_hidden);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class ComboComponent {
    constructor(router, vhAlgorithm, vhQueryCafe, languageService, cdRef, vhComponent) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.languageService = languageService;
        this.cdRef = cdRef;
        this.vhComponent = vhComponent;
        this.list_show_combo_hidden = [];
        this.list_show = [];
        this.list_subcombos = [];
        this.keySearch = '';
        this.selectedValue = '1'; //theo menu
        this.selectedIndex = 0; // theo index của tab
        this.listTabs = ['Allow sale', 'Hidden'];
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.list_combo_hidden = [];
        /** hàm sort cho các cột */
        this.name_col = false; // chọn sort cột tên sản phẩm
        this.quantity_col = false; // Chọn sắp xếp theo đơn vị
        this.price_col = false; // Chọn sắp xếp theo giá
    }
    ngOnInit() {
        this.getData();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#combo-list") && document.querySelector(".ant-tabs-tab") && document.querySelector(".ant-table-thead") && document.querySelector(".combo-list-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#combo-list").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".combo-list-header").clientHeight - document.querySelector(".ant-table-pagination").clientHeight - document.querySelector(".ant-tabs-tab").clientHeight - 80 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**get data product, category */
    getData() {
        if (this.dataRestore) {
            this.keySearch = this.dataRestore.keySearch;
            this.selectedValue = this.dataRestore.selectedValue;
            this.selectedIndex = this.dataRestore.selectedIndex;
        }
        this.changeTab(this.selectedIndex);
    }
    /**
     * Lấy danh sách sản phẩm đã ẩn
     */
    getHiddenProducts() {
        this.vhQueryCafe.refreshLocalProducts_Delete_Hidden(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO).then(() => {
            this.list_show_combo_hidden = this.vhQueryCafe.getlocalProducts(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO).filter(item => item.delete_hidden).map(item => this.processCombo(item));
            this.list_combo_hidden = this.list_show_combo_hidden;
            this.list_subcombos = this.vhAlgorithm.sortStringbyASC(this.list_show_combo_hidden, 'name');
            this.searchCombos(this.keySearch);
        });
    }
    /**
     * Xử lí dữ liệu của sản phẩm (units, subproduct, name_category, ...)
     * @param item
     * @returns
     */
    processCombo(item) {
        return Object.assign(Object.assign({}, item), { quantity: item.combos.length, price: item.units[0].price });
    }
    /**
     * cập nhật sp theo trường truyền vào
     * @example this.updateProductByField({name: ''})
     */
    updateProductByField(id, value, parent, is_sub) {
        console.log('value', value);
        console.log('id', id);
        this.vhQueryCafe.updateProduct(id, value).then((res) => {
            console.log(res);
            this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Update successfully"), 2000);
            if (!value.delete_hidden) {
                this.list_combo_hidden = this.list_combo_hidden.filter(item => item._id != id);
                this.list_show_combo_hidden = this.list_show_combo_hidden.filter(item => item._id != id);
            }
        }, error => {
            console.log(error);
        }).catch(e => {
            console.log(e);
        });
    }
    /**
     * Khi thay đổi tab
     * @example this.changeTab('1');
     */
    changeTab(value) {
        this.filterByAllowSell(value);
        if (value == '1') {
            this.getHiddenProducts();
        }
    }
    /**
     * Lọc danh sách sản phẩm theo allow_sell
     */
    filterByAllowSell(index) {
        this.list_show = this.vhQueryCafe.getlocalProducts(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO).map(item => this.processCombo(item));
        if (this.list_show) {
            if (index == 0)
                this.list_show = this.list_show.filter(item => item.delete_hidden == false);
            // else if(index == 1) this.list_show = this.list_show_combo_hidden.filter(item => !item.delete_hidden == false);
            this.list_subcombos = this.list_show;
            this.searchCombos(this.keySearch);
        }
    }
    /**
     * Tìm kiếm sản phẩm (tab đã ẩn) theo tên
     * @example this.searchCombos('');
     */
    searchCombos(value) {
        this.list_show = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value.toLowerCase()), this.list_subcombos, ['name']);
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/dishes']);
    }
    gotoAdd() {
        let dataRestore = { keySearch: this.keySearch, selectedValue: this.selectedValue, selectedIndex: this.selectedIndex };
        this.router.navigate(['/cafe/dashboard/management/dishes/combo/add'], { state: { dataRestore } });
    }
    gotoComboDetail(data, isFromHidden) {
        let dataRestore = { keySearch: this.keySearch, selectedValue: this.selectedValue, selectedIndex: this.selectedIndex };
        const state = {
            data: data,
            dataRestore
        };
        if (isFromHidden) {
            state['isFromHidden'] = true;
        }
        this.router.navigate(['/cafe/dashboard/management/dishes/combo/detail'], {
            state: state
        });
    }
    /** Hàm thực hiện sắp xếp theo collection
     *
     * @param colName       // tên cột muôn sắp xếp
     * @param typeList      // Biến dùng để xác định danh sách sắp xếp là cho bán hay không cho bán
     */
    sortTable(colName) {
        let methodName = colName === 'name' ? 'sortVietnameseby' : 'sortNumberby';
        let direction = this[colName + '_col'] ? 'ASC' : 'DESC';
        this.list_show = this.vhAlgorithm[methodName + direction]([...this.list_show], colName);
    }
}
ComboComponent.ɵfac = function ComboComponent_Factory(t) { return new (t || ComboComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent)); };
ComboComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComboComponent, selectors: [["app-combo"]], decls: 94, vars: 84, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "combo-list", 1, "height-layout"], ["nz-row", "", 1, "combo-list-header"], ["nz-col", "", "nzSpan", "5", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "10", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "9", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle"], ["nz-row", "", 1, "total-item", "small-size"], [2, "color", "var(--ion-color-vh-red)"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData"], ["allowSale", ""], ["nzWidth", "10%", "nzAlign", "center"], ["nzWidth", "40%", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzAlign", "center", "nzWidth", "25%", 2, "cursor", "pointer", 3, "click"], ["nzAlign", "right", "nzWidth", "25%", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["comboHidden", ""], ["nzWidth", "17%", "nzAlign", "right"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "center", 2, "padding", "0"], [2, "width", "36px", 3, "src"], [2, "color", "var(--ion-color-vh-green)"], ["nzAlign", "center"], ["nzAlign", "right"], [2, "cursor", "pointer"], [1, "money-right"], [3, "ngModel", "ngModelChange"]], template: function ComboComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ComboComponent_Template_input_ngModelChange_12_listener($event) { return ctx.keySearch = $event; })("keyup", function ComboComponent_Template_input_keyup_12_listener() { return ctx.searchCombos(ctx.keySearch); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ComboComponent_ng_template_14_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_button_click_18_listener() { return ctx.gotoAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-tabset", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzSelectedIndexChange", function ComboComponent_Template_nz_tabset_nzSelectedIndexChange_23_listener($event) { return ctx.selectedIndex = $event; })("nzSelectChange", function ComboComponent_Template_nz_tabset_nzSelectChange_23_listener($event) { return ctx.changeTab($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "nz-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "nz-table", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_th_click_40_listener() { ctx.name_col = !ctx.name_col; return ctx.sortTable("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_th_click_45_listener() { ctx.quantity_col = !ctx.quantity_col; return ctx.sortTable("quantityCombos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_th_click_50_listener() { ctx.price_col = !ctx.price_col; return ctx.sortTable("price"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ComboComponent_tr_56_Template, 9, 4, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "nz-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "nz-table", 16, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_th_click_73_listener() { ctx.name_col = !ctx.name_col; return ctx.sortTable("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_th_click_78_listener() { ctx.quantity_col = !ctx.quantity_col; return ctx.sortTable("quantityCombos"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboComponent_Template_th_click_83_listener() { ctx.price_col = !ctx.price_col; return ctx.sortTable("price"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, ComboComponent_tr_93_Template, 11, 5, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 40, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 42, "List of combos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.keySearch)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 44, "Search for combo name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 46, "Add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSelectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 48, "Allow sale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 50, "Total"), " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.list_show.length, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 52, "combos"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](78, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](79, _c1, ctx.heightScroll))("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 54, "No data"))("nzData", ctx.list_show);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 56, "Combo name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.name_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 58, "Number of components"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.quantity_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 60, "Selling price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.price_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r2.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 62, "Hidden not allow sell"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 64, "Total"), " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.list_show_combo_hidden.length, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](65, 66, "combos"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](81, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](82, _c1, ctx.heightScroll))("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 68, "No data"))("nzData", ctx.list_show_combo_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 70, "Combo name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.name_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](81, 72, "Number of components"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.quantity_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](86, 74, "Selling price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.price_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](91, 76, "Hidden not for sale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r4.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_17__.NzSwitchComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 95%;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nth.ant-table-cell[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFDQTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUdKO0FBREU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQURFO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VBQ0UsV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFDRTtFQUNFLGlCQUFBO0FBRUo7QUFDQTs7RUFFRSxnQ0FBQTtBQUVGO0FBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBR0YiLCJmaWxlIjoiY29tYm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG4gIG56LXNlbGVjdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuLWRhdGEge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmJ0bi1hZGQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxudGguYW50LXRhYmxlLWNlbGwge1xyXG4gIGIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG59XHJcbi5hbnQtYnRuOmZvY3VzLFxyXG4uYW50LWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 51812:
/*!***************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/dishes/combo/combo.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComboModule": () => (/* binding */ ComboModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _combo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combo.component */ 52408);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/add.component */ 51722);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/detail.component */ 61402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    {
        path: '',
        component: _combo_component__WEBPACK_IMPORTED_MODULE_1__.ComboComponent
    },
    {
        path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_2__.AddComponent
    },
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__.DetailComponent
    },
];
class ComboModule {
}
ComboModule.ɵfac = function ComboModule_Factory(t) { return new (t || ComboModule)(); };
ComboModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ComboModule });
ComboModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComboModule, { declarations: [_combo_component__WEBPACK_IMPORTED_MODULE_1__.ComboComponent,
        _add_add_component__WEBPACK_IMPORTED_MODULE_2__.AddComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_3__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule] }); })();


/***/ }),

/***/ 61402:
/*!**************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/dishes/combo/detail/detail.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























const _c0 = ["categoryName"];
function DetailComponent_ng_template_38_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Combo name is required"), " ");
} }
function DetailComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DetailComponent_ng_template_38_ng_container_0_Template, 3, 3, "ng-container", 53);
} if (rf & 2) {
    const control_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r10.hasError("required"));
} }
function DetailComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-text", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Barcode already exists"));
} }
function DetailComponent_nz_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 56);
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", option_r12._id)("nzLabel", option_r12.name);
} }
function DetailComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_ng_template_67_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.addCategory(_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "Enter category name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", ctx_r6.isAddingCategory)("disabled", !_r13.value || _r13.value.trim() === "" || ctx_r6.isAddingCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, "Add"), " ");
} }
function DetailComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "No data"));
} }
function DetailComponent_div_113_tr_41_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 81);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", item_r23.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", item_r23.ratio);
} }
function DetailComponent_div_113_tr_41_input_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DetailComponent_div_113_tr_41_input_12_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r24.comboPrice(data_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r21.vhAlgorithm.vhcurrencyunit(data_r18.price))("ngClass", "product-" + data_r18.id_subproduct);
} }
function DetailComponent_div_113_tr_41_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DetailComponent_div_113_tr_41_input_13_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.comboPrice(data_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r22.vhAlgorithm.vhcurrencyunit(data_r18.price))("ngClass", "product-" + data_r18._id);
} }
function DetailComponent_div_113_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DetailComponent_div_113_tr_41_Template_nz_select_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const data_r18 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.changeUnit($event, data_r18); })("ngModelChange", function DetailComponent_div_113_tr_41_Template_nz_select_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const data_r18 = restoredCtx.$implicit; return data_r18.ratio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DetailComponent_div_113_tr_41_nz_option_8_Template, 1, 2, "nz-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DetailComponent_div_113_tr_41_input_12_Template, 1, 2, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DetailComponent_div_113_tr_41_input_13_Template, 1, 2, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", data_r18.img ? data_r18.img : "./assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", data_r18.name, " ", data_r18.name_sub ? "( " + data_r18.name_sub + ")" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, "Select unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", data_r18.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r18.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r18.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r18.id_subproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !data_r18.id_subproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.vhAlgorithm.vhcurrencyunit(data_r18.price * data_r18.quantity), " ");
} }
const _c1 = function (a0) { return { y: a0 }; };
function DetailComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-table", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, DetailComponent_div_113_tr_41_Template, 16, 12, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 13, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c1, ctx_r8.heightScroll))("nzData", ctx_r8.data.combos)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 15, "Image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 17, "Component name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 19, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 21, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 23, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 25, "Price total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 27, "Combo price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.comboForm.value.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.data.combos);
} }
function DetailComponent_p_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Are you sure to delete this combo?"));
} }
const _c2 = function (a0) { return { width: a0 }; };
const _c3 = function () { return { minRows: 1, maxRows: 2 }; };
class DetailComponent {
    constructor(router, vhImage, vhComponent, languageService, vhQueryCafe, vhAlgorithm, cdRef) {
        this.router = router;
        this.vhImage = vhImage;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.barcode = true;
        this.editPrice = [];
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.list_category = this.vhQueryCafe.getlocalCategorys().filter(item => item.type == 5);
        /** ------ Modal Zorro---- */
        this.isVisible = false;
        /** Nếu là true thì là đang thêm danh mục, dùng để hiển thị trạng thái loading, tránh bị nhấn nhiều lần */
        this.isAddingCategory = false;
        this.data = this.router.getCurrentNavigation().extras.state.data;
    }
    ngOnInit() {
        this.initForm();
        if (this.data.combos) {
            for (let i = 0; i < this.data.combos.length; i++) {
                // let dataPush = {};
                let product;
                if (this.data.combos[i].id_subproduct) {
                    product = this.vhQueryCafe.getlocalDetailProduct(this.data.combos[i].id_subproduct);
                }
                else {
                    product = this.vhQueryCafe.getlocalDetailProduct(this.data.combos[i].id_product);
                }
                this.data.combos[i].units = product.units;
            }
            setTimeout(() => {
                this.renderPrice(this.data.combos);
            }, 100);
        }
    }
    ngAfterViewChecked() {
        if (document.querySelector(".combo-table"))
            this.heightScroll = document.querySelector(".combo-table").clientHeight - document.querySelector(".ant-table-thead").clientHeight + "px";
        this.cdRef.detectChanges();
    }
    // Định dạng hiển thị kiểu giá ngoài giao diện 100,000 VNĐ
    renderPrice(arr) {
        arr.forEach((item) => {
            if (!item.id_subproduct)
                this.editPrice['product-' + item._id] = this.vhAlgorithm.vhnumeral('.product-' + item._id);
            else
                this.editPrice['product-' + item.id_subproduct] = this.vhAlgorithm.vhnumeral('.product-' + item.id_subproduct);
        });
    }
    // cập nhật lại giá tiền khi đổi đơn vị
    changeUnit(event, data) {
        let unit_exchange = data.units.find(item => item.ratio == event);
        data.price = unit_exchange.price;
        data.ratio = unit_exchange.ratio;
        data.unit = unit_exchange.unit;
        setTimeout(() => {
            this.comboPrice(data);
        }, 100);
    }
    /**
     * gán giá trị combo nhận dc từ state truyền qua vào form để show lên giao diện
     * @example this.initForm()
     */
    initForm() {
        this.comboForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.img),
            allow_sell: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.delete_hidden ? false : true),
            delete_hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.delete_hidden),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.units[0].price),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.units[0].barcode),
            describe: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.describe),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.units[0].unit),
            time_warning: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.time_warning),
            id_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.data.id_category, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
    }
    // Tự động tạo barcode và lưu
    setBarcode() {
        let newbarcode = '';
        for (let index = 0; index < 12; index++) {
            newbarcode += Math.floor(Math.random() * 10);
        }
        this.checkBarcode(newbarcode);
        if (this.barcode) {
            this.comboForm.controls['barcode'].setValue(newbarcode);
            this.updateCombo({ units: [{
                        barcode: this.comboForm.value['barcode'],
                        price: this.comboForm.value['price'],
                        unit: this.comboForm.value['unit'],
                        ratio: 1
                    }] });
        }
    }
    // Kiểm tra mã barcode vừa tạo đã tồn tại chưa ( chưa: true, đã tồn tại: false)
    checkBarcode(barcode) {
        let detailproduct = this.vhQueryCafe.getlocalDetailProduct_byBarcode_Cafe(barcode);
        if (detailproduct == null) {
            this.barcode = true;
        }
        else {
            this.barcode = false;
        }
    }
    // Cập nhật combo
    updateCombo(object) {
        if (object.hasOwnProperty('allow_sell')) {
            object = { delete_hidden: !object.allow_sell };
        }
        if (this.comboForm.valid)
            this.vhQueryCafe.updateProduct_Cafe(this.data._id, object);
    }
    //  hàm Cập nhật giá tổng của combo
    comboPrice(dish) {
        console.log(dish);
        if (dish) {
            let price = '';
            if (dish.id_subproduct) {
                price = this.editPrice['product-' + dish.id_subproduct].getRawValue();
            }
            else {
                price = this.editPrice['product-' + dish._id].getRawValue();
            }
            dish.price = price ? parseFloat(price) : dish.price_origin;
        }
        let price = 0;
        for (let product of this.data.combos) {
            price = price + (product.price * product.quantity);
        }
        this.comboForm.controls['price'].setValue(price);
        this.updateCombo({ units: [{
                    barcode: this.comboForm.value['barcode'],
                    price: price,
                    unit: this.comboForm.value['unit'],
                    ratio: 1
                }] });
        if (dish)
            this.updateshow(this.data._id, dish);
    }
    // hàm cập nhật giá 1 sản phẩm khi thay đổi trong combo
    updatePrice(data) {
        let dataUpdate = this.data.combos.find(item => item.id_product == data.id_product);
        dataUpdate.price = data.price;
        dataUpdate.ratio = data.ratio;
        dataUpdate.unit = data.unit;
        this.updateshow(this.data._id, dataUpdate);
        this.comboPrice(data);
    }
    /**
    * mở modal xác nhận xóa combo
    * @example this.showModal
    */
    showModal() {
        this.isVisible = true;
    }
    /**
     * bắt sk nhấn nút ok modal xác nhận xóa combo
     * @example this.handleOk
     */
    handleOk() {
        this.isVisible = false;
        this.deleteCombo();
    }
    /**
     * đóng modal xác nhận xóa combo
     * @example this.handleCancel
     */
    handleCancel() {
        this.isVisible = false;
    }
    /**
     * xóa combo khỏi DB
     * @example this.deleteCombo();
     */
    deleteCombo() {
        this.vhComponent.showLoading('').then(() => {
            this.vhQueryCafe.deleteProduct_Cafe(this.data._id)
                .then((rsp) => {
                if (rsp.vcode === 0) {
                    if (this.comboForm.value["img"]) {
                        this.vhImage.deleteThumbnail(this.comboForm.value["img"]).then(() => {
                            this.vhComponent.showToast(2000, (this.languageService.translate("Product has been deleted successfully")), "success-toast");
                            this.vhComponent.hideLoading(0);
                            setTimeout(() => {
                                this.isVisible = false;
                                this.goBack();
                            }, 300);
                        });
                    }
                    else {
                        this.vhComponent.hideLoading(0);
                        this.vhComponent.alertMessageDesktop("success", (this.languageService.translate("Product has been deleted successfully")));
                        setTimeout(() => {
                            this.isVisible = false;
                            this.goBack();
                        }, 300);
                    }
                }
                else if (rsp.vcode === 1) {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.alertMessageDesktop("error", (this.languageService.translate("Bạn không thể xóa, vì sản phẩm đang liên kết với sản phẩm combo khác")));
                    this.goBack();
                }
                else if (rsp.vcode === 2) {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.alertMessageDesktop("error", (this.languageService.translate("Bạn không thể xóa, vì sản phẩm này đã phát sinh hóa đơn")));
                    this.goBack();
                }
            });
        });
    }
    /**
     * cập nhật sp trong combo
     * @example this.updateshow('DNSWIDHNBWIUDH', combo_product_selected)
     */
    updateshow(_id, food) {
        console.log(food);
        return this.vhQueryCafe.updateComboProduct(_id, food._id, {
            price: food.price,
            ratio: food.ratio
        }).then((bool) => {
            console.log('bool', bool);
        }, error => {
            console.log('error', error);
        });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/dishes/combo'], { state: this.dataRestore });
    }
    getFile() {
        document.getElementById("file-upload").click();
    }
    /** Lấy hình ảnh từ Desktop */
    onUpload(e) {
        const file = e.target.files[0];
        this.vhImage.getThumbnailFromDesktop(file, 128, 128, "products", this.comboForm.value.img || null).then(photoURL => {
            this.comboForm.controls["img"].setValue(photoURL);
            this.updateCombo({ img: this.comboForm.value.img });
            this.vhComponent.showToast(2000, (this.languageService.translate("Image was loaded successfully")), "success-toast");
        }, () => {
            this.vhComponent.showToast(2000, (this.languageService.translate("Image was failed")), "alert-toast");
        });
    }
    /**
     * Thêm danh mục
     */
    addCategory(categoryName) {
        var _a, _b;
        const value = categoryName.value ? (_b = (_a = categoryName.value) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.trim() : '';
        if (value) {
            // Kiểm tra xem danh mục đã tồn tại hay chưa
            let index = this.vhQueryCafe.getlocalCategorys()
                .filter(res => res.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO)
                .findIndex(item => this.vhAlgorithm.changeAlias(item.name).toLowerCase() == this.vhAlgorithm.changeAlias(value).toLowerCase());
            // Đã tồn tại
            if (index !== -1) {
                this.vhComponent.showToast(1500, this.languageService.translate("Category existed"), 'alert-toast');
                return;
            }
            // Chưa tồn tại thì thêm
            this.isAddingCategory = true;
            this.vhQueryCafe.addCategory({ name: value, type: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO }).then((res) => {
                console.log(res);
                this.categoryName.nativeElement.value = ''; // Reset input
                this.list_category.unshift(res); // Thêm vào đầu danh sách
                this.comboForm.controls['id_category'].setValue(res._id); // Chọn cái mới thêm
                this.vhComponent.showToast(2000, (this.languageService.translate("Category has been added successfully")), 'success-toast');
            }, err => {
                console.log(err);
                this.vhComponent.showToast(1500, this.languageService.translate("An eror occured while adding category. Please try again"), 'alert-toast');
            }).finally(() => {
                this.isAddingCategory = false;
            });
        }
        else {
            this.vhComponent.showToast(1500, this.languageService.translate('Category name is required'), 'alert-toast');
        }
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhImage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], viewQuery: function DetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.categoryName = _t.first);
    } }, decls: 118, vars: 78, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "combo"], [1, "combo-name"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "20", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "4", 1, "add-button"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], [1, "custom-scroll-bar", 2, "padding-top", "16px", "height", "87%", "overflow-y", "auto"], ["nz-form", "", 2, "height", "100%", 3, "formGroup"], ["nz-row", "", 2, "margin-bottom", "1.6%"], ["nz-col", "", "nzSpan", "3"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "bg-img", "center-all-content", 2, "cursor", "pointer", 3, "click"], ["id", "file-upload", "type", "file", "accept", ".png, .jpg", 2, "display", "none", 3, "change"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", 3, "ngStyle", "src"], ["nz-col", "", "nzSpan", "21"], ["nz-row", "", 2, "justify-content", "space-between", "height", "100%"], ["nz-col", "", "nzSpan", "9", 1, "combo-name-input", 2, "height", "77px"], [2, "margin-bottom", "0"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder", "blur"], ["combineTplName", ""], ["nz-col", "", "nzSpan", "14", 1, "combo-price-input"], [2, "display", "flex"], ["formControlName", "barcode", "nz-input", "", 3, "placeholder", "blur", "keyup"], ["qr", ""], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 3, "nzTooltipTitle", "click"], [1, "validation-errors"], ["class", "error-message", 4, "ngIf"], ["nz-row", "", 2, "justify-content", "space-between"], ["nz-col", "", "nzSpan", "12", 1, "small-size", "combo-warning"], [1, "label"], ["formControlName", "id_category", "nzShowSearch", "", "nzAllowClear", "", 3, "nzDropdownRender", "nzPlaceHolder", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["addCategoryTemplate", ""], ["nz-col", "", "nzSpan", "12"], [2, "margin-bottom", "2%"], ["formControlName", "unit", "nz-input", "", 3, "placeholder", "blur"], ["formControlName", "time_warning", "nz-input", "", "type", "number", 3, "placeholder", "blur"], ["nz-input", "", "formControlName", "describe", 2, "border-radius", "5px", 3, "placeholder", "nzAutosize", "blur"], ["nz-checkbox", "", "formControlName", "allow_sell", 3, "ngModelChange"], [1, "combo-component"], ["nz-row", "", 2, "padding-bottom", "15px"], ["nz-col", "", "nzSpan", "20"], [1, "large-size"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content"], ["nz-row", "", "class", "content-Component custom-scroll-bar", 4, "ngIf"], ["class", "combo-table", "style", "height: 83%;overflow: hidden;", 4, "ngIf"], [3, "nzVisible", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [4, "ngIf"], [1, "error-message"], ["color", "vh-red"], [3, "nzValue", "nzLabel"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "6px", "padding", "0px 6px 11px 6px"], ["nz-input", "", "type", "text", 3, "placeholder"], ["categoryName", ""], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-row", "", 1, "content-Component", "custom-scroll-bar"], [1, "no-data"], [1, "combo-table", 2, "height", "83%", "overflow", "hidden"], ["nzShowSizeChanger", "", 3, "nzScroll", "nzNoResult", "nzData", "nzShowPagination"], ["cf", ""], ["nzWidth", "10%", "nzAlign", "center"], ["nzWidth", "25%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "15%", "nzAlign", "right"], [2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], [4, "ngFor", "ngForOf"], ["nzAlign", "center", 2, "padding", "0"], [2, "width", "36px", 3, "src"], ["nzShowSearch", "", 2, "width", "100%", 3, "ngModel", "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzAlign", "center"], ["type", "text", "nz-input", "", 3, "value", "ngClass", "blur", 4, "ngIf"], ["nzAlign", "right"], [3, "nzLabel", "nzValue"], ["type", "text", "nz-input", "", 3, "value", "ngClass", "blur"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_13_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_23_listener() { return ctx.getFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function DetailComponent_Template_input_change_24_listener($event) { return ctx.onUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "nz-form-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "nz-form-control", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DetailComponent_Template_input_blur_36_listener() { return ctx.updateCombo({ name: ctx.comboForm.value.name }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, DetailComponent_ng_template_38_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "nz-form-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "nz-input-group", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DetailComponent_Template_input_blur_48_listener() { return ctx.updateCombo({ units: [{ barcode: ctx.comboForm.value["barcode"], price: ctx.comboForm.value["price"], unit: ctx.comboForm.value["unit"], ratio: 1 }] }); })("keyup", function DetailComponent_Template_input_keyup_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49); return ctx.checkBarcode(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DetailComponent_Template_i_click_51_listener() { return ctx.setBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, DetailComponent_div_55_Template, 4, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "b", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "nz-form-control", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "nz-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_nz_select_ngModelChange_64_listener($event) { return ctx.updateCombo({ id_category: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, DetailComponent_nz_option_66_Template, 1, 2, "nz-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, DetailComponent_ng_template_67_Template, 8, 8, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "nz-form-item", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DetailComponent_Template_input_blur_78_listener() { return ctx.updateCombo({ units: [{ barcode: ctx.comboForm.value["barcode"], price: ctx.comboForm.value["price"], unit: ctx.comboForm.value["unit"], ratio: 1 }] }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "nz-form-item", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DetailComponent_Template_input_blur_88_listener() { return ctx.updateCombo({ time_warning: ctx.comboForm.value.time_warning }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "nz-form-item", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "textarea", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function DetailComponent_Template_textarea_blur_98_listener() { return ctx.updateCombo({ describe: ctx.comboForm.value.describe }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_label_ngModelChange_101_listener($event) { return ctx.updateCombo({ allow_sell: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](112, DetailComponent_div_112_Template, 5, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, DetailComponent_div_113_Template, 42, 31, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "nz-modal", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function DetailComponent_Template_nz_modal_nzVisibleChange_114_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function DetailComponent_Template_nz_modal_nzOnCancel_114_listener() { return ctx.handleCancel(); })("nzOnOk", function DetailComponent_Template_nz_modal_nzOnOk_114_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, DetailComponent_p_117_Template, 3, 3, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 33, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 35, "Combo detail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 37, "Delete"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.comboForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](75, _c2, ctx.comboForm.value.img ? "100%" : "60px"))("src", ctx.comboForm.value.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 39, "Combo name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 41, "Enter combo name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 43, "Barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 45, "Enter manually or use the barcode scanner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 47, "Generate barcodes automatically"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 49, "Category"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 51, "Please select category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownRender", _r5)("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](65, 53, "Please select category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 55, "Unit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 57, "Enter unit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](84, 59, "Warning timeout (minute)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 61, "Enter warning timeout (minutes)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](94, 63, "Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](99, 65, "Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](77, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](103, 67, "Available to sell"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 69, "Combo components"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.data.combos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.combos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](115, 71, "Confirm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](116, 73, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzAutosizeDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalContentDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonText, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzOptionComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__.NzDividerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTbodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-row-gap: 16px;\n  row-gap: 16px;\n  grid-column-gap: 16px;\n  column-gap: 16px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 50% 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .combo-subs[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/2;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n  font-weight: 500;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-left: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 4px;\n  height: 7vw;\n  background: #f2f2f2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 10px;\n  padding: 4px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #8e8e93;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green);\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n  font-weight: 500;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .ant-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .row-checkbox[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-name[_ngcontent-%COMP%]   .row-checkbox[_ngcontent-%COMP%]   .center-align[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .content-component[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  height: 86%;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-divider-horizontal[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%] {\n  padding: 12px 0 12px 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: black !important;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n  font-style: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%]   .combo-component[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   .cus-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n.ant-btn[_ngcontent-%COMP%]:active {\n  color: var(--ion-color-vh-green);\n}\n.content-size[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f5f5f5;\n  border-radius: 10px;\n}\n.content-size[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  background-color: #f5f5f5;\n}\nnz-list[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\nnz-list[_ngcontent-%COMP%]   nz-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.ant-avatar[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\nnz-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #fcf9f9;\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 35vh;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.infinite-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  \n}\n.custom-scroll-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n.items-food[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.items-food[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 0 !important;\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 35vh;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.infinite-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  \n}\n.cdk-virtual-scroll-content-wrapper[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.combo-name-input[_ngcontent-%COMP%] {\n  max-width: 40.5%;\n  flex-basis: 40.5% !important;\n}\n.combo-price-input[_ngcontent-%COMP%] {\n  flex-basis: 57.333333%;\n}\n.combo-warning[_ngcontent-%COMP%] {\n  max-width: 48%;\n  flex-basis: 48%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0ksZUFBQTtBQUVOO0FBRUE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQUVOO0FBRE07RUFHSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDVjtBQUNNO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDVjtBQUFVO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUVkO0FBQVU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFFZDtBQUFVO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVkO0FBRGM7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUdsQjtBQURjO0VBQ0ksWUFBQTtBQUdsQjtBQUFVO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUVkO0FBQVU7RUFDSSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUVkO0FBQVU7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBRWQ7QUFBVTtFQUNJLFdBQUE7RUFFQSw2QkFBQTtBQUNkO0FBQ1U7RUFDSSxpQkFBQTtBQUNkO0FBQWM7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFbEI7QUFFTTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUFWO0FBQ1U7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNkO0FBQ1U7RUFDSSxvQkFBQTtBQUNkO0FBQ1U7RUFDSSxpQ0FBQTtBQUNkO0FBQWM7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0FBRWxCO0FBQWM7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBRWxCO0FBQWM7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVsQjtBQUtBO0VBQ0UsZ0NBQUE7QUFGRjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFGRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0FBSEY7QUFJRTtFQUNJLGlCQUFBO0FBRk47QUFNQTtFQUNFLFVBQUE7RUFDQSxrQ0FBQTtBQUhGO0FBTUE7RUFDRSwyQkFBQTtBQUhGO0FBTUE7RUFDRSx5QkFBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtBQUhGO0FBTUE7RUFDRSxxQkFBQTtFQUNBLGtDQUFBO0FBSEY7QUFNQTtFQUNFLFVBQUE7QUFIRjtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBSUU7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7QUFGTjtBQU1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7QUFIRjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxrQ0FBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0FBSEY7QUFNQTtFQUNFLHNCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSEYiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAuY29tYm8ge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHJvdy1nYXA6IDE2cHg7XHJcbiAgICAgIGNvbHVtbi1nYXA6IDE2cHg7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XHJcbiAgICAgICYtbmFtZSxcclxuICAgICAgJi1zdWJzLFxyXG4gICAgICAmLWNvbXBvbmVudCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3dnc7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGU4ZTkzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYWRkIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbnQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb3ctY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIC5jZW50ZXItYWxpZ24ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWNvbXBvbmVudCB7XHJcbiAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgICAgICAgIC5jb250ZW50LWNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4NiU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAwIDEycHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmN1cy1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYW50LWJ0bjphY3RpdmUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcblxyXG4uY29udGVudC1zaXplOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1zaXplOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4vL21vZGFsIGNvbXBvbmVudFxyXG5uei1saXN0IHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIC8qIEZvciBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIG56LWxpc3QtaXRlbS1tZXRhLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG5uei1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcblxyXG4uYW50LWF2YXRhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uei1saXN0LWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI0OSwgMjQ5KTtcclxufVxyXG5cclxuLmluZmluaXRlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIC8qIEZvciBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG59XHJcblxyXG4uaW5maW5pdGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi5pdGVtcy1mb29kIHtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGlucHV0IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmluZmluaXRlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIC8qIEZvciBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG59XHJcblxyXG4uaW5maW5pdGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbn1cclxuXHJcbi5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jb21iby1uYW1lLWlucHV0IHtcclxuICBtYXgtd2lkdGg6IDQwLjUlO1xyXG4gIGZsZXgtYmFzaXM6IDQwLjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21iby1wcmljZS1pbnB1dCB7XHJcbiAgZmxleC1iYXNpczogNTcuMzMzMzMzJTtcclxufVxyXG5cclxuLmNvbWJvLXdhcm5pbmcge1xyXG4gIG1heC13aWR0aDogNDglO1xyXG4gIGZsZXgtYmFzaXM6IDQ4JTtcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_dishes_combo_combo_module_ts.js.map