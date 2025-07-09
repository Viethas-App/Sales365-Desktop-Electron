"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_design_design-barcode_label-dish_label-dish_module_ts"],{

/***/ 87214:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/detail/detail.component.ts ***!
  \**********************************************************************************************************/
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
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
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
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function DetailComponent_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 39);
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", option_r3)("nzValue", option_r3);
} }
const _c0 = function (a0, a1, a2) { return { "white-space": a0, "text-align": a1, "height.mm": a2 }; };
function DetailComponent_div_62_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](2, _c0, item_r4.white_space, item_r4.text_align, item_r4.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.value);
} }
const _c1 = function (a0, a1) { return { "white-space": a0, "text-align": a1 }; };
function DetailComponent_div_62_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c1, item_r4.white_space, item_r4.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(item_r4.value));
} }
const _c2 = function (a0, a1, a2) { return { "height.mm": a0, "width.mm": a1, "opacity": a2 }; };
function DetailComponent_div_62_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canvas", 46);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](1, _c2, item_r4.height, item_r4.width, item_r4.status ? "1" : "0"));
} }
const _c3 = function (a0) { return { "selected": a0 }; };
const _c4 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "height.mm": a5, "width.mm": a6, "justify-content": a7 }; };
function DetailComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_div_62_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const item_r4 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.propertySelected = item_r4; ctx_r11.white_space = ctx_r11.propertySelected.white_space == "normal" ? true : false; return $event.stopPropagation(); })("mousedown", function DetailComponent_div_62_Template_div_mousedown_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const item_r4 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.propertySelected = item_r4; })("cdkDragEnded", function DetailComponent_div_62_Template_div_cdkDragEnded_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const item_r4 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.onDragEnded($event, item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailComponent_div_62_span_1_Template, 2, 6, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailComponent_div_62_span_2_Template, 2, 5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DetailComponent_div_62_canvas_3_Template, 1, 5, "canvas", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", item_r4.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c3, item_r4 == ctx_r1.propertySelected))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction8"](8, _c4, item_r4.font_size, item_r4.font_weight, item_r4.text_decoration, item_r4.font_style, item_r4.y, item_r4.height, ctx_r1.stamp.width, item_r4.type == "barcode" ? item_r4.justify_content : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.type != "barcode" && item_r4.type != "price" && item_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.type == "price" && item_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.type == "barcode");
} }
function DetailComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_ng_container_65_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.col = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nz-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "nz-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "nz-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailComponent_ng_container_65_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "Choose the number of label on the row"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.col);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.number);
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
        console.log(value);
        jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", value, {
            displayValue: false,
            // height: 65
        });
    }
    changeWhiteSpace(event) {
        this.propertySelected.white_space = event ? 'normal' : 'nowrap';
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish']);
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
                console.log('error', error);
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
        console.log(this.listUpdateCoor);
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
        // this.router.navigate(['/cafe/dashboard/management/products/products-list/print-two-col'], { state:{col: this.col,number : this.number,barcode:  this.list_barcode[this.list_barcode.findIndex(item => item._id == this.radioValue)], formProduct: {...this.ProductForm.value,_id:this.data.formProduct._id}} })
        switch (this.col) {
            case 1: {
                this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/print-one-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 2: {
                this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/print-two-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 3: {
                this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/print-three-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 4: {
                this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/print-four-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            case 5: {
                this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/print-five-col'], { state: { col: this.col, number: this.number, barcode: this.stamp, formProduct: { name: this.stamp.property[0].value, barcode: this.stamp.property[1].value, price: this.stamp.property[3].value } } });
                break;
            }
            default: {
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Không hỗ trợ kiểu tem này"));
            }
        }
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 66, vars: 60, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "left-all-content"], [1, "title"], ["nz-row", "", 2, "background", "#f0f2f5"], ["nz-col", "", "nzSpan", "24", 1, "left-all-content"], ["nzMode", "default", "nzPlaceHolder", "K\u00EDch th\u01B0\u1EDBc ph\u00F4ng ch\u1EEF", 1, "font-text-size", 2, "width", "60px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "right-all-content", 3, "ngStyle"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-bold", 3, "disabled", "nzType", "click"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-italic", 3, "disabled", "nzType", "click"], ["nz-icon", "", "nzType", "italic", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-underline", 3, "disabled", "nzType", "click"], ["nz-icon", "", "nzType", "underline", "nzTheme", "outline"], [1, "right-all-content"], ["nz-button", "", 1, "font-text-btn", 3, "nzType", "click"], ["nz-icon", "", "nzType", "align-left", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-center", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-right", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "center-all-content", 3, "disabled", "nzType", "click"], ["src", "assets/icon/management/design-barcode/icon-text-justify.svg", 2, "font-size", "1.2rem", 3, "color"], ["nz-checkbox", "", 2, "margin-left", "8px", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-row", "", 2, "background", "#f0f2f5", "padding", "8px"], ["nz-col", "", "nzSpan", "12", 1, "beetween-all-content", 2, "justify-content", "space-between"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 2, "margin-right", "16px", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle", "click"], ["id", "stamp-test", 2, "height", "100%", "margin-top", "-1.5mm", "margin-left", "0.05in", "z-index", "2"], [1, "stamp", 3, "ngStyle"], ["id", "boundary", 1, "example-boundary", 2, "position", "relative", "overflow", "hidden", 3, "ngStyle"], ["style", "display: flex;position: absolute;", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 3, "id", "ngClass", "ngStyle", "click", "mousedown", "cdkDragEnded", 4, "ngFor", "ngForOf"], [3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "nzLabel", "nzValue"], ["cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "display", "flex", "position", "absolute", 3, "id", "ngClass", "ngStyle", "click", "mousedown", "cdkDragEnded"], ["style", " overflow: hidden;line-height: 1;width: 100%;z-index: 2;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", "z-index", "2", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], [3, "ngModel", "ngModelChange"], ["nzLabel", "1", 3, "nzValue"], ["nzLabel", "2", 3, "nzValue"], ["nzLabel", "3", 3, "nzValue"], ["nzLabel", "4", 3, "nzValue"], ["nzLabel", "5", 3, "nzValue"], ["type", "number", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_58_listener() { return ctx.propertySelected = {}; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, DetailComponent_div_62_Template, 4, 17, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "nz-modal", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function DetailComponent_Template_nz_modal_nzVisibleChange_63_listener($event) { return ctx.showModalPrintBarcode = $event; })("nzOnCancel", function DetailComponent_Template_nz_modal_nzOnCancel_63_listener() { return ctx.showModalPrintBarcode = false; })("nzOnOk", function DetailComponent_Template_nz_modal_nzOnOk_63_listener() { return ctx.gotoPrintBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, DetailComponent_ng_container_65_Template, 15, 16, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 34, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stamp.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 36, "Label size"), ": ", ctx.stamp.width, "mm x ", ctx.stamp.height, "mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertySelected.font_size);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listOfFontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](50, _c5, ctx.propertySelected.type == "barcode" ? "0.5" : "1"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 38, "Allow down the line"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.propertySelected.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 40, "Display"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 42, "View"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 44, "Print label"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 46, "Save"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](52, _c6, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](54, _c7, ctx.stamp.width, ctx.stamp.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](57, _c7, ctx.stamp.width, ctx.stamp.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.stamp.property);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 48, "Choose a label template"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx.showModalPrintBarcode);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__.NzCheckboxComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .stamp[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.border-left[_ngcontent-%COMP%] {\n  border-left: 1px solid #929292;\n  padding-left: 8px;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNJLGlCQUFBO0FBRU47QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQURJO0VBQ0kseUJBQUE7QUFHUjtBQURJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFJWjtBQUZRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFJWjtBQUZRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSVo7QUFIWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtoQjtBQUpnQjtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBS3BCO0FBRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBR1o7QUFGWTtFQUNJLGlCQUFBO0FBSWhCO0FBRlk7RUFDSSxrQkFBQTtBQUloQjtBQUZZO0VBQ0ksMEJBQUE7QUFJaEI7QUFDQTtFQUNJLGdDQUFBO0FBRUo7QUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUdKO0FBQ0U7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FBRU47QUFBRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBR04iLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9IFxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc3RhbXB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDY1LCA2NSwgNjUpO1xyXG4gICAgfVxyXG4gICAgLmZvbnQtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYtZmFtaWx5IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2l6ZSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDksIDkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi1ib2xkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaXRhbGljIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIC5ib3JkZXItbGVmdHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIH1cclxuICAuYmVldHdlZW4tYWxsLWNvbnRlbnR7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 2827:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/label-dish.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelDishComponent": () => (/* binding */ LabelDishComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/empty */ 36641);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/image */ 77);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























function LabelDishComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelDishComponent_div_16_Template_ion_label_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.gotoEdit(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LabelDishComponent_div_16_Template_label_ngModelChange_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; const i_r5 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.setDefault(item_r4, i_r5); })("ngModelChange", function LabelDishComponent_div_16_Template_label_ngModelChange_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; return item_r4.default = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function LabelDishComponent_div_16_Template_nz_switch_nzOnConfirm_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.updateStatus(item_r4, !item_r4.status); })("ngModelChange", function LabelDishComponent_div_16_Template_nz_switch_ngModelChange_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; return item_r4.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelDishComponent_div_16_Template_ion_icon_click_16_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); $event.stopPropagation(); ctx_r12.id_barcode = item_r4._id; ctx_r12.showModalEdit = true; return ctx_r12.barcode_name = item_r4.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelDishComponent_div_16_Template_ion_icon_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r4 = restoredCtx.$implicit; const i_r5 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.deleteBarcode(item_r4, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r4.name, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r4.width, "mm - ", item_r4.height, "mm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 17, "Sample"), " ", item_r4.template, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r4.default);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 19, "Set default"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", item_r4.status ? ctx_r0.languageService.translate("T\u1EAFt tr\u1EA1ng th\u00E1i tem") : ctx_r0.languageService.translate("B\u1EADt tr\u1EA1ng th\u00E1i tem"))("nzTooltipColor", "#00a859")("nzControl", true)("nzPopconfirmTitle", item_r4.status ? ctx_r0.languageService.translate("B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n t\u1EAFt tr\u1EA1ng th\u00E1i tem?") : ctx_r0.languageService.translate("B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n b\u1EADt tr\u1EA1ng th\u00E1i tem?"))("nzCancelText", ctx_r0.languageService.translate("Cancel"))("ngModel", item_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 21, "Edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipColor", "#00a859");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 23, "Delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipColor", "rgb(250, 81, 81)");
} }
function LabelDishComponent_nz_empty_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-empty", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzNotFoundContent", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, "No data"));
} }
const _c0 = function (a0) { return { "border": a0 }; };
function LabelDishComponent_ng_container_22_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r14.formAdd.value.template == 1 ? "1px solid var(--ion-color-vh-green)" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, "Sample"), " 1");
} }
function LabelDishComponent_ng_container_22_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r15.formAdd.value.template == 2 ? "1px solid var(--ion-color-vh-green)" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, "Sample"), " 2");
} }
function LabelDishComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "nz-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "nz-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, LabelDishComponent_ng_container_22_div_29_Template, 6, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, LabelDishComponent_ng_container_22_div_30_Template, 6, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.formAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, "Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 14, "Enter name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 16, "Enter the length (mm)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 18, "Enter the length (mm)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 20, "Enter the width (mm)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 22, "Enter the width (mm)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 24, "Select label template"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.formAdd.value.template == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.formAdd.value.template == 2);
} }
function LabelDishComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LabelDishComponent_ng_container_25_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.barcode_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.barcode_name);
} }
class LabelDishComponent {
    constructor(router, languageService, nzModalService, vhQuery, vhComponent, vhQueryCafe, vhAlgorithm, vhAuth) {
        this.router = router;
        this.languageService = languageService;
        this.nzModalService = nzModalService;
        this.vhQuery = vhQuery;
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.list_barcode = [];
        this.showModalAdd = false;
        this.showModalEdit = false;
        this.id_barcode = '';
        this.barcode_name = '';
    }
    ngOnInit() {
        this.getData();
        this.initForm();
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label']);
    }
    getData() {
        // this.vhComponent.showLoading('').then(() => {
        this.vhQuery.getDocsByFields("barcode_designs", { id_branch: { $eq: this.vhQueryCafe.getDefaultBranch()._id }, type: { $eq: 1 } })
            .then((response) => {
            this.list_barcode = response.filter(item => item.type != 2 || item.type != 3 || item.type != 4);
            // this.vhComponent.hideLoading(0);
            console.log(response);
        });
        // })
    }
    initForm() {
        this.formAdd = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            col: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(40, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(30, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            template: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            default: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1),
        });
    }
    addBarcode() {
        console.log(this.formAdd.value);
        if (!this.list_barcode.length)
            this.formAdd.controls['default'].setValue(true);
        let w = this.formAdd.value.width;
        let h = this.formAdd.value.height;
        if (h > w) {
            this.formAdd.controls['width'].setValue(h);
            this.formAdd.controls['height'].setValue(w);
        }
        let prop = {
            header: {
                type: 'header',
                font_size: 12,
                text_align: 'left',
                status: true,
                value: this.formAdd.value.template == 1 ? 'Tên nhà hàng' : 'Bàn 01 - Khu A',
                font_weight: 'bold',
                font_style: 'normal',
                text_decoration: 'none',
                width: w * 0.7 - 1,
                height: h * 0.13,
                x: 0, y: 0
            },
            name: {
                type: 'name',
                font_size: 12,
                text_align: 'left',
                status: true,
                value: '<span>Tên món ăn</span> <br> <span>+ Thuộc tính 1</span> <br> <span>+ Món phụ 1</span>',
                font_weight: '500',
                font_style: 'normal',
                text_decoration: 'none',
                width: w,
                height: h * 0.55,
                x: 0, y: 17
            },
            total: {
                type: 'total',
                font_size: 12,
                text_align: 'left',
                status: true,
                value: 30000,
                font_weight: 'bold',
                font_style: 'normal',
                text_decoration: 'none',
                width: w * 0.5,
                height: h * 0.13,
                x: 0, y: 113
            },
            note: {
                font_size: 12,
                text_align: 'left',
                status: true,
                value: 'Ghi chú của món ăn',
                font_weight: '500',
                font_style: 'normal',
                text_decoration: 'none',
                type: 'note',
                width: w,
                height: h * 0.13,
                x: 0, y: 96
            },
            time: {
                font_size: 10,
                text_align: 'right',
                status: true,
                value: new Date(),
                font_weight: '500',
                font_style: 'normal',
                text_decoration: 'none',
                width: w * 0.3,
                height: h * 0.13,
                type: 'time',
                x: w * 0.75 * 3.78, y: 0
            },
            number: {
                type: 'number',
                font_size: 10,
                text_align: 'right',
                status: true,
                value: '3/4',
                font_weight: '500',
                font_style: 'normal',
                text_decoration: 'none',
                width: w * 0.5,
                height: h * 0.13,
                x: w * 0.5 * 3.78, y: 113
            },
            notice: {
                font_size: 10,
                text_align: 'left',
                status: true,
                value: 'Sologan của nhà hàng',
                font_weight: '500',
                font_style: 'italic',
                text_decoration: 'none',
                width: w,
                height: h * 0.11,
                type: 'notice',
                x: 0, y: 130
            },
        };
        this.vhComponent.showLoading('').then(() => {
            this.vhQuery.addDoc("barcode_designs", Object.assign(Object.assign({}, this.formAdd.value), { id_branch: this.vhQueryCafe.getDefaultBranch()._id, property: prop }))
                .then((response) => {
                this.vhComponent.hideLoading(0);
                this.list_barcode.push(response);
                this.showModalAdd = false;
            }, error => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("An error while adding price list"));
            });
        });
    }
    editBarcode() {
        if (this.barcode_name != '')
            this.vhComponent.showLoading('').then(() => {
                this.vhQuery.updateDoc("barcode_designs", this.id_barcode, { name: this.barcode_name }).then((bool) => {
                    this.vhComponent.hideLoading(0);
                    this.showModalEdit = false;
                    this.list_barcode[this.list_barcode.findIndex(item => item._id == this.id_barcode)].name = this.barcode_name;
                }, error => {
                    this.vhComponent.hideLoading(0);
                    console.log('error', error);
                });
            });
    }
    updateStatus(item, value) {
        this.vhComponent.showLoading('').then(() => {
            this.vhQuery.updateDoc("barcode_designs", item._id, { status: value }).then((bool) => {
                this.vhComponent.hideLoading(0);
                item.status = value;
            }, error => {
                this.vhComponent.hideLoading(0);
                console.log('error', error);
            });
        });
    }
    setDefault(item, i) {
        this.vhComponent.showLoading('').then(() => {
            let index = this.list_barcode.findIndex(i => i.default && i._id != item._id);
            if (index != -1) {
                Promise.all([this.vhQuery.updateDoc("barcode_designs", item._id, { default: true }), this.vhQuery.updateDoc("barcode_designs", this.list_barcode[index]._id, { default: false })])
                    .then(() => {
                    this.getData();
                    this.vhComponent.hideLoading(0);
                });
            }
            else {
                this.vhQuery.updateDoc("barcode_designs", item._id, { default: true })
                    .then(() => {
                    this.getData();
                    this.vhComponent.hideLoading(0);
                });
            }
        });
    }
    gotoEdit(item) {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/template' + item.template.toString()], { state: item });
        // switch(item.col){
        //   case 2:{
        //     this.router.navigate(['/cafe/dashboard/management/design-barcode/detail'], { state: item });
        //     break;
        //   }
        //   case 3:{
        //     this.router.navigate(['/cafe/dashboard/management/design-barcode/detail-three-col'], { state: item });
        //     break;
        //   }
        //   default :{
        //     this.vhComponent.alertMessageDesktop( "error",this.languageService.translate("Không hỗ trợ kiểu tem này"))
        //   }
        // }
    }
    deleteBarcode(item, index) {
        if (item.default)
            this.nzModalService.confirm({
                nzTitle: this.languageService.translate("Mẫu tem này đang được thiết lập mặc định! Xác nhận xóa?"),
                nzCancelText: this.languageService.translate("Cancel"),
                nzOnOk: () => {
                    this.vhComponent.showLoading('').then(() => {
                        this.vhQuery.deleteDoc("barcode_designs", item._id)
                            .then((bool) => {
                            this.list_barcode.splice(index, 1);
                            this.vhComponent.hideLoading(0);
                        });
                    });
                }
            });
        else
            this.nzModalService.confirm({
                nzTitle: this.languageService.translate("Are you sure to delete this label template?"),
                nzCancelText: this.languageService.translate("Cancel"),
                nzOnOk: () => {
                    this.vhComponent.showLoading('').then(() => {
                        this.vhQuery.deleteDoc("barcode_designs", item._id)
                            .then((bool) => {
                            this.list_barcode.splice(index, 1);
                            this.vhComponent.hideLoading(0);
                        });
                    });
                },
            });
    }
}
LabelDishComponent.ɵfac = function LabelDishComponent_Factory(t) { return new (t || LabelDishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth)); };
LabelDishComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LabelDishComponent, selectors: [["app-label-dish"]], decls: 26, vars: 24, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "21", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "3", 1, "add-button"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "12", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "center-all-content"], ["nz-col", "", "nzSpan", "12"], ["nzNotFoundImage", "simple", 3, "nzNotFoundContent", 4, "ngIf"], ["nzWidth", "60%", 3, "nzMaskClosable", "nzVisible", "nzOkDisabled", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "nzWidth", "nzMaskClosable", "nzVisible", "nzOkDisabled", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["type", "button", "mode", "md"], [3, "click"], ["nz-col", "", "nzSpan", "24"], ["nz-radio", "", 3, "ngModel", "ngModelChange"], ["nzTooltipPlacement", "bottom", "nz-tooltip", "", "nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 3, "nzTooltipTitle", "nzTooltipColor", "nzControl", "nzPopconfirmTitle", "nzCancelText", "ngModel", "nzOnConfirm", "ngModelChange"], ["name", "create-outline", "slot", "end", "nzTooltipPlacement", "bottom", "nz-tooltip", "", 1, "icon_edit", 2, "cursor", "pointer", 3, "nzTooltipTitle", "nzTooltipColor", "click"], ["nzTooltipPlacement", "bottom", "nz-tooltip", "", "name", "trash-outline", "slot", "end", 1, "icon_delete", 2, "cursor", "pointer", 3, "nzTooltipTitle", "nzTooltipColor", "click"], ["nzNotFoundImage", "simple", 3, "nzNotFoundContent"], [3, "formGroup"], ["type", "text", "nz-input", "", "formControlName", "name", 3, "placeholder"], ["type", "number", "nz-input", "", "formControlName", "width", 3, "placeholder"], ["type", "number", "nz-input", "", "formControlName", "height", 3, "placeholder"], ["nz-col", "", "nzSpan", "1"], ["nz-col", "", "nzSpan", "11"], ["formControlName", "template"], ["nzLabel", "1", 3, "nzValue"], ["nzLabel", "2", 3, "nzValue"], [2, "margin-top", "8px"], ["nz-col", "", "nzSpan", "24", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [3, "ngStyle"], ["nz-image", "", "nzDisablePreview", "", "nzSrc", "assets/icon/management/label-template1.svg", 2, "width", "100%"], [2, "text-align", "center"], ["nz-image", "", "nzDisablePreview", "", "nzSrc", "assets/icon/management/label-template2.svg", 2, "width", "100%"], ["type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"]], template: function LabelDishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelDishComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LabelDishComponent_Template_button_click_11_listener() { ctx.showModalAdd = true; return ctx.initForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LabelDishComponent_div_16_Template, 20, 25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LabelDishComponent_nz_empty_19_Template, 2, 3, "nz-empty", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-modal", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function LabelDishComponent_Template_nz_modal_nzVisibleChange_20_listener($event) { return ctx.showModalAdd = $event; })("nzOnCancel", function LabelDishComponent_Template_nz_modal_nzOnCancel_20_listener() { return ctx.showModalAdd = false; })("nzOnOk", function LabelDishComponent_Template_nz_modal_nzOnOk_20_listener() { return ctx.addBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LabelDishComponent_ng_container_22_Template, 31, 26, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-modal", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function LabelDishComponent_Template_nz_modal_nzVisibleChange_23_listener($event) { return ctx.showModalEdit = $event; })("nzOnCancel", function LabelDishComponent_Template_nz_modal_nzOnCancel_23_listener() { return ctx.showModalEdit = false; })("nzOnOk", function LabelDishComponent_Template_nz_modal_nzOnOk_23_listener() { return ctx.editBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, LabelDishComponent_ng_container_25_Template, 5, 4, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 14, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 16, "Label list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 18, "Add"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list_barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.list_barcode.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 20, "Add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMaskClosable", false)("nzVisible", ctx.showModalAdd)("nzOkDisabled", ctx.formAdd.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 22, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzWidth", 450)("nzMaskClosable", false)("nzVisible", ctx.showModalEdit)("nzOkDisabled", ctx.barcode_name == "");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__.NzSwitchComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzTooltipDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__.NzPopconfirmDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__.NzEmptyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_22__.NzImageDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  position: relative;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  margin: 0 16px;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 12px;\n  flex: 0 0 22% !important;\n}\nnz-layout[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  min-height: 150px;\n  border-radius: 5px 5px 0 0;\n}\nnz-layout[_ngcontent-%COMP%]   .template-title[_ngcontent-%COMP%] {\n  padding: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .template-2[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  margin: 16px;\n  height: -moz-fit-content;\n  height: fit-content;\n  flex: 0 0 22% !important;\n}\nnz-layout[_ngcontent-%COMP%]   .template-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  min-height: 150px;\n  border-radius: 5px 5px 0 0;\n}\nnz-layout[_ngcontent-%COMP%]   .template-2-title[_ngcontent-%COMP%] {\n  padding: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .remove-btn-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYmVsLWRpc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtBQUVOO0FBQ0U7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFJO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUVOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDTjtBQUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBQ1I7QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esd0JBQUE7QUFGTjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRlI7QUFLTTtFQUNFLFlBQUE7QUFIUjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBSk4iLCJmaWxlIjoibGFiZWwtZGlzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICBcclxuICAgIC50ZW1wbGF0ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICBmbGV4OiAwIDAgMjIlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYtdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRlbXBsYXRlLTIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICBmbGV4OiAwIDAgMjIlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYtdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlbW92ZS1idG4tbWVudSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 48319:
/*!****************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/label-dish.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelDishModule": () => (/* binding */ LabelDishModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _label_dish_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-dish.component */ 2827);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 87214);
/* harmony import */ var _print_two_col_print_two_col_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./print-two-col/print-two-col.component */ 7399);
/* harmony import */ var _print_three_col_print_three_col_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print-three-col/print-three-col.component */ 62535);
/* harmony import */ var _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print-one-col/print-one-col.component */ 96557);
/* harmony import */ var _print_four_col_print_four_col_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print-four-col/print-four-col.component */ 32163);
/* harmony import */ var _print_five_col_print_five_col_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print-five-col/print-five-col.component */ 82585);
/* harmony import */ var _template1_template1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template1/template1.component */ 83155);
/* harmony import */ var _template2_template2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template2/template2.component */ 99305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);


















const routes = [
    {
        path: '',
        component: _label_dish_component__WEBPACK_IMPORTED_MODULE_0__.LabelDishComponent
    },
    {
        path: 'template1',
        component: _template1_template1_component__WEBPACK_IMPORTED_MODULE_8__.Template1Component
    },
    {
        path: 'template2',
        component: _template2_template2_component__WEBPACK_IMPORTED_MODULE_9__.Template2Component
    },
    {
        path: 'print-two-col',
        component: _print_two_col_print_two_col_component__WEBPACK_IMPORTED_MODULE_3__.PrintTwoColComponent
    },
    {
        path: 'print-three-col',
        component: _print_three_col_print_three_col_component__WEBPACK_IMPORTED_MODULE_4__.PrintThreeColComponent
    },
    {
        path: 'print-one-col',
        component: _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_5__.PrintOneColComponent
    },
    {
        path: 'print-four-col',
        component: _print_four_col_print_four_col_component__WEBPACK_IMPORTED_MODULE_6__.PrintFourColComponent
    },
    {
        path: 'print-five-col',
        component: _print_five_col_print_five_col_component__WEBPACK_IMPORTED_MODULE_7__.PrintFiveColComponent
    },
];
class LabelDishModule {
}
LabelDishModule.ɵfac = function LabelDishModule_Factory(t) { return new (t || LabelDishModule)(); };
LabelDishModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: LabelDishModule });
LabelDishModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](LabelDishModule, { declarations: [_label_dish_component__WEBPACK_IMPORTED_MODULE_0__.LabelDishComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent,
        _print_two_col_print_two_col_component__WEBPACK_IMPORTED_MODULE_3__.PrintTwoColComponent,
        _print_three_col_print_three_col_component__WEBPACK_IMPORTED_MODULE_4__.PrintThreeColComponent,
        _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_5__.PrintOneColComponent,
        _print_four_col_print_four_col_component__WEBPACK_IMPORTED_MODULE_6__.PrintFourColComponent,
        _print_five_col_print_five_col_component__WEBPACK_IMPORTED_MODULE_7__.PrintFiveColComponent,
        _template1_template1_component__WEBPACK_IMPORTED_MODULE_8__.Template1Component,
        _template2_template2_component__WEBPACK_IMPORTED_MODULE_9__.Template2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule] }); })();


/***/ }),

/***/ 82585:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/print-five-col/print-five-col.component.ts ***!
  \**************************************************************************************************************************/
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
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














const _c0 = function (a0, a1, a2) { return { "white-space": a0, "text-align": a1, "height.mm": a2 }; };
function PrintFiveColComponent_div_17_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r8.white_space, item_r8.text_align, item_r8.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.value);
} }
const _c1 = function (a0, a1) { return { "white-space": a0, "text-align": a1 }; };
function PrintFiveColComponent_div_17_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r8.white_space, item_r8.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(item_r8.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintFiveColComponent_div_17_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r8.height, item_r8.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "height.mm": a5, "width.mm": a6, "justify-content": a7 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintFiveColComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_2_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_17_div_2_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_17_div_2_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const idx_r9 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r8.font_size, item_r8.font_weight, item_r8.text_decoration, item_r8.font_style, item_r8.type == "price" && i_r2 == ctx_r3.listRowBarcode.length - 1 ? item_r8.y - 2 : item_r8.y, item_r8.height, ctx_r3.stamp.barcode.width, item_r8.type == "barcode" ? item_r8.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r9 == ctx_r3.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.type != "barcode" && item_r8.type != "price" && item_r8.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.type == "price" && item_r8.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.type == "barcode" && item_r8.status);
} }
function PrintFiveColComponent_div_17_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r18.white_space, item_r18.text_align, item_r18.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r18.value);
} }
function PrintFiveColComponent_div_17_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r18.white_space, item_r18.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.vhAlgorithm.vhcurrencyunit_symbol(item_r18.value));
} }
function PrintFiveColComponent_div_17_div_3_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r18.height, item_r18.width));
} }
function PrintFiveColComponent_div_17_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_3_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_17_div_3_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_17_div_3_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const idx_r19 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r18.font_size, item_r18.font_weight, item_r18.text_decoration, item_r18.font_style, item_r18.type == "price" && i_r2 == ctx_r17.listRowBarcode.length - 1 ? item_r18.y - 2 : item_r18.y, item_r18.height, ctx_r17.stamp.barcode.width, item_r18.type == "barcode" ? item_r18.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r19 == ctx_r17.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r18.type != "barcode" && item_r18.type != "price" && item_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r18.type == "price" && item_r18.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r18.type == "barcode" && item_r18.status);
} }
const _c5 = function (a0) { return { "width.mm": a0 }; };
function PrintFiveColComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_3_div_1_Template, 4, 16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r4.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.stamp.barcode.property);
} }
function PrintFiveColComponent_div_17_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r28.white_space, item_r28.text_align, item_r28.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28.value);
} }
function PrintFiveColComponent_div_17_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r28.white_space, item_r28.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r31.vhAlgorithm.vhcurrencyunit_symbol(item_r28.value));
} }
function PrintFiveColComponent_div_17_div_4_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r28.height, item_r28.width));
} }
function PrintFiveColComponent_div_17_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_4_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_17_div_4_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_17_div_4_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const idx_r29 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r28.font_size, item_r28.font_weight, item_r28.text_decoration, item_r28.font_style, item_r28.type == "price" && i_r2 == ctx_r27.listRowBarcode.length - 1 ? item_r28.y - 2 : item_r28.y, item_r28.height, ctx_r27.stamp.barcode.width, item_r28.type == "barcode" ? item_r28.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r29 == ctx_r27.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.type != "barcode" && item_r28.type != "price" && item_r28.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.type == "price" && item_r28.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.type == "barcode" && item_r28.status);
} }
function PrintFiveColComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_4_div_1_Template, 4, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r5.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.stamp.barcode.property);
} }
function PrintFiveColComponent_div_17_div_5_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r38.white_space, item_r38.text_align, item_r38.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r38.value);
} }
function PrintFiveColComponent_div_17_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r38.white_space, item_r38.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.vhAlgorithm.vhcurrencyunit_symbol(item_r38.value));
} }
function PrintFiveColComponent_div_17_div_5_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r38.height, item_r38.width));
} }
function PrintFiveColComponent_div_17_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_5_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_17_div_5_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_17_div_5_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const idx_r39 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r38.font_size, item_r38.font_weight, item_r38.text_decoration, item_r38.font_style, item_r38.type == "price" && i_r2 == ctx_r37.listRowBarcode.length - 1 ? item_r38.y - 2 : item_r38.y, item_r38.height, ctx_r37.stamp.barcode.width, item_r38.type == "barcode" ? item_r38.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r39 == ctx_r37.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.type != "barcode" && item_r38.type != "price" && item_r38.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.type == "price" && item_r38.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r38.type == "barcode" && item_r38.status);
} }
function PrintFiveColComponent_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_5_div_1_Template, 4, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r6.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.stamp.barcode.property);
} }
function PrintFiveColComponent_div_17_div_6_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r48.white_space, item_r48.text_align, item_r48.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r48.value);
} }
function PrintFiveColComponent_div_17_div_6_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r48.white_space, item_r48.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r51.vhAlgorithm.vhcurrencyunit_symbol(item_r48.value));
} }
function PrintFiveColComponent_div_17_div_6_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r48.height, item_r48.width));
} }
function PrintFiveColComponent_div_17_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_6_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_17_div_6_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_17_div_6_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    const idx_r49 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r48.font_size, item_r48.font_weight, item_r48.text_decoration, item_r48.font_style, item_r48.type == "price" && i_r2 == ctx_r47.listRowBarcode.length - 1 ? item_r48.y - 2 : item_r48.y, item_r48.height, ctx_r47.stamp.barcode.width, item_r48.type == "barcode" ? item_r48.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r49 == ctx_r47.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r48.type != "barcode" && item_r48.type != "price" && item_r48.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r48.type == "price" && item_r48.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r48.type == "barcode" && item_r48.status);
} }
function PrintFiveColComponent_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFiveColComponent_div_17_div_6_div_1_Template, 4, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r7.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.stamp.barcode.property);
} }
const _c6 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
function PrintFiveColComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFiveColComponent_div_17_div_2_Template, 4, 16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFiveColComponent_div_17_div_3_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFiveColComponent_div_17_div_4_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintFiveColComponent_div_17_div_5_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PrintFiveColComponent_div_17_div_6_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c6, ctx_r0.stamp.barcode.width * 5, ctx_r0.stamp.barcode.height - 3, i_r2 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c5, ctx_r0.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col5);
} }
const _c7 = function (a0) { return { "height.px": a0 }; };
class PrintFiveColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.listRowBarcode = [{ show_col2: false, show_col3: false, show_col4: false, show_col5: false }]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        this.stamp = this.router.getCurrentNavigation().extras.state;
        this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
    }
    ngOnInit() {
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
        this.changeNummber();
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
    ngAfterViewChecked() {
        if (document.querySelector(".barcode"))
            this.renderBarcode();
        if (document.querySelector('#scroll'))
            this.heightScroll = document.querySelector('#scroll').clientHeight - 32;
        this.cdf.detectChanges();
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/detail'], { state: this.stamp.barcode });
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
PrintFiveColComponent.ɵfac = function PrintFiveColComponent_Factory(t) { return new (t || PrintFiveColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery)); };
PrintFiveColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintFiveColComponent, selectors: [["app-print-five-col"]], decls: 18, vars: 11, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp mb-6", "style", "display: flex;margin-left: -1mm;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "stamp", "mb-6", 2, "display", "flex", "margin-left", "-1mm", 3, "ngStyle"], [1, "border-top", 2, "position", "relative", "height", "100%", 3, "ngStyle"], ["style", "display: flex;position: absolute;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: relative;height: 100%;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [2, "display", "flex", "position", "absolute", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;z-index: 2;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", "z-index", "2", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], ["style", "display: flex;position: absolute;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [2, "display", "flex", "position", "absolute", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", "display: flex;position: absolute; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"]], template: function PrintFiveColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrintFiveColComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrintFiveColComponent_Template_button_click_10_listener() { return ctx.printBrowser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PrintFiveColComponent_div_17_Template, 7, 13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.stamp.barcode.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, "Print"), " barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c7, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWZpdmUtY29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0ksaUJBQUE7QUFFTjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7QUFGWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUloQjtBQUhnQjtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBSXBCO0FBQVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRVo7QUFEWTtFQUNJLGlCQUFBO0FBR2hCO0FBRFk7RUFDSSxrQkFBQTtBQUdoQjtBQURZO0VBQ0ksMEJBQUE7QUFHaEI7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBREE7RUFDSSxnQ0FBQTtBQUlKO0FBRkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFLSiIsImZpbGUiOiJwcmludC1maXZlLWNvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfSBcclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2NSwgNjUsIDY1KTtcclxuICAgIH1cclxuICAgIC5mb250LXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLWZhbWlseSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNpemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDksIDkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi1ib2xkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaXRhbGljIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYm9yZGVyLWJvdHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XHJcbn1cclxuLmJvcmRlci10b3B7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQ7XHJcbn1cclxuLm1iLTZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2bW07XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 32163:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/print-four-col/print-four-col.component.ts ***!
  \**************************************************************************************************************************/
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
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














const _c0 = function (a0, a1, a2) { return { "white-space": a0, "text-align": a1, "height.mm": a2 }; };
function PrintFourColComponent_div_17_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r7.white_space, item_r7.text_align, item_r7.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.value);
} }
const _c1 = function (a0, a1) { return { "white-space": a0, "text-align": a1 }; };
function PrintFourColComponent_div_17_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r7.white_space, item_r7.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.vhAlgorithm.vhcurrencyunit_symbol(item_r7.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintFourColComponent_div_17_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r7.height, item_r7.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "height.mm": a5, "width.mm": a6, "justify-content": a7 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintFourColComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_17_div_2_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_17_div_2_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_17_div_2_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const idx_r8 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r7.font_size, item_r7.font_weight, item_r7.text_decoration, item_r7.font_style, item_r7.type == "price" && i_r2 == ctx_r3.listRowBarcode.length - 1 ? item_r7.y - 2 : item_r7.y, item_r7.height, ctx_r3.stamp.barcode.width, item_r7.type == "barcode" ? item_r7.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r8 == ctx_r3.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type != "barcode" && item_r7.type != "price" && item_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "price" && item_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "barcode" && item_r7.status);
} }
function PrintFourColComponent_div_17_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r17.white_space, item_r17.text_align, item_r17.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r17.value);
} }
function PrintFourColComponent_div_17_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r17.white_space, item_r17.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.vhAlgorithm.vhcurrencyunit_symbol(item_r17.value));
} }
function PrintFourColComponent_div_17_div_3_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r17.height, item_r17.width));
} }
function PrintFourColComponent_div_17_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_17_div_3_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_17_div_3_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_17_div_3_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const idx_r18 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r17.font_size, item_r17.font_weight, item_r17.text_decoration, item_r17.font_style, item_r17.type == "price" && i_r2 == ctx_r16.listRowBarcode.length - 1 ? item_r17.y - 2 : item_r17.y, item_r17.height, ctx_r16.stamp.barcode.width, item_r17.type == "barcode" ? item_r17.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r18 == ctx_r16.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r17.type != "barcode" && item_r17.type != "price" && item_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r17.type == "price" && item_r17.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r17.type == "barcode" && item_r17.status);
} }
const _c5 = function (a0) { return { "width.mm": a0 }; };
function PrintFourColComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_17_div_3_div_1_Template, 4, 16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r4.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.stamp.barcode.property);
} }
function PrintFourColComponent_div_17_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r27.white_space, item_r27.text_align, item_r27.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r27.value);
} }
function PrintFourColComponent_div_17_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r27.white_space, item_r27.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r30.vhAlgorithm.vhcurrencyunit_symbol(item_r27.value));
} }
function PrintFourColComponent_div_17_div_4_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r27.height, item_r27.width));
} }
function PrintFourColComponent_div_17_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_17_div_4_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_17_div_4_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_17_div_4_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const idx_r28 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r27.font_size, item_r27.font_weight, item_r27.text_decoration, item_r27.font_style, item_r27.type == "price" && i_r2 == ctx_r26.listRowBarcode.length - 1 ? item_r27.y - 2 : item_r27.y, item_r27.height, ctx_r26.stamp.barcode.width, item_r27.type == "barcode" ? item_r27.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r28 == ctx_r26.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r27.type != "barcode" && item_r27.type != "price" && item_r27.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r27.type == "price" && item_r27.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r27.type == "barcode" && item_r27.status);
} }
function PrintFourColComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_17_div_4_div_1_Template, 4, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r5.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.stamp.barcode.property);
} }
function PrintFourColComponent_div_17_div_5_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r37.white_space, item_r37.text_align, item_r37.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r37.value);
} }
function PrintFourColComponent_div_17_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r37.white_space, item_r37.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r40.vhAlgorithm.vhcurrencyunit_symbol(item_r37.value));
} }
function PrintFourColComponent_div_17_div_5_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r37.height, item_r37.width));
} }
function PrintFourColComponent_div_17_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_17_div_5_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_17_div_5_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_17_div_5_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const idx_r38 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r37.font_size, item_r37.font_weight, item_r37.text_decoration, item_r37.font_style, item_r37.type == "price" && i_r2 == ctx_r36.listRowBarcode.length - 1 ? item_r37.y - 2 : item_r37.y, item_r37.height, ctx_r36.stamp.barcode.width, item_r37.type == "barcode" ? item_r37.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r38 == ctx_r36.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r37.type != "barcode" && item_r37.type != "price" && item_r37.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r37.type == "price" && item_r37.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r37.type == "barcode" && item_r37.status);
} }
function PrintFourColComponent_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintFourColComponent_div_17_div_5_div_1_Template, 4, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r6.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.stamp.barcode.property);
} }
const _c6 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
function PrintFourColComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintFourColComponent_div_17_div_2_Template, 4, 16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintFourColComponent_div_17_div_3_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintFourColComponent_div_17_div_4_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintFourColComponent_div_17_div_5_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](6, _c6, ctx_r0.stamp.barcode.width * 4, ctx_r0.stamp.barcode.height > 20 ? ctx_r0.stamp.barcode.height - 3 : ctx_r0.stamp.barcode.height - 2, i_r2 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c5, ctx_r0.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col4);
} }
const _c7 = function (a0) { return { "height.px": a0 }; };
class PrintFourColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.listRowBarcode = [{ show_col2: false, show_col3: false, show_col4: false }]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        this.stamp = this.router.getCurrentNavigation().extras.state;
        this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
    }
    ngOnInit() {
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
        this.changeNummber();
    }
    changeNummber() {
        /**
         * nếu chia hết cho 4 thì hiện cả 4 tem trên hàng
         * ngược lại  => khi push tới hàng cuối cùng thì check i = (number-1)/3 : cột thứ 1  hay = (number-2)/3 : cột thứ 2
         *
         */
        this.listRowBarcode = [];
        for (let i = 0; i < this.stamp.number / 4; i++) {
            console.log(i);
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
    ngAfterViewChecked() {
        if (document.querySelector(".barcode"))
            this.renderBarcode();
        if (document.querySelector('#scroll'))
            this.heightScroll = document.querySelector('#scroll').clientHeight - 32;
        this.cdf.detectChanges();
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/detail'], { state: this.stamp.barcode });
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
PrintFourColComponent.ɵfac = function PrintFourColComponent_Factory(t) { return new (t || PrintFourColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery)); };
PrintFourColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintFourColComponent, selectors: [["app-print-four-col"]], decls: 18, vars: 11, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp mb-6", "style", "display: flex;margin-left: -1mm;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "stamp", "mb-6", 2, "display", "flex", "margin-left", "-1mm", 3, "ngStyle"], [1, "border-top", 2, "position", "relative", "height", "100%", 3, "ngStyle"], ["style", "display: flex;position: absolute;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: relative;height: 100%;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [2, "display", "flex", "position", "absolute", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;z-index: 2;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", "z-index", "2", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], ["style", "display: flex;position: absolute;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [2, "display", "flex", "position", "absolute", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", "display: flex;position: absolute; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"]], template: function PrintFourColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrintFourColComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrintFourColComponent_Template_button_click_10_listener() { return ctx.printBrowser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PrintFourColComponent_div_17_Template, 6, 12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.stamp.barcode.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, "Print"), " barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c7, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWZvdXItY29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0ksaUJBQUE7QUFFTjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7QUFGWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUloQjtBQUhnQjtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBSXBCO0FBQVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRVo7QUFEWTtFQUNJLGlCQUFBO0FBR2hCO0FBRFk7RUFDSSxrQkFBQTtBQUdoQjtBQURZO0VBQ0ksMEJBQUE7QUFHaEI7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBREE7RUFDSSxnQ0FBQTtBQUlKO0FBRkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFLSiIsImZpbGUiOiJwcmludC1mb3VyLWNvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfSBcclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2NSwgNjUsIDY1KTtcclxuICAgIH1cclxuICAgIC5mb250LXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLWZhbWlseSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNpemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDksIDkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi1ib2xkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaXRhbGljIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYm9yZGVyLWJvdHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XHJcbn1cclxuLmJvcmRlci10b3B7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQ7XHJcbn1cclxuLm1iLTZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2bW07XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 96557:
/*!************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/print-one-col/print-one-col.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintOneColComponent": () => (/* binding */ PrintOneColComponent)
/* harmony export */ });
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














const _c0 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { "text-align": a0, "font-weight": a1, "font-style": a2, "text-decoration": a3, "height.mm": a4, "width.mm": a5, "top.px": a6, "left.px": a7, "display": a8, "font-size.px": a9 }; };
function PrintOneColComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c0, ctx_r4.stamp.width * 1.375, i_r3 == ctx_r4.listRowBarcode.length - 1 ? ctx_r4.stamp.height * 1.375 - ctx_r4.ratio : ctx_r4.stamp.height * 1.375 - (ctx_r4.ratio - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](19, _c1, [ctx_r4.stamp.property.header.text_align, ctx_r4.stamp.property.header.font_weight, ctx_r4.stamp.property.header.font_style, ctx_r4.stamp.property.header.text_decoration, ctx_r4.stamp.property.header.height * 1.375 - 1, ctx_r4.stamp.property.header.width * 1.375 - 4, ctx_r4.stamp.property.header.y, ctx_r4.stamp.property.header.x, ctx_r4.stamp.property.header.status ? "block" : "none", ctx_r4.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.stamp.property.header.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](30, _c1, [ctx_r4.stamp.property.time.text_align, ctx_r4.stamp.property.time.font_weight, ctx_r4.stamp.property.time.font_style, ctx_r4.stamp.property.time.text_decoration, ctx_r4.stamp.property.time.height * 1.375 - 1, ctx_r4.stamp.property.time.width * 1.375, ctx_r4.stamp.property.time.y, ctx_r4.stamp.property.time.x, ctx_r4.stamp.property.time.status ? "block" : "none", ctx_r4.stamp.property.time.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 13, ctx_r4.stamp.property.time.value, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](41, _c1, [ctx_r4.stamp.property.name.text_align, ctx_r4.stamp.property.name.font_weight, ctx_r4.stamp.property.name.font_style, ctx_r4.stamp.property.name.text_decoration, ctx_r4.stamp.property.name.height * 1.375 - 1, ctx_r4.stamp.property.name.width * 1.375, ctx_r4.stamp.property.name.y, ctx_r4.stamp.property.name.x, ctx_r4.stamp.property.name.status ? "block" : "none", ctx_r4.stamp.property.name.font_size]))("innerHTML", ctx_r4.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](52, _c1, [ctx_r4.stamp.property.note.text_align, ctx_r4.stamp.property.note.font_weight, ctx_r4.stamp.property.note.font_style, ctx_r4.stamp.property.note.text_decoration, ctx_r4.stamp.property.note.height * 1.375 - 1, ctx_r4.stamp.property.note.width * 1.375, ctx_r4.stamp.property.note.y, ctx_r4.stamp.property.note.x, ctx_r4.stamp.property.note.status ? "block" : "none", ctx_r4.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.stamp.property.note.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](63, _c1, [ctx_r4.stamp.property.total.text_align, ctx_r4.stamp.property.total.font_weight, ctx_r4.stamp.property.total.font_style, ctx_r4.stamp.property.total.text_decoration, ctx_r4.stamp.property.total.height * 1.375 - 1, ctx_r4.stamp.property.total.width * 1.375, ctx_r4.stamp.property.total.y, ctx_r4.stamp.property.total.x, ctx_r4.stamp.property.total.status ? "block" : "none", ctx_r4.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.stamp.property.total.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](74, _c1, [ctx_r4.stamp.property.notice.text_align, ctx_r4.stamp.property.notice.font_weight, ctx_r4.stamp.property.notice.font_style, ctx_r4.stamp.property.notice.text_decoration, ctx_r4.stamp.property.notice.height * 1.375 - 1, ctx_r4.stamp.property.notice.width * 1.375, ctx_r4.stamp.property.notice.y, ctx_r4.stamp.property.notice.x, ctx_r4.stamp.property.notice.status ? "block" : "none", ctx_r4.stamp.property.notice.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" **", ctx_r4.stamp.property.notice.value, " ");
} }
function PrintOneColComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, ctx_r5.stamp.width * 1.375, i_r3 == ctx_r5.listRowBarcode.length - 1 ? ctx_r5.stamp.height * 1.375 - ctx_r5.ratio : ctx_r5.stamp.height * 1.375 - (ctx_r5.ratio - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](14, _c1, [ctx_r5.stamp.property.header.text_align, ctx_r5.stamp.property.header.font_weight, ctx_r5.stamp.property.header.font_style, ctx_r5.stamp.property.header.text_decoration, ctx_r5.stamp.property.header.height * 1.375 - 1, ctx_r5.stamp.property.header.width * 1.375 - 4, ctx_r5.stamp.property.header.y, ctx_r5.stamp.property.header.x, ctx_r5.stamp.property.header.status ? "block" : "none", ctx_r5.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.stamp.property.header.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](25, _c1, [ctx_r5.stamp.property.name.text_align, ctx_r5.stamp.property.name.font_weight, ctx_r5.stamp.property.name.font_style, ctx_r5.stamp.property.name.text_decoration, ctx_r5.stamp.property.name.height * 1.375 - 1, ctx_r5.stamp.property.name.width * 1.375, ctx_r5.stamp.property.name.y, ctx_r5.stamp.property.name.x, ctx_r5.stamp.property.name.status ? "block" : "none", ctx_r5.stamp.property.name.font_size]))("innerHTML", ctx_r5.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](36, _c1, [ctx_r5.stamp.property.note.text_align, ctx_r5.stamp.property.note.font_weight, ctx_r5.stamp.property.note.font_style, ctx_r5.stamp.property.note.text_decoration, ctx_r5.stamp.property.note.height * 1.375 - 1, ctx_r5.stamp.property.note.width * 1.375, ctx_r5.stamp.property.note.y, ctx_r5.stamp.property.note.x, ctx_r5.stamp.property.note.status ? "block" : "none", ctx_r5.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.stamp.property.note.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](47, _c1, [ctx_r5.stamp.property.total.text_align, ctx_r5.stamp.property.total.font_weight, ctx_r5.stamp.property.total.font_style, ctx_r5.stamp.property.total.text_decoration, ctx_r5.stamp.property.total.height * 1.375 - 1, ctx_r5.stamp.property.total.width * 1.375, ctx_r5.stamp.property.total.y, ctx_r5.stamp.property.total.x, ctx_r5.stamp.property.total.status ? "block" : "none", ctx_r5.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.vhAlgorithm.vhcurrencyunit_symbol(ctx_r5.stamp.property.total.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](58, _c1, [ctx_r5.stamp.property.number.text_align, ctx_r5.stamp.property.number.font_weight, ctx_r5.stamp.property.number.font_style, ctx_r5.stamp.property.number.text_decoration, ctx_r5.stamp.property.number.height * 1.375 - 1, ctx_r5.stamp.property.number.width * 1.375, ctx_r5.stamp.property.number.y, ctx_r5.stamp.property.number.x, ctx_r5.stamp.property.number.status ? "block" : "none", ctx_r5.stamp.property.number.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.stamp.property.number.value, " ");
} }
const _c2 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
function PrintOneColComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintOneColComponent_div_17_div_1_Template, 13, 85, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PrintOneColComponent_div_17_div_2_Template, 10, 69, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c2, ctx_r0.stamp.width * 1.375, i_r3 == ctx_r0.listRowBarcode.length - 1 ? ctx_r0.stamp.height * 1.375 - 3 : ctx_r0.stamp.height * 1.375 - 2, i_r3 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.stamp.template == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.stamp.template == 2);
} }
function PrintOneColComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c0, ctx_r10.stamp.width * 1.375, i_r9 == ctx_r10.listRowBarcode.length - 1 ? ctx_r10.stamp.height * 1.375 - 5 : ctx_r10.stamp.height * 1.375 - 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](19, _c1, [ctx_r10.stamp.property.header.text_align, ctx_r10.stamp.property.header.font_weight, ctx_r10.stamp.property.header.font_style, ctx_r10.stamp.property.header.text_decoration, ctx_r10.stamp.property.header.height * 1.375 - 1, ctx_r10.stamp.property.header.width * 1.375 - 4, ctx_r10.stamp.property.header.y, ctx_r10.stamp.property.header.x, ctx_r10.stamp.property.header.status ? "block" : "none", ctx_r10.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.stamp.property.header.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](30, _c1, [ctx_r10.stamp.property.time.text_align, ctx_r10.stamp.property.time.font_weight, ctx_r10.stamp.property.time.font_style, ctx_r10.stamp.property.time.text_decoration, ctx_r10.stamp.property.time.height * 1.375 - 1, ctx_r10.stamp.property.time.width * 1.375, ctx_r10.stamp.property.time.y, ctx_r10.stamp.property.time.x, ctx_r10.stamp.property.time.status ? "block" : "none", ctx_r10.stamp.property.time.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 13, ctx_r10.stamp.property.time.value, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](41, _c1, [ctx_r10.stamp.property.name.text_align, ctx_r10.stamp.property.name.font_weight, ctx_r10.stamp.property.name.font_style, ctx_r10.stamp.property.name.text_decoration, ctx_r10.stamp.property.name.height * 1.375 - 1, ctx_r10.stamp.property.name.width * 1.375, ctx_r10.stamp.property.name.y, ctx_r10.stamp.property.name.x, ctx_r10.stamp.property.name.status ? "block" : "none", ctx_r10.stamp.property.name.font_size]))("innerHTML", ctx_r10.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](52, _c1, [ctx_r10.stamp.property.note.text_align, ctx_r10.stamp.property.note.font_weight, ctx_r10.stamp.property.note.font_style, ctx_r10.stamp.property.note.text_decoration, ctx_r10.stamp.property.note.height * 1.375 - 1, ctx_r10.stamp.property.note.width * 1.375, ctx_r10.stamp.property.note.y, ctx_r10.stamp.property.note.x, ctx_r10.stamp.property.note.status ? "block" : "none", ctx_r10.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.stamp.property.note.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](63, _c1, [ctx_r10.stamp.property.total.text_align, ctx_r10.stamp.property.total.font_weight, ctx_r10.stamp.property.total.font_style, ctx_r10.stamp.property.total.text_decoration, ctx_r10.stamp.property.total.height * 1.375 - 1, ctx_r10.stamp.property.total.width * 1.375, ctx_r10.stamp.property.total.y, ctx_r10.stamp.property.total.x, ctx_r10.stamp.property.total.status ? "block" : "none", ctx_r10.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.vhAlgorithm.vhcurrencyunit_symbol(ctx_r10.stamp.property.total.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](74, _c1, [ctx_r10.stamp.property.notice.text_align, ctx_r10.stamp.property.notice.font_weight, ctx_r10.stamp.property.notice.font_style, ctx_r10.stamp.property.notice.text_decoration, ctx_r10.stamp.property.notice.height * 1.375 - 1, ctx_r10.stamp.property.notice.width * 1.375, ctx_r10.stamp.property.notice.y, ctx_r10.stamp.property.notice.x, ctx_r10.stamp.property.notice.status ? "block" : "none", ctx_r10.stamp.property.notice.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" **", ctx_r10.stamp.property.notice.value, " ");
} }
function PrintOneColComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, ctx_r11.stamp.width * 1.375, i_r9 == ctx_r11.listRowBarcode.length - 1 ? ctx_r11.stamp.height * 1.375 - ctx_r11.ratio : ctx_r11.stamp.height * 1.375 - (ctx_r11.ratio - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](14, _c1, [ctx_r11.stamp.property.header.text_align, ctx_r11.stamp.property.header.font_weight, ctx_r11.stamp.property.header.font_style, ctx_r11.stamp.property.header.text_decoration, ctx_r11.stamp.property.header.height * 1.375 - 1, ctx_r11.stamp.property.header.width * 1.375 - 4, ctx_r11.stamp.property.header.y, ctx_r11.stamp.property.header.x, ctx_r11.stamp.property.header.status ? "block" : "none", ctx_r11.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.stamp.property.header.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](25, _c1, [ctx_r11.stamp.property.name.text_align, ctx_r11.stamp.property.name.font_weight, ctx_r11.stamp.property.name.font_style, ctx_r11.stamp.property.name.text_decoration, ctx_r11.stamp.property.name.height * 1.375 - 1, ctx_r11.stamp.property.name.width * 1.375, ctx_r11.stamp.property.name.y, ctx_r11.stamp.property.name.x, ctx_r11.stamp.property.name.status ? "block" : "none", ctx_r11.stamp.property.name.font_size]))("innerHTML", ctx_r11.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](36, _c1, [ctx_r11.stamp.property.note.text_align, ctx_r11.stamp.property.note.font_weight, ctx_r11.stamp.property.note.font_style, ctx_r11.stamp.property.note.text_decoration, ctx_r11.stamp.property.note.height * 1.375 - 1, ctx_r11.stamp.property.note.width * 1.375, ctx_r11.stamp.property.note.y, ctx_r11.stamp.property.note.x, ctx_r11.stamp.property.note.status ? "block" : "none", ctx_r11.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.stamp.property.note.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](47, _c1, [ctx_r11.stamp.property.total.text_align, ctx_r11.stamp.property.total.font_weight, ctx_r11.stamp.property.total.font_style, ctx_r11.stamp.property.total.text_decoration, ctx_r11.stamp.property.total.height * 1.375 - 1, ctx_r11.stamp.property.total.width * 1.375, ctx_r11.stamp.property.total.y, ctx_r11.stamp.property.total.x, ctx_r11.stamp.property.total.status ? "block" : "none", ctx_r11.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(ctx_r11.stamp.property.total.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](58, _c1, [ctx_r11.stamp.property.number.text_align, ctx_r11.stamp.property.number.font_weight, ctx_r11.stamp.property.number.font_style, ctx_r11.stamp.property.number.text_decoration, ctx_r11.stamp.property.number.height * 1.375 - 1, ctx_r11.stamp.property.number.width * 1.375, ctx_r11.stamp.property.number.y, ctx_r11.stamp.property.number.x, ctx_r11.stamp.property.number.status ? "block" : "none", ctx_r11.stamp.property.number.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.stamp.property.number.value, " ");
} }
function PrintOneColComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrintOneColComponent_div_19_div_1_Template, 13, 85, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PrintOneColComponent_div_19_div_2_Template, 10, 69, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c2, ctx_r1.stamp.width * 1.375, i_r9 == ctx_r1.listRowBarcode.length - 1 ? ctx_r1.stamp.height * 1.375 - 5 : ctx_r1.stamp.height * 1.375 - 4, i_r9 == ctx_r1.listRowBarcode.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.stamp.template == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.stamp.template == 2);
} }
const _c3 = function (a0) { return { "height.px": a0 }; };
class PrintOneColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery, platform) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.ratio = 3;
        this.listOfFontSize = [8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.number = 1;
        this.listRowBarcode = [false]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        this.stamp = this.router.getCurrentNavigation().extras.state.barcode;
        this.root = this.router.getCurrentNavigation().extras.state;
    }
    ngOnInit() {
        this.changeNummber();
    }
    changeNummber() {
        this.listRowBarcode = [];
        for (let i = 0; i < this.root.number; i++) {
            this.listRowBarcode.push(true);
        }
    }
    ngAfterViewChecked() {
        if (document.querySelector('#scroll'))
            this.heightScroll = document.querySelector('#scroll').clientHeight - 32;
        this.cdf.detectChanges();
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/template' + this.stamp.template], { state: this.stamp });
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
        print_js__WEBPACK_IMPORTED_MODULE_0___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 3) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
}
PrintOneColComponent.ɵfac = function PrintOneColComponent_Factory(t) { return new (t || PrintOneColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform)); };
PrintOneColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrintOneColComponent, selectors: [["app-print-one-col"]], decls: 20, vars: 12, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm", "margin-left", "2mm"], ["class", "stamp mb-6", "style", "display: flex;  ", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["id", "stamp-barcode-electron", 2, "height", "100%", "margin-top", "-1.5mm", "margin-left", "2mm", "display", "none"], [1, "stamp", "mb-6", 2, "display", "flex", 3, "ngStyle"], ["style", "overflow: hidden;position: relative;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [1, "border-top", 2, "overflow", "hidden", "position", "relative", 3, "ngStyle"], ["id", "header", 2, "position", "absolute", 3, "ngStyle"], ["id", "time", 2, "position", "absolute", 3, "ngStyle"], ["id", "name", 2, "position", "absolute", "overflow", "hidden", 3, "ngStyle", "innerHTML"], ["id", "note", 2, "position", "absolute", 3, "ngStyle"], ["id", "total", 2, "position", "absolute", 3, "ngStyle"], ["id", "notice", 2, "position", "absolute", 3, "ngStyle"], ["id", "number", 2, "position", "absolute", 3, "ngStyle"]], template: function PrintOneColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintOneColComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintOneColComponent_Template_button_click_10_listener() { return ctx.printBrowser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PrintOneColComponent_div_17_Template, 3, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PrintOneColComponent_div_19_Template, 3, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.stamp.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, "Print"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c3, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LW9uZS1jb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDSSxpQkFBQTtBQUVOO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSWhCO0FBSGdCO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFJcEI7QUFBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFWjtBQURZO0VBQ0ksaUJBQUE7QUFHaEI7QUFEWTtFQUNJLGtCQUFBO0FBR2hCO0FBRFk7RUFDSSwwQkFBQTtBQUdoQjtBQUVBO0VBQ0kseUJBQUE7QUFDSjtBQUNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0FBR0o7QUFEQTtFQUNJLGdDQUFBO0FBSUo7QUFGQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUtKIiwiZmlsZSI6InByaW50LW9uZS1jb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH0gXHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvcmRlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgICB9XHJcbiAgICAuZm9udC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi1mYW1pbHkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zaXplIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5LCA5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICYtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWl0YWxpYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJvcmRlci1ib3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xyXG59XHJcbi5ib3JkZXItdG9we1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkO1xyXG59XHJcbi5tYi02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNm1tO1xyXG59XHJcbi5zZWxlY3RlZHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 62535:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/print-three-col/print-three-col.component.ts ***!
  \****************************************************************************************************************************/
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
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














const _c0 = function (a0, a1, a2) { return { "white-space": a0, "text-align": a1, "height.mm": a2 }; };
function PrintThreeColComponent_div_17_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r6.white_space, item_r6.text_align, item_r6.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.value);
} }
const _c1 = function (a0, a1) { return { "white-space": a0, "text-align": a1 }; };
function PrintThreeColComponent_div_17_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r6.white_space, item_r6.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit_symbol(item_r6.value));
} }
const _c2 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintThreeColComponent_div_17_div_2_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r6.height, item_r6.width));
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "height.mm": a5, "width.mm": a6, "justify-content": a7 }; };
const _c4 = function (a0) { return { "border-bot": a0 }; };
function PrintThreeColComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_17_div_2_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_17_div_2_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_17_div_2_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r6.font_size, item_r6.font_weight, item_r6.text_decoration, item_r6.font_style, item_r6.type == "price" && i_r2 == ctx_r3.listRowBarcode.length - 1 ? item_r6.y - 2 : item_r6.y, item_r6.height, ctx_r3.stamp.barcode.width, item_r6.type == "barcode" ? item_r6.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r7 == ctx_r3.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.type != "barcode" && item_r6.type != "price" && item_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.type == "price" && item_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.type == "barcode" && item_r6.status);
} }
function PrintThreeColComponent_div_17_div_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r16.white_space, item_r16.text_align, item_r16.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16.value);
} }
function PrintThreeColComponent_div_17_div_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r16.white_space, item_r16.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r19.vhAlgorithm.vhcurrencyunit_symbol(item_r16.value));
} }
function PrintThreeColComponent_div_17_div_3_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r16.height, item_r16.width));
} }
function PrintThreeColComponent_div_17_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_17_div_3_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_17_div_3_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_17_div_3_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const idx_r17 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r16.font_size, item_r16.font_weight, item_r16.text_decoration, item_r16.font_style, item_r16.type == "price" && i_r2 == ctx_r15.listRowBarcode.length - 1 ? item_r16.y - 2 : item_r16.y, item_r16.height, ctx_r15.stamp.barcode.width, item_r16.type == "barcode" ? item_r16.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r17 == ctx_r15.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r16.type != "barcode" && item_r16.type != "price" && item_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r16.type == "price" && item_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r16.type == "barcode" && item_r16.status);
} }
const _c5 = function (a0) { return { "width.mm": a0 }; };
function PrintThreeColComponent_div_17_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_17_div_3_div_1_Template, 4, 16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r4.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.stamp.barcode.property);
} }
function PrintThreeColComponent_div_17_div_4_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c0, item_r26.white_space, item_r26.text_align, item_r26.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r26.value);
} }
function PrintThreeColComponent_div_17_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, item_r26.white_space, item_r26.text_align));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r29.vhAlgorithm.vhcurrencyunit_symbol(item_r26.value));
} }
function PrintThreeColComponent_div_17_div_4_div_1_canvas_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 21);
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c2, item_r26.height, item_r26.width));
} }
function PrintThreeColComponent_div_17_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_17_div_4_div_1_span_1_Template, 2, 6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_17_div_4_div_1_span_2_Template, 2, 5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_17_div_4_div_1_canvas_3_Template, 1, 4, "canvas", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const idx_r27 = ctx.index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction8"](5, _c3, item_r26.font_size, item_r26.font_weight, item_r26.text_decoration, item_r26.font_style, item_r26.type == "price" && i_r2 == ctx_r25.listRowBarcode.length - 1 ? item_r26.y - 2 : item_r26.y, item_r26.height, ctx_r25.stamp.barcode.width, item_r26.type == "barcode" ? item_r26.justify_content : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, idx_r27 == ctx_r25.stamp.barcode.property.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r26.type != "barcode" && item_r26.type != "price" && item_r26.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r26.type == "price" && item_r26.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r26.type == "barcode" && item_r26.status);
} }
function PrintThreeColComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintThreeColComponent_div_17_div_4_div_1_Template, 4, 16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx_r5.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.stamp.barcode.property);
} }
const _c6 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
const _c7 = function (a0) { return { "mb-6": a0 }; };
function PrintThreeColComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintThreeColComponent_div_17_div_2_Template, 4, 16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintThreeColComponent_div_17_div_3_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintThreeColComponent_div_17_div_4_Template, 2, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](6, _c6, ctx_r0.stamp.barcode.width * 3, ctx_r0.stamp.barcode.height - 3, i_r2 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c7, i_r2 != ctx_r0.listRowBarcode.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c5, ctx_r0.stamp.barcode.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.barcode.property);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.show_col3);
} }
const _c8 = function (a0) { return { "height.px": a0 }; };
class PrintThreeColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.listRowBarcode = [{ show_col2: false, show_col3: false }]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        this.stamp = this.router.getCurrentNavigation().extras.state;
        this.stamp.barcode.property = this.vhAlgorithm.sortNumberbyASC(this.stamp.barcode.property, 'y');
    }
    ngOnInit() {
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
        this.changeNummber();
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
    ngAfterViewChecked() {
        if (document.querySelector(".barcode"))
            this.renderBarcode();
        if (document.querySelector('#scroll'))
            this.heightScroll = document.querySelector('#scroll').clientHeight - 32;
        this.cdf.detectChanges();
    }
    renderBarcode() {
        if (this.stamp.formProduct.barcode)
            jsbarcode__WEBPACK_IMPORTED_MODULE_0___default()(".barcode", this.stamp.formProduct.barcode, {
                displayValue: false,
                // height: 65
            });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design-barcode/detail'], { state: this.stamp.barcode });
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
PrintThreeColComponent.ɵfac = function PrintThreeColComponent_Factory(t) { return new (t || PrintThreeColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery)); };
PrintThreeColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintThreeColComponent, selectors: [["app-print-three-col"]], decls: 18, vars: 11, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", "display", "flex", "align-items", "flex-start", "justify-content", "center", 3, "ngStyle"], ["id", "stamp-barcode", 2, "margin-top", "-1.5mm"], ["style", "display: flex;", "class", "stamp", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "stamp", 2, "display", "flex", 3, "ngStyle", "ngClass"], [1, "border-top", 2, "position", "relative", "height", "100%", 3, "ngStyle"], ["style", "display: flex;position: absolute;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], ["style", "position: relative;height: 100%;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [2, "display", "flex", "position", "absolute", 3, "ngStyle", "ngClass"], ["style", " overflow: hidden;line-height: 1;width: 100%;z-index: 2;", 3, "ngStyle", 4, "ngIf"], ["style", " height: 100%;line-height: 1;width: 100%;", 3, "ngStyle", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", "z-index", "2", 3, "ngStyle"], [2, "height", "100%", "line-height", "1", "width", "100%", 3, "ngStyle"], [1, "barcode", 3, "ngStyle"], ["style", "display: flex;position: absolute;overflow: hidden;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [2, "display", "flex", "position", "absolute", "overflow", "hidden", 3, "ngStyle", "ngClass"], ["style", "display: flex;position: absolute; ", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"]], template: function PrintThreeColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrintThreeColComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PrintThreeColComponent_Template_button_click_10_listener() { return ctx.printBrowser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, PrintThreeColComponent_div_17_Template, 5, 14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.stamp.barcode.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, "Print"), " barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c8, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXRocmVlLWNvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNJLGlCQUFBO0FBRU47QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRlk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJaEI7QUFIZ0I7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQUlwQjtBQUFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUVaO0FBRFk7RUFDSSxpQkFBQTtBQUdoQjtBQURZO0VBQ0ksa0JBQUE7QUFHaEI7QUFEWTtFQUNJLDBCQUFBO0FBR2hCO0FBRUE7RUFDSSx5QkFBQTtBQUNKO0FBQ0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7QUFHSjtBQURBO0VBQ0ksZ0NBQUE7QUFJSjtBQUZBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBS0oiLCJmaWxlIjoicHJpbnQtdGhyZWUtY29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9IFxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3JkZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDY1LCA2NSwgNjUpO1xyXG4gICAgfVxyXG4gICAgLmZvbnQtdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYtZmFtaWx5IHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc2l6ZSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb2xvciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgOSwgOSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAmLWJvbGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pdGFsaWMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ib3JkZXItYm90e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcclxufVxyXG4uYm9yZGVyLXRvcHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZDtcclxufVxyXG4ubWItNntcclxuICAgIG1hcmdpbi1ib3R0b206IDZtbTtcclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 7399:
/*!************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/print-two-col/print-two-col.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintTwoColComponent": () => (/* binding */ PrintTwoColComponent)
/* harmony export */ });
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













const _c0 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "text-align": a0, "font-weight": a1, "font-style": a2, "text-decoration": a3, "height.mm": a4, "width.mm": a5, "display": a6, "font-size.px": a7 }; };
function PrintTwoColComponent_div_17_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](17, _c0, ctx_r3.stamp.width * 1.375, ctx_r3.stamp.height * 1.375 - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c0, ctx_r3.stamp.width * 1.375, i_r2 == ctx_r3.listRowBarcode.length - 1 ? ctx_r3.stamp.height * 1.375 - ctx_r3.ratio : ctx_r3.stamp.height * 1.375 - (ctx_r3.ratio - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](23, _c1, ctx_r3.stamp.property.header.text_align, ctx_r3.stamp.property.header.font_weight, ctx_r3.stamp.property.header.font_style, ctx_r3.stamp.property.header.text_decoration, ctx_r3.stamp.property.header.height * 1.375 - 1, ctx_r3.stamp.property.header.width * 1.375, ctx_r3.stamp.property.header.status ? "block" : "none", ctx_r3.stamp.property.header.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.stamp.property.header.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](32, _c1, ctx_r3.stamp.property.time.text_align, ctx_r3.stamp.property.time.font_weight, ctx_r3.stamp.property.time.font_style, ctx_r3.stamp.property.time.text_decoration, ctx_r3.stamp.property.time.height * 1.375 - 1, ctx_r3.stamp.property.time.width * 1.375, ctx_r3.stamp.property.time.status ? "block" : "none", ctx_r3.stamp.property.time.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 14, ctx_r3.stamp.property.time.value, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](41, _c1, ctx_r3.stamp.property.name.text_align, ctx_r3.stamp.property.name.font_weight, ctx_r3.stamp.property.name.font_style, ctx_r3.stamp.property.name.text_decoration, ctx_r3.stamp.property.name.height * 1.375 - 1, ctx_r3.stamp.property.name.width * 1.375, ctx_r3.stamp.property.name.status ? "block" : "none", ctx_r3.stamp.property.name.font_size))("innerHTML", ctx_r3.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](50, _c1, ctx_r3.stamp.property.note.text_align, ctx_r3.stamp.property.note.font_weight, ctx_r3.stamp.property.note.font_style, ctx_r3.stamp.property.note.text_decoration, ctx_r3.stamp.property.note.height * 1.375 - 1, ctx_r3.stamp.property.note.width * 1.375, ctx_r3.stamp.property.note.status ? "block" : "none", ctx_r3.stamp.property.note.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.stamp.property.note.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](59, _c1, ctx_r3.stamp.property.total.text_align, ctx_r3.stamp.property.total.font_weight, ctx_r3.stamp.property.total.font_style, ctx_r3.stamp.property.total.text_decoration, ctx_r3.stamp.property.total.height * 1.375 - 1, ctx_r3.stamp.property.total.width * 1.375, ctx_r3.stamp.property.total.status ? "block" : "none", ctx_r3.stamp.property.total.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.vhAlgorithm.vhcurrencyunit_symbol(ctx_r3.stamp.property.total.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](68, _c1, ctx_r3.stamp.property.notice.text_align, ctx_r3.stamp.property.notice.font_weight, ctx_r3.stamp.property.notice.font_style, ctx_r3.stamp.property.notice.text_decoration, ctx_r3.stamp.property.notice.height * 1.375 - 1, ctx_r3.stamp.property.notice.width * 1.375, ctx_r3.stamp.property.notice.status ? "block" : "none", ctx_r3.stamp.property.notice.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" **", ctx_r3.stamp.property.notice.value, " ");
} }
const _c2 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
const _c3 = function (a0) { return { "mb-6": a0 }; };
function PrintTwoColComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PrintTwoColComponent_div_17_div_20_Template, 19, 77, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](20, _c2, ctx_r0.stamp.width * 1.375 * ctx_r0.stamp.col, ctx_r0.stamp.height * 1.375 - 3, i_r2 == ctx_r0.listRowBarcode.length - 1 ? "0" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c3, i_r2 != ctx_r0.listRowBarcode.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](26, _c0, ctx_r0.stamp.width * 1.375, ctx_r0.stamp.height * 1.375 - 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](29, _c0, ctx_r0.stamp.width * 1.375, i_r2 == ctx_r0.listRowBarcode.length - 1 ? ctx_r0.stamp.height * 1.375 - ctx_r0.ratio : ctx_r0.stamp.height * 1.375 - (ctx_r0.ratio - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](32, _c1, ctx_r0.stamp.property.header.text_align, ctx_r0.stamp.property.header.font_weight, ctx_r0.stamp.property.header.font_style, ctx_r0.stamp.property.header.text_decoration, ctx_r0.stamp.property.header.height * 1.375 - 1, ctx_r0.stamp.property.header.width * 1.375, ctx_r0.stamp.property.header.status ? "block" : "none", ctx_r0.stamp.property.header.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.stamp.property.header.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](41, _c1, ctx_r0.stamp.property.time.text_align, ctx_r0.stamp.property.time.font_weight, ctx_r0.stamp.property.time.font_style, ctx_r0.stamp.property.time.text_decoration, ctx_r0.stamp.property.time.height * 1.375 - 1, ctx_r0.stamp.property.time.width * 1.375, ctx_r0.stamp.property.time.status ? "block" : "none", ctx_r0.stamp.property.time.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 17, ctx_r0.stamp.property.time.value, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](50, _c1, ctx_r0.stamp.property.name.text_align, ctx_r0.stamp.property.name.font_weight, ctx_r0.stamp.property.name.font_style, ctx_r0.stamp.property.name.text_decoration, ctx_r0.stamp.property.name.height * 1.375 - 1, ctx_r0.stamp.property.name.width * 1.375, ctx_r0.stamp.property.name.status ? "block" : "none", ctx_r0.stamp.property.name.font_size))("innerHTML", ctx_r0.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](59, _c1, ctx_r0.stamp.property.note.text_align, ctx_r0.stamp.property.note.font_weight, ctx_r0.stamp.property.note.font_style, ctx_r0.stamp.property.note.text_decoration, ctx_r0.stamp.property.note.height * 1.375 - 1, ctx_r0.stamp.property.note.width * 1.375, ctx_r0.stamp.property.note.status ? "block" : "none", ctx_r0.stamp.property.note.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.stamp.property.note.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](68, _c1, ctx_r0.stamp.property.total.text_align, ctx_r0.stamp.property.total.font_weight, ctx_r0.stamp.property.total.font_style, ctx_r0.stamp.property.total.text_decoration, ctx_r0.stamp.property.total.height * 1.375 - 1, ctx_r0.stamp.property.total.width * 1.375, ctx_r0.stamp.property.total.status ? "block" : "none", ctx_r0.stamp.property.total.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.stamp.property.total.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction8"](77, _c1, ctx_r0.stamp.property.notice.text_align, ctx_r0.stamp.property.notice.font_weight, ctx_r0.stamp.property.notice.font_style, ctx_r0.stamp.property.notice.text_decoration, ctx_r0.stamp.property.notice.height * 1.375 - 1, ctx_r0.stamp.property.notice.width * 1.375, ctx_r0.stamp.property.notice.status ? "block" : "none", ctx_r0.stamp.property.notice.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" **", ctx_r0.stamp.property.notice.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1);
} }
const _c4 = function (a0) { return { "height.px": a0 }; };
class PrintTwoColComponent {
    constructor(router, vhAlgorithm, cdf, vhComponent, vhQuery) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdf = cdf;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.ratio = 3;
        this.number = 1;
        this.listRowBarcode = [false]; // chứa số hàng hiển thị. true thì hiển thị 2 tem. false là hien thị 1 tem trên 1 hàng
        this.stamp = this.router.getCurrentNavigation().extras.state.barcode;
        this.root = this.router.getCurrentNavigation().extras.state;
        switch (this.stamp.width) {
            case 40: {
                this.ratio = 6;
                break;
            }
            case 50: {
                this.ratio = 3;
                break;
            }
        }
    }
    ngOnInit() {
        this.changeNummber();
    }
    changeNummber() {
        this.listRowBarcode = [];
        for (let i = 0; i < this.root.number / 2; i++) {
            if (this.root.number % 2 == 0)
                this.listRowBarcode.push(true);
            else {
                if (i == (this.root.number - 1) / 2)
                    this.listRowBarcode.push(false);
                else
                    this.listRowBarcode.push(true);
            }
        }
    }
    ngAfterViewChecked() {
        if (document.querySelector('#scroll'))
            this.heightScroll = document.querySelector('#scroll').clientHeight - 32;
        this.cdf.detectChanges();
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/template' + this.stamp.this.stamp], { state: this.stamp });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_0___default()({
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
PrintTwoColComponent.ɵfac = function PrintTwoColComponent_Factory(t) { return new (t || PrintTwoColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuery)); };
PrintTwoColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrintTwoColComponent, selectors: [["app-print-two-col"]], decls: 18, vars: 11, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp ", "style", "display: flex;margin-left: -1mm;", 3, "ngStyle", "ngClass", 4, "ngFor", "ngForOf"], [1, "stamp", 2, "display", "flex", "margin-left", "-1mm", 3, "ngStyle", "ngClass"], [1, "border-top", 2, "position", "relative", 3, "ngStyle"], [1, "border-top", 2, "overflow", "hidden", "position", "relative", 3, "ngStyle"], ["nz-row", "", 2, "display", "flex", "position", "absolute", "top", "0%"], [3, "ngStyle"], ["nz-row", "", 2, "position", "absolute", "top", "10%"], ["nz-col", "", "nzSpan", "24", 3, "ngStyle", "innerHTML"], ["nz-row", "", 2, "position", "absolute", "top", "700%"], ["nz-col", "", "nzSpan", "24", 3, "ngStyle"], ["nz-row", "", 2, "position", "absolute", "top", "80%"], ["nz-row", "", 2, "position", "absolute", "top", "90%"], ["style", "position: relative;", "class", "border-top", 3, "ngStyle", 4, "ngIf"]], template: function PrintTwoColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintTwoColComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintTwoColComponent_Template_button_click_10_listener() { return ctx.printBrowser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PrintTwoColComponent_div_17_Template, 21, 86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.stamp.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, "Print"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c4, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listRowBarcode);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXR3by1jb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDSSxpQkFBQTtBQUVOO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSWhCO0FBSGdCO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFJcEI7QUFBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFWjtBQURZO0VBQ0ksaUJBQUE7QUFHaEI7QUFEWTtFQUNJLGtCQUFBO0FBR2hCO0FBRFk7RUFDSSwwQkFBQTtBQUdoQjtBQUVBO0VBQ0kseUJBQUE7QUFDSjtBQUNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0FBR0o7QUFEQTtFQUNJLGdCQUFBO0FBSUo7QUFGQTtFQUNJLGdDQUFBO0FBS0o7QUFIQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQU1KIiwiZmlsZSI6InByaW50LXR3by1jb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH0gXHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvcmRlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgICB9XHJcbiAgICAuZm9udC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi1mYW1pbHkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zaXplIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5LCA5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICYtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWl0YWxpYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJvcmRlci1ib3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xyXG59XHJcbi5ib3JkZXItdG9we1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkO1xyXG59XHJcbi5tYi02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNm1tO1xyXG59XHJcbi5tYi0we1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 83155:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/template1/template1.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template1Component": () => (/* binding */ Template1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function Template1Component_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 46);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", option_r4)("nzValue", option_r4);
} }
function Template1Component_nz_select_35_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 49);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", item_r6.name)("nzLabel", item_r6.name);
} }
function Template1Component_nz_select_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_nz_select_35_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.stamp.printer_name = $event; })("ngModelChange", function Template1Component_nz_select_35_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.updatePrint($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Template1Component_nz_select_35_nz_option_2_Template, 1, 2, "nz-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, "Select printer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.stamp.printer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.list_printer_name);
} }
function Template1Component_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_ng_container_86_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "Enter the number of label to print"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, "Enter the number of label to print"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.number);
} }
function Template1Component_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_ng_container_89_Template_label_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.stamp.property.header.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_ng_container_89_Template_label_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.stamp.property.time.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_ng_container_89_Template_label_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.stamp.property.name.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_ng_container_89_Template_label_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.stamp.property.note.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_ng_container_89_Template_label_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.stamp.property.total.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_ng_container_89_Template_label_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.stamp.property.notice.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.header.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 12, "Hi\u1EC3n th\u1ECB t\u00EAn qu\u00E1n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.time.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 14, "Hi\u1EC3n th\u1ECB th\u1EDDi gian"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.name.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 16, "Hi\u1EC3n th\u1ECB t\u00EAn m\u00F3n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.note.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 18, "Hi\u1EC3n th\u1ECB ghi ch\u00FA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.total.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 20, "Hi\u1EC3n th\u1ECB t\u1ED5ng ti\u1EC1n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.notice.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 22, "Hi\u1EC3n th\u1ECB sologan"));
} }
const _c0 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { "text-align": a0, "font-weight": a1, "font-style": a2, "text-decoration": a3, "height.mm": a4, "width.mm": a5, "top.px": a6, "left.px": a7, "display": a8, "color": a9, "border": a10, "font-size.px": a11 }; };
class Template1Component {
    constructor(router, vhAlgorithm, vhComponent, vhQuery, platform, languageService) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.languageService = languageService;
        this.showModalPrintBarcode = false;
        this.number = 10;
        this.listOfFontSize = [8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 32, 36, 48, 72];
        this.showModalConfigDisplay = false;
        this.listUpdateCoor = {};
        this.list_printer_name = [];
        this.show_select_printer = false;
        this.stamp = this.router.getCurrentNavigation().extras.state;
        this.propertySelected = this.stamp.property.header;
        console.log(this.propertySelected);
    }
    ngOnInit() {
        this.listUpdateCoor = {
            header: {
                y: this.stamp.property.header.y,
                x: this.stamp.property.header.x
            },
            name: {
                y: this.stamp.property.name.y,
                x: this.stamp.property.name.x
            },
            total: {
                y: this.stamp.property.total.y,
                x: this.stamp.property.total.x
            },
            note: {
                y: this.stamp.property.note.y,
                x: this.stamp.property.note.x
            },
            time: {
                y: this.stamp.property.time.y,
                x: this.stamp.property.time.x
            },
            notice: {
                y: this.stamp.property.notice.y,
                x: this.stamp.property.notice.x
            }
        };
        if (this.platform.is("electron")) {
            this.show_select_printer = true;
            this.getPrint();
        }
    }
    getPrint() {
        electron.ipcRenderer.send("allPrint");
        electron.ipcRenderer.on("printName", (event, data) => {
            this.list_printer_name = data;
        });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish']);
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.distanceParentTop = document.getElementById('boundary').getBoundingClientRect().top;
        this.distanceParentLeft = document.getElementById('boundary').getBoundingClientRect().left;
    }
    save() {
        this.stamp.property.header.x = this.listUpdateCoor['header'].x;
        this.stamp.property.header.y = this.listUpdateCoor['header'].y;
        this.stamp.property.name.x = this.listUpdateCoor['name'].x;
        this.stamp.property.name.y = this.listUpdateCoor['name'].y;
        this.stamp.property.total.x = this.listUpdateCoor['total'].x;
        this.stamp.property.total.y = this.listUpdateCoor['total'].y;
        this.stamp.property.note.x = this.listUpdateCoor['note'].x;
        this.stamp.property.note.y = this.listUpdateCoor['note'].y;
        this.stamp.property.time.x = this.listUpdateCoor['time'].x;
        this.stamp.property.time.y = this.listUpdateCoor['time'].y;
        this.stamp.property.notice.x = this.listUpdateCoor['notice'].x;
        this.stamp.property.notice.y = this.listUpdateCoor['notice'].y;
        this.vhComponent.showLoading('').then(() => {
            this.vhQuery.updateDoc("barcode_designs", this.stamp._id, { property: this.stamp.property }).then((bool) => {
                this.vhComponent.hideLoading(0);
                setTimeout(() => {
                    this.goBack();
                }, 200);
            }, error => {
                this.vhComponent.hideLoading(0);
                console.log('error', error);
            });
        });
    }
    updateProperty() {
        switch (this.propertySelected.type) {
            case 'header': {
                this.stamp.property.header = this.propertySelected;
                break;
            }
            case 'time': {
                this.stamp.property.time = this.propertySelected;
                break;
            }
            case 'name': {
                this.stamp.property.name = this.propertySelected;
                break;
            }
            case 'note': {
                this.stamp.property.note = this.propertySelected;
                break;
            }
            case 'total': {
                this.stamp.property.total = this.propertySelected;
                break;
            }
            case 'notice': {
                this.stamp.property.notice = this.propertySelected;
                break;
            }
        }
    }
    //lấy tọa độ x y sau khi thực hiện kéo thả và lưu tọa độ mới
    onDragEnded(event, item) {
        let x = document.getElementById(item).getBoundingClientRect().left - document.getElementById('boundary').getBoundingClientRect().left;
        let y = document.getElementById(item).getBoundingClientRect().top - document.getElementById('boundary').getBoundingClientRect().top;
        this.listUpdateCoor[item].y = y;
        this.listUpdateCoor[item].x = x;
        console.log(this.listUpdateCoor);
    }
    gotoPrintBarcode() {
        this.stamp.property.header.x = this.listUpdateCoor['header'].x;
        this.stamp.property.header.y = this.listUpdateCoor['header'].y;
        this.stamp.property.name.x = this.listUpdateCoor['name'].x;
        this.stamp.property.name.y = this.listUpdateCoor['name'].y;
        this.stamp.property.total.x = this.listUpdateCoor['total'].x;
        this.stamp.property.total.y = this.listUpdateCoor['total'].y;
        this.stamp.property.note.x = this.listUpdateCoor['note'].x;
        this.stamp.property.note.y = this.listUpdateCoor['note'].y;
        this.stamp.property.time.x = this.listUpdateCoor['time'].x;
        this.stamp.property.time.y = this.listUpdateCoor['time'].y;
        this.stamp.property.notice.x = this.listUpdateCoor['notice'].x;
        this.stamp.property.notice.y = this.listUpdateCoor['notice'].y;
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/print-one-col'], { state: { col: this.stamp.col, number: this.number, barcode: this.stamp, } });
    }
    updatePrint(value) {
        this.vhQuery.updateDoc("barcode_designs", this.stamp._id, { printer_name: value })
            .then((bool) => {
            console.log('barcode_designs', bool);
        }, error => {
            console.log('error', error);
        });
    }
}
Template1Component.ɵfac = function Template1Component_Factory(t) { return new (t || Template1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
Template1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Template1Component, selectors: [["app-template1"]], decls: 90, vars: 150, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "left-all-content"], [1, "title"], ["nz-row", "", 2, "background", "#f0f2f5"], ["nz-col", "", "nzSpan", "24", 1, "left-all-content"], ["nzMode", "default", "nzPlaceHolder", "K\u00EDch th\u01B0\u1EDBc ph\u00F4ng ch\u1EEF", 1, "font-text-size", 2, "width", "60px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "right-all-content"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-bold", 3, "nzType", "click"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-italic", 3, "nzType", "click"], ["nz-icon", "", "nzType", "italic", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-underline", 3, "nzType", "click"], ["nz-icon", "", "nzType", "underline", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", 3, "nzType", "click"], ["nz-icon", "", "nzType", "align-left", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-center", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-right", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "center-all-content", 3, "disabled", "nzType", "click"], ["src", "assets/icon/management/icon-text-justify.svg", 2, "font-size", "1.2rem", 3, "color"], ["style", "width: 250px;", 3, "nzPlaceHolder", "ngModel", "ngModelChange", 4, "ngIf"], ["nz-button", "", 1, "center-all-content", 3, "nzType", "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-row", "", 2, "background", "#f0f2f5", "padding", "8px"], ["nz-col", "", "nzSpan", "10", 1, "beetween-all-content", 2, "justify-content", "space-between"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 2, "margin-right", "16px", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "14", 1, "beetween-all-content"], ["nz-input", "", "type", "text", 2, "width", "150px", "padding", "8px", 3, "ngModel", "ngModelChange", "blur"], ["nz-input", "", "type", "number", 2, "width", "60px", "padding", "8px 0 8px 8px", 3, "max", "ngModel", "ngModelChange"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px"], ["id", "stamp-test", 2, "height", "100%", "margin-top", "-1.5mm", "margin-left", "0.05in", "z-index", "2"], ["id", "boundary", 1, "stamp", "example-boundary", 2, "overflow", "hidden", "position", "relative", 3, "ngStyle"], ["id", "header", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded", "click"], ["id", "time", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded", "click"], ["id", "name", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", "overflow", "hidden", 3, "ngStyle", "innerHTML", "mousedown", "cdkDragEnded"], ["id", "note", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded"], ["id", "total", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded"], ["id", "notice", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded"], [3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzCancelText", "", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [3, "nzLabel", "nzValue"], [2, "width", "250px", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["type", "number", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], [2, "display", "grid"], ["nz-checkbox", "", 2, "margin", "0", 3, "ngModel", "ngModelChange"]], template: function Template1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_Template_nz_select_ngModelChange_14_listener($event) { return ctx.propertySelected.font_size = $event; })("ngModelChange", function Template1Component_Template_nz_select_ngModelChange_14_listener() { return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, Template1Component_nz_option_15_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_18_listener() { ctx.propertySelected.font_weight = ctx.propertySelected.font_weight == "bold" ? "500" : "bold"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_20_listener() { ctx.propertySelected.font_style = ctx.propertySelected.font_style == "normal" ? "italic" : "normal"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_22_listener() { ctx.propertySelected.text_decoration = ctx.propertySelected.text_decoration == "none" ? "underline" : "none"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_26_listener() { ctx.propertySelected.text_align = "left"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_28_listener() { ctx.propertySelected.text_align = "center"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_30_listener() { ctx.propertySelected.text_align = "right"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_32_listener() { ctx.propertySelected.text_align = "justify"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, Template1Component_nz_select_35_Template, 3, 5, "nz-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_36_listener() { return ctx.showModalConfigDisplay = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_42_listener() { ctx.showModalPrintBarcode = true; return ctx.propertySelected = {}; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template1Component_Template_button_click_46_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_Template_input_ngModelChange_55_listener($event) { return ctx.propertySelected.value = $event; })("blur", function Template1Component_Template_input_blur_55_listener() { return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_Template_input_ngModelChange_61_listener($event) { return ctx.propertySelected.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " mm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template1Component_Template_input_ngModelChange_66_listener($event) { return ctx.propertySelected.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " mm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template1Component_Template_div_mousedown_72_listener() { return ctx.propertySelected = ctx.stamp.property.header; })("cdkDragEnded", function Template1Component_Template_div_cdkDragEnded_72_listener($event) { return ctx.onDragEnded($event, "header"); })("click", function Template1Component_Template_div_click_72_listener() { return ctx.propertySelected = ctx.stamp.property.header; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template1Component_Template_div_mousedown_74_listener() { return ctx.propertySelected = ctx.stamp.property.time; })("cdkDragEnded", function Template1Component_Template_div_cdkDragEnded_74_listener($event) { return ctx.onDragEnded($event, "time"); })("click", function Template1Component_Template_div_click_74_listener() { return ctx.propertySelected = ctx.stamp.property.time; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template1Component_Template_div_mousedown_77_listener() { return ctx.propertySelected = ctx.stamp.property.name; })("cdkDragEnded", function Template1Component_Template_div_cdkDragEnded_77_listener($event) { return ctx.onDragEnded($event, "name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template1Component_Template_div_mousedown_78_listener() { return ctx.propertySelected = ctx.stamp.property.note; })("cdkDragEnded", function Template1Component_Template_div_cdkDragEnded_78_listener($event) { return ctx.onDragEnded($event, "note"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template1Component_Template_div_mousedown_80_listener() { return ctx.propertySelected = ctx.stamp.property.total; })("cdkDragEnded", function Template1Component_Template_div_cdkDragEnded_80_listener($event) { return ctx.onDragEnded($event, "total"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template1Component_Template_div_mousedown_82_listener() { return ctx.propertySelected = ctx.stamp.property.notice; })("cdkDragEnded", function Template1Component_Template_div_cdkDragEnded_82_listener($event) { return ctx.onDragEnded($event, "notice"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "nz-modal", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function Template1Component_Template_nz_modal_nzVisibleChange_84_listener($event) { return ctx.showModalPrintBarcode = $event; })("nzOnCancel", function Template1Component_Template_nz_modal_nzOnCancel_84_listener() { return ctx.showModalPrintBarcode = false; })("nzOnOk", function Template1Component_Template_nz_modal_nzOnOk_84_listener() { return ctx.gotoPrintBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, Template1Component_ng_container_86_Template, 6, 7, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "nz-modal", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function Template1Component_Template_nz_modal_nzVisibleChange_87_listener($event) { return ctx.showModalConfigDisplay = $event; })("nzOnCancel", function Template1Component_Template_nz_modal_nzOnCancel_87_listener() { return ctx.showModalConfigDisplay = false; })("nzOnOk", function Template1Component_Template_nz_modal_nzOnOk_87_listener() { return ctx.showModalConfigDisplay = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, Template1Component_ng_container_89_Template, 20, 24, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 46, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.stamp.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 48, "Label size"), ": ", ctx.stamp.width, "mm x ", ctx.stamp.height, "mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.propertySelected.font_size);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listOfFontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.font_weight == "bold" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.font_style == "italic" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_decoration == "underline" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "left" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "center" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "right" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.propertySelected.type == "barcode")("nzType", ctx.propertySelected.text_align == "justify" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.propertySelected.text_align == "justify" ? "white" : "black");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show_select_printer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 50, "Display configuration"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 52, "View and print"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 54, "Save"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 56, "Enter value"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.propertySelected.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 58, "Length"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx.stamp.height)("ngModel", ctx.propertySelected.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 60, "Width"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx.stamp.height)("ngModel", ctx.propertySelected.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](69, _c0, ctx.stamp.width * 1.375, ctx.stamp.height * 1.375));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](72, _c1, [ctx.stamp.property.header.text_align, ctx.stamp.property.header.font_weight, ctx.stamp.property.header.font_style, ctx.stamp.property.header.text_decoration, ctx.stamp.property.header.height * 1.375 - 1, ctx.stamp.property.header.width * 1.375 - 4, ctx.stamp.property.header.y, ctx.stamp.property.header.x, ctx.stamp.property.header.status ? "block" : "none", ctx.propertySelected.type == "header" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "header" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.header.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.stamp.property.header.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](85, _c1, [ctx.stamp.property.time.text_align, ctx.stamp.property.time.font_weight, ctx.stamp.property.time.font_style, ctx.stamp.property.time.text_decoration, ctx.stamp.property.time.height * 1.375 - 1, ctx.stamp.property.time.width * 1.375, ctx.stamp.property.time.y, ctx.stamp.property.time.x, ctx.stamp.property.time.status ? "block" : "none", ctx.propertySelected.type == "time" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "time" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.time.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](76, 62, ctx.stamp.property.time.value, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](98, _c1, [ctx.stamp.property.name.text_align, ctx.stamp.property.name.font_weight, ctx.stamp.property.name.font_style, ctx.stamp.property.name.text_decoration, ctx.stamp.property.name.height * 1.375 - 1, ctx.stamp.property.name.width * 1.375, ctx.stamp.property.name.y, ctx.stamp.property.name.x, ctx.stamp.property.name.status ? "block" : "none", ctx.propertySelected.type == "name" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "name" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.name.font_size]))("innerHTML", ctx.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](111, _c1, [ctx.stamp.property.note.text_align, ctx.stamp.property.note.font_weight, ctx.stamp.property.note.font_style, ctx.stamp.property.note.text_decoration, ctx.stamp.property.note.height * 1.375 - 1, ctx.stamp.property.note.width * 1.375, ctx.stamp.property.note.y, ctx.stamp.property.note.x, ctx.stamp.property.note.status ? "block" : "none", ctx.propertySelected.type == "note" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "note" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.note.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.stamp.property.note.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](124, _c1, [ctx.stamp.property.total.text_align, ctx.stamp.property.total.font_weight, ctx.stamp.property.total.font_style, ctx.stamp.property.total.text_decoration, ctx.stamp.property.total.height * 1.375 - 1, ctx.stamp.property.total.width * 1.375, ctx.stamp.property.total.y, ctx.stamp.property.total.x, ctx.stamp.property.total.status ? "block" : "none", ctx.propertySelected.type == "total" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "total" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.total.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.stamp.property.total.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](137, _c1, [ctx.stamp.property.notice.text_align, ctx.stamp.property.notice.font_weight, ctx.stamp.property.notice.font_style, ctx.stamp.property.notice.text_decoration, ctx.stamp.property.notice.height * 1.375 - 1, ctx.stamp.property.notice.width * 1.375, ctx.stamp.property.notice.y, ctx.stamp.property.notice.x, ctx.stamp.property.notice.status ? "block" : "none", ctx.propertySelected.type == "notice" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "notice" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.notice.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" **", ctx.stamp.property.notice.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](85, 65, "Choose a label template"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.showModalPrintBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 67, "Configure display of elements in the label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.showModalConfigDisplay);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.CdkDrag, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .stamp[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.p8[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  border: 0.5px solid var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.border-left[_ngcontent-%COMP%] {\n  border-left: 1px solid #929292;\n  padding-left: 8px;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNJLGlCQUFBO0FBRU47QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQURJO0VBQ0kseUJBQUE7QUFHUjtBQURJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFJWjtBQUZRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFJWjtBQUZRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSVo7QUFIWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtoQjtBQUpnQjtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBS3BCO0FBRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBR1o7QUFGWTtFQUNJLGlCQUFBO0FBSWhCO0FBRlk7RUFDSSxrQkFBQTtBQUloQjtBQUZZO0VBQ0ksMEJBQUE7QUFJaEI7QUFDQTtFQUNJLGNBQUE7QUFFSjtBQUFBO0VBQ0ksZ0NBQUE7RUFDQSw2Q0FBQTtBQUdKO0FBREE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFJSjtBQUFFO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtBQUdOO0FBREU7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUlOIiwiZmlsZSI6InRlbXBsYXRlMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfSBcclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnN0YW1we1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2NSwgNjUsIDY1KTtcclxuICAgIH1cclxuICAgIC5mb250LXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLWZhbWlseSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNpemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5LCA5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICYtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWl0YWxpYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnA4e1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICAuYm9yZGVyLWxlZnR7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLmJlZXR3ZWVuLWFsbC1jb250ZW50e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 99305:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-barcode/label-dish/template2/template2.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template2Component": () => (/* binding */ Template2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function Template2Component_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 45);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", option_r4)("nzValue", option_r4);
} }
function Template2Component_nz_select_35_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 48);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", item_r6.name)("nzLabel", item_r6.name);
} }
function Template2Component_nz_select_35_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_nz_select_35_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.stamp.printer_name = $event; })("ngModelChange", function Template2Component_nz_select_35_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.updatePrint($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, Template2Component_nz_select_35_nz_option_2_Template, 1, 2, "nz-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, "Select printer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.stamp.printer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.list_printer_name);
} }
function Template2Component_ng_container_83_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_ng_container_83_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "Enter the number of label to print"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, "Enter the number of label to print"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.number);
} }
function Template2Component_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_ng_container_86_Template_label_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.stamp.property.header.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_ng_container_86_Template_label_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.stamp.property.name.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_ng_container_86_Template_label_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.stamp.property.note.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_ng_container_86_Template_label_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.stamp.property.total.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_ng_container_86_Template_label_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.stamp.property.notice.number = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.header.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, "Hi\u1EC3n th\u1ECB t\u00EAn qu\u00E1n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.name.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 12, "Hi\u1EC3n th\u1ECB t\u00EAn m\u00F3n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.note.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 14, "Hi\u1EC3n th\u1ECB ghi ch\u00FA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.total.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 16, "Hi\u1EC3n th\u1ECB t\u1ED5ng ti\u1EC1n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.stamp.property.notice.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 18, "Hi\u1EC3n th\u1ECB s\u1ED1 l\u01B0\u1EE3ng m\u00F3n"));
} }
const _c0 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) { return { "text-align": a0, "font-weight": a1, "font-style": a2, "text-decoration": a3, "height.mm": a4, "width.mm": a5, "top.px": a6, "left.px": a7, "display": a8, "color": a9, "border": a10, "font-size.px": a11 }; };
class Template2Component {
    constructor(router, vhAlgorithm, vhComponent, vhQuery, platform, languageService) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.platform = platform;
        this.languageService = languageService;
        this.showModalPrintBarcode = false;
        this.showModalConfigDisplay = false;
        this.number = 10;
        this.listOfFontSize = [8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 32, 36, 48, 72];
        this.listUpdateCoor = {};
        this.list_printer_name = [];
        this.show_select_printer = false;
        this.stamp = this.router.getCurrentNavigation().extras.state;
        this.propertySelected = this.stamp.property.header;
        console.log(this.propertySelected);
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.distanceParent = document.getElementById('boundary').getBoundingClientRect().top;
        this.distanceParent2 = document.getElementById('boundary').getBoundingClientRect().left;
    }
    ngOnInit() {
        this.listUpdateCoor = {
            header: {
                y: this.stamp.property.header.y,
                x: this.stamp.property.header.x
            },
            name: {
                y: this.stamp.property.name.y,
                x: this.stamp.property.name.x
            },
            total: {
                y: this.stamp.property.total.y,
                x: this.stamp.property.total.x
            },
            note: {
                y: this.stamp.property.note.y,
                x: this.stamp.property.note.x
            },
            time: {
                y: this.stamp.property.time.y,
                x: this.stamp.property.time.x
            },
            number: {
                y: this.stamp.property.number.y,
                x: this.stamp.property.number.x
            }
        };
        if (this.platform.is("electron")) {
            this.show_select_printer = true;
            this.getPrint();
        }
    }
    getPrint() {
        electron.ipcRenderer.send("allPrint");
        electron.ipcRenderer.on("printName", (event, data) => {
            this.list_printer_name = data;
        });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish']);
    }
    save() {
        this.stamp.property.header.x = this.listUpdateCoor['header'].x;
        this.stamp.property.header.y = this.listUpdateCoor['header'].y;
        this.stamp.property.name.x = this.listUpdateCoor['name'].x;
        this.stamp.property.name.y = this.listUpdateCoor['name'].y;
        this.stamp.property.total.x = this.listUpdateCoor['total'].x;
        this.stamp.property.total.y = this.listUpdateCoor['total'].y;
        this.stamp.property.note.x = this.listUpdateCoor['note'].x;
        this.stamp.property.note.y = this.listUpdateCoor['note'].y;
        this.stamp.property.number.x = this.listUpdateCoor['number'].x;
        this.stamp.property.number.y = this.listUpdateCoor['number'].y;
        this.vhComponent.showLoading('').then(() => {
            this.vhQuery.updateDoc("barcode_designs", this.stamp._id, { property: this.stamp.property }).then((bool) => {
                this.vhComponent.hideLoading(0);
                setTimeout(() => {
                    this.goBack();
                }, 200);
            }, error => {
                this.vhComponent.hideLoading(0);
                console.log('error', error);
            });
        });
    }
    updateProperty() {
        switch (this.propertySelected.type) {
            case 'header': {
                this.stamp.property.header = this.propertySelected;
                break;
            }
            case 'time': {
                this.stamp.property.time = this.propertySelected;
                break;
            }
            case 'name': {
                this.stamp.property.name = this.propertySelected;
                break;
            }
            case 'note': {
                this.stamp.property.note = this.propertySelected;
                break;
            }
            case 'total': {
                this.stamp.property.total = this.propertySelected;
                break;
            }
            case 'notice': {
                this.stamp.property.notice = this.propertySelected;
                break;
            }
        }
    }
    //lấy tọa độ x y sau khi thực hiện kéo thả và lưu tọa độ mới
    onDragEnded(event, item) {
        let x = document.getElementById(item).getBoundingClientRect().left - document.getElementById('boundary').getBoundingClientRect().left;
        let y = document.getElementById(item).getBoundingClientRect().top - document.getElementById('boundary').getBoundingClientRect().top;
        this.listUpdateCoor[item].y = y;
        this.listUpdateCoor[item].x = x;
    }
    gotoPrintBarcode() {
        this.stamp.property.header.x = this.listUpdateCoor['header'].x;
        this.stamp.property.header.y = this.listUpdateCoor['header'].y;
        this.stamp.property.name.x = this.listUpdateCoor['name'].x;
        this.stamp.property.name.y = this.listUpdateCoor['name'].y;
        this.stamp.property.total.x = this.listUpdateCoor['total'].x;
        this.stamp.property.total.y = this.listUpdateCoor['total'].y;
        this.stamp.property.note.x = this.listUpdateCoor['note'].x;
        this.stamp.property.note.y = this.listUpdateCoor['note'].y;
        this.stamp.property.number.x = this.listUpdateCoor['number'].x;
        this.stamp.property.number.y = this.listUpdateCoor['number'].y;
        this.router.navigate(['/cafe/dashboard/management/design/design-label/label-dish/print-one-col'], { state: { col: this.stamp.col, number: this.number, barcode: this.stamp, } });
    }
    updatePrint(value) {
        this.vhQuery.updateDoc("barcode_designs", this.stamp._id, { printer_name: value })
            .then((bool) => {
            console.log('barcode_designs', bool);
        }, error => {
            console.log('error', error);
        });
    }
}
Template2Component.ɵfac = function Template2Component_Factory(t) { return new (t || Template2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
Template2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Template2Component, selectors: [["app-template2"]], decls: 87, vars: 132, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18", 1, "left-all-content"], [1, "title"], ["nz-row", "", 2, "background", "#f0f2f5"], ["nz-col", "", "nzSpan", "24", 1, "left-all-content"], ["nzMode", "default", "nzPlaceHolder", "K\u00EDch th\u01B0\u1EDBc ph\u00F4ng ch\u1EEF", 1, "font-text-size", 2, "width", "60px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "right-all-content"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-bold", 3, "nzType", "click"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-italic", 3, "nzType", "click"], ["nz-icon", "", "nzType", "italic", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "font-text-btn-underline", 3, "nzType", "click"], ["nz-icon", "", "nzType", "underline", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", 3, "nzType", "click"], ["nz-icon", "", "nzType", "align-left", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-center", "nzTheme", "outline"], ["nz-icon", "", "nzType", "align-right", "nzTheme", "outline"], ["nz-button", "", 1, "font-text-btn", "center-all-content", 3, "disabled", "nzType", "click"], ["src", "assets/icon/management/icon-text-justify.svg", 2, "font-size", "1.2rem", 3, "color"], ["style", "width: 250px;", 3, "nzPlaceHolder", "ngModel", "ngModelChange", 4, "ngIf"], ["nz-button", "", 1, "center-all-content", 3, "nzType", "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-row", "", 2, "background", "#f0f2f5", "padding", "8px"], ["nz-col", "", "nzSpan", "10", 1, "beetween-all-content", 2, "justify-content", "space-between"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 2, "margin-right", "16px", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "14", 1, "beetween-all-content"], ["nz-input", "", "type", "text", 2, "width", "150px", "padding", "8px", 3, "ngModel", "ngModelChange", "blur"], ["nz-input", "", "type", "number", 2, "width", "60px", "padding", "8px 0 8px 8px", 3, "max", "ngModel", "ngModelChange"], ["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px"], ["id", "stamp-test", 2, "height", "100%", "margin-top", "-1.5mm", "margin-left", "0.05in", "z-index", "2"], ["id", "boundary", 1, "stamp", "example-boundary", 2, "overflow", "hidden", "position", "relative", 3, "ngStyle"], ["id", "header", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded", "click"], ["id", "name", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", "overflow", "hidden", 3, "ngStyle", "innerHTML", "mousedown", "cdkDragEnded"], ["id", "note", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded"], ["id", "total", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded"], ["id", "number", "cdkDragBoundary", ".example-boundary", "cdkDrag", "", 2, "position", "absolute", 3, "ngStyle", "mousedown", "cdkDragEnded"], [3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzCancelText", "", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [3, "nzLabel", "nzValue"], [2, "width", "250px", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["type", "number", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], [2, "display", "grid"], ["nz-checkbox", "", 2, "margin", "0", 3, "ngModel", "ngModelChange"]], template: function Template2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_Template_nz_select_ngModelChange_14_listener($event) { return ctx.propertySelected.font_size = $event; })("ngModelChange", function Template2Component_Template_nz_select_ngModelChange_14_listener() { return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, Template2Component_nz_option_15_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_18_listener() { ctx.propertySelected.font_weight = ctx.propertySelected.font_weight == "bold" ? "500" : "bold"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_20_listener() { ctx.propertySelected.font_style = ctx.propertySelected.font_style == "normal" ? "italic" : "normal"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_22_listener() { ctx.propertySelected.text_decoration = ctx.propertySelected.text_decoration == "none" ? "underline" : "none"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_26_listener() { ctx.propertySelected.text_align = "left"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_28_listener() { ctx.propertySelected.text_align = "center"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_30_listener() { ctx.propertySelected.text_align = "right"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_32_listener() { ctx.propertySelected.text_align = "justify"; return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, Template2Component_nz_select_35_Template, 3, 5, "nz-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_36_listener() { return ctx.showModalConfigDisplay = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_42_listener() { ctx.showModalPrintBarcode = true; return ctx.propertySelected = {}; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Template2Component_Template_button_click_46_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_Template_input_ngModelChange_55_listener($event) { return ctx.propertySelected.value = $event; })("blur", function Template2Component_Template_input_blur_55_listener() { return ctx.updateProperty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_Template_input_ngModelChange_61_listener($event) { return ctx.propertySelected.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " mm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Template2Component_Template_input_ngModelChange_66_listener($event) { return ctx.propertySelected.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " mm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template2Component_Template_div_mousedown_72_listener() { return ctx.propertySelected = ctx.stamp.property.header; })("cdkDragEnded", function Template2Component_Template_div_cdkDragEnded_72_listener($event) { return ctx.onDragEnded($event, "header"); })("click", function Template2Component_Template_div_click_72_listener() { return ctx.propertySelected = ctx.stamp.property.header; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template2Component_Template_div_mousedown_74_listener() { return ctx.propertySelected = ctx.stamp.property.name; })("cdkDragEnded", function Template2Component_Template_div_cdkDragEnded_74_listener($event) { return ctx.onDragEnded($event, "name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template2Component_Template_div_mousedown_75_listener() { return ctx.propertySelected = ctx.stamp.property.note; })("cdkDragEnded", function Template2Component_Template_div_cdkDragEnded_75_listener($event) { return ctx.onDragEnded($event, "note"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template2Component_Template_div_mousedown_77_listener() { return ctx.propertySelected = ctx.stamp.property.total; })("cdkDragEnded", function Template2Component_Template_div_cdkDragEnded_77_listener($event) { return ctx.onDragEnded($event, "total"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function Template2Component_Template_div_mousedown_79_listener() { return ctx.propertySelected = ctx.stamp.property.number; })("cdkDragEnded", function Template2Component_Template_div_cdkDragEnded_79_listener($event) { return ctx.onDragEnded($event, "number"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "nz-modal", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function Template2Component_Template_nz_modal_nzVisibleChange_81_listener($event) { return ctx.showModalPrintBarcode = $event; })("nzOnCancel", function Template2Component_Template_nz_modal_nzOnCancel_81_listener() { return ctx.showModalPrintBarcode = false; })("nzOnOk", function Template2Component_Template_nz_modal_nzOnOk_81_listener() { return ctx.gotoPrintBarcode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, Template2Component_ng_container_83_Template, 6, 7, "ng-container", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "nz-modal", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function Template2Component_Template_nz_modal_nzVisibleChange_84_listener($event) { return ctx.showModalConfigDisplay = $event; })("nzOnCancel", function Template2Component_Template_nz_modal_nzOnCancel_84_listener() { return ctx.showModalConfigDisplay = false; })("nzOnOk", function Template2Component_Template_nz_modal_nzOnOk_84_listener() { return ctx.showModalConfigDisplay = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, Template2Component_ng_container_86_Template, 17, 20, "ng-container", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 44, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.stamp.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 46, "Label size"), ": ", ctx.stamp.width, "mm x ", ctx.stamp.height, "mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.propertySelected.font_size);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listOfFontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.font_weight == "bold" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.font_style == "italic" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_decoration == "underline" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "left" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "center" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.propertySelected.text_align == "right" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.propertySelected.type == "barcode")("nzType", ctx.propertySelected.text_align == "justify" ? "primary" : "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.propertySelected.text_align == "justify" ? "white" : "black");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show_select_printer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 48, "Display configuration"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 50, "View and print"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 52, "Save"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 54, "Enter value"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.propertySelected.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 56, "Length"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx.stamp.height)("ngModel", ctx.propertySelected.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 58, "Width"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx.stamp.height)("ngModel", ctx.propertySelected.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](64, _c0, ctx.stamp.width * 1.375, ctx.stamp.height * 1.375 - 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](67, _c1, [ctx.stamp.property.header.text_align, ctx.stamp.property.header.font_weight, ctx.stamp.property.header.font_style, ctx.stamp.property.header.text_decoration, ctx.stamp.property.header.height * 1.375 - 1, ctx.stamp.property.header.width * 1.375 - 4, ctx.stamp.property.header.y, ctx.stamp.property.header.x, ctx.stamp.property.header.status ? "block" : "none", ctx.propertySelected.type == "header" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "header" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.header.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.stamp.property.header.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](80, _c1, [ctx.stamp.property.name.text_align, ctx.stamp.property.name.font_weight, ctx.stamp.property.name.font_style, ctx.stamp.property.name.text_decoration, ctx.stamp.property.name.height * 1.375 - 1, ctx.stamp.property.name.width * 1.375, ctx.stamp.property.name.y, ctx.stamp.property.name.x, ctx.stamp.property.name.status ? "block" : "none", ctx.propertySelected.type == "name" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "name" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.name.font_size]))("innerHTML", ctx.stamp.property.name.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](93, _c1, [ctx.stamp.property.note.text_align, ctx.stamp.property.note.font_weight, ctx.stamp.property.note.font_style, ctx.stamp.property.note.text_decoration, ctx.stamp.property.note.height * 1.375 - 1, ctx.stamp.property.note.width * 1.375, ctx.stamp.property.note.y, ctx.stamp.property.note.x, ctx.stamp.property.note.status ? "block" : "none", ctx.propertySelected.type == "note" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "note" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.note.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.stamp.property.note.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](106, _c1, [ctx.stamp.property.total.text_align, ctx.stamp.property.total.font_weight, ctx.stamp.property.total.font_style, ctx.stamp.property.total.text_decoration, ctx.stamp.property.total.height * 1.375 - 1, ctx.stamp.property.total.width * 1.375, ctx.stamp.property.total.y, ctx.stamp.property.total.x, ctx.stamp.property.total.status ? "block" : "none", ctx.propertySelected.type == "total" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "total" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.total.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.stamp.property.total.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](119, _c1, [ctx.stamp.property.number.text_align, ctx.stamp.property.number.font_weight, ctx.stamp.property.number.font_style, ctx.stamp.property.number.text_decoration, ctx.stamp.property.number.height * 1.375 - 1, ctx.stamp.property.number.width * 1.375, ctx.stamp.property.number.y, ctx.stamp.property.number.x, ctx.stamp.property.number.status ? "block" : "none", ctx.propertySelected.type == "number" ? "var(--ion-color-vh-green)" : "black", ctx.propertySelected.type == "number" ? "0.5px solid var(--ion-color-vh-green)" : "none", ctx.stamp.property.number.font_size]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.stamp.property.number.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 60, "Choose a label template"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.showModalPrintBarcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](85, 62, "Configure display of elements in the label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.showModalConfigDisplay);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.CdkDrag, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .stamp[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.p8[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.border-left[_ngcontent-%COMP%] {\n  border-left: 1px solid #929292;\n  padding-left: 0 8px;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNJLGlCQUFBO0FBRU47QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQURJO0VBQ0kseUJBQUE7QUFHUjtBQURJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFJWjtBQUZRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFJWjtBQUZRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSVo7QUFIWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtoQjtBQUpnQjtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBS3BCO0FBRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBR1o7QUFGWTtFQUNJLGlCQUFBO0FBSWhCO0FBRlk7RUFDSSxrQkFBQTtBQUloQjtBQUZZO0VBQ0ksMEJBQUE7QUFJaEI7QUFDQTtFQUNJLFlBQUE7QUFFSjtBQUFBO0VBQ0ksZ0NBQUE7QUFHSjtBQURBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBSUo7QUFBRTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQURFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFJTiIsImZpbGUiOiJ0ZW1wbGF0ZTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH0gXHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zdGFtcHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgICB9XHJcbiAgICAuZm9udC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi1mYW1pbHkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zaXplIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb2xvciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgOSwgOSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAmLWJvbGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pdGFsaWMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5wOHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIC5ib3JkZXItbGVmdHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMCA4cHg7XHJcbiAgfVxyXG4gIC5iZWV0d2Vlbi1hbGwtY29udGVudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_design_design-barcode_label-dish_label-dish_module_ts.js.map