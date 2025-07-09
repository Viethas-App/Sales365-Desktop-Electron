"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff"],{

/***/ 13222:
/*!***************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/viettelService/viettel.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViettelService": () => (/* binding */ ViettelService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class ViettelService {
    constructor(http) {
        this.http = http;
        this.URL_PRODUCT = 'https://partner.viettelpost.vn/v2';
        this.URL_SERVER = 'https://us-central1-servers-1b3fe.cloudfunctions.net/app/shippingclouds/viettelpost';
    }
    getTokenViettel(json) {
        let url = `${this.URL_PRODUCT}/user/Login`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': 'none' }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Lấy danh sách tỉnh
     * @returns
     */
    getProvinceViettel() {
        let url = `${this.URL_PRODUCT}/categories/listProvinceById?provinceId=`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': 'none' }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy huyện theo PROVINCE_ID
     * @param PROVINCE_ID
     * @returns
     */
    getDistrictViettel(PROVINCE_ID) {
        let url = `${this.URL_PRODUCT}/categories/listDistrict?provinceId=${PROVINCE_ID}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': 'none' }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy xã dựa trên huyện
     * @param DISTRICT_ID
     * @returns
     */
    getWardViettel(DISTRICT_ID) {
        let url = `${this.URL_PRODUCT}/categories/listWards?districtId=${DISTRICT_ID}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': 'none' }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Hàm lấy danh sách kho
     */
    getListInventory(token) {
        let url = `${this.URL_PRODUCT}/user/listInventory`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': token }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Hàm lấy danh sách những dịch vụ khả dụng
     */
    getServiceViettel(token, data) {
        let url = `${this.URL_PRODUCT}/order/getPriceAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': token }
        };
        let json = {
            SENDER_PROVINCE: data.SENDER_PROVINCE, SENDER_DISTRICT: data.SENDER_DISTRICT,
            RECEIVER_PROVINCE: data.RECEIVER_PROVINCE, RECEIVER_DISTRICT: data.RECEIVER_DISTRICT,
            PRODUCT_PRICE: data.PRODUCT_PRICE, PRODUCT_TYPE: "HH", TYPE: 1,
            PRODUCT_WEIGHT: data.PRODUCT_WEIGHT, MONEY_COLLECTION: data.MONEY_COLLECTION
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Hàm lấy giá cụ thể từng dịch vụ
     */
    getPriceSpeciallyViettel(token, data) {
        let url = `${this.URL_PRODUCT}/order/getPrice`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': token }
        };
        let json = {
            PRODUCT_WEIGHT: data.PRODUCT_WEIGHT, MONEY_COLLECTION: data.MONEY_COLLECTION,
            PRODUCT_PRICE: data.PRODUCT_PRICE, ORDER_SERVICE: data.ORDER_SERVICE,
            ORDER_SERVICE_ADD: data.ORDER_SERVICE_ADD,
            SENDER_PROVINCE: data.SENDER_PROVINCE, SENDER_DISTRICT: data.SENDER_DISTRICT,
            RECEIVER_PROVINCE: data.RECEIVER_PROVINCE, RECEIVER_DISTRICT: data.RECEIVER_DISTRICT,
            PRODUCT_TYPE: "HH", NATIONAL_TYPE: 1, PRODUCT_LENGTH: data.PRODUCT_LENGTH, PRODUCT_WIDTH: data.PRODUCT_WIDTH,
            PRODUCT_HEIGHT: data.PRODUCT_HEIGHT
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Hàm lấy giá cụ thể từng dịch vụ
     */
    createOrderViettelPost(token, data, billDetail, order_code) {
        let url = `${this.URL_PRODUCT}/order/createOrder`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': token }
        };
        let PRODUCT_NAME = '';
        let LIST_ITEM = billDetail.map(item => {
            PRODUCT_NAME += `${item.name_product} x ${item.quantity},`;
            return { PRODUCT_NAME: item.name_product, PRODUCT_PRICE: item.price, PRODUCT_QUANTITY: item.quantity };
        });
        PRODUCT_NAME = PRODUCT_NAME.substring(0, PRODUCT_NAME.length - 1);
        let json = {
            ORDER_NUMBER: order_code, GROUPADDRESS_ID: data.GROUPADDRESS_ID,
            CUS_ID: data.CUS_ID, DELIVERY_DATE: data.DELIVERY_DATE,
            SENDER_FULLNAME: data.SENDER_FULLNAME, SENDER_ADDRESS: data.SENDER_ADDRESS,
            SENDER_PHONE: data.SENDER_PHONE, SENDER_WARD: data.SENDER_WARD,
            SENDER_DISTRICT: data.SENDER_DISTRICT, SENDER_PROVINCE: data.SENDER_PROVINCE,
            RECEIVER_FULLNAME: data.RECEIVER_FULLNAME, RECEIVER_ADDRESS: data.RECEIVER_ADDRESS,
            RECEIVER_PHONE: data.RECEIVER_PHONE, RECEIVER_WARD: data.RECEIVER_WARD,
            RECEIVER_DISTRICT: data.RECEIVER_DISTRICT, RECEIVER_PROVINCE: data.RECEIVER_PROVINCE,
            PRODUCT_NAME: PRODUCT_NAME, PRODUCT_QUANTITY: LIST_ITEM[0].PRODUCT_QUANTITY,
            PRODUCT_PRICE: data.PRODUCT_PRICE, PRODUCT_WEIGHT: data.PRODUCT_WEIGHT,
            PRODUCT_LENGTH: data.PRODUCT_LENGTH, PRODUCT_WIDTH: data.PRODUCT_WIDTH,
            PRODUCT_HEIGHT: data.PRODUCT_HEIGHT, PRODUCT_TYPE: "HH", ORDER_PAYMENT: data.ORDER_PAYMENT,
            ORDER_SERVICE: data.ORDER_SERVICE, ORDER_SERVICE_ADD: data.ORDER_SERVICE_ADD,
            ORDER_NOTE: data.ORDER_NOTE, MONEY_COLLECTION: data.MONEY_COLLECTION,
            MONEY_TOTALFEE: 0, MONEY_FEECOD: 0, MONEY_FEEVAS: 0,
            MONEY_FEEINSURRANCE: 0, MONEY_FEE: 0, MONEY_FEEOTHER: 0,
            MONEY_TOTALVAT: 0, MONEY_TOTAL: 0, LIST_ITEM: LIST_ITEM
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Hàm lấy giá cụ thể từng dịch vụ
     */
    cancelOrderViettel(token, order_code) {
        let url = `${this.URL_PRODUCT}/order/UpdateOrder`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'token': token }
        };
        let json = {
            TYPE: 4,
            ORDER_NUMBER: order_code
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    renderFormatPrintOrder(delivery) {
        return {
            created: delivery.created, customer_fullname: delivery.RECEIVER_FULLNAME,
            customer_tel: delivery.RECEIVER_PHONE, address: `${delivery.WARDS_NAME}, ${delivery.DISTRICT_NAME}, ${delivery.PROVINCE_NAME}`,
            ship_money: delivery.MONEY_TOTAL, insurance: 0,
            pick_money: typeof delivery.MONEY_COLLECTION == 'string' ? +delivery.MONEY_COLLECTION.replaceAll(',', '') : delivery.MONEY_COLLECTION,
            is_freeship: delivery.ORDER_PAYMENT == '3' ? 1 : 0
        };
    }
}
ViettelService.ɵfac = function ViettelService_Factory(t) { return new (t || ViettelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ViettelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViettelService, factory: ViettelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 68125:
/*!*************************************************!*\
  !*** ./src/app/sales/services/theme.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class ThemeService {
    constructor(vhAuth, http) {
        this.vhAuth = vhAuth;
        this.http = http;
        /** Danh sách font-size để chọn */
        this.fontSizeList = [12, 13, 14, 15, 16, 17, 18, 19, 20];
        /** Font-size đang được chọn */
        this.selectedFontSize = parseFloat(localStorage.getItem('vh-sales-system-fontsize')) || 14;
        /** Danh sách màu để chọn */
        this.themeList = [
            { theme: 'gray-theme', color: '#7F7F7F' },
            { theme: 'orange-theme', color: '#FF7F26' },
            { theme: 'yellow-theme', color: '#f1c40f' },
            { theme: 'green-theme', color: '#23B14D' },
            { theme: 'sky-blue-theme', color: '#00A2E8' },
            { theme: 'blue-theme', color: '#1877F2' },
            { theme: 'dark-blue-theme', color: '#3F47CC' },
            { theme: 'purple-theme', color: '#A349A3' },
            { theme: 'red-theme', color: '#DA2127' },
            // { theme: 'sapo-theme', color: '#0088FF' },
        ];
        /** Danh sách giao diện của cửa hàng */
        this.salesTemplates = [];
        this.country_code = 'VN';
        this.language = 'vi';
        this.getSalesTemplate()
            .then((templates) => {
            this.salesTemplates = templates;
        })
            .catch((error) => {
            console.error('Error loading templates:', error);
        });
    }
    /**
     * Thiết lập lại font-size hiển thị trên app
     * @param fontSize Font-size cần thay đổi
     */
    changeFontSize(fontSize) {
        localStorage.setItem('vh-sales-system-fontsize', JSON.stringify(fontSize));
        this.selectedFontSize = fontSize;
        document.documentElement.style.fontSize = fontSize + 'px';
    }
    /**
     * Thiết lập lại màu theme hiển thị trên app
     * @param theme Tên theme cần thay đổi
     * @param event
     */
    changeColor(theme, event) {
        this.vhAuth.changeTheme(theme, event);
    }
    /**
     * Lấy main_sector của cửa hàng
     * @returns main_sector của cửa hàng
     */
    getStoreMainSector() {
        return this.vhAuth.getStore().main_sector;
    }
    /**
     * Lấy giao diện theo main_sector của cửa hàng
     * @returns Giao diện của cửa hàng
     */
    getSalesTemplate() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`assets/documents/configuration/template/${this.country_code}/${this.getStoreMainSector()}.json`)
                .subscribe({
                next: (templates) => {
                    if (templates && templates[this.language]) {
                        resolve(templates[this.language]); // ✅ Resolve with the data
                    }
                    else {
                        reject('No templates found for this language');
                    }
                },
                error: (error) => {
                    reject(error); // ❌ Reject on HTTP error
                },
            });
        });
    }
    getThemeValue() {
        return this.vhAuth.getThemeValue() || 'sky-blue-theme';
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_sales_menu_manage_delivery_services_viettelService_viettel_service_ts-src_app-4444ff.js.map