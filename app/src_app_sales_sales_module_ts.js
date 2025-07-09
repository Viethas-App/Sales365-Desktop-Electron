"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_sales_module_ts"],{

/***/ 29146:
/*!***************************************!*\
  !*** ./src/app/sales/sales.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesModule": () => (/* binding */ SalesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 79865)).then(m => m.DashboardModule)
    },
    {
        path: 'empty',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_empty_empty_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./empty/empty.module */ 5423)).then(m => m.EmptyModule)
    },
    {
        path: 'sales-pos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_vnpost-component_vnpost-93767d"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_viettel-component_viett-7f4e20"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"), __webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("default-src_app_sales_keyboard_keyboard_module_ts"), __webpack_require__.e("src_app_sales_sales-pos_sales-pos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales-pos/sales-pos.module */ 4327)).then(m => m.SalesPosModule)
    },
    {
        path: 'sales-desktop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_vnpost-component_vnpost-93767d"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_viettel-component_viett-7f4e20"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"), __webpack_require__.e("default-src_app_sales_sale-desktop_components_components_module_ts"), __webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("default-src_app_sales_components_bill-type_bill-type-1_sales-desktop_sales-desktop-bill-type1-781d48"), __webpack_require__.e("src_app_sales_menu_manage_delivery_services_ahamoveService_ahamove_service_ts-src_app_sales_m-561dec")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sale-desktop/sale-desktop.module */ 81455)).then(m => m.SaleDesktopModule)
    },
    {
        path: 'sales-retail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"), __webpack_require__.e("default-src_app_sales_services_bill_service_ts"), __webpack_require__.e("default-node_modules_ewa-components-angular_fesm2015_ewa-components-angular_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales_sales-retail_sales-retail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales-retail/sales-retail.module */ 24201)).then(m => m.SalesRetailModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_developers_online-payment_component_qr-banking-modal_qr-banking-mo-348d80"), __webpack_require__.e("src_app_sales_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 86462)).then(m => m.PaymentModule)
    },
    {
        path: 'exchange-voucher',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_vnpost-component_vnpost-93767d"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_viettel-component_viett-7f4e20"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"), __webpack_require__.e("default-src_app_sales_sale-desktop_components_components_module_ts"), __webpack_require__.e("default-src_app_sales_interface_vh-sale-voucher-invoice_ts"), __webpack_require__.e("src_app_sales_exchange-voucher_exchange-voucher_module_ts-src_app_sales_menu_manage_delivery_-6bf33b")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exchange-voucher/exchange-voucher.module */ 66171)).then(m => m.ExchangeVoucherModule)
    },
    {
        path: 'prepaid-card',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_interface_vh-sale-payment-card-invoice_ts"), __webpack_require__.e("src_app_sales_prepaid-card_prepaid-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./prepaid-card/prepaid-card.module */ 7693)).then(m => m.PrepaidCardModule)
    },
    {
        path: 'manage-key',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dealer_material_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales_menu_developers_manage-keys_manage-keys_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menu/developers/manage-keys/manage-keys.module */ 68994)).then(m => m.ManageKeysModule)
    },
    {
        path: 'online-payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_developers_online-payment_component_qr-banking-modal_qr-banking-mo-348d80"), __webpack_require__.e("src_app_sales_menu_developers_online-payment_online-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menu/developers/online-payment/online-payment.module */ 90191)).then(m => m.OnlinePaymentModule)
    },
    {
        path: 'sales-voucher',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_vnpost-component_vnpost-93767d"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_viettel-component_viett-7f4e20"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"), __webpack_require__.e("default-src_app_sales_sale-desktop_components_components_module_ts"), __webpack_require__.e("default-src_app_sales_interface_vh-sale-voucher-invoice_ts"), __webpack_require__.e("default-src_app_sales_sales-voucher_component_component_module_ts"), __webpack_require__.e("default-src_app_sales_components_bill-type_bill-type-40_bill-type-40_module_ts-src_app_sales_-26a182"), __webpack_require__.e("src_app_sales_sales-voucher_sales-voucher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales-voucher/sales-voucher.module */ 38182)).then(m => m.SalesVoucherModule)
    },
    {
        path: 'sales-payment-card',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_vnpost-component_vnpost-93767d"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_viettel-component_viett-7f4e20"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"), __webpack_require__.e("default-src_app_sales_sale-desktop_components_components_module_ts"), __webpack_require__.e("default-src_app_sales_interface_vh-sale-payment-card-invoice_ts"), __webpack_require__.e("default-src_app_sales_components_bill-type_bill-type-50_bill-type-50_module_ts-src_app_sales_-d043fa"), __webpack_require__.e("src_app_sales_sales-payment-card_sales-payment-card_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales-payment-card/sales-payment-card.module */ 12315)).then(m => m.SalesPaymentCardModule)
    },
    {
        path: 'bill-web-app',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_vnpost-component_vnpost-93767d"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_carrier-partner_components_viettel-component_viett-7f4e20"), __webpack_require__.e("default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"), __webpack_require__.e("default-src_app_sales_interface_vh-sale-invoice_ts"), __webpack_require__.e("src_app_sales_bill-web-app_bill-web-app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bill-web-app/bill-web-app.module */ 81699)).then(m => m.BillWebAppModule)
    },
];
class SalesModule {
}
SalesModule.ɵfac = function SalesModule_Factory(t) { return new (t || SalesModule)(); };
SalesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SalesModule });
SalesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SalesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_sales_module_ts.js.map