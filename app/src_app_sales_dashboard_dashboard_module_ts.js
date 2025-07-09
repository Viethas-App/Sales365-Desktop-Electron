"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_dashboard_dashboard_module_ts"],{

/***/ 16733:
/*!*************************************************************************************************!*\
  !*** ./src/app/sales/dashboard/components/account-information/account-information.component.ts ***!
  \*************************************************************************************************/
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

/***/ 60258:
/*!********************************************************!*\
  !*** ./src/app/sales/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/notification */ 8175);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account-information/account-information.component */ 16733);


























function DashboardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.branchDefault == null ? null : ctx_r0.branchDefault.name);
} }
function DashboardComponent_nz_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, item_r20.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", item_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r20.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r20.name, " ");
} }
function DashboardComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
} if (rf & 2) {
    const selected_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "assets/icon/settings/language/", selected_r21.nzValue, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", selected_r21.nzLabel, " ");
} }
function DashboardComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Sell voucher/card"), "");
} }
function DashboardComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Exchange voucher/card"), "");
} }
function DashboardComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Order from web/app"));
} }
function DashboardComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Instructional video"), "");
} }
function DashboardComponent_li_95_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_li_95_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.change_branch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Change branch"), " ");
} }
function DashboardComponent_span_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Overviews"));
} }
function DashboardComponent_li_224_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_li_224_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.gotoLedprice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "LED price display board\""));
} }
function DashboardComponent_ng_template_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Print page settings"));
} }
function DashboardComponent_app_account_information_356_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-account-information", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeAccount", function DashboardComponent_app_account_information_356_Template_app_account_information_closeAccount_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.closeAccountInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modalAccountInfo", ctx_r18.modalAccountInfo);
} }
function DashboardComponent_ng_container_360_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 111);
} }
function DashboardComponent_ng_container_360_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_ng_container_360_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const template_r29 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r31.default_selling_page = template_r29.url; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DashboardComponent_ng_container_360_div_2_i_6_Template, 1, 0, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r28.default_selling_page == template_r29.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", template_r29.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, template_r29.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r28.default_selling_page == template_r29.url);
} }
function DashboardComponent_ng_container_360_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DashboardComponent_ng_container_360_div_2_Template, 7, 7, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r19.templates);
} }
const _c0 = function (a0) { return { "sider-menu-ion": a0 }; };
const _c1 = function (a0) { return { "sider-icon": a0 }; };
const _c2 = function () { return { top: "45%", transform: "translateY(-50%)" }; };
const _c3 = function () { return { "max-height": "70vh" }; };
class DashboardComponent {
    constructor(router, translateService, vhAuth, languageService, vhComponent, vhQuerySales, functionService, nzModalService, notification, platform, http) {
        this.router = router;
        this.translateService = translateService;
        this.vhAuth = vhAuth;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.functionService = functionService;
        this.nzModalService = nzModalService;
        this.notification = notification;
        this.platform = platform;
        this.http = http;
        this.langList = [
            { name: 'Vietnamese', value: 'vi', img: 'assets/icon/settings/language/vi.svg', country_code: 'VN' },
            { name: 'English', value: 'en', img: 'assets/icon/settings/language/en.svg', country_code: 'US' }
        ];
        this.lang = this.vhAuth.localStorageGET('language_code');
        this.branchDefault = {};
        this.useBranch = this.functionService.checkUsingBranch();
        this.modalAccountInfo = false; //show/hide moal thông tin tài khoản
        this.user = this.vhAuth.getUser(); // thông tin tài khoản hiện tại
        this.show_choose_package = true;
        this.show_modal_choose_interface = false;
        this.active_router_product = false;
        this.active_router_config_product_branch = false;
        this.templates = [];
        this.store_main_sector = '';
        this.country_code = 'VN';
        this.language = 'vi';
        /** biến này để mở rộng - thu nhỏ lại cột menu bên trái */
        this.openMap = {
            sub1: false,
            sub2: false,
            sub3: false
        };
        /**Expand */
        this.isExpand = false;
        this.openSubMap = {
            sub1: false,
            sub2: false,
            sub4: false,
            sub5: false,
        };
        this.openSubBranchMap = {
            sub1: false,
        };
        /**Xử lý branches */
        this.branchList = [];
        this.showModalSelectOrderInterface = false;
        this.order = JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")); // biến chọn giao diện order
        this.default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
        this.freeAccount = this.vhAuth.getStore().freeaccount;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                if (/\/dashboard\/manage\/products/.test(event.url))
                    this.active_router_product = true;
                else
                    this.active_router_product = false;
                if (/\/dashboard\/settings\/configuration\/products/.test(event.url)) {
                    this.active_router_config_product_branch = true;
                    this.openMap.sub2 = true;
                    this.openSubMap.sub3 = true;
                    this.openSubBranchMap.sub1 = true;
                    this.openHandler('sub2');
                    this.openSubHandler('sub3');
                    this.openSubBranchHandler('sub1');
                }
                else
                    this.active_router_config_product_branch = false;
            }
        });
        // if (this.router.getCurrentNavigation().extras.state) this.syncStatus = true;
    }
    ngOnInit() {
        this.vhQuerySales.startLocalStorage().then(() => {
            var _a;
            const skipOverview = ((_a = history.state) === null || _a === void 0 ? void 0 : _a.goback) || false;
            this.useBranch = this.functionService.checkUsingBranch();
            let splash = document.getElementById("lottie-sync");
            if (splash)
                splash.remove();
            this.checkBranches();
            if (!skipOverview) {
                this.gotoOverview();
            }
            this.checkExpireAccount();
            this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
            this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của user
            this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                this.templates = templates[this.language];
            }); // Lấy giao diện theo main_sector của cửa hàng
        });
    }
    getThemeValue() {
        return this.vhAuth.getThemeValue() || 'sky-blue-theme';
    }
    /**
     * kiểm tra tài khoản hết hạn chưa
     * @example  this.checkExpireAccount();
     */
    checkExpireAccount() {
        // this.vhQuerySales.refreshLocalRestrictionMainPackage()
        //   .then((res) => {
        console.log(this.vhQuerySales.getLocalRestrictionMainPackage());
        let number = this.getNumberOfDay(new Date(), new Date(this.vhQuerySales.getLocalRestrictionMainPackage().expire_date));
        if (number > 0) { // check sau 0 ngày hết hạn hiện thông báo
            // check tiếp  còn trong hạn được phép sử dụng hay ko
            if (number < this.vhQuerySales.getLocalRestrictionMainPackage().extra_usage_duration) {
                this.nzModalService.confirm({
                    nzTitle: this.languageService.translate('Branch') + ': ' + this.vhQuerySales.getDefaultBranch().name + ' ' + this.languageService.translate('has expired') + '. ' + this.languageService.translate('Please renew to continue') + '!',
                    nzOkText: this.languageService.translate('Pay'),
                    nzCancelText: this.languageService.translate('Continue'),
                    nzCloseIcon: null,
                    nzClosable: false,
                    nzOnOk: () => {
                        // go to thanh toán
                        this.vhQuerySales.getPayments({ id_store: { $eq: this.vhAuth.getUser()._id }, payment_type: { $eq: 5 } }, {}, {}, 0).then((payments) => {
                            if (payments) {
                                if (payments.length > 0) {
                                    this.router.navigate(['/sales/payment/detail'], {
                                        state: payments
                                    });
                                }
                                else if (payments == 0) {
                                    this.router.navigate(['/sales/payment']);
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
                    nzTitle: this.languageService.translate('Branch') + ': ' + this.vhQuerySales.getDefaultBranch().name + ' ' + this.languageService.translate('has expired') + '. ' + this.languageService.translate('Please renew to continue') + '!',
                    nzOkText: this.languageService.translate('Pay'),
                    nzCancelText: this.languageService.translate('Thoát'),
                    nzCloseIcon: null,
                    nzClosable: false,
                    nzOnOk: () => {
                        // go to thanh toán
                        this.vhQuerySales.getPayments({ id_store: { $eq: this.vhAuth.getUser()._id }, payment_type: { $eq: 5 } }, {}, {}, 0).then((payments) => {
                            if (payments) {
                                if (payments.length > 0) {
                                    this.router.navigate(['/sales/payment/detail'], {
                                        state: payments
                                    });
                                }
                                else if (payments == 0) {
                                    this.router.navigate(['/sales/payment']);
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
        localStorage.setItem('vhpakage', JSON.stringify(this.vhQuerySales.getLocalRestrictionMainPackage()));
    }
    /**
     * hiển thị thông báo sắp hết hạn
     * @param number ngày còn hạn
     * @example  this.createBasicNotification(3);
     */
    createBasicNotification(number) {
        this.notification.blank(this.languageService.translate('Your account is about to expire'), this.languageService.translate("Your account still has") + " " + parseInt((number * -1).toString()) + " " + this.languageService.translate("days of usage left. Please update your service package to avoid interruptions."), {
            nzPlacement: "topRight",
            nzDuration: 8000
        });
    }
    /**
     * trả về khoảng cách giữa 2 ngày
     * @example : getNumberOfDay(15/02/2022, 10/02/2022) => return 5
     * @returns number
     * */
    getNumberOfDay(date1, date2) {
        return (date1.getTime() - date2.getTime()) / (24 * 3600 * 1000);
    }
    /**
     * thiết lập lại ngôn ngữ hiển thị trên app
     * @param value biến giá trị language đã chọn
     * @example this.selectLang('vi')
     */
    selectLang(value) {
        let lang = this.langList.find(item => item.value == value);
        this.vhAuth.localStorageSET('language_code', value);
        this.vhAuth.localStorageSET('country_code', lang.country_code);
        localStorage.setItem("vh-sales-language", value);
        this.translateService.use(value);
        this.languageService.switchLanguage(value);
    }
    /**
     * Đăng xuất khỏi app
     * @example this.logout()
     */
    logout() {
        this.vhAuth.signOut().then(() => {
            this.vhQuerySales.closeSyncCollections();
            this.vhQuerySales.clearDefaultBranch(); //xóa branchDefault trước khi thoát app
            this.router.navigate(["login"]);
        }, error => {
            console.error('error', error);
        });
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
    gotoPos() {
        this.router.navigate(['/sales/' + JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface], { state: { isSync: true } });
    }
    gotoOverview() {
        this.router.navigate(['/sales/dashboard/overview']);
    }
    gotoSale() {
        this.router.navigate(['/sales/dashboard/sale']);
    }
    gotoManageProduct() {
        this.router.navigate(['/sales/dashboard/manage/products']);
    }
    gotoDesignBarcode() {
        this.router.navigate(['/sales/dashboard/manage/design-barcode']);
    }
    gotoManagePartner() {
        this.router.navigate(['/sales/dashboard/manage/partner']);
    }
    gotoInvoice() {
        this.router.navigate(['/sales/dashboard/manage/invoice']);
    }
    gotoCashflow() {
        this.router.navigate(['/sales/dashboard/manage/cashflow']);
    }
    gotoManageStock() {
        this.router.navigate(['/sales/dashboard/manage/stock']);
    }
    gotoReport() {
        this.router.navigate(['/sales/dashboard/manage/reports']);
    }
    ;
    gotoWarrantyRepair() {
        this.router.navigate(['/sales/dashboard/manage/warranty']);
    }
    gotoDelivery() {
        this.router.navigate(['/sales/dashboard/manage/delivery']);
    }
    gotoPrinter(type, name) {
        this.router.navigate(['/sales/dashboard/manage/printer', type], { state: name });
    }
    gotoConfiguration() {
        this.router.navigate(['/sales/dashboard/settings/configuration']);
    }
    gotoTax() {
        if (this.vhAuth.checkMyPermission("management_enable_tax"))
            this.router.navigate(['/sales/dashboard/manage/tax']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoPromotions() {
        this.router.navigate(['/sales/dashboard/manage/sales-program']);
    }
    gotoChat() {
        if (this.vhAuth.checkMyPermission("settings_enable_chat"))
            this.router.navigate(['/sales/dashboard/settings/chat']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoVideo() {
        // this.router.navigate(['/sales/dashboard/settings/video']);
        window.open("https://www.youtube.com/playlist?list=PLfrZcQGHqcCJoK2JrYAm3l5WLgkJWkAuj", "_blank");
    }
    gotoPurchase() {
        this.router.navigate(['/sales/dashboard/settings/purchase']);
    }
    gotoStoreInfo() {
        if (this.vhAuth.checkMyPermission("settings_enable_business"))
            this.router.navigate(['/sales/dashboard/settings/store-info']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoBranch() {
        if (this.vhAuth.checkMyPermission("branch_management_viewing_branches"))
            this.router.navigate(['/sales/dashboard/settings/branch']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoConfigEInvoice() {
        this.router.navigate(['/sales/dashboard/settings/e-invoice']);
    }
    gotoEcommerce() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce']);
        // let check = this.vhAuth.getStore()
        // if (check.isTester) this.router.navigate(['/sales/dashboard/manage/ecommerce']);
        // else this.vhComponent.alertMessageDesktop("warning", "Vui lòng liên hệ Mr Huy 0934.606060 để được kích hoạt sử dụng", 10000)
    }
    gotoDiscount() {
        this.router.navigate(['/sales/dashboard/manage/discount']);
    }
    gotoSocialChannel() {
        this.router.navigate(['/sales/dashboard/manage/socials-channel']);
        // let check = this.vhAuth.getStore()
        // if (check.isTester) this.router.navigate(['/sales/dashboard/manage/socials-channel']);
        // else this.vhComponent.alertMessageDesktop("warning", "Vui lòng liên hệ Mr Huy 0934.606060 để được kích hoạt sử dụng", 10000)
    }
    expand() {
        this.isExpand = !this.isExpand;
    }
    /**
     * xử lý mở ra hoặc thu lại thanh sub-menu cấp 2
     * @param value : vị trí cần mở
     * @example this.openHandler('sub1')
     */
    openSubHandler(value) {
        for (const key in this.openSubMap) {
            if (key !== value) {
                this.openSubMap[key] = false;
            }
        }
    }
    /**
    * xử lý mở ra hoặc thu lại thanh sub-menu cấp 3 của chi nhánh
    * @param value : vị trí cần mở
    * @example this.openHandler('sub1')
    */
    openSubBranchHandler(value) {
        for (const key in this.openSubBranchMap) {
            if (key !== value) {
                this.openSubMap[key] = false;
            }
        }
    }
    gotoConfigSaleReport() {
        this.router.navigate(['/sales/dashboard/settings/configuration/sale-report']);
    }
    gotoConfigSyncData() {
        this.router.navigate(['/sales/dashboard/settings/configuration/sync-data']);
    }
    gotoConfigInvoice() {
        this.router.navigate(['/sales/dashboard/settings/configuration/invoices']);
    }
    gotoConfigPromotions() {
        this.router.navigate(['/sales/dashboard/settings/configuration/sales-program']);
    }
    gotoConfigTheme() {
        this.router.navigate(['/sales/dashboard/settings/configuration/theme']);
    }
    gotoConfigProducts() {
        this.router.navigate(['/sales/dashboard/settings/configuration/products']);
    }
    // Link nhà phát triển phần mềm
    gotoSupport() {
        this.router.navigate(['/sales/dashboard/developers/support']);
    }
    gotoPolicy() {
        this.router.navigate(['/sales/dashboard/developers/policy']);
    }
    gotoOnlinePayment() {
        this.vhComponent.showLoading("").then(() => {
            this.vhQuerySales.getPayments({ id_store: { $eq: this.vhAuth.getUser()._id }, payment_type: { $eq: 5 } }, {}, {}, 0).then((payments) => {
                if (payments) {
                    if (payments.length > 0) {
                        this.vhComponent.hideLoading(0).then(() => {
                            this.router.navigate(['/sales/dashboard/developers/online-payment/detail'], {
                                state: { payment_exist: true }
                            });
                        });
                    }
                    else if (payments == 0) {
                        this.router.navigate(['/sales/dashboard/developers/online-payment']);
                        this.vhComponent.hideLoading(0);
                    }
                }
            });
        });
    }
    gotoHistoryPayment() {
        this.router.navigate(['/sales/dashboard/developers/history-payment']);
    }
    gotoManageKey() {
        this.router.navigate(['/sales/dashboard/developers/manage-key']);
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
    /**Đóng modal và get lại thông tin user */
    closeAccountInfo(event) {
        this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
        this.modalAccountInfo = false;
    }
    /**
    * đổi giao diện từ admin => sales
    */
    updateInterface() {
        if (this.vhAuth.checkMyPermission('selling_display_page')) {
            this.vhComponent.showLoading('').then(() => {
                if (!this.default_selling_page) {
                    this.vhComponent.hideLoading(0);
                    this.show_modal_choose_interface = true;
                }
                else
                    this.vhAuth.updateMyPermission({ default_display_page: 'selling_display_page' })
                        .then((bool) => {
                        this.vhComponent.hideLoading(0)
                            .then(() => {
                            this.router.navigate(['/sales/' + this.default_selling_page], { state: { isSync: true } });
                        });
                    });
            });
        }
        else
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("You do not have this rights"));
        this.vhAuth.localStorageSET("isFirstTime_management", true);
    }
    /**
      * thiết lập giao diện trang bán hàng  sale-pos | sale-desktop
      *
      */
    updateSalesInterface() {
        this.vhComponent.showLoading('')
            .then(() => {
            this.vhAuth.updateMyPermission({ default_selling_page: this.default_selling_page, default_display_page: 'selling_display_page' })
                .then((bool) => {
                this.vhComponent.hideLoading(0);
                this.router.navigate(['/sales/' + this.default_selling_page], { state: { isSync: true } });
            });
        });
    }
    gotoWeb(link) {
        if (this.platform.is("electron"))
            electron.shell.openExternal(link);
        else
            window.open(link, '_blank');
    }
    gotoChangeVoucher() {
        this.router.navigateByUrl('/sales/exchange-voucher');
    }
    gotoPrepaidCard() {
        this.router.navigateByUrl('/sales/prepaid-card', { state: { url: this.router.url } });
    }
    gotoSalesVoucher() {
        this.router.navigateByUrl('/sales/sales-voucher');
    }
    gotoSalesPrepaidCard() {
        this.router.navigateByUrl('/sales/sales-payment-card');
    }
    gotoLedprice() {
        this.router.navigate(['/sales/sales/dashboard/settings/configuration/led-price']);
    }
    gotoSalesOrder() {
        this.router.navigateByUrl('/sales/bill-web-app/sales-order');
    }
    gotoSalesOrderVoucher() {
        this.router.navigateByUrl('/sales/bill-web-app/sales-order-voucher');
    }
    gotoExchangeOrderVoucher() {
        this.router.navigateByUrl('/sales/bill-web-app/exchange-order-voucher');
    }
    gotoSalesOrderPrepaidCard() {
        this.router.navigateByUrl('/sales/bill-web-app/sales-order-payment-card');
    }
    gotoExchangeOrderCard() {
        this.router.navigateByUrl('/sales/bill-web-app/exchange-order-payment-card');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_9__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 361, vars: 250, consts: [[2, "height", "100%"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "logo", 2, "height", "100%"], [2, "height", "52px", 3, "src"], ["target", "_blank", "href", "https://zalo.me/0934606060"], [2, "height", "38px", "margin-left", "20px", 3, "src"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content", "info"], ["class", "select-branch", 4, "ngIf"], ["nzBorderless", "", 1, "select-lang", 3, "ngModel", "nzCustomTemplate", "ngModelChange"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["defaultTemplate", ""], ["nz-dropdown", "", "nzTrigger", "click", 1, "center-col", 2, "cursor", "pointer", "height", "100%", 3, "nzDropdownMenu"], [2, "white-space", "nowrap", "font-size", "0.9rem", "margin-right", "4px", "text-transform", "capitalize"], [3, "nzSrc"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "dollar", "nzTheme", "outline"], ["nz-menu-item", "", 2, "color", "var(--ion-color-vh-green)"], ["nz-icon", "", "nzType", "home", "nzTheme", "outline"], ["nz-submenu", "", 3, "nzTitle"], ["titleTplSalesVoucher", ""], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], ["nz-icon", "", "nzType", "credit-card", "nzTheme", "outline"], ["titleTplExchangeVoucher", ""], ["titleTplWebAPp", ""], ["titleTplVideo", ""], ["nz-menu-item", ""], ["href", "https://www.youtube.com/playlist?list=PLfrZcQGHqcCJoK2JrYAm3l5WLgkJWkAuj", "target", "_blank", "rel", "noopener noreferrer"], ["nz-icon", "", "nzType", "desktop", "nzTheme", "outline"], ["href", "https://www.youtube.com/playlist?list=PLfrZcQGHqcCKV8xgTkytu4SGjNca9infR", "target", "_blank", "rel", "noopener noreferrer"], ["nz-icon", "", "nzType", "mobile", "nzTheme", "outline"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], ["nzTheme", "light", 1, "ant-table-body", 3, "ngClass"], [1, "icon-container"], ["src", "assets/icon/overviews/Button_Truycaptrangbanhang.svg", 2, "color", "var(--ion-color-vh-green)", 3, "click"], [1, "icon-text"], ["nz-menu", "", "nzMode", "inline", 1, "sider-menu", "ant-table-body", 2, "width", "100%", 3, "nzInlineCollapsed"], ["nzSelected", "", "nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", 2, "margin", "0", 3, "ngClass", "nzTooltipTitle", "click"], ["src", "assets/icon/overviews/overviews.svg", 2, "padding-top", "10px"], [4, "ngIf"], ["nzMenuClassName", "ant-table-body sub-nz-sider", "nz-submenu", "", "nzIcon", "reconciliation", 1, "center", 3, "ngClass", "nzOpen", "nzTitle", "nzOpenChange"], ["nz-menu-item", "", "routerLink", "/sales/dashboard/manage/products", 3, "nzSelected"], ["src", "assets/icon/management/product.svg"], ["src", "assets/icon/management/invoice.svg"], ["nz-menu-item", "", "nz-menu-item", "", 3, "click"], ["src", "assets/icon/management/report.svg"], ["src", "assets/icon/management/cashflow.svg"], ["src", "assets/icon/management/stock.svg"], ["src", "assets/icon/management/partner.svg"], ["src", "assets/icon/management/tax.svg"], ["nz-icon", "", "nzType", "barcode", "nzTheme", "outline"], ["src", "assets/icon/management/warranty.svg"], ["src", "assets/icon/management/delivery.svg"], ["src", "assets/icon/management/promotions.svg"], ["src", "./assets/icon/management/socials-channel/facebook-icon.svg"], ["src", "./assets/icon/management/ecommerce/ecommerce.svg"], ["nz-submenu", "", "nzIcon", "setting", 2, "margin", "0", 3, "ngClass", "nzOpen", "nzTitle", "nzOpenChange"], ["src", "assets/icon/settings/store-info.svg"], ["src", "assets/icon/management/branch.svg"], ["src", "assets/icon/management/ingredient.svg"], [2, "margin-left", "0px"], ["src", "assets/icon/settings/video.svg"], ["nz-icon", "", "nzType", "cloud-sync", "nzTheme", "outline"], ["nz-submenu", "", 2, "margin", "0", 3, "nzTitle", "ngClass", "nzOpen", "nzOpenChange"], ["titleTplPrintSetting", ""], ["src", "assets/icon/management/purchase.svg"], ["src", "./assets/icon/management/customer_return.svg"], ["src", "./assets/icon/management/supplier_return.svg"], ["src", "./assets/icon/management/expenses.svg"], ["src", "./assets/icon/management/receipts.svg"], ["src", "./assets/icon/management/transfers.svg"], ["nz-icon", "", "nzType", "delivered-procedure", "nzTheme", "outline"], ["src", "./assets/icon/management/doisoathanghoa.svg"], ["src", "assets/icon/management/stock/xuat_huy.svg"], ["nz-submenu", "", "nzIcon", "message", 2, "margin", "0", 3, "ngClass", "nzOpen", "nzTitle", "nzOpenChange"], ["nz-icon", "", "nzType", "check-square", "nzTheme", "outline"], ["nz-icon", "", "nzType", "code-sandbox", "nzTheme", "outline"], ["nz-menu-item", "", 2, "height", "fit-content", 3, "click"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline"], [2, "white-space", "normal"], ["nz-icon", "", "nzType", "hdd", "nzTheme", "outline"], ["nz-icon", "", "nzType", "wallet", "nzTheme", "outline"], ["nz-icon", "", "nzType", "file-done", "nzTheme", "outline"], ["nz-button", "", "nzShape", "circle", 1, "button-collapse", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "inner-layout"], [3, "modalAccountInfo", "closeAccount", 4, "ngIf"], ["nzWidth", "60vw", 3, "nzStyle", "nzBodyStyle", "nzVisible", "nzOkDisabled", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], [1, "select-branch"], ["src", "assets/icon/global/location.svg"], [1, "select-branch-name"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [2, "width", "24px", 3, "src"], [2, "margin-left", "-1px"], ["nz-icon", "", "nzType", "global", "nzTheme", "outline"], [2, "margin-left", "1px"], ["nz-icon", "", "nzType", "youtube", "nzTheme", "outline"], ["nz-icon", "", "nzType", "branches", "nzTheme", "outline"], ["src", "assets/icon/settings/configuration.svg"], [3, "modalAccountInfo", "closeAccount"], ["nz-row", "", 1, "center-all-content", 2, "justify-content", "start !important"], ["nz-col", "", "nzSpan", "12", "class", "bottom-right", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "thumbnail", 3, "click"], [2, "width", "100%", 3, "src"], [2, "text-align", "center"], ["style", "color: var(--ion-color-vh-green);", "nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "var(--ion-color-vh-green)"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_33_listener() { return ctx.gotoSalesVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_37_listener() { return ctx.gotoSalesPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, DashboardComponent_ng_template_42_Template, 4, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_45_listener() { return ctx.gotoChangeVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_49_listener() { return ctx.gotoPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, DashboardComponent_ng_template_54_Template, 4, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_57_listener() { return ctx.gotoSalesOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_61_listener() { return ctx.gotoSalesOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_65_listener() { return ctx.gotoExchangeOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_69_listener() { return ctx.gotoSalesOrderPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_73_listener() { return ctx.gotoExchangeOrderCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, DashboardComponent_ng_template_78_Template, 4, 3, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_91_listener() { return ctx.modalAccountInfo = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](92, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](95, DashboardComponent_li_95_Template, 4, 3, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_96_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "nz-sider", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "ion-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_ion_icon_click_103_listener() { return ctx.updateInterface(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_108_listener() { return ctx.gotoOverview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](111, "ion-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](112, DashboardComponent_span_112_Template, 3, 3, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_113_listener($event) { return ctx.openMap.sub1 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_113_listener() { return ctx.openHandler("sub1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "ion-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_121_listener() { return ctx.gotoInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "ion-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_126_listener() { return ctx.gotoReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "ion-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_131_listener() { return ctx.gotoCashflow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "ion-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_136_listener() { return ctx.gotoManageStock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](137, "ion-icon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_141_listener() { return ctx.gotoManagePartner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](142, "ion-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_146_listener() { return ctx.gotoTax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "ion-icon", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_151_listener() { return ctx.gotoDesignBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](152, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_156_listener() { return ctx.gotoWarrantyRepair(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "ion-icon", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_161_listener() { return ctx.gotoDelivery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](162, "ion-icon", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_166_listener() { return ctx.gotoPromotions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "ion-icon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_171_listener() { return ctx.gotoSocialChannel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](172, "ion-icon", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_176_listener() { return ctx.gotoEcommerce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](177, "ion-icon", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_181_listener($event) { return ctx.openMap.sub2 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_181_listener() { return ctx.openHandler("sub2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](182, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_184_listener() { return ctx.gotoStoreInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](185, "ion-icon", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](188, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_189_listener() { return ctx.gotoBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](190, "ion-icon", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](193, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_194_listener() { return ctx.gotoConfigEInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](195, "ion-icon", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](198, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_199_listener() { return ctx.gotoConfigProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](200, "ion-icon", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](203, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_204_listener() { return ctx.gotoConfigSaleReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](205, "ion-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](208, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](209, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_209_listener() { return ctx.gotoConfigInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](210, "ion-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](213, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_214_listener() { return ctx.gotoConfigTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](215, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](218, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_219_listener() { return ctx.gotoConfigPromotions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](220, "ion-icon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](223, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](224, DashboardComponent_li_224_Template, 5, 3, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_225_listener() { return ctx.gotoVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](226, "ion-icon", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](229, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_230_listener() { return ctx.gotoConfigSyncData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](231, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](233);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](234, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_235_listener($event) { return ctx.openSubMap.sub4 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_235_listener() { return ctx.openSubHandler("sub4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](236, DashboardComponent_ng_template_236_Template, 4, 3, "ng-template", null, 67, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_239_listener() { return ctx.gotoPrinter("page_desktop_sales", "Sales"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](240, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](243, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_244_listener() { return ctx.gotoPrinter("page_desktop_purchase", "Purchase"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](245, "ion-icon", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](247);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](248, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](249, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_249_listener() { return ctx.gotoPrinter("page_desktop_customer_returned", "Customer returned"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](250, "ion-icon", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](253, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_254_listener() { return ctx.gotoPrinter("page_desktop_return_supplier", "Return supplier"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](255, "ion-icon", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](258, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_259_listener() { return ctx.gotoPrinter("page_desktop_expense", "Pay for liabilities / others"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](260, "ion-icon", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](263, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_264_listener() { return ctx.gotoPrinter("page_desktop_receipt", "Receive from receivables / others"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](265, "ion-icon", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](268, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_269_listener() { return ctx.gotoPrinter("page_desktop_warranty", "Warranty, repair"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](270, "ion-icon", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](272);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](273, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_274_listener() { return ctx.gotoPrinter("page_desktop_delivery_receive_money", "Transfer, receive money"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](275, "ion-icon", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](278, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_279_listener() { return ctx.gotoPrinter("page_desktop_delivery_receive_goods", "Delivery, receive goods"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](280, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](282);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](283, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_284_listener() { return ctx.gotoPrinter("page_desktop_inventory", "Inventory note"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](285, "ion-icon", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](288, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](289, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_289_listener() { return ctx.gotoPrinter("page_desktop_destroy_product", "Destroy goods"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](290, "ion-icon", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](293, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](294, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_294_listener() { return ctx.gotoPrinter("page_desktop_sales_voucher", "Sell voucher"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](295, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](298, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](299, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_299_listener() { return ctx.gotoPrinter("page_desktop_exchange_voucher", "Exchange voucher for goods"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](300, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](303, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_304_listener() { return ctx.gotoPrinter("page_desktop_sales_payment_card", "Sell prepaid card"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](305, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](306, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](307);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](308, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](309, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_309_listener() { return ctx.gotoPrinter("page_desktop_exchange_payment_card", "Exchange prepaid card for goods"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](310, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](311, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](312);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](313, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "li", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_314_listener($event) { return ctx.openMap.sub3 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_314_listener() { return ctx.openHandler("sub3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](315, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](316, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_317_listener() { return ctx.gotoPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](318, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](320);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](321, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_322_listener() { return ctx.gotoSupport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](323, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](325);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](326, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](327, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_327_listener() { return ctx.gotoWeb("https://sales365.vn/nganh-hang-ban-buon,-ban-le"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](328, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](330);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](331, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_332_listener() { return ctx.gotoWeb("https://viethas.com/san-pham/thiet-bi-ban-hang"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](333, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](335);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](336, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](337, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_337_listener() { return ctx.gotoOnlinePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](338, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](340);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](341, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_342_listener() { return ctx.gotoHistoryPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](343, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](345);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](346, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_347_listener() { return ctx.gotoManageKey(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](348, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](350);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](351, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_352_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](353, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](354, "nz-layout", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](355, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](356, DashboardComponent_app_account_information_356_Template, 1, 1, "app-account-information", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "nz-modal", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function DashboardComponent_Template_nz_modal_nzVisibleChange_357_listener($event) { return ctx.show_modal_choose_interface = $event; })("nzOnOk", function DashboardComponent_Template_nz_modal_nzOnOk_357_listener() { return ctx.updateSalesInterface(); })("nzOnCancel", function DashboardComponent_Template_nz_modal_nzOnCancel_357_listener() { return ctx.show_modal_choose_interface = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](358, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](359, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](360, DashboardComponent_ng_container_360_Template, 3, 1, "ng-container", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](43);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](55);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](79);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/img/logo_" + ctx.getThemeValue() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/img/Hotline247_" + ctx.getThemeValue() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.branchList.length > 1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 102, "Sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 104, "Administrator"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 106, "Sell voucher"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 108, "Sell prepaid card"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 110, "Exchange voucher for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 112, "Exchange prepaid card for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](60, 114, "Orders"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 116, "Voucher purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](68, 118, "Voucher exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](72, 120, "Prepaid card purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](76, 122, "Prepaid card exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](85, 124, "Guide on computer"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](90, 126, "Guide on phone"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](94, 128, "Account information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.branchList.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 130, "Log out"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.isExpand ? "expand" : "not-expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](106, 132, "Access the sales page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzInlineCollapsed", ctx.isExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTooltipTitle", ctx.isExpand ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](109, 134, "Overviews") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](110, 136, ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](238, _c0, ctx.isExpand));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](114, 138, "Management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](240, _c1, ctx.isExpand))("nzOpen", ctx.openMap.sub1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSelected", ctx.active_router_product);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](120, 140, "Products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](125, 142, "Invoices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](130, 144, "Report"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](135, 146, "Cashflow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](140, 148, "Warehouse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](145, 150, "Partner"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](150, 152, "Tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](155, 154, "Label design"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](160, 156, "Warranty, Repair"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](165, 158, "eLogistics"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](170, 160, "Sales program"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](175, 162, "Social networks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](180, 164, "E-commerce"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](182, 166, "Settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](242, _c1, ctx.isExpand))("nzOpen", ctx.openMap.sub2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](188, 168, "Store information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](193, 170, "Branchs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](198, 172, "E-Invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](203, 174, "Products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](208, 176, "Report"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](213, 178, "Invoices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](218, 180, "Display"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](223, 182, "Branch management scope"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.platform.is("electron"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](229, 184, "Video instruction"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](234, 186, "Sync data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTitle", _r16)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](244, _c1, ctx.isExpand))("nzOpen", ctx.openSubMap.sub4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](243, 188, "Sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](248, 190, "Purchase"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](253, 192, "Customer returned"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](258, 194, "Return supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](263, 196, "Pay for liabilities / others"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](268, 198, "Receive from receivables / others"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](273, 200, "Warranty, repair"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](278, 202, "Transfer, receive money"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](283, 204, "Delivery, receive goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](288, 206, "Inventory note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](293, 208, "Destroy goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](298, 210, "Sell voucher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](303, 212, "Exchange voucher for goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](308, 214, "Sell prepaid card"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](313, 216, "Exchange prepaid card for goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](315, 218, "Software developer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](246, _c1, ctx.isExpand))("nzOpen", ctx.openMap.sub3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](321, 220, "Software usage policy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](326, 222, "Support, user guide"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](331, 224, "Introduction to Sales Viethas software"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](336, 226, "Purchase sales equipment, printing paper"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](341, 228, "Online payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](346, 230, "Lookup payment history"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](351, 232, "License key management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx.isExpand ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modalAccountInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](359, 236, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](248, _c2))("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](249, _c3))("nzVisible", ctx.show_modal_choose_interface)("nzOkDisabled", !ctx.default_selling_page)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](358, 234, "Sales interface"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzHeaderComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropDownDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__.NzAvatarComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__.NzMenuDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__.NzMenuItemDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__.NzSubMenuComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzSiderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_22__.NzTooltipDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_23__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzOptionComponent, _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_3__.AccountInformationComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["@charset \"UTF-8\";\n.logo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  float: left;\n}\nul[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n}\nspan[_ngcontent-%COMP%], li[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nnz-sider[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnz-sider[_ngcontent-%COMP%]   ul.sider-menu[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  height: calc(100% - 40px);\n  overflow-y: auto;\n}\nnz-sider[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  height: 40px;\n  display: inline-block;\n}\nnz-sider[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\nnz-sider[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-70%, -50%);\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-green);\n  white-space: nowrap;\n  pointer-events: none;\n  \n}\n.sider-menu-ion[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.header-menu[_ngcontent-%COMP%] {\n  line-height: 64px;\n  background-color: #fff;\n}\n.inner-layout[_ngcontent-%COMP%] {\n  padding: 0px 24px 24px 24px;\n  overflow-y: auto;\n}\nnz-breadcrumb[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\nnz-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 24px;\n  min-height: 280px;\n}\n.ant-layout-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-right: 0;\n  border-bottom: 1px solid #00000014;\n  box-shadow: 0px 2px 6px #00000014;\n}\nnz-select[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 134px;\n}\n.select-branch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.select-branch[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin-right: 5px;\n}\n.select-branch-name[_ngcontent-%COMP%] {\n  max-width: 600px;\n  min-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.info[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-right: 24px;\n}\nnz-select-top-control[_ngcontent-%COMP%] {\n  border: none;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.center-col[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  width: 0.5px;\n  height: 70%;\n  background-color: gray;\n}\nnz-badge[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\nion-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n.center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  line-height: 4vh !important;\n  align-items: center;\n}\n.modal-branch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.modal-branch-complete[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 8px;\n  left: 0;\n  bottom: 0;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  width: 100%;\n  cursor: pointer;\n}\n.modal-branch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.modal-branch[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.modal-branch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: auto;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.modal-branch[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.expand[_ngcontent-%COMP%] {\n  flex: 0 0 5vw !important;\n  min-width: 5vw !important;\n  max-width: 5vw !important;\n}\n.not-expand[_ngcontent-%COMP%] {\n  min-width: 20vw !important;\n  flex: 0 0 20vw !important;\n  max-width: 20vw !important;\n}\n.button-collapse[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  margin-bottom: 12px;\n  border-radius: 100px !important;\n  width: 33px;\n  height: 33px;\n  box-shadow: 0px 2px 6px #00000014;\n}\n.ant-table-body.sub-nz-sider[_ngcontent-%COMP%] {\n  height: 70vh !important;\n}\n\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  top: 50%;\n  left: 50%;\n  margin-left: -25vw;\n  margin-top: -25vh;\n}\n@media only screen and (min-width: 768px) {\n  .splash[_ngcontent-%COMP%] {\n    width: 60vw;\n    height: 50vh;\n    top: 50%;\n    left: 50%;\n    margin-left: -30vw;\n    margin-top: -25vh;\n  }\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n  border-bottom: 1px solid var(--ion-color-vh-green) !important;\n}\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-green) !important;\n}\n  .ant-dropdown-menu-item-selected, .ant-dropdown-menu-item-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85) !important;\n  background-color: white !important;\n}\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n  .ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {\n  color: var(--ion-color-vh-green) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsZ0NBQUE7QUFFRjtBQUNBOzs7RUFHRSxpQkFBQTtBQUVGO0FBQUU7Ozs7OztFQUVFLGlCQUFBO0FBTUo7QUFGQTtFQUNFLFlBQUE7QUFLRjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBS0o7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSUo7QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUdKO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJDQUFBO0FBRUo7QUFJRTtFQUNFLGlCQUFBO0FBREo7QUFLQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUtBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0FBRkY7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBRkY7QUFLQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FBRkY7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBT0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsWUFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpGO0FBTUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBSko7QUFRQTtFQUNFLGtCQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0FBTEY7QUFTRTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQU5KO0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBUkY7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0FBVEo7QUFZRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVZKO0FBYUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWNFO0VBQ0UsVUFBQTtBQVpKO0FBZ0JBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBYkY7QUFnQkE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFiRjtBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBYkY7QUFnQkE7RUFDRSx1QkFBQTtBQWJGO0FBZ0JBLFVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFkRjtBQWdCRTtFQVRGO0lBVUksV0FBQTtJQUNBLFlBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFiRjtBQUNGO0FBZ0JBO0VBQ0UsMkNBQUE7RUFDQSw2REFBQTtBQWJGO0FBZ0JBO0VBQ0Usa0JBQUE7QUFiRjtBQWdCQTtFQUNFLDJDQUFBO0FBYkY7QUFnQkE7RUFDRSwyQ0FBQTtBQWJGO0FBZ0JBOzs7O0VBSUUscUNBQUE7RUFDQSxrQ0FBQTtBQWJGO0FBZ0JBO0VBQ0Usc0RBQUE7RUFDQSxpQ0FBQTtBQWJGO0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBYkY7QUFlRTtFQUNFLGtCQUFBO0FBYko7QUFpQkE7RUFDRSwyQ0FBQTtBQWRGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5sb2dvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBmbG9hdDogbGVmdDtcbn1cblxudWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcbn1cblxuc3BhbixcbmxpLFxubnotc2VsZWN0LWl0ZW0ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbnNwYW4gc3BhbixcbnNwYW4gaSxcbmxpIHNwYW4sXG5saSBpLFxubnotc2VsZWN0LWl0ZW0gc3Bhbixcbm56LXNlbGVjdC1pdGVtIGkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxubnotc2lkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5uei1zaWRlciB1bC5zaWRlci1tZW51IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxubnotc2lkZXIgLmljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgLyogYuG6sW5nIGvDrWNoIHRoxrDhu5tjIGljb24gKi9cbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5uei1zaWRlciAuaWNvbi1jb250YWluZXIgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbm56LXNpZGVyIC5pY29uLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIC01MCUpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiDEkeG7gyBjbGljayB24bqrbiB0w6FjIMSR4buZbmcgdsOgbyBpY29uIG7hur91IGPhuqduICovXG59XG5cbi5zaWRlci1tZW51LWlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaGVhZGVyLW1lbnUge1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmlubmVyLWxheW91dCB7XG4gIHBhZGRpbmc6IDBweCAyNHB4IDI0cHggMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxubnotYnJlYWRjcnVtYiB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG5uei1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjRweDtcbiAgbWluLWhlaWdodDogMjgwcHg7XG59XG5cbi5hbnQtbGF5b3V0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwMTQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcbn1cblxubnotc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWluLXdpZHRoOiAxMzRweDtcbn1cblxuLnNlbGVjdC1icmFuY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdC1icmFuY2ggaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnNlbGVjdC1icmFuY2gtbmFtZSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxubnotc2VsZWN0LXRvcC1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2VudGVyLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNlbnRlci1jb2wgLnNlcGFyYXRvciB7XG4gIHdpZHRoOiAwLjVweDtcbiAgaGVpZ2h0OiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbm56LWJhZGdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLmNlbnRlciBsaSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogNHZoICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbC1icmFuY2gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubW9kYWwtYnJhbmNoLWNvbXBsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtYnJhbmNoIGRpdiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLm1vZGFsLWJyYW5jaCBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9kYWwtYnJhbmNoIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vZGFsLWJyYW5jaCBuei1zZWxlY3Qge1xuICB3aWR0aDogOTAlO1xufVxuXG4uZXhwYW5kIHtcbiAgZmxleDogMCAwIDV2dyAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDV2dyAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDV2dyAhaW1wb3J0YW50O1xufVxuXG4ubm90LWV4cGFuZCB7XG4gIG1pbi13aWR0aDogMjB2dyAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMjB2dyAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIwdncgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1jb2xsYXBzZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xufVxuXG4uYW50LXRhYmxlLWJvZHkuc3ViLW56LXNpZGVyIHtcbiAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XG59XG5cbi8qKiBTWU5DICovXG4uc3BsYXNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTI1dnc7XG4gIG1hcmdpbi10b3A6IC0yNXZoO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc3BsYXNoIHtcbiAgICB3aWR0aDogNjB2dztcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzB2dztcbiAgICBtYXJnaW4tdG9wOiAtMjV2aDtcbiAgfVxufVxuXG4uc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGk6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufVxuXG5saTpmb2N1cyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkID4gYSxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLXNlbGVjdGVkLFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUtc2VsZWN0ZWQgPiBhIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQwO1xufVxuXG4udGh1bWJuYWlsIHtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi50aHVtYm5haWwgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG46Om5nLWRlZXAgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtc2VsZWN0ZWQgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 79865:
/*!*****************************************************!*\
  !*** ./src/app/sales/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 60258);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lottie */ 96627);
/* harmony import */ var _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/account-information/account-information.component */ 16733);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.module */ 36747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_apexcharts_dist_apexcharts_common_js"), __webpack_require__.e("src_app_sales_menu_overview_overview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../menu/overview/overview.module */ 3264)).then(m => m.OverviewModule)
            },
            {
                path: 'manage',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_manage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../menu/manage/manage.module */ 92817)).then(m => m.ManageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../menu/settings/settings.module */ 70935)).then(m => m.SettingsModule)
            },
            {
                path: 'developers',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_developers_developers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../menu/developers/developers.module */ 16123)).then(m => m.DevelopersModule)
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
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_1__.LottieModule.forRoot({ player: src_app_app_module__WEBPACK_IMPORTED_MODULE_4__.playerFactory }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        _components_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_2__.AccountInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_1__.LottieModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_dashboard_dashboard_module_ts.js.map