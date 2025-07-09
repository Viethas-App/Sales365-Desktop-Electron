"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_cafe-fnb_cafe-fnb_module_ts"],{

/***/ 83507:
/*!******************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-fnb/cafe-fnb-shared.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CafeFnbSharedService": () => (/* binding */ CafeFnbSharedService)
/* harmony export */ });
/* harmony import */ var _interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interface/vh-order-invoice */ 25500);
/* harmony import */ var _interface_vh_booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interface/vh-booking */ 97059);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 57039);
/* harmony import */ var _interface_vh_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);









class CafeFnbSharedService {
    constructor(vhAuth, vhQueryCafe, functionService, router, languageService) {
        this.vhAuth = vhAuth;
        this.vhQueryCafe = vhQueryCafe;
        this.functionService = functionService;
        this.router = router;
        this.languageService = languageService;
        /** Index của tab Area (khu vực) được chọn */
        this.indexTabArea = 0;
        /** Giá trị ô input search đơn go_home */
        this.searchValueAreaGoHome = '';
        /** ID của Area (khu vực) đang được chọn */
        this.selectedAreaID = 'go_home';
        /** ID của Bàn đang được chọn */
        this.selectedTableID = 'go_home';
        /** Hoá đơn đang được chọn */
        this.selectedBill = new _interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_0__.VhOrderInvoices({}, []);
        /** Có hiển thị modal thanh toán hay không */
        this.isShowModalPay = false;
        this.showConfigPrintKitchenElectron = false;
        this.filterType = 1;
        this.showConfigPrintKitchen = false; //  biến show modal cấu hình may in bếp
        /** Thông tin tài khoản employee hiện tại */
        this.user = this.vhAuth.getUser();
        /** Danh sách chi nhánh */
        this.branchList = [];
        this.showConfig = false; //  biến show modal cấu hình
        this.show_modal_choose_interface = false;
        this.modalAccountInfo = false; //show/hide moal thông tin tài khoản
        this.showConfigSales = false; //  biến show modal cấu hình trang bán hàng
        this.showConfigPrint = false; //  biến show modal cấu hình may in
        this.kitchens = this.vhQueryCafe.getlocalDispatcherZones();
        this.useBranch = this.functionService.checkUsingBranch();
        this.default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
        /** Danh sách tùy chọn bộ lọc */
        this.listFilter = [
            { value: 1, name: 'Latest' },
            { value: 2, name: 'Oldest' },
            { value: 3, name: 'Low to High value' },
            { value: 4, name: 'High to Low value' }
        ];
        this.listTables = [];
        this.listAllBills = []; // Danh sách tất cả đơn
        this.listBills = []; // Danh sách đơn hiển thị trên giao diện
        this.checkPrinter = false;
        this.checkPrinterKitchen = {};
        /** dữ liệu state truyền về */
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        /** Danh sách bill mang về dùng để search */
        this.billsGoHome = [];
        /** Danh sách bill mang về sẽ hiển thị */
        this.billsGoHomeShow = [];
        this.debt = false;
        /**Xử lý branches */
        this.branchDefault = {};
        this.display_promotion_selling_price = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
        /** Đã load xong bill và bill details hay chưa để hiển thị loading */
        this.isLoadedInvoice = false;
        this.isLoadedInvoice2 = false;
        // thông tin bàn đang được đặt
        this.tableInfo = '';
        this.nzOptions = [
            { value: 1, label: this.languageService.translate("Cash"), isLeaf: true },
            { value: 2, label: this.languageService.translate("Debit"), disabled: true, isLeaf: true },
            { value: 3, label: this.languageService.translate("Account"), children: [] }
        ];
        this.percent_discount = 0;
        this.invoice_cash = '';
        this.moneyEdit = {};
        /** BILL DETAIL */
        // trạng thái
        this.statusInvoice = {
            updating: false,
            deleting: false,
        };
        this.list_earning_point_bills = [];
        this.list_earning_points_products = [];
        this.default_price_type = 1;
        this.earning_point = 0;
        this.isGotPromotion = false;
        this.showProductGift = false;
        this.product_gift_type7 = [];
        this.showProductGiftType7 = false;
        this.gotten_gift_type7 = false;
        this.bill_details_pmtype_7 = [];
        this.showDrawerProductList = false;
        this.showDrawerEdit = false;
        this.showPrintKitchenAgain = false;
        // display_promotion_selling_price: boolean = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price
        this.printKitchen = {
            status: false,
            title: 'Add dishes',
            value: []
        };
        this.wishList = this.vhAuth.localStorageGET("show_best_selling");
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        this.warning_lot_expried = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
        this.dispatchers_enable = this.vhQueryCafe.getLocalAppSettingNameBranch("dispatchers_enable").dispatchers_enable;
        this.open_dialog_print_kitchen_bill_detail = this.vhQueryCafe.getLocalAppSettingNameBranch("dispatchers_enable").open_dialog_print_kitchen_bill_detail;
        this.id_branch = this.vhQueryCafe.getDefaultBranch()._id;
        this.show_modal_dispatcher = false;
        this.dispatcherzones = this.vhQueryCafe.getlocalDispatcherZones();
        this.id_dispatcherzone = this.vhQueryCafe.getlocalDispatcherZones().length ? this.vhQueryCafe.getlocalDispatcherZones().find(e => e.default)._id : '';
        this.management_product_price2 = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').management_product_price2;
        this.editPrice = {};
        this.customerList = [];
        this.customerSearchList = [];
        this.customer = '';
        this.showDrawerAddCustomer = false;
        this.showDrawerCustomerInfo = false;
        this.showDrawerAddRetail = false;
        this.showModalChangePriceType = false;
        this.showModalOtherDiscount = false;
        this.showModalSeparateTable = false;
        this.showModalChooseTableToSwitch = false;
        this.show_box_search = false;
        this.point_validity = 0;
        this.createStatus = false;
        this.customerProfile = {};
        this.invoice_discount = '';
        this.invoice_fee = '';
        this.invoice_note = '';
        this.value_discount_point = 0;
        this.product_codes = [];
        /** Danh sách sản phẩm */
        this.foodList = this.vhQueryCafe
            .getlocalDetailProducts()
            .filter((item) => item.type == _interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.DISHES || item.type == _interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.INGREDIENT)
            .filter((item) => !item.delete_hidden || item.manysize)
            .map((e) => {
            return Object.assign(Object.assign(Object.assign({}, e), e.units[e.units.findIndex(ele => ele.default)]), { ptype: e.type });
        });
        /**Danh sách dịch vụ */
        this.serviceList = this.vhQueryCafe
            .getlocalDetailProducts(_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.SERVICE_SERVICETIME)
            .filter((item) => !item.delete_hidden)
            .map((e) => {
            return Object.assign(Object.assign({}, e), e.units[0]);
        });
        /**Danh sách topping */
        this.sideDishesList = this.vhQueryCafe
            .getlocalProducts()
            .filter((item) => !item.delete_hidden && item.type == _interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.TOPPING)
            .map((e) => {
            return Object.assign(Object.assign({}, e), e.units[0]);
        });
        /**Danh sách combo */
        this.combosList = [];
        /** Danh sách sản phẩm đã tìm kiếm */
        this.searchList = [];
        /** Sản phẩm được chọn */
        this.choiceFoodSearch = {};
        /** Danh sách menu */
        this.list_menu = [];
        this.listTabs = [{ _id: 'all', name: 'All', type: 1 }];
        this.indexTab = 0;
        this.showOptions = false; // Hiển thị modal thêm món ăn
        this.isAddingFood = false; // Biến kiểm tra có đang thêm món ăn hay không
        this.tempVal = '';
        this.auto_hidden_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').auto_hidden_lot;
        this.auto_select_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').auto_select_lot;
        this.tempSearchType = [];
        this.isExit = false;
        this.productWishList = [];
        /** Mã quốc gia */
        this.countryCode = this.functionService.defaultCountryCode;
        /** Calling code */
        this.callingCode = this.functionService.defaultCallingCode;
        /** Số điện thoại đã format. VD: 333 333 333 */
        this.formattedPhone = '';
        /* --------------------------------------------------------------- BOOKING -------------------------------------------------------------- */
        /** Có hiện modal Thêm đặt bàn hay không */
        this.isShowModalBookingAdd = false;
        /** Đơn hàng từ Booking */
        this.bookingBill = new _interface_vh_booking__WEBPACK_IMPORTED_MODULE_1__.VhBookingInvoices({}, []);
        /** Booking object để lưu dữ liệu */
        this.bookingBillObject = {
            date: new Date(),
            id_customer: 'id_retail',
        };
        /** Thời gian hiện tại */
        this.today = new Date();
        /** Disabled date trước hiện tại */
        this.bookingDisabledDateBeforeNow = (current) => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(current, this.today) < 0;
        /** Disabled time trước hiện tại */
        this.bookingDisabledTimeBeforeNow = (current) => {
            if (!current) {
                return { nzDisabledHours: () => [], nzDisabledMinutes: () => [], nzDisabledSeconds: () => [] };
            }
            const now = new Date();
            // disbale thời gian trước hiện tại
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(current, this.today) === 0) {
                return {
                    nzDisabledHours: () => Array.from({ length: now.getHours() }, (_, i) => i),
                    nzDisabledMinutes: (hour) => hour === now.getHours() ? Array.from({ length: now.getMinutes() }, (_, i) => i) : [],
                    nzDisabledSeconds: () => []
                };
            }
            return { nzDisabledHours: () => [], nzDisabledMinutes: () => [], nzDisabledSeconds: () => [] };
        };
        /** Loại khách hàng ở Booking. 1: Khách lẻ, 2: Thành viên, 3 - Tìm khách hàng */
        this.bookingCustomerType = 1;
        /** Profile khách hàng được chọn trong Booking */
        this.bookingSelectedCustomerProfile = {};
        /** Có hiện modal Chọn bàn hay không */
        this.isShowModalBookingChooseTable = false;
        /** Có hiện modal Chọn món ăn hay không */
        this.isShowModalBookingChooseFood = false;
        /** Cho phép update lên database không */
        this.isUpdateToDatabase = true;
        /** Đã load danh sách Booking chưa */
        this.isLoadedBookingListBills = false;
        /** Danh sách tất cả bills của tab Booking */
        this.bookingListBills = [];
        /** Danh sách bills sẽ hiển thị của tab Booking */
        this.bookingListBillsShow = [];
        /** Loại hiển thị của modal-add-booking */
        this.modalAddBookingType = 'add';
        /** Để xác định phương thức sẽ gọi sau khi choose table */
        this.bookingChooseTableType = 'add';
        /** Dùng cho In bếp / bar oqr booking. Chứa trạng thái in, danh sách món sẽ in và tên bàn */
        this.bookingPrintKitchen = new Object({
            status: false,
            value: [],
            table_name: ''
        });
        /** Ngày bắt đầu và kết thúc để filter ở booking */
        this.bookingFilterDate = [new Date(), new Date()];
        /** Để xác định phương thức sẽ gọi sau khi choose-food (cart-detail) */
        this.bookingChooseFoodType = 'add';
        /** Danh sách 7 ngày từ ngày hôm nay để dùng ở tab Booking */
        this.daysList = [];
        /** Bộ lọc được chọn ở booking */
        this.selectedFilterDate = 'all';
        /**
         * Đếm số lượng hoá đơn theo key
         */
        this.bookingCountBill = {
            'all': 0,
            'overdue': 0,
            'upcoming': 0,
            'custom': '0',
            'Today': 0,
            'Tomorrow': 0,
            'Monday': 0,
            'Tuesday': 0,
            'Wednesday': 0,
            'Thursday': 0,
            'Friday': 0,
            'Saturday': 0,
            'Sunday': 0,
        };
        this.isSetObservableBill = false;
        /* --------------------------------------------------------------- IN TEM --------------------------------------------------------------- */
        /** Có hiện modal Chọn tem để in hay không */
        this.isShowModalSelectLabelPrint = false;
        /* ---------------------------------------------------------- DỊCH VỤ THỜI GIAN --------------------------------------------------------- */
        /** Thời gian mở bill, dùng để tính thời gian cho Dịch vụ thời gian */
        this.endTime = new Date();
        /** Có hiện modal Chỉnh sửa thời gian sử dụng hay không */
        this.isShowModalEditUsedTime = false;
        /* ----------------------------------------------------------- HÓA ĐƠN ĐIỆN TỬ ---------------------------------------------------------- */
        /** Ký tự động ngay khi gửi hóa đơn lên Cơ quan thuế */
        this.cqt_invoice_auto_sign = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_invoice_auto_sign;
        /** Gửi hóa đơn lên Cơ quan thuế ngay khi thanh toán */
        this.cqt_submit_invoice_immediately = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_immediately;
    }
}
CafeFnbSharedService.ɵfac = function CafeFnbSharedService_Factory(t) { return new (t || CafeFnbSharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService)); };
CafeFnbSharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CafeFnbSharedService, factory: CafeFnbSharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66762:
/*!*************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-fnb/cafe-fnb.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CafeFnbComponent": () => (/* binding */ CafeFnbComponent)
/* harmony export */ });
/* harmony import */ var _cafe_fnb_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cafe-fnb-shared.service */ 83507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



class CafeFnbComponent {
}
CafeFnbComponent.ɵfac = function CafeFnbComponent_Factory(t) { return new (t || CafeFnbComponent)(); };
CafeFnbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CafeFnbComponent, selectors: [["app-cafe-fnb"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_cafe_fnb_shared_service__WEBPACK_IMPORTED_MODULE_0__.CafeFnbSharedService])], decls: 1, vars: 0, template: function CafeFnbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["@charset \"UTF-8\";\n  .ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {\n  color: var(--ion-color-vh-green) !important;\n}\n  nz-tabset {\n  background-color: white;\n}\n  .ant-tabs-nav {\n  background-color: white;\n}\n  .ant-tabs-tab {\n  background-color: white;\n}\n\n  .custom-dialog {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n  .custom-dialog__backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.32);\n}\n  .custom-dialog__content {\n  z-index: 99999;\n  position: relative;\n  border-radius: 4px;\n  box-shadow: 0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f;\n  background: #fff;\n  color: #000000de;\n  animation: scale 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZmUtZm5iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDJDQUFBO0FBRUY7QUFDQTtFQUNFLHVCQUFBO0FBRUY7QUFDQTtFQUNFLHVCQUFBO0FBRUY7QUFDQTtFQUNFLHVCQUFBO0FBRUY7QUFDQSwySUFBQTtBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6ImNhZmUtZm5iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOjpuZy1kZWVwIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXNlbGVjdGVkIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIG56LXRhYnNldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLmFudC10YWJzLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLmFudC10YWJzLXRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ1VTVE9NIERJQUxPRyBEw5lORyBDSFVORyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2dfX2JhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZ19fY29udGVudCB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCAjMDAwMywgMCAyNHB4IDM4cHggM3B4ICMwMDAwMDAyNCwgMCA5cHggNDZweCA4cHggIzAwMDAwMDFmO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDAwMGRlO1xuICBhbmltYXRpb246IHNjYWxlIDAuM3M7XG59Il19 */"] });


/***/ }),

/***/ 81369:
/*!**********************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-fnb/cafe-fnb.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CafeFnbModule": () => (/* binding */ CafeFnbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _cafe_fnb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cafe-fnb.component */ 66762);
/* harmony import */ var ewa_components_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ewa-components-angular */ 3534);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_sales_keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/keyboard/keyboard.module */ 77621);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/time-ago.pipe */ 92917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    {
        path: '',
        component: _cafe_fnb_component__WEBPACK_IMPORTED_MODULE_0__.CafeFnbComponent,
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_services_bill_service_ts"), __webpack_require__.e("src_app_cafe_desktop_cafe-fnb_cafe-fnb-main_cafe-fnb-main_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cafe-fnb-main/cafe-fnb-main.module */ 93237)).then(m => m.CafeFnbMainModule),
            },
        ],
    },
];
class CafeFnbModule {
}
CafeFnbModule.ɵfac = function CafeFnbModule_Factory(t) { return new (t || CafeFnbModule)(); };
CafeFnbModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CafeFnbModule });
CafeFnbModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            ewa_components_angular__WEBPACK_IMPORTED_MODULE_5__.EwaComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_sales_keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_1__.KeyboardModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeAgoPipeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CafeFnbModule, { declarations: [_cafe_fnb_component__WEBPACK_IMPORTED_MODULE_0__.CafeFnbComponent], imports: [ewa_components_angular__WEBPACK_IMPORTED_MODULE_5__.EwaComponentsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
        src_app_sales_keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_1__.KeyboardModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeAgoPipeModule] }); })();


/***/ }),

/***/ 92917:
/*!*********************************************!*\
  !*** ./src/app/cafe/pipes/time-ago.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeAgoPipe": () => (/* binding */ TimeAgoPipe),
/* harmony export */   "TimeAgoPipeModule": () => (/* binding */ TimeAgoPipeModule)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



/**
 * Pipe để hiển thị thời gian đã qua từ thời gian truyền vào so với hiện tại.
 *
 * => 00:00:33, 00:42:35, 1 day, 2 months, 1 year, 2 years
 *
 * @example
 * <p>{{ myDate | timeAgo }}</p>
 */
class TimeAgoPipe {
    constructor(cdr, ngZone, translateService) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.translateService = translateService;
        /** Subscription của timer */
        this.timer = null;
        /** Giá trị thời gian hiển thị cuối cùng */
        this.lastTime = '';
        /** Giá trị đầu vào cuối cùng */
        this.lastInput = null;
        /** Subscription khi thay đổi ngôn ngữ */
        this.langChangeSubscription = null;
        // Khi ngôn ngữ thay đổi
        this.langChangeSubscription = this.translateService.onLangChange.subscribe((event) => {
            this.updateDisplayedTime(this.lastInput);
            this.cdr.markForCheck();
        });
    }
    transform(value) {
        if (!value)
            return '';
        /** So sánh nếu value với giá trị đầu vào cuối cùng nếu khác thì mới câp nhật lại giá trị hiển thị */
        if (value !== this.lastInput) {
            this.lastInput = value;
            this.startTimer(value);
            this.updateDisplayedTime(value);
        }
        return this.lastTime;
    }
    /**
     * Bắt đầu timer để cập nhật thời gian hiển thị
     */
    startTimer(value) {
        this.stopTimer();
        const inputDate = new Date(value);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);
        /** Thời gian giữa những lần cập nhật */
        let refreshInterval = 3600; // Mặc định: cập nhật mỗi giờ
        if (diffInSeconds < 86400) {
            refreshInterval = 1; // Nếu nhỏ hơn 1 ngày, cập nhật mỗi giây
        }
        else if (diffInSeconds < 604800) {
            refreshInterval = 60; // Nếu nhỏ hơn 1 tuần, cập nhật mỗi phút
        }
        else if (diffInSeconds < 2592000) {
            refreshInterval = 3600; // Nếu nhỏ hơn 1 tháng, cập nhật mỗi giờ
        }
        else {
            refreshInterval = 0; // Nếu lớn hơn 1 tháng, không cần cập nhật
        }
        if (refreshInterval > 0) {
            this.ngZone.runOutsideAngular(() => {
                this.timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(refreshInterval * 1000).subscribe(() => {
                    this.updateDisplayedTime(inputDate);
                    this.ngZone.run(() => this.cdr.markForCheck());
                });
            });
        }
    }
    /**
     * Hủy timer khi pipe bị hủy
     */
    stopTimer() {
        if (this.timer) {
            this.timer.unsubscribe();
            this.timer = null;
        }
    }
    /**
     * Cập nhật giá trị hiển thị
     * @param input
     */
    updateDisplayedTime(input) {
        const inputDate = new Date(input);
        const now = new Date();
        const diff = Math.floor((now.getTime() - inputDate.getTime()) / 1000);
        // Nếu nhỏ hơn 1 ngày, hiển thị theo định dạng HH:mm:ss
        if (diff < 86400) {
            const h = Math.floor(diff / 3600).toString().padStart(2, '0');
            const m = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
            const s = (diff % 60).toString().padStart(2, '0');
            this.lastTime = `${h}:${m}:${s}`;
        }
        // Nếu nhỏ hơn 1 tuần, hiển thị số ngày
        else if (diff < 604800) {
            const d = Math.floor(diff / 86400);
            this.lastTime = d + ' ' + this.translateService.instant('day' + (d > 1 ? 's' : ''));
        }
        // Nếu nhỏ hơn 1 tháng, hiển thị số tuần
        else if (diff < 2592000) {
            const w = Math.floor(diff / 604800);
            this.lastTime = w + ' ' + this.translateService.instant('week' + (w > 1 ? 's' : ''));
        }
        // Nếu nhỏ hơn 1 năm, hiển thị số tháng
        else if (diff < 31536000) {
            const mo = Math.floor(diff / 2592000);
            this.lastTime = mo + ' ' + this.translateService.instant('month' + (mo > 1 ? 's' : ''));
        }
        // Nếu lớn hơn 1 năm, hiển thị số năm
        else {
            const y = Math.floor(diff / 31536000);
            this.lastTime = y + ' ' + this.translateService.instant('year' + (y > 1 ? 's' : ''));
        }
    }
    ngOnDestroy() {
        this.stopTimer();
        if (this.langChangeSubscription) {
            this.langChangeSubscription.unsubscribe();
            this.langChangeSubscription = null;
        }
    }
}
TimeAgoPipe.ɵfac = function TimeAgoPipe_Factory(t) { return new (t || TimeAgoPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService, 16)); };
TimeAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "timeAgo", type: TimeAgoPipe, pure: false });
class TimeAgoPipeModule {
}
TimeAgoPipeModule.ɵfac = function TimeAgoPipeModule_Factory(t) { return new (t || TimeAgoPipeModule)(); };
TimeAgoPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TimeAgoPipeModule });
TimeAgoPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TimeAgoPipeModule, { declarations: [TimeAgoPipe], exports: [TimeAgoPipe] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_cafe-fnb_cafe-fnb_module_ts.js.map