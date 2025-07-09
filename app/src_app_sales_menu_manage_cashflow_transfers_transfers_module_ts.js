"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_cashflow_transfers_transfers_module_ts"],{

/***/ 19792:
/*!***************************************************************************!*\
  !*** ./src/app/sales/menu/manage/cashflow/transfers/add/add.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-a4/transfer-money-a4.component */ 1312);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_a5_transfer_money_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-a5/transfer-money-a5.component */ 93353);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_k80_col4_transfer_money_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-k80-col4/transfer-money-k80-col4.component */ 34425);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_k80_col3_transfer_money_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-k80-col3/transfer-money-k80-col3.component */ 38138);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_k57_col3_transfer_money_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-k57-col3/transfer-money-k57-col3.component */ 99239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 92131);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


























function AddComponent_ng_template_50_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Please enter amount of money"), " ");
} }
function AddComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddComponent_ng_template_50_ng_container_0_Template, 3, 3, "ng-container", 21);
} if (rf & 2) {
    const control_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r3.hasError("required"));
} }
function AddComponent_nz_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, item_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", item_r5._id);
} }
const _c0 = function (a0) { return { opacity: a0 }; };
class AddComponent {
    constructor(router, vhAlgorithm, vhQuerySales, vhAuth, vhComponent, vhQuery, lang, fncService) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.lang = lang;
        this.fncService = fncService;
        this.checkPrinter = false;
        this.branchList = [];
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.listPaymentBank = [];
        this.billInfo = { employee: this.vhAuth.getUser() };
        this.getPaymentBankList();
        let options = [{ value: '1', label: this.lang.translate('Cash'), isLeaf: true }, { value: '3', label: this.lang.translate('Account'), children: this.listPaymentBank }];
        this.nzOptions = options;
        this.branchList = this.vhQuerySales.getlocalBranchs().filter(item => item._id != this.vhQuerySales.getDefaultBranch()._id);
    }
    ngOnInit() {
        this.initForm();
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_delivery_receive_money');
        if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)])
            this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
    }
    ngAfterViewInit() {
        // tạo cleavejs cho input price
        this.vhAlgorithm.waitingStack().then(() => {
            this.money_currency = this.vhAlgorithm.vhnumeral(".price");
        });
    }
    /**
     * khởi tạo các trường mặc định trong addTransfersForm
     * @example this.initForm()
     */
    initForm() {
        this.addTransfersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new Date().toISOString()),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(""),
            payment_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('1'),
            id_branch_receive: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
        });
    }
    /**
     * check validate hợp lệ
     * @param $event date
     */
    changeDate(event) {
        this.vhQuerySales.getValidityDate(event)
            .then((validitydate) => {
            if (validitydate) {
                this.vhComponent.alertMessageDesktop("warning", `${this.lang.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 8000);
                this.addTransfersForm.controls['date'].setValue(new Date());
            }
        });
    }
    /**Get payment bank list */
    getPaymentBankList() {
        let listPayment = this.vhQuerySales.getlocalWallets().filter(item => item._id != 'id_cash' && item.id_branch == this.vhQuerySales.getDefaultBranch()._id);
        this.listPaymentBank = listPayment.map(item => {
            return { value: item._id, label: item.name, isLeaf: true };
        });
    }
    /**
     * tạo phiếu chuyển tiền
     * @param print : biến cờ check in hay ko
     * @example this.onSubmit(true)
     */
    onSubmit(print) {
        this.vhComponent.alertConfirm(this.lang.translate("Confirm"), "", `${this.lang.translate("Create transfers note")} ?`, "Ok", this.lang.translate("Cancel")).then(() => {
            Promise.all([
                this.vhQuerySales.createBillCode(new Date(this.addTransfersForm['value']["date"]), 32),
                this.vhComponent.showLoading("")
            ])
                .then(([bill_code, loading]) => {
                let bill = this.exportBill(this.addTransfersForm.value, bill_code);
                Promise.all([this.vhQuerySales.createBill(Object.assign(Object.assign({}, bill), { bill_type: 32 }))]).then((res) => {
                    this.vhComponent.showToast(1500, this.lang.translate("Transfers note has been created successfully"), "success-toast");
                    this.vhComponent.hideLoading(0).then(() => {
                        if (print) {
                            this.showPrint(Object.assign(Object.assign({}, res[0]), { employee: res[0].id_employee }));
                        }
                        else
                            setTimeout(() => this.goBack(), 200);
                    });
                });
            });
        }).catch(() => { });
    }
    /**trở về trang chuyển tiền
     * @example this.goBack()
     */
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/cashflow/transfers'], {
            state: this.dataRestore
        });
    }
    /** kiểm tra dữ liệu máy in và show component in tương ứng
    * @example this.showPrint()
    */
    showPrint(result) {
        this.checkPrint().then((printer) => {
            if (printer) {
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { billInfo: result, printer: printer }, false, false, `modal-print-${printer['_id']}`)
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { this.goBack(); });
                });
            }
        }, err => { this.goBack(); });
    }
    /**
      * trả về component của trang in tương ứng
      * @example this.renderPrintPage('print_size_a4')
      * @returns component
      */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_transfer_money_transfer_money_k57_col3_transfer_money_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.TransferMoneyK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_transfer_money_transfer_money_k80_col3_transfer_money_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.TransferMoneyK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_transfer_money_transfer_money_k80_col4_transfer_money_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.TransferMoneyK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_transfer_money_transfer_money_a5_transfer_money_a5_component__WEBPACK_IMPORTED_MODULE_1__.TransferMoneyA5Component;
            case 'print_size_a4': return src_app_sales_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_0__.TransferMoneyA4Component;
            default: return src_app_sales_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_0__.TransferMoneyA4Component;
        }
    }
    /*----------Print------------------*/
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_delivery_receive_money');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    /**Thay đổi phương thức thanh toán */
    /**Khởi tạo các trường chuẩn của bill để lưu DB
     * @example  const bill = this.exportBill(bill, '070623F001')
     * @returns bill
    */
    exportBill(form, bill_code) {
        const bill = {
            bill_code: bill_code,
            date: new Date(form["date"]),
            total: parseFloat(this.money_currency.getRawValue()),
            payment: parseFloat(this.money_currency.getRawValue()),
            content: form["content"],
            id_branch: this.vhQuerySales.getDefaultBranch()._id,
            id_branch_receive: form['id_branch_receive'],
            payment_type: +form['payment_type'][0],
            id_wallet: +form['payment_type'][0] == 1 ? 'id_cash' : form['payment_type'][1],
            id_employee: this.vhAuth.getUser()._id
        };
        return bill;
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService)); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 70, vars: 52, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content", "margin"], ["nz-button", "", "nzType", "default", 1, "btn-data", "center-all-content", 3, "disabled", "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "disabled", "ngStyle", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], [2, "padding-top", "20px"], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "12"], [1, "medium-size"], ["formControlName", "date", "nzFormat", "dd/MM/yyyy", 3, "nzPlaceHolder", "ngModelChange"], ["formControlName", "payment_type", 3, "nzOptions", "nzAllowClear", "nzPlaceHolder"], [3, "nzErrorTip"], ["maxlength", "15", "type", "price", "nz-input", "", "formControlName", "total", 1, "price", 3, "placeholder"], ["combineTplAmount", ""], ["formControlName", "id_branch_receive", 3, "nzPlaceHolder"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "content", "nz-input", "", 3, "placeholder"], [4, "ngIf"], [3, "nzLabel", "nzValue"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddComponent_Template_button_click_12_listener() { return ctx.onSubmit(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddComponent_Template_button_click_17_listener() { return ctx.onSubmit(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "nz-date-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_30_listener($event) { return ctx.changeDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "nz-cascader", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "nz-form-control", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, AddComponent_ng_template_50_Template, 1, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, AddComponent_nz_option_59_Template, 2, 4, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 22, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 24, "Create transfers note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.addTransfersForm.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 26, "Create & Print"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.addTransfersForm.invalid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](50, _c0, ctx.addTransfersForm.invalid ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 28, "Create"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.addTransfersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 30, "Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 32, "Select date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 34, "Transfer method"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("nzPlaceHolder", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 36, "Please select transfer method"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("nzAllowClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 38, "Amount"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 40, "Enter amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](56, 42, "To branch"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 44, "Select branch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.branchList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](64, 46, "Particulars"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 48, "Enter particulars"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormItemComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_21__.NzCascaderComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_22__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .medium-size[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   .medium-size[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  width: 95%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%]:hover, nz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-black);\n  border-color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-picker[_ngcontent-%COMP%] {\n  width: 90%;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-cascader-picker[_ngcontent-%COMP%] {\n  width: 90% !important;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFHUjtBQURZO0VBQ0ksa0JBQUE7QUFHaEI7QUFDSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNJO0VBQ0ksK0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVRO0VBQ0ksYUFBQTtBQUFaO0FBR0k7O0VBRUksZ0NBQUE7RUFDQSx1Q0FBQTtBQURSO0FBR0k7RUFDSSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFHSTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBRFI7QUFHSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSxxQkFBQTtBQURSO0FBR0k7RUFDSSxVQUFBO0FBRFIiLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAubWVkaXVtLXNpemUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG56LWRhdGUtcGlja2VyIHtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgIC5tYXJnaW4ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1kYXRhOmhvdmVyLFxyXG4gICAgLmJ0bi1kYXRhOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbiAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFudC1waWNrZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmFudC1jYXNjYWRlci1waWNrZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 93481:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/cashflow/transfers/detail/detail.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-a4/transfer-money-a4.component */ 1312);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_a5_transfer_money_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-a5/transfer-money-a5.component */ 93353);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_k80_col4_transfer_money_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-k80-col4/transfer-money-k80-col4.component */ 34425);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_k80_col3_transfer_money_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-k80-col3/transfer-money-k80-col3.component */ 38138);
/* harmony import */ var src_app_sales_components_print_transfer_money_transfer_money_k57_col3_transfer_money_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/transfer-money/transfer-money-k57-col3/transfer-money-k57-col3.component */ 99239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 92131);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



























function DetailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r4.deleteBill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "Delete"), " ");
} }
function DetailComponent_ng_template_47_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Please enter amount of money"), " ");
} }
function DetailComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, DetailComponent_ng_template_47_ng_container_0_Template, 3, 3, "ng-container", 7);
} if (rf & 2) {
    const control_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r6.hasError("required"));
} }
function DetailComponent_nz_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, item_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzValue", item_r8._id);
} }
class DetailComponent {
    constructor(router, vhAlgorithm, vhQuerySales, vhComponent, lang, fncService) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.fncService = fncService;
        this.checkPrinter = false;
        this.branchList = this.vhQuerySales.getlocalBranchs().filter(item => item._id != this.vhQuerySales.getDefaultBranch()._id);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.billDetail = this.router.getCurrentNavigation().extras.state.billDetail;
        this.listPaymentBank = [];
        this.getPaymentBankList();
        let options = [{ value: 1, label: this.lang.translate('Cash'), isLeaf: true }, { value: 3, label: this.lang.translate('Account'), children: this.listPaymentBank }];
        this.nzOptions = options;
    }
    ngOnInit() {
        this.initForm();
        let printer = this.vhQuerySales.getlocalPrinters().find(item => item.desktop);
        if (printer) {
            if (printer.delivery_receive_money)
                this.checkPrinter = printer.delivery_receive_money.enable; //chưa có quyền máy in
        }
    }
    ngAfterViewInit() {
        // tạo cleavejs cho input price
        this.vhAlgorithm.waitingStack().then(() => {
            this.money_currency = this.vhAlgorithm.vhnumeral(".price");
        });
    }
    /**
      * lấy các giá trị của bill khởi tạo cho form
      * @example initForm()
      */
    initForm() {
        let isDisable = this.billDetail['bill_type'] == 32 ? false : true;
        this.editTransfersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: this.billDetail['date'], disabled: isDisable }),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: this.billDetail['total'], disabled: isDisable }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: this.billDetail['content'], disabled: isDisable }),
            payment_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: this.billDetail['payment_type'], disabled: isDisable }),
            type_payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
            id_branch_receive: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({ value: this.billDetail['id_branch_receive'], disabled: isDisable }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
        });
        if (this.billDetail['payment_type'] == 1)
            this.editTransfersForm.controls['type_payment'].setValue([1]);
        else
            this.editTransfersForm.controls['type_payment'].setValue([3, this.billDetail["id_wallet"]]);
    }
    /**
   * check validate hợp lệ
   * @param $event date
   */
    changeDate(event) {
        this.vhQuerySales.getValidityDate(event)
            .then((validitydate) => {
            if (validitydate) {
                this.vhComponent.alertMessageDesktop("warning", `${this.lang.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 8000);
                this.editTransfersForm.controls['date'].setValue(new Date());
            }
            else
                this.updateBill({ date: this.editTransfersForm.value.date });
        });
    }
    /**Get payment bank list */
    getPaymentBankList() {
        let listPayment = this.vhQuerySales.getlocalWallets().filter(item => item._id != 'id_cash' && item.id_branch == this.vhQuerySales.getDefaultBranch()._id);
        this.listPaymentBank = listPayment.map(item => {
            return { value: item._id, label: item.name, isLeaf: true };
        });
    }
    /**trở về trang chuyển tiền
    * @example this.goBack()
    */
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/cashflow/transfers'], { state: this.dataRestore });
    }
    /** kiểm tra dữ liệu máy in và show component in tương ứng
    * @example this.showPrint()
    */
    showPrint() {
        let billInfo = {
            date: this.editTransfersForm.value.date || this.billDetail['date'],
            total: this.editTransfersForm.value.total || this.billDetail['total'],
            content: this.editTransfersForm.value.content || this.billDetail['content'],
            payment_type: this.editTransfersForm.value.payment_type || this.billDetail['payment_type'],
            id_branch_receive: this.editTransfersForm.value.id_branch_receive || this.billDetail['id_branch_receive'],
            bill_code: this.billDetail['bill_code'],
            id_wallet: this.billDetail["id_wallet"],
            employee: this.billDetail["id_employee"],
            id_branch: this.billDetail['id_branch']
        };
        this.checkPrint().then((printer) => {
            if (printer) {
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { billInfo: billInfo, printer: printer }, false, false, `modal-print-${printer['_id']}`)
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
        }, (err) => {
            let name = 'Transfer, receive money';
            this.vhComponent.alertMessage(this.lang.translate("Function"), "", this.lang.translate("Please turn on the printer function"), "OK")
                .then(() => this.router.navigate(['/sales/dashboard/manage/printer', 'page_desktop_delivery_receive_money'], { state: name }));
        });
    }
    /*----------Print------------------*/
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_delivery_receive_money');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    /**
      * trả về component của trang in tương ứng
      * @example this.renderPrintPage('print_size_a4')
      * @returns component
      */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_transfer_money_transfer_money_k57_col3_transfer_money_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.TransferMoneyK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_transfer_money_transfer_money_k80_col3_transfer_money_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.TransferMoneyK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_transfer_money_transfer_money_k80_col4_transfer_money_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.TransferMoneyK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_transfer_money_transfer_money_a5_transfer_money_a5_component__WEBPACK_IMPORTED_MODULE_1__.TransferMoneyA5Component;
            case 'print_size_a4': return src_app_sales_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_0__.TransferMoneyA4Component;
            default: return src_app_sales_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_0__.TransferMoneyA4Component;
        }
    }
    /**
     *
     * @param : trường cần lưu
     * @example this.updateBill({total : 20000})
     */
    updateBill(value) {
        this.vhQuerySales.updateBill(this.billDetail['_id'], value).then((res) => { }).catch(err => console.error('update failed => ' + err));
    }
    /**
     * cập nhật lại total và payment của bill khi có thay đổi
     */
    updateAmount() {
        let amount = parseFloat(this.money_currency.getRawValue());
        if (amount)
            this.vhQuerySales.updateBill(this.billDetail['_id'], { total: amount, payment: amount }).then(() => { }).catch(err => console.error('update failed => ' + err));
    }
    /**
     * xóa bill khỏi DB
     * @example this.deleteBill()
     */
    deleteBill() {
        this.vhComponent.alertConfirm("", this.lang.translate("Confirm"), this.lang.translate("Delete"), "Ok", this.lang.translate("Cancel")).then(() => {
            this.vhComponent.showLoading("", "current-loading").then(() => {
                this.vhQuerySales.deleteBill(this.billDetail["_id"]).then(() => {
                    this.vhComponent.hideLoading(0).then(() => {
                        this.goBack();
                        this.vhComponent.showToast(2000, `${this.lang.translate("Transfers money")} ${this.billDetail['bill_code']} ${this.lang.translate("has been cancelled successfully")}`, "success-toast");
                    }).catch(err => { });
                });
            }).catch(() => { });
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 67, vars: 51, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content", "margin"], ["nz-button", "", "nzType", "default", 1, "btn-data", "center-all-content", 3, "click"], ["name", "print-outline"], [4, "ngIf"], [2, "padding-top", "20px"], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "12", 1, "item-form"], [1, "medium-size"], ["formControlName", "date", "nzFormat", "dd/MM/yyyy", 3, "nzPlaceHolder", "ngModelChange"], ["formControlName", "type_payment", 3, "nzDisabled", "nzPlaceHolder", "nzOptions", "nzAllowClear"], [3, "nzErrorTip"], ["maxlength", "15", "type", "price", "nz-input", "", "formControlName", "total", 1, "price", 3, "disabled", "placeholder", "blur"], ["combineTplAmount", ""], ["formControlName", "id_branch_receive", 3, "disabled", "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "content", "nz-input", "", 3, "placeholder", "blur"], ["name", "trash-outline"], [3, "nzLabel", "nzValue"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_12_listener() { return ctx.showPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, DetailComponent_div_16_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "nz-date-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_nz_date_picker_ngModelChange_26_listener($event) { return ctx.changeDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "nz-cascader", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "nz-form-control", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("blur", function DetailComponent_Template_input_blur_45_listener() { return ctx.updateAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, DetailComponent_ng_template_47_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_nz_select_ngModelChange_54_listener() { return ctx.updateBill({ id_branch_receive: ctx.editTransfersForm.value.id_branch_receive }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, DetailComponent_nz_option_56_Template, 2, 4, "nz-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("blur", function DetailComponent_Template_input_blur_65_listener() { return ctx.updateBill({ content: ctx.editTransfersForm.value.content }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 23, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 25, "Money transfer receipt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 27, "Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.billDetail["bill_type"] == 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.editTransfersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 29, "Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 31, "Select date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 33, "Payment method"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 35, "Payment method"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("nzPlaceHolder", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 37, "Payment method"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzDisabled", true)("nzOptions", ctx.nzOptions)("nzAllowClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 39, "Amount"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzErrorTip", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](46, 41, "Enter amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.billDetail["bill_type"] != 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](53, 43, "To branch"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](55, 45, "Select branch"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.billDetail["bill_type"] != 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.branchList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](61, 47, "Particulars"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 49, "Enter particulars"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__.NzFormItemComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_22__.NzCascaderComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .medium-size[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  width: 95%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .item-form[_ngcontent-%COMP%] {\n  margin: 6px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .item-form[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%]:hover, nz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-black);\n  border-color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-picker[_ngcontent-%COMP%] {\n  width: 90%;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-cascader-picker[_ngcontent-%COMP%] {\n  width: 90% !important;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUdSO0FBREk7RUFDSSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUdSO0FBRlE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBSVo7QUFBUTtFQUNJLGFBQUE7QUFFWjtBQUNJO0VBQ0ksYUFBQTtBQUNSO0FBQVE7RUFDSSxvQkFBQTtBQUVaO0FBQ0k7O0VBRUksZ0NBQUE7RUFDQSx1Q0FBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDSTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBQ1I7QUFDSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxxQkFBQTtBQUNSO0FBQ0k7RUFDSSxVQUFBO0FBQ1IiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLm1lZGl1bS1zaXplIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFyZ2luIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pdGVtLWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICAgICAgbnotZm9ybS1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1kYXRhOmhvdmVyLFxyXG4gICAgLmJ0bi1kYXRhOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbiAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFudC1waWNrZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmFudC1jYXNjYWRlci1waWNrZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 33640:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/cashflow/transfers/transfers.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersComponent": () => (/* binding */ TransfersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function TransfersComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 18);
} }
function TransfersComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "No data"));
} }
function TransfersComponent_div_30_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_tr_41_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const invoice_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.goToDetail(invoice_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 7, invoice_r6.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r6.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r6.branch_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r6.branch_name_reception);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r6.payment_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](invoice_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.vhAlgorithm.vhcurrencyunit(invoice_r6.total));
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a1) { return { x: "1300px", y: a1 }; };
function TransfersComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_Template_th_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r10.dateCol = !ctx_r10.dateCol; return ctx_r10.sortTable("date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_Template_th_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r12.bill_codeCol = !ctx_r12.bill_codeCol; return ctx_r12.sortTable("bill_code"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_Template_th_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r13.branch_nameCol = !ctx_r13.branch_nameCol; return ctx_r13.sortTable("branch_name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_Template_th_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r14.branch_name_receptionCol = !ctx_r14.branch_name_receptionCol; return ctx_r14.sortTable("branch_name_reception"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_Template_th_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r15.payment_nameCol = !ctx_r15.payment_nameCol; return ctx_r15.sortTable("payment_name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_Template_th_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r16.statusCol = !ctx_r16.statusCol; return ctx_r16.sortTable("status"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_div_30_Template_th_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r17.totalCol = !ctx_r17.totalCol; return ctx_r17.sortTable("total"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, TransfersComponent_div_30_tr_41_Template, 17, 10, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](33, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c1, ctx_r3.tableHeight))("nzData", ctx_r3.listTransferShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 19, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r3.dateCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 21, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r3.bill_codeCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 23, "Delivery branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r3.branch_nameCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 25, "Receive branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r3.branch_name_receptionCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 27, "Payment method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r3.payment_nameCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 29, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r3.statusCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 31, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r3.totalCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r4.data);
} }
class TransfersComponent {
    constructor(vhQuery, router, vhQuerySales, vhAlgorithm, vhComponent, lang, vhAuth, cdRef, fncService) {
        this.vhQuery = vhQuery;
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.vhAuth = vhAuth;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.date = [new Date(), new Date()];
        this.searchValue = '';
        this.listTransferShow = [];
        this.listTransfer = [];
        this.branchList = [];
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.loadingStatus = false;
        /** hàm sort cho các cột */
        this.dateCol = false;
        this.bill_codeCol = false;
        this.branch_nameCol = false;
        this.branch_name_receptionCol = false;
        this.payment_nameCol = false;
        this.statusCol = false;
        this.totalCol = false;
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
    }
    ngOnInit() {
        if (this.dataRestore) {
            this.searchValue = this.dataRestore.searchValue;
            this.date = [new Date(this.dataRestore.startTime), new Date(this.dataRestore.endTime)];
            this.listTransfer = this.dataRestore.listTransfer;
            this.searchBill(this.searchValue);
        }
    }
    /**
     * get danh sách hóa đơn chuyển tiền
     * @example this.getTransferList()
     */
    getTransferList() {
        this.vhComponent.showLoading("", "transparent-loading", null, 0, false).then(() => {
            Promise.all([
                this.vhQuerySales.getBills_byFields({ date: { $gte: new Date(this.date[0].setHours(0, 0, 0)), $lte: new Date(this.date[1].setHours(23, 59, 59, 59)) }, bill_type: { $in: [32, 33] }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } })
            ]).then((res) => {
                this.vhComponent.hideLoading(0).then(() => {
                    this.branchList = this.vhQuerySales.getlocalBranchs();
                    this.listTransfer = res[0].map(item => {
                        let element = Object.assign(Object.assign({}, item), { branch_name: this.checkBranchName(item.id_branch), branch_name_reception: this.checkBranchName(item.id_branch_receive), status: this.checkBillType(item.bill_type), payment_name: this.checkPayment(item.payment_type, item.payment_type == 3 ? item.id_wallet : null) });
                        return element;
                    }).reverse();
                    this.listTransferShow = this.listTransfer;
                    this.searchBill(this.searchValue);
                    this.loadingStatus = true;
                });
            }).catch(err => { this.vhComponent.hideLoading(0), console.error(err); });
        });
    }
    /**
     * trả về tên chi nhánh theo id truyền vào
     * @param id id_branch
     * @returns string : branch_name
     * @example let branch_name = this.checkBranchName('IHIFUHOUIWHDIOWYUGIU')
     */
    checkBranchName(id) {
        return this.vhQuerySales.getlocalBranch(id).name;
    }
    /**
    * trả vê tên phương thức thanh toán
    * @param payment_type
    * @param id_wallet
    * @example payment_name =  this.checkPayment(1)
    * @returns string
    */
    checkPayment(payment_type, id_wallet) {
        switch (payment_type) {
            case 1: return this.lang.translate("Cash");
            case 3: return `${this.vhQuerySales.getlocalWallet(id_wallet)['name']}`;
        }
    }
    /**
    * trả về tên loại hóa đơn theo bill-type của bill
    * @param bill_type
    * @example let bill_name = this.checkBillType(32)
    */
    checkBillType(bill_type) {
        //kiểm tra loại hóa đơn
        switch (bill_type) {
            case 32: {
                return (this.lang.translate("Transferring money"));
            }
            case 33: {
                return (this.lang.translate("Transferred money"));
            }
        }
    }
    /**
     * router qua trang chuyển tiền
     * @example this.addTransfers()
     */
    addTransfers() {
        let dataRestore = { searchValue: this.searchValue, startTime: this.date[0], endTime: this.date[1], listTransfer: this.listTransfer };
        this.router.navigate(['/sales/dashboard/manage/cashflow/transfers/add'], { state: { dataRestore, branchList: this.branchList } });
    }
    /**
     * lọc listTransferShow theo bill-code
     * @param value : giá trị của input search
     * @example this.searchBill('080623A001')
     */
    searchBill(value) {
        if (value.length) {
            let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
            this.listTransferShow = this.vhAlgorithm.searchList(val, this.listTransfer, ['bill_code']);
        }
        else
            this.listTransferShow = [...this.listTransfer];
    }
    ngAfterViewChecked() {
        // tính chiều cao của table để scroll
        if (document.querySelector("#transfers-invoice") && document.querySelector(".ant-table-thead") && document.querySelector(".transfers-invoice-header")) {
            this.tableHeight = document.querySelector("#transfers-invoice").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".transfers-invoice-header").clientHeight - 60 + "px";
            if (document.querySelector(".ant-table-pagination")) {
                this.tableHeight = document.querySelector("#transfers-invoice").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                    - document.querySelector(".transfers-invoice-header").clientHeight - document.querySelector(".ant-table-pagination").clientHeight - 60 + "px";
            }
        }
        this.cdRef.detectChanges();
    }
    /**
     * router về trang dòng tiền
     * @example this.goBack()
     */
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/cashflow"]);
    }
    /**
   * bắt sk khi thay đổi ngày xem báo cáo , kiểm tra hợp lệ và gán vào trường startTime,endTime của cashbook
   * @example this.changeTime(['2023-06-07T01:33:38.033Z','2023-06-07T01:33:38.033Z'])
   */
    changeTime(event) {
        if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {
            //this.getTransferList();
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.lang.translate("days"));
            this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
        }
    }
    /**
     * router qua trang chi tiết hóa đơn chuyển tiền
     * @param invoice : bill được chọn
     * @example this.goToDetail(invoice)
     */
    goToDetail(invoice) {
        let dataRestore = { searchValue: this.searchValue, startTime: this.date[0], endTime: this.date[1], listTransfer: this.listTransfer };
        this.router.navigate(['/sales/dashboard/manage/cashflow/transfers/detail'], { state: { dataRestore, branchList: this.branchList, billDetail: invoice } });
    }
    /** Hàm thực hiện sắp xếp theo tên trường cần sort
   *
   * @param colName       // tên cột muôn sắp xếp
   * @example this.sortTable('name')
   */
    sortTable(colName) {
        switch (colName) {
            case 'date':
                if (this.dateCol) {
                    this.listTransferShow = this.vhAlgorithm.sortDatebyASC([...this.listTransferShow], colName);
                }
                else {
                    this.listTransferShow = this.vhAlgorithm.sortDatebyDESC([...this.listTransferShow], colName);
                }
                break;
            case 'bill_code':
                if (this.bill_codeCol) {
                    this.listTransferShow = this.vhAlgorithm.sortStringbyASC([...this.listTransferShow], colName);
                }
                else {
                    this.listTransferShow = this.vhAlgorithm.sortStringbyDESC([...this.listTransferShow], colName);
                }
                break;
            case 'branch_name':
                if (this.branch_nameCol) {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyASC([...this.listTransferShow], colName);
                }
                else {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.listTransferShow], colName);
                }
                break;
            case 'branch_name_reception':
                if (this.branch_name_receptionCol) {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyASC([...this.listTransferShow], colName);
                }
                else {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.listTransferShow], colName);
                }
                break;
            case 'payment_name':
                if (this.payment_nameCol) {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyASC([...this.listTransferShow], colName);
                }
                else {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.listTransferShow], colName);
                }
                break;
            case 'status':
                if (this.statusCol) {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyASC([...this.listTransferShow], colName);
                }
                else {
                    this.listTransferShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.listTransferShow], colName);
                }
                break;
            case 'total':
                if (this.totalCol) {
                    this.listTransferShow = this.vhAlgorithm.sortNumberbyASC([...this.listTransferShow], colName);
                }
                else {
                    this.listTransferShow = this.vhAlgorithm.sortNumberbyDESC([...this.listTransferShow], colName);
                }
                break;
        }
    }
}
TransfersComponent.ɵfac = function TransfersComponent_Factory(t) { return new (t || TransfersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
TransfersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TransfersComponent, selectors: [["app-transfers"]], decls: 31, vars: 20, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "transfers-invoice"], ["nz-row", "", 1, "transfers-invoice-header"], ["nz-col", "", "nzSpan", "4", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "7", 1, "title", "left-all-content"], [2, "margin-right", "8px", "width", "100%", 3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "7", 1, "date-picker-cus", "right-all-content"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-green", "center-all-content", "ml-3", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-button", "", "nzType", "default", 1, "btn-green", "right-all-content", 3, "click"], ["name", "add-outline"], ["nz-row", "", "style", "height: 100%;", 4, "ngIf"], ["style", "margin-top: 16px;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", 2, "height", "100%"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [2, "margin-top", "16px"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData"], ["detailData", ""], ["nzLeft", "", "nzWidth", "150px", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "200px", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "150px", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "150px", "nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["nzLeft", "", "nzAlign", "left"], ["nzAlign", "left"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)"]], template: function TransfersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TransfersComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function TransfersComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchBill($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TransfersComponent_ng_template_14_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-range-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TransfersComponent_Template_nz_range_picker_ngModelChange_17_listener($event) { return ctx.date = $event; })("ngModelChange", function TransfersComponent_Template_nz_range_picker_ngModelChange_17_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_Template_button_click_20_listener() { return ctx.getTransferList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransfersComponent_Template_button_click_25_listener() { return ctx.addTransfers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, TransfersComponent_div_29_Template, 5, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, TransfersComponent_div_30_Template, 42, 36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 10, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 12, "Transfers money"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 14, "Search for receipt code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 16, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 18, "Create transfers note"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.listTransferShow.length && ctx.loadingStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.listTransferShow.length);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 45%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUVBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksMENBQUE7QUFHWjtBQUFRO0VBQ0ksVUFBQTtBQUVaO0FBRVE7O0VBRUksa0JBQUE7QUFBWjtBQUdJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQURSO0FBS0E7O0VBRUksZ0NBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6InRyYW5zZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5kYXRlLXBpY2tlci1jdXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgbnotZGF0ZS1waWNrZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG56LXRhYmxlIHtcclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW50LWJ0bjpmb2N1cyxcclxuLmFudC1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuXHJcbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 8547:
/*!**************************************************************************!*\
  !*** ./src/app/sales/menu/manage/cashflow/transfers/transfers.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersModule": () => (/* binding */ TransfersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _transfers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers.component */ 33640);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 93481);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ 19792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: "",
        component: _transfers_component__WEBPACK_IMPORTED_MODULE_0__.TransfersComponent
    },
    {
        path: "add",
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__.AddComponent
    },
    {
        path: "detail",
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent
    }
];
class TransfersModule {
}
TransfersModule.ɵfac = function TransfersModule_Factory(t) { return new (t || TransfersModule)(); };
TransfersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TransfersModule });
TransfersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TransfersModule, { declarations: [_transfers_component__WEBPACK_IMPORTED_MODULE_0__.TransfersComponent, _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent, _add_add_component__WEBPACK_IMPORTED_MODULE_3__.AddComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_cashflow_transfers_transfers_module_ts.js.map