"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_affiliater_affiliater_module_ts"],{

/***/ 63695:
/*!****************************************************!*\
  !*** ./src/app/affiliater/affiliater.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffiliaterComponent": () => (/* binding */ AffiliaterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);











function AffiliaterComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffiliaterComponent_div_0_ng_template_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.passwordVisible = !ctx_r3.passwordVisible; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r2.passwordVisible ? "eye-invisible" : "eye");
} }
function AffiliaterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AffiliaterComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-input-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AffiliaterComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AffiliaterComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AffiliaterComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0110\u0103ng nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSuffix", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r0.passwordVisible ? "text" : "password")("ngModel", ctx_r0.password);
} }
class AffiliaterComponent {
    constructor(vhComponent, router, vhQuerySales, vhAuth) {
        this.vhComponent = vhComponent;
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
        this.isloaded = false;
        this.passwordVisible = false;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
        // kiểm tra trạng thái đăng nhập
        this.vhAuth.onAuthStateChanged_Sales365_byAffiliater()
            .then((user) => {
            this.isloaded = true;
            console.log('onAuthStateChanged_Sales365_byAffiliater', user);
            this.stop();
            if (user)
                this.router.navigate(['/affiliater/dashboard/overviews']); // nếu có user thì vào trang quản trị
        }, (error) => {
            this.isloaded = true;
            this.stop();
            console.log('error', error);
        });
    }
    /**
     * tắt hoạt ảnh động khi mở app
     * @example this.animationCreated($event)
     */
    stop() {
        if (document.querySelector('#lottie-splash'))
            document.getElementById("lottie-splash").remove();
    }
    login() {
        this.vhComponent.showLoading('', 'transparent-loading').then(() => {
            if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(this.email)) {
                this.vhAuth.signInWithEmailAndPassword_Sales365_byAffiliater(this.email, this.password)
                    .then((response) => {
                    console.log(response);
                    this.router.navigate(['/affiliater/dashboard/overviews']);
                    this.vhComponent.hideLoading(0);
                }, (error) => {
                    console.error(error);
                    this.vhComponent.alertMessageDesktop('error', 'Có lỗi vui lòng reload lại trang');
                })
                    .finally(() => this.vhComponent.hideLoading(0));
            }
            else {
                this.vhComponent.hideLoading(0);
                this.vhComponent.alertMessageDesktop('error', 'Email không tồn tại vui lòng thử lại');
            }
        });
    }
    checkKey(event) {
        if (event.keyCode == 13) {
            this.login();
        }
    }
}
AffiliaterComponent.ɵfac = function AffiliaterComponent_Factory(t) { return new (t || AffiliaterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAuth)); };
AffiliaterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AffiliaterComponent, selectors: [["app-affiliater"]], decls: 1, vars: 1, consts: [["class", "text-center login", 4, "ngIf"], [1, "text-center", "login"], [1, "form-signin"], [2, "padding-bottom", "16px"], ["src", "assets/img/logo-sales365.png", "alt", "", "width", "180", "height", "100", 1, "mb-4", 2, "margin-left", "20%"], [1, "form-floating"], ["nz-input", "", "type", "email", "id", "floatingInput", "placeholder", "Email", 1, "form-control", "shadow-none", 3, "ngModel", "ngModelChange"], [3, "nzSuffix"], ["nz-input", "", "placeholder", "input password", 3, "type", "ngModel", "ngModelChange"], ["suffixTemplate", ""], ["nz-button", "", 1, "shadow-none", "w-100", "btn", "btn-lg", 3, "click"], ["nz-icon", "", 1, "ant-input-password-icon", 3, "nzType", "click"]], template: function AffiliaterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AffiliaterComponent_div_0_Template, 13, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isloaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective], styles: [".disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.login[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  height: 100vh;\n}\n\n.login[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #00a859;\n  width: 100%;\n}\n\n.form-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 350px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-floating[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-floating[_ngcontent-%COMP%]:focus-within {\n  z-index: 2;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.block-list[_ngcontent-%COMP%]     .ant-menu-item-group-list .ant-menu-submenu-title {\n  padding: 0 16px !important;\n}\n\n.no-objects[_ngcontent-%COMP%]     .ant-menu-submenu-arrow {\n  opacity: 0 !important;\n}\n\n.list-unstyled[_ngcontent-%COMP%]     .ant-menu-item-group-list .ant-menu-submenu-title {\n  margin: 0;\n  padding: 0 34px 0 24px;\n}\n\n.back-to-last-page[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 1rem 0 1rem 1rem;\n  font-size: 1rem;\n  color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  grid-gap: 0.25rem;\n  gap: 0.25rem;\n}\n\n.back-to-last-page[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFmZmlsaWF0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBR0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQURKOztBQUdJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQURSOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtBQUZKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBRko7O0FBS0E7RUFFSSx5QkFBQTtFQUNBLDBCQUFBO0FBSEo7O0FBTUE7RUFDSSxvQkFBQTtBQUhKOztBQU1BO0VBQ0ksMEJBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0FBSEo7O0FBTUE7RUFDSSxTQUFBO0VBQ0Esc0JBQUE7QUFISjs7QUFPQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFBQSxZQUFBO0FBSko7O0FBT0E7RUFDSSwwQkFBQTtBQUpKIiwiZmlsZSI6ImFmZmlsaWF0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhODU5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZvcm0tZmxvYXRpbmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1mbG9hdGluZzpmb2N1cy13aXRoaW4ge1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5ibG9jay1saXN0IDo6bmctZGVlcCAuYW50LW1lbnUtaXRlbS1ncm91cC1saXN0IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8tb2JqZWN0cyA6Om5nLWRlZXAgLmFudC1tZW51LXN1Ym1lbnUtYXJyb3cge1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC11bnN0eWxlZCA6Om5nLWRlZXAgLmFudC1tZW51LWl0ZW0tZ3JvdXAtbGlzdCAuYW50LW1lbnUtc3VibWVudS10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDM0cHggMCAyNHB4O1xyXG59XHJcblxyXG5cclxuLmJhY2stdG8tbGFzdC1wYWdlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5iYWNrLXRvLWxhc3QtcGFnZTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 42298:
/*!*************************************************!*\
  !*** ./src/app/affiliater/affiliater.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffiliaterModule": () => (/* binding */ AffiliaterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ng-zorro-ant.module */ 12760);
/* harmony import */ var _affiliater_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./affiliater.component */ 63695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _affiliater_component__WEBPACK_IMPORTED_MODULE_1__.AffiliaterComponent,
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_affiliater_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 59326)).then(m => m.DashboardModule)
    },
];
class AffiliaterModule {
}
AffiliaterModule.ɵfac = function AffiliaterModule_Factory(t) { return new (t || AffiliaterModule)(); };
AffiliaterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AffiliaterModule });
AffiliaterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AffiliaterModule, { declarations: [_affiliater_component__WEBPACK_IMPORTED_MODULE_1__.AffiliaterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_affiliater_affiliater_module_ts.js.map