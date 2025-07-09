"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_cashflow_supplier-liability_supplier-liability_module_ts"],{

/***/ 73281:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/cashflow/supplier-liability/supplier-liability.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierLiabilityComponent": () => (/* binding */ SupplierLiabilityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function SupplierLiabilityComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 28);
} }
function SupplierLiabilityComponent_nz_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 29);
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", option_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzValue", option_r8._id);
} }
function SupplierLiabilityComponent_div_21_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, option_r10.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzValue", option_r10._id);
} }
function SupplierLiabilityComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function SupplierLiabilityComponent_div_21_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.search($event); })("ngModelChange", function SupplierLiabilityComponent_div_21_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.id_branch_report = $event; })("ngModelChange", function SupplierLiabilityComponent_div_21_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.changeBranch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SupplierLiabilityComponent_div_21_nz_option_3_Template, 2, 4, "nz-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, "Select branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx_r3.id_branch_report);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.branchList);
} }
function SupplierLiabilityComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.exportCSV(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r4.suppliersShow.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Download"), " ");
} }
function SupplierLiabilityComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(ctx_r6.totalInfo.debt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(ctx_r6.totalInfo.payment), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(ctx_r6.totalInfo.rest), " ");
} }
function SupplierLiabilityComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_tr_61_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const data_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.gotoDetailSupplier(data_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r17.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.vhAlgorithm.vhcurrencyunit(data_r17.debt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.vhAlgorithm.vhcurrencyunit(data_r17.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r7.vhAlgorithm.vhcurrencyunit(data_r17.rest), " ");
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class SupplierLiabilityComponent {
    constructor(router, vhAlgorithm, languageService, vhQueryCafe, cdRef, vhComponent, vhAuth, fncService) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.cdRef = cdRef;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.fncService = fncService;
        this.keySearch = ""; // biến chưa key tìm
        this.suppliersList = [];
        this.supplierSub = []; // biến chứa dữ liệu để backup cho việc tìm, sort
        this.selectedValue = 'all'; // biến chưa id ncc, all hoặc id ncc
        this.suppliersShow = []; // bến chứa dữ liệu ra HTML
        this.list_select_supplier = [
            { _id: 'all', name: this.languageService.translate('All') }
        ];
        this.branchList = [];
        this.id_branch_report = '';
        this.useBranch = this.fncService.checkUsingBranch(); // check xem có 2 chi nhánh kg.
        this.date = [new Date(), new Date()];
        this.search_branchList = [];
        this.list_search_supplier = [];
        //** hàm sort cho các cột */
        this.statusDebt = false;
        this.statusPaid = false;
        this.statusRest = false;
        this.statusName = false;
        this.status = false;
        let state = this.router.getCurrentNavigation().extras.state;
        if (state) { //  nhận dữ liệu tuwf trang chi tiết truyền về lại
            this.keySearch = state.stateObj.keySearch;
            this.selectedValue = state.stateObj.selectedValue;
            this.id_branch_report = state.stateObj.id_branch_report;
            this.supplierSub = state.stateObj.suppliersShow;
            this.totalInfo = state.stateObj.totalInfo;
            this.date = [new Date(state.stateObj.startTime), new Date(state.stateObj.endTime)];
            this.searchSupplier(this.keySearch);
        }
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
    }
    ngOnInit() {
        this.getBranches();
        this.getSuppliersList();
    }
    showReport() {
        this.filterSupplier(this.selectedValue);
    }
    getBranches() {
        let branches = [...this.vhQueryCafe.getlocalBranchs()]; // danh sách toàn bộ chi nhánh
        let employee = this.vhAuth.getUser(); // thông tn nhân viên
        let defaultBranch = this.vhQueryCafe.getDefaultBranch()._id; // chi nhánh mặc định khi đăng nhập (lấy id chi nhánh)
        if (this.useBranch) { // kiểm tra xem có 2 chi nhánh trở lên
            if (employee['owner'] == 'boss') { // kiểm tra tài khoản đăng nhập là boss
                this.branchList = branches; // gán danh sách chi nhánh show ra HTML
                if (this.branchList.length > 1)
                    this.branchList.unshift({ _id: "all", name: "All" });
                this.id_branch_report = defaultBranch; // gán mặc định chi nhánh mặc định xem báo cáo là chi nhánh đăng nhập vô
            }
            else { // trường hợp tài khoản là nhân viên
                this.vhAuth.getPermission(employee['_id']).then(result => {
                    branches.forEach(item => {
                        if (result[`${item._id}_view_report_branch`])
                            this.branchList.push(Object.assign({}, item)); // kiểm tra chi nhánh đc xem báo cáo, gán cho branchList show ra HMLT 
                    });
                    if (this.branchList.length > 1) { // trường hợp được xem báo cáo 2 chi nhánh trở lên
                        this.branchList.unshift({ _id: "all", name: "All" }); // đẩy xem tất cả vô, nếu có 2 chi nhánh trở lên
                        for (let i in this.branchList) {
                            if (this.branchList[i]._id == defaultBranch)
                                return this.id_branch_report = defaultBranch; // nếu có gán chi nhánh xem báo mặc định là chi nhánh mặc định (đăng nhập)
                            else
                                this.id_branch_report = this.branchList[1]._id; // ngược lại gán chi nhánh mặc định là chi nhánh thứ 1
                        }
                    }
                    else if (this.branchList.length == 1) { // nếu chỉ đc xem báo cáo 1 chi nhánh , lấy mặc định là chi nhánh đó
                        this.id_branch_report = this.branchList[0]._id;
                    }
                    else
                        this.vhComponent.alertMessageDesktop("warning", "Bạn không được chọn chi nhánh xem báo cáo"); // kg có chi nhánh xem báo cáo
                });
            }
            this.search_branchList = this.branchList;
        }
        else
            this.id_branch_report = defaultBranch; // chỉ xài 1 chi nhánh 
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.branchList = this.vhAlgorithm.searchList(tempVal, this.search_branchList, ['name']);
        else
            this.branchList = this.search_branchList;
    }
    changeBranch(event) {
        this.id_branch_report = event;
    }
    ngAfterViewChecked() {
        if (document.querySelector("#product-list") && document.querySelector(".ant-table-thead") && document.querySelector(".product-list-header")) {
            this.heightScroll = (document.querySelector("#product-list").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".product-list-header").clientHeight) - 90 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**Lấy danh sách nhà cung cấp */
    getSuppliersList() {
        this.suppliersList = this.vhQueryCafe.getlocalSuppliers();
        for (let i in this.suppliersList) {
            this.list_select_supplier.push({
                _id: this.suppliersList[i]._id,
                name: this.suppliersList[i].name,
                phone: this.suppliersList[i].phone
            });
        }
        this.list_search_supplier = this.list_select_supplier;
    }
    searchSelectSupplier(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.list_select_supplier = this.vhAlgorithm.searchList(tempVal, this.list_search_supplier, ['name', 'phone']);
        else
            this.list_select_supplier = this.list_search_supplier;
    }
    sort(sort, value) {
        if (sort) {
            this.suppliersShow = this.vhAlgorithm.sortNumberbyASC([...this.suppliersShow], value);
        }
        else {
            this.suppliersShow = this.vhAlgorithm.sortNumberbyDESC([...this.suppliersShow], value);
        }
    }
    sortName(sort, value) {
        if (sort) {
            this.suppliersShow = this.vhAlgorithm.sortVietnamesebyASC([...this.suppliersShow], value);
        }
        else {
            this.suppliersShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.suppliersShow], value);
        }
    }
    choosedSupplier(value) {
        this.selectedValue = value;
    }
    filterSupplier(optionType) {
        this.suppliersShow = [];
        this.supplierSub = [];
        this.totalInfo = {};
        this.suppliersShow = [];
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQueryCafe.getDebtSuppliers(new Date(this.date[0].setHours(0, 0, 0)), new Date(this.date[1].setHours(23, 59, 59, 59)), optionType, this.id_branch_report)
                .then(res => {
                this.totalInfo = { debt: res['debt'], rest: res['rest'], payment: res['payment'] };
                for (let i = 0; i < res.docs.length; i++) {
                    this.suppliersShow.push(res.docs[i]);
                }
                this.supplierSub = this.suppliersShow;
                this.searchSupplier(this.keySearch);
            }).finally(() => this.vhComponent.hideLoading(0));
        });
    }
    searchSupplier(value) {
        if (value && value.length) {
            let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
            this.suppliersShow = this.vhAlgorithm.searchList(val, this.supplierSub, ['name']);
        }
        else
            this.suppliersShow = [...this.supplierSub];
    }
    changeTime(event) {
        if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {
        }
        else {
            this.vhComponent.showToast(4000, this.languageService.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.languageService.translate("days"), "alert-toast");
            this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
        }
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/cashflow']);
    }
    /**--------------------- */
    gotoDetailSupplier(data) {
        let stateObj = { keySearch: this.keySearch, startTime: this.date[0], endTime: this.date[1], selectedValue: this.selectedValue, id_branch_report: this.id_branch_report, suppliersShow: this.suppliersShow, totalInfo: this.totalInfo };
        this.router.navigate(['/cafe/dashboard/management/cashflow/supplier-liability/detail-supplier-liability'], {
            state: { data: data, stateObj: stateObj }
        });
    }
    exportCSV() {
        this.status = true;
        let data = new Array();
        let name = `${this.languageService.translate('_supplier_liabilities_report')}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQueryCafe.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
        let total = new Object();
        total[this.languageService.translate('No.')] = "";
        total[this.languageService.translate('Supplier name')] = this.languageService.translate("Total");
        ;
        total[this.languageService.translate('Amount debt')] = this.vhAlgorithm.vhcurrencyunit_symbol(this.totalInfo.debt);
        total[this.languageService.translate('Amount paid')] = this.vhAlgorithm.vhcurrencyunit_symbol(this.totalInfo.payment);
        total[this.languageService.translate('Amount rest')] = this.vhAlgorithm.vhcurrencyunit_symbol(this.totalInfo.rest);
        data.push(total);
        for (let i in this.suppliersShow) {
            let item = new Object();
            item[this.languageService.translate('No.')] = parseInt(i) + 1;
            item[this.languageService.translate('Supplier name')] = this.suppliersShow[i].name;
            item[this.languageService.translate('Amount debt')] = this.vhAlgorithm.vhcurrencyunit(this.suppliersShow[i].debt);
            item[this.languageService.translate('Amount paid')] = this.vhAlgorithm.vhcurrencyunit(this.suppliersShow[i].payment);
            item[this.languageService.translate('Amount rest')] = this.vhAlgorithm.vhcurrencyunit(this.suppliersShow[i].rest);
            data.push(item);
        }
        this.vhAlgorithm.exportXLSX(data, name).then(() => this.status = false).catch(err => this.status = false);
    }
}
SupplierLiabilityComponent.ɵfac = function SupplierLiabilityComponent_Factory(t) { return new (t || SupplierLiabilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
SupplierLiabilityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SupplierLiabilityComponent, selectors: [["app-supplier-liability"]], decls: 62, vars: 52, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "product-list", 1, "height-layout"], ["nz-row", "", 1, "product-list-header"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", 1, "title", "center-all-content", 3, "nzSpan"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "5", 1, "date-picker-cus", "title", "center-all-content"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", 1, "center-all-content", 3, "nzSpan"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "ngModel", "nzOnSearch", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content"], ["class", "btn-add center-all-content", "nz-button", "", "nzType", "default", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "disabled", "click"], ["src", "assets/icon/management/view.svg"], [2, "padding-top", "20px"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData"], ["supplier", ""], ["nzAlign", "center", "nzWidth", "8%", 1, "medium-size"], ["nzAlign", "left", "nzWidth", "23%", 1, "medium-size", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzAlign", "right", "nzWidth", "23%", 1, "medium-size", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "nzLabel", "nzValue"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "nzPlaceHolder", "ngModel", "nzOnSearch", "ngModelChange"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "disabled", "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], [1, "color-green", "medium-size"], ["nzAlign", "right", 1, "color-green", "medium-size"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "center", 1, "medium-size"], ["nzAlign", "left", 1, "medium-size"], ["nzAlign", "right", 1, "medium-size"]], template: function SupplierLiabilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SupplierLiabilityComponent_Template_input_ngModelChange_12_listener($event) { return ctx.keySearch = $event; })("ngModelChange", function SupplierLiabilityComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchSupplier($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SupplierLiabilityComponent_ng_template_14_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-range-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SupplierLiabilityComponent_Template_nz_range_picker_ngModelChange_17_listener($event) { return ctx.date = $event; })("ngModelChange", function SupplierLiabilityComponent_Template_nz_range_picker_ngModelChange_17_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnSearch", function SupplierLiabilityComponent_Template_nz_select_nzOnSearch_19_listener($event) { return ctx.searchSelectSupplier($event); })("ngModelChange", function SupplierLiabilityComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.selectedValue = $event; })("ngModelChange", function SupplierLiabilityComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.choosedSupplier($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SupplierLiabilityComponent_nz_option_20_Template, 1, 2, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SupplierLiabilityComponent_div_21_Template, 4, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, SupplierLiabilityComponent_button_24_Template, 4, 4, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_Template_button_click_26_listener() { return ctx.showReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "nz-table", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_Template_th_click_39_listener() { ctx.statusName = !ctx.statusName; return ctx.sortName(ctx.statusName, "name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_Template_th_click_44_listener() { ctx.statusDebt = !ctx.statusDebt; return ctx.sort(ctx.statusDebt, "debt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_Template_th_click_49_listener() { ctx.statusPaid = !ctx.statusPaid; return ctx.sort(ctx.statusPaid, "payment"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupplierLiabilityComponent_Template_th_click_54_listener() { ctx.statusRest = !ctx.statusRest; return ctx.sort(ctx.statusRest, "rest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, SupplierLiabilityComponent_tr_60_Template, 11, 6, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, SupplierLiabilityComponent_tr_61_Template, 11, 5, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 31, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 33, "Supplier liabilities"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 4 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 35, "Search for supplier name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.keySearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 4 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list_select_supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.id_branch_report.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 37, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](49, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c1, ctx.heightScroll))("nzData", ctx.suppliersShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 39, "No."));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 41, "Supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.statusName == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 43, "Amount debt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.statusDebt == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 45, "Amount paid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.statusPaid == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 47, "Amount rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.statusRest == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.suppliersShow.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r5.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__.NzRangePickerComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  padding-left: 2px;\n}\nnz-layout[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 45%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  margin-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .color-green[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nth.ant-table-cell[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n  border-color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  padding: 3px 11px !important;\n}\n[_ngcontent-%COMP%]::ant-select-dropdown {\n  min-width: 260px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBsaWVyLWxpYWJpbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNJLGlCQUFBO0FBRU47QUFFQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRFE7RUFDSSwwQ0FBQTtBQUdaO0FBQVE7RUFDSSxVQUFBO0FBRVo7QUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ0k7RUFDSSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRVo7QUFDSTtFQUNJLGdDQUFBO0FBQ1I7QUFJRTtFQUNFLGlCQUFBO0FBREo7QUFNQTs7RUFFSSxnQ0FBQTtFQUNBLHVDQUFBO0FBSEo7QUFNQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1BO0VBQ0ksNEJBQUE7QUFISjtBQU1BO0VBQ0ksMkJBQUE7QUFISiIsImZpbGUiOiJzdXBwbGllci1saWFiaWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgICAuZGF0ZS1waWNrZXItY3VzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgbnotZGF0ZS1waWNrZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXZpZXcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb2xvci1ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRoLmFudC10YWJsZS1jZWxse1xyXG4gIGJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uYW50LWJ0bjpmb2N1cyxcclxuLmFudC1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuXHJcbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogM3B4IDExcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjphbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgIG1pbi13aWR0aDogMjYwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 32015:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/cashflow/supplier-liability/supplier-liability.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierLiabilityModule": () => (/* binding */ SupplierLiabilityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _supplier_liability_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-liability.component */ 73281);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _supplier_liability_component__WEBPACK_IMPORTED_MODULE_0__.SupplierLiabilityComponent
    },
    {
        path: 'detail-supplier-liability',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_menu_management_cashflow_supplier-liability_detail-supplier-liability_de-130223")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detail-supplier-liability/detail-supplier-liability.module */ 61417)).then(m => m.DetailSupplierLiabilityModule)
    }
];
class SupplierLiabilityModule {
}
SupplierLiabilityModule.ɵfac = function SupplierLiabilityModule_Factory(t) { return new (t || SupplierLiabilityModule)(); };
SupplierLiabilityModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SupplierLiabilityModule });
SupplierLiabilityModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SupplierLiabilityModule, { declarations: [_supplier_liability_component__WEBPACK_IMPORTED_MODULE_0__.SupplierLiabilityComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_cashflow_supplier-liability_supplier-liability_module_ts.js.map