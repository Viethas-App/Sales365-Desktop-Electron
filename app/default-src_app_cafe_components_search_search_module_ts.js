"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_cafe_components_search_search_module_ts"],{

/***/ 27527:
/*!*****************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-area/search-area.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchAreaComponent": () => (/* binding */ SearchAreaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchAreaComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchAreaComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchAreaComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectArea(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, item_r2.name));
} }
class SearchAreaComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm, cdRef) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.areaList = [];
        this.searchList = [];
    }
    ngAfterViewInit() {
        this.areaList = this.vhQueryCafe.getlocalAreas().filter(item => item.id_branch == this.vhQueryCafe.getDefaultBranch()._id);
        this.searchList = [...this.areaList];
        this.cdRef.detectChanges();
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectArea(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.areaList, ['name']);
        else
            this.searchList = this.areaList;
    }
}
SearchAreaComponent.ɵfac = function SearchAreaComponent_Factory(t) { return new (t || SearchAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
SearchAreaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchAreaComponent, selectors: [["app-search-area"]], decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "product-item ion-no-padding", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "product-item", "ion-no-padding", 3, "click"]], template: function SearchAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchAreaComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchAreaComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchAreaComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchAreaComponent_ion_item_12_Template, 4, 3, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Search for area name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --inner-padding-start: 16px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1hcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0k7RUFDRSx1QkFBQTtBQUNOO0FBSUU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FBREo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFBTiIsImZpbGUiOiJzZWFyY2gtYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAucHJvZHVjdC1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 40987:
/*!*********************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-branch/search-branch.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBranchComponent": () => (/* binding */ SearchBranchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchBranchComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchBranchComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchBranchComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectBranch(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
} }
class SearchBranchComponent {
    constructor(vhComponent, vhAlgorithm, cdRef) {
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.branchList = [
            {
                id: 1,
                name: 'Main store',
            },
            {
                id: 2,
                name: 'Viethas',
            },
            {
                id: 3,
                name: 'Vietcast',
            },
        ];
        this.searchList = [];
    }
    ngAfterViewInit() {
        this.searchList = [...this.branchList];
        this.cdRef.detectChanges();
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectBranch(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.branchList, ['name']);
        else
            this.searchList = this.branchList;
    }
}
SearchBranchComponent.ɵfac = function SearchBranchComponent_Factory(t) { return new (t || SearchBranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
SearchBranchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchBranchComponent, selectors: [["app-search-branch"]], decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "product-item ion-no-padding", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "product-item", "ion-no-padding", 3, "click"]], template: function SearchBranchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchBranchComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchBranchComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchBranchComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchBranchComponent_ion_item_12_Template, 3, 1, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Search for branch name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --inner-padding-start: 16px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1icmFuY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FBQVI7QUFDUTtFQUNJLHVCQUFBO0FBQ1o7QUFLSTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUFGUjtBQUdRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQURaIiwiZmlsZSI6InNlYXJjaC1icmFuY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8618:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-category/search-category.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCategoryComponent": () => (/* binding */ SearchCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchCategoryComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchCategoryComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchCategoryComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectCategory(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
} }
class SearchCategoryComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm, cdRef) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.type = [];
        this.categoryList = [];
        this.searchList = [];
    }
    ngAfterViewInit() {
        this.categoryList = this.type.length ? this.vhQueryCafe.getlocalCategorys().filter(item => this.type.includes(item.type)) : this.vhQueryCafe.getlocalCategorys();
        this.searchList = [...this.categoryList];
        this.cdRef.detectChanges();
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectCategory(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.categoryList, ['name']);
        else
            this.searchList = this.categoryList;
    }
}
SearchCategoryComponent.ɵfac = function SearchCategoryComponent_Factory(t) { return new (t || SearchCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
SearchCategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchCategoryComponent, selectors: [["app-search-category"]], inputs: { type: "type" }, decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "product-item ion-no-padding", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "product-item", "ion-no-padding", 3, "click"]], template: function SearchCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchCategoryComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchCategoryComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchCategoryComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchCategoryComponent_ion_item_12_Template, 3, 1, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Search for category name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --inner-padding-start: 16px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0UsdUJBQUE7QUFDTjtBQUlFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQURKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQU4iLCJmaWxlIjoic2VhcmNoLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICYtbmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 85620:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-currency/search-currency.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCurrencyComponent": () => (/* binding */ SearchCurrencyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchCurrencyComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchCurrencyComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchCurrencyComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectSymbols(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.text);
} }
class SearchCurrencyComponent {
    constructor(vhComponent, vhAlgorithm, vhQueryCafe) {
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.symbols = [
            { text: "AED", value: 0 }, { text: "AED(د.إ)", value: 1 }, { text: "AFN", value: 2 }, { text: "AFN(؋)", value: 3 }, { text: "ALL", value: 4 }, { text: "ALL(L)", value: 5 }, { text: "AMD", value: 6 }, { text: "AMD(֏)", value: 7 }, { text: "AMD", value: 8 }, { text: "AMD(դր)", value: 9 }, { text: "ANG", value: 10 },
            { text: "ANG(ƒ)", value: 11 }, { text: "AOA", value: 12 }, { text: "AOA(Kz)", value: 13 }, { text: "ARS", value: 14 }, { text: "ARS($)", value: 15 }, { text: "AUD", value: 16 }, { text: "AUD($)", value: 17 }, { text: "AWG", value: 18 }, { text: "AWG(ƒ)", value: 19 }, { text: "BAM", value: 20 },
            { text: "BAM(KM)", value: 21 }, { text: "BBD", value: 22 }, { text: "BBD($)", value: 23 }, { text: "BDT", value: 24 }, { text: "BDT(৳)", value: 25 }, { text: "BGN", value: 26 }, { text: "BGN(лв)", value: 27 }, { text: "BHD", value: 28 }, { text: "BHD(.ب)", value: 29 }, { text: "BIF", value: 30 },
            { text: "BIF(Fr)", value: 31 }, { text: "BMD", value: 32 }, { text: "BMD($)", value: 33 }, { text: "BND", value: 34 }, { text: "BND($)", value: 35 }, { text: "BOB", value: 36 }, { text: "BOB(Bs.)", value: 37 }, { text: "BRL", value: 38 }, { text: "BRL(R$)", value: 39 }, { text: "BSD", value: 40 },
            { text: "BSD($)", value: 41 }, { text: "BTN", value: 42 }, { text: "BTN(Nu.)", value: 43 }, { text: "BWP", value: 44 }, { text: "BWP(P)", value: 45 }, { text: "BYR", value: 46 }, { text: "BYR(Br)", value: 47 }, { text: "BZD", value: 48 }, { text: "BZD($)", value: 49 }, { text: "CAD", value: 50 },
            { text: "CAD($)", value: 51 }, { text: "CDF", value: 52 }, { text: "CDF(Fr)", value: 53 }, { text: "CHF", value: 54 }, { text: "CHF(Fr)", value: 55 }, { text: "CLP", value: 56 }, { text: "CLP($)", value: 57 }, { text: "CNY", value: 58 }, { text: "CNY(¥ )", value: 59 }, { text: "CNY", value: 60 },
            { text: "CNY(元)", value: 61 }, { text: "COP", value: 62 }, { text: "COP($)", value: 63 }, { text: "CRC", value: 64 }, { text: "CRC(₡)", value: 65 }, { text: "CUC", value: 66 }, { text: "CUC($)", value: 67 }, { text: "CUP", value: 68 }, { text: "CUP($)", value: 69 }, { text: "CVE", value: 70 },
            { text: "CVE($)", value: 71 }, { text: "CZK", value: 72 }, { text: "CZK(Kč)", value: 73 }, { text: "DJF", value: 74 }, { text: "DJF(Fr)", value: 75 }, { text: "DKK", value: 76 }, { text: "DKK(kr)", value: 77 }, { text: "DOP", value: 78 }, { text: "DOP($)", value: 79 }, { text: "DZD", value: 80 },
            { text: "DZD(د.ج)", value: 81 }, { text: "EGP", value: 82 }, { text: "EGP(£)", value: 83 }, { text: "EGP", value: 84 }, { text: "EGP(ج.م)", value: 85 }, { text: "ERN", value: 86 }, { text: "ERN(Nfk)", value: 87 }, { text: "ETB", value: 88 }, { text: "ETB(Br)", value: 89 }, { text: "EUR", value: 90 },
            { text: "EUR(€)", value: 91 }, { text: "FJD", value: 92 }, { text: "FJD($)", value: 93 }, { text: "FKP", value: 94 }, { text: "FKP(£)", value: 95 }, { text: "GBP", value: 96 }, { text: "GBP(£)", value: 97 }, { text: "GEL", value: 98 }, { text: "GEL(ლ)", value: 99 }, { text: "GHS", value: 100 },
            { text: "GHS(₵)", value: 101 }, { text: "GIP", value: 102 }, { text: "GIP(£)", value: 103 }, { text: "GMD", value: 104 }, { text: "GMD(D)", value: 105 }, { text: "GNF", value: 106 }, { text: "GNF(Fr)", value: 107 }, { text: "GTQ", value: 108 }, { text: "GTQ(Q)", value: 109 }, { text: "GYD", value: 110 },
            { text: "GYD($)", value: 111 }, { text: "HKD", value: 112 }, { text: "HKD($)", value: 113 }, { text: "HNL", value: 114 }, { text: "HNL(L)", value: 115 }, { text: "HRK", value: 116 }, { text: "HRK(kn)", value: 117 }, { text: "HTG", value: 118 }, { text: "HTG(G)", value: 119 }, { text: "HUF", value: 120 },
            { text: "HUF(Ft)", value: 121 }, { text: "IDR", value: 122 }, { text: "IDR(Rp)", value: 123 }, { text: "ILS", value: 124 }, { text: "ILS(₪)", value: 125 }, { text: "INR", value: 126 }, { text: "INR(₹)", value: 127 }, { text: "IQD", value: 128 }, { text: "IQD(ع.د)", value: 129 }, { text: "IRR", value: 130 },
            { text: "IRR(﷼)", value: 131 }, { text: "ISK", value: 132 }, { text: "ISK(kr)", value: 133 }, { text: "JMD", value: 134 }, { text: "JMD($)", value: 135 }, { text: "JOD", value: 136 }, { text: "JOD(د.ا)", value: 137 }, { text: "JPY", value: 138 }, { text: "JPY(¥)", value: 139 }, { text: "KES", value: 140 },
            { text: "KES(Sh)", value: 141 }, { text: "KGS", value: 142 }, { text: "KGS(лв)", value: 143 }, { text: "KHR", value: 144 }, { text: "KHR(៛)", value: 145 }, { text: "KMF", value: 146 }, { text: "KMF(Fr)", value: 147 }, { text: "KRW", value: 148 }, { text: "KRW(₩)", value: 149 }, { text: "KWD", value: 150 },
            { text: "KWD(د.ك)", value: 151 }, { text: "KYD", value: 152 }, { text: "KYD($)", value: 153 }, { text: "KZT", value: 154 }, { text: "KZT(₸)", value: 155 }, { text: "LAK", value: 156 }, { text: "LAK(₭)", value: 157 }, { text: "LBP", value: 158 }, { text: "LBP(ل.ل)", value: 159 }, { text: "LKR", value: 160 },
            { text: "LKR(Rs)", value: 161 }, { text: "LRD", value: 162 }, { text: "LRD($)", value: 163 }, { text: "LSL", value: 164 }, { text: "LSL(L)", value: 165 }, { text: "LYD", value: 166 }, { text: "LYD(ل.د)", value: 167 }, { text: "MAD", value: 168 }, { text: "MAD(د. م.)", value: 169 }, { text: "MDL", value: 170 },
            { text: "MDL(L)", value: 171 }, { text: "MGA", value: 172 }, { text: "MGA(Ar)", value: 173 }, { text: "MKD", value: 174 }, { text: "MKD(ден)", value: 175 }, { text: "MMK", value: 176 }, { text: "MMK(Ks)", value: 177 }, { text: "MNT", value: 178 }, { text: "MNT(₮)", value: 179 }, { text: "MOP", value: 180 },
            { text: "MOP(P)", value: 181 }, { text: "MRO", value: 182 }, { text: "MRO(UM)", value: 183 }, { text: "MUR", value: 184 }, { text: "MUR(₨)", value: 185 }, { text: "MVR", value: 186 }, { text: "MVR(.ރ)", value: 187 }, { text: "MWK", value: 188 }, { text: "MWK(MK)", value: 189 }, { text: "MXN", value: 190 },
            { text: "MXN($)", value: 191 }, { text: "MYR", value: 192 }, { text: "MYR(RM)", value: 193 }, { text: "MZN", value: 194 }, { text: "MZN(MT)", value: 195 }, { text: "NAD", value: 196 }, { text: "NAD($)", value: 197 }, { text: "NGN", value: 198 }, { text: "NGN(₦)", value: 199 }, { text: "NIO", value: 200 },
            { text: "NIO(C$)", value: 201 }, { text: "NOK", value: 202 }, { text: "NOK(kr)", value: 203 }, { text: "NPR", value: 204 }, { text: "NPR(₨)", value: 205 }, { text: "NZD", value: 206 }, { text: "NZD($)", value: 207 }, { text: "OMR", value: 208 }, { text: "OMR(ر.ع.)", value: 209 }, { text: "PAB", value: 210 },
            { text: "PAB(B/.)", value: 211 }, { text: "PEN", value: 212 }, { text: "PEN(S/.)", value: 213 }, { text: "PGK", value: 214 }, { text: "PGK(K)", value: 215 }, { text: "PHP", value: 216 }, { text: "PHP(₱)", value: 217 }, { text: "PKR", value: 218 }, { text: "PKR(₨)", value: 219 }, { text: "PLN", value: 220 },
            { text: "PLN(zł)", value: 221 }, { text: "PYG", value: 222 }, { text: "PYG(₲)", value: 223 }, { text: "QAR", value: 224 }, { text: "QAR(ر.ق)", value: 225 }, { text: "RON", value: 226 }, { text: "RON(L)", value: 227 }, { text: "RSD", value: 228 }, { text: "RSD(дин)", value: 229 }, { text: "RSD", value: 230 },
            { text: "RSD(din.)", value: 231 }, { text: "RUB", value: 232 }, { text: "RUB(р.)", value: 233 }, { text: "RUB", value: 234 }, { text: "RUB(руб.)", value: 235 }, { text: "RWF", value: 236 }, { text: "RWF(Fr)", value: 237 }, { text: "SAR", value: 238 }, { text: "SAR(ر.س)", value: 239 }, { text: "SBD", value: 240 },
            { text: "SBD($)", value: 241 }, { text: "SCR", value: 242 }, { text: "SCR(₨)", value: 243 }, { text: "SDG", value: 244 }, { text: "SDG(£)", value: 245 }, { text: "SEK", value: 246 }, { text: "SEK(kr)", value: 247 }, { text: "SGD", value: 248 }, { text: "SGD($)", value: 249 }, { text: "SHP", value: 250 },
            { text: "SHP(£)", value: 251 }, { text: "SLL", value: 252 }, { text: "SLL(Le)", value: 253 }, { text: "SOS", value: 254 }, { text: "SOS(Sh)", value: 255 }, { text: "SRD", value: 256 }, { text: "SRD($)", value: 257 }, { text: "SSP", value: 258 }, { text: "SSP(£)", value: 259 }, { text: "STD", value: 260 },
            { text: "STD(Db)", value: 261 }, { text: "SVC", value: 262 }, { text: "SVC(₡)", value: 263 }, { text: "SYP", value: 264 }, { text: "SYP(£)", value: 265 }, { text: "SYP", value: 266 }, { text: "SYP(ل.س)", value: 267 }, { text: "SZL", value: 268 }, { text: "SZL(L)", value: 269 }, { text: "TJS", value: 270 },
            { text: "TJS(ЅМ)", value: 271 }, { text: "TMT", value: 272 }, { text: "TMT", value: 273 }, { text: "TND(m)", value: 27 }, { text: "TOP", value: 275 }, { text: "TOP(T$)", value: 276 }, { text: "TTD", value: 277 }, { text: "TTD($)", value: 278 }, { text: "TWD", value: 279 }, { text: "TWD($)", value: 280 },
            { text: "TZS", value: 281 }, { text: "TZS(Sh)", value: 282 }, { text: "UAH", value: 283 }, { text: "UAH(₴)", value: 284 }, { text: "UGX", value: 285 }, { text: "UGX(Sh)", value: 286 }, { text: "USD", value: 287 }, { text: "USD($)", value: 288 }, { text: "UYU", value: 289 }, { text: "UYU($)", value: 290 },
            { text: "UZS", value: 291 }, { text: "UZS(лв)", value: 292 }, { text: "VEF", value: 293 }, { text: "VEF(BsF)", value: 294 }, { text: "VND", value: 295 }, { text: "VND(đ)", value: 296 }, { text: "VUV", value: 297 }, { text: "VUV(Vt)", value: 298 }, { text: "WST", value: 299 }, { text: "WST(T)", value: 300 },
            { text: "XAF", value: 301 }, { text: "XAF(Fr)", value: 302 }, { text: "XCD", value: 303 }, { text: "XCD($)", value: 304 }, { text: "XOF", value: 305 }, { text: "XOF(Fr)", value: 306 }, { text: "XPF", value: 307 }, { text: "XPF(Fr)", value: 308 }, { text: "YER", value: 309 }, { text: "YER(﷼)", value: 310 },
            { text: "ZAR", value: 311 }, { text: "ZAR(R)", value: 312 }, { text: "ZMW", value: 313 }, { text: "ZMW(ZK)", value: 314 }, { text: "ZWL", value: 315 }, { text: "ZWL($)", value: 316 }
        ];
        this.searchList = [];
        this.searchList = [...this.symbols];
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectSymbols(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.symbols, ['text']);
        else
            this.searchList = this.symbols;
    }
}
SearchCurrencyComponent.ɵfac = function SearchCurrencyComponent_Factory(t) { return new (t || SearchCurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe)); };
SearchCurrencyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchCurrencyComponent, selectors: [["app-currency"]], decls: 13, vars: 9, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items"], ["class", "symbols-item", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "symbols-item", 3, "click"]], template: function SearchCurrencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchCurrencyComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchCurrencyComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchCurrencyComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchCurrencyComponent_ion_item_12_Template, 3, 1, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "Search for currency symbol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .symbols-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .symbols-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   .symbols-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jdXJyZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0UsdUJBQUE7QUFDTjtBQUlFO0VBQ0UseUJBQUE7QUFESjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtBQUFOIiwiZmlsZSI6InNlYXJjaC1jdXJyZW5jeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAuc3ltYm9scy1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICAmLXByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 88403:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-customer/search-customer.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCustomerComponent": () => (/* binding */ SearchCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








function SearchCustomerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchCustomerComponent_div_4_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const result_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onSelect(result_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r0.id_customer === result_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", result_r2.display, " ");
} }
function SearchCustomerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "No data"), " ");
} }
class SearchCustomerComponent {
    constructor(vhAlgorithm, vhQueryCafe, vhcomponent, languageService) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhcomponent = vhcomponent;
        this.languageService = languageService;
        this.closeAndReceiveCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.debt = null;
        this.customerList = [];
        this.searchList = [];
        this.inputValue = '';
        this.selectedValue = null;
        this.isFocused = false;
        this.isOpen = false;
    }
    ngOnInit() {
    }
    cancel(value) {
        this.closeAndReceiveCustomer.emit(value);
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        document.getElementById("select-customer").click();
    }
    onFocusInput() {
        this.isFocused = true;
        if (this.searchList.length)
            this.isOpen = true;
        // Nếu đã chọn giá trị rồi, thì khi focus → xóa inputValue để user nhập mới
        if (this.selectedValue) {
            this.inputValue = '';
        }
    }
    onBlurInput() {
        this.isFocused = false;
        setTimeout(() => {
            this.isOpen = false;
        }, 100);
        // Nếu người dùng không nhập gì mới thì giữ lại kết quả đã chọn
        if (this.selectedValue)
            this.inputValue = this.selectedValue.display;
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            const searchValue = this.vhAlgorithm.changeAlias(this.inputValue.trim().toLowerCase());
            console.log(searchValue);
            event.preventDefault();
            event.stopPropagation();
            if (searchValue.length >= 6) {
                this.vhQueryCafe.searchKeyword_NamePhone('customers', searchValue).then((res) => {
                    this.isOpen = true;
                    console.log(res);
                    this.searchList = res.map(item => {
                        return Object.assign(Object.assign({}, item), { earning_point: item.earning_point ? item.earning_point : 0, display: item.name + ' - ' + item.phone });
                    });
                    if (this.searchList.length == 0) {
                        this.vhcomponent.alertMessageDesktop("warning", this.languageService.translate('No data'));
                    }
                    if (this.searchList.length == 1) {
                        this.onSelect(this.searchList[0]);
                    }
                });
            }
            else
                this.vhcomponent.alertMessageDesktop("warning", this.languageService.translate('Please enter full infomation'));
        }
    }
    onSelect(result) {
        this.selectedValue = result;
        this.inputValue = result.display;
        this.isOpen = false;
        this.id_customer = this.selectedValue._id;
        this.cancel(this.id_customer);
        // this.searchList = [];
    }
}
SearchCustomerComponent.ɵfac = function SearchCustomerComponent_Factory(t) { return new (t || SearchCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
SearchCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchCustomerComponent, selectors: [["app-search-customer"]], inputs: { id_customer: "id_customer" }, outputs: { closeAndReceiveCustomer: "closeAndReceiveCustomer" }, decls: 6, vars: 8, consts: [[1, "vh-custom-select"], ["id", "select-customer", "type", "text", 3, "placeholder", "ngModel", "ngModelChange", "focus", "keydown", "blur"], [1, "dropdown"], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "no-result", "style", "text-align: center;", 4, "ngIf"], [3, "click"], [1, "no-result", 2, "text-align", "center"]], template: function SearchCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchCustomerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.inputValue = $event; })("focus", function SearchCustomerComponent_Template_input_focus_1_listener() { return ctx.onFocusInput(); })("keydown", function SearchCustomerComponent_Template_input_keydown_1_listener($event) { return ctx.onKeyDown($event); })("blur", function SearchCustomerComponent_Template_input_blur_1_listener() { return ctx.onBlurInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchCustomerComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchCustomerComponent_div_5_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, "Enter name or phone number to search ..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.searchList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchList.length === 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".vh-custom-select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 99%;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  max-height: 150px;\n  overflow-y: auto;\n  z-index: 1000;\n  display: none;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown.open[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--ion-color-vh-green);\n  box-shadow: none;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBR0YiLCJmaWxlIjoic2VhcmNoLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZoLWN1c3RvbS1zZWxlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTklOztcclxufVxyXG5cclxuLnZoLWN1c3RvbS1zZWxlY3QgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnZoLWN1c3RvbS1zZWxlY3QgLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aC1jdXN0b20tc2VsZWN0IC5kcm9wZG93bi5vcGVuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnZoLWN1c3RvbS1zZWxlY3QgLmRyb3Bkb3duIGRpdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52aC1jdXN0b20tc2VsZWN0IC5kcm9wZG93biBkaXY6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuLnZoLWN1c3RvbS1zZWxlY3QgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pOyAgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4udmgtY3VzdG9tLXNlbGVjdCAuZHJvcGRvd24gZGl2LnNlbGVjdGVkIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTsgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 48362:
/*!*********************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-dishes/search-dishes.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchDishesComponent": () => (/* binding */ SearchDishesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchDishesComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchDishesComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchDishesComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectFoods(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.img ? item_r2.img : "assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
} }
class SearchDishesComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.foodList = [];
        this.searchList = [];
        this.type = 'hide';
        this.changeType();
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectFoods(value) {
        this.vhComponent.hideModal(value);
    }
    changeType() {
        this.foodList = this.vhQueryCafe.getlocalProducts(1);
        this.search('');
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.foodList, ['name']);
        else
            this.searchList = this.foodList;
    }
}
SearchDishesComponent.ɵfac = function SearchDishesComponent_Factory(t) { return new (t || SearchDishesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm)); };
SearchDishesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchDishesComponent, selectors: [["app-search-dishes"]], decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", "", 1, "ion-no-padding"], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "food-item ion-no-padding", "detail", "", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], ["detail", "", 1, "food-item", "ion-no-padding", 3, "click"], [1, "food-item-img"], [3, "src"], ["size", "12", 1, "ion-no-padding", "food-item-name"]], template: function SearchDishesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchDishesComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchDishesComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchDishesComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchDishesComponent_ion_item_12_Template, 7, 2, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Search for dishes/beverage name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonThumbnail], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px !important;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\nion-content[_ngcontent-%COMP%]   .food-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .food-item-img[_ngcontent-%COMP%] {\n  margin: 8px;\n}\nion-content[_ngcontent-%COMP%]   .food-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   .food-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n  background-color: black;\n  opacity: 0.3;\n}\n.view-info-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  z-index: 12;\n  width: 100%;\n  transform: translateY(-100%);\n  visibility: hidden;\n  border-radius: 5px 5px 0 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-white);\n  overflow: auto;\n  max-height: 50vh;\n  max-width: 480px;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs[_ngcontent-%COMP%] {\n  --inner-padding-start: 16px;\n  --inner-padding-end: 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity-btn[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity-text[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n}\n.view-info-popup[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  height: 44px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1kaXNoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwwQkFBQTtBQUFKO0FBQ0k7RUFDRSxrQ0FBQTtBQUNOO0FBSUU7RUFDRSx5QkFBQTtBQURKO0FBRUk7RUFDRSxXQUFBO0FBQU47QUFFSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUZGO0FBSUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBREY7QUFFRTtFQUNFLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVFO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFDTjtBQUFNO0VBQ0Usa0JBQUE7QUFFUjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6InNlYXJjaC1kaXNoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5mb29kLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICYtaW1nIHtcclxuICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICB9XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICAmLXByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbi52aWV3LWluZm8tcG9wdXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgaW9uLWdyaWQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgfVxyXG4gIC5zdWJzIHtcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAmLXF1YW50aXR5IHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgJi1idG4ge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAmLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmFkZC1idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 26171:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-employee/search-employee.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchEmployeeComponent": () => (/* binding */ SearchEmployeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchEmployeeComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchEmployeeComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchEmployeeComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectEmployees(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.img ? item_r2.img : "assets/icon/management/noavatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "Phone number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.phone, " ");
} }
class SearchEmployeeComponent {
    constructor(vhComponent, vhAlgorithm, vhAuth) {
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.employeeList = this.vhAuth.getlocalEmployees();
        this.searchList = [];
        this.searchList = [...this.employeeList];
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectEmployees(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.employeeList, ['name']);
        else
            this.searchList = this.employeeList;
    }
}
SearchEmployeeComponent.ɵfac = function SearchEmployeeComponent_Factory(t) { return new (t || SearchEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAuth)); };
SearchEmployeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchEmployeeComponent, selectors: [["app-search-employee"]], decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "employee-item", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "employee-item", 3, "click"], ["slot", "start"], [3, "src"], ["fixed", "", 1, "ion-no-padding"], ["size", "12", 1, "ion-no-padding", "employee-item-name"], ["size", "12", 1, "ion-no-padding", "employee-item-price"], ["color", "vh-green"]], template: function SearchEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchEmployeeComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchEmployeeComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchEmployeeComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchEmployeeComponent_ion_item_12_Template, 13, 6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Search for employee name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAvatar], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .employee-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .employee-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   .employee-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0UsdUJBQUE7QUFDTjtBQUlFO0VBQ0UseUJBQUE7QUFESjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtBQUFOIiwiZmlsZSI6InNlYXJjaC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAuZW1wbG95ZWUtaXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgJi1uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgJi1wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 74384:
/*!*****************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-foods-grid/search-foods-grid.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFoodsGridComponent": () => (/* binding */ SearchFoodsGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








function SearchFoodsGridComponent_ion_text_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchFoodsGridComponent_div_25_ion_card_1_ion_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-img", 27);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r8.img);
} }
function SearchFoodsGridComponent_div_25_ion_card_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "g", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "g", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchFoodsGridComponent_div_25_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_div_25_ion_card_1_Template_ion_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const item_r8 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.selectFoods(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchFoodsGridComponent_div_25_ion_card_1_ion_img_2_Template, 1, 1, "ion-img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchFoodsGridComponent_div_25_ion_card_1__svg_svg_3_Template, 7, 0, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-card-subtitle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r8.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r8.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.name);
} }
function SearchFoodsGridComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchFoodsGridComponent_div_25_ion_card_1_Template, 6, 3, "ion-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dish_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", dish_r6)("ngForTrackBy", ctx_r2.myTrackByFunction);
} }
function SearchFoodsGridComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_div_26_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.viewInfo("hide"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchFoodsGridComponent_ng_container_37_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_37_ion_item_1_Template_ion_label_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const item_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.editFood(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_37_ion_item_1_Template_ion_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const item_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.subQuantity(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_37_ion_item_1_Template_ion_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const item_r19 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.addQuantity(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, item_r19.name), " - ", ctx_r16.vhAlgorithm.vhcurrencyunit(item_r19.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r19.note ? item_r19.note : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, "Note..."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r19.quantity, " ");
} }
function SearchFoodsGridComponent_ng_container_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "Not property yet"), " ");
} }
function SearchFoodsGridComponent_ng_container_37_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_37_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.addFood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Add"), " ");
} }
function SearchFoodsGridComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchFoodsGridComponent_ng_container_37_ion_item_1_Template, 18, 8, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchFoodsGridComponent_ng_container_37_div_2_Template, 4, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchFoodsGridComponent_ng_container_37_ion_button_3_Template, 3, 3, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.choiceFood.subs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.choiceFood.subs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.choiceFood.subs.length);
} }
function SearchFoodsGridComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-grid", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_38_Template_ion_label_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.editFood(ctx_r26.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_38_Template_ion_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.subQuantity(ctx_r28.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_38_Template_ion_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.addQuantity(ctx_r29.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_ng_container_38_Template_ion_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.addFood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.vhAlgorithm.vhcurrencyunit(ctx_r5.choiceFood.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.choiceFood.note ? ctx_r5.choiceFood.note : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 4, "Note..."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.choiceFood.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 6, "Add"), " ");
} }
class SearchFoodsGridComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm, animationCtrl, languageService, cdRef, platform) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.animationCtrl = animationCtrl;
        this.languageService = languageService;
        this.cdRef = cdRef;
        this.platform = platform;
        this.foodList = [];
        this.searchList = [];
        this.choiceFood = { subs: [] };
        this.typeGoods = 1;
        this.type = 'hide';
        this.changeType(this.typeGoods);
    }
    ngAfterViewInit() {
        this.searchList = [...this.foodList];
        this.searchList = this.transform();
    }
    myTrackByFunction(index, complexItem) {
        return complexItem._id;
    }
    itemHeightFn(item, index) {
        return 176;
    }
    viewInfo(type = 'show') {
        this.type = type;
        if (type == 'show')
            this.animationCtrl.create('view-info-popup-show').addElement(document.querySelector('.view-info-popup')).duration(300)
                .easing('cubic-bezier(0.16, 1, 0.3, 1)')
                .fromTo('transform', 'translateY(100%)', 'translateY(0)')
                .fromTo('visibility', 'hidden', 'visible').play();
        if (type == 'hide')
            this.animationCtrl.create('view-info-popup-hide').addElement(document.querySelector('.view-info-popup')).duration(300)
                .easing('cubic-bezier(0.16, 1, 0.3, 1)')
                .fromTo('transform', 'translateY(0)', 'translateY(100%)')
                .fromTo('visibility', 'visible', 'hidden').play();
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectFoods(value) {
        if (value.manysize) {
            this.choiceFood = Object.assign(Object.assign({}, value), { subs: value.subs.map(item => { return Object.assign(Object.assign({}, item), { quantity: 0, note: '', price_origin: item.price }); }) });
        }
        else {
            this.choiceFood = Object.assign(Object.assign({}, value), { quantity: 0, note: '', price_origin: value.price });
        }
        if (this.choiceFood)
            this.viewInfo('show');
        //if (value) this.vhComponent.hideModal(value)
    }
    changeType(value) {
        if (value == 1)
            this.foodList = this.vhQueryCafe.getlocalProducts(13).filter(good => !good.delete_hidden);
        else if (value == 2)
            this.foodList = this.vhQueryCafe.getlocalProducts(2).filter(good => !good.delete_hidden);
        this.search('');
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.foodList, ['name']);
        else
            this.searchList = this.foodList;
        this.searchList = this.transform();
    }
    /** Chỉnh sửa sản phẩm */
    editFood(sub) {
        this.vhComponent.alertInputRadioCheckbox(this.languageService.translate("Edit"), sub.name, this.languageService.translate("Save"), this.languageService.translate('Cancel'), [
            {
                name: "quantity", type: 'number', placeholder: this.languageService.translate('Quantity'), value: sub.quantity, cssClass: "selling-quantity", id: "selling-quantity",
                attributes: {
                    min: 1,
                    max: 99999999
                }
            },
            {
                name: "note", type: 'text', placeholder: this.languageService.translate('Note...'), value: sub.note, cssClass: "selling-note", id: "selling-note",
            }
        ]).then(result => {
            let number = document.getElementById('selling-quantity')['value'];
            sub['quantity'] = parseFloat(number) < 1 || !number.length ? 1 : parseFloat(number);
            sub['note'] = document.getElementById('selling-note')['value'];
        }, () => { });
    }
    subQuantity(item) {
        if (item.quantity > 0)
            item.quantity--;
    }
    addQuantity(item) {
        item.quantity++;
    }
    addFood() {
        if (this.choiceFood) {
            this.vhComponent.hideModal(this.choiceFood);
        }
    }
    transform() {
        if (this.platform.width() >= 1024)
            return this.transformProd4();
        else if (this.platform.width() >= 599)
            return this.transformProd3();
        else
            return this.transformProd2();
    }
    transformProd2() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            return this.searchList[index + 1] ? [item, this.searchList[index + 1]] : [item];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 2) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd3() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 3) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd4() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else if (!this.searchList[index + 3])
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2], this.searchList[index + 3]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 4) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
}
SearchFoodsGridComponent.ɵfac = function SearchFoodsGridComponent_Factory(t) { return new (t || SearchFoodsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform)); };
SearchFoodsGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchFoodsGridComponent, selectors: [["app-search-foods-grid"]], decls: 39, vars: 24, consts: [["mode", "ios", 1, "ion-no-border", "search-grid-product-header"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["fixed", "", 1, "ion-no-padding"], ["size", "12"], ["mode", "md", 3, "ngModel", "ngModelChange"], [3, "value"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["size", "12", 1, "ion-no-padding"], [3, "items", "approxItemHeight", "itemHeight"], ["scroll", ""], ["class", "search-grid-product-area-sub", 4, "virtualItem"], ["class", "backdrop", 3, "click", 4, "ngIf"], [1, "view-info-popup"], ["mode", "ios"], ["slot", "start"], ["mode", "md", "color", "vh-black", 3, "click"], ["color", "vh-red", "slot", "icon-only", "name", "close-outline", 1, "ion-icon"], ["color", "vh-green"], [4, "ngIf"], ["color", "vh-black", 1, "no-data"], [1, "search-grid-product-area-sub"], ["mode", "ios", "class", "product-item", "button", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mode", "ios", "button", "", 1, "product-item", 3, "click"], [1, "product-item-img"], [3, "src", 4, "ngIf"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512", 4, "ngIf"], [1, "product-item-name"], [3, "src"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512"], ["id", "Group_1507", "data-name", "Group 1507"], ["id", "Group_1506", "data-name", "Group 1506"], ["id", "Path_716", "data-name", "Path 716", "d", "M446.575,0H65.425A65.5,65.5,0,0,0,0,65.426V446.575A65.5,65.5,0,0,0,65.425,512h381.15A65.5,65.5,0,0,0,512,446.574V65.426A65.5,65.5,0,0,0,446.575,0Zm35.267,446.575a35.307,35.307,0,0,1-35.267,35.267H65.425a35.308,35.308,0,0,1-35.268-35.267V391.568l99.255-84.451a9.745,9.745,0,0,1,12.562-.075l62.174,51.628a15.081,15.081,0,0,0,20.3-.946L372.181,209.77a9.761,9.761,0,0,1,14.486.744L481.843,327.7V446.575Zm0-166.71L410.076,191.5a39.918,39.918,0,0,0-59.236-3.039L212.832,326.681l-51.59-42.839a39.849,39.849,0,0,0-51.373.308L30.157,351.972V65.426A35.308,35.308,0,0,1,65.425,30.158h381.15a35.307,35.307,0,0,1,35.267,35.268Z", "fill", "#9a9a9a"], ["id", "Group_1509", "data-name", "Group 1509"], ["id", "Group_1508", "data-name", "Group 1508"], ["id", "Path_717", "data-name", "Path 717", "d", "M161.174,62.995a72.713,72.713,0,1,0,72.713,72.713A72.8,72.8,0,0,0,161.174,62.995Zm0,115.269a42.556,42.556,0,1,1,42.556-42.556A42.6,42.6,0,0,1,161.174,178.264Z", "fill", "#9a9a9a"], [1, "backdrop", 3, "click"], ["mode", "ios", "class", "ion-no-padding subs", 4, "ngFor", "ngForOf"], ["style", "min-height: 40px; position: relative;", 4, "ngIf"], ["mode", "md", "class", "add-btn ion-no-margin", "expand", "full", "fill", "solid", "color", "vh-green", 3, "click", 4, "ngIf"], ["mode", "ios", 1, "ion-no-padding", "subs"], ["fixed", ""], ["size", "9", 1, "subs-name"], ["color", "vh-gray", 3, "click"], ["size", "3", 1, "subs-quantity"], ["mode", "ios", "fill", "clear", "size", "small", 1, "subs-quantity-btn", "ion-no-padding", "ion-no-margin", 3, "click"], ["slot", "icon-only", "src", "assets/icon/sub-quantity.svg"], [1, "subs-quantity-text"], ["slot", "icon-only", "src", "assets/icon/add-quantity.svg"], [2, "min-height", "40px", "position", "relative"], ["mode", "md", "expand", "full", "fill", "solid", "color", "vh-green", 1, "add-btn", "ion-no-margin", 3, "click"]], template: function SearchFoodsGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function SearchFoodsGridComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchFoodsGridComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-segment", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchFoodsGridComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.typeGoods = $event; })("ngModelChange", function SearchFoodsGridComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.changeType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SearchFoodsGridComponent_ion_text_19_Template, 3, 3, "ion-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-virtual-scroll", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SearchFoodsGridComponent_div_25_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SearchFoodsGridComponent_div_26_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-toolbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-buttons", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsGridComponent_Template_ion_button_click_33_listener() { return ctx.viewInfo("hide"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-title", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SearchFoodsGridComponent_ng_container_37_Template, 4, 3, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, SearchFoodsGridComponent_ng_container_38_Template, 21, 8, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Search for dishes/beverage name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 18, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.typeGoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 20, "Dishes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 22, "Service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 180)("itemHeight", ctx.itemHeightFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.choiceFood.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choiceFood.manysize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.choiceFood.manysize);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.UpperCasePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px !important;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\nion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n}\n@media only screen and (min-width: 319px) {\n  ion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n}\n@media only screen and (min-width: 599px) {\n  ion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 33.3% 33.3% 33.3%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 25% 25% 25% 25%;\n  }\n}\nion-content[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  box-shadow: 0pt 3px 6px #00000029;\n  margin: 8px 16px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .product-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n  max-height: 60px;\n  overflow: auto;\n  padding: 8px;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  color: var(--ion-color-vh-black);\n  background: rgba(255, 255, 255, 0.65);\n}\nion-content[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  box-shadow: 0pt 3px 6px #00000029;\n  margin: 8px 16px;\n  max-height: 160px;\n  max-width: 160px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  height: 160px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: unset !important;\n}\nion-content[_ngcontent-%COMP%]   .product-item-img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-height: 160px;\n  max-width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .product-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n  max-height: 60px;\n  overflow: auto;\n  padding: 8px;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  color: var(--ion-color-vh-black);\n  background: rgba(255, 255, 255, 0.65);\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n  background-color: black;\n  opacity: 0.3;\n}\n.view-info-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  z-index: 12;\n  width: 100%;\n  transform: translateY(-100%);\n  visibility: hidden;\n  border-radius: 5px 5px 0 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-white);\n  overflow: auto;\n  max-height: 50vh;\n  max-width: 480px;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs[_ngcontent-%COMP%] {\n  --inner-padding-start: 16px;\n  --inner-padding-end: 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity-btn[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity-text[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n}\n.view-info-popup[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  height: 44px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1mb29kcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMEJBQUE7QUFBSjtBQUNJO0VBQ0Usa0NBQUE7QUFDTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBRk47QUFHTTtFQUhGO0lBSUksOEJBQUE7RUFBTjtBQUNGO0FBQ007RUFORjtJQU9JLHdDQUFBO0VBRU47QUFDRjtBQURNO0VBVEY7SUFVSSxzQ0FBQTtFQUlOO0FBQ0Y7QUFERTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUdKO0FBRE07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUdSO0FBQUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0FBRU47QUFDRTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNNO0VBQ0UsYUFBQTtBQUNSO0FBQVE7RUFDRSx1QkFBQTtBQUVWO0FBQ007RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQ0FBQTtBQUFOO0FBS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRkY7QUFJQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFERjtBQUVFO0VBQ0UscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUU7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUNOO0FBQU07RUFDRSxrQkFBQTtBQUVSO0FBQU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQUoiLCJmaWxlIjoic2VhcmNoLWZvb2RzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5zZWFyY2gtZ3JpZC1wcm9kdWN0LWFyZWEge1xyXG4gICAgJi1zdWIge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzE5cHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMyUgMzMuMyUgMzMuMyU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucHJvZHVjdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDBwdCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogOHB4IDE2cHg7XHJcbiAgICAmLWltZyB7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJvZHVjdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDBwdCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogOHB4IDE2cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNjBweDtcclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICAmLWltZyB7XHJcbiAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuLnZpZXctaW5mby1wb3B1cCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAxMjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICBpb24tZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICB9XHJcbiAgLnN1YnMge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICYtcXVhbnRpdHkge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAmLWJ0biB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWRkLWJ0biB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 46625:
/*!***************************************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-foods-promotions-grid/search-foods-promotions-grid.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFoodsPromotionsGridComponent": () => (/* binding */ SearchFoodsPromotionsGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function SearchFoodsPromotionsGridComponent_ion_text_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchFoodsPromotionsGridComponent_div_25_ion_card_1_ion_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 19);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.img);
} }
function SearchFoodsPromotionsGridComponent_div_25_ion_card_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchFoodsPromotionsGridComponent_div_25_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchFoodsPromotionsGridComponent_div_25_ion_card_1_Template_ion_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.selectFoods(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchFoodsPromotionsGridComponent_div_25_ion_card_1_ion_img_2_Template, 1, 1, "ion-img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchFoodsPromotionsGridComponent_div_25_ion_card_1__svg_svg_3_Template, 7, 0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-subtitle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r5.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.name);
} }
function SearchFoodsPromotionsGridComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchFoodsPromotionsGridComponent_div_25_ion_card_1_Template, 6, 3, "ion-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dish_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", dish_r3)("ngForTrackBy", ctx_r2.myTrackByFunction);
} }
class SearchFoodsPromotionsGridComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm, cdRef, platform) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.platform = platform;
        this.foodList = [];
        this.searchList = [];
        this.choiceFood = {};
        this.typeGoods = 1;
    }
    ngAfterViewInit() {
        this.changeType(this.typeGoods);
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    myTrackByFunction(index, complexItem) {
        return complexItem._id;
    }
    itemHeightFn(item, index) {
        return 176;
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectFoods(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    changeType(value) {
        this.foodList = this.vhQueryCafe.getlocalProducts().filter(good => good.type == value);
        this.search('');
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.foodList, ['name']);
        else
            this.searchList = this.foodList;
        this.searchList = this.transform();
    }
    transform() {
        if (this.platform.width() >= 1024)
            return this.transformProd4();
        else if (this.platform.width() >= 599)
            return this.transformProd3();
        else
            return this.transformProd2();
    }
    transformProd2() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            return this.searchList[index + 1] ? [item, this.searchList[index + 1]] : [item];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 2) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd3() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 3) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd4() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else if (!this.searchList[index + 3])
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2], this.searchList[index + 3]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 4) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
}
SearchFoodsPromotionsGridComponent.ɵfac = function SearchFoodsPromotionsGridComponent_Factory(t) { return new (t || SearchFoodsPromotionsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform)); };
SearchFoodsPromotionsGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchFoodsPromotionsGridComponent, selectors: [["app-search-foods-promotions-grid"]], decls: 26, vars: 20, consts: [["mode", "ios", 1, "ion-no-border", "search-grid-product-header"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["fixed", "", 1, "ion-no-padding"], ["size", "12"], ["mode", "md", 3, "ngModel", "ngModelChange"], [3, "value"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["size", "12", 1, "ion-no-padding"], [3, "items", "approxItemHeight", "itemHeight"], ["scroll", ""], ["class", "search-grid-product-area-sub", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "search-grid-product-area-sub"], ["mode", "ios", "class", "product-item", "button", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mode", "ios", "button", "", 1, "product-item", 3, "click"], [1, "product-item-img"], [3, "src", 4, "ngIf"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512", 4, "ngIf"], [1, "product-item-name"], [3, "src"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512"], ["id", "Group_1507", "data-name", "Group 1507"], ["id", "Group_1506", "data-name", "Group 1506"], ["id", "Path_716", "data-name", "Path 716", "d", "M446.575,0H65.425A65.5,65.5,0,0,0,0,65.426V446.575A65.5,65.5,0,0,0,65.425,512h381.15A65.5,65.5,0,0,0,512,446.574V65.426A65.5,65.5,0,0,0,446.575,0Zm35.267,446.575a35.307,35.307,0,0,1-35.267,35.267H65.425a35.308,35.308,0,0,1-35.268-35.267V391.568l99.255-84.451a9.745,9.745,0,0,1,12.562-.075l62.174,51.628a15.081,15.081,0,0,0,20.3-.946L372.181,209.77a9.761,9.761,0,0,1,14.486.744L481.843,327.7V446.575Zm0-166.71L410.076,191.5a39.918,39.918,0,0,0-59.236-3.039L212.832,326.681l-51.59-42.839a39.849,39.849,0,0,0-51.373.308L30.157,351.972V65.426A35.308,35.308,0,0,1,65.425,30.158h381.15a35.307,35.307,0,0,1,35.267,35.268Z", "fill", "#9a9a9a"], ["id", "Group_1509", "data-name", "Group 1509"], ["id", "Group_1508", "data-name", "Group 1508"], ["id", "Path_717", "data-name", "Path 717", "d", "M161.174,62.995a72.713,72.713,0,1,0,72.713,72.713A72.8,72.8,0,0,0,161.174,62.995Zm0,115.269a42.556,42.556,0,1,1,42.556-42.556A42.6,42.6,0,0,1,161.174,178.264Z", "fill", "#9a9a9a"]], template: function SearchFoodsPromotionsGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchFoodsPromotionsGridComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchFoodsPromotionsGridComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-segment", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchFoodsPromotionsGridComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.typeGoods = $event; })("ngModelChange", function SearchFoodsPromotionsGridComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.changeType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SearchFoodsPromotionsGridComponent_ion_text_19_Template, 3, 3, "ion-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-virtual-scroll", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SearchFoodsPromotionsGridComponent_div_25_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 12, "Search for dishes/beverage name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 14, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.typeGoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 16, "Food"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, "Service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 180)("itemHeight", ctx.itemHeightFn);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px !important;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\nion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n}\n@media only screen and (min-width: 319px) {\n  ion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n}\n@media only screen and (min-width: 599px) {\n  ion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 33.3% 33.3% 33.3%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ion-content[_ngcontent-%COMP%]   .search-grid-product-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 25% 25% 25% 25%;\n  }\n}\nion-content[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  box-shadow: 0pt 3px 6px #00000029;\n  margin: 8px 16px;\n  max-height: 160px;\n  max-width: 160px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  height: 160px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: unset !important;\n}\nion-content[_ngcontent-%COMP%]   .product-item-img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-height: 160px;\n  max-width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .product-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n  max-height: 60px;\n  overflow: auto;\n  padding: 8px;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  color: var(--ion-color-vh-black);\n  background: rgba(255, 255, 255, 0.65);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1mb29kcy1wcm9tb3Rpb25zLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwwQkFBQTtBQUFKO0FBQ0k7RUFDRSxrQ0FBQTtBQUNOO0FBS0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFGTjtBQUdNO0VBSEY7SUFJSSw4QkFBQTtFQUFOO0FBQ0Y7QUFDTTtFQU5GO0lBT0ksd0NBQUE7RUFFTjtBQUNGO0FBRE07RUFURjtJQVVJLHNDQUFBO0VBSU47QUFDRjtBQURFO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdKO0FBRE07RUFDRSxhQUFBO0FBR1I7QUFGUTtFQUNFLHVCQUFBO0FBSVY7QUFETTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUdSO0FBQUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0FBRU4iLCJmaWxlIjoic2VhcmNoLWZvb2RzLXByb21vdGlvbnMtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggIWltcG9ydGFudDtcclxuICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLnNlYXJjaC1ncmlkLXByb2R1Y3QtYXJlYSB7XHJcbiAgICAmLXN1YiB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMTlweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMHB0IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgbWFyZ2luOiA4cHggMTZweDtcclxuICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgICYtaW1nIHtcclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 58577:
/*!*****************************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-foods-promotions/search-foods-promotions.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFoodsPromotionsComponent": () => (/* binding */ SearchFoodsPromotionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function SearchFoodsPromotionsComponent_ion_text_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchFoodsPromotionsComponent_ion_item_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchFoodsPromotionsComponent_ion_item_24_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectFoods(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-thumbnail", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.img ? item_r2.img : "assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
} }
class SearchFoodsPromotionsComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.foodList = [];
        this.searchList = [];
        this.choiceFood = {};
        this.typeGoods = 1;
        this.changeType(this.typeGoods);
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectFoods(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    changeType(value) {
        this.foodList = this.vhQueryCafe.getlocalProducts().filter(good => good.type == value);
        this.search('');
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.foodList, ['name']);
        else
            this.searchList = this.foodList;
    }
}
SearchFoodsPromotionsComponent.ɵfac = function SearchFoodsPromotionsComponent_Factory(t) { return new (t || SearchFoodsPromotionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm)); };
SearchFoodsPromotionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchFoodsPromotionsComponent, selectors: [["app-search-foods-promotions"]], decls: 25, vars: 19, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["fixed", ""], ["size", "12"], ["mode", "md", 3, "ngModel", "ngModelChange"], [3, "value"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", "", 1, "ion-no-padding"], [3, "items", "approxItemHeight"], ["class", "food-item ion-no-padding", "detail", "", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], ["detail", "", 1, "food-item", "ion-no-padding", 3, "click"], [1, "food-item-img"], [3, "src"], ["size", "12", 1, "ion-no-padding", "food-item-name"]], template: function SearchFoodsPromotionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchFoodsPromotionsComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchFoodsPromotionsComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-segment", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchFoodsPromotionsComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.typeGoods = $event; })("ngModelChange", function SearchFoodsPromotionsComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.changeType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SearchFoodsPromotionsComponent_ion_text_19_Template, 3, 3, "ion-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-virtual-scroll", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SearchFoodsPromotionsComponent_ion_item_24_Template, 7, 2, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, "Search for dishes/beverage name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.typeGoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 15, "Food"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 17, "Service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonThumbnail], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px !important;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\nion-content[_ngcontent-%COMP%]   .food-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .food-item-img[_ngcontent-%COMP%] {\n  margin: 8px;\n}\nion-content[_ngcontent-%COMP%]   .food-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   .food-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n  background-color: black;\n  opacity: 0.3;\n}\n.view-info-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  z-index: 12;\n  width: 100%;\n  transform: translateY(-100%);\n  visibility: hidden;\n  border-radius: 5px 5px 0 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-white);\n  overflow: auto;\n  max-height: 50vh;\n  max-width: 480px;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs[_ngcontent-%COMP%] {\n  --inner-padding-start: 16px;\n  --inner-padding-end: 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  margin: 0 0 0 16px;\n}\n.view-info-popup[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  height: 44px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1mb29kcy1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMEJBQUE7QUFBSjtBQUNJO0VBQ0Usa0NBQUE7QUFDTjtBQUlFO0VBQ0UseUJBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFGRjtBQUlBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQURGO0FBRUU7RUFDRSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFBSiIsImZpbGUiOiJzZWFyY2gtZm9vZHMtcHJvbW90aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggIWltcG9ydGFudDtcclxuICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLmZvb2QtaXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgJi1pbWcge1xyXG4gICAgICBtYXJnaW46IDhweDtcclxuICAgIH1cclxuICAgICYtbmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgICYtcHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuLnZpZXctaW5mby1wb3B1cCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAxMjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICBpb24tZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICB9XHJcbiAgLnN1YnMge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFkZC1idG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 45361:
/*!*******************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-foods/search-foods.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFoodsComponent": () => (/* binding */ SearchFoodsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








function SearchFoodsComponent_ion_text_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchFoodsComponent_ion_item_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ion_item_24_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.selectFoods(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-thumbnail", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-grid", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.img ? item_r5.img : "assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function SearchFoodsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_div_25_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.viewInfo("hide"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchFoodsComponent_ng_container_36_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_36_ion_item_1_Template_ion_label_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.editFood(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_36_ion_item_1_Template_ion_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r13 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.subQuantity(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_36_ion_item_1_Template_ion_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r13 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.addQuantity(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, item_r13.name), " - ", ctx_r10.vhAlgorithm.vhcurrencyunit(item_r13.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r13.note ? item_r13.note : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, "Note..."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r13.quantity, " ");
} }
function SearchFoodsComponent_ng_container_36_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "Not property yet"), " ");
} }
function SearchFoodsComponent_ng_container_36_ion_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_36_ion_button_3_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.addFood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Add"), " ");
} }
function SearchFoodsComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchFoodsComponent_ng_container_36_ion_item_1_Template, 18, 8, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchFoodsComponent_ng_container_36_div_2_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchFoodsComponent_ng_container_36_ion_button_3_Template, 3, 3, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.choiceFood.subs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.choiceFood.subs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.choiceFood.subs.length);
} }
function SearchFoodsComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-grid", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_37_Template_ion_label_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.editFood(ctx_r20.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_37_Template_ion_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.subQuantity(ctx_r22.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_37_Template_ion_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.addQuantity(ctx_r23.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_ng_container_37_Template_ion_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.addFood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.choiceFood.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.choiceFood.note ? ctx_r4.choiceFood.note : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 4, "Note..."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.choiceFood.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 6, "Add"), " ");
} }
class SearchFoodsComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm, animationCtrl, languageService) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.animationCtrl = animationCtrl;
        this.languageService = languageService;
        this.selectOption = true;
        this.foodList = [];
        this.searchList = [];
        this.choiceFood = { subs: [] };
        this.typeGoods = 1;
        this.type = 'hide';
        this.changeType(this.typeGoods);
    }
    viewInfo(type = 'show') {
        this.type = type;
        if (type == 'show')
            this.animationCtrl.create('view-info-popup-show').addElement(document.querySelector('.view-info-popup')).duration(300)
                .easing('cubic-bezier(0.16, 1, 0.3, 1)')
                .fromTo('transform', 'translateY(100%)', 'translateY(0)')
                .fromTo('visibility', 'hidden', 'visible').play();
        if (type == 'hide')
            this.animationCtrl.create('view-info-popup-hide').addElement(document.querySelector('.view-info-popup')).duration(300)
                .easing('cubic-bezier(0.16, 1, 0.3, 1)')
                .fromTo('transform', 'translateY(0)', 'translateY(100%)')
                .fromTo('visibility', 'visible', 'hidden').play();
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectFoods(value) {
        if (this.selectOption) {
            if (value.manysize) {
                this.choiceFood = Object.assign(Object.assign({}, value), { subs: value.subs.map(item => { return Object.assign(Object.assign({}, item), { quantity: 0, note: '', price_origin: item.price }); }) });
            }
            else {
                this.choiceFood = Object.assign(Object.assign({}, value), { quantity: 0, note: '', price_origin: value.price });
            }
            if (this.choiceFood)
                this.viewInfo('show');
        }
        else
            this.vhComponent.hideModal(value);
    }
    changeType(value) {
        if (value == 1)
            this.foodList = this.vhQueryCafe.getlocalProducts(13).filter(good => !good.delete_hidden);
        else if (value == 2)
            this.foodList = this.vhQueryCafe.getlocalProducts(2).filter(good => !good.delete_hidden);
        this.search('');
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.foodList, ['name']);
        else
            this.searchList = this.foodList;
    }
    /** Chỉnh sửa sản phẩm */
    editFood(sub) {
        this.vhComponent.alertInputRadioCheckbox(this.languageService.translate("Edit"), sub.name, this.languageService.translate("Save"), this.languageService.translate('Cancel'), [
            {
                name: "quantity", type: 'number', placeholder: this.languageService.translate('Quantity'), value: sub.quantity, cssClass: "selling-quantity", id: "selling-quantity",
                attributes: {
                    min: 1,
                    max: 99999999
                }
            },
            {
                name: "note", type: 'text', placeholder: this.languageService.translate('Note...'), value: sub.note, cssClass: "selling-note", id: "selling-note",
            }
        ]).then(result => {
            let number = document.getElementById('selling-quantity')['value'];
            sub['quantity'] = parseFloat(number) < 1 || !number.length ? 1 : parseFloat(number);
            sub['note'] = document.getElementById('selling-note')['value'];
        }, () => { });
    }
    subQuantity(item) {
        if (item.quantity > 0)
            item.quantity--;
    }
    addQuantity(item) {
        item.quantity++;
    }
    addFood() {
        if (this.choiceFood) {
            this.vhComponent.hideModal(this.choiceFood);
        }
    }
}
SearchFoodsComponent.ɵfac = function SearchFoodsComponent_Factory(t) { return new (t || SearchFoodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
SearchFoodsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchFoodsComponent, selectors: [["app-search-foods"]], inputs: { selectOption: "selectOption" }, decls: 38, vars: 23, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["fixed", ""], ["size", "12"], ["mode", "md", 3, "ngModel", "ngModelChange"], [3, "value"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", "", 1, "ion-no-padding"], [3, "items", "approxItemHeight"], ["class", "food-item ion-no-padding", "detail", "", 3, "click", 4, "virtualItem"], ["class", "backdrop", 3, "click", 4, "ngIf"], [1, "view-info-popup"], ["size", "12", 1, "ion-no-padding"], ["mode", "ios"], ["slot", "start"], ["mode", "md", "color", "vh-black", 3, "click"], ["color", "vh-red", "slot", "icon-only", "name", "close-outline", 1, "ion-icon"], ["color", "vh-green"], [4, "ngIf"], ["color", "vh-black", 1, "no-data"], ["detail", "", 1, "food-item", "ion-no-padding", 3, "click"], [1, "food-item-img"], [3, "src"], ["fixed", "", 1, "ion-no-padding", 2, "max-width", "calc(100% - 72px)"], ["size", "12", 1, "ion-no-padding", "food-item-name"], [1, "backdrop", 3, "click"], ["mode", "ios", "class", "ion-no-padding subs", 4, "ngFor", "ngForOf"], ["style", "min-height: 40px; position: relative;", 4, "ngIf"], ["mode", "md", "class", "add-btn ion-no-margin", "expand", "full", "fill", "solid", "color", "vh-green", 3, "click", 4, "ngIf"], ["mode", "ios", 1, "ion-no-padding", "subs"], ["size", "9", 1, "subs-name"], ["color", "vh-gray", 3, "click"], ["size", "3", 1, "subs-quantity"], ["mode", "ios", "fill", "clear", "size", "small", 1, "subs-quantity-btn", "ion-no-padding", "ion-no-margin", 3, "click"], ["slot", "icon-only", "src", "assets/icon/sub-quantity.svg"], [1, "subs-quantity-text"], ["slot", "icon-only", "src", "assets/icon/add-quantity.svg"], [2, "min-height", "40px", "position", "relative"], ["mode", "md", "expand", "full", "fill", "solid", "color", "vh-green", 1, "add-btn", "ion-no-margin", 3, "click"]], template: function SearchFoodsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function SearchFoodsComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchFoodsComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-segment", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchFoodsComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.typeGoods = $event; })("ngModelChange", function SearchFoodsComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.changeType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SearchFoodsComponent_ion_text_19_Template, 3, 3, "ion-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-virtual-scroll", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SearchFoodsComponent_ion_item_24_Template, 7, 2, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SearchFoodsComponent_div_25_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-toolbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-buttons", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchFoodsComponent_Template_ion_button_click_32_listener() { return ctx.viewInfo("hide"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-title", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, SearchFoodsComponent_ng_container_36_Template, 4, 3, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SearchFoodsComponent_ng_container_37_Template, 21, 8, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 15, "Search for dishes/beverage name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 17, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.typeGoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 19, "Dishes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 21, "Service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.choiceFood.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.choiceFood.manysize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.choiceFood.manysize);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonThumbnail, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.UpperCasePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px !important;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\nion-content[_ngcontent-%COMP%]   .food-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .food-item-img[_ngcontent-%COMP%] {\n  margin: 8px;\n}\nion-content[_ngcontent-%COMP%]   .food-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   .food-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n  background-color: black;\n  opacity: 0.3;\n}\n.view-info-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  z-index: 12;\n  width: 100%;\n  transform: translateY(-100%);\n  visibility: hidden;\n  border-radius: 5px 5px 0 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-white);\n  overflow: auto;\n  max-height: 50vh;\n  max-width: 480px;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs[_ngcontent-%COMP%] {\n  --inner-padding-start: 16px;\n  --inner-padding-end: 0;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity-btn[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.view-info-popup[_ngcontent-%COMP%]   .subs-quantity-text[_ngcontent-%COMP%] {\n  text-align: center;\n  align-self: center;\n}\n.view-info-popup[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  font-weight: bold;\n  height: 44px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1mb29kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0FBQUo7QUFDSTtFQUNFLGtDQUFBO0FBQ047QUFJRTtFQUNFLHlCQUFBO0FBREo7QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtBQUFOO0FBS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBRkY7QUFJQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFERjtBQUVFO0VBQ0UscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUU7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUNOO0FBQU07RUFDRSxrQkFBQTtBQUVSO0FBQU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQUoiLCJmaWxlIjoic2VhcmNoLWZvb2RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAuZm9vZC1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAmLWltZyB7XHJcbiAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgfVxyXG4gICAgJi1uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgJi1wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG4udmlldy1pbmZvLXBvcHVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDEyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gIGlvbi1ncmlkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIH1cclxuICAuc3VicyB7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgJi1xdWFudGl0eSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICYtYnRuIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgJi10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZGQtYnRuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 411:
/*!***************************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-goods-inventory/search-goods-inventory.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchGoodsInventoryComponent": () => (/* binding */ SearchGoodsInventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











const _c0 = ["inputSearchProductInventory"];
function SearchGoodsInventoryComponent_ng_container_1_nz_list_item_10_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, item_r4.quantity_branch[ctx_r5.id_branch] / item_r4.raio, "1.0-2"), " ", item_r4.unit, "");
} }
function SearchGoodsInventoryComponent_ng_container_1_nz_list_item_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchGoodsInventoryComponent_ng_container_1_nz_list_item_10_Template_nz_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.chooseProduct(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item-meta", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchGoodsInventoryComponent_ng_container_1_nz_list_item_10_span_5_Template, 6, 8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzAvatar", item_r4.img ? item_r4.img : "assets/icon/management/noimage.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDescription", item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit_symbol(item_r4.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.type == 3);
} }
function SearchGoodsInventoryComponent_ng_container_1_nz_list_empty_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty");
} }
const _c1 = function () { return { standalone: true }; };
function SearchGoodsInventoryComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchGoodsInventoryComponent_ng_container_1_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.acticeFocus(); })("ngModelChange", function SearchGoodsInventoryComponent_ng_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.search = $event; })("ngModelChange", function SearchGoodsInventoryComponent_ng_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.searchProduct($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "cdk-virtual-scroll-viewport", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchGoodsInventoryComponent_ng_container_1_nz_list_item_10_Template, 6, 4, "nz-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchGoodsInventoryComponent_ng_container_1_nz_list_empty_11_Template, 1, 0, "nz-list-empty", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "Search for product name, barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.search)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.searchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchList.length === 0);
} }
class SearchGoodsInventoryComponent {
    constructor(vhAlgorithm, vhQueryCafe) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.visible_products = false;
        this.addNewProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.id_branch = this.vhQueryCafe.getDefaultBranch()._id;
        this.goodList = [];
        this.searchList = [];
        this.search = '';
    }
    ngOnInit() {
        this.getData();
    }
    ngAfterViewInit() {
        this.myInputField.nativeElement.focus();
    }
    acticeFocus() {
        this.myInputField.nativeElement.focus();
    }
    goBack() {
        this.addNewProduct.emit(false);
    }
    searchProduct(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.goodList, ['name', 'barcode']);
        else
            this.searchList = this.goodList;
    }
    chooseProduct(item) {
        this.addNewProduct.emit(item);
    }
    getData() {
        this.goodList = this.vhQueryCafe.getlocalDetailProducts(3).map(item => { return Object.assign(Object.assign({}, item), this.vhQueryCafe.getUnit_byRatio(item.units, item.units.find(u => u.default).ratio)); });
        this.searchList = this.goodList;
        this.searchProduct('');
    }
    ngAfterViewChecked() {
        if (document.querySelector(".ant-drawer-body") && document.querySelector(".search-product-input") && document.getElementById("search-product-item")) {
            document.getElementById("search-product-item").style.height = document.querySelector(".ant-drawer-body").clientHeight
                - document.querySelector(".search-product-input").clientHeight + "px";
        }
    }
}
SearchGoodsInventoryComponent.ɵfac = function SearchGoodsInventoryComponent_Factory(t) { return new (t || SearchGoodsInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQueryCafe)); };
SearchGoodsInventoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchGoodsInventoryComponent, selectors: [["app-search-goods-inventory"]], viewQuery: function SearchGoodsInventoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputField = _t.first);
    } }, inputs: { visible_products: "visible_products" }, outputs: { addNewProduct: "addNewProduct" }, decls: 2, vars: 4, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nz-input", "", 1, "nz-hover-border", 3, "placeholder", "ngModel", "ngModelOptions", "blur", "ngModelChange"], ["inputSearchProductInventory", ""], ["nz-row", "", 2, "padding-top", "8px"], ["itemSize", "67.2", 1, "infinite-container"], ["style", "cursor: pointer;", 3, "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], [4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [3, "nzAvatar", "nzDescription"], ["style", "font-size: 0.75rem;display: block;", 4, "ngIf"], [2, "font-size", "0.75rem", "display", "block"], [2, "color", "var(--ion-color-vh-orange)"]], template: function SearchGoodsInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function SearchGoodsInventoryComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchGoodsInventoryComponent_ng_container_1_Template, 12, 8, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 500)("nzTitle", null)("nzVisible", ctx.visible_products);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.CdkVirtualForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListEmptyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["nz-list[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\nnz-list[_ngcontent-%COMP%]   nz-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\ninput[_ngcontent-%COMP%] {\n  width: 95%;\n  border-radius: 10px;\n  font-size: 0.9rem;\n}\n.ant-avatar[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\nnz-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #fcf9f9;\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 90vh;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.infinite-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1nb29kcy1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsd0JBQUE7RUFBMEIsbUNBQUE7QUFHOUI7QUFGSTtFQUNJLGlCQUFBO0FBSVI7QUFEQTtFQUNJLFVBQUE7RUFBWSxrQ0FBQTtBQUtoQjtBQUhBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFNSjtBQUpBO0VBQ0ksMkJBQUE7QUFPSjtBQUxBO0VBQ0kseUJBQUE7QUFRSjtBQU5BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsd0JBQUE7RUFBMEIsbUNBQUE7QUFXOUI7QUFUQTtFQUNJLHFCQUFBO0VBQXVCLGtDQUFBO0FBYTNCIiwiZmlsZSI6InNlYXJjaC1nb29kcy1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1saXN0IHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cclxuICAgIG56LWxpc3QtaXRlbS1tZXRhLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxufVxyXG5uei1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLmFudC1hdmF0YXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcbm56LWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDksIDI0OSk7XHJcbn1cclxuLmluZmluaXRlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cclxufVxyXG4uaW5maW5pdGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7IC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 20998:
/*!***************************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-ingredient-grid/search-ingredient-grid.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchIngredientGridComponent": () => (/* binding */ SearchIngredientGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchIngredientGridComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchIngredientGridComponent_div_12_ion_card_1_ion_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 18);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4.img);
} }
function SearchIngredientGridComponent_div_12_ion_card_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchIngredientGridComponent_div_12_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchIngredientGridComponent_div_12_ion_card_1_Template_ion_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const item_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.selectProducts(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchIngredientGridComponent_div_12_ion_card_1_ion_img_2_Template, 1, 1, "ion-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchIngredientGridComponent_div_12_ion_card_1__svg_svg_3_Template, 7, 0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-header", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-subtitle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-content", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r4.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r4.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, "Purchase price"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.vhAlgorithm.vhcurrencyunit(item_r4.price_import), " ");
} }
function SearchIngredientGridComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchIngredientGridComponent_div_12_ion_card_1_Template, 12, 7, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ingredient_r2)("ngForTrackBy", ctx_r1.myTrackByFunction);
} }
class SearchIngredientGridComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm, platform) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.platform = platform;
        this.typeProducts = 3;
        this.ingredientList = [];
        this.searchList = [];
        this.ingredientList = this.vhQueryCafe.getlocalProducts().filter(ingredient => ingredient.type == 3);
        this.search('');
    }
    myTrackByFunction(index, complexItem) {
        return complexItem._id;
    }
    itemHeightFn(item, index) {
        return 258;
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectProducts(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.ingredientList, ['name']);
        else
            this.searchList = this.ingredientList;
        this.searchList = this.transform();
    }
    transform() {
        if (this.platform.width() >= 599)
            return this.transformProd3();
        else
            return this.transformProd2();
    }
    transformProd2() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            return this.searchList[index + 1] ? [item, this.searchList[index + 1]] : [item];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 2) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd3() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 3) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd4() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else if (!this.searchList[index + 3])
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2], this.searchList[index + 3]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 4) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
}
SearchIngredientGridComponent.ɵfac = function SearchIngredientGridComponent_Factory(t) { return new (t || SearchIngredientGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform)); };
SearchIngredientGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchIngredientGridComponent, selectors: [["app-search-ingredient-grid"]], decls: 13, vars: 11, consts: [["mode", "ios", 1, "ion-no-border", "search-ingredient-header"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", "", 1, "ion-no-padding"], ["size", "12", 1, "ion-no-padding"], [3, "items", "approxItemHeight", "itemHeight"], ["class", "ingredient-area-sub", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "ingredient-area-sub"], ["mode", "ios", "class", "ingredient-item", "button", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mode", "ios", "button", "", 1, "ingredient-item", 3, "click"], [1, "ingredient-item-img"], [3, "src", 4, "ngIf"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512", 4, "ngIf"], [1, "ion-no-padding"], [1, "ingredient-item-name"], [1, "ingredient-item-price"], ["color", "vh-red"], [3, "src"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512"], ["id", "Group_1507", "data-name", "Group 1507"], ["id", "Group_1506", "data-name", "Group 1506"], ["id", "Path_716", "data-name", "Path 716", "d", "M446.575,0H65.425A65.5,65.5,0,0,0,0,65.426V446.575A65.5,65.5,0,0,0,65.425,512h381.15A65.5,65.5,0,0,0,512,446.574V65.426A65.5,65.5,0,0,0,446.575,0Zm35.267,446.575a35.307,35.307,0,0,1-35.267,35.267H65.425a35.308,35.308,0,0,1-35.268-35.267V391.568l99.255-84.451a9.745,9.745,0,0,1,12.562-.075l62.174,51.628a15.081,15.081,0,0,0,20.3-.946L372.181,209.77a9.761,9.761,0,0,1,14.486.744L481.843,327.7V446.575Zm0-166.71L410.076,191.5a39.918,39.918,0,0,0-59.236-3.039L212.832,326.681l-51.59-42.839a39.849,39.849,0,0,0-51.373.308L30.157,351.972V65.426A35.308,35.308,0,0,1,65.425,30.158h381.15a35.307,35.307,0,0,1,35.267,35.268Z", "fill", "#9a9a9a"], ["id", "Group_1509", "data-name", "Group 1509"], ["id", "Group_1508", "data-name", "Group 1508"], ["id", "Path_717", "data-name", "Path 717", "d", "M161.174,62.995a72.713,72.713,0,1,0,72.713,72.713A72.8,72.8,0,0,0,161.174,62.995Zm0,115.269a42.556,42.556,0,1,1,42.556-42.556A42.6,42.6,0,0,1,161.174,178.264Z", "fill", "#9a9a9a"]], template: function SearchIngredientGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchIngredientGridComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchIngredientGridComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchIngredientGridComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchIngredientGridComponent_div_12_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Search for ingredient name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 9, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 260)("itemHeight", ctx.itemHeightFn);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-area-sub[_ngcontent-%COMP%] {\n  display: grid;\n}\n@media only screen and (min-width: 319px) {\n  ion-content[_ngcontent-%COMP%]   .ingredient-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n}\n@media only screen and (min-width: 599px) {\n  ion-content[_ngcontent-%COMP%]   .ingredient-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 33.3% 33.3% 33.3%;\n  }\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item[_ngcontent-%COMP%] {\n  box-shadow: 0pt 3px 6px #00000029;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item-img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  height: 118px;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item-img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-height: 118px;\n  max-width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n  height: 60px;\n  overflow: auto;\n  padding: 8px;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 8px;\n  max-height: 60px;\n  text-overflow: ellipsis;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbmdyZWRpZW50LWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUo7QUFDSTtFQUNFLHVCQUFBO0FBQ047QUFLSTtFQUNFLGFBQUE7QUFGTjtBQUdNO0VBRkY7SUFHSSw4QkFBQTtFQUFOO0FBQ0Y7QUFDTTtFQUxGO0lBTUksd0NBQUE7RUFFTjtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtBQUNKO0FBQ007RUFDRSxhQUFBO0FBQ1I7QUFDTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUFOIiwiZmlsZSI6InNlYXJjaC1pbmdyZWRpZW50LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLmluZ3JlZGllbnQtYXJlYSB7XHJcbiAgICAmLXN1YiB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzE5cHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMyUgMzMuMyUgMzMuMyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmluZ3JlZGllbnQtaXRlbSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHQgM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICAmLWltZyB7XHJcbiAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgc3ZnIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMThweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtbmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAmLXByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 72203:
/*!*****************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-ingredient/search-ingredient.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchIngredientComponent": () => (/* binding */ SearchIngredientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchIngredientComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchIngredientComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchIngredientComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectProducts(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.img ? item_r2.img : "assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "Purchase price"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.price_import), " ");
} }
class SearchIngredientComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.typeProducts = 3;
        this.ingredientList = this.vhQueryCafe.getlocalProducts().filter(ingredient => ingredient.type == 3);
        this.searchList = [];
        this.searchList = [...this.ingredientList];
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectProducts(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.ingredientList, ['name']);
        else
            this.searchList = this.ingredientList;
    }
}
SearchIngredientComponent.ɵfac = function SearchIngredientComponent_Factory(t) { return new (t || SearchIngredientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm)); };
SearchIngredientComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchIngredientComponent, selectors: [["app-search-ingredient"]], decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "ingredient-item", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "ingredient-item", 3, "click"], ["slot", "start"], [3, "src"], ["fixed", "", 1, "ion-no-padding"], ["size", "12", 1, "ion-no-padding", "ingredient-item-name"], ["size", "12", 1, "ion-no-padding", "ingredient-item-price"], ["color", "vh-red"]], template: function SearchIngredientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchIngredientComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchIngredientComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchIngredientComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchIngredientComponent_ion_item_12_Template, 13, 6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Search for ingredient name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonThumbnail], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   .ingredient-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbmdyZWRpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0k7RUFDRSx1QkFBQTtBQUNOO0FBSUU7RUFDRSx5QkFBQTtBQURKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFFSTtFQUNFLGlCQUFBO0FBQU4iLCJmaWxlIjoic2VhcmNoLWluZ3JlZGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLmluZ3JlZGllbnQtaXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgJi1uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgJi1wcmljZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 19510:
/*!*****************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-lang/search-lang.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchLangComponent": () => (/* binding */ SearchLangComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);






function SearchLangComponent_ion_item_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-radio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.img ? item_r1.img : "assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, item_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1.value);
} }
class SearchLangComponent {
    constructor(translateService, vhComponent, vhAuth) {
        this.translateService = translateService;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.langList = [
            { name: 'Vietnamese', value: 'vi', img: 'assets/icon/settings/language/vi.svg', country_code: 'VN' },
            { name: 'English', value: 'en', img: 'assets/icon/settings/language/en.svg', country_code: 'US' }
        ];
        this.lang = this.vhAuth.localStorageGET('language_code');
    }
    selectLang(value) {
        let lang = this.langList.find(item => item.value == value);
        this.vhAuth.localStorageSET('language_code', value);
        this.vhAuth.localStorageSET('country_code', lang.country_code);
        this.translateService.use(value);
    }
    cancel() {
        this.vhComponent.hideModal();
    }
}
SearchLangComponent.ɵfac = function SearchLangComponent_Factory(t) { return new (t || SearchLangComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAuth)); };
SearchLangComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchLangComponent, selectors: [["app-search-lang"]], decls: 15, vars: 6, consts: [["mode", "ios", 1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close-outline", "color", "vh-black"], ["color", "vh-green"], ["fixed", "", 1, "ion-no-padding"], ["size", "12", 1, "ion-no-padding"], [3, "ngModel", "ngModelChange"], [3, "items", "approxItemHeight"], ["mode", "md", "lines", "full", 4, "virtualItem"], ["mode", "md", "lines", "full"], [3, "src"], ["mode", "ios", "slot", "end", 3, "value"]], template: function SearchLangComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchLangComponent_Template_ion_button_click_3_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchLangComponent_Template_ion_radio_group_ngModelChange_12_listener($event) { return ctx.lang = $event; })("ngModelChange", function SearchLangComponent_Template_ion_radio_group_ngModelChange_12_listener($event) { return ctx.selectLang($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-virtual-scroll", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SearchLangComponent_ion_item_14_Template, 7, 5, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "Language"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lang);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.langList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RadioValueAccessor], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["ion-content[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1sYW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJzZWFyY2gtbGFuZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAubGFuZ3VhZ2UtaXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 84437:
/*!*****************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-phone-code/search-phone-code.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPhoneCodeComponent": () => (/* binding */ SearchPhoneCodeComponent)
/* harmony export */ });
/* harmony import */ var src_assets_global_countryCode_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/global/countryCode.json */ 49362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function SearchPhoneCodeComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchPhoneCodeComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchPhoneCodeComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.selectPhoneCode(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", item_r2.code, ")");
} }
class SearchPhoneCodeComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.searchList = [];
        this.codeCountry = src_assets_global_countryCode_json__WEBPACK_IMPORTED_MODULE_0__;
        this.searchList = [...this.codeCountry];
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectPhoneCode(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = value.toLowerCase();
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.codeCountry, ['country', "code"]);
        else
            this.searchList = this.codeCountry;
    }
}
SearchPhoneCodeComponent.ɵfac = function SearchPhoneCodeComponent_Factory(t) { return new (t || SearchPhoneCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm)); };
SearchPhoneCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchPhoneCodeComponent, selectors: [["app-search-phone-code"]], decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "product-item ion-no-padding", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "product-item", "ion-no-padding", 3, "click"], [2, "max-width", "fit-content"]], template: function SearchPhoneCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function SearchPhoneCodeComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchPhoneCodeComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SearchPhoneCodeComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SearchPhoneCodeComponent_ion_item_12_Template, 5, 2, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, "Search ..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 44);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --inner-padding-start: 16px;\n}\nion-content[_ngcontent-%COMP%]   .product-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1waG9uZS1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0k7RUFDRSx1QkFBQTtBQUNOO0FBSUU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FBREo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFBTiIsImZpbGUiOiJzZWFyY2gtcGhvbmUtY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAucHJvZHVjdC1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 27492:
/*!*************************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-product-import/search-product-import.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchProductImportComponent": () => (/* binding */ SearchProductImportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













function SearchProductImportComponent_ng_container_1_nz_list_item_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-list-item-meta", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-list-item-meta-title", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchProductImportComponent_ng_container_1_nz_list_item_9_Template_nz_list_item_meta_title_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.chooseProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzAvatar", item_r3.img ? item_r3.img : "assets/icon/management/noimage.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, "Purchase price"), ": ", ctx_r1.vhAlgorithm.vhcurrencyunit_symbol(item_r3.price_import), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 9, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 11, item_r3.quantity_branch[ctx_r1.id_branch] / item_r3.ratio, "1.0-2"), " (", item_r3.unit, ")");
} }
function SearchProductImportComponent_ng_container_1_nz_list_empty_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-list-empty");
} }
const _c0 = function () { return { standalone: true }; };
function SearchProductImportComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchProductImportComponent_ng_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.search = $event; })("ngModelChange", function SearchProductImportComponent_ng_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.searchProduct($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "cdk-virtual-scroll-viewport", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SearchProductImportComponent_ng_container_1_nz_list_item_9_Template, 14, 14, "nz-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SearchProductImportComponent_ng_container_1_nz_list_empty_10_Template, 1, 0, "nz-list-empty", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, "Search for product name, barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.search)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.searchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.searchList.length === 0);
} }
class SearchProductImportComponent {
    constructor(vhAlgorithm, vhQueryCafe, vhComponent, languageService) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.searchProductList = true;
        this.closeSearchProductList = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.id_branch = this.vhQueryCafe.getDefaultBranch()._id;
        this.listAllProducts = [];
        this.goodList = [];
        this.searchList = [];
        this.search = '';
    }
    ngOnInit() {
        this.changeTypeGood();
    }
    goBack() {
        this.closeSearchProductList.emit(false);
    }
    searchProduct(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.goodList, ['name', 'barcode']);
        else
            this.searchList = this.goodList;
        console.log(this.searchList);
    }
    chooseProduct(item, sub) {
        if (!sub)
            this.closeSearchProductList.emit(Object.assign({}, item));
        else
            this.closeSearchProductList.emit(Object.assign(Object.assign(Object.assign({}, item), sub), { name: item.name + ' (' + sub.name + ') ', id_subproduct: sub._id, _id: item._id }));
    }
    changeTypeGood() {
        this.listAllProducts = this.vhQueryCafe.getlocalDetailProducts().filter(e => e.type == 3).map(item => {
            let unit = this.vhQueryCafe.getUnit_byRatio(item.units, item.units.find(e => e.default).ratio);
            return Object.assign(Object.assign({}, item), unit);
        });
        this.goodList = this.listAllProducts;
        this.searchList = this.goodList;
        this.searchProduct('');
    }
}
SearchProductImportComponent.ɵfac = function SearchProductImportComponent_Factory(t) { return new (t || SearchProductImportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
SearchProductImportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchProductImportComponent, selectors: [["app-search-product-import"]], inputs: { searchProductList: "searchProductList" }, outputs: { closeSearchProductList: "closeSearchProductList" }, decls: 2, vars: 4, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nz-input", "", 1, "nz-hover-border", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["nz-row", "", 2, "padding-top", "8px"], ["itemSize", "67.2", 1, "infinite-container"], ["style", "cursor: pointer;", 4, "cdkVirtualFor", "cdkVirtualForOf"], [4, "ngIf"], [2, "cursor", "pointer"], [3, "nzAvatar"], [3, "click"], [2, "font-size", "0.9rem", "color", "var(--ion-color-vh-black)"], [2, "color", "var(--ion-color-vh-orange)"]], template: function SearchProductImportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function SearchProductImportComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchProductImportComponent_ng_container_1_Template, 11, 8, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 500)("nzTitle", null)("nzVisible", ctx.searchProductList);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDrawerContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.CdkVirtualForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListEmptyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe], styles: ["nz-list[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\nnz-list[_ngcontent-%COMP%]   nz-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\ninput[_ngcontent-%COMP%] {\n  width: 95%;\n  border-radius: 10px;\n  font-size: 0.9rem;\n}\n.ant-avatar[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\nnz-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #fcf9f9;\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 90vh;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.infinite-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1wcm9kdWN0LWltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUF1QixnQkFBQTtFQUN2Qix3QkFBQTtFQUEwQixtQ0FBQTtBQUc5QjtBQUZJO0VBQ0ksaUJBQUE7QUFJUjtBQURBO0VBQ0ksVUFBQTtFQUFZLGtDQUFBO0FBS2hCO0FBSEE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU1KO0FBSkE7RUFDSSwyQkFBQTtBQU9KO0FBTEE7RUFDSSx5QkFBQTtBQVFKO0FBTkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUF1QixnQkFBQTtFQUN2Qix3QkFBQTtFQUEwQixtQ0FBQTtBQVc5QjtBQVRBO0VBQ0kscUJBQUE7RUFBdUIsa0NBQUE7QUFhM0IiLCJmaWxlIjoic2VhcmNoLXByb2R1Y3QtaW1wb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotbGlzdCB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbiAgICBuei1saXN0LWl0ZW0tbWV0YS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbn1cclxubnotbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxufVxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi5hbnQtYXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5uei1saXN0LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQ5LCAyNDkpO1xyXG59XHJcbi5pbmZpbml0ZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbn1cclxuLmluZmluaXRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweCAhaW1wb3J0YW50OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 58288:
/*!***********************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-services-grid/search-services-grid.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchServicesGridComponent": () => (/* binding */ SearchServicesGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchServicesGridComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchServicesGridComponent_div_12_ion_card_1_ion_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 18);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4.img);
} }
function SearchServicesGridComponent_div_12_ion_card_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "g", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchServicesGridComponent_div_12_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchServicesGridComponent_div_12_ion_card_1_Template_ion_card_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const item_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.selectServices(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchServicesGridComponent_div_12_ion_card_1_ion_img_2_Template, 1, 1, "ion-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchServicesGridComponent_div_12_ion_card_1__svg_svg_3_Template, 7, 0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-header", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-subtitle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-content", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r4.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r4.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, "Selling price"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.vhAlgorithm.vhcurrencyunit(item_r4.price), " ");
} }
function SearchServicesGridComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchServicesGridComponent_div_12_ion_card_1_Template, 12, 7, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const products_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", products_r2)("ngForTrackBy", ctx_r1.myTrackByFunction);
} }
class SearchServicesGridComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm, platform) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.platform = platform;
        this.serviceList = [];
        this.searchList = [];
        this.serviceList = this.vhQueryCafe.getlocalProducts().filter(product => product.type == 2);
        this.search('');
    }
    myTrackByFunction(index, complexItem) {
        return complexItem._id;
    }
    itemHeightFn(item, index) {
        return 258;
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectServices(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.serviceList, ['name', 'barcode']);
        else
            this.searchList = this.serviceList;
        this.searchList = this.transform();
    }
    transform() {
        if (this.platform.width() >= 599)
            return this.transformProd3();
        else
            return this.transformProd2();
    }
    transformProd2() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            return this.searchList[index + 1] ? [item, this.searchList[index + 1]] : [item];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 2) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd3() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 3) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd4() {
        let array = [];
        let arrayRaw = this.searchList.map((item, index) => {
            if (!this.searchList[index + 1])
                return [item];
            else if (!this.searchList[index + 2])
                return [item, this.searchList[index + 1]];
            else if (!this.searchList[index + 3])
                return [item, this.searchList[index + 1], this.searchList[index + 2]];
            else
                return [item, this.searchList[index + 1], this.searchList[index + 2], this.searchList[index + 3]];
        });
        let val = this.searchList.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 4) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
}
SearchServicesGridComponent.ɵfac = function SearchServicesGridComponent_Factory(t) { return new (t || SearchServicesGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform)); };
SearchServicesGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchServicesGridComponent, selectors: [["app-search-services-grid"]], decls: 13, vars: 11, consts: [["mode", "ios", 1, "ion-no-border", "search-service-header"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", "", 1, "ion-no-padding"], ["size", "12", 1, "ion-no-padding"], [3, "items", "approxItemHeight", "itemHeight"], ["class", "service-area-sub", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "service-area-sub"], ["mode", "ios", "class", "service-item", "button", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mode", "ios", "button", "", 1, "service-item", 3, "click"], [1, "service-item-img"], [3, "src", 4, "ngIf"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512", 4, "ngIf"], [1, "ion-no-padding"], [1, "service-item-name"], [1, "service-item-price"], ["color", "vh-red"], [3, "src"], ["id", "Group_1510", "data-name", "Group 1510", "xmlns", "http://www.w3.org/2000/svg", "width", "512", "height", "512", "viewBox", "0 0 512 512"], ["id", "Group_1507", "data-name", "Group 1507"], ["id", "Group_1506", "data-name", "Group 1506"], ["id", "Path_716", "data-name", "Path 716", "d", "M446.575,0H65.425A65.5,65.5,0,0,0,0,65.426V446.575A65.5,65.5,0,0,0,65.425,512h381.15A65.5,65.5,0,0,0,512,446.574V65.426A65.5,65.5,0,0,0,446.575,0Zm35.267,446.575a35.307,35.307,0,0,1-35.267,35.267H65.425a35.308,35.308,0,0,1-35.268-35.267V391.568l99.255-84.451a9.745,9.745,0,0,1,12.562-.075l62.174,51.628a15.081,15.081,0,0,0,20.3-.946L372.181,209.77a9.761,9.761,0,0,1,14.486.744L481.843,327.7V446.575Zm0-166.71L410.076,191.5a39.918,39.918,0,0,0-59.236-3.039L212.832,326.681l-51.59-42.839a39.849,39.849,0,0,0-51.373.308L30.157,351.972V65.426A35.308,35.308,0,0,1,65.425,30.158h381.15a35.307,35.307,0,0,1,35.267,35.268Z", "fill", "#9a9a9a"], ["id", "Group_1509", "data-name", "Group 1509"], ["id", "Group_1508", "data-name", "Group 1508"], ["id", "Path_717", "data-name", "Path 717", "d", "M161.174,62.995a72.713,72.713,0,1,0,72.713,72.713A72.8,72.8,0,0,0,161.174,62.995Zm0,115.269a42.556,42.556,0,1,1,42.556-42.556A42.6,42.6,0,0,1,161.174,178.264Z", "fill", "#9a9a9a"]], template: function SearchServicesGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchServicesGridComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchServicesGridComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchServicesGridComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchServicesGridComponent_div_12_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "Search for service name, barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 9, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 260)("itemHeight", ctx.itemHeightFn);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .service-area-sub[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n}\n@media only screen and (min-width: 319px) {\n  ion-content[_ngcontent-%COMP%]   .service-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n}\n@media only screen and (min-width: 599px) {\n  ion-content[_ngcontent-%COMP%]   .service-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 33.3% 33.3% 33.3%;\n  }\n}\nion-content[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  box-shadow: 0pt 3px 6px #00000029;\n  display: inline-block;\n  box-shadow: 0pt 3px 6px #00000029;\n  margin: 8px 16px;\n}\nion-content[_ngcontent-%COMP%]   .service-item-img[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  height: 118px;\n}\nion-content[_ngcontent-%COMP%]   .service-item-img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-height: 118px;\n  max-width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .service-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n  height: 60px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  padding: 8px;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .service-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 8px;\n  height: 60px;\n  text-overflow: ellipsis;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zZXJ2aWNlcy1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0k7RUFDRSx1QkFBQTtBQUNOO0FBS0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFGTjtBQUdNO0VBSEY7SUFJSSw4QkFBQTtFQUFOO0FBQ0Y7QUFDTTtFQU5GO0lBT0ksd0NBQUE7RUFFTjtBQUNGO0FBQ0U7RUFDRSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ007RUFDRSxhQUFBO0FBQ1I7QUFDTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQU4iLCJmaWxlIjoic2VhcmNoLXNlcnZpY2VzLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLnNlcnZpY2UtYXJlYSB7XHJcbiAgICAmLXN1YiB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMTlweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2VydmljZS1pdGVtIHtcclxuICAgIGJveC1zaGFkb3c6IDBwdCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDBwdCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIG1hcmdpbjogOHB4IDE2cHg7XHJcbiAgICAmLWltZyB7XHJcbiAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgc3ZnIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMThweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtbmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAmLXByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 39444:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-services/search-services.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchServicesComponent": () => (/* binding */ SearchServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function SearchServicesComponent_ion_text_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
function SearchServicesComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchServicesComponent_ion_item_12_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectServices(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2.img ? item_r2.img : "assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "Selling price"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.vhAlgorithm.vhcurrencyunit(item_r2.price), " ");
} }
class SearchServicesComponent {
    constructor(vhComponent, vhQueryCafe, vhAlgorithm) {
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.serviceList = this.vhQueryCafe.getlocalProducts().filter(product => product.type == 2);
        this.searchList = [];
        this.searchList = [...this.serviceList];
    }
    cancel(value) {
        if (value)
            this.vhComponent.hideModal();
    }
    selectServices(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.serviceList, ['name', 'barcode']);
        else
            this.searchList = this.serviceList;
    }
}
SearchServicesComponent.ɵfac = function SearchServicesComponent_Factory(t) { return new (t || SearchServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm)); };
SearchServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchServicesComponent, selectors: [["app-search-services"]], decls: 13, vars: 10, consts: [["mode", "ios", 1, "ion-no-border"], ["type", "text", "showCancelButton", "always", 3, "placeholder", "debounce", "cancelButtonText", "ionChange", "ionCancel"], ["color", "vh-black", "class", "no-data", 4, "ngIf"], ["fixed", ""], ["size", "12"], [3, "items", "approxItemHeight"], ["class", "service-item", 3, "click", 4, "virtualItem"], ["color", "vh-black", 1, "no-data"], [1, "service-item", 3, "click"], ["slot", "start"], [3, "src"], ["fixed", "", 1, "ion-no-padding"], ["size", "12", 1, "ion-no-padding", "service-item-name"], ["size", "12", 1, "ion-no-padding", "service-item-price"], ["color", "vh-red"]], template: function SearchServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-searchbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SearchServicesComponent_Template_ion_searchbar_ionChange_3_listener($event) { return ctx.search($event.detail.value); })("ionCancel", function SearchServicesComponent_Template_ion_searchbar_ionCancel_3_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SearchServicesComponent_ion_text_7_Template, 3, 3, "ion-text", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-virtual-scroll", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchServicesComponent_ion_item_12_Template, 13, 6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Search for service name, barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("cancelButtonText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("debounce", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.searchList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.searchList)("approxItemHeight", 60);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonThumbnail], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\nion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .service-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   .service-item-price[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0UsdUJBQUE7QUFDTjtBQUlFO0VBQ0UseUJBQUE7QUFESjtBQUVJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRUk7RUFDRSxpQkFBQTtBQUFOIiwiZmlsZSI6InNlYXJjaC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAuc2VydmljZS1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcbiAgICAmLXByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 47456:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-supplier/search-supplier.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchSupplierComponent": () => (/* binding */ SearchSupplierComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








function SearchSupplierComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchSupplierComponent_div_4_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const result_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onSelect(result_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", ctx_r0.id_supplier === result_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", result_r2.display, " ");
} }
function SearchSupplierComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "No data"), " ");
} }
class SearchSupplierComponent {
    constructor(vhAlgorithm, vhQueryCafe, vhcomponent, languageService) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhcomponent = vhcomponent;
        this.languageService = languageService;
        this.closeAndReceiveSupplier = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.debt = null;
        this.customerList = [];
        this.searchList = [];
        this.inputValue = '';
        this.selectedValue = null;
        this.isFocused = false;
        this.isOpen = false;
    }
    ngOnInit() {
    }
    cancel(value) {
        this.closeAndReceiveSupplier.emit(value);
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        document.getElementById("select-customer").click();
    }
    onFocusInput() {
        this.isFocused = true;
        if (this.searchList.length)
            this.isOpen = true;
        // Nếu đã chọn giá trị rồi, thì khi focus → xóa inputValue để user nhập mới
        if (this.selectedValue) {
            this.inputValue = '';
        }
    }
    onBlurInput() {
        this.isFocused = false;
        setTimeout(() => {
            this.isOpen = false;
        }, 100);
        // Nếu người dùng không nhập gì mới thì giữ lại kết quả đã chọn
        if (this.selectedValue)
            this.inputValue = this.selectedValue.display;
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            const searchValue = this.vhAlgorithm.changeAlias(this.inputValue.trim().toLowerCase());
            console.log(searchValue);
            event.preventDefault();
            event.stopPropagation();
            if (searchValue.length >= 6) {
                this.vhQueryCafe.searchKeyword_NamePhone('suppliers', searchValue).then((res) => {
                    this.isOpen = true;
                    console.log(res);
                    this.searchList = res.map(item => {
                        return Object.assign(Object.assign({}, item), { earning_point: item.earning_point ? item.earning_point : 0, display: item.name + ' - ' + item.phone });
                    });
                    if (this.searchList.length == 0) {
                        this.vhcomponent.alertMessageDesktop("warning", this.languageService.translate('No data'));
                    }
                    if (this.searchList.length == 1) {
                        this.onSelect(this.searchList[0]);
                    }
                });
            }
            else
                this.vhcomponent.alertMessageDesktop("warning", this.languageService.translate('Please enter full infomation'));
        }
    }
    onSelect(result) {
        this.selectedValue = result;
        this.inputValue = result.display;
        this.isOpen = false;
        this.id_supplier = this.selectedValue._id;
        this.cancel(this.id_supplier);
        // this.searchList = [];
    }
}
SearchSupplierComponent.ɵfac = function SearchSupplierComponent_Factory(t) { return new (t || SearchSupplierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
SearchSupplierComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchSupplierComponent, selectors: [["app-search-supplier"]], inputs: { id_supplier: "id_supplier" }, outputs: { closeAndReceiveSupplier: "closeAndReceiveSupplier" }, decls: 6, vars: 8, consts: [[1, "vh-custom-select"], ["id", "select-customer", "type", "text", 3, "placeholder", "ngModel", "ngModelChange", "focus", "keydown", "blur"], [1, "dropdown"], [3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "no-result", "style", "text-align: center;", 4, "ngIf"], [3, "click"], [1, "no-result", 2, "text-align", "center"]], template: function SearchSupplierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchSupplierComponent_Template_input_ngModelChange_1_listener($event) { return ctx.inputValue = $event; })("focus", function SearchSupplierComponent_Template_input_focus_1_listener() { return ctx.onFocusInput(); })("keydown", function SearchSupplierComponent_Template_input_keydown_1_listener($event) { return ctx.onKeyDown($event); })("blur", function SearchSupplierComponent_Template_input_blur_1_listener() { return ctx.onBlurInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchSupplierComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchSupplierComponent_div_5_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, "Enter name or phone number to search ..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.searchList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.searchList.length === 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".vh-custom-select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 99%;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  max-height: 150px;\n  overflow-y: auto;\n  z-index: 1000;\n  display: none;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown.open[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 10px;\n  cursor: pointer;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--ion-color-vh-green);\n  box-shadow: none;\n}\n\n.vh-custom-select[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zdXBwbGllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0FBR0YiLCJmaWxlIjoic2VhcmNoLXN1cHBsaWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZoLWN1c3RvbS1zZWxlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTklOztcclxufVxyXG5cclxuLnZoLWN1c3RvbS1zZWxlY3QgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnZoLWN1c3RvbS1zZWxlY3QgLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aC1jdXN0b20tc2VsZWN0IC5kcm9wZG93bi5vcGVuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnZoLWN1c3RvbS1zZWxlY3QgLmRyb3Bkb3duIGRpdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52aC1jdXN0b20tc2VsZWN0IC5kcm9wZG93biBkaXY6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuLnZoLWN1c3RvbS1zZWxlY3QgaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pOyAgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4udmgtY3VzdG9tLXNlbGVjdCAuZHJvcGRvd24gZGl2LnNlbGVjdGVkIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTsgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 14756:
/*!*********************************************************************************!*\
  !*** ./src/app/cafe/components/search/search-tables/search-tables.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchTablesComponent": () => (/* binding */ SearchTablesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vh-component/vh-component */ 4866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









function SearchTablesComponent_ion_segment_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-segment-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, item_r4.name));
} }
function SearchTablesComponent_ion_text_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Not found"), " ");
} }
const _c0 = function (a0) { return { "table-item-active": a0 }; };
function SearchTablesComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchTablesComponent_div_18_div_1_Template_ion_card_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.selectTable(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-ripple-effect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-card-subtitle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, item_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.name);
} }
function SearchTablesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchTablesComponent_div_18_div_1_Template, 5, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", list_r5)("ngForTrackBy", ctx_r3.myTrackByFunction);
} }
class SearchTablesComponent {
    constructor(vhComponent, router, vhQueryCafe, vhQuery, languageService, platform, activatedRoute, vhAuth) {
        this.vhComponent = vhComponent;
        this.router = router;
        this.vhQueryCafe = vhQueryCafe;
        this.vhQuery = vhQuery;
        this.languageService = languageService;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.vhAuth = vhAuth;
        this.status = null;
        this.areaID = '';
        this.area = [];
        this.table = [];
        this.refreshStatus = false;
    }
    ngOnInit() {
        this.getArea();
    }
    myTrackByFunction(index, complexItem) {
        return complexItem._id;
    }
    itemHeightFn(item, index) {
        return 162;
    }
    getArea() {
        this.area = this.vhQueryCafe.getlocalAreas().filter(item => item.status && item._id != "go_home" && item.id_branch == this.vhQueryCafe.getDefaultBranch()._id);
        if (this.area.length) {
            this.areaID = this.area[0]['_id'];
            this.getTable();
        }
    }
    areaChanged(areaID) {
        this.getTable();
    }
    getTable() {
        this.table = this.vhQueryCafe.getlocalTables().filter(item => this.status != null ? (item.id_area == this.areaID && item.status == this.status) : item.id_area == this.areaID);
        this.table = this.transform();
    }
    selectTable(item) {
        this.dismiss(item);
    }
    dismiss(data) {
        this.vhComponent.hideModal(data);
    }
    transform() {
        if (this.platform.width() >= 1024)
            return this.transformProd4();
        else if (this.platform.width() >= 599)
            return this.transformProd3();
        else
            return this.transformProd2();
    }
    transformProd2() {
        let array = [];
        let arrayRaw = this.table.map((item, index) => {
            return this.table[index + 1] ? [item, this.table[index + 1]] : [item];
        });
        let val = this.table.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 2) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd3() {
        let array = [];
        let arrayRaw = this.table.map((item, index) => {
            if (!this.table[index + 1])
                return [item];
            else if (!this.table[index + 2])
                return [item, this.table[index + 1]];
            else
                return [item, this.table[index + 1], this.table[index + 2]];
        });
        let val = this.table.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 3) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
    transformProd4() {
        let array = [];
        let arrayRaw = this.table.map((item, index) => {
            if (!this.table[index + 1])
                return [item];
            else if (!this.table[index + 2])
                return [item, this.table[index + 1]];
            else if (!this.table[index + 3])
                return [item, this.table[index + 1], this.table[index + 2]];
            else
                return [item, this.table[index + 1], this.table[index + 2], this.table[index + 3]];
        });
        let val = this.table.length;
        for (let i = 0, len = val <= 1 ? val : ((val % 2) ? val : (val - 1)); i < len; i += 4) {
            array.push(arrayRaw[i]);
        }
        return array;
    }
}
SearchTablesComponent.ɵfac = function SearchTablesComponent_Factory(t) { return new (t || SearchTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth)); };
SearchTablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchTablesComponent, selectors: [["app-search-tables"]], inputs: { status: "status" }, decls: 19, vars: 7, consts: [["mode", "ios", 1, "ion-no-border"], ["slot", "start"], ["mode", "md", "color", "vh-black", 3, "click"], ["color", "vh-black", "slot", "icon-only", "name", "close-outline", 1, "ion-icon"], [1, "ion-no-padding"], ["size", "12", 1, "ion-no-padding"], [1, "segment-area"], ["mode", "md", 3, "ngModel", "swipeGesture", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], ["fixed", "", 1, "ion-no-padding"], [1, "table-area", 3, "items", "approxItemHeight", "itemHeight"], ["scroll", ""], ["class", "table-area-sub ion-padding-horizontal", 4, "virtualItem"], [3, "value"], [1, "no-data"], [1, "table-area-sub", "ion-padding-horizontal"], ["class", "table", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table"], ["mode", "ios", "button", "", 1, "table-item", "ion-activatable", "ripple-parent", 3, "ngClass", "click"], ["type", "bounded"], [1, "table-item-name"]], template: function SearchTablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchTablesComponent_Template_ion_button_click_3_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-segment", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchTablesComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.areaID = $event; })("ngModelChange", function SearchTablesComponent_Template_ion_segment_ngModelChange_9_listener($event) { return ctx.areaChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SearchTablesComponent_ion_segment_button_10_Template, 4, 4, "ion-segment-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SearchTablesComponent_ion_text_12_Template, 3, 3, "ion-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-grid", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-virtual-scroll", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SearchTablesComponent_div_18_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.areaID)("swipeGesture", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.area);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.table.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.table)("approxItemHeight", 170)("itemHeight", ctx.itemHeightFn);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonVirtualScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.VirtualItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["ion-header[_ngcontent-%COMP%] {\n  background-color: white;\n}\nion-header[_ngcontent-%COMP%]   .segment-area[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n}\nion-header[_ngcontent-%COMP%]   .segment-area[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\nion-header[_ngcontent-%COMP%]   .segment-area[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 100%;\n}\nion-header[_ngcontent-%COMP%]   .segment-area[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: var(--ion-color-vh-green);\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-vh-gray-light);\n}\nion-content[_ngcontent-%COMP%]   .table-area-sub[_ngcontent-%COMP%] {\n  display: grid;\n  height: 162px;\n  justify-items: center;\n  align-items: center;\n}\n@media only screen and (min-width: 319px) {\n  ion-content[_ngcontent-%COMP%]   .table-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n}\n@media only screen and (min-width: 599px) {\n  ion-content[_ngcontent-%COMP%]   .table-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 33.3% 33.3% 33.3%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  ion-content[_ngcontent-%COMP%]   .table-area-sub[_ngcontent-%COMP%] {\n    grid-template-columns: 25% 25% 25% 25%;\n  }\n}\nion-content[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n  --ripple-color: var(--ion-color-vh-gray-light);\n  box-shadow: 0pt 3px 6px #00000029;\n  height: 140px;\n  width: 140px;\n  margin: 0;\n}\nion-content[_ngcontent-%COMP%]   .table-item-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .table-item-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-weight: bold;\n  font-size: 0.9rem;\n  max-height: 60px;\n  overflow: auto;\n  padding: 8px;\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  --color: var(--ion-color-vh-green);\n}\nion-content[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%] {\n  --background: var(--ion-color-vh-green);\n}\nion-content[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  --color: var(--ion-color-vh-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC10YWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUlBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7QUFDM0I7QUFMSTtFQUNFLGFBQUE7QUFPTjtBQUhJO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtBQUtOO0FBSk07RUFDRSw0Q0FBQTtFQUNBLGlCQUFBO0FBTVI7QUFEQTtFQUNFLDRDQUFBO0FBSUY7QUFESTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUdOO0FBRk07RUFMRjtJQU1JLDhCQUFBO0VBS047QUFDRjtBQUpNO0VBUkY7SUFTSSx3Q0FBQTtFQU9OO0FBQ0Y7QUFOTTtFQVhGO0lBWUksc0NBQUE7RUFTTjtBQUNGO0FBTkU7RUFDRSwyQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFRSjtBQVBJO0VBQ0UsV0FBQTtBQVNOO0FBUEk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQVNOO0FBUEk7RUFDRSx1Q0FBQTtBQVNOO0FBUk07RUFDRSxrQ0FBQTtBQVVSIiwiZmlsZSI6InNlYXJjaC10YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAuc2VnbWVudC1hcmVhIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXktbGlnaHQpO1xyXG5cclxuICAudGFibGUtYXJlYSB7XHJcbiAgICAmLXN1YiB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGhlaWdodDogMTYycHg7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMTlweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YWJsZS1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXktbGlnaHQpO1xyXG4gICAgYm94LXNoYWRvdzogMHB0IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgICYtaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIH1cclxuICAgICYtYWN0aXZlIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 19860:
/*!*********************************************************!*\
  !*** ./src/app/cafe/components/search/search.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _search_category_search_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-category/search-category.component */ 8618);
/* harmony import */ var _search_currency_search_currency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-currency/search-currency.component */ 85620);
/* harmony import */ var _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-customer/search-customer.component */ 88403);
/* harmony import */ var _search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-employee/search-employee.component */ 26171);
/* harmony import */ var _search_lang_search_lang_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-lang/search-lang.component */ 19510);
/* harmony import */ var _search_services_search_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-services/search-services.component */ 39444);
/* harmony import */ var _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-supplier/search-supplier.component */ 47456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _search_phone_code_search_phone_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-phone-code/search-phone-code.component */ 84437);
/* harmony import */ var _search_services_grid_search_services_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-services-grid/search-services-grid.component */ 58288);
/* harmony import */ var _search_foods_search_foods_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-foods/search-foods.component */ 45361);
/* harmony import */ var _search_foods_grid_search_foods_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-foods-grid/search-foods-grid.component */ 74384);
/* harmony import */ var _search_foods_promotions_search_foods_promotions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-foods-promotions/search-foods-promotions.component */ 58577);
/* harmony import */ var _search_foods_promotions_grid_search_foods_promotions_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-foods-promotions-grid/search-foods-promotions-grid.component */ 46625);
/* harmony import */ var _search_ingredient_search_ingredient_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-ingredient/search-ingredient.component */ 72203);
/* harmony import */ var _search_ingredient_grid_search_ingredient_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-ingredient-grid/search-ingredient-grid.component */ 20998);
/* harmony import */ var _search_tables_search_tables_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-tables/search-tables.component */ 14756);
/* harmony import */ var _search_dishes_search_dishes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-dishes/search-dishes.component */ 48362);
/* harmony import */ var _search_area_search_area_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-area/search-area.component */ 27527);
/* harmony import */ var _search_branch_search_branch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-branch/search-branch.component */ 40987);
/* harmony import */ var _search_product_import_search_product_import_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search-product-import/search-product-import.component */ 27492);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _search_goods_inventory_search_goods_inventory_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-goods-inventory/search-goods-inventory.component */ 411);
/* harmony import */ var _search_country_code_search_country_code_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search-country-code/search-country-code.component */ 70589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2316);





























class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_20__.NgZorroAntModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_services_search_services_component__WEBPACK_IMPORTED_MODULE_5__.SearchServicesComponent,
        _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_2__.SearchCustomerComponent,
        _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_6__.SearchSupplierComponent,
        _search_lang_search_lang_component__WEBPACK_IMPORTED_MODULE_4__.SearchLangComponent,
        _search_currency_search_currency_component__WEBPACK_IMPORTED_MODULE_1__.SearchCurrencyComponent,
        _search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_3__.SearchEmployeeComponent,
        _search_category_search_category_component__WEBPACK_IMPORTED_MODULE_0__.SearchCategoryComponent,
        _search_phone_code_search_phone_code_component__WEBPACK_IMPORTED_MODULE_7__.SearchPhoneCodeComponent,
        _search_services_grid_search_services_grid_component__WEBPACK_IMPORTED_MODULE_8__.SearchServicesGridComponent,
        _search_foods_search_foods_component__WEBPACK_IMPORTED_MODULE_9__.SearchFoodsComponent,
        _search_foods_grid_search_foods_grid_component__WEBPACK_IMPORTED_MODULE_10__.SearchFoodsGridComponent,
        _search_foods_promotions_search_foods_promotions_component__WEBPACK_IMPORTED_MODULE_11__.SearchFoodsPromotionsComponent,
        _search_foods_promotions_grid_search_foods_promotions_grid_component__WEBPACK_IMPORTED_MODULE_12__.SearchFoodsPromotionsGridComponent,
        _search_ingredient_search_ingredient_component__WEBPACK_IMPORTED_MODULE_13__.SearchIngredientComponent,
        _search_ingredient_grid_search_ingredient_grid_component__WEBPACK_IMPORTED_MODULE_14__.SearchIngredientGridComponent,
        _search_tables_search_tables_component__WEBPACK_IMPORTED_MODULE_15__.SearchTablesComponent,
        _search_dishes_search_dishes_component__WEBPACK_IMPORTED_MODULE_16__.SearchDishesComponent,
        _search_area_search_area_component__WEBPACK_IMPORTED_MODULE_17__.SearchAreaComponent,
        _search_branch_search_branch_component__WEBPACK_IMPORTED_MODULE_18__.SearchBranchComponent,
        _search_product_import_search_product_import_component__WEBPACK_IMPORTED_MODULE_19__.SearchProductImportComponent,
        _search_goods_inventory_search_goods_inventory_component__WEBPACK_IMPORTED_MODULE_21__.SearchGoodsInventoryComponent,
        _search_country_code_search_country_code_component__WEBPACK_IMPORTED_MODULE_22__.SearchCountryCodeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_20__.NgZorroAntModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__.ScrollingModule], exports: [_search_services_search_services_component__WEBPACK_IMPORTED_MODULE_5__.SearchServicesComponent,
        _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_2__.SearchCustomerComponent,
        _search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_6__.SearchSupplierComponent,
        _search_lang_search_lang_component__WEBPACK_IMPORTED_MODULE_4__.SearchLangComponent,
        _search_currency_search_currency_component__WEBPACK_IMPORTED_MODULE_1__.SearchCurrencyComponent,
        _search_employee_search_employee_component__WEBPACK_IMPORTED_MODULE_3__.SearchEmployeeComponent,
        _search_category_search_category_component__WEBPACK_IMPORTED_MODULE_0__.SearchCategoryComponent,
        _search_phone_code_search_phone_code_component__WEBPACK_IMPORTED_MODULE_7__.SearchPhoneCodeComponent,
        _search_services_grid_search_services_grid_component__WEBPACK_IMPORTED_MODULE_8__.SearchServicesGridComponent,
        _search_foods_search_foods_component__WEBPACK_IMPORTED_MODULE_9__.SearchFoodsComponent,
        _search_foods_grid_search_foods_grid_component__WEBPACK_IMPORTED_MODULE_10__.SearchFoodsGridComponent,
        _search_foods_promotions_search_foods_promotions_component__WEBPACK_IMPORTED_MODULE_11__.SearchFoodsPromotionsComponent,
        _search_foods_promotions_grid_search_foods_promotions_grid_component__WEBPACK_IMPORTED_MODULE_12__.SearchFoodsPromotionsGridComponent,
        _search_ingredient_search_ingredient_component__WEBPACK_IMPORTED_MODULE_13__.SearchIngredientComponent,
        _search_ingredient_grid_search_ingredient_grid_component__WEBPACK_IMPORTED_MODULE_14__.SearchIngredientGridComponent,
        _search_tables_search_tables_component__WEBPACK_IMPORTED_MODULE_15__.SearchTablesComponent,
        _search_dishes_search_dishes_component__WEBPACK_IMPORTED_MODULE_16__.SearchDishesComponent,
        _search_area_search_area_component__WEBPACK_IMPORTED_MODULE_17__.SearchAreaComponent,
        _search_product_import_search_product_import_component__WEBPACK_IMPORTED_MODULE_19__.SearchProductImportComponent,
        _search_branch_search_branch_component__WEBPACK_IMPORTED_MODULE_18__.SearchBranchComponent,
        _search_goods_inventory_search_goods_inventory_component__WEBPACK_IMPORTED_MODULE_21__.SearchGoodsInventoryComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_cafe_components_search_search_module_ts.js.map