"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_cafe_desktop_exchange-voucher_components_components_module_ts"],{

/***/ 50731:
/*!***************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/exchange-voucher/components/account-information/account-information.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountInformationComponent": () => (/* binding */ AccountInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function AccountInformationComponent_ng_container_2_ng_template_18_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function AccountInformationComponent_ng_container_2_ng_template_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Employee name is required"), " ");
} }
function AccountInformationComponent_ng_container_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AccountInformationComponent_ng_container_2_ng_template_18_ng_container_0_Template, 3, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountInformationComponent_ng_container_2_ng_template_18_ng_container_1_Template, 3, 3, "ng-container", 24);
} if (rf & 2) {
    const control_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r4.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r4.hasError("required"));
} }
function AccountInformationComponent_ng_container_2_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountInformationComponent_ng_container_2_div_71_Template_nz_select_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.updateEmployee(ctx_r7.detailEmployee); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "nz-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "nz-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "Gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "Select gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 8, "Female"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, "Male"));
} }
const _c0 = function (a0) { return { width: a0 }; };
function AccountInformationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountInformationComponent_ng_container_2_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.getFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AccountInformationComponent_ng_container_2_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.onUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-form-control", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function AccountInformationComponent_ng_container_2_Template_input_blur_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.updateEmployee(ctx_r12.detailEmployee); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AccountInformationComponent_ng_container_2_ng_template_18_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "nz-date-picker", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function AccountInformationComponent_ng_container_2_Template_nz_date_picker_blur_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.updateEmployee(ctx_r13.detailEmployee); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function AccountInformationComponent_ng_container_2_Template_input_blur_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.updateEmployee(ctx_r14.detailEmployee); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, AccountInformationComponent_ng_container_2_div_71_Template, 11, 12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "nz-date-picker", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AccountInformationComponent_ng_container_2_Template_nz_date_picker_ngModelChange_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.updateEmployee(ctx_r15.detailEmployee); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "b", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function AccountInformationComponent_ng_container_2_Template_input_blur_88_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.updateEmployee(ctx_r16.detailEmployee); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.detailEmployee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](52, _c0, ctx_r0.detailEmployee.value.img ? "100%" : "60px"))("src", ctx_r0.detailEmployee.value.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 22, "Employee name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 24, "Enter employee name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 26, "Email"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 28, "Enter email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 30, "Password"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 32, "Enter password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 34, "Phone number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", ctx_r0.callingCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 36, "Enter phone number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 38, "Date of birth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 40, "Select date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](65, 42, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 44, "Enter address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.employee.owner == "boss");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](78, 46, "Starting date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](84, 48, "Contract"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 50, "Enter contract"));
} }
class AccountInformationComponent {
    constructor(languageService, vhImage, vhAlgorithm, vhComponent, vhAuth, fncService) {
        var _a, _b;
        this.languageService = languageService;
        this.vhImage = vhImage;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.fncService = fncService;
        this.modalAccountInfo = false;
        this.closeAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Mã quốc gia */
        this.countryCode = this.fncService.defaultCountryCode;
        /** Calling code */
        this.callingCode = this.fncService.defaultCallingCode;
        /** Số điện thoại đã format. VD: 333 333 333 */
        this.formattedPhone = '';
        this.employee = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
        this.countryCode = (_a = this.employee.countryCode) !== null && _a !== void 0 ? _a : this.fncService.defaultCountryCode;
        this.callingCode = (_b = this.fncService.getCallingCodeFromCountryCode(this.countryCode)) !== null && _b !== void 0 ? _b : this.fncService.defaultCallingCode;
        this.formattedPhone = this.fncService.getFormattedPhoneNumber(this.employee.phone, this.countryCode);
        this.detailEmployee = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.img),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)])])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.formattedPhone, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.fncService.phoneValidator(() => this.countryCode)]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.gender),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.address),
            dateofbirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.dateofbirth),
            datework: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.datework),
            contract: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.employee.contract),
        });
    }
    getFile() {
        document.getElementById("file-upload").click();
    }
    /** Lấy hình ảnh từ Desktop */
    onUpload(e) {
        const file = e.target.files[0];
        this.vhImage.getThumbnailFromDesktop(file, 256, 256, "employees", this.detailEmployee.value["img"] || '').then(photoURL => {
            this.detailEmployee.controls["img"].setValue(photoURL);
            this.vhComponent.showToast(2000, (this.languageService.translate("Image was loaded successfully")), 'success-toast');
            this.updateEmployee(this.detailEmployee);
        }, () => {
            this.vhComponent.showToast(2000, (this.languageService.translate("Image was failed")), 'alert-toast');
        });
    }
    closeModal() {
        this.closeAccount.emit(false);
    }
    /**Cập nhật thông tin thay đổi */
    updateEmployee(formValue) {
        if (formValue.valid) {
            let value = Object.assign({}, formValue.value);
            if (value.phone) {
                value.countryCode = this.countryCode;
                value.phone = this.fncService.getNationalPhoneNumber(value.phone, this.countryCode);
                value.phoneNumber = this.fncService.getInternationalPhoneNumber(value.phone, this.countryCode);
            }
            this.vhAuth.updateEmployee(this.employee._id, value).catch(err => { console.error(err); });
        }
    }
}
AccountInformationComponent.ɵfac = function AccountInformationComponent_Factory(t) { return new (t || AccountInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhImage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
AccountInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountInformationComponent, selectors: [["app-account-information"]], inputs: { modalAccountInfo: "modalAccountInfo" }, outputs: { closeAccount: "closeAccount" }, decls: 3, vars: 5, consts: [["nzWidth", "60vw", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["id", "layout-employee-form", "nz-form", "", 1, "ant-table-body", 3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [1, "bg-img", "center-all-content", 3, "click"], ["id", "file-upload", "type", "file", "accept", ".png, .jpg", 2, "display", "none", 3, "change"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", 3, "ngStyle", "src"], ["nz-col", "", "nzSpan", "12"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "5", "required", "", 3, "placeholder", "blur"], ["combineTplName", ""], ["readonly", "", "type", "email", "formControlName", "email", "nz-input", "", "required", "", 3, "placeholder"], ["readonly", "", "formControlName", "password", "type", "password", "nz-input", "", 3, "placeholder"], [1, "calling-code"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["formControlName", "phone", "readonly", "", "type", "tel", "nz-input", "", "required", "", 3, "placeholder"], ["formControlName", "dateofbirth", 3, "nzPlaceHolder", "blur"], ["formControlName", "address", "nz-input", "", 3, "placeholder", "blur"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], ["nz-row", ""], ["formControlName", "datework", 2, "width", "95%", 3, "ngModelChange"], ["formControlName", "contract", "nz-input", "", 2, "width", "95%", 3, "placeholder", "blur"], [4, "ngIf"], ["nzShowSearch", "", "formControlName", "gender", 2, "border", "none !important", 3, "nzPlaceHolder", "ngModelChange"], ["nzValue", "Female", 3, "nzLabel"], ["nzValue", "Male", 3, "nzLabel"]], template: function AccountInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function AccountInformationComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.modalAccountInfo = $event; })("nzOnOk", function AccountInformationComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.closeModal(); })("nzOnCancel", function AccountInformationComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccountInformationComponent_ng_container_2_Template, 90, 54, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, "Account information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.modalAccountInfo)("nzFooter", null);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__.NzDatePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: [".bg-img[_ngcontent-%COMP%] {\n  width: 120px;\n  padding: 4px;\n  height: 120px;\n  background: #f2f2f2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 10px;\n  margin-bottom: 8px;\n}\n.bg-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #8e8e93;\n}\n.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-date-picker[_ngcontent-%COMP%] {\n  margin: 0 8px 12px 0;\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code) {\n  position: relative;\n}\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code)   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n.calling-code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 60px;\n  color: var(--ion-color-vh-gray);\n  cursor: pointer;\n  grid-gap: 2px;\n  gap: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFDQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBR0o7QUFEQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFJSjtBQURBO0VBQ0Usa0JBQUE7QUFJRjtBQURBO0VBQ0Usa0JBQUE7QUFJRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBSUYiLCJmaWxlIjoiYWNjb3VudC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICBjb2xvcjogIzhlOGU5MztcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFudC1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5uei1kYXRlLXBpY2tlciB7XHJcbiAgICBtYXJnaW46IDAgOHB4IDEycHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm56LWlucHV0LWdyb3VwOmhhcyguY2FsbGluZy1jb2RlKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5uei1pbnB1dC1ncm91cDpoYXMoLmNhbGxpbmctY29kZSkgaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogNjBweDtcclxufVxyXG5cclxuLmNhbGxpbmctY29kZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNjBweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBnYXA6IDJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 76570:
/*!*************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/exchange-voucher/components/add-customer/add-customer.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerComponent": () => (/* binding */ AddCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function AddCustomerComponent_ng_container_2_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Customer name is required"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r12.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "_Invalid phone number"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Phone number is required"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddCustomerComponent_ng_container_2_ng_template_28_ng_container_1_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r14.hasError("invalidPhone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r14.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Phone number already exists"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_container_53_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Tax code is required"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_container_53_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_container_53_ng_template_11_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r19.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddCustomerComponent_ng_container_2_ng_container_53_ng_template_11_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "Tax code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "Enter tax code"));
} }
function AddCustomerComponent_ng_container_2_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_div_54_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.selectedValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "nz-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "nz-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "nz-date-picker", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "Gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 9, "Select gender"))("ngModel", ctx_r9.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 11, "Female"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 13, "Male"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 15, "Date of birth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 17, "Select date of birth"));
} }
function AddCustomerComponent_ng_container_2_nz_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 20);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", item_r23._id)("nzLabel", item_r23.name);
} }
function AddCustomerComponent_ng_container_2_div_118_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "This field is required"), " ");
} }
function AddCustomerComponent_ng_container_2_div_118_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_div_118_ng_template_11_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r26.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddCustomerComponent_ng_container_2_div_118_ng_template_11_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "Payment term"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "Enter number of days"));
} }
const _c0 = function () { return { minRows: 3, maxRows: 5 }; };
function AddCustomerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddCustomerComponent_ng_container_2_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_container_2_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.openSearchCountryCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddCustomerComponent_ng_container_2_Template_input_input_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.formatPhoneNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddCustomerComponent_ng_container_2_ng_template_28_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddCustomerComponent_ng_container_2_div_30_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "nz-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_Template_nz_select_ngModelChange_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.changeBusiness($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "nz-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "nz-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, AddCustomerComponent_ng_container_2_ng_container_53_Template, 13, 7, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AddCustomerComponent_ng_container_2_div_54_Template, 20, 19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "nz-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, AddCustomerComponent_ng_container_2_nz_option_65_Template, 1, 2, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](105, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_Template_label_ngModelChange_115_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.changeDebt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](117, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, AddCustomerComponent_ng_container_2_div_118_Template, 13, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.addCustomerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 39, "Customer name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 41, "Enter customer name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 43, "Phone number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", ctx_r0.callingCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.formattedPhone)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 45, "Enter customer phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isExitsPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 47, "Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 49, "Email is not correct"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 51, "Enter customer mail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 53, "Customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 55, "Select customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 57, "Individual"))("nzValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 59, "Business/Business household"))("nzValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.addCustomerForm.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.addCustomerForm.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 61, "Customer tier"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAllowClear", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 63, "Undefined"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.customerGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 65, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 67, "Enter address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 69, "Country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 71, "Enter country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 73, "Province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](95, 75, "Enter province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](100, 77, "District"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](105, 79, "Enter district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 81, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](112, 83, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](87, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](117, 85, "Debit permission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.addCustomerForm.value.debt_enable);
} }
const _c1 = function (a0) { return { opacity: a0 }; };
function AddCustomerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.addCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.addCustomerForm.invalid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r2.addCustomerForm.invalid ? 0.5 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "Add"));
} }
class AddCustomerComponent {
    constructor(vhComponent, lang, vhQueryCafe, functionService) {
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.vhQueryCafe = vhQueryCafe;
        this.functionService = functionService;
        this.showDrawerAddCusomer = false;
        this.closeAddCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.customerGroups = this.vhQueryCafe.getlocalCustomerClasss();
        /** Kiểm tra số điện thoại đã tồn tại ha chưa để hiển thị thông báo */
        this.isExitsPhone = false;
        /** Mã quốc gia */
        this.countryCode = this.functionService.defaultCountryCode;
        /** Calling code */
        this.callingCode = this.functionService.defaultCallingCode;
        /** Số điện thoại đã format. VD: 333 333 333 */
        this.formattedPhone = '';
    }
    ngOnInit() {
        this.initaddCustomerForm();
    }
    close(success) {
        this.closeAddCustomer.emit(success ? true : false);
    }
    initaddCustomerForm() {
        this.addCustomerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            datebirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                this.functionService.phoneValidator(() => this.countryCode),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            debt_enable: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true),
            id_customer_class: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1),
            id_branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.vhQueryCafe.getDefaultBranch()._id),
            time_for_payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            delete_hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            isBusiness: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            taxcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
        });
    }
    addCustomer() {
        this.vhComponent.showLoading("").then(() => {
            let customer = Object.assign({}, this.addCustomerForm.value);
            const phoneNumberValue = customer.phone;
            customer.countryCode = this.countryCode;
            customer.phone = this.functionService.getNationalPhoneNumber(phoneNumberValue, this.countryCode);
            customer.phoneNumber = this.functionService.getInternationalPhoneNumber(phoneNumberValue, this.countryCode);
            customer.date = new Date();
            if (customer.isBusiness) {
                delete customer.gender;
                delete customer.datebirth;
            }
            else {
                delete customer.taxcode;
            }
            this.vhQueryCafe.addCustomer(customer)
                .then((res) => {
                if (res.vcode == 0) {
                    this.vhComponent.hideLoading(0);
                    setTimeout(() => {
                        this.vhComponent.showToast(1500, `${this.lang.translate("Customer")} ${customer.name} ${this.lang.translate("has been added successfully")}`, "success-toast");
                        this.closeAddCustomer.emit(res['_id']);
                    }, 300);
                }
                else if (res.vcode == 1) {
                    //This phone number is already in use with another customer
                    this.vhComponent.hideLoading(0);
                    this.isExitsPhone = true;
                    this.vhComponent.showToast(1500, this.lang.translate("This phone number is already in use with another customer"), 'alert-toast');
                }
            }, error => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(1500, this.lang.translate("An eror occured while adding customer. Please try again"), 'alert-toast');
            });
        });
    }
    /**
     * Khi thay đổi Loại khách hàng
     */
    changeBusiness(event) {
        var _a, _b, _c, _d;
        // taxcode required khi isBusiness = true
        if (event) {
            (_a = this.addCustomerForm.get('taxcode')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            (_b = this.addCustomerForm.get('taxcode')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
        }
        else {
            (_c = this.addCustomerForm.get('taxcode')) === null || _c === void 0 ? void 0 : _c.clearValidators();
            (_d = this.addCustomerForm.get('taxcode')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
        }
    }
    changeDebt() {
        if (this.addCustomerForm.value.debt_enable)
            this.addCustomerForm.addControl('time_for_payment', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]));
        else
            this.addCustomerForm.removeControl('time_for_payment');
    }
    /**
     * Mở modal chọn mã quốc gia
     */
    openSearchCountryCode() {
        this.functionService.openSearchCountryCode().then((data) => {
            var _a, _b, _c;
            this.countryCode = data.code;
            this.callingCode = data.callingCode;
            this.formattedPhone = this.functionService.getFormattedPhoneNumber(this.addCustomerForm.value.phone, this.countryCode);
            (_a = this.addCustomerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.markAsTouched();
            (_b = this.addCustomerForm.get('phone')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
            (_c = this.addCustomerForm.get('phone')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
        }).catch((error) => {
            console.error('Error opening country code search:', error);
        });
    }
    /**
     * Format số điện thoại khi nhập và set vào form
     * @param event Sự kiện khi nhập số điện thoại
     */
    formatPhoneNumber(event) {
        var _a;
        // Lấy số điện thoại đã format
        const input = event.target.value;
        this.formattedPhone = this.functionService.getFormattedPhoneNumber(input, this.countryCode);
        // Cập nhật vào form
        (_a = this.addCustomerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.setValue(this.formattedPhone, { emitEvent: false });
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
AddCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["app-add-customer"]], inputs: { showDrawerAddCusomer: "showDrawerAddCusomer" }, outputs: { closeAddCustomer: "closeAddCustomer" }, decls: 5, vars: 7, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzFooter", "nzOnClose"], [4, "nzDrawerContent"], ["footerAddCustomer", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], [1, "calling-code", 3, "click"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["formControlName", "phone", "type", "tel", "nz-input", "", "required", "", 3, "value", "placeholder", "input"], ["combineTplPhone", ""], ["class", "ng-tns-c300-27 ant-form-item-explain ant-form-item-explain-error ng-star-inserted", "ng-reflect-ng-class", "ant-form-item-explain,ant-form", 4, "ngIf"], ["type", "email", "formControlName", "email", "nz-input", "", 3, "placeholder"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "isBusiness", 3, "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue"], [4, "ngIf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nzShowSearch", "", "formControlName", "id_customer_class", 3, "nzAllowClear"], [3, "nzValue", "nzLabel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["formControlName", "address", "nz-input", "", 3, "placeholder"], ["formControlName", "country", "nz-input", "", 3, "placeholder"], ["formControlName", "province", "nz-input", "", 3, "placeholder"], ["formControlName", "district", "nz-input", "", 3, "placeholder"], ["nz-input", "", "formControlName", "note", 3, "placeholder", "nzAutosize"], ["nz-col", "", "nzSpan", "12", 2, "padding-top", "22px"], ["nz-checkbox", "", "formControlName", "debt_enable", 3, "ngModelChange"], ["nz-row", "", 4, "ngIf"], ["ng-reflect-ng-class", "ant-form-item-explain,ant-form", 1, "ng-tns-c300-27", "ant-form-item-explain", "ant-form-item-explain-error", "ng-star-inserted"], [1, "ng-tns-c300-27", "ng-trigger", "ng-trigger-helpMotion"], ["formControlName", "taxcode", "nz-input", "", 3, "placeholder"], ["taxcode", ""], ["nz-row", "", "nzGutter", "16"], ["nz-col", "", "nzSpan", "12"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "gender", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], ["nzValue", "Female", 3, "nzLabel"], ["nzValue", "Male", 3, "nzLabel"], ["formControlName", "datebirth", 3, "nzPlaceHolder"], ["nz-row", ""], ["formControlName", "time_for_payment", "nz-input", "", "required", "", "type", "number", "min", "0", 3, "placeholder"], ["combineTplTime", ""], [1, "footerAddCustomer", 2, "float", "right"], ["nz-button", "", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", 3, "disabled", "ngStyle", "click"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function AddCustomerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddCustomerComponent_ng_container_2_Template, 119, 88, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddCustomerComponent_ng_template_3_Template, 7, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, "Add customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzVisible", ctx.showDrawerAddCusomer)("nzFooter", _r1);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__.NzCheckboxComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n  background-color: var(--ion-color-vh-white);\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-white);\n  border: 1px solid var(--ion-color-vh-green);\n  background-color: var(--ion-color-vh-green);\n}\n\nnz-date-picker[_ngcontent-%COMP%], nz-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code) {\n  position: relative;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code)   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.calling-code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 60px;\n  color: var(--ion-color-vh-gray);\n  cursor: pointer;\n  grid-gap: 2px;\n  gap: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTs7RUFFRSxvQ0FBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQUVKOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7QUFFSjs7QUFDQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBRUYiLCJmaWxlIjoiYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxufVxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyQWRkQ3VzdG9tZXIge1xyXG4gIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICB9XHJcbiAgYnV0dG9uOm50aC1jaGlsZCgyKSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgfVxyXG59XHJcbm56LWRhdGUtcGlja2VyLFxyXG5uei1zZWxlY3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubnotaW5wdXQtZ3JvdXA6aGFzKC5jYWxsaW5nLWNvZGUpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm56LWlucHV0LWdyb3VwOmhhcyguY2FsbGluZy1jb2RlKSBpbnB1dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4uY2FsbGluZy1jb2RlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 448:
/*!*******************************************************************************!*\
  !*** ./src/app/cafe/desktop/exchange-voucher/components/components.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer/customer.component */ 23880);
/* harmony import */ var _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-customer/add-customer.component */ 76570);
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ 26693);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retail-info/retail-info.component */ 15287);
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-information/account-information.component */ 50731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);












class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_customer_customer_component__WEBPACK_IMPORTED_MODULE_0__.CustomerComponent,
        _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_2__.AddCustomerComponent,
        _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__.CustomerProfileComponent,
        _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__.CustomerProfileComponent,
        _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_4__.RetailInfoComponent,
        _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_5__.AccountInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule], exports: [_customer_customer_component__WEBPACK_IMPORTED_MODULE_0__.CustomerComponent,
        _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_2__.AddCustomerComponent,
        _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_3__.CustomerProfileComponent,
        _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_4__.RetailInfoComponent] }); })();


/***/ }),

/***/ 26693:
/*!*********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/exchange-voucher/components/customer-profile/customer-profile.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerProfileComponent": () => (/* binding */ CustomerProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function CustomerProfileComponent_ng_container_1_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Customer name is required"), " ");
} }
function CustomerProfileComponent_ng_container_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CustomerProfileComponent_ng_container_1_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r10.hasError("required"));
} }
function CustomerProfileComponent_ng_container_1_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "_Invalid phone number"));
} }
function CustomerProfileComponent_ng_container_1_ng_template_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Phone number is required"));
} }
function CustomerProfileComponent_ng_container_1_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CustomerProfileComponent_ng_container_1_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomerProfileComponent_ng_container_1_ng_template_28_ng_container_1_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r12.hasError("invalidPhone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r12.hasError("required"));
} }
function CustomerProfileComponent_ng_container_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Phone number already exists"), " ");
} }
function CustomerProfileComponent_ng_container_1_ng_container_53_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Tax code is required"), " ");
} }
function CustomerProfileComponent_ng_container_1_ng_container_53_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CustomerProfileComponent_ng_container_1_ng_container_53_ng_template_11_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r17.hasError("required"));
} }
function CustomerProfileComponent_ng_container_1_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CustomerProfileComponent_ng_container_1_ng_container_53_ng_template_11_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "Tax code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "Enter tax code"));
} }
function CustomerProfileComponent_ng_container_1_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "nz-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "nz-date-picker", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "Gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 8, "Select gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, "Female"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 12, "Male"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 14, "Date of birth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 16, "Select date of birth"));
} }
const _c0 = function () { return { minRows: 3, maxRows: 5 }; };
function CustomerProfileComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CustomerProfileComponent_ng_container_1_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerProfileComponent_ng_container_1_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.openSearchCountryCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CustomerProfileComponent_ng_container_1_Template_input_input_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.formatPhoneNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CustomerProfileComponent_ng_container_1_ng_template_28_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, CustomerProfileComponent_ng_container_1_div_30_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "nz-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "nz-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "nz-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, CustomerProfileComponent_ng_container_1_ng_container_53_Template, 13, 7, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, CustomerProfileComponent_ng_container_1_div_54_Template, 20, 18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](101, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](106, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.formEditCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 33, "Customer name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 35, "Enter customer name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 37, "Phone number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", ctx_r0.callingCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.formattedPhone)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 39, "Enter customer phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isExitsPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 41, "Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 43, "Email is not correct"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 45, "Enter customer mail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 47, "Customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 49, "Select customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 51, "Individual"))("nzValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 53, "Business/Business household"))("nzValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formEditCustomer.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.formEditCustomer.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 55, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 57, "Enter address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 59, "Country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](74, 61, "Enter country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 63, "Province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](84, 65, "Enter province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 67, "District"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](94, 69, "Enter district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](99, 71, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](101, 73, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](77, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](106, 75, "Debit permission"));
} }
const _c1 = function (a0) { return { opacity: a0 }; };
function CustomerProfileComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerProfileComponent_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomerProfileComponent_ng_template_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.formEditCustomer.invalid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r2.formEditCustomer.invalid ? 0.5 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "Save"));
} }
class CustomerProfileComponent {
    constructor(vhQueryCafe, functionService, vhComponent, lang) {
        this.vhQueryCafe = vhQueryCafe;
        this.functionService = functionService;
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.visibleInfoCustomer = false;
        this.closeInfoCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Kiểm tra số điện thoại đã tồn tại ha chưa để hiển thị thông báo */
        this.isExitsPhone = false;
        /** Mã quốc gia */
        this.countryCode = this.functionService.defaultCountryCode;
        /** Calling code */
        this.callingCode = this.functionService.defaultCallingCode;
        /** Số điện thoại đã format. VD: 333 333 333 */
        this.formattedPhone = '';
    }
    ngOnInit() {
        this.initformEditCustomer();
    }
    goBack() {
        this.closeInfoCustomer.emit(false);
    }
    initformEditCustomer() {
        this.formattedPhone = this.functionService.getFormattedPhoneNumber(this.customer.phone, this.countryCode);
        this.formEditCustomer = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.img),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.gender),
            datebirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.datebirth),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.formattedPhone, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                this.functionService.phoneValidator(() => this.countryCode),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.address),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.country),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.province),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.district),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.note),
            debt_enable: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.debt_enable),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer._id),
            isBusiness: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.isBusiness),
            taxcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.customer.taxcode),
        });
        // taxcode required khi isBusiness = true
        if (this.customer.isBusiness) {
            this.formEditCustomer.get('taxcode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            this.formEditCustomer.get('taxcode').updateValueAndValidity();
        }
    }
    save() {
        let customer = Object.assign({}, this.formEditCustomer.value);
        const phoneNumberValue = customer.phone;
        customer.countryCode = this.countryCode;
        customer.phone = this.functionService.getNationalPhoneNumber(phoneNumberValue, this.countryCode);
        customer.phoneNumber = this.functionService.getInternationalPhoneNumber(phoneNumberValue, this.countryCode);
        if (customer.isBusiness) {
            delete customer.gender;
            delete customer.datebirth;
        }
        else {
            delete customer.taxcode;
        }
        this.vhQueryCafe.updateCustomer(this.customer._id, customer).then((res) => {
            if (res.vcode == 0) {
                this.closeInfoCustomer.emit(true);
            }
            else if (res.vcode == 1) {
                //This phone number is already in use with another customer
                this.vhComponent.showToast(1500, this.lang.translate("This phone number is already in use with another customer"), 'alert-toast');
            }
        });
    }
    /**
     * Mở modal chọn mã quốc gia
     */
    openSearchCountryCode() {
        this.functionService.openSearchCountryCode().then((data) => {
            var _a, _b, _c;
            this.countryCode = data.code;
            this.callingCode = data.callingCode;
            this.formattedPhone = this.functionService.getFormattedPhoneNumber(this.formEditCustomer.value.phone, this.countryCode);
            (_a = this.formEditCustomer.get('phone')) === null || _a === void 0 ? void 0 : _a.markAsTouched();
            (_b = this.formEditCustomer.get('phone')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
            (_c = this.formEditCustomer.get('phone')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
        }).catch((error) => {
            console.error('Error opening country code search:', error);
        });
    }
    /**
     * Format số điện thoại khi nhập và set vào form
     * @param event Sự kiện khi nhập số điện thoại
     */
    formatPhoneNumber(event) {
        var _a;
        // Lấy số điện thoại đã format
        const input = event.target.value;
        this.formattedPhone = this.functionService.getFormattedPhoneNumber(input, this.countryCode);
        // Cập nhật vào form
        (_a = this.formEditCustomer.get('phone')) === null || _a === void 0 ? void 0 : _a.setValue(this.formattedPhone, { emitEvent: false });
    }
}
CustomerProfileComponent.ɵfac = function CustomerProfileComponent_Factory(t) { return new (t || CustomerProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_0__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService)); };
CustomerProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CustomerProfileComponent, selectors: [["app-customer-profile"]], inputs: { visibleInfoCustomer: "visibleInfoCustomer", customer: "customer" }, outputs: { closeInfoCustomer: "closeInfoCustomer" }, decls: 4, vars: 5, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzFooter", "nzOnClose"], [4, "nzDrawerContent"], ["footerAddCustomer", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], [1, "calling-code", 3, "click"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["formControlName", "phone", "type", "tel", "nz-input", "", "required", "", 3, "value", "placeholder", "input"], ["combineTplPhone", ""], ["class", "ng-tns-c300-27 ant-form-item-explain ant-form-item-explain-error ng-star-inserted", "ng-reflect-ng-class", "ant-form-item-explain,ant-form", 4, "ngIf"], ["type", "email", "formControlName", "email", "nz-input", "", 3, "placeholder"], ["nzDisabled", "", "nzShowSearch", "", "nzAllowClear", "", "formControlName", "isBusiness", 3, "nzPlaceHolder"], [3, "nzLabel", "nzValue"], [4, "ngIf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["formControlName", "address", "nz-input", "", 3, "placeholder"], ["formControlName", "country", "nz-input", "", 3, "placeholder"], ["formControlName", "province", "nz-input", "", 3, "placeholder"], ["formControlName", "district", "nz-input", "", 3, "placeholder"], ["nz-input", "", "formControlName", "note", 3, "placeholder", "nzAutosize"], ["nz-col", "", "nzSpan", "12", 2, "padding-top", "22px"], ["nz-checkbox", "", "formControlName", "debt_enable"], ["ng-reflect-ng-class", "ant-form-item-explain,ant-form", 1, "ng-tns-c300-27", "ant-form-item-explain", "ant-form-item-explain-error", "ng-star-inserted"], [1, "ng-tns-c300-27", "ng-trigger", "ng-trigger-helpMotion"], ["formControlName", "taxcode", "nz-input", "", 3, "placeholder"], ["taxcode", ""], ["nz-row", "", "nzGutter", "16"], ["nz-col", "", "nzSpan", "12"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "gender", 3, "nzPlaceHolder"], ["nzValue", "Female", 3, "nzLabel"], ["nzValue", "Male", 3, "nzLabel"], ["formControlName", "datebirth", 3, "nzPlaceHolder"], [1, "footerAddCustomer", 2, "float", "right"], ["nz-button", "", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", 3, "disabled", "ngStyle", "click"]], template: function CustomerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function CustomerProfileComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomerProfileComponent_ng_container_1_Template, 107, 78, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CustomerProfileComponent_ng_template_2_Template, 7, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzTitle", null)("nzVisible", ctx.visibleInfoCustomer)("nzFooter", _r1);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__.NzCheckboxComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n  background-color: var(--ion-color-vh-white);\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-white);\n  border: 1px solid var(--ion-color-vh-green);\n  background-color: var(--ion-color-vh-green);\n}\n\nnz-date-picker[_ngcontent-%COMP%], nz-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code) {\n  position: relative;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code)   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.calling-code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 60px;\n  color: var(--ion-color-vh-gray);\n  cursor: pointer;\n  grid-gap: 2px;\n  gap: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsb0NBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7QUFFSjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLDJDQUFBO0FBRUo7O0FBQ0E7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQUVGIiwiZmlsZSI6ImN1c3RvbWVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWZvcm0taXRlbSB7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG59XHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXJBZGRDdXN0b21lciB7XHJcbiAgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gIH1cclxuICBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICB9XHJcbn1cclxubnotZGF0ZS1waWNrZXIsXHJcbm56LXNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5uei1pbnB1dC1ncm91cDpoYXMoLmNhbGxpbmctY29kZSkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubnotaW5wdXQtZ3JvdXA6aGFzKC5jYWxsaW5nLWNvZGUpIGlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi5jYWxsaW5nLWNvZGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZ2FwOiAycHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 23880:
/*!*****************************************************************************************!*\
  !*** ./src/app/cafe/desktop/exchange-voucher/components/customer/customer.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function CustomerComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzValue", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r1.name, " - ", item_r1.phone, "");
} }
class CustomerComponent {
    constructor(vhAlgorithm, vhQueryCafe) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.closeAndReceiveCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.debt = null;
        this.customerList = [];
        this.searchList = [];
        this.searchList = [...this.customerList];
    }
    ngOnInit() {
        this.getData();
    }
    ngOnDestroy() {
        this.observableCustomers.unsubscribe();
    }
    getData() {
        this.observableCustomers = this.vhQueryCafe.getObservableLocalCustomers().subscribe((localCustomers) => {
            this.customerList = localCustomers.filter(customer => {
                if (customer['_id'] != "id_retail") {
                    if (this.debt == null)
                        return true;
                    else if (customer['debt_enable'] == this.debt)
                        return true;
                    else
                        return false;
                }
                return false;
            }).map(item => { return Object.assign(Object.assign({}, item), { earning_point: item.earning_point ? item.earning_point : 0 }); });
            this.id_customer = this.id_customer ? this.id_customer : this.customerList[0]._id;
            this.searchList = this.customerList;
        });
    }
    cancel(value) {
        this.closeAndReceiveCustomer.emit(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.customerList, ['name', 'phone']);
        else
            this.searchList = this.customerList;
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQueryCafe)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], inputs: { id_customer: "id_customer" }, outputs: { closeAndReceiveCustomer: "closeAndReceiveCustomer" }, decls: 3, vars: 6, consts: [["nzShowSearch", "", 1, "cus-select", 3, "ngModel", "nzServerSearch", "nzPlaceHolder", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.cancel($event); })("nzOnSearch", function CustomerComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerComponent_nz_option_2_Template, 1, 3, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "Select customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id_customer)("nzServerSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--ion-color-vh-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoiY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 15287:
/*!***********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/exchange-voucher/components/retail-info/retail-info.component.ts ***!
  \***********************************************************************************************/
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


/***/ })

}]);
//# sourceMappingURL=default-src_app_cafe_desktop_exchange-voucher_components_components_module_ts.js.map