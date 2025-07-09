"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_tiki_tiki_module_ts"],{

/***/ 4835:
/*!***************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/print/a4/a4.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4Component": () => (/* binding */ A4Component)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function A4Component_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "iframe", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.shipping_label_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
function A4Component_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.product == null ? null : item_r2.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.invoice == null ? null : item_r2.invoice.price), " \u0111 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.invoice == null ? null : item_r2.invoice.discount_amount), " \u0111 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.invoice == null ? null : item_r2.invoice.subtotal), " \u0111 ");
} }
class A4Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.shipping_label_url = '';
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (this.bill.code)
            this.renderBarcode('#barcode-sort-code', this.bill.code);
    }
    renderBarcode(id, value) {
        jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
            format: "CODE128",
            lineColor: "#000",
            height: 40,
            displayValue: true,
        });
    }
    printA4() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "tiki-a4",
            type: "html",
            scanStyles: false,
            style: '#shipping_stamp_url{padding: 0 2mm;margin-top:40px;}' +
                '.shipping_stamp_url_content {border: 2px solid #000;font: 12pt monospace;color: #000;padding: 8px;width: 206mm;}' +
                '.receipt-header {display: inline-flex;}' +
                '.receipt-header img{width: 100px;}' +
                '.receipt-header-title {margin: auto 20px;line-height: 20px;}' +
                '.receipt-order-info {display: flex;justify-content: space-between;margin-top: 16px;}' +
                '.receipt-customer-info {display: inline-flex;margin-top: 16px;width: 100%;}' +
                '.receipt-customer-info .ant-table {border: 1px solid #000;border-radius: 0;margin: auto;width: 206mm;}' +
                '.receipt-customer-info .ant-table table {font-size: 12pt;}' +
                '.receipt-customer-info .header {width: 103mm;text-align: center;}' +
                '.receipt-item-info {display: inline-flex; margin-top: 16px;width: 100%;}' +
                '.receipt-item-info .ant-table {border: 1px solid #000;border-radius: 0;margin: auto;width: 206mm;padding: 0 4px;}' +
                '.receipt-item-info .td {border-bottom: none;padding: 0;}' +
                '.proof-of-delivery {display: inline-flex;margin-top: 16px;width: 100%;}' +
                '.proof-of-delivery .ant-table {border: 1px solid #000;border-radius: 0;margin: auto;width: 206mm;}'
        });
    }
}
A4Component.ɵfac = function A4Component_Factory(t) { return new (t || A4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
A4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: A4Component, selectors: [["app-a4"]], inputs: { bill: "bill", shipping_label_url: "shipping_label_url" }, decls: 126, vars: 33, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "tiki-a4", 1, "a4"], ["class", "shipping_label", "style", "height:297mm; text-align: center;", 4, "ngIf"], ["id", "shipping_stamp_url"], [1, "shipping_stamp_url_content"], [1, "receipt-header"], ["alt", "", "src", "https://salt.tikicdn.com/media/upload/2017/06/05/28aaa66b97e084f6983902e4840ae064.png"], [1, "receipt-header-title"], [1, "receipt-order-info"], [2, "width", "400px", "margin", "auto 8px"], ["id", "stamp-barcode", 2, "text-align", "center"], ["id", "barcode-sort-code"], [1, "receipt-customer-info"], [1, "ant-table"], [1, "ant-table-body"], [1, "ant-table-tbody"], [1, "header"], [1, "receipt-item-info"], [2, "width", "270px", "text-align", "center"], [2, "width", "90px", "text-align", "center"], [2, "width", "120px", "text-align", "center"], [4, "ngFor", "ngForOf"], ["colspan", "4", 2, "text-align", "right"], [2, "text-align", "right"], ["colspan", "4", 2, "text-align", "right", "font-weight", "bold"], [2, "text-align", "right", "font-weight", "bold"], [1, "proof-of-delivery"], [2, "width", "349px", "text-align", "center", "line-height", "20px", "padding", "8px"], [2, "text-align", "center"], [2, "height", "120px", "display", "flex", "flex-direction", "column-reverse"], [1, "shipping_label", 2, "height", "297mm", "text-align", "center"], [1, "shipping_label-1", 2, "width", "100%", "max-width", "206mm", "height", "297mm", "border", "none", 3, "src"], [2, "word-break", "initial", "word-wrap", "break-word"]], template: function A4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function A4Component_Template_button_click_1_listener() { return ctx.printA4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, A4Component_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "WEBSITE TH\u01AF\u01A0NG M\u1EA0I \u0110I\u1EC6N T\u1EEC - MUA H\u00C0NG TR\u1EF0C TUY\u1EBEN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "H\u1ED7 tr\u1EE3 kh\u00E1ch h\u00E0ng 24/7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Hotline 1900.6035 ho\u1EB7c truy c\u1EADp http://hotro.tiki.vn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Th\u00F4ng tin thanh to\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0110\u1ECBa ch\u1EC9 giao h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tbody", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "S\u1EA3n ph\u1EA9m");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "S\u1ED1 l\u01B0\u1EE3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Gi\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Gi\u1EA3m gi\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "T\u1ED5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, A4Component_tr_73_Template, 11, 5, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " T\u1ED5ng ch\u01B0a gi\u1EA3m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Gi\u1EA3m gi\u00E1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Ph\u00ED v\u1EADn chuy\u1EC3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " Ph\u00ED x\u1EED l\u00FD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " T\u1ED5ng c\u1ED9ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "tbody", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Nh\u00E0 b\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](111, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Ng\u01B0\u1EDDi nh\u1EADn h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](118, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 22, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.shipping_label_url != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" M\u00E3 \u0111\u01A1n h\u00E0ng: ", ctx.bill.code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Ng\u00E0y \u0111\u1EB7t h\u00E0ng: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](23, 24, ctx.bill.created_at, "dd/MM/YYYY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n: ", ctx.bill.payment == null ? null : ctx.bill.payment.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.billing_address == null ? null : ctx.bill.billing_address.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.full_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.street, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.ward, " , ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.district, " , ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.region, " , ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bill.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.subtotal), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.discount_amount), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.shipping_amount_after_discount), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.handling_fee), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.collectible_amount), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ng\u00E0y ... th\u00E1ng ... n\u0103m ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](111, 27, ctx.bill.currentDate, "YYYY"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ng\u00E0y ... th\u00E1ng ... n\u0103m ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](118, 30, ctx.bill.currentDate, "YYYY"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.bill.items[0] == null ? null : ctx.bill.items[0].seller == null ? null : ctx.bill.items[0].seller.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.full_name, " ");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".a4[_ngcontent-%COMP%] {\n  width: 210mm;\n  margin-top: 40px;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n  font: 12px monospace;\n  color: #000;\n  padding: 8px;\n  width: 208mm;\n  margin-top: 40px;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%]   .receipt-header-title[_ngcontent-%COMP%] {\n  margin: auto 20px;\n  line-height: 20px;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-order-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 16px;\n  width: 100%;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 0;\n  margin: auto;\n  width: 208mm;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 104mm;\n  text-align: center;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-item-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 16px;\n  width: 100%;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-item-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 0;\n  margin: auto;\n  width: 208mm;\n  padding: 0 4px;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-item-info[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding: 0;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .proof-of-delivery[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 16px;\n  width: 100%;\n}\n.a4[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .proof-of-delivery[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 0;\n  margin: auto;\n  width: 208mm;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImE0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFzQ0k7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFwQ047QUFxQ007RUFDRSxvQkFBQTtBQW5DUjtBQW9DUTtFQUNFLFlBQUE7QUFsQ1Y7QUFvQ1E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBbENWO0FBcUNNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFuQ1I7QUFxQ007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQW5DUjtBQW9DUTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWxDVjtBQW1DVTtFQUNFLGVBQUE7QUFqQ1o7QUFrQ1k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFoQ2Q7QUFxQ007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQW5DUjtBQW9DUTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFsQ1Y7QUFvQ1E7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFsQ1Y7QUFxQ007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQW5DUjtBQW9DUTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWxDVjtBQXdDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXJDRiIsImZpbGUiOiJhNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hNCB7XHJcbiAgd2lkdGg6IDIxMG1tO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgLy8gLmNvbnRlbnQge1xyXG5cclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcclxuICAvLyAgIC5yb3cge1xyXG4gIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAjYmFyY29kZS1vcmRlci1udW1iZXIge1xyXG4gIC8vICAgICB3aWR0aDogMTg1cHg7XHJcbiAgLy8gICAgIG1heC13aWR0aDogMTAwJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC53NTAge1xyXG4gIC8vICAgICB3aWR0aDogNTAlO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLncxMDAge1xyXG4gIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC53MzMge1xyXG4gIC8vICAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLnc5MHtcclxuICAvLyAgICAgICB3aWR0aDogOTAlO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLnRleHQtY2VudGVyIHtcclxuICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgI2JhcmNvZGUtdHJhY2tpbmctbnVtYmVyIHtcclxuICAvLyAgICAgd2lkdGg6IDM2MHB4O1xyXG4gIC8vICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC5jZW50ZXItYWxsLWNvbnRlbnQge1xyXG4gIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgI3NoaXBwaW5nX3N0YW1wX3VybCB7XHJcbiAgICAuc2hpcHBpbmdfc3RhbXBfdXJsX2NvbnRlbnQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICBmb250OiAxMnB4IG1vbm9zcGFjZTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgd2lkdGg6IDIwOG1tO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAucmVjZWlwdC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWNlaXB0LWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMjBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmVjZWlwdC1vcmRlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWNlaXB0LWN1c3RvbWVyLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmFudC10YWJsZSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAyMDhtbTtcclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTA0bW07XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZWNlaXB0LWl0ZW0taW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuYW50LXRhYmxlIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDIwOG1tO1xyXG4gICAgICAgICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucHJvb2Ytb2YtZGVsaXZlcnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmFudC10YWJsZSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAyMDhtbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJ0bi1wcmludCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTB2dztcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 80130:
/*!***************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/print/a5/a5.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A5Component": () => (/* binding */ A5Component)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode */ 17988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












function A5Component_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "iframe", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.shipping_label_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
} }
function A5Component_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.product == null ? null : item_r2.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.qty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.invoice == null ? null : item_r2.invoice.price), " \u0111 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.invoice == null ? null : item_r2.invoice.discount_amount), " \u0111 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.invoice == null ? null : item_r2.invoice.subtotal), " \u0111 ");
} }
class A5Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.shipping_label_url = '';
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (this.bill.code)
            this.renderBarcode('#barcode-sort-code', this.bill.code);
    }
    renderBarcode(id, value) {
        jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
            format: "CODE128",
            lineColor: "#000",
            height: 40,
            displayValue: true,
        });
    }
    renderQR() {
        qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill.code, function (error) {
            if (error)
                console.error(error);
        });
    }
    printA5() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "tiki-a5",
            type: "html",
            scanStyles: false,
            style: '#shipping_stamp_url{padding: 0 2mm;margin-top:40px;font-size:9pt}' +
                '.shipping_stamp_url_content {border: 2px solid #000;font: 10pt monospace;color: #000;padding: 8px;width: 142mm;}' +
                '.receipt-header {display: inline-flex;}' +
                '.receipt-header img{width: 100px;}' +
                '.receipt-header-title {margin: auto 20px;line-height: 20px;}' +
                '.receipt-order-info {display: flex;justify-content: space-between;margin-top: 16px;}' +
                '.receipt-customer-info {display: inline-flex;margin-top: 16px;width: 100%;}' +
                '.receipt-customer-info .ant-table {border: 1px solid #000;border-radius: 0;margin: auto;width: 142mm;}' +
                '.receipt-customer-info .ant-table table {font-size: 8pt;}' +
                '.receipt-customer-info .header {width: 71mm;text-align: center;}' +
                '.receipt-item-info {display: inline-flex; margin-top: 16px;width: 100%;}' +
                '.receipt-item-info .ant-table {border: 1px solid #000;border-radius: 0;margin: auto;width: 142mm;padding: 0 4px;}' +
                '.receipt-item-info .td {border-bottom: none;padding: 0;}' +
                '.proof-of-delivery {display: inline-flex;margin-top: 16px;width: 100%;}' +
                '.proof-of-delivery .ant-table {border: 1px solid #000;border-radius: 0;margin: auto;width: 142mm;}'
        });
    }
}
A5Component.ɵfac = function A5Component_Factory(t) { return new (t || A5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
A5Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: A5Component, selectors: [["app-a5"]], inputs: { bill: "bill", shipping_label_url: "shipping_label_url" }, decls: 126, vars: 33, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "tiki-a5", 1, "a5"], ["class", "shipping_label", "style", "height:220mm; text-align: center;", 4, "ngIf"], ["id", "shipping_stamp_url"], [1, "shipping_stamp_url_content"], [1, "receipt-header"], ["alt", "", "src", "https://salt.tikicdn.com/media/upload/2017/06/05/28aaa66b97e084f6983902e4840ae064.png"], [1, "receipt-header-title"], [1, "receipt-order-info"], [2, "width", "400px", "margin", "auto 8px"], ["id", "stamp-barcode", 2, "text-align", "center"], ["id", "barcode-sort-code"], [1, "receipt-customer-info"], [1, "ant-table"], [1, "ant-table-body"], [1, "ant-table-tbody"], [1, "header"], [1, "receipt-item-info"], [2, "width", "186px", "text-align", "center"], [2, "width", "62px", "text-align", "center"], [2, "width", "83px", "text-align", "center"], [4, "ngFor", "ngForOf"], ["colspan", "4", 2, "text-align", "right"], [2, "text-align", "right"], ["colspan", "4", 2, "text-align", "right", "font-weight", "bold"], [2, "text-align", "right", "font-weight", "bold"], [1, "proof-of-delivery"], [2, "width", "240px", "text-align", "center", "line-height", "20px", "padding", "8px"], [2, "text-align", "center"], [2, "height", "83px", "display", "flex", "flex-direction", "column-reverse"], [1, "shipping_label", 2, "height", "220mm", "text-align", "center"], [1, "shipping_label-1", 2, "width", "100%", "max-width", "142mm", "height", "210mm", "border", "none", 3, "src"], [2, "word-break", "initial", "word-wrap", "break-word"]], template: function A5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function A5Component_Template_button_click_1_listener() { return ctx.printA5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, A5Component_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "WEBSITE TH\u01AF\u01A0NG M\u1EA0I \u0110I\u1EC6N T\u1EEC - MUA H\u00C0NG TR\u1EF0C TUY\u1EBEN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "H\u1ED7 tr\u1EE3 kh\u00E1ch h\u00E0ng 24/7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Hotline 1900.6035 ho\u1EB7c truy c\u1EADp http://hotro.tiki.vn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tbody", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Th\u00F4ng tin thanh to\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\u0110\u1ECBa ch\u1EC9 giao h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "tbody", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "S\u1EA3n ph\u1EA9m");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "S\u1ED1 l\u01B0\u1EE3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Gi\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Gi\u1EA3m gi\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "T\u1ED5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, A5Component_tr_73_Template, 11, 5, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " T\u1ED5ng ch\u01B0a gi\u1EA3m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " Gi\u1EA3m gi\u00E1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " Ph\u00ED v\u1EADn chuy\u1EC3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " Ph\u00ED x\u1EED l\u00FD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " T\u1ED5ng c\u1ED9ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "tbody", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Nh\u00E0 b\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](111, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Ng\u01B0\u1EDDi nh\u1EADn h\u00E0ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](118, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 22, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shipping_label_url != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" M\u00E3 \u0111\u01A1n h\u00E0ng: ", ctx.bill.code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Ng\u00E0y \u0111\u1EB7t h\u00E0ng: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](23, 24, ctx.bill.created_at, "dd/MM/YYYY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n: ", ctx.bill.payment == null ? null : ctx.bill.payment.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.billing_address == null ? null : ctx.bill.billing_address.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.full_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.street, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate4"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.ward, " , ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.district, " , ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.region, " , ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bill.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.subtotal), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.discount_amount), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.shipping_amount_after_discount), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.handling_fee), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice == null ? null : ctx.bill.invoice.collectible_amount), " \u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Ng\u00E0y ... th\u00E1ng ... n\u0103m ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](111, 27, ctx.bill.currentDate, "YYYY"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Ng\u00E0y ... th\u00E1ng ... n\u0103m ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](118, 30, ctx.bill.currentDate, "YYYY"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill.items[0] == null ? null : ctx.bill.items[0].seller == null ? null : ctx.bill.items[0].seller.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill.billing_address == null ? null : ctx.bill.billing_address.full_name, " ");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__.NzTableCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".a5[_ngcontent-%COMP%] {\n  width: 148mm;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n  font: 12px monospace;\n  color: #000;\n  padding: 8px;\n  width: 100%;\n  max-width: 142mm;\n  margin-top: 40px;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-header[_ngcontent-%COMP%]   .receipt-header-title[_ngcontent-%COMP%] {\n  margin: auto 20px;\n  line-height: 20px;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-order-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 16px;\n  width: 100%;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 0;\n  margin: auto;\n  width: 142mm;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-customer-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 71mm;\n  text-align: center;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-item-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 16px;\n  width: 100%;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-item-info[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 0;\n  margin: auto;\n  width: 142mm;\n  padding: 0 4px;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .receipt-item-info[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding: 0;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .proof-of-delivery[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 16px;\n  width: 100%;\n}\n.a5[_ngcontent-%COMP%]   #shipping_stamp_url[_ngcontent-%COMP%]   .shipping_stamp_url_content[_ngcontent-%COMP%]   .proof-of-delivery[_ngcontent-%COMP%]   .ant-table[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 0;\n  margin: auto;\n  width: 142mm;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImE1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBc0NJO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFwQ047QUFxQ007RUFDRSxvQkFBQTtBQW5DUjtBQW9DUTtFQUNFLFlBQUE7QUFsQ1Y7QUFvQ1E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBbENWO0FBcUNNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFuQ1I7QUFxQ007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQW5DUjtBQW9DUTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWxDVjtBQW1DVTtFQUNFLGVBQUE7QUFqQ1o7QUFrQ1k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFoQ2Q7QUFxQ007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQW5DUjtBQW9DUTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFsQ1Y7QUFvQ1E7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFsQ1Y7QUFxQ007RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQW5DUjtBQW9DUTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWxDVjtBQXdDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXJDRiIsImZpbGUiOiJhNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hNSB7XHJcbiAgd2lkdGg6IDE0OG1tO1xyXG4gIC8vIC5jb250ZW50IHtcclxuXHJcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgLy8gICAucm93IHtcclxuICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gIC8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgI2JhcmNvZGUtb3JkZXItbnVtYmVyIHtcclxuICAvLyAgICAgd2lkdGg6IDE4NXB4O1xyXG4gIC8vICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAudzUwIHtcclxuICAvLyAgICAgd2lkdGg6IDUwJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC53MTAwIHtcclxuICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAudzMzIHtcclxuICAvLyAgICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC53OTB7XHJcbiAgLy8gICAgICAgd2lkdGg6IDkwJTtcclxuICAvLyAgIH1cclxuICAvLyAgIC50ZXh0LWNlbnRlciB7XHJcbiAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyAgIH1cclxuICAvLyAgICNiYXJjb2RlLXRyYWNraW5nLW51bWJlciB7XHJcbiAgLy8gICAgIHdpZHRoOiAzNjBweDtcclxuICAvLyAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAuY2VudGVyLWFsbC1jb250ZW50IHtcclxuICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gICNzaGlwcGluZ19zdGFtcF91cmwge1xyXG4gICAgLnNoaXBwaW5nX3N0YW1wX3VybF9jb250ZW50IHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgICAgZm9udDogMTJweCBtb25vc3BhY2U7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDE0Mm1tO1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAucmVjZWlwdC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWNlaXB0LWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMjBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmVjZWlwdC1vcmRlci1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWNlaXB0LWN1c3RvbWVyLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmFudC10YWJsZSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxNDJtbTtcclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNzFtbTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlY2VpcHQtaXRlbS1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5hbnQtdGFibGUge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMTQybW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5wcm9vZi1vZi1kZWxpdmVyeSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuYW50LXRhYmxlIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDE0Mm1tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnRuLXByaW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 71670:
/*!***************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/print/b6/b6.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B6Component": () => (/* binding */ B6Component)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode */ 17988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);












class B6Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        if (this.bill.code) {
            this.renderBarcode('#barcode-sort-code', this.bill.code);
            this.renderQR();
        }
        if (this.bill.shipping.delivery_shipping_code)
            this.renderBarcode('#barcode-tracking-number', this.bill.shipping.delivery_shipping_code);
    }
    renderBarcode(id, value) {
        jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
            format: "CODE128",
            lineColor: "#000",
            height: 40,
            displayValue: true,
        });
    }
    renderQR() {
        qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill.code, function (error) {
            if (error)
                console.error(error);
        });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "sendo-b6",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.b6 {max-width: 125mm;}' +
                '.b6 .content ' +
                '.b6 .content .row{ width: 100%;padding: 0 8px; border-bottom: 1px solid rgb(19, 19, 19);}' +
                '.b6 .content #barcode-tracking-number{ width: 185px; max-width: 100%; }' +
                '.b6 .content .w50{  width: 50%; }' +
                '.b6 .content .w100{ width: 100%; }' +
                '.b6 .content .w33{  width: 33.33333%; }' +
                '.b6 .content .w90{  width: 90%; }' +
                '.b6 .content .text-center{  text-align: center; }' +
                '.b6 .content #barcode-sort-code{  width: 360px;  max-width: 90%; }' +
                '.b6 .content .center-all-content{  display: flex; align-items: center; justify-content: center; }'
        });
    }
}
B6Component.ɵfac = function B6Component_Factory(t) { return new (t || B6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
B6Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: B6Component, selectors: [["app-b6"]], inputs: { bill: "bill" }, decls: 48, vars: 15, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "sendo-b6", 1, "b6"], [1, "content"], [1, "w100", "center-all-content", "row"], ["nz-row", "", 1, "w100", "center-all-content", 2, "border-bottom", "1px dashed rgb(19, 19, 19)", "padding", "8px"], [1, "w90", 2, "padding-right", "16px"], [1, "w50", 2, "border", "1px solid rgb(19, 19, 19)"], [1, "text-center", "w100"], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline"], [1, "w50", 2, "border", "1px solid rgb(19, 19, 19)", "border-top", "none"], [1, "row", "w100", "center-all-content", 2, "padding-top", "8px"], [1, "w33", 2, "padding", "8px", "display", "grid", "align-items", "center", "justify-content", "center", "border", "1px solid rgb(19, 19, 19)"], [1, "row"], [1, "center-all-content"], [1, "w100", 2, "display", "grid", "justify-items", "center"], [2, "text-align", "center"], ["id", "barcode-tracking-number"], [1, "row", "w100"], [1, "row", "w100", 2, "text-align", "end"], ["id", "canvas"], [1, "row", "w100", 2, "text-align", "center", "font-size", "1.3rem"], ["id", "barcode-sort-code"]], template: function B6Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function B6Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Ng\u01B0\u1EDDi nh\u1EADn: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "S\u0110T: ****");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Ghi ch\u00FA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 10, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" TIKI.VN - \u0110\u1ED1i t\u00E1c l\u1EA5y h\u00E0ng: ", ctx.bill.shipping.pickup_partner_code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Kho ", ctx.bill.tiki_warehouse.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill.shipping.partner_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](27, 12, ctx.bill.created_at, "HH:mm dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping.address.full_name.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" \u0110/C: ", ctx.bill.shipping.address.street, ", ", ctx.bill.shipping.address.district, ", ", ctx.bill.shipping.address.region, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice.collectible_amount));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".b6[_ngcontent-%COMP%] {\n  width: 125mm;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 1px solid #131313;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 8px;\n  border-bottom: 1px solid #131313;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #barcode-order-number[_ngcontent-%COMP%] {\n  width: 185px;\n  max-width: 100%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w33[_ngcontent-%COMP%] {\n  width: 33.33333%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #barcode-tracking-number[_ngcontent-%COMP%] {\n  width: 360px;\n  max-width: 90%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .center-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQUk7RUFFRSx5QkFBQTtBQUNOO0FBQU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBRVI7QUFBTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRVI7QUFBTTtFQUNFLFVBQUE7QUFFUjtBQUFNO0VBQ0UsV0FBQTtBQUVSO0FBQU07RUFDRSxnQkFBQTtBQUVSO0FBQU07RUFDSSxVQUFBO0FBRVY7QUFBTTtFQUNFLGtCQUFBO0FBRVI7QUFBTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBRVI7QUFBTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImI2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmI2IHtcclxuICAgIHdpZHRoOiAxMjVtbTtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcclxuICAgICAgfVxyXG4gICAgICAjYmFyY29kZS1vcmRlci1udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAxODVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnc1MCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAudzEwMCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnczMyB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICAgICAgfVxyXG4gICAgICAudzkwe1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAjYmFyY29kZS10cmFja2luZy1udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4gICAgICAuY2VudGVyLWFsbC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bi1wcmludCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 88399:
/*!***************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/print/b7/b7.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7Component": () => (/* binding */ B7Component)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode */ 17988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);












class B7Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        if (this.bill.code) {
            this.renderBarcode('#barcode-sort-code', this.bill.code);
            this.renderQR();
        }
        if (this.bill.shipping.delivery_shipping_code)
            this.renderBarcode('#barcode-tracking-number', this.bill.shipping.delivery_shipping_code);
    }
    renderBarcode(id, value) {
        jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
            format: "CODE128",
            lineColor: "#000",
            height: 40,
            displayValue: true,
        });
    }
    renderQR() {
        qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill.code, function (error) {
            if (error)
                console.error(error);
        });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "sendo-b7",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.b7 {max-width: 88mm;}' +
                '.b7 .content ' +
                '.b7 .content .row{ width: 100%;padding: 0 8px; border-bottom: 1px solid rgb(19, 19, 19);}' +
                '.b7 .content #barcode-tracking-number{ width: 185px; max-width: 100%; }' +
                '.b7 .content .w50{  width: 50%; }' +
                '.b7 .content .w100{ width: 100%; }' +
                '.b7 .content .w33{  width: 33.33333%; }' +
                '.b7 .content .w90{  width: 90%; }' +
                '.b7 .content .text-center{  text-align: center; }' +
                '.b7 .content #barcode-sort-code{  width: 360px;  max-width: 90%; }' +
                '.b7 .content .center-all-content{  display: flex; align-items: center; justify-content: center; }'
        });
    }
}
B7Component.ɵfac = function B7Component_Factory(t) { return new (t || B7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
B7Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: B7Component, selectors: [["app-b7"]], inputs: { bill: "bill" }, decls: 48, vars: 15, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "sendo-b7", 1, "b7"], [1, "content"], [1, "w100", "center-all-content", "row"], ["nz-row", "", 1, "w100", "center-all-content", 2, "border-bottom", "1px dashed rgb(19, 19, 19)", "padding", "8px"], [1, "w90", 2, "padding-right", "16px"], [1, "w50", 2, "border", "1px solid rgb(19, 19, 19)"], [1, "text-center", "w100"], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline"], [1, "w50", 2, "border", "1px solid rgb(19, 19, 19)", "border-top", "none"], [1, "row", "w100", "center-all-content", 2, "padding-top", "8px"], [1, "w33", 2, "padding", "8px", "display", "grid", "align-items", "center", "justify-content", "center", "border", "1px solid rgb(19, 19, 19)"], [1, "row"], [1, "center-all-content"], [1, "w100", 2, "display", "grid", "justify-items", "center"], [2, "text-align", "center"], ["id", "barcode-tracking-number"], [1, "row", "w100"], [1, "row", "w100", 2, "text-align", "end"], ["id", "canvas"], [1, "row", "w100", 2, "text-align", "center", "font-size", "1.3rem"], ["id", "barcode-sort-code"]], template: function B7Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function B7Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Ng\u01B0\u1EDDi nh\u1EADn: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "S\u0110T: ****");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Ghi ch\u00FA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 10, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" TIKI.VN - \u0110\u1ED1i t\u00E1c l\u1EA5y h\u00E0ng: ", ctx.bill.shipping.pickup_partner_code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Kho ", ctx.bill.tiki_warehouse.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill.shipping.partner_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](27, 12, ctx.bill.created_at, "HH:mm dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping.address.full_name.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" \u0110/C: ", ctx.bill.shipping.address.street, ", ", ctx.bill.shipping.address.district, ", ", ctx.bill.shipping.address.region, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice.collectible_amount));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".b7[_ngcontent-%COMP%] {\n  width: 88mm;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 1px solid #131313;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 8px;\n  border-bottom: 1px solid #131313;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #barcode-order-number[_ngcontent-%COMP%] {\n  width: 185px;\n  max-width: 100%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w33[_ngcontent-%COMP%] {\n  width: 33.33333%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #barcode-tracking-number[_ngcontent-%COMP%] {\n  width: 360px;\n  max-width: 90%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .center-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQUk7RUFFRSx5QkFBQTtBQUNOO0FBQU07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBRVI7QUFBTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRVI7QUFBTTtFQUNFLFVBQUE7QUFFUjtBQUFNO0VBQ0UsV0FBQTtBQUVSO0FBQU07RUFDRSxnQkFBQTtBQUVSO0FBQU07RUFDSSxVQUFBO0FBRVY7QUFBTTtFQUNFLGtCQUFBO0FBRVI7QUFBTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBRVI7QUFBTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImI3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmI3IHtcclxuICAgIHdpZHRoOiA4OG1tO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgICAucm93IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgICB9XHJcbiAgICAgICNiYXJjb2RlLW9yZGVyLW51bWJlciB7XHJcbiAgICAgICAgd2lkdGg6IDE4NXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAudzUwIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC53MTAwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAudzMzIHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgICB9XHJcbiAgICAgIC53OTB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNiYXJjb2RlLXRyYWNraW5nLW51bWJlciB7XHJcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jZW50ZXItYWxsLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLXByaW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 2654:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/print/k80/k80.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K80Component": () => (/* binding */ K80Component)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode */ 17988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);












class K80Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        if (this.bill.code) {
            this.renderBarcode('#barcode-sort-code', this.bill.code);
            this.renderQR();
        }
        if (this.bill.shipping.delivery_shipping_code)
            this.renderBarcode('#barcode-tracking-number', this.bill.shipping.delivery_shipping_code);
    }
    renderBarcode(id, value) {
        jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
            format: "CODE128",
            lineColor: "#000",
            height: 40,
            displayValue: true,
        });
    }
    renderQR() {
        qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill.code, function (error) {
            if (error)
                console.error(error);
        });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "sendo-k80",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.k80 {max-width: 79mm;}' +
                '.k80 .content ' +
                '.k80 .row{ width: 100%;padding: 0 8px; border-bottom: 1px solid rgb(19, 19, 19);}' +
                '.k80 .content #barcode-tracking-number{ width: 185px; max-width: 100%; }' +
                '.k80 .content .w50{  width: 50%; }' +
                '.k80 .content .w100{ width: 100%; }' +
                '.k80 .content .w33{  width: 33.33333%; }' +
                '.k80 .content .w90{  width: 90%; }' +
                '.k80 .content .text-center{  text-align: center; }' +
                '.k80 .content #barcode-sort-code{  width: 360px;  max-width: 90%; }' +
                '.k80 .content .center-all-content{  display: flex; align-items: center; justify-content: center; }'
        });
    }
}
K80Component.ɵfac = function K80Component_Factory(t) { return new (t || K80Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
K80Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: K80Component, selectors: [["app-k80"]], inputs: { bill: "bill" }, decls: 48, vars: 15, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "sendo-k80", 1, "k80"], [1, "content"], [1, "w100", "center-all-content", "row"], ["nz-row", "", 1, "w100", "center-all-content", 2, "border-bottom", "1px dashed rgb(19, 19, 19)", "padding", "8px"], [1, "w90", 2, "padding-right", "16px"], [1, "w50", 2, "border", "1px solid rgb(19, 19, 19)"], [1, "text-center", "w100"], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline"], [1, "w50", 2, "border", "1px solid rgb(19, 19, 19)", "border-top", "none"], [1, "row", "w100", "center-all-content", 2, "padding-top", "8px"], [1, "w33", 2, "padding", "8px", "display", "grid", "align-items", "center", "justify-content", "center", "border", "1px solid rgb(19, 19, 19)"], [1, "row"], [1, "center-all-content"], [1, "w100", 2, "display", "grid", "justify-items", "center"], [2, "text-align", "center"], ["id", "barcode-tracking-number"], [1, "row", "w100"], [1, "row", "w100", 2, "text-align", "end"], ["id", "canvas"], [1, "row", "w100", 2, "text-align", "center", "font-size", "1.3rem"], ["id", "barcode-sort-code"]], template: function K80Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function K80Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Ng\u01B0\u1EDDi nh\u1EADn: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "S\u0110T: ****");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Ghi ch\u00FA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 10, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" TIKI.VN - \u0110\u1ED1i t\u00E1c l\u1EA5y h\u00E0ng: ", ctx.bill.shipping.pickup_partner_code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Kho ", ctx.bill.tiki_warehouse.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill.shipping.partner_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](27, 12, ctx.bill.created_at, "HH:mm dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping.address.full_name.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" \u0110/C: ", ctx.bill.shipping.address.street, ", ", ctx.bill.shipping.address.district, ", ", ctx.bill.shipping.address.region, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.bill.invoice.collectible_amount));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".k80[_ngcontent-%COMP%] {\n  max-width: 79mm;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 1px solid #131313;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 8px;\n  border-bottom: 1px solid #131313;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #barcode-order-number[_ngcontent-%COMP%] {\n  width: 185px;\n  max-width: 100%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w33[_ngcontent-%COMP%] {\n  width: 33.33333%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   #barcode-tracking-number[_ngcontent-%COMP%] {\n  width: 360px;\n  max-width: 90%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .center-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIms4MC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUFJO0VBRUUseUJBQUE7QUFDTjtBQUFNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUVSO0FBQU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQU07RUFDRSxVQUFBO0FBRVI7QUFBTTtFQUNFLFdBQUE7QUFFUjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUjtBQUFNO0VBQ0ksVUFBQTtBQUVWO0FBQU07RUFDRSxrQkFBQTtBQUVSO0FBQU07RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVSO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJrODAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuazgwIHtcclxuICAgIG1heC13aWR0aDogNzltbTtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcclxuICAgICAgfVxyXG4gICAgICAjYmFyY29kZS1vcmRlci1udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAxODVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnc1MCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAudzEwMCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnczMyB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMzJTtcclxuICAgICAgfVxyXG4gICAgICAudzkwe1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAjYmFyY29kZS10cmFja2luZy1udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4gICAgICAuY2VudGVyLWFsbC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bi1wcmludCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 7403:
/*!***************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/print/print.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintComponent": () => (/* binding */ PrintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _a4_a4_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a4/a4.component */ 4835);
/* harmony import */ var _a5_a5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a5/a5.component */ 80130);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function PrintComponent_nz_tabset_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tabset", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-a4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-a5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bill", ctx_r0.root.bill)("shipping_label_url", ctx_r0.shipping_label_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bill", ctx_r0.root.bill)("shipping_label_url", ctx_r0.shipping_label_url);
} }
function PrintComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0110\u01A1n h\u00E0ng c\u1EE7a b\u1EA1n ch\u01B0a s\u1EB5n s\u00E0ng \u0111\u1EC3 in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PrintComponent {
    constructor(router, vhComponent, vhQuerySasles, sanitizer) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySasles = vhQuerySasles;
        this.sanitizer = sanitizer;
        this.readyToPrint = false;
        this.root = this.router.getCurrentNavigation().extras.state;
    }
    ngOnInit() {
        this.vhComponent.showLoading('', "transparent-loading").then(() => {
            this.vhQuerySasles.GetShippingStampForDropshipTiki(this.root.bill['code'], 'B6', this.root.info_Shop['access_token']).then((res) => {
                if (res.error)
                    this.vhComponent.alertMessageDesktop('error', 'Đơn này chưa thể in');
                else {
                    this.shipping_label_url = this.sanitizer.bypassSecurityTrustResourceUrl(res.url);
                    this.readyToPrint = true;
                }
                this.root.bill.currentDate = new Date();
                this.vhComponent.hideLoading(0);
            }).catch(err => { this.vhComponent.hideLoading(0); this.vhComponent.alertMessageDesktop('error', 'Đơn này chưa thể in'); });
        });
    }
    goBack() {
        this.router.navigate([this.root.path], { state: this.root });
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer)); };
PrintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 8, vars: 5, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "tabset-print-tiki", "class", "hideScrollbar", 4, "ngIf", "ngIfElse"], ["notReadyToPrint", ""], ["id", "tabset-print-tiki", 1, "hideScrollbar"], ["nzTitle", "A4"], [3, "bill", "shipping_label_url"], ["nzTitle", "A5"], [1, "not-ready-to-print"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrintComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintComponent_nz_tabset_5_Template, 7, 4, "nz-tabset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.readyToPrint)("ngIfElse", _r1);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabComponent, _a4_a4_component__WEBPACK_IMPORTED_MODULE_1__.A4Component, _a5_a5_component__WEBPACK_IMPORTED_MODULE_2__.A5Component], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .not-ready-to-print[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n  #tabset-print-tiki {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUFBO0VBQ0kseUJBQUE7QUFHSiIsImZpbGUiOiJwcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5ub3QtcmVhZHktdG8tcHJpbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwICN0YWJzZXQtcHJpbnQtdGlraSB7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 64302:
/*!********************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/tiki.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TikiComponent": () => (/* binding */ TikiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function TikiComponent_ng_container_132_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 27);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzValue", item_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r4.name, " - ", item_r4.phone, " ");
} }
function TikiComponent_ng_container_132_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TikiComponent_ng_container_132_Template_nz_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r5.modalCustomer["id_customer"] = $event); })("nzOnSearch", function TikiComponent_ng_container_132_Template_nz_select_nzOnSearch_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TikiComponent_ng_container_132_nz_option_8_Template, 1, 3, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "Shop name"), ": ", ctx_r0.modalCustomer["info"].name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 11, "Select customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDisabled", ctx_r0.modalCustomer["existShop"])("ngModel", ctx_r0.modalCustomer["id_customer"])("nzServerSearch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.customerShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("**", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 13, "This customer will be assigned a debt to this shop when the invoice is issued"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 15, "The selected customer cannot be changed when issued invoice"), " ");
} }
function TikiComponent_ng_template_133_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_ng_template_133_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.cancelModalUpdateInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_ng_template_133_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.updateInfoTiki(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.modalCustomer["id_customer"])("nzLoading", ctx_r2.modalCustomer["loading"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, "Save"));
} }
class TikiComponent {
    constructor(router, lang, vhComponent, vhQuerySales, vhAlgorithm) {
        var _a;
        this.router = router;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.listProduct = []; //danh sách sp kèm them id_shop
        this.listShop = []; //danh sách sendo đã kết nối
        this.listCustomer = this.vhQuerySales.getlocalCustomers().filter(item => item.type != 3).filter(customer => {
            if (customer['_id'] != "id_retail") {
                if (customer['debt_enable'] == true)
                    return true;
                else
                    return false;
            }
            return false;
        });
        this.customerShow = [];
        this.modalCustomer = {
            visible: false,
            loading: false,
            name: '',
            id_customer: '',
            info: {},
            existShop: false
        };
        let dataRestore = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.dataRestore;
        if (dataRestore && dataRestore.haveUpdate) {
            this.syncData();
        }
        else
            this.getData();
    }
    /**Đồng bộ lại dữ liệu khi có thay đổi */
    syncData() {
        Promise.all([
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Tiki..."), "transparent-loading", undefined, 0, true, 60000),
            this.vhQuerySales.refreshLocalProductListTikis()
        ]).then(([refresh, loading]) => {
            this.vhComponent.hideLoading(0).then(() => {
                this.getData();
            });
        }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
    }
    /**
     * Duyệt qua từng shop, nếu shop nào không có id_customer thì tiến hành thêm tên và thêm id_customer cho shop
     */
    getData() {
        var _a;
        this.listShop = this.vhQuerySales.getlocalShopListTiki();
        this.customerShow = [...this.listCustomer];
        for (let item of this.listShop) {
            if (!((_a = item.data) === null || _a === void 0 ? void 0 : _a.id_customer)) {
                this.vhQuerySales.getShopPartner(item._id).then((customer) => {
                    if (customer) {
                        this.modalCustomer['id_customer'] = customer['_id'];
                        this.modalCustomer['existShop'] = true;
                    }
                    this.modalCustomer['info'] = item;
                    this.modalCustomer['visible'] = true;
                });
                break;
            }
        }
    }
    /**
     * Cập nhật shop
     */
    updateInfoTiki() {
        this.modalCustomer['loading'] = true;
        let data = {
            id_customer: this.modalCustomer['id_customer'],
            date: new Date().toISOString()
        };
        this.vhQuerySales.updateShop(this.modalCustomer['info']._id, data)
            .then((bool) => {
            if (bool) {
                this.vhComponent.alertMessageDesktop("success", this.lang.translate("Update successfully"));
            }
            else
                this.vhComponent.alertMessageDesktop("error", this.lang.translate("Update failed"));
            this.modalCustomer['loading'] = false;
            this.modalCustomer['visible'] = false;
        }).catch(err => console.error(err));
    }
    cancelModalUpdateInfo() {
        this.modalCustomer['visible'] = false;
        this.goBack();
    }
    search(value) {
        if (value.length) {
            let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
            this.customerShow = this.vhAlgorithm.searchList(val, this.listCustomer, ['phone', 'name']);
        }
        else
            this.customerShow = [...this.listCustomer];
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce']);
    }
    gotoAffiliateProduct() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/affiliate-product']);
    }
    // gotoSettings() {
    //   this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/settings'])
    // }
    gotoOrderStatus() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/order-status']);
    }
    gotoSellingPrice() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/update-selling-price']);
    }
    gotoUpdateStock() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/update-stock']);
    }
    gotoReturnRefund() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/return-refund']);
    }
    gotoCashflow() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/cashflow']);
    }
    gotoControlExportGoods() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/export-goods']);
    }
    gotoControlIssueInvoice() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice']);
    }
    gotoControl() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/control']);
    }
    gotoProductOnShop() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/product-on-shop']);
    }
    gotoControlReport() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/report']);
    }
    gotoAutoSale() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/auto-sale']);
    }
    gotoIssueByTiki() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/e-invoice-tiki']);
    }
    gotoIssueBySales365() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/e-invoice-sales365']);
    }
}
TikiComponent.ɵfac = function TikiComponent_Factory(t) { return new (t || TikiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm)); };
TikiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TikiComponent, selectors: [["app-tiki"]], decls: 135, vars: 47, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nz-row", "", 1, "cus-row"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "item-cus"], [1, "ng-item", "center-all-content", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["src", "assets/icon/management/ecommerce/order-status.svg"], [1, "center-text", "medium-size"], ["src", "assets/icon/management/ecommerce/returns-refund.svg"], ["src", "assets/icon/management/ecommerce/updating-stock.svg"], ["src", "assets/icon/management/ecommerce/update-selling-price.svg"], ["src", "assets/icon/management/ecommerce/affiliate-product.svg"], ["src", "assets/icon/management/ecommerce/product-on-sendo.svg"], ["src", "assets/icon/management/ecommerce/return-control-goods.svg"], ["src", "assets/icon/management/ecommerce/issue-invoice.svg"], ["src", "assets/icon/management/report.svg"], ["src", "assets/icon/management/ecommerce/auto-sale.svg"], ["src", "assets/icon/management/einvoice.svg"], ["nzWidth", "400px", 3, "nzMaskClosable", "nzClosable", "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSettings", ""], ["nz-col", "", "nzSpan", "24", 1, "update-info-modal"], ["nzShowSearch", "", 1, "cus-select", 3, "nzDisabled", "ngModel", "nzServerSearch", "nzPlaceHolder", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "cus-select-note"], [3, "nzValue", "nzLabel"], ["nz-button", "", 1, "nz-hover-border", 3, "click"], ["nz-button", "", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white) !important", 3, "disabled", "nzLoading", "click"]], template: function TikiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_11_listener() { return ctx.gotoOrderStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_21_listener() { return ctx.gotoReturnRefund(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_31_listener() { return ctx.gotoUpdateStock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_41_listener() { return ctx.gotoSellingPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_51_listener() { return ctx.gotoAffiliateProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_61_listener() { return ctx.gotoProductOnShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_71_listener() { return ctx.gotoControl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_81_listener() { return ctx.gotoControlIssueInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_91_listener() { return ctx.gotoControlReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_101_listener() { return ctx.gotoAutoSale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_111_listener() { return ctx.gotoIssueByTiki(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TikiComponent_Template_div_click_121_listener() { return ctx.gotoIssueBySales365(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "nz-modal", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function TikiComponent_Template_nz_modal_nzVisibleChange_130_listener($event) { return (ctx.modalCustomer["visible"] = $event); })("nzOnCancel", function TikiComponent_Template_nz_modal_nzOnCancel_130_listener() { return (ctx.modalCustomer["visible"] = false); })("nzOnOk", function TikiComponent_Template_nz_modal_nzOnOk_130_listener() { return ctx.updateInfoTiki(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, TikiComponent_ng_container_132_Template, 15, 17, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, TikiComponent_ng_template_133_Template, 6, 8, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 19, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Tiki");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 21, "Order status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 23, "Returns/refund"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 25, "Update stock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 27, "Update price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 29, "Product link"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 31, "Product on Tiki"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](79, 33, "Money-Goods control"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](89, 35, "Issue invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](99, 37, "Report"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](109, 39, "Auto sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](119, 41, "Xu\u1EA5t h\u00F3a \u0111\u01A1n t\u1EEB s\u00E0n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](129, 43, "Xu\u1EA5t h\u00F3a \u0111\u01A1n t\u1EEB ph\u1EA7n m\u1EC1m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMaskClosable", false)("nzClosable", false)("nzFooter", _r1)("nzVisible", ctx.modalCustomer["visible"])("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](131, 45, "Tiki configuration"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000040;\n  border-radius: 15px;\n  flex-direction: column;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .item-cus[_ngcontent-%COMP%] {\n  padding: 8px;\n  height: 24vh;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.update-info-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.update-info-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.update-info-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  border-radius: 4px;\n}\n.update-info-modal[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.update-info-modal[_ngcontent-%COMP%]   .cus-select-note[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n  font-size: 0.8rem;\n  margin-top: 12px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpa2kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR1I7QUFGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUlaO0FBSFk7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7QUFLaEI7QUFESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksZ0NBQUE7QUFHWjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFBSTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFUiIsImZpbGUiOiJ0aWtpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmN1cy1yb3cge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAubmctaXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pdGVtLWN1cyB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGhlaWdodDogMjR2aDtcclxuICAgIH1cclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi51cGRhdGUtaW5mby1tb2RhbCB7XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgbnotc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jdXMtc2VsZWN0LW5vdGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 40098:
/*!*****************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/tiki.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TikiModule": () => (/* binding */ TikiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _tiki_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiki.component */ 64302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print/print.component */ 7403);
/* harmony import */ var _print_k80_k80_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print/k80/k80.component */ 2654);
/* harmony import */ var _print_a4_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print/a4/a4.component */ 4835);
/* harmony import */ var _print_a5_a5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print/a5/a5.component */ 80130);
/* harmony import */ var _print_b6_b6_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print/b6/b6.component */ 71670);
/* harmony import */ var _print_b7_b7_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print/b7/b7.component */ 88399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);















const routes = [
    {
        path: '',
        component: _tiki_component__WEBPACK_IMPORTED_MODULE_0__.TikiComponent
    },
    {
        path: 'print',
        component: _print_print_component__WEBPACK_IMPORTED_MODULE_2__.PrintComponent
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 34787)).then(m => m.SettingsModule)
    },
    {
        path: 'affiliate-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_affiliate-product_affiliate-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./affiliate-product/affiliate-product.module */ 65734)).then(m => m.AffiliateProductModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 34787)).then(m => m.SettingsModule)
    },
    {
        path: 'order-status',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_order-status_order-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-status/order-status.module */ 986)).then(m => m.OrderStatusModule)
    },
    {
        path: 'update-selling-price',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_update-selling-price_update-selling-price_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-selling-price/update-selling-price.module */ 88173)).then(m => m.UpdateSellingPriceModule)
    },
    {
        path: 'update-stock',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_update-stock_update-stock_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-stock/update-stock.module */ 8520)).then(m => m.UpdateStockModule)
    },
    {
        path: 'return-refund',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_return-refund_return-refund_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./return-refund/return-refund.module */ 80437)).then(m => m.ReturnRefundModule)
    },
    {
        path: 'issue-invoice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_issue-invoice_issue-invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./issue-invoice/issue-invoice.module */ 44283)).then(m => m.IssueInvoiceModule)
    },
    {
        path: 'product-on-shop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_modal-link-product-ecommerce_modal-lin-a5707d"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_tiki_product-on-shop_product-on-shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-on-shop/product-on-shop.module */ 49820)).then(m => m.ProductOnShopModule)
    },
    {
        path: 'control',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_control_control_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./control/control.module */ 15580)).then(m => m.ControlModule)
    },
    {
        path: 'auto-sale',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_auto-sale_auto-sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auto-sale/auto-sale.module */ 18620)).then(m => m.AutoSaleModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_tiki_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report/report.module */ 10629)).then(m => m.ReportModule)
    },
    {
        path: 'e-invoice-tiki',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_modal-link-product-ecommerce_modal-lin-a5707d"), __webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_edit-customer-tax_edit-customer-tax_mo-70f626"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_tiki_e-invoice-tiki_e-invoice-tiki_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice-tiki/e-invoice-tiki.module */ 26196)).then(m => m.EInvoiceTikiModule)
    },
    {
        path: 'e-invoice-sales365',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_tiki_e-invoice-sales365_e-invoice-sales365_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice-sales365/e-invoice-sales365.module */ 34472)).then(m => m.EInvoiceSales365Module)
    }
];
class TikiModule {
}
TikiModule.ɵfac = function TikiModule_Factory(t) { return new (t || TikiModule)(); };
TikiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TikiModule });
TikiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TikiModule, { declarations: [_tiki_component__WEBPACK_IMPORTED_MODULE_0__.TikiComponent, _print_print_component__WEBPACK_IMPORTED_MODULE_2__.PrintComponent, _print_k80_k80_component__WEBPACK_IMPORTED_MODULE_3__.K80Component, _print_a4_a4_component__WEBPACK_IMPORTED_MODULE_4__.A4Component, _print_a5_a5_component__WEBPACK_IMPORTED_MODULE_5__.A5Component, _print_b6_b6_component__WEBPACK_IMPORTED_MODULE_6__.B6Component, _print_b7_b7_component__WEBPACK_IMPORTED_MODULE_7__.B7Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_tiki_tiki_module_ts.js.map