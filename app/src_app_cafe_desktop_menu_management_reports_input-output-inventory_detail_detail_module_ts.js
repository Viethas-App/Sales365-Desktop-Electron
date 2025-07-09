"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_reports_input-output-inventory_detail_detail_module_ts"],{

/***/ 61041:
/*!********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/reports/input-output-inventory/detail/detail.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_cafe_components_bill_detail_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/sales/sales.component */ 36010);
/* harmony import */ var src_app_cafe_components_bill_detail_openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/openning-stock/openning-stock.component */ 52205);
/* harmony import */ var src_app_cafe_components_bill_detail_delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/delivery-goods/delivery-goods.component */ 41282);
/* harmony import */ var src_app_cafe_components_bill_detail_recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/recieve-goods/recieve-goods.component */ 8220);
/* harmony import */ var src_app_cafe_components_bill_detail_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/purchase/purchase.component */ 70754);
/* harmony import */ var src_app_cafe_components_bill_detail_return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/return-supplier/return-supplier.component */ 94098);
/* harmony import */ var src_app_cafe_components_bill_detail_exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/exchange-payment-card/exchange-payment-card.component */ 32557);
/* harmony import */ var src_app_cafe_components_bill_detail_exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/exchange-voucher/exchange-voucher.component */ 16221);
/* harmony import */ var src_app_cafe_components_bill_detail_destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/destroy-product/destroy-product.component */ 71345);
/* harmony import */ var src_app_cafe_components_bill_detail_export_kitchen_export_kitchen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/export-kitchen/export-kitchen.component */ 13570);
/* harmony import */ var src_app_cafe_components_bill_detail_import_kitchen_import_kitchen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/import-kitchen/import-kitchen.component */ 9560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























function DetailComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DetailComponent_tr_68_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5); const data_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r4.goToDetail(data_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r2.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](5, 6, data_r2.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r2.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](12, 9, data_r2.inquantity, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](15, 12, data_r2.outquantity, "1.0-2"));
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0, a1) { return { x: a0, y: a1 }; };
class DetailComponent {
    constructor(router, vhQueryCafe, cdRef, vhAlgorithm, lang, datePipe, vhComponent) {
        this.router = router;
        this.vhQueryCafe = vhQueryCafe;
        this.cdRef = cdRef;
        this.vhAlgorithm = vhAlgorithm;
        this.lang = lang;
        this.datePipe = datePipe;
        this.vhComponent = vhComponent;
        this.inOutStockDetail = this.init();
        this.reportConfig = JSON.parse(localStorage.getItem("vhsales-report"));
        this.status = false;
        let data = this.router.getCurrentNavigation().extras.state;
        if (data) {
            this.stateObj = data.stateObj;
            this.detail = data.detail;
            if (data.inOutStockDetail)
                this.inOutStockDetail = data.inOutStockDetail;
            else
                this.doRefresh();
        }
    }
    init() {
        return { outquantity: 0, inquantity: 0, cost_atax: 0, cost_btax: 0, revenue_atax: 0, revenue_btax: 0, list: [] };
    }
    ngAfterViewChecked() {
        if (document.querySelector(".height-layout") && document.querySelector(".height-header") && document.querySelector(".ant-table-thead") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = (document.querySelector(".height-layout").clientHeight -
                document.querySelector(".height-header").clientHeight -
                document.querySelector(".ant-table-thead").clientHeight -
                document.querySelector(".ant-table-pagination").clientHeight) - 80 + "px";
        }
        if (document.querySelector(".height-layout")) {
            this.widthScroll = document.querySelector(".height-layout").clientWidth + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * xem báo cáo
     * @example this.doRefresh()
     */
    doRefresh() {
        this.getInOutStockDetail().then(res => {
            console.log('getInOutStockDetail', res);
            this.inOutStockDetail['list'] = res['docs'].map(item => {
                let element = {
                    id_bill: item['id_bill'],
                    name: item['name'],
                    date: item['date'],
                    bill_type: item['bill_type'],
                    bill_code: item['bill_code'],
                    price_atax: item['price_atax'],
                    price_btax: item['price_btax'],
                    unit: item['unit']
                };
                if ([2, 4, 9, 16, 31].includes(item.bill_type)) {
                    element['inquantity'] = item.quantity;
                    element['outquantity'] = 0;
                    element['cost_btax'] = item.payment_btax;
                    element['cost_atax'] = item.payment_atax;
                    element['revenue_btax'] = 0;
                    element['revenue_atax'] = 0;
                }
                else {
                    element['inquantity'] = 0;
                    element['outquantity'] = item.quantity;
                    element['revenue_btax'] = item.payment_btax;
                    element['revenue_atax'] = item.payment_atax;
                    element['cost_btax'] = 0;
                    element['cost_atax'] = 0;
                }
                return element;
            });
            this.inOutStockDetail['outquantity'] = res['outquantity'];
            this.inOutStockDetail['inquantity'] = res['inquantity'];
            this.inOutStockDetail['cost_atax'] = res['cost_atax'];
            this.inOutStockDetail['cost_btax'] = res['cost_btax'];
            this.inOutStockDetail['revenue_atax'] = res['revenue_atax'];
            this.inOutStockDetail['revenue_btax'] = res['revenue_btax'];
        });
    }
    /**
     * get dữ liệu báo cáo
     * @example this.getInOutStockDetail()
     */
    getInOutStockDetail() {
        return new Promise((resolve, rejects) => {
            if (this.stateObj['type_report'] === 1) {
                console.log('getReportInputOutputInventory_Detail_byTime_byIDMaterial');
                this.vhQueryCafe.getReportInputOutputInventory_Detail_byTime_byIDMaterial(this.stateObj.inOutStock['startTime'], this.stateObj.inOutStock['endTime'], this.detail['id_product'], this.stateObj['id_branch_report'])
                    .then(res => resolve(res)).catch(err => rejects(err));
            }
            else {
                console.log('getReportInputOutput_Detail_byTime_byIDMaterial');
                this.vhQueryCafe.getReportInputOutput_Detail_byTime_byIDMaterial(this.stateObj.inOutStock['startTime'], this.stateObj.inOutStock['endTime'], this.detail['id_product'], this.stateObj['id_branch_report'])
                    .then(res => resolve(res)).catch(err => rejects(err));
            }
        });
    }
    /**
     * mở modal component xem thông tin bill của từng loại bill-type tương ứng
     * @param item
     * @example this.goToDetail(bill_selected)
     */
    goToDetail(item) {
        // let state: any = { id: bill.id_bill, bill_type: bill.bill_type, stateObj: this.stateObj, detail: this.detail, inOutStockDetail: this.inOutStockDetail }
        // setTimeout(() => {
        //   if (bill.bill_type == 9) this.router.navigate([`/dashboard/management/report/input-output-inventory/detail/detail-opening-stock`], { state: state })
        //   else if (bill.bill_type == 30 || bill.bill_type == 31) this.router.navigate([`/dashboard/management/report/input-output-inventory/detail/detail-bill-delivery-receive`], { state: state })
        //   else this.router.navigate([`/dashboard/management/report/input-output-inventory/detail/detail-bill${bill.bill_type == 1 ? '' : ([2, 10].includes(bill.bill_type) ? '-outside' : '-inside')}`], { state: state })
        // }, 100)
        switch (item.bill_type) {
            case 1: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__.SalesComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 2: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_4__.PurchaseComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 3: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_export_kitchen_export_kitchen_component__WEBPACK_IMPORTED_MODULE_9__.ExportKitchenComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 16: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_import_kitchen_import_kitchen_component__WEBPACK_IMPORTED_MODULE_10__.ImportKitchenComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 9: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_1__.OpenningStockComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 10: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_5__.ReturnSupplierComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 30: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_2__.DeliveryGoodsComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 31: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_3__.RecieveGoodsComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 41: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_7__.ExchangeVoucherComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 51: {
                return this.vhComponent.showModal(src_app_cafe_components_bill_detail_exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_6__.ExchangePaymentCardComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                });
            }
            case 38: {
                if (!item.id_bill) {
                    this.vhComponent.alertMessageDesktop("warning", this.lang.translate("Xuất hủy hàng hóa từ cân bằng kho"));
                    break;
                }
                else {
                    return this.vhComponent.showModal(src_app_cafe_components_bill_detail_destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_8__.DestroyProductComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                        .then(modal => {
                        modal.onWillDismiss().then(dataReturn => console.log(dataReturn));
                    });
                }
            }
            case 39: {
                this.vhComponent.alertMessageDesktop("warning", this.lang.translate("Nhập bù hàng hóa từ cân bằng kho"));
                break;
            }
        }
    }
    format_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy");
    }
    format_full_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy HH:mm");
    }
    /**
     * xuất dữ liệu ra file excel và tải về
     */
    export() {
        this.status = true;
        let data = new Array();
        let date = this.lang.translate("_from") + "_" +
            this.format_date(this.stateObj['startTime']) + "_" +
            this.lang.translate("_to") + "_" +
            this.format_date(this.stateObj['endTime']);
        let name = `${this.lang.translate(this.detail.type_report == 1 ? "_input_output_inventory_report" : "_input_output_items_report")}_${this.vhAlgorithm.changeAlias(this.detail.name).replace(/\s/g, "_")}_${date}_${this.stateObj['id_branch_report'] == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQueryCafe.getlocalBranch(this.stateObj['id_branch_report']).name).replace(/\s/g, "_")}`;
        let title = new Object();
        title[this.lang.translate("Invoice code")] = "";
        title[this.lang.translate("Date")] = "";
        title[this.lang.translate("Product name")] = "";
        title[this.lang.translate("Unit")] = "";
        title[this.lang.translate("Input")] = this.lang.translate("Quantity");
        title[this.lang.translate("Output")] = this.lang.translate("Quantity");
        data.push(title);
        let total = new Object();
        total[this.lang.translate("Invoice code")] = "";
        total[this.lang.translate("Date")] = "";
        total[this.lang.translate("Product name")] = this.lang.translate("Total");
        total[this.lang.translate("Unit")] = "";
        total[this.lang.translate("Input")] = this.inOutStockDetail.inquantity;
        total[this.lang.translate("Output")] = this.inOutStockDetail.outquantity;
        data.push(total);
        for (let _rows of this.inOutStockDetail.list) {
            let item = new Object();
            item[this.lang.translate("Invoice code")] = _rows.bill_code;
            item[this.lang.translate("Date")] = this.format_date(_rows.date);
            item[this.lang.translate("Product name")] = _rows.name;
            item[this.lang.translate("Unit")] = _rows.unit;
            item[this.lang.translate("Input")] = _rows.inquantity;
            item[this.lang.translate("Output")] = _rows.outquantity;
            data.push(item);
        }
        this.vhAlgorithm.exportXLSX(data, name).then(() => this.status = false).catch(err => this.status = false);
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/report/input-output-inventory'], { state: { stateObj: this.stateObj } });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_11__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_12__.VhComponent)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 69, vars: 54, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "height-layout"], ["nz-row", "", 1, "height-header"], ["nz-col", "", "nzSpan", "21", 1, "title"], ["nz-col", "", "nzSpan", "3", 1, "title", "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], [2, "padding-top", "8px"], ["nzBordered", "", "nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult"], ["detailStock", ""], ["nzLeft", "", "nzWidth", "100px", "rowspan", "2", 1, "center"], ["nzLeft", "", "nzWidth", "150px", "rowspan", "2", 1, "center"], ["nzLeft", "", "nzWidth", "300px", "rowspan", "2", 1, "left"], ["nzWidth", "100px", "rowspan", "2", 1, "left"], ["nzAlign", "center"], [1, "center"], ["nzLeft", ""], ["nzLeft", "", 2, "color", "var(--ion-color-vh-green)"], [1, "center", 2, "color", "var(--ion-color-vh-green)"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["nzLeft", "", 1, "center"], ["nzLeft", "", 1, "left"], [1, "left"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_11_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "nz-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](56, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](57, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](58, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](64, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](67, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, DetailComponent_tr_68_Template, 16, 15, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 20, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.detail.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](14, 22, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 24, "No data!"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](50, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](51, _c1, ctx.widthScroll, ctx.heightScroll))("nzData", ctx.inOutStockDetail.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](24, 26, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](28, 28, "Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](32, 30, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](36, 32, "Unit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](40, 34, "Input"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](44, 36, "Output"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](49, 38, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](53, 40, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](60, 42, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](64, 44, ctx.inOutStockDetail.inquantity, "1.0-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](67, 47, ctx.inOutStockDetail.outquantity, "1.0-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\n@media only screen and (max-width: 1200px) {\n  .btn-data[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\nnz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nnz-table[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  text-align: left;\n}\nnz-table[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n}\nnz-table[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQUZRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlaO0FBQ0E7O0VBRUksZ0NBQUE7QUFFSjtBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBREE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUFJSjtBQUZBO0VBQ0k7SUFDSSw0QkFBQTtFQUtOO0FBQ0Y7QUFGSTs7RUFFSSx1QkFBQTtBQUlSO0FBRkk7RUFDSSxnQkFBQTtBQUlSO0FBRkk7RUFDSSxpQkFBQTtBQUlSO0FBRkk7RUFDSSxrQkFBQTtBQUlSIiwiZmlsZSI6ImRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYW50LWJ0bjpmb2N1cyxcclxuLmFudC1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNpemUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYnRuLWRhdGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxubnotdGFibGUge1xyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubGVmdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 64289:
/*!*****************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/reports/input-output-inventory/detail/detail.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailModule": () => (/* binding */ DetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.component */ 61041);
/* harmony import */ var src_app_cafe_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/bill-detail/bill-detail.module */ 31064);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: '',
        children: [
            {
                path: "",
                component: _detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent
            },
        ]
    },
];
class DetailModule {
}
DetailModule.ɵfac = function DetailModule_Factory(t) { return new (t || DetailModule)(); };
DetailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DetailModule });
DetailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_cafe_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_2__.BillDetailModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DetailModule, { declarations: [_detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_cafe_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_2__.BillDetailModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_reports_input-output-inventory_detail_detail_module_ts.js.map