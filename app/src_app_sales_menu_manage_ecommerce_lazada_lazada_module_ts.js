"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_lazada_lazada_module_ts"],{

/***/ 62162:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada-printer/a5/a5.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A5Component": () => (/* binding */ A5Component)
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
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function A5Component_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.variation);
} }
class A5Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
        this.vhAlgorithm.vhcurrencyunit_symbol;
    }
    ngAfterViewChecked() {
        // this.renderBarcode('#barcode-lazada-order-id', this.bill.order_id)
        if (document.querySelector('#barcode-tracking-code')) {
            this.renderBarcode('#barcode-lazada-order-id', this.bill.order_id);
            this.renderBarcode('#barcode-tracking-code', this.bill.order_items[0].tracking_code);
        }
    }
    renderBarcode(id, value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
                format: "CODE128",
                lineColor: "#000",
                height: 60,
                displayValue: false,
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "lazada-a5",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.a5 {max-width: 148mm;}' +
                '.w100 { width: 100%;}' +
                '.a5 .content { border: 2px solid rgb(19, 19, 19);border-radius: 4px;font-size: 9pt;}' +
                '.a5 .content .lazada-order{width: 100%;}' +
                '.a5 .content .lazada-order .lazada-order-col-1{border-right: 1px dotted rgb(51, 51, 51);}' +
                '.a5 .content .lazada-order .lazada-order-col-1 h4{font-size: 7pt;}' +
                '.a5 .content .lazada-order tr,.a5 .content .lazada-order td{border: 1px solid black;padding: 4px 2px;}' +
                '.a5 .content .lazada-info{width: 100%;}' +
                '.a5 .content .lazada-info-col-1{width: 50%;}' +
                '.a5 .content .lazada-info-col-2{width: 50%;}' +
                '.a5 .content .lazada-info-col-1 table,.a5 .content .lazada-info-col-2 table{width: 100%;}' +
                '.a5 .content .lazada-info-col-1 table tr,.a5 .content .lazada-info-col-2 table tr{border: 1px solid black;padding: 4px 2px;}' +
                '.a5 .content .lazada-info-col-1 table td,.a5 .content .lazada-info-col-2 table td{border: 1px solid black;padding: 4px 2px;}' +
                '.a5 .content .lazada-info-col-1 span,.a5 .content .lazada-info-col-2 span{display : block;}' +
                '.a5 .content .lazada-info-col-1 {vertical-align: top;}' +
                '.a5 .content .lazada-items,.a5 .content .lazada-total{font-size: 8pt;width: 100%;}' +
                '.a5 .content .lazada-items tr,.a5 .content .lazada-total tr{border: 1px solid black;padding: 4px 2px;}' +
                '.a5 .content .lazada-items td,.a5 .content .lazada-total td{border: 1px solid black;padding: 4px 2px;}' +
                '.a5 .content .lazada-total{font-size: 7pt}' +
                '.a5 .content .lazada-barcode{width: 100%;text-align: center;}'
        });
    }
}
A5Component.ɵfac = function A5Component_Factory(t) { return new (t || A5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
A5Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: A5Component, selectors: [["app-a5"]], inputs: { bill: "bill" }, decls: 75, vars: 33, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "lazada-a5", 1, "a5"], [1, "content"], [1, "lazada-order", 2, "border-collapse", "collapse"], ["width", "100px", "src", "assets/img/lazada_logistics_image.webp", "alt", ""], [2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], [2, "font-size", "1.5rem"], [1, "lazada-order-col-1"], ["colspan", "2"], ["id", "barcode-lazada-order-id", 1, "barcode"], [2, "border-bottom", "1px solid"], [1, "w100", 2, "display", "grid", "justify-items", "center", "border-bottom", "1px solid"], ["id", "barcode-tracking-code"], [2, "text-align", "center"], [2, "text-align", "center", "border-bottom", "1px solid"], [2, "font-size", "2rem"], [1, "lazada-items"], [2, "border", "none"], ["style", "border: none;", 4, "ngFor", "ngForOf"], [1, "lazada-barcode", 2, "border-collapse", "collapse"], [2, "word-break", "break-all"]], template: function A5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function A5Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "PU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " KH\u00D4NG M\u1EDE G\u00D3I H\u00C0NG V\u00C0 KH\u00D4NG \u0110\u1ED2NG KI\u1EC2M (NO MUTUAL CHECK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, A5Component_tr_68_Template, 10, 3, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " (**) Ng\u01B0\u1EDDi g\u1EEDi cam k\u1EBFt ph\u00E1t h\u00E0nh v\u00E0 g\u1EEDi ho\u00E1 \u0111\u01A1n VAT cho ng\u01B0\u1EDDi nh\u1EADn \u0111\u00FAng theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt. C\u00E1c \u0111i\u1EC1u kho\u1EA3n kh\u00E1c v\u1EC1 g\u1EEDi, nh\u1EADn \u0111\u01A1n h\u00E0ng \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng nh\u01B0 quy \u0111\u1ECBnh t\u1EA1i Lazada.vn v\u00E0 Lu\u1EADt B\u01B0u Ch\u00EDnh. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].shipping_provider_type.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ng\u00E0y \u0111\u1EB7t: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 18, ctx.bill.created_at, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 \u0111\u01A1n: ", ctx.bill.order_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 21, "Paid by seller"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.address_store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].tracking_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 23, "Receiver"), ":", ctx.bill.address_shipping.first_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SDT: ", ctx.bill.address_shipping.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 ti\u1EC1n thu h\u1ED9: ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.bill.total_amount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 25, "Product_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 27, "Qty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 29, "Goods code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 31, "Classification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bill["order_items"]);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".a5[_ngcontent-%COMP%] {\n  max-width: 148mm;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%] {\n  border-right: 1px dotted #333333;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  width: 100%;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-barcode[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px dotted black;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImE1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7QUFHUjtBQUZRO0VBQ0UsZ0NBQUE7QUFJVjtBQUhVO0VBQ0UsaUJBQUE7QUFLWjtBQUZROztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJVjtBQURNO0VBQ0UsV0FBQTtBQUdSO0FBRlE7RUFFRSxVQUFBO0FBR1Y7QUFGVTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUlaO0FBSFk7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNZDtBQUhVO0VBQ0UsY0FBQTtBQUtaO0FBRlE7RUFDRSxtQkFBQTtBQUlWO0FBRE07O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FBR1I7QUFGUTs7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNVjtBQUhNO0VBQ0UsaUJBQUE7QUFLUjtBQUhNO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFLUjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFGRTtFQUNJLFdBQUE7QUFLTiIsImZpbGUiOiJhNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hNSB7XHJcbiAgICBtYXgtd2lkdGg6IDE0OG1tO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIC5sYXphZGEtb3JkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYtY29sLTEge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkIHJnYig1MSwgNTEsIDUxKTtcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLWNvbC0xLFxyXG4gICAgICAgICYtY29sLTIge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIHRyLFxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbC0xIHtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sYXphZGEtaXRlbXMsXHJcbiAgICAgIC5sYXphZGEtdG90YWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS10b3RhbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS1iYXJjb2RlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4tcHJpbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLncxMDB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 86214:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada-printer/a6/a6.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A6Component": () => (/* binding */ A6Component)
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
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function A6Component_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.variation);
} }
class A6Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (document.querySelector('#barcode-tracking-code')) {
            this.renderBarcode('#barcode-lazada-order-id', this.bill.order_id);
            this.renderBarcode('#barcode-tracking-code', this.bill.order_items[0].tracking_code);
        }
    }
    renderBarcode(id, value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
                format: "CODE128",
                lineColor: "#000",
                height: 60,
                displayValue: false,
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "lazada-a6",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.a6 {max-width: 105mm;}' +
                '.a6 .content { border: 2px solid rgb(19, 19, 19);border-radius: 4px;font-size: 7pt;}' +
                '.a6 .content .lazada-order{width: 100%;}' +
                '.a6 .content .lazada-order .lazada-order-col-1{border-right: 1px dotted rgb(51, 51, 51);}' +
                '.a6 .content .lazada-order .lazada-order-col-1 h4{font-size: 7pt;}' +
                '.a6 .content .lazada-order tr,.a6 .content .lazada-order td{border: 1px solid black;padding: 4px 2px;}' +
                '.a6 .content .lazada-info{width: 100%;}' +
                '.a6 .content .lazada-info-col-1{width: 50%;}' +
                '.a6 .content .lazada-info-col-2{width: 50%;}' +
                '.a6 .content .lazada-info-col-1 table,.a6 .content .lazada-info-col-2 table{width: 100%;}' +
                '.a6 .content .lazada-info-col-1 table tr,.a6 .content .lazada-info-col-2 table tr{border: 1px solid black;padding: 4px 2px;}' +
                '.a6 .content .lazada-info-col-1 table td,.a6 .content .lazada-info-col-2 table td{border: 1px solid black;padding: 4px 2px;}' +
                '.a6 .content .lazada-info-col-1 span,.a6 .content .lazada-info-col-2 span{display : block;}' +
                '.a6 .content .lazada-info-col-1 {vertical-align: top;}' +
                '.a6 .content .lazada-items,.a6 .content .lazada-total{font-size: 5pt;width: 100%;}' +
                '.a6 .content .lazada-items tr,.a6 .content .lazada-total tr{border: 1px solid black;padding: 4px 2px;}' +
                '.a6 .content .lazada-items td,.a6 .content .lazada-total td{border: 1px solid black;padding: 4px 2px;}' +
                '.a6 .content .lazada-total{font-size: 7pt}' +
                '.a6 .content .lazada-barcode{width: 100%;text-align: center;}'
        });
    }
}
A6Component.ɵfac = function A6Component_Factory(t) { return new (t || A6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
A6Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: A6Component, selectors: [["app-a6"]], inputs: { bill: "bill" }, decls: 75, vars: 33, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "lazada-a6", 1, "a6"], [1, "content"], [1, "lazada-order", 2, "border-collapse", "collapse"], ["width", "100px", "src", "assets/img/lazada_logistics_image.webp", "alt", ""], [2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], [2, "font-size", "1.5rem"], [1, "lazada-order-col-1"], ["colspan", "2"], ["id", "barcode-lazada-order-id", 1, "barcode", 2, "width", "100%"], [2, "border-bottom", "1px solid"], [1, "w100", 2, "display", "grid", "justify-items", "center", "border-bottom", "1px solid"], ["id", "barcode-tracking-code", 2, "width", "100%"], [2, "text-align", "center"], [2, "text-align", "center", "border-bottom", "1px solid"], [2, "font-size", "1.8rem"], [1, "lazada-items"], [2, "border", "none"], ["style", "border: none;", 4, "ngFor", "ngForOf"], [1, "lazada-barcode", 2, "border-collapse", "collapse"], [2, "word-break", "break-all"]], template: function A6Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function A6Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "PU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " KH\u00D4NG M\u1EDE G\u00D3I H\u00C0NG V\u00C0 KH\u00D4NG \u0110\u1ED2NG KI\u1EC2M (NO MUTUAL CHECK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, A6Component_tr_68_Template, 10, 3, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " (**) Ng\u01B0\u1EDDi g\u1EEDi cam k\u1EBFt ph\u00E1t h\u00E0nh v\u00E0 g\u1EEDi ho\u00E1 \u0111\u01A1n VAT cho ng\u01B0\u1EDDi nh\u1EADn \u0111\u00FAng theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt. C\u00E1c \u0111i\u1EC1u kho\u1EA3n kh\u00E1c v\u1EC1 g\u1EEDi, nh\u1EADn \u0111\u01A1n h\u00E0ng \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng nh\u01B0 quy \u0111\u1ECBnh t\u1EA1i Lazada.vn v\u00E0 Lu\u1EADt B\u01B0u Ch\u00EDnh. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].shipping_provider_type.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ng\u00E0y \u0111\u1EB7t: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 18, ctx.bill.created_at, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 \u0111\u01A1n: ", ctx.bill.order_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 21, "Paid by seller"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.address_store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].tracking_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 23, "Receiver"), ":", ctx.bill.address_shipping.first_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SDT: ", ctx.bill.address_shipping.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 ti\u1EC1n thu h\u1ED9: ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.bill.total_amount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 25, "Product_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 27, "Qty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 29, "Goods code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 31, "Classification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bill["order_items"]);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".a6[_ngcontent-%COMP%] {\n  max-width: 105mm;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n  font-size: 0.8rem;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%] {\n  border-right: 1px dotted #333333;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-barcode[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px dotted black;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImE2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7QUFHUjtBQUZRO0VBQ0UsZ0NBQUE7QUFJVjtBQUhVO0VBQ0UsaUJBQUE7QUFLWjtBQUZROztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJVjtBQURNO0VBQ0UsV0FBQTtBQUdSO0FBRlE7RUFFRSxVQUFBO0FBR1Y7QUFGVTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUlaO0FBSFk7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNZDtBQUhVO0VBQ0UsY0FBQTtBQUtaO0FBRlE7RUFDRSxtQkFBQTtBQUlWO0FBRE07O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FBR1I7QUFGUTs7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNVjtBQUhNO0VBQ0UsaUJBQUE7QUFLUjtBQUhNO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFLUjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFGRTtFQUNJLFdBQUE7QUFLTiIsImZpbGUiOiJhNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hNiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwNW1tO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIC5sYXphZGEtb3JkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYtY29sLTEge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkIHJnYig1MSwgNTEsIDUxKTtcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLWNvbC0xLFxyXG4gICAgICAgICYtY29sLTIge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIHRyLFxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbC0xIHtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sYXphZGEtaXRlbXMsXHJcbiAgICAgIC5sYXphZGEtdG90YWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS10b3RhbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS1iYXJjb2RlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4tcHJpbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLncxMDB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 41199:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada-printer/b6/b6.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B6Component": () => (/* binding */ B6Component)
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
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function B6Component_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.variation);
} }
class B6Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (document.querySelector('#barcode-tracking-code')) {
            this.renderBarcode('#barcode-lazada-order-id', this.bill.order_id);
            this.renderBarcode('#barcode-tracking-code', this.bill.order_items[0].tracking_code);
        }
    }
    renderBarcode(id, value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
                format: "CODE128",
                lineColor: "#000",
                height: 60,
                displayValue: false,
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "lazada-b6",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.b6 {max-width: 125mm;}' +
                '.b6 .content { border: 2px solid rgb(19, 19, 19);border-radius: 4px;font-size: 7pt;}' +
                '.b6 .content .lazada-order{width: 100%;}' +
                '.b6 .content .lazada-order .lazada-order-col-1{border-right: 1px dotted rgb(51, 51, 51);}' +
                '.b6 .content .lazada-order .lazada-order-col-1 h4{font-size: 7pt;}' +
                '.b6 .content .lazada-order tr,.b6 .content .lazada-order td{border: 1px solid black;padding: 4px 2px;}' +
                '.b6 .content .lazada-info{width: 100%;}' +
                '.b6 .content .lazada-info-col-1{width: 50%;}' +
                '.b6 .content .lazada-info-col-2{width: 50%;}' +
                '.b6 .content .lazada-info-col-1 table,.b6 .content .lazada-info-col-2 table{width: 100%;}' +
                '.b6 .content .lazada-info-col-1 table tr,.b6 .content .lazada-info-col-2 table tr{border: 1px solid black;padding: 4px 2px;}' +
                '.b6 .content .lazada-info-col-1 table td,.b6 .content .lazada-info-col-2 table td{border: 1px solid black;padding: 4px 2px;}' +
                '.b6 .content .lazada-info-col-1 span,.b6 .content .lazada-info-col-2 span{display : block;}' +
                '.b6 .content .lazada-info-col-1 {vertical-align: top;}' +
                '.b6 .content .lazada-items,.b6 .content .lazada-total{font-size: 5pt;width: 100%;}' +
                '.b6 .content .lazada-items tr,.b6 .content .lazada-total tr{border: 1px solid black;padding: 4px 2px;}' +
                '.b6 .content .lazada-items td,.b6 .content .lazada-total td{border: 1px solid black;padding: 4px 2px;}' +
                '.b6 .content .lazada-total{font-size: 7pt}' +
                '.b6 .content .lazada-barcode{width: 100%;text-align: center;}'
        });
    }
}
B6Component.ɵfac = function B6Component_Factory(t) { return new (t || B6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
B6Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: B6Component, selectors: [["app-b6"]], inputs: { bill: "bill" }, decls: 75, vars: 33, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "lazada-b6", 1, "b6"], [1, "content"], [1, "lazada-order", 2, "border-collapse", "collapse"], ["width", "100px", "src", "assets/img/lazada_logistics_image.webp", "alt", ""], [2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], [2, "font-size", "1.5rem"], [1, "lazada-order-col-1"], ["colspan", "2"], ["id", "barcode-lazada-order-id", 1, "barcode", 2, "width", "100%"], [2, "border-bottom", "1px solid"], [1, "w100", 2, "display", "grid", "justify-items", "center", "border-bottom", "1px solid"], ["id", "barcode-tracking-code", 2, "width", "100%"], [2, "text-align", "center"], [2, "text-align", "center", "border-bottom", "1px solid"], [2, "font-size", "1.8rem"], [1, "lazada-items"], [2, "border", "none"], ["style", "border: none;", 4, "ngFor", "ngForOf"], [1, "lazada-barcode", 2, "border-collapse", "collapse"], [2, "word-break", "break-all"]], template: function B6Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function B6Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "PU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " KH\u00D4NG M\u1EDE G\u00D3I H\u00C0NG V\u00C0 KH\u00D4NG \u0110\u1ED2NG KI\u1EC2M (NO MUTUAL CHECK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, B6Component_tr_68_Template, 10, 3, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " (**) Ng\u01B0\u1EDDi g\u1EEDi cam k\u1EBFt ph\u00E1t h\u00E0nh v\u00E0 g\u1EEDi ho\u00E1 \u0111\u01A1n VAT cho ng\u01B0\u1EDDi nh\u1EADn \u0111\u00FAng theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt. C\u00E1c \u0111i\u1EC1u kho\u1EA3n kh\u00E1c v\u1EC1 g\u1EEDi, nh\u1EADn \u0111\u01A1n h\u00E0ng \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng nh\u01B0 quy \u0111\u1ECBnh t\u1EA1i Lazada.vn v\u00E0 Lu\u1EADt B\u01B0u Ch\u00EDnh. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].shipping_provider_type.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ng\u00E0y \u0111\u1EB7t: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 18, ctx.bill.created_at, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 \u0111\u01A1n: ", ctx.bill.order_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 21, "Paid by seller"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.address_store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].tracking_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 23, "Receiver"), ":", ctx.bill.address_shipping.first_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SDT: ", ctx.bill.address_shipping.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 ti\u1EC1n thu h\u1ED9: ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.bill.total_amount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 25, "Product_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 27, "Qty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 29, "Goods code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 31, "Classification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bill["order_items"]);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".b6[_ngcontent-%COMP%] {\n  max-width: 125mm;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n  font-size: 0.8rem;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%] {\n  border-right: 1px dotted #333333;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-barcode[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px dotted black;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7QUFHUjtBQUZRO0VBQ0UsZ0NBQUE7QUFJVjtBQUhVO0VBQ0UsaUJBQUE7QUFLWjtBQUZROztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJVjtBQURNO0VBQ0UsV0FBQTtBQUdSO0FBRlE7RUFFRSxVQUFBO0FBR1Y7QUFGVTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUlaO0FBSFk7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNZDtBQUhVO0VBQ0UsY0FBQTtBQUtaO0FBRlE7RUFDRSxtQkFBQTtBQUlWO0FBRE07O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FBR1I7QUFGUTs7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNVjtBQUhNO0VBQ0UsaUJBQUE7QUFLUjtBQUhNO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFLUjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFGRTtFQUNJLFdBQUE7QUFLTiIsImZpbGUiOiJiNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iNiB7XHJcbiAgICBtYXgtd2lkdGg6IDEyNW1tO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIC5sYXphZGEtb3JkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYtY29sLTEge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkIHJnYig1MSwgNTEsIDUxKTtcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLWNvbC0xLFxyXG4gICAgICAgICYtY29sLTIge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIHRyLFxyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbC0xIHtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sYXphZGEtaXRlbXMsXHJcbiAgICAgIC5sYXphZGEtdG90YWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS10b3RhbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxhemFkYS1iYXJjb2RlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4tcHJpbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLncxMDB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 17245:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada-printer/b7/b7.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7Component": () => (/* binding */ B7Component)
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
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function B7Component_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.variation);
} }
class B7Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (document.querySelector('#barcode-tracking-code')) {
            this.renderBarcode('#barcode-lazada-order-id', this.bill.order_id);
            this.renderBarcode('#barcode-tracking-code', this.bill.order_items[0].tracking_code);
        }
    }
    renderBarcode(id, value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
                format: "CODE128",
                lineColor: "#000",
                height: 60,
                displayValue: false,
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "lazada-b7",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.b7 {max-width: 88mm;}' +
                '.b7 .content { border: 2px solid rgb(19, 19, 19);border-radius: 4px;font-size: 7pt;}' +
                '.b7 .content .lazada-order{width: 100%;}' +
                '.b7 .content .lazada-order .lazada-order-col-1{border-right: 1px dotted rgb(51, 51, 51);}' +
                '.b7 .content .lazada-order .lazada-order-col-1 h4{font-size: 7pt;}' +
                '.b7 .content .lazada-order tr,.b7 .content .lazada-order td{border: 1px solid black;padding: 4px 2px;}' +
                '.b7 .content .lazada-info{width: 100%;}' +
                '.b7 .content .lazada-info-col-1{width: 50%;}' +
                '.b7 .content .lazada-info-col-2{width: 50%;}' +
                '.b7 .content .lazada-info-col-1 table,.b7 .content .lazada-info-col-2 table{width: 100%;}' +
                '.b7 .content .lazada-info-col-1 table tr,.b7 .content .lazada-info-col-2 table tr{border: 1px solid black;padding: 4px 2px;}' +
                '.b7 .content .lazada-info-col-1 table td,.b7 .content .lazada-info-col-2 table td{border: 1px solid black;padding: 4px 2px;}' +
                '.b7 .content .lazada-info-col-1 span,.b7 .content .lazada-info-col-2 span{display : block;}' +
                '.b7 .content .lazada-info-col-1 {vertical-align: top;}' +
                '.b7 .content .lazada-items,.b7 .content .lazada-total{font-size: 5pt;width: 100%;}' +
                '.b7 .content .lazada-items tr,.b7 .content .lazada-total tr{border: 1px solid black;padding: 4px 2px;}' +
                '.b7 .content .lazada-items td,.b7 .content .lazada-total td{border: 1px solid black;padding: 4px 2px;}' +
                '.b7 .content .lazada-total{font-size: 7pt}' +
                '.b7 .content .lazada-barcode{width: 100%;text-align: center;}'
        });
    }
}
B7Component.ɵfac = function B7Component_Factory(t) { return new (t || B7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
B7Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: B7Component, selectors: [["app-b7"]], inputs: { bill: "bill" }, decls: 75, vars: 33, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "lazada-b7", 1, "b7"], [1, "content"], [1, "lazada-order", 2, "border-collapse", "collapse"], ["width", "100px", "src", "assets/img/lazada_logistics_image.webp", "alt", ""], [2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], [2, "font-size", "1.5rem"], [1, "lazada-order-col-1"], ["colspan", "2"], ["id", "barcode-lazada-order-id", 1, "barcode", 2, "width", "100%"], [2, "border-bottom", "1px solid"], [1, "w100", 2, "display", "grid", "justify-items", "center", "border-bottom", "1px solid"], ["id", "barcode-tracking-code", 2, "width", "100%"], [2, "text-align", "center"], [2, "text-align", "center", "border-bottom", "1px solid"], [2, "font-size", "1.8rem"], [1, "lazada-items"], [2, "border", "none"], ["style", "border: none;", 4, "ngFor", "ngForOf"], [1, "lazada-barcode", 2, "border-collapse", "collapse"], [2, "word-break", "break-all"]], template: function B7Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function B7Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "PU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " KH\u00D4NG M\u1EDE G\u00D3I H\u00C0NG V\u00C0 KH\u00D4NG \u0110\u1ED2NG KI\u1EC2M (NO MUTUAL CHECK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, B7Component_tr_68_Template, 10, 3, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " (**) Ng\u01B0\u1EDDi g\u1EEDi cam k\u1EBFt ph\u00E1t h\u00E0nh v\u00E0 g\u1EEDi ho\u00E1 \u0111\u01A1n VAT cho ng\u01B0\u1EDDi nh\u1EADn \u0111\u00FAng theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt. C\u00E1c \u0111i\u1EC1u kho\u1EA3n kh\u00E1c v\u1EC1 g\u1EEDi, nh\u1EADn \u0111\u01A1n h\u00E0ng \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng nh\u01B0 quy \u0111\u1ECBnh t\u1EA1i Lazada.vn v\u00E0 Lu\u1EADt B\u01B0u Ch\u00EDnh. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].shipping_provider_type.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ng\u00E0y \u0111\u1EB7t: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 18, ctx.bill.created_at, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 \u0111\u01A1n: ", ctx.bill.order_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 21, "Paid by seller"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.address_store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].tracking_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 23, "Receiver"), ":", ctx.bill.address_shipping.first_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SDT: ", ctx.bill.address_shipping.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 ti\u1EC1n thu h\u1ED9: ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.bill.total_amount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 25, "Product_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 27, "Qty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 29, "Goods code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 31, "Classification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bill["order_items"]);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".b7[_ngcontent-%COMP%] {\n  max-width: 88mm;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n  font-size: 0.8rem;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%] {\n  border-right: 1px dotted #333333;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-barcode[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px dotted black;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKO0FBQUk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQURNO0VBQ0UsV0FBQTtBQUdSO0FBRlE7RUFDRSxnQ0FBQTtBQUlWO0FBSFU7RUFDRSxpQkFBQTtBQUtaO0FBRlE7O0VBRUUsdUJBQUE7RUFDQSxnQkFBQTtBQUlWO0FBRE07RUFDRSxXQUFBO0FBR1I7QUFGUTtFQUVFLFVBQUE7QUFHVjtBQUZVO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBSVo7QUFIWTs7O0VBRUUsdUJBQUE7RUFDQSxnQkFBQTtBQU1kO0FBSFU7RUFDRSxjQUFBO0FBS1o7QUFGUTtFQUNFLG1CQUFBO0FBSVY7QUFETTs7RUFFRSxpQkFBQTtFQUNBLFdBQUE7QUFHUjtBQUZROzs7O0VBRUUsdUJBQUE7RUFDQSxnQkFBQTtBQU1WO0FBSE07RUFDRSxpQkFBQTtBQUtSO0FBSE07RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQUtSO0FBREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSjtBQUZFO0VBQ0ksV0FBQTtBQUtOIiwiZmlsZSI6ImI3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmI3IHtcclxuICAgIG1heC13aWR0aDogODhtbTtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAubGF6YWRhLW9yZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLWNvbC0xIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cixcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIHBhZGRpbmc6IDRweCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sYXphZGEtaW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJi1jb2wtMSxcclxuICAgICAgICAmLWNvbC0yIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICB0cixcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb2wtMSB7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGF6YWRhLWl0ZW1zLFxyXG4gICAgICAubGF6YWRhLXRvdGFsIHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0cixcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIHBhZGRpbmc6IDRweCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5sYXphZGEtdG90YWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5sYXphZGEtYmFyY29kZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLXByaW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIC53MTAwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 87609:
/*!****************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada-printer/k80/k80.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K80Component": () => (/* binding */ K80Component)
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
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function K80Component_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.variation);
} }
class K80Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.renderBarcode('#barcode-tracking-code', this.bill.order_items[0].tracking_code);
        this.renderBarcode('#barcode-lazada-order-id', this.bill.order_id);
    }
    renderBarcode(id, value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(id, value, {
                format: "CODE128",
                lineColor: "#000",
                height: 60,
                displayValue: false,
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "lazada-k80",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.k80 {max-width: 79mm;}' +
                '.k80 .content { border: 2px solid rgb(19, 19, 19);border-radius: 4px;font-size: 7pt;}' +
                '.k80 .content .lazada-order{width: 100%;}' +
                '.k80 .content .lazada-order .lazada-order-col-1{border-right: 1px dotted rgb(51, 51, 51);}' +
                '.k80 .content .lazada-order .lazada-order-col-1 h4{font-size: 7pt;}' +
                '.k80 .content .lazada-order tr,.k80 .content .lazada-order td{border: 1px solid black;padding: 4px 2px;}' +
                '.k80 .content .lazada-info{width: 100%;}' +
                '.k80 .content .lazada-info-col-1{width: 50%;}' +
                '.k80 .content .lazada-info-col-2{width: 50%;}' +
                '.k80 .content .lazada-info-col-1 table,.k80 .content .lazada-info-col-2 table{width: 100%;}' +
                '.k80 .content .lazada-info-col-1 table tr,.k80 .content .lazada-info-col-2 table tr{border: 1px solid black;padding: 4px 2px;}' +
                '.k80 .content .lazada-info-col-1 table td,.k80 .content .lazada-info-col-2 table td{border: 1px solid black;padding: 4px 2px;}' +
                '.k80 .content .lazada-info-col-1 span,.k80 .content .lazada-info-col-2 span{display : block;}' +
                '.k80 .content .lazada-info-col-1 {vertical-align: top;}' +
                '.k80 .content .lazada-items,.k80 .content .lazada-total{font-size: 5pt;width: 100%;}' +
                '.k80 .content .lazada-items tr,.k80 .content .lazada-total tr{border: 1px solid black;padding: 4px 2px;}' +
                '.k80 .content .lazada-items td,.k80 .content .lazada-total td{border: 1px solid black;padding: 4px 2px;}' +
                '.k80 .content .lazada-total{font-size: 7pt}' +
                '.k80 .content .lazada-barcode{width: 100%;text-align: center;}'
        });
    }
}
K80Component.ɵfac = function K80Component_Factory(t) { return new (t || K80Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
K80Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: K80Component, selectors: [["app-k80"]], inputs: { bill: "bill" }, decls: 75, vars: 33, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "lazada-k80", 1, "k80"], [1, "content"], [1, "lazada-order", 2, "border-collapse", "collapse"], ["width", "100px", "src", "assets/img/lazada_logistics_image.webp", "alt", ""], [2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], [2, "font-size", "1.5rem"], [1, "lazada-order-col-1"], ["colspan", "2"], ["id", "barcode-lazada-order-id", 1, "barcode", 2, "width", "100%"], [2, "border-bottom", "1px solid"], [1, "w100", 2, "display", "grid", "justify-items", "center", "border-bottom", "1px solid"], ["id", "barcode-tracking-code", 2, "width", "100%"], [2, "text-align", "center"], [2, "text-align", "center", "border-bottom", "1px solid"], [1, "lazada-items"], [2, "border", "none"], ["style", "border: none;", 4, "ngFor", "ngForOf"], [1, "lazada-barcode", 2, "border-collapse", "collapse"], [2, "word-break", "break-all"]], template: function K80Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function K80Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "PU");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " KH\u00D4NG M\u1EDE G\u00D3I H\u00C0NG V\u00C0 KH\u00D4NG \u0110\u1ED2NG KI\u1EC2M (NO MUTUAL CHECK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, K80Component_tr_68_Template, 10, 3, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " (**) Ng\u01B0\u1EDDi g\u1EEDi cam k\u1EBFt ph\u00E1t h\u00E0nh v\u00E0 g\u1EEDi ho\u00E1 \u0111\u01A1n VAT cho ng\u01B0\u1EDDi nh\u1EADn \u0111\u00FAng theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt. C\u00E1c \u0111i\u1EC1u kho\u1EA3n kh\u00E1c v\u1EC1 g\u1EEDi, nh\u1EADn \u0111\u01A1n h\u00E0ng \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng nh\u01B0 quy \u0111\u1ECBnh t\u1EA1i Lazada.vn v\u00E0 Lu\u1EADt B\u01B0u Ch\u00EDnh. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].shipping_provider_type.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ng\u00E0y \u0111\u1EB7t: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 18, ctx.bill.created_at, "dd-MM-yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 \u0111\u01A1n: ", ctx.bill.order_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 21, "Paid by seller"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.address_store);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bill.order_items[0].tracking_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 23, "Receiver"), ":", ctx.bill.address_shipping.first_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SDT: ", ctx.bill.address_shipping.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("S\u1ED1 ti\u1EC1n thu h\u1ED9: ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.bill.total_amount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 25, "Product_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 27, "Qty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 29, "Goods code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 31, "Classification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bill["order_items"]);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTheadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".k80[_ngcontent-%COMP%] {\n  max-width: 79mm;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n  font-size: 0.8rem;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%] {\n  border-right: 1px dotted #333333;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order-col-1[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-order[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-info-col-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-items[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 4px 2px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-total[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .lazada-barcode[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px dotted black;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIms4MC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFESTtFQUNFLFdBQUE7QUFHTjtBQUZNO0VBQ0UsZ0NBQUE7QUFJUjtBQUhRO0VBQ0UsaUJBQUE7QUFLVjtBQUZNOztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQURJO0VBQ0UsV0FBQTtBQUdOO0FBRk07RUFFRSxVQUFBO0FBR1I7QUFGUTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUlWO0FBSFU7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNWjtBQUhRO0VBQ0UsY0FBQTtBQUtWO0FBRk07RUFDRSxtQkFBQTtBQUlSO0FBREk7O0VBRUUsaUJBQUE7RUFDQSxXQUFBO0FBR047QUFGTTs7OztFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFNUjtBQUhJO0VBQ0UsaUJBQUE7QUFLTjtBQUhJO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFLTjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUY7QUFGQTtFQUNJLFdBQUE7QUFLSiIsImZpbGUiOiJrODAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuazgwIHtcclxuICBtYXgtd2lkdGg6IDc5bW07XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAubGF6YWRhLW9yZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICYtY29sLTEge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRyLFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxhemFkYS1pbmZvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICYtY29sLTEsXHJcbiAgICAgICYtY29sLTIge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgdHIsXHJcbiAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWNvbC0xIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGF6YWRhLWl0ZW1zLFxyXG4gICAgLmxhemFkYS10b3RhbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdHIsXHJcbiAgICAgIHRkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiA0cHggMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGF6YWRhLXRvdGFsIHtcclxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcbiAgICAubGF6YWRhLWJhcmNvZGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idG4tcHJpbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTZweDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi53MTAwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4613:
/*!***********************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada-printer/lazada-printer.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazadaPrinterComponent": () => (/* binding */ LazadaPrinterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _k80_k80_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./k80/k80.component */ 87609);
/* harmony import */ var _a5_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a5/a5.component */ 62162);
/* harmony import */ var _a6_a6_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a6/a6.component */ 86214);
/* harmony import */ var _b6_b6_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./b6/b6.component */ 41199);
/* harmony import */ var _b7_b7_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./b7/b7.component */ 17245);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













class LazadaPrinterComponent {
    constructor(router) {
        var _a;
        this.router = router;
        this.root = this.router.getCurrentNavigation().extras.state;
        this.root['bill']['address_store'] = (_a = this.root['info_Shop'].data) === null || _a === void 0 ? void 0 : _a.address;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate([this.root.path], { state: this.root });
    }
}
LazadaPrinterComponent.ɵfac = function LazadaPrinterComponent_Factory(t) { return new (t || LazadaPrinterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
LazadaPrinterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LazadaPrinterComponent, selectors: [["app-lazada-printer"]], decls: 16, vars: 8, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "tabset-print-sendo", 1, "hideScrollbar"], ["nzTitle", "K80"], [3, "bill"], ["nzTitle", "A5"], ["nzTitle", "A6"], ["nzTitle", "B6"], ["nzTitle", "B7"]], template: function LazadaPrinterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LazadaPrinterComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-tabset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-k80", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nz-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-a5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "nz-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-a6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "nz-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-b6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "nz-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-b7", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bill", ctx.root.bill);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bill", ctx.root.bill);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bill", ctx.root.bill);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bill", ctx.root.bill);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bill", ctx.root.bill);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__.NzTabComponent, _k80_k80_component__WEBPACK_IMPORTED_MODULE_0__.K80Component, _a5_a5_component__WEBPACK_IMPORTED_MODULE_1__.A5Component, _a6_a6_component__WEBPACK_IMPORTED_MODULE_2__.A6Component, _b6_b6_component__WEBPACK_IMPORTED_MODULE_3__.B6Component, _b7_b7_component__WEBPACK_IMPORTED_MODULE_4__.B7Component], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\n  #tabset-print-sendo {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhemFkYS1wcmludGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFBQTtFQUNJLHlCQUFBO0FBR0oiLCJmaWxlIjoibGF6YWRhLXByaW50ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9IFxyXG59XHJcbjo6bmctZGVlcCAjdGFic2V0LXByaW50LXNlbmRvICB7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyBcclxufSJdfQ== */"] });


/***/ }),

/***/ 40220:
/*!************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazadaComponent": () => (/* binding */ LazadaComponent)
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
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function LazadaComponent_ng_container_132_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LazadaComponent_ng_container_132_input_8_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return (ctx_r5.modalCustomer["address"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, "Enter shop address + phone number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.modalCustomer["address"]);
} }
function LazadaComponent_ng_container_132_nz_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 30);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzValue", item_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r7.name, " - ", item_r7.phone, " ");
} }
function LazadaComponent_ng_container_132_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LazadaComponent_ng_container_132_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r8.modalCustomer["name"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LazadaComponent_ng_container_132_input_8_Template, 2, 4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LazadaComponent_ng_container_132_Template_nz_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r10.modalCustomer["id_customer"] = $event); })("nzOnSearch", function LazadaComponent_ng_container_132_Template_nz_select_nzOnSearch_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LazadaComponent_ng_container_132_nz_option_11_Template, 1, 3, "nz-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, "Account"), ": ", ctx_r0.modalCustomer["info"].account, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 14, "Enter shop name here"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.modalCustomer["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.modalCustomer.info == null ? null : ctx_r0.modalCustomer.info.type) == "lazada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 16, "Select customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDisabled", ctx_r0.modalCustomer["existShop"])("ngModel", ctx_r0.modalCustomer["id_customer"])("nzServerSearch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.customerShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("**", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 18, "This customer will be assigned a debt to this shop when the invoice is issued"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 20, "The selected customer cannot be changed when issued invoice"), " ");
} }
function LazadaComponent_ng_template_133_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_ng_template_133_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.cancelModalUpdateInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_ng_template_133_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.updateInfoLazada(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.modalCustomer["name"] || !ctx_r2.modalCustomer["id_customer"])("nzLoading", ctx_r2.modalCustomer["loading"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, "Save"));
} }
class LazadaComponent {
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
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Lazada..."), "transparent-loading", undefined, 0, true, 60000),
            this.vhQuerySales.refreshLocalProductListLazadas()
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
        this.listShop = this.vhQuerySales.getlocalShopListLazada();
        this.customerShow = [...this.listCustomer];
        for (let item of this.listShop) {
            if (!item.data.id_customer) {
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
    updateInfoLazada() {
        this.modalCustomer['loading'] = true;
        let data = {
            name: this.modalCustomer['name'],
            id_customer: this.modalCustomer['id_customer'],
            address: this.modalCustomer['address'],
            date: new Date().toISOString()
        };
        this.vhQuerySales.updateShop(this.modalCustomer['info']._id, data)
            .then((bool) => {
            if (bool) {
                this.modalCustomer = { visible: false, loading: false, name: '', id_customer: '', info: {}, existShop: false };
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
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/affiliate-product']);
    }
    gotoOrderStatus() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/order-status']);
    }
    gotoSellingPrice() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/update-selling-price']);
    }
    gotoUpdateStock() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/update-stock']);
    }
    gotoReturnRefund() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/return-refund']);
    }
    gotoCashflow() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/cashflow']);
    }
    gotoControlExportGoods() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/export-goods']);
    }
    gotoControlIssueInvoice() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/issue-invoice']);
    }
    gotoControl() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/control']);
    }
    gotoProductOnShop() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/product-on-shop']);
    }
    gotoControlReport() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/report']);
    }
    gotoAutoSale() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/auto-sale']);
    }
    gotoIssueByShopee() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/e-invoice-lazada']);
    }
    gotoIssueBySales365() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/e-invoice-sales365']);
    }
}
LazadaComponent.ɵfac = function LazadaComponent_Factory(t) { return new (t || LazadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm)); };
LazadaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LazadaComponent, selectors: [["app-lazada"]], decls: 135, vars: 47, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nz-row", "", 1, "cus-row"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "item-cus"], [1, "ng-item", "center-all-content", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["src", "assets/icon/management/ecommerce/order-status.svg"], [1, "center-text", "medium-size"], ["src", "assets/icon/management/ecommerce/returns-refund.svg"], ["src", "assets/icon/management/ecommerce/updating-stock.svg"], ["src", "assets/icon/management/ecommerce/update-selling-price.svg"], ["src", "assets/icon/management/ecommerce/affiliate-product.svg"], ["src", "assets/icon/management/ecommerce/product-on-sendo.svg"], ["src", "assets/icon/management/ecommerce/return-control-goods.svg"], ["src", "assets/icon/management/ecommerce/issue-invoice.svg"], ["src", "assets/icon/management/report.svg"], ["src", "assets/icon/management/ecommerce/auto-sale.svg"], ["src", "assets/icon/management/einvoice.svg"], ["nzWidth", "400px", 3, "nzMaskClosable", "nzClosable", "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSettings", ""], ["nz-col", "", "nzSpan", "24", 1, "update-info-modal"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["style", "margin-top:0 !important", "type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["nzShowSearch", "", 1, "cus-select", 3, "nzDisabled", "ngModel", "nzServerSearch", "nzPlaceHolder", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "cus-select-note"], ["type", "text", "nz-input", "", 2, "margin-top", "0 !important", 3, "ngModel", "placeholder", "ngModelChange"], [3, "nzValue", "nzLabel"], ["nz-button", "", 1, "nz-hover-border", 3, "click"], ["nz-button", "", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white) !important", 3, "disabled", "nzLoading", "click"]], template: function LazadaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_11_listener() { return ctx.gotoOrderStatus(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_21_listener() { return ctx.gotoReturnRefund(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_31_listener() { return ctx.gotoUpdateStock(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_41_listener() { return ctx.gotoSellingPrice(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_51_listener() { return ctx.gotoAffiliateProduct(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_61_listener() { return ctx.gotoProductOnShop(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_71_listener() { return ctx.gotoControl(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_81_listener() { return ctx.gotoControlIssueInvoice(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_91_listener() { return ctx.gotoControlReport(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_101_listener() { return ctx.gotoAutoSale(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_111_listener() { return ctx.gotoIssueByShopee(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LazadaComponent_Template_div_click_121_listener() { return ctx.gotoIssueBySales365(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function LazadaComponent_Template_nz_modal_nzVisibleChange_130_listener($event) { return (ctx.modalCustomer["visible"] = $event); })("nzOnCancel", function LazadaComponent_Template_nz_modal_nzOnCancel_130_listener() { return (ctx.modalCustomer["visible"] = false); })("nzOnOk", function LazadaComponent_Template_nz_modal_nzOnOk_130_listener() { return ctx.updateInfoLazada(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, LazadaComponent_ng_container_132_Template, 18, 22, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, LazadaComponent_ng_template_133_Template, 6, 8, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 19, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Lazada");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 31, "Product on Lazada"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMaskClosable", false)("nzClosable", false)("nzFooter", _r1)("nzVisible", ctx.modalCustomer["visible"])("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](131, 45, "Lazada configuration"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalContentDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000040;\n  border-radius: 15px;\n  flex-direction: column;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .item-cus[_ngcontent-%COMP%] {\n  padding: 8px;\n  height: 24vh;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.update-info-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.update-info-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.update-info-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  border-radius: 4px;\n}\n.update-info-modal[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.update-info-modal[_ngcontent-%COMP%]   .cus-select-note[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n  font-size: 0.8rem;\n  margin-top: 12px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhemFkYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHUjtBQUZRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBSVo7QUFIWTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBQUtoQjtBQURJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxnQ0FBQTtBQUdaO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQUFJO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6ImxhemFkYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5jdXMtcm93IHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgLm5nLWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwNDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jdXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDI0dmg7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4udXBkYXRlLWluZm8tbW9kYWwge1xyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY3VzLXNlbGVjdC1ub3RlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8387:
/*!*********************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/lazada.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazadaModule": () => (/* binding */ LazadaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _lazada_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazada.component */ 40220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _lazada_printer_lazada_printer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazada-printer/lazada-printer.component */ 4613);
/* harmony import */ var _lazada_printer_k80_k80_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazada-printer/k80/k80.component */ 87609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _lazada_printer_a5_a5_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazada-printer/a5/a5.component */ 62162);
/* harmony import */ var _lazada_printer_a6_a6_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazada-printer/a6/a6.component */ 86214);
/* harmony import */ var _lazada_printer_b6_b6_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazada-printer/b6/b6.component */ 41199);
/* harmony import */ var _lazada_printer_b7_b7_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazada-printer/b7/b7.component */ 17245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);















const routes = [
    {
        path: '',
        component: _lazada_component__WEBPACK_IMPORTED_MODULE_0__.LazadaComponent
    },
    {
        path: 'print',
        component: _lazada_printer_lazada_printer_component__WEBPACK_IMPORTED_MODULE_2__.LazadaPrinterComponent
    },
    {
        path: 'affiliate-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_affiliate-product_affiliate-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./affiliate-product/affiliate-product.module */ 37983)).then(m => m.AffiliateProductModule)
    },
    {
        path: 'order-status',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_order-status_order-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-status/order-status.module */ 23458)).then(m => m.OrderStatusModule)
    },
    {
        path: 'update-selling-price',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_update-selling-price_update-selling-price_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-selling-price/update-selling-price.module */ 12404)).then(m => m.UpdateSellingPriceModule)
    },
    {
        path: 'update-stock',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_update-stock_update-stock_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-stock/update-stock.module */ 93497)).then(m => m.UpdateStockModule)
    },
    {
        path: 'return-refund',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_return-refund_return-refund_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./return-refund/return-refund.module */ 70818)).then(m => m.ReturnRefundModule)
    },
    {
        path: 'issue-invoice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_issue-invoice_issue-invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./issue-invoice/issue-invoice.module */ 59208)).then(m => m.IssueInvoiceModule)
    },
    {
        path: 'product-on-shop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_modal-link-product-ecommerce_modal-lin-a5707d"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_lazada_product-on-shop_product-on-shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-on-shop/product-on-shop.module */ 29078)).then(m => m.ProductOnShopModule)
    },
    {
        path: 'control',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_control_control_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./control/control.module */ 78756)).then(m => m.ControlModule)
    }, {
        path: 'auto-sale',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_auto-sale_auto-sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auto-sale/auto-sale.module */ 45577)).then(m => m.AutoSaleModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report/report.module */ 77833)).then(m => m.ReportModule)
    },
    {
        path: 'e-invoice-lazada',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_modal-link-product-ecommerce_modal-lin-a5707d"), __webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_edit-customer-tax_edit-customer-tax_mo-70f626"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_lazada_e-invoice-lazada_e-invoice-lazada_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice-lazada/e-invoice-lazada.module */ 58085)).then(m => m.EInvoiceLazadaModule)
    },
    {
        path: 'e-invoice-sales365',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_lazada_e-invoice-sales365_e-invoice-sales365_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice-sales365/e-invoice-sales365.module */ 88791)).then(m => m.EInvoiceSales365Module)
    }
];
class LazadaModule {
}
LazadaModule.ɵfac = function LazadaModule_Factory(t) { return new (t || LazadaModule)(); };
LazadaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LazadaModule });
LazadaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LazadaModule, { declarations: [_lazada_component__WEBPACK_IMPORTED_MODULE_0__.LazadaComponent,
        _lazada_printer_lazada_printer_component__WEBPACK_IMPORTED_MODULE_2__.LazadaPrinterComponent,
        _lazada_printer_k80_k80_component__WEBPACK_IMPORTED_MODULE_3__.K80Component,
        _lazada_printer_a5_a5_component__WEBPACK_IMPORTED_MODULE_4__.A5Component,
        _lazada_printer_a6_a6_component__WEBPACK_IMPORTED_MODULE_5__.A6Component,
        _lazada_printer_b6_b6_component__WEBPACK_IMPORTED_MODULE_6__.B6Component,
        _lazada_printer_b7_b7_component__WEBPACK_IMPORTED_MODULE_7__.B7Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_lazada_lazada_module_ts.js.map