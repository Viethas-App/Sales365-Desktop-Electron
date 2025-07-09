"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_dashboard_dashboard_module_ts"],{

/***/ 30166:
/*!********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/dashboard/components/account-information/account-information.component.ts ***!
  \********************************************************************************************************/
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
        this.vhImage.getThumbnailFromDesktop(file, 256, 256, "employees", this.detailEmployee.value["img"] || null).then(photoURL => {
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

/***/ 81930:
/*!***************************************************************!*\
  !*** ./src/app/cafe/desktop/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/notification */ 8175);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account-information/account-information.component */ 30166);


























function DashboardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.branchDefault.name);
} }
function DashboardComponent_nz_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, item_r23.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", item_r23.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r23.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r23.name, " ");
} }
function DashboardComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
} if (rf & 2) {
    const selected_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "assets/icon/settings/language/", selected_r24.nzValue, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", selected_r24.nzLabel, " ");
} }
function DashboardComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Dispatcher"), "");
} }
function DashboardComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_li_33_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.gotoDispatcher(item_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r25.name);
} }
function DashboardComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "You haven't created a dispatch area yet"));
} }
function DashboardComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Sell voucher/card"), "");
} }
function DashboardComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Exchange voucher/card"), "");
} }
function DashboardComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Order from web/app"));
} }
function DashboardComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Instructional video"), "");
} }
function DashboardComponent_li_101_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_li_101_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.change_branch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Change branch"), "");
} }
function DashboardComponent_ng_template_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Print page settings"));
} }
function DashboardComponent_li_296_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_li_296_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.gotoLedprice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "LED price display board"));
} }
function DashboardComponent_app_account_information_344_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-account-information", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeAccount", function DashboardComponent_app_account_information_344_Template_app_account_information_closeAccount_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.closeAccountInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modalAccountInfo", ctx_r21.modalAccountInfo);
} }
function DashboardComponent_ng_container_348_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 107);
} }
function DashboardComponent_ng_container_348_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_ng_container_348_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const template_r35 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r37.default_selling_page = template_r35.url; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DashboardComponent_ng_container_348_div_2_i_6_Template, 1, 0, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r34.default_selling_page == template_r35.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", template_r35.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, template_r35.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r34.default_selling_page == template_r35.url);
} }
function DashboardComponent_ng_container_348_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DashboardComponent_ng_container_348_div_2_Template, 7, 7, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r22.templates);
} }
const _c0 = function (a0, a1) { return { "sider-expand-icon": a0, "sider-unexpand-icon": a1 }; };
const _c1 = function (a0) { return { "sider-icon": a0 }; };
const _c2 = function () { return { top: "45%", transform: "translateY(-50%)" }; };
const _c3 = function () { return { "max-height": "70vh" }; };
class DashboardComponent {
    constructor(router, translateService, vhAuth, languageService, vhComponent, fncService, vhQueryCafe, ngZone, mess, nzModalService, notification, http, platform) {
        this.router = router;
        this.translateService = translateService;
        this.vhAuth = vhAuth;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.fncService = fncService;
        this.vhQueryCafe = vhQueryCafe;
        this.ngZone = ngZone;
        this.mess = mess;
        this.nzModalService = nzModalService;
        this.notification = notification;
        this.http = http;
        this.platform = platform;
        this.langList = [
            { name: 'Vietnamese', value: 'vi', img: 'assets/icon/settings/language/vi.svg', country_code: 'VN' },
            { name: 'English', value: 'en', img: 'assets/icon/settings/language/en.svg', country_code: 'US' }
        ];
        this.lang = this.vhAuth.localStorageGET('language_code');
        this.branchDefault = {};
        this.useBranch = this.fncService.checkUsingBranch();
        this.modalAccountInfo = false; //show/hide moal thông tin tài khoản
        this.user = this.vhAuth.getUser(); // thông tin tài khoản hiện tại
        this.isExpand = false; //biến dùng để show/hide menu
        this.order = JSON.parse(localStorage.getItem("vh-cafe-order-interface-pos")); // biến chọn giao diện order
        this.kitchens = this.vhQueryCafe.getlocalDispatcherZones();
        this.templates = [];
        this.store_main_sector = '';
        this.country_code = 'VN';
        this.language = 'vi';
        this.openSubMap = {
            sub1: false,
            sub2: false,
            sub4: false,
        };
        this.openMap = {
            sub1: false,
            sub2: false,
            sub3: false
        };
        /**Xử lý branches */
        this.branchList = [];
        this.show_modal_choose_interface = false;
        this.default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
        this.openSubBranchMap = {
            sub1: false,
        };
        console.log(this.lang);
        console.log(this.langList);
    }
    ngOnInit() {
        this.vhQueryCafe.startLocalStorage().then(() => {
            this.useBranch = this.fncService.checkUsingBranch();
            let splash = document.getElementById("lottie-sync");
            if (splash)
                splash.remove();
            this.checkBranches();
            this.gotoOverview();
            this.checkExpireAccount();
            this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
            this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của user
            this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                this.templates = templates[this.language];
            }); // Lấy giao diện theo main_sector của cửa hàng
        });
        // let splash = document.getElementById("lottie-sync")
        // if (splash) splash.remove()
        // this.checkBranches()
        // this.gotoOverview()
        // this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id)
        // // this.checkExpireAccount()
    }
    getThemeValue() {
        return this.vhAuth.getThemeValue() || 'sky-blue-theme';
    }
    /**
    * kiểm tra tài khoản hết hạn chưa
    */
    checkExpireAccount() {
        // this.vhQueryCafe.refreshLocalRestrictionMainPackage()
        //   .then((res) => {
        console.log(this.vhQueryCafe.getLocalRestrictionMainPackage());
        let number = this.getNumberOfDay(new Date(), new Date(this.vhQueryCafe.getLocalRestrictionMainPackage().expire_date));
        if (number > 0) { // check hết hạn sau 0 ngày thì hiện thông báo
            // check tiếp  còn trong hạn được phép sử dụng hay ko
            if (number < this.vhQueryCafe.getLocalRestrictionMainPackage().extra_usage_duration) {
                this.nzModalService.confirm({
                    nzTitle: this.languageService.translate('Branch') + ': ' + this.vhQueryCafe.getDefaultBranch().name + ' ' + this.languageService.translate('has expired') + '. ' + this.languageService.translate('Please renew to continue') + '!',
                    nzOkText: this.languageService.translate('Pay'),
                    nzCancelText: "Tiếp tục",
                    nzCloseIcon: null,
                    nzClosable: false,
                    nzOnOk: () => {
                        // go to thanh toán
                        this.vhQueryCafe.getPayments({ id_store: { $eq: this.vhAuth.getUser()._id }, payment_type: { $eq: 5 } }, {}, {}, 0).then((payments) => {
                            //  this.router.navigate(["/cafe/manage-key"])
                            if (payments) {
                                if (payments.length > 0) {
                                    this.router.navigate(['/cafe/payment/detail'], {
                                        state: payments
                                    });
                                }
                                else if (payments == 0) {
                                    this.router.navigate(['/cafe/payment']);
                                }
                            }
                        });
                    },
                    nzOnCancel: () => {
                    }
                });
            }
            else {
                this.nzModalService.confirm({
                    nzTitle: this.languageService.translate('Branch') + ': ' + this.vhQueryCafe.getDefaultBranch().name + ' ' + this.languageService.translate('has expired') + '. ' + this.languageService.translate('Please renew to continue') + '!',
                    nzOkText: this.languageService.translate('Pay'),
                    nzCancelText: this.languageService.translate('Thoát'),
                    nzCloseIcon: null,
                    nzClosable: false,
                    nzOnOk: () => {
                        // go to thanh toán
                        this.vhQueryCafe.getPayments({ id_store: { $eq: this.vhAuth.getUser()._id }, payment_type: { $eq: 5 } }, {}, {}, 0).then((payments) => {
                            if (payments) {
                                if (payments.length > 0) {
                                    this.router.navigate(['/cafe/payment/detail'], {
                                        state: payments
                                    });
                                }
                                else if (payments == 0) {
                                    this.router.navigate(['/cafe/payment']);
                                }
                            }
                        });
                    },
                    nzOnCancel: () => {
                        this.router.navigate(["/login"]);
                    }
                });
            }
        }
        // if (number > -7 && number < 0) this.createBasicNotification(number)
        // },
        //   err => {
        //     this.router.navigate(["/login"])
        //   })
    }
    createBasicNotification(number) {
        this.notification.blank(this.languageService.translate('Your account is about to expire'), this.languageService.translate("Your account still has") + " " + parseInt((number * -1).toString()) + " " + this.languageService.translate("days of usage left. Please update your service package to avoid interruptions."), {
            nzPlacement: "topRight",
            nzDuration: 8000
        });
    }
    /**
     * trả về khoảng cách giữa 2 ngày
     * vd : getNumberOfDay(15/02/2022, 10/02/2022) => return 5
     * */
    getNumberOfDay(date1, date2) {
        return (date1.getTime() - date2.getTime()) / (24 * 3600 * 1000);
    }
    /**
     * kiểm tra nếu có tab nào đăng xuất hoặc chọn chi nhánh mới sẽ logout
     */
    ngDoCheck() {
        if (!this.vhQueryCafe.getDefaultBranch()) {
            setTimeout(() => {
                this.router.navigate(["/login"]);
            }, 100);
        }
    }
    ///////////////////////////////////////THAO TÁC PHỤ//////////////////////////////////////
    /**
     * thiết lập lại ngôn ngữ hiển thị trên app
     * @param value biến giá trị language đã chọn
     * @example this.selectLang('vi')
     */
    selectLang(value) {
        let lang = this.langList.find(item => item.value == value);
        this.vhAuth.localStorageSET('language_code', value);
        this.vhAuth.localStorageSET('country_code', lang.country_code);
        localStorage.setItem("vh-cafe-language", value);
        this.languageService.switchLanguage(value);
        this.translateService.use(value);
    }
    /**
     * xử lý mở ra hoặc thu lại thanh sub-menu cấp 2
     * @param value : vị trí cần mở
     * @example this.openSubHandler('sub1')
     */
    openSubHandler(value) {
        for (const key in this.openSubMap) {
            if (key !== value) {
                this.openSubMap[key] = false;
            }
        }
    }
    /**
     * Đăng xuất khỏi app
     * @example this.logout()
     */
    logout() {
        this.vhAuth.signOut().then(() => {
            this.vhQueryCafe.closeSyncCollections();
            this.router.navigate(["/login"]);
        }, error => { });
    }
    /**
     * xử lý mở ra hoặc thu lại thanh menu cấp 1
     * @param value : vị trí cần mở
     * @example this.openHandler('sub1')
     */
    openHandler(value) {
        for (const key in this.openMap) {
            if (key !== value) {
                this.openMap[key] = false;
            }
        }
    }
    // thêm máy in nếu chưa dc add ở trang admin
    // setDefaultPrinter() {
    //   let printer = this.vhQueryCafe.getlocalPrinters().find(item => item.name == "DESKTOP")
    //   if (!printer) {
    //     this.vhQueryCafe.addPrinter({
    //       name: "DESKTOP",
    //       print_kitchen: { name :"Print Kitchen", font_family:'sans-serif',type: "A4", enable: false, header: this.languageService.translate("Welcome to the Restaurant"), footer: this.languageService.translate("Goodbye, see you again!"),  },
    //       sales: {  name :"Sales", font_family:'sans-serif',type: "A4", enable: false, header: this.languageService.translate("Welcome to the Restaurant"), footer: this.languageService.translate("Goodbye, see you again!"),  },
    //       expense: { name :"Expense", font_family:'sans-serif', type: "A4", enable: false, header: this.languageService.translate("Welcome to the Restaurant"), footer: this.languageService.translate("Goodbye, see you again!") },
    //       receipt: { name :"Receipt", font_family:'sans-serif', type: "A4", enable: false, header: this.languageService.translate("Welcome to the Restaurant"), footer: this.languageService.translate("Goodbye, see you again!") },
    //       ingredient: {  name :"Ingredient", font_family:'sans-serif',type: "A4", enable: false, header: this.languageService.translate("Welcome to the Restaurant"), footer: this.languageService.translate("Goodbye, see you again!"),show_signature_buyer : true,show_signature_shipper : true,show_signature_creator : true,show_signature_accountancy :true,show_signature_stocker:true },
    //       delivery_receive_goods: { name :"Delivery, receive goods", font_family:'sans-serif', type: "A4", enable: false, header: this.languageService.translate("Welcome to the Restaurant"), footer: this.languageService.translate("Goodbye, see you again!"), show_signature_shipper : true,show_signature_creator : true,show_signature_accountancy :true  },
    //       delivery_receive_money: { name: "Transfer, receive money",  font_family:'sans-serif',type: "A4", enable: false, header: this.languageService.translate("Welcome to the Restaurant"), footer: this.languageService.translate("Goodbye, see you again!"), show_signature_shipper : true,show_signature_creator : true,show_signature_accountancy :true  },
    //     })
    //   }
    // }
    /////////////////////////////////////ROUTER//////////////////////////////////////////
    gotoOverview() {
        this.router.navigate(['/cafe/dashboard/overviews']);
    }
    gotoSale() {
        this.router.navigate(['/cafe/dashboard/order']);
    }
    gotoDishes() {
        this.router.navigate(['/cafe/dashboard/management/dishes']);
    }
    gotoService() {
        this.router.navigate(['/cafe/dashboard/management/service']);
    }
    gotoDesign() {
        this.router.navigate(['/cafe/dashboard/management/design']);
    }
    gotoPrinter(type, name) {
        this.router.navigate(['/cafe/dashboard/printer', type], { state: name });
    }
    gotoArea() {
        if (this.vhAuth.checkMyPermission('area_enable_manage_area')) {
            this.router.navigate(['/cafe/dashboard/management/area']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoInvoice() {
        this.router.navigate(['/cafe/dashboard/management/invoice']);
    }
    gotoStoreInfo() {
        if (this.vhAuth.checkMyPermission("settings_enable_business"))
            this.router.navigate(['/cafe/dashboard/settings/store-info']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoPurchase() {
        this.router.navigate(['/cafe/dashboard/settings/purchase']);
    }
    gotoVideo() {
        this.router.navigate(['/cafe/dashboard/settings/video']);
    }
    gotoOrderInterface() {
        this.router.navigate(['/cafe/dashboard/settings/order-interface']);
    }
    gotoChat() {
        if (this.vhAuth.checkMyPermission("settings_enable_chat"))
            this.router.navigate(['/cafe/dashboard/settings/chat']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoConfiguration() {
        this.router.navigate(['/cafe/dashboard/settings/configuration']);
    }
    gotoPartner() {
        this.router.navigate(['/cafe/dashboard/management/partner']);
    }
    gotoTax() {
        if (this.vhAuth.checkMyPermission('management_enable_tax')) {
            this.router.navigate(['/cafe/dashboard/management/tax']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoPromotions() {
        this.router.navigate(['/cafe/dashboard/management/sales-program']);
    }
    gotoCashflow() {
        this.router.navigate(['/cafe/dashboard/management/cashflow']);
    }
    gotoReport() {
        this.router.navigate(['/cafe/dashboard/management/report']);
    }
    gotoCamera() {
        this.router.navigate(['/cafe/dashboard/management/camera']);
    }
    gotoStock() {
        this.router.navigate(['/cafe/dashboard/management/stock']);
    }
    gotoDesignMenu() {
        this.router.navigate(['/cafe/dashboard/management/design-menu']);
    }
    gotoBranch() {
        if (this.vhAuth.checkMyPermission("branch_management_viewing_branches"))
            this.router.navigate(['/cafe/dashboard/management/branch']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoConfigEInvoice() {
        this.router.navigate(['/cafe/dashboard/settings/e-invoice']);
    }
    gotoIngredient() {
        this.router.navigate(['/cafe/dashboard/management/ingredient']);
    }
    gotoPos() {
        // this.router.navigate(['/cafe/cafe-pos'],{ state: { isSync: true }});
        let startInterface = localStorage.getItem("vh-cafe-order-start-interface-pos");
        if (startInterface == 'cafe-pos') {
            this.router.navigate(["/cafe/cafe-pos"], { state: { isSync: true } });
        }
        else {
            this.router.navigate(["/cafe/coordination"], { state: { isSync: true } });
        }
    }
    gotoConfigDisplay() {
        this.router.navigate(['/cafe/dashboard/settings/configuration/display']);
    }
    gotoConfigCoordination() {
        this.router.navigate(['/cafe/dashboard/settings/configuration/coordination']);
    }
    // Link nhà phát triển phần mềm
    gotoSupport() {
        this.router.navigate(['/cafe/dashboard/developers/support']);
    }
    gotoPolicy() {
        this.router.navigate(['/cafe/dashboard/developers/policy']);
    }
    gotoOnlinePayment() {
        this.vhComponent.showLoading("").then(() => {
            this.vhQueryCafe.getPayments({ id_store: { $eq: this.vhAuth.getUser()._id }, payment_type: { $eq: 5 } }, {}, {}, 0).then((payments) => {
                if (payments) {
                    if (payments.length > 0) {
                        this.vhComponent.hideLoading(0).then(() => {
                            this.router.navigate(['/cafe/dashboard/developers/online-payment/detail'], {
                                state: payments
                            });
                        });
                    }
                    else if (payments == 0) {
                        this.router.navigate(['/cafe/dashboard/developers/online-payment']);
                        this.vhComponent.hideLoading(0);
                    }
                }
            });
        });
    }
    gotoHistoryPayment() {
        this.router.navigate(['/cafe/dashboard/developers/history-payment']);
    }
    gotoManageKey() {
        this.router.navigate(['/cafe/dashboard/developers/manage-key']);
    }
    checkBranches() {
        let branches = [...this.vhQueryCafe.getlocalBranchs()];
        console.log(branches);
        let employee = this.vhAuth.getUser();
        // check branch latest
        this.branchDefault = this.vhQueryCafe.getDefaultBranch();
        console.log('getDefaultBranch', this.branchDefault);
        let thisBranch = this.vhQueryCafe.getlocalBranch(this.vhQueryCafe.getDefaultBranch()._id);
        if (this.branchDefault.name != thisBranch.name) {
            this.vhQueryCafe.clearDefaultBranch();
            this.vhQueryCafe.setDefaultBranch(thisBranch._id);
            this.branchDefault = this.vhQueryCafe.getDefaultBranch();
        }
        if (employee['owner'] == 'boss')
            this.branchList = branches;
        else {
            this.vhAuth.getPermission(employee['_id']).then(result => {
                branches.forEach(item => {
                    if (result[`${item._id}_login_branch`])
                        this.branchList.push(item);
                });
            });
        }
    }
    /**
     * chuyển qua trang login để chọn chi nhánh
     */
    change_branch() {
        this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to change branch") + "?", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhQueryCafe.clearDefaultBranch();
            this.router.navigate(['/login'], { state: { change_branch: true } });
        }).catch(() => { });
    }
    /**Expand */
    expand() {
        this.isExpand = !this.isExpand;
    }
    /**Đóng modal và get lại thông tin user */
    closeAccountInfo(event) {
        this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
        this.modalAccountInfo = false;
    }
    /**
    * thiết lập giao diện gọi món
    * @param type 1 | 2 | 3
    */
    updateInterfaceDispatcher(type, permission) {
        if (this.user.default_display_page != permission && this.vhAuth.checkMyPermission(permission)) {
            Promise.all([this.vhComponent.showLoading(this.languageService.translate("Changing interface..."), "current-loading", null, null, false),
                this.vhAuth.updateEmployee(this.user._id, { default_display_page: permission }),
                this.vhAuth.updatePermission(this.user._id, JSON.parse(('{' + '"' + permission + '"' + ":" + true + '}')))
            ])
                .then(() => {
                this.vhComponent.hideLoading(0);
                setTimeout(() => {
                    this.router.navigate(['/cafe/' + type], { state: { isSync: true } });
                }, 200);
            });
        }
    }
    gotoDispatcher(item) {
        this.router.navigate(['/cafe/coordination'], { state: item });
    }
    gotoWeb(link) {
        if (this.platform.is("electron"))
            electron.shell.openExternal(link);
        else
            window.open(link, '_blank');
    }
    /**
    * thiết lập giao diện trang bán hàng
    * @param type sale-pos | sale-desktop
    */
    updateInterface() {
        if (this.vhAuth.checkMyPermission('selling_display_page')) {
            this.vhComponent.showLoading('').then(() => {
                if (!this.default_selling_page) {
                    this.show_modal_choose_interface = true;
                }
                else
                    this.vhAuth.updateMyPermission({ default_display_page: 'selling_display_page', default_selling_page: this.default_selling_page })
                        .then((bool) => {
                        this.router.navigate(['/cafe/' + this.default_selling_page], { state: { isSync: true } });
                    });
            }).finally(() => { this.vhComponent.hideLoading(0); });
        }
        else
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("You do not have this rights"));
    }
    /**
      * thiết lập giao diện trang bán hàng  cafe-pos | cafe-desktop
      *
      */
    updateSalesInterface() {
        this.vhAuth.updateEmployee(this.user._id, { default_selling_page: this.user.default_selling_page })
            .then((bool) => {
            this.router.navigate(['/cafe/' + this.user.default_selling_page], { state: { isSync: true } });
        });
    }
    gotoChangeVoucher() {
        this.router.navigateByUrl('/exchange-voucher');
    }
    gotoPrepaidCard() {
        this.router.navigateByUrl('/prepaid-card', { state: { url: this.router.url } });
    }
    gotoSalesVoucher() {
        this.router.navigateByUrl('/cafe/sales-voucher');
    }
    gotoSalesPrepaidCard() {
        this.router.navigateByUrl('/cafe/sales-payment-card');
    }
    gotoSalesOrder() {
        this.router.navigateByUrl('/cafe/bill-web-app/sales-order');
    }
    gotoSalesOrderVoucher() {
        this.router.navigateByUrl('/cafe/bill-web-app/sales-order-voucher');
    }
    gotoExchangeOrderVoucher() {
        this.router.navigateByUrl('/cafe/bill-web-app/exchange-order-voucher');
    }
    gotoSalesOrderPrepaidCard() {
        this.router.navigateByUrl('/cafe/bill-web-app/sales-order-payment-card');
    }
    gotoExchangeOrderCard() {
        this.router.navigateByUrl('/cafe/bill-web-app/exchange-order-payment-card');
    }
    gotoConfigProducts() {
        this.router.navigate(['/cafe/dashboard/settings/configuration/products']);
    }
    gotoConfigReports() {
        this.router.navigate(['/cafe/dashboard/settings/configuration/report']);
    }
    openSubBranchHandler(value) {
        for (const key in this.openSubBranchMap) {
            if (key !== value) {
                this.openSubMap[key] = false;
            }
        }
    }
    gotoLedprice() {
        this.router.navigate(['/cafe/dashboard/settings/configuration/led-price']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_8__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_10__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 349, vars: 245, consts: [[2, "height", "100%"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "logo", 2, "height", "100%"], [2, "height", "52px", 3, "src"], ["target", "_blank", "href", "https://zalo.me/0934606060"], [2, "height", "38px", "margin-left", "20px", 3, "src"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content", "info"], ["class", "select-branch", 4, "ngIf"], ["nzBorderless", "", 2, "min-width", "150px", 3, "ngModel", "nzCustomTemplate", "ngModelChange"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["defaultTemplate", ""], ["nz-dropdown", "", "nzTrigger", "click", 1, "center-col", 2, "cursor", "pointer", "height", "100%", 3, "nzDropdownMenu"], [2, "white-space", "nowrap", "font-size", "0.9rem", "margin-right", "4px", "text-transform", "capitalize"], [3, "nzSrc"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "dollar", "nzTheme", "outline"], ["nz-menu-item", "", 2, "color", "var(--ion-color-vh-green)"], ["nz-icon", "", "nzType", "home", "nzTheme", "outline"], ["nz-submenu", "", 3, "nzTitle", "nzDisabled"], ["titleTplDispatcher", ""], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 4, "ngIf"], ["nz-submenu", "", 3, "nzTitle"], ["titleTplSalesVoucher", ""], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], ["nz-icon", "", "nzType", "credit-card", "nzTheme", "outline"], ["titleTplExchangeVoucher", ""], ["titleTplWebAPp", ""], ["titleTplVideo", ""], ["nz-menu-item", ""], ["href", "https://www.youtube.com/playlist?list=PLfrZcQGHqcCL1qLXIyumIFgrnNuNfaQ4q", "target", "_blank", "rel", "noopener noreferrer"], ["nz-icon", "", "nzType", "desktop", "nzTheme", "outline"], ["href", "https://www.youtube.com/playlist?list=PLfrZcQGHqcCKBrMmcePgnrO1B6noAFJFd", "target", "_blank", "rel", "noopener noreferrer"], ["nz-icon", "", "nzType", "mobile", "nzTheme", "outline"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], ["nzWidth", "20vw", "nzTheme", "light", 1, "ant-table-body", 3, "ngClass"], ["nz-menu", "", "nzMode", "inline", 1, "sider-menu", "ant-table-body", 2, "width", "100%", 3, "nzInlineCollapsed"], [1, "icon-container"], ["src", "assets/icon/overviews/Button_Truycaptrangbanhang.svg", 2, "color", "var(--ion-color-vh-green)", 3, "click"], [1, "icon-text"], ["nzSelected", "", "nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", 2, "margin", "0", 3, "ngClass", "nzTooltipTitle", "click"], ["nz-submenu", "", "nzMenuClassName", "ant-table-body sub-nz-sider", "nzIcon", "reconciliation", 1, "center", 3, "ngClass", "nzOpen", "nzTitle", "nzOpenChange"], ["src", "assets/icon/management/product.svg"], ["src", "assets/icon/management/ingredient.svg"], ["name", "server-outline"], ["src", "assets/icon/management/Design.svg"], ["nz-menu-item", "", "nz-menu-item", "", 3, "click"], ["src", "assets/icon/management/report.svg"], ["src", "assets/icon/management/invoice.svg"], ["src", "assets/icon/management/cashflow.svg"], ["src", "assets/icon/management/partner.svg"], ["src", "assets/icon/management/stock.svg"], ["src", "assets/icon/management/tax.svg"], ["src", "assets/icon/management/promotions.svg"], ["nz-submenu", "", 2, "margin", "0", 3, "nzTitle", "ngClass", "nzOpen", "nzOpenChange"], ["titleTplPrintSetting", ""], ["src", "assets/icon/management/purchase.svg"], ["src", "./assets/icon/management/expenses.svg"], ["src", "./assets/icon/management/receipts.svg"], ["src", "./assets/icon/management/transfers.svg"], ["nz-icon", "", "nzType", "delivered-procedure", "nzTheme", "outline"], ["src", "./assets/icon/management/doisoathanghoa.svg"], ["src", "assets/icon/management/stock/xuat_huy.svg"], ["nz-submenu", "", "nzMenuClassName", "ant-table-body sub-nz-sider", "nzIcon", "setting", 3, "ngClass", "nzOpen", "nzTitle", "nzOpenChange"], ["src", "assets/icon/settings/store-info.svg"], ["src", "assets/icon/management/branch.svg"], ["src", "assets/icon/management/coordination.svg"], [2, "margin-left", "0px"], ["src", "assets/icon/settings/video.svg"], ["nz-submenu", "", "nzIcon", "message", 2, "margin", "0", 3, "ngClass", "nzOpen", "nzTitle", "nzOpenChange"], ["nz-icon", "", "nzType", "check-square", "nzTheme", "outline"], ["nz-icon", "", "nzType", "code-sandbox", "nzTheme", "outline"], ["nz-menu-item", "", 2, "height", "fit-content", 3, "click"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline"], [2, "white-space", "normal"], ["nz-icon", "", "nzType", "hdd", "nzTheme", "outline"], ["nz-icon", "", "nzType", "wallet", "nzTheme", "outline"], ["nz-icon", "", "nzType", "file-done", "nzTheme", "outline"], ["nz-button", "", "nzShape", "circle", 1, "button-collapse", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "inner-layout"], [3, "modalAccountInfo", "closeAccount", 4, "ngIf"], ["nzWidth", "60vw", 3, "nzStyle", "nzBodyStyle", "nzVisible", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], [1, "select-branch"], ["src", "assets/icon/global/location.svg"], [1, "select-branch-name"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [2, "width", "24px", 3, "src"], ["nz-icon", "", "nzType", "swap", "nzTheme", "outline"], [2, "margin-left", "1px"], ["nz-icon", "", "nzType", "global", "nzTheme", "outline"], ["nz-icon", "", "nzType", "youtube", "nzTheme", "outline"], ["nz-icon", "", "nzType", "branches", "nzTheme", "outline"], ["src", "assets/icon/settings/configuration.svg"], [3, "modalAccountInfo", "closeAccount"], ["nz-row", "", 1, "center-all-content", 2, "justify-content", "start !important"], ["nz-col", "", "nzSpan", "12", "class", "bottom-right", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "thumbnail", 3, "click"], [2, "width", "100%", 3, "src"], [2, "text-align", "center"], ["style", "color: var(--ion-color-vh-green);", "nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "var(--ion-color-vh-green)"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DashboardComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_nz_select_ngModelChange_10_listener($event) { return ctx.lang = $event; })("ngModelChange", function DashboardComponent_Template_nz_select_ngModelChange_10_listener($event) { return ctx.selectLang($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DashboardComponent_nz_option_11_Template, 4, 6, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DashboardComponent_ng_template_12_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "nz-avatar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nz-dropdown-menu", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_21_listener() { return ctx.updateInterface(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, DashboardComponent_ng_template_30_Template, 4, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, DashboardComponent_li_33_Template, 3, 1, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, DashboardComponent_li_34_Template, 4, 3, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, DashboardComponent_ng_template_36_Template, 4, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_39_listener() { return ctx.gotoSalesVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_43_listener() { return ctx.gotoSalesPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, DashboardComponent_ng_template_48_Template, 4, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_51_listener() { return ctx.gotoChangeVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_55_listener() { return ctx.gotoPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, DashboardComponent_ng_template_60_Template, 4, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_63_listener() { return ctx.gotoSalesOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_67_listener() { return ctx.gotoSalesOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_71_listener() { return ctx.gotoExchangeOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_75_listener() { return ctx.gotoSalesOrderPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_79_listener() { return ctx.gotoExchangeOrderCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](84, DashboardComponent_ng_template_84_Template, 4, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_97_listener() { return ctx.modalAccountInfo = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, DashboardComponent_li_101_Template, 4, 3, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_102_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "nz-sider", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "ion-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_ion_icon_click_110_listener() { return ctx.updateInterface(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_114_listener() { return ctx.gotoOverview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_121_listener($event) { return ctx.openMap.sub1 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_121_listener() { return ctx.openHandler("sub1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_124_listener() { return ctx.gotoDishes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "ion-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_129_listener() { return ctx.gotoIngredient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "ion-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_134_listener() { return ctx.gotoService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](135, "ion-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_139_listener() { return ctx.gotoDesign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "ion-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_144_listener() { return ctx.gotoReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "ion-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_149_listener() { return ctx.gotoInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](150, "ion-icon", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_154_listener() { return ctx.gotoCashflow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](155, "ion-icon", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_159_listener() { return ctx.gotoPartner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](160, "ion-icon", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_164_listener() { return ctx.gotoStock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](165, "ion-icon", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](168, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_169_listener() { return ctx.gotoTax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "ion-icon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](173, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_174_listener() { return ctx.gotoPromotions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](175, "ion-icon", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](178, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_179_listener($event) { return ctx.openSubMap.sub4 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_179_listener() { return ctx.openSubHandler("sub4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](180, DashboardComponent_ng_template_180_Template, 4, 3, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_183_listener() { return ctx.gotoPrinter("page_desktop_sales", "Sales"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](184, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](187, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_188_listener() { return ctx.gotoPrinter("page_desktop_purchase", "Purchase"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](189, "ion-icon", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](192, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_193_listener() { return ctx.gotoPrinter("page_desktop_return_supplier", "Return supplier"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](194, "ion-icon", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](197, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_198_listener() { return ctx.gotoPrinter("page_desktop_import_kitchen", "Entering ingredient from kitchen"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](199, "ion-icon", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](202, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_203_listener() { return ctx.gotoPrinter("page_desktop_export_kitchen", "Issuing ingredient for kitchen"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](204, "ion-icon", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](207, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_208_listener() { return ctx.gotoPrinter("page_desktop_expense", "Pay for liabilities / others"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](209, "ion-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](212, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_213_listener() { return ctx.gotoPrinter("page_desktop_receipt", "Receive from receivables / others"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](214, "ion-icon", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](216);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](217, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_218_listener() { return ctx.gotoPrinter("page_desktop_delivery_receive_money", "Transfer, receive money"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](219, "ion-icon", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](222, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_223_listener() { return ctx.gotoPrinter("page_desktop_delivery_receive_goods", "Delivery, receive goods"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](224, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](227, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_228_listener() { return ctx.gotoPrinter("page_desktop_inventory", "Inventory note"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](229, "ion-icon", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](232, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_233_listener() { return ctx.gotoPrinter("page_desktop_destroy_product", "Xu\u1EA5t h\u1EE7y h\u00E0ng h\u00F3a"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](234, "ion-icon", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](237, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_238_listener() { return ctx.gotoPrinter("page_desktop_sales_voucher", "B\u00E1n voucher"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](239, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](242, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_243_listener() { return ctx.gotoPrinter("page_desktop_exchange_voucher", "\u0110\u1ED5i voucher l\u1EA5y h\u00E0ng"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](244, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](246);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](247, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_248_listener() { return ctx.gotoPrinter("page_desktop_sales_payment_card", "B\u00E1n th\u1EBB tr\u1EA3 tr\u01B0\u1EDBc"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](249, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](252, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_253_listener() { return ctx.gotoPrinter("page_desktop_exchange_payment_card", "\u0110\u1ED5i th\u1EBB tr\u1EA3 tr\u01B0\u1EDBc l\u1EA5y h\u00E0ng"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](254, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](257, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_258_listener($event) { return ctx.openMap.sub2 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_258_listener() { return ctx.openHandler("sub2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](259, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_261_listener() { return ctx.gotoStoreInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](262, "ion-icon", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](265, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_266_listener() { return ctx.gotoBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](267, "ion-icon", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](269);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](270, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_271_listener() { return ctx.gotoConfigEInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](272, "ion-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](275, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_276_listener() { return ctx.gotoConfigProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](277, "ion-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](279);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](280, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_281_listener() { return ctx.gotoConfigCoordination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](282, "ion-icon", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](285, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_286_listener() { return ctx.gotoConfigReports(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](287, "ion-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](290, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_291_listener() { return ctx.gotoConfigDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](292, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](295, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](296, DashboardComponent_li_296_Template, 5, 3, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_297_listener() { return ctx.gotoVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](298, "ion-icon", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](301, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_302_listener($event) { return ctx.openMap.sub3 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_302_listener() { return ctx.openHandler("sub3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](303, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_305_listener() { return ctx.gotoPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](306, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](308);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](309, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_310_listener() { return ctx.gotoSupport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](311, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](313);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](314, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](315, "li", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_315_listener() { return ctx.gotoWeb("https://sales365.vn/nganh-hang-an-uong,-giai-tri"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](316, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](319, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_320_listener() { return ctx.gotoWeb("https://viethas.com/product-list/selling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](321, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](324, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](325, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_325_listener() { return ctx.gotoOnlinePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](326, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](329, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_330_listener() { return ctx.gotoHistoryPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](331, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](333);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](334, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_335_listener() { return ctx.gotoManageKey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](336, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](338);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](339, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_340_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](341, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "nz-layout", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](343, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](344, DashboardComponent_app_account_information_344_Template, 1, 1, "app-account-information", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](345, "nz-modal", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function DashboardComponent_Template_nz_modal_nzVisibleChange_345_listener($event) { return ctx.show_modal_choose_interface = $event; })("nzOnOk", function DashboardComponent_Template_nz_modal_nzOnOk_345_listener() { return ctx.updateInterface(); })("nzOnCancel", function DashboardComponent_Template_nz_modal_nzOnCancel_345_listener() { return ctx.show_modal_choose_interface = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](346, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](347, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](348, DashboardComponent_ng_container_348_Template, 3, 1, "ng-container", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](49);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](61);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](85);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/img/logo_" + ctx.getThemeValue() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/img/Hotline247_" + ctx.getThemeValue() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.lang)("nzCustomTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.langList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSrc", ctx.user.img ? ctx.user.img : "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/template/avatar-shop.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 100, "Sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 102, "Administrator"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r5)("nzDisabled", !ctx.vhAuth.checkMyPermission("kitchen_display_page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.kitchens);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.kitchens.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 104, "Sell voucher"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 106, "Sell prepaid card"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 108, "Exchange voucher for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 110, "Exchange prepaid card for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](66, 112, "Orders"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](70, 114, "Voucher purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](74, 116, "Voucher exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 118, "Prepaid card purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](82, 120, "Prepaid card exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](91, 122, "Guide on computer"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](96, 124, "Guide on phone"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](100, 126, "Account information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.branchList.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](105, 128, "Log out"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.isExpand ? "expand" : "not-expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzInlineCollapsed", ctx.isExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](113, 130, "Access the sales page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTooltipTitle", ctx.isExpand ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](115, 132, "Overviews") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](116, 134, ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](230, _c0, ctx.isExpand, !ctx.isExpand));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](120, 136, "Overviews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](122, 138, "Management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](233, _c0, ctx.isExpand, !ctx.isExpand))("nzOpen", ctx.openMap.sub1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](128, 140, "Food and drink"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](133, 142, "Goods - ingredient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](138, 144, "Service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](143, 146, "Design"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](148, 148, "Report"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](153, 150, "Invoices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](158, 152, "Cashflow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](163, 154, "Partner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](168, 156, "Warehouse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](173, 158, "Tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](178, 160, "Sales program"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r18)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](236, _c1, ctx.isExpand))("nzOpen", ctx.openSubMap.sub4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](187, 162, "Sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](192, 164, "Purchase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](197, 166, "Return supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](202, 168, "Entering ingredient from kitchen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](207, 170, "Issuing ingredient for kitchen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](212, 172, "Pay for liabilities / others"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](217, 174, "Receive from receivables / others"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](222, 176, "Transfer, receive money"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](227, 178, "Delivery, receive goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](232, 180, "Inventory note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](237, 182, "Destroy goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](242, 184, "Sell voucher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](247, 186, "Exchange voucher for goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](252, 188, "Sell prepaid card"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](257, 190, "Exchange prepaid card for goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](259, 192, "Settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](238, _c0, ctx.isExpand, !ctx.isExpand))("nzOpen", ctx.openMap.sub2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](265, 194, "Store information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](270, 196, "Branches"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](275, 198, "E-Invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](280, 200, "Products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](285, 202, "Dispatcher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](290, 204, "Report"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](295, 206, "Display"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.platform.is("electron"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](301, 208, "Video instruction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](303, 210, "Software developer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](241, _c1, ctx.isExpand))("nzOpen", ctx.openMap.sub3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](309, 212, "Software usage policy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](314, 214, "Support, user guide"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](319, 216, "Introduction to Cafe Viethas software"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](324, 218, "Purchase sales equipment, printing paper"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](329, 220, "Online payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](334, 222, "Lookup payment history"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](339, 224, "License key management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx.isExpand ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modalAccountInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](347, 228, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](243, _c2))("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](244, _c3))("nzVisible", ctx.show_modal_choose_interface)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](346, 226, "Sales interface"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzHeaderComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__.NzDropDownDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_19__.NzAvatarComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__.NzMenuDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__.NzMenuItemDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__.NzSubMenuComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzSiderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__.NzTooltipDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzOptionComponent, _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_3__.AccountInformationComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["@charset \"UTF-8\";\n.logo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  float: left;\n}\nul[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n}\nspan[_ngcontent-%COMP%], li[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.header-menu[_ngcontent-%COMP%] {\n  line-height: 64px;\n  background-color: #fff;\n}\n.sider-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  border-right: 0;\n}\n.inner-layout[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n  overflow-y: auto;\n  height: 100%;\n}\nnz-breadcrumb[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.info[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-right: 24px;\n}\nnz-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 24px;\n  min-height: 280px;\n}\n.ant-layout-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-right: 0;\n  border-bottom: 1px solid #00000014;\n  box-shadow: 0px 2px 6px #00000014;\n}\nnz-select[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 134px;\n  border-right: 0.5px solid gray;\n}\nnz-select-top-control[_ngcontent-%COMP%] {\n  border: none;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.separator[_ngcontent-%COMP%] {\n  width: 0.5px;\n  height: 70%;\n  background-color: gray;\n}\nnz-badge[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\nion-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n.center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  line-height: 4vh !important;\n  align-items: center;\n}\nnz-sider[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnz-sider[_ngcontent-%COMP%]   ul.sider-menu[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  height: calc(100% - 40px);\n  overflow-y: auto;\n}\nnz-sider[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  height: 40px;\n  display: inline-block;\n}\nnz-sider[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\nnz-sider[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-70%, -50%);\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-green);\n  white-space: nowrap;\n  pointer-events: none;\n  \n}\n.expand[_ngcontent-%COMP%] {\n  flex: 0 0 3.2rem !important;\n  min-width: 3.2rem !important;\n  max-width: 3.2rem !important;\n}\n.not-expand[_ngcontent-%COMP%] {\n  min-width: 20vw !important;\n  flex: 0 0 20vw !important;\n  max-width: 20vw !important;\n}\n.button-collapse[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  margin-bottom: 12px;\n  border-radius: 100px !important;\n  width: 33px;\n  height: 33px;\n  box-shadow: 0px 2px 6px #00000014;\n}\n.ant-table-body.sub-nz-sider[_ngcontent-%COMP%] {\n  height: 70vh !important;\n}\n.sider-menu-ion[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.select-branch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select-branch[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin-right: 5px;\n}\n.select-branch-name[_ngcontent-%COMP%] {\n  max-width: 600px;\n  min-width: 150px;\n  font-size: 0.9rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  top: 50%;\n  left: 50%;\n  margin-left: -25vw;\n  margin-top: -25vh;\n}\n@media only screen and (min-width: 768px) {\n  .splash[_ngcontent-%COMP%] {\n    width: 60vw;\n    height: 50vh;\n    top: 50%;\n    left: 50%;\n    margin-left: -30vw;\n    margin-top: -25vh;\n  }\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n  border-bottom: 1px solid var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-green) !important;\n}\n  .ant-dropdown-menu-item-selected, .ant-dropdown-menu-item-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85) !important;\n  background-color: white !important;\n}\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUFFRjtBQUFBO0VBQ0UsZ0NBQUE7QUFHRjtBQURBOzs7RUFHRSxpQkFBQTtBQUlGO0FBSEU7Ozs7OztFQUVFLGlCQUFBO0FBU0o7QUFMQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFRRjtBQUxBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFRRjtBQUxBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFRRjtBQUxBO0VBQ0UsY0FBQTtBQVFGO0FBTkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFTRjtBQVBBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFVRjtBQVJBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFXRjtBQVJBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQVdGO0FBVEE7RUFDRSxZQUFBO0FBWUY7QUFWQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYUY7QUFYQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFjRjtBQVpBO0VBQ0Usa0JBQUE7QUFlRjtBQWJBO0VBQ0Usa0JBQUE7QUFnQkY7QUFiRTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQWdCSjtBQVpBO0VBQ0UsWUFBQTtBQWVGO0FBZEU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFnQko7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBZUo7QUFaRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWNKO0FBWEU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJDQUFBO0FBYUo7QUFWQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQWFGO0FBWEE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFjRjtBQVhBO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFjRjtBQVpBO0VBQ0UsdUJBQUE7QUFlRjtBQVpFO0VBQ0UsaUJBQUE7QUFlSjtBQVpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBZUY7QUFkRTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQWdCSjtBQWRFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBZ0JKO0FBWkEsVUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWVGO0FBZEU7RUFSRjtJQVNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBaUJGO0FBQ0Y7QUFkQTtFQUNFLGtCQUFBO0FBaUJGO0FBZkE7RUFDRSwyQ0FBQTtFQUNBLDZEQUFBO0FBa0JGO0FBaEJBO0VBQ0UsMkNBQUE7QUFtQkY7QUFqQkE7RUFDRSwyQ0FBQTtBQW9CRjtBQWxCQTtFQUNFLHFDQUFBO0VBQ0Esa0NBQUE7QUFxQkY7QUFuQkE7RUFDRSxzREFBQTtFQUNBLGlDQUFBO0FBc0JGO0FBcEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBdUJGO0FBdEJFO0VBQ0Usa0JBQUE7QUF3QkoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmxvZ28ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG51bCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xufVxuXG5zcGFuLFxubGksXG5uei1zZWxlY3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuc3BhbiBzcGFuLFxuc3BhbiBpLFxubGkgc3BhbixcbmxpIGksXG5uei1zZWxlY3QtaXRlbSBzcGFuLFxubnotc2VsZWN0LWl0ZW0gaSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uaGVhZGVyLW1lbnUge1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNpZGVyLW1lbnUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuLmlubmVyLWxheW91dCB7XG4gIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm56LWJyZWFkY3J1bWIge1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLmluZm8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG5cbm56LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcbn1cblxuLmFudC1sYXlvdXQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAxNDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xufVxuXG5uei1zZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDEzNHB4O1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIGdyYXk7XG59XG5cbm56LXNlbGVjdC10b3AtY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNlbnRlci1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlcGFyYXRvciB7XG4gIHdpZHRoOiAwLjVweDtcbiAgaGVpZ2h0OiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbm56LWJhZGdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLmNlbnRlciBsaSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogNHZoICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm56LXNpZGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubnotc2lkZXIgdWwuc2lkZXItbWVudSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbm56LXNpZGVyIC5pY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGLhurFuZyBrw61jaCB0aMaw4bubYyBpY29uICovXG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxubnotc2lkZXIgLmljb24tY29udGFpbmVyIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5uei1zaWRlciAuaWNvbi10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogxJHhu4MgY2xpY2sgduG6q24gdMOhYyDEkeG7mW5nIHbDoG8gaWNvbiBu4bq/dSBj4bqnbiAqL1xufVxuXG4uZXhwYW5kIHtcbiAgZmxleDogMCAwIDMuMnJlbSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDMuMnJlbSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMuMnJlbSAhaW1wb3J0YW50O1xufVxuXG4ubm90LWV4cGFuZCB7XG4gIG1pbi13aWR0aDogMjB2dyAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMjB2dyAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIwdncgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1jb2xsYXBzZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xufVxuXG4uYW50LXRhYmxlLWJvZHkuc3ViLW56LXNpZGVyIHtcbiAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlci1tZW51LWlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uc2VsZWN0LWJyYW5jaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VsZWN0LWJyYW5jaCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uc2VsZWN0LWJyYW5jaC1uYW1lIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiogU1lOQyAqL1xuLnNwbGFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yNXZ3O1xuICBtYXJnaW4tdG9wOiAtMjV2aDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNwbGFzaCB7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTMwdnc7XG4gICAgbWFyZ2luLXRvcDogLTI1dmg7XG4gIH1cbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbmxpOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbn1cblxubGk6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQsIC5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkID4gYSwgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUtc2VsZWN0ZWQsIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLXNlbGVjdGVkID4gYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4udGh1bWJuYWlsIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn0iXX0= */"] });


/***/ }),

/***/ 33525:
/*!************************************************************!*\
  !*** ./src/app/cafe/desktop/dashboard/dashboard.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 81930);
/* harmony import */ var _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ 96627);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 36747);
/* harmony import */ var _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account-information/account-information.component */ 30166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        children: [
            {
                path: 'overviews',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_apexcharts_dist_apexcharts_common_js"), __webpack_require__.e("src_app_cafe_desktop_menu_overviews_overviews_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../menu/overviews/overviews.module */ 57588)).then(m => m.OverviewsModule)
            },
            // {
            //   path: 'order',
            //   loadChildren: () => import('../menu/order/order.module').then(m => m.OrderModule)
            // },
            {
                path: 'management',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_management_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../menu/management/management.module */ 1855)).then(m => m.ManagementModule)
            },
            {
                path: 'printer',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-order-invoice_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_printer_printer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../menu/management/printer/printer.module */ 56151)).then(m => m.PrinterModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../menu/settings/settings.module */ 79429)).then(m => m.SettingsModule)
            },
            {
                path: 'developers',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_developers_developers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../menu/developers/developers.module */ 33721)).then(m => m.DevelopersModule)
            },
        ]
    }
];
class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_2__.LottieModule.forRoot({ player: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.playerFactory }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_4__.AccountInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_2__.LottieModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_dashboard_dashboard_module_ts.js.map