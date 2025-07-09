"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_cafe-pos_components_advange_switch-table_switch-table_module_ts"],{

/***/ 54194:
/*!*************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-pos/components/advange/switch-table/switch-table.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchTableComponent": () => (/* binding */ SwitchTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);















const _c0 = function (a0) { return { "table-item-active": a0 }; };
function SwitchTableComponent_nz_tab_16_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SwitchTableComponent_nz_tab_16_div_3_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.chooseTable(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r2.checkActive(item_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.name);
} }
function SwitchTableComponent_nz_tab_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Not found"));
} }
function SwitchTableComponent_nz_tab_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SwitchTableComponent_nz_tab_16_div_3_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SwitchTableComponent_nz_tab_16_div_4_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, tab_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.table);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.table.length);
} }
class SwitchTableComponent {
    constructor(vhQueryCafe, router, languageService, vhComponent, vhQuery, cdRef, vhAuth, vhAlgorithm) {
        this.vhQueryCafe = vhQueryCafe;
        this.router = router;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.cdRef = cdRef;
        this.vhAuth = vhAuth;
        this.vhAlgorithm = vhAlgorithm;
        this.listTab = [];
        this.indexTab = 0;
        this.area = [] = this.vhQueryCafe.getlocalAreas().filter(item => item.status && item._id != 'go_home' && item.id_branch == this.vhQueryCafe.getDefaultBranch()._id);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.areaID = '';
        this.fromToTable = [];
        this.table = [];
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
            return this.languageService.translate("Which table do you want to move?");
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
    //////////////////////////////////////////////////////DỊCH CHUYỂN////////////////////////////////////////////////////////////
    switchTable() {
        this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Switch table") + " ?", "OK", this.languageService.translate("Cancel")).then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                if (this.fromToTable[1].status) { // TH 2 bàn đã có khách
                    Promise.all([
                        this.vhQueryCafe.getBills_byFields({ bill_type: { $eq: 5 }, id_table: { $eq: this.fromToTable[0]._id }, id_branch: { $eq: this.vhQueryCafe.getDefaultBranch()._id } }),
                        this.vhQueryCafe.getBills_byFields({ bill_type: { $eq: 5 }, id_table: { $eq: this.fromToTable[1]._id }, id_branch: { $eq: this.vhQueryCafe.getDefaultBranch()._id } }),
                    ]).then(([fromBill, toBill]) => {
                        /** Kiểm tra bill muốn tách có tồn tại không */
                        if (!fromBill['length'] || !toBill['length']) {
                            this.vhComponent.hideLoading();
                            this.vhComponent.alertMessage("", "", this.languageService.translate("The invoice is not existed"), "OK").then(() => this.goBack());
                            return;
                        }
                        this.vhQueryCafe.getBill_details_byId_bill(fromBill[0]._id).then(billDetail => {
                            let process = [];
                            for (let i = 0; i < billDetail.length; i++) {
                                toBill[0]['total'] += billDetail[i].price * billDetail[i].quantity;
                                if (billDetail[i].toppings)
                                    toBill[0]['total'] += billDetail[i].toppings.reduce((sum, current) => sum + current.price * current.quantity, 0);
                                process.push(this.vhQueryCafe.createBill_Detail(Object.assign(Object.assign({}, billDetail[i]), { id_bill: toBill[0]['_id'] })));
                            }
                            process.push(this.vhQueryCafe.updateBill(toBill[0]['_id'], { total: toBill[0].total, payment: toBill[0].payment_type == 2 ? 0 : toBill[0].total * (1 + toBill[0].tax / 100), bill_open_time: new Date() }));
                            process.push(this.vhQueryCafe.deleteBill_Billdetail(fromBill[0]['_id']));
                            process.push(this.vhQueryCafe.updateTable(this.fromToTable[0]._id, { status: false }));
                            Promise.all(process).then((res) => {
                                this.vhComponent.showToast(2000, this.languageService.translate("Switch table successfully"), "success-toast").then(() => this.goBack());
                            }).catch((err) => this.vhComponent.showToast(2000, "Switch table failed", "alert-toast")).finally(() => this.vhComponent.hideLoading());
                        });
                    });
                }
                else { // TH qua bàn mới
                    this.vhQueryCafe.getBills_byFields({ bill_type: { $eq: 5 }, id_table: { $eq: this.fromToTable[0]._id }, id_branch: { $eq: this.vhQueryCafe.getDefaultBranch()._id } }).then((fromBill) => {
                        if (!fromBill['length']) {
                            this.vhComponent.hideLoading();
                            this.vhComponent.alertMessage("", "", this.languageService.translate("The invoice is not existed"), "OK").then(() => this.goBack());
                            return;
                        }
                        Promise.all([
                            this.vhQueryCafe.updateBill(fromBill[0]._id, { id_table: this.fromToTable[1]._id, id_area: this.fromToTable[1].id_area, bill_open_time: new Date() }),
                            this.vhQueryCafe.updateTable(this.fromToTable[0]._id, { status: false }),
                            this.vhQueryCafe.updateTable(this.fromToTable[1]._id, { status: true })
                        ]).then(() => {
                            this.vhComponent.showToast(2000, this.languageService.translate("Switch table successfully"), "success-toast").then(() => this.goBack());
                        }).catch((err) => this.vhComponent.showToast(2000, "Switch table failed", "alert-toast")).finally(() => this.vhComponent.hideLoading());
                    });
                }
            });
        }, () => { });
    }
    goBack() {
        this.router.navigate(['/cafe/cafe-pos'], { state: { isSync: true } });
    }
    //----------------------------------------------------GIAO DIỆN------------------------------------------------------------//
    checkActive(item) {
        return this.fromToTable.map(table => table._id).includes(item._id);
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
SwitchTableComponent.ɵfac = function SwitchTableComponent_Factory(t) { return new (t || SwitchTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm)); };
SwitchTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SwitchTableComponent, selectors: [["app-switch-table"]], decls: 17, vars: 11, consts: [["id", "order-invoice"], ["nz-row", "", 1, "sales-invoice-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "2", 1, "left-all-content", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "19", 1, "left-all-content", "title-header"], ["nz-col", "", "nzSpan", "3", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-green", 3, "disabled", "click"], ["name", "save-outline"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"], ["id", "order-invoice-scroll", "nz-row", "", "nzGutter", "32", 1, "hideScrollBar"], ["nz-col", "", "nzSpan", "4", "class", "table", 4, "ngFor", "ngForOf"], ["nz-col", "", "class", "not-found", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 1, "table"], [1, "table-item", 3, "ngClass"], [1, "table-item-name", "center-all-content", "hideScrollbar", 3, "click"], ["nz-col", "", 1, "not-found"]], template: function SwitchTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SwitchTableComponent_Template_div_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SwitchTableComponent_Template_button_click_10_listener() { return ctx.switchTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nz-tabset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzSelectChange", function SwitchTableComponent_Template_nz_tabset_nzSelectChange_15_listener($event) { return ctx.areaChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SwitchTableComponent_nz_tab_16_Template, 5, 5, "nz-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, "Back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.renderTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fromToTable.length != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 9, "Save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzSelectedIndex", ctx.indexTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listTab);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 10vw;\n  max-height: 300px;\n  border-radius: 15px;\n  border: 1px solid var(--ion-color-vh-green);\n  background: var(--ion-color-vh-white);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-name[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-green);\n  font-weight: 700;\n  word-break: break-word;\n  padding: 5px;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .table-item-active[_ngcontent-%COMP%]   .table-item-name[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-white);\n}\nnz-layout[_ngcontent-%COMP%]   #order-invoice-scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.btn-white[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-size: 1rem;\n}\n.btn-white[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksY0FBQTtBQUdSO0FBRlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQUlaO0FBSFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBS2hCO0FBRlE7RUFDSSxxQ0FBQTtBQUlaO0FBSFk7RUFDSSxnQ0FBQTtBQUtoQjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBRVI7QUFBSTtFQUNJLGdDQUFBO0FBRVIiLCJmaWxlIjoic3dpdGNoLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTB2dztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbS1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAudGFibGUtaXRlbS1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI29yZGVyLWludm9pY2Utc2Nyb2xsIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbn1cclxuLmJ0bi13aGl0ZSB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb246aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 37541:
/*!**********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-pos/components/advange/switch-table/switch-table.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchTableModule": () => (/* binding */ SwitchTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _switch_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-table.component */ 54194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: "",
        component: _switch_table_component__WEBPACK_IMPORTED_MODULE_0__.SwitchTableComponent
    }
];
class SwitchTableModule {
}
SwitchTableModule.ɵfac = function SwitchTableModule_Factory(t) { return new (t || SwitchTableModule)(); };
SwitchTableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SwitchTableModule });
SwitchTableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SwitchTableModule, { declarations: [_switch_table_component__WEBPACK_IMPORTED_MODULE_0__.SwitchTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_cafe-pos_components_advange_switch-table_switch-table_module_ts.js.map