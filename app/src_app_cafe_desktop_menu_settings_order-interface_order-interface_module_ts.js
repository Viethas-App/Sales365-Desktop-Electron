"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_settings_order-interface_order-interface_module_ts"],{

/***/ 37080:
/*!*****************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/settings/order-interface/order-interface.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderInterfaceComponent": () => (/* binding */ OrderInterfaceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function OrderInterfaceComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "M\u1ED7i giao di\u1EC7n g\u1ECDi m\u00F3n s\u1EBD th\u00EDch h\u1EE3p cho t\u1EEBng m\u00F4 h\u00ECnh kinh doanh kh\u00E1c nhau: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " - S\u1ED1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, ": Th\u00EDch h\u1EE3p cho m\u00F4 h\u00ECnh nh\u00E0 h\u00E0ng, c\u00E0 ph\u00EA s\u1ED1 l\u01B0\u1EE3ng m\u00F3n nhi\u1EC1u.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " - S\u1ED1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, ": Th\u00EDch h\u1EE3p cho m\u00F4 h\u00ECnh m\u00F3n \u0103n/th\u1EE9c u\u1ED1ng mang \u0111i, \u0111\u1ED3 \u0103n nhanh, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " qu\u00E1n bar/beer club, buffet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class OrderInterfaceComponent {
    constructor(vhComponent, languageService) {
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.order = JSON.parse(localStorage.getItem("vh-cafe-order-interface"));
        this.showNote = false;
    }
    ngOnInit() {
    }
    updateInterface(type) {
        if (this.order.interface != type) {
            this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", `${this.languageService.translate('Are you sure to change the order interface')}?`, "OK", this.languageService.translate('Cancel')).then(() => {
                const updateSetting = () => {
                    this.order.interface = type;
                    localStorage.setItem("vh-cafe-order-interface", JSON.stringify(this.order));
                };
                Promise.all([this.vhComponent.showLoading("", "transparent-loading", null, null, false), updateSetting()])
                    .finally(() => this.vhComponent.hideLoading(0));
            }, () => { });
        }
    }
}
OrderInterfaceComponent.ɵfac = function OrderInterfaceComponent_Factory(t) { return new (t || OrderInterfaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
OrderInterfaceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderInterfaceComponent, selectors: [["app-order-interface"]], decls: 17, vars: 14, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "23", 1, "title"], ["nz-row", "", 1, "row", "custom-scroll-bar"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right", "col"], [1, "border-hover", 3, "click"], ["src", "assets/img/order-1.svg", 2, "width", "100%"], ["nz-col", "", "nzSpan", "12", 1, "bottom-left", "col"], ["src", "assets/img/order-2.svg", 2, "width", "100%"], [3, "nzVisible", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnOk"], [4, "nzModalContent"], [2, "color", "var(--ion-color-vh-green)"]], template: function OrderInterfaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderInterfaceComponent_Template_div_click_8_listener() { return ctx.updateInterface(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderInterfaceComponent_Template_div_click_11_listener() { return ctx.updateInterface(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function OrderInterfaceComponent_Template_nz_modal_nzVisibleChange_13_listener($event) { return ctx.showNote = $event; })("nzOnOk", function OrderInterfaceComponent_Template_nz_modal_nzOnOk_13_listener() { return ctx.showNote = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, OrderInterfaceComponent_p_16_Template, 14, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "Order interface"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.order.interface == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.order.interface == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 10, "Confirm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 12, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.showNote);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n  margin-bottom: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  justify-content: center;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%] {\n  padding: 8px 8px 0px 0px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%] {\n  padding: 8px 0px 0px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%] {\n  padding: 0px 8px 8px 0px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%] {\n  padding: 0px 0px 8px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .border-hover[_ngcontent-%COMP%] {\n  border: 2px solid #c8c7cc;\n  border-radius: 7px;\n  width: 85%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .border-hover[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 3px 6px #00000040;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWludGVyZmFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUNaO0FBQ1E7RUFDSSx3QkFBQTtBQUNaO0FBR1E7RUFDSSx3QkFBQTtBQURaO0FBSVE7RUFDSSx3QkFBQTtBQUZaO0FBS1E7RUFDSSx3QkFBQTtBQUhaO0FBTVE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUpaO0FBS1k7RUFDSSxpQ0FBQTtBQUhoQjtBQVFRO0VBQ0ksc0RBQUE7RUFDQSxpQ0FBQTtBQU5aIiwiZmlsZSI6Im9yZGVyLWludGVyZmFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3AtcmlnaHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDBweCAwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcC1sZWZ0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDBweCAwcHggOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvdHRvbS1yaWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3R0b20tbGVmdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggOHB4IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3JkZXItaG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQwO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 83530:
/*!**************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/settings/order-interface/order-interface.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderInterfaceModule": () => (/* binding */ OrderInterfaceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _order_interface_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-interface.component */ 37080);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _order_interface_component__WEBPACK_IMPORTED_MODULE_0__.OrderInterfaceComponent
    }
];
class OrderInterfaceModule {
}
OrderInterfaceModule.ɵfac = function OrderInterfaceModule_Factory(t) { return new (t || OrderInterfaceModule)(); };
OrderInterfaceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrderInterfaceModule });
OrderInterfaceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderInterfaceModule, { declarations: [_order_interface_component__WEBPACK_IMPORTED_MODULE_0__.OrderInterfaceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_settings_order-interface_order-interface_module_ts.js.map