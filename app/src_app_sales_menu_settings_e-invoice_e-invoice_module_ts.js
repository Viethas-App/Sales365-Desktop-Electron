"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_settings_e-invoice_e-invoice_module_ts"],{

/***/ 80789:
/*!**********************************************************************!*\
  !*** ./src/app/sales/menu/settings/e-invoice/e-invoice.component.ts ***!
  \**********************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












function EInvoiceComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-input-number", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EInvoiceComponent_div_60_Template_nz_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.cqt_vat_ecommerce_rate = $event; })("nzBlur", function EInvoiceComponent_div_60_Template_nz_input_number_nzBlur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.updateShowTypePrice({ cqt_vat_ecommerce_rate: ctx_r3.cqt_vat_ecommerce_rate }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMin", 0)("nzMax", 100)("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "Enter % VAT"))("ngModel", ctx_r0.cqt_vat_ecommerce_rate);
} }
class EInvoiceComponent {
    constructor(vhAlgorithm, vhQuerySales, lang) {
        var _a;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        /* ---------------------------------------------------------------- LOCAL --------------------------------------------------------------- */
        /** Gửi hóa đơn lên Cơ quan thuế ngay khi thanh toán */
        this.cqt_submit_invoice_immediately = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_immediately;
        /** Ký tự động ngay khi gửi hóa đơn lên Cơ quan thuế */
        this.cqt_invoice_auto_sign = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_invoice_auto_sign;
        /** Xuất riêng chiết khấu/giảm giá của sản phẩm thành 1 dòng riêng khi gửi CQT */
        this.cqt_vat_ecommerce_separate_discount_line = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_separate_discount_line;
        /** Hàng khuyến mãi được phép xuất 0đ */
        this.cqt_vat_ecommerce_allow_promotional_items_zero_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_allow_promotional_items_zero_price;
        /** Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT */
        this.cqt_vat_ecommerce_keep_promotional_items_as_sold = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_keep_promotional_items_as_sold;
        /** Mã sản phẩm khi gửi CQT là mã vạch sản phẩm */
        this.cqt_vat_ecommerce_item_code_is_barcode = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_code_is_barcode;
        /** Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm */
        this.cqt_vat_ecommerce_item_price_is_discounted = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_price_is_discounted;
        /* ----------------------------------------------------------------- SÀN ---------------------------------------------------------------- */
        /** Gửi hóa đơn lên Cơ quan thuế kèm phí vận chuyển */
        this.cqt_submit_invoice_with_shipping_fee = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_with_shipping_fee;
        /** Gửi hóa đơn lên Cơ quan thuế kèm phí giao dịch/phí sàn */
        this.cqt_submit_invoice_with_ecommerce_fee = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_with_ecommerce_fee;
        /** Giá bán hàng hóa, dịch vụ... trên sàn đã bao gồm thuế VAT */
        this.cqt_vat_ecommerce_already_Included = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_already_Included;
        /** % thuế VAT */
        this.cqt_vat_ecommerce_rate = (_a = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_rate) !== null && _a !== void 0 ? _a : 0;
        /** Giá bán hàng hóa, dịch vụ trên sàn đã bao gồm VAT, tính theo VAT hàng hóa, dịch vụ liên kết */
        this.cqt_vat_ecommerce_by_linked_product = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_by_linked_product;
        /** Sử dụng thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn để thiết lập ngày lập hóa đơn */
        this.cqt_vat_ecommerce_use_latest_order_update_time = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_use_latest_order_update_time;
        /** Xuất hóa đơn từ sàn với thông tin người mua kèm theo tên sàn và mã đơn hàng */
        this.cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an;
        /** Xuất hóa đơn từ sàn với thông tin thanh toán mặc định là 'Chuyển khoản' */
        this.cqt_vat_ecommerce_default_payment_method_chuyen_khoan = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_default_payment_method_chuyen_khoan;
    }
    /**
     * update phân quyền chi nhánh lên DB
     */
    updateShowTypePrice(value) {
        // Nếu update cqt_vat_ecommerce_rate mà không có thì set mặc định 0
        if (value.hasOwnProperty('cqt_vat_ecommerce_rate') && !value.cqt_vat_ecommerce_rate) {
            value.cqt_vat_ecommerce_rate = 0;
            this.cqt_vat_ecommerce_rate = 0;
        }
        // trường hợp cqt_vat_ecommerce_by_linked_product = true thì cqt_vat_ecommerce_rate = 0 và cqt_vat_ecommerce_already_Included = false
        if (value.hasOwnProperty('cqt_vat_ecommerce_by_linked_product')) {
            if (value.cqt_vat_ecommerce_by_linked_product === true) {
                this.cqt_vat_ecommerce_rate = 0;
                this.cqt_vat_ecommerce_already_Included = false;
                value.cqt_vat_ecommerce_rate = 0;
                value.cqt_vat_ecommerce_already_Included = false;
            }
            this.cqt_vat_ecommerce_rate = value.cqt_vat_ecommerce_rate;
        }
        // trường hợp cqt_vat_ecommerce_already_Included = true thì cqt_vat_ecommerce_by_linked_product = false
        if (value.hasOwnProperty('cqt_vat_ecommerce_already_Included')) {
            if (value.cqt_vat_ecommerce_already_Included === true) {
                this.cqt_vat_ecommerce_by_linked_product = false;
                value.cqt_vat_ecommerce_by_linked_product = false;
                value.cqt_vat_ecommerce_rate = 0;
            }
            this.cqt_vat_ecommerce_rate = value.cqt_vat_ecommerce_rate;
        }
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
        this.vhQuerySales.updateAppSettingNameBranch('permission_branch', value).then((bool) => {
        });
    }
}
EInvoiceComponent.ɵfac = function EInvoiceComponent_Factory(t) { return new (t || EInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService)); };
EInvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EInvoiceComponent, selectors: [["app-e-invoice"]], decls: 86, vars: 72, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "no-border"], ["mode", "ios", 3, "ngModel", "click", "ngModelChange"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [4, "ngIf"], [1, "cqt_vat_ecommerce_rate", 3, "nzMin", "nzMax", "nzPlaceHolder", "ngModel", "ngModelChange", "nzBlur"]], template: function EInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_50_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_50_listener($event) { return ctx.cqt_submit_invoice_with_shipping_fee = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_50_listener($event) { return ctx.updateShowTypePrice({ cqt_submit_invoice_with_shipping_fee: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_55_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_55_listener($event) { return ctx.cqt_submit_invoice_with_ecommerce_fee = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_55_listener($event) { return ctx.updateShowTypePrice({ cqt_submit_invoice_with_ecommerce_fee: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, EInvoiceComponent_div_60_Template, 4, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_61_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_61_listener($event) { return ctx.cqt_vat_ecommerce_already_Included = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_61_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_already_Included: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_66_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_66_listener($event) { return ctx.cqt_vat_ecommerce_by_linked_product = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_66_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_by_linked_product: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_72_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_72_listener($event) { return ctx.cqt_vat_ecommerce_use_latest_order_update_time = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_72_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_use_latest_order_update_time: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_80_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_80_listener($event) { return ctx.cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_80_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "nz-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "nz-switch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EInvoiceComponent_Template_nz_switch_click_85_listener($event) { return $event.stopPropagation(); })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_85_listener($event) { return ctx.cqt_vat_ecommerce_default_payment_method_chuyen_khoan = $event; })("ngModelChange", function EInvoiceComponent_Template_nz_switch_ngModelChange_85_listener($event) { return ctx.updateShowTypePrice({ cqt_vat_ecommerce_default_payment_method_chuyen_khoan: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 34, "C\u00E1ch t\u00EDnh thu\u1EBF tr\u01B0\u1EDBc khi g\u1EEDi l\u00EAn CQT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 36, "G\u1EEDi h\u00F3a \u0111\u01A1n l\u00EAn C\u01A1 quan thu\u1EBF ngay khi thanh to\u00E1n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_submit_invoice_immediately);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 38, "K\u00FD t\u1EF1 \u0111\u1ED9ng ngay khi g\u1EEDi h\u00F3a \u0111\u01A1n l\u00EAn C\u01A1 quan thu\u1EBF"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_invoice_auto_sign);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 40, "Xu\u1EA5t ri\u00EAng chi\u1EBFt kh\u1EA5u/gi\u1EA3m gi\u00E1 c\u1EE7a s\u1EA3n ph\u1EA9m th\u00E0nh 1 d\u00F2ng ri\u00EAng khi g\u1EEDi CQT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_separate_discount_line);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 42, "Khi b\u1EADt c\u1EA5u h\u00ECnh n\u00E0y th\u00EC c\u1EA5u h\u00ECnh V\u1EABn gi\u1EEF h\u00E0ng xu\u1EA5t b\u00E1n cho s\u1EA3n ph\u1EA9m t\u1EB7ng/khuy\u1EBFn m\u00E3i khi g\u1EEDi CQT s\u1EBD t\u1EF1 \u0111\u1ED9ng t\u1EAFt. B\u1EA1n ch\u1EC9 c\u00F3 th\u1EC3 ch\u1ECDn 1 trong 2."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 44, "H\u00E0ng khuy\u1EBFn m\u00E3i \u0111\u01B0\u1EE3c ph\u00E9p xu\u1EA5t 0\u0111"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_allow_promotional_items_zero_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 46, "Khi b\u1EADt c\u1EA5u h\u00ECnh n\u00E0y th\u00EC c\u1EA5u h\u00ECnh H\u00E0ng khuy\u1EBFn m\u00E3i \u0111\u01B0\u1EE3c ph\u00E9p xu\u1EA5t 0\u0111 s\u1EBD t\u1EF1 \u0111\u1ED9ng t\u1EAFt. B\u1EA1n ch\u1EC9 c\u00F3 th\u1EC3 ch\u1ECDn 1 trong 2."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 48, "V\u1EABn gi\u1EEF h\u00E0ng xu\u1EA5t b\u00E1n cho s\u1EA3n ph\u1EA9m t\u1EB7ng/khuy\u1EBFn m\u00E3i khi g\u1EEDi CQT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_keep_promotional_items_as_sold);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 50, "M\u00E3 s\u1EA3n ph\u1EA9m khi g\u1EEDi CQT l\u00E0 m\u00E3 v\u1EA1ch s\u1EA3n ph\u1EA9m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_item_code_is_barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 52, "Gi\u00E1 h\u00E0ng h\u00F3a, d\u1ECBch v\u1EE5... g\u1EEDi CQT l\u00E0 gi\u00E1 b\u00E1n \u0111\u00E3 gi\u1EA3m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_item_price_is_discounted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 54, "G\u1EEDi h\u00F3a \u0111\u01A1n l\u00EAn C\u01A1 quan thu\u1EBF k\u00E8m ph\u00ED v\u1EADn chuy\u1EC3n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_submit_invoice_with_shipping_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 56, "G\u1EEDi h\u00F3a \u0111\u01A1n l\u00EAn C\u01A1 quan thu\u1EBF k\u00E8m ph\u00ED giao d\u1ECBch/ph\u00ED s\u00E0n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_submit_invoice_with_ecommerce_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 58, "Gi\u00E1 b\u00E1n h\u00E0ng h\u00F3a, d\u1ECBch v\u1EE5... tr\u00EAn s\u00E0n \u0111\u00E3 bao g\u1ED3m thu\u1EBF VAT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cqt_vat_ecommerce_already_Included);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_already_Included);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 60, "The selling price of goods and services on the platform includes VAT, calculated based on the VAT rate of the associated goods and services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_by_linked_product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 62, "Khi b\u1EADt c\u1EA5u h\u00ECnh n\u00E0y, b\u1EA1n ch\u1EC9 c\u00F3 th\u1EC3 g\u1EEDi nh\u1EEFng h\u00F3a \u0111\u01A1n c\u00F3 ng\u00E0y l\u1EADp h\u00F3a \u0111\u01A1n nh\u1ECF h\u01A1n ng\u00E0y l\u1EADp h\u00F3a \u0111\u01A1n cu\u1ED1i c\u00F9ng \u0111\u00E3 g\u1EEDi l\u00EAn C\u01A1 quan thu\u1EBF. N\u1EBFu c\u1EA7n g\u1EEDi nh\u1EEFng h\u00F3a \u0111\u01A1n c\u0169 h\u01A1n, b\u1EA1n c\u00F3 th\u1EC3 t\u1EA1m th\u1EDDi t\u1EAFt c\u1EA5u h\u00ECnh n\u00E0y."));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 64, "S\u1EED d\u1EE5ng th\u1EDDi gian c\u1EADp nh\u1EADt tr\u1EA1ng th\u00E1i g\u1EA7n nh\u1EA5t c\u1EE7a \u0111\u01A1n h\u00E0ng t\u1EEB s\u00E0n \u0111\u1EC3 thi\u1EBFt l\u1EADp ng\u00E0y l\u1EADp h\u00F3a \u0111\u01A1n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_use_latest_order_update_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 66, "Xu\u1EA5t h\u00F3a \u0111\u01A1n t\u1EEB s\u00E0n v\u1EDBi th\u00F4ng tin ng\u01B0\u1EDDi mua k\u00E8m theo t\u00EAn s\u00E0n v\u00E0 m\u00E3 \u0111\u01A1n h\u00E0ng"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 68, "V\u00ED d\u1EE5: Shopee - Ng\u01B0\u1EDDi mua kh\u00F4ng l\u1EA5y h\u00F3a \u0111\u01A1n - 250625BRTHK9Q4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 70, "Xu\u1EA5t h\u00F3a \u0111\u01A1n t\u1EEB s\u00E0n v\u1EDBi th\u00F4ng tin thanh to\u00E1n m\u1EB7c \u0111\u1ECBnh l\u00E0 'Chuy\u1EC3n kho\u1EA3n'"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cqt_vat_ecommerce_default_payment_method_chuyen_khoan);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_5__.NzListItemComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_6__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__.NzInputNumberComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.row-back[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtaW52b2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRVE7RUFDSSxhQUFBO0FBQVo7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDSSxlQUFBO0FBQVIiLCJmaWxlIjoiZS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJvdy1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 98694:
/*!*******************************************************************!*\
  !*** ./src/app/sales/menu/settings/e-invoice/e-invoice.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceModule": () => (/* binding */ EInvoiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _e_invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-invoice.component */ 80789);
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
//# sourceMappingURL=src_app_sales_menu_settings_e-invoice_e-invoice_module_ts.js.map