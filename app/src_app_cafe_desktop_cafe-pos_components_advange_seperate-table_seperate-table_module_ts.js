"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_cafe-pos_components_advange_seperate-table_seperate-table_module_ts"],{

/***/ 12516:
/*!*****************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-pos/components/advange/seperate-table/seperate-table.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeperateTableComponent": () => (/* binding */ SeperateTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














const _c0 = function (a0) { return { "table-item-active": a0 }; };
function SeperateTableComponent_nz_tab_16_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeperateTableComponent_nz_tab_16_div_3_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.chooseTable(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r2.checkActive(item_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.name, "");
} }
function SeperateTableComponent_nz_tab_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Not found"));
} }
function SeperateTableComponent_nz_tab_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SeperateTableComponent_nz_tab_16_div_3_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SeperateTableComponent_nz_tab_16_div_4_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, tab_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.table);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.table.length);
} }
class SeperateTableComponent {
    constructor(vhQueryCafe, router, languageService, cdRef, vhAlgorithm) {
        this.vhQueryCafe = vhQueryCafe;
        this.router = router;
        this.languageService = languageService;
        this.cdRef = cdRef;
        this.vhAlgorithm = vhAlgorithm;
        this.listTab = [];
        this.indexTab = 0;
        this.area = [] = this.vhQueryCafe.getlocalAreas().filter(item => item.status && item._id != 'go_home' && item.id_branch == this.vhQueryCafe.getDefaultBranch()._id);
        this.fromToTable = [];
        this.table = [];
        this.areaID = '';
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
    }
    ngOnInit() {
        this.areaID = this.dataRestore.id_area;
        this.area.forEach(item => this.listTab.push(item));
        this.table = this.vhAlgorithm.sortStringbyASC(this.vhQueryCafe.getlocalTables().filter(item => item.id_area == this.areaID && item.status), "name");
        this.indexTab = this.area.findIndex(item => item._id == this.areaID);
    }
    areaChanged(tab) {
        if (tab) {
            this.areaID = this.listTab[tab.index]._id;
        }
        if (this.fromToTable.length) {
            this.table = this.vhAlgorithm.sortStringbyASC(this.vhQueryCafe.getlocalTables().filter(item => item.id_area == this.areaID), "name");
        }
        else
            this.table = this.vhAlgorithm.sortStringbyASC(this.vhQueryCafe.getlocalTables().filter(item => item.id_area == this.areaID && item.status), "name");
    }
    renderTitle() {
        if (this.fromToTable[0])
            return `${this.fromToTable[0].name} -> ${this.fromToTable[1] ? this.fromToTable[1].name : this.languageService.translate("Select a target table")}`;
        else
            return this.languageService.translate("Which table do you want to separate?");
    }
    chooseTable(item) {
        if (this.fromToTable.length < 3) {
            let index = this.fromToTable.findIndex(table => table._id == item._id);
            switch (index) {
                case 0:
                    this.fromToTable = [];
                    this.areaChanged();
                    break;
                case 1:
                    this.fromToTable.pop();
                    this.areaChanged();
                    break;
                default: {
                    if (this.fromToTable.length < 2) {
                        this.fromToTable.push(item);
                        this.areaChanged();
                    }
                    break;
                }
            }
        }
    }
    goBack() {
        this.router.navigate(['/cafe/cafe-pos'], { state: { isSync: true } });
    }
    //----------------------------------------------------GIAO DIỆN------------------------------------------------------------//
    checkActive(item) {
        return this.fromToTable.map(table => table._id).includes(item._id);
    }
    /**tách bàn */
    separateTable() {
        this.router.navigate(['/cafe/cafe-pos/seperate-table/seperate'], { state: { fromToTable: this.fromToTable, areaID: this.areaID, dataRestore: this.dataRestore } });
    }
    ngAfterViewChecked() {
        if (document.getElementById("order-invoice") && document.querySelector(".sales-invoice-header") && document.querySelector('.ant-tabs-nav')) {
            let height = document.getElementById("order-invoice").clientHeight - document.querySelector(".sales-invoice-header").clientHeight -
                document.querySelector(".sales-invoice-header").clientHeight - document.querySelector('.ant-tabs-nav').clientHeight - 20 + "px";
            document.getElementById('order-invoice-scroll').style.height = height;
        }
        this.cdRef.detectChanges();
    }
}
SeperateTableComponent.ɵfac = function SeperateTableComponent_Factory(t) { return new (t || SeperateTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm)); };
SeperateTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SeperateTableComponent, selectors: [["app-seperate-table"]], decls: 17, vars: 11, consts: [["id", "order-invoice"], ["nz-row", "", 1, "sales-invoice-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "2", 1, "left-all-content", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "19", 1, "left-all-content", "title-header"], ["nz-col", "", "nzSpan", "3", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-green", 3, "disabled", "click"], ["name", "arrow-forward-outline"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"], ["id", "order-invoice-scroll", "nz-row", "", "nzGutter", "32", 1, "hideScrollbar"], ["nz-col", "", "nzSpan", "4", "class", "table", 4, "ngFor", "ngForOf"], ["class", "not-found", "style", "width: 100%;text-align: center;", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 1, "table"], [1, "table-item", 3, "ngClass"], [1, "table-item-name", "center-all-content", "hideScrollbar", 3, "click"], [1, "not-found", 2, "width", "100%", "text-align", "center"]], template: function SeperateTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeperateTableComponent_Template_div_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeperateTableComponent_Template_button_click_10_listener() { return ctx.separateTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-tabset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzSelectChange", function SeperateTableComponent_Template_nz_tabset_nzSelectChange_15_listener($event) { return ctx.areaChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SeperateTableComponent_nz_tab_16_Template, 5, 5, "nz-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, "Back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.renderTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.fromToTable.length != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "Continue"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzSelectedIndex", ctx.indexTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listTab);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__.NzTabComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 10vw;\n  max-height: 300px;\n  border-radius: 15px;\n  border: 1px solid var(--ion-color-vh-green);\n  background: var(--ion-color-vh-white);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-name[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-green);\n  font-weight: 700;\n  word-break: break-word;\n  padding: 5px;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%]   .table-item-name[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-white);\n}\nnz-layout[_ngcontent-%COMP%]   #order-invoice-scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcGVyYXRlLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxjQUFBO0FBR1I7QUFGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FBSVo7QUFIWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFLaEI7QUFGUTtFQUNJLHFDQUFBO0FBSVo7QUFIWTtFQUNJLGdDQUFBO0FBS2hCO0FBREk7RUFDSSxrQkFBQTtBQUdSIiwiZmlsZSI6InNlcGVyYXRlLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTB2dztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbS1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAudGFibGUtaXRlbS1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI29yZGVyLWludm9pY2Utc2Nyb2xsIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4:
/*!**************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-pos/components/advange/seperate-table/seperate-table.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeperateTableModule": () => (/* binding */ SeperateTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _seperate_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seperate-table.component */ 12516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _seperate_seperate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seperate/seperate.component */ 8447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _seperate_table_component__WEBPACK_IMPORTED_MODULE_0__.SeperateTableComponent,
            },
            {
                path: 'seperate',
                component: _seperate_seperate_component__WEBPACK_IMPORTED_MODULE_2__.SeperateComponent
            }
        ]
    }
];
class SeperateTableModule {
}
SeperateTableModule.ɵfac = function SeperateTableModule_Factory(t) { return new (t || SeperateTableModule)(); };
SeperateTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SeperateTableModule });
SeperateTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SeperateTableModule, { declarations: [_seperate_table_component__WEBPACK_IMPORTED_MODULE_0__.SeperateTableComponent, _seperate_seperate_component__WEBPACK_IMPORTED_MODULE_2__.SeperateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule] }); })();


/***/ }),

/***/ 8447:
/*!********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-pos/components/advange/seperate-table/seperate/seperate.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeperateComponent": () => (/* binding */ SeperateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function SeperateComponent_ion_item_21_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.comboName);
} }
function SeperateComponent_ion_item_21_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r2.toppingsName, " ");
} }
const _c0 = function (a0) { return { "vh-color": a0 }; };
function SeperateComponent_ion_item_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeperateComponent_ion_item_21_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r2 = restoredCtx.$implicit; return item_r2.choice = !item_r2.choice; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-thumbnail", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SeperateComponent_ion_item_21_p_6_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SeperateComponent_ion_item_21_p_7_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.img ? item_r2.img : "./assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, item_r2.choice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.comboName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.toppingsName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, item_r2.choice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.quantity);
} }
function SeperateComponent_ion_item_29_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.comboName);
} }
function SeperateComponent_ion_item_29_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r9.toppingsName, " ");
} }
const _c1 = function (a0) { return { "vh-border": a0 }; };
function SeperateComponent_ion_item_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeperateComponent_ion_item_29_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r9 = restoredCtx.$implicit; return item_r9.choice = !item_r9.choice; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-thumbnail", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SeperateComponent_ion_item_29_p_6_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SeperateComponent_ion_item_29_p_7_Template, 2, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, item_r9.choice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r9.img ? item_r9.img : "./assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, item_r9.choice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.comboName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.toppingsName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, item_r9.choice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.quantity);
} }
class SeperateComponent {
    constructor(router, vhQueryCafe, vhQuery, languageService, vhAuth, vhComponent) {
        this.router = router;
        this.vhQueryCafe = vhQueryCafe;
        this.vhQuery = vhQuery;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this._TABLE1_BILL = {
            bill: null,
            billDetail: [],
            tableInfo: null
        };
        this._TABLE2_BILL = {
            bill: null,
            billDetail: [],
            tableInfo: null
        };
        this._STATUS = true;
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        let dataTrans = this.router.getCurrentNavigation().extras.state.fromToTable;
        this.areaID = this.router.getCurrentNavigation().extras.state.areaID;
        this._TABLE1_BILL['tableInfo'] = dataTrans[0];
        this._TABLE2_BILL['tableInfo'] = dataTrans[1];
        this.getData(dataTrans);
    }
    ngOnInit() {
    }
    /**lấy dữ liệu bill/detail
     * @param dataTable: dữ liệu 2 bàn cần tách
    */
    getData(dataTable) {
        Promise.all([
            this.vhQueryCafe.getBills_byFields({ id_table: { $eq: dataTable[0]._id }, bill_type: { $eq: 5 }, id_branch: { $eq: this.vhQueryCafe.getDefaultBranch()._id } }),
            this.vhQueryCafe.getBills_byFields({ id_table: { $eq: dataTable[1]._id }, bill_type: { $eq: 5 }, id_branch: { $eq: this.vhQueryCafe.getDefaultBranch()._id } })
        ]).then(([table1, table2]) => {
            /** Kiểm tra bill muốn tách có tồn tại không */
            if (!table1.length) {
                this.vhComponent.alertMessage("", "", this.languageService.translate("The invoice is not existed"), "OK").then(() => this.goBackArea());
                return;
            }
            this._TABLE1_BILL['bill'] = table1[0];
            if (table2.length)
                this._TABLE2_BILL['bill'] = table2[0];
            else {
                this._TABLE2_BILL['bill'] = Object.assign(Object.assign({}, table1[0]), { total: 0, payment: 0, discount: 0, fee: 0, id_table: dataTable[1]._id, id_area: dataTable[1].id_area });
                delete this._TABLE2_BILL['bill']['_id'];
            }
            if (table2.length) { // bàn 2 đã có khách
                Promise.all([
                    this.vhQueryCafe.getBill_details_byId_bill(table1[0]._id), this.vhQueryCafe.getBill_details_byId_bill(table2[0]._id)
                ]).then(([billDetail1, billDetail2]) => {
                    this._TABLE1_BILL['billDetail'] = billDetail1.map(item => {
                        let data = Object.assign(Object.assign(Object.assign({}, item), { choice: false }), this.getNameImgFood(item.id_product, item.id_subproduct));
                        if (data.combos) {
                            data.combos = data.combos.map(element => {
                                return Object.assign(Object.assign({}, element), { name: this.getNameFood(element.id_product, element.id_subproduct) });
                            });
                            data.comboName = this.getSubCombo(data.combos);
                        }
                        if (data.toppings)
                            data.toppingsName = this.getKindTopping(data.toppings);
                        return data;
                    });
                    this._TABLE2_BILL['billDetail'] = billDetail2.map(item => {
                        let data = Object.assign(Object.assign(Object.assign({}, item), { choice: false }), this.getNameImgFood(item.id_product, item.id_subproduct));
                        if (data.combos) {
                            data.combos = data.combos.map(element => {
                                return Object.assign(Object.assign({}, element), { name: this.getNameFood(element.id_product, element.id_subproduct) });
                            });
                            data.comboName = this.getSubCombo(data.combos);
                        }
                        if (data.toppings)
                            data.toppingsName = this.getKindTopping(data.toppings);
                        return data;
                    });
                }).catch(err => console.error(err));
            }
            else { // bàn 2 là bàn trống
                this.vhQueryCafe.getBill_details_byId_bill(table1[0]._id).then(billDetail1 => {
                    this._TABLE1_BILL['billDetail'] = billDetail1.map(item => {
                        let data = Object.assign(Object.assign(Object.assign({}, item), { choice: false }), this.getNameImgFood(item.id_product, item.id_subproduct));
                        if (data.combos) {
                            data.combos = data.combos.map(element => {
                                return Object.assign(Object.assign({}, element), { name: this.getNameFood(element.id_product, element.id_subproduct) });
                            });
                            data.comboName = this.getSubCombo(data.combos);
                        }
                        if (data.toppings)
                            data.toppingsName = this.getKindTopping(data.toppings);
                        return data;
                    });
                }).catch(err => console.error(err));
            }
        });
    }
    /**Tiến hành tách bàn */
    separateTable() {
        this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Separate table"), "OK", this.languageService.translate("Cancel")).then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                //cập nhật payment
                if (this._TABLE1_BILL['bill'].payment_type != 2)
                    this._TABLE1_BILL['bill'].payment = this._TABLE1_BILL['bill'].total * (1 + this._TABLE1_BILL['bill'].tax / 100);
                if (this._TABLE2_BILL['bill'].payment_type != 2)
                    this._TABLE2_BILL['bill'].payment = this._TABLE2_BILL['bill'].total * (1 + this._TABLE2_BILL['bill'].tax / 100);
                // xử lý bàn 1
                const process1 = () => {
                    return new Promise((resolve, rejects) => {
                        for (let item of this._TABLE1_BILL['billDetail']) {
                            item.id_bill = this._TABLE1_BILL['bill']._id;
                        }
                        this.vhQueryCafe.updateBill_Billdetail(this._TABLE1_BILL['bill']._id, this._TABLE1_BILL['bill'], this._TABLE1_BILL['billDetail']).then(res => resolve(res)).catch(err => rejects(err));
                    });
                };
                // xử lý bàn 2
                const process2 = () => {
                    return new Promise((resolve, rejects) => {
                        if (this._TABLE2_BILL['bill']._id) { // bàn đã có khách
                            for (let item of this._TABLE2_BILL['billDetail']) {
                                item.id_bill = this._TABLE2_BILL['bill']._id;
                            }
                            this.vhQueryCafe.updateBill_Billdetail(this._TABLE2_BILL['bill']._id, this._TABLE2_BILL['bill'], this._TABLE2_BILL['billDetail']).then(res => resolve(res)).catch(err => rejects(err));
                        }
                        else { // bàn mới
                            for (let item of this._TABLE2_BILL['billDetail']) {
                                delete item.id_bill;
                                delete item._id;
                            }
                            Promise.all([
                                this.vhQueryCafe.createBill_Billdetail(this._TABLE2_BILL['bill'], this._TABLE2_BILL['billDetail']),
                                this.vhQueryCafe.updateTable(this._TABLE2_BILL['bill'].id_table, { status: true })
                            ]).then(res => resolve(res)).catch(err => rejects(err));
                        }
                    });
                };
                Promise.all([process1(), process2()]).then(res => {
                    this.vhComponent.showToast(2000, this.languageService.translate("Separate table successfully"), "success-toast").then(() => {
                        this.goBackArea();
                    });
                }).catch(err => {
                    console.error(err);
                    this.vhComponent.showToast(2000, this.languageService.translate("Separate table failed"), "alert-toast");
                }).finally(() => this.vhComponent.hideLoading());
            });
        }, () => { });
    }
    /** Kiểm tra điều kiện cho phép tách bàn  */
    checkSeparate() {
        let choice1 = this._TABLE1_BILL['billDetail'].filter(item => item.choice);
        let choice2 = this._TABLE2_BILL['billDetail'].filter(item => item.choice);
        // TH cả 2 bàn đều chọn => cho phép
        if (choice1.length && choice2.length)
            return false;
        // Chỉ có bàn 1 chọn
        if (choice1.length) {
            // TH chọn hết
            if (choice1.length == this._TABLE1_BILL['billDetail'].length && choice1.some(item => !item.toppings && item.quantity > 1))
                return false;
            // TH chọn 1 phần
            if (choice1.length < this._TABLE1_BILL['billDetail'].length)
                return false;
        }
        // Chỉ có bàn 2 chọn
        if (choice2.length) {
            // TH chọn hết
            if (choice2.length == this._TABLE2_BILL['billDetail'].length && choice2.some(item => !item.toppings && item.quantity > 1))
                return false;
            // TH chọn 1 phần
            if (choice2.length < this._TABLE2_BILL['billDetail'].length)
                return false;
        }
        return true;
    }
    /**Chuyển món */
    transmit() {
        if (this.checkSeparate()) {
            this.vhComponent.showToast(2000, this.languageService.translate("Can not separate all dishes"), "alert-toast");
            return;
        }
        // duyệt bill detail bàn 1
        for (let i in this._TABLE1_BILL['billDetail']) {
            if (this._TABLE1_BILL['billDetail'][i].choice) { // món ở bàn 1 được chọn
                let index = this._TABLE2_BILL['billDetail'].findIndex(item => item._id == this._TABLE1_BILL['billDetail'][i]._id);
                if (this._TABLE1_BILL['billDetail'][i].toppings) {
                    // tổng giá toppings
                    const toppingTotal = this._TABLE1_BILL['billDetail'][i].toppings ? this._TABLE1_BILL['billDetail'][i].toppings.reduce((sum, current) => sum + current.price * current.quantity, 0) : 0;
                    this._TABLE2_BILL['billDetail'].push(Object.assign(Object.assign({}, this._TABLE1_BILL['billDetail'][i]), { choice: false }));
                    // tính lại tổng
                    this._TABLE1_BILL['bill'].total -= this._TABLE1_BILL['billDetail'][i].price * this._TABLE1_BILL['billDetail'][i].quantity + toppingTotal;
                    this._TABLE2_BILL['bill'].total += this._TABLE1_BILL['billDetail'][i].price * this._TABLE1_BILL['billDetail'][i].quantity + toppingTotal;
                    this._TABLE1_BILL['billDetail'][i].quantity = 0;
                    // bỏ qua đoạn code dưới
                    continue;
                }
                // dành cho món không có topping
                else if (index == -1)
                    this._TABLE2_BILL['billDetail'].push(Object.assign(Object.assign({}, this._TABLE1_BILL['billDetail'][i]), { choice: false, quantity: 1 }));
                else
                    this._TABLE2_BILL['billDetail'][index].quantity += 1;
                this._TABLE1_BILL['bill'].total -= this._TABLE1_BILL['billDetail'][i].price;
                this._TABLE2_BILL['bill'].total += this._TABLE1_BILL['billDetail'][i].price;
                this._TABLE1_BILL['billDetail'][i].quantity -= 1;
                this._TABLE1_BILL['billDetail'][i].choice = false;
            }
        }
        // duyệt bill detail bàn 2
        for (let i in this._TABLE2_BILL['billDetail']) {
            if (this._TABLE2_BILL['billDetail'][i].choice) { // món ở bàn 2 được chọn
                let index = this._TABLE1_BILL['billDetail'].findIndex(item => item._id == this._TABLE2_BILL['billDetail'][i]._id);
                if (this._TABLE2_BILL['billDetail'][i].toppings) {
                    // tổng giá toppings
                    const toppingTotal = this._TABLE2_BILL['billDetail'][i].toppings ? this._TABLE2_BILL['billDetail'][i].toppings.reduce((sum, current) => sum + current.price * current.quantity, 0) : 0;
                    this._TABLE1_BILL['billDetail'].push(Object.assign(Object.assign({}, this._TABLE2_BILL['billDetail'][i]), { choice: false }));
                    // tính lại tổng
                    this._TABLE1_BILL['bill'].total += this._TABLE2_BILL['billDetail'][i].price * this._TABLE2_BILL['billDetail'][i].quantity + toppingTotal;
                    this._TABLE2_BILL['bill'].total -= this._TABLE2_BILL['billDetail'][i].price * this._TABLE2_BILL['billDetail'][i].quantity + toppingTotal;
                    this._TABLE2_BILL['billDetail'][i].quantity = 0;
                    // bỏ qua đoạn code dưới
                    continue;
                }
                // dành cho món không có topping
                else if (index == -1)
                    this._TABLE1_BILL['billDetail'].push(Object.assign(Object.assign({}, this._TABLE2_BILL['billDetail'][i]), { choice: false, quantity: 1 }));
                else
                    this._TABLE1_BILL['billDetail'][index].quantity += 1;
                this._TABLE1_BILL['bill'].total += this._TABLE2_BILL['billDetail'][i].price;
                this._TABLE2_BILL['bill'].total -= this._TABLE2_BILL['billDetail'][i].price;
                this._TABLE2_BILL['billDetail'][i].quantity -= 1;
                this._TABLE2_BILL['billDetail'][i].choice = false;
            }
        }
        // lọc lại các món quantity > 0
        this._TABLE1_BILL['billDetail'] = this._TABLE1_BILL['billDetail'].filter(item => item.quantity);
        this._TABLE2_BILL['billDetail'] = this._TABLE2_BILL['billDetail'].filter(item => item.quantity);
        // cho phép tách bàn
        this._STATUS = false;
    }
    ////////////////////////////////////////////////////////// Lấy tên các thông tin món ăn //////////////////////////////////////////////////////////////////////////
    getNameImgFood(id_prod, id_subProd) {
        let food = this.vhQueryCafe.getlocalProduct(id_prod);
        let subFood = food.subs ? food.subs.find(item => item._id == id_subProd) : null;
        return { name: `${food ? food.name : ''} ${subFood ? '(' + this.languageService.translate(subFood.name) + ')' : ''}`, img: food.img };
    }
    getNameFood(id_prod, id_subProd) {
        let food = this.vhQueryCafe.getlocalProduct(id_prod);
        let subFood;
        if (id_subProd)
            subFood = food.subs.find(item => item._id == id_subProd);
        return `${food ? food.name : ''} ${subFood ? '(' + subFood.name + ')' : ''}`;
    }
    getKindTopping(toppings) {
        let nameTopping = "";
        toppings.forEach(topping => nameTopping += `${nameTopping.length ? ", " : ""}${topping.quantity} ${this.getNameFood(topping.id_product, topping.id_subproduct)}`);
        return nameTopping;
    }
    getSubCombo(arr) {
        let subName = "";
        arr.forEach(item => {
            if (subName.length)
                subName += `, ${item.quantity} ${item.name}`;
            else
                subName += `${item.quantity} ${item.name}`;
        });
        return subName;
    }
    goBackArea() {
        this.router.navigate(['/cafe/cafe-pos'], { state: this.dataRestore });
    }
    goBack() {
        this.router.navigate(['/cafe/cafe-pos/seperate-table'], { state: { dataRestore: this.dataRestore } });
    }
    ngAfterViewChecked() {
        if (document.getElementById("seperate-invoice") && document.querySelector(".seperate-invoice-header")) {
            let height = document.getElementById("seperate-invoice").clientHeight - document.querySelector(".seperate-invoice-header").clientHeight - 50 + 'px';
            document.getElementById("seperate-invoice-content-table-1").style.height = height;
            document.getElementById("seperate-invoice-content-table-2").style.height = height;
        }
    }
}
SeperateComponent.ɵfac = function SeperateComponent_Factory(t) { return new (t || SeperateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent)); };
SeperateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SeperateComponent, selectors: [["app-seperate"]], decls: 30, vars: 15, consts: [["id", "seperate-invoice"], ["nz-row", "", 1, "seperate-invoice-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "2", 1, "left-all-content", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "19", 1, "left-all-content", "title-header"], ["nz-col", "", "nzSpan", "3", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-green", 3, "disabled", "click"], ["name", "save-outline"], ["nz-col", "", "nzSpan", "24", 1, "seperate-invoice-content"], ["nz-row", ""], ["nz-col", "", "nzSpan", "10", 1, "seperate-invoice-content-table"], ["id", "seperate-invoice-content-table-1", 1, "seperate-invoice-content-table-1", "hideScrollbar"], ["class", "", "lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", 1, "seperate-invoice-content-table", "center-all-content"], ["mode", "md", "fill", "solid", "color", "vh-green", 1, "transmit-btn", 3, "click"], ["slot", "icon-only", "color", "vh-white", "name", "repeat"], ["id", "seperate-invoice-content-table-2", 1, "seperate-invoice-content-table-2", "hideScrollbar"], ["class", "", "lines", "none", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "", 3, "click"], ["slot", "start"], [3, "src"], [1, "ion-text-wrap"], [3, "ngClass"], ["style", "color: var(--ion-color-vh-gray)", 4, "ngIf"], [2, "color", "var(--ion-color-vh-gray)"], ["lines", "none", 1, "", 3, "ngClass", "click"]], template: function SeperateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeperateComponent_Template_div_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeperateComponent_Template_button_click_11_listener() { return ctx.separateTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SeperateComponent_ion_item_21_Template, 11, 11, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeperateComponent_Template_ion_button_click_23_listener() { return ctx.transmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SeperateComponent_ion_item_29_Template, 11, 14, "ion-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "Back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "Separate table"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx._STATUS);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 13, "Save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._TABLE1_BILL["tableInfo"].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx._TABLE1_BILL["billDetail"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._TABLE2_BILL["tableInfo"].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx._TABLE2_BILL["billDetail"]);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .seperate-invoice-content-table-1[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .seperate-invoice-content-table-2[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #ceced0;\n  border-radius: 5px;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .seperate-invoice-content-table-1[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .seperate-invoice-content-table-2[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .seperate-invoice-content-table-1[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .vh-color[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .seperate-invoice-content-table-2[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .vh-color[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8rem;\n  max-height: 300px;\n  border-radius: 15px;\n  border: 1px solid var(--ion-color-vh-green);\n  background: var(--ion-color-vh-white);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-name[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-green);\n  font-weight: 700;\n  word-break: break-word;\n  padding: 5px;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%]   .table-item-name[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcGVyYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFBUTtFQUVJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUFZO0VBQ0ksZUFBQTtBQUVoQjtBQURnQjtFQUNJLDJDQUFBO0FBR3BCO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FBQ1o7QUFBWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFDUTtFQUNJLHFDQUFBO0FBQ1o7QUFBWTtFQUNJLGdDQUFBO0FBRWhCIiwiZmlsZSI6InNlcGVyYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICAuc2VwZXJhdGUtaW52b2ljZS1jb250ZW50IHtcclxuICAgICAgICAmLXRhYmxlLTEsXHJcbiAgICAgICAgJi10YWJsZS0yIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjZWNlZDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAudmgtY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWl0ZW0tYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgLnRhYmxlLWl0ZW0tbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_cafe-pos_components_advange_seperate-table_seperate-table_module_ts.js.map