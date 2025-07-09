"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_reports_sales-profit_sales-profit_module_ts"],{

/***/ 81689:
/*!*********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/reports/sales-profit/sales-profit.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesProfitComponent": () => (/* binding */ SalesProfitComponent)
/* harmony export */ });
/* harmony import */ var date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/differenceInCalendarDays */ 57039);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 41488);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function SalesProfitComponent_div_28_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, option_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzValue", option_r2._id);
} }
function SalesProfitComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SalesProfitComponent_div_28_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.id_branch_report = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SalesProfitComponent_div_28_nz_option_3_Template, 2, 4, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "Select branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.id_branch_report);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
} }
class SalesProfitComponent {
    constructor(lang, vhAlgorithm, vhQueryCafe, datePipe, vhComponent, router, fncService, vhAuth) {
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.datePipe = datePipe;
        this.vhComponent = vhComponent;
        this.router = router;
        this.fncService = fncService;
        this.vhAuth = vhAuth;
        this.total_sales = 0;
        this.total_revenue = 0;
        this.startTime = new Date;
        this.endTime = new Date;
        this.useBranch = this.fncService.checkUsingBranch();
        this.branchList = [];
        this.id_branch_report = '';
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
            return (0,date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_5__.default)(current, this.today) > 0;
        };
        /**zorro modal */
        this.checked = true;
        this.isVisible = false;
        this.initTime();
        this.getBranches();
    }
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
     * get chi nhánh được xem báo cáo của user
     */
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
        }
        else
            this.id_branch_report = defaultBranch; // chỉ xài 1 chi nhánh 
    }
    /**
     * khởi tạo và gán giá trị cho chart
     * @param categories
     * @param revenue_value
     * @param sales_value
     * @returns
     */
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
            noData: { text: this.lang.translate(this.data[this.time] ? "No data" : "View") },
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
     * cập nhật lại dữ liệu chart
     * @param typeChart
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
                this.getData(this.time).then(() => this.changeTime(this.time));
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
        this.firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
        this.lastDayOfMonth = new Date(this.firstDayOfMonth.getTime() + 86400000 * this.vhAlgorithm.getNumberOfDaysInMonth(date.getFullYear(), date.getMonth() + 1) - 1);
        // this.doRefresh()
    }
    /**
     * thay đổi thời gian theo nằm
     */
    setYear(value) {
        let date = new Date(value);
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
                this.vhQueryCafe.getReportRevenue_byHoursOut_hourArray(this.startTime, this.endTime, arrayHours, this.id_branch_report),
                this.vhQueryCafe.getReportSales_byHoursOut_hourArray(this.startTime, this.endTime, arrayHours, this.id_branch_report)
            ]).then(([{ docs: docs_revenue, revenue }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.data['date'] = {
                    arrayHours: arrayHours,
                    categories: arrayHours.map(item => ` ${item}h `),
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.total_sales = sales_atax;
                this.total_revenue = revenue;
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
                this.vhQueryCafe.getReportRevenue_byDaysOut_dayArray(this.firstDayOfMonth, this.lastDayOfMonth, arrayDayMonth, this.id_branch_report),
                this.vhQueryCafe.getReportSales_byDaysOut_dayArray(this.firstDayOfMonth, this.lastDayOfMonth, arrayDayMonth, this.id_branch_report)
            ]).then(([{ docs: docs_revenue, revenue }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.data['month'] = {
                    categories: arrayDayMonth,
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.total_sales = sales_atax;
                this.total_revenue = revenue;
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
                this.vhQueryCafe.getReportRevenue_byMonthsOut_monthArray(this.firstDayOfYear, this.lastDayOfYear, arrayMonthYear, this.id_branch_report),
                this.vhQueryCafe.getReportSales_byMonthsOut_monthArray(this.firstDayOfYear, this.lastDayOfYear, arrayMonthYear, this.id_branch_report)
            ]).then(([{ docs: docs_revenue, revenue }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.data['year'] = {
                    categories: key,
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.total_sales = sales_atax;
                this.total_revenue = revenue;
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
            case "month": return `${this.lang.translate("_sales_revenue_report")}_${this.firstDayOfMonth.getMonth() + 1}_${this.firstDayOfMonth.getFullYear()}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQueryCafe.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
            case "year": return `${this.lang.translate("_sales_revenue_report")}_${this.firstDayOfMonth.getFullYear()}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQueryCafe.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
            default: return `${this.lang.translate("_sales_revenue_report")}_${this.format_date(this.startTime)}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQueryCafe.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
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
        this.status = true;
        this.vhComponent.downloadImg("chart-image", this.renderNameExport()).then(() => this.status = false);
    }
    format_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy");
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/report']);
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        this.isVisible = false;
    }
    handleCancel() {
        this.isVisible = false;
    }
}
SalesProfitComponent.ɵfac = function SalesProfitComponent_Factory(t) { return new (t || SalesProfitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth)); };
SalesProfitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SalesProfitComponent, selectors: [["app-sales-profit"]], decls: 53, vars: 39, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "height-layout"], ["nz-row", "", 1, "height-header", 2, "height", "8%"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", "nzSpan", "6", "id", "segment", 1, "info"], ["mode", "ios", 3, "ngModel", "ngModelChange"], ["value", "bar"], ["name", "bar-chart-outline"], ["value", "line"], ["src", "assets/icon/global/line-chart.svg"], ["value", "area"], ["src", "assets/icon/global/area-chart.svg"], ["nz-col", "", 1, "center-all-content", 3, "nzSpan"], [3, "ngModel", "ngModelChange"], ["nzValue", "date", 3, "nzLabel"], ["nzValue", "month", 3, "nzLabel"], ["nzValue", "year", 3, "nzLabel"], [3, "ngModel", "nzMode", "nzDisabledDate", "ngModelChange"], ["nz-col", "", "nzSpan", "4", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "disabled", "click"], ["src", "assets/icon/management/view.svg"], ["id", "chart-image", 2, "padding-top", "20px", "height", "92%"], ["id", "chart-sales-revenue", 2, "height", "calc(100% - 20px)"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "center-all-content"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function SalesProfitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesProfitComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SalesProfitComponent_Template_ion_segment_ngModelChange_11_listener($event) { return ctx.typeChart = $event; })("ngModelChange", function SalesProfitComponent_Template_ion_segment_ngModelChange_11_listener($event) { return ctx.updateChart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-segment-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-segment-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-segment-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "nz-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SalesProfitComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.time = $event; })("ngModelChange", function SalesProfitComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.selectTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "nz-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "nz-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "nz-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SalesProfitComponent_Template_nz_date_picker_ngModelChange_27_listener($event) { return ctx.switchTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, SalesProfitComponent_div_28_Template, 4, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesProfitComponent_Template_button_click_31_listener() { return ctx.downloadImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesProfitComponent_Template_button_click_36_listener() { return ctx.showReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 21, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 3 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 23, "Sales/Revenue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.typeChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 3 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 25, "Today"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 27, "The month"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 29, "The year"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 3 : 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.date.toISOString())("nzMode", ctx.time)("nzDisabledDate", ctx.disabledDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 31, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.id_branch_report.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 33, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](45, 35, "Total revenue"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.total_revenue));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 37, "Total sales"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.total_sales));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzOptionComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__.NzDatePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   #chart-image[_ngcontent-%COMP%] {\n  padding: 0 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  --background: none;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: none;\n  --background: none;\n  --background-checked: none;\n  font-size: 0.9rem;\n  --indicator-box-shadow: none;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  margin-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\n.padd-cus[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.ant-picker[_ngcontent-%COMP%] {\n  width: 97%;\n  border-radius: 5px;\n  padding: 4px 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXByb2ZpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksZUFBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0FBR1I7QUFEUTtFQUNJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUloQjtBQUhnQjtFQUNJLGVBQUE7QUFLcEI7QUFIZ0I7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FBS3BCO0FBQUk7RUFDSSxVQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGlFQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRVI7QUFEUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBRVI7QUFEUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR1o7QUFDQTs7RUFFSSxnQ0FBQTtBQUVKO0FBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBR0o7QUFEQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBQUlKO0FBRkE7RUFDSSxnQkFBQTtBQUtKO0FBSEE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQU1KIiwiZmlsZSI6InNhbGVzLXByb2ZpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgI2NoYXJ0LWltYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAvL2p1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgaW9uLXNlZ21lbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcbiAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5idG4tdmlldyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJnLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICAuY2VudGVyLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5hbnQtYnRuOmZvY3VzLFxyXG4uYW50LWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uc2l6ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBhZGQtY3VzIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmFudC1waWNrZXIge1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 58862:
/*!******************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/reports/sales-profit/sales-profit.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesProfitModule": () => (/* binding */ SalesProfitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sales_profit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-profit.component */ 81689);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: "",
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
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesProfitModule, { declarations: [_sales_profit_component__WEBPACK_IMPORTED_MODULE_0__.SalesProfitComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_reports_sales-profit_sales-profit_module_ts.js.map