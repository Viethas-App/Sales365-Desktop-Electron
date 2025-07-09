"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_management_module_ts"],{

/***/ 58956:
/*!**********************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/management.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementComponent": () => (/* binding */ ManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManagementComponent.ɵfac = function ManagementComponent_Factory(t) { return new (t || ManagementComponent)(); };
ManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementComponent, selectors: [["app-management"]], decls: 2, vars: 0, template: function ManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "management works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1855:
/*!*******************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/management.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagementModule": () => (/* binding */ ManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management.component */ 58956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _management_component__WEBPACK_IMPORTED_MODULE_0__.ManagementComponent
    },
    {
        path: 'dishes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_dishes_dishes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dishes/dishes.module */ 53279)).then(m => m.DishesModule)
    },
    {
        path: 'design',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_design_design_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./design/design.module */ 69956)).then(m => m.DesignModule)
    },
    {
        path: 'service',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_service_service_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./service/service.module */ 26410)).then(m => m.ServiceModule)
    },
    {
        path: 'ingredient',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_ingredient_ingredient_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ingredient/ingredient.module */ 23299)).then(m => m.IngredientModule)
    },
    {
        path: 'invoice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_invoice_invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./invoice/invoice.module */ 13022)).then(m => m.InvoiceModule)
    },
    {
        path: 'partner',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_partner_partner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./partner/partner.module */ 75303)).then(m => m.PartnerModule)
    },
    {
        path: 'tax',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_tax_tax_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tax/tax.module */ 54120)).then(m => m.TaxModule)
    },
    {
        path: 'sales-program',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_sales-program_sales-program_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sales-program/sales-program.module */ 49733)).then(m => m.SalesProgramModule)
    },
    {
        path: 'cashflow',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_cashflow_cashflow_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cashflow/cashflow.module */ 47138)).then(m => m.CashflowModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_reports_reports_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 89273)).then(m => m.ReportsModule)
    },
    {
        path: 'stock',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_stock_stock_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../management/stock/stock.module */ 83863)).then(m => m.StockModule)
    },
    {
        path: 'branch',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_branch_branch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./branch/branch.module */ 16759)).then(m => m.BranchModule)
    },
];
class ManagementModule {
}
ManagementModule.ɵfac = function ManagementModule_Factory(t) { return new (t || ManagementModule)(); };
ManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManagementModule });
ManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManagementModule, { declarations: [_management_component__WEBPACK_IMPORTED_MODULE_0__.ManagementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_management_module_ts.js.map