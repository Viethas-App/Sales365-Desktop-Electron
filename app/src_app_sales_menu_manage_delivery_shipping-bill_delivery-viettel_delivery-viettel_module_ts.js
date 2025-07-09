"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_delivery_shipping-bill_delivery-viettel_delivery-viettel_module_ts"],{

/***/ 64638:
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-viettel/create-bill-customer-viettel/create-bill-customer-viettel.component.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillCustomerViettelComponent": () => (/* binding */ CreateBillCustomerViettelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/viettelService/viettel.service */ 13222);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _carrier_partner_components_viettel_component_list_address_viettel_list_address_viettel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../carrier-partner/components/viettel-component/list-address-viettel/list-address-viettel.component */ 11721);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



























function CreateBillCustomerViettelComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillCustomerViettelComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r24.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r24.hasError("required"));
} }
function CreateBillCustomerViettelComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r27.hasError("required"));
} }
function CreateBillCustomerViettelComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate4"](" ", ctx_r4.data_delivery_recei.RECEIVER_ADDRESS, ", ", ctx_r4.data_delivery_recei.WARDS_NAME, ", ", ctx_r4.data_delivery_recei.DISTRICT_NAME, " , ", ctx_r4.data_delivery_recei.PROVINCE_NAME, " ");
} }
function CreateBillCustomerViettelComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function CreateBillCustomerViettelComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r29.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r29.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.vhAlgorithm.vhcurrencyunit(item_r29.price * item_r29.quantity), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_86_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_86_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Weight must be greater than 0"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_86_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillCustomerViettelComponent_ng_template_86_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r30.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r30.hasError("min"));
} }
function CreateBillCustomerViettelComponent_ng_template_99_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_99_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r33.hasError("required"));
} }
function CreateBillCustomerViettelComponent_ng_template_112_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_112_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r35.hasError("required"));
} }
function CreateBillCustomerViettelComponent_ng_template_125_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_125_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r37.hasError("required"));
} }
function CreateBillCustomerViettelComponent_ng_template_144_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_144_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r39.hasError("required"));
} }
function CreateBillCustomerViettelComponent_ng_template_158_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillCustomerViettelComponent_ng_template_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerViettelComponent_ng_template_158_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r41.hasError("required"));
} }
function CreateBillCustomerViettelComponent_label_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", item_r43.MA_DV_CHINH);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r43.TEN_DICHVU);
} }
const _c0 = function () { return { standalone: true }; };
function CreateBillCustomerViettelComponent_label_182_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerViettelComponent_label_182_Template_label_ngModelChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const item_r44 = restoredCtx.$implicit; return item_r44.checked = $event; })("ngModelChange", function CreateBillCustomerViettelComponent_label_182_Template_label_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r47.getPriceSpecially(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", item_r44.checked)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r44.SERVICE_NAME);
} }
function CreateBillCustomerViettelComponent_app_list_address_viettel_212_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-list-address-viettel", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cancelListViettel", function CreateBillCustomerViettelComponent_app_list_address_viettel_212_Template_app_list_address_viettel_cancelListViettel_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r48.cancelListViettel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id_delivery", ctx_r23.dataRestore.data_delivery._id)("pickupAdresssViettel", ctx_r23.pickupAdresssViettel)("customer", ctx_r23.dataRestore.billInfo.id_customer);
} }
const _c1 = function (a0) { return { y: a0 }; };
class CreateBillCustomerViettelComponent {
    constructor(router, vhComponent, vhQuerySales, lang, vhAlgorithm, viettelPost, cdRef, modalService, datePipe) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.viettelPost = viettelPost;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.billDetails = [];
        this.serviceSelected = {};
        this.data_delivery_recei = {};
        this.listProvinceViettel = [];
        this.listDistrictViettel = [];
        this.listWardViettel = [];
        this.listServiceViettel = [];
        this.listServiceAddViettel = [];
        this.isLoading = false;
        this.dataAddress = { SENDER_FULLNAME: '', SENDER_ADDRESS: '', SENDER_PHONE: '', SENDER_WARD: '', SENDER_DISTRICT: '', SENDER_PROVINCE: '', WARDS_NAME: '', DISTRICT_NAME: '', PROVINCE_NAME: '' };
        this.heightScroll = '100px';
        this.checkPrinter = false;
        // ----------modal list address pickup---------
        this.pickupAdresssViettel = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        let customer = this.vhQuerySales.getlocalCustomer(this.dataRestore.billInfo.id_customer);
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            RECEIVER_FULLNAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(customer.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]),
            RECEIVER_PHONE: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(customer.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]),
            RECEIVER_ADDRESS: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            RECEIVER_PROVINCE: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            RECEIVER_DISTRICT: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            RECEIVER_WARD: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            ORDER_PAYMENT: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('2', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            ORDER_SERVICE: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            ORDER_SERVICE_ADD: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            PRODUCT_PRICE: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(0),
            MONEY_COLLECTION: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(0),
            ORDER_NOTE: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            PRODUCT_WEIGHT: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0.0000000000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(99999999999)]),
            PRODUCT_LENGTH: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(999999999)]),
            PRODUCT_WIDTH: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(999999999)]),
            PRODUCT_HEIGHT: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(999999999)]),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.MONEY_COLLECTION = this.vhAlgorithm.vhnumeral('.MONEY_COLLECTION');
            this.PRODUCT_PRICE = this.vhAlgorithm.vhnumeral('.PRODUCT_PRICE');
        });
    }
    ngAfterViewChecked() {
        if (document.querySelector('productInfo'))
            this.heightScroll = document.querySelector('productInfo').clientHeight - 156 + 'px';
        this.cdRef.detectChanges();
    }
    //lấy dữ liệu billDetail
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill_details_byId_bill(this.dataRestore.billInfo._id),
                this.viettelPost.getListInventory(this.dataRestore.data_delivery.token),
                this.vhQuerySales.refreshLocalAddresss(),
            ]).
                then(([invoice, stores, address]) => {
                this.vhComponent.hideLoading(0);
                this.billDetails = invoice.map(item => {
                    let name_product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                    return Object.assign(Object.assign({}, item), { name_product: name_product });
                });
                this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.dataRestore.billInfo, this.billDetails, this.vhQuerySales);
                let listAddresssRecei = this.vhQuerySales.getlocalAddresss().filter(item => item.id_delivery == this.dataRestore.data_delivery._id && item.type == 7 && item.id_customer == this.dataRestore.billInfo.id_customer);
                this.data_delivery_recei = listAddresssRecei.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];
                this.data_delivery_recei && this.attatchDataAddressToForm(this.data_delivery_recei);
                if (!stores.error)
                    this.addDataStore(stores.data, this.dataRestore.data_delivery.GROUPADDRESS_ID);
                let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                if (printer)
                    this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
            }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        });
    }
    addDataStore(stores, GROUPADDRESS_ID) {
        let store = stores.find(item => item.groupaddressId == GROUPADDRESS_ID);
        if (store)
            this.dataAddress = Object.assign(Object.assign({}, this.dataAddress), { SENDER_FULLNAME: store.name, SENDER_ADDRESS: store.address, SENDER_PHONE: store.phone, SENDER_WARD: store.wardsId, SENDER_DISTRICT: store.districtId, SENDER_PROVINCE: store.provinceId });
    }
    goBack(success) {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-viettel"], {
            state: { dataRestore: this.dataRestore }
        });
    }
    createOrder(print) {
        this.modalService.confirm({
            nzTitle: this.lang.translate("Do you want to create order ?"),
            nzCancelText: this.lang.translate("Cancel"),
            nzOnOk: () => {
                return new Promise((resolve) => {
                    this.viettelPost.createOrderViettelPost(this.dataRestore.data_delivery.token, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), this.dataAddress), { MONEY_COLLECTION: this.MONEY_COLLECTION.getRawValue(), PRODUCT_PRICE: this.PRODUCT_PRICE.getRawValue() }), this.dataRestore.data_delivery), { DELIVERY_DATE: this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss') }), this.billDetails, this.invoice.getBillCode()).then((res) => {
                        if (!res.error) {
                            this.invoice.setOrderCode(res.data.ORDER_NUMBER);
                            this.invoice.setDeliveryViettelData(Object.assign(Object.assign({ created: new Date().toISOString() }, res.data), { RECEIVER_FULLNAME: this.addInformation.value.RECEIVER_FULLNAME, RECEIVER_PHONE: this.addInformation.value.RECEIVER_PHONE, ORDER_PAYMENT: this.deliveryInfo.value.ORDER_PAYMENT }));
                            this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then((data) => {
                                resolve(true);
                                this.dataRestore.reload = true;
                                this.vhComponent.alertMessageDesktop('success', this.lang.translate('Create order successfully !'));
                                if (print)
                                    this.showPrint(this.invoice.getDeliveryViettelData());
                                else
                                    this.goBack();
                            });
                        }
                        else
                            this.vhComponent.alertMessageDesktop('error', res.message);
                    }).catch(err => this.vhComponent.alertMessageDesktop('error', err.message));
                });
            },
            nzOnCancel: () => { },
        });
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    showPrint(res) {
        this.checkPrint().then((printer) => {
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: Object.assign(Object.assign({}, this.dataRestore.billInfo), { data: this.viettelPost.renderFormatPrintOrder(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.dataAddress), res), this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), { MONEY_COLLECTION: this.deliveryInfo.value.MONEY_COLLECTION })), order_code: res.ORDER_NUMBER }),
                billDetails: this.billDetails,
                data_delivery: Object.assign(Object.assign({}, this.data_delivery), { type: 5 }),
                printer
            }, false, false, "modal-print").then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack(true);
                });
            });
        }, (err) => {
            this.goBack(true);
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            default: return src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryA45Component;
        }
    }
    customDataBillInfo(res) {
    }
    //------------------------------------Xã huyện tỉnh------------------------------------
    getAllService() {
        if (this.addInformation.valid && this.productInfo.valid) {
            this.viettelPost.getServiceViettel(this.dataRestore.data_delivery.token, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), this.dataAddress), { MONEY_COLLECTION: this.MONEY_COLLECTION.getRawValue(), PRODUCT_PRICE: this.PRODUCT_PRICE.getRawValue() })).then((result) => {
                if (result.length)
                    this.listServiceViettel = result;
                else
                    this.vhComponent.alertMessageDesktop('error', result.message);
                this.getPriceOfServiceSelected();
            });
        }
    }
    changeService(event) {
        this.serviceSelected = {};
        this.listServiceAddViettel = this.listServiceViettel.find(item => item.MA_DV_CHINH == event).EXTRA_SERVICE;
        this.getPriceOfServiceSelected();
    }
    getPriceSpecially() {
        let ORDER_SERVICE_ADD = '';
        this.listServiceAddViettel.forEach(item => {
            if (item.checked)
                ORDER_SERVICE_ADD += `${item.SERVICE_CODE},`;
        });
        ORDER_SERVICE_ADD = ORDER_SERVICE_ADD.slice(0, ORDER_SERVICE_ADD.lastIndexOf(','));
        this.deliveryInfo.controls.ORDER_SERVICE_ADD.setValue(ORDER_SERVICE_ADD);
        this.getPriceOfServiceSelected();
    }
    getPriceOfServiceSelected() {
        if (this.addInformation.valid && this.productInfo.valid && this.deliveryInfo.value.ORDER_SERVICE) {
            this.viettelPost.getPriceSpeciallyViettel(this.dataRestore.data_delivery.token, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), this.dataAddress), { MONEY_COLLECTION: this.MONEY_COLLECTION.getRawValue(), PRODUCT_PRICE: this.PRODUCT_PRICE.getRawValue() })).then((result) => {
                if (result.error)
                    this.vhComponent.alertMessageDesktop('error', result.message);
                else
                    this.serviceSelected = result.data;
            });
        }
    }
    /**Thay đổi cân nặng */
    changePRODUCT_WEIGHT() {
        if (this.productInfo.value.PRODUCT_WEIGHT)
            this.getAllService();
    }
    //Viết hoa chữ cái đầu của mỗi từ
    uppercaseFirstChar(str) {
        let array = str.toLowerCase().split(' ');
        let newStr = '';
        array.forEach((item) => {
            newStr += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
        });
        return newStr;
    }
    cancelListViettel(event) {
        if (event && event._id) {
            this.data_delivery_recei = event;
            this.listServiceViettel = [];
            this.listServiceAddViettel = [];
            this.deliveryInfo.controls.ORDER_SERVICE.setValue('');
            this.deliveryInfo.controls.ORDER_SERVICE_ADD.setValue('');
            this.attatchDataAddressToForm(event);
        }
        else if (event && !event._id) {
            this.data_delivery_recei = {};
            this.addInformation.controls.RECEIVER_WARD.setValue('');
        }
        this.pickupAdresssViettel = false;
    }
    /**
     * Hàm này để chuyển đưa dữ liệu vào form nếu có
     * @param receive
     */
    attatchDataAddressToForm(receive) {
        this.addInformation.controls.RECEIVER_ADDRESS.setValue(receive.RECEIVER_ADDRESS);
        this.addInformation.controls.RECEIVER_PROVINCE.setValue(receive.RECEIVER_PROVINCE);
        this.addInformation.controls.RECEIVER_DISTRICT.setValue(receive.RECEIVER_DISTRICT);
        this.addInformation.controls.RECEIVER_WARD.setValue(receive.RECEIVER_WARD);
        this.dataAddress.WARDS_NAME = receive.WARDS_NAME;
        this.dataAddress.DISTRICT_NAME = receive.DISTRICT_NAME;
        this.dataAddress.PROVINCE_NAME = receive.PROVINCE_NAME;
        this.getAllService();
    }
}
CreateBillCustomerViettelComponent.ɵfac = function CreateBillCustomerViettelComponent_Factory(t) { return new (t || CreateBillCustomerViettelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_4__.ViettelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe)); };
CreateBillCustomerViettelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateBillCustomerViettelComponent, selectors: [["app-create-bill-customer-viettel"]], decls: 213, vars: 140, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-viettel"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "RECEIVER_FULLNAME", "nz-input", "", "minlength", "6", "required", "", 3, "disabled", "placeholder", "blur"], ["combineTplName", ""], ["formControlName", "RECEIVER_PHONE", "nz-input", "", "required", "", 3, "disabled", "placeholder", "blur"], ["combineTplPhone", ""], ["nz-col", "", "nzSpan", "24", 1, "addInformation-address"], ["nzType", "text", "nz-tooltip", "", "nz-button", "", 3, "nzTooltipTitle", "click"], ["name", "create-outline"], ["class", "addInformation-address", "nz-col", "", "nzSpan", "24", 4, "ngIf", "ngIfElse"], ["no_address", ""], [1, "productInfo", "ant-table-body"], [1, "productInfo-title"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-table"], ["nz-col", "", "nzSpan", "24"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["nzWidth", "50%", 2, "text-align", "left"], [2, "text-align", "center"], [2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-form"], [2, "width", "100%", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["nz-col", "", "nzSpan", "6"], ["nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 1, "icon-explain", 3, "nzTooltipTitle"], ["formControlName", "PRODUCT_WEIGHT", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWeight", ""], ["formControlName", "PRODUCT_LENGTH", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplLength", ""], ["formControlName", "PRODUCT_WIDTH", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWidth", ""], ["formControlName", "PRODUCT_HEIGHT", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", "ant-table-body", 3, "formGroup"], ["type", "text", "maxlength", "11", "formControlName", "MONEY_COLLECTION", "nz-input", "", "required", "", 1, "MONEY_COLLECTION", 3, "blur"], ["combineTplCod", ""], ["type", "text", "maxlength", "15", "formControlName", "PRODUCT_PRICE", "nz-input", "", "required", "", 1, "PRODUCT_PRICE", 3, "placeholder"], ["combineTplOrder", ""], [2, "display", "block"], ["formControlName", "ORDER_PAYMENT"], ["nz-radio", "", "nzValue", "2"], ["nz-radio", "", "nzValue", "3"], ["nz-col", "", "nzSpan", "24", 1, "deliveryInfo-service"], [3, "click"], ["formControlName", "ORDER_SERVICE", 3, "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["class", "extra", "nz-checkbox", "", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], ["clas", "", "formControlName", "ORDER_NOTE", "rows", "2", "nz-input", "", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "id_delivery", "pickupAdresssViettel", "customer", "cancelListViettel", 4, "ngIf"], [4, "ngIf"], [1, "current-address-choose"], [2, "margin-left", "12px"], [1, "choose-product"], [2, "text-align", "left"], ["nz-radio", "", 3, "nzValue"], ["nz-checkbox", "", 1, "extra", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "id_delivery", "pickupAdresssViettel", "customer", "cancelListViettel"]], template: function CreateBillCustomerViettelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerViettelComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerViettelComponent_Template_input_blur_20_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CreateBillCustomerViettelComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerViettelComponent_Template_input_blur_32_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CreateBillCustomerViettelComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerViettelComponent_Template_button_click_41_listener() { return ctx.pickupAdresssViettel = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, CreateBillCustomerViettelComponent_div_44_Template, 4, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, CreateBillCustomerViettelComponent_ng_template_45_Template, 3, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, CreateBillCustomerViettelComponent_tr_71_Template, 7, 3, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerViettelComponent_Template_input_blur_85_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, CreateBillCustomerViettelComponent_ng_template_86_Template, 2, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerViettelComponent_Template_input_blur_98_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, CreateBillCustomerViettelComponent_ng_template_99_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerViettelComponent_Template_input_blur_111_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, CreateBillCustomerViettelComponent_ng_template_112_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerViettelComponent_Template_input_blur_124_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](125, CreateBillCustomerViettelComponent_ng_template_125_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](138, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](139, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerViettelComponent_Template_input_blur_143_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](144, CreateBillCustomerViettelComponent_ng_template_144_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](151, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](156, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](158, CreateBillCustomerViettelComponent_ng_template_158_Template, 1, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "b", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "nz-radio-group", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](167, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerViettelComponent_Template_div_click_172_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "nz-radio-group", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerViettelComponent_Template_nz_radio_group_ngModelChange_176_listener($event) { return ctx.changeService($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](177, CreateBillCustomerViettelComponent_label_177_Template, 2, 2, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](181, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](182, CreateBillCustomerViettelComponent_label_182_Template, 2, 4, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](183, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](185, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](190, "textarea", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](191, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](196, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](199, "td", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](201, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "td", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerViettelComponent_Template_button_click_206_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](208, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerViettelComponent_Template_button_click_209_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](211, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](212, CreateBillCustomerViettelComponent_app_list_address_viettel_212_Template, 1, 3, "app-list-address-viettel", 63);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](46);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](87);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](100);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](113);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](126);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](145);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 64, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 66, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 68, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 70, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 72, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 74, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 76, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](42, 78, (ctx.data_delivery_recei == null ? null : ctx.data_delivery_recei.RECEIVER_WARD) ? "Edit Address" : "Create Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data_delivery_recei == null ? null : ctx.data_delivery_recei.RECEIVER_WARD)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](50, 80, "Products information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 82, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](138, _c1, ctx.heightScroll))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 84, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](65, 86, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](69, 88, "Amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](80, 90, "Weight"), " (gram)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", "1 -> 99.999.999.999 (gram)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](92, 92, "Length"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](94, 94, "Maximum") + " 999.999.999cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](105, 96, "Width"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](107, 98, "Maximum") + " 999.999.999cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](118, 100, "Height"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](120, 102, "Maximum") + " 999.999.999cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](131, 104, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](137, 106, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](139, 108, "Maximum") + " 100.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](150, 110, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](152, 112, "Maximum") + " 100.000.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](157, 114, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](163, 116, "Fee payer"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](167, 118, "Receiver"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](170, 120, "Sender"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](175, 122, "Service"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listServiceViettel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](181, 124, "Extra service"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listServiceAddViettel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](185, 126, "Note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](191, 128, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](196, 130, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](201, 132, "Total freight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.serviceSelected.MONEY_TOTAL || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](208, 134, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](211, 136, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pickupAdresssViettel);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__.NzButtonComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_22__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_22__.NzRadioComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_24__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _carrier_partner_components_viettel_component_list_address_viettel_list_address_viettel_component__WEBPACK_IMPORTED_MODULE_5__.ListAddressViettelComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 72% 18% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-service[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100% !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo-title[_ngcontent-%COMP%] {\n  height: 20px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo-table[_ngcontent-%COMP%] {\n  height: calc(100% - 100px) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo-form[_ngcontent-%COMP%] {\n  height: 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .icon-explain[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLWN1c3RvbWVyLXZpZXR0ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxXQUFBO0FBR1I7QUFESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFHUjtBQUZROzs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlaO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFJWjtBQUhZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUtoQjtBQUhZO0VBQ0ksY0FBQTtBQUtoQjtBQUZnQjtFQUNJLGdCQUFBO0FBSXBCO0FBSG9CO0VBQ0ksaUJBQUE7QUFLeEI7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBRVo7QUFEWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUdoQjtBQUZnQjs7O0VBR0ksZ0JBQUE7QUFJcEI7QUFEWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUdoQjtBQURvQjtFQUNJLFdBQUE7QUFHeEI7QUFFZ0I7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFwQjtBQUdZO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQURoQjtBQUVnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUFwQjtBQUVnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQXBCO0FBSVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFGWjtBQUdZO0VBQ0ksWUFBQTtBQURoQjtBQUdZO0VBQ0kscUNBQUE7QUFEaEI7QUFHWTtFQUNJLFlBQUE7QUFEaEI7QUFJUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QUFGWjtBQUtJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFIUjtBQU1BO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFISjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQUlBO0VBQ0kseUJBQUE7QUFESiIsImZpbGUiOiJjcmVhdGUtYmlsbC1jdXN0b21lci12aWV0dGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGVsaXZlcnktdmlldHRlbCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbixcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0sXHJcbiAgICAgICAgLnByb2R1Y3RJbmZvLFxyXG4gICAgICAgIC50b3RhbERlbGl2ZXJ5LFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTFweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjOGM3Y2M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1hZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnlJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzIlIDE4JSAxMCU7XHJcbiAgICAgICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIG56LWZvcm0taXRlbSxcclxuICAgICAgICAgICAgICAgIG56LXNlbGVjdCxcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgICAgIC5zdWItdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtc2VydmljZSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24tb3JkZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24tZXhwbGFpbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uYW50LWlucHV0LXN1ZmZpeCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 43559:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-viettel/create-bill-retail-viettel/create-bill-retail-viettel.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillRetailViettelComponent": () => (/* binding */ CreateBillRetailViettelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/viettelService/viettel.service */ 13222);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


























function CreateBillRetailViettelComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "At least 2 characters"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailViettelComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r28.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r28.hasError("required"));
} }
function CreateBillRetailViettelComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r31.hasError("required"));
} }
function CreateBillRetailViettelComponent_ng_template_46_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_46_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r33.hasError("required"));
} }
function CreateBillRetailViettelComponent_ng_container_55_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 66);
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r35.PROVINCE_ID)("nzLabel", item_r35.PROVINCE_NAME);
} }
function CreateBillRetailViettelComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailViettelComponent_ng_container_55_nz_option_1_Template, 1, 2, "nz-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function CreateBillRetailViettelComponent_nz_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillRetailViettelComponent_ng_container_64_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 66);
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r38.DISTRICT_ID)("nzLabel", item_r38.DISTRICT_NAME);
} }
function CreateBillRetailViettelComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailViettelComponent_ng_container_64_nz_option_1_Template, 1, 2, "nz-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.isLoading);
} }
function CreateBillRetailViettelComponent_nz_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillRetailViettelComponent_ng_container_73_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 66);
} if (rf & 2) {
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r41.WARDS_ID)("nzLabel", item_r41.WARDS_NAME);
} }
function CreateBillRetailViettelComponent_ng_container_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailViettelComponent_ng_container_73_nz_option_1_Template, 1, 2, "nz-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r10.isLoading);
} }
function CreateBillRetailViettelComponent_nz_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillRetailViettelComponent_tr_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r44.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r44.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r13.vhAlgorithm.vhcurrencyunit(item_r44.price * item_r44.quantity), " ");
} }
function CreateBillRetailViettelComponent_ng_template_114_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_114_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Weight must be greater than 0"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_114_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailViettelComponent_ng_template_114_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r45.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r45.hasError("min"));
} }
function CreateBillRetailViettelComponent_ng_template_127_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_127_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r48.hasError("required"));
} }
function CreateBillRetailViettelComponent_ng_template_140_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_140_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r50.hasError("required"));
} }
function CreateBillRetailViettelComponent_ng_template_153_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_153_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r52.hasError("required"));
} }
function CreateBillRetailViettelComponent_ng_template_172_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_172_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r54.hasError("required"));
} }
function CreateBillRetailViettelComponent_ng_template_186_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillRetailViettelComponent_ng_template_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailViettelComponent_ng_template_186_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r56.hasError("required"));
} }
function CreateBillRetailViettelComponent_label_205_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r58.MA_DV_CHINH);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r58.TEN_DICHVU);
} }
const _c0 = function () { return { standalone: true }; };
function CreateBillRetailViettelComponent_label_210_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CreateBillRetailViettelComponent_label_210_Template_label_ngModelChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const item_r59 = restoredCtx.$implicit; return item_r59.checked = $event; })("ngModelChange", function CreateBillRetailViettelComponent_label_210_Template_label_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r62.getPriceSpecially(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", item_r59.checked)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r59.SERVICE_NAME);
} }
const _c1 = function (a0) { return { y: a0 }; };
class CreateBillRetailViettelComponent {
    constructor(router, vhComponent, vhQuerySales, lang, vhAlgorithm, viettelPost, cdRef, modalService, datePipe) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.viettelPost = viettelPost;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.billDetails = [];
        this.serviceSelected = {};
        this.listProvinceViettel = [];
        this.listDistrictViettel = [];
        this.listWardViettel = [];
        this.listServiceViettel = [];
        this.listServiceAddViettel = [];
        this.isLoading = false;
        this.dataAddress = { SENDER_FULLNAME: '', SENDER_ADDRESS: '', SENDER_PHONE: '', SENDER_WARD: '', SENDER_DISTRICT: '', SENDER_PROVINCE: '' };
        this.heightScroll = '100px';
        this.checkPrinter = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        var _a, _b;
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            RECEIVER_FULLNAME: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(((_a = this.dataRestore.billInfo) === null || _a === void 0 ? void 0 : _a.retail_name) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]),
            RECEIVER_PHONE: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(((_b = this.dataRestore.billInfo) === null || _b === void 0 ? void 0 : _b.retail_phone) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(12)]),
            RECEIVER_ADDRESS: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            RECEIVER_PROVINCE: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            RECEIVER_DISTRICT: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            RECEIVER_WARD: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            ORDER_PAYMENT: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('2', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            ORDER_SERVICE: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            ORDER_SERVICE_ADD: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            PRODUCT_PRICE: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0),
            MONEY_COLLECTION: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0),
            ORDER_NOTE: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            PRODUCT_WEIGHT: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0.0000000000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(99999999999)]),
            PRODUCT_LENGTH: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(999999999)]),
            PRODUCT_WIDTH: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(999999999)]),
            PRODUCT_HEIGHT: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(999999999)]),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.MONEY_COLLECTION = this.vhAlgorithm.vhnumeral('.MONEY_COLLECTION');
            this.PRODUCT_PRICE = this.vhAlgorithm.vhnumeral('.PRODUCT_PRICE');
        });
    }
    ngAfterViewChecked() {
        if (document.querySelector('productInfo'))
            this.heightScroll = document.querySelector('productInfo').clientHeight - document.querySelector('productInfo-title').clientHeight - document.querySelector('productInfo-form').clientHeight + 'px';
        this.cdRef.detectChanges();
    }
    //lấy dữ liệu billDetail
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill_details_byId_bill(this.dataRestore.billInfo._id),
                this.viettelPost.getListInventory(this.dataRestore.data_delivery.token)
            ]).
                then(([invoice, stores]) => {
                this.vhComponent.hideLoading(0);
                this.billDetails = invoice.map(item => {
                    let name_product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                    return Object.assign(Object.assign({}, item), { name_product: name_product });
                });
                this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.dataRestore.billInfo, this.billDetails, this.vhQuerySales);
                if (!stores.error)
                    this.addDataStore(stores.data, this.dataRestore.data_delivery.GROUPADDRESS_ID);
                let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                if (printer)
                    this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
            }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        });
    }
    addDataStore(stores, GROUPADDRESS_ID) {
        let store = stores.find(item => item.groupaddressId == GROUPADDRESS_ID);
        if (store)
            this.dataAddress = {
                SENDER_FULLNAME: store.name, SENDER_ADDRESS: store.address, SENDER_PHONE: store.phone,
                SENDER_WARD: store.wardsId, SENDER_DISTRICT: store.districtId, SENDER_PROVINCE: store.provinceId
            };
    }
    goBack(success) {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-viettel"], {
            state: { dataRestore: this.dataRestore }
        });
    }
    createOrder(print) {
        this.modalService.confirm({
            nzTitle: this.lang.translate("Do you want to create order ?"),
            nzCancelText: this.lang.translate("Cancel"),
            nzOnOk: () => {
                return new Promise((resolve) => {
                    this.viettelPost.createOrderViettelPost(this.dataRestore.data_delivery.token, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), this.dataAddress), { MONEY_COLLECTION: this.MONEY_COLLECTION.getRawValue(), PRODUCT_PRICE: this.PRODUCT_PRICE.getRawValue() }), this.dataRestore.data_delivery), { DELIVERY_DATE: this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss') }), this.billDetails, this.invoice.getBillCode()).then((res) => {
                        if (!res.error) {
                            this.invoice.setOrderCode(res.data.ORDER_NUMBER);
                            this.invoice.setDeliveryViettelData(Object.assign(Object.assign({ created: new Date().toISOString() }, res.data), { RECEIVER_FULLNAME: this.addInformation.value.RECEIVER_FULLNAME, RECEIVER_PHONE: this.addInformation.value.RECEIVER_PHONE, ORDER_PAYMENT: this.deliveryInfo.value.ORDER_PAYMENT }));
                            this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then((data) => {
                                resolve(true);
                                this.dataRestore.reload = true;
                                this.vhComponent.alertMessageDesktop('success', this.lang.translate('Create order successfully !'));
                                if (print)
                                    this.showPrint(this.invoice.getDeliveryViettelData());
                                else
                                    this.goBack();
                            });
                        }
                        else
                            this.vhComponent.alertMessageDesktop('error', res.message);
                    }).catch(err => this.vhComponent.alertMessageDesktop('error', err.message));
                });
            },
            nzOnCancel: () => { },
        });
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    showPrint(res) {
        this.checkPrint().then((printer) => {
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: Object.assign(Object.assign({}, this.dataRestore.billInfo), { data: this.viettelPost.renderFormatPrintOrder(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, res), this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), this.dataAddress)), order_code: res.ORDER_NUMBER }),
                billDetails: this.billDetails,
                data_delivery: Object.assign(Object.assign({}, this.data_delivery), { type: 5 }),
                printer
            }, false, false, "modal-print").then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack(true);
                });
            });
        }, (err) => {
            this.goBack(true);
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            default: return src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryA45Component;
        }
    }
    customDataBillInfo(res) {
    }
    //------------------------------------Xã huyện tỉnh------------------------------------
    /**Lấy tỉnh thành phố */
    getProvinceViettel() {
        this.isLoading = true;
        this.viettelPost.getProvinceViettel().then((res) => {
            this.isLoading = false;
            if (res.error)
                this.vhComponent.alertMessageDesktop('error', res.message);
            else
                this.listProvinceViettel = res.data;
        });
    }
    /**
     * Sự kiện thay đổi tỉnh => reset huyện xã
     * @param event
     */
    changeProvinceViettel(event) {
        if (event) {
            this.listDistrictViettel = [];
            this.listWardViettel = [];
            this.addInformation.controls.RECEIVER_DISTRICT.setValue('');
            this.addInformation.controls.RECEIVER_WARD.setValue('');
            this.dataAddress.PROVINCE_NAME = this.listProvinceViettel.find(item => item.PROVINCE_ID == event).PROVINCE_NAME;
        }
    }
    /**Lấy quận, huyện */
    getDistrictViettel() {
        this.isLoading = true;
        this.viettelPost.getDistrictViettel(this.addInformation.value.RECEIVER_PROVINCE).then((res) => {
            this.isLoading = false;
            if (res.error)
                this.vhComponent.alertMessageDesktop('error', res.message);
            else
                this.listDistrictViettel = res.data.map(item => {
                    item.DISTRICT_NAME = this.uppercaseFirstChar(item.DISTRICT_NAME);
                    return item;
                });
        });
    }
    /**
    * Sự kiện thay đổi huyện => reset xã
    * @param event
    */
    changeDistrictViettel(event) {
        if (event) {
            this.listWardViettel = [];
            this.addInformation.controls.RECEIVER_WARD.setValue('');
            this.dataAddress.DISTRICT_NAME = this.listDistrictViettel.find(item => item.DISTRICT_ID == event).DISTRICT_NAME;
        }
    }
    /**Lấy phường, xã */
    getWardViettel() {
        this.isLoading = true;
        this.viettelPost.getWardViettel(this.addInformation.value.RECEIVER_DISTRICT).then((res) => {
            this.isLoading = false;
            if (res.error)
                this.vhComponent.alertMessageDesktop('error', res.message);
            else
                this.listWardViettel = res.data.map(item => {
                    item.WARDS_NAME = this.uppercaseFirstChar(item.WARDS_NAME);
                    return item;
                });
        });
    }
    /**
    * Sự kiện thay đổi phường, xã
    * @param event
    */
    changeWardViettel(event) {
        if (event) {
            this.dataAddress.WARDS_NAME = this.listWardViettel.find(item => item.WARDS_ID == event).WARDS_NAME;
            this.listServiceViettel = [];
            this.listServiceAddViettel = [];
            this.deliveryInfo.controls.ORDER_SERVICE.setValue('');
            this.deliveryInfo.controls.ORDER_SERVICE_ADD.setValue('');
        }
        this.getAllService();
    }
    //------------------------------------Xã huyện tỉnh------------------------------------
    getAllService() {
        if (this.addInformation.valid && this.productInfo.valid) {
            this.viettelPost.getServiceViettel(this.dataRestore.data_delivery.token, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), this.dataAddress), { MONEY_COLLECTION: this.MONEY_COLLECTION.getRawValue(), PRODUCT_PRICE: this.PRODUCT_PRICE.getRawValue() })).then((result) => {
                if (result.length)
                    this.listServiceViettel = result;
                else
                    this.vhComponent.alertMessageDesktop('error', result.message);
                this.getPriceOfServiceSelected();
            });
        }
    }
    changeService(event) {
        var _a;
        this.serviceSelected = {};
        this.listServiceAddViettel = (_a = this.listServiceViettel.find(item => item.MA_DV_CHINH == event)) === null || _a === void 0 ? void 0 : _a.EXTRA_SERVICE;
        this.getPriceOfServiceSelected();
    }
    getPriceSpecially() {
        let ORDER_SERVICE_ADD = '';
        this.listServiceAddViettel.forEach(item => {
            if (item.checked)
                ORDER_SERVICE_ADD += `${item.SERVICE_CODE},`;
        });
        ORDER_SERVICE_ADD = ORDER_SERVICE_ADD.slice(0, ORDER_SERVICE_ADD.lastIndexOf(','));
        this.deliveryInfo.controls.ORDER_SERVICE_ADD.setValue(ORDER_SERVICE_ADD);
        this.getPriceOfServiceSelected();
    }
    getPriceOfServiceSelected() {
        if (this.addInformation.valid && this.productInfo.valid && this.deliveryInfo.value.ORDER_SERVICE) {
            this.viettelPost.getPriceSpeciallyViettel(this.dataRestore.data_delivery.token, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.addInformation.value), this.productInfo.value), this.deliveryInfo.value), this.dataAddress), { MONEY_COLLECTION: this.MONEY_COLLECTION.getRawValue(), PRODUCT_PRICE: this.PRODUCT_PRICE.getRawValue() })).then((result) => {
                if (result.error)
                    this.vhComponent.alertMessageDesktop('error', result.message);
                else
                    this.serviceSelected = result.data;
            });
        }
    }
    /**Thay đổi cân nặng */
    changePRODUCT_WEIGHT() {
        if (this.productInfo.value.PRODUCT_WEIGHT)
            this.getAllService();
    }
    //Viết hoa chữ cái đầu của mỗi từ
    uppercaseFirstChar(str) {
        let array = str.toLowerCase().split(' ');
        let newStr = '';
        array.forEach((item) => {
            newStr += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
        });
        return newStr;
    }
}
CreateBillRetailViettelComponent.ɵfac = function CreateBillRetailViettelComponent_Factory(t) { return new (t || CreateBillRetailViettelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_4__.ViettelService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe)); };
CreateBillRetailViettelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateBillRetailViettelComponent, selectors: [["app-create-bill-retail-viettel"]], decls: 237, vars: 162, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-viettel"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "RECEIVER_FULLNAME", "nz-input", "", "minlength", "2", "required", "", 3, "placeholder", "blur"], ["combineTplName", ""], ["formControlName", "RECEIVER_PHONE", "nz-input", "", "required", "", 3, "placeholder", "blur"], ["combineTplPhone", ""], ["formControlName", "RECEIVER_ADDRESS", "nz-input", "", "required", "", 3, "placeholder", "blur"], ["combineTplAddress", ""], ["formControlName", "RECEIVER_PROVINCE", 3, "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], [4, "ngFor", "ngForOf"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], ["formControlName", "RECEIVER_DISTRICT", 3, "nzDisabled", "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], ["formControlName", "RECEIVER_WARD", 3, "nzDisabled", "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], [1, "productInfo", "ant-table-body"], [1, "productInfo-title"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-table"], ["nz-col", "", "nzSpan", "24"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["nzWidth", "50%", 2, "text-align", "left"], [2, "text-align", "center"], [2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-form"], [2, "width", "100%", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["nz-col", "", "nzSpan", "6"], ["nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 1, "icon-explain", 3, "nzTooltipTitle"], ["formControlName", "PRODUCT_WEIGHT", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWeight", ""], ["formControlName", "PRODUCT_LENGTH", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplLength", ""], ["formControlName", "PRODUCT_WIDTH", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWidth", ""], ["formControlName", "PRODUCT_HEIGHT", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", "ant-table-body", 3, "formGroup"], ["type", "text", "maxlength", "11", "formControlName", "MONEY_COLLECTION", "nz-input", "", "required", "", 1, "MONEY_COLLECTION", 3, "blur"], ["combineTplCod", ""], ["type", "text", "maxlength", "15", "formControlName", "PRODUCT_PRICE", "nz-input", "", "required", "", 1, "PRODUCT_PRICE", 3, "placeholder"], ["combineTplOrder", ""], [2, "display", "block"], ["formControlName", "ORDER_PAYMENT"], ["nz-radio", "", "nzValue", "2"], ["nz-radio", "", "nzValue", "3"], ["nz-col", "", "nzSpan", "24", 1, "deliveryInfo-service"], ["formControlName", "ORDER_SERVICE", 3, "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["class", "extra", "nz-checkbox", "", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], ["clas", "", "formControlName", "ORDER_NOTE", "rows", "2", "nz-input", "", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [4, "ngIf"], [3, "nzValue", "nzLabel", 4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"], [1, "choose-product"], [2, "text-align", "left"], ["nz-radio", "", 3, "nzValue"], ["nz-checkbox", "", 1, "extra", 3, "ngModel", "ngModelOptions", "ngModelChange"]], template: function CreateBillRetailViettelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBillRetailViettelComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_20_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CreateBillRetailViettelComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_32_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CreateBillRetailViettelComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_44_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CreateBillRetailViettelComponent_ng_template_46_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "nz-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CreateBillRetailViettelComponent_Template_nz_select_nzFocus_53_listener() { return ctx.getProvinceViettel(); })("ngModelChange", function CreateBillRetailViettelComponent_Template_nz_select_ngModelChange_53_listener($event) { return ctx.changeProvinceViettel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CreateBillRetailViettelComponent_ng_container_55_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, CreateBillRetailViettelComponent_nz_option_56_Template, 4, 3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CreateBillRetailViettelComponent_Template_nz_select_nzFocus_62_listener() { return ctx.getDistrictViettel(); })("ngModelChange", function CreateBillRetailViettelComponent_Template_nz_select_ngModelChange_62_listener($event) { return ctx.changeDistrictViettel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, CreateBillRetailViettelComponent_ng_container_64_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, CreateBillRetailViettelComponent_nz_option_65_Template, 4, 3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CreateBillRetailViettelComponent_Template_nz_select_nzFocus_71_listener() { return ctx.getWardViettel(); })("ngModelChange", function CreateBillRetailViettelComponent_Template_nz_select_ngModelChange_71_listener($event) { return ctx.changeWardViettel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, CreateBillRetailViettelComponent_ng_container_73_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, CreateBillRetailViettelComponent_nz_option_74_Template, 4, 3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "nz-table", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, CreateBillRetailViettelComponent_tr_99_Template, 7, 3, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_113_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](114, CreateBillRetailViettelComponent_ng_template_114_Template, 2, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](121, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_126_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, CreateBillRetailViettelComponent_ng_template_127_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_139_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](140, CreateBillRetailViettelComponent_ng_template_140_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](147, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_152_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](153, CreateBillRetailViettelComponent_ng_template_153_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "form", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](162, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](167, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailViettelComponent_Template_input_blur_171_listener() { return ctx.getAllService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](172, CreateBillRetailViettelComponent_ng_template_172_Template, 1, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](178, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](179, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](184, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](185, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](186, CreateBillRetailViettelComponent_ng_template_186_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "b", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](191, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "nz-radio-group", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](195, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](198, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](201, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](203, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "nz-radio-group", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CreateBillRetailViettelComponent_Template_nz_radio_group_ngModelChange_204_listener($event) { return ctx.changeService($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](205, CreateBillRetailViettelComponent_label_205_Template, 2, 2, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](209, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](210, CreateBillRetailViettelComponent_label_210_Template, 2, 4, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](212, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](215, "textarea", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](216, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](217, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](221, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "td", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](226, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](228, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](229);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBillRetailViettelComponent_Template_button_click_231_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](233, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](234, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBillRetailViettelComponent_Template_button_click_234_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](236, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](47);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](115);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](128);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](141);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](154);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](173);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 76, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 78, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 80, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 82, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 84, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 86, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 88, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 90, "Enter your address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 92, "Province"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 94, "Select province"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listProvinceViettel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 96, "District"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](63, 98, "Select district"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDisabled", !ctx.addInformation.value.RECEIVER_PROVINCE)("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listDistrictViettel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](70, 100, "Ward"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](72, 102, "Select ward"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDisabled", !ctx.addInformation.value.RECEIVER_DISTRICT)("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listWardViettel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 104, "Products information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](83, 106, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](160, _c1, ctx.heightScroll))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 108, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](93, 110, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](97, 112, "Amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](108, 114, "Weight"), " (gram)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", "1 -> 99.999.999.999 (gram)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](120, 116, "Length"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](122, 118, "Maximum") + " 999.999.999cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](133, 120, "Width"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](135, 122, "Maximum") + " 999.999.999cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](146, 124, "Height"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](148, 126, "Maximum") + " 999.999.999cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](159, 128, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](165, 130, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](167, 132, "Maximum") + " 100.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](178, 134, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](180, 136, "Maximum") + " 100.000.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](185, 138, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](191, 140, "Fee payer"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](195, 142, "Receiver"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](198, 144, "Sender"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](203, 146, "Service"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listServiceViettel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](209, 148, "Extra service"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listServiceAddViettel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](216, 150, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](221, 152, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](226, 154, "Total freight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.serviceSelected.MONEY_TOTAL || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](233, 156, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](236, 158, "Create bill"), "");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__.NzRadioComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzOptionComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 72% 18% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-service[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100% !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo-title[_ngcontent-%COMP%] {\n  height: 20px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo-table[_ngcontent-%COMP%] {\n  height: calc(100% - 100px) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .productInfo-form[_ngcontent-%COMP%] {\n  height: 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   .icon-explain[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLXJldGFpbC12aWV0dGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksV0FBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBR1I7QUFGUTs7Ozs7RUFLSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBSVo7QUFIWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFLaEI7QUFIWTtFQUNJLGNBQUE7QUFLaEI7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBSVo7QUFIWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUtoQjtBQUpnQjs7O0VBR0ksZ0JBQUE7QUFNcEI7QUFIWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUtoQjtBQUhvQjtFQUNJLFdBQUE7QUFLeEI7QUFBZ0I7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUVwQjtBQUNZO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNoQjtBQUFnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUVwQjtBQUFnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBRXBCO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFBWjtBQUNZO0VBQ0ksWUFBQTtBQUNoQjtBQUNZO0VBQ0kscUNBQUE7QUFDaEI7QUFDWTtFQUNJLFlBQUE7QUFDaEI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QUFBWjtBQUdJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUlBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtYmlsbC1yZXRhaWwtdmlldHRlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRlbGl2ZXJ5LXZpZXR0ZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgICAuYWRkSW5mb3JtYXRpb24sXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby1mb3JtLFxyXG4gICAgICAgIC5wcm9kdWN0SW5mbyxcclxuICAgICAgICAudG90YWxEZWxpdmVyeSxcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLXRvdGFsRGVsaXZlcnkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkSW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDExcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYzhjN2NjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MiUgMTglIDEwJTtcclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbnotZm9ybS1pdGVtLFxyXG4gICAgICAgICAgICAgICAgbnotc2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAgICAgLnN1Yi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1zZXJ2aWNlIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWJ1dHRvbi1vcmRlciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMy80O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdEluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbi1leHBsYWluIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hbnQtaW5wdXQtc3VmZml4IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjOGM3Y2MgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 15470:
/*!*********************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-viettel/delivery-viettel.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryViettelComponent": () => (/* binding */ DeliveryViettelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/viettelService/viettel.service */ 13222);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function DeliveryViettelComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 23);
} }
function DeliveryViettelComponent_tr_62_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "cancelled"), ")");
} }
function DeliveryViettelComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryViettelComponent_tr_62_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return item_r4.order_code ? ctx_r6.gotoBillDetail(item_r4) : ctx_r6.gotoCreateOrder(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DeliveryViettelComponent_tr_62_span_13_Template, 4, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 6, item_r4.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.delivery_viettel_data ? item_r4.delivery_viettel_data.ORDER_NUMBER : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 9, item_r4.customer_name ? item_r4.customer_name : "Customer retail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r4.delivery_viettel_data ? ctx_r3.vhAlgorithm.vhcurrencyunit(item_r4.delivery_viettel_data.MONEY_COLLECTION) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.delivery_viettel_data == null ? null : item_r4.delivery_viettel_data.deleted);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class DeliveryViettelComponent {
    constructor(lang, router, vhComponent, vhAlgorithm, viettelPost, vhQuerySales, vhQuery, cdRef, vhAuth) {
        var _a;
        this.lang = lang;
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.viettelPost = viettelPost;
        this.vhQuerySales = vhQuerySales;
        this.vhQuery = vhQuery;
        this.cdRef = cdRef;
        this.vhAuth = vhAuth;
        this.bills = [];
        this.show_bills = [];
        //Hôm nay 0h- 23h59
        this.date = [new Date(), new Date()];
        this.dataRestore = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.dataRestore;
        //biến cờ show
        this.status_open = false;
        this.search = '';
        this.disabledDate = (current) => {
            if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000)
                return true;
            return false;
        };
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
    }
    ngOnInit() {
        if (this.dataRestore) {
            this.search = this.dataRestore.dataRestore.search;
            this.date = [new Date(this.dataRestore.dataRestore.date[0]), new Date(this.dataRestore.dataRestore.date[1])];
            this.bills = this.dataRestore.dataRestore.bills;
            this.show_bills = [...this.dataRestore.dataRestore.bills];
            this.data_delivery = this.dataRestore.data_delivery;
            if (this.dataRestore.reload)
                this.getInvoices();
        }
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill"]);
    }
    /**
      * Hàm lấy bill trong khoăng thời gian được set
      */
    getInvoices() {
        this.bills = [];
        this.status_open = false;
        this.data_delivery = this.vhQuerySales.getlocalDeliverys().filter(item => item.active && item.type == 5)[0];
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQuerySales.getBills_byFields({ date: { $gte: new Date(this.date[0].setHours(0, 0, 0)), $lte: new Date(this.date[1].setHours(23, 59, 59, 59)) }, bill_type: { $eq: 1 }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {}).then((result) => {
                result.forEach(item => {
                    if (item.id_delivery == this.data_delivery._id)
                        this.bills.unshift(Object.assign(Object.assign({}, item), { customer_name: this.vhQuerySales.getlocalCustomer(item.id_customer).name }));
                });
                this.show_bills = [...this.bills];
                this.vhComponent.hideLoading(0);
            }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        });
    }
    changeTime(event) {
        if (event[1].getTime() - event[0].getTime() <= 2678400000) {
        }
        else {
            this.vhComponent.showToast(2000, this.lang.translate("The time to view no more than 30 days"), "alert-toast");
            this.date = [new Date(event[0]), new Date(event[0].getTime() + 2678313600)];
        }
    }
    //searchbill
    searchBill(value) {
        this.show_bills = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value).toLowerCase(), this.bills, ["bill_code", "order_code"]);
    }
    gotoCreateOrder(bill) {
        let state = { billInfo: bill, data_delivery: this.data_delivery, dataRestore: { search: this.search, date: this.date, bills: this.bills } };
        this.router.navigate([`/sales/dashboard/manage/delivery/shipping-bill/delivery-viettel/create-order-${bill.id_customer != "id_retail" ? 'customer' : 'retail'}`], { state: state });
    }
    gotoBillDetail(bill) {
        let state = { billInfo: bill, data_delivery: this.data_delivery, dataRestore: { search: this.search, date: this.date, bills: this.bills } };
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-viettel/detail-bill"], { state: state });
    }
    /**
    * filter các trạng thái của bill
    * */
    // filterStatus(value) {
    //   this.searchBill(this.search)
    //   if (value != 0) this.show_bills = [...this.show_bills].filter(item => item.delivery && item.delivery.OrderStatusId == this.getStatusOfOrder(value))
    //   // this.searchBill(this.search)
    // }
    onCurrentPageDataChange(event) { }
    ngAfterViewChecked() {
        if (document.getElementById("delivery-viettel") && document.querySelector(".delivery-viettel-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.getElementById("delivery-viettel").clientHeight - document.querySelector(".delivery-viettel-header").clientHeight -
                document.querySelector(".ant-table-pagination").clientHeight - 135 + "px";
        }
        this.cdRef.detectChanges();
    }
}
DeliveryViettelComponent.ɵfac = function DeliveryViettelComponent_Factory(t) { return new (t || DeliveryViettelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_2__.ViettelService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth)); };
DeliveryViettelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeliveryViettelComponent, selectors: [["app-delivery-viettel"]], decls: 63, vars: 52, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "delivery-viettel"], ["nzGutter", "16", "nz-row", "", 1, "delivery-viettel", "delivery-viettel-header"], ["nz-col", "", "nzSpan", "4"], [1, "title", "nz-no-margin"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [1, "nz-hover-border", 3, "nzSuffix"], ["type", "text", "nz-input", "", 1, "medium-size", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "date-picker-cus"], ["nzFormat", "dd/MM/yyyy", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content", "button-group"], ["nz-button", "", "nzType", "default", 1, "btn-green", "center-all-content", "ml-3", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "table-delivery-viettel"], [1, "medium-size"], [2, "color", "red"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult", "nzCurrentPageDataChange"], ["tableDelvieryviettel", ""], ["nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 1, "icon-explain", 3, "nzTooltipTitle"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [2, "cursor", "pointer", 3, "click"], ["class", "color-orange", 4, "ngIf"], [1, "color-orange"]], template: function DeliveryViettelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryViettelComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryViettelComponent_Template_input_ngModelChange_12_listener($event) { return ctx.search = $event; })("ngModelChange", function DeliveryViettelComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchBill($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeliveryViettelComponent_ng_template_14_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-range-picker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryViettelComponent_Template_nz_range_picker_ngModelChange_18_listener($event) { return ctx.date = $event; })("ngModelChange", function DeliveryViettelComponent_Template_nz_range_picker_ngModelChange_18_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryViettelComponent_Template_button_click_21_listener() { return ctx.getInvoices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "nz-table", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCurrentPageDataChange", function DeliveryViettelComponent_Template_nz_table_nzCurrentPageDataChange_34_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, DeliveryViettelComponent_tr_62_Template, 14, 11, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 23, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 25, "Viettel Post"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 27, "Search for bill code, order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 29, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 31, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.show_bills.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 33, "shipping bills"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 35, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](49, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c1, ctx.heightScroll))("nzData", ctx.show_bills);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 37, "Time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 39, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 41, "Order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 43, "Customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](58, 45, "COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 47, "COD amount excluding freight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.show_bills);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThMeasureDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzTooltipDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 0;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: initial;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-viettel[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-content[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-explain[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--ion-color-vh-green);\n}\n.color-orange[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-orange);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LXZpZXR0ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUdSO0FBREk7RUFDSSxjQUFBO0FBR1I7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSVo7QUFGUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBSVo7QUFESTtFQUNJLGlCQUFBO0FBR1I7QUFESTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QUFHUjtBQUFBO0VBQ0ksaUNBQUE7QUFHSiIsImZpbGUiOiJkZWxpdmVyeS12aWV0dGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kZWxpdmVyeS12aWV0dGVsIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBuei1pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFudC10YWJsZS1jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgIC5pY29uLWV4cGxhaW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbn1cclxuLmNvbG9yLW9yYW5nZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLW9yYW5nZSk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 19569:
/*!******************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-viettel/delivery-viettel.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryViettelModule": () => (/* binding */ DeliveryViettelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _delivery_viettel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-viettel.component */ 15470);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _carrier_partner_components_viettel_component_viettel_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../carrier-partner/components/viettel-component/viettel.module */ 39474);
/* harmony import */ var _create_bill_customer_viettel_create_bill_customer_viettel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-bill-customer-viettel/create-bill-customer-viettel.component */ 64638);
/* harmony import */ var _create_bill_retail_viettel_create_bill_retail_viettel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-bill-retail-viettel/create-bill-retail-viettel.component */ 43559);
/* harmony import */ var _detail_bill_viettel_detail_bill_viettel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-bill-viettel/detail-bill-viettel.component */ 87123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _delivery_viettel_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryViettelComponent
            },
            {
                path: "create-order-retail",
                component: _create_bill_retail_viettel_create_bill_retail_viettel_component__WEBPACK_IMPORTED_MODULE_4__.CreateBillRetailViettelComponent
            },
            {
                path: "create-order-customer",
                component: _create_bill_customer_viettel_create_bill_customer_viettel_component__WEBPACK_IMPORTED_MODULE_3__.CreateBillCustomerViettelComponent
            },
            {
                path: "detail-bill",
                component: _detail_bill_viettel_detail_bill_viettel_component__WEBPACK_IMPORTED_MODULE_5__.DetailBillViettelComponent
            }
        ]
    }
];
class DeliveryViettelModule {
}
DeliveryViettelModule.ɵfac = function DeliveryViettelModule_Factory(t) { return new (t || DeliveryViettelModule)(); };
DeliveryViettelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DeliveryViettelModule });
DeliveryViettelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _carrier_partner_components_viettel_component_viettel_module__WEBPACK_IMPORTED_MODULE_2__.ViettelModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DeliveryViettelModule, { declarations: [_delivery_viettel_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryViettelComponent, _create_bill_customer_viettel_create_bill_customer_viettel_component__WEBPACK_IMPORTED_MODULE_3__.CreateBillCustomerViettelComponent, _create_bill_retail_viettel_create_bill_retail_viettel_component__WEBPACK_IMPORTED_MODULE_4__.CreateBillRetailViettelComponent, _detail_bill_viettel_detail_bill_viettel_component__WEBPACK_IMPORTED_MODULE_5__.DetailBillViettelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _carrier_partner_components_viettel_component_viettel_module__WEBPACK_IMPORTED_MODULE_2__.ViettelModule] }); })();


/***/ }),

/***/ 87123:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-viettel/detail-bill-viettel/detail-bill-viettel.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBillViettelComponent": () => (/* binding */ DetailBillViettelComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/viettelService/viettel.service */ 13222);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function DetailBillViettelComponent_nz_table_57_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r3.quantity, " ");
} }
const _c0 = function () { return { y: "200px" }; };
function DetailBillViettelComponent_nz_table_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-table", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DetailBillViettelComponent_nz_table_57_tr_14_Template, 5, 2, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 7, "Not data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0))("nzShowPagination", false)("nzData", ctx_r0.invoice.getInvoiceDetail());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 11, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _r1.data);
} }
class DetailBillViettelComponent {
    constructor(lang, router, vhComponent, vhAlgorithm, vhQuerySales, vhAuth, modalService, viettelPost) {
        this.lang = lang;
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
        this.modalService = modalService;
        this.viettelPost = viettelPost;
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.dataAddress = {};
        this.loading = false;
        this.billInfo = this.dataRestore.billInfo;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.vhComponent.showLoading("").then(() => {
            Promise.all([
                this.vhQuerySales.getBill(this.dataRestore.billInfo._id),
                this.vhQuerySales.getBill_details_byId_bill(this.dataRestore.billInfo._id),
                this.viettelPost.getProvinceViettel(),
                this.viettelPost.getDistrictViettel(this.billInfo.delivery_viettel_data.RECEIVER_PROVINCE),
                this.viettelPost.getWardViettel(this.billInfo.delivery_viettel_data.RECEIVER_DISTRICT),
            ]).then((res) => {
                this.vhComponent.hideLoading(0);
                let invoiceDetailFresh = res[1].map(item => {
                    if (item.combos) {
                        let combo = Object.assign(Object.assign(Object.assign({}, item), this.getNameProduct(item.id_product, item.id_subproduct)), { combos: item.combos.map(element => {
                                return Object.assign(Object.assign({}, element), this.getNameProduct(element.id_product, element.id_subproduct));
                            }) });
                        return Object.assign(Object.assign({}, combo), { subComboName: this.getSubCombo(combo.combos) });
                    }
                    else
                        return Object.assign(Object.assign({}, item), this.getNameProduct(item.id_product, item.id_subproduct));
                });
                this.init(res[0], invoiceDetailFresh);
                this.loading = true;
                this.dataAddress.PROVINCE_NAME = res[2].data.find(item => item.PROVINCE_ID == this.billInfo.delivery_viettel_data.RECEIVER_PROVINCE).PROVINCE_NAME;
                this.dataAddress.DISTRICT_NAME = this.uppercaseFirstChar(res[3].data.find(item => item.DISTRICT_ID == this.billInfo.delivery_viettel_data.RECEIVER_DISTRICT).DISTRICT_NAME);
                this.dataAddress.WARDS_NAME = this.uppercaseFirstChar(res[4].data.find(item => item.WARDS_ID == this.billInfo.delivery_viettel_data.RECEIVER_WARDS).WARDS_NAME);
            });
        });
    }
    getNameProduct(id_prod, id_subProd) {
        let product = this.vhQuerySales.getlocalProduct(id_prod);
        let subFood;
        if (id_subProd)
            subFood = product.subs.find(item => item._id == id_subProd);
        return { name: `${product ? product.name : ''} ${subFood ? '(' + subFood.name + ')' : ''}`, unit: product.unit };
    }
    /**Render các thành phần combo */
    getSubCombo(arr) {
        let subName = "";
        arr.forEach(item => {
            if (subName.length)
                subName += `, ${item.quantity} ${item.name}`;
            else
                subName += `${item.quantity} ${item.name}`;
        });
        return subName;
    }
    init(invoice = null, invoiceDetail = null) {
        this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(invoice, invoiceDetail, this.vhQuerySales);
        if (invoice && invoiceDetail) {
            this.invoiceInfo = {
                employee: this.vhAuth.getlocalEmployee(this.invoice.getIdEmployee()),
                partner: this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner()),
            };
            if (this.invoice.getIdDelivery())
                this.invoiceInfo['delivery'] = (this.vhQuerySales.getlocalDelivery(this.invoice.getIdDelivery()).name);
        }
        else
            this.invoiceInfo = { employee: {}, partner: {}, paymentName: '' };
    }
    cancelOrder() {
        if (this.vhAuth.checkMyPermission("shipping_enable_cancel_bill")) {
            this.modalService.confirm({
                nzTitle: this.lang.translate("Do you want to delete shipping bill ?"),
                nzCancelText: this.lang.translate("Cancel"),
                nzOnOk: () => {
                    return new Promise((resolve) => {
                        var _a;
                        let json = this.billInfo.delivery_viettel_data;
                        json.deleted = true;
                        this.invoice.setDeliveryViettelData(json);
                        this.viettelPost.cancelOrderViettel(this.dataRestore.data_delivery.token, (_a = this.billInfo.delivery_viettel_data) === null || _a === void 0 ? void 0 : _a.ORDER_NUMBER).then(res => {
                            this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then(res => {
                                this.vhComponent.alertMessageDesktop('success', this.lang.translate('Delete bill successfully'));
                                this.dataRestore.reload = true;
                                this.goBack();
                                resolve(true);
                            });
                        }).catch(err => this.vhComponent.alertMessageDesktop('error', err));
                    });
                },
                nzOnCancel: () => { },
            });
        }
        else
            this.vhComponent.showToast(1500, this.lang.translate('You do not have this rights'), "alert-toast");
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-viettel"], {
            state: { dataRestore: this.dataRestore }
        });
    }
    /*----------Print------------------*/
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    /** kiểm tra dữ liệu máy in và show component in tương ứng
    * @example this.showPrint()
    */
    showPrint() {
        this.checkPrint().then((printer) => {
            var _a;
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: Object.assign(Object.assign({}, this.dataRestore.billInfo), { data: this.viettelPost.renderFormatPrintOrder(Object.assign(Object.assign(Object.assign({}, this.billInfo.delivery_viettel_data), this.dataAddress), { MONEY_COLLECTION: this.billInfo.delivery_viettel_data.MONEY_COLLECTION.toString() })), order_code: (_a = this.billInfo.delivery_viettel_data) === null || _a === void 0 ? void 0 : _a.ORDER_NUMBER }),
                billDetails: this.invoice.getInvoiceDetail(),
                printer,
                data_delivery: Object.assign(Object.assign({}, this.dataRestore.data_delivery), { type: 5 })
            }, false, false, `modal-print-${printer['type']}`);
        }, (err) => {
            let name = 'Sales';
            this.vhComponent.alertMessage(this.lang.translate("Function"), "", this.lang.translate("Please turn on the printer function"), "OK")
                .then(() => this.router.navigate(['/sales/dashboard/manage/printer', 'page_desktop_sales'], { state: name }));
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            default: return src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryA45Component;
        }
    }
    //Viết hoa chữ cái đầu của mỗi từ
    uppercaseFirstChar(str) {
        let array = str.toLowerCase().split(' ');
        let newStr = '';
        array.forEach((item) => {
            newStr += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
        });
        return newStr;
    }
}
DetailBillViettelComponent.ɵfac = function DetailBillViettelComponent_Factory(t) { return new (t || DetailBillViettelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_viettelService_viettel_service__WEBPACK_IMPORTED_MODULE_4__.ViettelService)); };
DetailBillViettelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DetailBillViettelComponent, selectors: [["app-detail-bill-viettel"]], decls: 101, vars: 80, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "7"], ["nz-col", "", "nzSpan", "17", 1, "addInformation-button"], ["nz-button", "", 1, "nz-hover-border", 3, "click"], ["src", "assets/icon/management/printer.svg", 2, "font-size", "0.9rem", "margin-right", "4px", "margin-bottom", "-2px"], ["nz-button", "", 1, "nz-hover-border", 3, "disabled", "click"], ["name", "trash-outline", 2, "font-size", "0.9rem", "margin-right", "4px", "margin-bottom", "-2px"], ["nz-col", "", "nzSpan", "24", 1, "addInformation-info"], ["target", "_blank", 2, "font-weight", "500", 3, "href"], [1, "productInfo", "ant-table-body"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData", 4, "ngIf"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "5px"], [1, "deliveryInfo", "notReuseInfo"], [1, "deliveryInfo-form", "ant-table-body"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"]], template: function DetailBillViettelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillViettelComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillViettelComponent_Template_button_click_13_listener() { return ctx.showPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillViettelComponent_Template_button_click_17_listener() { return ctx.cancelOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, DetailBillViettelComponent_nz_table_57_Template, 15, 14, "nz-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 38, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 40, "Shipment bill"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 42, "Print shipping bill"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.deleted) == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 44, "Cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 46, "Receiver Information"), " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "https://viettelpost.vn/thong-tin-don-hang?peopleTracking=sender&orderNumber=", ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.ORDER_NUMBER, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 48, "Track order status"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 50, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.bill_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 52, "Order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.ORDER_NUMBER, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 54, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.RECEIVER_FULLNAME, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](46, 56, "Phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.RECEIVER_PHONE, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](51, 58, "Delivery address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](": ", ctx.dataAddress.WARDS_NAME, ", ", ctx.dataAddress.DISTRICT_NAME, ", ", ctx.dataAddress.PROVINCE_NAME, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 60, "Products information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](63, 62, "Weight converted"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.EXCHANGE_WEIGHT, " (gram)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 64, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](73, 66, "COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.MONEY_COLLECTION), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 68, "COD Fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit((ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.MONEY_COLLECTION_FEE) || 0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](83, 70, "VAT Fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit((ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.MONEY_VAT) || 0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](88, 72, "Other fees"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit((ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.MONEY_OTHER_FEE) || 0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](93, 74, "Total freight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit((ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.MONEY_TOTAL) || 0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](98, 76, "Fee payer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](100, 78, (ctx.billInfo.delivery_viettel_data == null ? null : ctx.billInfo.delivery_viettel_data.MONEY_TOTAL) == "3" ? "Sender" : "Receiver"), " ");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 33% 33% 31%;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin: 0 !important;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  margin: 10 0 !important;\n  font-size: 1rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%] {\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  overflow-y: auto !important;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1iaWxsLXZpZXR0ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQWdCQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQVpSO0FBTlE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQVFaO0FBTlE7RUFDSSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUVo7QUFOUTtFQUNJLGlCQUFBO0FBUVo7QUFGUTs7Ozs7RUFLSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBSVo7QUFIWTtFQUNJLGVBQUE7QUFLaEI7QUFKZ0I7RUFDSSxjQUFBO0FBTXBCO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQUlaO0FBSFk7RUFDSSxhQUFBO0FBS2hCO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUlaO0FBRlE7RUFDSSwyQkFBQTtBQUlaO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUdSO0FBQUE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUdKIiwiZmlsZSI6ImRldGFpbC1iaWxsLXZpZXR0ZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLmRlbGl2ZXJ5LWdobiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzElO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uLFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tZm9ybSxcclxuICAgICAgICAucHJvZHVjdEluZm8sXHJcbiAgICAgICAgLnRvdGFsRGVsaXZlcnksXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnlJbmZvLm5vdFJldXNlSW5mbyB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICAgICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0SW5mbyB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tZm9ybSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_delivery_shipping-bill_delivery-viettel_delivery-viettel_module_ts.js.map