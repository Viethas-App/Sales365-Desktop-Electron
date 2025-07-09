"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_shopee_shopee_module_ts"],{

/***/ 96706:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/print/a4/a4.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4Component": () => (/* binding */ A4Component)
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function A4Component_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Order code"), ":", ctx_r0.bill.shipping_document_info.tracking_number, "");
} }
function A4Component_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r3 + 1, ". ", item_r2.item_name, " , SL : ", item_r2.model_quantity_purchased, " ");
} }
class A4Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.infoShop = {};
        this.infoBranch = {};
    }
    ngOnInit() {
        this.infoBranch = this.vhQuerySales.getDefaultBranch();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#barcode-shopee-delivery")) {
            this.renderBarcode(this.bill['code_render']);
            this.renderQR();
        }
    }
    renderBarcode(value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()("#barcode-shopee-delivery", value, {
                format: "CODE128",
                lineColor: "#000",
                height: 70,
                displayValue: false,
            });
    }
    renderQR() {
        if (this.bill['code_render'])
            qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill['code_render'], function (error) {
                if (error)
                    console.error(error);
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "shopee-a4",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.a4{width: 210mm;padding:0.5vw} ' +
                '.a4 .content {border: 2px solid rgb(19, 19, 19);border-radius: 4px;padding:0.8vw}' +
                '.a4 .content .row{ display: flex;justify-content: space-between;align-items: flex-start;font-size: 10pt;}' +
                '.a4 .content .logo{ max-width: 100%;}' +
                '.a4 .content .w50{ width: 50%;padding: 0.5vw}' +
                '.a4 .content .w40{ width: 40%;padding: 0.5vw}' +
                '.a4 .content .w60{ width: 60%;padding: 0.5vw}' +
                '.a4 .content .barcode{ width: 100%;}' +
                '.a4 .content .tracking_number{ display: block;}' +
                '.a4 .content .border-x-dashed{ border-top: 2px dashed rgb(19, 19, 19);border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.a4 .content .border-right-dashed{ border-right: 2px dashed rgb(19, 19, 19);}' +
                '.a4 .content .border-left-dashed{ border-left: 2px dashed rgb(19, 19, 19);}' +
                '.a4 .content .border-bottom-dashed{ border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.a4 .content .w70{ width: 70%;font-size: 10pt;}' +
                '.a4 .content .w30{ width: 30%;font-size: 10pt;}' +
                '.a4 .content .text-center{ text-align: center;}' +
                '.a4 .content .info-product{ height: 250px;max-height: 250px;font-size: 10pt;}' +
                '.a4 .content .info-product-item{ height: 160px;overflow-y: hidden;}' +
                '.a4 .content .info-product-note{ font-style: italic;font-size: 0.8rem;height: 90px;}' +
                '.a4 .content #canvas{ width: 100% !important;height: auto !important;max-width: 135px !important;}' +
                '.a4 .content .flex-column{ display: flex;flex-direction: column;justify-content: space-between;}' +
                '.a4 .content .total-amount{ font-size: 1.2rem;display: block;text-align: center;}' +
                '.a4 .content .signature{ width: 100%;height: 100px;border: 2px solid #b6b6b6;}' +
                '.a4 .content .signature b,i{ display: block;text-align: center;}' +
                '.a4 .content .sort-code{ display: flex;justify-content: center;align-items: center;font-size: 15pt;}'
        });
    }
}
A4Component.ɵfac = function A4Component_Factory(t) { return new (t || A4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
A4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: A4Component, selectors: [["app-a4"]], inputs: { bill: "bill", infoShop: "infoShop" }, decls: 83, vars: 53, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "shopee-a4", 1, "a4"], [1, "content"], [1, "row"], [1, "w40"], [1, "logo", 3, "src"], [1, "w60"], ["id", "barcode-shopee-delivery", 1, "barcode"], ["class", "tracking_number", 4, "ngIf"], [1, "w100", "border-x-dashed", "row"], [1, "w50"], [1, "w50", "border-left-dashed"], [1, "w100", "row", "sort-code", 2, "height", "30px"], [1, "w100", "border-x-dashed", "row", 2, "height", "30px"], [1, "w100", "border-bottom-dashed", "row"], [1, "w70", "info-product", "border-right-dashed", "flex-column"], [1, "info-product-item"], [4, "ngFor", "ngForOf"], [1, "info-product-note"], [1, "w30", "flex-column"], ["id", "canvas", 1, "border-bottom-dashed"], [2, "font-size", "1rem"], [1, "w100", "row"], [1, "total-amount"], [1, "signature"], [2, "font-weight", "normal"], [1, "tracking_number"], [2, "display", "block"]], template: function A4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function A4Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, A4Component_span_12_Template, 3, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, A4Component_ng_container_46_Template, 3, 3, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Ng\u00E0y \u0111\u1EB7t h\u00E0ng : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 28, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.bill["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bill.shipping_document_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 30, "Order number"), ": ", ctx.bill["order_sn"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 32, "From"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 34, "To"), ": ", (ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.preferred_delivery_option) == 1 ? "(Ch\u1EC9 giao gi\u1EDD h\u00E0nh ch\u00EDnh)" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].full_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 36, "Phone_number"), " : ", ctx.bill["recipient_address"].phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.recipient_sort_code == null ? null : ctx.bill.shipping_document_info.recipient_sort_code.first_recipient_sort_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("N\u1ED9i dung h\u00E0ng (T\u1ED5ng SL s\u1EA3n ph\u1EA9m: ", ctx.bill.package_list[0] == null ? null : ctx.bill.package_list[0].item_list == null ? null : ctx.bill.package_list[0].item_list.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bill["item_list"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 38, "Check the product name against the tracking code/order code on the Shopee app before receiving the goods (Note: some products may be hidden due to long names)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 40, ctx.bill["create_at"], "dd/MM/YYYY HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 43, "Recipient's money"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.bill.cod ? ctx.vhAlgorithm.vhcurrencyunit(ctx.bill["total_amount"]) : 0, " ", ctx.bill["currency"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 45, "Maximum weight"), ": ", ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.order_weight, " g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 47, "Recipient's signature"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("X\u00E1c nh\u1EADn h\u00E0ng nguy\u00EAn v\u1EB9n, kh\u00F4ng m\u00F3p/m\u00E9o, b\u1EC3 v\u1EE1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 49, "Delivery instructions"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](82, 51, "No inspection; Return after 3 delivery attempts; Store for a maximum of 5 days"));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".a4[_ngcontent-%COMP%] {\n  width: 210mm;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 0.8rem;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 4px;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w60[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 4px;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w40[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 4px;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .barcode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tracking_number[_ngcontent-%COMP%] {\n  display: block;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-x-dashed[_ngcontent-%COMP%] {\n  border-top: 2px dashed #131313;\n  border-bottom: 2px dashed #131313;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-right-dashed[_ngcontent-%COMP%] {\n  border-right: 2px dashed #131313;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-left-dashed[_ngcontent-%COMP%] {\n  border-left: 2px dashed #131313;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-bottom-dashed[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #131313;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w70[_ngcontent-%COMP%] {\n  width: 70%;\n  font-size: 0.8rem;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w30[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 0.8rem;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product[_ngcontent-%COMP%] {\n  height: 250px;\n  max-height: 250px;\n  font-size: 0.8rem;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-item[_ngcontent-%COMP%] {\n  height: 160px;\n  overflow-y: hidden;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-note[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n  height: 90px;\n}\n.a4[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-code[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n.a4[_ngcontent-%COMP%]   #canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 135px !important;\n}\n.a4[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.a4[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n  text-align: center;\n}\n.a4[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 2px solid #b6b6b6;\n}\n.a4[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .a4[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImE0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsZUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0FBR047QUFESTtFQUNFLGNBQUE7QUFHTjtBQURJO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxnQ0FBQTtBQUdOO0FBREk7RUFDRSwrQkFBQTtBQUdOO0FBREk7RUFDRSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGtCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUdOO0FBREk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR047QUFBRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUVKO0FBQUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFESTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoiYTQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYTQge1xyXG4gIHdpZHRoOiAyMTBtbTtcclxuICAuY29udGVudCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAucm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC53NTAge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbiAgICAudzYwIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gICAgLnc0MCB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuICAgIC5iYXJjb2RlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudHJhY2tpbmdfbnVtYmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLXgtZGFzaGVkIHtcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1yaWdodC1kYXNoZWQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1sZWZ0LWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLnc3MCB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnczMCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmluZm8tcHJvZHVjdCB7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3QtaXRlbSB7XHJcbiAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3Qtbm90ZSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIC5zb3J0LWNvZGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICNjYW52YXMge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZmxleC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC50b3RhbC1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNpZ25hdHVyZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjZiNmI2O1xyXG4gICAgYixcclxuICAgIGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnRuLXByaW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 11033:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/print/a5/a5.component.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function A5Component_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Order code"), ":", ctx_r0.bill.shipping_document_info.tracking_number, "");
} }
function A5Component_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r3 + 1, ". ", item_r2.item_name, " , SL : ", item_r2.model_quantity_purchased, " ");
} }
class A5Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.infoShop = {};
        this.infoBranch = {};
    }
    ngOnInit() {
        this.infoBranch = this.vhQuerySales.getDefaultBranch();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#barcode-shopee-delivery")) {
            this.renderBarcode(this.bill['code_render']);
            this.renderQR();
        }
    }
    renderBarcode(value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()("#barcode-shopee-delivery", value, {
                format: "CODE128",
                lineColor: "#000",
                height: 70,
                displayValue: false,
            });
    }
    renderQR() {
        if (this.bill['code_render'])
            qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill['code_render'], function (error) {
                if (error)
                    console.error(error);
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "shopee-a5",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.a5{width: 148mm;padding:0.5vw} ' +
                '.a5 .content {border: 2px solid rgb(19, 19, 19);border-radius: 4px;padding:0.8vw}' +
                '.a5 .content .row{ display: flex;justify-content: space-between;align-items: flex-start;font-size: 10pt;}' +
                '.a5 .content .logo{ max-width: 100%;}' +
                '.a5 .content .w50{ width: 50%;padding: 0.5vw}' +
                '.a5 .content .w40{ width: 40%;padding: 0.5vw}' +
                '.a5 .content .w60{ width: 60%;padding: 0.5vw}' +
                '.a5 .content .barcode{ width: 100%;}' +
                '.a5 .content .tracking_number{ display: block;}' +
                '.a5 .content .border-x-dashed{ border-top: 2px dashed rgb(19, 19, 19);border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.a5 .content .border-right-dashed{ border-right: 2px dashed rgb(19, 19, 19);}' +
                '.a5 .content .border-left-dashed{ border-left: 2px dashed rgb(19, 19, 19);}' +
                '.a5 .content .border-bottom-dashed{ border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.a5 .content .w70{ width: 70%;font-size: 10pt;}' +
                '.a5 .content .w30{ width: 30%;font-size: 10pt;}' +
                '.a5 .content .text-center{ text-align: center;}' +
                '.a5 .content .info-product{ height: 250px;max-height: 250px;font-size: 10pt;}' +
                '.a5 .content .info-product-item{ height: 160px;overflow-y: hidden;}' +
                '.a5 .content .info-product-note{ font-style: italic;font-size: 0.8rem;height: 90px;}' +
                '.a5 .content #canvas{ width: 100% !important;height: auto !important;max-width: 135px !important;}' +
                '.a5 .content .flex-column{ display: flex;flex-direction: column;justify-content: space-between;}' +
                '.a5 .content .total-amount{ font-size: 1.2rem;display: block;text-align: center;}' +
                '.a5 .content .signature{ width: 100%;height: 100px;border: 2px solid #b6b6b6;}' +
                '.a5 .content .signature b,i{ display: block;text-align: center;}' +
                '.a5 .content .sort-code{ display: flex;justify-content: center;align-items: center;font-size: 15pt;}'
        });
    }
}
A5Component.ɵfac = function A5Component_Factory(t) { return new (t || A5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
A5Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: A5Component, selectors: [["app-a5"]], inputs: { bill: "bill", infoShop: "infoShop" }, decls: 84, vars: 55, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "shopee-a5", 1, "a5"], [1, "content"], [1, "row"], [1, "w40"], [1, "logo", 3, "src"], [1, "w60"], ["id", "barcode-shopee-delivery", 1, "barcode"], ["class", "tracking_number", 4, "ngIf"], [1, "w100", "border-x-dashed", "row"], [1, "w50"], [1, "w50", "border-left-dashed"], [1, "w100", "row", "sort-code", 2, "height", "30px"], [1, "w100", "border-x-dashed", "row", 2, "height", "30px"], [1, "w100", "border-bottom-dashed", "row"], [1, "w70", "info-product", "border-right-dashed", "flex-column"], [1, "info-product-item"], [4, "ngFor", "ngForOf"], [1, "info-product-note"], [1, "w30", "flex-column"], ["id", "canvas", 1, "border-bottom-dashed"], [2, "font-size", "1rem"], [1, "w100", "row"], [1, "total-amount"], [1, "signature"], [2, "font-weight", "normal"], [1, "tracking_number"], [2, "display", "block"]], template: function A5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function A5Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, A5Component_span_12_Template, 3, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, A5Component_ng_container_46_Template, 3, 3, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Ng\u00E0y \u0111\u1EB7t h\u00E0ng : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 28, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.bill["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bill.shipping_document_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 30, "Order number"), ": ", ctx.bill["order_sn"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 32, "From"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 34, "To"), ": ", (ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.preferred_delivery_option) == 1 ? "(Ch\u1EC9 giao gi\u1EDD h\u00E0nh ch\u00EDnh)" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].full_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 36, "Phone_number"), " : ", ctx.bill["recipient_address"].phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.recipient_sort_code == null ? null : ctx.bill.shipping_document_info.recipient_sort_code.first_recipient_sort_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("N\u1ED9i dung h\u00E0ng (T\u1ED5ng SL s\u1EA3n ph\u1EA9m: ", ctx.bill.package_list[0] == null ? null : ctx.bill.package_list[0].item_list == null ? null : ctx.bill.package_list[0].item_list.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bill["item_list"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 38, "Check the product name against the tracking code/order code on the Shopee app before receiving the goods (Note: some products may be hidden due to long names)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 40, ctx.bill["create_at"], "dd/MM/YYYY HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 43, "Recipient's money"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.bill.cod ? ctx.vhAlgorithm.vhcurrencyunit(ctx.bill["total_amount"]) : 0, " ", ctx.bill["currency"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 45, "Maximum weight"), ": ", ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.order_weight, " g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 47, "Recipient's signature"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 49, "Confirm goods are intact, not dented, broken"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 51, "Delivery instructions"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 53, "No inspection; Return after 3 delivery attempts; Store for a maximum of 5 days"));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".a5[_ngcontent-%COMP%] {\n  width: 148mm;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 0.8rem;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 4px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w60[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 4px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w40[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 4px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .barcode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tracking_number[_ngcontent-%COMP%] {\n  display: block;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-x-dashed[_ngcontent-%COMP%] {\n  border-top: 2px dashed #131313;\n  border-bottom: 2px dashed #131313;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-right-dashed[_ngcontent-%COMP%] {\n  border-right: 2px dashed #131313;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-left-dashed[_ngcontent-%COMP%] {\n  border-left: 2px dashed #131313;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-bottom-dashed[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #131313;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w70[_ngcontent-%COMP%] {\n  width: 70%;\n  font-size: 0.8rem;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w30[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 0.8rem;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product[_ngcontent-%COMP%] {\n  height: 250px;\n  max-height: 250px;\n  font-size: 0.8rem;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-item[_ngcontent-%COMP%] {\n  height: 160px;\n  overflow-y: hidden;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-note[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n  height: 90px;\n}\n.a5[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-code[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n.a5[_ngcontent-%COMP%]   #canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 135px !important;\n}\n.a5[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.a5[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n  text-align: center;\n}\n.a5[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 2px solid #b6b6b6;\n}\n.a5[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .a5[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImE1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsZUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0FBR047QUFESTtFQUNFLGNBQUE7QUFHTjtBQURJO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxnQ0FBQTtBQUdOO0FBREk7RUFDRSwrQkFBQTtBQUdOO0FBREk7RUFDRSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGtCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUdOO0FBREk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR047QUFBRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUVKO0FBQUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFESTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoiYTUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYTUge1xyXG4gIHdpZHRoOiAxNDhtbTtcclxuICAuY29udGVudCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAucm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC53NTAge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbiAgICAudzYwIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gICAgLnc0MCB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuICAgIC5iYXJjb2RlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudHJhY2tpbmdfbnVtYmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLXgtZGFzaGVkIHtcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1yaWdodC1kYXNoZWQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1sZWZ0LWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLnc3MCB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnczMCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmluZm8tcHJvZHVjdCB7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3QtaXRlbSB7XHJcbiAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3Qtbm90ZSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIC5zb3J0LWNvZGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICNjYW52YXMge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZmxleC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC50b3RhbC1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNpZ25hdHVyZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjZiNmI2O1xyXG4gICAgYixcclxuICAgIGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnRuLXByaW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 87377:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/print/a6/a6.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A6Component": () => (/* binding */ A6Component)
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function A6Component_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Order code"), ":", ctx_r0.bill.shipping_document_info.tracking_number, "");
} }
function A6Component_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r3 + 1, ". ", item_r2.item_name, " , SL : ", item_r2.model_quantity_purchased, " ");
} }
class A6Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.infoShop = {};
        this.infoBranch = {};
    }
    ngOnInit() {
        this.infoBranch = this.vhQuerySales.getDefaultBranch();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#barcode-shopee-delivery")) {
            this.renderBarcode(this.bill['code_render']);
            this.renderQR();
        }
    }
    renderBarcode(value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()("#barcode-shopee-delivery", value, {
                format: "CODE128",
                lineColor: "#000",
                height: 70,
                displayValue: false,
            });
    }
    renderQR() {
        if (this.bill['code_render'])
            qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill['code_render'], function (error) {
                if (error)
                    console.error(error);
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "shopee-a6",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.a6{width: 105mm; padding:0.5vw} ' +
                '.a6 .content {border: 2px solid rgb(19, 19, 19);border-radius: 4px;padding:0.8vw}' +
                '.a6 .content .row{ display: flex;justify-content: space-between;align-items: flex-start;font-size: 10pt;}' +
                '.a6 .content .logo{ max-width: 100%;}' +
                '.a6 .content .w50{ width: 50%;padding: 0.5vw}' +
                '.a6 .content .w40{ width: 40%;padding: 0.5vw}' +
                '.a6 .content .w60{ width: 60%;padding: 0.5vw}' +
                '.a6 .content .barcode{ width: 100%;}' +
                '.a6 .content .tracking_number{ display: block;}' +
                '.a6 .content .border-x-dashed{ border-top: 2px dashed rgb(19, 19, 19);border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.a6 .content .border-right-dashed{ border-right: 2px dashed rgb(19, 19, 19);}' +
                '.a6 .content .border-left-dashed{ border-left: 2px dashed rgb(19, 19, 19);}' +
                '.a6 .content .border-bottom-dashed{ border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.a6 .content .w70{ width: 70%;font-size: 10pt;}' +
                '.a6 .content .w30{ width: 30%;font-size: 10pt;}' +
                '.a6 .content .text-center{ text-align: center;}' +
                '.a6 .content .info-product{ height: 250px;max-height: 250px;font-size: 10pt;}' +
                '.a6 .content .info-product-item{ height: 160px;overflow-y: hidden;}' +
                '.a6 .content .info-product-note{ font-style: italic;font-size: 0.8rem;height: 90px;}' +
                '.a6 .content #canvas{ width: 100% !important;height: auto !important;max-width: 135px !important;}' +
                '.a6 .content .flex-column{ display: flex;flex-direction: column;justify-content: space-between;}' +
                '.a6 .content .total-amount{ font-size: 1.2rem;display: block;text-align: center;}' +
                '.a6 .content .signature{ width: 100%;height: 100px;border: 2px solid #b6b6b6;}' +
                '.a6 .content .signature b,i{ display: block;text-align: center;}' +
                '.a6 .content .sort-code{ display: flex;justify-content: center;align-items: center;font-size: 15pt;}'
        });
    }
}
A6Component.ɵfac = function A6Component_Factory(t) { return new (t || A6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
A6Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: A6Component, selectors: [["app-a6"]], inputs: { bill: "bill", infoShop: "infoShop" }, decls: 84, vars: 55, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "shopee-a6", 1, "a6"], [1, "content"], [1, "row"], [1, "w40"], [1, "logo", 3, "src"], [1, "w60"], ["id", "barcode-shopee-delivery", 1, "barcode"], ["class", "tracking_number", 4, "ngIf"], [1, "w100", "border-x-dashed", "row"], [1, "w50"], [1, "w50", "border-left-dashed"], [1, "w100", "row", "sort-code", 2, "height", "30px"], [1, "w100", "border-x-dashed", "row", 2, "height", "30px"], [1, "w100", "border-bottom-dashed", "row"], [1, "w70", "info-product", "border-right-dashed", "flex-column"], [1, "info-product-item"], [4, "ngFor", "ngForOf"], [1, "info-product-note"], [1, "w30", "flex-column"], ["id", "canvas", 1, "border-bottom-dashed"], [2, "font-size", "1rem"], [1, "w100", "row"], [1, "total-amount"], [1, "signature"], [2, "font-weight", "normal"], [1, "tracking_number"], [2, "display", "block"]], template: function A6Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function A6Component_Template_button_click_1_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, A6Component_span_12_Template, 3, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, A6Component_ng_container_46_Template, 3, 3, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Ng\u00E0y \u0111\u1EB7t h\u00E0ng : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 28, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.bill["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bill.shipping_document_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 30, "Order number"), ": ", ctx.bill["order_sn"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 32, "From"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 34, "To"), ": ", (ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.preferred_delivery_option) == 1 ? "(Ch\u1EC9 giao gi\u1EDD h\u00E0nh ch\u00EDnh)" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].full_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 36, "Phone_number"), " : ", ctx.bill["recipient_address"].phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.recipient_sort_code == null ? null : ctx.bill.shipping_document_info.recipient_sort_code.first_recipient_sort_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("N\u1ED9i dung h\u00E0ng (T\u1ED5ng SL s\u1EA3n ph\u1EA9m: ", ctx.bill.package_list[0] == null ? null : ctx.bill.package_list[0].item_list == null ? null : ctx.bill.package_list[0].item_list.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bill["item_list"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 38, "Check the product name against the tracking code/order code on the Shopee app before receiving the goods (Note: some products may be hidden due to long names)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 40, ctx.bill["create_at"], "dd/MM/YYYY HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 43, "Recipient's money"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.bill.cod ? ctx.vhAlgorithm.vhcurrencyunit(ctx.bill["total_amount"]) : 0, " ", ctx.bill["currency"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 45, "Maximum weight"), ": ", ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.order_weight, " g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 47, "Recipient's signature"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 49, "Confirm goods are intact, not dented, broken"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 51, "Delivery instructions"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 53, "No inspection; Return after 3 delivery attempts; Store for a maximum of 5 days"));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".a6[_ngcontent-%COMP%] {\n  width: 105mm;\n  height: 148mm;\n  max-width: 105mm;\n  max-height: 148mm;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 0.8rem;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 4px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w60[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 4px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w40[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 4px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .barcode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tracking_number[_ngcontent-%COMP%] {\n  display: block;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-x-dashed[_ngcontent-%COMP%] {\n  border-top: 2px dashed #131313;\n  border-bottom: 2px dashed #131313;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-right-dashed[_ngcontent-%COMP%] {\n  border-right: 2px dashed #131313;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-left-dashed[_ngcontent-%COMP%] {\n  border-left: 2px dashed #131313;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-bottom-dashed[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #131313;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w70[_ngcontent-%COMP%] {\n  width: 70%;\n  font-size: 0.8rem;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w30[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 0.8rem;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product[_ngcontent-%COMP%] {\n  height: 250px;\n  max-height: 250px;\n  font-size: 0.8rem;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-item[_ngcontent-%COMP%] {\n  height: 160px;\n  overflow-y: hidden;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-note[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n  height: 90px;\n}\n.a6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-code[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n.a6[_ngcontent-%COMP%]   #canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 135px !important;\n}\n.a6[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.a6[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n  text-align: center;\n}\n.a6[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 2px solid #b6b6b6;\n}\n.a6[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .a6[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImE2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFBRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUdOO0FBREk7RUFDRSxlQUFBO0FBR047QUFESTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBR047QUFESTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBR047QUFESTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBR047QUFESTtFQUNFLFdBQUE7QUFHTjtBQURJO0VBQ0UsY0FBQTtBQUdOO0FBREk7RUFDRSw4QkFBQTtFQUNBLGlDQUFBO0FBR047QUFESTtFQUNFLGdDQUFBO0FBR047QUFESTtFQUNFLCtCQUFBO0FBR047QUFESTtFQUNFLGlDQUFBO0FBR047QUFESTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0Usa0JBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBR047QUFESTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRUo7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFFSjtBQURJOztFQUVFLGNBQUE7RUFDQSxrQkFBQTtBQUdOO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJhNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hNiB7XHJcbiAgd2lkdGg6IDEwNW1tO1xyXG4gIGhlaWdodDogMTQ4bW07XHJcbiAgbWF4LXdpZHRoOiAxMDVtbTtcclxuICBtYXgtaGVpZ2h0OiAxNDhtbTtcclxuICAuY29udGVudCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAucm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC53NTAge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbiAgICAudzYwIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gICAgLnc0MCB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuICAgIC5iYXJjb2RlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudHJhY2tpbmdfbnVtYmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLXgtZGFzaGVkIHtcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1yaWdodC1kYXNoZWQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1sZWZ0LWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLnc3MCB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnczMCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmluZm8tcHJvZHVjdCB7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3QtaXRlbSB7XHJcbiAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3Qtbm90ZSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIC5zb3J0LWNvZGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICNjYW52YXMge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMzVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZmxleC1jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC50b3RhbC1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNpZ25hdHVyZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjZiNmI2O1xyXG4gICAgYixcclxuICAgIGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnRuLXByaW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 58000:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/print/b6/b6.component.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function B6Component_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Order code"), ":", ctx_r0.bill.shipping_document_info.tracking_number, "");
} }
function B6Component_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r3 + 1, ". ", item_r2.item_name, " , SL : ", item_r2.model_quantity_purchased, " ");
} }
class B6Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.infoShop = {};
        this.infoBranch = {};
    }
    ngOnInit() {
        this.infoBranch = this.vhQuerySales.getDefaultBranch();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#barcode-shopee-delivery")) {
            this.renderBarcode(this.bill['code_render']);
            this.renderQR();
        }
    }
    renderBarcode(value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()("#barcode-shopee-delivery", value, {
                format: "CODE128",
                lineColor: "#000",
                height: 70,
                displayValue: false,
            });
    }
    renderQR() {
        if (this.bill['code_render'])
            qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill['code_render'], function (error) {
                if (error)
                    console.error(error);
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "shopee-b6",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.b6{width: 125mm;padding:0.5vw} ' +
                '.b6 .content {border: 2px solid rgb(19, 19, 19);border-radius: 4px;padding:0.8vw}' +
                '.b6 .content .row{ display: flex;justify-content: space-between;align-items: flex-start;font-size: 10pt;}' +
                '.b6 .content .logo{ max-width: 100%;}' +
                '.b6 .content .w50{ width: 50%;padding: 0.5vw}' +
                '.b6 .content .w40{ width: 40%;padding: 0.5vw}' +
                '.b6 .content .w60{ width: 60%;padding: 0.5vw}' +
                '.b6 .content .barcode{ width: 100%;}' +
                '.b6 .content .tracking_number{ display: block;}' +
                '.b6 .content .border-x-dashed{ border-top: 2px dashed rgb(19, 19, 19);border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.b6 .content .border-right-dashed{ border-right: 2px dashed rgb(19, 19, 19);}' +
                '.b6 .content .border-left-dashed{ border-left: 2px dashed rgb(19, 19, 19);}' +
                '.b6 .content .border-bottom-dashed{ border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.b6 .content .w70{ width: 70%;font-size: 10pt;}' +
                '.b6 .content .w30{ width: 30%;font-size: 10pt;}' +
                '.b6 .content .text-center{ text-align: center;}' +
                '.b6 .content .info-product{ height: 250px;max-height: 250px;font-size: 10pt;}' +
                '.b6 .content .info-product-item{ height: 160px;overflow-y: hidden;}' +
                '.b6 .content .info-product-note{ font-style: italic;font-size: 0.8rem;height: 90px;}' +
                '.b6 .content #canvas{ width: 100% !important;height: auto !important;max-width: 135px !important;}' +
                '.b6 .content .flex-column{ display: flex;flex-direction: column;justify-content: space-between;}' +
                '.b6 .content .total-amount{ font-size: 1.2rem;display: block;text-align: center;}' +
                '.b6 .content .signature{ width: 100%;height: 100px;border: 2px solid #b6b6b6;}' +
                '.b6 .content .signature b,i{ display: block;text-align: center;}' +
                '.b6 .content .sort-code{ display: flex;justify-content: center;align-items: center;font-size: 15pt;}'
        });
    }
}
B6Component.ɵfac = function B6Component_Factory(t) { return new (t || B6Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
B6Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: B6Component, selectors: [["app-b6"]], inputs: { bill: "bill", infoShop: "infoShop" }, decls: 84, vars: 54, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "shopee-b6", 1, "b6"], [1, "content"], [1, "row"], [1, "w40"], [1, "logo", 3, "src"], [1, "w60"], ["id", "barcode-shopee-delivery", 1, "barcode"], ["class", "tracking_number", 4, "ngIf"], [1, "w100", "border-x-dashed", "row"], [1, "w50"], [1, "w50", "border-left-dashed"], [1, "w100", "row", "sort-code", 2, "height", "30px"], [1, "w100", "border-x-dashed", "row", 2, "height", "30px"], [1, "w100", "border-bottom-dashed", "row"], [1, "w70", "info-product", "border-right-dashed", "flex-column"], [1, "info-product-item"], [4, "ngFor", "ngForOf"], [1, "info-product-note"], [1, "w30", "flex-column"], ["id", "canvas", 1, "border-bottom-dashed"], [2, "font-size", "1rem"], [1, "w100", "row"], [1, "total-amount"], [1, "signature"], [2, "font-weight", "normal"], [1, "tracking_number"], [2, "display", "block"]], template: function B6Component_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, B6Component_span_12_Template, 3, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, B6Component_ng_container_46_Template, 3, 3, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Ng\u00E0y \u0111\u1EB7t h\u00E0ng : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 27, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.bill["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bill.shipping_document_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 29, "Order number"), ": ", ctx.bill["order_sn"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 31, "From"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 33, "To"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].full_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 35, "Phone_number"), " : ", ctx.bill["recipient_address"].phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.recipient_sort_code == null ? null : ctx.bill.shipping_document_info.recipient_sort_code.first_recipient_sort_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("N\u1ED9i dung h\u00E0ng (T\u1ED5ng SL s\u1EA3n ph\u1EA9m: ", ctx.bill.package_list[0] == null ? null : ctx.bill.package_list[0].item_list == null ? null : ctx.bill.package_list[0].item_list.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bill["item_list"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 37, "Check the product name against the tracking code/order code on the Shopee app before receiving the goods (Note: some products may be hidden due to long names)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 39, ctx.bill["create_at"], "dd/MM/YYYY HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 42, "Recipient's money"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.bill.cod ? ctx.vhAlgorithm.vhcurrencyunit(ctx.bill["total_amount"]) : 0, " ", ctx.bill["currency"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 44, "Maximum weight"), ": ", ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.order_weight, " g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 46, "Recipient's signature"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 48, "Confirm goods are intact, not dented, broken"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 50, "Delivery instructions"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 52, "No inspection; Return after 3 delivery attempts; Store for a maximum of 5 days"));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".b6[_ngcontent-%COMP%] {\n  width: 125mm;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 0.8rem;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 4px;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w60[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 4px;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w40[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 4px;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .barcode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tracking_number[_ngcontent-%COMP%] {\n  display: block;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-x-dashed[_ngcontent-%COMP%] {\n  border-top: 2px dashed #131313;\n  border-bottom: 2px dashed #131313;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-right-dashed[_ngcontent-%COMP%] {\n  border-right: 2px dashed #131313;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-left-dashed[_ngcontent-%COMP%] {\n  border-left: 2px dashed #131313;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-bottom-dashed[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #131313;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w70[_ngcontent-%COMP%] {\n  width: 70%;\n  font-size: 0.8rem;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w30[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 0.8rem;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product[_ngcontent-%COMP%] {\n  height: 250px;\n  max-height: 250px;\n  font-size: 0.8rem;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-item[_ngcontent-%COMP%] {\n  height: 160px;\n  overflow-y: hidden;\n}\n.b6[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-note[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n  height: 90px;\n}\n.b6[_ngcontent-%COMP%]   #canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 135px !important;\n}\n.b6[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.b6[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n  text-align: center;\n}\n.b6[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 2px solid #b6b6b6;\n}\n.b6[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .b6[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.b6[_ngcontent-%COMP%]   .sort-code[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsZUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0FBR047QUFESTtFQUNFLGNBQUE7QUFHTjtBQURJO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxnQ0FBQTtBQUdOO0FBREk7RUFDRSwrQkFBQTtBQUdOO0FBREk7RUFDRSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGtCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUdOO0FBREk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUdOO0FBQUU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUVKO0FBREk7O0VBRUUsY0FBQTtFQUNBLGtCQUFBO0FBR047QUFBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoiYjYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYjYge1xyXG4gIHdpZHRoOiAxMjVtbTtcclxuICAuY29udGVudCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAucm93IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC53NTAge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbiAgICAudzYwIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gICAgLnc0MCB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuICAgIC5iYXJjb2RlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudHJhY2tpbmdfbnVtYmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLXgtZGFzaGVkIHtcclxuICAgICAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1yaWdodC1kYXNoZWQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1sZWZ0LWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgfVxyXG4gICAgLnc3MCB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnczMCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmluZm8tcHJvZHVjdCB7XHJcbiAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3QtaXRlbSB7XHJcbiAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3Qtbm90ZSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgI2NhbnZhcyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mbGV4LWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnRvdGFsLWFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2lnbmF0dXJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiNmI2YjY7XHJcbiAgICBiLFxyXG4gICAgaSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zb3J0LWNvZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxufVxyXG4uYnRuLXByaW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 43330:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/print/b7/b7.component.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function B7Component_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Order code"), ":", ctx_r0.bill.shipping_document_info.tracking_number, "");
} }
function B7Component_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r3 + 1, ". ", item_r2.item_name, " , SL : ", item_r2.model_quantity_purchased, " ");
} }
class B7Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.infoShop = {};
        this.infoBranch = {};
    }
    ngOnInit() {
        this.infoBranch = this.vhQuerySales.getDefaultBranch();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#barcode-shopee-delivery")) {
            this.renderBarcode(this.bill['code_render']);
            this.renderQR();
        }
    }
    renderBarcode(value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()("#barcode-shopee-delivery", value, {
                format: "CODE128",
                lineColor: "#000",
                height: 70,
                displayValue: false,
            });
    }
    renderQR() {
        if (this.bill['code_render'])
            qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill['code_render'], function (error) {
                if (error)
                    console.error(error);
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "shopee-b7",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.b7{width: 88mm; padding:0.5vw} ' +
                '.b7 .content {border: 2px solid rgb(19, 19, 19);border-radius: 4px;padding:0.8vw}' +
                '.b7 .content .row{ display: flex;justify-content: space-between;align-items: flex-start;font-size: 10pt;}' +
                '.b7 .content .logo{ max-width: 100%;}' +
                '.b7 .content .w50{ width: 50%;padding: 0.5vw}' +
                '.b7 .content .w40{ width: 40%;padding: 0.5vw}' +
                '.b7 .content .w60{ width: 60%;padding: 0.5vw}' +
                '.b7 .content .barcode{ width: 100%;}' +
                '.b7 .content .tracking_number{ display: block;}' +
                '.b7 .content .border-x-dashed{ border-top: 2px dashed rgb(19, 19, 19);border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.b7 .content .border-right-dashed{ border-right: 2px dashed rgb(19, 19, 19);}' +
                '.b7 .content .border-left-dashed{ border-left: 2px dashed rgb(19, 19, 19);}' +
                '.b7 .content .border-bottom-dashed{ border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.b7 .content .w70{ width: 70%;font-size: 10pt;}' +
                '.b7 .content .w30{ width: 30%;font-size: 10pt;}' +
                '.b7 .content .text-center{ text-align: center;}' +
                '.b7 .content .info-product{  font-size: 10pt;}' +
                '.b7 .content .info-product-item{ min-height: 160px;overflow-y: hidden;}' +
                '.b7 .content .info-product-note{ font-style: italic;font-size: 0.8rem;min-height: 90px;}' +
                '.b7 .content #canvas{ width: 100% !important;height: auto !important;max-width: 135px !important;}' +
                '.b7 .content .flex-column{ display: flex;flex-direction: column;justify-content: space-between;}' +
                '.b7 .content .total-amount{ font-size: 1.2rem;display: block;text-align: center;}' +
                '.b7 .content .signature{ width: 100%;height: 100px;border: 2px solid #b6b6b6;}' +
                '.b7 .content .signature b,i{ display: block;text-align: center;}' +
                '.b7 .content .sort-code{ display: flex;justify-content: center;align-items: center;font-size: 15pt;}'
        });
    }
}
B7Component.ɵfac = function B7Component_Factory(t) { return new (t || B7Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
B7Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: B7Component, selectors: [["app-b7"]], inputs: { bill: "bill", infoShop: "infoShop" }, decls: 84, vars: 55, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "shopee-b7", 1, "b7"], [1, "content"], [1, "row"], [1, "w40"], [1, "logo", 3, "src"], [1, "w60"], ["id", "barcode-shopee-delivery", 1, "barcode"], ["class", "tracking_number", 4, "ngIf"], [1, "w100", "border-x-dashed", "row"], [1, "w50"], [1, "w50", "border-left-dashed"], [1, "w100", "row", "sort-code", 2, "height", "30px"], [1, "w100", "border-x-dashed", "row", 2, "height", "30px"], [1, "w100", "border-bottom-dashed", "row"], [1, "w70", "info-product", "border-right-dashed", "flex-column"], [1, "info-product-item"], [4, "ngFor", "ngForOf"], [1, "info-product-note"], [1, "w30", "flex-column"], ["id", "canvas", 1, "border-bottom-dashed"], [2, "font-size", "1rem"], [1, "w100", "row"], [1, "total-amount"], [1, "signature"], [2, "font-weight", "normal"], [1, "tracking_number"], [2, "display", "block"]], template: function B7Component_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, B7Component_span_12_Template, 3, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, B7Component_ng_container_46_Template, 3, 3, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Ng\u00E0y \u0111\u1EB7t h\u00E0ng : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 28, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.bill["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bill.shipping_document_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 30, "Order number"), ": ", ctx.bill["order_sn"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 32, "From"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 34, "To"), ": ", (ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.preferred_delivery_option) == 1 ? "(Ch\u1EC9 giao gi\u1EDD h\u00E0nh ch\u00EDnh)" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].full_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 36, "Phone_number"), " : ", ctx.bill["recipient_address"].phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.recipient_sort_code == null ? null : ctx.bill.shipping_document_info.recipient_sort_code.first_recipient_sort_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("N\u1ED9i dung h\u00E0ng (T\u1ED5ng SL s\u1EA3n ph\u1EA9m: ", ctx.bill.package_list[0] == null ? null : ctx.bill.package_list[0].item_list == null ? null : ctx.bill.package_list[0].item_list.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bill["item_list"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 38, "Check the product name against the tracking code/order code on the Shopee app before receiving the goods (Note: some products may be hidden due to long names)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 40, ctx.bill["create_at"], "dd/MM/YYYY HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 43, "Recipient's money"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.bill.cod ? ctx.vhAlgorithm.vhcurrencyunit(ctx.bill["total_amount"]) : 0, " ", ctx.bill["currency"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 45, "Maximum weight"), ": ", ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.order_weight, " g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 47, "Recipient's signature"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 49, "Confirm goods are intact, not dented, broken"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 51, "Delivery instructions"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 53, "No inspection; Return after 3 delivery attempts; Store for a maximum of 5 days"));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".b7[_ngcontent-%COMP%] {\n  width: 88mm;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 0.8rem;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 4px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w60[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 4px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w40[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 4px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .barcode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tracking_number[_ngcontent-%COMP%] {\n  display: block;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-x-dashed[_ngcontent-%COMP%] {\n  border-top: 2px dashed #131313;\n  border-bottom: 2px dashed #131313;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-right-dashed[_ngcontent-%COMP%] {\n  border-right: 2px dashed #131313;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-left-dashed[_ngcontent-%COMP%] {\n  border-left: 2px dashed #131313;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-bottom-dashed[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #131313;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w70[_ngcontent-%COMP%] {\n  width: 70%;\n  font-size: 0.8rem;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w30[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 0.8rem;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-item[_ngcontent-%COMP%] {\n  min-height: 160px;\n  overflow-y: hidden;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-note[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n  min-height: 90px;\n}\n.b7[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-code[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n.b7[_ngcontent-%COMP%]   #canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 135px !important;\n}\n.b7[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.b7[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n  text-align: center;\n}\n.b7[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 2px solid #b6b6b6;\n}\n.b7[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .b7[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImI3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsZUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0FBR047QUFESTtFQUNFLGNBQUE7QUFHTjtBQURJO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxnQ0FBQTtBQUdOO0FBREk7RUFDRSwrQkFBQTtBQUdOO0FBREk7RUFDRSxpQ0FBQTtBQUdOO0FBREk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGtCQUFBO0FBR047QUFESTtFQUNFLGlCQUFBO0FBR047QUFESTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQURJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRUo7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFFSjtBQURJOztFQUVFLGNBQUE7RUFDQSxrQkFBQTtBQUdOO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJiNy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iNyB7XHJcbiAgd2lkdGg6IDg4bW07XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudzUwIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gICAgLnc2MCB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuICAgIC53NDAge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuYmFyY29kZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRyYWNraW5nX251bWJlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci14LWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItcmlnaHQtZGFzaGVkIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItbGVmdC1kYXNoZWQge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC53NzAge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC53MzAge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3Qge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3QtaXRlbSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuaW5mby1wcm9kdWN0LW5vdGUge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgLnNvcnQtY29kZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgI2NhbnZhcyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mbGV4LWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnRvdGFsLWFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2lnbmF0dXJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiNmI2YjY7XHJcbiAgICBiLFxyXG4gICAgaSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idG4tcHJpbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTZweDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 34818:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/print/k80/k80.component.ts ***!
  \*******************************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function K80Component_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Order code"), ": ", ctx_r0.bill.shipping_document_info.tracking_number, "");
} }
function K80Component_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", i_r3 + 1, ". ", item_r2.item_name, " , SL : ", item_r2.model_quantity_purchased, " ");
} }
class K80Component {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.infoShop = {};
        this.infoBranch = {};
    }
    ngOnInit() {
        this.infoBranch = this.vhQuerySales.getDefaultBranch();
    }
    ngAfterViewChecked() {
        setTimeout(() => {
            if (document.querySelector("#barcode-shopee-delivery")) {
                this.renderBarcode(this.bill['code_render']);
                this.renderQR();
            }
        }, 200);
    }
    renderBarcode(value) {
        if (value)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()("#barcode-shopee-delivery", value, {
                format: "CODE128",
                lineColor: "#000",
                height: 70,
                displayValue: false,
            });
    }
    renderQR() {
        if (this.bill['code_render'])
            qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(document.getElementById('canvas'), this.bill['code_render'], function (error) {
                if (error)
                    console.error(error);
            });
    }
    print() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "shopee-k80",
            type: "html",
            scanStyles: false,
            style: 'html { font-size: 9pt;}' +
                '@page { margin: 0 !important;}' +
                '.k80{width: 79mm} ' +
                '.k80 .content {border: 2px solid rgb(19, 19, 19);border-radius: 4px;padding:0.8vw}' +
                '.k80 .content .row{ display: flex;justify-content: space-between;align-items: flex-start;font-size: 10pt;}' +
                '.k80 .content .logo{ max-width: 100%;}' +
                '.k80 .content .w50{ width: 50%;padding: 0.5vw}' +
                '.k80 .content .w40{ width: 40%;padding: 0.5vw}' +
                '.k80 .content .w60{ width: 60%;padding: 0.5vw}' +
                '.k80 .content .barcode{ width: 100%;}' +
                '.k80 .content .tracking_number{ display: block;}' +
                '.k80 .content .border-x-dashed{ border-top: 2px dashed rgb(19, 19, 19);border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.k80 .content .border-right-dashed{ border-right: 2px dashed rgb(19, 19, 19);}' +
                '.k80 .content .border-left-dashed{ border-left: 2px dashed rgb(19, 19, 19);}' +
                '.k80 .content .border-bottom-dashed{ border-bottom: 2px dashed rgb(19, 19, 19);}' +
                '.k80 .content .w70{ width: 70%;font-size: 10pt;}' +
                '.k80 .content .w30{ width: 30%;font-size: 10pt;}' +
                '.k80 .content .text-center{ text-align: center;}' +
                '.k80 .content .info-product{ font-size: 10pt;}' +
                '.k80 .content .info-product-item{ min-height: 160px;overflow-y: hidden;}' +
                '.k80 .content .info-product-note{ font-style: italic;font-size: 0.8rem;min-height: 90px;}' +
                '.k80 .content #canvas{ width: 100% !important;height: auto !important;max-width: 135px !important;}' +
                '.k80 .content .flex-column{ display: flex;flex-direction: column;justify-content: space-between;}' +
                '.k80 .content .total-amount{ font-size: 1.2rem;display: block;text-align: center;}' +
                '.k80 .content .signature{ width: 100%;height: 100px;border: 2px solid #b6b6b6;}' +
                '.k80 .content .signature b,i{ display: block;text-align: center;}' +
                '.k80 .content .sort-code{ display: flex;justify-content: center;align-items: center;font-size: 15pt;}'
        });
    }
}
K80Component.ɵfac = function K80Component_Factory(t) { return new (t || K80Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales)); };
K80Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: K80Component, selectors: [["app-k80"]], inputs: { bill: "bill", infoShop: "infoShop" }, decls: 84, vars: 55, consts: [[1, "center-all-content", 2, "position", "relative"], ["nz-button", "", "nzType", "default", 1, "btn-print", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["id", "shopee-k80", 1, "k80"], [1, "content"], [1, "row"], [1, "w40"], [1, "logo", 3, "src"], [1, "w60"], ["id", "barcode-shopee-delivery", 1, "barcode"], ["class", "tracking_number", 4, "ngIf"], [1, "w100", "border-x-dashed", "row"], [1, "w50"], [1, "w50", "border-left-dashed"], [1, "w100", "row", "sort-code", 2, "height", "30px"], [1, "w100", "border-x-dashed", "row", 2, "height", "30px"], [1, "w100", "border-bottom-dashed", "row"], [1, "w70", "info-product", "border-right-dashed", "flex-column"], [1, "info-product-item"], [4, "ngFor", "ngForOf"], [1, "info-product-note"], [1, "w30", "flex-column"], ["id", "canvas", 1, "border-bottom-dashed"], [2, "font-size", "1rem"], [1, "w100", "row"], [1, "total-amount"], [1, "signature"], [2, "font-weight", "normal"], [1, "tracking_number"], [2, "display", "block"]], template: function K80Component_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, K80Component_span_12_Template, 3, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, K80Component_ng_container_46_Template, 3, 3, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Ng\u00E0y \u0111\u1EB7t h\u00E0ng : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "b", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 28, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.bill["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bill["shipping_carrier"] != "Shopee Express Instant");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 30, "Order number"), ": ", ctx.bill["order_sn"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 32, "From"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.infoShop.data == null ? null : ctx.infoShop.data.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 34, "To"), " : ", (ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.preferred_delivery_option) == 1 ? "(Ch\u1EC9 giao gi\u1EDD h\u00E0nh ch\u00EDnh)" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.bill["recipient_address"].full_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 36, "Phone_number"), " : ", ctx.bill["recipient_address"].phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.recipient_sort_code == null ? null : ctx.bill.shipping_document_info.recipient_sort_code.first_recipient_sort_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("N\u1ED9i dung h\u00E0ng (T\u1ED5ng SL s\u1EA3n ph\u1EA9m: ", ctx.bill.package_list[0] == null ? null : ctx.bill.package_list[0].item_list == null ? null : ctx.bill.package_list[0].item_list.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bill["item_list"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 38, "Check the product name against the tracking code/order code on the Shopee app before receiving the goods (Note: some products may be hidden due to long names)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](58, 40, ctx.bill["create_at"], "dd/MM/YYYY HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 43, "Recipient's money"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.bill.cod ? ctx.vhAlgorithm.vhcurrencyunit(ctx.bill["total_amount"]) : 0, " ", ctx.bill["currency"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 45, "Maximum weight"), ": ", ctx.bill.shipping_document_info == null ? null : ctx.bill.shipping_document_info.order_weight, " g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 47, "Recipient's signature"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](76, 49, "Confirm goods are intact, not dented, broken"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 51, "Delivery instructions"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](83, 53, "No inspection; Return after 3 delivery attempts; Store for a maximum of 5 days"));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".k80[_ngcontent-%COMP%] {\n  width: 79mm;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border: 2px solid #131313;\n  border-radius: 4px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-size: 0.8rem;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w50[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 4px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w60[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 4px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w40[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 4px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .barcode[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tracking_number[_ngcontent-%COMP%] {\n  display: block;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-x-dashed[_ngcontent-%COMP%] {\n  border-top: 2px dashed #131313;\n  border-bottom: 2px dashed #131313;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-right-dashed[_ngcontent-%COMP%] {\n  border-right: 2px dashed #131313;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-left-dashed[_ngcontent-%COMP%] {\n  border-left: 2px dashed #131313;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .border-bottom-dashed[_ngcontent-%COMP%] {\n  border-bottom: 2px dashed #131313;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w70[_ngcontent-%COMP%] {\n  width: 70%;\n  font-size: 0.8rem;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .w30[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 0.8rem;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-item[_ngcontent-%COMP%] {\n  min-height: 160px;\n  overflow-y: hidden;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-product-note[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.8rem;\n  min-height: 90px;\n}\n.k80[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sort-code[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n.k80[_ngcontent-%COMP%]   #canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: auto !important;\n  max-width: 135px !important;\n}\n.k80[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.k80[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n  text-align: center;\n}\n.k80[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 2px solid #b6b6b6;\n}\n.k80[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .k80[_ngcontent-%COMP%]   .signature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.btn-print[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 0;\n  width: 10vw;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIms4MC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLGVBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFHTjtBQURJO0VBQ0UsV0FBQTtBQUdOO0FBREk7RUFDRSxjQUFBO0FBR047QUFESTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7QUFHTjtBQURJO0VBQ0UsZ0NBQUE7QUFHTjtBQURJO0VBQ0UsK0JBQUE7QUFHTjtBQURJO0VBQ0UsaUNBQUE7QUFHTjtBQURJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUdOO0FBREk7RUFDRSxrQkFBQTtBQUdOO0FBREk7RUFDRSxpQkFBQTtBQUdOO0FBREk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBR047QUFESTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdOO0FBREk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR047QUFBRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUVKO0FBQUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFESTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoiazgwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLms4MCB7XHJcbiAgd2lkdGg6IDc5bW07XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudzUwIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gICAgLnc2MCB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuICAgIC53NDAge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuYmFyY29kZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRyYWNraW5nX251bWJlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci14LWRhc2hlZCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgcmdiKDE5LCAxOSwgMTkpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItcmlnaHQtZGFzaGVkIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItbGVmdC1kYXNoZWQge1xyXG4gICAgICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigxOSwgMTksIDE5KTtcclxuICAgIH1cclxuICAgIC53NzAge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC53MzAge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3Qge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIC5pbmZvLXByb2R1Y3QtaXRlbSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuaW5mby1wcm9kdWN0LW5vdGUge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgLnNvcnQtY29kZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgI2NhbnZhcyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mbGV4LWNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnRvdGFsLWFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2lnbmF0dXJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiNmI2YjY7XHJcbiAgICBiLFxyXG4gICAgaSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idG4tcHJpbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTZweDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 46913:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/print/print.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintComponent": () => (/* binding */ PrintComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _k80_k80_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./k80/k80.component */ 34818);
/* harmony import */ var _a4_a4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./a4/a4.component */ 96706);
/* harmony import */ var _a5_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./a5/a5.component */ 11033);
/* harmony import */ var _a6_a6_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./a6/a6.component */ 87377);
/* harmony import */ var _b6_b6_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./b6/b6.component */ 58000);
/* harmony import */ var _b7_b7_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./b7/b7.component */ 43330);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function PrintComponent_nz_tabset_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-tabset", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nz-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-k80", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nz-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-a4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "nz-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-a5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nz-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-a6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nz-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-b6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nz-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "app-b7", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bill", ctx_r0.root.bill)("infoShop", ctx_r0.infoShop);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bill", ctx_r0.root.bill)("infoShop", ctx_r0.infoShop);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bill", ctx_r0.root.bill)("infoShop", ctx_r0.infoShop);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bill", ctx_r0.root.bill)("infoShop", ctx_r0.infoShop);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bill", ctx_r0.root.bill)("infoShop", ctx_r0.infoShop);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bill", ctx_r0.root.bill)("infoShop", ctx_r0.infoShop);
} }
class PrintComponent {
    constructor(router, vhEcommerce, vhComponent, http) {
        this.router = router;
        this.vhEcommerce = vhEcommerce;
        this.vhComponent = vhComponent;
        this.http = http;
        this.loading = true;
        this.infoShop = {};
        this.root = this.router.getCurrentNavigation().extras.state;
        this.infoShop = this.root.infoShop;
    }
    ngOnInit() {
        var _a;
        this.root.bill['logo'] = this.renderLogoImage((_a = this.root.bill['shipping_carrier']) === null || _a === void 0 ? void 0 : _a.toLowerCase());
        this.vhComponent.showLoading('', 'transparent-loading').then(() => {
            //lấy các dữ liệu thuộc shipping(lưu ý hàm này nếu k thuộc status proccess được in sẽ trả về lỗi)
            // if (this.root.bill['order_status'] == 'PROCESSED') {
            //   
            //   this.vhEcommerce.getShippingDocumentShopee(this.root.bill['order_sn'], this.infoShop['access_token'], this.infoShop['_id']).then((res: any) => {
            //     if (res.error) this.showMessageError(res.error)
            //     // else {
            //     //   this.root.bill['shipping_document_info'] = res.response?.shipping_document_info
            //     //   this.root.bill['code_render'] = this.root.bill.shipping_carrier == 'Shopee Express Instant' ? this.root.bill['order_sn'] : res.response?.shipping_document_info.tracking_number
            //     // }
            //     
            //     this.vhComponent.hideLoading(0)
            //     this.loading = false
            //   }).catch(err => { 
            //   ;this.showMessageError(); this.loading = false; this.vhComponent.hideLoading(0) })
            // } else {
            //   
            this.vhEcommerce.getTrackingNumberShopee(this.root.bill['order_sn'], this.infoShop['access_token'], this.infoShop['_id']).then((result) => {
                var _a;
                this.root.bill['shipping_document_info'] = {};
                if (result.error)
                    this.showMessageError(result.error);
                else
                    this.root.bill['shipping_document_info'].tracking_number = ((_a = result.response) === null || _a === void 0 ? void 0 : _a.tracking_number) || result.tracking_number;
                this.loading = false;
                this.vhComponent.hideLoading(0);
                this.root.bill['code_render'] = this.root.bill.shipping_carrier == 'Shopee Express Instant' ? this.root.bill['order_sn'] : this.root.bill['shipping_document_info'].tracking_number;
            }, error => {
            }).catch(err => { this.showMessageError(); this.loading = false; });
            // }
        });
    }
    goBack() {
        this.router.navigate([this.root.path], { state: this.root });
    }
    showMessageError(err) {
        this.vhComponent.alertMessageDesktop('error', err || 'Xảy ra lỗi khi lấy dữ liệu');
    }
    /**render ra hình ảnh nhà giao hàng */
    renderLogoImage(name) {
        if (name.indexOf('ninja') >= 0)
            return 'assets/icon/management/ecommerce/ninjavan-express.png';
        else if (name.indexOf('viettel') >= 0)
            return 'assets/icon/management/ecommerce/viettel-express.png';
        else if (name.indexOf('grab') >= 0)
            return 'assets/icon/management/ecommerce/shopee-grab.png';
        else if (name.indexOf('best') >= 0)
            return 'assets/icon/management/ecommerce/best-express.png';
        else if (name.indexOf('giao hàng nhanh') >= 0)
            return 'assets/icon/management/ecommerce/ghn-express.png';
        else if (name.indexOf('giao hàng tiết kiệm') >= 0)
            return 'assets/icon/management/ecommerce/giaohangtietkiem-express.png';
        else if (name.indexOf('j&t') >= 0)
            return 'assets/icon/management/ecommerce/j&t-express.png';
        else
            return 'assets/icon/management/ecommerce/shopee-express.png';
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhEcommerce), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient)); };
PrintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 6, vars: 4, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "tabset-print-shopee", "class", "hideScrollbar", 4, "ngIf"], ["id", "tabset-print-shopee", 1, "hideScrollbar"], ["nzTitle", "K80"], [3, "bill", "infoShop"], ["nzTitle", "A4"], ["nzTitle", "A5"], ["nzTitle", "A6"], ["nzTitle", "B6"], ["nzTitle", "B7"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, PrintComponent_nz_tabset_5_Template, 13, 12, "nz-tabset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__.NzLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__.NzTabComponent, _k80_k80_component__WEBPACK_IMPORTED_MODULE_1__.K80Component, _a4_a4_component__WEBPACK_IMPORTED_MODULE_2__.A4Component, _a5_a5_component__WEBPACK_IMPORTED_MODULE_3__.A5Component, _a6_a6_component__WEBPACK_IMPORTED_MODULE_4__.A6Component, _b6_b6_component__WEBPACK_IMPORTED_MODULE_5__.B6Component, _b7_b7_component__WEBPACK_IMPORTED_MODULE_6__.B7Component], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\n  #tabset-print-shopee {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFBQTtFQUNJLHlCQUFBO0FBR0oiLCJmaWxlIjoicHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwICN0YWJzZXQtcHJpbnQtc2hvcGVlIHtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 17671:
/*!************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/shopee.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopeeComponent": () => (/* binding */ ShopeeComponent)
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function ShopeeComponent_ng_container_132_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopeeComponent_ng_container_132_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return (ctx_r5.modalCustomer["address"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, "Enter shop address + phone number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.modalCustomer["address"]);
} }
function ShopeeComponent_ng_container_132_nz_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 29);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzValue", item_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r7.name, " - ", item_r7.phone, " ");
} }
function ShopeeComponent_ng_container_132_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ShopeeComponent_ng_container_132_input_6_Template, 2, 4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopeeComponent_ng_container_132_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r8.modalCustomer["id_customer"] = $event); })("nzOnSearch", function ShopeeComponent_ng_container_132_Template_nz_select_nzOnSearch_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ShopeeComponent_ng_container_132_nz_option_9_Template, 1, 3, "nz-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 10, "Shop name"), ": ", ctx_r0.modalCustomer["info"] == null ? null : ctx_r0.modalCustomer["info"].data == null ? null : ctx_r0.modalCustomer["info"].data.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.modalCustomer.info == null ? null : ctx_r0.modalCustomer.info.type) == "shopee");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 12, "Select customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDisabled", ctx_r0.modalCustomer["existShop"])("ngModel", ctx_r0.modalCustomer["id_customer"])("nzServerSearch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.customerShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("**", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 14, "This customer will be assigned a debt to this shop when the invoice is issued"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 16, "The selected customer cannot be changed when issued invoice"), " ");
} }
function ShopeeComponent_ng_template_133_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_ng_template_133_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.cancelModalUpdateInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_ng_template_133_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.updateInfoShopee(); });
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
class ShopeeComponent {
    constructor(router, lang, vhComponent, vhQuerySales, vhAlgorithm, vhEcommerce) {
        var _a;
        this.router = router;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhEcommerce = vhEcommerce;
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
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Shopee..."), "transparent-loading", undefined, 0, true, 60000),
            this.vhEcommerce.refreshLocalProductListShopee(this.vhQuerySales.getDefaultBranch()._id)
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
        this.listShop = this.vhEcommerce.getlocalShopListShopee();
        console.log(this.listShop);
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
    updateInfoShopee() {
        this.modalCustomer['loading'] = true;
        let data = {
            id_customer: this.modalCustomer['id_customer'],
            address: this.modalCustomer['address'],
            date: new Date().toISOString()
        };
        this.vhEcommerce.updateShop(this.modalCustomer['info']._id, data)
            .then((bool) => {
            console.log(bool);
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
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/affiliate-product']);
    }
    gotoOrderStatus() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/order-status']);
    }
    gotoSellingPrice() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/update-selling-price']);
    }
    gotoUpdateStock() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/update-stock']);
    }
    gotoReturnRefund() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/return-refund']);
    }
    gotoCashflow() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/cashflow']);
    }
    gotoControlExportGoods() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/export-goods']);
    }
    gotoControlIssueInvoice() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/issue-invoice']);
    }
    gotoControl() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/control']);
    }
    gotoProductOnShop() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/product-on-shop']);
    }
    gotoControlReport() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/report']);
    }
    gotoAutoSale() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/auto-sale']);
    }
    gotoIssueByShopee() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/e-invoice-shopee']);
    }
    gotoIssueBySales365() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/e-invoice-sales365']);
    }
}
ShopeeComponent.ɵfac = function ShopeeComponent_Factory(t) { return new (t || ShopeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhEcommerce)); };
ShopeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShopeeComponent, selectors: [["app-shopee"]], decls: 135, vars: 47, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nz-row", "", 1, "cus-row"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "item-cus"], [1, "ng-item", "center-all-content", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["src", "assets/icon/management/ecommerce/order-status.svg"], [1, "center-text", "medium-size"], ["src", "assets/icon/management/ecommerce/returns-refund.svg"], ["src", "assets/icon/management/ecommerce/updating-stock.svg"], ["src", "assets/icon/management/ecommerce/update-selling-price.svg"], ["src", "assets/icon/management/ecommerce/affiliate-product.svg"], ["src", "assets/icon/management/ecommerce/product-on-sendo.svg"], ["src", "assets/icon/management/ecommerce/return-control-goods.svg"], ["src", "assets/icon/management/ecommerce/issue-invoice.svg"], ["src", "assets/icon/management/report.svg"], ["src", "assets/icon/management/ecommerce/auto-sale.svg"], ["src", "assets/icon/management/einvoice.svg"], ["nzWidth", "400px", 3, "nzMaskClosable", "nzClosable", "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSettings", ""], ["nz-col", "", "nzSpan", "24", 1, "update-info-modal"], ["style", "margin-top:0 !important", "type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["nzShowSearch", "", 1, "cus-select", 3, "nzDisabled", "ngModel", "nzServerSearch", "nzPlaceHolder", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "cus-select-note"], ["type", "text", "nz-input", "", 2, "margin-top", "0 !important", 3, "ngModel", "placeholder", "ngModelChange"], [3, "nzValue", "nzLabel"], ["nz-button", "", 1, "nz-hover-border", 3, "click"], ["nz-button", "", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white) !important", 3, "disabled", "nzLoading", "click"]], template: function ShopeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_11_listener() { return ctx.gotoOrderStatus(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_21_listener() { return ctx.gotoReturnRefund(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_31_listener() { return ctx.gotoUpdateStock(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_41_listener() { return ctx.gotoSellingPrice(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_51_listener() { return ctx.gotoAffiliateProduct(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_61_listener() { return ctx.gotoProductOnShop(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_71_listener() { return ctx.gotoControl(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_81_listener() { return ctx.gotoControlIssueInvoice(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_91_listener() { return ctx.gotoControlReport(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_101_listener() { return ctx.gotoAutoSale(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_111_listener() { return ctx.gotoIssueByShopee(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopeeComponent_Template_div_click_121_listener() { return ctx.gotoIssueBySales365(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function ShopeeComponent_Template_nz_modal_nzVisibleChange_130_listener($event) { return (ctx.modalCustomer["visible"] = $event); })("nzOnCancel", function ShopeeComponent_Template_nz_modal_nzOnCancel_130_listener() { return (ctx.modalCustomer["visible"] = false); })("nzOnOk", function ShopeeComponent_Template_nz_modal_nzOnOk_130_listener() { return ctx.updateInfoShopee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](131, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, ShopeeComponent_ng_container_132_Template, 16, 18, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, ShopeeComponent_ng_template_133_Template, 6, 8, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 19, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Shopee");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 31, "Product on Shopee"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMaskClosable", false)("nzClosable", false)("nzFooter", _r1)("nzVisible", ctx.modalCustomer["visible"])("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](131, 45, "Shopee configuration"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000040;\n  border-radius: 15px;\n  flex-direction: column;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .item-cus[_ngcontent-%COMP%] {\n  padding: 8px;\n  height: 24vh;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.update-info-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.update-info-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.update-info-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  border-radius: 4px;\n}\n.update-info-modal[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.update-info-modal[_ngcontent-%COMP%]   .cus-select-note[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n  font-size: 0.8rem;\n  margin-top: 12px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHUjtBQUZRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBSVo7QUFIWTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBQUtoQjtBQURJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxnQ0FBQTtBQUdaO0FBQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQUFJO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6InNob3BlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5jdXMtcm93IHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgLm5nLWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwNDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jdXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDI0dmg7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4udXBkYXRlLWluZm8tbW9kYWwge1xyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY3VzLXNlbGVjdC1ub3RlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 5500:
/*!*********************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/shopee.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopeeModule": () => (/* binding */ ShopeeModule)
/* harmony export */ });
/* harmony import */ var _print_k80_k80_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print/k80/k80.component */ 34818);
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print/print.component */ 46913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shopee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopee.component */ 17671);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _print_a4_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print/a4/a4.component */ 96706);
/* harmony import */ var _print_a5_a5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print/a5/a5.component */ 11033);
/* harmony import */ var _print_a6_a6_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print/a6/a6.component */ 87377);
/* harmony import */ var _print_b6_b6_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print/b6/b6.component */ 58000);
/* harmony import */ var _print_b7_b7_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./print/b7/b7.component */ 43330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
















const routes = [
    {
        path: '',
        component: _shopee_component__WEBPACK_IMPORTED_MODULE_2__.ShopeeComponent
    },
    {
        path: 'print',
        component: _print_print_component__WEBPACK_IMPORTED_MODULE_1__.PrintComponent
    },
    {
        path: 'affiliate-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_affiliate-product_affiliate-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./affiliate-product/affiliate-product.module */ 91138)).then(m => m.AffiliateProductModule)
    },
    {
        path: 'order-status',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_order-status_order-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-status/order-status.module */ 62062)).then(m => m.OrderStatusModule)
    },
    {
        path: 'update-selling-price',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_update-selling-price_update-selling-price_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-selling-price/update-selling-price.module */ 18834)).then(m => m.UpdateSellingPriceModule)
    },
    {
        path: 'update-stock',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_update-stock_update-stock_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./update-stock/update-stock.module */ 52741)).then(m => m.UpdateStockModule)
    },
    {
        path: 'return-refund',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_return-refund_return-refund_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./return-refund/return-refund.module */ 82392)).then(m => m.ReturnRefundModule)
    },
    {
        path: 'issue-invoice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_issue-invoice_issue-invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./issue-invoice/issue-invoice.module */ 95221)).then(m => m.IssueInvoiceModule)
    },
    {
        path: 'product-on-shop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_modal-link-product-ecommerce_modal-lin-a5707d"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_shopee_product-on-shop_product-on-shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-on-shop/product-on-shop.module */ 5564)).then(m => m.ProductOnShopModule)
    },
    {
        path: 'control',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_control_control_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./control/control.module */ 81372)).then(m => m.ControlModule)
    },
    {
        path: 'auto-sale',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_auto-sale_auto-sale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auto-sale/auto-sale.module */ 68629)).then(m => m.AutoSaleModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_shopee_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report/report.module */ 77874)).then(m => m.ReportModule)
    },
    {
        path: 'e-invoice-shopee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_modal-link-product-ecommerce_modal-lin-a5707d"), __webpack_require__.e("default-src_app_sales_menu_manage_ecommerce_components_edit-customer-tax_edit-customer-tax_mo-70f626"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_shopee_e-invoice-shopee_e-invoice-shopee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice-shopee/e-invoice-shopee.module */ 51130)).then(m => m.EInvoiceShopeeModule)
    },
    {
        path: 'e-invoice-sales365',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_shopee_e-invoice-sales365_e-invoice-sales365_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice-sales365/e-invoice-sales365.module */ 80925)).then(m => m.EInvoiceSales365Module)
    }
];
class ShopeeModule {
}
ShopeeModule.ɵfac = function ShopeeModule_Factory(t) { return new (t || ShopeeModule)(); };
ShopeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ShopeeModule });
ShopeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ShopeeModule, { declarations: [_shopee_component__WEBPACK_IMPORTED_MODULE_2__.ShopeeComponent, _print_print_component__WEBPACK_IMPORTED_MODULE_1__.PrintComponent, _print_k80_k80_component__WEBPACK_IMPORTED_MODULE_0__.K80Component, _print_a4_a4_component__WEBPACK_IMPORTED_MODULE_4__.A4Component, _print_a5_a5_component__WEBPACK_IMPORTED_MODULE_5__.A5Component, _print_a6_a6_component__WEBPACK_IMPORTED_MODULE_6__.A6Component, _print_b6_b6_component__WEBPACK_IMPORTED_MODULE_7__.B6Component, _print_b7_b7_component__WEBPACK_IMPORTED_MODULE_8__.B7Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_shopee_shopee_module_ts.js.map