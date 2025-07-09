"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_reports_sales-profit_sales-profit_module_ts"],{

/***/ 54625:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/sales-profit/sales-profit.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesProfitComponent": () => (/* binding */ SalesProfitComponent)
/* harmony export */ });
/* harmony import */ var date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/differenceInCalendarDays */ 57039);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 41488);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ 52195);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function SalesProfitComponent_div_28_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, option_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzValue", option_r2._id);
} }
function SalesProfitComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnSearch", function SalesProfitComponent_div_28_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.search($event); })("ngModelChange", function SalesProfitComponent_div_28_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.id_branch_report = $event; })("ngModelChange", function SalesProfitComponent_div_28_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.changeBranch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SalesProfitComponent_div_28_nz_option_3_Template, 2, 4, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, "Select branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx_r0.id_branch_report);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
} }
class SalesProfitComponent {
    constructor(lang, vhAlgorithm, vhQuerySales, datePipe, vhComponent, router, cdRef, vhQuery, vhAuth, fncService) {
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.datePipe = datePipe;
        this.vhComponent = vhComponent;
        this.router = router;
        this.cdRef = cdRef;
        this.vhQuery = vhQuery;
        this.vhAuth = vhAuth;
        this.fncService = fncService;
        this.startTime = new Date;
        this.endTime = new Date;
        this.branchList = [];
        this.search_branchList = [];
        this.id_branch_report = '';
        this.useBranch = this.fncService.checkUsingBranch();
        this.total_sales = 0;
        this.total_revenue = 0;
        this.typeChart = "bar";
        this.time = "date";
        this.initDataShow = () => { return { categories: [], sales_value: [], sales_atax: 0, sales_btax: 0, revenue_value: [], revenue: 0 }; };
        this.dataShow = this.initDataShow();
        this.data = {};
        this.date = new Date;
        this.status = false;
        this.today = new Date();
        this.choosed = 'date';
        this.disabledDate = (current) => {
            return (0,date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_6__.default)(current, this.today) > 0;
        };
        /**zorro modal */
        this.checked = true;
        this.initTime();
        this.getBranches();
    }
    /**
     * xem báo cáo
     */
    showReport() {
        this.doRefresh();
    }
    ngAfterViewInit() {
        this.chartSalesRevenue = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-sales-revenue"), this.renderOption());
        this.chartSalesRevenue.render();
    }
    initTime() {
        this.startTime.setHours(0, 0, 0, 0);
        this.endTime.setHours(23, 59, 59, 59);
        // ngày đầu tiên và cuối cùng của tháng
        this.firstDayOfMonth = new Date(this.startTime.getFullYear(), this.startTime.getMonth(), 1, 0, 0, 0, 0);
        this.lastDayOfMonth = new Date(this.firstDayOfMonth.getTime() + 86400000 * this.vhAlgorithm.getNumberOfDaysInMonth(this.startTime.getFullYear(), this.startTime.getMonth() + 1) - 1);
        // ngày đầu tiên và cuối cùng của năm
        this.firstDayOfYear = new Date(this.startTime.getFullYear(), 0, 1, 0, 0, 0, 0);
        this.lastDayOfYear = new Date(this.startTime.getFullYear(), 11, 31, 23, 59, 59, 59);
    }
    /**
     * lọc chi nhánh theo tên
     * @example this.search('')
     */
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.branchList = this.vhAlgorithm.searchList(tempVal, this.search_branchList, ['name']);
        else
            this.branchList = this.search_branchList;
    }
    /**
     * bắt sk thay đổi chi nhánh xem báo cáo
     * @example this.changeBranch('DWHDIUHWIUDHIW')
     */
    changeBranch(event) {
        this.id_branch_report = event;
    }
    renderOption(categories = [], revenue_value = [], sales_value = []) {
        return {
            chart: {
                id: 'chart-sales-revenue',
                type: this.typeChart,
                toolbar: { show: false },
                zoom: { enabled: false },
                animations: { speed: 1000 },
                height: 400
            },
            series: [
                { name: this.lang.translate("Revenue"), data: revenue_value },
                { name: this.lang.translate("sales"), data: sales_value }
            ],
            colors: ["var(--ion-color-vh-green)", "var(--ion-color-vh-green-chart)"],
            stroke: { width: this.typeChart == "bar" ? 0 : 2, curve: "smooth" },
            xaxis: { categories, labels: { rotate: 0, trim: false, hideOverlappingLabels: true }, axisBorder: { show: false }, tickPlacement: "on", axisTicks: { show: false } },
            yaxis: {
                show: true,
                labels: {
                    formatter: (val) => this.vhAlgorithm.vhcurrencyunit(val),
                    style: {
                        fontSize: '0.9rem',
                        fontWeight: 400,
                    }
                },
            },
            dataLabels: { enabled: false }, title: { text: this.renderNameReport(), style: { fontFamily: 'Roboto' } },
            states: {
                active: { filter: { type: "none" } },
                normal: { filter: { type: "none" } },
                hover: { filter: { type: "none" } }
            },
            plotOptions: {
                bar: { columnWidth: categories.length < 5 ? "30%" : "50%" }
            },
            noData: { text: this.lang.translate(this.data[this.time] ? "No data" : "Please select the filter") },
            fill: this.typeChart == "area" ? {
                type: "gradient",
                gradient: {
                    shade: 'dark', type: 'vertical', shadeIntensity: 1, stops: [0, 25, 75, 100],
                    colorStops: [
                        [
                            { offset: 0, color: "var(--ion-color-vh-green)", opacity: 1 },
                            { offset: 25, color: "var(--ion-color-vh-green)", opacity: 0.9 },
                            { offset: 75, color: "var(--ion-color-vh-green)", opacity: 0.6 },
                            { offset: 100, color: "var(--ion-color-vh-green)", opacity: 0.3 }
                        ],
                        [
                            { offset: 0, color: "var(--ion-color-vh-green-chart)", opacity: 1 },
                            { offset: 25, color: "var(--ion-color-vh-green-chart)", opacity: 0.9 },
                            { offset: 75, color: "var(--ion-color-vh-green-chart)", opacity: 0.6 },
                            { offset: 100, color: "var(--ion-color-vh-green-chart)", opacity: 0.3 }
                        ]
                    ]
                }
            } : { type: "solid" },
        };
    }
    /**
     * gán lại dữ liệu cho chart
     */
    updateChart(typeChart) {
        this.chartSalesRevenue.updateOptions(this.renderOption(this.dataShow['categories'], this.dataShow['revenue_value'], this.dataShow['sales_value']));
    }
    /**
     * xem báo cáo
     */
    doRefresh() {
        this.vhComponent.showLoading("", 'current-loading').then(() => {
            Promise.all([this.getData(this.time)]).then((res) => {
                this.changeTime(this.time);
                this.vhComponent.hideLoading(0);
            });
        });
    }
    /**
     * bắt sk thay đổi thời gian xem báo cáo
     */
    changeTime(value) {
        if (this.data[value]) {
            this.dataShow = this.data[value];
        }
        else {
            this.dataShow = this.initDataShow();
        }
        this.updateChart();
    }
    /**
     * get dữ liệu báo cáo theo loại mốc thời gian đã chọn
     */
    getData(time) {
        switch (time) {
            case "year": return this.getYear();
            case "month": return this.getMonth();
            default: return this.getToday();
        }
    }
    /**
     * bắt sk thay đổi loại mốc thời gian xem báo cáo
     */
    selectTime(time) {
        switch (time) {
            case "year": return this.date = this.firstDayOfYear;
            case "month": return this.date = this.firstDayOfMonth;
            default: return this.date = this.startTime;
        }
    }
    /**
     * bắt sk thay đổi thời gian xem báo cáo
     */
    switchTime(time) {
        switch (this.time) {
            case "year": return this.setYear(time);
            case "month": return this.setMonth(time);
            default: return this.setToday(time);
        }
    }
    /**
     * thay đổi thời gian theo ngày
     */
    setToday(value) {
        this.startTime = new Date(value);
        this.startTime.setHours(0, 0, 0, 0);
        this.endTime = new Date(value);
        this.endTime.setHours(23, 59, 59, 59);
    }
    /**
     * thay đổi thời gian theo tháng
     */
    setMonth(value) {
        let date = new Date(value);
        this.startTime = new Date(value);
        this.startTime.setHours(0, 0, 0, 0);
        this.firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
        this.lastDayOfMonth = new Date(this.firstDayOfMonth.getTime() + 86400000 * this.vhAlgorithm.getNumberOfDaysInMonth(date.getFullYear(), date.getMonth() + 1) - 1);
        // this.doRefresh()
    }
    /**
     * thay đổi thời gian theo năm
     */
    setYear(value) {
        let date = new Date(value);
        this.startTime = new Date(value);
        this.startTime.setHours(0, 0, 0, 0);
        this.firstDayOfYear = new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0);
        this.lastDayOfYear = new Date(date.getFullYear(), 11, 31, 23, 59, 59, 59);
        //this.doRefresh()
    }
    /**
     * get dữ liệu báo cáo theo ngày
     */
    getToday() {
        return new Promise(resolve => {
            let arrayHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            Promise.all([
                this.vhQuerySales.getReportRevenue_byHoursOut_hourArray(this.startTime, this.endTime, arrayHours, this.id_branch_report),
                this.vhQuerySales.getReportSales_byHoursOut_hourArray(this.startTime, this.endTime, arrayHours, this.id_branch_report)
            ]).then(([{ docs: docs_revenue, revenue }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.total_sales = sales_atax;
                this.total_revenue = revenue;
                this.data['date'] = {
                    arrayHours: arrayHours,
                    categories: arrayHours.map(item => ` ${item}h `),
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.data['date'] = this.freshValue(this.data['date']);
                resolve(this.data['date']);
            });
        });
    }
    /**
     * get dữ liệu báo cáo theo tháng
     */
    getMonth() {
        return new Promise(resolve => {
            let dayOfMonth = this.vhAlgorithm.getNumberOfDaysInMonth(this.startTime.getFullYear(), this.startTime.getMonth() + 1);
            let arrayDayMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
                .slice(0, dayOfMonth);
            Promise.all([
                this.vhQuerySales.getReportRevenue_byDaysOut_dayArray(this.firstDayOfMonth, this.lastDayOfMonth, arrayDayMonth, this.id_branch_report),
                this.vhQuerySales.getReportSales_byDaysOut_dayArray(this.firstDayOfMonth, this.lastDayOfMonth, arrayDayMonth, this.id_branch_report)
            ]).then(([{ docs: docs_revenue, revenue }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.total_sales = sales_atax;
                this.total_revenue = revenue;
                this.data['month'] = {
                    categories: arrayDayMonth,
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.data['month'] = this.freshValue(this.data['month']);
                resolve(this.data['month']);
            });
        });
    }
    /**
     * get dữ liệu báo cáo theo năm
     */
    getYear() {
        return new Promise(resolve => {
            let arrayMonthYear = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            let key = [this.lang.translate("Jan"), this.lang.translate("Feb"), this.lang.translate("Mar"), this.lang.translate("Apr"), this.lang.translate("May"), this.lang.translate("Jun"), this.lang.translate("Jul"), this.lang.translate("Aug"), this.lang.translate("Sep"), this.lang.translate("Oct"), this.lang.translate("Nov"), this.lang.translate("Dec")];
            Promise.all([
                this.vhQuerySales.getReportRevenue_byMonthsOut_monthArray(this.firstDayOfYear, this.lastDayOfYear, arrayMonthYear, this.id_branch_report),
                this.vhQuerySales.getReportSales_byMonthsOut_monthArray(this.firstDayOfYear, this.lastDayOfYear, arrayMonthYear, this.id_branch_report)
            ]).then(([{ docs: docs_revenue, revenue }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.total_sales = sales_atax;
                this.total_revenue = revenue;
                this.data['year'] = {
                    categories: key,
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.data['year'] = this.freshValue(this.data['year']);
                resolve(this.data['year']);
            });
        });
    }
    /**
     * trả về các trường dữ liệu đã qua xử lý để hiển thị lên chart
     */
    freshValue(data) {
        let dataShow = { categories: [], sales_value: [], revenue_value: [], revenue: data.revenue, sales_btax: data.sales_btax, sales_atax: data.sales_atax };
        if (data.revenue_value.length && data.sales_value.length) {
            for (let i = 0, len = data.revenue_value.length; i < len; i++) {
                if (data.sales_value[i].sales_atax || data.revenue_value[i].revenue) {
                    dataShow.categories.push(data.categories[i]);
                    dataShow.sales_value.push(data.sales_value[i].sales_atax);
                    dataShow.revenue_value.push(data.revenue_value[i].revenue);
                }
            }
        }
        else {
            if (data.sales_value.length) {
                for (let i = 0, len = data.sales_value.length; i < len; i++) {
                    if (data.sales_value[i].sales_atax) {
                        dataShow.categories.push(data.categories[i]);
                        dataShow.sales_value.push(data.sales_value[i].sales_atax);
                        dataShow.revenue_value.push(0);
                    }
                }
            }
            else {
                for (let i = 0, len = data.revenue_value.length; i < len; i++) {
                    if (data.revenue_value[i].revenue) {
                        dataShow.categories.push(data.categories[i]);
                        dataShow.sales_value.push(0);
                        dataShow.revenue_value.push(data.revenue_value[i].revenue);
                    }
                }
            }
        }
        return dataShow;
    }
    /**
     * trả về tên loại báo cáo để tạo file excel
     */
    renderNameExport() {
        switch (this.time) {
            case "month": return `${this.lang.translate("_sales_revenue_report")}_${this.firstDayOfMonth.getMonth() + 1}_${this.firstDayOfMonth.getFullYear()}`;
            case "year": return `${this.lang.translate("_sales_revenue_report")}_${this.firstDayOfMonth.getFullYear()}`;
            default: return `${this.lang.translate("_sales_revenue_report")}_${this.format_date(this.startTime)}`;
        }
    }
    /**
     * trả về tên loại báo cáo để hiển thị lên chart
     */
    renderNameReport() {
        switch (this.time) {
            case "month": return `${this.lang.translate("Sales Revenue Report")} ${this.firstDayOfMonth.getMonth() + 1}/${this.firstDayOfMonth.getFullYear()}`;
            case "year": return `${this.lang.translate("Sales Revenue Report")} ${this.firstDayOfMonth.getFullYear()}`;
            default: return `${this.lang.translate("Sales Revenue Report")} ${this.format_date(this.startTime)}`;
        }
    }
    /**
     * tải báo cáo dưới dạng hình ảnh
     */
    downloadImg() {
        Promise.all([
            this.vhComponent.showLoading("", "current-loading"),
            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document.querySelector("#chart-image"))
        ]).then((res) => {
            this.vhComponent.hideLoading(0);
            // Tạo đường dẫn URL của ảnh
            const dataURL = res[1].toDataURL("image/png");
            // Tạo liên kết tải xuống cho người dùng
            const link = document.createElement('a');
            link.download = `${this.renderNameExport()}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}` + '.png';
            link.href = dataURL;
            link.click();
        });
    }
    /**
     *
     * @param date
     * @returns string
     * @example let date = this.format_date('2023-06-27T01:10:34.396Z') => output '27_06_2023'
     */
    format_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy");
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/reports']);
    }
    /**
     * get chi nhánh được xem báo cáo của user
     */
    getBranches() {
        let branches = [...this.vhQuerySales.getlocalBranchs()]; // danh sách toàn bộ chi nhánh
        let employee = this.vhAuth.getUser(); // thông tn nhân viên
        let defaultBranch = this.vhQuerySales.getDefaultBranch()._id; // chi nhánh mặc định khi đăng nhập (lấy id chi nhánh)
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
}
SalesProfitComponent.ɵfac = function SalesProfitComponent_Factory(t) { return new (t || SalesProfitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_4__.FunctionService)); };
SalesProfitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SalesProfitComponent, selectors: [["app-sales-profit"]], decls: 53, vars: 39, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "height-layout"], ["nz-row", "", 1, "height-header", 2, "height", "8%"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", "nzSpan", "5", "id", "segment", 1, "info"], ["mode", "ios", 3, "ngModel", "ngModelChange"], ["value", "bar"], ["name", "bar-chart-outline"], ["value", "line"], ["src", "assets/icon/global/line-chart.svg"], ["value", "area"], ["src", "assets/icon/global/area-chart.svg"], ["nz-col", "", 1, "center-all-content", 3, "nzSpan"], [3, "ngModel", "ngModelChange"], ["nzValue", "date", 3, "nzLabel"], ["nzValue", "month", 3, "nzLabel"], ["nzValue", "year", 3, "nzLabel"], [3, "ngModel", "nzMode", "nzDisabledDate", "ngModelChange"], ["nz-col", "", "nzSpan", "4", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "disabled", "click"], ["src", "assets/icon/management/view.svg"], ["id", "chart-image", 2, "padding-top", "20px", "height", "92%"], ["id", "chart-sales-revenue"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "center-all-content"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "nzPlaceHolder", "ngModel", "nzOnSearch", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function SalesProfitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesProfitComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-segment", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SalesProfitComponent_Template_ion_segment_ngModelChange_11_listener($event) { return ctx.typeChart = $event; })("ngModelChange", function SalesProfitComponent_Template_ion_segment_ngModelChange_11_listener($event) { return ctx.updateChart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-segment-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-segment-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-segment-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SalesProfitComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.time = $event; })("ngModelChange", function SalesProfitComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.selectTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "nz-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "nz-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "nz-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SalesProfitComponent_Template_nz_date_picker_ngModelChange_27_listener($event) { return ctx.switchTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SalesProfitComponent_div_28_Template, 4, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesProfitComponent_Template_button_click_31_listener() { return ctx.downloadImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesProfitComponent_Template_button_click_36_listener() { return ctx.showReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 21, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 4 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 23, "Sales/Revenue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.typeChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 3 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 25, "Day"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 27, "Month"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 29, "Year"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 3 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.date.toISOString())("nzMode", ctx.time)("nzDisabledDate", ctx.disabledDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 31, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.id_branch_report.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 33, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 35, "Total revenue"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.total_revenue));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 37, "Total sales"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.total_sales));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzOptionComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__.NzDatePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   #chart-image[_ngcontent-%COMP%] {\n  padding: 0 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  --background: none;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: none;\n  --background: none;\n  --background-checked: none;\n  font-size: 0.9rem;\n  --indicator-box-shadow: none;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  margin-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\n.padd-cus[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.ant-picker[_ngcontent-%COMP%] {\n  width: 97%;\n  border-radius: 5px;\n  padding: 4px 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXByb2ZpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUNBO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFRjtBQURFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUdKO0FBREU7RUFDRSxlQUFBO0FBR0o7QUFERTtFQUNFLGFBQUE7QUFHSjtBQURJO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdOO0FBRk07RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBSVI7QUFIUTtFQUNFLGVBQUE7QUFLVjtBQUhRO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtBQUtWO0FBQUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFFO0VBQ0UsaUVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUdOO0FBQUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHTjtBQUNBOztFQUVFLGdDQUFBO0FBRUY7QUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FBSUY7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7QUFIQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBTUYiLCJmaWxlIjoic2FsZXMtcHJvZml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGkge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgI2NoYXJ0LWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDAgODBweDtcclxuICB9XHJcbiAgLmluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiBub25lO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG56LXNlbGVjdCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYnRuLWFkZCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmJ0bi12aWV3IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJnLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAuY2VudGVyLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5hbnQtYnRuOmZvY3VzLFxyXG4uYW50LWJ0bjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uc2l6ZS1pY29uIHtcclxuICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucGFkZC1jdXMge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmFudC1waWNrZXIge1xyXG4gIHdpZHRoOiA5NyU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 48634:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/sales-profit/sales-profit.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesProfitModule": () => (/* binding */ SalesProfitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sales_profit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-profit.component */ 54625);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _sales_profit_component__WEBPACK_IMPORTED_MODULE_0__.SalesProfitComponent
    }
];
class SalesProfitModule {
}
SalesProfitModule.ɵfac = function SalesProfitModule_Factory(t) { return new (t || SalesProfitModule)(); };
SalesProfitModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalesProfitModule });
SalesProfitModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesProfitModule, { declarations: [_sales_profit_component__WEBPACK_IMPORTED_MODULE_0__.SalesProfitComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_reports_sales-profit_sales-profit_module_ts.js.map