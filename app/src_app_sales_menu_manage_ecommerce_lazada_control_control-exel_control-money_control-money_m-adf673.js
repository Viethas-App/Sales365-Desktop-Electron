"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_lazada_control_control-exel_control-money_control-money_m-adf673"],{

/***/ 82347:
/*!******************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/control/control-exel/control-money/control-money.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlMoneyComponent": () => (/* binding */ ControlMoneyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function ControlMoneyComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlMoneyComponent_ng_template_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18); return ctx_r7.search(_r0.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ControlMoneyComponent_ng_container_72_tr_1_label_15_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControlMoneyComponent_ng_container_72_tr_1_label_15_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const form_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; return (form_r9["verify_status_payment"] = $event); })("ngModelChange", function ControlMoneyComponent_ng_container_72_tr_1_label_15_Template_label_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const form_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](74); return ctx_r16.updateRefund(form_r9, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", form_r9["verify_status_payment"])("nzTooltipPlacement", "left")("nzTooltipColor", "var(--ion-color-vh-green)")("nzTooltipTitle", form_r9["verify_status_payment"] ? form_r9.name_control_cashflow : "");
} }
function ControlMoneyComponent_ng_container_72_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlMoneyComponent_ng_container_72_tr_1_Template_i_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const form_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r19.vhComponent.copyValue(form_r9.bill_code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ControlMoneyComponent_ng_container_72_tr_1_label_15_Template, 1, 4, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r10 = ctx_r22.index;
    const form_r9 = ctx_r22.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 6, form_r9["date"], "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", form_r9["bill_code"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", form_r9["type"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.vhAlgorithm.vhcurrencyunit(form_r9["amount"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", form_r9["bill_code"] && form_r9["type"] === "Orders-Sales");
} }
function ControlMoneyComponent_ng_container_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ControlMoneyComponent_ng_container_72_tr_1_Template, 16, 9, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const form_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", form_r9.bill_code);
} }
function ControlMoneyComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-date-picker", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ControlMoneyComponent_ng_template_73_Template_nz_date_picker_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.bill_selected.verify_date_payment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "Date"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.bill_selected.verify_date_payment);
} }
const _c0 = function (a0) { return { y: a0 }; };
const _c1 = function () { return [20, 30, 40, 50, 100, 200]; };
class ControlMoneyComponent {
    constructor(vhQuerySales, vhAlgorithm, vhComponent, router, languageService, nzModalService, cdRef, vhQuery, vhAuth, modal, datePipe) {
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.router = router;
        this.languageService = languageService;
        this.nzModalService = nzModalService;
        this.cdRef = cdRef;
        this.vhQuery = vhQuery;
        this.vhAuth = vhAuth;
        this.modal = modal;
        this.datePipe = datePipe;
        this.nameFile = "";
        this.listData = [];
        this.listSearchData = [];
        this.listOrderCode = [];
        this.bill_selected = {};
        this.totalRevenue = 0;
        this.isUpdateManual = false;
        this.infoShop = {};
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
    }
    ngOnInit() {
        this.listOrderCode = [];
        this.infoShop = this.vhQuerySales.getlocalShopListLazada()[0];
    }
    ngAfterViewChecked() {
        if (document.querySelector("#control-automation") && document.querySelector(".ant-table-thead") && document.querySelector("#control-automation-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#control-automation").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector("#control-automation-header").clientHeight - 90 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * tìm bill theo mã đơn
     * @param value : bill-code
     * @example this.search('060623A001')
     */
    search(value) {
        if (!this.listData.length && value.length) {
            if (!this.infoShop._id)
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Please select a shop"));
            else {
                this.isUpdateManual = true;
                this.totalRevenue = 0;
                // this.vhQuerySales.Lazada
                this.vhComponent.showLoading('').then(() => {
                    Promise.all([this.vhQuerySales.getSalesOrderLazada_fromViethas([value], this.infoShop._id),
                        this.vhQuerySales.getSalesOrderDetailLazada(value, this.infoShop.access_token, this.infoShop._id)
                    ])
                        .then((array) => {
                        this.vhComponent.hideLoading(0);
                        if (!array[1])
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Not found"));
                        else {
                            this.listData = [Object.assign(Object.assign(Object.assign({}, array[1]), array[0][0]), { bill_code: value, amount: this.calculateTotal(array[1]), type: 'Orders-Sales', name_control_cashflow: array[0][0].verify_status_payment ? `${this.vhAuth.getlocalEmployee(array[0][0].id_verifier_payment).name} ${this.languageService.translate("has checked")} ${this.format_date(array[0][0].verify_date_payment)}` : '' })];
                            this.totalRevenue = this.calculateTotal(array[1]);
                        }
                    }, error => {
                        this.vhComponent.hideLoading(0);
                    });
                });
            }
        }
        else {
            if (value.length)
                this.listData = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.listSearchData, ['bill_code']);
            else
                this.listData = this.listSearchData;
        }
    }
    calculateTotal(bill) {
        return +bill['price'] - bill['voucher'] + bill['shipping_fee'];
    }
    /**Chọn file */
    openFile() {
        document.getElementById("file_excel_product")['value'] = '';
        document.getElementById("file_excel_product").click();
    }
    /**Mở CSVFile */
    openXLSXFile(events) {
        this.isUpdateManual = false;
        this.totalRevenue = 0;
        if (events.target.files[0]) {
            // lưu tên file 
            this.nameFile = events.target.files[0]['name'].slice(0, events.target.files[0]['name'].lastIndexOf("."));
            this.vhAlgorithm.importXLSX(events.target.files[0]).then((data) => {
                if (data.length > 2000) { // nếu hơn 200 thì báo
                    this.vhComponent.alertMessage("", this.languageService.translate("Only 200 order can be imported at a time"), "", "OK").then(() => {
                        this.listData = [];
                    });
                }
                else {
                    this.listData = [];
                    let datas = [];
                    if (data.length) {
                        // nếu không có 1 trong 2 trường này thì file đó sai định dạng
                        if (!data[0]['Order No.'] || !data[0]['Amount']) {
                            this.vhComponent.alertMessageDesktop('error', this.languageService.translate("Fail file format"));
                            this.listData = [];
                        }
                        else // nếu có đủ 2 trường thì push vào mảng tạm để xữ lý
                            this.vhComponent.showLoading("").then(() => {
                                data.forEach((item, index) => {
                                    // xử lý bỏ dấu , ở trường amount nếu nó là chuỗi
                                    if (item['Transaction Type'] === 'Orders-Sales') {
                                        datas.push({
                                            amount: item['Amount'] ? item['Amount'].toString() : 0,
                                            bill_code: item['Order No.'], date: item['Transaction Date'],
                                            type: item['Transaction Type']
                                        });
                                    }
                                    else {
                                        datas.push({
                                            amount: item['Amount'] ? item['Amount'].toString() : 0,
                                            bill_code: item['Order No.'] + ' ', date: item['Transaction Date'],
                                            type: item['Transaction Type']
                                        });
                                    }
                                    if (index == data.length - 1) { // push tới dòng cuối thì xử lý lấy dữ liệu từ database
                                        // datas mảng inport từ file exel
                                        // listdata mảng show ra html
                                        // get OrderSale từ database viethas bằng list ordercode từ file excel   
                                        this.vhQuerySales.getSalesOrderLazada_fromViethas(this.getOrderId(datas), this.infoShop._id)
                                            .then((array) => {
                                            // 
                                            this.vhComponent.hideLoading(0);
                                            if (!array[0]) { // nếu get về bằng null thì set trạng thái = false nhưng vẫn show danh sách đã import
                                                datas.forEach(item => {
                                                    item.verify_status_payment = false;
                                                    if (item.bill_code)
                                                        this.totalRevenue += parseFloat(item.amount);
                                                });
                                            }
                                            else { // ngược lại gán ngày và kiểm tra đã đối soát hay chưa
                                                for (let i in array) {
                                                    if (array[i]) {
                                                        let arr = datas.filter(item => array[i]._id == item.bill_code);
                                                        for (let j in arr) {
                                                            arr[j].verify_status_payment = array[i].verify_status_payment ? array[i].verify_status_payment : false;
                                                            arr[j].name_control_cashflow = array[i].verify_status_payment ? `${this.vhAuth.getlocalEmployee(array[i].id_verifier_payment).name} ${this.languageService.translate("has checked")} ${this.format_date(array[i].verify_date_payment)}` : '';
                                                        }
                                                    }
                                                }
                                                // tính doanh thu
                                                datas.forEach(item => {
                                                    if (item.bill_code)
                                                        this.totalRevenue += parseFloat(item.amount);
                                                });
                                            }
                                            this.listData = datas; // show ra html
                                            this.listSearchData = this.listData;
                                            this.listOrderCode = this.getOrderIdUpdate(datas);
                                        }, error => {
                                            this.vhComponent.hideLoading(0);
                                        }).catch(err => this.vhComponent.hideLoading(0));
                                    }
                                });
                            });
                    }
                }
            }).catch(err => {
                this.vhComponent.hideLoading(0);
                this.listData = [];
                this.vhComponent.alertMessageDesktop('error', this.languageService.translate("Fail file format"));
            });
        }
    }
    /**
     * xử lý bill_code của bill lazada import từ excel để đối soát hàng loạt
     * @param arr - danh sách bill import từ excel
     * @example let listOrderCode = this.getOrderIdUpdate(['1234',...])
     */
    getOrderIdUpdate(arr) {
        var newArr = [];
        newArr = arr.filter(i => !i.verify_status_payment && i.type === 'Orders-Sales').map(item => { return item.bill_code; }).filter((item) => {
            return newArr.includes(item) ? '' : newArr.push(item);
        });
        return newArr;
    }
    /**
     * trả về danh sách mảng order_id để get hóa đơn
     * @param arr - danh sách bill import từ excel
     * @example this.getOrderId([])
     */
    getOrderId(arr) {
        var newArr = [];
        newArr = arr.filter(i => i.type === 'Orders-Sales').map(item => { return item.bill_code; }).filter((item) => {
            return newArr.includes(item) ? '' : newArr.push(item);
        });
        return newArr;
    }
    /**Render date theo định dạng ngày/tháng/năm */
    format_date(date) {
        return this.datePipe.transform(date, "dd/MM/yyyy HH:mm");
    }
    /**
     * sk click nút đối soát tự động
     * @example this.startAuto()
     */
    startAuto() {
        this.modal.confirm({
            nzTitle: '<i>' + this.languageService.translate('Confirm to control') + '</i>',
            nzOnOk: () => {
                this.vhComponent.showLoading('').then(() => {
                    let shop = this.vhQuerySales.getlocalShopListLazada().find(data => data._id == this.infoShop._id);
                    if (this.listOrderCode.length)
                        this.vhQuerySales.updateSalesOrderLazada_byFile(this.listOrderCode, {
                            verify_status_payment: true,
                            verify_date_payment: new Date().toISOString(),
                            id_verifier_payment: this.vhAuth.getUser()._id,
                        }, shop.access_token, shop._id)
                            .then((res) => {
                            // 
                            if (res.filter(item => !item).length == res.length)
                                this.vhComponent.alertMessageDesktop('warning', this.languageService.translate("Vui lòng xem lại shop đã chọn hoặc file excel!"));
                            // xữ lý hiện checkbox  
                            else {
                                for (let i in res) {
                                    if (!res[i])
                                        this.listData[this.listData.findIndex(item => item.bill_code == this.listOrderCode[i])].verify_status_payment = false;
                                    else {
                                        this.listData[this.listData.findIndex(item => item.bill_code == this.listOrderCode[i])].verify_status_payment = true;
                                        this.listData[this.listData.findIndex(item => item.bill_code == this.listOrderCode[i])].name_control_cashflow = `${this.vhAuth.getUser().name} ${this.languageService.translate("has checked")} ${this.format_date(new Date())}`;
                                    }
                                }
                            }
                            this.vhComponent.hideLoading(0);
                        }, error => {
                            this.vhComponent.hideLoading(0);
                        });
                    else
                        this.vhComponent.hideLoading(0);
                });
            }
        });
    }
    /**
    * hàm này để cập nhật đơn hàng lưu vào database của mình
    * @param bill
    * @param data
    */
    updateRefund(bill, updateForControl) {
        if (bill['verify_status_payment']) { // nếu update từ false trang true
            this.bill_selected = bill; // gán bill
            this.bill_selected['verify_date_payment'] = new Date().toISOString(); // gán ngày update là ngày hôm nay
            this.modal.confirm({
                nzTitle: this.languageService.translate("Check this order"),
                nzContent: updateForControl,
                nzOkText: 'OK',
                nzOnOk: () => {
                    return new Promise((resolve, reject) => {
                        let value = {}; // giá trị các trường sẽ update
                        value['verify_status_payment'] = true;
                        value['verify_date_payment'] = this.bill_selected['verify_date_payment'];
                        value['id_verifier_payment'] = this.vhAuth.getUser()._id;
                        // hàm update
                        this.vhQuerySales.updateSalesOrderLazada_byFile([bill.bill_code], value, this.infoShop.access_token, this.infoShop._id).then((bool) => {
                            // 
                            if (bool[0]) { // nếu update thành công thì gán tên nhân viên khi hover checkbox
                                bill['name_control_cashflow'] = `${this.vhAuth.getlocalEmployee(value['id_verifier_payment']).name} ${this.languageService.translate("has checked")} ${this.format_date(value['verify_date_payment'])}`;
                                resolve(true); // ẩn  modal
                            }
                            else {
                                this.vhComponent.alertMessageDesktop('warning', this.languageService.translate("Vui lòng xem lại shop đã chọn hoặc file excel!"));
                                resolve(false);
                            }
                        }, error => {
                            console.error(error);
                            this.vhComponent.alertMessageDesktop('warning', this.languageService.translate("Vui lòng xem lại shop đã chọn hoặc file excel!"));
                            reject(false);
                        }).catch(err => { console.error(err); this.vhComponent.alertMessageDesktop('warning', this.languageService.translate("Vui lòng xem lại shop đã chọn hoặc file excel!")); reject(false); });
                    });
                },
                nzOnCancel: () => { bill['verify_status_payment'] = false; },
                nzCancelText: this.languageService.translate("Cancel")
            });
        }
        else {
            this.modal.confirm({
                nzTitle: this.languageService.translate("Confirm") + "?",
                nzContent: this.languageService.translate("Cancel check this order"),
                nzOkText: 'OK',
                nzOnOk: () => {
                    return new Promise((resolve, reject) => {
                        this.vhQuerySales.updateSalesOrderLazada_byFile([bill.bill_code], { verify_status_payment: false, id_employee_control_cashflow: this.vhAuth.getUser()._id }, this.infoShop.access_token, this.infoShop._id).then((bool) => {
                            // 
                            if (bool[0]) {
                                resolve(true);
                            }
                            else {
                                this.vhComponent.alertMessageDesktop('warning', this.languageService.translate("Vui lòng xem lại shop đã chọn hoặc file excel!"));
                                resolve(false);
                            }
                        }, error => {
                            console.error(error);
                            this.vhComponent.alertMessageDesktop('warning', this.languageService.translate("Vui lòng xem lại shop đã chọn hoặc file excel!"));
                            reject(false);
                        }).catch(err => { console.error(err); this.vhComponent.alertMessageDesktop('warning', this.languageService.translate("Vui lòng xem lại shop đã chọn hoặc file excel!")); reject(false); });
                    });
                },
                nzOnCancel: () => { bill['verify_status_payment'] = true; },
                nzCancelText: this.languageService.translate("Cancel")
            });
        }
    }
    /**
     * trở về trang quản lý đối soát
     * @example this.goBack()
     */
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/control/control-exel'], {
            state: { dataRestore: Object.assign({}, this.dataRestore) }
        });
    }
}
ControlMoneyComponent.ɵfac = function ControlMoneyComponent_Factory(t) { return new (t || ControlMoneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe)); };
ControlMoneyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ControlMoneyComponent, selectors: [["app-control-money"]], decls: 76, vars: 51, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "control-automation"], ["nz-row", "", "id", "control-automation-header", 2, "padding-bottom", "16px", "z-index", "99"], ["nz-col", "", "nzSpan", "3", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "7", 1, "left-all-content"], [1, "color-green"], ["nz-col", "", "nzSpan", "7", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup.enter"], ["box", ""], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "7", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "upload", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-data", "center-all-content", 3, "disabled", "click"], ["nz-icon", "", "nzType", "retweet", "nzTheme", "outline"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions"], ["salesOrder_show", ""], ["nzWidth", "5%"], ["nzLeft", "", "nzWidth", "15%"], ["nzWidth", "20%"], ["nzWidth", "25%"], ["nzWidth", "20%", 1, "text-end"], ["nzWidth", "15%", 2, "text-align", "center"], ["colspan", "4", "nzAlign", "center", 1, "color_green"], ["nzAlign", "right", "nzWidth", "15%", 1, "color_green"], ["nzWidth", "11%", "nzAlign", "center"], ["nzWidth", "14%", "nzAlign", "center"], [4, "ngFor", "ngForOf"], ["updateForControl", ""], ["type", "file", "id", "file_excel_product", "accept", ".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", 2, "display", "none", 3, "change"], ["nz-icon", "", "nzType", "search", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["nzWidth", "15%"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], ["nzWidth", "15%", "nzAlign", "center"], ["nz-button", "", "nz-checkbox", "", "nzTooltipPlacement", "top", "nz-button", "", "nz-tooltip", "", "nz-checkbox", "", 3, "ngModel", "nzTooltipPlacement", "nzTooltipColor", "nzTooltipTitle", "ngModelChange", 4, "ngIf"], ["nz-button", "", "nz-checkbox", "", "nzTooltipPlacement", "top", "nz-button", "", "nz-tooltip", "", "nz-checkbox", "", 3, "ngModel", "nzTooltipPlacement", "nzTooltipColor", "nzTooltipTitle", "ngModelChange"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nzFormat", "dd/MM/yyyy", 2, "margin-left", "20px", 3, "ngModel", "ngModelChange"]], template: function ControlMoneyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlMoneyComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nz-input-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function ControlMoneyComponent_Template_input_keyup_enter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ControlMoneyComponent_ng_template_20_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlMoneyComponent_Template_button_click_24_listener() { return ctx.openFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ControlMoneyComponent_Template_button_click_29_listener() { return ctx.startAuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "nz-table", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, ControlMoneyComponent_ng_container_72_Template, 2, 1, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, ControlMoneyComponent_ng_template_73_Template, 6, 4, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ControlMoneyComponent_Template_input_change_75_listener($event) { return ctx.openXLSXFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 22, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 24, "Money control"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 26, "Shop name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSuffix", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 28, "Search for order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 30, "Import file"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.listData.length || ctx.isUpdateManual);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 32, "Confirm to control"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](48, _c0, ctx.heightScroll))("nzData", ctx.listData)("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](50, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 34, "No."));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 36, "Payment date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 38, "Order number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 40, "_description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 42, "_amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 44, "For control"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 46, "Revenue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.totalRevenue));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r3.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzCellAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__.NzCheckboxComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__.NzDatePickerComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 95%;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.popup[_ngcontent-%COMP%] {\n  background: white;\n  width: 70vw;\n  max-width: 400px;\n  left: 50%;\n  position: fixed;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.popup[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n}\ni[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtbW9uZXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFDRTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQUFJO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFJO0VBQ0UsV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRU47QUFDRTs7RUFFRSxnQ0FBQTtBQUVKO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7QUFHTjtBQUFFO0VBQ0UsZUFBQTtBQUdKIiwiZmlsZSI6ImNvbnRyb2wtbW9uZXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgbnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ0bi1kYXRhIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYW50LWJ0bjpmb2N1cyxcclxuICAuYW50LWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVwIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGlvbi1wcm9ncmVzcy1iYXIge1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 50322:
/*!***************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/control/control-exel/control-money/control-money.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlMoneyModule": () => (/* binding */ ControlMoneyModule)
/* harmony export */ });
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _control_money_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-money.component */ 82347);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _control_money_component__WEBPACK_IMPORTED_MODULE_1__.ControlMoneyComponent
    },
];
class ControlMoneyModule {
}
ControlMoneyModule.ɵfac = function ControlMoneyModule_Factory(t) { return new (t || ControlMoneyModule)(); };
ControlMoneyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ControlMoneyModule });
ControlMoneyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ControlMoneyModule, { declarations: [_control_money_component__WEBPACK_IMPORTED_MODULE_1__.ControlMoneyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_lazada_control_control-exel_control-money_control-money_m-adf673.js.map