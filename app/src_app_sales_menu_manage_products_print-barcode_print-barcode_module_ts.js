"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_products_print-barcode_print-barcode_module_ts"],{

/***/ 49124:
/*!*************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/detail/detail.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function DetailComponent_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 44);
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", option_r6)("nzValue", option_r6);
} }
function DetailComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Length"), ":");
} }
function DetailComponent_input_65_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_input_65_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.propertySelected.width = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx_r2.stamp.width)("ngModel", ctx_r2.propertySelected.width);
} }
function DetailComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "mm |");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "white-space": a0, "text-align": a1, "height.mm": a2 }; };
function DetailComponent_div_77_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](2, _c0, item_r9.white_space, item_r9.text_align, item_r9.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.value);
} }
const _c1 = function (a0, a1) { return { "white-space": a0, "text-align": a1 }; };
function DetailComponent_div_77_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c1, item_r9.white_space, item_r9.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(item_r9.value));
} }
const _c2 = function (a0, a1, a2) { return { "height.mm": a0, "width.mm": a1, "opacity": a2 }; };
function DetailComponent_div_77_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canvas", 51);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](1, _c2, item_r9.height, item_r9.width, item_r9.status ? "1" : "0"));
} }
const _c3 = function (a0) { return { "selected": a0 }; };
const _c4 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "height.mm": a5, "width.mm": a6, "justify-content": a7 }; };
function DetailComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_div_77_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const item_r9 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r16.propertySelected = item_r9; ctx_r16.white_space = ctx_r16.propertySelected.white_space == "normal" ? true : false; return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailComponent_div_77_span_1_Template, 2, 6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailComponent_div_77_span_2_Template, 2, 5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DetailComponent_div_77_canvas_3_Template, 1, 5, "canvas", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", item_r9.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c3, item_r9 == ctx_r4.propertySelected))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction8"](8, _c4, item_r9.font_size, item_r9.font_weight, item_r9.text_decoration, item_r9.font_style, item_r9.y, item_r9.height, ctx_r4.stamp.width, item_r9.type == "barcode" ? item_r9.justify_content : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r9.type != "barcode" && item_r9.type != "price" && item_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r9.type == "price" && item_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r9.type == "barcode");
} }
function DetailComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_ng_container_80_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.col = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nz-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nz-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "nz-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "nz-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_ng_container_80_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "Choose the number of label on the row"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 12, "Enter the number of label to print"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 14, "Enter the number of label to print"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.number);
} }
const _c5 = function (a0) { return { "opacity": a0 }; };
const _c6 = function (a0) { return { "height.px": a0 }; };
const _c7 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
class DetailComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery, languageService) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.languageService = languageService;
        this.listUpdateCoor = [];
        this.listOfFontSize = [8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 32, 36, 48, 72];
        this.number = 10;
        this.col = 2;
        this.showModalPrintBarcode = false;
        this.listRowBarcode = [false]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        this.white_space = true;
        this.value = 3.78;
        this.stamp = this.router.getCurrentNavigation().extras.state;
        this.stamp.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.property, 'index');
        this.propertySelected = this.stamp.property[0];
    }
    ngOnInit() {
        this.listUpdateCoor = [
            {
                type: 'name',
                y: this.stamp.property[0].y
            },
            {
                type: 'barcode',
                y: this.stamp.property[1].y
            },
            {
                type: 'barcode-text',
                y: this.stamp.property[2].y
            },
            {
                type: 'price',
                y: this.stamp.property[3].y
            }
        ];
        this.white_space = this.propertySelected.white_space == 'normal' ? true : false;
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.distanceParent = document.getElementById('boundary').getBoundingClientRect().top;
        if (document.querySelector(".barcode"))
            this.renderBarcode(this.stamp.property[2].value);
    }
    ngAfterViewChecked() {
        if (document.querySelector('#scroll'))
            this.heightScroll = document.querySelector('#scroll').clientHeight - 16;
        this.cdf.detectChanges();
    }
    changeBarcode() {
        if (this.propertySelected.type == 'barcode' || this.propertySelected.type == 'barcode-text') {
            this.renderBarcode(this.propertySelected.value);
            this.stamp.property[2].value = this.propertySelected.value;
            this.stamp.property[1].value = this.propertySelected.value;
        }
    }
    renderBarcode(value) {
        jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", value, {
            displayValue: false,
            // height: 65
        });
    }
    changeWhiteSpace(event) {
        this.propertySelected.white_space = event ? 'normal' : 'nowrap';
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/design-barcode']);
    }
    save() {
        this.vhComponent.showLoading('').then(() => {
            this.vhQuery.updateDoc("barcode_designs", this.stamp._id, { property: [{
                        type: 'name',
                        font_size: this.stamp.property[0].font_size,
                        text_align: this.stamp.property[0].text_align,
                        status: this.stamp.property[0].status,
                        font_weight: this.stamp.property[0].font_weight,
                        font_style: this.stamp.property[0].font_style,
                        text_decoration: this.stamp.property[0].text_decoration,
                        white_space: this.stamp.property[0].white_space,
                        y: this.listUpdateCoor[0].y,
                        height: this.stamp.property[0].height,
                        value: this.stamp.property[0].value,
                        index: 0,
                    },
                    {
                        type: 'barcode',
                        font_size: this.stamp.property[1].font_size,
                        text_align: this.stamp.property[1].text_align,
                        status: this.stamp.property[1].status,
                        font_weight: this.stamp.property[1].font_weight,
                        font_style: this.stamp.property[1].font_style,
                        text_decoration: this.stamp.property[1].text_decoration,
                        white_space: this.stamp.property[1].white_space,
                        y: this.listUpdateCoor[1].y,
                        width: this.stamp.property[1].width,
                        height: this.stamp.property[1].height,
                        value: this.stamp.property[1].value,
                        index: 1,
                        justify_content: this.stamp.property[1].justify_content,
                    },
                    {
                        type: 'barcode-text',
                        font_size: this.stamp.property[2].font_size,
                        text_align: this.stamp.property[2].text_align,
                        status: this.stamp.property[2].status,
                        font_weight: this.stamp.property[2].font_weight,
                        font_style: this.stamp.property[2].font_style,
                        text_decoration: this.stamp.property[2].text_decoration,
                        white_space: this.stamp.property[2].white_space,
                        y: this.listUpdateCoor[2].y,
                        height: this.stamp.property[2].height,
                        value: this.stamp.property[2].value,
                        index: 2,
                    },
                    {
                        type: 'price',
                        font_size: this.stamp.property[3].font_size,
                        text_align: this.stamp.property[3].text_align,
                        status: this.stamp.property[3].status,
                        font_weight: this.stamp.property[3].font_weight,
                        font_style: this.stamp.property[3].font_style,
                        text_decoration: this.stamp.property[3].text_decoration,
                        white_space: this.stamp.property[3].white_space,
                        y: this.listUpdateCoor[3].y,
                        height: this.stamp.property[3].height,
                        value: this.stamp.property[3].value,
                        index: 3,
                    }] }).then((bool) => {
                this.vhComponent.hideLoading(0);
                setTimeout(() => {
                    this.goBack();
                }, 200);
            }, error => {
                this.vhComponent.hideLoading(0);
            });
        });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "stamp-test",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp { width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 3) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
    //lấy tọa độ x y sau khi thực hiện kéo thả và lưu tọa độ mới
    onDragEnded(event, item) {
        // let coordinates = event.source.getFreeDragPosition();//json chứa tọa độ x,y sau khi kéo thả 
        //  coordinates = { //lấy tọa độ mới của thiết bị ngữ cảnh
        //   x: ( coordinates.x /  this.stamp.height) + item.x,
        //   y: ( coordinates.y /  (this.stamp.height)) + item.y //cộng thêm tọa độ cũ
        // }
        switch (item.type) {
            case 'name': {
                this.listUpdateCoor[0].y = document.getElementById(item.type).getBoundingClientRect().top - this.distanceParent;
                break;
            }
            case 'barcode': {
                this.listUpdateCoor[1].y = document.getElementById(item.type).getBoundingClientRect().top - this.distanceParent;
                break;
            }
            case 'barcode-text': {
                this.listUpdateCoor[2].y = document.getElementById(item.type).getBoundingClientRect().top - this.distanceParent;
                break;
            }
            case 'price': {
                this.listUpdateCoor[3].y = document.getElementById(item.type).getBoundingClientRect().top - this.distanceParent;
                break;
            }
        }
    }
    gotoPrintBarcode() {
        this.stamp.property = [{
                type: 'name',
                font_size: this.stamp.property[0].font_size,
                text_align: this.stamp.property[0].text_align,
                status: this.stamp.property[0].status,
                font_weight: this.stamp.property[0].font_weight,
                font_style: this.stamp.property[0].font_style,
                text_decoration: this.stamp.property[0].text_decoration,
                white_space: this.stamp.property[0].white_space,
                y: this.listUpdateCoor[0].y,
                height: this.stamp.property[0].height,
                value: this.stamp.property[0].value,
                index: 0,
            },
            {
                type: 'barcode',
                font_size: this.stamp.property[1].font_size,
                text_align: this.stamp.property[1].text_align,
                status: this.stamp.property[1].status,
                font_weight: this.stamp.property[1].font_weight,
                font_style: this.stamp.property[1].font_style,
                text_decoration: this.stamp.property[1].text_decoration,
                white_space: this.stamp.property[1].white_space,
                y: this.listUpdateCoor[1].y,
                width: this.stamp.property[1].width,
                height: this.stamp.property[1].height,
                value: this.stamp.property[1].value,
                index: 1,
                justify_content: this.stamp.property[1].justify_content,
            },
            {
                type: 'barcode-text',
                font_size: this.stamp.property[2].font_size,
                text_align: this.stamp.property[2].text_align,
                status: this.stamp.property[2].status,
                font_weight: this.stamp.property[2].font_weight,
                font_style: this.stamp.property[2].font_style,
                text_decoration: this.stamp.property[2].text_decoration,
                white_space: this.stamp.property[2].white_space,
                y: this.listUpdateCoor[2].y,
                height: this.stamp.property[2].height,
                value: this.stamp.property[2].value,
                index: 2,
            },
            {
                type: 'price',
                font_size: this.stamp.property[3].font_size,
                text_align: this.stamp.property[3].text_align,
                status: this.stamp.property[3].status,
                font_weight: this.stamp.property[3].font_weight,
                font_style: this.stamp.property[3].font_style,
                text_decoration: this.stamp.property[3].text_decoration,
                white_space: this.stamp.property[3].white_space,
                y: this.listUpdateCoor[3].y,
                height: this.stamp.property[3].height,
                value: this.stamp.property[3].value,
                index: 3,
            }];
        // this.router.navigate(['/sales/dashboard/manage/products/products-list/print-two-col'], { state:{col: this.col,number : this.number,barcode:  this.list_barcode[this.list_barcode.findIndex(item => item._id == this.radioValue)], formProduct: {...this.ProductForm.value,_id:this.data.formProduct._id}} })
        switch (this.col) {
            case 1: {
                this.router.navigate(['/sales/dashboard/manage/design-barcode/print-one-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 2: {
                this.router.navigate(['/sales/dashboard/manage/design-barcode/print-two-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 3: {
                this.router.navigate(['/sales/dashboard/manage/design-barcode/print-three-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 4: {
                this.router.navigate(['/sales/dashboard/manage/design-barcode/print-four-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 5: {
                this.router.navigate(['/sales/dashboard/manage/design-barcode/print-five-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            default: {
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Không hỗ trợ kiểu tem này"));
            }
        }
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 81, vars: 72, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "left-all-content"], [1, "title"], ["nz-row", "", 2, "background", "#f0f2f5"], ["nz-col", "", "nzSpan", "24", 1, "left-all-content"], ["nzMode", "default", "nzPlaceHolder", "K\u00EDch th\u01B0\u1EDBc ph\u00F4ng ch\u1EEF", 1, "font-text-size", 2, "width", "60px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "right-all-content", 3, "ngStyle"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-bold", 3, "disabled", "nzType", "click"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-italic", 3, "disabled", "nzType", "click"], ["nz-icon", "", "nzType", "italic", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-underline", 3, "disabled", "nzType", "click"], ["nz-icon", "", "nzType", "underline", "nzTheme", "outline"], [1, "right-all-content"], ["nz-button", "", 1, "font-text-btn", 3, "nzType", "click"], ["nz-icon", "", "nzType", "align-left", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-center", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-right", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "center-all-content", 3, "disabled", "nzType", "click"], ["src", "assets/icon/management/design-barcode/icon-text-justify.svg", 2, "font-size", "1.2rem", 3, "color"], ["nz-checkbox", "", 2, "margin-left", "8px", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-row", "", 2, "background", "#f0f2f5", "padding", "8px"], ["nz-col", "", "nzSpan", "8", 1, "beetween-all-content", 2, "justify-content", "space-between"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 2, "margin-right", "16px", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "16", 1, "beetween-all-content"], ["nz-input", "", "type", "text", 2, "width", "150px", "padding", "8px", 3, "ngModel", "ngModelChange", "blur"], [4, "ngIf"], ["style", "width: 60px;padding: 8px 0 8px 8px;", "nz-input", "", "type", "number", 3, "max", "ngModel", "ngModelChange", 4, "ngIf"], ["nz-input", "", "type", "number", 2, "width", "60px", "padding", "8px 0 8px 8px", 3, "max", "ngModel", "ngModelChange"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle", "click"], ["id", "stamp-test", 2, "height", "100%", "margin-top", "-1.5mm", "margin-left", "0.05in", "z-index", "2"], [1, "stamp", 3, "ngStyle"], [2, "position", "relative", "overflow", "hidden", 3, "ngStyle"], ["style", "display: flex;position: absolute;", 3, "id", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "nzLabel", "nzValue"], [2, "display", "flex", "position", "absolute", 3, "id", "ngClass", "ngStyle", "click"], ["style", " overflow: hidden;line-height: 1;width: 100%;z-index: 2;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", "z-index", "2", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], [3, "ngModel", "ngModelChange"], ["nzLabel", "1", 3, "nzValue"], ["nzLabel", "2", 3, "nzValue"], ["nzLabel", "3", 3, "nzValue"], ["nzLabel", "4", 3, "nzValue"], ["nzLabel", "5", 3, "nzValue"], ["type", "number", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_nz_select_ngModelChange_14_listener($event) { return ctx.propertySelected.font_size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DetailComponent_nz_option_15_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_18_listener() { return ctx.propertySelected.font_weight = ctx.propertySelected.font_weight == "bold" ? "500" : "bold"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_20_listener() { return ctx.propertySelected.font_style = ctx.propertySelected.font_style == "normal" ? "italic" : "normal"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_22_listener() { return ctx.propertySelected.text_decoration = ctx.propertySelected.text_decoration == "none" ? "underline" : "none"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_26_listener() { ctx.propertySelected.text_align = "left"; return ctx.propertySelected.justify_content = "left"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_28_listener() { ctx.propertySelected.text_align = "center"; return ctx.propertySelected.justify_content = "center"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_30_listener() { ctx.propertySelected.text_align = "right"; return ctx.propertySelected.justify_content = "right"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_32_listener() { return ctx.propertySelected.text_align = "justify"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_label_ngModelChange_35_listener($event) { return ctx.white_space = $event; })("ngModelChange", function DetailComponent_Template_label_ngModelChange_35_listener($event) { return ctx.changeWhiteSpace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_label_ngModelChange_39_listener($event) { return ctx.propertySelected.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_44_listener() { ctx.printBrowser(); return ctx.propertySelected = {}; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_48_listener() { ctx.showModalPrintBarcode = true; return ctx.propertySelected = {}; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_52_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_input_ngModelChange_61_listener($event) { return ctx.propertySelected.value = $event; })("blur", function DetailComponent_Template_input_blur_61_listener() { return ctx.changeBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, DetailComponent_span_64_Template, 3, 3, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, DetailComponent_input_65_Template, 1, 2, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, DetailComponent_span_66_Template, 2, 0, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_input_ngModelChange_70_listener($event) { return ctx.propertySelected.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " mm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_73_listener() { return ctx.propertySelected = {}; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, DetailComponent_div_77_Template, 4, 17, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "nz-modal", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function DetailComponent_Template_nz_modal_nzVisibleChange_78_listener($event) { return ctx.showModalPrintBarcode = $event; })("nzOnCancel", function DetailComponent_Template_nz_modal_nzOnCancel_78_listener() { return ctx.showModalPrintBarcode = false; })("nzOnOk", function DetailComponent_Template_nz_modal_nzOnOk_78_listener() { return ctx.gotoPrintBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, DetailComponent_ng_container_80_Template, 15, 16, "ng-container", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 42, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stamp.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 44, "Label size"), ": ", ctx.stamp.width, "mm x ", ctx.stamp.height, "mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertySelected.font_size);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listOfFontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](62, _c5, ctx.propertySelected.type == "barcode" ? "0.5" : "1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.propertySelected.type == "barcode")("nzType", ctx.propertySelected.font_weight == "bold" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.propertySelected.type == "barcode")("nzType", ctx.propertySelected.font_style == "italic" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.propertySelected.type == "barcode")("nzType", ctx.propertySelected.text_decoration == "underline" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "left" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "center" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "right" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.propertySelected.type == "barcode")("nzType", ctx.propertySelected.text_align == "justify" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.propertySelected.text_align == "justify" ? "white" : "black");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.white_space)("nzDisabled", ctx.propertySelected.type == "barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 46, "Allow down the line"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertySelected.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 48, "Display"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 50, "View"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 52, "Print"), " barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 54, "Save"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](60, 56, "Enter value"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertySelected.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.propertySelected.type == "barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.propertySelected.type == "barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.propertySelected.type == "barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](69, 58, "Width"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx.stamp.height)("ngModel", ctx.propertySelected.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](64, _c6, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](66, _c7, ctx.stamp.width, ctx.stamp.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](69, _c7, ctx.stamp.width, ctx.stamp.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.stamp.property);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](79, 60, "Choose a label template"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx.showModalPrintBarcode);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__.NzCheckboxComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .stamp[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.border-left[_ngcontent-%COMP%] {\n  border-left: 1px solid #929292;\n  padding-left: 8px;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBREk7RUFDSSx5QkFBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdSO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUlaO0FBRlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUlaO0FBRlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFJWjtBQUhZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBS2hCO0FBSmdCO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFLcEI7QUFEUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFHWjtBQUZZO0VBQ0ksaUJBQUE7QUFJaEI7QUFGWTtFQUNJLGtCQUFBO0FBSWhCO0FBRlk7RUFDSSwwQkFBQTtBQUloQjtBQUNBO0VBQ0ksZ0NBQUE7QUFFSjtBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBR0o7QUFDRTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUFFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFHTiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9IFxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc3RhbXB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDY1LCA2NSwgNjUpO1xyXG4gICAgfVxyXG4gICAgLmZvbnQtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYtZmFtaWx5IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2l6ZSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDksIDkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi1ib2xkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaXRhbGljIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIC5ib3JkZXItbGVmdHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIH1cclxuICAuYmVldHdlZW4tYWxsLWNvbnRlbnR7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 47682:
/*!*************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/print-barcode.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintBarcodeComponent": () => (/* binding */ PrintBarcodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print-one-col/print-one-col.component */ 46601);
/* harmony import */ var _print_two_col_print_two_col_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print-two-col/print-two-col.component */ 3782);
/* harmony import */ var _print_three_col_print_three_col_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print-three-col/print-three-col.component */ 73379);
/* harmony import */ var _print_four_col_print_four_col_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print-four-col/print-four-col.component */ 67025);
/* harmony import */ var _print_five_col_print_five_col_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print-five-col/print-five-col.component */ 91290);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 70325);























function PrintBarcodeComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 25);
} }
function PrintBarcodeComponent_nz_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 11);
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzLabel", option_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzValue", option_r11._id);
} }
function PrintBarcodeComponent_tr_67_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 11);
} if (rf & 2) {
    const unit_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLabel", unit_r16.unit)("nzValue", unit_r16.ratio);
} }
function PrintBarcodeComponent_tr_67_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PrintBarcodeComponent_tr_67_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return data_r12.ratio = $event; })("ngModelChange", function PrintBarcodeComponent_tr_67_nz_select_5_Template_nz_select_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.changeUnit(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PrintBarcodeComponent_tr_67_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r12.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", data_r12.units);
} }
function PrintBarcodeComponent_tr_67_nz_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", item_r23._id)("nzLabel", item_r23.name);
} }
function PrintBarcodeComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_tr_67_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.vhComponent.copyValue(data_r12.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, PrintBarcodeComponent_tr_67_nz_select_5_Template, 2, 2, "nz-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nz-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PrintBarcodeComponent_tr_67_Template_nz_select_ngModelChange_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); data_r12.id_design_barcode = $event; return ctx_r26.updateIdBarcode($event, data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, PrintBarcodeComponent_tr_67_nz_option_10_Template, 1, 2, "nz-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "nz-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PrintBarcodeComponent_tr_67_Template_nz_select_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; return data_r12.number_column = $event; })("ngModelChange", function PrintBarcodeComponent_tr_67_Template_nz_select_ngModelChange_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r28.updateNumberColumnProduct(data_r12._id, data_r12.number_column); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "nz-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "nz-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "nz-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "nz-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "nz-input-number", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PrintBarcodeComponent_tr_67_Template_nz_input_number_ngModelChange_21_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; return data_r12.number_print = $event; })("ngModelChange", function PrintBarcodeComponent_tr_67_Template_nz_input_number_ngModelChange_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.updateNumberPrintProduct(data_r12._id, data_r12.number_print); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_tr_67_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const data_r12 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r31.printProduct(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", data_r12.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !data_r12.manysize);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", data_r12.barcode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r12.id_design_barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.list_design_barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r12.label_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", data_r12.number_column);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzMin", 1)("nzMax", 200)("ngModel", data_r12.number_print);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !data_r12.number_print || !data_r12.number_column || !data_r12.id_design_barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 17, "Print"), " barcode ");
} }
const _c0 = function (a0, a1, a2, a3) { return { formProduct: a0, barcode: a1, col: a2, number: a3 }; };
function PrintBarcodeComponent_app_print_one_col_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-print-one-col", 42);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("start_print", ctx_r6.start_print)("stamp", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](2, _c0, ctx_r6.product_selected, ctx_r6.barcode_selected, ctx_r6.product_selected.number_column, ctx_r6.product_selected.number_print));
} }
function PrintBarcodeComponent_app_print_two_col_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-print-two-col", 42);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("start_print", ctx_r7.start_print)("stamp", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](2, _c0, ctx_r7.product_selected, ctx_r7.barcode_selected, ctx_r7.product_selected.number_column, ctx_r7.product_selected.number_print));
} }
function PrintBarcodeComponent_app_print_three_col_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-print-three-col", 42);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("start_print", ctx_r8.start_print)("stamp", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](2, _c0, ctx_r8.product_selected, ctx_r8.barcode_selected, ctx_r8.product_selected.number_column, ctx_r8.product_selected.number_print));
} }
function PrintBarcodeComponent_app_print_four_col_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-print-four-col", 42);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("start_print", ctx_r9.start_print)("stamp", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](2, _c0, ctx_r9.product_selected, ctx_r9.barcode_selected, ctx_r9.product_selected.number_column, ctx_r9.product_selected.number_print));
} }
function PrintBarcodeComponent_app_print_five_col_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-print-five-col", 42);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("start_print", ctx_r10.start_print)("stamp", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction4"](2, _c0, ctx_r10.product_selected, ctx_r10.barcode_selected, ctx_r10.product_selected.number_column, ctx_r10.product_selected.number_print));
} }
const _c1 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c2 = function (a0) { return { y: a0 }; };
class PrintBarcodeComponent {
    constructor(router, vhQuerySales, vhAlgorithm, languageService, vhComponent, vhQuery, cdRef) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.cdRef = cdRef;
        this.keySearch = '';
        this.id_design_barcode_selected = 'all';
        this.list_product = this.vhQuerySales.getlocalDetailProducts().filter(e => !e.delete_hidden);
        this.list_all_product = this.vhQuerySales.getlocalDetailProducts().filter(e => !e.delete_hidden);
        this.list_search_product = this.vhQuerySales.getlocalDetailProducts().filter(e => !e.delete_hidden);
        this.list_design_barcode = [];
        this.list_search_design_barcode = [];
        this.product_selected = {};
        this.start_print = false;
        this.barcode_selected = {};
        //** hàm sort cho các cột */
        this.nameCol = false; // chọn sort cột tên sản phẩm
        this.barcodeCol = false; // Chọn sắp xếp theo barcode
        this.number_columnCol = false;
        this.number_printCol = false;
        this.label_areaCol = false;
    }
    ngOnInit() {
        this.getDesignBarcode();
    }
    /**
     * bắt sk thay đổi đơn vị sp, set lại giá và barcode cho sp
     * @example this.changeUnit(product_selected)
     */
    changeUnit(data) {
        data.barcode = data.units.find(e => e.ratio == data.ratio).barcode;
        data.price = data.units.find(e => e.ratio == data.ratio).price;
    }
    /**
     * get dữ liệu tem sản phẩm đã thiết kế
     * @example this.getDesignBarcode();
     */
    getDesignBarcode() {
        this.vhQuery.getDocsByFields("barcode_designs", { id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id }, type: { $eq: 1 } })
            .then((list_design_barcode) => {
            if (list_design_barcode.length) {
                this.list_design_barcode = list_design_barcode;
                // this.id_design_barcode_selected = list_design_barcode[0]._id
                this.barcode_selected = list_design_barcode[0];
                this.list_search_design_barcode = this.list_design_barcode;
                this.list_product = this.vhQuerySales.getlocalDetailProducts().filter(e => !e.delete_hidden).map(item => {
                    return Object.assign(Object.assign(Object.assign({}, item), this.vhQuerySales.getUnit_byRatio(item.units, 1)), { label_size: list_design_barcode.find(i => i._id == item.id_design_barcode) ? list_design_barcode.find(i => i._id == item.id_design_barcode).width + 'x' + list_design_barcode.find(i => i._id == item.id_design_barcode).height : '', label_name: list_design_barcode.find(i => i._id == item.id_design_barcode) ? list_design_barcode.find(i => i._id == item.id_design_barcode).name : '', label_area: list_design_barcode.find(i => i._id == item.id_design_barcode) ? list_design_barcode.find(i => i._id == item.id_design_barcode).width * list_design_barcode.find(i => i._id == item.id_design_barcode).height : 0 });
                });
                this.list_all_product = this.list_product;
                this.list_search_product = this.list_product;
            }
        });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/products']);
    }
    ngAfterViewChecked() {
        if (document.querySelector("#product-list") && document.querySelector(".ant-table-thead") && document.querySelector(".product-list-header")) {
            this.heightScroll = document.querySelector("#product-list").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".product-list-header").clientHeight - 100 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
   * tìm kiếm sản phẩm theo tên và barcode
   * @param value giá trị tìm kiếm từ input
   */
    search_Products(value) {
        this.keySearch = value;
        if (value.trim().length > 0) {
            this.list_search_product = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value.toLowerCase()), this.list_all_product, ["name", "barcode"]);
        }
        else
            this.list_search_product = this.list_all_product;
        this.searchByStamp(this.id_design_barcode_selected);
    }
    /**
     * lọc sp theo tem được chọn
     * @example this.searchByStamp('DKHWIDHIWDHUUWIDH')
     */
    searchByStamp(id_design_barcode_selected) {
        this.id_design_barcode_selected = id_design_barcode_selected;
        this.barcode_selected = this.list_search_design_barcode[this.list_search_design_barcode.findIndex(item => item._id == id_design_barcode_selected)];
        if (id_design_barcode_selected === "all") {
            this.list_product = this.list_search_product;
        }
        else
            this.list_product = this.list_search_product.filter(item => item.id_design_barcode == id_design_barcode_selected);
    }
    /**
     * lọc tem theo tên
     * @example this.search('')
     */
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.list_design_barcode = this.vhAlgorithm.searchList(tempVal, this.list_search_design_barcode, ['name']);
        else
            this.list_design_barcode = this.list_search_design_barcode;
    }
    /**
     * bắt sk nhấn nút in tem của sp
     * @example this.printProduct(product_selected)
     */
    printProduct(item) {
        this.barcode_selected = this.list_search_design_barcode.find(i => i._id == item.id_design_barcode);
        this.product_selected = item;
        this.start_print = true;
        setTimeout(() => {
            this.start_print = false;
        }, 3000);
    }
    /**
     * cập nhật trường số lượng tem cần in
     * @example this.updateNumberPrintProduct('DIWUHDIHDIUWHI',10)
     */
    updateNumberPrintProduct(id_product, number_print) {
        this.vhQuerySales.updateProduct(id_product, { number_print: number_print }).then((bool) => {
            if (!bool)
                this.vhComponent.alertMessageDesktop('error', this.languageService.translate("An error while updating product"));
        }, error => {
        });
    }
    /**
     * cập nhật trường số lượng tem trên hàng
     * @example this.updateNumberPrintProduct('DIWUHDIHDIUWHI',10)
     */
    updateNumberColumnProduct(id_product, number_column) {
        this.vhQuerySales.updateProduct(id_product, { number_column: number_column }).then((bool) => {
            if (!bool)
                this.vhComponent.alertMessageDesktop('error', this.languageService.translate("An error while updating product"));
        }, error => {
        });
    }
    /**
     * cập nhật trường mẫu tem được gán cho sp
     * @example this.updateNumberPrintProduct('DIWUHDIHDIUWHI',10)
     */
    updateIdBarcode(id_barcode, product) {
        this.vhQuerySales.updateProduct(product._id, { id_design_barcode: id_barcode }).then((bool) => {
            product['label_size'] = this.list_design_barcode.find(i => i._id == id_barcode).width + 'x' + this.list_design_barcode.find(i => i._id == id_barcode).height;
            product['id_design_barcode'] = id_barcode;
        }, error => {
        });
    }
    sortTable(colName) {
        switch (colName) {
            case 'name':
                if (this.nameCol) {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyDESC([...this.list_product], colName);
                }
                break;
            case 'barcode':
                if (this.barcodeCol) {
                    this.list_product = this.vhAlgorithm.sortNumberbyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortNumberbyDESC([...this.list_product], colName);
                }
                break;
            case 'number_column':
                if (this.number_columnCol) {
                    this.list_product = this.vhAlgorithm.sortNumberbyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortNumberbyDESC([...this.list_product], colName);
                }
                break;
            case 'number_print':
                if (this.number_printCol) {
                    this.list_product = this.vhAlgorithm.sortNumberbyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortNumberbyDESC([...this.list_product], colName);
                }
                break;
            case 'label_area':
                if (this.label_areaCol) {
                    this.list_product = this.vhAlgorithm.sortNumberbyASC([...this.list_product], 'label_size');
                }
                else {
                    this.list_product = this.vhAlgorithm.sortNumberbyDESC([...this.list_product], 'label_size');
                }
                break;
        }
    }
}
PrintBarcodeComponent.ɵfac = function PrintBarcodeComponent_Factory(t) { return new (t || PrintBarcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef)); };
PrintBarcodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PrintBarcodeComponent, selectors: [["app-print-barcode"]], decls: 74, vars: 69, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "product-list", 1, "height-layout"], ["nz-row", "", 1, "product-list-header"], ["nz-col", "", "nzSpan", "8", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "16", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "value", "placeholder", "keyup"], ["box", ""], ["suffixIconSearch", ""], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "nzPlaceHolder", "ngModel", "nzOnSearch", "ngModelChange"], [3, "nzLabel", "nzValue"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [2, "padding-top", "16px"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData"], ["allowSale", ""], ["nzWidth", "24%", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "12%", 2, "cursor", "pointer"], [2, "cursor", "pointer", 3, "click"], ["nzWidth", "18%"], ["nzAlign", "right"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["style", "display: none;", 3, "start_print", "stamp", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "search"], [2, "color", "var(--ion-color-vh-green)"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], ["nzShowSearch", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzAlign", "center"], ["nzLabel", "1", 3, "nzValue"], ["nzLabel", "2", 3, "nzValue"], ["nzLabel", "3", 3, "nzValue"], ["nzLabel", "4", 3, "nzValue"], ["nzLabel", "5", 3, "nzValue"], ["type", "number", "nz-input", "", "placeholder", "Basic usage", 3, "nzMin", "nzMax", "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "disabled", "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nzShowSearch", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"], [2, "display", "none", 3, "start_print", "stamp"]], template: function PrintBarcodeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function PrintBarcodeComponent_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13); return ctx.search_Products(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, PrintBarcodeComponent_ng_template_15_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzOnSearch", function PrintBarcodeComponent_Template_nz_select_nzOnSearch_17_listener($event) { return ctx.search($event); })("ngModelChange", function PrintBarcodeComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.id_design_barcode_selected = $event; })("ngModelChange", function PrintBarcodeComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.searchByStamp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PrintBarcodeComponent_nz_option_21_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nz-table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_Template_th_click_29_listener() { ctx.nameCol = !ctx.nameCol; return ctx.sortTable("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_Template_th_click_38_listener() { ctx.barcodeCol = !ctx.barcodeCol; return ctx.sortTable("barcode"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_Template_th_click_47_listener() { ctx.label_areaCol = !ctx.label_areaCol; return ctx.sortTable("label_area"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_Template_th_click_52_listener() { ctx.number_columnCol = !ctx.number_columnCol; return ctx.sortTable("number_column"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PrintBarcodeComponent_Template_th_click_57_listener() { ctx.number_printCol = !ctx.number_printCol; return ctx.sortTable("number_print"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, PrintBarcodeComponent_tr_67_Template, 27, 19, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](68, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, PrintBarcodeComponent_app_print_one_col_69_Template, 1, 7, "app-print-one-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, PrintBarcodeComponent_app_print_two_col_70_Template, 1, 7, "app-print-two-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, PrintBarcodeComponent_app_print_three_col_71_Template, 1, 7, "app-print-three-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, PrintBarcodeComponent_app_print_four_col_72_Template, 1, 7, "app-print-four-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, PrintBarcodeComponent_app_print_five_col_73_Template, 1, 7, "app-print-five-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 36, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 38, "Product list printed with labels"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSuffix", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 40, "Search for product name, barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.keySearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 42, "Choose a label template"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx.id_design_barcode_selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 44, "All"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzValue", "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.list_design_barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzNoResult", ctx.id_design_barcode_selected == "" ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 46, "Please select the filter") : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 48, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c1))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](67, _c2, ctx.heightScroll))("nzData", ctx.list_product);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 50, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzType", ctx.nameCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 52, "Unit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 54, "Barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzType", ctx.barcodeCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 56, "Label name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 58, "Size"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzType", ctx.label_areaCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](55, 60, "Number of labels on the row"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzType", ctx.number_columnCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](60, 62, "Number of labels to print"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzType", ctx.number_printCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](65, 64, "Functions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _r4.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx.product_selected.number_column);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", 5);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__.NzInputNumberComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_2__.PrintOneColComponent, _print_two_col_print_two_col_component__WEBPACK_IMPORTED_MODULE_3__.PrintTwoColComponent, _print_three_col_print_three_col_component__WEBPACK_IMPORTED_MODULE_4__.PrintThreeColComponent, _print_four_col_print_four_col_component__WEBPACK_IMPORTED_MODULE_5__.PrintFourColComponent, _print_five_col_print_five_col_component__WEBPACK_IMPORTED_MODULE_6__.PrintFiveColComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-right: 16px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n  border-color: var(--ion-color-vh-green) !important;\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 1200px) {\n  .btn-add[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n\n  .btn-data[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWJhcmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFDRTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQURJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBR1I7QUFBRTs7RUFFRSwyQ0FBQTtFQUNBLGtEQUFBO0FBR0o7QUFERTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQUZFO0VBQ0U7SUFDRSw0QkFBQTtFQUtKOztFQUhFO0lBQ0UsNEJBQUE7RUFNSjtBQUNGIiwiZmlsZSI6InByaW50LWJhcmNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgbnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgbnotc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIG56LWlucHV0LWdyb3Vwe1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYW50LWJ0bjpmb2N1cyxcclxuICAuYW50LWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kYXRhIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 1906:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/print-barcode.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintBarcodeModule": () => (/* binding */ PrintBarcodeModule)
/* harmony export */ });
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail/detail.component */ 49124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _print_barcode_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-barcode.component */ 47682);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _print_two_col_print_two_col_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print-two-col/print-two-col.component */ 3782);
/* harmony import */ var _print_three_col_print_three_col_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print-three-col/print-three-col.component */ 73379);
/* harmony import */ var _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print-one-col/print-one-col.component */ 46601);
/* harmony import */ var _print_four_col_print_four_col_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print-four-col/print-four-col.component */ 67025);
/* harmony import */ var _print_five_col_print_five_col_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print-five-col/print-five-col.component */ 91290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
















const routes = [
    {
        path: '',
        component: _print_barcode_component__WEBPACK_IMPORTED_MODULE_1__.PrintBarcodeComponent
    },
];
class PrintBarcodeModule {
}
PrintBarcodeModule.ɵfac = function PrintBarcodeModule_Factory(t) { return new (t || PrintBarcodeModule)(); };
PrintBarcodeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PrintBarcodeModule });
PrintBarcodeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PrintBarcodeModule, { declarations: [_print_barcode_component__WEBPACK_IMPORTED_MODULE_1__.PrintBarcodeComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_0__.DetailComponent,
        _print_two_col_print_two_col_component__WEBPACK_IMPORTED_MODULE_3__.PrintTwoColComponent,
        _print_three_col_print_three_col_component__WEBPACK_IMPORTED_MODULE_4__.PrintThreeColComponent,
        _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_5__.PrintOneColComponent,
        _print_four_col_print_four_col_component__WEBPACK_IMPORTED_MODULE_6__.PrintFourColComponent,
        _print_five_col_print_five_col_component__WEBPACK_IMPORTED_MODULE_7__.PrintFiveColComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 91290:
/*!*****************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/print-five-col/print-five-col.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintFiveColComponent": () => (/* binding */ PrintFiveColComponent)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = function (a0, a1, a2, a3) { return { "white-space": a0, "font-family": a1, "text-align": a2, "height.mm": a3 }; };
function PrintFiveColComponent_div_4_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r9.white_space, item_r9.font_family, item_r9.text_align, item_r9.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r9.value);
} }
const _c1 = function (a0, a1, a2) { return { "white-space": a0, "font-family": a1, "text-align": a2 }; };
function PrintFiveColComponent_div_4_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r9.white_space, item_r9.font_family, item_r9.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.vhAlgorithm.vhcurrencyunit_symbol(item_r9.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintFiveColComponent_div_4_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r9.height, item_r9.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "left.px": a5, "height.mm": a6, "width.mm": a7, "justify-content": a8, "z-index": a9, "display": a10 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintFiveColComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_2_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_4_div_2_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_4_div_2_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const idx_r10 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r9.font_size, item_r9.font_weight, item_r9.text_decoration, item_r9.font_style, item_r9.type == "price" && i_r3 == ctx_r4.listRowBarcode.length - 1 ? item_r9.y - 2 : item_r9.y, item_r9.x, item_r9.height, item_r9.width, item_r9.type == "barcode" ? item_r9.justify_content : "", item_r9.z_index, item_r9.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r10 == ctx_r4.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r9.type != "barcode" && item_r9.type != "price" && item_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r9.type == "price" && item_r9.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r9.type == "barcode" && item_r9.status);
} }
function PrintFiveColComponent_div_4_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r19.white_space, item_r19.font_family, item_r19.text_align, item_r19.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.value);
} }
function PrintFiveColComponent_div_4_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r19.white_space, item_r19.font_family, item_r19.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r22.vhAlgorithm.vhcurrencyunit_symbol(item_r19.value));
} }
function PrintFiveColComponent_div_4_div_3_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r19.height, item_r19.width));
} }
function PrintFiveColComponent_div_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_3_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_4_div_3_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_4_div_3_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const idx_r20 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r19.font_size, item_r19.font_weight, item_r19.text_decoration, item_r19.font_style, item_r19.type == "price" && i_r3 == ctx_r18.listRowBarcode.length - 1 ? item_r19.y - 2 : item_r19.y, item_r19.x, item_r19.height, item_r19.width, item_r19.type == "barcode" ? item_r19.justify_content : "", item_r19.z_index, item_r19.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r20 == ctx_r18.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r19.type != "barcode" && item_r19.type != "price" && item_r19.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r19.type == "price" && item_r19.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r19.type == "barcode" && item_r19.status);
} }
const _c5 = function (a0) { return { "width.mm": a0 }; };
function PrintFiveColComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_3_div_1_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r5.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.stamp.barcode.property);
} }
function PrintFiveColComponent_div_4_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r29.white_space, item_r29.font_family, item_r29.text_align, item_r29.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r29.value);
} }
function PrintFiveColComponent_div_4_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r29.white_space, item_r29.font_family, item_r29.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r32.vhAlgorithm.vhcurrencyunit_symbol(item_r29.value));
} }
function PrintFiveColComponent_div_4_div_4_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r29.height, item_r29.width));
} }
function PrintFiveColComponent_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_4_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_4_div_4_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_4_div_4_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const idx_r30 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r29.font_size, item_r29.font_weight, item_r29.text_decoration, item_r29.font_style, item_r29.type == "price" && i_r3 == ctx_r28.listRowBarcode.length - 1 ? item_r29.y - 2 : item_r29.y, item_r29.x, item_r29.height, item_r29.width, item_r29.type == "barcode" ? item_r29.justify_content : "", item_r29.z_index, item_r29.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r30 == ctx_r28.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r29.type != "barcode" && item_r29.type != "price" && item_r29.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r29.type == "price" && item_r29.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r29.type == "barcode" && item_r29.status);
} }
function PrintFiveColComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_4_div_1_Template, 4, 19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r6.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.stamp.barcode.property);
} }
function PrintFiveColComponent_div_4_div_5_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r39.white_space, item_r39.font_family, item_r39.text_align, item_r39.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r39.value);
} }
function PrintFiveColComponent_div_4_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r39.white_space, item_r39.font_family, item_r39.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r42.vhAlgorithm.vhcurrencyunit_symbol(item_r39.value));
} }
function PrintFiveColComponent_div_4_div_5_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r39.height, item_r39.width));
} }
function PrintFiveColComponent_div_4_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_5_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_4_div_5_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_4_div_5_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const idx_r40 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r39.font_size, item_r39.font_weight, item_r39.text_decoration, item_r39.font_style, item_r39.type == "price" && i_r3 == ctx_r38.listRowBarcode.length - 1 ? item_r39.y - 2 : item_r39.y, item_r39.x, item_r39.height, item_r39.width, item_r39.type == "barcode" ? item_r39.justify_content : "", item_r39.z_index, item_r39.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r40 == ctx_r38.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r39.type != "barcode" && item_r39.type != "price" && item_r39.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r39.type == "price" && item_r39.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r39.type == "barcode" && item_r39.status);
} }
function PrintFiveColComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_5_div_1_Template, 4, 19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r7.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.stamp.barcode.property);
} }
function PrintFiveColComponent_div_4_div_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r49.white_space, item_r49.font_family, item_r49.text_align, item_r49.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r49.value);
} }
function PrintFiveColComponent_div_4_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r49.white_space, item_r49.font_family, item_r49.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r52.vhAlgorithm.vhcurrencyunit_symbol(item_r49.value));
} }
function PrintFiveColComponent_div_4_div_6_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r49.height, item_r49.width));
} }
function PrintFiveColComponent_div_4_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_6_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_4_div_6_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_4_div_6_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const idx_r50 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r49.font_size, item_r49.font_weight, item_r49.text_decoration, item_r49.font_style, item_r49.type == "price" && i_r3 == ctx_r48.listRowBarcode.length - 1 ? item_r49.y - 2 : item_r49.y, item_r49.x, item_r49.height, item_r49.width, item_r49.type == "barcode" ? item_r49.justify_content : "", item_r49.z_index, item_r49.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r50 == ctx_r48.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r49.type != "barcode" && item_r49.type != "price" && item_r49.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r49.type == "price" && item_r49.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r49.type == "barcode" && item_r49.status);
} }
function PrintFiveColComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_4_div_6_div_1_Template, 4, 19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r8.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.stamp.barcode.property);
} }
const _c6 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
function PrintFiveColComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_4_div_2_Template, 4, 19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_4_div_3_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFiveColComponent_div_4_div_4_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintFiveColComponent_div_4_div_5_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintFiveColComponent_div_4_div_6_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c6, ctx_r0.stamp.barcode.width * 5, ctx_r0.stamp.barcode.height - 3, i_r3 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c5, ctx_r0.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col5);
} }
function PrintFiveColComponent_div_6_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r65.white_space, item_r65.font_family, item_r65.text_align, item_r65.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r65.value);
} }
function PrintFiveColComponent_div_6_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r65.white_space, item_r65.font_family, item_r65.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r68.vhAlgorithm.vhcurrencyunit_symbol(item_r65.value));
} }
function PrintFiveColComponent_div_6_div_2__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r65.height, item_r65.width));
} }
function PrintFiveColComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_2_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_6_div_2_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_6_div_2__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    const idx_r66 = ctx.index;
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r65.font_size, item_r65.font_weight, item_r65.text_decoration, item_r65.font_style, item_r65.type == "price" && i_r59 == ctx_r60.listRowBarcode.length - 1 ? item_r65.y - 2 : item_r65.y, item_r65.x, item_r65.height, item_r65.width, item_r65.type == "barcode" ? item_r65.justify_content : "", item_r65.z_index, item_r65.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r66 == ctx_r60.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r65.type != "barcode" && item_r65.type != "price" && item_r65.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r65.type == "price" && item_r65.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r65.type == "barcode" && item_r65.status);
} }
function PrintFiveColComponent_div_6_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r75.white_space, item_r75.font_family, item_r75.text_align, item_r75.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r75.value);
} }
function PrintFiveColComponent_div_6_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r75.white_space, item_r75.font_family, item_r75.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r78.vhAlgorithm.vhcurrencyunit_symbol(item_r75.value));
} }
function PrintFiveColComponent_div_6_div_3_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r75.height, item_r75.width));
} }
function PrintFiveColComponent_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_3_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_6_div_3_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_6_div_3_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const idx_r76 = ctx.index;
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r75.font_size, item_r75.font_weight, item_r75.text_decoration, item_r75.font_style, item_r75.type == "price" && i_r59 == ctx_r74.listRowBarcode.length - 1 ? item_r75.y - 2 : item_r75.y, item_r75.x, item_r75.height, item_r75.width, item_r75.type == "barcode" ? item_r75.justify_content : "", item_r75.z_index, item_r75.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r76 == ctx_r74.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r75.type != "barcode" && item_r75.type != "price" && item_r75.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r75.type == "price" && item_r75.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r75.type == "barcode" && item_r75.status);
} }
function PrintFiveColComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_3_div_1_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r61.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r61.stamp.barcode.property);
} }
function PrintFiveColComponent_div_6_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r85.white_space, item_r85.font_family, item_r85.text_align, item_r85.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r85.value);
} }
function PrintFiveColComponent_div_6_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r85.white_space, item_r85.font_family, item_r85.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r88.vhAlgorithm.vhcurrencyunit_symbol(item_r85.value));
} }
function PrintFiveColComponent_div_6_div_4_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r85.height, item_r85.width));
} }
function PrintFiveColComponent_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_4_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_6_div_4_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_6_div_4_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r85 = ctx.$implicit;
    const idx_r86 = ctx.index;
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r85.font_size, item_r85.font_weight, item_r85.text_decoration, item_r85.font_style, item_r85.type == "price" && i_r59 == ctx_r84.listRowBarcode.length - 1 ? item_r85.y - 2 : item_r85.y, item_r85.x, item_r85.height, item_r85.width, item_r85.type == "barcode" ? item_r85.justify_content : "", item_r85.z_index, item_r85.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r86 == ctx_r84.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r85.type != "barcode" && item_r85.type != "price" && item_r85.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r85.type == "price" && item_r85.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r85.type == "barcode" && item_r85.status);
} }
function PrintFiveColComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_4_div_1_Template, 4, 19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r62.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r62.stamp.barcode.property);
} }
function PrintFiveColComponent_div_6_div_5_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r95.white_space, item_r95.font_family, item_r95.text_align, item_r95.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r95.value);
} }
function PrintFiveColComponent_div_6_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r95.white_space, item_r95.font_family, item_r95.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r98.vhAlgorithm.vhcurrencyunit_symbol(item_r95.value));
} }
function PrintFiveColComponent_div_6_div_5_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r95.height, item_r95.width));
} }
function PrintFiveColComponent_div_6_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_5_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_6_div_5_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_6_div_5_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r95 = ctx.$implicit;
    const idx_r96 = ctx.index;
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r95.font_size, item_r95.font_weight, item_r95.text_decoration, item_r95.font_style, item_r95.type == "price" && i_r59 == ctx_r94.listRowBarcode.length - 1 ? item_r95.y - 2 : item_r95.y, item_r95.x, item_r95.height, item_r95.width, item_r95.type == "barcode" ? item_r95.justify_content : "", item_r95.z_index, item_r95.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r96 == ctx_r94.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r95.type != "barcode" && item_r95.type != "price" && item_r95.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r95.type == "price" && item_r95.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r95.type == "barcode" && item_r95.status);
} }
function PrintFiveColComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_5_div_1_Template, 4, 19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r63.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r63.stamp.barcode.property);
} }
function PrintFiveColComponent_div_6_div_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r105.white_space, item_r105.font_family, item_r105.text_align, item_r105.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r105.value);
} }
function PrintFiveColComponent_div_6_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r105.white_space, item_r105.font_family, item_r105.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r108.vhAlgorithm.vhcurrencyunit_symbol(item_r105.value));
} }
function PrintFiveColComponent_div_6_div_6_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r105.height, item_r105.width));
} }
function PrintFiveColComponent_div_6_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_6_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_6_div_6_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_6_div_6_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r105 = ctx.$implicit;
    const idx_r106 = ctx.index;
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r105.font_size, item_r105.font_weight, item_r105.text_decoration, item_r105.font_style, item_r105.type == "price" && i_r59 == ctx_r104.listRowBarcode.length - 1 ? item_r105.y - 2 : item_r105.y, item_r105.x, item_r105.height, item_r105.width, item_r105.type == "barcode" ? item_r105.justify_content : "", item_r105.z_index, item_r105.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r106 == ctx_r104.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r105.type != "barcode" && item_r105.type != "price" && item_r105.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r105.type == "price" && item_r105.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r105.type == "barcode" && item_r105.status);
} }
function PrintFiveColComponent_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_6_div_6_div_1_Template, 4, 19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r64.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r64.stamp.barcode.property);
} }
function PrintFiveColComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_6_div_2_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_6_div_3_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFiveColComponent_div_6_div_4_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintFiveColComponent_div_6_div_5_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintFiveColComponent_div_6_div_6_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c6, ctx_r1.stamp.barcode.width * 5, ctx_r1.stamp.barcode.height - 3, i_r59 == ctx_r1.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c5, ctx_r1.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r58.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r58.show_col3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r58.show_col4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r58.show_col5);
} }
const _c7 = function (a0) { return { "height.px": a0 }; };
class PrintFiveColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery, platform) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.start_print = false;
        this.listRowBarcode = [{ show_col2: false, show_col3: false, show_col4: false, show_col5: false }]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        // this.stamp = this.router.getCurrentNavigation().extras.state;
        // this.stamp.barcode.property =  this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property,'y')
    }
    ngOnChanges({ start_print }) {
        if (start_print && start_print.currentValue) {
            this.vhComponent.showLoading('')
                .then(() => {
                this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
                for (let item of this.stamp.barcode.property) {
                    switch (item.type) {
                        case 'barcode-text':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'price':
                            item.value = this.stamp.formProduct.price;
                            break;
                        case 'barcode':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'name':
                            item.value = this.stamp.formProduct.name;
                            break;
                    }
                }
                this.propertySelected = this.stamp.barcode.property[0];
                this.changeNummber();
                setTimeout(() => {
                    this.renderBarcode();
                }, 1000);
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                    this.printBrowser();
                }, 3000);
            });
        }
    }
    ngOnInit() {
    }
    changeNummber() {
        /**
         * nếu chia hết cho 5 thì hiện cả 5 tem trên hàng
         * ngược lại => khi push tới hàng cuối cùng thì check i = (number-1)/5 : cột thứ 1  hay = (number-2)/5 : cột thứ 2 hay = (number-3)/5 : cột thứ 3 hay = (number-4)/5 : cột thứ 4
         *
         */
        this.listRowBarcode = [];
        for (let i = 0; i < this.stamp.number / 5; i++) {
            if (this.stamp.number % 5 == 0)
                this.listRowBarcode.push({ show_col2: true, show_col3: true, show_col4: true, show_col5: true });
            else {
                if (i == (this.stamp.number - 1) / 5)
                    this.listRowBarcode.push({ show_col2: false, show_col3: false, show_col4: false, show_col5: false });
                else if (i == (this.stamp.number - 2) / 5)
                    this.listRowBarcode.push({ show_col2: true, show_col3: false, show_col4: false, show_col5: false });
                else if (i == (this.stamp.number - 3) / 5)
                    this.listRowBarcode.push({ show_col2: true, show_col3: true, show_col4: false, show_col5: false });
                else if (i == (this.stamp.number - 4) / 5)
                    this.listRowBarcode.push({ show_col2: true, show_col3: true, show_col4: true, show_col5: false });
                else
                    this.listRowBarcode.push({ show_col2: true, show_col3: true, show_col4: true, show_col5: true });
            }
        }
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/design-barcode/detail'], { state: this.stamp.barcode });
    }
    Print() {
        if (this.platform.is("electron"))
            this.printElectron();
        else
            this.printBrowser();
    }
    printElectron() {
        let html = document.getElementById("stamp-barcode-electron").innerHTML;
        electron.ipcRenderer.send("print-start", {
            html: html,
            deviceName: this.stamp.printer_name,
        });
        electron.ipcRenderer.on("print-done", (event, data) => {
            if (!data)
                this.vhComponent.alertMessageDesktop('warning', 'Printing failed', 3000);
        });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 4) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
}
PrintFiveColComponent.ɵfac = function PrintFiveColComponent_Factory(t) { return new (t || PrintFiveColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform)); };
PrintFiveColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintFiveColComponent, selectors: [["app-print-five-col"]], inputs: { start_print: "start_print", stamp: "stamp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp mb-6", "style", "display: flex;margin-left: -1mm;", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "stamp-barcode-electron", 2, "margin-top", "-1.5mm"], [1, "stamp", "mb-6", 2, "display", "flex", "margin-left", "-1mm", 3, "ngStyle"], [1, "border-top", 2, "position", "relative", "height", "100%", 3, "ngStyle"], ["style", " position: absolute;align-items: center;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: relative;height: 100%;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [2, "position", "absolute", "align-items", "center", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], ["style", " position: absolute;align-items: center;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [2, "position", "absolute", "align-items", "center", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", " position: absolute;align-items: center; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: absolute;align-items: center; overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", " position: absolute;align-items: center;overflow: hidden; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"]], template: function PrintFiveColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFiveColComponent_div_4_Template, 7, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintFiveColComponent_div_6_Template, 7, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c7, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWZpdmUtY29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSWhCO0FBSGdCO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFJcEI7QUFBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFWjtBQURZO0VBQ0ksaUJBQUE7QUFHaEI7QUFEWTtFQUNJLGtCQUFBO0FBR2hCO0FBRFk7RUFDSSwwQkFBQTtBQUdoQjtBQUVBO0VBQ0kseUJBQUE7QUFDSjtBQUNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0FBR0o7QUFEQTtFQUNJLGdDQUFBO0FBSUo7QUFGQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUtKIiwiZmlsZSI6InByaW50LWZpdmUtY29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfSBcclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2NSwgNjUsIDY1KTtcclxuICAgIH1cclxuICAgIC5mb250LXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLWZhbWlseSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNpemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDksIDkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi1ib2xkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaXRhbGljIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYm9yZGVyLWJvdHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XHJcbn1cclxuLmJvcmRlci10b3B7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQ7XHJcbn1cclxuLm1iLTZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2bW07XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 67025:
/*!*****************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/print-four-col/print-four-col.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintFourColComponent": () => (/* binding */ PrintFourColComponent)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = function (a0, a1, a2, a3) { return { "white-space": a0, "font-family": a1, "text-align": a2, "height.mm": a3 }; };
function PrintFourColComponent_div_4_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r8.white_space, item_r8.font_family, item_r8.text_align, item_r8.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.value);
} }
const _c1 = function (a0, a1, a2) { return { "white-space": a0, "font-family": a1, "text-align": a2 }; };
function PrintFourColComponent_div_4_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r8.white_space, item_r8.font_family, item_r8.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(item_r8.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintFourColComponent_div_4_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r8.height, item_r8.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "left.px": a5, "height.mm": a6, "width.mm": a7, "justify-content": a8, "z-index": a9, "display": a10 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintFourColComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_4_div_2_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_4_div_2_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_4_div_2_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const idx_r9 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r8.font_size, item_r8.font_weight, item_r8.text_decoration, item_r8.font_style, item_r8.type == "price" && i_r3 == ctx_r4.listRowBarcode.length - 1 ? item_r8.y - 2 : item_r8.y, item_r8.x, item_r8.height, item_r8.width, item_r8.type == "barcode" ? item_r8.justify_content : "", item_r8.z_index, item_r8.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r9 == ctx_r4.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.type != "barcode" && item_r8.type != "price" && item_r8.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.type == "price" && item_r8.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.type == "barcode" && item_r8.status);
} }
function PrintFourColComponent_div_4_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r18.white_space, item_r18.font_family, item_r18.text_align, item_r18.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r18.value);
} }
function PrintFourColComponent_div_4_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r18.white_space, item_r18.font_family, item_r18.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.vhAlgorithm.vhcurrencyunit_symbol(item_r18.value));
} }
function PrintFourColComponent_div_4_div_3_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r18.height, item_r18.width));
} }
function PrintFourColComponent_div_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_4_div_3_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_4_div_3_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_4_div_3_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const idx_r19 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r18.font_size, item_r18.font_weight, item_r18.text_decoration, item_r18.font_style, item_r18.type == "price" && i_r3 == ctx_r17.listRowBarcode.length - 1 ? item_r18.y - 2 : item_r18.y, item_r18.x, item_r18.height, item_r18.width, item_r18.type == "barcode" ? item_r18.justify_content : "", item_r18.z_index, item_r18.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r19 == ctx_r17.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r18.type != "barcode" && item_r18.type != "price" && item_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r18.type == "price" && item_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r18.type == "barcode" && item_r18.status);
} }
const _c5 = function (a0) { return { "width.mm": a0 }; };
function PrintFourColComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_4_div_3_div_1_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r5.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.stamp.barcode.property);
} }
function PrintFourColComponent_div_4_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r28.white_space, item_r28.font_family, item_r28.text_align, item_r28.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28.value);
} }
function PrintFourColComponent_div_4_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r28.white_space, item_r28.font_family, item_r28.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r31.vhAlgorithm.vhcurrencyunit_symbol(item_r28.value));
} }
function PrintFourColComponent_div_4_div_4_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r28.height, item_r28.width));
} }
function PrintFourColComponent_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_4_div_4_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_4_div_4_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_4_div_4_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const idx_r29 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r28.font_size, item_r28.font_weight, item_r28.text_decoration, item_r28.font_style, item_r28.type == "price" && i_r3 == ctx_r27.listRowBarcode.length - 1 ? item_r28.y - 2 : item_r28.y, item_r28.x, item_r28.height, item_r28.width, item_r28.type == "barcode" ? item_r28.justify_content : "", item_r28.z_index, item_r28.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r29 == ctx_r27.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.type != "barcode" && item_r28.type != "price" && item_r28.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.type == "price" && item_r28.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.type == "barcode" && item_r28.status);
} }
function PrintFourColComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_4_div_4_div_1_Template, 4, 19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r6.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.stamp.barcode.property);
} }
function PrintFourColComponent_div_4_div_5_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r38.white_space, item_r38.font_family, item_r38.text_align, item_r38.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r38.value);
} }
function PrintFourColComponent_div_4_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r38.white_space, item_r38.font_family, item_r38.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.vhAlgorithm.vhcurrencyunit_symbol(item_r38.value));
} }
function PrintFourColComponent_div_4_div_5_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r38.height, item_r38.width));
} }
function PrintFourColComponent_div_4_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_4_div_5_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_4_div_5_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_4_div_5_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const idx_r39 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r38.font_size, item_r38.font_weight, item_r38.text_decoration, item_r38.font_style, item_r38.type == "price" && i_r3 == ctx_r37.listRowBarcode.length - 1 ? item_r38.y - 2 : item_r38.y, item_r38.x, item_r38.height, item_r38.width, item_r38.type == "barcode" ? item_r38.justify_content : "", item_r38.z_index, item_r38.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r39 == ctx_r37.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.type != "barcode" && item_r38.type != "price" && item_r38.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.type == "price" && item_r38.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.type == "barcode" && item_r38.status);
} }
function PrintFourColComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_4_div_5_div_1_Template, 4, 19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r7.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.stamp.barcode.property);
} }
const _c6 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
function PrintFourColComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_4_div_2_Template, 4, 19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_4_div_3_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFourColComponent_div_4_div_4_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintFourColComponent_div_4_div_5_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](6, _c6, ctx_r0.stamp.barcode.width * 4, ctx_r0.stamp.barcode.height > 20 ? ctx_r0.stamp.barcode.height - 3 : ctx_r0.stamp.barcode.height - 2, i_r3 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c5, ctx_r0.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col4);
} }
function PrintFourColComponent_div_6_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r53.white_space, item_r53.font_family, item_r53.text_align, item_r53.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r53.value);
} }
function PrintFourColComponent_div_6_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r53.white_space, item_r53.font_family, item_r53.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r56.vhAlgorithm.vhcurrencyunit_symbol(item_r53.value));
} }
function PrintFourColComponent_div_6_div_2__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r53.height, item_r53.width));
} }
function PrintFourColComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_6_div_2_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_6_div_2_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_6_div_2__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const idx_r54 = ctx.index;
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r53.font_size, item_r53.font_weight, item_r53.text_decoration, item_r53.font_style, item_r53.type == "price" && i_r48 == ctx_r49.listRowBarcode.length - 1 ? item_r53.y - 2 : item_r53.y, item_r53.x, item_r53.height, item_r53.width, item_r53.type == "barcode" ? item_r53.justify_content : "", item_r53.z_index, item_r53.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r54 == ctx_r49.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r53.type != "barcode" && item_r53.type != "price" && item_r53.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r53.type == "price" && item_r53.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r53.type == "barcode" && item_r53.status);
} }
function PrintFourColComponent_div_6_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r63.white_space, item_r63.font_family, item_r63.text_align, item_r63.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r63.value);
} }
function PrintFourColComponent_div_6_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r63.white_space, item_r63.font_family, item_r63.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r66.vhAlgorithm.vhcurrencyunit_symbol(item_r63.value));
} }
function PrintFourColComponent_div_6_div_3_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r63.height, item_r63.width));
} }
function PrintFourColComponent_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_6_div_3_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_6_div_3_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_6_div_3_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    const idx_r64 = ctx.index;
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r63.font_size, item_r63.font_weight, item_r63.text_decoration, item_r63.font_style, item_r63.type == "price" && i_r48 == ctx_r62.listRowBarcode.length - 1 ? item_r63.y - 2 : item_r63.y, item_r63.x, item_r63.height, item_r63.width, item_r63.type == "barcode" ? item_r63.justify_content : "", item_r63.z_index, item_r63.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r64 == ctx_r62.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r63.type != "barcode" && item_r63.type != "price" && item_r63.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r63.type == "price" && item_r63.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r63.type == "barcode" && item_r63.status);
} }
function PrintFourColComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_6_div_3_div_1_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r50.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r50.stamp.barcode.property);
} }
function PrintFourColComponent_div_6_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r73.white_space, item_r73.font_family, item_r73.text_align, item_r73.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r73.value);
} }
function PrintFourColComponent_div_6_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r73.white_space, item_r73.font_family, item_r73.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r76.vhAlgorithm.vhcurrencyunit_symbol(item_r73.value));
} }
function PrintFourColComponent_div_6_div_4_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r73.height, item_r73.width));
} }
function PrintFourColComponent_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_6_div_4_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_6_div_4_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_6_div_4_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r73 = ctx.$implicit;
    const idx_r74 = ctx.index;
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r73.font_size, item_r73.font_weight, item_r73.text_decoration, item_r73.font_style, item_r73.type == "price" && i_r48 == ctx_r72.listRowBarcode.length - 1 ? item_r73.y - 2 : item_r73.y, item_r73.x, item_r73.height, item_r73.width, item_r73.type == "barcode" ? item_r73.justify_content : "", item_r73.z_index, item_r73.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r74 == ctx_r72.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r73.type != "barcode" && item_r73.type != "price" && item_r73.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r73.type == "price" && item_r73.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r73.type == "barcode" && item_r73.status);
} }
function PrintFourColComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_6_div_4_div_1_Template, 4, 19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r51.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r51.stamp.barcode.property);
} }
function PrintFourColComponent_div_6_div_5_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r83.white_space, item_r83.font_family, item_r83.text_align, item_r83.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r83.value);
} }
function PrintFourColComponent_div_6_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r83.white_space, item_r83.font_family, item_r83.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r86.vhAlgorithm.vhcurrencyunit_symbol(item_r83.value));
} }
function PrintFourColComponent_div_6_div_5_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r83.height, item_r83.width));
} }
function PrintFourColComponent_div_6_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_6_div_5_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_6_div_5_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_6_div_5_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = ctx.$implicit;
    const idx_r84 = ctx.index;
    const i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r83.font_size, item_r83.font_weight, item_r83.text_decoration, item_r83.font_style, item_r83.type == "price" && i_r48 == ctx_r82.listRowBarcode.length - 1 ? item_r83.y - 2 : item_r83.y, item_r83.x, item_r83.height, item_r83.width, item_r83.type == "barcode" ? item_r83.justify_content : "", item_r83.z_index, item_r83.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r84 == ctx_r82.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r83.type != "barcode" && item_r83.type != "price" && item_r83.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r83.type == "price" && item_r83.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r83.type == "barcode" && item_r83.status);
} }
function PrintFourColComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_6_div_5_div_1_Template, 4, 19, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r52.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r52.stamp.barcode.property);
} }
function PrintFourColComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_6_div_2_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_6_div_3_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFourColComponent_div_6_div_4_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintFourColComponent_div_6_div_5_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    const i_r48 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](6, _c6, ctx_r1.stamp.barcode.width * 4, ctx_r1.stamp.barcode.height > 20 ? ctx_r1.stamp.barcode.height - 3 : ctx_r1.stamp.barcode.height - 2, i_r48 == ctx_r1.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c5, ctx_r1.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r47.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r47.show_col3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r47.show_col4);
} }
const _c7 = function (a0) { return { "height.px": a0 }; };
class PrintFourColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery, platform) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.start_print = false;
        this.listRowBarcode = [{ show_col2: false, show_col3: false, show_col4: false }]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        // this.stamp = this.router.getCurrentNavigation().extras.state;
        // this.stamp.barcode.property =  this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property,'y')
    }
    ngOnChanges({ start_print }) {
        if (start_print && start_print.currentValue) {
            this.vhComponent.showLoading('')
                .then(() => {
                this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
                for (let item of this.stamp.barcode.property) {
                    switch (item.type) {
                        case 'barcode-text':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'price':
                            item.value = this.stamp.formProduct.price;
                            break;
                        case 'barcode':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'name':
                            item.value = this.stamp.formProduct.name;
                            break;
                    }
                }
                this.propertySelected = this.stamp.barcode.property[0];
                this.changeNummber();
                setTimeout(() => {
                    this.renderBarcode();
                }, 1000);
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                    this.printBrowser();
                }, 3000);
            });
        }
    }
    ngOnInit() {
    }
    changeNummber() {
        /**
         * nếu chia hết cho 4 thì hiện cả 4 tem trên hàng
         * ngược lại  => khi push tới hàng cuối cùng thì check i = (number-1)/3 : cột thứ 1  hay = (number-2)/3 : cột thứ 2
         *
         */
        this.listRowBarcode = [];
        for (let i = 0; i < this.stamp.number / 4; i++) {
            if (this.stamp.number % 4 == 0)
                this.listRowBarcode.push({ show_col2: true, show_col3: true, show_col4: true });
            else {
                if (i == (this.stamp.number - 1) / 4)
                    this.listRowBarcode.push({ show_col2: false, show_col3: false, show_col4: false });
                else if (i == (this.stamp.number - 2) / 4)
                    this.listRowBarcode.push({ show_col2: true, show_col3: false, show_col4: false });
                else if (i == (this.stamp.number - 3) / 4)
                    this.listRowBarcode.push({ show_col2: true, show_col3: true, show_col4: false });
                else
                    this.listRowBarcode.push({ show_col2: true, show_col3: true, show_col4: true });
            }
        }
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/design-barcode/detail'], { state: this.stamp.barcode });
    }
    Print() {
        if (this.platform.is("electron"))
            this.printElectron();
        else
            this.printBrowser();
    }
    printElectron() {
        let html = document.getElementById("stamp-barcode-electron").innerHTML;
        electron.ipcRenderer.send("print-start", {
            html: html,
            deviceName: this.stamp.printer_name,
        });
        electron.ipcRenderer.on("print-done", (event, data) => {
            if (!data)
                this.vhComponent.alertMessageDesktop('warning', 'Printing failed', 3000);
        });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height > 20 ? this.stamp.height - 4 : this.stamp.height - 2) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
}
PrintFourColComponent.ɵfac = function PrintFourColComponent_Factory(t) { return new (t || PrintFourColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform)); };
PrintFourColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintFourColComponent, selectors: [["app-print-four-col"]], inputs: { start_print: "start_print", stamp: "stamp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp mb-6", "style", "display: flex;margin-left: -1mm;", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "stamp-barcode-electron", 2, "margin-top", "-1.5mm"], [1, "stamp", "mb-6", 2, "display", "flex", "margin-left", "-1mm", 3, "ngStyle"], [1, "border-top", 2, "position", "relative", "height", "100%", 3, "ngStyle"], ["style", " position: absolute;align-items: center;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: relative;height: 100%;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [2, "position", "absolute", "align-items", "center", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], ["style", " position: absolute;align-items: center;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [2, "position", "absolute", "align-items", "center", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", " position: absolute;align-items: center; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: absolute;align-items: center;overflow: hidden; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", " position: absolute;align-items: center; overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"]], template: function PrintFourColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFourColComponent_div_4_Template, 6, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintFourColComponent_div_6_Template, 6, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c7, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWZvdXItY29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSWhCO0FBSGdCO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFJcEI7QUFBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFWjtBQURZO0VBQ0ksaUJBQUE7QUFHaEI7QUFEWTtFQUNJLGtCQUFBO0FBR2hCO0FBRFk7RUFDSSwwQkFBQTtBQUdoQjtBQUVBO0VBQ0kseUJBQUE7QUFDSjtBQUNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0FBR0o7QUFEQTtFQUNJLGdDQUFBO0FBSUo7QUFGQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUtKIiwiZmlsZSI6InByaW50LWZvdXItY29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfSBcclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2NSwgNjUsIDY1KTtcclxuICAgIH1cclxuICAgIC5mb250LXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLWZhbWlseSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNpemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDksIDkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi1ib2xkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaXRhbGljIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYm9yZGVyLWJvdHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XHJcbn1cclxuLmJvcmRlci10b3B7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQ7XHJcbn1cclxuLm1iLTZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2bW07XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 46601:
/*!***************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/print-one-col/print-one-col.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintOneColComponent": () => (/* binding */ PrintOneColComponent)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = function (a0, a1, a2, a3) { return { "white-space": a0, "font-family": a1, "text-align": a2, "height.mm": a3 }; };
function PrintOneColComponent_div_4_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, pro_r5.white_space, pro_r5.font_family, pro_r5.text_align, pro_r5.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pro_r5.value);
} }
const _c1 = function (a0, a1, a2) { return { "white-space": a0, "font-family": a1, "text-align": a2 }; };
function PrintOneColComponent_div_4_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, pro_r5.white_space, pro_r5.font_family, pro_r5.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.vhAlgorithm.vhcurrencyunit_symbol(pro_r5.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintOneColComponent_div_4_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 14);
} if (rf & 2) {
    const pro_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, pro_r5.height, pro_r5.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { "text-align": a0, "font-size.px": a1, "font-weight": a2, "text-decoration": a3, "font-style": a4, "top.px": a5, "left.px": a6, "height.mm": a7, "width.mm": a8, "justify-content": a9, "z-index": a10, "display": a11 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintOneColComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintOneColComponent_div_4_div_2_span_1_Template, 2, 7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintOneColComponent_div_4_div_2_span_2_Template, 2, 6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintOneColComponent_div_4_div_2_canvas_3_Template, 1, 4, "canvas", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r5 = ctx.$implicit;
    const idx_r6 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [pro_r5.text_align, pro_r5.font_size, pro_r5.font_weight, pro_r5.text_decoration, pro_r5.font_style, pro_r5.type == "price" && i_r3 == ctx_r4.listRowBarcode.length - 1 ? pro_r5.y - 2 : pro_r5.y, pro_r5.x, pro_r5.height, pro_r5.width, pro_r5.type == "barcode" ? pro_r5.justify_content : "", pro_r5.z_index, pro_r5.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c4, idx_r6 == ctx_r4.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r5.type != "barcode" && pro_r5.type != "price" && pro_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r5.type == "price" && pro_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r5.type == "barcode" && pro_r5.status);
} }
const _c5 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
const _c6 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
function PrintOneColComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintOneColComponent_div_4_div_2_Template, 4, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c5, ctx_r0.stamp.barcode.width * ctx_r0.stamp.col, ctx_r0.stamp.barcode.height - 3, i_r3 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c6, ctx_r0.stamp.barcode.width, ctx_r0.stamp.barcode.height - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
} }
function PrintOneColComponent_div_6_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, pro_r17.white_space, pro_r17.font_family, pro_r17.text_align, pro_r17.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pro_r17.value);
} }
function PrintOneColComponent_div_6_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, pro_r17.white_space, pro_r17.font_family, pro_r17.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.vhAlgorithm.vhcurrencyunit_symbol(pro_r17.value));
} }
function PrintOneColComponent_div_6_div_2__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 14);
} if (rf & 2) {
    const pro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, pro_r17.height, pro_r17.width));
} }
function PrintOneColComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintOneColComponent_div_6_div_2_span_1_Template, 2, 7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintOneColComponent_div_6_div_2_span_2_Template, 2, 6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintOneColComponent_div_6_div_2__svg_svg_3_Template, 1, 4, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r17 = ctx.$implicit;
    const idx_r18 = ctx.index;
    const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [pro_r17.text_align, pro_r17.font_size, pro_r17.font_weight, pro_r17.text_decoration, pro_r17.font_style, pro_r17.type == "price" && i_r15 == ctx_r16.listRowBarcode.length - 1 ? pro_r17.y - 2 : pro_r17.y, pro_r17.x, pro_r17.height, pro_r17.width, pro_r17.type == "barcode" ? pro_r17.justify_content : "", pro_r17.z_index, pro_r17.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c4, idx_r18 == ctx_r16.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r17.type != "barcode" && pro_r17.type != "price" && pro_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r17.type == "price" && pro_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r17.type == "barcode" && pro_r17.status);
} }
function PrintOneColComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintOneColComponent_div_6_div_2_Template, 4, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c5, ctx_r1.stamp.barcode.width * ctx_r1.stamp.col, ctx_r1.stamp.barcode.height - 3, i_r15 == ctx_r1.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c6, ctx_r1.stamp.barcode.width, ctx_r1.stamp.barcode.height - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.stamp.barcode.property);
} }
const _c7 = function (a0) { return { "height.px": a0 }; };
class PrintOneColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery, platform) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.start_print = false;
        this.listOfFontSize = [8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.number = 1;
        this.listRowBarcode = [false]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        // this.stamp = this.router.getCurrentNavigation().extras.state;
        // this.stamp.barcode.property =  this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property,'y')
    }
    ngOnChanges({ start_print }) {
        if (start_print && start_print.currentValue) {
            this.vhComponent.showLoading('')
                .then(() => {
                this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
                for (let item of this.stamp.barcode.property) {
                    switch (item.type) {
                        case 'barcode-text':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'price':
                            item.value = this.stamp.formProduct.price;
                            break;
                        case 'barcode':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'name':
                            item.value = this.stamp.formProduct.name;
                            break;
                    }
                }
                this.propertySelected = this.stamp.barcode.property[0];
                this.changeNummber();
                setTimeout(() => {
                    this.renderBarcode();
                }, 1000);
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                    this.printBrowser();
                }, 3000);
            });
        }
    }
    ngOnInit() {
    }
    changeNummber() {
        this.listRowBarcode = [];
        for (let i = 0; i < this.stamp.number; i++) {
            this.listRowBarcode.push(true);
        }
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/design-barcode/detail'], { state: this.stamp.barcode });
    }
    Print() {
        if (this.platform.is("electron"))
            this.printElectron();
        else
            this.printBrowser();
    }
    printElectron() {
        let html = document.getElementById("stamp-barcode-electron").innerHTML;
        electron.ipcRenderer.send("print-start", {
            html: html,
            deviceName: this.stamp.printer_name,
        });
        electron.ipcRenderer.on("print-done", (event, data) => {
            if (!data)
                this.vhComponent.alertMessageDesktop('warning', 'Printing failed', 3000);
        });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 4) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
}
PrintOneColComponent.ɵfac = function PrintOneColComponent_Factory(t) { return new (t || PrintOneColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform)); };
PrintOneColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintOneColComponent, selectors: [["app-print-one-col"]], inputs: { start_print: "start_print", stamp: "stamp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp mb-6", "style", "display: flex;margin-left: -1mm;", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "stamp-barcode-electron", 2, "margin-top", "-1.5mm"], [1, "stamp", "mb-6", 2, "display", "flex", "margin-left", "-1mm", 3, "ngStyle"], [1, "border-top", 2, "position", "relative", 3, "ngStyle"], ["style", " position: absolute;align-items: center;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [2, "position", "absolute", "align-items", "center", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"]], template: function PrintOneColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintOneColComponent_div_4_Template, 3, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintOneColComponent_div_6_Template, 3, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c7, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LW9uZS1jb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRlk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJaEI7QUFIZ0I7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQUlwQjtBQUFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUVaO0FBRFk7RUFDSSxpQkFBQTtBQUdoQjtBQURZO0VBQ0ksa0JBQUE7QUFHaEI7QUFEWTtFQUNJLDBCQUFBO0FBR2hCO0FBRUE7RUFDSSx5QkFBQTtBQUNKO0FBQ0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7QUFHSjtBQURBO0VBQ0ksZ0NBQUE7QUFJSjtBQUZBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBS0oiLCJmaWxlIjoicHJpbnQtb25lLWNvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH0gXHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvcmRlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgICB9XHJcbiAgICAuZm9udC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi1mYW1pbHkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zaXplIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5LCA5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICYtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWl0YWxpYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJvcmRlci1ib3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xyXG59XHJcbi5ib3JkZXItdG9we1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkO1xyXG59XHJcbi5tYi02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNm1tO1xyXG59XHJcbi5zZWxlY3RlZHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 73379:
/*!*******************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/print-three-col/print-three-col.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintThreeColComponent": () => (/* binding */ PrintThreeColComponent)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = function (a0, a1, a2, a3) { return { "white-space": a0, "font-family": a1, "text-align": a2, "height.mm": a3 }; };
function PrintThreeColComponent_div_4_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r7.white_space, item_r7.font_family, item_r7.text_align, item_r7.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.value);
} }
const _c1 = function (a0, a1, a2) { return { "white-space": a0, "font-family": a1, "text-align": a2 }; };
function PrintThreeColComponent_div_4_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r7.white_space, item_r7.font_family, item_r7.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.vhAlgorithm.vhcurrencyunit_symbol(item_r7.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintThreeColComponent_div_4_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r7.height, item_r7.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "left.px": a5, "height.mm": a6, "width.mm": a7, "justify-content": a8, "z-index": a9, "display": a10 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintThreeColComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_4_div_2_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_4_div_2_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_4_div_2_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const idx_r8 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r7.font_size, item_r7.font_weight, item_r7.text_decoration, item_r7.font_style, item_r7.type == "price" && i_r3 == ctx_r4.listRowBarcode.length - 1 ? item_r7.y - 2 : item_r7.y, item_r7.x, item_r7.height, item_r7.width, item_r7.type == "barcode" ? item_r7.justify_content : "", item_r7.z_index, item_r7.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r8 == ctx_r4.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type != "barcode" && item_r7.type != "price" && item_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "price" && item_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "barcode" && item_r7.status);
} }
function PrintThreeColComponent_div_4_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r17.white_space, item_r17.font_family, item_r17.text_align, item_r17.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r17.value);
} }
function PrintThreeColComponent_div_4_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r17.white_space, item_r17.font_family, item_r17.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.vhAlgorithm.vhcurrencyunit_symbol(item_r17.value));
} }
function PrintThreeColComponent_div_4_div_3_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r17.height, item_r17.width));
} }
function PrintThreeColComponent_div_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_4_div_3_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_4_div_3_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_4_div_3_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const idx_r18 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r17.font_size, item_r17.font_weight, item_r17.text_decoration, item_r17.font_style, item_r17.type == "price" && i_r3 == ctx_r16.listRowBarcode.length - 1 ? item_r17.y - 2 : item_r17.y, item_r17.x, item_r17.height, item_r17.width, item_r17.type == "barcode" ? item_r17.justify_content : "", item_r17.z_index, item_r17.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r18 == ctx_r16.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r17.type != "barcode" && item_r17.type != "price" && item_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r17.type == "price" && item_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r17.type == "barcode" && item_r17.status);
} }
const _c5 = function (a0) { return { "width.mm": a0 }; };
function PrintThreeColComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_4_div_3_div_1_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r5.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.stamp.barcode.property);
} }
function PrintThreeColComponent_div_4_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r27.white_space, item_r27.font_family, item_r27.text_align, item_r27.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r27.value);
} }
function PrintThreeColComponent_div_4_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r27.white_space, item_r27.font_family, item_r27.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r30.vhAlgorithm.vhcurrencyunit_symbol(item_r27.value));
} }
function PrintThreeColComponent_div_4_div_4_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r27.height, item_r27.width));
} }
function PrintThreeColComponent_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_4_div_4_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_4_div_4_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_4_div_4_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const idx_r28 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r27.font_size, item_r27.font_weight, item_r27.text_decoration, item_r27.font_style, item_r27.type == "price" && i_r3 == ctx_r26.listRowBarcode.length - 1 ? item_r27.y - 2 : item_r27.y, item_r27.x, item_r27.height, item_r27.width, item_r27.type == "barcode" ? item_r27.justify_content : "", item_r27.z_index, item_r27.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r28 == ctx_r26.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r27.type != "barcode" && item_r27.type != "price" && item_r27.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r27.type == "price" && item_r27.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r27.type == "barcode" && item_r27.status);
} }
function PrintThreeColComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_4_div_4_div_1_Template, 4, 19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r6.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.stamp.barcode.property);
} }
const _c6 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
const _c7 = function (a0, a1) { return { "stamp": a0, "mb-6": a1 }; };
function PrintThreeColComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_4_div_2_Template, 4, 19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_4_div_3_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintThreeColComponent_div_4_div_4_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](6, _c6, ctx_r0.stamp.barcode.width * 3, ctx_r0.stamp.barcode.height - 3, i_r3 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c7, i_r3 != ctx_r0.listRowBarcode.length - 1, i_r3 != ctx_r0.listRowBarcode.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c5, ctx_r0.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.show_col3);
} }
function PrintThreeColComponent_div_6_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r41.white_space, item_r41.font_family, item_r41.text_align, item_r41.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r41.value);
} }
function PrintThreeColComponent_div_6_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r41.white_space, item_r41.font_family, item_r41.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r44.vhAlgorithm.vhcurrencyunit_symbol(item_r41.value));
} }
function PrintThreeColComponent_div_6_div_2__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r41.height, item_r41.width));
} }
function PrintThreeColComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_6_div_2_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_6_div_2_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_6_div_2__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    const idx_r42 = ctx.index;
    const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r41.font_size, item_r41.font_weight, item_r41.text_decoration, item_r41.font_style, item_r41.type == "price" && i_r37 == ctx_r38.listRowBarcode.length - 1 ? item_r41.y - 2 : item_r41.y, item_r41.x, item_r41.height, item_r41.width, item_r41.type == "barcode" ? item_r41.justify_content : "", item_r41.z_index, item_r41.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r42 == ctx_r38.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r41.type != "barcode" && item_r41.type != "price" && item_r41.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r41.type == "price" && item_r41.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r41.type == "barcode" && item_r41.status);
} }
function PrintThreeColComponent_div_6_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r51.white_space, item_r51.font_family, item_r51.text_align, item_r51.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r51.value);
} }
function PrintThreeColComponent_div_6_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r51.white_space, item_r51.font_family, item_r51.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r54.vhAlgorithm.vhcurrencyunit_symbol(item_r51.value));
} }
function PrintThreeColComponent_div_6_div_3_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r51.height, item_r51.width));
} }
function PrintThreeColComponent_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_6_div_3_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_6_div_3_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_6_div_3_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    const idx_r52 = ctx.index;
    const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r51.font_size, item_r51.font_weight, item_r51.text_decoration, item_r51.font_style, item_r51.type == "price" && i_r37 == ctx_r50.listRowBarcode.length - 1 ? item_r51.y - 2 : item_r51.y, item_r51.x, item_r51.height, item_r51.width, item_r51.type == "barcode" ? item_r51.justify_content : "", item_r51.z_index, item_r51.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r52 == ctx_r50.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r51.type != "barcode" && item_r51.type != "price" && item_r51.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r51.type == "price" && item_r51.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r51.type == "barcode" && item_r51.status);
} }
function PrintThreeColComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_6_div_3_div_1_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r39.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r39.stamp.barcode.property);
} }
function PrintThreeColComponent_div_6_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c0, item_r61.white_space, item_r61.font_family, item_r61.text_align, item_r61.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r61.value);
} }
function PrintThreeColComponent_div_6_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c1, item_r61.white_space, item_r61.font_family, item_r61.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r64.vhAlgorithm.vhcurrencyunit_symbol(item_r61.value));
} }
function PrintThreeColComponent_div_6_div_4_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const item_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r61.height, item_r61.width));
} }
function PrintThreeColComponent_div_6_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_6_div_4_div_1_span_1_Template, 2, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_6_div_4_div_1_span_2_Template, 2, 6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_6_div_4_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    const idx_r62 = ctx.index;
    const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [item_r61.font_size, item_r61.font_weight, item_r61.text_decoration, item_r61.font_style, item_r61.type == "price" && i_r37 == ctx_r60.listRowBarcode.length - 1 ? item_r61.y - 2 : item_r61.y, item_r61.x, item_r61.height, item_r61.width, item_r61.type == "barcode" ? item_r61.justify_content : "", item_r61.z_index, item_r61.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, idx_r62 == ctx_r60.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r61.type != "barcode" && item_r61.type != "price" && item_r61.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r61.type == "price" && item_r61.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r61.type == "barcode" && item_r61.status);
} }
function PrintThreeColComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_6_div_4_div_1_Template, 4, 19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r40.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r40.stamp.barcode.property);
} }
function PrintThreeColComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_6_div_2_Template, 4, 19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_6_div_3_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintThreeColComponent_div_6_div_4_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](6, _c6, ctx_r1.stamp.barcode.width * 3, ctx_r1.stamp.barcode.height - 3, i_r37 == ctx_r1.listRowBarcode.length - 1 ? "0" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c7, i_r37 != ctx_r1.listRowBarcode.length - 1, i_r37 != ctx_r1.listRowBarcode.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c5, ctx_r1.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r36.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r36.show_col3);
} }
const _c8 = function (a0) { return { "height.px": a0 }; };
class PrintThreeColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery, platform) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.start_print = false;
        this.listRowBarcode = [{ show_col2: false, show_col3: false }]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        // this.stamp = this.router.getCurrentNavigation().extras.state;
        // this.stamp.barcode.property =  this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property,'y')
    }
    ngOnChanges({ start_print }) {
        if (start_print && start_print.currentValue) {
            this.vhComponent.showLoading('')
                .then(() => {
                this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
                for (let item of this.stamp.barcode.property) {
                    switch (item.type) {
                        case 'barcode-text':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'price':
                            item.value = this.stamp.formProduct.price;
                            break;
                        case 'barcode':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'name':
                            item.value = this.stamp.formProduct.name;
                            break;
                    }
                }
                this.propertySelected = this.stamp.barcode.property[0];
                this.changeNummber();
                setTimeout(() => {
                    this.renderBarcode();
                }, 1000);
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                    this.printBrowser();
                }, 3000);
            });
        }
    }
    ngOnInit() {
    }
    changeNummber() {
        /**
         * nếu chia hết cho 3 thì hiện cả 3 tem trên hàng
         * ngược lại number = 4 => khi push tới hàng cuối cùng thì check i = (number-1)/3 : cột thứ 1  hay = (number-2)/3 : cột thứ 2
         *
         */
        this.listRowBarcode = [];
        for (let i = 0; i < this.stamp.number / 3; i++) {
            if (this.stamp.number % 3 == 0)
                this.listRowBarcode.push({ show_col2: true, show_col3: true });
            else {
                if (i == (this.stamp.number - 1) / 3)
                    this.listRowBarcode.push({ show_col2: false, show_col3: false });
                else if (i == (this.stamp.number - 2) / 3)
                    this.listRowBarcode.push({ show_col2: true, show_col3: false });
                else
                    this.listRowBarcode.push({ show_col2: true, show_col3: true });
            }
        }
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/design-barcode/detail'], { state: this.stamp.barcode });
    }
    Print() {
        if (this.platform.is("electron"))
            this.printElectron();
        else
            this.printBrowser();
    }
    printElectron() {
        let html = document.getElementById("stamp-barcode-electron").innerHTML;
        electron.ipcRenderer.send("print-start", {
            html: html,
            deviceName: this.stamp.printer_name,
        });
        electron.ipcRenderer.on("print-done", (event, data) => {
            if (!data)
                this.vhComponent.alertMessageDesktop('warning', 'Printing failed', 3000);
        });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 4) + 'mm;}'
        });
    }
}
PrintThreeColComponent.ɵfac = function PrintThreeColComponent_Factory(t) { return new (t || PrintThreeColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform)); };
PrintThreeColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintThreeColComponent, selectors: [["app-print-three-col"]], inputs: { start_print: "start_print", stamp: "stamp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", "display", "flex", "align-items", "flex-start", "justify-content", "center", 3, "ngStyle"], ["id", "stamp-barcode", 2, "margin-top", "-1.5mm"], ["style", "display: flex;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["id", "stamp-barcode-electron", 2, "margin-top", "-1.5mm"], [2, "display", "flex", 3, "ngStyle", "ngClass"], [1, "border-top", 2, "position", "relative", "height", "100%", 3, "ngStyle"], ["style", " position: absolute;align-items: center;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: relative;height: 100%;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [2, "position", "absolute", "align-items", "center", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], ["style", " position: absolute;align-items: center;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [2, "position", "absolute", "align-items", "center", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", " position: absolute;align-items: center; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", " position: absolute;align-items: center;overflow: hidden; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"]], template: function PrintThreeColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintThreeColComponent_div_4_Template, 5, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintThreeColComponent_div_6_Template, 5, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c8, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXRocmVlLWNvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7QUFGWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUloQjtBQUhnQjtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBSXBCO0FBQVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRVo7QUFEWTtFQUNJLGlCQUFBO0FBR2hCO0FBRFk7RUFDSSxrQkFBQTtBQUdoQjtBQURZO0VBQ0ksMEJBQUE7QUFHaEI7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBREE7RUFDSSxnQ0FBQTtBQUlKO0FBRkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFLSiIsImZpbGUiOiJwcmludC10aHJlZS1jb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9IFxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3JkZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDY1LCA2NSwgNjUpO1xyXG4gICAgfVxyXG4gICAgLmZvbnQtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYtZmFtaWx5IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2l6ZSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb2xvciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgOSwgOSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAmLWJvbGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pdGFsaWMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ib3JkZXItYm90e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcclxufVxyXG4uYm9yZGVyLXRvcHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZDtcclxufVxyXG4ubWItNntcclxuICAgIG1hcmdpbi1ib3R0b206IDZtbTtcclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 3782:
/*!***************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/print-barcode/print-two-col/print-two-col.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintTwoColComponent": () => (/* binding */ PrintTwoColComponent)
/* harmony export */ });
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = function (a0, a1, a2, a3, a4) { return { "white-space": a0, "font-family": a1, "border": a2, "text-align": a3, "height.mm": a4 }; };
function PrintTwoColComponent_div_4_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](2, _c0, pro_r6.white_space, pro_r6.font_family, ctx_r8.propertySelected == item_r2 ? "1px dashed gray" : "none", pro_r6.text_align, pro_r6.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pro_r6.value);
} }
const _c1 = function (a0, a1, a2, a3) { return { "white-space": a0, "font-family": a1, "border": a2, "text-align": a3 }; };
function PrintTwoColComponent_div_4_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c1, pro_r6.white_space, pro_r6.font_family, ctx_r9.propertySelected == item_r2 ? "1px dashed gray" : "none", pro_r6.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit_symbol(pro_r6.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintTwoColComponent_div_4_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const pro_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, pro_r6.height, pro_r6.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { "text-align": a0, "font-size.px": a1, "font-weight": a2, "text-decoration": a3, "font-style": a4, "top.px": a5, "left.px": a6, "height.mm": a7, "width.mm": a8, "justify-content": a9, "z-index": a10, "display": a11 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintTwoColComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintTwoColComponent_div_4_div_2_span_1_Template, 2, 8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintTwoColComponent_div_4_div_2_span_2_Template, 2, 7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintTwoColComponent_div_4_div_2_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [pro_r6.text_align, pro_r6.font_size, pro_r6.font_weight, pro_r6.text_decoration, pro_r6.font_style, pro_r6.type == "price" && i_r3 == ctx_r4.listRowBarcode.length - 1 ? pro_r6.y - 2 : pro_r6.y, pro_r6.x, pro_r6.height, pro_r6.width, pro_r6.type == "barcode" ? pro_r6.justify_content : "", pro_r6.z_index, pro_r6.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c4, idx_r7 == ctx_r4.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r6.type != "barcode" && pro_r6.type != "price" && pro_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r6.type == "price" && pro_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r6.type == "barcode" && pro_r6.status);
} }
function PrintTwoColComponent_div_4_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](2, _c0, pro_r18.white_space, pro_r18.font_family, ctx_r20.propertySelected == item_r2 ? "1px dashed gray" : "none", pro_r18.text_align, pro_r18.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pro_r18.value);
} }
function PrintTwoColComponent_div_4_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c1, pro_r18.white_space, pro_r18.font_family, ctx_r21.propertySelected == item_r2 ? "1px dashed gray" : "none", pro_r18.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.vhAlgorithm.vhcurrencyunit_symbol(pro_r18.value));
} }
function PrintTwoColComponent_div_4_div_3_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const pro_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, pro_r18.height, pro_r18.width));
} }
function PrintTwoColComponent_div_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintTwoColComponent_div_4_div_3_div_1_span_1_Template, 2, 8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintTwoColComponent_div_4_div_3_div_1_span_2_Template, 2, 7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintTwoColComponent_div_4_div_3_div_1_canvas_3_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r18 = ctx.$implicit;
    const idx_r19 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [pro_r18.text_align, pro_r18.font_size, pro_r18.font_weight, pro_r18.text_decoration, pro_r18.font_style, pro_r18.type == "price" && i_r3 == ctx_r17.listRowBarcode.length - 1 ? pro_r18.y - 2 : pro_r18.y, pro_r18.x, pro_r18.height, pro_r18.width, pro_r18.type == "barcode" ? pro_r18.justify_content : "", pro_r18.z_index, pro_r18.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c4, idx_r19 == ctx_r17.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r18.type != "barcode" && pro_r18.type != "price" && pro_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r18.type == "price" && pro_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r18.type == "barcode" && pro_r18.status);
} }
const _c5 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
function PrintTwoColComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintTwoColComponent_div_4_div_3_div_1_Template, 4, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c5, ctx_r5.stamp.barcode.width, ctx_r5.stamp.barcode.height - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.stamp.barcode.property);
} }
const _c6 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
function PrintTwoColComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintTwoColComponent_div_4_div_2_Template, 4, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintTwoColComponent_div_4_div_3_Template, 2, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c6, ctx_r0.stamp.barcode.width * ctx_r0.stamp.col, ctx_r0.stamp.barcode.height - 3, i_r3 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c5, ctx_r0.stamp.barcode.width, ctx_r0.stamp.barcode.height - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2);
} }
function PrintTwoColComponent_div_6_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](2, _c0, pro_r33.white_space, pro_r33.font_family, ctx_r35.propertySelected == item_r29 ? "1px dashed gray" : "none", pro_r33.text_align, pro_r33.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pro_r33.value);
} }
function PrintTwoColComponent_div_6_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c1, pro_r33.white_space, pro_r33.font_family, ctx_r36.propertySelected == item_r29 ? "1px dashed gray" : "none", pro_r33.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.vhAlgorithm.vhcurrencyunit_symbol(pro_r33.value));
} }
function PrintTwoColComponent_div_6_div_2__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const pro_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, pro_r33.height, pro_r33.width));
} }
function PrintTwoColComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintTwoColComponent_div_6_div_2_span_1_Template, 2, 8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintTwoColComponent_div_6_div_2_span_2_Template, 2, 7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintTwoColComponent_div_6_div_2__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r33 = ctx.$implicit;
    const idx_r34 = ctx.index;
    const i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [pro_r33.text_align, pro_r33.font_size, pro_r33.font_weight, pro_r33.text_decoration, pro_r33.font_style, pro_r33.type == "price" && i_r30 == ctx_r31.listRowBarcode.length - 1 ? pro_r33.y - 2 : pro_r33.y, pro_r33.x, pro_r33.height, pro_r33.width, pro_r33.type == "barcode" ? pro_r33.justify_content : "", pro_r33.z_index, pro_r33.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c4, idx_r34 == ctx_r31.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r33.type != "barcode" && pro_r33.type != "price" && pro_r33.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r33.type == "price" && pro_r33.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r33.type == "barcode" && pro_r33.status);
} }
function PrintTwoColComponent_div_6_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction5"](2, _c0, pro_r45.white_space, pro_r45.font_family, ctx_r47.propertySelected == item_r29 ? "1px dashed gray" : "none", pro_r45.text_align, pro_r45.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pro_r45.value);
} }
function PrintTwoColComponent_div_6_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c1, pro_r45.white_space, pro_r45.font_family, ctx_r48.propertySelected == item_r29 ? "1px dashed gray" : "none", pro_r45.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r48.vhAlgorithm.vhcurrencyunit_symbol(pro_r45.value));
} }
function PrintTwoColComponent_div_6_div_3_div_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "svg", 15);
} if (rf & 2) {
    const pro_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, pro_r45.height, pro_r45.width));
} }
function PrintTwoColComponent_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintTwoColComponent_div_6_div_3_div_1_span_1_Template, 2, 8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintTwoColComponent_div_6_div_3_div_1_span_2_Template, 2, 7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintTwoColComponent_div_6_div_3_div_1__svg_svg_3_Template, 1, 4, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r45 = ctx.$implicit;
    const idx_r46 = ctx.index;
    const i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](5, _c3, [pro_r45.text_align, pro_r45.font_size, pro_r45.font_weight, pro_r45.text_decoration, pro_r45.font_style, pro_r45.type == "price" && i_r30 == ctx_r44.listRowBarcode.length - 1 ? pro_r45.y - 2 : pro_r45.y, pro_r45.x, pro_r45.height, pro_r45.width, pro_r45.type == "barcode" ? pro_r45.justify_content : "", pro_r45.z_index, pro_r45.status ? "flex" : "none"]))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c4, idx_r46 == ctx_r44.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r45.type != "barcode" && pro_r45.type != "price" && pro_r45.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r45.type == "price" && pro_r45.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pro_r45.type == "barcode" && pro_r45.status);
} }
function PrintTwoColComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintTwoColComponent_div_6_div_3_div_1_Template, 4, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c5, ctx_r32.stamp.barcode.width, ctx_r32.stamp.barcode.height - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r32.stamp.barcode.property);
} }
function PrintTwoColComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintTwoColComponent_div_6_div_2_Template, 4, 20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintTwoColComponent_div_6_div_3_Template, 2, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c6, ctx_r1.stamp.barcode.width * ctx_r1.stamp.col, ctx_r1.stamp.barcode.height - 3, i_r30 == ctx_r1.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c5, ctx_r1.stamp.barcode.width, ctx_r1.stamp.barcode.height - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r29);
} }
const _c7 = function (a0) { return { "height.px": a0 }; };
class PrintTwoColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery, platform) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.start_print = false;
        this.listOfFontSize = [8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.number = 1;
        this.listRowBarcode = [false]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        // this.stamp = this.router.getCurrentNavigation().extras.state;
        // this.stamp.barcode.property =  this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property,'y')
    }
    ngOnChanges({ start_print }) {
        if (start_print && start_print.currentValue) {
            this.vhComponent.showLoading('')
                .then(() => {
                this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
                for (let item of this.stamp.barcode.property) {
                    switch (item.type) {
                        case 'barcode-text':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'price':
                            item.value = this.stamp.formProduct.price;
                            break;
                        case 'barcode':
                            item.value = this.stamp.formProduct.barcode;
                            break;
                        case 'name':
                            item.value = this.stamp.formProduct.name;
                            break;
                    }
                }
                this.propertySelected = this.stamp.barcode.property[0];
                this.changeNummber();
                setTimeout(() => {
                    this.renderBarcode();
                }, 1000);
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                    this.printBrowser();
                }, 3000);
            });
        }
    }
    ngOnInit() {
    }
    changeNummber() {
        this.listRowBarcode = [];
        for (let i = 0; i < this.stamp.number / 2; i++) {
            if (this.stamp.number % 2 == 0)
                this.listRowBarcode.push(true);
            else {
                if (i == (this.stamp.number - 1) / 2)
                    this.listRowBarcode.push(false);
                else
                    this.listRowBarcode.push(true);
            }
        }
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/design-barcode/detail'], { state: this.stamp.barcode });
    }
    Print() {
        if (this.platform.is("electron"))
            this.printElectron();
        else
            this.printBrowser();
    }
    printElectron() {
        let html = document.getElementById("stamp-barcode-electron").innerHTML;
        electron.ipcRenderer.send("print-start", {
            html: html,
            deviceName: this.stamp.printer_name,
        });
        electron.ipcRenderer.on("print-done", (event, data) => {
            if (!data)
                this.vhComponent.alertMessageDesktop('warning', 'Printing failed', 3000);
        });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 4) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
}
PrintTwoColComponent.ɵfac = function PrintTwoColComponent_Factory(t) { return new (t || PrintTwoColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform)); };
PrintTwoColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintTwoColComponent, selectors: [["app-print-two-col"]], inputs: { start_print: "start_print", stamp: "stamp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp mb-6", "style", "display: flex;margin-left: -1mm;", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "stamp-barcode-electron", 2, "margin-top", "-1.5mm", "display", "none"], [1, "stamp", "mb-6", 2, "display", "flex", "margin-left", "-1mm", 3, "ngStyle"], [1, "border-top", 2, "position", "relative", 3, "ngStyle"], ["style", " position: absolute;align-items: center;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: relative;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [2, "position", "absolute", "align-items", "center", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"]], template: function PrintTwoColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintTwoColComponent_div_4_Template, 4, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintTwoColComponent_div_6_Template, 4, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c7, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXR3by1jb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRlk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJaEI7QUFIZ0I7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQUlwQjtBQUFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUVaO0FBRFk7RUFDSSxpQkFBQTtBQUdoQjtBQURZO0VBQ0ksa0JBQUE7QUFHaEI7QUFEWTtFQUNJLDBCQUFBO0FBR2hCO0FBRUE7RUFDSSx5QkFBQTtBQUNKO0FBQ0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7QUFHSjtBQURBO0VBQ0ksZ0NBQUE7QUFJSjtBQUZBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBS0oiLCJmaWxlIjoicHJpbnQtdHdvLWNvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH0gXHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvcmRlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgICB9XHJcbiAgICAuZm9udC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi1mYW1pbHkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zaXplIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5LCA5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICYtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWl0YWxpYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJvcmRlci1ib3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xyXG59XHJcbi5ib3JkZXItdG9we1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkO1xyXG59XHJcbi5tYi02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNm1tO1xyXG59XHJcbi5zZWxlY3RlZHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_products_print-barcode_print-barcode_module_ts.js.map