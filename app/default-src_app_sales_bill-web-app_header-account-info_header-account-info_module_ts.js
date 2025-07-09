"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_bill-web-app_header-account-info_header-account-info_module_ts"],{

/***/ 57850:
/*!*****************************************************************************************!*\
  !*** ./src/app/sales/bill-web-app/account-information/account-information.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountInformationComponent": () => (/* binding */ AccountInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
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
    /**
     * Lấy hình ảnh từ Desktop
     * @example this.onUpload($event)
     */
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
    /**
     * Cập nhật thông tin thay đổi của nv vào database
     * @param formValue : giá trị của biến this.detailEmployee
     * @example this.updateEmployee(this.detailEmployee.value)
    */
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
AccountInformationComponent.ɵfac = function AccountInformationComponent_Factory(t) { return new (t || AccountInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhImage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
AccountInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountInformationComponent, selectors: [["app-account-information"]], inputs: { modalAccountInfo: "modalAccountInfo" }, outputs: { closeAccount: "closeAccount" }, decls: 3, vars: 5, consts: [["nzWidth", "60vw", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["id", "layout-employee-form", "nz-form", "", 1, "ant-table-body", 3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [1, "bg-img", "center-all-content", 3, "click"], ["id", "file-upload", "type", "file", "accept", ".png, .jpg", 2, "display", "none", 3, "change"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", 3, "ngStyle", "src"], ["nz-col", "", "nzSpan", "12"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "5", "required", "", 3, "placeholder", "blur"], ["combineTplName", ""], ["readonly", "", "type", "email", "formControlName", "email", "nz-input", "", "required", "", 3, "placeholder"], ["readonly", "", "formControlName", "password", "type", "password", "nz-input", "", 3, "placeholder"], [1, "calling-code"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["formControlName", "phone", "readonly", "", "type", "tel", "nz-input", "", "required", "", 3, "placeholder"], ["formControlName", "dateofbirth", 3, "nzPlaceHolder", "blur"], ["formControlName", "address", "nz-input", "", 3, "placeholder", "blur"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], ["nz-row", ""], ["formControlName", "datework", 2, "width", "95%", 3, "ngModelChange"], ["formControlName", "contract", "nz-input", "", 2, "width", "95%", 3, "placeholder", "blur"], [4, "ngIf"], ["nzShowSearch", "", "formControlName", "gender", 2, "border", "none !important", 3, "nzPlaceHolder", "ngModelChange"], ["nzValue", "Female", 3, "nzLabel"], ["nzValue", "Male", 3, "nzLabel"]], template: function AccountInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function AccountInformationComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.modalAccountInfo = $event; })("nzOnOk", function AccountInformationComponent_Template_nz_modal_nzOnOk_0_listener() { return ctx.closeModal(); })("nzOnCancel", function AccountInformationComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccountInformationComponent_ng_container_2_Template, 90, 54, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, "Account information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.modalAccountInfo)("nzFooter", null);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__.NzDatePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: [".bg-img[_ngcontent-%COMP%] {\n  width: 120px;\n  padding: 4px;\n  height: 120px;\n  background: #f2f2f2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 10px;\n  margin-bottom: 8px;\n}\n.bg-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #8e8e93;\n}\n.bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-date-picker[_ngcontent-%COMP%] {\n  margin: 0 8px 12px 0;\n  width: 100%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code) {\n  position: relative;\n}\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code)   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n.calling-code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 60px;\n  color: var(--ion-color-vh-gray);\n  cursor: pointer;\n  grid-gap: 2px;\n  gap: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFDQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFBQTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBR0o7QUFEQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFJSjtBQURBO0VBQ0Usa0JBQUE7QUFJRjtBQURBO0VBQ0Usa0JBQUE7QUFJRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBSUYiLCJmaWxlIjoiYWNjb3VudC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICBjb2xvcjogIzhlOGU5MztcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFudC1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5uei1kYXRlLXBpY2tlciB7XHJcbiAgICBtYXJnaW46IDAgOHB4IDEycHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm56LWlucHV0LWdyb3VwOmhhcyguY2FsbGluZy1jb2RlKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5uei1pbnB1dC1ncm91cDpoYXMoLmNhbGxpbmctY29kZSkgaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogNjBweDtcclxufVxyXG5cclxuLmNhbGxpbmctY29kZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNjBweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 1412:
/*!*****************************************************************************************!*\
  !*** ./src/app/sales/bill-web-app/header-account-info/header-account-info.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderAccountInfoComponent": () => (/* binding */ HeaderAccountInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/theme.service */ 68125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account-information/account-information.component */ 57850);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 1707);






















function HeaderAccountInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.vhQuerySales.getDefaultBranch().name);
} }
function HeaderAccountInfoComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Sell voucher/card"), "");
} }
function HeaderAccountInfoComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Exchange voucher/card"), "");
} }
function HeaderAccountInfoComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Order from web/app"));
} }
function HeaderAccountInfoComponent_li_70_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_li_70_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.change_branch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Change branch"), " ");
} }
function HeaderAccountInfoComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Sales page settings"));
} }
function HeaderAccountInfoComponent_app_account_information_87_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-account-information", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("closeAccount", function HeaderAccountInfoComponent_app_account_information_87_Template_app_account_information_closeAccount_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.closeAccountInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("modalAccountInfo", ctx_r11.modalAccountInfo);
} }
function HeaderAccountInfoComponent_ng_container_91_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 46);
} }
function HeaderAccountInfoComponent_ng_container_91_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_ng_container_91_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const template_r20 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.default_selling_page = template_r20.url; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HeaderAccountInfoComponent_ng_container_91_div_2_i_6_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r19.default_selling_page == template_r20.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", template_r20.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, template_r20.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.default_selling_page == template_r20.url);
} }
function HeaderAccountInfoComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HeaderAccountInfoComponent_ng_container_91_div_2_Template, 7, 7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.templates);
} }
function HeaderAccountInfoComponent_ng_container_94_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, item_r29.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r29.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r29.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r29.name, " ");
} }
function HeaderAccountInfoComponent_ng_container_94_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
} if (rf & 2) {
    const selected_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "assets/icon/settings/language/", selected_r30.nzValue, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", selected_r30.nzLabel, " ");
} }
function HeaderAccountInfoComponent_ng_container_94_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 62);
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r31)("nzLabel", item_r31);
} }
function HeaderAccountInfoComponent_ng_container_94_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_ng_container_94_div_25_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const color_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r33.themeService.changeColor(color_r32.theme, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", color_r32.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", color_r32.theme);
} }
function HeaderAccountInfoComponent_ng_container_94_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-list", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HeaderAccountInfoComponent_ng_container_94_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.lang = $event; })("ngModelChange", function HeaderAccountInfoComponent_ng_container_94_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r37.selectLang($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, HeaderAccountInfoComponent_ng_container_94_nz_option_8_Template, 4, 6, "nz-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HeaderAccountInfoComponent_ng_container_94_ng_template_9_Template, 2, 2, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "nz-list-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HeaderAccountInfoComponent_ng_container_94_Template_nz_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.fontSize = $event; })("ngModelChange", function HeaderAccountInfoComponent_ng_container_94_Template_nz_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.setFontSize($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, HeaderAccountInfoComponent_ng_container_94_nz_option_18_Template, 1, 2, "nz-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "nz-list-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, HeaderAccountInfoComponent_ng_container_94_div_25_Template, 1, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 9, "Language"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r13.lang)("nzCustomTemplate", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.langList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, "Font size"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r13.fontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 13, "Color"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.themeService.themeList);
} }
function HeaderAccountInfoComponent_ng_container_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { "justify-content": a0 }; };
const _c1 = function () { return { top: "45%", transform: "translateY(-50%)" }; };
const _c2 = function () { return { "max-height": "70vh" }; };
class HeaderAccountInfoComponent {
    constructor(vhAuth, router, vhComponent, languageService, vhQuerySales, translateService, functionService, http, themeService) {
        this.vhAuth = vhAuth;
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.translateService = translateService;
        this.functionService = functionService;
        this.http = http;
        this.themeService = themeService;
        this.useBranch = this.functionService.checkUsingBranch();
        this.modalAccountInfo = false;
        this.showConfig = false; //  biến show modal cấu hình
        this.langList = [
            { name: 'Vietnamese', value: 'vi', img: 'assets/icon/settings/language/vi.svg', country_code: 'VN' },
            { name: 'English', value: 'en', img: 'assets/icon/settings/language/en.svg', country_code: 'US' }
        ];
        this.lang = this.vhAuth.localStorageGET('language_code');
        this.size = [12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.templates = [];
        this.store_main_sector = '';
        this.country_code = 'VN';
        this.language = 'vi';
        /////////////------------------------FONT_SIZE---------------------------//////////////
        this.fontSize = parseFloat(localStorage.getItem("vh-sales-system-fontsize"));
        /**Xử lý branches */
        this.branchList = [];
        this.branchDefault = {};
        this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
        this.show_modal_choose_interface = false;
        this.default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
    }
    ngOnInit() {
        this.checkBranches();
        this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của user
        this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
            this.templates = templates[this.language];
        }); // Lấy giao diện theo main_sector của cửa hàng
    }
    setFontSize(value) {
        localStorage.setItem("vh-sales-system-fontsize", JSON.stringify(value));
        this.fontSize = value;
        document.documentElement.style.fontSize = value + 'px';
    }
    gotoChangeVoucher() {
        this.router.navigateByUrl('/exchange-voucher');
    }
    /////////////------------------------COLOR---------------------------//////////////
    changeColor(theme, event) {
        this.vhAuth.changeTheme(theme, event);
    }
    selectLang(value) {
        let lang = this.langList.find(item => item.value == value);
        this.vhAuth.localStorageSET('language_code', value);
        this.vhAuth.localStorageSET('country_code', lang.country_code);
        localStorage.setItem("vh-sales-language", value);
        this.translateService.use(value);
        this.languageService.switchLanguage(value);
    }
    checkBranches() {
        // this.vhQuerySales.refreshLocalBranchs().then(() => {
        let branches = [...this.vhQuerySales.getlocalBranchs()];
        let employee = this.vhAuth.getUser();
        // check branch latest
        this.branchDefault = this.vhQuerySales.getDefaultBranch();
        let thisBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
        if (this.branchDefault.name != thisBranch.name) {
            this.vhQuerySales.clearDefaultBranch();
            this.vhQuerySales.setDefaultBranch(thisBranch._id);
            this.branchDefault = this.vhQuerySales.getDefaultBranch();
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
        // })
    }
    change_branch() {
        this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to change branch") + "?", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhQuerySales.clearDefaultBranch();
            this.router.navigate(['/login'], { state: { change_branch: true } });
        }).catch(() => { });
    }
    /**
    * thiết lập giao diện trang bán hàng
    * @param type sale-pos | sale-desktop
    */
    updateInterface(type, permission) {
        if (this.vhAuth.checkMyPermission(permission)) {
            Promise.all([this.vhComponent.showLoading(this.languageService.translate("Changing interface..."), "current-loading", null, null, false),
                this.vhAuth.updateMyPermission({ default_display_page: permission }),
            ])
                .then(() => {
                this.router.navigate(["/sales/" + type], { state: { isSync: true } });
            })
                .finally(() => this.vhComponent.hideLoading(0));
        }
        else
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("You do not have this rights"));
    }
    /**
      * thiết lập giao diện trang bán hàng  sale-pos | sale-desktop
      *
      */
    updateSalesInterface() {
        this.vhAuth.updateEmployee(this.user._id, { default_selling_page: this.default_selling_page, default_display_page: 'selling_display_page' })
            .then((bool) => {
            this.router.navigate([this.default_selling_page], { state: { isSync: true } });
        });
    }
    /**Đóng modal và get lại thông tin user */
    closeAccountInfo(event) {
        this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
        this.modalAccountInfo = false;
    }
    gotoHome() {
        this.router.navigate(['/sales/dashboard/overview'], { state: { isSync: true } });
    }
    gotoSalesVoucher() {
        this.router.navigateByUrl('/sales-voucher');
    }
    gotoSalesPrepaidCard() {
        this.router.navigateByUrl('/sales-payment-card');
    }
    gotoPrepaidCard() {
        this.router.navigateByUrl('/prepaid-card', { state: { url: this.router.url } });
    }
    gotoSalesOrder() {
        this.router.navigateByUrl('/bill-web-app/sales-order');
    }
    gotoSalesOrderVoucher() {
        this.router.navigateByUrl('/bill-web-app/sales-order-voucher');
    }
    gotoExchangeOrderVoucher() {
        this.router.navigateByUrl('/bill-web-app/exchange-order-voucher');
    }
    gotoSalesOrderPrepaidCard() {
        this.router.navigateByUrl('/bill-web-app/sales-order-payment-card');
    }
    gotoExchangeOrderCard() {
        this.router.navigateByUrl('/bill-web-app/exchange-order-payment-card');
    }
    logout() {
        this.vhAuth.signOut().then(() => {
            this.vhQuerySales.closeSyncCollections();
            this.vhQuerySales.clearDefaultBranch(); //xóa branchDefault trước khi thoát app
            this.router.navigate(["login"]);
        }, error => {
            console.error('error', error);
        });
    }
}
HeaderAccountInfoComponent.ɵfac = function HeaderAccountInfoComponent_Factory(t) { return new (t || HeaderAccountInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService)); };
HeaderAccountInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderAccountInfoComponent, selectors: [["app-header-account-info"]], decls: 96, vars: 75, consts: [[1, "info", 3, "ngStyle"], ["class", "select-branch center-all-content", 4, "ngIf"], ["nz-dropdown", "", "nzTrigger", "click", 1, "center-div", 2, "cursor", "pointer", "height", "100%", 3, "nzDropdownMenu"], [2, "white-space", "nowrap", "font-size", "0.9rem", "margin-right", "4px", "text-transform", "capitalize"], [3, "nzSrc"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 2, "color", "var(--ion-color-vh-green)", 3, "click"], ["nz-icon", "", "nzType", "dollar", "nzTheme", "outline"], ["nz-menu-item", "", 3, "nzDisabled", "click"], ["nz-icon", "", "nzType", "home", "nzTheme", "outline"], [2, "margin-left", "3px"], ["nz-submenu", "", 3, "nzTitle"], ["titleTplSalesVoucher", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], ["nz-icon", "", "nzType", "credit-card", "nzTheme", "outline"], ["titleTpl", ""], ["titleTplWebAPp", ""], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "retweet", "nzTheme", "outline"], ["titleTplSetting", ""], [2, "min-width", "125px"], ["nz-icon", "", "nzType", "setting", "nzTheme", "outline"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], [3, "modalAccountInfo", "closeAccount", 4, "ngIf"], ["nzWidth", "60vw", 3, "nzStyle", "nzBodyStyle", "nzVisible", "nzOkDisabled", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["nzCentered", "", "nzWidth", "50vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [4, "nzModalFooter"], [1, "select-branch", "center-all-content"], ["src", "assets/icon/global/location.svg", 2, "margin-right", "8px"], [1, "select-branch-name"], [2, "margin-left", "-1px"], ["nz-icon", "", "nzType", "global", "nzTheme", "outline"], [2, "margin-left", "1px"], ["nz-icon", "", "nzType", "branches", "nzTheme", "outline"], [3, "modalAccountInfo", "closeAccount"], ["nz-row", "", 1, "center-all-content", 2, "justify-content", "start !important"], ["nz-col", "", "nzSpan", "12", "class", "bottom-right", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "thumbnail", 3, "click"], [2, "width", "100%", 3, "src"], [2, "text-align", "center"], ["style", "color: var(--ion-color-vh-green);", "nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "var(--ion-color-vh-green)"], ["nzSize", "default"], ["nz-row", "", 1, "row-interface-font"], ["nz-col", "", "nzSpan", "12"], [1, "sub-title"], [1, "select-lang", 2, "width", "100%", 3, "ngModel", "nzCustomTemplate", "ngModelChange"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["defaultTemplate", ""], [1, "no-border"], [3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "row"], ["id", "color-picker"], ["class", "color", 3, "ngClass", "background-color", "click", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [2, "width", "24px", 3, "src"], [3, "nzValue", "nzLabel"], [1, "color", 3, "ngClass", "click"]], template: function HeaderAccountInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderAccountInfoComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "nz-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-dropdown-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_9_listener() { return ctx.updateSalesInterface(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_13_listener() { return ctx.updateInterface("dashboard", "admin_display_page"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, HeaderAccountInfoComponent_ng_template_19_Template, 4, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_22_listener() { return ctx.gotoSalesVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_26_listener() { return ctx.gotoSalesPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, HeaderAccountInfoComponent_ng_template_31_Template, 4, 3, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_34_listener() { return ctx.gotoChangeVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_38_listener() { return ctx.gotoPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, HeaderAccountInfoComponent_ng_template_43_Template, 4, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_46_listener() { return ctx.gotoSalesOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_50_listener() { return ctx.gotoSalesOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_54_listener() { return ctx.gotoExchangeOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_58_listener() { return ctx.gotoSalesOrderPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_62_listener() { return ctx.gotoExchangeOrderCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_66_listener() { return ctx.modalAccountInfo = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, HeaderAccountInfoComponent_li_70_Template, 4, 3, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_71_listener() { return ctx.show_modal_choose_interface = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, HeaderAccountInfoComponent_ng_template_76_Template, 4, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_79_listener() { return ctx.showConfig = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderAccountInfoComponent_Template_li_click_83_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, HeaderAccountInfoComponent_app_account_information_87_Template, 1, 1, "app-account-information", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "nz-modal", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function HeaderAccountInfoComponent_Template_nz_modal_nzVisibleChange_88_listener($event) { return ctx.show_modal_choose_interface = $event; })("nzOnOk", function HeaderAccountInfoComponent_Template_nz_modal_nzOnOk_88_listener() { return ctx.updateSalesInterface(); })("nzOnCancel", function HeaderAccountInfoComponent_Template_nz_modal_nzOnCancel_88_listener() { return ctx.show_modal_choose_interface = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, HeaderAccountInfoComponent_ng_container_91_Template, 3, 1, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "nz-modal", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function HeaderAccountInfoComponent_Template_nz_modal_nzVisibleChange_92_listener($event) { return ctx.showConfig = $event; })("nzOnCancel", function HeaderAccountInfoComponent_Template_nz_modal_nzOnCancel_92_listener() { return ctx.showConfig = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, HeaderAccountInfoComponent_ng_container_94_Template, 26, 15, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, HeaderAccountInfoComponent_ng_container_95_Template, 1, 0, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](32);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](71, _c0, ctx.useBranch ? "space-between" : "flex-end"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDropdownMenu", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSrc", ctx.user.img ? ctx.user.img : "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/template/avatar-shop.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 35, "Sales"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDisabled", !ctx.vhAuth.checkMyPermission("admin_display_page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 37, "Administrator"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTitle", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 39, "Sell voucher"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 41, "Sell prepaid card"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTitle", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 43, "Exchange voucher for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 45, "Exchange prepaid card for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTitle", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 47, "Orders"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 49, "Voucher purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 51, "Voucher exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 53, "Prepaid card purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](65, 55, "Prepaid card exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 57, "Account information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.branchList.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](74, 59, "Change sales interface"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTitle", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](82, 61, "Others"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](86, 63, "Log out"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.modalAccountInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](90, 67, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](73, _c1))("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](74, _c2))("nzVisible", ctx.show_modal_choose_interface)("nzOkDisabled", !ctx.default_selling_page)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 65, "Sales interface"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzVisible", ctx.showConfig)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](93, 69, "Other settings"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__.NzDropDownDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_12__.NzAvatarComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzMenuItemDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__.NzSubMenuComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalFooterDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_4__.AccountInformationComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzRowDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__.NzListComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__.NzListItemComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\nli[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\nli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n#color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  max-width: 90%;\n}\n\n#color-picker[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1hY2NvdW50LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxpQkFBQTtBQUNGOztBQUNFOzs7O0VBRUUsaUJBQUE7QUFHSjs7QUFDQTtFQUNFLHNEQUFBO0VBQ0EsaUNBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFFO0VBQ0Usa0JBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUFFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJoZWFkZXItYWNjb3VudC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubGksXHJcbm56LXNlbGVjdC1pdGVtIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgc3BhbixcclxuICBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2NvbG9yLXBpY2tlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICAuY29sb3Ige1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 28049:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/bill-web-app/header-account-info/header-account-info.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderAccountInfoModule": () => (/* binding */ HeaderAccountInfoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _header_account_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-account-info.component */ 1412);
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-information/account-information.component */ 57850);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








class HeaderAccountInfoModule {
}
HeaderAccountInfoModule.ɵfac = function HeaderAccountInfoModule_Factory(t) { return new (t || HeaderAccountInfoModule)(); };
HeaderAccountInfoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HeaderAccountInfoModule });
HeaderAccountInfoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HeaderAccountInfoModule, { declarations: [_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_1__.AccountInformationComponent, _header_account_info_component__WEBPACK_IMPORTED_MODULE_0__.HeaderAccountInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule], exports: [_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_1__.AccountInformationComponent, _header_account_info_component__WEBPACK_IMPORTED_MODULE_0__.HeaderAccountInfoComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_sales_bill-web-app_header-account-info_header-account-info_module_ts.js.map