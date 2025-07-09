"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_reports_branches-comparison_branches-comparison_module_ts"],{

/***/ 40154:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/reports/branches-comparison/branches-comparison.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchesComparisonComponent": () => (/* binding */ BranchesComparisonComponent)
/* harmony export */ });
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 41488);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















class BranchesComparisonComponent {
    constructor(lang, vhAlgorithm, vhQueryCafe, datePipe, vhComponent, router, decimalPipe, cdRef, fncService) {
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.datePipe = datePipe;
        this.vhComponent = vhComponent;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.date = [new Date(), new Date()];
        this.dataShow = this.initDataShow();
        this.typeReport = "sales";
        this.typeChart = "bar";
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
    }
    showReport() {
        this.doRefresh();
    }
    ngAfterViewInit() {
        this.chartSalesComparison = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-sales"), this.renderOption());
        this.chartSalesComparison.render();
    }
    ngAfterViewChecked() {
        document.getElementById("height-sales-revenue-chart").style.height = `calc(100% - ${document.querySelector(".height-tabs").clientHeight}px - ${document.querySelector(".height-header").clientHeight}px)`;
        this.cdRef.detectChanges();
    }
    /**
     * bắt sk thay đổi thời gian xem báo cáo
     * @param event
     */
    changeTime(event) {
        if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {
            this.dataShow = this.initDataShow(event[0], event[1]);
        }
        else {
            this.vhComponent.showToast(4000, this.lang.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.lang.translate("days"), "alert-toast");
            this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
            this.dataShow = this.initDataShow(new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000));
        }
    }
    /**
     * gán dữ liệu cho chart
     */
    renderOption(categories = [], series = { name: '', data: [] }) {
        let bar = {
            chart: {
                id: 'chart-sales',
                type: "bar",
                toolbar: { show: false },
                zoom: { enabled: false },
                animations: { speed: 1000 },
                height: '100%'
            },
            series: [
                series
            ],
            colors: ["#Ffda45", "#48c0e3", "#f9be57", "#ee3d85", "#f8756d", "#c667ca", "#d6df3a", "#06467b", "#3c86c7", "#1fd2cd", "#373737"],
            xaxis: { categories, labels: { show: true, formatter: (val) => this.vhAlgorithm.vhcurrencyunit(val) }, axisBorder: { show: false }, tickPlacement: "on", axisTicks: { show: false } },
            yaxis: {
                labels: { show: false, formatter: (val) => this.vhAlgorithm.vhcurrencyunit_symbol(val) }
            },
            dataLabels: {
                enabled: true,
                textAnchor: "start",
                style: {
                    colors: ["#000"]
                },
                formatter: (val, opt) => {
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + this.vhAlgorithm.vhcurrencyunit_symbol(val);
                },
                offsetX: 0,
                dropShadow: {
                    enabled: true
                }
            },
            title: {
                text: this.renderNameReport(),
                align: "center",
                floating: true,
                style: { fontFamily: 'Roboto' }
            },
            stroke: {
                width: 1,
                colors: ["#fff"]
            },
            subtitle: {
                text: `${this.format_date(this.dataShow['startTime'])} - ${this.format_date(this.dataShow['endTime'])}`,
                align: "center"
            },
            states: {
                active: { filter: { type: "none" } },
                normal: { filter: { type: "none" } },
                hover: { filter: { type: "none" } }
            },
            plotOptions: {
                bar: {
                    barHeight: categories.length > 5 ? "100%" : "50%",
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: "bottom"
                    }
                }
            },
            tooltip: {
                x: {
                    show: false
                }
            },
            noData: { text: this.lang.translate('No data') },
            fill: { type: "solid" },
            legend: {
                position: 'right',
                horizontalAlign: 'left',
            }
        };
        let pie = {
            series: series.data,
            chart: {
                type: 'donut'
            },
            labels: categories,
            dataLabels: {
                enabled: true,
                textAnchor: "start",
                style: {
                    colors: ["#fff"]
                },
                formatter: (val, opt) => {
                    return this.decimalPipe.transform(val, "1.2-2") + "%";
                },
                offsetX: 0,
                dropShadow: {
                    enabled: true
                }
            },
            title: {
                text: this.renderNameReport(),
                align: "left",
                floating: true,
                style: { fontFamily: 'Roboto' }
            },
            subtitle: {
                text: `${this.format_date(this.dataShow['startTime'])} - ${this.format_date(this.dataShow['endTime'])}`,
                align: "left"
            },
            yaxis: {
                labels: { formatter: (value) => this.vhAlgorithm.vhcurrencyunit_symbol(value) }
            },
            states: {
                active: { filter: { type: "none" } },
                normal: { filter: { type: "none" } },
                hover: { filter: { type: "none" } }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                showAlways: true,
                                label: this.lang.translate(this.typeReport == "sales" ? "sales" : "Revenue"),
                                fontSize: '22px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                color: '#373d3f',
                                formatter: () => this.typeReport == "sales" ? this.vhAlgorithm.vhcurrencyunit_symbol(this.dataShow['total_sales']) : this.vhAlgorithm.vhcurrencyunit_symbol(this.dataShow['total_revenue'])
                            }
                        }
                    }
                }
            },
            legend: {
                position: 'right',
                horizontalAlign: 'left',
            }
        };
        return (this.typeChart == "bar") ? bar : pie;
    }
    /**
     * bắt sk nhấn nút xem báo cáo
     * @param event
     */
    doRefresh(event) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            const action = () => (this.typeReport == "sales") ? this.getSales() : this.getRevenue();
            action().then(() => {
                this.updateChart();
                this.vhComponent.hideLoading(0);
            });
        });
        if (event)
            event.target.complete();
    }
    /**
     * xử lý và gán dữ liệu vào chart
     */
    updateChart() {
        if (this.typeReport == "revenue") {
            this.chartSalesComparison.updateOptions(this.renderOption(this.dataShow['revenue'].map(item => item.name), { name: this.lang.translate("Revenue"), data: this.dataShow['revenue'].map(item => item.revenue) }));
        }
        else {
            this.chartSalesComparison.updateOptions(this.renderOption(this.dataShow['sales'].map(item => item.name), { name: this.lang.translate("sales"), data: this.dataShow['sales'].map(item => item.sales_atax) }));
        }
    }
    /**
     * thay đổi xem loại báo cáo daonh số hay số lượng
     * @param type
     */
    changeType(event) {
        this.typeReport = event.index == 0 ? "sales" : "revenue";
        this.updateChart();
    }
    initDataShow(startTime = new Date(), endTime = new Date()) {
        startTime.setHours(0, 0, 0, 0);
        endTime.setHours(23, 59, 59, 59);
        return {
            startTime,
            endTime,
            revenue: [],
            sales: [],
            total_revenue: 0,
            total_sales: 0
        };
    }
    /**
     * get báo cáo doanh thu
     * @returns Promise<unknown>
     * @example ths.getRevenue().then((data) =>{
     * console.log(data)
     * })
     */
    getRevenue() {
        //console.log(this.dataShow['startTime'], this.dataShow['endTime'])
        return new Promise((resolve, rejects) => {
            this.vhQueryCafe.getReportRevenue_byIDbranch(this.dataShow['startTime'], this.dataShow['endTime'], "all").then(({ docs, revenue }) => {
                this.dataShow['revenue'] = docs;
                this.dataShow['total_revenue'] = revenue;
                resolve(docs);
            }).catch(err => rejects(err));
        });
    }
    /**
     * get báo cáo doanh số
     * @returns Promise<unknown>
     * @example ths.getSales().then((data) =>{
     * console.log(data)
     * })
     */
    getSales() {
        //console.log(this.dataShow['startTime'], this.dataShow['endTime'])
        return new Promise((resolve, rejects) => {
            this.vhQueryCafe.getReportSales_byIDbranch(this.dataShow['startTime'], this.dataShow['endTime'], "all").then(({ docs, sales_atax }) => {
                this.dataShow['sales'] = docs;
                this.dataShow['total_sales'] = sales_atax;
                resolve(docs);
            }).catch(err => rejects(err));
        });
    }
    /**
     * trả về tên loại báo cáo
     * @returns string
     * let name = this.renderNameReport()
     */
    renderNameReport() {
        switch (this.typeReport) {
            case "sales": return `${this.lang.translate("Branch Sales Comparison Report")}`;
            case "revenue": return `${this.lang.translate("Branch Revenue Comparison Report")}`;
        }
    }
    /**
     * trả về tên file tải về
     * @returns string
     * let name = this.renderNameExport()
     */
    renderNameExport() {
        switch (this.typeReport) {
            case "sales": return `${this.lang.translate("_branch_sales_comparison_report")}_${this.format_date(this.dataShow['startTime'])}_${this.lang.translate("_to")}_${this.format_date(this.dataShow['endTime'])}`;
            case "revenue": return `${this.lang.translate("_branch_revenue_comparison_report")}_${this.format_date(this.dataShow['startTime'])}_${this.lang.translate("_to")}_${this.format_date(this.dataShow['endTime'])}`;
        }
    }
    /**
     * tải báo cáo về dạng hình ảnh
     */
    downloadImg() {
        Promise.all([
            this.vhComponent.showLoading("", "current-loading"),
            this.vhComponent.downloadImg("chart-sales-compare-branch", this.renderNameExport())
        ]).then(() => this.vhComponent.hideLoading());
    }
    format_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy");
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/report']);
    }
}
BranchesComparisonComponent.ɵfac = function BranchesComparisonComponent_Factory(t) { return new (t || BranchesComparisonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
BranchesComparisonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BranchesComparisonComponent, selectors: [["app-branches-comparison"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe])], decls: 38, vars: 21, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "height-layout"], ["nz-row", "", 1, "height-header"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", "nzSpan", "5", "id", "segment", 1, "info"], ["mode", "ios", 3, "ngModel", "ngModelChange"], ["value", "bar"], ["name", "bar-chart-outline"], ["value", "pie"], ["name", "pie-chart-outline"], ["nz-col", "", "nzSpan", "8", 1, "picker-time"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "5", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-row", "", 1, "height-tabs"], [2, "width", "100%", 3, "nzSelectChange"], [3, "nzTitle"], ["nz-row", "", "id", "height-sales-revenue-chart"], ["id", "chart-sales-compare-branch", 2, "padding", "16px 80px", "height", "100%", "width", "100%"], ["id", "chart-sales"]], template: function BranchesComparisonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BranchesComparisonComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-segment", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BranchesComparisonComponent_Template_ion_segment_ngModelChange_11_listener($event) { return ctx.typeChart = $event; })("ngModelChange", function BranchesComparisonComponent_Template_ion_segment_ngModelChange_11_listener() { return ctx.updateChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-segment-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-segment-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-range-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BranchesComparisonComponent_Template_nz_range_picker_ngModelChange_17_listener($event) { return ctx.date = $event; })("ngModelChange", function BranchesComparisonComponent_Template_nz_range_picker_ngModelChange_17_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BranchesComparisonComponent_Template_button_click_20_listener() { return ctx.downloadImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BranchesComparisonComponent_Template_button_click_25_listener() { return ctx.showReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "nz-tabset", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSelectChange", function BranchesComparisonComponent_Template_nz_tabset_nzSelectChange_30_listener($event) { return ctx.changeType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "nz-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "nz-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 11, "Branches comparison"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.typeChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 13, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 15, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 17, "sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 19, "Revenue"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   #chart-image[_ngcontent-%COMP%] {\n  padding: 0 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  --background: none;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: none;\n  --background: none;\n  --background-checked: none;\n  font-size: 0.9rem;\n  --indicator-box-shadow: none;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  margin-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\n.padd-cus[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.picker-time[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ant-picker[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 4px 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5jaGVzLWNvbXBhcmlzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGVBQUE7QUFHUjtBQURJO0VBQ0ksYUFBQTtBQUdSO0FBRFE7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR1o7QUFGWTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFJaEI7QUFIZ0I7RUFDSSxlQUFBO0FBS3BCO0FBSGdCO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtBQUtwQjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksaUVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFUjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUdaO0FBQUk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUNBOztFQUVJLGdDQUFBO0FBRUo7QUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQURBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FBSUo7QUFGQTtFQUNJLGdCQUFBO0FBS0o7QUFIQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTUo7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7QUFPSiIsImZpbGUiOiJicmFuY2hlcy1jb21wYXJpc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICAjY2hhcnQtaW1hZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgODBweDtcclxuICAgIH1cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBpb24tc2VnbWVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiBub25lO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB9XHJcbiAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5idG4tdmlldyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJnLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICAuY2VudGVyLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hbnQtYnRuOmZvY3VzLFxyXG4uYW50LWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uc2l6ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBhZGQtY3VzIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLnBpY2tlci10aW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFudC1waWNrZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNHB4IDExcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 24454:
/*!********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/reports/branches-comparison/branches-comparison.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchesComparisonModule": () => (/* binding */ BranchesComparisonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _branches_comparison_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branches-comparison.component */ 40154);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _branches_comparison_component__WEBPACK_IMPORTED_MODULE_0__.BranchesComparisonComponent
    }
];
class BranchesComparisonModule {
}
BranchesComparisonModule.ɵfac = function BranchesComparisonModule_Factory(t) { return new (t || BranchesComparisonModule)(); };
BranchesComparisonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BranchesComparisonModule });
BranchesComparisonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BranchesComparisonModule, { declarations: [_branches_comparison_component__WEBPACK_IMPORTED_MODULE_0__.BranchesComparisonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_reports_branches-comparison_branches-comparison_module_ts.js.map