"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_manage_module_ts"],{

/***/ 45439:
/*!*******************************************************!*\
  !*** ./src/app/sales/menu/manage/manage.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageComponent": () => (/* binding */ ManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ManageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(); };
ManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], decls: 2, vars: 0, template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "manage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 92817:
/*!****************************************************!*\
  !*** ./src/app/sales/menu/manage/manage.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageModule": () => (/* binding */ ManageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _manage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage.component */ 45439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _manage_component__WEBPACK_IMPORTED_MODULE_0__.ManageComponent
    },
    {
        path: 'products',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_products_products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 98088)).then(m => m.ProductsModule)
    },
    {
        path: 'reports',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_reports_reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 91631)).then(m => m.ReportsModule)
    },
    {
        path: 'partner',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_partner_partner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./partner/partner.module */ 49029)).then(m => m.PartnerModule)
    },
    {
        path: 'invoice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_invoices_invoices_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invoices/invoices.module */ 44040)).then(m => m.InvoicesModule)
    },
    {
        path: 'cashflow',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_cashflow_cashflow_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cashflow/cashflow.module */ 23424)).then(m => m.CashflowModule)
    },
    {
        path: 'stock',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_stock_stock_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./stock/stock.module */ 56515)).then(m => m.StockModule)
    },
    {
        path: 'warranty',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_warranty_warranty_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./warranty/warranty.module */ 51928)).then(m => m.WarrantyModule)
    },
    {
        path: 'delivery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_delivery_delivery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./delivery/delivery.module */ 4986)).then(m => m.DeliveryModule)
    },
    {
        path: 'sales-program',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_sales-program_sales-program_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sales-program/sales-program.module */ 3960)).then(m => m.SalesProgramModule)
    },
    {
        path: 'tax',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_tax_tax_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tax/tax.module */ 58354)).then(m => m.TaxModule)
    },
    {
        path: 'printer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_printer_printer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./printer/printer.module */ 64479)).then(m => m.PrinterModule)
    },
    {
        path: 'branch',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_branch_branch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./branch/branch.module */ 19148)).then(m => m.BranchModule)
    },
    {
        path: 'ecommerce',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_ecommerce_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ecommerce/ecommerce.module */ 26206)).then(m => m.EcommerceModule)
    },
    {
        path: 'socials-channel',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_socials-channel_socials-channels_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./socials-channel/socials-channels.module */ 78168)).then(m => m.SocialsChannelsModule)
    },
    {
        path: 'design-barcode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_design-barcode_design-barcode_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./design-barcode/design-barcode.module */ 19380)).then(m => m.DesignBarcodeModule)
    }
];
class ManageModule {
}
ManageModule.ɵfac = function ManageModule_Factory(t) { return new (t || ManageModule)(); };
ManageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageModule });
ManageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageModule, { declarations: [_manage_component__WEBPACK_IMPORTED_MODULE_0__.ManageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_manage_module_ts.js.map