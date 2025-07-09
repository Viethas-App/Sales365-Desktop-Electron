"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_developers_developers_module_ts"],{

/***/ 83914:
/*!***************************************************************!*\
  !*** ./src/app/sales/menu/developers/developers.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevelopersComponent": () => (/* binding */ DevelopersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DevelopersComponent {
    constructor() { }
    ngOnInit() {
    }
}
DevelopersComponent.ɵfac = function DevelopersComponent_Factory(t) { return new (t || DevelopersComponent)(); };
DevelopersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevelopersComponent, selectors: [["app-developers"]], decls: 2, vars: 0, template: function DevelopersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "developers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZlbG9wZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 16123:
/*!************************************************************!*\
  !*** ./src/app/sales/menu/developers/developers.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevelopersModule": () => (/* binding */ DevelopersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _developers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./developers.component */ 83914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _policy_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy/policy.component */ 57803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_developers_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./support/support.module */ 51569)).then(m => m.SupportModule)
    },
    {
        path: 'online-payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_developers_online-payment_component_qr-banking-modal_qr-banking-mo-348d80"), __webpack_require__.e("src_app_sales_menu_developers_online-payment_online-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./online-payment/online-payment.module */ 90191)).then(m => m.OnlinePaymentModule)
    },
    {
        path: 'history-payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_developers_history-payment_history-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./history-payment/history-payment.module */ 46217)).then(m => m.HistoryPaymentModule)
    },
    {
        path: 'manage-key',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dealer_material_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales_menu_developers_manage-keys_manage-keys_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manage-keys/manage-keys.module */ 68994)).then(m => m.ManageKeysModule)
    },
    {
        path: 'policy',
        component: _policy_policy_component__WEBPACK_IMPORTED_MODULE_2__.PolicyComponent
    },
];
class DevelopersModule {
}
DevelopersModule.ɵfac = function DevelopersModule_Factory(t) { return new (t || DevelopersModule)(); };
DevelopersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DevelopersModule });
DevelopersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DevelopersModule, { declarations: [_developers_component__WEBPACK_IMPORTED_MODULE_0__.DevelopersComponent,
        _policy_policy_component__WEBPACK_IMPORTED_MODULE_2__.PolicyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 57803:
/*!******************************************************************!*\
  !*** ./src/app/sales/menu/developers/policy/policy.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PolicyComponent": () => (/* binding */ PolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);


class PolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PolicyComponent.ɵfac = function PolicyComponent_Factory(t) { return new (t || PolicyComponent)(); };
PolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolicyComponent, selectors: [["app-policy"]], decls: 183, vars: 0, consts: [["align", "center"]], template: function PolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CH\u00CDNH S\u00C1CH S\u1EEC D\u1EE4NG PH\u1EA6N M\u1EC0M VIETHAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0 \u00A0 \u00A0Ch\u00E0o m\u1EEBng b\u1EA1n \u0111\u1EBFn v\u1EDBi\u00A0 h\u1EC7 th\u1ED1ng ph\u1EA7n m\u1EC1m, website, \u1EE9ng d\u1EE5ng c\u1EE7a C\u00F4ng ty TNHH Gi\u1EA3i ph\u00E1p C\u00F4ng ngh\u1EC7 Viethas (Viethas).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 \u00A0 \u00A0Vui l\u00F2ng \u0111\u1ECDc k\u1EF9 \u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng n\u00E0y tr\u01B0\u1EDBc khi truy c\u1EADp ho\u1EB7c s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5. B\u1EB1ng vi\u1EC7c s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 (nh\u01B0 \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a d\u01B0\u1EDBi \u0111\u00E2y), t\u1EA1o t\u00E0i kho\u1EA3n, truy c\u1EADp ho\u1EB7c t\u01B0\u01A1ng t\u00E1c v\u00E0o m\u00E1y ch\u1EE7, trang web, \u1EE9ng d\u1EE5ng c\u1EE7a Viethas ho\u1EB7c b\u1EA5t k\u1EF3 n\u1ED9i dung v\u00E0 b\u00E0i \u0111\u0103ng li\u00EAn k\u1EBFt n\u00E0o, ng\u01B0\u1EDDi d\u00F9ng \u0111\u00E3 \u0111\u1ED3ng \u00FD r\u1EB1ng b\u1EA1n \u0111\u00E3 \u0111\u1ECDc v\u00E0 hi\u1EC3u \u0111i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng cho b\u1EA1n, ch\u1EA5p nh\u1EADn kh\u00F4ng hu\u1EF7 ngang v\u00E0 \u0111\u1ED3ng \u00FD v\u1EDBi nh\u1EEFng \u0111i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5 n\u00E0y, bao g\u1ED3m nh\u1EEFng \u0111i\u1EC1u kho\u1EA3n, \u0111i\u1EC1u ki\u1EC7n v\u00E0 ch\u00EDnh s\u00E1ch b\u1ED5 sung, ch\u00EDnh s\u00E1ch b\u1EA3o m\u1EADt, h\u01B0\u1EDBng d\u1EABn, h\u1ED7 tr\u1EE3 \u0111\u01B0\u1EE3c d\u1EABn chi\u1EBFu theo \u0111\u00E2y v\u00E0/ho\u1EB7c c\u00F3 li\u00EAn quan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 \u00A0 \u00A0N\u1EBFu ng\u01B0\u1EDDi d\u00F9ng kh\u00F4ng \u0111\u1ED3ng \u00FD/\u0111\u1ED3ng \u00FD \u0110i\u1EC1u Kho\u1EA3n s\u1EED d\u1EE5ng, vui l\u00F2ng kh\u00F4ng s\u1EED d\u1EE5ng ho\u1EB7c ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng \u1EE9ng d\u1EE5ng ho\u1EB7c d\u1ECBch v\u1EE5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 \u00A0 \u00A0N\u1EBFu ng\u01B0\u1EDDi d\u00F9ng l\u00E0 ng\u01B0\u1EDDi ch\u01B0a th\u00E0nh ni\u00EAn ho\u1EB7c b\u1ECB gi\u1EDBi h\u1EA1n v\u1EC1 n\u0103ng l\u1EF1c h\u00E0nh vi d\u00E2n s\u1EF1 theo quy \u0111\u1ECBnh ph\u00E1p lu\u1EADt, ng\u01B0\u1EDDi d\u00F9ng c\u1EA7n nh\u1EADn \u0111\u01B0\u1EE3c s\u1EF1 h\u1ED7 tr\u1EE3 ho\u1EB7c ch\u1EA5p thu\u1EADn t\u1EEB cha m\u1EB9 ho\u1EB7c ng\u01B0\u1EDDi gi\u00E1m h\u1ED9 h\u1EE3p ph\u00E1p, t\u00F9y t\u1EEBng tr\u01B0\u1EDDng h\u1EE3p \u00E1p d\u1EE5ng, \u0111\u1EC3 ch\u1EA5p nh\u1EADn c\u00E1c \u0111i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5 n\u00E0y v\u00E0 ch\u1ECBu tr\u00E1ch nhi\u1EC7m \u0111\u1ED1i v\u1EDBi to\u00E0n b\u1ED9 qu\u00E1 tr\u00ECnh s\u1EED d\u1EE5ng t\u00E0i kho\u1EA3n ho\u1EB7c c\u00E1c d\u1ECBch v\u1EE5 m\u00E0 kh\u00F4ng ph\u00E2n bi\u1EC7t t\u00E0i kho\u1EA3n \u0111\u00E3 ho\u1EB7c s\u1EBD \u0111\u01B0\u1EE3c t\u1EA1o l\u1EADp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0 \u00A0 \u00A0Viethas c\u00F3 th\u1EC3 \u0111i\u1EC1u ch\u1EC9nh c\u00E1c \u0111i\u1EC1u kho\u1EA3n n\u00E0y t\u1EA1i b\u1EA5t c\u1EE9 th\u1EDDi \u0111i\u1EC3m n\u00E0o. C\u00E1c \u0111i\u1EC1u ch\u1EC9nh \u0111\u00F3 s\u1EBD \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt l\u00EAn website/\u1EE9ng d\u1EE5ng/fanpage Viethas. B\u1EA1n c\u00F3 tr\u00E1ch nhi\u1EC7m th\u01B0\u1EDDng xuy\u00EAn ki\u1EC3m tra \u0110i\u1EC1u Kho\u1EA3n S\u1EED D\u1EE5ng. Vi\u1EC7c ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 sau khi c\u00F3 b\u1EA5t k\u1EF3 thay \u0111\u1ED5i n\u00E0o, b\u1EA5t k\u1EC3 l\u00E0 b\u1EA1n \u0111\u00E3 xem x\u00E9t ch\u00FAng hay ch\u01B0a, s\u1EBD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\u1EDBi vi\u1EC7c b\u1EA1n \u0111\u00E3 ch\u1EA5p thu\u1EADn v\u00E0 \u0111\u1ED3ng \u00FD \u0111\u1ED1i v\u1EDBi nh\u1EEFng thay \u0111\u1ED5i \u0111\u00F3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0110i\u1EC1u 1. Ph\u1EA1m vi \u0111i\u1EC1u ch\u1EC9nh, \u0111\u1ED1i t\u01B0\u1EE3ng \u00E1p d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0 \u00A0 \u00A01. Quy \u0111\u1ECBnh v\u1EC1 vi\u1EC7c qu\u1EA3n l\u00FD v\u00E0 khai th\u00E1c h\u1EC7 th\u1ED1ng ph\u1EA7n m\u1EC1m c\u1EE7a C\u00F4ng ty TNHH Gi\u1EA3i ph\u00E1p C\u00F4ng ngh\u1EC7 Viethas (Viethas) bao g\u1ED3m:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0 \u00A0 \u00A0a) H\u1EC7 th\u1ED1ng m\u1EA1ng m\u00E1y t\u00EDnh, ph\u1EA7n m\u1EC1m, \u1EE9ng d\u1EE5ng, website Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0 \u00A0 \u00A0b) H\u1EC7 th\u1ED1ng m\u00E1y ch\u1EE7 ph\u1EE5c v\u1EE5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0 \u00A0 \u00A0c) C\u00E1c s\u1EA3n ph\u1EA9m c\u1EE7a Viethas, phi\u00EAn b\u1EA3n ch\u00EDnh th\u1EE9c ch\u1EA1y tr\u00EAn m\u00E1y ch\u1EE7 c\u1EE7a Viethas d\u01B0\u1EDBi t\u00EAn mi\u1EC1n ch\u00EDnh th\u1EE9c l\u00E0 https://viethas.com v\u00E0 \u1EE9ng d\u1EE5ng Viethas tr\u00EAn h\u1EC7 \u0111i\u1EC1u h\u00E0nh Android v\u00E0 iOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0 \u00A0 \u00A02. Quy \u0111\u1ECBnh \u0111\u01B0\u1EE3c \u00E1p d\u1EE5ng cho t\u1EA5t c\u1EA3 c\u00E1c c\u00E1n b\u1ED9 nh\u00E2n vi\u00EAn, kh\u00E1ch h\u00E0ng, nh\u00E0 cung c\u1EA5p, \u0111\u1ED1i t\u00E1c, ng\u01B0\u1EDDi d\u00F9ng tham gia qu\u1EA3n l\u00FD v\u00E0 khai th\u00E1c s\u1EED d\u1EE5ng h\u1EC7 th\u1ED1ng ph\u1EA7n m\u1EC1m Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0 \u00A0 \u00A03. B\u1EA5t c\u1EE9 s\u1EF1 vi ph\u1EA1m n\u00E0o c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas \u0111\u1ED1i v\u1EDBi c\u00E1c \u0111i\u1EC1u kho\u1EA3n v\u00E0 \u0111i\u1EC1u ki\u1EC7n n\u00E0y \u0111\u1EC1u c\u00F3 th\u1EC3 d\u1EABn \u0111\u1EBFn vi\u1EC7c b\u1ECB \u0111\u00ECnh ch\u1EC9 ho\u1EB7c k\u1EBFt th\u00FAc t\u00E0i kho\u1EA3n c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas, D\u1ECBch v\u1EE5 ho\u1EB7c nh\u1EEFng ho\u1EA1t \u0111\u1ED9ng \u0111\u01B0\u1EE3c ph\u00E9p kh\u00E1c theo \u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 c\u1EE7a Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0110i\u1EC1u 2. M\u1EE5c \u0111\u00EDch, y\u00EAu c\u1EA7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A0 \u00A0 \u00A0Nh\u1EB1m t\u0103ng c\u01B0\u1EDDng n\u0103ng l\u1EF1c qu\u1EA3n l\u00FD v\u00E0 s\u1EED d\u1EE5ng h\u1EC7 th\u1ED1ng ph\u1EA7n m\u1EC1m Viethas. Ph\u00E1t huy tinh th\u1EA7n tr\u00E1ch nhi\u1EC7m, quy\u1EC1n h\u1EA1n, ngh\u0129a v\u1EE5 c\u1EE7a c\u00E1c \u0111\u01A1n v\u1ECB v\u00E0 c\u00E1 nh\u00E2n khi tham gia qu\u1EA3n l\u00FD v\u00E0 s\u1EED d\u1EE5ng H\u1EC7 th\u1ED1ng ph\u1EA7n m\u1EC1m Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0110i\u1EC1u\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ". Gi\u1EA3i th\u00EDch thu\u1EADt ng\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0 \u00A0 \u00A01. Ch\u1EE7 t\u00E0i kho\u1EA3n: Ng\u01B0\u1EDDi \u0111\u0103ng k\u00FD ban \u0111\u1EA7u; ho\u1EB7c ng\u01B0\u1EDDi gi\u1EEF t\u00E0i kho\u1EA3n qu\u1EA3n tr\u1ECB; ho\u1EB7c ng\u01B0\u1EDDi truy c\u1EADp ph\u1EA7n m\u1EC1m b\u1EB1ng t\u00E0i kho\u1EA3n qu\u1EA3n tr\u1ECB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00A0 \u00A0 \u00A02. B\u00EAn th\u1EE9 ba: Kh\u00E1ch h\u00E0ng, \u0111\u1ED1i t\u00E1c, nh\u00E0 cung c\u1EA5p c\u1EE7a ng\u01B0\u1EDDi d\u00F9ng ho\u1EB7c c\u1EE7a Viethas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0 \u00A0 \u00A03. Ng\u01B0\u1EDDi d\u00F9ng: L\u00E0 Ng\u01B0\u1EDDi \u0111\u0103ng k\u00ED, t\u1EA1o t\u00E0i kho\u1EA3n, s\u1EED d\u1EE5ng c\u00E1c ph\u1EA7n m\u1EC1m c\u1EE7a Viethas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A0 \u00A0 \u00A04. D\u1ECBch v\u1EE5: D\u1ECBch v\u1EE5 cung c\u1EA5p Ph\u1EA7n m\u1EC1m qu\u1EA3n l\u00FD b\u00E1n h\u00E0ng Viethas, Ph\u1EA7n m\u1EC1m qu\u1EA3n l\u00FD nh\u00E0 h\u00E0ng caf\u00E9 Viethas ch\u1EA1y d\u01B0\u1EDBi t\u00EAn mi\u1EC1n https:\\\\viethas.com v\u00E0 tr\u00EAn \u1EE8ng d\u1EE5ng Viethas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00A0 \u00A0 \u00A05. \u1EE8ng d\u1EE5ng Viethas: \u1EE8ng d\u1EE5ng c\u1EE7a Viethas tr\u00EAn h\u1EC7 \u0111i\u1EC1u h\u00E0nh iOS v\u00E0 Android phi\u00EAn b\u1EA3n ch\u00EDnh th\u1EE9c \u0111\u01B0\u1EE3c t\u1EA3i tr\u1EF1c ti\u1EBFp t\u1EEB Google Play ho\u1EB7c App Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A0 \u00A0 \u00A06. D\u1EEF li\u1EC7u Ng\u01B0\u1EDDi d\u00F9ng: D\u1EEF li\u1EC7u d\u01B0\u1EDBi d\u1EA1ng \u0111i\u1EC7n t\u1EED \u0111\u01B0\u1EE3c l\u01B0u tr\u1EEF tr\u00EAn t\u00E0i kho\u1EA3n c\u1EEDa h\u00E0ng Ng\u01B0\u1EDDi d\u00F9ng \u0111\u01B0\u1EE3c gi\u1EDBi h\u1EA1n truy c\u1EADp b\u1EB1ng t\u00E0i kho\u1EA3n do ch\u1EE7 t\u00E0i kho\u1EA3n thi\u1EBFt l\u1EADp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0110i\u1EC1u\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "4.\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Quy \u0111\u1ECBnh chung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0 \u00A0 \u00A0Vi\u1EC7c Ng\u01B0\u1EDDi d\u00F9ng Viethas l\u1EF1a ch\u1ECDn s\u1EED d\u1EE5ng c\u00E1c Website Viethas/\u1EE8ng d\u1EE5ng Viethas \u0111\u1ED3ng ngh\u0129a v\u1EDBi vi\u1EC7c Ng\u01B0\u1EDDi d\u00F9ng \u00A0 \u00A0 \u00A0Viethas ch\u1EA5p thu\u1EADn tu\u00E2n th\u1EE7 c\u00E1c \u0111i\u1EC1u kho\u1EA3n, ch\u00EDnh s\u00E1ch, th\u1ECFa thu\u1EADn s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 \u0111\u00E3 \u0111\u01B0\u1EE3c c\u00F4ng b\u1ED1 tr\u00EAn Website Viethas/\u1EE8ng d\u1EE5ng Viethas. Vi\u1EC7c ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 sau khi c\u00F3 b\u1EA5t k\u1EF3 thay \u0111\u1ED5i n\u00E0o, b\u1EA5t k\u1EC3 l\u00E0 Ng\u01B0\u1EDDi d\u00F9ng \u0111\u00E3 xem x\u00E9t ch\u00FAng hay ch\u01B0a, s\u1EBD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\u1EDBi vi\u1EC7c Ng\u01B0\u1EDDi d\u00F9ng \u0111\u00E3 ch\u1EA5p thu\u1EADn v\u00E0 \u0111\u1ED3ng \u00FD \u0111\u1ED1i v\u1EDBi nh\u1EEFng thay \u0111\u1ED5i \u0111\u00F3.. Ngo\u00E0i ra, khi s\u1EED d\u1EE5ng c\u00E1c D\u1ECBch v\u1EE5 c\u1EE5 th\u1EC3 c\u1EE7a Viethas, Ng\u01B0\u1EDDi d\u00F9ng Viethas ph\u1EA3i tu\u00E2n theo c\u00E1c \u0111i\u1EC1u kho\u1EA3n v\u00E0 \u0111i\u1EC1u ki\u1EC7n ri\u00EAng \u00E1p d\u1EE5ng cho t\u1EEBng D\u1ECBch v\u1EE5 \u0111\u00F3 theo t\u1EEBng th\u1EDDi \u0111i\u1EC3m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00A0 \u00A0 \u00A0Tr\u01B0\u1EDDng h\u1EE3p c\u00F3 b\u1EA5t k\u1EF3 \u0111i\u1EC1u kho\u1EA3n n\u00E0o c\u1EE7a \u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng n\u00E0y h\u1EBFt hi\u1EC7u l\u1EF1c ho\u1EB7c kh\u00F4ng th\u1EC3 thi h\u00E0nh v\u00EC b\u1EA5t c\u1EE9 l\u00FD do g\u00EC s\u1EBD ch\u1EC9 \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn \u0111i\u1EC1u, kho\u1EA3n \u0111\u00E3 x\u00E1c \u0111\u1ECBnh h\u1EBFt hi\u1EC7u l\u1EF1c \u0111\u00F3 v\u00E0 kh\u00F4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn hi\u1EC7u l\u1EF1c c\u1EE7a c\u00E1c \u0111i\u1EC1u kho\u1EA3n c\u00F2n l\u1EA1i. N\u1EBFu c\u00F3 s\u1EF1 kh\u00E1c bi\u1EC7t gi\u1EEFa \u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng n\u00E0y v\u00E0 c\u00E1c Th\u1ECFa thu\u1EADn s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 kh\u00E1c c\u1EE7a Viethas th\u00EC quy \u0111\u1ECBnh n\u00E0o m\u1EDBi nh\u1EA5t s\u1EBD c\u00F3 hi\u1EC7u l\u1EF1c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u00A0 \u00A0 \u00A0Ng\u01B0\u1EDDi d\u00F9ng Viethas t\u1EF1 \u0111a\u0309m ba\u0309o r\u0103\u0300ng thi\u00EA\u0301t bi\u0323 \u01A1\u0309 trong ti\u0300nh tra\u0323ng k\u00EA\u0301t n\u00F4\u0301i ma\u0323ng khi c\u00E2\u0300n truy c\u00E2\u0323p d\u01B0\u0303 li\u00EA\u0323u kinh doanh m\u01A1\u0301i nh\u00E2\u0301t.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u00A0 \u00A0 \u00A0Ng\u01B0\u1EDDi d\u00F9ng Viethas ph\u1EA3i tu\u00E2n th\u1EE7 c\u00E1c \u0111i\u1EC1u kho\u1EA3n c\u1EE7a Apple App Store v\u00E0 Google Play v\u1EC1 d\u1ECBch v\u1EE5, bao g\u1ED3m c\u1EA3 c\u00E1c quy t\u1EAFc s\u1EED d\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0110i\u1EC1u 5. S\u1EED d\u1EE5ng, t\u1EA1m ng\u1EEBng, ch\u1EA5m d\u1EE9t cung c\u1EA5p d\u1ECBch v\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u00A0 \u00A0 \u00A01. S\u1EED d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u00A0 \u00A0 \u00A0a) Ng\u01B0\u1EDDi d\u00F9ng Viethas s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 c\u1EE7a Viethas v\u00E0o c\u00F4ng vi\u1EC7c kinh doanh h\u00E0ng h\u00F3a, d\u1ECBch v\u1EE5 trong khu\u00F4n kh\u1ED5 cho ph\u00E9p c\u1EE7a ph\u00E1p lu\u1EADt hi\u1EC7n h\u00E0nh va\u0300 thu\u1EA7n phong m\u1EF9 t\u1EE5c c\u1EE7a Vi\u1EC7t Nam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u00A0 \u00A0 \u00A0b) Viethas kh\u00F4ng can thi\u1EC7p v\u00E0 kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m \u0111\u1ED1i v\u1EDBi b\u1EA5t k\u00EC n\u1ED9i dung ho\u1EA1t \u0111\u1ED9ng b\u00E1n h\u00E0ng c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas nh\u01B0: Kh\u00E1ch h\u00E0ng c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas, h\u00E0ng h\u00F3a, ch\u1EA5t l\u01B0\u1EE3ng h\u00E0ng h\u00F3a m\u00E0 Ng\u01B0\u1EDDi d\u00F9ng Viethas \u0111ang kinh doanh\u2026c\u0169ng nh\u01B0 Viethas kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m \u0111\u1ED1i v\u1EDBi c\u00E1c khi\u1EBFu ki\u1EC7n n\u00E0o t\u1EEB Ng\u01B0\u1EDDi d\u00F9ng Viethas ho\u1EB7c B\u00EAn th\u1EE9 ba ph\u1EA3n \u00E1nh v\u1EC1 n\u1ED9i dung ho\u1EA1t \u0111\u1ED9ng b\u00E1n h\u00E0ng c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u00A0 \u00A0 \u00A02. Viethas c\u00F3 quy\u1EC1n y\u00EAu c\u1EA7u Ng\u01B0\u1EDDi d\u00F9ng Viethas cung c\u1EA5p th\u00F4ng tin \u0111\u1EC3 x\u00E1c minh v\u00E0/ho\u1EB7c th\u1EF1c hi\u1EC7n cam k\u1EBFt \u0111\u1EC3 c\u00F3 th\u1EC3 ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5. Tr\u01B0\u1EDDng h\u1EE3p nh\u1EADn th\u1EA5y s\u1EF1 vi\u1EC7c c\u00F3 t\u00EDnh ch\u1EA5t nghi\u00EAm tr\u1ECDng, Viethas c\u00F3 to\u00E0n quy\u1EC1n nh\u1EDD \u0111\u1EBFn s\u1EF1 can thi\u1EC7p c\u1EE7a c\u00E1c c\u01A1 quan nh\u00E0 n\u01B0\u1EDBc c\u00F3 th\u1EA9m quy\u1EC1n, c\u00E1c \u0111\u01A1n v\u1ECB c\u00F3 ch\u1EE9c n\u0103ng chuy\u00EAn m\u00F4n \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o quy\u1EC1n v\u00E0 l\u1EE3i \u00EDch h\u1EE3p ph\u00E1p cho Viethas c\u0169ng nh\u01B0 c\u1ED9ng \u0111\u1ED3ng. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00A0 \u00A0 \u00A0Viethas c\u00F3 quy\u1EC1n t\u1EA1m ng\u1EEBng ho\u1EB7c ch\u1EA5m d\u1EE9t ho\u00E0n to\u00E0n vi\u1EC7c cung c\u1EA5p d\u1ECBch v\u1EE5 m\u00E0 kh\u00F4ng ho\u00E0n l\u1EA1i b\u1EA5t k\u1EF3 m\u1ED9t chi ph\u00ED n\u00E0o cho Ng\u01B0\u1EDDi d\u00F9ng Viethas trong c\u00E1c tr\u01B0\u1EDDng h\u1EE3p sau:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u00A0 \u00A0 \u00A0a) Ng\u01B0\u1EDDi d\u00F9ng Viethas s\u1EED d\u1EE5ng ph\u1EA7n m\u1EC1m Viethas/ \u1EE8ng d\u1EE5ng Viethas v\u00E0o b\u1EA5t k\u1EF3 m\u1EE5c \u0111\u00EDch/h\u00ECnh th\u1EE9c n\u00E0o vi ph\u1EA1m \u00A0 \u00A0 \u00A0ph\u00E1p lu\u1EADt Vi\u1EC7t Nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u00A0 \u00A0 \u00A0b) C\u00F3 b\u00E1o c\u00E1o, khi\u1EBFu n\u1EA1i t\u1EEB B\u00EAn th\u1EE9 ba g\u1EEDi v\u1EC1 Viethas ph\u1EA3n \u00E1nh ti\u00EAu c\u1EF1c ho\u1EB7c c\u00F3 d\u1EA5u hi\u1EC7u vi ph\u1EA1m ph\u00E1p lu\u1EADt v\u1EC1 ho\u1EA1t \u0111\u1ED9ng kinh doanh c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas, ho\u1EB7c b\u1EA5t k\u00EC ho\u1EA1t \u0111\u1ED9ng n\u00E0o c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas khi s\u1EED d\u1EE5ng ph\u1EA7n m\u1EC1m, website Viethas/\u1EE8ng d\u1EE5ng Viethas m\u00E0 Viethas nh\u1EADn th\u1EA5y c\u00F3 kh\u1EA3 n\u0103ng g\u00E2y \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn s\u1EF1 an to\u00E0n c\u1EE7a Viethas, quy\u1EC1n, l\u1EE3i \u00EDch h\u1EE3p ph\u00E1p c\u1EE7a c\u1ED9ng \u0111\u1ED3ng, c\u01A1 quan, t\u1ED5 ch\u1EE9c, c\u00E1 nh\u00E2n kh\u00E1c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u00A0 \u00A0 \u00A0c) Ng\u01B0\u1EDDi d\u00F9ng Viethas s\u1EED d\u1EE5ng c\u00E1c ch\u01B0\u01A1ng tr\u00ECnh c\u00F3 kh\u1EA3 n\u0103ng l\u00E0m t\u1EAFc ngh\u1EBDn ho\u1EB7c \u0111\u00ECnh tr\u1EC7 h\u1EC7 th\u1ED1ng, nh\u01B0 g\u00E2y c\u1EA1n ki\u1EC7t t\u00E0i nguy\u00EAn h\u1EC7 th\u1ED1ng, l\u00E0m qu\u00E1 t\u1EA3i b\u1ED9 vi x\u1EED l\u00FD v\u00E0 b\u1ED9 nh\u1EDB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u00A0 \u00A0 \u00A0d) Ng\u01B0\u1EDDi d\u00F9ng Viethas s\u1EED d\u1EE5ng website ho\u1EB7c t\u00E0i kho\u1EA3n c\u1EE7a m\u00ECnh \u0111\u1EC3 x\u00E2m nh\u1EADp tr\u00E1i ph\u00E9p v\u00E0o website kh\u00E1c ho\u1EB7c g\u00E2y \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn Ng\u01B0\u1EDDi d\u00F9ng Viethas kh\u00E1c c\u1EE7a Viethas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u00A0 \u00A0 \u00A0e) Ng\u01B0\u1EDDi d\u00F9ng Viethas b\u1ECB t\u1EA5n c\u00F4ng b\u1EDFi b\u00EAn th\u1EE9 ba, l\u00E0m \u1EA3nh h\u01B0\u1EDFng nghi\u00EAm tr\u1ECDng \u0111\u1EBFn h\u1EC7 th\u1ED1ng c\u1EE7a Viethas. Tr\u01B0\u1EDDng h\u1EE3p b\u1ECB t\u1EA5n c\u00F4ng Viethas s\u1EBD t\u1EA1m ng\u1EEBng d\u1ECBch v\u1EE5 c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas trong h\u1EC7 th\u1ED1ng, sau khi kh\u1EAFc ph\u1EE5c \u0111\u01B0\u1EE3c s\u1EF1 c\u1ED1 s\u1EBD kh\u00F4i ph\u1EE5c l\u1EA1i d\u1ECBch v\u1EE5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u00A0 \u00A0 \u00A0f) Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u00F3 nh\u1EEFng vi ph\u1EA1m kh\u00E1c m\u00E0 c\u00E1c c\u01A1 quan nh\u00E0 n\u01B0\u1EDBc c\u00F3 th\u1EA9m quy\u1EC1n y\u00EAu c\u1EA7u \u0111\u00F3ng website, ng\u1EEBng s\u1EED d\u1EE5ng ph\u1EA7n m\u1EC1m/\u1EE9ng d\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u00A0 \u00A0 \u00A0g) Ng\u01B0\u1EDDi d\u00F9ng Viethas kh\u00F4ng thanh to\u00E1n c\u00E1c chi ph\u00ED \u0111\u00FAng h\u1EA1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u00A0 \u00A0 \u00A0h) Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u00F3 h\u00E0nh vi l\u00E0m \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn uy t\u00EDn v\u00E0 th\u01B0\u01A1ng hi\u1EC7u c\u1EE7a Viethas tr\u00EAn c\u00E1c ph\u01B0\u01A1ng ti\u1EC7n th\u00F4ng tin \u0111\u1EA1i ch\u00FAng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u00A0 \u00A0 \u00A0i) Tr\u01B0\u1EDDng h\u1EE3p kh\u00E1c m\u00E0 Ph\u00E1p lu\u1EADt c\u00F3 quy \u0111\u1ECBnh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u0110i\u1EC1u 6. D\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt v\u1EDBi b\u00EAn th\u1EE9 ba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00A0 \u00A0 \u00A0Khi Ng\u01B0\u1EDDi d\u00F9ng Viethas s\u1EED d\u1EE5ng c\u00E1c d\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt v\u1EDBi B\u00EAn th\u1EE9 ba \u0111\u01B0\u1EE3c t\u00EDch h\u1EE3p tr\u00EAn h\u1EC7 th\u1ED1ng ph\u1EA7n m\u1EC1m nh\u01B0 s\u00E0n th\u01B0\u01A1ng m\u1EA1i \u0111i\u1EC7n t\u1EED Shopee, Lazada, Tiki, Sendo,... c\u00E1c \u0111\u01A1n v\u1ECB v\u1EADn chuy\u1EC3n nh\u01B0 Ahamove, Vi\u1EC7t Nam post, Viettel post, Giao h\u00E0ng nhanh, Giao h\u00E0ng ti\u1EBFt ki\u1EC7m\u2026c\u00E1c trang m\u1EA1ng x\u00E3 h\u1ED9i Facebook, Zalo\u2026 c\u00F3 ngh\u0129a l\u00E0 Ng\u01B0\u1EDDi d\u00F9ng Viethas \u0111\u00E3 hi\u1EC3u v\u00E0 \u0111\u1ED3ng \u00FD tu\u00E2n th\u1EE7 c\u00E1c \u0111i\u1EC1u kho\u1EA3n v\u00E0 \u0111i\u1EC1u ki\u1EC7n chung, ri\u00EAng \u00E1p d\u1EE5ng cho t\u1EEBng d\u1ECBch v\u1EE5. Vi\u1EC7c s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt n\u00E0y s\u1EBD ph\u1EE5 thu\u1ED9c v\u00E0o t\u1EEBng ch\u00EDnh s\u00E1ch c\u1EE7a B\u00EAn th\u1EE9 ba t\u1EA1i t\u1EEBng th\u1EDDi \u0111i\u1EC3m. Khi d\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt c\u1EE7a B\u00EAn th\u1EE9 ba x\u1EA3y ra c\u00E1c s\u1EF1 c\u1ED1 nh\u01B0 b\u1ECB gi\u00E1n \u0111o\u1EA1n, b\u1ECB ch\u1EA5m d\u1EE9t; Viethas s\u1EBD c\u1ED1 g\u1EAFng, n\u1ED7 l\u1EF1c t\u1ED1i \u0111a \u0111\u1EC3 h\u1ED7 tr\u1EE3 Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u00F3 tr\u1EA3i nghi\u1EC7m t\u1ED1t nh\u1EA5t nh\u01B0ng kh\u00F4ng \u0111\u1ED3ng ngh\u0129a l\u00E0 Viethas cam k\u1EBFt ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EDBi Ng\u01B0\u1EDDi d\u00F9ng Viethas v\u1EC1 nh\u1EEFng s\u1EF1 c\u1ED1 \u0111\u00E3 x\u1EA3y ra c\u1EE7a d\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt n\u00E0y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u00A0 \u00A0 \u00A0Khi s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt v\u1EDBi B\u00EAn th\u1EE9 ba, Ng\u01B0\u1EDDi d\u00F9ng Viethas hi\u1EC3u v\u00E0 \u0111\u1ED3ng \u00FD c\u00E1c \u0111i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng c\u1EE7a D\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt v\u00E0 \u0111\u1ED3ng \u00FD chia s\u1EBB c\u00E1c th\u00F4ng tin v\u00E0 d\u1EEF li\u1EC7u c\u1EA7n thi\u1EBFt \u0111\u1EC3 s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt. Website Viethas/\u1EE8ng d\u1EE5ng Viethas ch\u1EC9 chia s\u1EBB c\u00E1c th\u00F4ng tin v\u00E0 d\u1EEF li\u1EC7u \u0111\u00E3 \u0111\u01B0\u1EE3c Ng\u01B0\u1EDDi d\u00F9ng Viethas \u0111\u1ED3ng \u00FD chia s\u1EBB v\u00E0 c\u1EA7n thi\u1EBFt \u0111\u1EC3 B\u00EAn th\u1EE9 ba c\u00F3 th\u1EC3 cung c\u1EA5p D\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt. Ng\u01B0\u1EDDi d\u00F9ng Viethas \u0111\u01B0\u1EE3c khuy\u1EBFn kh\u00EDch tham kh\u1EA3o th\u00EAm c\u00E1c \u0111i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng c\u1EE7a D\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt v\u1EDBi B\u00EAn th\u1EE9 ba v\u1EC1 c\u00E1c th\u00F4ng tin v\u00E0 d\u1EEF li\u1EC7u \u0111\u01B0\u1EE3c chia s\u1EBB khi s\u1EED d\u1EE5ng D\u1ECBch v\u1EE5 li\u00EAn k\u1EBFt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0110i\u1EC1u 7. X\u1EED l\u00FD l\u1ED7i, s\u1EF1 c\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u00A0 \u00A0 \u00A0Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u00F3 tr\u00E1ch nhi\u1EC7m th\u00F4ng b\u00E1o ngay Viethas khi ph\u00E1t hi\u1EC7n l\u1ED7i/s\u1EF1 c\u1ED1, t\u00EDch c\u1EF1c ph\u1ED1i h\u1EE3p v\u1EDBi Viethas \u0111\u1EC3 Viethas c\u00F3 th\u1EC3 kh\u1EAFc ph\u1EE5c s\u1EDBm nh\u1EA5t v\u1EA5n \u0111\u1EC1 cho Ng\u01B0\u1EDDi d\u00F9ng Viethas. Trong tr\u01B0\u1EDDng h\u1EE3p s\u1EF1 c\u1ED1 li\u00EAn quan \u0111\u1EBFn B\u00EAn th\u1EE9 ba, Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u00F3 tr\u00E1ch nhi\u1EC7m ph\u1ED1i h\u1EE3p v\u1EDBi nh\u1EEFng b\u00EAn li\u00EAn quan \u0111\u1EC3 gi\u1EA3i quy\u1EBFt. Ng\u01B0\u1EDDi d\u00F9ng Viethas hi\u1EC3u v\u00E0 ch\u1EA5p nh\u1EADn r\u1EB1ng, trong m\u1ECDi tr\u01B0\u1EDDng h\u1EE3p, Viethas lu\u00F4n c\u1ED1 g\u1EAFng h\u1ED7 tr\u1EE3 v\u00E0 kh\u1EAFc ph\u1EE5c, tuy nhi\u00EAn Viethas s\u1EBD kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m tr\u01B0\u1EDBc nh\u1EEFng thi\u1EC7t h\u1EA1i ph\u00E1t sinh do l\u1ED7i Ng\u01B0\u1EDDi d\u00F9ng, l\u1ED7i do s\u1EF1 ch\u1EADm tr\u1EC5 kh\u00F4ng th\u00F4ng b\u00E1o ho\u1EB7c che gi\u1EA5u th\u00F4ng tin l\u1ED7i/s\u1EF1 c\u1ED1 c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u0110i\u1EC1u 8. Gi\u1EDBi h\u1EA1n tr\u00E1ch nhi\u1EC7m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u00A0 \u00A0 \u00A0Sau khi b\u00E0n giao c\u00E1c th\u00F4ng s\u1ED1 qu\u1EA3n tr\u1ECB d\u1ECBch v\u1EE5 cho ng\u01B0\u1EDDi d\u00F9ng, Viethas kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u00E0 kh\u00F4ng b\u1EA3o \u0111\u1EA3m v\u1EC1 t\u00EDnh ch\u00EDnh x\u00E1c v\u1EC1 nh\u1EEFng th\u00F4ng tin c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas tr\u00EAn ph\u1EA7n m\u1EC1m, website, \u1EE9ng d\u1EE5ng c\u1EE7a ng\u01B0\u1EDDi d\u00F9ng Viethas. \u0110\u1ED3ng th\u1EDDi, Viethas kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m ph\u00E1p l\u00FD v\u00E0 b\u1ED3i th\u01B0\u1EDDng cho ng\u01B0\u1EDDi d\u00F9ng Viethas v\u00E0 b\u00EAn th\u1EE9 ba \u0111\u1ED1i v\u1EDBi c\u00E1c thi\u1EC7t h\u1EA1i tr\u1EF1c ti\u1EBFp, gi\u00E1n ti\u1EBFp, v\u00F4 \u00FD, v\u00F4 h\u00ECnh, c\u00E1c thi\u1EC7t h\u1EA1i v\u1EC1 l\u1EE3i nhu\u1EADn, doanh thu, uy t\u00EDn ph\u00E1t sinh t\u1EEB vi\u1EC7c s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m, d\u1ECBch v\u1EE5 c\u1EE7a Viethas sau khi Viethas \u0111\u00E3 b\u00E0n giao cho Ng\u01B0\u1EDDi d\u00F9ng Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u00A0 \u00A0 \u00A0Viethas s\u1EBD kh\u00F4ng ch\u1ECBu b\u1EA5t k\u1EF3 tr\u00E1ch nhi\u1EC7m ho\u1EB7c tr\u00E1ch nhi\u1EC7m li\u00EAn \u0111\u1EDBi n\u00E0o \u0111\u1ED1i v\u1EDBi h\u1EADu qu\u1EA3 c\u1EE7a vi\u1EC7c truy c\u1EADp tr\u00E1i ph\u00E9p \u0111\u1EBFn m\u00E1y ch\u1EE7, Website Viethas/\u1EE8ng d\u1EE5ng Viethas; trang thi\u1EBFt b\u1ECB v\u00E0 d\u1EEF li\u1EC7u c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas ho\u1EB7c d\u1EEF li\u1EC7u c\u00E1 nh\u00E2n c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas v\u00EC tai n\u1EA1n, ph\u01B0\u01A1ng ti\u1EC7n b\u1EA5t h\u1EE3p ph\u00E1p, thi\u1EBFt b\u1ECB c\u1EE7a B\u00EAn th\u1EE9 ba, Ng\u01B0\u1EDDi d\u00F9ng \u0111\u1EC3 l\u1ED9 m\u1EADt kh\u1EA9u ph\u1EA7n m\u1EC1m Viethas/\u1EE9ng d\u1EF1ng Viethas v\u00E0 c\u00E1c nguy\u00EAn nh\u00E2n kh\u00E1c n\u1EB1m ngo\u00E0i s\u1EF1 ki\u1EC3m so\u00E1t c\u1EE7a Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u00A0 \u00A0 \u00A0Nh\u01B0 m\u1ED9t \u0111i\u1EC1u ki\u1EC7n khi s\u1EED d\u1EE5ng Website, \u1EE8ng d\u1EE5ng n\u00E0y, Ng\u01B0\u1EDDi d\u00F9ng Viethas \u0111\u1ED3ng \u00FD r\u1EB1ng Viethas, nh\u00E2n vi\u00EAn, c\u00E1c t\u1ED5 ch\u1EE9c th\u00E0nh vi\u00EAn, c\u1ED5 \u0111\u00F4ng, \u0111\u1EA1i l\u00FD, nh\u00E0 cung c\u1EA5p c\u1EE7a Viethas s\u1EBD kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EDBi B\u00EAn th\u1EE9 ba n\u00E0o v\u1EC1 c\u00E1c thi\u1EC7t h\u1EA1i v\u1EC1 l\u1EE3i nhu\u1EADn, c\u01A1 h\u1ED9i kinh doanh ho\u1EB7c thi\u1EC7t h\u1EA1i, chi ph\u00ED ph\u00E1t sinh tr\u1EF1c ti\u1EBFp hay gi\u00E1n ti\u1EBFp v\u00EC k\u1EBFt n\u1ED1i v\u1EDBi Website Viethas/\u1EE8ng d\u1EE5ng Viethas hay s\u1EED d\u1EE5ng c\u00E1c D\u1ECBch v\u1EE5 kh\u00E1c c\u1EE7a Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u00A0 \u00A0 \u00A0Viethas c\u0169ng s\u1EBD kh\u00F4ng ch\u1ECBu b\u1EA5t k\u1EF3 tr\u00E1ch nhi\u1EC7m n\u00E0o ho\u1EB7c tr\u00E1ch nhi\u1EC7m li\u00EAn \u0111\u1EDBi \u0111\u1ED1i v\u1EDBi ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m, d\u1ECBch v\u1EE5, th\u00F4ng tin c\u1EE7a c\u00E1c Website/ \u1EE8ng d\u1EE5ng c\u1EE7a B\u00EAn th\u1EE9 ba c\u00F3 li\u00EAn k\u1EBFt v\u1EDBi Website Viethas/\u1EE8ng d\u1EE5ng Viethas. Ngo\u00E0i ra, Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u0169ng hi\u1EC3u r\u1EB1ng, Viethas kh\u00F4ng c\u00F3 tr\u00E1ch nhi\u1EC7m v\u00E0 th\u1EA9m quy\u1EC1n x\u00E1c nh\u1EADn, ch\u1EE9ng nh\u1EADn th\u00F4ng tin v\u00E0 ch\u1EA5t l\u01B0\u1EE3ng d\u1ECBch v\u1EE5, s\u1EA3n ph\u1EA9m hay b\u1ED3i th\u01B0\u1EDDng c\u00E1c thi\u1EC7t h\u1EA1i li\u00EAn quan \u0111\u1EBFn vi\u1EC7c Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u00F3 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5, s\u1EA3n ph\u1EA9m \u0111\u01B0\u1EE3c qu\u1EA3ng c\u00E1o tr\u00EAn Website/ \u1EE8ng d\u1EE5ng c\u1EE7a B\u00EAn th\u1EE9 ba. Viethas khuy\u1EBFn ngh\u1ECB Ng\u01B0\u1EDDi d\u00F9ng Viethas n\u00EAn t\u00ECm hi\u1EC3u \u0111\u1ED1i t\u00E1c th\u1EADt k\u1EF9 c\u00E0ng tr\u01B0\u1EDBc khi x\u00FAc ti\u1EBFn h\u1EE3p t\u00E1c \u0111\u1EC3 tr\u00E1nh c\u00E1c thi\u1EC7t h\u1EA1i kh\u00F4ng mong mu\u1ED1n x\u1EA3y ra. Viethas kh\u00F4ng b\u1EA3o \u0111\u1EA3m c\u0169ng nh\u01B0 kh\u00F4ng ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EC1 k\u1EBFt qu\u1EA3 kinh doanh c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas sau khi s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u0110i\u1EC1u 9. \u0110\u1EA3m b\u1EA3o cung c\u1EA5p d\u1ECBch v\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u00A0 \u00A0 \u00A0Website Viethas/\u1EE8ng d\u1EE5ng Viethas v\u00E0 c\u00E1c t\u00EDnh n\u0103ng \u0111i k\u00E8m c\u1EE7a \u1EE8ng d\u1EE5ng \u0111\u01B0\u1EE3c cung c\u1EA5p tr\u00EAn c\u01A1 s\u1EDF \u201Cc\u00F3 th\u1EC3 th\u1EF1c hi\u1EC7n \u0111\u01B0\u1EE3c\u201D. Viethas s\u1EBD kh\u00F4ng b\u1EA3o \u0111\u1EA3m r\u1EB1ng \u1EE8ng d\u1EE5ng c\u1EE7a Viethas s\u1EBD lu\u00F4n lu\u00F4n s\u1EB5n s\u00E0ng, lu\u00F4n c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng, kh\u00F4ng bao gi\u1EDD b\u1ECB gi\u00E1n \u0111o\u1EA1n, \u0111\u00FAng th\u1EDDi gian, kh\u00F4ng c\u00F3 l\u1ED7i b\u1EDFi c\u00E1c s\u1EF1 c\u1ED1 b\u1EA5t kh\u1EA3 kh\u00E1ng nh\u01B0: Hacker, m\u1EA5t m\u1EA1ng Internet tr\u00EAn di\u1EC7n r\u1ED9ng\u2026. Tuy nhi\u00EAn, Viethas v\u00E0 c\u00E1c nh\u00E2n vi\u00EAn c\u1EE7a Viethas s\u1EBD cam k\u1EBFt c\u1ED1 g\u1EAFng trong m\u1ECDi \u0111i\u1EC1u ki\u1EC7n v\u00E0 l\u00E0m h\u1EBFt s\u1EE9c kh\u1EA3 n\u0103ng c\u00F3 th\u1EC3 \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o r\u1EB1ng Website v\u00E0 D\u1ECBch v\u1EE5 c\u1EE7a Viethas lu\u00F4n \u0111\u01B0\u1EE3c s\u1EB5n s\u00E0ng cho vi\u1EC7c s\u1EED d\u1EE5ng. Viethas cam k\u1EBFt n\u1ED7 l\u1EF1c kh\u1EAFc ph\u1EE5c s\u1EF1 gi\u00E1n \u0111o\u1EA1n v\u00E0 \u0111\u01B0a ra s\u1EF1 \u0111i\u1EC1u ch\u1EC9nh, s\u1EEDa ch\u1EEFa v\u00E0 h\u1ED7 tr\u1EE3 trong kh\u1EA3 n\u0103ng c\u00F3 th\u1EC3 \u0111\u1EC3 ph\u1EE5c h\u1ED3i h\u1EC7 th\u1ED1ng s\u1EDBm nh\u1EA5t c\u00F3 th\u1EC3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u0110i\u1EC1u 10. H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u00A0 \u00A0 \u00A0Ng\u01B0\u1EDDi d\u00F9ng Viethas c\u00F3 th\u1EC3 truy c\u1EADp v\u00E0 tra c\u1EE9u t\u00E0i li\u1EC7u h\u01B0\u1EDBng d\u1EABn ngay tr\u00EAn ph\u1EA7n m\u1EC1m Viethas/ \u1EE9ng d\u1EE5ng Viethas, fanpage/nh\u00F3m/website Viethas ho\u1EB7c tr\u00EAn youtube: https://www.youtube.com/c/VIETHAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u0110i\u1EC1u 11. B\u1EA3o m\u1EADt Ng\u01B0\u1EDDi d\u00F9ng\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u00A0 \u00A0 \u00A0Viethas r\u1EA5t quan t\u00E2m \u0111\u1EBFn quy\u1EC1n ri\u00EAng t\u01B0 c\u1EE7a Qu\u00FD kh\u00E1ch h\u00E0ng khi c\u00E1c b\u1EA1n \u0111\u00E3 tin t\u01B0\u1EDFng s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a Viethas. V\u00EC v\u1EADy Viethas cam k\u1EBFt \u0111\u1EA3m b\u1EA3o t\u00EDnh b\u1EA3o m\u1EADt th\u00F4ng tin cho t\u1EA5t c\u1EA3 Qu\u00FD kh\u00E1ch h\u00E0ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u00A0 \u00A0 \u00A01. Thu th\u1EADp th\u00F4ng tin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u00A0 \u00A0 \u00A0Viethas thu th\u1EADp th\u00F4ng tin t\u1EEB t\u1EA5t c\u1EA3 nh\u1EEFng ai truy c\u1EADp v\u00E0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a Viethas, k\u1EC3 c\u1EA3 nh\u1EEFng Kh\u00E1ch gh\u00E9 th\u0103m kh\u00F4ng \u0111\u0103ng k\u00FD t\u00E0i kho\u1EA3n nh\u01B0ng c\u00F3 mua v\u00E0 s\u1EED d\u1EE5ng c\u00E1c d\u1ECBch v\u1EE5 v\u00E0 nh\u1EEFng kh\u00E1ch h\u00E0ng th\u00E2n thi\u1EBFt c\u1EE7a Viethas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u00A0 \u00A0 \u00A02. \u0110\u0103ng k\u00FD:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u00A0 \u00A0 \u00A0Viethas y\u00EAu c\u1EA7u ph\u1EA3i \u0111\u0103ng k\u00FD m\u1ED9t T\u00E0i Kho\u1EA3n b\u1EB1ng c\u00E1ch s\u1EED d\u1EE5ng email th\u1EF1c cho t\u00EAn \u0111\u0103ng nh\u1EADp, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i th\u1EF1c v\u00E0 m\u1EADt kh\u1EA9u \u0111\u1ED3ng th\u1EDDi cung c\u1EA5p m\u1ED9t s\u1ED1 th\u00F4ng tin c\u00E1 nh\u00E2n nh\u1EA5t \u0111\u1ECBnh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u00A0 \u00A0 \u00A0Ng\u01B0\u1EDDi d\u00F9ng \u0111\u1ED3ng \u00FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u00A0 \u00A0 \u00A0a) Gi\u1EEF b\u00ED m\u1EADt m\u1EADt kh\u1EA9u v\u00E0 ch\u1EC9 s\u1EED d\u1EE5ng T\u00EAn \u0110\u0103ng Nh\u1EADp v\u00E0 m\u1EADt kh\u1EA9u khi \u0111\u0103ng nh\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u00A0 \u00A0 \u00A0b) \u0110\u1EA3m b\u1EA3o s\u1EBD \u0111\u0103ng xu\u1EA5t kh\u1ECFi t\u00E0i kho\u1EA3n c\u1EE7a m\u00ECnh khi kh\u00F4ng s\u1EED d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u00A0 \u00A0 \u00A0c) Th\u00F4ng b\u00E1o ngay l\u1EADp t\u1EE9c v\u1EDBi Viethas n\u1EBFu ph\u00E1t hi\u1EC7n b\u1EA5t k\u1EF3 vi\u1EC7c s\u1EED d\u1EE5ng tr\u00E1i ph\u00E9p n\u00E0o \u0111\u1ED1i v\u1EDBi T\u00E0i Kho\u1EA3n, T\u00EAn \u0110\u0103ng Nh\u1EADp v\u00E0/ho\u1EB7c m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n. B\u1EA1n ph\u1EA3i ch\u1ECBu tr\u00E1ch nhi\u1EC7m v\u1EDBi ho\u1EA1t \u0111\u1ED9ng d\u01B0\u1EDBi T\u00EAn \u0110\u0103ng Nh\u1EADp v\u00E0 T\u00E0i Kho\u1EA3n c\u1EE7a m\u00ECnh, bao g\u1ED3m t\u1ED5n th\u1EA5t ho\u1EB7c thi\u1EC7t h\u1EA1i ph\u00E1t sinh t\u1EEB vi\u1EC7c s\u1EED d\u1EE5ng tr\u00E1i ph\u00E9p li\u00EAn quan \u0111\u1EBFn m\u1EADt kh\u1EA9u, \u0111\u1EC3 l\u1ED9 th\u00F4ng tin m\u1EADt kh\u1EA9u ho\u1EB7c t\u1EEB vi\u1EC7c kh\u00F4ng tu\u00E2n th\u1EE7 \u0110i\u1EC1u Kho\u1EA3n n\u00E0y c\u1EE7a Ng\u01B0\u1EDDi S\u1EED D\u1EE5ng.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u00A0 \u00A0 \u00A03. L\u01B0u tr\u1EEF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u00A0 \u00A0 \u00A0Viethas s\u1EBD l\u01B0u tr\u1EEF nh\u1EEFng th\u00F4ng tin c\u1EE7a kh\u00E1ch h\u00E0ng tr\u00EAn h\u1EC7 th\u1ED1ng c\u1EE7a Viethas t\u1EA1i b\u00EAn cung c\u1EA5p h\u1EA1 t\u1EA7ng m\u00E1y ch\u1EE7 v\u00E0 d\u1ECBch v\u1EE5 \u0111i\u1EC7n to\u00E1n \u0111\u00E1m m\u00E2y. Nh\u1EEFng th\u00F4ng tin n\u00E0y \u0111\u01B0\u1EE3c l\u01B0u tr\u1EEF nh\u1EB1m m\u1EE5c \u0111\u00EDch ch\u0103m s\u00F3c t\u1ED1t h\u01A1n cho nh\u1EEFng kh\u00E1ch h\u00E0ng c\u1EE7a Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\u00A0 \u00A0 \u00A0\u0110\u1ED1i v\u1EDBi Th\u00F4ng tin c\u00E1 nh\u00E2n c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng, Viethas l\u01B0u tr\u1EEF trong th\u1EDDi h\u1EA1n c\u1EA7n thi\u1EBFt theo quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o cho vi\u1EC7c s\u1EED d\u1EE5ng/cung c\u1EA5p li\u00EAn t\u1EE5c c\u00E1c s\u1EA3n ph\u1EA9m, d\u1ECBch v\u1EE5; Cho c\u00E1c m\u1EE5c \u0111\u00EDch thu\u1EBF v\u00E0 k\u1EBF to\u00E1n, y\u00EAu c\u1EA7u c\u1EE7a c\u01A1 quan ch\u1EE9c n\u0103ng ho\u1EB7c \u0111\u1EC3 th\u1EF1c hi\u1EC7n c\u00E1c c\u00F4ng vi\u1EC7c kh\u00E1c nh\u01B0 \u0111\u01B0\u1EE3c th\u00F4ng b\u00E1o tr\u01B0\u1EDBc cho Ng\u01B0\u1EDDi d\u00F9ng Viethas ho\u1EB7c theo c\u00E1c quy \u0111\u1ECBnh c\u1EE7a ph\u00E1p lu\u1EADt hi\u1EC7n h\u00E0nh v\u1EC1 th\u1EDDi h\u1EA1n l\u01B0u tr\u1EEF.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u00A0 \u00A0 \u00A04. B\u1EA3o m\u1EADt th\u00F4ng tin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u00A0 \u00A0 \u00A0Viethas cam k\u1EBFt b\u1EA3o \u0111\u1EA3m an to\u00E0n th\u00F4ng tin cho Qu\u00FD kh\u00E1ch h\u00E0ng khi \u0111\u0103ng k\u00FD th\u00F4ng tin c\u00E1 nh\u00E2n v\u1EDBi C\u00F4ng ty Viethas. \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 Viethas cam k\u1EBFt kh\u00F4ng mua b\u00E1n, trao \u0111\u1ED5i hay chia s\u1EBB th\u00F4ng tin kh\u00E1ch h\u00E0ng v\u00EC b\u1EA5t k\u00EC m\u1EE5c \u0111\u00EDch th\u01B0\u01A1ng m\u1EA1i n\u00E0o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u00A0 \u00A0 \u00A0\u0110\u1EC3 b\u1EA3o m\u1EADt th\u00F4ng tin c\u1EE7a kh\u00E1ch h\u00E0ng t\u1ED1t nh\u1EA5t, Viethas khuy\u1EBFn c\u00E1o Qu\u00FD kh\u00E1ch h\u1EA1n ch\u1EBF truy c\u1EADp t\u00E0i kho\u1EA3n b\u1EB1ng \u0111\u0103ng nh\u1EADp t\u1EF1 \u0111\u1ED9ng, ch\u00FA \u00FD ch\u1EBF \u0111\u1ED9 sao l\u01B0u m\u1EADt kh\u1EA9u v\u00E0 \u0111\u1EA3m b\u1EA3o \u0111\u0103ng xu\u1EA5t kh\u1ECFi t\u00E0i kho\u1EA3n khi s\u1EED d\u1EE5ng m\u00E1y t\u00EDnh chung \u0111\u0103ng nh\u1EADp t\u00E0i kho\u1EA3n tr\u00EAn ph\u1EA7n m\u1EC1m, website, \u1EE9ng d\u1EE5ng c\u1EE7a Viethas, kh\u00F4ng \u0111\u1EC3 l\u1ED9 m\u1EADt kh\u1EA9u hay cung c\u1EA5p m\u1EADt kh\u1EA9u cho b\u1EA5t k\u1EF3 c\u00E1 nh\u00E2n/t\u1ED5 ch\u1EE9c n\u00E0o. Viethas s\u1EBD kh\u00F4ng ch\u1ECBu b\u1EA5t k\u1EF3 tr\u00E1ch nhi\u1EC7m n\u00E0o \u0111\u1ED1i v\u1EDBi s\u1EF1 x\u00E2m nh\u1EADp tr\u00E1i ph\u00E9p c\u1EE7a c\u00E1 nh\u00E2n/t\u1ED5 ch\u1EE9c ho\u1EB7c b\u00EAn th\u1EE9 ba v\u00E0o ph\u1EA7n m\u1EC1m, website, \u1EE9ng d\u1EE5ng c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas do s\u1EF1 b\u1EA5t c\u1EA9n, l\u1ED7i, c\u1ED1 t\u00ECnh hay \u0111\u01B0\u1EE3c s\u1EF1 \u0111\u1ED3ng \u00FD t\u1EEB ph\u00EDa Ng\u01B0\u1EDDi d\u00F9ng Viethas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u00A0 \u00A0 \u00A0Ch\u00EDnh s\u00E1ch b\u1EA3o m\u1EADt ch\u1EC9 \u00E1p d\u1EE5ng nh\u1EEFng th\u00F4ng tin qu\u00FD kh\u00E1ch h\u00E0ng \u0111\u0103ng k\u00FD tr\u00EAn ph\u1EA7n m\u1EC1m, \u1EE9ng d\u1EE5ng Viethas v\u00E0 website ch\u00EDnh th\u1EE9c https://viethas.com c\u1EE7a C\u00F4ng ty Viethas. M\u1ECDi th\u00F4ng tin Qu\u00FD kh\u00E1ch \u0111\u0103ng k\u00FD t\u1EA1i nh\u1EEFng website ho\u1EB7c nh\u1EEFng \u0111\u1ECBa ch\u1EC9 kh\u00E1c \u0111\u1EC1u kh\u00F4ng thu\u1ED9c ph\u1EA1m vi hi\u1EC7u l\u1EF1c c\u1EE7a Ch\u00EDnh s\u00E1ch B\u1EA3o m\u1EADt th\u00F4ng tin n\u00E0y.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\u0110i\u1EC1u 12. \u0110i\u1EC1u kho\u1EA3n tranh ch\u1EA5p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u00A0 \u00A0 \u00A0a) Ph\u01B0\u01A1ng th\u1EE9c ti\u1EBFp nh\u1EADn th\u1EAFc m\u1EAFc, khi\u1EBFu n\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u00A0 \u00A0 \u00A0M\u1ECDi tr\u01B0\u1EDDng h\u1EE3p \u0111\u00F3ng g\u00F3p \u00FD, th\u1EAFc m\u1EAFc, khi\u1EBFu n\u1EA1i, Ng\u01B0\u1EDDi d\u00F9ng Viethas vui l\u00F2ng g\u1EEDi v\u1EC1 Viethas theo c\u00E1c ph\u01B0\u01A1ng th\u1EE9c sau:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u00B7 G\u1EEDi email t\u1EDBi \u0111\u1ECBa ch\u1EC9: viethas.info@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u00B7 Hotline: 0934 60 60 60");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u00A0 \u00A0 \u00A0T\u00F9y thu\u1ED9c v\u00E0o t\u00EDnh ch\u1EA5t ph\u1EE9c t\u1EA1p c\u1EE7a n\u1ED9i dung khi\u1EBFu n\u1EA1i, Viethas s\u1EBD c\u00F3 th\u1EDDi h\u1EA1n x\u1EED l\u00FD t\u01B0\u01A1ng \u1EE9ng. K\u1EBFt qu\u1EA3 gi\u1EA3i quy\u1EBFt khi\u1EBFu n\u1EA1i s\u1EBD \u0111\u01B0\u1EE3c th\u00F4ng b\u00E1o t\u1EDBi Ng\u01B0\u1EDDi d\u00F9ng Viethas, tr\u01B0\u1EDDng h\u1EE3p c\u1EA7n thi\u1EBFt, Viethas c\u00F3 th\u1EC3 m\u1EDDi ng\u01B0\u1EDDi khi\u1EBFu n\u1EA1i t\u1EDBi l\u00E0m vi\u1EC7c tr\u1EF1c ti\u1EBFp. Viethas s\u1EBD n\u1ED7 l\u1EF1c \u0111\u1EC3 lu\u00F4n gi\u1EA3i quy\u1EBFt c\u00E1c khi\u1EBFu n\u1EA1i c\u1EE7a Ng\u01B0\u1EDDi d\u00F9ng Viethas trong th\u1EDDi gian s\u1EDBm nh\u1EA5t v\u00E0 tr\u00EAn tinh th\u1EA7n th\u01B0\u01A1ng l\u01B0\u1EE3ng, h\u00F2a gi\u1EA3i, t\u00F4n tr\u1ECDng, hai b\u00EAn c\u00F9ng c\u00F3 l\u1EE3i.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u00A0 \u00A0 \u00A0b) M\u1ECDi tranh ch\u1EA5p ph\u00E1t sinh t\u1EEB ho\u1EB7c li\u00EAn quan \u0111\u1EBFn s\u1EED d\u1EE5ng ph\u1EA7n m\u1EC1m/\u1EE9ng d\u1EE5ng Viethas s\u1EBD \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt tr\u00EAn tinh th\u1EA7n h\u00F2a gi\u1EA3i. Tr\u01B0\u1EDDng h\u1EE3p th\u01B0\u01A1ng l\u01B0\u1EE3ng, ho\u00E0 gi\u1EA3i b\u1EA5t th\u00E0nh m\u1ED9t trong C\u00E1c B\u00EAn c\u00F3 quy\u1EC1n kh\u1EDFi ki\u1EC7n ra To\u00E0 \u00E1n c\u00F3 th\u1EA9m quy\u1EC1n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__.NzLayoutComponent], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 64px;\n  margin-top: 30px;\n  height: 95%;\n  overflow: auto;\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBS0EsZUFBQTtBQUhKO0FBREk7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBR04iLCJmaWxlIjoicG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNjRweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfSBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgfSBcclxuICAiXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_developers_developers_module_ts.js.map