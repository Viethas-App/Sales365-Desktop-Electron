"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_exchange-voucher_exchange-voucher_module_ts-src_app_sales_menu_manage_delivery_-6bf33b"],{

/***/ 77669:
/*!*********************************************************************************************!*\
  !*** ./src/app/sales/exchange-voucher/account-information/account-information.component.ts ***!
  \*********************************************************************************************/
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

/***/ 77996:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/exchange-voucher/config-print/config-print.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPrintComponent": () => (/* binding */ ConfigPrintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/exchange-voucher/exchange-voucher-k57-col3/exchange-voucher-k57-col3.component */ 14785);
/* harmony import */ var src_app_sales_components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/exchange-voucher/exchange-voucher-k80-col3/exchange-voucher-k80-col3.component */ 59356);
/* harmony import */ var src_app_sales_components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/exchange-voucher/exchange-voucher-a5/exchange-voucher-a5.component */ 7512);
/* harmony import */ var src_app_sales_components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/exchange-voucher/exchange-voucher-k80-col4/exchange-voucher-k80-col4.component */ 93513);
/* harmony import */ var src_app_sales_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/exchange-voucher/exchange-voucher-a4/exchange-voucher-a4.component */ 53857);
/* harmony import */ var src_app_sales_interface_vh_sale_voucher_invoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-voucher-invoice */ 51064);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_4_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-option", 16);
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", item_r46.name)("nzLabel", item_r46.name);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_4_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r47.item.printer_name = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_4_Template_nz_select_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r49.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_4_nz_option_5_Template, 1, 2, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "Select printer"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r4.item.printer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.list_printer);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, item_r50.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", item_r50._id);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-option", 16);
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", item_r51.value)("nzLabel", item_r51.name);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-option", 16);
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", item_r52)("nzLabel", item_r52);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_28_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-option", 16);
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", item_r54)("nzLabel", item_r54);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_28_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_28_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r55.item.copies = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_28_Template_nz_select_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r57.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_28_nz_option_5_Template, 1, 2, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "Number of copies"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r8.item.copies);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.list_number_print);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_37_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_37_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r58.item.header = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_37_Template_textarea_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r60.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Header"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r9.item.header);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_38_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_38_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r61.item.footer = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_38_Template_textarea_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r63.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Footer"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r10.item.footer);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_39_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_39_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_39_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r65.item.discount_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_39_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r67.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide discount"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r11.item.discount_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_40_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_40_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_40_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r69.item.discount_bill_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_40_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r71.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide discount"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.item.discount_bill_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_41_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_41_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_41_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r73.item.payment_points_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_41_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r75.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide payment by point"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r13.item.payment_points_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_42_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_42_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_42_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r77.item.payment_coupon_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_42_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r79.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide payment by coupon"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r14.item.payment_coupon_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_43_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_43_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_43_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r81.item.fee_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_43_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r83.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide fee"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r15.item.fee_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_44_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_44_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_44_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r85.item.tax_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_44_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r87.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide tax"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r16.item.tax_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_45_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_45_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_45_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r89.item.debt_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_45_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r91.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide debt"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r17.item.debt_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_46_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_46_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_46_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r93.item.note_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_46_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r95.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide note"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r18.item.note_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_47_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_47_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_47_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r97.item.cash_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_47_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r98); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r99.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide customer money"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r19.item.cash_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_48_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_48_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_48_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r101.item.signature_buyer_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_48_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r102); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r103.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide buyer signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r20.item.signature_buyer_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_49_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_49_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_49_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r105.item.signature_store_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_49_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r107.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide store signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r21.item.signature_store_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_50_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_50_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_50_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r109.item.signature_treasurer_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_50_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r110); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r111.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide treasurer signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r22.item.signature_treasurer_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_51_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_51_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_51_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r113.item.signature_receiver_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_51_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r115.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide recipient signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r23.item.signature_receiver_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_52_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_52_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_52_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r117.item.signature_shipper_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_52_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r119.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide delivery person signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r24.item.signature_shipper_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_53_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_53_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_53_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r121.item.signature_creator_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_53_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r122); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r123.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide voucher creator signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.item.signature_creator_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_54_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_54_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_54_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r125.item.signature_stocker_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_54_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r126); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r127.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide employee signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r26.item.signature_stocker_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_55_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_55_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_55_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r129.item.signature_accountancy_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_55_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r130); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r131.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide chief accountant signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r27.item.signature_accountancy_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_56_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_56_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_56_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r133.item.header_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_56_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r134); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r135.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide header content when printing"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r28.item.header_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_57_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_57_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_57_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r138); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r137.item.footer_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_57_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r138); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r139.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide footer content when printing"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r29.item.footer_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_58_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_58_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_58_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r142); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r141.item.logo_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_58_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r142); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r143.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide store logo"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r30.item.logo_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_59_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_59_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_59_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r146); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r145.item.name_store_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_59_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r146); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r147.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide store name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r31.item.name_store_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_60_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_60_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_60_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r150); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r149.item.address_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_60_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r150); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r151.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide store address"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r32.item.address_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_61_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_61_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_61_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r154); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r153.item.name_branch_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_61_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r154); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r155.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide branch name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r33.item.name_branch_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_62_Template(rf, ctx) { if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_62_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_62_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r158); const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r157.item.phone_number_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_62_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r158); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r159.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide store phone number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r34.item.phone_number_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_63_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_63_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_63_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r161.item.bill_code_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_63_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r162); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r163.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide invoice code"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r35.item.bill_code_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_64_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_64_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_64_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r165.item.barcode_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_64_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r166); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r167.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide invoice code barcode"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r36.item.barcode_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_65_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_65_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_65_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r169.item.date_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_65_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r170); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r171.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide order creation time"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r37.item.date_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_66_Template(rf, ctx) { if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_66_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_66_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r174); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r173.item.employee_name_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_66_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r174); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r175.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide employee name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r38.item.employee_name_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_67_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_67_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_67_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r177.item.customer_name_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_67_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r178); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r179.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide customer name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r39.item.customer_name_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_68_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_68_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_68_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r182); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r181.item.customer_address_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_68_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r182); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r183.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide customer address"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r40.item.customer_address_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_69_Template(rf, ctx) { if (rf & 1) {
    const _r186 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_69_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_69_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r186); const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r185.item.customer_phone_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_69_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r186); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r187.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide customer phone number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r41.item.customer_phone_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_70_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_70_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_70_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r189.item.supplier_name_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_70_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r190); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r191.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide supplier name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r42.item.supplier_name_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_71_Template(rf, ctx) { if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_71_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_71_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r194); const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r193.item.supplier_address_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_71_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r194); const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r195.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide supplier address"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r43.item.supplier_address_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_72_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_72_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_72_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r198); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r197.item.supplier_phone_hidden = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_72_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r198); const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r199.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Hide supplier phone number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r44.item.supplier_phone_hidden);
} }
function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-tabset");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "nz-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_4_Template, 6, 5, "nz-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "nz-switch", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_switch_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r200.item.enable = $event; })("click", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_switch_click_9_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_switch_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r203.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "nz-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_select_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r204.printer.print_size_default = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_select_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r205.updatePrintPageType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_option_15_Template, 2, 4, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "nz-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r206.item.font_family = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_select_ngModelChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r207.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_option_21_Template, 1, 2, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "nz-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_select_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r208.item.font_size = $event; })("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_nz_select_ngModelChange_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r209.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_option_27_Template, 1, 2, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_28_Template, 6, 5, "nz-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "nz-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_textarea_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r210.item.notice = $event; })("blur", function ConfigPrintComponent_ng_container_2_nz_tabset_1_Template_textarea_blur_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r201); const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r211.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "nz-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_37_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_38_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_39_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_40_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_41_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_42_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_43_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_44_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_45_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_46_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_47_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_48_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_49_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_50_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_51_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_52_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_53_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_54_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_55_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_56_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_57_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_58_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_59_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_60_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_61_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_62_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_63_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_64_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_65_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_66_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_67_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_68_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_69_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_70_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_71_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, ConfigPrintComponent_ng_container_2_nz_tabset_1_nz_list_item_72_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 53, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.platform.is("electron"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 55, "Allows print"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.item.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 57, "Print size"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.printer.print_size_default);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.printer.print_sizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 59, "Font style"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.item.font_family);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.list_font);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 61, "Font size"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.item.font_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.list_font_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.platform.is("electron"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 63, "Notice"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.item.notice);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 65, "Invoice information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.header));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.footer));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.discount_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.discount_bill_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.payment_points_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.payment_coupon_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.fee_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.tax_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.debt_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.note_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.cash_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_buyer_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_store_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_treasurer_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_receiver_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_shipper_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_creator_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_stocker_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.signature_accountancy_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.header_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.footer_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.logo_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.name_store_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.address_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.name_branch_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.phone_number_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.bill_code_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.barcode_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.date_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.employee_name_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.customer_name_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.customer_address_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.customer_phone_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.supplier_name_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.supplier_address_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.checktype(ctx_r2.item.supplier_phone_hidden));
} }
function ConfigPrintComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_2_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r213); const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r212.addPrinter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "Add printer"));
} }
function ConfigPrintComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ConfigPrintComponent_ng_container_2_nz_tabset_1_Template, 73, 67, "nz-tabset", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ConfigPrintComponent_ng_container_2_div_2_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.printer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.printer);
} }
function ConfigPrintComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConfigPrintComponent_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r215); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r214.printTemp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "Print a draft"), " ");
} }
class ConfigPrintComponent {
    constructor(vhQuerySales, vhComponent, languageService, vhAuth, platform) {
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.platform = platform;
        this.showConfigPrint = false;
        this.hide = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.printer = {};
        this.item = {};
        this.list_font = [
            {
                value: 'sans-serif',
                name: "Arial"
            },
            {
                value: 'serif',
                name: "Times New Roman"
            },
            {
                value: 'monospace',
                name: "Courier New"
            },
            {
                value: 'system-ui',
                name: 'System-ui',
            }
        ];
        this.list_font_size = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.list_printer = [];
        this.list_number_print = [1, 2, 3, 4, 5];
        // dữ liệu dùng để thêm máy in
        this.exchange_voucher = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_exchange_voucher',
            print_sizes: [{
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Store"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Store"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Store"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                }
            ]
        };
        /** --------- dữ liệu mẫu --------- */
        // bán voucher
        this.tempBillSalesVoucher = {
            title: "Invoice",
            bill_code: "A35DE4F",
            bill_type: 40,
            date: new Date().toISOString(),
            id_customer: 'id_retail',
            id_employee: this.vhAuth.getUser()._id,
            fee: 0,
            payment_type: 1,
            discount: 200000,
            note: "Đây là hoá đơn in thử...",
            qty_total: 3,
            root_total: 11129000,
            tax: 0,
            tax_value: 0,
            total: 10929000,
            payment: 10929000,
        };
        this.bill_details_SalesVoucher = [
            {
                name: "Voucher mùa hè rực rỡ",
                code: "J6JLST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_voucher: "dwYfCEHUerZTutzv45CV",
                id_voucher_code: "QdZ350rrnaNL8676l0QA",
                price: 191000,
                products: [
                    {
                        name: "BIXOLON SAMSUNG SRP-275C PRINTER",
                        unit: "pcs",
                        price: 4800000,
                        price_origin: 2000000,
                        quantity: 1,
                    },
                    {
                        name: "Máy POS Xprinter XP-I100 2Gb RAM + 16Gb ROM Android K58 - XP-I100 2Gb RAM + 16Gb ROM",
                        unit: "pcs",
                        price: 6290000,
                        quantity: 1,
                    },
                    {
                        name: "Oji K80 80mmx45mm_5 rolls",
                        unit: "roll",
                        price: 39000,
                        quantity: 1,
                    }
                ],
                vtype: 1
            },
        ];
        this.bill_details_ExchangeVoucher = [
            {
                name_voucher: "Voucher mùa hè rực rỡ",
                name_voucher_release: "Sự kiện tháng 7",
                code: "J6JLST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_voucher: "dwYfCEHUerZTutzv45CV",
                id_voucher_code: "QdZ350rrnaNL8676l0QA",
                date_validity: new Date(),
                products: [
                    {
                        name: "BIXOLON SAMSUNG SRP-275C PRINTER",
                        unit: "pcs",
                        price: 4800000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 2,
                        ptype: 1
                    },
                    {
                        name: "Máy POS Xprinter XP-I100 2Gb RAM + 16Gb ROM Android K58 - XP-I100 2Gb RAM + 16Gb ROM",
                        unit: "pcs",
                        price: 6290000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 2,
                        ptype: 1
                    },
                    {
                        name: "Oji K80 80mmx45mm_5 rolls",
                        unit: "roll",
                        price: 39000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 2,
                        ptype: 1
                    }
                ],
                vtype: 1
            },
            {
                name_voucher: "Voucher mùa hè rực rỡ 3",
                name_voucher_release: "Sự kiện tháng 7",
                code: "CLMMST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_voucher: "dwYfCEHUerZTutzv45CV",
                id_voucher_code: "QdZ350rrnaNL8676l0QA",
                date_validity: new Date(),
                products: [
                    {
                        name: "BIXOLON SAMSUNG SRP-275C PRINTER",
                        unit: "pcs",
                        price: 4800000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 2,
                        ptype: 1
                    },
                    {
                        name: "Máy POS Xprinter XP-I100 2Gb RAM + 16Gb ROM Android K58 - XP-I100 2Gb RAM + 16Gb ROM",
                        unit: "pcs",
                        price: 6290000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 2,
                        ptype: 1
                    },
                    {
                        name: "Oji K80 80mmx45mm_5 rolls",
                        unit: "roll",
                        price: 39000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 2,
                        ptype: 1
                    }
                ],
                vtype: 1
            },
        ];
    }
    ngOnInit() {
        this.printer = this.vhQuerySales.getLocalPrintPage("page_desktop_exchange_voucher");
        this.item = this.printer ? this.printer.print_sizes[this.printer.print_sizes.findIndex(e => e._id == this.printer.print_size_default)] : null;
        if (this.platform.is("electron"))
            this.getPrint();
    }
    ngOnDestroy() {
    }
    checktype(value) {
        if (typeof (value) != 'undefined')
            return true;
        if (typeof (value) == 'undefined')
            return false;
    }
    updatePrintPageType(value) {
        this.item = this.printer.print_sizes[this.printer.print_sizes.findIndex(e => e._id == value)];
        this.updatePrint();
    }
    addPrinter() {
        this.vhComponent.showLoading('').then(() => {
            this.vhQuerySales.addPrintPage('page_desktop_exchange_voucher', Object.assign({}, this.exchange_voucher))
                .then((printer) => {
                this.printer = printer;
                this.item = printer.print_sizes[0];
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                }, 500);
            }).catch(err => console.error(err));
            if (this.platform.is("electron"))
                this.getPrint();
        });
    }
    getPrint() {
        electron.ipcRenderer.send("allPrint");
        electron.ipcRenderer.on("printName", (event, data) => {
            this.list_printer = data;
        });
    }
    updatePrint() {
        let value = Object.assign({}, this.printer);
        delete value._id;
        this.vhQuerySales.updatePrintPage(this.printer._id, value);
    }
    printTemp() {
        let invoice = new src_app_sales_interface_vh_sale_voucher_invoice__WEBPACK_IMPORTED_MODULE_5__.VhSaleExchangeVoucherInvoices(this.tempBillSalesVoucher, this.bill_details_ExchangeVoucher, this.vhQuerySales);
        this.vhComponent.showModal(this.renderPrintPageExchangeVoucher(this.printer.print_size_default), { printer: this.item, invoice: invoice }, false, false, `modal-print-${this.printer.print_size_default}`);
    }
    renderPrintPageExchangeVoucher(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeVoucherK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeVoucherK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_3__.ExchangeVoucherK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_2__.ExchangeVoucherA5Component;
            case 'print_size_a4': return src_app_sales_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__.ExchangeVoucherA4Component;
            default: return src_app_sales_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__.ExchangeVoucherA4Component;
        }
    }
}
ConfigPrintComponent.ɵfac = function ConfigPrintComponent_Factory(t) { return new (t || ConfigPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform)); };
ConfigPrintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConfigPrintComponent, selectors: [["app-config-print"]], inputs: { showConfigPrint: "showConfigPrint" }, outputs: { hide: "hide" }, decls: 4, vars: 4, consts: [["nzCentered", "", "nzWidth", "40vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], [4, "nzModalFooter"], [4, "ngIf"], ["style", "height: 400px", "class", "center-all-content", 4, "ngIf"], [3, "nzTitle"], ["nzSize", "default", 1, "hideScrollbar", 2, "height", "400px", "overflow-y", "auto"], [3, "ngModel", "ngModelChange", "click"], [2, "width", "120px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [2, "width", "200px", 3, "ngModel", "ngModelChange"], [1, "no-border"], ["rows", "2", "nz-input", "", 3, "ngModel", "ngModelChange", "blur"], [1, "hideScrollbar", 2, "height", "400px", "overflow-y", "auto"], ["class", "no-border", 4, "ngIf"], [2, "width", "250px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"], ["rows", "1", "nz-input", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "click", "ngModelChange"], ["mode", "ios", 3, "ngModel", "click", "ngModelChange"], [1, "center-all-content", 2, "height", "400px"], ["nz-button", "", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-print", "center-all-content", 3, "click"], ["src", "assets/icon/management/printer.svg", 2, "font-size", "0.9rem", "margin-right", "4px"]], template: function ConfigPrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzVisibleChange", function ConfigPrintComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.showConfigPrint = $event; })("nzOnCancel", function ConfigPrintComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.hide.emit(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ConfigPrintComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ConfigPrintComponent_ng_container_3_Template, 6, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzVisible", ctx.showConfigPrint)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, "Configure voucher exchange print page"));
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalFooterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__.NzListItemComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__.NzIconDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe], styles: ["textarea[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: 0.9rem;\n}\n\n.btn-print[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.btn-print[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-white);\n  background-color: var(--ion-color-vh-green);\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-white);\n  background-color: var(--ion-color-vh-red);\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy1wcmludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFLRiIsImZpbGUiOiJjb25maWctcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4uYnRuLXByaW50IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLmJ0bi1wcmludDpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uYnRuLWFkZHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uYnRuLWRlbGV0ZXtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXJlZCk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 95919:
/*!**********************************************************************!*\
  !*** ./src/app/sales/exchange-voucher/exchange-voucher.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeVoucherComponent": () => (/* binding */ ExchangeVoucherComponent)
/* harmony export */ });
/* harmony import */ var _components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/print/exchange-voucher/exchange-voucher-k57-col3/exchange-voucher-k57-col3.component */ 14785);
/* harmony import */ var _components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/print/exchange-voucher/exchange-voucher-k80-col3/exchange-voucher-k80-col3.component */ 59356);
/* harmony import */ var _components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/print/exchange-voucher/exchange-voucher-k80-col4/exchange-voucher-k80-col4.component */ 93513);
/* harmony import */ var _components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/print/exchange-voucher/exchange-voucher-a5/exchange-voucher-a5.component */ 7512);
/* harmony import */ var _components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/print/exchange-voucher/exchange-voucher-a4/exchange-voucher-a4.component */ 53857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/vh-component/vh-component */ 20411);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _config_print_config_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-print/config-print.component */ 77996);
/* harmony import */ var _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sale-desktop/components/customer/customer.component */ 70064);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sale-desktop/components/customer-profile/customer-profile.component */ 46156);
/* harmony import */ var _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sale-desktop/components/add-customer/add-customer.component */ 29519);
/* harmony import */ var _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sale-desktop/components/retail-info/retail-info.component */ 626);
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-information/account-information.component */ 77669);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




































const _c0 = ["keySearch"];

const _c1 = function (a0) {
  return {
    opacity: a0
  };
};

function ExchangeVoucherComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_ng_template_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r20.useVoucher(ctx_r20.barcode);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r1.barcode.length)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c1, !ctx_r1.barcode.length ? 0.5 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, "Apply"));
  }
}

function ExchangeVoucherComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "Sell voucher/card"), "");
  }
}

function ExchangeVoucherComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "Exchange voucher/card"), "");
  }
}

function ExchangeVoucherComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "Order from web/app"));
  }
}

function ExchangeVoucherComponent_ng_container_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate4"](" ", ctx_r9.invoice.retail_name, " - ", ctx_r9.invoice.retail_phone, " ", ctx_r9.invoice.retail_address ? "-" : "", " ", ctx_r9.invoice.retail_address, " ");
  }
}

function ExchangeVoucherComponent_ng_container_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "app-customer", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeAndReceiveCustomer", function ExchangeVoucherComponent_ng_container_140_Template_app_customer_closeAndReceiveCustomer_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r22.closeAndReceiveCustomer($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_ng_container_140_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r24.openInfoCustomer();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id_customer", ctx_r10.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r10.invoice.id_customer != "id_retail" ? "active" : "deactive");
  }
}

function ExchangeVoucherComponent_i_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_i_142_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r25.openInfoCustomer();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r11.invoice.id_customer != "id_retail" ? "active" : "deactive");
  }
}

function ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "pre", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_ng_container_2_Template_pre_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return ctx_r34.show_modal_select_lots_combo = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const product_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r32.getLotNumber(product_r31.lots, product_r31.id_lotproduct));
  }
}

function ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_div_3_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "pre", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_div_3_span_1_ng_container_2_Template_pre_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
      return ctx_r40.show_modal_select_lots_combo = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const e_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r39.getLotNumber(e_r38.lots, e_r38.id_lotproduct));
  }
}

function ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_div_3_span_1_ng_container_2_Template, 3, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " , ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const e_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"](" ", e_r38.name, " (", ctx_r37.getUnit(e_r38.units, e_r38.ratio), ") x", e_r38.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", e_r38.id_lotproduct);
  }
}

function ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_div_3_span_1_Template, 4, 4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", product_r31.combos);
  }
}

function ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_ng_container_2_Template, 3, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_div_3_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"](" x", product_r31.quantity, " ", product_r31.name, " (", ctx_r30.getUnit(product_r31.units, product_r31.ratio), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", product_r31.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", product_r31.combos);
  }
}

function ExchangeVoucherComponent_ng_container_166_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ExchangeVoucherComponent_ng_container_166_ng_container_11_span_1_Template, 4, 5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", data_r27.products);
  }
}

function ExchangeVoucherComponent_ng_container_166_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzOnConfirm", function ExchangeVoucherComponent_ng_container_166_Template_div_nzOnConfirm_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46);
      const i_r28 = restoredCtx.index;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r45.deleteGoods(i_r28);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ExchangeVoucherComponent_ng_container_166_ng_container_11_Template, 2, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate2"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 8, "Are you sure to delete"), " ", data_r27.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", data_r27.name_voucher_release, " (", data_r27.name_voucher, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", data_r27.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r27.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r27.name_voucher_release);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](19, 10, data_r27.date_validity, "dd/MM/yyyy HH:mm"), " ");
  }
}

function ExchangeVoucherComponent_ng_container_180_div_2_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 87);
  }
}

function ExchangeVoucherComponent_ng_container_180_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_ng_container_180_div_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r51);
      const template_r48 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r50.default_selling_page = template_r48.url;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ExchangeVoucherComponent_ng_container_180_div_2_i_6_Template, 1, 0, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const template_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("active", ctx_r47.default_selling_page == template_r48.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", template_r48.image, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 5, template_r48.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r47.default_selling_page == template_r48.url);
  }
}

function ExchangeVoucherComponent_ng_container_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ExchangeVoucherComponent_ng_container_180_div_2_Template, 7, 7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r14.templates);
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_nz_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "nz-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r64.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 3, element_r64.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzValue", element_r64._id);
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "nz-select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_Template_nz_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r67);
      const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      return item_r61.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_nz_option_6_Template, 2, 6, "nz-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r61.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", item_r61.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", item_r61.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r62.getUnit(item_r61.units, item_r61.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r61.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r62.vhAlgorithm.vhcurrencyunit(item_r61.price), " ");
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_Template, 13, 9, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r61.lots);
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r57.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", data_r57.combos);
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_2_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "nz-option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r71.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 3, element_r71.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzValue", element_r71._id);
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "nz-select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_2_Template_nz_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r74);
      const data_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      return data_r57.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_2_nz_option_7_Template, 2, 6, "nz-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r57.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", data_r57.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", data_r57.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r59.getUnit(data_r57.units, data_r57.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r57.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r59.vhAlgorithm.vhcurrencyunit(data_r57.price), " ");
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_1_Template, 5, 2, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_ng_container_2_Template, 14, 9, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", data_r57.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !data_r57.combos);
  }
}

const _c2 = function () {
  return {
    y: "400px"
  };
};

function ExchangeVoucherComponent_nz_modal_181_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "nz-table", 90, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "th", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "th", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, ExchangeVoucherComponent_nz_modal_181_ng_container_2_ng_container_21_Template, 3, 2, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);

    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzData", ctx_r52.tempDetail)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](19, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 11, "Lot number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _r55.data);
  }
}

function ExchangeVoucherComponent_nz_modal_181_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_nz_modal_181_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r76.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_nz_modal_181_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r78.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 4, "Ok"));
  }
}

function ExchangeVoucherComponent_nz_modal_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nz-modal", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzVisibleChange", function ExchangeVoucherComponent_nz_modal_181_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r79.show_modal_select_lots_combo = $event;
    })("nzOnCancel", function ExchangeVoucherComponent_nz_modal_181_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r80);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r81.handleChooseLotCombo();
    })("nzOnOk", function ExchangeVoucherComponent_nz_modal_181_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r80);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r82.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ExchangeVoucherComponent_nz_modal_181_ng_container_2_Template, 22, 20, "ng-container", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ExchangeVoucherComponent_nz_modal_181_ng_template_3_Template, 6, 6, "ng-template", null, 89, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 4, "Select lot number for products in voucher"), ": ", ctx_r15.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzFooter", _r53)("nzVisible", ctx_r15.show_modal_select_lots_combo);
  }
}

function ExchangeVoucherComponent_app_customer_profile_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-customer-profile", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeInfoCustomer", function ExchangeVoucherComponent_app_customer_profile_182_Template_app_customer_profile_closeInfoCustomer_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r83.closeInfoCustomer($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visibleInfoCustomer", ctx_r16.visibleInfoCustomer)("customer", ctx_r16.customer);
  }
}

function ExchangeVoucherComponent_app_add_customer_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-add-customer", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeAddCustomer", function ExchangeVoucherComponent_app_add_customer_183_Template_app_add_customer_closeAddCustomer_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r86);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r85.closeAddCustomer($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showDrawerAddCusomer", ctx_r17.showDrawerAddCusomer);
  }
}

function ExchangeVoucherComponent_app_retail_info_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-retail-info", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeAddCustomer", function ExchangeVoucherComponent_app_retail_info_184_Template_app_retail_info_closeAddCustomer_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r88);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r87.closeAddCustomer($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showDrawerAddRetail", ctx_r18.showDrawerAddRetail)("retail_name", ctx_r18.invoice.retail_name)("retail_phone", ctx_r18.invoice.retail_phone)("retail_address", ctx_r18.invoice.retail_address);
  }
}

function ExchangeVoucherComponent_app_account_information_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-account-information", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeAccount", function ExchangeVoucherComponent_app_account_information_186_Template_app_account_information_closeAccount_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r89.closeAccountInfo($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("modalAccountInfo", ctx_r19.modalAccountInfo);
  }
}

const _c3 = function (a0) {
  return {
    y: a0
  };
};

const _c4 = function () {
  return {
    top: "45%",
    transform: "translateY(-50%)"
  };
};

const _c5 = function () {
  return {
    "max-height": "70vh"
  };
};

class ExchangeVoucherComponent {
  constructor(vhQuerySales, vhAuth, vhQuery, vhAlgorithm, vhComponent, languageService, router, cdRef, nzModalService, http) {
    this.vhQuerySales = vhQuerySales;
    this.vhAuth = vhAuth;
    this.vhQuery = vhQuery;
    this.vhAlgorithm = vhAlgorithm;
    this.vhComponent = vhComponent;
    this.languageService = languageService;
    this.router = router;
    this.cdRef = cdRef;
    this.nzModalService = nzModalService;
    this.http = http;
    /**Xử lý branches */

    this.branchList = []; // Danh sách chi nhánh

    this.branchDefault = {}; // Chi nhánh mặc định

    this.user = this.vhAuth.getUser(); // thông tin tài khoản hiện tại

    this.dateCurrent = new Date(); // Ngày hiện tại

    this.listVoucherAccepct = []; // danh sách voucher đủ điều kiện

    this.listShow = [];
    this.modalAccountInfo = false; // show/hide moal thông tin tài khoản

    this.showConfig = false; // biến show modal cấu hình

    this.showConfigPrint = false; // biến show modal cấu hình may in

    this.showConfigSales = false; // biến show modal cấu hình trang bán hàng

    this.checkPrinter = true;
    this.isVisible = false;
    this.invoice = {
      bill_type: 41,
      date: new Date(),
      id_branch: this.vhQuerySales.getDefaultBranch()._id,
      id_customer: 'id_retail',
      id_employee: this.vhAuth.getUser()._id,
      note: '',
      tax: 0
    };
    this.employee = {};
    this.templates = [];
    this.store_main_sector = '';
    this.country_code = 'VN';
    this.language = 'vi';
    /**add customer */
    // ----set customer-----

    this.radioValue = 1;
    this.showDrawerAddCusomer = false;
    this.showDrawerAddRetail = false; //--------------visible drawer info customer-----------

    this.visibleInfoCustomer = false;
    this.barcode = '';
    this.barcode_array = [];
    this.show_modal_choose_interface = false;
    this.default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
    this.tempDetail = {};
    this.show_modal_select_lots_combo = false;
  }

  ngOnInit() {
    this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
    this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
    this.vhQuerySales.getVouchers().then(arr => {
      this.listVoucher = arr;
    }, error => {});
    this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng

    this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe(templates => {
      this.templates = templates[this.language];
    }); // Lấy giao diện theo main_sector của cửa hàng
  }

  ngAfterViewChecked() {
    if (document.querySelector("#exchange-voucher") && document.querySelector(".ant-table-thead") && document.querySelector(".button") && document.querySelector(".header-content")) {
      this.heightScroll = document.querySelector("#exchange-voucher").clientHeight - document.querySelector(".ant-table-thead").clientHeight - document.querySelector(".button").clientHeight - document.querySelector(".header-content").clientHeight - 80 + "px";
    }

    this.cdRef.detectChanges();
  } // Xử lí dùng voucher


  useVoucher(code_voucher) {
    this.tempDetail = [];

    if (!this.listVoucherAccepct.find(item => item.code == code_voucher)) {
      this.vhComponent.showLoading('').then(() => {
        this.vhQuerySales.getVoucher_Code_Name_Release_byCode(code_voucher).then(voucherCode => {
          if (voucherCode) {
            switch (voucherCode.status) {
              case 1:
                {
                  this.vhComponent.hideLoading(0);
                  this.vhComponent.alertMessageDesktop('error', this.languageService.translate('Voucher chưa bán !'));
                  break;
                }

              case 4:
                {
                  this.vhComponent.hideLoading(0);
                  this.vhComponent.alertMessageDesktop('error', this.languageService.translate('Voucher đã được sử dụng !'));
                  break;
                }

              default:
                {
                  if (this.dateCurrent > new Date(voucherCode.date_expire)) {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.alertMessageDesktop('error', this.languageService.translate('Voucher đã hết hạn !'));
                    break;
                  } else {
                    this.vhComponent.hideLoading(0);
                    this.listVoucherAccepct = this.listVoucherAccepct.concat(voucherCode);
                    this.listShow = this.listVoucherAccepct; // check xem products có sp có lots hay ko

                    if (voucherCode['products'].filter(pro => pro.ptype == 1 && pro.lots && pro.lots.length).length) {
                      this.show_modal_select_lots_combo = true;
                      this.tempDetail = this.tempDetail.concat(voucherCode['products'].filter(pro => pro.lots && pro.lots.length));
                    } // check trong products có combo có lots ko


                    for (let i of voucherCode['products'].filter(pro => pro.ptype == 5)) {
                      if (i.combos.filter(e => e.lots && e.lots.length).length) this.tempDetail.push(i);
                    }

                    this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Áp dụng thành công voucher !"));
                    break;
                  }
                }
            }
          } else {
            this.vhComponent.hideLoading(0);
            this.vhComponent.alertMessageDesktop('error', this.languageService.translate('Voucher không hợp lệ !'));
          }
        }, err => {
          this.vhComponent.alertMessageDesktop('error', this.languageService.translate(err));
        });
      });
    } else {
      this.vhComponent.alertMessageDesktop('error', this.languageService.translate('Đang áp dụng voucher này!'));
    }
  }

  deleteGoods(position) {
    if (this.listShow.length == 1) {
      this.listShow = [];
    } else {
      this.listShow.splice(position, 1);
    }

    this.listVoucherAccepct = this.listShow;
  }

  gotoHome() {
    this.router.navigate(['/sales/dashboard/overview'], {
      state: {
        isSync: true
      }
    });
  }

  logout() {
    this.vhAuth.signOut().then(() => {
      this.vhQuerySales.closeSyncCollections();
      this.vhQuerySales.clearDefaultBranch(); //xóa branchDefault trước khi thoát app

      this.router.navigate(["/login"]);
    }, error => {
      console.error('error', error);
    });
  } //  xử lý đổi voucher và mở thông báo


  exchangeVoucher() {
    this.vhComponent.showLoading("", "transparent-loading").then(() => {
      let promise = new Array();

      for (let i = 0; i < this.listVoucherAccepct.length; i++) {
        // kiểm tra voucher đã dùng hay chưa
        promise[i] = this.vhQuerySales.getVoucher_Code_Name_Release_byCode(this.listVoucherAccepct[i].code);
      }

      this.vhQuery.asyncPromiseAll(promise).then(array => {
        // xử lý các voucher nào hợp lệ để tạo bill_detail
        let voucher_valid = array.filter(item => item.status == 2 || item.status == 3);
        let bill_detail = [];

        for (let i of voucher_valid) {
          bill_detail.push(this.listVoucherAccepct.find(e => e._id == i._id));
        }

        if (bill_detail.length) this.billDetails = bill_detail.map(m => {
          // bill details
          m = {
            id_voucher: m.id_voucher,
            id_voucher_code: m._id,
            vtype: 1,
            quantity: 1,
            products: m.products.map(map => {
              let product = {
                id_product: map.id_product,
                price: 0,
                ptype: map.ptype,
                quantity: map.quantity,
                ratio: map.ratio
              };
              if (map.id_lotproduct) product['id_lotproduct'] = map.id_lotproduct;
              if (map.id_subproduct) product['id_subproduct'] = map.id_subproduct;

              if (map.ptype == 5) {
                product['combos'] = map.combos.map(combo => {
                  let combos = {
                    id_product: combo.id_product,
                    price: combo.price,
                    quantity: combo.quantity,
                    ptype: combo.type,
                    ratio: combo.ratio ? combo.ratio : 1
                  };
                  if (combo.id_lotproduct) combos['id_lotproduct'] = combo.id_lotproduct;
                  if (combo.id_subproduct) combos['id_subproduct'] = combo.id_subproduct;
                  return combos;
                });
              }

              return product;
            })
          };
          return m;
        }); // bill

        let dataBill = this.invoice; // this.vhComponent.hideLoading(0)

        if (this.billDetails.length == this.listVoucherAccepct.length) {
          this.vhQuerySales.createBill_Billdetail(dataBill, this.billDetails).then(bill => {
            if (bill) {
              this.handlePrint(dataBill, this.listShow);
              this.vhComponent.hideLoading(0);
              this.vhComponent.alertMessageDesktop("success", "Đổi voucher thành công !");
            }
          }, error => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.alertMessageDesktop("error", "Đổi voucher thất bại !");
          });
        } else {
          this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Có voucher không hợp lệ! Vui lòng kiểm tra lại."));
          this.vhComponent.hideLoading(0);
        }
      }, error => {
        this.vhComponent.hideLoading(0);
      });
    });
  } // hủy bỏ đổi voucher


  cancelExchangeVoucher() {
    this.listVoucherAccepct = [];
    this.listShow = [];
  }
  /**
  * lấy thông tin dữ liệu trang in
  * @returns Promise<any>
  * @example this.checkPrint()
  */


  checkPrint() {
    return new Promise((resolve, rejects) => {
      let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_exchange_voucher');
      if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable) resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);else rejects(false);
    });
  }

  handlePrint(bill, bill_details) {
    this.checkPrint().then(printer => {
      if (printer) this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
        printer: printer,
        invoice: bill,
        invoice_detail: bill_details
      }, false, false, `modal-print-${printer['_id']}`).then(modal => {
        modal.onWillDismiss().then(() => this.cancelExchangeVoucher());
      });
    }, err => {
      this.nzModalService.confirm({
        nzTitle: '<i>' + this.languageService.translate("Function") + '</i>',
        nzContent: '<b>' + this.languageService.translate("Please open the function in") + ' ' + '<i>' + '"' + this.languageService.translate("Sales page settings") + '"' + '</i>' + ' ' + ' -> ' + '<i>' + '"' + this.languageService.translate('Print page') + '"' + '</i>' + '</b>',
        nzIconType: "info-circle",
        nzCancelText: null,
        nzOnOk: () => {
          this.cancelExchangeVoucher();
        }
      });
    });
  }
  /**
   * trả về component của trang in tương ứng
   * @example this.renderPrintPage('print_size_a4')
   * @returns component
   */


  renderPrintPage(type) {
    switch (type) {
      case 'print_size_k57_3c':
        return _components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeVoucherK57Col3Component;

      case 'print_size_k80_3c':
        return _components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeVoucherK80Col3Component;

      case 'print_size_k80_4c':
        return _components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.ExchangeVoucherK80Col4Component;

      case 'print_size_a5':
        return _components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_3__.ExchangeVoucherA5Component;

      case 'print_size_a4':
        return _components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__.ExchangeVoucherA4Component;

      default:
        return _components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__.ExchangeVoucherA4Component;
    }
  }

  showConfirm() {
    if (this.listVoucherAccepct.length > 0) {
      this.nzModalService.confirm({
        nzTitle: 'Xác nhận đổi voucher',
        nzOkText: 'Xác nhận và In',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.exchangeVoucher(),
        nzCancelText: 'Hủy',
        nzOnCancel: () => this.cancelExchangeVoucher()
      });
    }
  }

  openDrawerAddCustomerOrRetail() {
    if (this.radioValue == 1) this.showDrawerAddRetail = true;else this.showDrawerAddCusomer = true;
  }

  closeAddCustomer(result) {
    if (this.radioValue == 1) {
      if (result) {
        this.invoice.retail_name = result.retail_name;
        this.invoice.retail_phone = result.retail_phone;
        this.invoice.retail_address = result.retail_address;
      }

      this.showDrawerAddRetail = false;
    } else {
      this.showDrawerAddCusomer = false;
      this.invoice.id_customer = result;
    }
  }

  closeAndReceiveCustomer(event) {
    if (event) {
      this.invoice.id_customer = event;
    }

    this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
  }

  openInfoCustomer() {
    if (this.invoice.id_customer != 'id_retail') {
      this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
      this.visibleInfoCustomer = true;
    }
  }

  closeInfoCustomer(event) {
    this.visibleInfoCustomer = false;
  }

  changeCustomerType(event) {
    if (this.radioValue == 1) {
      this.invoice.id_customer = "id_retail";
    }

    if (event == 2 && this.invoice.retail_name) {
      this.nzModalService.confirm({
        nzTitle: `${this.languageService.translate('Retail customer information will be lost')}?`,
        nzCancelText: this.languageService.translate("Cancel"),
        nzOkText: "Ok",
        nzOnOk: () => {
          this.clearRetailCustomer();
        },
        nzOnCancel: () => {
          this.radioValue = 1;
        }
      });
    }
  }

  clearRetailCustomer() {
    this.invoice.retail_address = '';
    this.invoice.retail_name = '';
    this.invoice.retail_phone = '';
  }
  /**
   * Sự kiện nhận barcode
   */


  getKeyUp(_event) {
    if (this.router.url === "/sales/change-voucher") {
      if (_event.key == "Enter") {
        this.barcode_array.forEach((i, index) => {
          if (i == "Shift") {
            this.barcode_array[index + 1] = this.barcode_array[index + 1].toUpperCase();
            this.barcode_array.splice(index, 1);
          }
        });
        this.barcode = this.barcode_array.join("");
        setTimeout(() => {
          this.barcode_array = [];
        }, 200);
      } else {
        this.barcode_array.push(_event.key);
      }
    }
  }
  /**
  * thiết lập giao diện trang bán hàng
  * @param type sale-pos | sale-desktop
  */


  updateInterface() {
    if (this.vhAuth.checkMyPermission('selling_display_page')) {
      if (!this.default_selling_page) this.show_modal_choose_interface = true;else this.vhAuth.updateEmployee(this.vhAuth.getUser()._id, {
        default_display_page: 'selling_display_page'
      }).then(bool => {
        this.router.navigate(['/sales/' + this.default_selling_page], {
          state: {
            isSync: true
          }
        });
      });
    } else this.vhComponent.alertMessageDesktop("error", this.languageService.translate("You do not have this rights"));
  }
  /**
    * thiết lập giao diện trang bán hàng  sale-pos | sale-desktop
    *
    */


  updateSalesInterface() {
    this.vhAuth.updateEmployee(this.user._id, {
      default_selling_page: this.default_selling_page,
      default_display_page: 'selling_display_page'
    }).then(bool => {
      this.router.navigate(['/sales/' + this.default_selling_page], {
        state: {
          isSync: true
        }
      });
    });
  }

  gotoPrepaidCard() {
    this.router.navigateByUrl('/sales/prepaid-card', {
      state: {
        url: this.router.url
      }
    });
  }
  /**Đóng modal và get lại thông tin user */


  closeAccountInfo(event) {
    this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
    this.modalAccountInfo = false;
  }

  gotoSalesVoucher() {
    this.router.navigateByUrl('/sales/sales-voucher');
  }

  gotoSalesPrepaidCard() {
    this.router.navigateByUrl('/sales/sales-payment-card');
  }

  getUnit(units, ratio) {
    return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
  }

  getLotNumber(lots, _id) {
    let lot = lots.find(item => item._id == _id);
    return lot.lot_number;
  }

  handleChooseLotCombo() {
    let check = false;

    for (let i of this.tempDetail) {
      if (i.ptype == 1 && !i.id_lotproduct) check = true;
      if (i.ptype == 5 && i.combos.filter(item => item.lots && !item.id_lotproduct).length) check = true;
    }

    if (check) this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Please select the lot for the product!"));else {
      this.show_modal_select_lots_combo = false; // this.closeSearchProductList(this.tempDetail)
    }
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

ExchangeVoucherComponent.ɵfac = function ExchangeVoucherComponent_Factory(t) {
  return new (t || ExchangeVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient));
};

ExchangeVoucherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: ExchangeVoucherComponent,
  selectors: [["app-exchange-voucher"]],
  viewQuery: function ExchangeVoucherComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.keySearch = _t.first);
    }
  },
  hostBindings: function ExchangeVoucherComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keypress", function ExchangeVoucherComponent_keypress_HostBindingHandler($event) {
        return ctx.getKeyUp($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresolveWindow"]);
    }
  },
  decls: 187,
  vars: 142,
  consts: [[2, "height", "100%"], [1, "header"], ["nz-row", "", 1, "sales-invoice-today-header"], ["nz-col", "", "nzSpan", "4", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], [2, "margin-right", "16px"], [2, "width", "70%", "padding", "0 0 0 11px", 3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "8", 1, "info", "right-all-content"], [1, "select-branch", "center-all-content"], ["src", "assets/icon/global/location.svg", 2, "margin-right", "8px"], [1, "select-branch-name"], ["nz-dropdown", "", "nzTrigger", "click", 1, "center-div", 2, "cursor", "pointer", "height", "100%", 3, "nzDropdownMenu"], [2, "white-space", "nowrap", "font-size", "0.9rem", "margin-right", "4px", "text-transform", "capitalize"], [3, "nzSrc"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "dollar", "nzTheme", "outline"], ["nz-menu-item", "", 3, "nzDisabled", "click"], ["nz-icon", "", "nzType", "home", "nzTheme", "outline"], [2, "margin-left", "3px"], ["nz-submenu", "", 3, "nzTitle"], ["titleTplSalesVoucher", ""], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], ["nz-icon", "", "nzType", "credit-card", "nzTheme", "outline"], ["titleTpl", ""], ["nz-menu-item", "", 2, "color", "var(--ion-color-vh-green)"], ["titleTplWebAPp", ""], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["nz-submenu", "", "nzIcon", "setting", 3, "nzTitle"], [2, "min-width", "125px"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-icon", "", "nzType", "setting", "nzTheme", "outline"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], ["id", "exchange-voucher"], ["nz-row", "", 1, "header-content"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "12"], ["nz-row", ""], ["nz-col", "", "nzSpan", "8"], ["nz-col", "", "nzSpan", "16"], [2, "cursor", "pointer", "color", "var(--ion-color-vh-green)", "margin-left", "16px", 3, "click"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["nz-col", "", "nzSpan", "14"], [4, "ngIf"], ["nz-col", "", "nzSpan", "2"], ["style", "cursor: pointer; margin-left: 16px;position: relative;display: flex; justify-content: center; align-items: center;", "nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 3, "ngClass", "click", 4, "ngIf"], ["nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzShowPagination", "nzNoResult"], ["show", ""], ["nzWidth", "3%"], ["nzWidth", "37%"], ["nzWidth", "15%"], ["nzWidth", "25%"], ["nzWidth", "20%", "nzAlign", "center"], [4, "ngFor", "ngForOf"], ["nz-row", "", 1, "button"], ["nz-col", "", "nzSpan", "6", 2, "padding", "0 8px"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "disabled", "click"], ["nz-button", "", "nzType", "default", 1, "btn-cancel", "center-all-content", 3, "click"], ["nzWidth", "60vw", 3, "nzStyle", "nzBodyStyle", "nzVisible", "nzOkDisabled", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer", 4, "ngIf"], [3, "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer", 4, "ngIf"], [3, "showConfigPrint", "hide"], [3, "modalAccountInfo", "closeAccount", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "nzSearch", "", 2, "color", "#fff", 3, "disabled", "ngStyle", "click"], [2, "margin-left", "1px"], ["nz-icon", "", "nzType", "global", "nzTheme", "outline"], [3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", "margin-left", "16px", "position", "relative", "display", "flex", "justify-content", "center", "align-items", "center", 3, "ngClass", "click"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-col", "", "nzSpan", "1", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nzAlign", "center"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["nz-row", "", 1, "center-all-content", 2, "justify-content", "start !important"], ["nz-col", "", "nzSpan", "12", "class", "bottom-right", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "thumbnail", 3, "click"], [2, "width", "100%", 3, "src"], [2, "text-align", "center"], ["style", "color: var(--ion-color-vh-green);", "nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "var(--ion-color-vh-green)"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], ["nzWidth", "30%"], ["nzWidth", "10%"], ["nzAlign", "right", "nzWidth", "20%"], ["colspan", "4"], [2, "padding-left", "16px !important"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzAlign", "right"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer"], [3, "showDrawerAddCusomer", "closeAddCustomer"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer"], [3, "modalAccountInfo", "closeAccount"]],
  template: function ExchangeVoucherComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nz-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "nz-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "b", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "nz-input-group", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ExchangeVoucherComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.barcode = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ExchangeVoucherComponent_ng_template_14_Template, 3, 7, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "nz-avatar", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "nz-dropdown-menu", null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "ul", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_28_listener() {
        return ctx.updateInterface();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "li", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_32_listener() {
        return ctx.gotoHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](33, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, ExchangeVoucherComponent_ng_template_38_Template, 4, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_41_listener() {
        return ctx.gotoSalesVoucher();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_45_listener() {
        return ctx.gotoSalesPrepaidCard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](46, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, ExchangeVoucherComponent_ng_template_50_Template, 4, 3, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "li", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](54, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_57_listener() {
        return ctx.gotoPrepaidCard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](58, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](60, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, ExchangeVoucherComponent_ng_template_62_Template, 4, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_65_listener() {
        return ctx.gotoSalesOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](66, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_69_listener() {
        return ctx.gotoSalesOrderVoucher();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](70, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](72, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_73_listener() {
        return ctx.gotoExchangeOrderVoucher();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](74, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](76, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_77_listener() {
        return ctx.gotoSalesOrderPrepaidCard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](78, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](80, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_81_listener() {
        return ctx.gotoExchangeOrderCard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](82, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](84, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_85_listener() {
        return ctx.modalAccountInfo = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](86, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](88, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "li", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](90, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "ul", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_92_listener() {
        return ctx.showConfigPrint = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](93, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](95, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_96_listener() {
        return ctx.showConfig = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](97, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](99, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_li_click_100_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](101, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](103, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "nz-content", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](106, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "b", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](108);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](109, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](110, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "b", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](115, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](116, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](117);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](118, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](120, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](122, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](123);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](124, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](126, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_span_click_126_listener() {
        return ctx.openDrawerAddCustomerOrRetail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](127);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](128, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "nz-radio-group", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ExchangeVoucherComponent_Template_nz_radio_group_ngModelChange_131_listener($event) {
        return ctx.radioValue = $event;
      })("ngModelChange", function ExchangeVoucherComponent_Template_nz_radio_group_ngModelChange_131_listener($event) {
        return ctx.changeCustomerType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](132, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](133);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](134, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](136);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](137, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](139, ExchangeVoucherComponent_ng_container_139_Template, 2, 4, "ng-container", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](140, ExchangeVoucherComponent_ng_container_140_Template, 3, 2, "ng-container", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](142, ExchangeVoucherComponent_i_142_Template, 1, 1, "i", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](143, "nz-table", 50, 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](145, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](147, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](148, "th", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "th", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](150, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](151);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](152, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](153, "th", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](155);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](156, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](157, "th", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](158, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](159);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](160, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](161, "th", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](162, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](163);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](164, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](165, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](166, ExchangeVoucherComponent_ng_container_166_Template, 20, 13, "ng-container", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](167, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](168, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](169, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](170, "button", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_button_click_170_listener() {
        return ctx.showConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](171);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](172, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](174, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExchangeVoucherComponent_Template_button_click_174_listener() {
        return ctx.cancelExchangeVoucher();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](175);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](176, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](177, "nz-modal", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzVisibleChange", function ExchangeVoucherComponent_Template_nz_modal_nzVisibleChange_177_listener($event) {
        return ctx.show_modal_choose_interface = $event;
      })("nzOnOk", function ExchangeVoucherComponent_Template_nz_modal_nzOnOk_177_listener() {
        return ctx.updateSalesInterface();
      })("nzOnCancel", function ExchangeVoucherComponent_Template_nz_modal_nzOnCancel_177_listener() {
        return ctx.show_modal_choose_interface = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](178, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](179, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](180, ExchangeVoucherComponent_ng_container_180_Template, 3, 1, "ng-container", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](181, ExchangeVoucherComponent_nz_modal_181_Template, 5, 6, "nz-modal", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](182, ExchangeVoucherComponent_app_customer_profile_182_Template, 1, 2, "app-customer-profile", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](183, ExchangeVoucherComponent_app_add_customer_183_Template, 1, 1, "app-add-customer", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](184, ExchangeVoucherComponent_app_retail_info_184_Template, 1, 4, "app-retail-info", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](185, "app-config-print", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("hide", function ExchangeVoucherComponent_Template_app_config_print_hide_185_listener() {
        return ctx.showConfigPrint = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](186, ExchangeVoucherComponent_app_account_information_186_Template, 1, 1, "app-account-information", 69);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](15);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](26);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](39);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](51);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](63);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 67, "Voucher"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 69, "Enter voucher code"), "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzSuffix", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 71, "Please scan or enter code"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.barcode);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.vhQuerySales.getDefaultBranch().name);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzDropdownMenu", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.user.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzSrc", ctx.user.img ? ctx.user.img : "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/template/avatar-shop.png");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](31, 73, "Sales"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzDisabled", !ctx.vhAuth.checkMyPermission("admin_display_page"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](36, 75, "Administrator"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzTitle", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](44, 77, "Sell voucher"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](48, 79, "Sell prepaid card"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzTitle", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](56, 81, "Exchange voucher for goods"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](60, 83, "Exchange prepaid card for goods"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzTitle", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](68, 85, "Orders"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](72, 87, "Voucher purchase order"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](76, 89, "Voucher exchange order for goods"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](80, 91, "Prepaid card purchase order"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](84, 93, "Prepaid card exchange order for goods"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](88, 95, "Account information"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](90, 97, "Configure voucher exchange page"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](95, 99, "Print page"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](99, 101, "Others"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](103, 103, "Logout"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](109, 105, "Employee exchanging card"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.user.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](115, 107, "Exchange date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](118, 109, ctx.dateCurrent, "dd/MM/yyyy HH:mm"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](124, 112, "Customer exchange information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" +", ctx.radioValue == 1 ? " Th\u00EAm kh\u00E1ch h\u00E0ng" : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](128, 114, "Add member"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.radioValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzValue", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](134, 116, "Retail customer"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzValue", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](137, 118, "Member"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.radioValue == 1 && ctx.invoice.retail_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](145, 120, "No data"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](138, _c3, ctx.heightScroll))("nzData", ctx.listShow)("nzShowPagination", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](152, 122, "Voucher name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](156, 124, "Voucher code"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](160, 126, "_Issuance name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](164, 128, "Release date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.listShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx.listShow.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](172, 130, "Exchange voucher for goods"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](176, 132, "Cancel voucher exchange"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](179, 136, "Cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](140, _c4))("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](141, _c5))("nzVisible", ctx.show_modal_choose_interface)("nzOkDisabled", !ctx.default_selling_page)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](178, 134, "Sales interface"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showDrawerAddRetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showConfigPrint", ctx.showConfigPrint);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.modalAccountInfo);
    }
  },
  directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_18__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_18__.NzHeaderComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonIcon, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__.NzDropDownDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_25__.NzAvatarComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_26__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_26__.NzMenuItemDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_27__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_26__.NzSubMenuComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_18__.NzContentComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_31__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_32__.NzWaveDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalContentDirective, _config_print_config_print_component__WEBPACK_IMPORTED_MODULE_7__.ConfigPrintComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgStyle, _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__.CustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_33__.NzPopconfirmDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__.NzOptionComponent, _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_9__.CustomerProfileComponent, _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__.AddCustomerComponent, _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_11__.RetailInfoComponent, _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_12__.AccountInformationComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe],
  styles: [".logo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  float: left;\n}\n\nul[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n}\n\nspan[_ngcontent-%COMP%], li[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\nnz-sider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nnz-sider[_ngcontent-%COMP%]   ul.sider-menu[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  height: calc(100% - 40px);\n  overflow-y: auto;\n}\n\n.sider-menu-ion[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  line-height: 64px;\n  background-color: #fff;\n}\n\n.inner-layout[_ngcontent-%COMP%] {\n  padding: 0px 24px 24px 24px;\n  overflow-y: auto;\n}\n\nnz-breadcrumb[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\n.ant-modal-footer[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.4rem;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 16px 32px;\n  background: #fff;\n  padding: 24px;\n  min-height: 280px;\n  display: grid;\n  grid-template-rows: 10% 80% 10%;\n}\n\nnz-content[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n\nnz-content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n\nnz-content[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green);\n  border-radius: 5px;\n  width: 100%;\n  height: 42px;\n}\n\nnz-content[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\nnz-content[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  background: #fff;\n  border-radius: 5px;\n  width: 100%;\n  height: 42px;\n}\n\nnz-content[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\n.btn-add-modal[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green);\n  border-radius: 25px !important;\n  width: 45%;\n  height: 42px;\n  border: 1px solid;\n}\n\n.btn-add-modal[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\n.btn-cancel-modal[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  background: #fff;\n  border-radius: 25px !important;\n  width: 45%;\n  height: 42px;\n  border: 1px solid;\n}\n\n.btn-cancel-modal[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\n.ant-layout-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-right: 0;\n  border-bottom: 1px solid #00000014;\n  box-shadow: 0px 2px 6px #00000014;\n}\n\nnz-select[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 134px;\n}\n\n.select-branch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.select-branch[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin-right: 5px;\n}\n\n.select-branch-name[_ngcontent-%COMP%] {\n  max-width: 600px;\n  min-width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.info[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-right: 24px;\n}\n\nnz-select-top-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.center-col[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  width: 0.5px;\n  height: 70%;\n  background-color: gray;\n}\n\nnz-badge[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  line-height: 4vh !important;\n  align-items: center;\n  display: flex;\n}\n\n.modal-branch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.modal-branch-complete[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 8px;\n  left: 0;\n  bottom: 0;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  width: 100%;\n  cursor: pointer;\n}\n\n.modal-branch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.modal-branch[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.modal-branch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: auto;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.modal-branch[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.expand[_ngcontent-%COMP%] {\n  flex: 0 0 5vw !important;\n  min-width: 5vw !important;\n  max-width: 5vw !important;\n}\n\n.not-expand[_ngcontent-%COMP%] {\n  min-width: 20vw !important;\n  flex: 0 0 20vw !important;\n  max-width: 20vw !important;\n}\n\n.button-collapse[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  margin-bottom: 12px;\n  border-radius: 100px !important;\n  width: 33px;\n  height: 33px;\n  box-shadow: 0px 2px 6px #00000014;\n}\n\n.ant-table-body.sub-nz-sider[_ngcontent-%COMP%] {\n  height: 70vh !important;\n}\n\n\n\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  top: 50%;\n  left: 50%;\n  margin-left: -25vw;\n  margin-top: -25vh;\n}\n\n@media only screen and (min-width: 768px) {\n  .splash[_ngcontent-%COMP%] {\n    width: 60vw;\n    height: 50vh;\n    top: 50%;\n    left: 50%;\n    margin-left: -30vw;\n    margin-top: -25vh;\n  }\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n}\n\nli[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-green) !important;\n}\n\n  .ant-dropdown-menu-item-selected, .ant-dropdown-menu-item-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85) !important;\n  background-color: white !important;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n  border-bottom: 1px solid var(--ion-color-vh-green) !important;\n}\n\n  .ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {\n  color: var(--ion-color-vh-green) !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLXZvdWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUE7OztFQUdJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFJSTtFQUNJLGlCQUFBO0FBRFI7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0E7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUZKOztBQUlJO0VBQ0ksaUJBQUE7QUFGUjs7QUFLSTtFQUNJLGlCQUFBO0FBSFI7O0FBTUk7RUFDSSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlI7O0FBTVE7RUFDSSxrREFBQTtBQUpaOztBQVFJO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOUjs7QUFRUTtFQUNJLGtEQUFBO0FBTlo7O0FBV0E7RUFDSSxXQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFVSTtFQUNJLGtEQUFBO0FBUlI7O0FBWUE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBV0k7RUFDSSxrREFBQTtBQVRSOztBQWFBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFWSjs7QUFhQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFZSTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQVZSOztBQWFJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVhSOztBQWVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBWko7O0FBZUE7RUFDSSxZQUFBO0FBWko7O0FBZUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpKOztBQWNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVpSOztBQWdCQTtFQUNJLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksa0JBQUE7QUFiSjs7QUFpQkk7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBZFI7O0FBbUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFrQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWhCUjs7QUFtQkk7RUFDSSxpQkFBQTtBQWpCUjs7QUFvQkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFsQlI7O0FBcUJJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbkJSOztBQXNCSTtFQUNJLFVBQUE7QUFwQlI7O0FBd0JBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBckJKOztBQXdCQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQXJCSjs7QUF3QkE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQXJCSjs7QUF3QkE7RUFDSSx1QkFBQTtBQXJCSjs7QUF5QkEsVUFBQTs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF2Qko7O0FBeUJJO0VBVEo7SUFVUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQXRCTjtBQUNGOztBQXlCQTtFQUNJLGtCQUFBO0FBdEJKOztBQXlCQTtFQUNJLDJDQUFBO0FBdEJKOztBQXlCQTtFQUNJLDJDQUFBO0FBdEJKOztBQXlCQTs7OztFQUlJLHFDQUFBO0VBQ0Esa0NBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksMkNBQUE7RUFDQSw2REFBQTtBQXRCSjs7QUF5QkE7RUFDSSwyQ0FBQTtBQXRCSjs7QUF5QkE7RUFDSSxzREFBQTtFQUNBLGlDQUFBO0FBdEJKOztBQXlCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQXRCSjs7QUF3Qkk7RUFDSSxrQkFBQTtBQXRCUiIsImZpbGUiOiJleGNoYW5nZS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG59XHJcblxyXG5zcGFuLFxyXG5saSxcclxubnotc2VsZWN0LWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbm56LXNpZGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB1bC5zaWRlci1tZW51IHtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZXItbWVudS1pb24ge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLW1lbnUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaW5uZXItbGF5b3V0IHtcclxuICAgIHBhZGRpbmc6IDBweCAyNHB4IDI0cHggMjRweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbm56LWJyZWFkY3J1bWIge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5hbnQtbW9kYWwtZm9vdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxubnotY29udGVudCB7XHJcbiAgICBtYXJnaW46IDE2cHggMzJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgODAlIDEwJTtcclxuXHJcbiAgICBuei10YWJsZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNhbmNlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWFkZC1tb2RhbCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tY2FuY2VsLW1vZGFsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmFudC1sYXlvdXQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDAxNDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxufVxyXG5cclxubnotc2VsZWN0IHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWluLXdpZHRoOiAxMzRweDtcclxufVxyXG5cclxuLnNlbGVjdC1icmFuY2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtbmFtZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxufVxyXG5cclxubnotc2VsZWN0LXRvcC1jb250cm9sIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuc2VwYXJhdG9yIHtcclxuICAgICAgICB3aWR0aDogMC41cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIH1cclxufVxyXG5cclxubnotYmFkZ2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0dmggIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbW9kYWwgYnJhbmNoXHJcbi5tb2RhbC1icmFuY2gge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAmLWNvbXBsZXRlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmV4cGFuZCB7XHJcbiAgICBmbGV4OiAwIDAgNXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDV2dyAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA1dncgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdC1leHBhbmQge1xyXG4gICAgbWluLXdpZHRoOiAyMHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMjB2dyAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAyMHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tY29sbGFwc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG59XHJcblxyXG4uYW50LXRhYmxlLWJvZHkuc3ViLW56LXNpZGVyIHtcclxuICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyoqIFNZTkMgKi9cclxuXHJcbi5zcGxhc2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjV2dztcclxuICAgIG1hcmdpbi10b3A6IC0yNXZoO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogNjB2dztcclxuICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzB2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjV2aDtcclxuICAgIH1cclxufVxyXG5cclxuaDQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5saTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5saTpmb2N1cyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQsXHJcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkPmEsXHJcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLXNlbGVjdGVkLFxyXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1zZWxlY3RlZD5hIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1zZWxlY3RlZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcclxufVxyXG5cclxuLnRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 66171:
/*!*******************************************************************!*\
  !*** ./src/app/sales/exchange-voucher/exchange-voucher.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeVoucherModule": () => (/* binding */ ExchangeVoucherModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _exchange_voucher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-voucher.component */ 95919);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lottie */ 96627);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 36747);
/* harmony import */ var src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/sale-desktop/components/components.module */ 50682);
/* harmony import */ var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-information/account-information.component */ 77669);
/* harmony import */ var _config_print_config_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-print/config-print.component */ 77996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);















const routes = [
    {
        path: '',
        component: _exchange_voucher_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeVoucherComponent,
    }
];
class ExchangeVoucherModule {
}
ExchangeVoucherModule.ɵfac = function ExchangeVoucherModule_Factory(t) { return new (t || ExchangeVoucherModule)(); };
ExchangeVoucherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ExchangeVoucherModule });
ExchangeVoucherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_2__.LottieModule.forRoot({ player: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.playerFactory }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ExchangeVoucherModule, { declarations: [_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeVoucherComponent, _config_print_config_print_component__WEBPACK_IMPORTED_MODULE_6__.ConfigPrintComponent, _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_5__.AccountInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_2__.LottieModule] }); })();


/***/ }),

/***/ 29021:
/*!***************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ahamoveService/ahamove.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AhamoveService": () => (/* binding */ AhamoveService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);



class AhamoveService {
    constructor(http, vhQuerySales) {
        this.http = http;
        this.vhQuerySales = vhQuerySales;
        this.URL = this.vhQuerySales.getShippingAhamoveURL();
        // api_key = '183a9baa5176ebbaa9c10fe67fc02161d63f6849'; //dev
        this.api_key = 'fc0ee646897ef09f19fd61075337728c61bc9480'; //production
    }
    getTokenAhaMove(phone) {
        const options = {
            params: {
                "url": 'https://api.ahamove.com/v1/partner/register_account',
                "mobile": phone,
                "api_key": this.api_key,
                "name": "Viethas",
                "address": "Khách hàng"
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    getAllServiceAhaMove(city_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/service_types?city_id=${city_id}`,
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    calculateFeeAhamove(data) {
        const options = {
            params: {
                "url": "https://api.ahamove.com/v2/order/estimated_fee",
            }
        };
        const body = {
            "token": data.token,
            "order_time": 0,
            "path": data.path,
            "services": data.services,
            "payment_method": "CASH"
        };
        return this.http.post(this.URL, body, options).toPromise();
    }
    createOrderAhamove(data) {
        let x = `[{"address":"${data.pick_address}","name":"${data.pick_name}","mobile":"${data.pick_tel}"},{"address":"${data.address}","name":"${data.name}","mobile":"${data.phone}","cod":${data.cod},"remarks":"${data.note}"}]`;
        const options = {
            params: {
                "url": "https://api.ahamove.com/v1/order/create",
                "token": data.token,
                "order_time": data.order_time,
                "service_id": data.service_id,
                "payment_method": "CASH",
                "path": x
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    getDetailBillAhamove(token, order_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/detail`,
                "token": token,
                "order_id": order_id
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    cancelOrderAhamove(token, order_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/cancel`,
                "token": token,
                "order_id": order_id,
                "comment": "No comment"
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
}
AhamoveService.ɵfac = function AhamoveService_Factory(t) { return new (t || AhamoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales)); };
AhamoveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AhamoveService, factory: AhamoveService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 586:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ghnService/ghn.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhnService": () => (/* binding */ GhnService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class GhnService {
    constructor(http) {
        this.http = http;
    }
    /**
    * kiểm tra token của giao hàng nhanh có hợp lệ hay không
    * @example : this.transportService.connectTokenGhn(token).then(res =>{
    * @param : tokenName
    * @return :
    **/
    connectTokenGhn(token) {
        let urlGhn = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/all';
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            })
        };
        return this.http.get(urlGhn, options).toPromise();
    }
    /**
    * get các tỉnh trong nước Việt Nam
    * @param token
    * @example this.transportService.getProvinceGhn().then(res =>{})
    * @return
    **/
    getProvinceGhn(token) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/province';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            })
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * get các huyện trong tỉnh của Việt Nam
    * @param token ,province_id
    * @example this.transportService.getDistrictGhn().then(res =>{})
    * @return
    **/
    getDistrictGhn(token, province_id) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/district';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "province_id": province_id ? province_id : 0
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * get các xã trong huyện của Việt Nam
    * @param token ,district_id
    * @example this.transportService.getWardGhn().then(res =>{})
    * @return
    **/
    getWardGhn(token, district_id) {
        let url = `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?${district_id}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "district_id": district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * tính phí vận chuyển
    * @param token,data
    * @example this.transportService.calculate_delivery_fee().then(res =>{})
    * @return
    **/
    calculate_delivery_fee(token, data) {
        let url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee";
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
                "ShopId": data.shop_id.toString()
            }),
            params: {
                "service_id": data.service_id,
                "to_ward_code": data.to_ward_code,
                "from_district_id": data.from_district_id,
                "height": data.height,
                "length": data.length,
                "weight": data.weight,
                "width": data.width,
                "insurance_value": data.insurance_value,
                "to_district_id": data.to_district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * chọn service : đi bộ, bay...
    * @param token,data
    * @example this.transportService.calculate_delivery_fee().then(res =>{})
    * @return result { data : [service_id,short_name,service_type_id]}
    **/
    getServiceDelivery(token, data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "shop_id": data.shop_id,
                "from_district": data.from_district_id,
                "to_district": data.to_district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * tạo đơn giao hàng
    * @param data
    * @example this.transportService.createOrderGhn().then(res =>{})
    * @return
    **/
    createOrderGhn(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Token": data.token,
                "Content-Type": "application/json",
                "ShopId": data.shop_id.toString()
            }),
        };
        let params = {
            "to_name": data.to_name,
            "to_phone": data.to_phone,
            "to_address": data.to_address,
            "to_ward_code": data.to_ward_code,
            "to_district_id": data.to_district_id,
            "weight": data.weight,
            "height": data.height,
            "length": data.length,
            "width": data.width,
            "payment_type_id": data.payment_type_id,
            "required_note": data.required_note,
            "items": data.items,
            "service_id": data.service_id,
            "cod_amount": data.cod_amount,
            "insurance_value": data.insurance_value,
            "note": data.note ? data.note : ''
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    /**
     * Tính (đoán) ngày vận chuyển hàng hoàn thành
    * @param data;
    * @example : this.transportService.calculateTheExpectedDeliveryTime().then(res =>{})
    * @return :
    **/
    calculateTheExpectedDeliveryTime(token, data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/leadtime';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
                "ShopId": data.shop_id.toString()
            }),
        };
        let params = {
            "from_district_id": data.from_district_id,
            "from_ward_code": data.from_ward_code,
            "to_district_id": data.to_district_id,
            "to_ward_code": data.to_ward_code,
            "service_id": data.service_id
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    getInfoOrder(token, order_code) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
        };
        let params = {
            "order_code": order_code
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    cancelOrder(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": data.token,
                "ShopId": data.shop_id.toString(),
            }),
        };
        let params = {
            "order_codes": data.order_code
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    getOtpGhn(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/affiliateOTP';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": "5c8844f1-17f6-11eb-afc8-92a278719a56", //gán cứng token
            }),
        };
        let params = {
            "phone": data.phone
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    addStaffToStore(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/affiliateCreateWithShop';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": "5c8844f1-17f6-11eb-afc8-92a278719a56", //gán cứng token
            }),
        };
        let params = {
            "phone": data.phone,
            "otp": data.otp,
            "shop_id": data.shop_id
        };
        return this.http.post(url, params, opptions).toPromise();
    }
}
GhnService.ɵfac = function GhnService_Factory(t) { return new (t || GhnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
GhnService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GhnService, factory: GhnService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43089:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhtkService": () => (/* binding */ GhtkService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);



class GhtkService {
    constructor(http, vhQuerySales) {
        this.http = http;
        this.vhQuerySales = vhQuerySales;
        this.URL = this.vhQuerySales.getShippingGHTKURL();
    }
    /**
    * kiểm tra token của giao hàng tiết kiệm có hợp lệ hay không và lấy thông tin kho
    * @example : this.transportService.connectTokenGhtk(token).then(res =>{
    * @param : tokenName
    * @return :
    **/
    getWareHouseGhtk(token) {
        // let options:any = {
        //   method: 'GET',
        //   url: 'http://115.78.100.57:8013/miscellaneous/ghtk',                       
        //   params: {
        //     token:token,
        //     url: 'https://services.giaohangtietkiem.vn/services/shipment/list_pick_add'
        //   }            
        // };          
        // return axios.request(options);
        const opptions = {
            params: {
                "token": token,
                "url": 'https://services.giaohangtietkiem.vn/services/shipment/list_pick_add'
            }
        };
        return this.http.get(this.URL, opptions).toPromise();
    }
    /**
    * tính toán phí vận chuyển
    * @example : this.transportService.calculateFeeGhtk(data,transport).then(res =>{
    * @param : data,transport
    * @return :
    **/
    calculateFeeGhtk(data, transport) {
        const opptions = {
            params: {
                "token": data.token,
                "url": "https://services.giaohangtietkiem.vn/services/shipment/fee"
            }
        };
        let params = {
            "pick_address_id": data.shop_id,
            "province": data.province,
            "district": data.district,
            "weight": data.weight * 1000,
            "value": data.insurance_value,
            "transport": transport
        };
        return this.http.post(this.URL, params, opptions).toPromise();
    }
    /**
    * tính toán phí vận chuyển
    * @example : this.transportService.calculateFeeGhtk(data,transport).then(res =>{
    * @param : data,transport
    * @return :
    **/
    createOrderGhtk(token, products, order) {
        const opptions = {
            params: {
                "token": token,
                "url": "https://services.giaohangtietkiem.vn/services/shipment/order/?ver=1.6.3"
            }
        };
        let params = {
            "products": products,
            "order": order
        };
        return this.http.post(this.URL, params, opptions).toPromise();
    }
    getStatusBill(token, order_code) {
        const opptions = {
            params: {
                "token": token,
                "url": `https://services.giaohangtietkiem.vn/services/shipment/v2/${order_code}`
            }
        };
        return this.http.get(this.URL, opptions).toPromise();
    }
    cancelOrder(token, order_code) {
        const opptions = {
            params: {
                "token": token,
                "url": `https://services.giaohangtietkiem.vn/services/shipment/cancel/${order_code}`
            }
        };
        let params = {};
        return this.http.post(this.URL, params, opptions).toPromise();
    }
}
GhtkService.ɵfac = function GhtkService_Factory(t) { return new (t || GhtkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales)); };
GhtkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GhtkService, factory: GhtkService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96057:
/*!******************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/vnpostPost/vnpost-service.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VnpostService": () => (/* binding */ VnpostService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class VnpostService {
    constructor(http) {
        this.http = http;
        this.URL_TEST = 'https://donhang-uat.vnpost.vn/api/api';
        this.URL_PRODUCT = 'https://donhang.vnpost.vn/api/api';
        this.URL_SERVER = 'https://us-central1-servers-1b3fe.cloudfunctions.net/app/shippingclouds/vietnampost';
        this.TenDangNhap = '0909925354';
        this.MatKhau = '123456';
    }
    getTokenVnpost() {
        let url = `${this.URL_PRODUCT}/MobileAuthentication/GetAccessToken`;
        let json = {
            TenDangNhap: this.TenDangNhap,
            MatKhau: this.MatKhau
        };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': 'none' }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Kiểm tra xem liệu khách hàng đã có mã CRM và đã ủy quyền cho Viethas đẩy đơn hay chưa
     * @param token
     * @param customer_code
     * @returns
     */
    checkCustomerCode(token, customer_code) {
        let url = `${this.URL_PRODUCT}/DoiTac/CheckCustomerCode`;
        let json = { CustomerCode: customer_code };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Lấy danh sách tỉnh / thành phố theo Vnpost
     * @returns
     */
    getProvinceVnpost() {
        let url = `${this.URL_PRODUCT}/TinhThanh/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy danh sách quận/huyện theo Vnpost
     * @returns
     */
    getDistrictVnpost() {
        let url = `${this.URL_PRODUCT}/QuanHuyen/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy danh sách phường/xã theo Vnpost
     * @returns
     */
    getWardVnpost() {
        let url = `${this.URL_PRODUCT}/PhuongXa/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Hàm này lấy danh sách tên các phương thức vận chuyển
     */
    getServiceNameVnpost(token, json) {
        let url = `${this.URL_PRODUCT}/DoiTac/TinhCuocTatCaDichVu`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Tạo order vnpost
     */
    createOrderVnpost(token, json) {
        let url = `${this.URL_PRODUCT}/DoiTac/CreateOrder`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Tạo order vnpost
     */
    getDetailOrderById(token, Id) {
        let url = `${this.URL_PRODUCT}/Order/GetOrder/${Id}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, null, opptions).toPromise();
    }
    /**
     * Delelte order vnpost
     */
    deleteOrderVnpostByID(token, Id) {
        let url = `${this.URL_PRODUCT}/DoiTac/CancelOrder`;
        let json = { OrderId: Id };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    // --------------------------------CÁC HÀM XỬ LÝ DỮ LIỆU-------------------------------------------
    /**
     * Hàm này để custom dữ liệu cho hàm getServiceNameVnpost
     */
    renderFormatService(infoSend, infoRecei, infoProd, infoDeli, CustomerCode) {
        return {
            SenderDistrictId: infoSend.SenderDistrictId, SenderProvinceId: infoSend.SenderProvinceId,
            ReceiverDistrictId: infoRecei.ReceiverDistrictId, ReceiverProvinceId: infoRecei.ReceiverProvinceId,
            Weight: infoProd.WeightEvaluation, Width: infoProd.WidthEvaluation,
            Length: infoProd.LengthEvaluation, Height: infoProd.HeightEvaluation,
            CodAmount: +infoDeli.CodAmountEvaluation, IsReceiverPayFreight: infoDeli.IsReceiverPayFreight,
            OrderAmount: +infoDeli.OrderAmountEvaluation, UseBaoPhat: false, UseHoaDon: false,
            UseNhanTinSmsNguoiNhanTruocPhat: false, UseNhanTinSmsNguoiNhanSauPhat: false,
            CustomerCode: CustomerCode
        };
    }
    /**
     * Hàm này để custom dữ liệu cho hàm createOrderVnpost
     */
    renderFormatCreateOrder(infoSend, infoRecei, infoProd, infoDeli, CustomerCode, bill_code) {
        return {
            SenderDistrictId: infoSend.SenderDistrictId, SenderProvinceId: infoSend.SenderProvinceId,
            SenderTel: infoSend.SenderTel, SenderFullname: infoSend.SenderFullname, SenderAddress: infoSend.SenderAddress,
            SenderWardId: infoSend.SenderWardId, ReceiverTel: infoRecei.ReceiverTel, ReceiverFullname: infoRecei.ReceiverFullname,
            ReceiverAddress: infoRecei.ReceiverAddress, ReceiverWardId: infoRecei.ReceiverWardId,
            ReceiverAddressType: infoDeli.ReceiverAddressType == 0 ? null : infoDeli.ReceiverAddressType, ServiceName: infoDeli.ServiceName, OrderCode: bill_code,
            CustomerNote: infoDeli.CustomerNote, PickupType: 1,
            ReceiverDistrictId: infoRecei.ReceiverDistrictId, ReceiverProvinceId: infoRecei.ReceiverProvinceId,
            WeightEvaluation: infoProd.WeightEvaluation, WidthEvaluation: infoProd.WidthEvaluation,
            LengthEvaluation: infoProd.LengthEvaluation, HeightEvaluation: infoProd.HeightEvaluation,
            CodAmountEvaluation: +infoDeli.CodAmountEvaluation, IsReceiverPayFreight: infoDeli.IsReceiverPayFreight,
            OrderAmountEvaluation: +infoDeli.OrderAmountEvaluation, UseBaoPhat: false, UseHoaDon: false,
            PickupPoscode: "", CustomerCode: CustomerCode,
            UseNhanTinSmsNguoiNhanTruocPhat: false, UseNhanTinSmsNguoiNhanSauPhat: false
        };
    }
    renderFormatPrintOrder(delivery) {
        return {
            created: delivery.CreateTime, customer_fullname: delivery.ReceiverFullname,
            customer_tel: delivery.ReceiverTel, address: delivery.ReceiverFullAddress,
            ship_money: delivery.TotalFreightIncludeVatEvaluation, insurance: 0,
            is_freeship: delivery.IsReceiverPayFreight ? 0 : 1, CodAmountEvaluation: delivery.CodAmountEvaluation
        };
    }
}
VnpostService.ɵfac = function VnpostService_Factory(t) { return new (t || VnpostService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
VnpostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VnpostService, factory: VnpostService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_exchange-voucher_exchange-voucher_module_ts-src_app_sales_menu_manage_delivery_-6bf33b.js.map