"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_service_services-list_services-list_module_ts"],{

/***/ 62586:
/*!*********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/service/services-list/add-service/add-service.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddServiceComponent": () => (/* binding */ AddServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_services_cleave_js_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/cleave-js.service */ 22888);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/empty */ 36641);
/* harmony import */ var _special_time_special_time_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../special-time/special-time.component */ 12892);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





























const _c0 = ["categoryName"];
function AddServiceComponent_ng_template_32_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Service name is required"), " ");
} }
function AddServiceComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_template_32_ng_container_0_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r15.hasError("required"));
} }
function AddServiceComponent_nz_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, option_r17.name))("nzValue", option_r17._id);
} }
function AddServiceComponent_ng_template_44_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Service type is required"));
} }
function AddServiceComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_template_44_ng_container_0_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r18.hasError("required"));
} }
function AddServiceComponent_nz_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 36);
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", option_r20._id)("nzLabel", option_r20.name);
} }
function AddServiceComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddServiceComponent_ng_template_57_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.addCategory(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "Enter category name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx_r7.isAddingCategory)("disabled", !_r21.value || _r21.value.trim() === "" || ctx_r7.isAddingCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, "Add"), " ");
} }
function AddServiceComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-text", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Invalid barcode"));
} }
function AddServiceComponent_ng_container_75_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Unit is required"));
} }
function AddServiceComponent_ng_container_75_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_75_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r29.hasError("required"));
} }
function AddServiceComponent_ng_container_75_ng_template_23_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function AddServiceComponent_ng_container_75_ng_template_23_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function AddServiceComponent_ng_container_75_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_75_ng_template_23_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_75_ng_template_23_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r31.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r31.hasError("pattern"));
} }
function AddServiceComponent_ng_container_75_div_25_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function AddServiceComponent_ng_container_75_div_25_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function AddServiceComponent_ng_container_75_div_25_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_75_div_25_ng_template_9_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_75_div_25_ng_template_9_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r36.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r36.hasError("pattern"));
} }
function AddServiceComponent_ng_container_75_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddServiceComponent_ng_container_75_div_25_ng_template_9_Template, 2, 2, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "Service price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r34);
} }
function AddServiceComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddServiceComponent_ng_container_75_ng_template_12_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AddServiceComponent_ng_container_75_ng_template_23_Template, 2, 2, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AddServiceComponent_ng_container_75_div_25_Template, 11, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 6, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 8, "Enter unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 10, "Service price"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.management_product_price2);
} }
function AddServiceComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "Warning timeout (minute)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 4, "Enter warning timeout (minutes)"));
} }
function AddServiceComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "_Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "Priority order for calculating charges: First time block => Special time block => Merge block => Regular time."), "");
} }
function AddServiceComponent_ng_container_84_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function AddServiceComponent_ng_container_84_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function AddServiceComponent_ng_container_84_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_ng_template_16_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_ng_template_16_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r51.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r51.hasError("pattern"));
} }
function AddServiceComponent_ng_container_84_div_18_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function AddServiceComponent_ng_container_84_div_18_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function AddServiceComponent_ng_container_84_div_18_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_div_18_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_div_18_ng_template_8_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r56.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r56.hasError("pattern"));
} }
function AddServiceComponent_ng_container_84_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-form-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddServiceComponent_ng_container_84_div_18_ng_template_8_Template, 2, 2, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Selling price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r54);
} }
function AddServiceComponent_ng_container_84_ng_template_29_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time block is required"));
} }
function AddServiceComponent_ng_container_84_ng_template_29_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid time block"));
} }
function AddServiceComponent_ng_container_84_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_ng_template_29_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_ng_template_29_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r59.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r59.hasError("min"));
} }
function AddServiceComponent_ng_container_84_nz_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const option_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, option_r62.name)))("nzValue", option_r62._id);
} }
function AddServiceComponent_ng_container_84_ng_template_35_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time unit is required"));
} }
function AddServiceComponent_ng_container_84_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_ng_template_35_ng_container_0_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r63.hasError("required"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_ng_container_50_ng_template_9_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_ng_container_50_ng_template_9_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r70.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r70.hasError("pattern"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_div_11_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_div_11_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_div_11_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_ng_container_50_div_11_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_ng_container_50_div_11_ng_template_8_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r75.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r75.hasError("pattern"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-form-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddServiceComponent_ng_container_84_ng_container_50_div_11_ng_template_8_Template, 2, 2, "ng-template", null, 79, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Selling price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r73);
} }
function AddServiceComponent_ng_container_84_ng_container_50_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Quantity is required"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid quantity"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_ng_container_50_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_ng_container_50_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r78.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r78.hasError("min"));
} }
function AddServiceComponent_ng_container_84_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddServiceComponent_ng_container_84_ng_container_50_ng_template_9_Template, 2, 2, "ng-template", null, 75, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddServiceComponent_ng_container_84_ng_container_50_div_11_Template, 10, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AddServiceComponent_ng_container_84_ng_container_50_ng_template_22_Template, 2, 2, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, "Selling price"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r47.management_product_price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 8, "Number of merged blocks"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 10, "Enter quantity"));
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_div_58_ng_template_9_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_div_58_ng_template_9_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r89.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r89.hasError("pattern"));
} }
function AddServiceComponent_ng_container_84_div_58_div_11_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function AddServiceComponent_ng_container_84_div_58_div_11_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function AddServiceComponent_ng_container_84_div_58_div_11_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_div_58_div_11_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_div_58_div_11_ng_template_8_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r94.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r94.hasError("pattern"));
} }
function AddServiceComponent_ng_container_84_div_58_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-form-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddServiceComponent_ng_container_84_div_58_div_11_ng_template_8_Template, 2, 2, "ng-template", null, 86, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Selling price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r92);
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time is required"));
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid time"));
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_div_58_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_div_58_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r97.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r97.hasError("min"));
} }
function AddServiceComponent_ng_container_84_div_58_nz_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const option_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, option_r100.name)))("nzValue", option_r100._id);
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time unit is required"));
} }
function AddServiceComponent_ng_container_84_div_58_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddServiceComponent_ng_container_84_div_58_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 29);
} if (rf & 2) {
    const control_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r101.hasError("required"));
} }
function AddServiceComponent_ng_container_84_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddServiceComponent_ng_container_84_div_58_ng_template_9_Template, 2, 2, "ng-template", null, 82, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddServiceComponent_ng_container_84_div_58_div_11_Template, 10, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AddServiceComponent_ng_container_84_div_58_ng_template_22_Template, 2, 2, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "nz-form-item", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nz-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AddServiceComponent_ng_container_84_div_58_nz_option_27_Template, 3, 6, "nz-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddServiceComponent_ng_container_84_div_58_ng_template_28_Template, 1, 1, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 9, "Selling price"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r48.management_product_price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, "First usage time"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 13, "Enter time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r48.time_unit_list);
} }
function AddServiceComponent_ng_container_84_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddServiceComponent_ng_container_84_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r103.isShowModalSpecialTime = true; return ctx_r103.dataSpecialTimeEdit = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Add"), " ");
} }
function AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Whole day"), " ");
} }
function AddServiceComponent_ng_container_84_div_68_tr_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
} if (rf & 2) {
    const specialTime_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r111.convertMinutesToTime(specialTime_r107.value.specific_time.from_minute), " - ", ctx_r111.convertMinutesToTime(specialTime_r107.value.specific_time.to_minute), " ");
} }
function AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_8_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_8_ng_container_1_span_4_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const day_r115 = ctx.$implicit;
    const last_r116 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, day_r115)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !last_r116);
} }
function AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_8_ng_container_1_Template, 5, 6, "ng-container", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const specialTime_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", specialTime_r107.value.days_of_week);
} }
function AddServiceComponent_ng_container_84_div_68_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_4_Template, 3, 3, "ng-container", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddServiceComponent_ng_container_84_div_68_tr_23_ng_template_5_Template, 1, 2, "ng-template", null, 102, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddServiceComponent_ng_container_84_div_68_tr_23_ng_container_8_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddServiceComponent_ng_container_84_div_68_tr_23_Template_i_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const i_r108 = restoredCtx.index; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r119.editSpecialTime(i_r108); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnConfirm", function AddServiceComponent_ng_container_84_div_68_tr_23_Template_span_nzOnConfirm_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const i_r108 = restoredCtx.index; const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r121.deleteSpecialTime(i_r108); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const specialTime_r107 = ctx.$implicit;
    const i_r108 = ctx.index;
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](specialTime_r107.value.time_slot_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", specialTime_r107.value.specific_time.from_minute === 0 && specialTime_r107.value.specific_time.to_minute === 1440)("ngIfElse", _r110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", specialTime_r107.value.days_of_week && specialTime_r107.value.days_of_week.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"]("", ctx_r105.vhAlgorithm.vhcurrencyunit(specialTime_r107.value.price), " ", ctx_r105.currencySymbol, " / ", ctx_r105.productServiceForm.value.time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 10, ctx_r105.productServiceForm.value.unit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 12, "Are you sure to delete this special time?"));
} }
function AddServiceComponent_ng_container_84_div_68_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-embed-empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No special times available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddServiceComponent_ng_container_84_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-table", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](22, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AddServiceComponent_ng_container_84_div_68_tr_23_Template, 17, 14, "tr", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AddServiceComponent_ng_container_84_div_68_tr_24_Template, 4, 0, "tr", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzShowPagination", false)("nzBordered", true)("nzData", ctx_r50.specialTimesArray.controls)("nzNoResult", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 10, "Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 12, "Time block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 14, "Days of the week"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 16, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r50.specialTimesArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.specialTimesArray.length === 0);
} }
function AddServiceComponent_ng_container_84_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "nz-form-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddServiceComponent_ng_container_84_ng_template_16_Template, 2, 2, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AddServiceComponent_ng_container_84_div_18_Template, 10, 4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "nz-form-item", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddServiceComponent_ng_container_84_ng_template_29_Template, 2, 2, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "nz-form-item", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "nz-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "nz-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AddServiceComponent_ng_container_84_nz_option_34_Template, 3, 6, "nz-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, AddServiceComponent_ng_container_84_ng_template_35_Template, 1, 1, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "nz-switch", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddServiceComponent_ng_container_84_Template_nz_switch_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r122.changeMergeBlock($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, AddServiceComponent_ng_container_84_ng_container_50_Template, 24, 12, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "nz-switch", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddServiceComponent_ng_container_84_Template_nz_switch_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r123); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r124.changeFirstTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, AddServiceComponent_ng_container_84_div_58_Template, 30, 15, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, AddServiceComponent_ng_container_84_button_66_Template, 4, 3, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "nz-switch", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, AddServiceComponent_ng_container_84_div_68_Template, 25, 18, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30);
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 19, "Regular selling time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 21, "Selling price"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.management_product_price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 23, "Apply for each time block"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 25, "Enter time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.time_unit_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 27, "_Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 29, "Usage time, if less than the time set for regular selling price, will be rounded up to the time set for the regular selling price."), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 31, "Merge block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_merge_block);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 33, "First hour"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_first_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](64, 35, "Special time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_special_times);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_special_times);
} }
function AddServiceComponent_app_special_time_85_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-special-time", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClose", function AddServiceComponent_app_special_time_85_Template_app_special_time_onClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r125.isShowModalSpecialTime = false; })("onOk", function AddServiceComponent_app_special_time_85_Template_app_special_time_onOk_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r127.isShowModalSpecialTime = false; return ctx_r127.onOkSpecialTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r14.dataSpecialTimeEdit)("specialTimes", ctx_r14.productServiceForm.get("special_times").value);
} }
const _c1 = function (a0) { return { opacity: a0 }; };
const _c2 = function (a0) { return { width: a0 }; };
class AddServiceComponent {
    constructor(router, vhImage, vhAlgorithm, vhComponent, languageService, vhQueryCafe, cleaveJsService) {
        this.router = router;
        this.vhImage = vhImage;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.cleaveJsService = cleaveJsService;
        this.barcode = false;
        this.list_category = [];
        this.list_barcode = [];
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.management_product_price2 = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').management_product_price2;
        this.createProd = false;
        /** Danh sách loại dịch vụ */
        this.item_type_list = [
            { _id: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE, name: 'Charge by work' },
            { _id: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME, name: 'Charge by time' },
        ];
        /** Danh sách loại khoảng thời gian */
        this.time_unit_list = [
            { _id: 'day', name: 'Day' },
            { _id: 'hour', name: 'Hour' },
            { _id: 'minute', name: 'Minute' },
            // { _id: 'second', name: 'Second' },
        ];
        /** Có sử dụng Giờ đầu tiên hay không */
        this.use_first_time = false;
        /** Có sử dụng Giờ đặc biệt hay không */
        this.use_special_time = false;
        /** Có hiện modal chọn thời gian đặc biệt hay không */
        this.isShowModalSpecialTime = false;
        /** Ký hiệu tiền tệ. Ví dụ 'VND' */
        this.currencySymbol = JSON.parse(localStorage.getItem('vhsales_currencyFormat')).symbol.text;
        /** Dữ liệu thời gian đặc biệt để edit truyền vào modal */
        this.dataSpecialTimeEdit = null;
        /** Validator cho trường giá tiền */
        this.PRICE_VALIDATOR = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)'),
        ];
        this.VhType = src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType;
        /** Nếu là true thì là đang thêm danh mục, dùng để hiển thị trạng thái loading, tránh bị nhấn nhiều lần */
        this.isAddingCategory = false;
    }
    ngOnInit() {
        this.initForm();
        this.initData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.price = this.vhAlgorithm.vhnumeral('.price');
            if (this.management_product_price2) {
                this.price2 = this.vhAlgorithm.vhnumeral('.price2');
            }
        });
    }
    ngOnDestroy() {
        if (!this.createProd && this.productServiceForm.value['img'])
            this.vhImage
                .deleteThumbnail([this.productServiceForm.value['img']])
                .then(() => { });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/service/service-list'], {
            state: this.dataRestore,
        });
    }
    /**
     * khởi tạo các trường của dịch vụ vào form
     * @example this.initForm()
     */
    initForm() {
        this.productServiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
            price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
            id_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            // allow_sell: new FormControl(true),
            delete_hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
            selling: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE),
            time_warning: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0),
            time_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])),
            is_merge_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            is_first_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            is_special_times: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            merge_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
                price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])),
            }),
            first_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
                price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
                unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('minute', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
                time_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])),
            }),
            special_times: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]),
        });
    }
    /** Getter cho special_times */
    get specialTimesArray() {
        return this.productServiceForm.get('special_times');
    }
    /** Getter cho merge_block */
    get mergeBlockGroup() {
        return this.productServiceForm.get('merge_block');
    }
    /** Getter cho first_time */
    get firstTimeGroup() {
        return this.productServiceForm.get('first_time');
    }
    initData() {
        this.list_category = this.vhQueryCafe.getlocalCategorys(2);
        this.vhQueryCafe.getlocalProducts().forEach((item) => {
            if (item.barcode)
                this.list_barcode.push(item);
        });
    }
    /**
     * tạo barcode tự động
     * @example this.changeBarcode()
     */
    changeBarcode() {
        let newbarcode = '';
        for (let index = 0; index < 12; index++) {
            newbarcode += Math.floor(Math.random() * 10);
        }
        if (!this.checkBarcode(newbarcode)) {
            this.productServiceForm.controls['barcode'].setValue(newbarcode);
        }
    }
    /**
     * kiểm tra barcode đã tồn tại chưa
     * @example this.checkBarcode()
     */
    checkBarcode(barcode) {
        let detailproduct = this.vhQueryCafe.getlocalDetailProduct_byBarcode_Cafe(barcode);
        if (detailproduct == null) {
            let index = this.list_barcode.findIndex((item) => item.barcode == barcode);
            if (index >= 0)
                this.barcode = true;
            else
                this.barcode = false;
        }
        else {
            this.barcode = true;
        }
        return this.barcode;
    }
    getFile() {
        document.getElementById('file-upload').click();
    }
    /** Lấy hình ảnh từ Desktop */
    onUpload(e) {
        const file = e.target.files[0];
        this.vhImage
            .getThumbnailFromDesktop(file, 256, 256, 'products', this.productServiceForm.value.img || null)
            .then((photoURL) => {
            this.productServiceForm.controls['img'].setValue(photoURL);
            this.vhComponent.showToast(2000, this.languageService.translate('Image was loaded successfully'), 'success-toast');
        }, () => {
            this.vhComponent.showToast(2000, this.languageService.translate('Image was failed'), 'alert-toast');
        });
    }
    /**Tạo mới dịch vụ */
    saveProduct(formValue) {
        let service = {
            name: formValue.name,
            time_warning: formValue.time_warning ? parseFloat(formValue.time_warning) : 0,
            img: formValue.img,
            id_category: formValue.id_category,
            // allow_sell: formValue.allow_sell,
            delete_hidden: formValue.delete_hidden,
            selling: formValue.selling,
            type: formValue.type,
            tax: 0,
            units: [
                {
                    unit: formValue.unit,
                    ratio: 1,
                    default: true,
                    price: parseFloat(this.price.getRawValue()),
                    price2: this.management_product_price2 ? parseFloat(this.price2.getRawValue()) : 0,
                    barcode: formValue.barcode,
                },
            ],
        };
        if (formValue.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
            // set lại units[0] dạng time
            service.units[0].price = parseFloat(this.cleaveJsService.getRawValue('.price'));
            service.units[0].price2 = this.management_product_price2 ? parseFloat(this.cleaveJsService.getRawValue('.price2')) : 0;
            service.units[0].time_block = formValue.time_block;
            // các trường is_merge_block, is_first_time, is_special_times
            service.units[0].is_merge_block = formValue.is_merge_block;
            service.units[0].is_first_time = formValue.is_first_time;
            service.units[0].is_special_times = formValue.is_special_times;
            // merge_block
            if (service.units[0].is_merge_block) {
                service.units[0].merge_block = {
                    price: parseFloat(this.cleaveJsService.getRawValue('.merge_block_price')),
                    price2: this.management_product_price2 ? parseFloat(this.cleaveJsService.getRawValue('.merge_block_price2')) : 0,
                    number: formValue.merge_block.number,
                };
            }
            // first_time
            if (formValue.is_first_time) {
                service.units[0].first_time = {
                    price: parseFloat(this.cleaveJsService.getRawValue('.first_time_price')),
                    price2: this.management_product_price2 ? parseFloat(this.cleaveJsService.getRawValue('.first_time_price2')) : 0,
                    unit: formValue.first_time.unit,
                    time_block: formValue.first_time.time_block,
                };
            }
            // special_times
            if (formValue.is_special_times) {
                service.units[0].special_times = [];
                this.specialTimesArray.controls.forEach((item) => {
                    let data = {
                        price: parseFloat(item.value.price),
                        price2: this.management_product_price2 ? parseFloat(item.value.price2) : 0,
                        time_slot_name: item.value.time_slot_name,
                        specific_time: {
                            from_minute: item.value.specific_time.from_minute,
                            to_minute: item.value.specific_time.to_minute,
                        },
                        days_of_week: item.value.days_of_week.map((day) => day),
                    };
                    service.units[0].special_times.push(data);
                });
            }
        }
        this.vhComponent.showLoading('').then(() => {
            this.vhQueryCafe.addProduct_Cafe(service).then((res) => {
                console.log(res);
                this.createProd = true;
                this.vhComponent.showToast(1000, service.name +
                    ' ' +
                    this.languageService.translate('has been added successfully'), 'success-toast');
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                    this.goBack();
                }, 300);
            }, (err) => {
                this.vhComponent.hideLoading(0);
                console.log(err);
                this.vhComponent.showToast(1500, this.languageService.translate('An error occurred while adding product. Please try again'), 'alert-toast');
            });
        });
    }
    /**
     * Khi thay đổi loại dịch vụ
     * @param event loại dịch vụ được chọn
     */
    onServiceTypeChange(event) {
        if (event == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
            this.productServiceForm.controls['unit'].setValue('minute');
            // thêm validator cho các trường
            this.addValidatorsToFields(this.productServiceForm, ['time_block'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])]);
            this.addValidatorsToFields(this.productServiceForm, ['is_merge_block', 'is_first_time', 'is_special_times'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            this.productServiceForm.controls['time_block'].setValue(1);
            this.productServiceForm.controls['is_merge_block'].setValue(false);
            this.productServiceForm.controls['is_first_time'].setValue(false);
            this.productServiceForm.controls['is_special_times'].setValue(false);
            this.productServiceForm.controls['merge_block'].get('price').setValue(0);
            this.productServiceForm.controls['merge_block'].get('price2').setValue(0);
            this.productServiceForm.controls['merge_block'].get('number').setValue(1);
            this.productServiceForm.controls['first_time'].get('price').setValue(0);
            this.productServiceForm.controls['first_time'].get('price2').setValue(0);
            this.productServiceForm.controls['first_time'].get('unit').setValue('minute');
            this.productServiceForm.controls['first_time'].get('time_block').setValue(1);
        }
        else {
            this.productServiceForm.controls['unit'].setValue('');
            // xóa validator cho các trường
            this.removeValidatorsFromFields(this.productServiceForm, ['time_block', 'is_merge_block', 'is_first_time', 'is_special_times']);
            this.removeValidatorsFromFields(this.mergeBlockGroup, ['price', 'price2', 'number']);
            this.removeValidatorsFromFields(this.firstTimeGroup, ['price', 'price2', 'unit', 'time_block']);
            this.specialTimesArray.clear();
            this.vhAlgorithm.waitingStack().then(() => {
                this.price = this.vhAlgorithm.vhnumeral('.price');
                if (this.management_product_price2) {
                    this.price2 = this.vhAlgorithm.vhnumeral('.price2');
                }
            });
        }
        this.initPriceCleave(event == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME, ['.price']);
        if (this.management_product_price2)
            this.initPriceCleave(event == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME, ['.price2']);
    }
    /**
     * Khi thay đổi Có gộp block hay không
     * @param event true là có gộp block, false là không
     */
    changeMergeBlock(event) {
        if (event) {
            this.addValidatorsToFields(this.mergeBlockGroup, ['price', 'price2'], this.PRICE_VALIDATOR);
            this.addValidatorsToFields(this.mergeBlockGroup, ['number'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
        }
        else {
            this.removeValidatorsFromFields(this.mergeBlockGroup, ['price', 'price2', 'number']);
        }
        this.initPriceCleave(event, ['.merge_block_price']);
        if (this.management_product_price2)
            this.initPriceCleave(event, ['.merge_block_price2']);
    }
    /**
     * Khi thay đổi Có sử dụng giờ đầu tiên hay không
     * @param event true là có sử dụng giờ đầu tiên, false là không
     */
    changeFirstTime(event) {
        if (event) {
            this.addValidatorsToFields(this.firstTimeGroup, ['price', 'price2'], this.PRICE_VALIDATOR);
            this.addValidatorsToFields(this.firstTimeGroup, ['unit'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            this.addValidatorsToFields(this.firstTimeGroup, ['time_block'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])]);
        }
        else {
            this.removeValidatorsFromFields(this.firstTimeGroup, ['price', 'price2', 'unit', 'time_block']);
        }
        this.initPriceCleave(event, ['.first_time_price']);
        if (this.management_product_price2)
            this.initPriceCleave(event, ['.first_time_price2']);
    }
    /**
     * Khởi tạo / Huỷ Cleave cho các trường giá tiền
     * @param event true là khởi tạo Cleave, false là huỷ Cleave
     * @param name tên của các trường cần khởi tạo Cleave
     */
    initPriceCleave(event, names) {
        if (event) {
            setTimeout(() => {
                this.cleaveJsService.createCleaves(names);
            }, 100);
        }
        else {
            this.cleaveJsService.destroyCleaves(names);
        }
    }
    /**
     * Nhận dữ liệu từ modal chọn thời gian đặc biệt
     * @param data object special_time được trả về. Nếu data có index thì là Edit, ngược lại là Add
     */
    onOkSpecialTime(data) {
        // Nếu có index thì là Edit
        if (data.index !== undefined) {
            // lấy days_of_week từ data và set
            const daysOfWeekArray = this.specialTimesArray.at(data.index).get('days_of_week');
            daysOfWeekArray.clear();
            (data.days_of_week || []).forEach((day) => {
                daysOfWeekArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(day));
            });
            this.specialTimesArray.at(data.index).patchValue({
                price: data.price,
                price2: this.management_product_price2 ? data.price2 : 0,
                time_slot_name: data.time_slot_name,
                specific_time: {
                    from_minute: data.specific_time.from_minute,
                    to_minute: data.specific_time.to_minute,
                },
            });
        }
        // Add
        else {
            // lấy days_of_week từ data
            const selectedDays = data.days_of_week || [];
            const daysOfWeekArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray(selectedDays.map((day) => new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(day)));
            this.specialTimesArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.price),
                price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.management_product_price2 ? data.price2 : 0),
                time_slot_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.time_slot_name),
                specific_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                    from_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.specific_time.from_minute),
                    to_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.specific_time.to_minute),
                }),
                days_of_week: daysOfWeekArray,
            }));
        }
    }
    /**
     * Chuyển từ phút sang giờ
     * @param minutes phút cần chuyển đổi
     * @returns chuỗi thời gian theo định dạng HH:mm
     * @example
     * convertMinutesToTime(90) => '01:30'
     */
    convertMinutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }
    /**
     * Chuyển đổi phút thành đối tượng Date
     * @param minutes Số phút cần chuyển đổi
     * @returns Đối tượng Date với giờ và phút đã được thiết lập
     *
     * @example
     * convertMinutesToDate(90) => Date object with hours = 1, minutes = 30
     * convertMinutesToDate(120) => Date object with hours = 2, minutes = 0
     */
    convertMinutesToDate(minutes) {
        const date = new Date();
        date.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0); // Set hours and minutes
        return date;
    }
    /**
     * Xóa thời gian đặc biệt
     * @param index index của thời gian đặc biệt cần xóa
     */
    deleteSpecialTime(index) {
        this.specialTimesArray.removeAt(index);
    }
    /**
     * Chỉnh sửa thời gian đặc biệt
     * @param index index của thời gian đặc biệt cần chỉnh sửa
     */
    editSpecialTime(index) {
        const specialTime = this.specialTimesArray.at(index).value;
        this.dataSpecialTimeEdit = JSON.parse(JSON.stringify(specialTime));
        this.dataSpecialTimeEdit.specific_time.from_minute = this.convertMinutesToDate(this.dataSpecialTimeEdit.specific_time.from_minute);
        this.dataSpecialTimeEdit.specific_time.to_minute = this.convertMinutesToDate(this.dataSpecialTimeEdit.specific_time.to_minute);
        this.dataSpecialTimeEdit.index = index;
        this.isShowModalSpecialTime = true;
    }
    /**
     * Thêm validator vào các trường trong FormGroup
     *
     * @param group FormGroup cần thêm validator.
     * @param fields Mảng tên trường mà validator sẽ được thêm vào.
     * @param validators Mảng các validator cần thêm.
     *
     * @example
     * addValidatorsToFields(this.productServiceForm, ['field1', 'field2'], [Validators.required]);
     * addValidatorsToFields(this.productServiceForm, ['field1', 'field2'], [Validators.required, Validators.minLength(3)]);
     */
    addValidatorsToFields(group, fields, validators) {
        fields.forEach((field) => {
            const control = group.get(field);
            if (control) {
                control.addValidators(validators);
                control.updateValueAndValidity();
            }
        });
    }
    /**
     * Xóa validator khỏi các trường trong FormGroup
     * Nếu không chỉ định validator, tất cả các validator sẽ bị xóa.
     *
     * @param group FormGroup cần xóa validator.
     * @param fields Mảng tên trường mà validator sẽ bị xóa.
     * @param validators (Optional) Các validator cần xóa. Nếu không cung cấp, tất cả các validator sẽ bị xóa.
     *
     * @example
     * removeValidatorsFromFields(this.productServiceForm, ['field1', 'field2']);
     * removeValidatorsFromFields(this.productServiceForm, ['field1', 'field2'], [Validators.required]);
     * removeValidatorsFromFields(this.productServiceForm, ['field1', 'field2'], [Validators.required, Validators.minLength(3)]);
     */
    removeValidatorsFromFields(group, fields, validators) {
        fields.forEach((field) => {
            const control = group.get(field);
            if (control) {
                // Xóa các validator đã chỉ định
                if (validators && validators.length > 0) {
                    validators.forEach((validator) => {
                        control.removeValidators(validator);
                    });
                }
                // Xóa tất cả các validator
                else {
                    control.clearValidators();
                }
                control.updateValueAndValidity();
            }
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
                .filter(res => res.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE)
                .findIndex(item => this.vhAlgorithm.changeAlias(item.name).toLowerCase() == this.vhAlgorithm.changeAlias(value).toLowerCase());
            // Đã tồn tại
            if (index !== -1) {
                this.vhComponent.showToast(1500, this.languageService.translate("Category existed"), 'alert-toast');
                return;
            }
            // Chưa tồn tại thì thêm
            this.isAddingCategory = true;
            this.vhQueryCafe.addCategory({ name: value, type: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE }).then((res) => {
                this.categoryName.nativeElement.value = ''; // Reset input
                this.list_category.unshift(res); // Thêm vào đầu danh sách
                this.productServiceForm.controls['id_category'].setValue(res._id); // Chọn cái mới thêm
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
AddServiceComponent.ɵfac = function AddServiceComponent_Factory(t) { return new (t || AddServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhImage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_services_cleave_js_service__WEBPACK_IMPORTED_MODULE_3__.CleaveJsService)); };
AddServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddServiceComponent, selectors: [["app-add-service"]], viewQuery: function AddServiceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.categoryName = _t.first);
    } }, decls: 86, vars: 62, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-form", "", 3, "formGroup"], [1, "custom-box"], ["nz-row", ""], ["nz-col", "", "nzSpan", "21", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "3", 1, "add-button"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "disabled", "ngStyle", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", 2, "margin-bottom", "24px"], [1, "bg-img", "center-all-content", 3, "click"], ["id", "file-upload", "type", "file", "accept", ".png, .jpg", 2, "display", "none", 3, "change"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", 3, "ngStyle", "src"], ["nz-col", "", "nzSpan", "12"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], ["nzShowSearch", "", "formControlName", "type", 3, "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["type", ""], ["formControlName", "id_category", "nzShowSearch", "", "nzAllowClear", "", 3, "nzDropdownRender", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["addCategoryTemplate", ""], ["formControlName", "barcode", "nz-input", "", 3, "placeholder", "keyup"], ["box", ""], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 2, "margin", "8px 0 0 8px", "cursor", "pointer", 3, "nzTooltipTitle", "click"], [1, "validation-errors"], ["class", "error-message", 4, "ngIf"], [4, "ngIf"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], ["nz-col", "", "nzSpan", "24"], ["nz-checkbox", "", "formControlName", "selling"], ["nz-col", "", "nzSpan", "24", "style", "margin-top: 12px;", 4, "ngIf"], [3, "data", "specialTimes", "onClose", "onOk", 4, "ngIf"], [3, "nzLabel", "nzValue"], [3, "nzValue", "nzLabel"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "6px", "padding", "0px 6px 11px 6px"], ["nz-input", "", "type", "text", 3, "placeholder"], ["categoryName", ""], ["nz-button", "", 3, "nzLoading", "disabled", "click"], [1, "error-message"], ["color", "vh-red"], ["formControlName", "unit", "nz-input", "", 3, "placeholder"], ["combineTplUnit", ""], ["formControlName", "price", "nz-input", "", "placeholder", "0", "required", "", "pattern", "(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)", 1, "price"], ["combineTplPriceImport", ""], ["type", "text", "maxlength", "15", "formControlName", "price2", "nz-input", "", "placeholder", "0", "required", "", "pattern", "(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)", 1, "price2"], ["formControlName", "time_warning", "nz-input", "", "type", "number", 3, "placeholder"], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "12px"], [1, "custom-box", 2, "margin-top", "12px"], ["nz-col", "", "nzSpan", "24", 2, "font-size", "1rem", "margin-bottom", "8px"], ["nz-col", "", "nzSpan", "6"], ["formControlName", "price", "nz-input", "", "placeholder", "0", "required", "", 1, "price"], ["price", ""], ["nz-col", "", "nzSpan", "6", 4, "ngIf"], ["nz-col", "", "nzSpan", "18"], ["formControlName", "time_block", "nz-input", "", "type", "number", 2, "width", "98%", 3, "min", "placeholder"], ["time_block", ""], ["formControlName", "unit", "nzShowSearch", ""], ["time_unit", ""], ["nz-col", "", "nzSpan", "24", 2, "margin-bottom", "12px"], ["nz-col", "", "nzSpan", "24", 2, "font-size", "1rem", "margin-bottom", "8px", "display", "flex", "align-items", "center", "justify-content", "space-between"], ["formControlName", "is_merge_block", 3, "ngModelChange"], ["formGroupName", "merge_block", 4, "ngIf"], ["formControlName", "is_first_time", 3, "ngModelChange"], ["formGroupName", "first_time", "nz-row", "", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "12px"], ["nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["formControlName", "is_special_times"], ["style", "height: 83%; overflow: hidden;", 4, "ngIf"], ["formControlName", "price2", "nz-input", "", "placeholder", "0", "required", "", 1, "price2"], ["price2", ""], ["formGroupName", "merge_block"], ["formControlName", "price", "nz-input", "", "placeholder", "0", "required", "", 1, "merge_block_price"], ["merge_block_price", ""], ["formControlName", "number", "nz-input", "", "type", "number", 2, "width", "98%", 3, "placeholder"], ["number", ""], ["formControlName", "price2", "nz-input", "", "placeholder", "0", "required", "", 1, "merge_block_price2"], ["merge_block_price2", ""], ["formGroupName", "first_time", "nz-row", ""], ["formControlName", "price", "nz-input", "", "placeholder", "0", "required", "", 1, "first_time_price"], ["first_time_price", ""], ["first_time_time_block", ""], ["first_time_unit", ""], ["formControlName", "price2", "nz-input", "", "placeholder", "0", "required", "", 1, "first_time_price2"], ["first_time_price2", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [2, "height", "83%", "overflow", "hidden"], [3, "nzShowPagination", "nzBordered", "nzData", "nzNoResult"], ["nzWidth", "25%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "30%", "nzAlign", "left"], ["nzWidth", "20%", "nzAlign", "center"], ["nzWidth", "10%", "nzAlign", "center"], ["formArrayName", "special_times", 2, "cursor", "pointer"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "ant-table-placeholder", 4, "ngIf"], [3, "formGroupName"], ["nzAlign", "center"], [4, "ngIf", "ngIfElse"], ["timeRange", ""], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "cus-icon", 2, "margin-right", "8px", "cursor", "pointer", 3, "click"], ["nz-button", "", "nzType", "default", "nz-popconfirm", "", "nzPopconfirmPlacement", "top", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 2, "cursor", "pointer"], [4, "ngFor", "ngForOf"], [1, "ant-table-placeholder"], ["colspan", "5"], [3, "data", "specialTimes", "onClose", "onOk"]], template: function AddServiceComponent_Template(rf, ctx) { if (rf & 1) {
        const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddServiceComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddServiceComponent_Template_button_click_13_listener() { return ctx.saveProduct(ctx.productServiceForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddServiceComponent_Template_div_click_19_listener() { return ctx.getFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddServiceComponent_Template_input_change_20_listener($event) { return ctx.onUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "b", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AddServiceComponent_ng_template_32_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddServiceComponent_Template_nz_select_ngModelChange_41_listener($event) { return ctx.onServiceTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, AddServiceComponent_nz_option_43_Template, 2, 4, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, AddServiceComponent_ng_template_44_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "b", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "nz-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, AddServiceComponent_nz_option_56_Template, 1, 2, "nz-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, AddServiceComponent_ng_template_57_Template, 8, 8, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "b", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AddServiceComponent_Template_input_keyup_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r128); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68); return ctx.checkBarcode(_r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddServiceComponent_Template_i_click_70_listener() { return ctx.changeBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, AddServiceComponent_div_74_Template, 4, 3, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, AddServiceComponent_ng_container_75_Template, 26, 12, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, AddServiceComponent_div_76_Template, 11, 6, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, AddServiceComponent_div_83_Template, 8, 6, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, AddServiceComponent_ng_container_84_Template, 69, 37, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, AddServiceComponent_app_special_time_85_Template, 1, 2, "app-special-time", 34);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](45);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 30, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.productServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 32, "Add service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.productServiceForm.invalid || ctx.barcode)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](58, _c1, ctx.productServiceForm.invalid || ctx.barcode ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 34, "Save"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](60, _c2, ctx.productServiceForm.value.img ? "100%" : "60px"))("src", ctx.productServiceForm.value.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 36, "Service name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 38, "Enter service name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 40, "Service type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 42, "Please select service type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.item_type_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 44, "Category"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 46, "Please select category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDropdownRender", _r6)("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 48, "Please select category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.list_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](63, 50, "Barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 52, "Enter manually or use the barcode scanner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](71, 54, "Generate barcodes automatically"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICE);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICE);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](82, 56, "Favorite"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICETIME);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICETIME);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowModalSpecialTime);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__.NzCheckboxComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzOptionComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__.NzDividerComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTbodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_25__.NzPopconfirmDirective, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__.NzEmbedEmptyComponent, _special_time_special_time_component__WEBPACK_IMPORTED_MODULE_4__.SpecialTimeComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  height: 95%;\n  overflow: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green);\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  cursor: pointer;\n  background: #f2f2f2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #8e8e93;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-select[_ngcontent-%COMP%] {\n  width: 90%;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.custom-box[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  padding: 16px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0U7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFTjtBQUFJO0VBQ0UsWUFBQTtBQUVOO0FBQ0U7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0U7RUFDRSxVQUFBO0VBRUEsNkJBQUE7QUFBSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjtBQUlBO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURGIiwiZmlsZSI6ImFkZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLWFkZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5iZy1pbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgIGNvbG9yOiAjOGU4ZTkzO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hbnQtc2VsZWN0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWJveCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 4005:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/service/services-list/create-data-service/create-data-service.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateDataServiceComponent": () => (/* binding */ CreateDataServiceComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);























function CreateDataServiceComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, "_unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "_price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 7, "_barcode"));
  }
}

function CreateDataServiceComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 13, "_barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 15, "_price_regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 17, "_time_block_regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 19, "_unit_regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 21, "_is_merge_block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 23, "_price_merge_block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 25, "_merge_block_quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 27, "_is_first_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 29, "_price_first_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 31, "_time_block_first_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 33, "_unit_first_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 35, "_is_special_times"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 37, "_special_times"));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r11.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_6_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.value["status_name"] == true);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r15.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_7_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r15 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("name").hasError(validation_r15.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r19.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_11_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r19 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("category").hasError(validation_r19.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_12_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r25.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_12_ng_container_7_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r25 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("price").hasError(validation_r25.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_12_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r29.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_12_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_12_ng_container_11_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.value["status_barcode"] == true);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CreateDataServiceComponent_tr_55_ng_container_12_ng_container_7_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_12_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r33.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreateDataServiceComponent_tr_55_ng_container_12_ng_container_11_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, "_unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "_price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.validation_messages.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, "_barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.validation_messages.status_barcode);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r45.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_4_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.value["status_barcode"] == true);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r49.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_8_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r49 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("price").hasError(validation_r49.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r53.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_12_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r53 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("time_block").hasError(validation_r53.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const u_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", u_r57._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, u_r57.name)));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r60.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_5_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r60 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("merge_block.price").hasError(validation_r60.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r64.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_9_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r64 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("merge_block.number").hasError(validation_r64.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r68.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_5_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_Template_input_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r70.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_ng_container_9_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "_price_regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r40.validation_messages.merge_block_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, "_merge_block_quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r40.validation_messages.merge_block_number);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r74.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_5_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r74 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("first_time.price").hasError(validation_r74.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const validation_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r78.message);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_9_div_1_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validation_r78 = ctx.$implicit;
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("first_time.time_block").hasError(validation_r78.type));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const u_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", u_r82._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, u_r82.name)));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r83.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_5_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_Template_input_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r85.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_ng_container_9_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_Template_select_change_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r86.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_option_12_Template, 4, 6, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "_price_first_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r42.validation_messages.first_time_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, "_time_block_first_time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r42.validation_messages.first_time_time_block);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r42.time_unit_list);
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, form_r4.get("special_times").errors["invalidFormat"]));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "textarea", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_ng_container_27_Template_textarea_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r89.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_27_div_4_Template, 4, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "_special_times"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("special_times").hasError("invalidFormat"));
  }
}

function CreateDataServiceComponent_tr_55_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r92.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_4_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r94.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_8_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_Template_input_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r95.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_12_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_Template_select_change_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r96.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CreateDataServiceComponent_tr_55_ng_container_13_option_15_Template, 4, 6, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_Template_input_change_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r97.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_18_Template, 3, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_19_Template, 10, 8, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_Template_input_change_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r98.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_22_Template, 4, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_23_Template, 13, 9, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_ng_container_13_Template_input_change_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r93);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r99.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_26_Template, 2, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CreateDataServiceComponent_tr_55_ng_container_13_ng_container_27_Template, 5, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const form_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 13, "_barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.validation_messages.status_barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 15, "_price_regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.validation_messages.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 17, "_time_block_regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.validation_messages.time_block);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.time_unit_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !form_r4.get("is_merge_block").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("is_merge_block").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !form_r4.get("is_first_time").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("is_first_time").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !form_r4.get("is_special_times").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", form_r4.get("is_special_times").value);
  }
}

function CreateDataServiceComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_tr_55_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r102);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r101.checkModelChange();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreateDataServiceComponent_tr_55_ng_container_6_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CreateDataServiceComponent_tr_55_ng_container_7_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreateDataServiceComponent_tr_55_ng_container_11_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CreateDataServiceComponent_tr_55_ng_container_12_Template, 12, 11, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, CreateDataServiceComponent_tr_55_ng_container_13_Template, 28, 19, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const form_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", form_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, "_name_service"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.validation_messages.status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.validation_messages.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 11, "_category"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.validation_messages.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.file_import_is_servicetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.file_import_is_servicetime);
  }
}

const _c0 = function () {
  return [];
};

class CreateDataServiceComponent {
  constructor(vhQueryCafe, vhAlgorithm, vhComponent, router, languageService, nzModalService, platform, vhQuery) {
    this.vhQueryCafe = vhQueryCafe;
    this.vhAlgorithm = vhAlgorithm;
    this.vhComponent = vhComponent;
    this.router = router;
    this.languageService = languageService;
    this.nzModalService = nzModalService;
    this.platform = platform;
    this.vhQuery = vhQuery;
    this.formData = [];
    this.localProduct = this.vhQueryCafe.getlocalProducts().filter(item => item.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.SERVICE);
    this.localCategory = this.vhQueryCafe.getlocalCategorys().filter(item => item.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.SERVICE);
    this.nameFile = '';
    this.url = '/assets/documents/list-service/' + this.languageService.translate('Service list') + '.xlsx';
    this.urlByTime = '/assets/documents/list-service/' + this.languageService.translate('Service list by time') + '.xlsx';
    this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
    /** Validator cho trường giá tiền */

    this.PRICE_VALIDATOR = [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)')];
    /** File excel import vào có phải là dữ liệu của Dịch vụ thời gian hay không */

    this.file_import_is_servicetime = false;
    /** Danh sách loại khoảng thời gian */

    this.time_unit_list = [{
      _id: 'day',
      name: 'Day'
    }, {
      _id: 'hour',
      name: 'Hour'
    }, {
      _id: 'minute',
      name: 'Minute'
    } // { _id: 'second', name: 'Second' },
    ];
    this.validation_messages = {
      name: [{
        type: "required",
        message: this.languageService.translate('Name is required')
      }],
      status_barcode: [{
        message: this.languageService.translate('Invalid barcode')
      }],
      category: [{
        type: 'required',
        message: this.languageService.translate('Category is required')
      }],
      status_name: [{
        message: this.languageService.translate('Invalid name')
      }],
      price: [{
        type: 'required',
        message: this.languageService.translate('Price is required')
      }, {
        type: 'pattern',
        message: this.languageService.translate('Invalid price')
      }],
      time_block: [{
        type: 'required',
        message: this.languageService.translate('Time block is required')
      }, {
        type: 'min',
        message: this.languageService.translate('Time block must be greater than 0')
      }],
      merge_block_price: [{
        type: 'required',
        message: this.languageService.translate('Price is required')
      }, {
        type: 'pattern',
        message: this.languageService.translate('Invalid price')
      }],
      merge_block_number: [{
        type: 'required',
        message: this.languageService.translate('Quantity is required')
      }, {
        type: 'min',
        message: this.languageService.translate('Quantity must be greater than 0')
      }],
      first_time_price: [{
        type: 'required',
        message: this.languageService.translate('Price is required')
      }, {
        type: 'pattern',
        message: this.languageService.translate('Invalid price')
      }],
      first_time_time_block: [{
        type: 'required',
        message: this.languageService.translate('Time block is required')
      }, {
        type: 'min',
        message: this.languageService.translate('Time block must be greater than 0')
      }],
      special_times: [{
        type: 'required',
        message: this.languageService.translate('Special times is required')
      }, {
        type: 'invalidFormat',
        message: this.languageService.translate('Invalid special times format')
      }]
    };
    /** Xuất ra file CSV hoặc tải về file mẫu */

    this.status = false;
    this.createdError = "";
    /**
     * Chuyển đổi tên đơn vị từ tiếng Việt / tiếng Anh sang định dạng để lưu vào database
     */

    this.daysOfWeekMapping = {
      'thu 2': 'monday',
      'thu 3': 'tuesday',
      'thu 4': 'wednesday',
      'thu 5': 'thursday',
      'thu 6': 'friday',
      'thu 7': 'saturday',
      'chu nhat': 'sunday',
      'monday': 'monday',
      'tuesday': 'tuesday',
      'wednesday': 'wednesday',
      'thursday': 'thursday',
      'friday': 'friday',
      'saturday': 'saturday',
      'sunday': 'sunday'
    };
    /** Chuyển đổi tên đơn vị từ tiếng Việt / tiếng Anh sang định dạng để lưu vào database */

    this.unitMapping = {
      'ngay': 'day',
      'gio': 'hour',
      'phut': 'minute',
      'giay': 'second',
      'day': 'day',
      'hour': 'hour',
      'minute': 'minute',
      'second': 'second'
    };
  }

  initForm(data, index) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

    const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(index),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[this.languageService.translate('_name_service')], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      status_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[this.languageService.translate('_category')], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.getUnitMapping((_a = data[this.languageService.translate('_unit')]) !== null && _a !== void 0 ? _a : data[this.languageService.translate('_unit_regular')]), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_c = (_b = data[this.languageService.translate('_price')]) !== null && _b !== void 0 ? _b : data[this.languageService.translate('_price_regular')]) !== null && _c !== void 0 ? _c : 0, this.PRICE_VALIDATOR),
      barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[this.languageService.translate('_barcode')]),
      status_barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false),
      time_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_d = data[this.languageService.translate('_time_block_regular')]) !== null && _d !== void 0 ? _d : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)]),
      is_merge_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[this.languageService.translate('_merge_block_quantity')] !== undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      is_first_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(data[this.languageService.translate('_time_block_first_time')] !== undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      is_special_times: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(((_e = data[this.languageService.translate('_special_times')]) === null || _e === void 0 ? void 0 : _e.length) > 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    }); // merge_block

    form.addControl('merge_block', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_f = data[this.languageService.translate('_price_merge_block')]) !== null && _f !== void 0 ? _f : 0, this.PRICE_VALIDATOR),
      number: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_g = data[this.languageService.translate('_merge_block_quantity')]) !== null && _g !== void 0 ? _g : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)])
    })); // first_time

    form.addControl('first_time', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_h = data[this.languageService.translate('_price_first_time')]) !== null && _h !== void 0 ? _h : 0, this.PRICE_VALIDATOR),
      time_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_j = data[this.languageService.translate('_time_block_first_time')]) !== null && _j !== void 0 ? _j : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)]),
      unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.getUnitMapping((_k = data[this.languageService.translate('_unit_first_time')]) !== null && _k !== void 0 ? _k : data[this.languageService.translate('_unit_regular')]), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    })); // special_times

    form.addControl('special_times', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl((_l = data[this.languageService.translate("_special_times")]) !== null && _l !== void 0 ? _l : '', [this.specialTimesValidator()]));
    return form;
  }

  checkModelChange() {
    this.formData.forEach((form, index) => {
      let status = this.checkNameAndBarcode(form['value']['name'], form['value']['barcode'], form['value']['id']);
      form.controls['status_name'].setValue(status[0] ? true : status[2]);
      form.controls['status_barcode'].setValue(status[1] ? true : status[3]);
    });
  }
  /**Check name và barcode và lấy id_product*/


  checkNameAndBarcode(name, barcode, id_form) {
    let checkDBName = name != null ? this.localProduct.find(item => item.name.trim() == name.toString().trim()) : null;
    let checkDBBarcode = barcode != null ? this.localProduct.find(item => item.barcode == barcode.toString().trim()) : null; //-----CHECK DỌC-----//

    let checkName = name != null ? this.formData.filter(item => item['value'].name.trim() == name.trim() && item['value']['id'] != id_form).length == 0 ? false : true : null;
    let checkBarcode = barcode != null ? this.formData.filter(item => item['value'].barcode == barcode && item['value']['id'] != id_form).length == 0 || barcode.length == 0 ? false : true : null;
    return [checkDBName ? checkDBName['_id'] : null, checkDBBarcode ? checkDBBarcode['_id'] : null, checkName, checkBarcode];
  }
  /**Chọn file */


  openFile() {
    document.getElementById("file_excel_product")['value'] = '';
    document.getElementById("file_excel_product").click();
  }
  /**
   * Mở File (Nhập tệp)
   */


  openXLSXFile(events) {
    if (events.target.files[0]) {
      this.file_import_is_servicetime = false; // mặc định là false
      // lưu tên file

      this.nameFile = events.target.files[0]['name'].slice(0, events.target.files[0]['name'].lastIndexOf("."));
      this.vhAlgorithm.importXLSX(events.target.files[0]).then(data => {
        console.log(data); // Nếu quá 200

        if (data.length > 200) {
          this.vhComponent.alertMessage("", this.languageService.translate("Only 200 products can be imported at a time"), "", "OK").then(() => {
            this.formData = [];
          });
        } // <= 200
        else {
          this.formData = [];

          if (data.length) {
            this.vhComponent.showLoading("").then(() => {
              // Kiểm tra có phải là dịch vụ theo thời gian hay không, dựa trên trường "time_block" của data[0]
              if (data[0][this.languageService.translate('_time_block_regular')] !== undefined) {
                this.file_import_is_servicetime = true;
              }

              data.forEach((item, index) => {
                this.formData.push(this.initForm(item, index)); // Nếu là dòng cuối

                if (index == data.length - 1) {
                  this.vhComponent.hideLoading(0);
                  this.checkModelChange();
                }
              });
            });
          }
        }
      }).catch(err => {
        this.vhComponent.hideLoading(0);
        this.formData = [];
        this.vhComponent.alertMessage(this.languageService.translate("Error"), this.languageService.translate("Fail file format"), this.languageService.translate("Cancel"));
      });
    }
  }

  exportXLSXFile() {
    if (this.formData.length) {
      let XLSXData = [];

      if (!this.file_import_is_servicetime) {
        this.formData.forEach((item, index) => {
          let row = new Object();
          row[this.languageService.translate("_name_service")] = item['value']['name'];
          row[this.languageService.translate("_category")] = item['value']['category'];
          row[this.languageService.translate("_unit")] = item['value']['unit'];
          row[this.languageService.translate("_price")] = item['value']['price'];
          row[this.languageService.translate("_barcode")] = item['value']['barcode'];
          XLSXData.push(row);

          if (index == this.formData.length - 1) {
            this.vhAlgorithm.exportXLSX(XLSXData, this.nameFile).then(() => this.status = true).catch(err => this.status = true);
          }
        });
      } else {
        this.formData.forEach((item, index) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;

          let row = {}; // Tên dịch vụ

          row[this.languageService.translate('_name_service')] = item['value']['name']; // Danh mục

          row[this.languageService.translate('_category')] = item['value']['category']; // Barcode

          row[this.languageService.translate('_barcode')] = item['value']['barcode']; // Giá bán (Giờ bán thường)

          row[this.languageService.translate('_price_regular')] = (_a = item['value']) === null || _a === void 0 ? void 0 : _a['price']; // Khoảng thời gian (Giờ bán thường)

          row[this.languageService.translate('_time_block_regular')] = (_b = item['value']) === null || _b === void 0 ? void 0 : _b['time_block']; // Đơn vị (Giờ bán thường)

          row[this.languageService.translate('_unit_regular')] = this.languageService.translate((_c = item['value']) === null || _c === void 0 ? void 0 : _c['unit']);

          if ((_d = item['value']) === null || _d === void 0 ? void 0 : _d['is_merge_block']) {
            // Giá bán (Gộp block)
            row[this.languageService.translate('_price_merge_block')] = (_f = (_e = item['value']) === null || _e === void 0 ? void 0 : _e['merge_block']) === null || _f === void 0 ? void 0 : _f.price; // Số lượng block gộp (Gộp block)

            row[this.languageService.translate('_merge_block_quantity')] = (_h = (_g = item['value']) === null || _g === void 0 ? void 0 : _g['merge_block']) === null || _h === void 0 ? void 0 : _h.number;
          }

          if ((_j = item['value']) === null || _j === void 0 ? void 0 : _j['is_first_time']) {
            // Giá bán (Giờ đầu tiên)
            row[this.languageService.translate('_price_first_time')] = (_l = (_k = item['value']) === null || _k === void 0 ? void 0 : _k['first_time']) === null || _l === void 0 ? void 0 : _l.price; // Khoảng thời gian (Giờ đầu tiên)

            row[this.languageService.translate('_time_block_first_time')] = (_o = (_m = item['value']) === null || _m === void 0 ? void 0 : _m['first_time']) === null || _o === void 0 ? void 0 : _o.time_block; // Đơn vị (Giờ đầu tiên)

            row[this.languageService.translate('_unit_first_time')] = this.languageService.translate((_q = (_p = item['value']) === null || _p === void 0 ? void 0 : _p['first_time']) === null || _q === void 0 ? void 0 : _q.unit);
          }

          if ((_r = item['value']) === null || _r === void 0 ? void 0 : _r['is_special_times']) {
            // Giờ đặc biệt
            row[this.languageService.translate('_special_times')] = (_s = item['value']) === null || _s === void 0 ? void 0 : _s['special_times'];
          }

          XLSXData.push(row); // Export file nếu là dòng cuối (sau khi thêm tất cả các dòng)

          if (index === this.formData.length - 1) {
            this.vhAlgorithm.exportXLSX(XLSXData, this.nameFile).then(() => this.status = true).catch(err => this.status = true);
          }
        });
      }
    }
  }
  /**
   * Tải file mẫu Dịch vụ theo công
   */


  downloadSampleFileServiceByWork() {
    if (this.platform.is("electron")) {
      let urlEn = "https://github.com/Viethas-App/Download-Sample-File/releases/download/Download-Sample-File/Service-list.xlsx";
      let urlVI = "https://github.com/Viethas-App/Download-Sample-File/releases/download/Download-Sample-File/Danh-sach-dich-vu.xlsx";
      let appLang = localStorage.getItem("vh-cafe-language");
      if (appLang == 'vi') window.open(urlVI, '_blank', 'location=yes,height=250,width=250,scrollbars=yes,status=yes,title=Download');else window.open(urlEn, '_blank', 'location=yes,height=250,width=250,scrollbars=yes,status=yes,title=Download');
    } else {
      document.getElementById("download_product").click();
    }
  }
  /**
   * Tải file mẫu Dịch vụ theo thời gian
   */


  downloadSampleFileServiceByTime() {
    if (this.platform.is("electron")) {
      let urlEn = "https://github.com/Viethas-App/Sales365-Desktop-Electron/raw/main/assets/data/Service-list-by-time.xlsx";
      let urlVI = "https://github.com/Viethas-App/Sales365-Desktop-Electron/raw/main/assets/data/Danh-sach-dich-vu-theo-thoi-gian.xlsx";
      let appLang = localStorage.getItem("vh-cafe-language");
      if (appLang == 'vi') window.open(urlVI, '_blank', 'location=yes,height=250,width=250,scrollbars=yes,status=yes,title=Download');else window.open(urlEn, '_blank', 'location=yes,height=250,width=250,scrollbars=yes,status=yes,title=Download');
    } else {
      document.getElementById("download_product_by_time").click();
    }
  }
  /**Check dữ liệu trước khi tạo dữ liệu */


  checkForm() {
    for (let i = 0; i < this.formData.length; i++) {
      if (this.formData[i]['value'].status_barcode == true || this.formData[i]['value'].status_name == true || this.formData[i]['controls']['name'].invalid || this.formData[i]['controls']['category'].invalid || this.formData[i]['controls']['unit'].invalid || this.formData[i]['controls']['price'].invalid || this.formData[i].invalid && (this.formData[i]['value'].is_first_time && this.formData[i].controls['first_time'].invalid || this.formData[i]['value'].is_merge_block && this.formData[i].controls['merge_block'].invalid || this.formData[i]['value'].is_special_times && this.formData[i].controls['special_times'].invalid)) {
        this.vhComponent.alertMessage(this.languageService.translate("Error"), `${this.languageService.translate("Error line")} ${i + 1}`, this.languageService.translate("Cancel"));
        return false;
      }

      if (i == this.formData.length - 1) {
        return true;
      }
    }
  }

  createData() {
    if (this.checkForm()) {
      this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Create service data"), "OK", this.languageService.translate("Cancel")).then(res => {
        this.createCategoriesAndProduct();
      }, () => {});
    }
  }
  /**Tạo dữ liệu danh mục và sản phẩm */


  createCategoriesAndProduct() {
    var _this = this;

    this.vhComponent.showLoading("", "current-loading").then( /*#__PURE__*/(0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // lấy dữ liệu tên category
      const dataCategory = [...new Set(_this.formData.map(item => item['value']['category']))]; // tìm ra dữ liệu category chưa được tạo database

      let createdCategory = []; // danh sách danh mục được tạo

      dataCategory.forEach((item, index) => {
        if (item && !_this.localCategory.some(cate => _this.vhAlgorithm.changeAlias(cate.name.trim()).toLowerCase() == _this.vhAlgorithm.changeAlias(item.trim()).toLowerCase())) createdCategory.push({
          name: item,
          type: 2
        });
      });

      try {
        const categories = yield _this.vhQueryCafe.addCategorys(createdCategory);

        if (categories) {
          _this.localCategory = [..._this.localCategory.concat([...categories])];
        } else {
          throw Error("Categories have been created failed");
        } // tạo sản phẩm


        const dataProduct = _this.formData.map(form => {
          const category = _this.localCategory.find(cate => _this.vhAlgorithm.changeAlias(cate['name'].trim()).toLowerCase() == _this.vhAlgorithm.changeAlias(form['value']['category'].trim()).toLowerCase());

          let service = {
            name: form['value']['name'].trim(),
            time_warning: 0,
            img: '',
            id_category: category === null || category === void 0 ? void 0 : category._id,
            tax: 0,
            // allow_sell: true,
            delete_hidden: false,
            type: _this.file_import_is_servicetime ? src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.SERVICETIME : src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.SERVICE,
            units: [{
              unit: form['value']['unit'] ? form['value']['unit'].trim() : '',
              price: parseFloat(form['value']['price']),
              price2: 0,
              barcode: form['value']['barcode'] ? form['value']['barcode'] : '',
              ratio: 1,
              default: true
            }]
          };

          if (_this.file_import_is_servicetime) {
            // set lại units[0] dạng time
            service.units[0].price = parseFloat(form['value']['price']);
            service.units[0].price2 = 0;
            service.units[0].time_block = form['value']['time_block']; // các trường is_merge_block, is_first_time, is_special_times

            service.units[0].is_merge_block = form['value']['is_merge_block'];
            service.units[0].is_first_time = form['value']['is_first_time'];
            service.units[0].is_special_times = form['value']['is_special_times']; // merge_block

            if (service.units[0].is_merge_block) {
              service.units[0].merge_block = {
                price: parseFloat(form['value']['merge_block']['price']),
                price2: 0,
                number: form['value']['merge_block']['number']
              };
            } // first_time


            if (service.units[0].is_first_time) {
              service.units[0].first_time = {
                price: parseFloat(form['value']['first_time']['price']),
                price2: 0,
                unit: form['value']['first_time']['unit'],
                time_block: form['value']['first_time']['time_block']
              };
            } // special_times


            if (service.units[0].is_special_times) {
              service.units[0].special_times = [];
              let special_times = form['value']['special_times'].split(';').filter(entry => entry.trim() !== '');

              for (let i = 0; i < special_times.length; i++) {
                let special_time = special_times[i].split(',').map(part => part.trim());

                if (special_time.length == 4) {
                  const [time_slot_name, price, specific_time, days_of_week] = special_time;
                  service.units[0].special_times.push({
                    time_slot_name: time_slot_name,
                    price: parseFloat(price),
                    price2: 0,
                    specific_time: specific_time,
                    days_of_week: days_of_week.split('-').map(day => _this.daysOfWeekMapping[_this.vhAlgorithm.changeAlias(day.toLocaleLowerCase())])
                  });
                }
              }
            }
          }

          return service;
        }); // Mỗi lần add 5 cái, xong mới add tiếp 5 cái kế


        const batchSize = 5;
        let addedProducts = [];

        for (let i = 0; i < dataProduct.length; i += batchSize) {
          // lấy 5 cái
          const batch = dataProduct.slice(i, i + batchSize);

          try {
            const promises = batch.map( /*#__PURE__*/function () {
              var _ref2 = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (product) {
                return yield _this.vhQueryCafe.addProducts([product]);
              });

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()); // add

            const results = yield _this.vhQuery.asyncPromiseAll(promises); // sau khi add xong

            console.log(`Batch ${Math.floor(i / batchSize) + 1} added successfully`);
            results.forEach((products, index) => {
              if (products) {
                addedProducts.push(...products); // Thêm các sản phẩm đã thêm vào mảng addedProducts
              } else {
                throw Error("Services have been created failed");
              }
            });
          } catch (error) {
            console.error(`Error in batch ${Math.floor(i / batchSize) + 1}:`, error);
          }
        } // add xong


        _this.vhComponent.hideLoading(0);

        _this.showLog([...dataProduct], [...addedProducts]);
      } catch (error) {
        console.error(error);

        _this.vhComponent.showToast(1500, `${_this.languageService.translate("An error occurred while adding product. Please try again")}`, "success-toast");
      }

      _this.vhComponent.hideLoading(0);
    }));
  }

  showLog(data, dataSuccess) {
    this.createdError = "";

    if (data.length != dataSuccess.length) {
      for (let product of data) {
        if (!dataSuccess.some(item => item.phone == product.phone)) this.createdError += `<span> - ${product.name}(${product.phone})</span><br/>`;
      }

      this.nzModalService.error({
        nzTitle: this.languageService.translate("Services have been created failed"),
        nzContent: this.createdError
      });
      this.formData = [];
    } else {
      this.vhComponent.showToast(1500, `${this.languageService.translate("Services")} ${this.languageService.translate("has been added successfully")}`, "success-toast");
      this.goBack();
    }
  }

  goBack() {
    this.router.navigate(['/cafe/dashboard/management/service/service-list'], {
      state: {
        stateObj: this.dataRestore
      }
    });
  }
  /**
   * Lấy tên đơn vị từ tiếng Việt / tiếng Anh sang dđịnh dạng lưu vô database.
   *
   * Sẽ gọi changeAlias() và toLocaleLowerCase() để chuyển đổi tên đơn vị sang định dạng chuẩn.
   *
   * Giá trị mặc định là 'hour' nếu không tìm thấy tên đơn vị trong danh sách chuyển đổi.
   *
   * @returns {string} Tên đơn vị đã chuyển đổi. Nếu không tìm thấy tên đơn vị trong danh sách chuyển đổi, trả về 'hour'.
   * @example
   * getUnitMapping('ngày') // trả về 'day'
   * getUnitMapping('   Hour ') // trả về 'hour'
   */


  getUnitMapping(value) {
    var _a;

    return !this.file_import_is_servicetime ? value : this.unitMapping[(_a = this.vhAlgorithm.changeAlias(value !== null && value !== void 0 ? value : 'hour')) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()];
  }
  /**
   * Validate special times format theo định dạng: time_slot_name, price, specific_time.from_minute-specific_time.to_minute, days_of_week.
   *
   * Ngày thường, 80000, 0-1440, thứ 2-thứ 3-thứ 4-thứ 5;
   *
   * - Phải có 4 phần tử cách nhau bởi dấu phẩy (,)
   * - Tên không được để trống
   * - Giá không được để trống
   * - Thời gian phải nằm trong khoảng từ 0 đến 1440 phút
   * - Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc
   * - Ngày phải được phân cách bởi dấu gạch ngang (-)
   * - Ngày không được để trống
   * - Ngày phải nằm trong danh sách các ngày trong tuần (monday, tuesday, wednesday, thursday, friday, saturday, sunday)
   *
   * @returns {ValidatorFn} Hàm validator
   * @example
   * day_of_week: new FormControl('', [this.specialTimesValidator()])
   */


  specialTimesValidator() {
    return control => {
      const value = control.value; // Để trống

      if (!value || typeof value !== 'string') {
        return {
          invalidFormat: 'Value is required'
        };
      }

      const specialTimeRanges = []; // Chứa danh sách object special time để check overlap

      const entries = value.split(';').filter(entry => entry.trim() !== '');

      for (const entry of entries) {
        // 4 phần tử cách nhau bởi dấu ,
        const parts = entry.split(',').map(part => part.trim());

        if (parts.length !== 4) {
          return {
            invalidFormat: 'Each entry must have 4 parts separated by commas. Example: Normal day, 80000, 0-1440, monday-tuesday-wednesday;'
          };
        }

        const [time_slot_name, price, specific_time, days_of_week] = parts; // Tên để trống

        if (!time_slot_name) {
          return {
            invalidFormat: 'Name is required'
          };
        } // Giá để trống


        if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
          return {
            invalidFormat: 'Price is required'
          };
        } // Thời gian phải nằm trong khoảng từ 0 đến 1440 phút, Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc


        const timeParts = specific_time.split('-').map(time => parseInt(time.trim(), 10));

        if (timeParts.length !== 2 || isNaN(timeParts[0]) || isNaN(timeParts[1]) || timeParts[0] < 0 || timeParts[1] > 1440 || timeParts[0] >= timeParts[1]) {
          return {
            invalidFormat: 'Invalid time range. Must be between 0 and 1440 minutes, and from_minute must be less than to_minute.'
          };
        } // Phải có ít nhất 1 ngày được chọn


        const days = days_of_week.split('-').map(day => day.trim());

        if (days.length === 0) {
          return {
            invalidFormat: 'At least one day must be selected'
          };
        } // Ngày phải nằm trong danh sách các ngày trong tuần


        if (!days.every(day => this.daysOfWeekMapping[this.vhAlgorithm.changeAlias(day.toLocaleLowerCase())])) {
          return {
            invalidFormat: 'Invalid days of week. Must be one or more of: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
          };
        } // Add vô để lát nữa kiểm tra overlap


        specialTimeRanges.push({
          days_of_week: days,
          from_minute: timeParts[0],
          to_minute: timeParts[1]
        });
      } // Check overlapp thời gian


      for (let i = 0; i < specialTimeRanges.length; i++) {
        const currentEntry = specialTimeRanges[i];

        for (let j = 0; j < specialTimeRanges.length; j++) {
          if (i === j) continue; // Bỏ qua nếu là chính nó

          const otherEntry = specialTimeRanges[j];

          if (currentEntry.days_of_week.some(day => otherEntry.days_of_week.includes(day)) && ( // Overlapping ngày
          currentEntry.from_minute >= otherEntry.from_minute && currentEntry.from_minute < otherEntry.to_minute || // Overlapping thờI gian bắt đầu
          currentEntry.to_minute > otherEntry.from_minute && currentEntry.to_minute <= otherEntry.to_minute) // Overlapping thời gian kết thúc
          ) {
            return {
              invalidFormat: 'There is a time period overlapping with an existing time block'
            };
          }
        }
      }

      return null; // Valid
    };
  }

}

CreateDataServiceComponent.ɵfac = function CreateDataServiceComponent_Factory(t) {
  return new (t || CreateDataServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuery));
};

CreateDataServiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CreateDataServiceComponent,
  selectors: [["app-create-data-service"]],
  decls: 59,
  vars: 44,
  consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", "", 2, "padding-bottom", "16px", "z-index", "99"], ["nz-col", "", "nzSpan", "8", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "16", 1, "right-all-content"], ["nz-dropdown", "", "nz-button", "", "nzType", "default", 1, "btn-data", "center-all-content", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "export", "nzTheme", "outline"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-button", "", "nzType", "default", 1, "btn-data", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "upload", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "disabled", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-row", "", 1, "table"], [2, "max-width", "5% !important", "width", "3%"], [2, "max-width", "25% !important", "width", "12%"], [2, "max-width", "15% !important", "width", "8%"], [4, "ngIf"], [3, "formGroup", 4, "ngFor", "ngForOf"], ["id", "download_product", "download", "", 2, "display", "none", 3, "href"], ["id", "download_product_by_time", "download", "", 2, "display", "none", 3, "href"], ["type", "file", "id", "file_excel_product", "accept", ".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", 2, "display", "none", 3, "change"], [2, "max-width", "15% !important", "width", "15%"], [2, "max-width", "20% !important", "width", "20%"], [2, "max-width", "20% !important", "width", "8%"], [2, "max-width", "20% !important", "width", "6%"], [2, "max-width", "20% !important", "width", "4%"], [2, "max-width", "20% !important", "width", "3%"], [2, "max-width", "20% !important", "width", "16%"], [3, "formGroup"], ["type", "text", "formControlName", "name", 3, "placeholder", "change"], [4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "category", 3, "placeholder"], ["class", "error-message error-font", 4, "ngIf"], [1, "error-message", "error-font"], ["color", "vh-red"], ["type", "text", "formControlName", "unit", 3, "placeholder"], [2, "max-width", "20% !important", "width", "20%", "font-weight", "700"], ["type", "text", "formControlName", "price", 2, "text-align", "end", 3, "placeholder"], ["type", "text", "formControlName", "barcode", 3, "placeholder", "change"], [2, "max-width", "8% !important", "width", "8%"], [2, "max-width", "6% !important", "width", "6%", "font-weight", "700"], ["type", "number", "formControlName", "price", 2, "text-align", "end", 3, "placeholder", "change"], [2, "max-width", "4% !important", "width", "4%"], ["type", "text", "formControlName", "time_block", 2, "text-align", "end", 3, "placeholder", "change"], [2, "max-width", "6% !important", "width", "6%"], ["formControlName", "unit", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [2, "max-width", "3% !important", "width", "3%"], ["type", "checkbox", "formControlName", "is_merge_block", 3, "change"], ["type", "checkbox", "formControlName", "is_first_time", 3, "change"], ["type", "checkbox", "formControlName", "is_special_times", 3, "change"], [3, "value"], ["formGroupName", "merge_block"], ["type", "text", "formControlName", "number", 2, "text-align", "end", 3, "placeholder", "change"], ["formGroupName", "first_time"], [2, "max-width", "16% !important", "width", "16%"], ["type", "text", "formControlName", "special_times", 2, "width", "100%", "border", "none", 3, "placeholder", "change"]],
  template: function CreateDataServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateDataServiceComponent_Template_div_click_0_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nz-dropdown-menu", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateDataServiceComponent_Template_li_click_19_listener() {
        return ctx.downloadSampleFileServiceByWork();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateDataServiceComponent_Template_li_click_22_listener() {
        return ctx.downloadSampleFileServiceByTime();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateDataServiceComponent_Template_button_click_26_listener() {
        return ctx.exportXLSXFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateDataServiceComponent_Template_button_click_31_listener() {
        return ctx.openFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateDataServiceComponent_Template_button_click_36_listener() {
        return ctx.createData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, CreateDataServiceComponent_ng_container_52_Template, 10, 9, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, CreateDataServiceComponent_ng_container_53_Template, 40, 39, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, CreateDataServiceComponent_tr_55_Template, 14, 13, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CreateDataServiceComponent_Template_input_change_58_listener($event) {
        return ctx.openXLSXFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 23, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 25, "Create service data"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 27, "Download sample file"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 29, "Service CHARGE BY WORK"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 31, "Service CHARGE BY TIME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 33, "Export file"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 35, "Import file"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.formData.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 37, "Create data"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.file_import_is_servicetime ? "150" : "100", "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-size", ctx.file_import_is_servicetime ? "0.75" : "0.9", "rem");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 39, "_name_service"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 41, "_category"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.file_import_is_servicetime);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.file_import_is_servicetime);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.file_import_is_servicetime ? "150" : "100", "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.formData ? ctx.formData : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.urlByTime, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__.NzDropdownButtonDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__.NzMenuItemDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.TitleCasePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: scroll;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tabble[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0 !important;\n  display: none;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: block;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: var(--ion-color-vh-gray) 1px solid;\n  height: 2rem;\n  padding: 5px 0 5px 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-white);\n  background-color: var(--ion-color-vh-gray);\n  display: table;\n  width: 100%;\n  position: sticky;\n  top: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 2rem;\n  border: var(--ion-color-vh-white) 1px solid;\n  padding: 5px 0 5px 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 95%;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.popup[_ngcontent-%COMP%] {\n  background: white;\n  width: 70vw;\n  max-width: 400px;\n  left: 50%;\n  position: fixed;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.popup[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1kYXRhLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQ0E7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVGO0FBREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FBR0o7QUFGSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQUlOO0FBRkk7RUFDRSxXQUFBO0FBSU47QUFITTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUtSO0FBSlE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTVY7QUFMVTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBT1o7QUFOWTtFQUNFLFlBQUE7QUFRZDtBQU5ZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFRZDtBQUhNO0VBQ0UsZ0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0FBS1I7QUFKUTtFQUNFLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0FBTVY7QUFMVTtFQUNFLFlBQUE7QUFPWjtBQURFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUdKO0FBREU7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREU7RUFDRSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQUFBOztFQUVFLGdDQUFBO0FBR0Y7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFHRjtBQUZFO0VBQ0UsWUFBQTtBQUlKIiwiZmlsZSI6ImNyZWF0ZS1kYXRhLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAudGFiYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0Ym9keSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhlYWQge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICBib3JkZXI6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSkgMXB4IHNvbGlkO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIC5idG4tZGF0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuLWFkZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG4uYW50LWJ0bjpmb2N1cyxcclxuLmFudC1idG46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcblxyXG4ucG9wdXAge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBpb24tcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 51525:
/*!***************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/service/services-list/detail-service/detail-service.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailServiceComponent": () => (/* binding */ DetailServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_services_cleave_js_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/cleave-js.service */ 22888);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/empty */ 36641);
/* harmony import */ var _special_time_special_time_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../special-time/special-time.component */ 12892);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






























const _c0 = ["categoryName"];
function DetailServiceComponent_ng_template_35_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Product name is required"));
} }
function DetailServiceComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_template_35_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r16.hasError("required"));
} }
function DetailServiceComponent_nz_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, option_r18.name))("nzValue", option_r18._id);
} }
function DetailServiceComponent_ng_template_47_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Service type is required"));
} }
function DetailServiceComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_template_47_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r19.hasError("required"));
} }
function DetailServiceComponent_nz_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", option_r21._id)("nzLabel", option_r21.name);
} }
function DetailServiceComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailServiceComponent_ng_template_59_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.addCategory(_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "Enter category name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx_r7.isAddingCategory)("disabled", !_r22.value || _r22.value.trim() === "" || ctx_r7.isAddingCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, "Add"), " ");
} }
function DetailServiceComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-text", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Barcode already exists"));
} }
function DetailServiceComponent_ng_container_77_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Unit is required"));
} }
function DetailServiceComponent_ng_container_77_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_77_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r30.hasError("required"));
} }
function DetailServiceComponent_ng_container_77_ng_template_23_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Cost is required"));
} }
function DetailServiceComponent_ng_container_77_ng_template_23_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function DetailServiceComponent_ng_container_77_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_77_ng_template_23_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_77_ng_template_23_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r32.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r32.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_77_div_25_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Cost is required"));
} }
function DetailServiceComponent_ng_container_77_div_25_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function DetailServiceComponent_ng_container_77_div_25_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_77_div_25_ng_template_9_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_77_div_25_ng_template_9_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r37.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r37.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_77_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_77_div_25_Template_input_blur_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r40.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DetailServiceComponent_ng_container_77_div_25_ng_template_9_Template, 2, 2, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, "Service price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx_r29.vhAlgorithm.vhcurrencyunit_symbol(0));
} }
function DetailServiceComponent_ng_container_77_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_77_Template_input_blur_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, DetailServiceComponent_ng_container_77_ng_template_12_Template, 1, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "b", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_77_Template_input_blur_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r44.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, DetailServiceComponent_ng_container_77_ng_template_23_Template, 2, 2, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, DetailServiceComponent_ng_container_77_div_25_Template, 11, 5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 9, "Enter unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 11, "Service price"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx_r10.vhAlgorithm.vhcurrencyunit_symbol(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.management_product_price2);
} }
function DetailServiceComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_div_78_Template_input_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r45.updateServiceForm("time_warning", { time_warning: ctx_r45.productServiceForm.value.time_warning }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, "Warning timeout (minute)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 4, "Enter warning timeout (minutes)"));
} }
function DetailServiceComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "_Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "Priority order for calculating charges: First time block => Special time block => Merge block => Regular time."), "");
} }
function DetailServiceComponent_ng_container_91_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function DetailServiceComponent_ng_container_91_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function DetailServiceComponent_ng_container_91_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_ng_template_16_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_ng_template_16_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r59.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r59.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_91_div_18_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function DetailServiceComponent_ng_container_91_div_18_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function DetailServiceComponent_ng_container_91_div_18_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_div_18_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_div_18_ng_template_8_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r64.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r64.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_91_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-form-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_div_18_Template_input_blur_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r67.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DetailServiceComponent_ng_container_91_div_18_ng_template_8_Template, 2, 2, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Selling price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r62);
} }
function DetailServiceComponent_ng_container_91_ng_template_29_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time block is required"));
} }
function DetailServiceComponent_ng_container_91_ng_template_29_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid time block"));
} }
function DetailServiceComponent_ng_container_91_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_ng_template_29_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_ng_template_29_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r69.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r69.hasError("min"));
} }
function DetailServiceComponent_ng_container_91_nz_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const option_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, option_r72.name)))("nzValue", option_r72._id);
} }
function DetailServiceComponent_ng_container_91_ng_template_35_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time unit is required"));
} }
function DetailServiceComponent_ng_container_91_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_ng_template_35_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r73.hasError("required"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_ng_container_50_ng_template_9_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_ng_container_50_ng_template_9_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r80.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r80.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_div_11_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_div_11_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_div_11_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_ng_container_50_div_11_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_ng_container_50_div_11_ng_template_8_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r85.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r85.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-form-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_ng_container_50_div_11_Template_input_blur_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r88.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DetailServiceComponent_ng_container_91_ng_container_50_div_11_ng_template_8_Template, 2, 2, "ng-template", null, 85, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Selling price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r83);
} }
function DetailServiceComponent_ng_container_91_ng_container_50_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Quantity is required"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid quantity"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_ng_container_50_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_ng_container_50_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r90.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r90.hasError("min"));
} }
function DetailServiceComponent_ng_container_91_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_ng_container_50_Template_input_blur_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r93.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DetailServiceComponent_ng_container_91_ng_container_50_ng_template_9_Template, 2, 2, "ng-template", null, 81, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DetailServiceComponent_ng_container_91_ng_container_50_div_11_Template, 10, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_ng_container_50_Template_input_blur_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r95.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, DetailServiceComponent_ng_container_91_ng_container_50_ng_template_22_Template, 2, 2, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, "Selling price"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r55.management_product_price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 8, "Number of merged blocks"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 10, "Enter quantity"));
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_div_58_ng_template_9_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_div_58_ng_template_9_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r104.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r104.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_91_div_58_div_11_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function DetailServiceComponent_ng_container_91_div_58_div_11_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function DetailServiceComponent_ng_container_91_div_58_div_11_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_div_58_div_11_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_div_58_div_11_ng_template_8_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r109.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r109.hasError("pattern"));
} }
function DetailServiceComponent_ng_container_91_div_58_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-form-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_div_58_div_11_Template_input_blur_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r112.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DetailServiceComponent_ng_container_91_div_58_div_11_ng_template_8_Template, 2, 2, "ng-template", null, 92, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Selling price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r107);
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time is required"));
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid time"));
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_div_58_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_div_58_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r114.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r114.hasError("min"));
} }
function DetailServiceComponent_ng_container_91_div_58_nz_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const option_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, option_r117.name)))("nzValue", option_r117._id);
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Time unit is required"));
} }
function DetailServiceComponent_ng_container_91_div_58_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DetailServiceComponent_ng_container_91_div_58_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r118.hasError("required"));
} }
function DetailServiceComponent_ng_container_91_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_div_58_Template_input_blur_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r120.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DetailServiceComponent_ng_container_91_div_58_ng_template_9_Template, 2, 2, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DetailServiceComponent_ng_container_91_div_58_div_11_Template, 10, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_div_58_Template_input_blur_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r122.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, DetailServiceComponent_ng_container_91_div_58_ng_template_22_Template, 2, 2, "ng-template", null, 89, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "nz-form-item", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nz-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_ng_container_91_div_58_Template_nz_select_ngModelChange_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r123.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, DetailServiceComponent_ng_container_91_div_58_nz_option_27_Template, 3, 6, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, DetailServiceComponent_ng_container_91_div_58_ng_template_28_Template, 1, 1, "ng-template", null, 90, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 9, "Selling price"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r56.management_product_price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, "First usage time"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 13, "Enter time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r56.time_unit_list);
} }
function DetailServiceComponent_ng_container_91_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailServiceComponent_ng_container_91_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r124.isShowModalSpecialTime = true; return ctx_r124.dataSpecialTimeEdit = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Add"), " ");
} }
function DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Whole day"), " ");
} }
function DetailServiceComponent_ng_container_91_div_68_tr_23_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
} if (rf & 2) {
    const specialTime_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r132.convertMinutesToTime(specialTime_r128.value.specific_time.from_minute), " - ", ctx_r132.convertMinutesToTime(specialTime_r128.value.specific_time.to_minute), " ");
} }
function DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_8_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_8_ng_container_1_span_4_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const day_r136 = ctx.$implicit;
    const last_r137 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, day_r136)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !last_r137);
} }
function DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_8_ng_container_1_Template, 5, 6, "ng-container", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const specialTime_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", specialTime_r128.value.days_of_week);
} }
function DetailServiceComponent_ng_container_91_div_68_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_4_Template, 3, 3, "ng-container", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DetailServiceComponent_ng_container_91_div_68_tr_23_ng_template_5_Template, 1, 2, "ng-template", null, 108, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DetailServiceComponent_ng_container_91_div_68_tr_23_ng_container_8_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailServiceComponent_ng_container_91_div_68_tr_23_Template_i_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r141); const i_r129 = restoredCtx.index; const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r140.editSpecialTime(i_r129); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnConfirm", function DetailServiceComponent_ng_container_91_div_68_tr_23_Template_span_nzOnConfirm_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r141); const i_r129 = restoredCtx.index; const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r142.deleteSpecialTime(i_r129); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const specialTime_r128 = ctx.$implicit;
    const i_r129 = ctx.index;
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](specialTime_r128.value.time_slot_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", specialTime_r128.value.specific_time.from_minute === 0 && specialTime_r128.value.specific_time.to_minute === 1440)("ngIfElse", _r131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", specialTime_r128.value.days_of_week && specialTime_r128.value.days_of_week.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"]("", ctx_r126.vhAlgorithm.vhcurrencyunit(specialTime_r128.value.price), " ", ctx_r126.currencySymbol, " / ", ctx_r126.productServiceForm.value.time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 10, ctx_r126.productServiceForm.value.unit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 12, "Are you sure to delete this special time?"));
} }
function DetailServiceComponent_ng_container_91_div_68_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-embed-empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No special times available");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DetailServiceComponent_ng_container_91_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-table", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](22, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, DetailServiceComponent_ng_container_91_div_68_tr_23_Template, 17, 14, "tr", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, DetailServiceComponent_ng_container_91_div_68_tr_24_Template, 4, 0, "tr", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzShowPagination", false)("nzBordered", true)("nzData", ctx_r58.specialTimesArray.controls)("nzNoResult", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 10, "Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 12, "Time block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 14, "Days of the week"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 16, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r58.specialTimesArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r58.specialTimesArray.length === 0);
} }
function DetailServiceComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "nz-form-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_Template_input_blur_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r144); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r143.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, DetailServiceComponent_ng_container_91_ng_template_16_Template, 2, 2, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, DetailServiceComponent_ng_container_91_div_18_Template, 10, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "nz-form-item", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_ng_container_91_Template_input_blur_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r144); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r145.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, DetailServiceComponent_ng_container_91_ng_template_29_Template, 2, 2, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "nz-form-item", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "nz-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_ng_container_91_Template_nz_select_ngModelChange_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r144); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r146.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, DetailServiceComponent_ng_container_91_nz_option_34_Template, 3, 6, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, DetailServiceComponent_ng_container_91_ng_template_35_Template, 1, 1, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "nz-switch", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_ng_container_91_Template_nz_switch_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r144); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r147.changeMergeBlock($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, DetailServiceComponent_ng_container_91_ng_container_50_Template, 24, 12, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "nz-switch", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_ng_container_91_Template_nz_switch_ngModelChange_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r144); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r148.changeFirstTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, DetailServiceComponent_ng_container_91_div_58_Template, 30, 15, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, DetailServiceComponent_ng_container_91_button_66_Template, 4, 3, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "nz-switch", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_ng_container_91_Template_nz_switch_ngModelChange_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r144); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r149.updateUnits(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, DetailServiceComponent_ng_container_91_div_68_Template, 25, 18, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30);
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 19, "Regular selling time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 21, "Selling price"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.management_product_price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 23, "Apply for each time block"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 25, "Enter time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.time_unit_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 27, "_Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 29, "Usage time, if less than the time set for regular selling price, will be rounded up to the time set for the regular selling price."), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 31, "Merge block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_merge_block);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 33, "First hour"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_first_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](64, 35, "Special time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_special_times);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.productServiceForm.value.is_special_times);
} }
function DetailServiceComponent_p_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Are you sure to delete this service?"));
} }
function DetailServiceComponent_app_special_time_96_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-special-time", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClose", function DetailServiceComponent_app_special_time_96_Template_app_special_time_onClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r150.isShowModalSpecialTime = false; })("onOk", function DetailServiceComponent_app_special_time_96_Template_app_special_time_onOk_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r151); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r152.isShowModalSpecialTime = false; return ctx_r152.onOkSpecialTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r15.dataSpecialTimeEdit)("specialTimes", ctx_r15.productServiceForm.get("special_times").value);
} }
const _c1 = function (a0) { return { width: a0 }; };
class DetailServiceComponent {
    constructor(router, vhImage, vhAlgorithm, vhComponent, languageService, vhQueryCafe, cleaveJsService) {
        this.router = router;
        this.vhImage = vhImage;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.cleaveJsService = cleaveJsService;
        this.data = [];
        this.barcode = true;
        this.list_category = [];
        this.management_product_price2 = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').management_product_price2;
        /** Danh sách loại dịch vụ */
        this.item_type_list = [
            { _id: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE, name: 'Charge by work' },
            { _id: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME, name: 'Charge by time' },
        ];
        /** Danh sách loại khoảng thời gian */
        this.time_unit_list = [
            { _id: 'day', name: 'Day' },
            { _id: 'hour', name: 'Hour' },
            { _id: 'minute', name: 'Minute' },
            // { _id: 'second', name: 'Second' },
        ];
        /** Có hiện modal chọn thời gian đặc biệt hay không */
        this.isShowModalSpecialTime = false;
        /** Ký hiệu tiền tệ. Ví dụ 'VND' */
        this.currencySymbol = JSON.parse(localStorage.getItem('vhsales_currencyFormat')).symbol.text;
        /** Dữ liệu thời gian đặc biệt để edit truyền vào modal */
        this.dataSpecialTimeEdit = null;
        /** Validator cho trường giá tiền */
        this.PRICE_VALIDATOR = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)'),
        ];
        this.VhType = src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType;
        /** ------ Modal Zorro---- */
        this.isVisible = false;
        /** Nếu là true thì là đang thêm danh mục, dùng để hiển thị trạng thái loading, tránh bị nhấn nhiều lần */
        this.isAddingCategory = false;
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.stateObj = this.router.getCurrentNavigation().extras.state.dataRestore;
        // gán các giá trị của dv vào form
        this.productServiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.img),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.units[0].barcode),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.units[0].unit, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.units[0].price, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)")])),
            price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.units[0].price2 || 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)")])),
            id_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.id_category, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            allow_sell: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.delete_hidden ? false : true),
            delete_hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.delete_hidden),
            selling: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.selling),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.type),
            time_warning: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data.time_warning),
        });
        // Nếu là kiểu Thời gian
        if (this.data.type === src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
            this.addTimeSpecificFields();
        }
    }
    ngOnInit() {
        this.initData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.price = this.vhAlgorithm.vhnumeral(".price");
            if (this.management_product_price2)
                this.price2 = this.vhAlgorithm.vhnumeral(".price2");
        });
    }
    initData() {
        // lấy danh mục
        this.list_category = this.vhQueryCafe.getlocalCategorys().filter(res => res.type == 2);
    }
    /**
     * Thêm các trường liên quan đến Thời gian vào form
     */
    addTimeSpecificFields() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        this.productServiceForm.addControl('time_block', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_a = this.data.units[0].time_block) !== null && _a !== void 0 ? _a : 1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])));
        this.productServiceForm.addControl('is_merge_block', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_b = this.data.units[0].is_merge_block) !== null && _b !== void 0 ? _b : false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
        this.productServiceForm.addControl('is_first_time', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_c = this.data.units[0].is_first_time) !== null && _c !== void 0 ? _c : false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
        this.productServiceForm.addControl('is_special_times', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_d = this.data.units[0].is_special_times) !== null && _d !== void 0 ? _d : false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
        // merge_block
        this.productServiceForm.addControl('merge_block', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_f = (_e = this.data.units[0].merge_block) === null || _e === void 0 ? void 0 : _e.price) !== null && _f !== void 0 ? _f : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
            price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_h = (_g = this.data.units[0].merge_block) === null || _g === void 0 ? void 0 : _g.price2) !== null && _h !== void 0 ? _h : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_k = (_j = this.data.units[0].merge_block) === null || _j === void 0 ? void 0 : _j.number) !== null && _k !== void 0 ? _k : 1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])),
        }));
        // first_time
        this.productServiceForm.addControl('first_time', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_m = (_l = this.data.units[0].first_time) === null || _l === void 0 ? void 0 : _l.price) !== null && _m !== void 0 ? _m : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
            price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_p = (_o = this.data.units[0].first_time) === null || _o === void 0 ? void 0 : _o.price2) !== null && _p !== void 0 ? _p : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_r = (_q = this.data.units[0].first_time) === null || _q === void 0 ? void 0 : _q.unit) !== null && _r !== void 0 ? _r : 'minute', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            time_block: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_t = (_s = this.data.units[0].first_time) === null || _s === void 0 ? void 0 : _s.time_block) !== null && _t !== void 0 ? _t : 1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])),
        }));
        // special_times
        this.productServiceForm.addControl('special_times', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]));
        (_u = this.data.units[0].special_times) === null || _u === void 0 ? void 0 : _u.forEach((item) => {
            var _a;
            const daysOfWeekArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]);
            (item.days_of_week || []).forEach((day) => {
                daysOfWeekArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(day));
            });
            this.specialTimesArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(item.price, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
                price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl((_a = item.price2) !== null && _a !== void 0 ? _a : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose(this.PRICE_VALIDATOR)),
                time_slot_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(item.time_slot_name),
                specific_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                    from_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(item.specific_time.from_minute),
                    to_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(item.specific_time.to_minute),
                }),
                days_of_week: daysOfWeekArray,
            }));
        });
        this.initPriceCleave(true, ['.price']);
        if (this.management_product_price2)
            this.initPriceCleave(true, ['.price2']);
        if (this.data.units[0].is_merge_block) {
            this.initPriceCleave(true, ['.merge_block_price']);
            if (this.management_product_price2)
                this.initPriceCleave(true, ['.merge_block_price2']);
        }
        if (this.data.units[0].is_first_time) {
            this.initPriceCleave(true, ['.first_time_price']);
            if (this.management_product_price2)
                this.initPriceCleave(true, ['.first_time_price2']);
        }
    }
    /**
     * tạo barcode tự động
     * @example this.setBarcode()
     */
    setBarcode() {
        let newbarcode = '';
        for (let index = 0; index < 12; index++) {
            newbarcode += Math.floor(Math.random() * 10);
        }
        this.checkBarcode(newbarcode);
        if (this.barcode) {
            this.productServiceForm.controls['barcode'].setValue(newbarcode);
            this.updateUnits();
        }
    }
    /**
     * xử lý cập nhật trường units cho dịch vụ
     */
    updateUnits() {
        let unit = {
            unit: this.productServiceForm.value['unit'],
            ratio: 1,
            default: true,
            price: parseFloat(this.price.getRawValue()),
            price2: this.management_product_price2 ? parseFloat(this.price2.getRawValue()) : 0,
            barcode: this.productServiceForm.value['barcode'],
        };
        let formValue = this.productServiceForm.value;
        if (formValue.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
            // set lại units[0] dạng time
            unit.price = parseFloat(this.cleaveJsService.getRawValue('.price'));
            unit.price2 = this.management_product_price2 ? parseFloat(this.cleaveJsService.getRawValue('.price2')) : 0;
            unit.time_block = formValue.time_block;
            // các trường is_merge_block, is_first_time, is_special_times
            unit.is_merge_block = formValue.is_merge_block;
            unit.is_first_time = formValue.is_first_time;
            unit.is_special_times = formValue.is_special_times;
            // merge_block
            if (formValue.is_merge_block) {
                unit.merge_block = {
                    price: parseFloat(this.cleaveJsService.getRawValue('.merge_block_price')),
                    price2: this.management_product_price2 ? parseFloat(this.cleaveJsService.getRawValue('.merge_block_price2')) : 0,
                    number: formValue.merge_block.number,
                };
            }
            else {
                delete unit.merge_block;
            }
            // first_time
            if (formValue.is_first_time) {
                unit.first_time = {
                    price: parseFloat(this.cleaveJsService.getRawValue('.first_time_price')),
                    price2: this.management_product_price2 ? parseFloat(this.cleaveJsService.getRawValue('.first_time_price2')) : 0,
                    unit: formValue.first_time.unit,
                    time_block: formValue.first_time.time_block,
                };
            }
            else {
                delete unit.first_time;
            }
            // special_times
            if (formValue.is_special_times) {
                unit.special_times = [];
                this.specialTimesArray.controls.forEach((item) => {
                    let data = {
                        price: parseFloat(item.value.price),
                        price2: this.management_product_price2 ? parseFloat(item.value.price2) : 0,
                        time_slot_name: item.value.time_slot_name,
                        specific_time: {
                            from_minute: item.value.specific_time.from_minute,
                            to_minute: item.value.specific_time.to_minute,
                        },
                        days_of_week: item.value.days_of_week.map((day) => day),
                    };
                    unit.special_times.push(data);
                });
            }
            else {
                delete unit.special_times;
            }
        }
        this.updateServiceForm('units', {
            units: [unit]
        });
    }
    /**
     * kiểm tra barcode đã tồn tại hay chưa
     */
    checkBarcode(barcode) {
        let detailproduct = this.vhQueryCafe.getlocalDetailProduct_byBarcode_Cafe(barcode);
        if (detailproduct == null) {
            this.barcode = true;
        }
        else {
            this.barcode = false;
        }
    }
    getFile() {
        document.getElementById("file-upload").click();
    }
    /** Lấy hình ảnh từ Desktop */
    onUpload(e) {
        const file = e.target.files[0];
        this.vhImage.getThumbnailFromDesktop(file, 256, 256, "products", this.productServiceForm.value["img"] || null).then(photoURL => {
            this.productServiceForm.controls["img"].setValue(photoURL);
            this.vhComponent.showToast(2000, (this.languageService.translate("Image was loaded successfully")), "success-toast");
            this.updateServiceForm('img', { img: this.productServiceForm.value.img });
        }, () => {
            this.vhComponent.showToast(2000, (this.languageService.translate("Image was failed")), 'alert-toast');
        });
    }
    /**Hàm cập nhật sản phẩm */
    updateServiceForm(field, object) {
        if (object.hasOwnProperty('allow_sell')) {
            object = { delete_hidden: !object.allow_sell };
        }
        if (this.barcode)
            this.vhQueryCafe.updateProduct_Cafe(this.data._id, object);
    }
    /**
     * mở modal xác nhận xóa dịch vụ
     * @example this.showModal()
     */
    showModal() {
        this.isVisible = true;
    }
    /**
     * đóng modal xác nhận xóa dịch vụ
     * @example this.handleCancel()
     */
    handleCancel() {
        this.isVisible = false;
    }
    /**
     * xóa dịch vụ khỏi DB
     */
    deleteService() {
        this.vhComponent.showLoading('').then(() => {
            this.vhQueryCafe.deleteProduct_Cafe(this.data._id)
                .then((rsp) => {
                if (rsp.vcode === 0) {
                    if (this.productServiceForm.value["img"] && !this.productServiceForm.value['img'].includes("assets/img/default")) {
                        this.vhImage.deleteThumbnail(this.productServiceForm.value["img"]).then(() => {
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
                    // this.goBack();
                }
                else if (rsp.vcode === 2) {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.alertMessageDesktop("error", (this.languageService.translate("Bạn không thể xóa, vì sản phẩm này đã phát sinh hóa đơn")));
                    // this.goBack();
                }
                else if (rsp.vcode === 3) {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.alertMessageDesktop("error", (this.languageService.translate("Vui lòng xóa các thuộc tính của sản phẩm trước")));
                    // this.goBack();
                }
            });
        });
    }
    /**
     * Trở về trang trước đó
     */
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/service/service-list'], { state: this.stateObj });
    }
    /** Getter cho special_times */
    get specialTimesArray() {
        return this.productServiceForm.get('special_times');
    }
    /** Getter cho merge_block */
    get mergeBlockGroup() {
        return this.productServiceForm.get('merge_block');
    }
    /** Getter cho first_time */
    get firstTimeGroup() {
        return this.productServiceForm.get('first_time');
    }
    /**
     * Khi thay đổi loại dịch vụ
     * @param event loại dịch vụ được chọn
     */
    onServiceTypeChange(event) {
        if (event == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
            this.productServiceForm.controls['unit'].setValue('minute');
            // thêm control cho các trường
            this.addTimeSpecificFields();
            // thêm validator cho các trường
            this.addValidatorsToFields(this.productServiceForm, ['time_block'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])]);
            this.addValidatorsToFields(this.productServiceForm, ['is_merge_block', 'is_first_time', 'is_special_times'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            this.productServiceForm.controls['time_block'].setValue(1);
            this.productServiceForm.controls['is_merge_block'].setValue(false);
            this.productServiceForm.controls['is_first_time'].setValue(false);
            this.productServiceForm.controls['is_special_times'].setValue(false);
            this.productServiceForm.controls['merge_block'].get('price').setValue(0);
            this.productServiceForm.controls['merge_block'].get('price2').setValue(0);
            this.productServiceForm.controls['merge_block'].get('number').setValue(1);
            this.productServiceForm.controls['first_time'].get('price').setValue(0);
            this.productServiceForm.controls['first_time'].get('price2').setValue(0);
            this.productServiceForm.controls['first_time'].get('unit').setValue('minute');
            this.productServiceForm.controls['first_time'].get('time_block').setValue(1);
        }
        else {
            // this.productServiceForm.controls['unit'].setValue('');
            // xóa validator cho các trường
            this.removeValidatorsFromFields(this.productServiceForm, ['time_block', 'is_merge_block', 'is_first_time', 'is_special_times']);
            this.removeValidatorsFromFields(this.mergeBlockGroup, ['price', 'price2', 'number']);
            this.removeValidatorsFromFields(this.firstTimeGroup, ['price', 'price2', 'unit', 'time_block']);
            this.specialTimesArray.clear();
            this.vhAlgorithm.waitingStack().then(() => {
                this.price = this.vhAlgorithm.vhnumeral('.price');
                if (this.management_product_price2) {
                    this.price2 = this.vhAlgorithm.vhnumeral('.price2');
                }
            });
        }
        this.initPriceCleave(event == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME, ['.price']);
        if (this.management_product_price2)
            this.initPriceCleave(event == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME, ['.price2']);
        this.updateServiceForm('type', { type: event });
        this.updateUnits();
    }
    /**
     * Khi thay đổi Có gộp block hay không
     * @param event true là có gộp block, false là không
     */
    changeMergeBlock(event) {
        if (event) {
            this.addValidatorsToFields(this.mergeBlockGroup, ['price', 'price2'], this.PRICE_VALIDATOR);
            this.addValidatorsToFields(this.mergeBlockGroup, ['number'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
        }
        else {
            this.removeValidatorsFromFields(this.mergeBlockGroup, ['price', 'price2', 'number']);
        }
        this.initPriceCleave(event, ['.merge_block_price']);
        if (this.management_product_price2)
            this.initPriceCleave(event, ['.merge_block_price2']);
        setTimeout(() => {
            this.updateUnits();
        }, 200); // initPriceCleave có delay nên phải setTimeout
    }
    /**
     * Khi thay đổi Có sử dụng giờ đầu tiên hay không
     * @param event true là có sử dụng giờ đầu tiên, false là không
     */
    changeFirstTime(event) {
        if (event) {
            this.addValidatorsToFields(this.firstTimeGroup, ['price', 'price2'], this.PRICE_VALIDATOR);
            this.addValidatorsToFields(this.firstTimeGroup, ['unit'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            this.addValidatorsToFields(this.firstTimeGroup, ['time_block'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)])]);
        }
        else {
            this.removeValidatorsFromFields(this.firstTimeGroup, ['price', 'price2', 'unit', 'time_block']);
        }
        this.initPriceCleave(event, ['.first_time_price']);
        if (this.management_product_price2)
            this.initPriceCleave(event, ['.first_time_price2']);
        setTimeout(() => {
            this.updateUnits();
        }, 200); // initPriceCleave có delay nên phải setTimeout
    }
    /**
     * Khởi tạo / Huỷ Cleave cho các trường giá tiền
     * @param event true là khởi tạo Cleave, false là huỷ Cleave
     * @param name tên của các trường cần khởi tạo Cleave
     */
    initPriceCleave(event, names) {
        if (event) {
            setTimeout(() => {
                this.cleaveJsService.createCleaves(names);
            }, 100);
        }
        else {
            this.cleaveJsService.destroyCleaves(names);
        }
    }
    /**
     * Nhận dữ liệu từ modal chọn thời gian đặc biệt
     * @param data object special_time được trả về. Nếu data có index thì là Edit, ngược lại là Add
     */
    onOkSpecialTime(data) {
        // Nếu có index thì là Edit
        if (data.index !== undefined) {
            // lấy days_of_week từ data và set
            const daysOfWeekArray = this.specialTimesArray.at(data.index).get('days_of_week');
            daysOfWeekArray.clear();
            (data.days_of_week || []).forEach((day) => {
                daysOfWeekArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(day));
            });
            this.specialTimesArray.at(data.index).patchValue({
                price: data.price,
                price2: this.management_product_price2 ? data.price2 : 0,
                time_slot_name: data.time_slot_name,
                specific_time: {
                    from_minute: data.specific_time.from_minute,
                    to_minute: data.specific_time.to_minute,
                },
            });
        }
        // Add
        else {
            // lấy days_of_week từ data
            const selectedDays = data.days_of_week || [];
            const daysOfWeekArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray(selectedDays.map((day) => new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(day)));
            this.specialTimesArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.price),
                price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.management_product_price2 ? data.price2 : 0),
                time_slot_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.time_slot_name),
                specific_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                    from_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.specific_time.from_minute),
                    to_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.specific_time.to_minute),
                }),
                days_of_week: daysOfWeekArray,
            }));
        }
        this.updateUnits();
    }
    /**
     * Chuyển từ phút sang giờ
     * @param minutes phút cần chuyển đổi
     * @returns chuỗi thời gian theo định dạng HH:mm
     * @example
     * convertMinutesToTime(90) => '01:30'
     */
    convertMinutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }
    /**
     * Chuyển đổi phút thành đối tượng Date
     * @param minutes Số phút cần chuyển đổi
     * @returns Đối tượng Date với giờ và phút đã được thiết lập
     *
     * @example
     * convertMinutesToDate(90) => Date object with hours = 1, minutes = 30
     * convertMinutesToDate(120) => Date object with hours = 2, minutes = 0
     */
    convertMinutesToDate(minutes) {
        const date = new Date();
        date.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0); // Set hours and minutes
        return date;
    }
    /**
     * Xóa thời gian đặc biệt
     * @param index index của thời gian đặc biệt cần xóa
     */
    deleteSpecialTime(index) {
        this.specialTimesArray.removeAt(index);
        this.updateUnits();
    }
    /**
     * Chỉnh sửa thời gian đặc biệt
     * @param index index của thời gian đặc biệt cần chỉnh sửa
     */
    editSpecialTime(index) {
        const specialTime = this.specialTimesArray.at(index).value;
        this.dataSpecialTimeEdit = JSON.parse(JSON.stringify(specialTime));
        this.dataSpecialTimeEdit.specific_time.from_minute = this.convertMinutesToDate(this.dataSpecialTimeEdit.specific_time.from_minute);
        this.dataSpecialTimeEdit.specific_time.to_minute = this.convertMinutesToDate(this.dataSpecialTimeEdit.specific_time.to_minute);
        this.dataSpecialTimeEdit.index = index;
        this.isShowModalSpecialTime = true;
    }
    /**
     * Thêm validator vào các trường trong FormGroup
     *
     * @param group FormGroup cần thêm validator.
     * @param fields Mảng tên trường mà validator sẽ được thêm vào.
     * @param validators Mảng các validator cần thêm.
     *
     * @example
     * addValidatorsToFields(this.productServiceForm, ['field1', 'field2'], [Validators.required]);
     * addValidatorsToFields(this.productServiceForm, ['field1', 'field2'], [Validators.required, Validators.minLength(3)]);
     */
    addValidatorsToFields(group, fields, validators) {
        fields.forEach((field) => {
            const control = group.get(field);
            if (control) {
                control.addValidators(validators);
                control.updateValueAndValidity();
            }
        });
    }
    /**
     * Xóa validator khỏi các trường trong FormGroup
     * Nếu không chỉ định validator, tất cả các validator sẽ bị xóa.
     *
     * @param group FormGroup cần xóa validator.
     * @param fields Mảng tên trường mà validator sẽ bị xóa.
     * @param validators (Optional) Các validator cần xóa. Nếu không cung cấp, tất cả các validator sẽ bị xóa.
     *
     * @example
     * removeValidatorsFromFields(this.productServiceForm, ['field1', 'field2']);
     * removeValidatorsFromFields(this.productServiceForm, ['field1', 'field2'], [Validators.required]);
     * removeValidatorsFromFields(this.productServiceForm, ['field1', 'field2'], [Validators.required, Validators.minLength(3)]);
     */
    removeValidatorsFromFields(group, fields, validators) {
        fields.forEach((field) => {
            const control = group.get(field);
            if (control) {
                // Xóa các validator đã chỉ định
                if (validators && validators.length > 0) {
                    validators.forEach((validator) => {
                        control.removeValidators(validator);
                    });
                }
                // Xóa tất cả các validator
                else {
                    control.clearValidators();
                }
                control.updateValueAndValidity();
            }
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
                .filter(res => res.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE)
                .findIndex(item => this.vhAlgorithm.changeAlias(item.name).toLowerCase() == this.vhAlgorithm.changeAlias(value).toLowerCase());
            // Đã tồn tại
            if (index !== -1) {
                this.vhComponent.showToast(1500, this.languageService.translate("Category existed"), 'alert-toast');
                return;
            }
            // Chưa tồn tại thì thêm
            this.isAddingCategory = true;
            this.vhQueryCafe.addCategory({ name: value, type: src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE }).then((res) => {
                console.log(res);
                this.categoryName.nativeElement.value = ''; // Reset input
                this.list_category.unshift(res); // Thêm vào đầu danh sách
                this.productServiceForm.controls['id_category'].setValue(res._id); // Chọn cái mới thêm
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
DetailServiceComponent.ɵfac = function DetailServiceComponent_Factory(t) { return new (t || DetailServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhImage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_services_cleave_js_service__WEBPACK_IMPORTED_MODULE_3__.CleaveJsService)); };
DetailServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DetailServiceComponent, selectors: [["app-detail-service"]], viewQuery: function DetailServiceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.categoryName = _t.first);
    } }, decls: 97, vars: 68, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-form", "", 3, "formGroup"], [1, "custom-box"], ["nz-row", ""], ["nz-col", "", "nzSpan", "4", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "17", 1, "title", "center-all-content"], ["nz-col", "", "nzSpan", "3", 1, "add-button"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [1, "bg-img", "center-all-content", 3, "click"], ["id", "file-upload", "type", "file", "accept", ".png, .jpg", 2, "display", "none", 3, "change"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", 3, "ngStyle", "src"], ["nz-row", "", 2, "padding-top", "20px"], ["nz-col", "", "nzSpan", "12"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder", "blur"], ["combineTplName", ""], ["nzShowSearch", "", "formControlName", "type", 3, "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["type", ""], ["formControlName", "id_category", "nzShowSearch", "", "nzAllowClear", "", 3, "nzDropdownRender", "nzPlaceHolder", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["addCategoryTemplate", ""], ["formControlName", "barcode", "nz-input", "", 3, "placeholder", "keyup", "blur"], ["box", ""], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 2, "margin", "8px 0 0 8px", 3, "nzTooltipTitle", "click"], [1, "validation-errors"], ["class", "error-message", 4, "ngIf"], [4, "ngIf"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], ["nz-col", "", "nzSpan", "24"], ["nz-checkbox", "", "formControlName", "allow_sell", 3, "ngModelChange"], ["nz-checkbox", "", "formControlName", "selling", 3, "ngModelChange"], ["nz-col", "", "nzSpan", "24", "style", "margin-top: 12px;", 4, "ngIf"], [3, "nzVisible", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "data", "specialTimes", "onClose", "onOk", 4, "ngIf"], [3, "nzLabel", "nzValue"], [3, "nzValue", "nzLabel"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "6px", "padding", "0px 6px 11px 6px"], ["nz-input", "", "type", "text", 3, "placeholder"], ["categoryName", ""], ["nz-button", "", 3, "nzLoading", "disabled", "click"], [1, "error-message"], ["color", "vh-red"], ["formControlName", "unit", "nz-input", "", 3, "placeholder", "blur"], ["combineTplUnit", ""], ["type", "text", "maxlength", "15", "formControlName", "price", "nz-input", "", "required", "", "pattern", "(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)", 1, "price", 3, "placeholder", "blur"], ["combineTplPriceImport", ""], ["type", "text", "maxlength", "15", "formControlName", "price2", "nz-input", "", "required", "", "pattern", "(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)", 1, "price2", 3, "placeholder", "blur"], ["combineTplPrice2Import", ""], ["formControlName", "time_warning", "nz-input", "", "type", "number", 3, "placeholder", "blur"], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "12px"], [1, "custom-box", 2, "margin-top", "12px"], ["nz-col", "", "nzSpan", "24", 2, "font-size", "1rem", "margin-bottom", "8px"], ["nz-col", "", "nzSpan", "6"], ["formControlName", "price", "nz-input", "", "placeholder", "0", "required", "", 1, "price", 3, "blur"], ["price", ""], ["nz-col", "", "nzSpan", "6", 4, "ngIf"], ["nz-col", "", "nzSpan", "18"], ["formControlName", "time_block", "nz-input", "", "type", "number", 2, "width", "98%", 3, "min", "placeholder", "blur"], ["time_block", ""], ["formControlName", "unit", "nzShowSearch", "", 3, "ngModelChange"], ["time_unit", ""], ["nz-col", "", "nzSpan", "24", 2, "margin-bottom", "12px"], ["nz-col", "", "nzSpan", "24", 2, "font-size", "1rem", "margin-bottom", "8px", "display", "flex", "align-items", "center", "justify-content", "space-between"], ["formControlName", "is_merge_block", 3, "ngModelChange"], ["formGroupName", "merge_block", 4, "ngIf"], ["formControlName", "is_first_time", 3, "ngModelChange"], ["formGroupName", "first_time", "nz-row", "", 4, "ngIf"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "gap", "12px"], ["nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["formControlName", "is_special_times", 3, "ngModelChange"], ["style", "height: 83%; overflow: hidden;", 4, "ngIf"], ["formControlName", "price2", "nz-input", "", "placeholder", "0", "required", "", 1, "price2", 3, "blur"], ["price2", ""], ["formGroupName", "merge_block"], ["formControlName", "price", "nz-input", "", "placeholder", "0", "required", "", 1, "merge_block_price", 3, "blur"], ["merge_block_price", ""], ["formControlName", "number", "nz-input", "", "type", "number", 2, "width", "98%", 3, "placeholder", "blur"], ["number", ""], ["formControlName", "price2", "nz-input", "", "placeholder", "0", "required", "", 1, "merge_block_price2", 3, "blur"], ["merge_block_price2", ""], ["formGroupName", "first_time", "nz-row", ""], ["formControlName", "price", "nz-input", "", "placeholder", "0", "required", "", 1, "first_time_price", 3, "blur"], ["first_time_price", ""], ["first_time_time_block", ""], ["first_time_unit", ""], ["formControlName", "price2", "nz-input", "", "placeholder", "0", "required", "", 1, "first_time_price2", 3, "blur"], ["first_time_price2", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [2, "height", "83%", "overflow", "hidden"], [3, "nzShowPagination", "nzBordered", "nzData", "nzNoResult"], ["nzWidth", "25%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "30%", "nzAlign", "left"], ["nzWidth", "20%", "nzAlign", "center"], ["nzWidth", "10%", "nzAlign", "center"], ["formArrayName", "special_times", 2, "cursor", "pointer"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "ant-table-placeholder", 4, "ngIf"], [3, "formGroupName"], ["nzAlign", "center"], [4, "ngIf", "ngIfElse"], ["timeRange", ""], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "cus-icon", 2, "margin-right", "8px", "cursor", "pointer", 3, "click"], ["nz-button", "", "nzType", "default", "nz-popconfirm", "", "nzPopconfirmPlacement", "top", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 2, "cursor", "pointer"], [4, "ngFor", "ngForOf"], [1, "ant-table-placeholder"], ["colspan", "5"], [3, "data", "specialTimes", "onClose", "onOk"]], template: function DetailServiceComponent_Template(rf, ctx) { if (rf & 1) {
        const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailServiceComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailServiceComponent_Template_button_click_14_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailServiceComponent_Template_div_click_21_listener() { return ctx.getFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DetailServiceComponent_Template_input_change_22_listener($event) { return ctx.onUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "nz-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DetailServiceComponent_Template_input_blur_33_listener() { return ctx.updateServiceForm("name", { name: ctx.productServiceForm.value.name }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, DetailServiceComponent_ng_template_35_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "nz-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "nz-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_Template_nz_select_ngModelChange_44_listener($event) { return ctx.onServiceTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, DetailServiceComponent_nz_option_46_Template, 2, 4, "nz-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, DetailServiceComponent_ng_template_47_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "nz-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "nz-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_Template_nz_select_ngModelChange_56_listener($event) { return ctx.updateServiceForm("id_category", { id_category: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, DetailServiceComponent_nz_option_58_Template, 1, 2, "nz-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, DetailServiceComponent_ng_template_59_Template, 8, 8, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function DetailServiceComponent_Template_input_keyup_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r153); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](70); return ctx.checkBarcode(_r8.value); })("blur", function DetailServiceComponent_Template_input_blur_69_listener() { return ctx.updateUnits(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailServiceComponent_Template_i_click_72_listener() { return ctx.setBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, DetailServiceComponent_div_76_Template, 4, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, DetailServiceComponent_ng_container_77_Template, 26, 13, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, DetailServiceComponent_div_78_Template, 11, 6, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_Template_label_ngModelChange_82_listener($event) { return ctx.updateServiceForm("allow_sell", { allow_sell: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DetailServiceComponent_Template_label_ngModelChange_87_listener($event) { return ctx.updateServiceForm("selling", { selling: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, DetailServiceComponent_div_90_Template, 8, 6, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, DetailServiceComponent_ng_container_91_Template, 69, 37, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "nz-modal", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function DetailServiceComponent_Template_nz_modal_nzVisibleChange_92_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function DetailServiceComponent_Template_nz_modal_nzOnCancel_92_listener() { return ctx.handleCancel(); })("nzOnOk", function DetailServiceComponent_Template_nz_modal_nzOnOk_92_listener() { return ctx.deleteService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, DetailServiceComponent_p_95_Template, 3, 3, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, DetailServiceComponent_app_special_time_96_Template, 1, 2, "app-special-time", 39);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](48);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 32, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.productServiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 34, "Service information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 36, "Delete"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](66, _c1, ctx.productServiceForm.value.img ? "100%" : "60px"))("src", ctx.productServiceForm.value.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 38, "Service name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 40, "Enter service name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 42, "Service type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 44, "Please select service type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.item_type_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 46, "Category"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 48, "Please select category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDropdownRender", _r6)("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 50, "Please select category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.list_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](65, 52, "Barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](71, 54, "Enter manually or use the barcode scanner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](73, 56, "Generate barcodes automatically"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICE);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICE);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](84, 58, "Available to sell"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 60, "Quick sale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICETIME);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.productServiceForm.value.type === ctx.VhType.SERVICETIME);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](93, 62, "Confirm"))("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](94, 64, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowModalSpecialTime);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__.NzCheckboxComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzOptionComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__.NzDividerComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_24__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTbodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__.NzPopconfirmDirective, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_27__.NzEmbedEmptyComponent, _special_time_special_time_component__WEBPACK_IMPORTED_MODULE_4__.SpecialTimeComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.TitleCasePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  height: 95%;\n  overflow: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #ff7f27 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  background: #f2f2f2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #8e8e93;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-select[_ngcontent-%COMP%] {\n  width: 90%;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.custom-box[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  padding: 16px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFBRjtBQUVFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRk47QUFLSTtFQUNFLFlBQUE7QUFITjtBQU9FO0VBQ0UsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFMSjtBQVFFO0VBQ0UsVUFBQTtFQUVBLDZCQUFBO0FBUEo7QUFVRTtFQUNFLGlCQUFBO0FBUko7QUFZQTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFURiIsImZpbGUiOiJkZXRhaWwtc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1hZGQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY3ZjI3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIC5iZy1pbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICBjb2xvcjogIzhlOGU5MztcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYW50LXNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQzhDN0NDICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b20tYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 53675:
/*!***********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/service/services-list/services-list.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesListComponent": () => (/* binding */ ServicesListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 70325);























function ServicesListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 36);
} }
function ServicesListComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", option_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzValue", option_r9._id);
} }
function ServicesListComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_tr_98_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const data_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.gotoDetailService(data_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", data_r10.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r10.type !== ctx_r6.VhType.SERVICETIME ? data_r10.unit : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, data_r10.unit));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r10.barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r10.name_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 9, data_r10.type === ctx_r6.VhType.SERVICE ? "Work" : "Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(data_r10.units[0].price));
} }
function ServicesListComponent_tr_152_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-switch", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ServicesListComponent_tr_152_Template_nz_switch_ngModelChange_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const data_r13 = restoredCtx.$implicit; return data_r13.delete_hidden = $event; })("ngModelChange", function ServicesListComponent_tr_152_Template_nz_switch_ngModelChange_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const data_r13 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.updateProductByField(data_r13._id, { delete_hidden: data_r13.delete_hidden }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", data_r13.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r13.units[0].unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r13.units[0].barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r13.name_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 8, data_r13.type === ctx_r8.VhType.SERVICE ? "Work" : "Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.vhAlgorithm.vhcurrencyunit_symbol(data_r13.units[0].price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", data_r13.delete_hidden);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class ServicesListComponent {
    constructor(router, vhQueryCafe, vhAlgorithm, languageService, cdRef, vhComponent) {
        this.router = router;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.languageService = languageService;
        this.cdRef = cdRef;
        this.vhComponent = vhComponent;
        this.list_subservice = [];
        this.list_show_service = [];
        this.list_show_service_not = [];
        this.list_service = [];
        /** Danh sách dịch vụ hiển thị trong tab Đã ẩn */
        this.list_show_service_hidden = [];
        /** Danh sách sản phẩm hiển thị trong tab Đã ẩn */
        this.list_subservice_hidden = [];
        this.list_service_hidden = [];
        this.list_show_hidden = [];
        /** Danh sách tất cả danh mục */
        this.list_category = [];
        /** Danh sách danh mục tìm kiếm */
        this.list_search_category = [];
        this.stateObj = {
            /** Từ khoá tìm kiếm */
            keySearch: '',
            /** id của danh mục được chọn */
            selectedValue: '1',
            /** Tab được chọn */
            tab: 0
        };
        this.VhType = src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType;
        /** hàm sort cho các cột */
        this.name_col = false; // chọn sort cột tên sản phẩm
        this.unit_col = false; // Chọn sắp xếp theo đơn vị
        this.barcode_col = false; // Chọn sắp xếp theo barcode
        this.name_category_col = false; // Chọn sắp xếp theo tên danh mục
        this.price_col = false; // Chọn sắp xếp theo giá
        this.type_col = false; // Chọn sắp xếp theo giá
        if (this.router.getCurrentNavigation().extras.state) {
            let stateObj = this.router.getCurrentNavigation().extras.state.stateObj;
            this.stateObj.keySearch = stateObj.keySearch;
            this.stateObj.selectedValue = stateObj.selectedValue;
            this.stateObj.tab = stateObj.tab;
        }
    }
    ngOnInit() {
        this.doRefreshData();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#service-list") && document.querySelector(".ant-tabs-tab") && document.querySelector(".ant-table-thead") && document.querySelector(".service-list-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#service-list").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".service-list-header").clientHeight - document.querySelector(".ant-table-pagination").clientHeight - document.querySelector(".ant-tabs-tab").clientHeight - 80 + "px";
        }
        this.cdRef.detectChanges();
    }
    ngOnDestroy() {
        this.observableAll.unsubscribe();
    }
    /**get data product, category */
    doRefreshData() {
        this.observableAll = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([
            this.vhQueryCafe.getObservableLocalProducts(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE_SERVICETIME),
            this.vhQueryCafe.getObservableLocalCategorys(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE)
        ]).subscribe((result) => {
            console.log(result);
            //xử lý dịch vụ
            this.list_service = result[0].map(item => this.processService(item));
            this.list_subservice = this.list_service;
            if (this.stateObj.keySearch) {
                this.searchProducts(this.stateObj.keySearch);
            }
            else {
                this.searchByCategory(this.stateObj.selectedValue);
            }
            //xử lý category
            this.list_category = result[1].filter(res => res.type == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE);
            if (!this.list_category.some(item => item._id == '1')) {
                this.list_category.unshift({ name: this.languageService.translate('All'), _id: '1' });
            }
            this.list_search_category = this.list_category;
        });
    }
    /**
     * Xử lí dữ liệu của sản phẩm (name_category)
     * @param item
     * @returns
     */
    processService(item) {
        return Object.assign(Object.assign({}, item), { name_category: this.vhQueryCafe.getlocalCategory(item.id_category) ? this.vhQueryCafe.getlocalCategory(item.id_category).name : '', unit: item.units[0].unit, barcode: item.units[0].barcode });
    }
    /**
     * Lấy danh sách sản phẩm đã ẩn
     */
    getHiddenProducts() {
        this.vhQueryCafe.refreshLocalProducts_Delete_Hidden(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE_SERVICETIME).then(() => {
            const hiddenProducts = this.vhQueryCafe.getlocalProducts(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE_SERVICETIME).filter(item => item.delete_hidden);
            this.list_service_hidden = hiddenProducts.map(item => this.processService(item));
            this.list_subservice_hidden = this.vhAlgorithm.sortStringbyASC(this.list_service_hidden, 'name');
            if (this.stateObj.keySearch) {
                this.searchProductsHidden(this.stateObj.keySearch);
            }
            else {
                this.searchByCategoryHidden(this.stateObj.selectedValue);
            }
        });
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
                this.list_service_hidden = this.list_service_hidden.filter(item => item._id != id);
                this.list_show_service_hidden = this.list_show_service_hidden.filter(item => item._id != id);
            }
        }, error => {
            console.log(error);
        }).catch(e => {
            console.log(e);
        });
    }
    /**
     * Lọc danh sách sản phẩm theo allow_sell
     */
    filterByAllowSell() {
        this.list_show_service = this.list_show.filter(item => item.delete_hidden == false);
        // this.list_show_service_not = this.list_show.filter(item => !item.delete_hidden == false);
    }
    /**
     * Tìm kiếm sản phẩm theo tên
     * @param value giá trị tìm kiếm từ input
     */
    searchProducts(value) {
        this.stateObj.keySearch = value;
        this.list_service = this.applySearchFilter(this.list_subservice, this.stateObj.keySearch, ['name']);
        this.searchByCategory(this.stateObj.selectedValue);
    }
    /**
     * Tìm kiếm sản phẩm (tab đã ẩn) theo tên
     * @param value giá trị tìm kiếm từ input
     */
    searchProductsHidden(value) {
        this.stateObj.keySearch = value;
        this.list_service_hidden = this.applySearchFilter(this.list_subservice_hidden, this.stateObj.keySearch, ['name']);
        this.searchByCategoryHidden(this.stateObj.selectedValue);
    }
    /**
     * Tìm kiếm sản phẩm theo tên, nếu không có giá trị tìm kiếm thì trả về tất cả, ngược lại thì lọc theo tên và barcode
     * @param products
     * @param searchValue
     * @param fields
     * @returns
     */
    applySearchFilter(products, searchValue, fields) {
        return searchValue
            ? this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(searchValue.toLowerCase()), products, fields)
            : products;
    }
    /**
     * Lọc sản phẩm theo danh mục sản phẩm
     */
    searchByCategory(value) {
        this.stateObj.selectedValue = value;
        this.list_show = this.applyCategoryFilter(this.list_service, value);
        this.filterByAllowSell();
    }
    /**
     * Lọc sản phẩm (tab đã ẩn) theo danh mục sản phẩm
     */
    searchByCategoryHidden(value) {
        this.stateObj.selectedValue = value;
        this.list_show_hidden = this.applyCategoryFilter(this.list_service_hidden, value);
        this.list_show_service_hidden = this.list_show_hidden;
    }
    /**
     * Lọc danh sách sản phẩm theo danh mục, nếu danh mục là '1' thì trả về tất cả sản phẩm, nếu không thì lọc theo id_category truyền vào
     * @param products
     * @param categoryId
     * @returns
     */
    applyCategoryFilter(products, categoryId) {
        return categoryId === '1'
            ? products
            : products.filter(item => item.id_category === categoryId);
    }
    /**
     * Lọc sản phẩm theo danh mục sản phẩm
     */
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.list_category = this.vhAlgorithm.searchList(tempVal, this.list_search_category, ['name']);
        else
            this.list_category = this.list_search_category;
    }
    /**
     * Khi thay đổi tab
     */
    changeTab(value) {
        this.stateObj.tab = value;
        if (value == '1') {
            this.getHiddenProducts();
        }
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/service']);
    }
    gotoAddService() {
        this.router.navigate(['/cafe/dashboard/management/service/service-list/add'], { state: { stateObj: this.stateObj } });
    }
    gotoCreateDataService() {
        let dataRestore = { keySearch: this.stateObj.keySearch, selectedValue: this.stateObj.selectedValue, selectedIndex: this.stateObj.tab };
        this.router.navigate(['/cafe/dashboard/management/service/service-list/create-data-service'], { state: { dataRestore } });
    }
    gotoDetailService(data, isFromHidden) {
        const state = {
            data: data,
            stateObj: this.stateObj
        };
        if (isFromHidden) {
            state['isFromHidden'] = true;
        }
        console.log(state);
        this.router.navigate(['/cafe/dashboard/management/service/service-list/detail'], {
            state: state
        });
    }
    /** Hàm thực hiện sắp xếp theo collection
     *
     * @param colName       // tên cột muôn sắp xếp
     * @param typeList      // Biến dùng để xác định danh sách sắp xếp là cho bán hay không cho bán
     */
    sortTable(colName, typeList) {
        let methodName = (colName === 'price' || colName === 'type') ? 'sortNumberby' : 'sortVietnameseby';
        let direction = this[colName + '_col'] ? 'ASC' : 'DESC';
        let listToSort = typeList === 'not'
            ? 'list_show_service_not'
            : typeList === 'allow'
                ? 'list_show_service'
                : 'list_show_service_hidden';
        this[listToSort] = this.vhAlgorithm[methodName + direction]([...this[listToSort]], colName);
    }
    /**
     * Xuất tất cả service
     * xuất ra file excel và tải về
     */
    exportListService() {
        let serviceExcel = [];
        this.list_service.forEach((product, index) => {
            let row = new Object();
            const category = this.vhQueryCafe.getlocalCategory(product['id_category']);
            row[this.languageService.translate("_name_service")] = product['name'];
            row[this.languageService.translate("_category")] = category ? category['name'] : '';
            row[this.languageService.translate("_unit")] = product['unit'];
            row[this.languageService.translate("_price")] = product['units'][0]['price'];
            row[this.languageService.translate("_barcode")] = product['barcode'];
            serviceExcel.push(row);
            if (index == this.list_service.length - 1) {
                this.vhAlgorithm.exportXLSX(serviceExcel, this.languageService.translate("Service list"));
            }
        });
    }
    /**
     * Xuất service Theo công
     * xuất ra file excel và tải về
     */
    exportListServiceByWork() {
        let serviceExcel = [];
        const serviceToExport = this.list_service.filter(s => s.type === src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE);
        serviceToExport.forEach((product, index) => {
            let row = new Object();
            const category = this.vhQueryCafe.getlocalCategory(product['id_category']);
            row[this.languageService.translate("_name_service")] = product['name'];
            row[this.languageService.translate("_category")] = category ? category['name'] : '';
            row[this.languageService.translate("_unit")] = product['unit'];
            row[this.languageService.translate("_price")] = product['units'][0]['price'];
            row[this.languageService.translate("_barcode")] = product['barcode'];
            serviceExcel.push(row);
            if (index == serviceToExport.length - 1) {
                this.vhAlgorithm.exportXLSX(serviceExcel, this.languageService.translate("Service list"));
            }
        });
    }
    /**
     * Xuất service Theo thời gian
     * xuất ra file excel và tải về
     */
    exportListServiceByTime() {
        let serviceExcel = [];
        const serviceToExport = this.list_service.filter(s => s.type === src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME);
        serviceToExport.forEach((product, index) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            let row = {};
            // Tên dịch vụ
            row[this.languageService.translate('_name_service')] = product['name'];
            // Danh mục
            const category = this.vhQueryCafe.getlocalCategory(product['id_category']);
            row[this.languageService.translate('_category')] = category ? category['name'] : '';
            // Barcode
            row[this.languageService.translate('_barcode')] = product['barcode'];
            // Giá bán (Giờ bán thường)
            row[this.languageService.translate('_price_regular')] = (_a = product['units'][0]) === null || _a === void 0 ? void 0 : _a['price'];
            // Khoảng thời gian (Giờ bán thường)
            row[this.languageService.translate('_time_block_regular')] = (_b = product['units'][0]) === null || _b === void 0 ? void 0 : _b['time_block'];
            // Đơn vị (Giờ bán thường)
            row[this.languageService.translate('_unit_regular')] = this.languageService.translate((_c = product['units'][0]) === null || _c === void 0 ? void 0 : _c['unit']);
            // Giá bán (Gộp block)
            row[this.languageService.translate('_price_merge_block')] = (_e = (_d = product['units'][0]) === null || _d === void 0 ? void 0 : _d['merge_block']) === null || _e === void 0 ? void 0 : _e.price;
            // Số lượng block gộp (Gộp block)
            row[this.languageService.translate('_merge_block_quantity')] = (_g = (_f = product['units'][0]) === null || _f === void 0 ? void 0 : _f['merge_block']) === null || _g === void 0 ? void 0 : _g.number;
            // Giá bán (Giờ đầu tiên)
            row[this.languageService.translate('_price_first_time')] = (_j = (_h = product['units'][0]) === null || _h === void 0 ? void 0 : _h['first_time']) === null || _j === void 0 ? void 0 : _j.price;
            // Khoảng thời gian (Giờ đầu tiên)
            row[this.languageService.translate('_time_block_first_time')] = (_l = (_k = product['units'][0]) === null || _k === void 0 ? void 0 : _k['first_time']) === null || _l === void 0 ? void 0 : _l.time_block;
            // Đơn vị (Giờ đầu tiên)
            row[this.languageService.translate('_unit_first_time')] = this.languageService.translate((_o = (_m = product['units'][0]) === null || _m === void 0 ? void 0 : _m['first_time']) === null || _o === void 0 ? void 0 : _o.unit);
            // Giờ đặc biệt
            if (((_p = product['units'][0]) === null || _p === void 0 ? void 0 : _p['special_times']) && ((_q = product['units'][0]) === null || _q === void 0 ? void 0 : _q['special_times'].length) > 0) {
                row[this.languageService.translate('_special_times')] = (_r = product['units'][0]) === null || _r === void 0 ? void 0 : _r['special_times'].map((special) => {
                    const translatedDays = special.days_of_week
                        .map((day) => this.languageService.translate(day))
                        .join('-');
                    return `${special.time_slot_name}, ${special.price}, ${special.specific_time.from_minute}-${special.specific_time.to_minute}, ${translatedDays}`;
                }).join('; ');
            }
            else {
                row[this.languageService.translate('_special_times')] = '';
            }
            serviceExcel.push(row);
            // Export file nếu là dòng cuối (sau khi thêm tất cả các dòng)
            if (index === serviceToExport.length - 1) {
                this.vhAlgorithm.exportXLSX(serviceExcel, this.languageService.translate('Service list'));
            }
        });
    }
}
ServicesListComponent.ɵfac = function ServicesListComponent_Factory(t) { return new (t || ServicesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent)); };
ServicesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ServicesListComponent, selectors: [["app-services-list"]], decls: 153, vars: 133, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "service-list", 1, "height-layout"], ["nz-row", "", 1, "service-list-header"], ["nz-col", "", "nzSpan", "4", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "10", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "value", "placeholder", "keyup"], ["box", ""], ["suffixIconSearch", ""], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "ngModel", "nzOnSearch", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-dropdown", "", "nz-button", "", "nzType", "default", 1, "btn-data", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "export", "nzTheme", "outline"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], ["nz-button", "", "nzType", "default", 1, "btn-data", 3, "click"], ["nz-icon", "", "nzType", "appstore-add", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle"], ["nz-row", "", 1, "total-item"], [2, "color", "var(--ion-color-vh-red)"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData"], ["allowSale", ""], ["nzWidth", "12%", "nzAlign", "center"], ["nzWidth", "25%", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "14%", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "20%", "nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["serviceHidden", ""], ["nzWidth", "17%", "nzAlign", "right"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "nzLabel", "nzValue"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "center", 2, "padding", "0"], ["onerror", "this.src='./assets/icon/management/noimage.svg'", 2, "width", "36px", 3, "src"], [2, "color", "var(--ion-color-vh-green)"], [1, "money-right"], [2, "cursor", "pointer"], [3, "ngModel", "ngModelChange"]], template: function ServicesListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ServicesListComponent_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); ctx.searchProducts(_r0.value); return ctx.stateObj.tab === 2 ? ctx.searchProductsHidden(_r0.value) : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ServicesListComponent_ng_template_15_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function ServicesListComponent_Template_nz_select_nzOnSearch_17_listener($event) { return ctx.search($event); })("ngModelChange", function ServicesListComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.stateObj.selectedValue = $event; })("ngModelChange", function ServicesListComponent_Template_nz_select_ngModelChange_17_listener($event) { ctx.searchByCategory($event); return ctx.stateObj.tab === 2 ? ctx.searchByCategoryHidden($event) : ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ServicesListComponent_nz_option_18_Template, 1, 2, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nz-dropdown-menu", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_li_click_28_listener() { return ctx.exportListService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_li_click_31_listener() { return ctx.exportListServiceByWork(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_li_click_34_listener() { return ctx.exportListServiceByTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_button_click_38_listener() { return ctx.gotoCreateDataService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_button_click_43_listener() { return ctx.gotoAddService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "nz-tabset", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzSelectedIndexChange", function ServicesListComponent_Template_nz_tabset_nzSelectedIndexChange_48_listener($event) { return ctx.stateObj.tab = $event; })("nzSelectChange", function ServicesListComponent_Template_nz_tabset_nzSelectChange_48_listener($event) { return ctx.changeTab($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "nz-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "nz-table", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_67_listener() { ctx.name_col = !ctx.name_col; return ctx.sortTable("name", "allow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_72_listener() { ctx.unit_col = !ctx.unit_col; return ctx.sortTable("unit", "allow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_77_listener() { ctx.barcode_col = !ctx.barcode_col; return ctx.sortTable("barcode", "allow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_82_listener() { ctx.name_category_col = !ctx.name_category_col; return ctx.sortTable("name_category", "allow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_87_listener() { ctx.type_col = !ctx.type_col; return ctx.sortTable("type", "allow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_92_listener() { ctx.price_col = !ctx.price_col; return ctx.sortTable("price", "allow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, ServicesListComponent_tr_98_Template, 17, 11, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "nz-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "nz-table", 25, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_117_listener() { ctx.name_col = !ctx.name_col; return ctx.sortTable("name", "hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_122_listener() { ctx.unit_col = !ctx.unit_col; return ctx.sortTable("unit", "hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_127_listener() { ctx.barcode_col = !ctx.barcode_col; return ctx.sortTable("barcode", "hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_132_listener() { ctx.name_category_col = !ctx.name_category_col; return ctx.sortTable("name_category", "hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_137_listener() { ctx.type_col = !ctx.type_col; return ctx.sortTable("type", "hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ServicesListComponent_Template_th_click_142_listener() { ctx.price_col = !ctx.price_col; return ctx.sortTable("price", "hidden"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](152, ServicesListComponent_tr_152_Template, 18, 10, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](59);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 63, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 65, "Services list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.stateObj.keySearch)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 67, "Search for service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx.stateObj.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownMenu", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 69, "Export data"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 71, "Export all service data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 73, "Export data of SERVICE CHARGE BY WORK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 75, "Export data of SERVICE CHARGE BY TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 77, "Create data"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 79, "Add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSelectedIndex", ctx.stateObj.tab);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 81, "Allow sale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 83, "Total"), " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.list_show_service.length, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 85, "services"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 87, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](127, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](128, _c1, ctx.heightScroll))("nzData", ctx.list_show_service);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 89, "Image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 91, "Service name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.name_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 93, "Unit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.unit_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 95, "Barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.barcode_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 97, "Category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.name_category_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 99, "_Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.type_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](95, 101, "Selling price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.price_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r5.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](100, 103, "Hidden not allow sell"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](103, 105, "Total"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.list_show_service_hidden.length, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](107, 107, "services"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 109, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](130, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](131, _c1, ctx.heightScroll))("nzData", ctx.list_show_service_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](116, 111, "Image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](120, 113, "Service name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.name_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](125, 115, "Unit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.unit_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](130, 117, "Barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.barcode_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](135, 119, "Category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.name_category_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](140, 121, "_Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.type_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](145, 123, "Selling price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.price_col == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](150, 125, "Hidden not for sale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r7.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropdownButtonDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__.NzMenuItemDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__.NzTabComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_21__.NzSwitchComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 95%;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nth.ant-table-cell[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 1200px) {\n  .btn-add[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n\n  .btn-data[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQ0E7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVGO0FBREU7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBR0o7QUFERTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUdKO0FBREU7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREU7RUFDRSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQUNFO0VBQ0UsaUJBQUE7QUFFSjtBQUNBOztFQUVFLGdDQUFBO0FBRUY7QUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0U7SUFDRSw0QkFBQTtFQUlGOztFQUZBO0lBQ0UsNEJBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InNlcnZpY2VzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgbnotc2VsZWN0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5idG4tZGF0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuLWFkZCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG50aC5hbnQtdGFibGUtY2VsbCB7XHJcbiAgYiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbn1cclxuLmFudC1idG46Zm9jdXMsXHJcbi5hbnQtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmJ0bi1hZGQge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1kYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 81726:
/*!********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/service/services-list/services-list.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesListModule": () => (/* binding */ ServicesListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-list.component */ 53675);
/* harmony import */ var _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-service/add-service.component */ 62586);
/* harmony import */ var _detail_service_detail_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-service/detail-service.component */ 51525);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _create_data_service_create_data_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-data-service/create-data-service.component */ 4005);
/* harmony import */ var _special_time_special_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./special-time/special-time.component */ 12892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);














const routes = [
    {
        path: '',
        component: _services_list_component__WEBPACK_IMPORTED_MODULE_0__.ServicesListComponent
    },
    {
        path: 'add',
        component: _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_2__.AddServiceComponent
    },
    {
        path: 'detail',
        component: _detail_service_detail_service_component__WEBPACK_IMPORTED_MODULE_3__.DetailServiceComponent
    },
    {
        path: 'create-data-service',
        component: _create_data_service_create_data_service_component__WEBPACK_IMPORTED_MODULE_4__.CreateDataServiceComponent
    }
];
class ServicesListModule {
}
ServicesListModule.ɵfac = function ServicesListModule_Factory(t) { return new (t || ServicesListModule)(); };
ServicesListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ServicesListModule });
ServicesListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ServicesListModule, { declarations: [_services_list_component__WEBPACK_IMPORTED_MODULE_0__.ServicesListComponent,
        _add_service_add_service_component__WEBPACK_IMPORTED_MODULE_2__.AddServiceComponent,
        _detail_service_detail_service_component__WEBPACK_IMPORTED_MODULE_3__.DetailServiceComponent,
        _create_data_service_create_data_service_component__WEBPACK_IMPORTED_MODULE_4__.CreateDataServiceComponent,
        _special_time_special_time_component__WEBPACK_IMPORTED_MODULE_5__.SpecialTimeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule] }); })();


/***/ }),

/***/ 12892:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/service/services-list/special-time/special-time.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialTimeComponent": () => (/* binding */ SpecialTimeComponent),
/* harmony export */   "timeRangeValidator": () => (/* binding */ timeRangeValidator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_cleave_js_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/cleave-js.service */ 22888);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 23465);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function SpecialTimeComponent_ng_container_2_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Name is required"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SpecialTimeComponent_ng_container_2_ng_template_13_ng_container_0_Template, 3, 3, "ng-container", 26);
} if (rf & 2) {
    const control_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r14.hasError("required"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_24_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Price is required"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Invalid price"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SpecialTimeComponent_ng_container_2_ng_template_24_ng_container_0_Template, 3, 3, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SpecialTimeComponent_ng_container_2_ng_template_24_ng_container_1_Template, 3, 3, "ng-container", 26);
} if (rf & 2) {
    const control_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r16.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r16.hasError("pattern"));
} }
function SpecialTimeComponent_ng_container_2_div_26_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Price 2 is required"));
} }
function SpecialTimeComponent_ng_container_2_div_26_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Invalid price 2"));
} }
function SpecialTimeComponent_ng_container_2_div_26_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SpecialTimeComponent_ng_container_2_div_26_ng_template_9_ng_container_0_Template, 3, 3, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SpecialTimeComponent_ng_container_2_div_26_ng_template_9_ng_container_1_Template, 3, 3, "ng-container", 26);
} if (rf & 2) {
    const control_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r21.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r21.hasError("pattern"));
} }
function SpecialTimeComponent_ng_container_2_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-form-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SpecialTimeComponent_ng_container_2_div_26_ng_template_9_Template, 2, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, "Price"), " 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", 0);
} }
function SpecialTimeComponent_ng_container_2_ng_template_48_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "From time is required"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SpecialTimeComponent_ng_container_2_ng_template_48_ng_container_0_Template, 3, 3, "ng-container", 26);
} if (rf & 2) {
    const control_r24 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.specialTimeType === "hour" && control_r24.hasError("required"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_59_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "To time is required"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_59_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "To time must be after From time"));
} }
function SpecialTimeComponent_ng_container_2_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SpecialTimeComponent_ng_container_2_ng_template_59_ng_container_0_Template, 3, 3, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SpecialTimeComponent_ng_container_2_ng_template_59_ng_container_1_Template, 3, 3, "ng-container", 26);
} if (rf & 2) {
    const control_r26 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.specialTimeType === "hour" && control_r26.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.specialTimeType === "hour" && control_r26.hasError("timeRangeInvalid"));
} }
const _c0 = function () { return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; };
function SpecialTimeComponent_ng_container_2_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "day-" + i_r30)("formControlName", i_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", "day-" + i_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0)[i_r30]));
} }
function SpecialTimeComponent_ng_container_2_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "At least one day must be selected"), " ");
} }
const _c1 = function () { return { standalone: true }; };
function SpecialTimeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SpecialTimeComponent_ng_container_2_ng_template_13_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, SpecialTimeComponent_ng_container_2_ng_template_24_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SpecialTimeComponent_ng_container_2_div_26_Template, 11, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "nz-radio-group", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SpecialTimeComponent_ng_container_2_Template_nz_radio_group_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.specialTimeType = $event; })("ngModelChange", function SpecialTimeComponent_ng_container_2_Template_nz_radio_group_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.changeTimeType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "nz-time-picker", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, SpecialTimeComponent_ng_container_2_ng_template_48_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "nz-time-picker", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, SpecialTimeComponent_ng_container_2_ng_template_59_Template, 2, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, SpecialTimeComponent_ng_container_2_div_63_Template, 6, 7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, SpecialTimeComponent_ng_container_2_div_64_Template, 3, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](60);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.specialTimeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 24, "Name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 26, "Enter name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 28, "Price"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.management_product_price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.specialTimeType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](38, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 30, "Whole day"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 32, "Time block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 34, "From"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.specialTimeType === "hour" ? "*" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMinuteStep", 5)("nzDisabled", ctx_r0.specialTimeType === "day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 36, "To"), "", ctx_r0.specialTimeType === "hour" ? "*" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMinuteStep", 5)("nzDisabled", ctx_r0.specialTimeType === "day");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.daysOfWeekArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.specialTimeForm.get("days_of_week").hasError("required") && ctx_r0.specialTimeForm.get("days_of_week").touched);
} }
function SpecialTimeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpecialTimeComponent_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.onClose.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpecialTimeComponent_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r36.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "Save"));
} }
class SpecialTimeComponent {
    constructor(vhComponent, languageService, vhQueryCafe, cleaveJsService) {
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.cleaveJsService = cleaveJsService;
        /** Khi đóng modal */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Khi submit modal */
        this.onOk = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Kiểu thời gian đặc biệt */
        this.specialTimeType = 'day';
        /** Ngày trong tuần */
        this.daysOfWeekList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        /** Validator cho trường giá tiền */
        this.PRICE_VALIDATOR = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('(^[0?=[.]] |^[^.,-][,0-9]*)(([.](?=[0-9]){1}[0-9]{0,5})|)'),
        ];
        this.management_product_price2 = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').management_product_price2;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        if (this.data) {
            // Nếu có data thì sẽ lấy kiểu thời gian đặc biệt từ data
            const fromMinute = ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.specific_time) === null || _b === void 0 ? void 0 : _b.from_minute)
                ? this.data.specific_time.from_minute.getHours() * 60 + this.data.specific_time.from_minute.getMinutes()
                : null;
            const toMinute = ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.specific_time) === null || _d === void 0 ? void 0 : _d.to_minute)
                ? this.data.specific_time.to_minute.getHours() * 60 + this.data.specific_time.to_minute.getMinutes()
                : null;
            this.specialTimeType = fromMinute === 0 && toMinute === 0 ? 'day' : 'hour';
        }
        this.initForm(this.data);
        this.initDaysOfWeek();
    }
    ngAfterViewInit() {
        this.cleaveJsService.createCleaves(['.special_time_price']);
        if (this.management_product_price2)
            this.cleaveJsService.createCleaves(['.special_time_price2']);
    }
    ngOnDestroy() {
        this.cleaveJsService.destroyCleaves(['.special_time_price']);
        if (this.management_product_price2)
            this.cleaveJsService.destroyCleaves(['.special_time_price2']);
    }
    /**
     * Khởi tạo form
     * @param data Dữ liệu để khởi tạo form nếu có thì sẽ set theo data, nếu không thì sẽ là mặc định như thêm mới
     */
    initForm(data) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.specialTimeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl((_a = data === null || data === void 0 ? void 0 : data.price) !== null && _a !== void 0 ? _a : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose(this.PRICE_VALIDATOR)),
            price2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl((_b = data === null || data === void 0 ? void 0 : data.price2) !== null && _b !== void 0 ? _b : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose(this.PRICE_VALIDATOR)),
            time_slot_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl((_c = data === null || data === void 0 ? void 0 : data.time_slot_name) !== null && _c !== void 0 ? _c : null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            specific_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
                from_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(((_d = data === null || data === void 0 ? void 0 : data.specific_time) === null || _d === void 0 ? void 0 : _d.from_minute) && this.specialTimeType === 'hour' ? (_e = data === null || data === void 0 ? void 0 : data.specific_time) === null || _e === void 0 ? void 0 : _e.from_minute : null),
                to_minute: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(((_f = data === null || data === void 0 ? void 0 : data.specific_time) === null || _f === void 0 ? void 0 : _f.to_minute) && this.specialTimeType === 'hour' ? (_g = data === null || data === void 0 ? void 0 : data.specific_time) === null || _g === void 0 ? void 0 : _g.to_minute : null),
            }),
            days_of_week: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([], atLeastOneCheckboxChecked),
        });
        // Nếu là Edit và là Khung giờ thì update validator cho các trường from_minute và to_minute
        if (this.data && this.specialTimeType === 'hour') {
            this.specialTimeForm.get('specific_time.from_minute').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
            this.specialTimeForm.get('specific_time.to_minute').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                timeRangeValidator(),
            ]));
            this.specialTimeForm.get('specific_time.from_minute').updateValueAndValidity();
            this.specialTimeForm.get('specific_time.to_minute').updateValueAndValidity();
        }
    }
    /**
     * Khởi tạo thêm checkbox cho các ngày trong tuần vào form
     */
    initDaysOfWeek() {
        const daysOfWeekArray = this.specialTimeForm.get('days_of_week');
        this.daysOfWeekList.forEach(day => {
            var _a, _b, _c;
            daysOfWeekArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl((_c = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.days_of_week) === null || _b === void 0 ? void 0 : _b.includes(day)) !== null && _c !== void 0 ? _c : false));
        });
    }
    /** Getters của days_of_week */
    get daysOfWeekArray() {
        return this.specialTimeForm.get('days_of_week');
    }
    /** Lấy danh sách các ngày đã chọn dựa trên checkbox với giá trị true/false */
    getSelectedDays() {
        return this.daysOfWeekArray.value
            .map((checked, index) => (checked ? this.daysOfWeekList[index] : null))
            .filter(day => day !== null);
    }
    /**
     * Khi thay đổi giá trị của loại thời gian là day hay hour (Cả ngày hay Khung giờ) thì sẽ set lại các validator cho các trường
     * @param event Kiểu thời gian đặc biệt
     */
    changeTimeType(event) {
        if (event === 'day') {
            this.specialTimeForm.get('specific_time').patchValue({
                from_minute: null,
                to_minute: null,
            });
            this.specialTimeForm.get('specific_time.from_minute').clearValidators();
            this.specialTimeForm.get('specific_time.to_minute').clearValidators();
        }
        else {
            this.specialTimeForm.get('specific_time.from_minute').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
            this.specialTimeForm.get('specific_time.to_minute').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                timeRangeValidator(),
            ]));
        }
        this.specialTimeForm.get('specific_time.from_minute').updateValueAndValidity();
        this.specialTimeForm.get('specific_time.to_minute').updateValueAndValidity();
    }
    /**
     * Kiểm tra xem khoảng thời gian đã chọn có bị trùng với các khoảng thời gian đã có hay không
     * @param selectedDays Mảng các ngày đã chọn
     * @param from_minute Số phút của from_minute
     * @param to_minute Số phút của to_minute
     * @returns true nếu không bị trùng, false nếu bị trùng
     */
    checkTimeRangeOverlap(selectedDays, from_minute, to_minute) {
        for (const item of this.specialTimes) {
            if (this.data && this.data.index === this.specialTimes.indexOf(item)) {
                // nếu là chính nó thì bỏ qua
                continue;
            }
            const existingFromMinute = item.specific_time.from_minute;
            const existingToMinute = item.specific_time.to_minute;
            if (selectedDays.some(day => item.days_of_week.includes(day))) {
                // nếu from >= existingFromMinute && from < existingToMinute
                // hoặc to > existingFromMinute && to <= existingToMinute
                // thì không hợp lệ
                if ((from_minute >= existingFromMinute && from_minute < existingToMinute) || (to_minute > existingFromMinute && to_minute <= existingToMinute)) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Khi nhấn nút thêm
     */
    onSubmit() {
        // Nếu form không hợp lệ
        if (!this.specialTimeForm.valid) {
            this.specialTimeForm.markAllAsTouched();
            this.specialTimeForm.markAsDirty();
            this.specialTimeForm.updateValueAndValidity();
            this.vhComponent.showToast(2000, this.languageService.translate('Please enter all valid required information'), 'alert-toast');
            return;
        }
        // Tính toán from to và days_of_week
        let fromMinute = 0;
        let toMinute = 1440;
        if (this.specialTimeType === 'hour') {
            const fromTime = this.specialTimeForm.get('specific_time.from_minute').value;
            const toTime = this.specialTimeForm.get('specific_time.to_minute').value;
            fromMinute = fromTime.getHours() * 60 + fromTime.getMinutes();
            toMinute = toTime.getHours() * 60 + toTime.getMinutes();
        }
        const selectedDays = this.getSelectedDays();
        // Kiểm tra xem có khung giờ nào bị trùng hay không
        const isTimeRangeValid = this.checkTimeRangeOverlap(selectedDays, fromMinute, toMinute);
        if (!isTimeRangeValid) {
            this.vhComponent.showToast(2000, this.languageService.translate('There is a time period overlapping with an existing time block'), 'alert-toast');
            return;
        }
        else {
            const data = Object.assign(Object.assign({}, this.specialTimeForm.value), { price: this.cleaveJsService.getRawValue('.special_time_price'), price2: this.management_product_price2 ? this.cleaveJsService.getRawValue('.special_time_price2') : 0, specific_time: {
                    from_minute: fromMinute,
                    to_minute: toMinute,
                }, days_of_week: selectedDays });
            // Nếu có data thì sẽ là edit
            if (this.data) {
                data.index = this.data.index;
            }
            this.onOk.emit(data);
        }
    }
}
SpecialTimeComponent.ɵfac = function SpecialTimeComponent_Factory(t) { return new (t || SpecialTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_cleave_js_service__WEBPACK_IMPORTED_MODULE_2__.CleaveJsService)); };
SpecialTimeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SpecialTimeComponent, selectors: [["app-special-time"]], inputs: { data: "data", specialTimes: "specialTimes" }, outputs: { onClose: "onClose", onOk: "onOk" }, decls: 5, vars: 6, consts: [["nzWidth", "50vw", 3, "nzTitle", "nzMaskClosable", "nzFooter", "nzVisible", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["modalFooterSpecialTime", ""], ["nz-form", "", 3, "formGroup"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "time_slot_name", "nz-input", "", "required", "", 3, "placeholder"], ["time_slot_name", ""], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "24"], ["formControlName", "price", "nz-input", "", "required", "", 1, "special_time_price", 3, "placeholder"], ["price", ""], ["nz-col", "", "nzSpan", "6", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "16px"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["nz-radio", "", "nzValue", "day"], ["nz-radio", "", "nzValue", "hour"], ["formGroupName", "specific_time"], ["formControlName", "from_minute", "nzFormat", "HH:mm", 3, "nzMinuteStep", "nzDisabled"], ["from_minute", ""], ["formControlName", "to_minute", "nzFormat", "HH:mm", 3, "nzMinuteStep", "nzDisabled"], ["to_minute", ""], ["formArrayName", "days_of_week", "nz-row", "", "nzJustify", "space-between"], ["class", "item-main-sector", "nz-col", "", "nzSpan", "3", 4, "ngFor", "ngForOf"], ["class", "ant-form-item-explain ant-form-item-explain-error", 4, "ngIf"], [4, "ngIf"], ["formControlName", "price2", "nz-input", "", "required", "", 1, "special_time_price2", 3, "placeholder"], ["price2", ""], ["nz-col", "", "nzSpan", "3", 1, "item-main-sector"], ["type", "checkbox", 3, "id", "formControlName"], [3, "for"], [1, "ant-form-item-explain", "ant-form-item-explain-error"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function SpecialTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnOk", function SpecialTimeComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.onSubmit(); })("nzOnCancel", function SpecialTimeComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.onClose.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SpecialTimeComponent_ng_container_2_Template, 65, 39, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SpecialTimeComponent_ng_template_3_Template, 6, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, (ctx.data ? "Edit" : "Add") + " special time block"))("nzMaskClosable", false)("nzFooter", _r1)("nzVisible", true);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_12__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_12__.NzRadioComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_13__.NzTimePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["@charset \"UTF-8\";\n.item-main-sector[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.item-main-sector[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.item-main-sector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  border: 1px solid #d9d9d9;\n  padding: 8px;\n  text-align: center;\n  position: relative;\n  font-size: 13px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.item-main-sector[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n}\n.item-main-sector[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  content: \"\u2713\";\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 11px;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  font-size: 12px;\n  color: #fff;\n  background-color: var(--ion-color-vh-green);\n  clip-path: polygon(0 0, 100% 100%, 100% 0);\n  top: -1px;\n  right: -1px;\n  z-index: 999;\n  border-top-right-radius: 5px;\n}\ninput[_ngcontent-%COMP%], nz-time-picker[_ngcontent-%COMP%] {\n  width: 90% !important;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWwtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxZQUFBO0FBRUY7QUFBRTtFQUNFLGFBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSwyQ0FBQTtBQUFKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUFOO0FBS0E7O0VBRUUscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBRkYiLCJmaWxlIjoic3BlY2lhbC10aW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLml0ZW0tbWFpbi1zZWN0b3Ige1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaXRlbS1tYWluLXNlY3RvciBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaXRlbS1tYWluLXNlY3RvciBsYWJlbCB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLml0ZW0tbWFpbi1zZWN0b3IgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbn1cbi5pdGVtLW1haW4tc2VjdG9yIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKck1wiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDEwMCUsIDEwMCUgMCk7XG4gIHRvcDogLTFweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuaW5wdXQsXG5uei10aW1lLXBpY2tlciB7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn0iXX0= */"] });
/**
 * Validator để kiểm tra xem có ít nhất một checkbox được chọn hay không
 * @param control
 * @returns
 */
function atLeastOneCheckboxChecked(control) {
    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray) {
        const isChecked = control.controls.some((checkbox) => checkbox.value === true);
        return isChecked ? null : { required: true }; // Trả về lỗi nếu không có checkbox nào được chọn
    }
    return null;
}
/**
 * Validator để đảm bảo rằng khoảng thời gian to_minute lớn hơn from_minute
 */
function timeRangeValidator() {
    return (control) => {
        var _a;
        if (!control.parent) {
            return null; // Nếu không có parent, không cần kiểm tra
        }
        const fromTime = (_a = control.parent.get('from_minute')) === null || _a === void 0 ? void 0 : _a.value;
        const toTime = control.value;
        if (fromTime instanceof Date && toTime instanceof Date) {
            const fromTotalMinutes = fromTime.getHours() * 3600 + fromTime.getMinutes() * 60;
            const toTotalMinutes = toTime.getHours() * 3600 + toTime.getMinutes() * 60;
            if (toTotalMinutes <= fromTotalMinutes) {
                return { timeRangeInvalid: true }; // Validation error
            }
        }
        return null; // Valid
    };
}


/***/ }),

/***/ 22888:
/*!****************************************************!*\
  !*** ./src/app/cafe/services/cleave-js.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CleaveJsService": () => (/* binding */ CleaveJsService)
/* harmony export */ });
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js */ 55674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


/**
 * Quản lý các cleavejs instances để tránh memory leak
 */
class CleaveJsService {
    constructor() {
        this.cleaveInstances = new Map();
    }
    /**
     * Tạo cleave instance với selector và options được chỉ định
     * @param selector dùng để xác định element cần tạo cleave instance, sẽ được truyền vào `document.querySelector`
     * @param options các options của `cleave.js`, mặc định nếu không truyền vào là `{ numeral: true, numeralThousandsGroupStyle: 'thousand' }`
     */
    createCleave(selector, options) {
        // Kiểm tra xem có trên DOM không
        if (!document.querySelector(selector)) {
            return;
        }
        // Nếu đã tồn tại thì destroy
        if (this.cleaveInstances.has(selector)) {
            this.destroyCleave(selector);
        }
        // Tạo mới
        const defaultOptions = {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand'
        };
        const finalOptions = Object.assign(Object.assign({}, defaultOptions), options);
        this.cleaveInstances.set(selector, new cleave_js__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector(selector), finalOptions));
    }
    /**
     * Tạo cleave instance với selectors và options được chỉ định
     * @param selectors dùng để xác định element cần tạo cleave instance, sẽ được truyền vào `document.querySelector`. VD: ['.input1', '.input2']
     * @param options các options của `cleave.js`, mặc định nếu không truyền vào là `{ numeral: true, numeralThousandsGroupStyle: 'thousand' }`
     */
    createCleaves(selectors, options) {
        selectors === null || selectors === void 0 ? void 0 : selectors.forEach((selector) => {
            // Kiểm tra xem có trên DOM không
            if (!document.querySelector(selector)) {
                // console.log(`CleaveJsService: Not found element with selector ${selector}`);
                return;
            }
            // Nếu đã tồn tại thì destroy
            if (this.cleaveInstances.has(selector)) {
                this.destroyCleave(selector);
            }
            // Tạo mới
            const defaultOptions = {
                numeral: true,
                numeralThousandsGroupStyle: 'thousand'
            };
            const finalOptions = Object.assign(Object.assign({}, defaultOptions), options);
            this.cleaveInstances.set(selector, new cleave_js__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector(selector), finalOptions));
        });
    }
    /**
     * Lấy giá trị khi chưa qua xử lý. Nếu chưa có thì sẽ tự tạo mới
     * @param selector dùng để xác định element cần lấy giá trị, sẽ được truyền vào `document.querySelector`
     * @returns giá trị khi chưa qua xử lý
     */
    getRawValue(selector) {
        if (!this.cleaveInstances.has(selector)) {
            this.createCleave(selector);
        }
        return this.cleaveInstances.get(selector).getRawValue();
    }
    /**
     * Destroy cleave với selector được chỉ định
     * @param selector dùng để xác định element cần destroy, sẽ được truyền vào `document.querySelector`
     */
    destroyCleave(selector) {
        if (this.cleaveInstances.has(selector)) {
            this.cleaveInstances.get(selector).destroy();
            this.cleaveInstances.delete(selector);
        }
    }
    /**
     * Destroy danh sách cleave với mảng selector được chỉ định
     * @param selector dùng để xác định các element cần destroy, sẽ được truyền vào `document.querySelector`
     */
    destroyCleaves(selectors) {
        selectors === null || selectors === void 0 ? void 0 : selectors.forEach((selector) => {
            if (this.cleaveInstances.has(selector)) {
                this.cleaveInstances.get(selector).destroy();
                this.cleaveInstances.delete(selector);
            }
        });
    }
    /**
     * Destroy tất cả cleave instances
     */
    destroyAllCleave() {
        var _a;
        (_a = this.cleaveInstances) === null || _a === void 0 ? void 0 : _a.forEach((cleave) => {
            cleave.destroy();
        });
        this.cleaveInstances.clear();
    }
}
CleaveJsService.ɵfac = function CleaveJsService_Factory(t) { return new (t || CleaveJsService)(); };
CleaveJsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CleaveJsService, factory: CleaveJsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_service_services-list_services-list_module_ts.js.map