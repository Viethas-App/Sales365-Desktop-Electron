"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_login_login_module_ts"],{

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);




class LoginComponent {
    constructor(router) {
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd && event.url !== "/login")
                this.title = "Register";
            else
                this.title = "Log in";
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 0, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "10"], [1, "bg"], ["nz-col", "", "nzSpan", "14"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: [".ant-row[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/newbannervh.jpg\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: left;\n  height: 100%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  font-size: 250px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nh4[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  color: var(--ion-color-vh-white);\n  top: 50%;\n  font-size: 1.5rem;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-bottom: 2px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxxREFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FBS0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LXJvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb24vbmV3YmFubmVydmguanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGZvbnQtc2l6ZTogMjUwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5oNCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 98458);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 32508);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ 60657);
/* harmony import */ var _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-success/modal-success.component */ 43305);
/* harmony import */ var _sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        children: [
            {
                path: '',
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent,
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent,
            }
        ]
    },
];
class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__.SignupComponent, _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_4__.ModalSuccessComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 43305:
/*!****************************************************************!*\
  !*** ./src/app/login/modal-success/modal-success.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSuccessComponent": () => (/* binding */ ModalSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);






class ModalSuccessComponent {
    constructor(vhComponent) {
        this.vhComponent = vhComponent;
    }
    ngOnInit() {
    }
    closeModel() {
        this.vhComponent.hideModal();
    }
}
ModalSuccessComponent.ɵfac = function ModalSuccessComponent_Factory(t) { return new (t || ModalSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent)); };
ModalSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalSuccessComponent, selectors: [["app-modal-success"]], decls: 35, vars: 0, consts: [[1, "modal-success"], [1, "close"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [1, "notify"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 61 61"], ["d", "M56.21,20.44a2.51,2.51,0,0,0-1.7,3.1,24.6,24.6,0,0,1,1,7A25,25,0,1,1,44.44,9.74a2.5,2.5,0,1,0,2.79-4.15A30,30,0,1,0,59.31,22.14,2.49,2.49,0,0,0,56.21,20.44Z", 1, "cls-1"], ["d", "M22.27,23.73a2.5,2.5,0,0,0-3.54,3.54l10,10a2.51,2.51,0,0,0,3.54,0l27.5-27.5a2.5,2.5,0,0,0-3.54-3.54L30.5,32Z", 1, "cls-1"], [1, "notify-content"], [1, "title"], [1, "list-image"], [1, "item-image"], ["src", "assets/img/login/hinh 1.jpg", "alt", "image 1"], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline"], ["src", "assets/img/login/hinh 2.jpg", "alt", "image 2"], ["src", "assets/img/login/hinh 3.jpg", "alt", "image 3"], [1, "image-note"], [1, "note-content"], [1, "button"], ["nz-button", "", 3, "click"]], template: function ModalSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSuccessComponent_Template_i_click_2_listener() { return ctx.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ".cls-1{fill:var(--ion-color-vh-green);}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u0110\u00E3 g\u1EEDi email l\u1EA5y m\u1EADt kh\u1EA9u th\u00E0nh c\u00F4ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " H\u01AF\u1EDANG D\u1EAAN L\u1EA4Y M\u1EACT KH\u1EA8U ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " B\u01B0\u1EDBc 01: Vui l\u00F2ng ki\u1EC3m tra trong h\u1ED9p th\u01B0 \u0111\u1EBFn (Inbox). N\u1EBFu kh\u00F4ng th\u1EA5y th\u00EC ki\u1EC3m tra trong m\u1EE5c th\u01B0 r\u00E1c (Spam) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " B\u01B0\u1EDBc 02: Ch\u1ECDn th\u01B0 c\u00F3 n\u1ED9i dung l\u1EA5y m\u1EADt kh\u1EA9u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " B\u01B0\u1EDBc 03: Nh\u1EA5n v\u00E0o link \u0111\u1EC3 l\u1EA5y m\u1EADt kh\u1EA9u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSuccessComponent_Template_button_click_33_listener() { return ctx.closeModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u0110\u00E3 hi\u1EC3u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective], styles: [".modal-success[_ngcontent-%COMP%] {\n  padding: 8px;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n.modal-success[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.modal-success[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n}\n.modal-success[_ngcontent-%COMP%]   .notify[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 8px;\n  gap: 8px;\n}\n.modal-success[_ngcontent-%COMP%]   .notify[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.modal-success[_ngcontent-%COMP%]   .notify[_ngcontent-%COMP%]   .notify-content[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 18px;\n}\n.modal-success[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-align: center;\n  font-size: 24px;\n}\n.modal-success[_ngcontent-%COMP%]   .list-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: nowrap;\n  padding: 16px;\n  align-items: center;\n}\n.modal-success[_ngcontent-%COMP%]   .list-image[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n}\n.modal-success[_ngcontent-%COMP%]   .list-image[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80%;\n  object-fit: cover;\n}\n.modal-success[_ngcontent-%COMP%]   .list-image[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 20%;\n}\n.modal-success[_ngcontent-%COMP%]   .list-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 5%;\n  font-size: 18px;\n}\n.modal-success[_ngcontent-%COMP%]   .image-note[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 0 16px;\n}\n.modal-success[_ngcontent-%COMP%]   .image-note[_ngcontent-%COMP%]   .note-content[_ngcontent-%COMP%] {\n  width: 30%;\n  font-size: 14px;\n  color: #373737;\n  font-weight: 600;\n}\n.modal-success[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90%;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n}\n.modal-success[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 42px;\n  background-color: var(--ion-color-vh-green);\n  color: #fff;\n  border: 1px solid var(--ion-color-vh-green);\n}\n.modal-success[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #5ed99f;\n  border-color: #5ed99f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUFRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFFWjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBQ1I7QUFBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVo7QUFBUTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtBQUVaO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVaO0FBRFk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBR2hCO0FBRFk7RUFDSSxXQUFBO0FBR2hCO0FBQVE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtBQUVaO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ1I7QUFBUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRVo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQVI7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUFDWjtBQUFZO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQUVoQiIsImZpbGUiOiJtb2RhbC1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXN1Y2Nlc3Mge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm90aWZ5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm90aWZ5LWNvbnRlbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLml0ZW0taW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwJVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICB3aWR0aDogNSU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Utbm90ZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgLm5vdGUtY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzNzM3Mzc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDkwJTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDQycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWQ5OWY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM1ZWQ5OWZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59Il19 */"] });


/***/ }),

/***/ 32508:
/*!**************************************************!*\
  !*** ./src/app/login/signin/signin.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_search_search_lang_search_lang_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/search/search-lang/search-lang.component */ 53572);
/* harmony import */ var _modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-success/modal-success.component */ 43305);
/* harmony import */ var src_assets_documents_main_sectors_main_sectors_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/documents/main_sectors/main_sectors.json */ 87082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function SigninComponent_ng_container_55_nz_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, item_r3.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r3._id);
} }
function SigninComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "nz-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SigninComponent_ng_container_55_Template_nz_select_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.id_branch_selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SigninComponent_ng_container_55_nz_option_10_Template, 2, 4, "nz-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SigninComponent_ng_container_55_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.handleOkBranch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "Select branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 7, "Purchasing and selling activities at the chosen branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.id_branch_selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 9, "Complete"));
} }
function SigninComponent_ng_container_59_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 43);
} }
function SigninComponent_ng_container_59_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SigninComponent_ng_container_59_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const template_r8 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.user.default_selling_page = template_r8.url; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SigninComponent_ng_container_59_div_2_i_6_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r7.user.default_selling_page == template_r8.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", template_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, template_r8.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.user.default_selling_page == template_r8.url);
} }
function SigninComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SigninComponent_ng_container_59_div_2_Template, 7, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.templates);
} }
const _c0 = function () { return ["/login/signup"]; };
const _c1 = function () { return { height: "450px" }; };
const _c2 = function () { return { top: "45%", transform: "translateY(-50%)" }; };
const _c3 = function () { return { "max-height": "70vh" }; };
class SigninComponent {
    constructor(vhAuth, vhQuerySales, vhComponent, router, languageService, http, vhQueryCafe) {
        this.vhAuth = vhAuth;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.router = router;
        this.languageService = languageService;
        this.http = http;
        this.vhQueryCafe = vhQueryCafe;
        this._SHOW_PASS = false;
        this.show_modal_choose_interface = false;
        this.user = {};
        this.templates = [];
        this.store_main_sector = '';
        this.country_code = 'VN';
        this.language = 'vi';
        this._VALIDATION_MESSAGES = {
            email: [
                { type: "required", message: this.languageService.translate("User name is required") },
                {
                    type: "minlength",
                    message: this.languageService.translate("User name must be at least 5 characters long")
                }
            ],
            password: [
                { type: "required", message: this.languageService.translate("Password is required") },
                {
                    type: "minlength",
                    message: this.languageService.translate("Password must be at least 5 characters long")
                }
            ]
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
        //////////////////////////////////LANGUAGE///////////////////////////////////
        this.langList = [
            { name: 'Vietnamese', value: 'vi', img: 'assets/icon/settings/language/vi.svg', country_code: 'VN' },
            { name: 'English', value: 'en', img: 'assets/icon/settings/language/en.svg', country_code: 'US' }
        ];
        this.lang = this.langList.find(item => item.value == this.vhAuth.localStorageGET('language_code'));
        /**Modal branch */
        this.id_branch_selected = '';
        /**
         * Hàm lấy chi nhánh
         */
        this.branchList = [];
        this.modal_branch = false;
        let state = this.router.getCurrentNavigation().extras.state;
        //change branch
        if (state && state.change_branch)
            this.getBranches();
    }
    getThemeValue() {
        return this.vhAuth.getThemeValue() || 'sky-blue-theme';
    }
    /**
     * bắt sk nhấn Enter từ bàn phím
     * @param event
     */
    checkKey(event) {
        if (event.keyCode == 13 && this.loginForm.valid)
            this.tryLogin(this.loginForm.value);
    }
    /**
     * đăng nhập vào app
     * @param value
     */
    tryLogin(value) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhAuth.signInWithEmailAndPassword_Sales365(value.email, value.password)
                .then(() => {
                this.vhComponent.hideLoading(0).then(() => {
                    this.getBranches();
                });
            }, (error) => {
                console.error(error);
                let err = /(auth\/wrong-password)/.test(error.message.toString()) ? "Sai email hoặc password" : "Tài khoản không tồn tại!";
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate(err), 7000);
            }).finally(() => this.vhComponent.hideLoading(0));
        });
    }
    //////////////////////////////////FORGOT PASSWORD////////////////////////////
    /**
     * mở modal nhập email quên mật khẩu
     */
    forgotPassword() {
        this.vhComponent.alertInputRadioCheckbox(this.languageService.translate('Forgot password?'), "", "OK", this.languageService.translate('Cancel'), [
            { name: "email", type: 'email', placeholder: 'Email' }
        ]).then(({ value }) => {
            if ((/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/).test(value.email)) {
                this.vhAuth.resetPasswordbyEmail(value.email).then(bool => {
                    if (bool) {
                        this.vhComponent.showModal(_modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_1__.ModalSuccessComponent, {}, false, false, 'modal-login')
                            .then(modal => {
                            modal.onWillDismiss()
                                .then(() => {
                            });
                        });
                        // this.vhComponent.showToast(2000, this.languageService.translate("Email has been sent successfully"), "success-toast")
                    }
                    else
                        this.vhComponent.showToast(2000, this.languageService.translate("Email sending failed"), "alert-toast");
                });
            }
            else {
                this.vhComponent.showToast(2000, this.languageService.translate("Email invalid"), "alert-toast");
            }
        }, () => { });
    }
    /**
     * thay đổi ngôn ngữ hiển thị
     */
    selectLang() {
        this.vhComponent.showModal(src_app_sales_components_search_search_lang_search_lang_component__WEBPACK_IMPORTED_MODULE_0__.SearchLangComponent, {}).then(modal => {
            modal.onWillDismiss().then(value => {
                this.lang = this.langList.find(item => item.value == this.vhAuth.localStorageGET('language_code'));
                this.vhAuth.localStorageSET('language_code', this.lang.value);
                this.vhAuth.localStorageSET('country_code', this.lang.country_code);
                console.log(this.lang);
            });
        });
    }
    /**
     * đóng modal chọn chi nhánh
     */
    handleCancelModalBranch() {
        this.modal_branch = false;
    }
    /**
     * xử lý khi chọn chi nhánh đăng nhập
     */
    handleOkBranch() {
        let main_project = src_assets_documents_main_sectors_main_sectors_json__WEBPACK_IMPORTED_MODULE_2__.find(e => e.main_sector == this.vhAuth.getStore().main_sector).main_project;
        if (main_project == 'sales') {
            this.vhQuerySales.setDefaultBranch(this.id_branch_selected);
            this.modal_branch = false;
            //  this.navigateToPage('/dashboard')
            let employee = this.vhAuth.getUser();
            let default_display_page = this.vhAuth.getLocalMyPermissionName('default_display_page');
            let default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
            // this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
            if (employee['owner'] == 'boss') {
                if (default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                    switch (default_display_page) {
                        case 'selling_display_page': {
                            if (!default_selling_page) {
                                this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                    this.templates = templates[this.language];
                                }); // Lấy giao diện theo main_sector của cửa hàng
                                this.show_modal_choose_interface = true;
                            }
                            else {
                                this.navigateToPage(default_selling_page);
                            }
                            break;
                        }
                        case 'admin_display_page': {
                            this.navigateToPage('/dashboard');
                            break;
                        }
                        default: {
                            this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                                .then((bool) => {
                                if (bool)
                                    this.navigateToPage('/dashboard');
                            });
                        }
                    }
                }
                else { // nếu chưa có thì   vô url  POS
                    this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                        .then((bool) => {
                        if (bool)
                            this.navigateToPage('/dashboard');
                    });
                }
            }
            else {
                this.vhAuth.getPermission(employee._id)
                    .then((permission) => {
                    if (employee.default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                        switch (employee.default_display_page) {
                            case 'selling_display_page': {
                                if (permission[employee.selling_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                    if (!permission.default_selling_page) {
                                        this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                        this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                            this.templates = templates[this.language];
                                        }); // Lấy giao diện theo main_sector của cửa hàng
                                        this.show_modal_choose_interface = true;
                                    }
                                    else {
                                        this.navigateToPage(permission.default_selling_page);
                                    }
                                }
                                else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                    if (permission.admin_display_page) {
                                        this.vhAuth.updateEmployee(employee._id, { default_display_page: 'admin_display_page' })
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                    }
                                    else
                                        Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                        ])
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                }
                                break;
                            }
                            case 'admin_display_page': {
                                if (permission[employee.default_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                    this.navigateToPage('/dashboard');
                                }
                                else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                    if (permission.selling_display_page) {
                                        this.vhAuth.updateEmployee(employee._id, { default_display_page: 'selling_display_page' })
                                            .then((bool) => {
                                            if (bool) {
                                                if (!permission.default_selling_page) {
                                                    this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                    this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                        this.templates = templates[this.language];
                                                    }); // Lấy giao diện theo main_sector của cửa hàng
                                                    this.show_modal_choose_interface = true;
                                                }
                                                else {
                                                    this.navigateToPage(permission.default_selling_page);
                                                }
                                            }
                                        });
                                    }
                                    else
                                        Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                        ])
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                }
                                break;
                            }
                            default: {
                                Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                ])
                                    .then((bool) => {
                                    if (bool)
                                        this.navigateToPage('/dashboard');
                                });
                            }
                        }
                    }
                    else { // nếu chưa có trường default_display_page của user thì check xem có quyền đăng nhập vô url nào. ưu tiên POS
                        if (permission.selling_display_page) {
                            this.vhAuth.updateEmployee(employee._id, { default_display_page: 'selling_display_page', default_selling_page: 'sales-desktop' })
                                .then((bool) => {
                                if (bool) {
                                    if (!permission.default_selling_page) {
                                        this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                        this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                            this.templates = templates[this.language];
                                        }); // Lấy giao diện theo main_sector của cửa hàng
                                        this.show_modal_choose_interface = true;
                                    }
                                    else {
                                        this.navigateToPage(permission.default_selling_page);
                                    }
                                }
                            });
                        }
                        else {
                            if (permission.admin_display_page) {
                                this.vhAuth.updateEmployee(employee._id, { default_display_page: 'admin_display_page' })
                                    .then((bool) => {
                                    if (bool)
                                        this.navigateToPage('/dashboard');
                                });
                            }
                            else
                                Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                ])
                                    .then((bool) => {
                                    if (bool)
                                        this.navigateToPage('/dashboard');
                                });
                        }
                    }
                }, error => {
                });
            }
        }
        else
            this.handleOkBranchCafe();
    }
    handleOkBranchCafe() {
        this.vhQueryCafe.setDefaultBranch(this.id_branch_selected);
        this.modal_branch = false;
        //  this.navigateToPage('/dashboard')
        let employee = this.vhAuth.getUser();
        let default_display_page = this.vhAuth.getLocalMyPermissionName('default_display_page');
        let default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
        // this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
        if (employee['owner'] == 'boss') {
            if (default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                switch (default_display_page) {
                    case 'selling_display_page': {
                        if (!default_selling_page) {
                            this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                            this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                this.templates = templates[this.language];
                            }); // Lấy giao diện theo main_sector của cửa hàng
                            this.show_modal_choose_interface = true;
                        }
                        else
                            this.navigateToPage(default_selling_page);
                        break;
                    }
                    case 'admin_display_page': {
                        this.navigateToPage('/dashboard');
                        break;
                    }
                    default: {
                        this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                            .then((bool) => {
                            if (bool)
                                this.navigateToPage('/dashboard');
                        });
                    }
                }
            }
            else { // nếu chưa có thì   vô url  POS
                this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                    .then((bool) => {
                    if (bool)
                        this.navigateToPage('/dashboard');
                });
            }
        }
        else {
            this.vhAuth.getPermission(employee._id)
                .then((permission) => {
                if (employee.default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                    switch (employee.default_display_page) {
                        case 'selling_display_page': {
                            if (permission[employee.selling_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                if (!permission.default_selling_page) {
                                    this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                    console.log(this.store_main_sector);
                                    this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                        this.templates = templates[this.language];
                                        console.log(this.templates);
                                    }); // Lấy giao diện theo main_sector của cửa hàng
                                    this.show_modal_choose_interface = true;
                                }
                                else
                                    this.navigateToPage(permission.default_selling_page);
                            }
                            else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                if (permission.admin_display_page) {
                                    this.vhAuth.updateEmployee(employee._id, { default_display_page: 'admin_display_page' })
                                        .then((bool) => {
                                        if (bool)
                                            this.navigateToPage('/dashboard');
                                    });
                                }
                                else
                                    Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                    ])
                                        .then((bool) => {
                                        if (bool)
                                            this.navigateToPage('/dashboard');
                                    });
                            }
                            break;
                        }
                        case 'admin_display_page': {
                            if (permission[employee.default_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                this.navigateToPage('/dashboard');
                            }
                            else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                if (permission.selling_display_page) {
                                    this.vhAuth.updateEmployee(employee._id, { default_display_page: 'selling_display_page' })
                                        .then((bool) => {
                                        if (bool) {
                                            if (!permission.default_selling_page) {
                                                this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                console.log(this.store_main_sector);
                                                this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                    this.templates = templates[this.language];
                                                    console.log(this.templates);
                                                }); // Lấy giao diện theo main_sector của cửa hàng
                                                this.show_modal_choose_interface = true;
                                            }
                                            else
                                                this.navigateToPage(permission.default_selling_page);
                                        }
                                    });
                                }
                                else
                                    Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                    ])
                                        .then((bool) => {
                                        if (bool)
                                            this.navigateToPage('/dashboard');
                                    });
                            }
                            break;
                        }
                        default: {
                            Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                            ])
                                .then((bool) => {
                                if (bool)
                                    this.navigateToPage('/dashboard');
                            });
                        }
                    }
                }
                else { // nếu chưa có trường default_display_page của user thì check xem có quyền đăng nhập vô url nào. ưu tiên POS
                    if (permission.selling_display_page) {
                        this.vhAuth.updateEmployee(employee._id, { default_display_page: 'selling_display_page', default_selling_page: 'cafe-desktop' })
                            .then((bool) => {
                            if (bool) {
                                if (!permission.default_selling_page) {
                                    this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                    this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                        this.templates = templates[this.language];
                                    }); // Lấy giao diện theo main_sector của cửa hàng
                                    this.show_modal_choose_interface = true;
                                }
                                else
                                    this.navigateToPage(permission.default_selling_page);
                            }
                        });
                    }
                    else {
                        if (permission.admin_display_page) {
                            this.vhAuth.updateEmployee(employee._id, { default_display_page: 'admin_display_page' })
                                .then((bool) => {
                                if (bool)
                                    this.navigateToPage('/dashboard');
                            });
                        }
                        else
                            Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                            ])
                                .then((bool) => {
                                if (bool)
                                    this.navigateToPage('/dashboard');
                            });
                    }
                }
            }, error => {
                console.log('error', error);
            });
        }
        // let loginInterface = localStorage.getItem("vh-cafe-system-start-interface");
        // if (!loginInterface) {
        //   localStorage.setItem("vh-cafe-system-start-interface", 'overview')
        //   if (this.vhAuth.checkMyPermission("admin_display_page"))
        //     this.router.navigate(['/cafe/dashboard/overview']);
        //   else
        //     this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
        // } else if (loginInterface == 'pos') {
        //   this.router.navigate(["/cafe/cafe-pos"]).then(() => {
        //     // this.vhComponent.hideLoading(0);
        //   })
        // } else {
        //   if (this.vhAuth.checkMyPermission("admin_display_page"))
        //     this.router.navigate(['/cafe/dashboard/overview']);
        //   else
        //     this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
        // }
    }
    /**
     * router tới url truyền vào
     * @param url
     */
    navigateToPage(url) {
        let main_project = src_assets_documents_main_sectors_main_sectors_json__WEBPACK_IMPORTED_MODULE_2__.find(e => e.main_sector == this.vhAuth.getStore().main_sector).main_project;
        if (main_project == 'sales') {
            this.vhComponent.showLoading(this.languageService.translate("Syncing data..."), 'current-loading', 'circles', 180000, true, 180000).then(() => {
                this.vhQuerySales.syncCollections_Sales365_Desktop().then(() => {
                    this.vhComponent.hideLoading(0);
                    // kiểm tra tk cũ chưa có trường này trong chi nhánh thì update true lại
                    if (this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price == undefined)
                        this.vhQuerySales.updateAppSettingNameBranch('permission_branch', { display_promotion_selling_price: true });
                    this.router.navigate(['sales/' + url]);
                });
            });
        }
        else {
            this.vhComponent.showLoading(this.languageService.translate("Syncing data..."), 'current-loading', 'circles', 180000, true, 180000).then(() => {
                this.vhQueryCafe.syncCollections_Sales365_Desktop().then(() => {
                    this.vhComponent.hideLoading(0);
                    // kiểm tra tk cũ chưa có trường này trong chi nhánh thì update true lại
                    if (this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price == undefined)
                        this.vhQueryCafe.updateAppSettingNameBranch('permission_branch', { display_promotion_selling_price: true });
                    this.router.navigate(['cafe/' + url]);
                });
            });
        }
    }
    /**
     * kiểm tra chi nhánh đăng nhập của user,
     * nếu có 2 chi nhánh thì hiển thị modal chọn chi nhánh,
     * nếu có 1 thì check trang đăng nhập mặc định để router qua
     */
    getBranches() {
        // Promise.all([
        //   this.vhQuerySales.startLocalStorage(),
        let main_project = src_assets_documents_main_sectors_main_sectors_json__WEBPACK_IMPORTED_MODULE_2__.find(e => e.main_sector == this.vhAuth.getStore().main_sector).main_project;
        if (main_project == 'sales') {
            this.vhQuerySales.refreshLocalBranchs().then(() => {
                let branches = [...this.vhQuerySales.getlocalBranchs()];
                let employee = this.vhAuth.getUser();
                this.user = employee;
                let default_display_page = this.vhAuth.getLocalMyPermissionName('default_display_page');
                let default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
                // console.log();
                if (employee['owner'] == 'boss') {
                    this.branchList = branches;
                    if (this.branchList.length >= 2) {
                        this.modal_branch = true;
                        this.id_branch_selected = this.branchList[0]._id;
                    }
                    else if (this.branchList.length == 1) {
                        this.vhQuerySales.setDefaultBranch(this.branchList[0]._id);
                        // this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
                        if (employee.default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                            switch (employee.default_display_page) {
                                case 'selling_display_page': {
                                    if (!this.user.default_selling_page) {
                                        this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                        this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                            this.templates = templates[this.language];
                                        }); // Lấy giao diện theo main_sector của cửa hàng
                                        this.show_modal_choose_interface = true;
                                    }
                                    else
                                        this.navigateToPage(this.user.default_selling_page);
                                    break;
                                }
                                case 'admin_display_page': {
                                    this.navigateToPage('/dashboard');
                                    break;
                                }
                                default: {
                                    this.vhAuth.updateEmployee(this.user._id, { default_display_page: 'admin_display_page' })
                                        .then((bool) => {
                                        if (bool)
                                            this.navigateToPage('/dashboard');
                                    });
                                }
                            }
                        }
                        else { // nếu chưa có thì   vô url  POS
                            this.vhAuth.updateEmployee(employee._id, { default_display_page: 'admin_display_page' })
                                .then((bool) => {
                                if (bool)
                                    this.navigateToPage('/dashboard');
                            });
                        }
                    }
                }
                else {
                    this.vhAuth.getPermission(employee['_id']).then(permission => {
                        branches.forEach(item => {
                            if (permission[`${item._id}_login_branch`])
                                this.branchList.push(item);
                        });
                        if (this.branchList.length >= 2) {
                            this.modal_branch = true;
                            this.id_branch_selected = this.branchList[0]._id;
                        }
                        else if (this.branchList.length == 1) {
                            this.vhQuerySales.setDefaultBranch(this.branchList[0]._id);
                            if (employee.default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                                switch (permission.default_display_page) {
                                    case 'selling_display_page': {
                                        if (permission[employee.default_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                            if (!permission.default_selling_page) {
                                                this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                    this.templates = templates[this.language];
                                                }); // Lấy giao diện theo main_sector của cửa hàng
                                                this.show_modal_choose_interface = true;
                                            }
                                            else
                                                this.navigateToPage(permission.default_selling_page);
                                        }
                                        else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                            if (permission.admin_display_page) {
                                                this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                                                    .then((bool) => {
                                                    if (bool)
                                                        this.navigateToPage('/dashboard');
                                                });
                                            }
                                            else
                                                Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                                ])
                                                    .then((bool) => {
                                                    if (bool)
                                                        this.navigateToPage('/dashboard');
                                                });
                                        }
                                        break;
                                    }
                                    case 'admin_display_page': {
                                        if (permission[employee.default_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                            this.navigateToPage('/dashboard');
                                        }
                                        else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                            if (permission.selling_display_page) {
                                                this.vhAuth.updatePermission(employee._id, { default_display_page: 'selling_display_page' })
                                                    .then((bool) => {
                                                    if (bool) {
                                                        if (!permission.default_selling_page) {
                                                            this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                            this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                                this.templates = templates[this.language];
                                                            }); // Lấy giao diện theo main_sector của cửa hàng
                                                            this.show_modal_choose_interface = true;
                                                        }
                                                        else
                                                            this.navigateToPage(permission.default_selling_page);
                                                    }
                                                });
                                            }
                                            else
                                                Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                                ])
                                                    .then((bool) => {
                                                    if (bool)
                                                        this.navigateToPage('/dashboard');
                                                });
                                        }
                                        break;
                                    }
                                    default: {
                                        Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                        ])
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                    }
                                }
                            }
                            else { // nếu chưa có trường default_display_page của user thì check xem có quyền đăng nhập vô url nào. ưu tiên POS
                                if (permission.selling_display_page) {
                                    this.vhAuth.updatePermission(employee._id, { default_display_page: 'selling_display_page', default_selling_page: 'sales-desktop' })
                                        .then((bool) => {
                                        if (bool) {
                                            if (!permission.default_selling_page) {
                                                this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                    this.templates = templates[this.language];
                                                }); // Lấy giao diện theo main_sector của cửa hàng
                                                this.show_modal_choose_interface = true;
                                            }
                                            else
                                                this.navigateToPage(permission.default_selling_page);
                                        }
                                    });
                                }
                                else {
                                    if (permission.admin_display_page) {
                                        this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                    }
                                    else
                                        Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                        ])
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                }
                            }
                            // this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
                        }
                        else
                            this.vhComponent.showToast(1500, this.languageService.translate("You don't have any branch to log in, please contact the owner account"), "alert-toast");
                    });
                }
            });
        }
        else {
            Promise.all([
                // this.vhQueryCafe.syncCollections_Sales365_Desktop(),
                this.vhQueryCafe.refreshLocalBranchs()
            ])
                .then(() => {
                let branches = [...this.vhQueryCafe.getlocalBranchs()];
                let employee = this.vhAuth.getUser();
                this.user = employee;
                let default_display_page = this.vhAuth.getLocalMyPermissionName('default_display_page');
                let default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
                console.log(branches);
                if (employee['owner'] == 'boss') {
                    this.branchList = branches;
                    if (this.branchList.length >= 2) {
                        this.modal_branch = true;
                        this.id_branch_selected = this.branchList[0]._id;
                    }
                    else if (this.branchList.length == 1) {
                        this.vhQueryCafe.setDefaultBranch(this.branchList[0]._id);
                        // this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
                        if (employee.default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                            switch (employee.default_display_page) {
                                case 'selling_display_page': {
                                    if (!this.user.default_selling_page) {
                                        this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                        console.log(this.store_main_sector);
                                        this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                            this.templates = templates[this.language];
                                            console.log(this.templates);
                                        }); // Lấy giao diện theo main_sector của cửa hàng
                                        this.show_modal_choose_interface = true;
                                    }
                                    else
                                        this.navigateToPage(this.user.default_selling_page);
                                    break;
                                }
                                case 'admin_display_page': {
                                    this.navigateToPage('/dashboard');
                                    break;
                                }
                                default: {
                                    this.vhAuth.updateEmployee(this.user._id, { default_display_page: 'admin_display_page' })
                                        .then((bool) => {
                                        if (bool)
                                            this.navigateToPage('/dashboard');
                                    });
                                }
                            }
                        }
                        else { // nếu chưa có thì   vô url  POS
                            this.vhAuth.updateEmployee(employee._id, { default_display_page: 'admin_display_page' })
                                .then((bool) => {
                                if (bool)
                                    this.navigateToPage('/dashboard');
                            });
                        }
                    }
                }
                else {
                    this.vhAuth.getPermission(employee['_id']).then(permission => {
                        console.log(permission);
                        branches.forEach(item => {
                            if (permission[`${item._id}_login_branch`])
                                this.branchList.push(item);
                        });
                        if (this.branchList.length >= 2) {
                            this.modal_branch = true;
                            this.id_branch_selected = this.branchList[0]._id;
                        }
                        else if (this.branchList.length == 1) {
                            this.vhQueryCafe.setDefaultBranch(this.branchList[0]._id);
                            if (employee.default_display_page) { // kiểm tra có trường đăng nhập mặc định chưa
                                switch (permission.default_display_page) {
                                    case 'selling_display_page': {
                                        if (permission[employee.default_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                            if (!permission.default_selling_page) {
                                                this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                console.log(this.store_main_sector);
                                                this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                    this.templates = templates[this.language];
                                                    console.log(this.templates);
                                                }); // Lấy giao diện theo main_sector của cửa hàng
                                                this.show_modal_choose_interface = true;
                                            }
                                            else
                                                this.navigateToPage(permission.default_selling_page);
                                        }
                                        else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                            if (permission.admin_display_page) {
                                                this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                                                    .then((bool) => {
                                                    if (bool)
                                                        this.navigateToPage('/dashboard');
                                                });
                                            }
                                            else
                                                Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                                ])
                                                    .then((bool) => {
                                                    if (bool)
                                                        this.navigateToPage('/dashboard');
                                                });
                                        }
                                        break;
                                    }
                                    case 'admin_display_page': {
                                        if (permission[employee.default_display_page]) { // kiểm tra trường đăng nhập vs quyền có khớp ko
                                            this.navigateToPage('/dashboard');
                                        }
                                        else { // nếu quyền vô trang đó = false thì xet tiep 2 quyền khác ưu tiên pos
                                            if (permission.selling_display_page) {
                                                this.vhAuth.updatePermission(employee._id, { default_display_page: 'selling_display_page' })
                                                    .then((bool) => {
                                                    if (bool) {
                                                        if (!permission.default_selling_page) {
                                                            this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                            console.log(this.store_main_sector);
                                                            this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                                this.templates = templates[this.language];
                                                                console.log(this.templates);
                                                            }); // Lấy giao diện theo main_sector của cửa hàng
                                                            this.show_modal_choose_interface = true;
                                                        }
                                                        else
                                                            this.navigateToPage(permission.default_selling_page);
                                                    }
                                                });
                                            }
                                            else
                                                Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                                ])
                                                    .then((bool) => {
                                                    if (bool)
                                                        this.navigateToPage('/dashboard');
                                                });
                                        }
                                        break;
                                    }
                                    default: {
                                        Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                        ])
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                    }
                                }
                            }
                            else { // nếu chưa có trường default_display_page của user thì check xem có quyền đăng nhập vô url nào. ưu tiên POS
                                if (permission.selling_display_page) {
                                    this.vhAuth.updatePermission(employee._id, { default_display_page: 'selling_display_page', default_selling_page: 'cafe-desktop' })
                                        .then((bool) => {
                                        if (bool) {
                                            if (!permission.default_selling_page) {
                                                this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
                                                console.log(this.store_main_sector);
                                                this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
                                                    this.templates = templates[this.language];
                                                    console.log(this.templates);
                                                }); // Lấy giao diện theo main_sector của cửa hàng
                                                this.show_modal_choose_interface = true;
                                            }
                                            else
                                                this.navigateToPage(permission.default_selling_page);
                                        }
                                    });
                                }
                                else {
                                    if (permission.admin_display_page) {
                                        this.vhAuth.updatePermission(employee._id, { default_display_page: 'admin_display_page' })
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                    }
                                    else
                                        Promise.all([this.vhAuth.updatePermission(employee._id, { selling_display_page: true, admin_display_page: true, default_display_page: 'admin_display_page' }),
                                        ])
                                            .then((bool) => {
                                            if (bool)
                                                this.navigateToPage('/dashboard');
                                        });
                                }
                            }
                            // this.router.navigate([JSON.parse(localStorage.getItem("vh-sale-order-interface-pos")).interface])
                        }
                        else
                            this.vhComponent.showToast(1500, this.languageService.translate("You don't have any branch to log in, please contact the owner account"), "alert-toast");
                    });
                }
            }).catch(() => {
                this.vhComponent.showToast(1500, this.languageService.translate("Error"), "alert-toast");
            });
        }
    }
    /**
      * thiết lập giao diện trang bán hàng  sale-pos | sale-desktop
      *
      */
    updateSalesInterface() {
        this.vhAuth.updatePermission(this.user._id, { default_selling_page: this.user.default_selling_page })
            .then((bool) => {
            this.navigateToPage(this.user.default_selling_page);
            this.show_modal_choose_interface = false;
        });
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQueryCafe)); };
SigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 60, vars: 58, consts: [["fixed", "", 1, "login"], [1, "logo"], ["size", "12", 1, "logo-vh"], [3, "src"], ["size", "12", 1, "login-form"], [3, "formGroup", "ngSubmit"], ["mode", "ios", "lines", "none", 1, "login-form-item", "ion-no-padding", 3, "ngClass"], ["src", "assets/icon/login/username.svg"], ["mode", "ios", "formControlName", "email", "type", "text", "clearInput", "", 3, "placeholder", "keyup"], ["src", "assets/icon/login/password.svg"], ["mode", "ios", "formControlName", "password", 3, "type", "placeholder", "keyup"], ["slot", "end", 1, "ion-no-margin", 3, "name", "click"], [1, "login-form-fopass"], ["mode", "ios", "fill", "clear", "color", "vh-black", 1, "login-form-fopass-btn", 3, "click"], ["mode", "md", "type", "submit", "fill", "solid", "expand", "full", "shape", "round", 1, "login-form-login", 3, "disabled"], ["size", "12", 1, "register-nav"], [3, "routerLink"], [1, "qrcode"], ["size", "6", 1, "qrcode-ch-play"], ["src", "assets/icon/global/qr-android.png", "alt", ""], ["size", "6", 1, "qrcode-appstore"], ["src", "assets/icon/global/qr-ios.png", "alt", ""], [1, "lang"], ["size", "12", 1, "lang-item"], ["mode", "md", "fill", "clear", 1, "lang-item-btn", 3, "click"], ["slot", "start", 3, "src"], [3, "nzWidth", "nzMaskClosable", "nzVisible", "nzClosable", "nzBodyStyle", "nzFooter", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzWidth", "60vw", 3, "nzStyle", "nzBodyStyle", "nzVisible", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [1, "modal-branch"], [1, "text-center"], ["src", "./assets/icon/login/select_branch.svg"], [3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "modal-branch-complete", 3, "click"], [3, "nzLabel", "nzValue"], ["nz-row", "", 1, "center-all-content", 2, "justify-content", "start !important"], ["nz-col", "", "nzSpan", "12", "class", "bottom-right", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "thumbnail", 3, "click"], [2, "width", "100%", 3, "src"], [2, "text-align", "center"], ["style", "color: var(--ion-color-vh-green);", "nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "var(--ion-color-vh-green)"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_10_listener() { return ctx.tryLogin(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function SigninComponent_Template_ion_input_keyup_14_listener($event) { return ctx.checkKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function SigninComponent_Template_ion_input_keyup_19_listener($event) { return ctx.checkKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SigninComponent_Template_ion_icon_click_21_listener() { return ctx._SHOW_PASS = !ctx._SHOW_PASS; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SigninComponent_Template_ion_button_click_23_listener() { return ctx.forgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ion-grid", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-col", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ion-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SigninComponent_Template_ion_button_click_50_listener() { return ctx.selectLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "nz-modal", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function SigninComponent_Template_nz_modal_nzVisibleChange_54_listener($event) { return ctx.modal_branch = $event; })("nzOnCancel", function SigninComponent_Template_nz_modal_nzOnCancel_54_listener() { return ctx.handleCancelModalBranch(); })("nzOnOk", function SigninComponent_Template_nz_modal_nzOnOk_54_listener() { return ctx.handleOkBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, SigninComponent_ng_container_55_Template, 14, 11, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "nz-modal", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function SigninComponent_Template_nz_modal_nzVisibleChange_56_listener($event) { return ctx.show_modal_choose_interface = $event; })("nzOnOk", function SigninComponent_Template_nz_modal_nzOnOk_56_listener() { return ctx.updateSalesInterface(); })("nzOnCancel", function SigninComponent_Template_nz_modal_nzOnCancel_56_listener() { return ctx.show_modal_choose_interface = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, SigninComponent_ng_container_59_Template, 3, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/img/logo_" + ctx.getThemeValue() + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 30, "Multi-sector product management software"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.loginForm.get("email").hasError("pattern") && (ctx.loginForm.get("email").dirty || ctx.loginForm.get("email").touched) ? "login-form-item-red" : "login-form-item-normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 32, "Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.loginForm.get("password").hasError("minlength") && (ctx.loginForm.get("password").dirty || ctx.loginForm.get("password").touched) ? "login-form-item-red" : "login-form-item-normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 34, "Password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx._SHOW_PASS ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx._SHOW_PASS ? "eye-outline" : "eye-off-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 36, "Forgot password?"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 38, "Log in"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 40, "You don't have an account?"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](54, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 42, "Register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 44, "ANDROID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](46, 46, "IOS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.lang.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 48, ctx.lang.name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzWidth", 450)("nzMaskClosable", false)("nzVisible", ctx.modal_branch)("nzClosable", false)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](55, _c1))("nzFooter", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](58, 52, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](56, _c2))("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](57, _c3))("nzVisible", ctx.show_modal_choose_interface)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 50, "Giao di\u1EC7n b\u00E1n h\u00E0ng"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkDelegate, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".login[_ngcontent-%COMP%] {\n  top: 50%;\n  overflow-y: auto;\n  max-width: 490px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  left: 50%;\n  height: 90%;\n  transform: translate(-50%, -50%);\n}\n.login-form[_ngcontent-%COMP%] {\n  padding: 0 24px;\n}\n.login-form-item[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  border: 1px var(--ion-color-vh-gray) solid;\n  border-radius: 64px;\n  margin: 8px 0;\n}\n.login-form-item-red[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-red);\n}\n.login-form-item-red[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red);\n}\n.login-form-item-normal[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-gray);\n}\n.login-form-item-normal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n}\n.login-form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --color: var(--ion-color-vh-gray);\n  display: flex;\n  align-items: flex-end;\n}\n.login-form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  padding-right: 4px;\n}\n.login-form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.login-form-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  --padding-end: 0;\n}\n.login-form-fopass[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.login-form-fopass-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 0.8rem;\n}\n.login-form-login[_ngcontent-%COMP%] {\n  text-transform: inherit;\n  height: 48px;\n  font-size: 1rem;\n}\n.login[_ngcontent-%COMP%]   .register-nav[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.login[_ngcontent-%COMP%]   .register-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var --ion-color-vh-green;\n  text-decoration: none;\n  font-weight: bold;\n}\n.login[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.login[_ngcontent-%COMP%]   .logo-vh[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.login[_ngcontent-%COMP%]   .logo-vh[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 108px;\n}\n.login[_ngcontent-%COMP%]   .logo-vh[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 0.9rem;\n  color: var --ion-color-vh-black;\n}\n.login[_ngcontent-%COMP%]   .qrcode[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 20px;\n  text-align: center;\n}\n.login[_ngcontent-%COMP%]   .qrcode[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.lang[_ngcontent-%COMP%] {\n  width: 100%;\n  bottom: 0;\n  position: absolute;\n}\n.lang-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n}\n.lang-item-btn[_ngcontent-%COMP%] {\n  align-self: center;\n  text-transform: inherit;\n  color: var(--ion-color-vh-black);\n}\n.modal-branch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.modal-branch-complete[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 8px;\n  left: 0;\n  bottom: 0;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  width: 100%;\n  cursor: pointer;\n}\n.modal-branch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.modal-branch[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.modal-branch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: auto;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.modal-branch[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRFE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR1o7QUFGWTtFQUNJLHFDQUFBO0FBSWhCO0FBSGdCO0VBQ0ksOEJBQUE7QUFLcEI7QUFGWTtFQUNJLHNDQUFBO0FBSWhCO0FBSGdCO0VBQ0ksK0JBQUE7QUFLcEI7QUFGWTtFQUNJLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBSWhCO0FBSGdCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUtwQjtBQUhnQjtFQUNJLGlCQUFBO0FBS3BCO0FBRlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFJaEI7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQUZZO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQUloQjtBQURRO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdaO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBRFE7RUFDSSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFHWjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7QUFHWjtBQUZZO0VBQ0ksYUFBQTtBQUloQjtBQUZZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBSWhCO0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUdaO0FBRUE7RUFFSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNSO0FBQVE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFFWjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLFVBQUE7QUFDUjtBQUVBO0VBQ0ksc0RBQUE7RUFDQSxpQ0FBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0Usa0JBQUE7QUFFTiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0OTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgJi1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICYtcmVkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXJlZCk7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1yZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtbm9ybWFsIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZm9wYXNzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAmLWJ0biB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1sb2dpbiB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXItbmF2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIgKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAmLXZoIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIgKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5xcmNvZGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxhbmcge1xyXG4gICAgLy9oZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9tb2RhbCBicmFuY2hcclxuLm1vZGFsLWJyYW5jaCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgJi1jb21wbGV0ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcclxuICB9XHJcblxyXG4gIC50aHVtYm5haWx7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGltZ3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 60657:
/*!**************************************************!*\
  !*** ./src/app/login/signup/signup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_search_search_phone_code_search_phone_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/search/search-phone-code/search-phone-code.component */ 25909);
/* harmony import */ var src_assets_documents_main_sectors_main_sectors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/documents/main_sectors/main_sectors.json */ 87082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function SignupComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", item_r5.main_sector)("value", item_r5.main_sector);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", item_r5.main_sector);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, item_r5.label));
} }
function SignupComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 44);
} }
function SignupComponent_ng_container_77_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function SignupComponent_ng_container_77_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.moveToNext("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function SignupComponent_ng_container_77_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.moveToNext("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function SignupComponent_ng_container_77_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.moveToNext("3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function SignupComponent_ng_container_77_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.moveToNext("4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function SignupComponent_ng_container_77_Template_input_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.moveToNext("5"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignupComponent_ng_container_77_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.handleOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Vui l\u00F2ng nh\u1EADp m\u00E3 OTP \u0111\u00E3 \u0111\u01B0\u1EE3c g\u1EEDi v\u1EC1 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i +", ctx_r2.callingCode, " ", ctx_r2.formattedPhone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 3, "X\u00E1c th\u1EF1c"), " ");
} }
function SignupComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function SignupComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function () { return ["/login"]; };
class SignupComponent {
    constructor(platform, vhAuth, vhQuerySales, vhAlgorithm, router, languageService, vhComponent, vhQueryCafe, vhQueryDealer, functionService) {
        this.platform = platform;
        this.vhAuth = vhAuth;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.router = router;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhQueryDealer = vhQueryDealer;
        this.functionService = functionService;
        this._SHOW_PASS = false;
        this.errorMessage = "";
        this._SCREEN_HEIGHT = 0;
        this.isVisibleOTP = false;
        this.dupplicate_email = false;
        this.loading = false;
        this.count_valid_otp = 0;
        this.main_sectors = [];
        this.main_project = 'sales';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$')]),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                this.functionService.phoneValidator(() => this.countryCode),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            dealerCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, []),
            main_sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
        });
        this.countrycode = "+84";
        /* ------------------------------------------------------------ SỐ ĐIỆN THOẠI ----------------------------------------------------------- */
        /** Mã quốc gia */
        this.countryCode = this.functionService.defaultCountryCode;
        /** Calling code */
        this.callingCode = this.functionService.defaultCallingCode;
        /** Số điện thoại đã format. VD: 333 333 333 */
        this.formattedPhone = '';
    }
    // public _VALIDATION_MESSAGES: any = {
    //   email: [
    //     { type: "required", message: this.languageService.translate("User name is required") },
    //     {
    //       type: "minlength",
    //       message: this.languageService.translate("User name must be at least 5 characters long")
    //     }
    //   ],
    //   password: [
    //     { type: "required", message: this.languageService.translate("Password is required") },
    //     {
    //       type: "minlength",
    //       message: this.languageService.translate("Password must be at least 5 characters long")
    //     }
    //   ],
    //   company: [
    //     { type: "required", message: this.languageService.translate("Company name is required") }
    //   ],
    //   name: [
    //     { type: "required", message: this.languageService.translate("Full name is required") }
    //   ],
    //   phoneNumber: [
    //     { type: "required", message: this.languageService.translate("Phone number is required") }
    //   ],
    //   address: [
    //     { type: "required", message: this.languageService.translate("Address is required") }
    //   ],
    // };
    ngOnInit() {
        this.main_sectors = src_assets_documents_main_sectors_main_sectors_json__WEBPACK_IMPORTED_MODULE_1__.filter((item) => item.main_project === this.main_project);
    }
    ngAfterViewInit() {
        this._SCREEN_HEIGHT = this.platform.height();
    }
    /**
     * mở modal chọn  mã điện thoại của các quốc gia
     */
    searchPhoneCode() {
        this.vhComponent.showModal(src_app_sales_components_search_search_phone_code_search_phone_code_component__WEBPACK_IMPORTED_MODULE_0__.SearchPhoneCodeComponent, {}).then(modal => {
            modal.onWillDismiss().then(({ data }) => {
                if (data)
                    this.countrycode = data.code;
            });
        });
    }
    // public enter(event, formCtrlName) {
    //   if (event.code == "Enter" && this.registerForm.valid) {
    //     this.tryRegister(this.registerForm.value)
    //   } else {
    //     if (this.registerForm.get(formCtrlName).hasError('pattern')) {
    //       let regEx: RegExp = new RegExp(formCtrlName == 'phoneNumber' ? "[^0-9]" : "[^a-z,A-Z,0-9]")
    //       this.registerForm.controls[formCtrlName].setValue(this.vhAlgorithm.changeAlias(this.registerForm.controls[formCtrlName].value).replace(regEx, ''))
    //     }
    //   }
    // }
    /**
     * submit đăng ký tài khoản
     * @param value
     */
    tryRegister(value) {
        var _a;
        console.log(value);
        let info = Object.assign({}, value);
        // Xử lý số điện thoại
        const phoneNumberValue = info.phone;
        info.countryCode = this.countryCode;
        info.phone = this.functionService.getNationalPhoneNumber(phoneNumberValue, this.countryCode);
        info.phoneNumber = this.functionService.getInternationalPhoneNumber(phoneNumberValue, this.countryCode);
        delete info.password; // trong info gửi đi ko cần password
        // trường hợp có nhập mã giới thiệu
        if (info.dealerCode) {
            Promise.all([
                this.vhQueryDealer.getDealer_byDealerCode(((_a = info.dealerCode) === null || _a === void 0 ? void 0 : _a.trim()) || ''),
                this.vhComponent.showLoadingNotDuration("")
            ])
                .then(([dealer]) => {
                console.log(dealer);
                if (dealer) {
                    info['id_dealer'] = dealer._id;
                    // if (this.platform.is('capacitor') || this.platform.is('electron') || this.platform.is('ios')) {
                    //Đăng ký bình thường như cách cũ
                    console.log('info', info);
                    this.vhAuth.signUpOwner_Sales365(value.email, value.password, info.phoneNumber, info)
                        .then((res) => {
                        this.vhComponent.showToast(2000, this.languageService.translate("Register successfully"), "success-toast");
                        this.tryLogin(value);
                    }, (err) => {
                        console.error(err);
                        this.vhComponent.hideLoading(0).then(() => {
                            this.vhComponent.showToast(2000, this.languageService.translate("Email or phone number is existed"), "alert-toast");
                        });
                    }).catch(error => {
                        console.log(error);
                    });
                    // }
                    // this.loading = true
                    // this.vhAuth.signUpOwner_byOTP_Sales(value.email, value.password, this.countrycode + value.phone, info)
                    //   .then((rsp: any) => {
                    //     this.vhComponent.hideLoading(0)
                    //     if (rsp.vcode === 0) {
                    //       //Nếu số đt và email trước đây chưa được đăng ký sử dụng thì bây giờ có thể đăng ký
                    //       //Khởi động hàm xác minh người dùng đúng người đúng số đt
                    //       this.isVisibleOTP = true;
                    //     } else if (rsp.vcode === 1) {
                    //       this.loading = false
                    //       //thông báo trùng số đt
                    //       this.vhComponent.showToast(4000, this.languageService.translate("Số điện thoại bị trùng"), "alert-toast")
                    //       this.dupplicate_phone = true;
                    //     } else if (rsp.vcode === 2) {
                    //       this.loading = false
                    //       //thông báo trùng email
                    //       this.vhComponent.showToast(4000, this.languageService.translate("Email bị trùng"), "alert-toast");
                    //       this.dupplicate_email = true
                    //     }
                    //     else if (rsp.vcode === 3) {
                    //       this.loading = false
                    //       //thông báo trùng email
                    //       this.vhComponent.showToast(4000, this.languageService.translate("Sai định dạng điện thoại"), "alert-toast");
                    //       this.dupplicate_phone = true
                    //     }
                    //   }, err => {
                    //     this.vhComponent.hideLoading(0)
                    //     this.loading = false;
                    //     this.vhComponent.showToast(4000, this.languageService.translate("Có lỗi xảy ra vui lòng thử lại"), "alert-toast");
                    //   }).catch(error => {
                    //     this.vhComponent.hideLoading(0)
                    //     this.loading = false;
                    //     this.vhComponent.showToast(4000, this.languageService.translate("Có lỗi xảy ra vui lòng thử lại"), "alert-toast");
                    //   })
                }
                else {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Mã giới thiệu không tồn tại!"));
                }
            });
        }
        // trường hợp không có mã giới thiệu thì đăng ký bình thường và xóa dealerCode
        else {
            Promise.all([
                this.vhComponent.showLoadingNotDuration("")
            ])
                .then(([]) => {
                // if (this.platform.is('capacitor') || this.platform.is('electron') || this.platform.is('ios')) {
                //Đăng ký bình thường như cách cũ
                delete info.dealerCode;
                console.log('info', info);
                this.vhAuth.signUpOwner_Sales365(value.email, value.password, info.phoneNumber, info)
                    .then((res) => {
                    this.vhComponent.showToast(2000, this.languageService.translate("Register successfully"), "success-toast");
                    this.tryLogin(value);
                }, (err) => {
                    console.error(err);
                    this.vhComponent.hideLoading(0).then(() => {
                        this.vhComponent.showToast(2000, this.languageService.translate("Email or phone number is existed"), "alert-toast");
                    });
                });
                // }
                // this.loading = true
                // this.vhAuth.signUpOwner_byOTP_Sales(value.email, value.password, this.countrycode + value.phone, info)
                //   .then((rsp: any) => {
                //     this.vhComponent.hideLoading(0)
                //     if (rsp.vcode === 0) {
                //       //Nếu số đt và email trước đây chưa được đăng ký sử dụng thì bây giờ có thể đăng ký
                //       //Khởi động hàm xác minh người dùng đúng người đúng số đt
                //       this.isVisibleOTP = true;
                //     } else if (rsp.vcode === 1) {
                //       this.loading = false
                //       //thông báo trùng số đt
                //       this.vhComponent.showToast(4000, this.languageService.translate("Số điện thoại bị trùng"), "alert-toast")
                //       this.dupplicate_phone = true;
                //     } else if (rsp.vcode === 2) {
                //       this.loading = false
                //       //thông báo trùng email
                //       this.vhComponent.showToast(4000, this.languageService.translate("Email bị trùng"), "alert-toast");
                //       this.dupplicate_email = true
                //     }
                //     else if (rsp.vcode === 3) {
                //       this.loading = false
                //       //thông báo trùng email
                //       this.vhComponent.showToast(4000, this.languageService.translate("Sai định dạng điện thoại"), "alert-toast");
                //       this.dupplicate_phone = true
                //     }
                //   }, err => {
                //     this.vhComponent.hideLoading(0)
                //     this.loading = false;
                //     this.vhComponent.showToast(4000, this.languageService.translate("Có lỗi xảy ra vui lòng thử lại"), "alert-toast");
                //   }).catch(error => {
                //     this.vhComponent.hideLoading(0)
                //     this.loading = false;
                //     this.vhComponent.showToast(4000, this.languageService.translate("Có lỗi xảy ra vui lòng thử lại"), "alert-toast");
                //   })
            });
        }
        // } else {
        // }
    }
    /**
     * đăng nhập sau khi đăng ký thành công
     * @param value
     */
    tryLogin(value) {
        if (this.main_project == 'sales') {
            this.vhAuth.signInWithEmailAndPassword_Sales365(value.email, value.password)
                .then(() => {
                this.vhQuerySales.refreshLocalBranchs()
                    .then(() => {
                    let initBranch = this.vhQuerySales.getlocalBranchs()[0];
                    this.vhQuerySales.setDefaultBranch(initBranch._id);
                    this.vhQuerySales.syncCollections_Sales365_Desktop().then(() => {
                        this.vhComponent.hideLoading(0);
                        // window.location.reload();
                        this.router.navigate([this.main_project + "/dashboard"]);
                    });
                });
            }, (error) => {
                this.errorMessage = 'wrong information';
            });
        }
        else {
            this.vhAuth.signInWithEmailAndPassword_Sales365(value.email, value.password)
                .then(() => {
                this.vhQueryCafe.refreshLocalBranchs()
                    .then(() => {
                    console.log(this.vhQueryCafe.getlocalBranchs());
                    this.vhComponent.hideLoading(0);
                    this.vhQueryCafe.setDefaultBranch(this.vhQueryCafe.getlocalBranchs()[0]._id);
                    this.vhQueryCafe.syncCollections_Sales365_Desktop().then(() => {
                        this.router.navigate(["/cafe/dashboard"]);
                    });
                });
            }, (error) => {
                this.errorMessage = 'wrong information';
            });
        }
    }
    /**
     * xác nhận otp,
     */
    handleOk() {
        this.count_valid_otp++;
        let otpValue = '';
        for (let i = 1; i < 7; i++) {
            let value = document.getElementById('' + i);
            otpValue += value.value;
        }
        this.vhComponent.showLoadingNotDuration("Đang xác thực...").then(() => {
            this.vhAuth.verificationSignup_byOTP_Sales(otpValue)
                .then((owner) => {
                if (owner) {
                    this.tryLogin(this.registerForm.value);
                }
                else {
                    this.vhComponent.hideLoading(0);
                    if (this.count_valid_otp == 3) {
                        this.isVisibleOTP = false;
                        this.vhComponent.alertMessage("", "Bạn đã nhập sai quá 3 lần vui lòng đăng ký lại", "")
                            .then(ok => this.isVisibleOTP = false);
                        return;
                    }
                    //thông báo người dùng đã nhập sai mã otp
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Nhập sai mã OTP, vui lòng nhập lại"), 3000);
                }
            }, error => {
            });
        });
    }
    /**
     * hàm này để trỏ con trỏ chuột tới ô input tiếp theo nếu nhập có giá trị
     */
    moveToNext(id) {
        let value = document.getElementById(id);
        if (value.value)
            document.getElementById((Number(id) + 1).toString()).focus();
    }
    /**
     * hàm này để tắt loading khi load xong capcha của gg và mở modal
     */
    hideLoadingWhenOpenModal() {
        this.loading = false;
        // this.vhComponent.hideLoading(200)
        // document.getElementById('ion-overlay-1').style.zIndex = '1 !important'
    }
    changeMainSector(event, newMainProject) {
        var _a;
        event.preventDefault();
        this.main_project = newMainProject;
        this.main_sectors = src_assets_documents_main_sectors_main_sectors_json__WEBPACK_IMPORTED_MODULE_1__.filter((item) => item.main_project === this.main_project);
        (_a = this.registerForm.get('main_sector')) === null || _a === void 0 ? void 0 : _a.setValue('');
    }
    /**
     * Mở modal chọn mã quốc gia
     */
    openSearchCountryCode() {
        this.functionService.openSearchCountryCode().then((data) => {
            var _a, _b, _c;
            this.countryCode = data.code;
            this.callingCode = data.callingCode;
            this.formattedPhone = this.functionService.getFormattedPhoneNumber(this.registerForm.value.phone, this.countryCode);
            (_a = this.registerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.markAsTouched();
            (_b = this.registerForm.get('phone')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
            (_c = this.registerForm.get('phone')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
        }).catch((error) => {
            // console.error('Error opening country code search:', error);
        });
    }
    /**
     * Format số điện thoại khi nhập và set vào form
     * @param event Sự kiện khi nhập số điện thoại
     */
    formatPhoneNumber(event) {
        var _a;
        // Lấy số điện thoại đã format
        const input = event.target.value;
        this.formattedPhone = this.functionService.getFormattedPhoneNumber(input, this.countryCode);
        // Cập nhật vào form
        (_a = this.registerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.setValue(this.formattedPhone, { emitEvent: false });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQueryDealer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_4__.FunctionService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 80, vars: 64, consts: [[1, "register"], ["size", "12", 1, "register-form"], [3, "formGroup", "ngSubmit"], ["mode", "ios", "lines", "none", 1, "register-form-item", "ion-no-padding", 3, "ngClass"], ["src", "assets/icon/login/username.svg"], ["mode", "ios", "formControlName", "email", "clearInput", "", "inputmode", "email", "type", "email", 3, "placeholder", "ionChange"], [1, "ion-align-items-center"], [1, "ion-no-padding"], ["src", "assets/icon/login/password.svg"], ["mode", "ios", "formControlName", "password", "clearOnEdit", "false", 3, "placeholder", "type"], ["slot", "end", 1, "ion-no-margin", 3, "name", "click"], ["size", "auto", 1, "ion-no-padding"], ["nz-tooltip", "", "name", "alert-circle-outline", 1, "ion-no-margin", 2, "font-size", "1.5rem", "position", "absolute", "top", "50%", "transform", "translateY(-50%) translateX(4px)", 3, "nzTooltipTitle"], ["mode", "ios", "lines", "none", 1, "register-form-item", "ion-no-padding"], ["src", "assets/icon/login/business.svg"], ["mode", "ios", "formControlName", "company", "clearInput", "", "type", "text", 3, "placeholder"], ["src", "assets/icon/login/name.svg"], ["mode", "ios", "formControlName", "name", "clearInput", "", "type", "text", 3, "placeholder"], ["src", "assets/icon/login/address.svg"], ["mode", "ios", "formControlName", "address", "clearInput", "", "type", "text", 3, "placeholder"], ["mode", "ios", "lines", "none", 1, "register-form-item", "ion-no-padding", 2, "cursor", "pointer", 3, "ngClass", "click"], ["src", " assets/icon/login/phone.svg"], ["color", "vh-green"], ["mode", "ios", "clearInput", "", "inputmode", "numeric", "formControlName", "phone", "type", "tel", 3, "value", "placeholder", "click", "ionChange"], ["src", "assets/icon/login/dealer_code.svg"], ["mode", "ios", "formControlName", "dealerCode", "clearInput", "", "type", "text", 3, "placeholder"], ["mode", "ios", "lines", "none", 1, "ion-no-padding"], ["color", "vh-black"], [1, "tab"], [3, "ngClass", "click"], [1, "container-main-sector"], ["class", "item-main-sector", 4, "ngFor", "ngForOf"], ["mode", "md", "type", "submit", "fill", "solid", "expand", "full", "shape", "round", 1, "register-form-register", 3, "disabled"], ["nz-icon", "", "nzType", "loading", "nzTheme", "outline", 4, "ngIf"], ["size", "12", 1, "register-nav"], [3, "routerLink"], ["id", "recaptcha-container", 2, "display", "none"], ["nzTitle", "Nh\u1EADp m\u00E3 OTP", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk", "nzAfterOpen"], [4, "nzModalContent"], [4, "nzModalFooter"], ["class", "loading", 4, "ngIf"], [1, "item-main-sector"], ["type", "radio", "name", "main_sector", "formControlName", "main_sector", 3, "id", "value"], [3, "for"], ["nz-icon", "", "nzType", "loading", "nzTheme", "outline"], [1, "otp"], ["type", "text", "id", "1", "name", "otp1", "maxlength", "1", "size", "1", 1, "input-otp", 3, "keyup"], ["type", "text", "id", "2", "name", "otp2", "maxlength", "1", "size", "1", 1, "input-otp", 3, "keyup"], ["type", "text", "id", "3", "name", "otp3", "maxlength", "1", "size", "1", 1, "input-otp", 3, "keyup"], ["type", "text", "id", "4", "name", "otp4", "maxlength", "1", "size", "1", 1, "input-otp", 3, "keyup"], ["type", "text", "id", "5", "name", "otp5", "maxlength", "1", "size", "1", 1, "input-otp", 3, "keyup"], ["type", "text", "id", "6", "name", "otp6", "maxlength", "1", "size", "1", 1, "input-otp"], ["mode", "md", "fill", "solid", "expand", "full", "shape", "round", 1, "register-form-register", 3, "click"], [1, "loading"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() { return ctx.tryRegister(ctx.registerForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function SignupComponent_Template_ion_input_ionChange_8_listener() { return ctx.dupplicate_email = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignupComponent_Template_ion_icon_click_17_listener() { return ctx._SHOW_PASS = !ctx._SHOW_PASS; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "ion-input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ion-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "ion-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignupComponent_Template_ion_item_click_36_listener() { return ctx.openSearchCountryCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "ion-input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignupComponent_Template_ion_input_click_42_listener($event) { return $event.stopPropagation(); })("ionChange", function SignupComponent_Template_ion_input_ionChange_42_listener($event) { return ctx.formatPhoneNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "ion-input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "ion-label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_54_listener($event) { return ctx.changeMainSector($event, "sales"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_58_listener($event) { return ctx.changeMainSector($event, "cafe"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, SignupComponent_div_63_Template, 6, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ion-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, SignupComponent_span_65_Template, 1, 0, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-col", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "nz-modal", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function SignupComponent_Template_nz_modal_nzVisibleChange_76_listener($event) { return ctx.isVisibleOTP = $event; })("nzOnCancel", function SignupComponent_Template_nz_modal_nzOnCancel_76_listener() { return ctx.isVisibleOTP = false; })("nzOnOk", function SignupComponent_Template_nz_modal_nzOnOk_76_listener() { return ctx.handleOk(); })("nzAfterOpen", function SignupComponent_Template_nz_modal_nzAfterOpen_76_listener() { return ctx.hideLoadingWhenOpenModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, SignupComponent_ng_container_77_Template, 13, 5, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, SignupComponent_ng_container_78_Template, 1, 0, "ng-container", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, SignupComponent_div_79_Template, 2, 0, "div", 40);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.dupplicate_email ? "register-form-item-red" : "register-form-item-normal")("ngClass", ctx.registerForm.get("email").hasError("pattern") && (ctx.registerForm.get("email").dirty || ctx.registerForm.get("email").touched) ? "register-form-item-red" : "register-form-item-normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 31, "Email"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.registerForm.get("password").hasError("pattern") && (ctx.registerForm.get("password").dirty || ctx.registerForm.get("password").touched) ? "register-form-item-red" : "register-form-item-normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 33, "Password"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx._SHOW_PASS ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx._SHOW_PASS ? "eye-outline" : "eye-off-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 35, "Minimum 8 characters, including numbers and letters"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 37, "Business name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 39, "Full name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 41, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.registerForm.get("phone").hasError("invalidPhone") && (ctx.registerForm.get("phone").dirty || ctx.registerForm.get("phone").touched) ? "register-form-item-red" : "register-form-item-normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("+", ctx.callingCode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](43, 43, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.formattedPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 45, "Dealer code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 47, "Choose your business sector"), "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](59, _c0, ctx.main_project === "sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 49, "Commerce"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](61, _c0, ctx.main_project === "cafe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 51, "F&B"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.main_sectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.registerForm.invalid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](67, 53, "Register"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](71, 55, "You have an account?"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](63, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](74, 57, "Log in"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzVisible", ctx.isVisibleOTP);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkDelegate, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalFooterDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["@charset \"UTF-8\";\n.register[_ngcontent-%COMP%] {\n  max-width: 490px;\n  margin: 0 auto;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 16px 0;\n}\n.register-form[_ngcontent-%COMP%] {\n  padding: 0 24px;\n}\n.register-form-item[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --inner-padding-end: 0px;\n  --background: transparent;\n  border: 1px var(--ion-color-vh-gray) solid;\n  border-radius: 64px;\n  margin: 8px 0;\n}\n.register-form-item-red[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-red);\n}\n.register-form-item-red[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red);\n}\n.register-form-item-normal[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-gray);\n}\n.register-form-item-normal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n}\n.register-form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --color: var(--ion-color-vh-gray);\n  display: flex;\n  align-items: flex-end;\n}\n.register-form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  padding-right: 4px;\n}\n.register-form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.register-form-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  --padding-end: 0;\n}\n.register-form-fopass[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.register-form-fopass-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 0.8rem;\n}\n.register-form-register[_ngcontent-%COMP%] {\n  text-transform: inherit;\n  height: 48px;\n  font-size: 1rem;\n  margin-top: 4%;\n}\n.register[_ngcontent-%COMP%]   .register-nav[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.register[_ngcontent-%COMP%]   .register-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var --ion-color-vh-green;\n  font-weight: bold;\n}\n.input-otp[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin-right: 10px;\n  background-color: #fff;\n  color: #000;\n  font-weight: bold;\n  width: 60px;\n  text-align: center;\n}\n.input-otp[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #6d9eeb;\n  box-shadow: 0 0 10px #6d9eeb;\n  background-color: #f5faff;\n}\n.otp[_ngcontent-%COMP%] {\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #cbcbcb;\n  opacity: 0.3;\n  z-index: 10;\n  color: black;\n  display: flex;\n  align-items: center;\n  font-size: 3rem;\n  justify-content: center;\n}\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: white;\n  padding: 16px;\n  border-radius: 15px;\n}\n.tab[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n}\n.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--ion-color-vh-green) !important;\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n.tab[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--ion-color-vh-green-lighter);\n  color: #ffffff;\n}\n.tab[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: #ffffff;\n}\n.container-main-sector[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 8px;\n  gap: 8px;\n  margin: 10px 0;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 0 8px;\n}\n.container-main-sector[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.container-main-sector[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--ion-color-vh-green);\n  border-radius: 10px;\n}\n.container-main-sector[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.item-main-sector[_ngcontent-%COMP%] {\n  height: 60px;\n}\n.item-main-sector[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.item-main-sector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n  border: 2px solid var(--ion-color-vh-green);\n  padding: 8px;\n  text-align: center;\n  box-shadow: 0px 3px 10px -2px rgba(161, 170, 166, 0.5);\n  position: relative;\n  font-size: 13px;\n  cursor: pointer;\n}\n.item-main-sector[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green);\n  color: #ffffff;\n}\n.item-main-sector[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  content: \"\u2713\";\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 1px;\n  padding-left: 13px;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 13px;\n  color: #fff;\n  background-color: var(--ion-color-vh-green-lighter);\n  clip-path: polygon(0 0, 100% 100%, 100% 0);\n  top: -2px;\n  right: -2px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFBUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFFWjtBQUFZO0VBQ0kscUNBQUE7QUFFaEI7QUFBZ0I7RUFDSSw4QkFBQTtBQUVwQjtBQUVZO0VBQ0ksc0NBQUE7QUFBaEI7QUFFZ0I7RUFDSSwrQkFBQTtBQUFwQjtBQUlZO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFGaEI7QUFJZ0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRnBCO0FBS2dCO0VBQ0ksaUJBQUE7QUFIcEI7QUFPWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUxoQjtBQVNRO0VBQ0ksZUFBQTtBQVBaO0FBU1k7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FBUGhCO0FBV1E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVRaO0FBYUk7RUFDSSxrQkFBQTtBQVhSO0FBYVE7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FBWFo7QUFnQkE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZ0JBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQWJKO0FBZ0JBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBYko7QUFnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBYko7QUFlSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBYlI7QUFpQkE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBZEo7QUFpQkE7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZEo7QUFpQkE7RUFDSSxtREFBQTtFQUNBLGNBQUE7QUFkSjtBQWlCQTtFQUNJLDJDQUFBO0VBQ0EsY0FBQTtBQWRKO0FBaUJBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFkSjtBQWlCQTtFQUNJLFVBQUE7QUFkSjtBQWlCQTtFQUNJLHFDQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWlCQTtFQUNJLG1CQUFBO0FBZEo7QUFpQkE7RUFDSSxZQUFBO0FBZEo7QUFnQkk7RUFDSSxhQUFBO0FBZFI7QUFpQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBZlI7QUFrQkk7RUFDSSxxQ0FBQTtFQUNBLGNBQUE7QUFoQlI7QUFrQlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCWiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucmVnaXN0ZXIge1xuICBtYXgtd2lkdGg6IDQ5MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDA7XG59XG4ucmVnaXN0ZXItZm9ybSB7XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cbi5yZWdpc3Rlci1mb3JtLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNjRweDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5yZWdpc3Rlci1mb3JtLWl0ZW0tcmVkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtcmVkKTtcbn1cbi5yZWdpc3Rlci1mb3JtLWl0ZW0tcmVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1yZWQpO1xufVxuLnJlZ2lzdGVyLWZvcm0taXRlbS1ub3JtYWwge1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcbn1cbi5yZWdpc3Rlci1mb3JtLWl0ZW0tbm9ybWFsIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcbn1cbi5yZWdpc3Rlci1mb3JtLWl0ZW0gaW9uLWxhYmVsIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4ucmVnaXN0ZXItZm9ybS1pdGVtIGlvbi1sYWJlbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4ucmVnaXN0ZXItZm9ybS1pdGVtIGlvbi1sYWJlbCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnJlZ2lzdGVyLWZvcm0taXRlbSBpb24taW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG4ucmVnaXN0ZXItZm9ybS1mb3Bhc3Mge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4ucmVnaXN0ZXItZm9ybS1mb3Bhc3MtYnRuIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ucmVnaXN0ZXItZm9ybS1yZWdpc3RlciB7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLW5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RlciAucmVnaXN0ZXItbmF2IGEge1xuICBjb2xvcjogdmFyIC0taW9uLWNvbG9yLXZoLWdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlucHV0LW90cCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1vdHA6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICM2ZDllZWI7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM2ZDllZWI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWZhZmY7XG59XG5cbi5vdHAge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYjtcbiAgb3BhY2l0eTogMC4zO1xuICB6LWluZGV4OiAxMDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvYWRpbmcgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4udGFiIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWIgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi50YWIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuLWxpZ2h0ZXIpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRhYiBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb250YWluZXItbWFpbi1zZWN0b3Ige1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLmNvbnRhaW5lci1tYWluLXNlY3Rvcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xufVxuXG4uY29udGFpbmVyLW1haW4tc2VjdG9yOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250YWluZXItbWFpbi1zZWN0b3I6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLml0ZW0tbWFpbi1zZWN0b3Ige1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uaXRlbS1tYWluLXNlY3RvciBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaXRlbS1tYWluLXNlY3RvciBsYWJlbCB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IC0ycHggcmdiYSgxNjEsIDE3MCwgMTY2LCAwLjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW0tbWFpbi1zZWN0b3IgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaXRlbS1tYWluLXNlY3RvciBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCLinJNcIjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuLWxpZ2h0ZXIpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDEwMCUsIDEwMCUgMCk7XG4gIHRvcDogLTJweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIHotaW5kZXg6IDk5OTtcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map