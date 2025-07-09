"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_cafe_module_ts"],{

/***/ 23723:
/*!*************************************!*\
  !*** ./src/app/cafe/cafe.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CafeModule": () => (/* binding */ CafeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/dashboard/dashboard.module */ 33525)).then(m => m.DashboardModule)
    },
    {
        path: 'cafe-pos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-order-invoice_ts"), __webpack_require__.e("default-src_app_cafe_services_bill_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_cafe-pos_cafe-pos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/cafe-pos/cafe-pos.module */ 45693)).then(m => m.CafePosModule)
    },
    {
        path: 'cafe-desktop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-order-invoice_ts"), __webpack_require__.e("default-src_app_cafe_services_bill_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_cafe-desktop_cafe-desktop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/cafe-desktop/cafe-desktop.module */ 17199)).then(m => m.CafeDesktopModule)
    },
    {
        path: 'cafe-fnb',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-order-invoice_ts"), __webpack_require__.e("default-src_app_sales_keyboard_keyboard_module_ts"), __webpack_require__.e("default-src_app_cafe_interface_vh-booking_ts"), __webpack_require__.e("default-node_modules_ewa-components-angular_fesm2015_ewa-components-angular_js"), __webpack_require__.e("src_app_cafe_desktop_cafe-fnb_cafe-fnb_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/cafe-fnb/cafe-fnb.module */ 81369)).then(m => m.CafeFnbModule)
    },
    {
        path: 'manage-key',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dealer_material_module_ts"), __webpack_require__.e("default-src_app_cafe_desktop_menu_developers_manage-keys_manage-keys_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/menu/developers/manage-keys/manage-keys.module */ 7164)).then(m => m.ManageKeysModule)
    },
    {
        path: 'coordination',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_coordination_coordination_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/coordination/coordination.module */ 31114)).then(m => m.CoordinationModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_desktop_menu_developers_online-payment_component_qr-banking-modal_qr-ban-afe2b6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/payment/payment.module */ 31751)).then(m => m.PaymentModule)
    },
    {
        path: 'exchange-voucher',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-sale-voucher-invoice_ts"), __webpack_require__.e("default-src_app_cafe_desktop_exchange-voucher_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_exchange-voucher_exchange-voucher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/exchange-voucher/exchange-voucher.module */ 2521)).then(m => m.ExchangeVoucherModule)
    },
    {
        path: 'prepaid-card',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-sale-payment-card-invoice_ts"), __webpack_require__.e("default-src_app_cafe_desktop_exchange-voucher_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_prepaid-card_prepaid-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/prepaid-card/prepaid-card.module */ 8302)).then(m => m.PrepaidCardModule)
    },
    {
        path: 'sales-voucher',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-sale-voucher-invoice_ts"), __webpack_require__.e("default-src_app_cafe_components_bill-type_bill-type-40_bill-type-40_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_sales-voucher_sales-voucher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/sales-voucher/sales-voucher.module */ 56096)).then(m => m.SalesVoucherModule)
    },
    {
        path: 'sales-payment-card',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-sale-payment-card-invoice_ts"), __webpack_require__.e("default-src_app_cafe_desktop_exchange-voucher_components_components_module_ts"), __webpack_require__.e("default-src_app_cafe_components_bill-type_bill-type-50_bill-type-50_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_sales-payment-card_sales-payment-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./desktop/sales-payment-card/sales-payment-card.module */ 40580)).then(m => m.SalesPaymentCardModule)
    },
    {
        path: 'bill-web-app',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-order-invoice_ts"), __webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_bill-web-app_bill-web-app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bill-web-app/bill-web-app.module */ 30090)).then(m => m.BillWebAppModule)
    },
];
class CafeModule {
}
CafeModule.ɵfac = function CafeModule_Factory(t) { return new (t || CafeModule)(); };
CafeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CafeModule });
CafeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CafeModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_cafe_module_ts.js.map