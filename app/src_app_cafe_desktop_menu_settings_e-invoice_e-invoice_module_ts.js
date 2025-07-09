"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_settings_e-invoice_e-invoice_module_ts"],{

/***/ 67801:
/*!*****************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/settings/e-invoice/e-invoice.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceComponent": () => (/* binding */ EInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










class EInvoiceComponent {
    constructor(vhAlgorithm, vhQueryCafe, lang) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.lang = lang;
        /** Ký tự động ngay khi gửi hóa đơn lên Cơ quan thuế */
        this.cqt_invoice_auto_sign = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_invoice_auto_sign;
        /** Gửi hóa đơn lên Cơ quan thuế ngay khi thanh toán */
        this.cqt_submit_invoice_immediately = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_immediately;
        /** Hàng khuyến mãi được phép xuất 0đ */
        this.cqt_vat_ecommerce_allow_promotional_items_zero_price = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_allow_promotional_items_zero_price;
        /** Xuất riêng chiết khấu/giảm giá của sản phẩm thành 1 dòng riêng khi gửi CQT */
        this.cqt_vat_ecommerce_separate_discount_line = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_separate_discount_line;
        /** Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT */
        this.cqt_vat_ecommerce_keep_promotional_items_as_sold = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_keep_promotional_items_as_sold;
        /** Mã sản phẩm khi gửi CQT là mã vạch sản phẩm */
        this.cqt_vat_ecommerce_item_code_is_barcode = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_code_is_barcode;
        /** Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm */
        this.cqt_vat_ecommerce_item_price_is_discounted = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_price_is_discounted;
    }
    /**
     * update phân quyền chi nhánh lên DB
     */
    updateShowTypePrice(value) {
        // trường hợp cqt_vat_ecommerce_allow_promotional_items_zero_price = true thì cqt_vat_ecommerce_keep_promotional_items_as_sold = false
        if (value.hasOwnProperty('cqt_vat_ecommerce_allow_promotional_items_zero_price')) {
            if (value.cqt_vat_ecommerce_allow_promotional_items_zero_price === true) {
                this.cqt_vat_ecommerce_keep_promotional_items_as_sold = false;
                value.cqt_vat_ecommerce_keep_promotional_items_as_sold = false;
            }
        }
        // trường hợp cqt_vat_ecommerce_keep_promotional_items_as_sold = true thì cqt_vat_ecommerce_allow_promotional_items_zero_price = false
        if (value.hasOwnProperty('cqt_vat_ecommerce_keep_promotional_items_as_sold')) {
            if (value.cqt_vat_ecommerce_keep_promotional_items_as_sold === true) {
                this.cqt_vat_ecommerce_allow_promotional_items_zero_price = false;
                value.cqt_vat_ecommerce_allow_promotional_items_zero_price = false;
            }
        }
        this.vhQueryCafe.updateAppSettingNameBranch('permission_branch', value).then((bool) => {
        });
    }
}
EInvoiceComponent.ɵfac = function EInvoiceComponent_Factory(t) { return new (t || EInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService)); };
EInvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EInvoiceComponent, selectors: [["app-e-invoice"]], decls: 46, vars: 37, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "no-border"], ["mode", "ios", 3, "ngModel", "click", "ngModelChange"], ["nz-tooltip", "", 3, "nzTooltipTitle"]], template: function EInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_13_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_13_listener($event) { return ctx.cqt_submit_invoice_immediately = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_13_listener($event) { return ctx.updateShowTypePrice({ cqt_submit_invoice_immediately: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_18_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_18_listener($event) { return ctx.cqt_invoice_auto_sign = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_18_listener($event) { return ctx.updateShowTypePrice({ cqt_invoice_auto_sign: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_23_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_23_listener($event) { return ctx.cqt_vat_ecommerce_separate_discount_line = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_23_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_separate_discount_line: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_29_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_29_listener($event) { return ctx.cqt_vat_ecommerce_allow_promotional_items_zero_price = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_29_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_allow_promotional_items_zero_price: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_35_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_35_listener($event) { return ctx.cqt_vat_ecommerce_keep_promotional_items_as_sold = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_35_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_keep_promotional_items_as_sold: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_40_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_40_listener($event) { return ctx.cqt_vat_ecommerce_item_code_is_barcode = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_40_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_item_code_is_barcode: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_45_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_45_listener($event) { return ctx.cqt_vat_ecommerce_item_price_is_discounted = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_45_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_item_price_is_discounted: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 17, "E-Invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 19, "G\u1EEDi h\u00F3a \u0111\u01A1n l\u00EAn C\u01A1 quan thu\u1EBF ngay khi thanh to\u00E1n"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_submit_invoice_immediately);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 21, "K\u00FD t\u1EF1 \u0111\u1ED9ng ngay khi g\u1EEDi h\u00F3a \u0111\u01A1n l\u00EAn C\u01A1 quan thu\u1EBF"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_invoice_auto_sign);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 23, "Xu\u1EA5t ri\u00EAng chi\u1EBFt kh\u1EA5u/gi\u1EA3m gi\u00E1 c\u1EE7a s\u1EA3n ph\u1EA9m th\u00E0nh 1 d\u00F2ng ri\u00EAng khi g\u1EEDi CQT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_separate_discount_line);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 25, "Khi b\u1EADt c\u1EA5u h\u00ECnh n\u00E0y th\u00EC c\u1EA5u h\u00ECnh V\u1EABn gi\u1EEF h\u00E0ng xu\u1EA5t b\u00E1n cho s\u1EA3n ph\u1EA9m t\u1EB7ng/khuy\u1EBFn m\u00E3i khi g\u1EEDi CQT s\u1EBD t\u1EF1 \u0111\u1ED9ng t\u1EAFt. B\u1EA1n ch\u1EC9 c\u00F3 th\u1EC3 ch\u1ECDn 1 trong 2."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 27, "H\u00E0ng khuy\u1EBFn m\u00E3i \u0111\u01B0\u1EE3c ph\u00E9p xu\u1EA5t 0\u0111"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_allow_promotional_items_zero_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 29, "Khi b\u1EADt c\u1EA5u h\u00ECnh n\u00E0y th\u00EC c\u1EA5u h\u00ECnh H\u00E0ng khuy\u1EBFn m\u00E3i \u0111\u01B0\u1EE3c ph\u00E9p xu\u1EA5t 0\u0111 s\u1EBD t\u1EF1 \u0111\u1ED9ng t\u1EAFt. B\u1EA1n ch\u1EC9 c\u00F3 th\u1EC3 ch\u1ECDn 1 trong 2."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 31, "V\u1EABn gi\u1EEF h\u00E0ng xu\u1EA5t b\u00E1n cho s\u1EA3n ph\u1EA9m t\u1EB7ng/khuy\u1EBFn m\u00E3i khi g\u1EEDi CQT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_keep_promotional_items_as_sold);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 33, "M\u00E3 s\u1EA3n ph\u1EA9m khi g\u1EEDi CQT l\u00E0 m\u00E3 v\u1EA1ch s\u1EA3n ph\u1EA9m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_item_code_is_barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 35, "Gi\u00E1 h\u00E0ng h\u00F3a, d\u1ECBch v\u1EE5... g\u1EEDi CQT l\u00E0 gi\u00E1 b\u00E1n \u0111\u00E3 gi\u1EA3m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_item_price_is_discounted);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__.NzListItemComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_6__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.row-back[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtaW52b2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRVE7RUFDSSxhQUFBO0FBQVo7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDSSxlQUFBO0FBQVIiLCJmaWxlIjoiZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJvdy1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 7553:
/*!**************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/settings/e-invoice/e-invoice.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceModule": () => (/* binding */ EInvoiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _e_invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-invoice.component */ 67801);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _e_invoice_component__WEBPACK_IMPORTED_MODULE_0__.EInvoiceComponent
            },
        ]
    }
];
class EInvoiceModule {
}
EInvoiceModule.ɵfac = function EInvoiceModule_Factory(t) { return new (t || EInvoiceModule)(); };
EInvoiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EInvoiceModule });
EInvoiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EInvoiceModule, { declarations: [_e_invoice_component__WEBPACK_IMPORTED_MODULE_0__.EInvoiceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_settings_e-invoice_e-invoice_module_ts.js.map