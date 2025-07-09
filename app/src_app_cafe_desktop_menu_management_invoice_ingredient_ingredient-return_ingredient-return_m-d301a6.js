"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_invoice_ingredient_ingredient-return_ingredient-return_m-d301a6"],{

/***/ 32242:
/*!**************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/invoice/ingredient/ingredient-return/detail/detail.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_bill_type_bill_type_10_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../components/bill-type/bill-type-10/detail/detail.component */ 16271);


class DetailComponent {
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 1, vars: 1, consts: [[3, "url"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bill-type10-detail", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("url", "cafe/dashboard/management/invoice/ingredient/return");
    } }, directives: [_components_bill_type_bill_type_10_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__.DetailComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 12217:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/invoice/ingredient/ingredient-return/edit/edit.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_bill_type_bill_type_10_edit_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../components/bill-type/bill-type-10/edit/edit.component */ 58874);


class EditComponent {
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 1, vars: 1, consts: [[3, "url"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bill-type10-edit", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("url", "cafe/dashboard/management/invoice/ingredient");
    } }, directives: [_components_bill_type_bill_type_10_edit_edit_component__WEBPACK_IMPORTED_MODULE_0__.EditComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 38959:
/*!***************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/invoice/ingredient/ingredient-return/ingredient-return.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientReturnModule": () => (/* binding */ IngredientReturnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail/detail.component */ 32242);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 12217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var src_app_cafe_components_bill_type_bill_type_10_bill_type10_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/components/bill-type/bill-type-10/bill-type10.module */ 16119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_0__.DetailComponent
    },
    {
        path: 'edit-return-supplier',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
    }
];
class IngredientReturnModule {
}
IngredientReturnModule.ɵfac = function IngredientReturnModule_Factory(t) { return new (t || IngredientReturnModule)(); };
IngredientReturnModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: IngredientReturnModule });
IngredientReturnModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollingModule,
            src_app_cafe_components_bill_type_bill_type_10_bill_type10_module__WEBPACK_IMPORTED_MODULE_3__.BillType10Module
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IngredientReturnModule, { declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__.DetailComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollingModule,
        src_app_cafe_components_bill_type_bill_type_10_bill_type10_module__WEBPACK_IMPORTED_MODULE_3__.BillType10Module] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_invoice_ingredient_ingredient-return_ingredient-return_m-d301a6.js.map