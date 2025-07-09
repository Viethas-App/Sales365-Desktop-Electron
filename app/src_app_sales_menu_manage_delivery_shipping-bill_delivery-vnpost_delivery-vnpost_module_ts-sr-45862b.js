"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_delivery_shipping-bill_delivery-vnpost_delivery-vnpost_module_ts-sr-45862b"],{

/***/ 96057:
/*!******************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/vnpostPost/vnpost-service.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VnpostService": () => (/* binding */ VnpostService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class VnpostService {
    constructor(http) {
        this.http = http;
        this.URL_TEST = 'https://donhang-uat.vnpost.vn/api/api';
        this.URL_PRODUCT = 'https://donhang.vnpost.vn/api/api';
        this.URL_SERVER = 'https://us-central1-servers-1b3fe.cloudfunctions.net/app/shippingclouds/vietnampost';
        this.TenDangNhap = '0909925354';
        this.MatKhau = '123456';
    }
    getTokenVnpost() {
        let url = `${this.URL_PRODUCT}/MobileAuthentication/GetAccessToken`;
        let json = {
            TenDangNhap: this.TenDangNhap,
            MatKhau: this.MatKhau
        };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': 'none' }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Kiểm tra xem liệu khách hàng đã có mã CRM và đã ủy quyền cho Viethas đẩy đơn hay chưa
     * @param token
     * @param customer_code
     * @returns
     */
    checkCustomerCode(token, customer_code) {
        let url = `${this.URL_PRODUCT}/DoiTac/CheckCustomerCode`;
        let json = { CustomerCode: customer_code };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Lấy danh sách tỉnh / thành phố theo Vnpost
     * @returns
     */
    getProvinceVnpost() {
        let url = `${this.URL_PRODUCT}/TinhThanh/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy danh sách quận/huyện theo Vnpost
     * @returns
     */
    getDistrictVnpost() {
        let url = `${this.URL_PRODUCT}/QuanHuyen/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy danh sách phường/xã theo Vnpost
     * @returns
     */
    getWardVnpost() {
        let url = `${this.URL_PRODUCT}/PhuongXa/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Hàm này lấy danh sách tên các phương thức vận chuyển
     */
    getServiceNameVnpost(token, json) {
        let url = `${this.URL_PRODUCT}/DoiTac/TinhCuocTatCaDichVu`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Tạo order vnpost
     */
    createOrderVnpost(token, json) {
        let url = `${this.URL_PRODUCT}/DoiTac/CreateOrder`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Tạo order vnpost
     */
    getDetailOrderById(token, Id) {
        let url = `${this.URL_PRODUCT}/Order/GetOrder/${Id}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, null, opptions).toPromise();
    }
    /**
     * Delelte order vnpost
     */
    deleteOrderVnpostByID(token, Id) {
        let url = `${this.URL_PRODUCT}/DoiTac/CancelOrder`;
        let json = { OrderId: Id };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    // --------------------------------CÁC HÀM XỬ LÝ DỮ LIỆU-------------------------------------------
    /**
     * Hàm này để custom dữ liệu cho hàm getServiceNameVnpost
     */
    renderFormatService(infoSend, infoRecei, infoProd, infoDeli, CustomerCode) {
        return {
            SenderDistrictId: infoSend.SenderDistrictId, SenderProvinceId: infoSend.SenderProvinceId,
            ReceiverDistrictId: infoRecei.ReceiverDistrictId, ReceiverProvinceId: infoRecei.ReceiverProvinceId,
            Weight: infoProd.WeightEvaluation, Width: infoProd.WidthEvaluation,
            Length: infoProd.LengthEvaluation, Height: infoProd.HeightEvaluation,
            CodAmount: +infoDeli.CodAmountEvaluation, IsReceiverPayFreight: infoDeli.IsReceiverPayFreight,
            OrderAmount: +infoDeli.OrderAmountEvaluation, UseBaoPhat: false, UseHoaDon: false,
            UseNhanTinSmsNguoiNhanTruocPhat: false, UseNhanTinSmsNguoiNhanSauPhat: false,
            CustomerCode: CustomerCode
        };
    }
    /**
     * Hàm này để custom dữ liệu cho hàm createOrderVnpost
     */
    renderFormatCreateOrder(infoSend, infoRecei, infoProd, infoDeli, CustomerCode, bill_code) {
        return {
            SenderDistrictId: infoSend.SenderDistrictId, SenderProvinceId: infoSend.SenderProvinceId,
            SenderTel: infoSend.SenderTel, SenderFullname: infoSend.SenderFullname, SenderAddress: infoSend.SenderAddress,
            SenderWardId: infoSend.SenderWardId, ReceiverTel: infoRecei.ReceiverTel, ReceiverFullname: infoRecei.ReceiverFullname,
            ReceiverAddress: infoRecei.ReceiverAddress, ReceiverWardId: infoRecei.ReceiverWardId,
            ReceiverAddressType: infoDeli.ReceiverAddressType == 0 ? null : infoDeli.ReceiverAddressType, ServiceName: infoDeli.ServiceName, OrderCode: bill_code,
            CustomerNote: infoDeli.CustomerNote, PickupType: 1,
            ReceiverDistrictId: infoRecei.ReceiverDistrictId, ReceiverProvinceId: infoRecei.ReceiverProvinceId,
            WeightEvaluation: infoProd.WeightEvaluation, WidthEvaluation: infoProd.WidthEvaluation,
            LengthEvaluation: infoProd.LengthEvaluation, HeightEvaluation: infoProd.HeightEvaluation,
            CodAmountEvaluation: +infoDeli.CodAmountEvaluation, IsReceiverPayFreight: infoDeli.IsReceiverPayFreight,
            OrderAmountEvaluation: +infoDeli.OrderAmountEvaluation, UseBaoPhat: false, UseHoaDon: false,
            PickupPoscode: "", CustomerCode: CustomerCode,
            UseNhanTinSmsNguoiNhanTruocPhat: false, UseNhanTinSmsNguoiNhanSauPhat: false
        };
    }
    renderFormatPrintOrder(delivery) {
        return {
            created: delivery.CreateTime, customer_fullname: delivery.ReceiverFullname,
            customer_tel: delivery.ReceiverTel, address: delivery.ReceiverFullAddress,
            ship_money: delivery.TotalFreightIncludeVatEvaluation, insurance: 0,
            is_freeship: delivery.IsReceiverPayFreight ? 0 : 1, CodAmountEvaluation: delivery.CodAmountEvaluation
        };
    }
}
VnpostService.ɵfac = function VnpostService_Factory(t) { return new (t || VnpostService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
VnpostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VnpostService, factory: VnpostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36280:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-vnpost/create-bill-customer-vnpost/create-bill-customer-vnpost.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillCustomerVnpostComponent": () => (/* binding */ CreateBillCustomerVnpostComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/vnpostPost/vnpost-service.service */ 96057);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _carrier_partner_components_vnpost_component_list_address_vnpost_list_address_vnpost_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../carrier-partner/components/vnpost-component/list-address-vnpost/list-address-vnpost.component */ 18851);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



























function CreateBillCustomerVnpostComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillCustomerVnpostComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r25.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r25.hasError("required"));
} }
function CreateBillCustomerVnpostComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Invalid phone number"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillCustomerVnpostComponent_ng_template_34_ng_container_1_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r28.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r28.hasError("minLength") || control_r28.hasError("maxLength"));
} }
function CreateBillCustomerVnpostComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r4.data_delivery_recei.ReceiverFullname, " - ", ctx_r4.data_delivery_recei.ReceiverTel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate4"](" ", ctx_r4.data_delivery_recei.ReceiverAddress, ", ", ctx_r4.data_delivery_recei.TenPhuongXa, ", ", ctx_r4.data_delivery_recei.TenQuanHuyen, " , ", ctx_r4.data_delivery_recei.TenTinhThanh, " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function CreateBillCustomerVnpostComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r31.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r31.quantity, " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_83_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_83_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Weight must be greater than 0"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_83_ng_container_0_Template, 3, 3, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillCustomerVnpostComponent_ng_template_83_ng_container_1_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r32.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r32.hasError("min"));
} }
function CreateBillCustomerVnpostComponent_ng_template_96_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_96_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r35.hasError("required"));
} }
function CreateBillCustomerVnpostComponent_ng_template_109_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_109_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r37.hasError("required"));
} }
function CreateBillCustomerVnpostComponent_ng_template_122_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_122_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r39.hasError("required"));
} }
function CreateBillCustomerVnpostComponent_ng_template_141_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_141_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r41.hasError("required"));
} }
function CreateBillCustomerVnpostComponent_ng_template_155_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillCustomerVnpostComponent_ng_template_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillCustomerVnpostComponent_ng_template_155_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r43.hasError("required"));
} }
function CreateBillCustomerVnpostComponent_ng_container_174_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-option", 52);
} if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", item_r45.MaDichVu)("nzLabel", item_r45.TenDichVu);
} }
function CreateBillCustomerVnpostComponent_ng_container_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillCustomerVnpostComponent_ng_container_174_nz_option_1_Template, 1, 2, "nz-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r21.isLoading);
} }
function CreateBillCustomerVnpostComponent_nz_option_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillCustomerVnpostComponent_tr_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "Total COD amount to be collected from recipient"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r23.vhAlgorithm.vhcurrencyunit(ctx_r23.deliveryInfo.value.IsReceiverPayFreight ? ctx_r23.serviceSelected.SoTienCodThuNoiNguoiNhan || 0 : 0));
} }
const _c0 = function (a0, a1, a2) { return { _id: a0, ReceiverFullname: a1, ReceiverTel: a2 }; };
function CreateBillCustomerVnpostComponent_app_list_address_vnpost_225_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-list-address-vnpost", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cancelListVnpost", function CreateBillCustomerVnpostComponent_app_list_address_vnpost_225_Template_app_list_address_vnpost_cancelListVnpost_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r48.cancelListVnpost($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id_delivery", ctx_r24.dataRestore.data_delivery._id)("pickupAdresssVnpost", ctx_r24.pickupAdresssVnpost)("customer", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](4, _c0, ctx_r24.dataRestore.billInfo.id_customer, ctx_r24.addInformation.value.ReceiverFullname, ctx_r24.addInformation.value.ReceiverTel))("type", 6);
} }
const _c1 = function (a0) { return { y: a0 }; };
class CreateBillCustomerVnpostComponent {
    constructor(router, vhComponent, vhQuerySales, lang, vhAlgorithm, vnPost, cdRef, modalService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.vnPost = vnPost;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.billDetails = [];
        this.data_delivery_recei = {};
        this.serviceSelected = {};
        this.listProvinceVnpost = [];
        this.listDistrictVnpost = [];
        this.listWardVnpost = [];
        this.listServiceVnpost = [];
        this.isLoading = false;
        this.dataAddress = { TenTinhThanh: '', TenQuanHuyen: '', TenPhuongXa: '' };
        this.heightScroll = '100px';
        this.checkPrinter = false;
        // ----------modal list address pickup---------
        this.pickupAdresssVnpost = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        let customer = this.vhQuerySales.getlocalCustomer(this.dataRestore.billInfo.id_customer);
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            ReceiverFullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(customer.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]),
            ReceiverTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(customer.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]),
            ReceiverAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            ReceiverProvinceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            ReceiverDistrictId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            ReceiverWardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            ServiceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            CustomerNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            ReceiverAddressType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(0),
            IsReceiverPayFreight: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(false),
            CodAmountEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(0),
            OrderAmountEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(0),
            IsPackageViewable: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(true),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            WeightEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0.0000000000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(1000000)]),
            WidthEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(100)]),
            LengthEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(100)]),
            HeightEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(100)]),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.CodAmountEvaluation = this.vhAlgorithm.vhnumeral('.CodAmountEvaluation');
            this.OrderAmountEvaluation = this.vhAlgorithm.vhnumeral('.OrderAmountEvaluation');
        });
    }
    ngAfterViewChecked() {
        if (document.querySelector('productInfo'))
            this.heightScroll = document.querySelector('productInfo').clientHeight - 156 + 'px';
        this.cdRef.detectChanges();
    }
    //lấy dữ liệu billDetail
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.refreshLocalAddresss(),
                this.vhQuerySales.refreshLocalDeliverys(),
            ]).then(() => {
                this.vhQuerySales.getBill_details_byId_bill(this.dataRestore.billInfo._id).then((result) => {
                    this.vhComponent.hideLoading(0);
                    this.billDetails = result.map(item => {
                        let name_product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                        return Object.assign(Object.assign({}, item), { name_product: name_product });
                    });
                    this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.dataRestore.billInfo, this.billDetails, this.vhQuerySales);
                    //lấy địa chỉ lấy hàng
                    let listAddresss = this.vhQuerySales.getlocalAddresss().filter(item => item.id_delivery == this.dataRestore.data_delivery._id && item.type == 5);
                    this.data_delivery = listAddresss.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];
                    //lấy địa chỉ giao hàng
                    let listAddresssRecei = this.vhQuerySales.getlocalAddresss().filter(item => item.id_delivery == this.dataRestore.data_delivery._id && item.type == 6 && item.id_customer == this.dataRestore.billInfo.id_customer);
                    this.data_delivery_recei = listAddresssRecei.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];
                    this.data_delivery_recei && this.attatchDataAddressToForm(this.data_delivery_recei);
                    let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                    if (printer)
                        this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
                }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
            });
        });
    }
    goBack(success) {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-vnpost"], {
            state: { dataRestore: this.dataRestore }
        });
    }
    /**
     * Hàm này để chuyển đưa dữ liệu vào form nếu có
     * @param receive
     */
    attatchDataAddressToForm(receive) {
        this.addInformation.controls.ReceiverAddress.setValue(receive.ReceiverAddress);
        this.addInformation.controls.ReceiverProvinceId.setValue(receive.ReceiverProvinceId);
        this.addInformation.controls.ReceiverDistrictId.setValue(receive.ReceiverDistrictId);
        this.addInformation.controls.ReceiverWardId.setValue(receive.ReceiverWardId);
    }
    createOrder(print) {
        this.modalService.confirm({
            nzTitle: this.lang.translate("Do you want to create order ?"),
            nzCancelText: this.lang.translate("Cancel"),
            nzOnOk: () => {
                return new Promise((resolve) => {
                    let data_deli = Object.assign(Object.assign({}, this.deliveryInfo.value), { CodAmountEvaluation: this.CodAmountEvaluation.getRawValue(), OrderAmountEvaluation: this.OrderAmountEvaluation.getRawValue() });
                    let delivery = this.vhQuerySales.getlocalDelivery(this.data_delivery.id_delivery);
                    this.vnPost.createOrderVnpost(delivery.Token, this.vnPost.renderFormatCreateOrder(this.data_delivery, this.addInformation.value, this.productInfo.value, data_deli, delivery.CustomerCode, this.dataRestore.billInfo.bill_code)).then((response) => {
                        if (response.Id) {
                            this.invoice.setOrderCode(response.Id);
                            this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then((data) => {
                                resolve(true);
                                this.dataRestore.reload = true;
                                this.vhComponent.alertMessageDesktop('success', this.lang.translate('Create order successfully !'));
                                if (print)
                                    this.showPrint(response);
                                else
                                    this.goBack();
                            });
                        }
                    }).catch(err => { this.vhComponent.alertMessageDesktop('error', err); });
                });
            },
            nzOnCancel: () => { },
        });
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    showPrint(res) {
        this.checkPrint().then((printer) => {
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: Object.assign(Object.assign({}, this.dataRestore.billInfo), { data: this.vnPost.renderFormatPrintOrder(Object.assign(Object.assign({}, res), { ReceiverFullAddress: `${this.addInformation.value.ReceiverAddress}, ${this.data_delivery_recei.TenPhuongXa},  ${this.data_delivery_recei.TenQuanHuyen},  ${this.data_delivery_recei.TenQuanHuyen}` })), order_code: res.ItemCode }),
                billDetails: this.billDetails,
                data_delivery: Object.assign(Object.assign({}, this.data_delivery), { type: 4 }),
                printer
            }, false, false, `modal-print-${printer['type']}`).then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack(true);
                });
            });
        }, (err) => {
            this.goBack(true);
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            default: return src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryA45Component;
        }
    }
    //------------------------------------Xã huyện tỉnh------------------------------------
    getAllService(change) {
        if (this.addInformation.valid && this.productInfo.valid) {
            let data_deli = Object.assign(Object.assign({}, this.deliveryInfo.value), { CodAmountEvaluation: this.CodAmountEvaluation.getRawValue(), OrderAmountEvaluation: this.OrderAmountEvaluation.getRawValue() });
            this.listServiceVnpost = [];
            this.isLoading = true;
            let delivery = this.vhQuerySales.getlocalDelivery(this.data_delivery.id_delivery);
            this.vnPost.getServiceNameVnpost(delivery.Token, this.vnPost.renderFormatService(this.data_delivery, this.addInformation.value, this.productInfo.value, data_deli, delivery.CustomerCode)).then((result) => {
                result.forEach(item => {
                    if (item.Success) {
                        item.TenDichVu = this.renderNameService(item.MaDichVu, item.TongCuocBaoGomDVCT);
                        this.listServiceVnpost.push(item);
                        change && this.changeService(change);
                    }
                });
                this.isLoading = false;
            });
        }
    }
    changeService(event) {
        this.serviceSelected = this.listServiceVnpost.find(item => item.MaDichVu == event);
    }
    renderNameService(MaDichVu, TongCuocBaoGomDVCT) {
        switch (MaDichVu) {
            case 'EMS': return `${this.lang.translate('Chuyển phát nhanh')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'BK': return `${this.lang.translate('Chuyển phát thường')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'TMDT_EMS': return `TMDT_EMS - ${this.lang.translate('TMĐT-Chuyển phát nhanh EMS ')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'TMDT_BK': return `TMDT_BK - ${this.lang.translate('TMĐT-Chuyển phát tiêu chuẩn')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'TMDT_EMS_TK': return `TMDT_EMS_TK - ${this.lang.translate('TMĐT-Chuyển phát nhanh EMS tiết kiệm (liên vùng)')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
        }
    }
    /**Thay đổi tiền thu hộ */
    changeCodAmountEvaluation() {
        (this.serviceSelected.MaDichVu && this.deliveryInfo.value.IsReceiverPayFreight) && this.getAllService(this.serviceSelected.MaDichVu);
    }
    /**Thay đổi người nhận hay người gửi trả cước */
    changeData() {
        this.serviceSelected.MaDichVu && this.getAllService(this.serviceSelected.MaDichVu);
    }
    cancelListVnpost(event) {
        if (event && event._id) {
            this.attatchDataAddressToForm(event);
            this.data_delivery_recei = event;
            this.changeData();
        }
        else if (event && !event._id) {
            this.data_delivery_recei = {};
            // this.data_delivery_recei.id_delivery = '';
            this.addInformation.controls.ReceiverWardId.setValue('');
        }
        this.pickupAdresssVnpost = false;
    }
}
CreateBillCustomerVnpostComponent.ɵfac = function CreateBillCustomerVnpostComponent_Factory(t) { return new (t || CreateBillCustomerVnpostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_4__.VnpostService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalService)); };
CreateBillCustomerVnpostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateBillCustomerVnpostComponent, selectors: [["app-create-bill-customer-vnpost"]], decls: 226, vars: 159, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-vnpost"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "ReceiverFullname", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "ReceiverTel", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["nz-col", "", "nzSpan", "24", 1, "addInformation-address"], ["nzType", "text", "nz-tooltip", "", "nz-button", "", 3, "nzTooltipTitle", "click"], ["name", "create-outline"], ["class", "addInformation-address", "nz-col", "", "nzSpan", "24", 4, "ngIf", "ngIfElse"], ["no_address", ""], [1, "productInfo", "ant-table-body"], [1, "productInfo-title"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-table"], ["nz-col", "", "nzSpan", "24", 1, "productInfo-table"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-form"], [2, "width", "100%", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], ["nz-row", "", "nzGutter", "8"], ["nz-col", "", "nzSpan", "6"], ["nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 1, "icon-explain", 3, "nzTooltipTitle"], ["formControlName", "WeightEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWeight", ""], ["formControlName", "LengthEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplLength", ""], ["formControlName", "WidthEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWidth", ""], ["formControlName", "HeightEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", "ant-table-body", 3, "formGroup"], ["type", "text", "maxlength", "11", "formControlName", "CodAmountEvaluation", "nz-input", "", "required", "", 1, "CodAmountEvaluation", 3, "blur"], ["combineTplCod", ""], ["type", "text", "maxlength", "15", "formControlName", "OrderAmountEvaluation", "nz-input", "", "required", "", 1, "OrderAmountEvaluation", 3, "placeholder"], ["combineTplOrder", ""], ["nz-checkbox", "", "formControlName", "IsReceiverPayFreight", 3, "ngModelChange"], ["nz-checkbox", "", "formControlName", "IsPackageViewable"], ["formControlName", "ServiceName", 3, "nzDisabled", "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], [4, "ngFor", "ngForOf"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], ["formControlName", "ReceiverAddressType"], [3, "nzValue", "nzLabel"], ["clas", "", "formControlName", "CustomerNote", "rows", "2", "nz-input", "", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [4, "ngIf"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "id_delivery", "pickupAdresssVnpost", "customer", "type", "cancelListVnpost", 4, "ngIf"], [1, "current-address-choose"], [2, "margin-left", "12px"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"], [3, "nzValue", "nzLabel", 4, "ngIf"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"], [3, "id_delivery", "pickupAdresssVnpost", "customer", "type", "cancelListVnpost"]], template: function CreateBillCustomerVnpostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerVnpostComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CreateBillCustomerVnpostComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CreateBillCustomerVnpostComponent_ng_template_34_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerVnpostComponent_Template_button_click_41_listener() { return ctx.pickupAdresssVnpost = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, CreateBillCustomerVnpostComponent_div_44_Template, 6, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, CreateBillCustomerVnpostComponent_ng_template_45_Template, 3, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, CreateBillCustomerVnpostComponent_tr_67_Template, 5, 2, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerVnpostComponent_Template_input_blur_82_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, CreateBillCustomerVnpostComponent_ng_template_83_Template, 2, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerVnpostComponent_Template_input_blur_95_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](96, CreateBillCustomerVnpostComponent_ng_template_96_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerVnpostComponent_Template_input_blur_108_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, CreateBillCustomerVnpostComponent_ng_template_109_Template, 1, 1, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerVnpostComponent_Template_input_blur_121_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, CreateBillCustomerVnpostComponent_ng_template_122_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "form", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](135, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillCustomerVnpostComponent_Template_input_blur_140_listener() { return ctx.changeCodAmountEvaluation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](141, CreateBillCustomerVnpostComponent_ng_template_141_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](148, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](149, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](153, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](155, CreateBillCustomerVnpostComponent_ng_template_155_Template, 1, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerVnpostComponent_Template_label_ngModelChange_158_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](161, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](171, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "nz-select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzFocus", function CreateBillCustomerVnpostComponent_Template_nz_select_nzFocus_172_listener() { return ctx.getAllService(); })("ngModelChange", function CreateBillCustomerVnpostComponent_Template_nz_select_ngModelChange_172_listener($event) { return ctx.changeService($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](173, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](174, CreateBillCustomerVnpostComponent_ng_container_174_Template, 2, 1, "ng-container", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](175, CreateBillCustomerVnpostComponent_nz_option_175_Template, 4, 3, "nz-option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](183, "nz-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](184, "nz-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](185, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](186, "nz-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](187, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](188, "nz-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](189, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](194, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](195, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](200, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](201, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](205, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](208, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](209);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](210, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](213, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](214, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](215, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](217, CreateBillCustomerVnpostComponent_tr_217_Template, 7, 4, "tr", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](218, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](219, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerVnpostComponent_Template_button_click_219_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](221, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillCustomerVnpostComponent_Template_button_click_222_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](224, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](225, CreateBillCustomerVnpostComponent_app_list_address_vnpost_225_Template, 1, 8, "app-list-address-vnpost", 62);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](46);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](84);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](97);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](110);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](123);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](142);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 73, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 75, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 77, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 79, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 81, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 83, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 85, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](42, 87, (ctx.data_delivery_recei == null ? null : ctx.data_delivery_recei.ReceiverWardId) ? "Edit Address" : "Create Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data_delivery_recei == null ? null : ctx.data_delivery_recei.ReceiverWardId)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](50, 89, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 91, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](157, _c1, ctx.heightScroll))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 93, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](65, 95, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](76, 97, "Weight"), " (gram)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](78, 99, "Maximum") + " 1000.000kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](89, 101, "Length"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](91, 103, "Maximum") + " 100m");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](102, 105, "Width"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](104, 107, "Maximum") + " 100m");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](115, 109, "Height"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](117, 111, "Maximum") + " 100m");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](128, 113, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](134, 115, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](136, 117, "Maximum") + " 100.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](147, 119, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](149, 121, "Maximum") + " 100.000.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](154, 123, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](160, 125, "Add freight to COD amount"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](162, 127, "Note: the sender still has to pay the freight to VNPost; VNPost will collect the COD amount (including freight) from the recipient and return it to the sender"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](166, 129, "Show the goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](171, 131, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](173, 133, "Select service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabled", !ctx.addInformation.valid || !ctx.productInfo.valid)("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listServiceVnpost);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](180, 135, "Address type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](185, 137, "Undefined"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](187, 139, "Private house"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](189, 141, "Office"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](195, 143, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](200, 145, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](205, 147, "Total freight"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](206, 149, "Estimated"), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.serviceSelected.TongCuocBaoGomDVCT || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](213, 151, "Total freight collected from recipient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.deliveryInfo.value.IsReceiverPayFreight ? ctx.serviceSelected.TongCuocBaoGomDVCT || 0 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.deliveryInfo.value.IsReceiverPayFreight);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](221, 153, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](224, 155, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.pickupAdresssVnpost);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__.NzCheckboxComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__.NzOptionComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__.NzWaveDirective, _carrier_partner_components_vnpost_component_list_address_vnpost_list_address_vnpost_component__WEBPACK_IMPORTED_MODULE_5__.ListAddressVnpostComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo-title[_ngcontent-%COMP%] {\n  height: 20px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo-table[_ngcontent-%COMP%] {\n  height: calc(100% - 100px) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo-form[_ngcontent-%COMP%] {\n  height: 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .icon-explain[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLWN1c3RvbWVyLXZucG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLFdBQUE7QUFHUjtBQURJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQUdSO0FBRlE7Ozs7O0VBS0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBSVo7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUlaO0FBSFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBS2hCO0FBSFk7RUFDSSxjQUFBO0FBS2hCO0FBRmdCO0VBQ0ksZ0JBQUE7QUFJcEI7QUFIb0I7RUFDSSxpQkFBQTtBQUt4QjtBQUFRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFFWjtBQURZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBR2hCO0FBRmdCOzs7RUFHSSxnQkFBQTtBQUlwQjtBQURZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBR2hCO0FBRG9CO0VBQ0ksV0FBQTtBQUd4QjtBQUVZO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFoQjtBQUNnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUNwQjtBQUNnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ3BCO0FBR1E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFEWjtBQUVZO0VBQ0ksWUFBQTtBQUFoQjtBQUVZO0VBQ0kscUNBQUE7QUFBaEI7QUFFWTtFQUNJLFlBQUE7QUFBaEI7QUFHUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QUFEWjtBQUlJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFGUjtBQUtBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFGSjtBQUlBO0VBQ0ksaUJBQUE7QUFESjtBQUdBO0VBQ0kseUJBQUE7QUFBSiIsImZpbGUiOiJjcmVhdGUtYmlsbC1jdXN0b21lci12bnBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgbnotc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5kZWxpdmVyeS12bnBvc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgICAuYWRkSW5mb3JtYXRpb24sXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby1mb3JtLFxyXG4gICAgICAgIC5wcm9kdWN0SW5mbyxcclxuICAgICAgICAudG90YWxEZWxpdmVyeSxcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLXRvdGFsRGVsaXZlcnkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkSW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDExcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYzhjN2NjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mbyB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY3JSAyMyUgMTAlO1xyXG4gICAgICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBuei1mb3JtLWl0ZW0sXHJcbiAgICAgICAgICAgICAgICBuei1zZWxlY3QsXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXRvdGFsRGVsaXZlcnkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgICAgICAgICAuc3ViLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi1idXR0b24tb3JkZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24tZXhwbGFpbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uYW50LWlucHV0LXN1ZmZpeCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 60139:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-vnpost/create-bill-retail-vnpost/create-bill-retail-vnpost.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillRetailVnpostComponent": () => (/* binding */ CreateBillRetailVnpostComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/vnpostPost/vnpost-service.service */ 96057);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























function CreateBillRetailVnpostComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailVnpostComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r29.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r29.hasError("required"));
} }
function CreateBillRetailVnpostComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Invalid phone number"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailVnpostComponent_ng_template_34_ng_container_1_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r32.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r32.hasError("minLength") || control_r32.hasError("maxLength"));
} }
function CreateBillRetailVnpostComponent_ng_template_46_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_46_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r35.hasError("required"));
} }
function CreateBillRetailVnpostComponent_ng_container_55_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 51);
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r37.MaTinhThanh)("nzLabel", item_r37.TenTinhThanh);
} }
function CreateBillRetailVnpostComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailVnpostComponent_ng_container_55_nz_option_1_Template, 1, 2, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.isLoading);
} }
function CreateBillRetailVnpostComponent_nz_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillRetailVnpostComponent_ng_container_64_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 51);
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r40.MaQuanHuyen)("nzLabel", item_r40.TenQuanHuyen);
} }
function CreateBillRetailVnpostComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailVnpostComponent_ng_container_64_nz_option_1_Template, 1, 2, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.isLoading);
} }
function CreateBillRetailVnpostComponent_nz_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillRetailVnpostComponent_ng_container_73_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 51);
} if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r43.MaPhuongXa)("nzLabel", item_r43.TenPhuongXa);
} }
function CreateBillRetailVnpostComponent_ng_container_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailVnpostComponent_ng_container_73_nz_option_1_Template, 1, 2, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r10.isLoading);
} }
function CreateBillRetailVnpostComponent_nz_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillRetailVnpostComponent_tr_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r46.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r46.quantity, " ");
} }
function CreateBillRetailVnpostComponent_ng_template_111_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_111_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Weight must be greater than 0"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_111_ng_container_0_Template, 3, 3, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailVnpostComponent_ng_template_111_ng_container_1_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r47.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r47.hasError("min"));
} }
function CreateBillRetailVnpostComponent_ng_template_124_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_124_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r50.hasError("required"));
} }
function CreateBillRetailVnpostComponent_ng_template_137_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_137_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r52.hasError("required"));
} }
function CreateBillRetailVnpostComponent_ng_template_150_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_150_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r54.hasError("required"));
} }
function CreateBillRetailVnpostComponent_ng_template_169_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_169_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r56.hasError("required"));
} }
function CreateBillRetailVnpostComponent_ng_template_183_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillRetailVnpostComponent_ng_template_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CreateBillRetailVnpostComponent_ng_template_183_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r58.hasError("required"));
} }
function CreateBillRetailVnpostComponent_ng_container_202_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 51);
} if (rf & 2) {
    const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r60.MaDichVu)("nzLabel", item_r60.TenDichVu);
} }
function CreateBillRetailVnpostComponent_ng_container_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateBillRetailVnpostComponent_ng_container_202_nz_option_1_Template, 1, 2, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r26.isLoading);
} }
function CreateBillRetailVnpostComponent_nz_option_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CreateBillRetailVnpostComponent_tr_245_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Total COD amount to be collected from recipient"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r28.vhAlgorithm.vhcurrencyunit(ctx_r28.deliveryInfo.value.IsReceiverPayFreight ? ctx_r28.serviceSelected.SoTienCodThuNoiNguoiNhan || 0 : 0));
} }
const _c0 = function (a0) { return { y: a0 }; };
class CreateBillRetailVnpostComponent {
    constructor(router, vhComponent, vhQuerySales, lang, vhAlgorithm, vnPost, cdRef, modalService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.vnPost = vnPost;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.billDetails = [];
        this.serviceSelected = {};
        this.listProvinceVnpost = [];
        this.listDistrictVnpost = [];
        this.listWardVnpost = [];
        this.listServiceVnpost = [];
        this.isLoading = false;
        this.dataAddress = { TenTinhThanh: '', TenQuanHuyen: '', TenPhuongXa: '' };
        this.heightScroll = '100px';
        this.checkPrinter = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        var _a, _b;
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            ReceiverFullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(((_a = this.dataRestore.billInfo) === null || _a === void 0 ? void 0 : _a.retail_name) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]),
            ReceiverTel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(((_b = this.dataRestore.billInfo) === null || _b === void 0 ? void 0 : _b.retail_phone) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]),
            ReceiverAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            ReceiverProvinceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            ReceiverDistrictId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            ReceiverWardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            ServiceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            CustomerNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            ReceiverAddressType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0),
            IsReceiverPayFreight: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
            CodAmountEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0),
            OrderAmountEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0),
            IsPackageViewable: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            WeightEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0.0000000000000000000001), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(1000000)]),
            WidthEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100)]),
            LengthEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100)]),
            HeightEvaluation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100)]),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.CodAmountEvaluation = this.vhAlgorithm.vhnumeral('.CodAmountEvaluation');
            this.OrderAmountEvaluation = this.vhAlgorithm.vhnumeral('.OrderAmountEvaluation');
        });
    }
    ngAfterViewChecked() {
        if (document.querySelector('productInfo'))
            this.heightScroll = document.querySelector('productInfo').clientHeight - 156 + 'px';
        this.cdRef.detectChanges();
    }
    //lấy dữ liệu billDetail
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQuerySales.getBill_details_byId_bill(this.dataRestore.billInfo._id).then((result) => {
                this.vhComponent.hideLoading(0);
                this.billDetails = result.map(item => {
                    let name_product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                    return Object.assign(Object.assign({}, item), { name_product: name_product });
                });
                this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.dataRestore.billInfo, this.billDetails, this.vhQuerySales);
                let listAddresss = this.vhQuerySales.getlocalAddresss().filter(item => item.id_delivery == this.dataRestore.data_delivery._id && item.type == 5);
                this.data_delivery = listAddresss.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];
                let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                if (printer)
                    this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
            }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        });
    }
    goBack(success) {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-vnpost"], {
            state: { dataRestore: this.dataRestore }
        });
    }
    createOrder(print) {
        this.modalService.confirm({
            nzTitle: this.lang.translate("Do you want to create order ?"),
            nzCancelText: this.lang.translate("Cancel"),
            nzOnOk: () => {
                return new Promise((resolve) => {
                    let data_deli = Object.assign(Object.assign({}, this.deliveryInfo.value), { CodAmountEvaluation: this.CodAmountEvaluation.getRawValue(), OrderAmountEvaluation: this.OrderAmountEvaluation.getRawValue() });
                    let delivery = this.vhQuerySales.getlocalDelivery(this.data_delivery.id_delivery);
                    this.vnPost.createOrderVnpost(delivery.Token, this.vnPost.renderFormatCreateOrder(this.data_delivery, this.addInformation.value, this.productInfo.value, data_deli, delivery.CustomerCode, this.dataRestore.billInfo.bill_code)).then((response) => {
                        if (response.Id) {
                            this.invoice.setOrderCode(response.Id);
                            this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then((data) => {
                                resolve(true);
                                this.dataRestore.reload = true;
                                this.vhComponent.alertMessageDesktop('success', this.lang.translate('Create order successfully !'));
                                if (print)
                                    this.showPrint(response);
                                else
                                    this.goBack();
                            });
                        }
                    }).catch(err => { this.vhComponent.alertMessageDesktop('error', err); });
                });
            },
            nzOnCancel: () => { },
        });
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    showPrint(res) {
        this.checkPrint().then((printer) => {
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: Object.assign(Object.assign({}, this.dataRestore.billInfo), { data: this.vnPost.renderFormatPrintOrder(Object.assign(Object.assign({}, res), { ReceiverFullAddress: `${this.addInformation.value.ReceiverAddress}, ${this.dataAddress.TenPhuongXa},  ${this.dataAddress.TenQuanHuyen},  ${this.dataAddress.TenQuanHuyen}` })), order_code: res.ItemCode }),
                billDetails: this.billDetails,
                data_delivery: Object.assign(Object.assign({}, this.data_delivery), { type: 4 }),
                printer
            }, false, false, "modal-print").then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack(true);
                });
            });
        }, (err) => {
            this.goBack(true);
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            default: return src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryA45Component;
        }
    }
    customDataBillInfo(res) {
    }
    //------------------------------------Xã huyện tỉnh------------------------------------
    /**Lấy tỉnh thành phố */
    getProvinceVnpost() {
        this.isLoading = true;
        this.vnPost.getProvinceVnpost().then((res) => {
            this.isLoading = false;
            this.listProvinceVnpost = res;
        });
    }
    /**
     * Sự kiện thay đổi tỉnh => reset huyện xã
     * @param event
     */
    changeProvinceVnpost(event) {
        if (event) {
            this.listDistrictVnpost = [];
            this.listWardVnpost = [];
            this.addInformation.controls.ReceiverDistrictId.setValue('');
            this.addInformation.controls.ReceiverWardId.setValue('');
            let province = this.listProvinceVnpost.find(item => item.MaTinhThanh == event);
            this.dataAddress['TenTinhThanh'] = province.TenTinhThanh;
        }
    }
    /**Lấy quận, huyện */
    getDistrictVnpost() {
        this.isLoading = true;
        this.vnPost.getDistrictVnpost().then((res) => {
            this.listDistrictVnpost = res.filter(item => item.MaTinhThanh == this.addInformation.value.ReceiverProvinceId);
            this.isLoading = false;
        });
    }
    /**
    * Sự kiện thay đổi huyện => reset xã
    * @param event
    */
    changeDistrictVnpost(event) {
        if (event) {
            this.listWardVnpost = [];
            this.addInformation.controls.ReceiverWardId.setValue('');
            let district = this.listDistrictVnpost.find(item => item.MaQuanHuyen == event);
            this.dataAddress['TenQuanHuyen'] = district.TenQuanHuyen;
        }
    }
    /**Lấy phường, xã */
    getWardVnpost() {
        this.isLoading = true;
        this.vnPost.getWardVnpost().then((res) => {
            this.listWardVnpost = res.filter(item => item.MaQuanHuyen == this.addInformation.value.ReceiverDistrictId);
            this.isLoading = false;
        });
    }
    /**
    * Sự kiện thay đổi phường, xã
    * @param event
    */
    changeWardVnpost(event) {
        if (event) {
            let ward = this.listWardVnpost.find(item => item.MaPhuongXa == event);
            this.dataAddress['TenPhuongXa'] = ward.TenPhuongXa;
            this.changeData();
        }
    }
    //------------------------------------Xã huyện tỉnh------------------------------------
    getAllService(change) {
        if (this.addInformation.valid && this.productInfo.valid) {
            let data_deli = Object.assign(Object.assign({}, this.deliveryInfo.value), { CodAmountEvaluation: this.CodAmountEvaluation.getRawValue(), OrderAmountEvaluation: this.OrderAmountEvaluation.getRawValue() });
            this.listServiceVnpost = [];
            this.isLoading = true;
            let delivery = this.vhQuerySales.getlocalDelivery(this.data_delivery.id_delivery);
            this.vnPost.getServiceNameVnpost(delivery.Token, this.vnPost.renderFormatService(this.data_delivery, this.addInformation.value, this.productInfo.value, data_deli, delivery.CustomerCode)).then((result) => {
                result.forEach(item => {
                    if (item.Success) {
                        item.TenDichVu = this.renderNameService(item.MaDichVu, item.TongCuocBaoGomDVCT);
                        this.listServiceVnpost.push(item);
                        change && this.changeService(change);
                    }
                });
                this.isLoading = false;
            });
        }
    }
    changeService(event) {
        this.serviceSelected = this.listServiceVnpost.find(item => item.MaDichVu == event);
    }
    renderNameService(MaDichVu, TongCuocBaoGomDVCT) {
        switch (MaDichVu) {
            case 'EMS': return `${this.lang.translate('Chuyển phát nhanh')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'BK': return `${this.lang.translate('Chuyển phát thường')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'TMDT_EMS': return `TMDT_EMS - ${this.lang.translate('TMĐT-Chuyển phát nhanh EMS ')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'TMDT_BK': return `TMDT_BK - ${this.lang.translate('TMĐT-Chuyển phát tiêu chuẩn')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
            case 'TMDT_EMS_TK': return `TMDT_EMS_TK - ${this.lang.translate('TMĐT-Chuyển phát nhanh EMS tiết kiệm (liên vùng)')} - ${this.vhAlgorithm.vhcurrencyunit(TongCuocBaoGomDVCT)}`;
        }
    }
    /**Thay đổi tiền thu hộ */
    changeCodAmountEvaluation() {
        (this.serviceSelected.MaDichVu && this.deliveryInfo.value.IsReceiverPayFreight) && this.getAllService(this.serviceSelected.MaDichVu);
    }
    /**Thay đổi người nhận hay người gửi trả cước */
    changeData() {
        this.serviceSelected.MaDichVu && this.getAllService(this.serviceSelected.MaDichVu);
    }
}
CreateBillRetailVnpostComponent.ɵfac = function CreateBillRetailVnpostComponent_Factory(t) { return new (t || CreateBillRetailVnpostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_4__.VnpostService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalService)); };
CreateBillRetailVnpostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateBillRetailVnpostComponent, selectors: [["app-create-bill-retail-vnpost"]], decls: 253, vars: 186, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-vnpost"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "ReceiverFullname", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "ReceiverTel", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["formControlName", "ReceiverAddress", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplAddress", ""], ["formControlName", "ReceiverProvinceId", 3, "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], [4, "ngFor", "ngForOf"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], ["formControlName", "ReceiverDistrictId", 3, "nzDisabled", "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], ["formControlName", "ReceiverWardId", 3, "nzDisabled", "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], [1, "productInfo", "ant-table-body"], [1, "productInfo-title"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-table"], ["nz-col", "", "nzSpan", "24"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-row", "", "nzGutter", "16", 1, "productInfo-form"], [2, "width", "100%", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["nz-col", "", "nzSpan", "6"], ["nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 1, "icon-explain", 3, "nzTooltipTitle"], ["formControlName", "WeightEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWeight", ""], ["formControlName", "LengthEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplLength", ""], ["formControlName", "WidthEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplWidth", ""], ["formControlName", "HeightEvaluation", "nz-input", "", "required", "", "type", "number", 3, "blur"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", "ant-table-body", 3, "formGroup"], ["type", "text", "maxlength", "11", "formControlName", "CodAmountEvaluation", "nz-input", "", "required", "", 1, "CodAmountEvaluation", 3, "blur"], ["combineTplCod", ""], ["type", "text", "maxlength", "15", "formControlName", "OrderAmountEvaluation", "nz-input", "", "required", "", 1, "OrderAmountEvaluation", 3, "placeholder"], ["combineTplOrder", ""], ["nz-checkbox", "", "formControlName", "IsReceiverPayFreight", 3, "ngModelChange"], ["nz-checkbox", "", "formControlName", "IsPackageViewable"], ["formControlName", "ServiceName", 3, "nzDisabled", "nzShowSearch", "nzPlaceHolder", "nzFocus", "ngModelChange"], ["formControlName", "ReceiverAddressType"], [3, "nzValue", "nzLabel"], ["clas", "", "formControlName", "CustomerNote", "rows", "2", "nz-input", "", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [4, "ngIf"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "nzValue", "nzLabel", 4, "ngIf"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"]], template: function CreateBillRetailVnpostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBillRetailVnpostComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CreateBillRetailVnpostComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, CreateBillRetailVnpostComponent_ng_template_34_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CreateBillRetailVnpostComponent_ng_template_46_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "nz-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CreateBillRetailVnpostComponent_Template_nz_select_nzFocus_53_listener() { return ctx.getProvinceVnpost(); })("ngModelChange", function CreateBillRetailVnpostComponent_Template_nz_select_ngModelChange_53_listener($event) { return ctx.changeProvinceVnpost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, CreateBillRetailVnpostComponent_ng_container_55_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, CreateBillRetailVnpostComponent_nz_option_56_Template, 4, 3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CreateBillRetailVnpostComponent_Template_nz_select_nzFocus_62_listener() { return ctx.getDistrictVnpost(); })("ngModelChange", function CreateBillRetailVnpostComponent_Template_nz_select_ngModelChange_62_listener($event) { return ctx.changeDistrictVnpost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, CreateBillRetailVnpostComponent_ng_container_64_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, CreateBillRetailVnpostComponent_nz_option_65_Template, 4, 3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CreateBillRetailVnpostComponent_Template_nz_select_nzFocus_71_listener() { return ctx.getWardVnpost(); })("ngModelChange", function CreateBillRetailVnpostComponent_Template_nz_select_ngModelChange_71_listener($event) { return ctx.changeWardVnpost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, CreateBillRetailVnpostComponent_ng_container_73_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, CreateBillRetailVnpostComponent_nz_option_74_Template, 4, 3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "nz-table", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, CreateBillRetailVnpostComponent_tr_95_Template, 5, 2, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](105, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailVnpostComponent_Template_input_blur_110_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, CreateBillRetailVnpostComponent_ng_template_111_Template, 2, 2, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](118, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailVnpostComponent_Template_input_blur_123_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, CreateBillRetailVnpostComponent_ng_template_124_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](131, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailVnpostComponent_Template_input_blur_136_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](137, CreateBillRetailVnpostComponent_ng_template_137_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailVnpostComponent_Template_input_blur_149_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](150, CreateBillRetailVnpostComponent_ng_template_150_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "form", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](156, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](163, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](164, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CreateBillRetailVnpostComponent_Template_input_blur_168_listener() { return ctx.changeCodAmountEvaluation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](169, CreateBillRetailVnpostComponent_ng_template_169_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](176, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](181, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](182, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](183, CreateBillRetailVnpostComponent_ng_template_183_Template, 1, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CreateBillRetailVnpostComponent_Template_label_ngModelChange_186_listener() { return ctx.changeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](188, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](189, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](190, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](194, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "nz-select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CreateBillRetailVnpostComponent_Template_nz_select_nzFocus_200_listener() { return ctx.getAllService(); })("ngModelChange", function CreateBillRetailVnpostComponent_Template_nz_select_ngModelChange_200_listener($event) { return ctx.changeService($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](201, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](202, CreateBillRetailVnpostComponent_ng_container_202_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](203, CreateBillRetailVnpostComponent_nz_option_203_Template, 4, 3, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](208, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "nz-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](212, "nz-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](213, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](214, "nz-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](215, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](216, "nz-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](217, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](220, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](222, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](223, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](225, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](227);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](228, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](233, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](234, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](238, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](241, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](243, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](244);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](245, CreateBillRetailVnpostComponent_tr_245_Template, 7, 4, "tr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](246, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBillRetailVnpostComponent_Template_button_click_247_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](249, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](250, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateBillRetailVnpostComponent_Template_button_click_250_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](251);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](252, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](47);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](112);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](125);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](138);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](151);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](170);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 88, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 90, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 92, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 94, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 96, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 98, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 100, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 102, "Enter your address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 104, "Province"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 106, "Select province"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listProvinceVnpost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 108, "District"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](63, 110, "Select district"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDisabled", !ctx.addInformation.value.ReceiverProvinceId)("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listDistrictVnpost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](70, 112, "Ward"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](72, 114, "Select ward"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDisabled", !ctx.addInformation.value.ReceiverDistrictId)("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listWardVnpost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 116, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](83, 118, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](184, _c0, ctx.heightScroll))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 120, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](93, 122, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](104, 124, "Weight"), " (gram)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](106, 126, "Maximum") + " 1000.000kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](117, 128, "Length"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](119, 130, "Maximum") + " 100m");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](130, 132, "Width"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](132, 134, "Maximum") + " 100m");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](143, 136, "Height"), " (cm)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](145, 138, "Maximum") + " 100m");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](156, 140, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](162, 142, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](164, 144, "Maximum") + " 100.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](175, 146, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](177, 148, "Maximum") + " 100.000.000.000 VND");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](182, 150, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](188, 152, "Add freight to COD amount"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](190, 154, "Note: the sender still has to pay the freight to VNPost; VNPost will collect the COD amount (including freight) from the recipient and return it to the sender"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](194, 156, "Show the goods"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](199, 158, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](201, 160, "Select service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzDisabled", !ctx.addInformation.valid || !ctx.productInfo.valid)("nzShowSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listServiceVnpost);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](208, 162, "Address type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](213, 164, "Undefined"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](215, 166, "Private house"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](217, 168, "Office"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](223, 170, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](228, 172, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](233, 174, "Total freight"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](234, 176, "Estimated"), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.serviceSelected.TongCuocBaoGomDVCT || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](241, 178, "Total freight collected from recipient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.deliveryInfo.value.IsReceiverPayFreight ? ctx.serviceSelected.TongCuocBaoGomDVCT || 0 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.deliveryInfo.value.IsReceiverPayFreight);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](249, 180, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](252, 182, "Create bill"), "");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__.NzCheckboxComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo-title[_ngcontent-%COMP%] {\n  height: 20px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo-table[_ngcontent-%COMP%] {\n  height: calc(100% - 100px) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .productInfo-form[_ngcontent-%COMP%] {\n  height: 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   .icon-explain[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLXJldGFpbC12bnBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxXQUFBO0FBR1I7QUFESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFHUjtBQUZROzs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlaO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFJWjtBQUhZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUtoQjtBQUhZO0VBQ0ksY0FBQTtBQUtoQjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFJWjtBQUhZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBS2hCO0FBSmdCOzs7RUFHSSxnQkFBQTtBQU1wQjtBQUhZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBS2hCO0FBSG9CO0VBQ0ksV0FBQTtBQUt4QjtBQUFZO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUVoQjtBQURnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUdwQjtBQURnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBR3BCO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFDWjtBQUFZO0VBQ0ksWUFBQTtBQUVoQjtBQUFZO0VBQ0kscUNBQUE7QUFFaEI7QUFBWTtFQUNJLFlBQUE7QUFFaEI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QUFDWjtBQUVJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUdBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUVBO0VBQ0ksaUJBQUE7QUFDSjtBQUNBO0VBQ0kseUJBQUE7QUFFSiIsImZpbGUiOiJjcmVhdGUtYmlsbC1yZXRhaWwtdm5wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGVsaXZlcnktdm5wb3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uLFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tZm9ybSxcclxuICAgICAgICAucHJvZHVjdEluZm8sXHJcbiAgICAgICAgLnRvdGFsRGVsaXZlcnksXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2M4YzdjYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnlJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjclIDIzJSAxMCU7XHJcbiAgICAgICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIG56LWZvcm0taXRlbSxcclxuICAgICAgICAgICAgICAgIG56LXNlbGVjdCxcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgICAgIC5zdWItdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLWJ1dHRvbi1vcmRlciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMy80O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdEluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbi1leHBsYWluIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hbnQtaW5wdXQtc3VmZml4IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjOGM3Y2MgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 28437:
/*!*******************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-vnpost/delivery-vnpost.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryVnpostComponent": () => (/* binding */ DeliveryVnpostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vnpostPost/vnpost-service.service */ 96057);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function DeliveryVnpostComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 25);
} }
function DeliveryVnpostComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, option_r5))("nzValue", i_r6);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function DeliveryVnpostComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryVnpostComponent_tr_68_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return item_r7.order_code ? ctx_r8.gotoBillDetail(item_r7) : ctx_r8.gotoCreateOrder(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 7, item_r7.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.delivery ? item_r7.delivery.ItemCode : item_r7.order_code || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 10, item_r7.customer_name ? item_r7.customer_name : "Customer retail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r7.delivery ? ctx_r4.vhAlgorithm.vhcurrencyunit(item_r7.delivery.OriginalCodAmountEvaluation) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, (item_r7.delivery == null ? null : item_r7.delivery.OrderStatusId) == 60 ? "var(--ion-color-vh-orange)" : "var(--ion-color-vh-black);"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r7.delivery == null ? null : item_r7.delivery.OrderStatusName, "");
} }
const _c1 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c2 = function (a0) { return { y: a0 }; };
class DeliveryVnpostComponent {
    constructor(lang, router, vhComponent, vhAlgorithm, vnPost, vhQuerySales, vhQuery, cdRef, vhAuth) {
        var _a;
        this.lang = lang;
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vnPost = vnPost;
        this.vhQuerySales = vhQuerySales;
        this.vhQuery = vhQuery;
        this.cdRef = cdRef;
        this.vhAuth = vhAuth;
        this.bills = [];
        this.show_bills = [];
        //Hôm nay 0h- 23h59
        this.date = [new Date(), new Date()];
        this.dataRestore = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.dataRestore;
        //biến cờ show
        this.status_open = false;
        this.indexSelected = 0;
        this.search = '';
        this.disabledDate = (current) => {
            if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000)
                return true;
            return false;
        };
        this.list_status = ["All", "Đã xóa", "Vào điều tin", "Hủy", "Báo Hủy", "Đã nhận báo hủy", "Vào Bưu cục chuyển phát", "Phát không thành công", "Phát thành công", "Vào hệ thống Paypost/Chờ trả tiền", "Đã trả tiền cho người gửi", "Phát hoàn không thành công", "Phát hoàn thành công"];
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
    }
    ngOnInit() {
        if (this.dataRestore) {
            this.search = this.dataRestore.dataRestore.search;
            this.indexSelected = this.dataRestore.dataRestore.indexSelected;
            this.date = [new Date(this.dataRestore.dataRestore.date[0]), new Date(this.dataRestore.dataRestore.date[1])];
            this.bills = this.dataRestore.dataRestore.bills;
            this.show_bills = [...this.dataRestore.dataRestore.bills];
            this.data_delivery = this.dataRestore.data_delivery;
            if (this.dataRestore.reload)
                this.getInvoices();
        }
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill"]);
    }
    /**
      * Hàm lấy bill trong khoăng thời gian được set
      */
    getInvoices() {
        this.bills = [];
        this.status_open = false;
        this.data_delivery = this.vhQuerySales.getlocalDeliverys().filter(item => item.active && item.type == 4)[0];
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQuerySales.getBills_byFields({ date: { $gte: new Date(this.date[0].setHours(0, 0, 0)), $lte: new Date(this.date[1].setHours(23, 59, 59, 59)) }, bill_type: { $eq: 1 }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {}).then((result) => {
                let process = [];
                result.forEach(item => {
                    if (item.id_delivery == this.data_delivery._id) {
                        item.customer_name = this.vhQuerySales.getlocalCustomer(item.id_customer).name;
                        if (item.order_code)
                            process.push(this.vnPost.getDetailOrderById(this.data_delivery.Token, item.order_code));
                        this.bills.unshift(item);
                    }
                });
                Promise.all(process).then((response) => {
                    response.forEach(data => {
                        let index = this.bills.findIndex(item => item.order_code == data.Id);
                        if (index >= 0) {
                            this.bills[index].delivery = data;
                            this.bills[index].ItemCode = data.ItemCode;
                        }
                    });
                    this.show_bills = [...this.bills];
                    this.vhComponent.hideLoading(0);
                    this.searchBill(this.search);
                }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
            }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        });
    }
    changeTime(event) {
        if (event[1].getTime() - event[0].getTime() <= 2678400000) {
        }
        else {
            this.vhComponent.showToast(2000, this.lang.translate("The time to view no more than 30 days"), "alert-toast");
            this.date = [new Date(event[0]), new Date(event[0].getTime() + 2678313600)];
        }
    }
    //searchbill
    searchBill(value) {
        this.show_bills = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value).toLowerCase(), this.bills, ["bill_code", "ItemCode"]);
    }
    gotoCreateOrder(bill) {
        let state = { billInfo: bill, data_delivery: this.data_delivery, dataRestore: { indexSelected: this.indexSelected, search: this.search, date: this.date, bills: this.bills } };
        this.router.navigate([`/dashboard/manage/delivery/shipping-bill/delivery-vnpost/create-order-${bill.id_customer != "id_retail" ? 'customer' : 'retail'}`], { state: state });
    }
    gotoBillDetail(bill) {
        let state = { billInfo: bill, data_delivery: this.data_delivery, dataRestore: { indexSelected: this.indexSelected, search: this.search, date: this.date, bills: this.bills } };
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-vnpost/detail-bill"], { state: state });
    }
    /**
    * filter các trạng thái của bill
    * */
    filterStatus(value) {
        this.searchBill(this.search);
        if (value != 0)
            this.show_bills = [...this.show_bills].filter(item => item.delivery && item.delivery.OrderStatusId == this.getStatusOfOrder(value));
        // this.searchBill(this.search)
    }
    getStatusOfOrder(value) {
        switch (value) {
            case 1: return 10;
            case 2: return 20;
            case 3: return 60;
            case 4: return 61;
            case 5: return 62;
            case 6: return 70;
            case 7: return 91;
            case 8: return 100;
            case 9: return 110;
            case 10: return 120;
            case 11: return 161;
        }
    }
    onCurrentPageDataChange(event) { }
    ngAfterViewChecked() {
        if (document.getElementById("delivery-vnpost") && document.querySelector(".delivery-vnpost-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.getElementById("delivery-vnpost").clientHeight - document.querySelector(".delivery-vnpost-header").clientHeight -
                document.querySelector(".ant-table-pagination").clientHeight - 135 + "px";
        }
        this.cdRef.detectChanges();
    }
}
DeliveryVnpostComponent.ɵfac = function DeliveryVnpostComponent_Factory(t) { return new (t || DeliveryVnpostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_2__.VnpostService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth)); };
DeliveryVnpostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeliveryVnpostComponent, selectors: [["app-delivery-vnpost"]], decls: 69, vars: 57, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "delivery-vnpost"], ["nzGutter", "16", "nz-row", "", 1, "delivery-vnpost", "delivery-vnpost-header"], ["nz-col", "", "nzSpan", "4"], [1, "title", "nz-no-margin"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [1, "nz-hover-border", 3, "nzSuffix"], ["type", "text", "nz-input", "", 1, "medium-size", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nzBorderless", "", 1, "nz-hover-border", "medium-size", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "date-picker-cus"], ["nzFormat", "dd/MM/yyyy", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content", "button-group"], ["nz-button", "", "nzType", "default", 1, "btn-green", "center-all-content", "ml-3", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "table-delivery-ahamove"], [1, "medium-size"], [2, "color", "red"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult", "nzCurrentPageDataChange"], ["tableDelvieryAhamove", ""], ["nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 1, "icon-explain", 3, "nzTooltipTitle"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "nzLabel", "nzValue"], [2, "cursor", "pointer", 3, "click"], [3, "ngStyle"]], template: function DeliveryVnpostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryVnpostComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryVnpostComponent_Template_input_ngModelChange_12_listener($event) { return ctx.search = $event; })("ngModelChange", function DeliveryVnpostComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchBill($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeliveryVnpostComponent_ng_template_14_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryVnpostComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.filterStatus($event); })("ngModelChange", function DeliveryVnpostComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.indexSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DeliveryVnpostComponent_nz_option_18_Template, 2, 4, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-range-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryVnpostComponent_Template_nz_range_picker_ngModelChange_20_listener($event) { return ctx.date = $event; })("ngModelChange", function DeliveryVnpostComponent_Template_nz_range_picker_ngModelChange_20_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryVnpostComponent_Template_button_click_23_listener() { return ctx.getInvoices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCurrentPageDataChange", function DeliveryVnpostComponent_Template_nz_table_nzCurrentPageDataChange_36_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, DeliveryVnpostComponent_tr_68_Template, 15, 14, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 26, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 28, "VietNam Post"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 30, "Search for bill code, order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.indexSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 32, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 34, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.show_bills.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 36, "shipping bills"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 38, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](54, _c1))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](55, _c2, ctx.heightScroll))("nzData", ctx.show_bills);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 40, "Time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 42, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 44, "Order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 46, "Customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 48, "COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](62, 50, "COD amount excluding freight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 52, "Status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.show_bills);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_19__.NzTooltipDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 0;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: initial;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-vnpost[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-content[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-explain[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--ion-color-vh-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LXZucG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBR1I7QUFESTtFQUNJLGNBQUE7QUFHUjtBQUZRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFJWjtBQUZRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFJWjtBQURJO0VBQ0ksaUJBQUE7QUFHUjtBQURJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtBQUdSIiwiZmlsZSI6ImRlbGl2ZXJ5LXZucG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGVsaXZlcnktdm5wb3N0IHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBuei1pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFudC10YWJsZS1jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgIC5pY29uLWV4cGxhaW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 10384:
/*!****************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-vnpost/delivery-vnpost.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryVnpostModule": () => (/* binding */ DeliveryVnpostModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _delivery_vnpost_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-vnpost.component */ 28437);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _create_bill_retail_vnpost_create_bill_retail_vnpost_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-bill-retail-vnpost/create-bill-retail-vnpost.component */ 60139);
/* harmony import */ var _create_bill_customer_vnpost_create_bill_customer_vnpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-bill-customer-vnpost/create-bill-customer-vnpost.component */ 36280);
/* harmony import */ var _detail_bill_vnpost_detail_bill_vnpost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-bill-vnpost/detail-bill-vnpost.component */ 60656);
/* harmony import */ var _carrier_partner_components_vnpost_component_vnpost_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../carrier-partner/components/vnpost-component/vnpost.module */ 84554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _delivery_vnpost_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryVnpostComponent
            },
            {
                path: "create-order-retail",
                component: _create_bill_retail_vnpost_create_bill_retail_vnpost_component__WEBPACK_IMPORTED_MODULE_2__.CreateBillRetailVnpostComponent
            },
            {
                path: "create-order-customer",
                component: _create_bill_customer_vnpost_create_bill_customer_vnpost_component__WEBPACK_IMPORTED_MODULE_3__.CreateBillCustomerVnpostComponent
            },
            {
                path: "detail-bill",
                component: _detail_bill_vnpost_detail_bill_vnpost_component__WEBPACK_IMPORTED_MODULE_4__.DetailBillVnpostComponent
            }
        ]
    }
];
class DeliveryVnpostModule {
}
DeliveryVnpostModule.ɵfac = function DeliveryVnpostModule_Factory(t) { return new (t || DeliveryVnpostModule)(); };
DeliveryVnpostModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DeliveryVnpostModule });
DeliveryVnpostModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _carrier_partner_components_vnpost_component_vnpost_module__WEBPACK_IMPORTED_MODULE_5__.VnpostModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DeliveryVnpostModule, { declarations: [_delivery_vnpost_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryVnpostComponent, _create_bill_retail_vnpost_create_bill_retail_vnpost_component__WEBPACK_IMPORTED_MODULE_2__.CreateBillRetailVnpostComponent, _create_bill_customer_vnpost_create_bill_customer_vnpost_component__WEBPACK_IMPORTED_MODULE_3__.CreateBillCustomerVnpostComponent, _detail_bill_vnpost_detail_bill_vnpost_component__WEBPACK_IMPORTED_MODULE_4__.DetailBillVnpostComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _carrier_partner_components_vnpost_component_vnpost_module__WEBPACK_IMPORTED_MODULE_5__.VnpostModule] }); })();


/***/ }),

/***/ 60656:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-vnpost/detail-bill-vnpost/detail-bill-vnpost.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBillVnpostComponent": () => (/* binding */ DetailBillVnpostComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/vnpostPost/vnpost-service.service */ 96057);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function DetailBillVnpostComponent_p_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx_r0.billInfo.delivery == null ? null : ctx_r0.billInfo.delivery.ReceiverFullAddress, "");
} }
function DetailBillVnpostComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r3.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r3.quantity, " ");
} }
const _c0 = function () { return { y: "200px" }; };
class DetailBillVnpostComponent {
    constructor(lang, router, vhComponent, vhAlgorithm, vnPost, vhQuerySales, vhAuth, modalService) {
        this.lang = lang;
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vnPost = vnPost;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
        this.modalService = modalService;
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.billInfo = this.dataRestore.billInfo;
    }
    ngOnInit() {
        this.getData();
    }
    exportDelivery() {
        let info = {
            shop_id: this.billInfo.data.shop_id,
            to_district_id: this.billInfo.data.to_district_id,
            to_ward_code: this.billInfo.data.to_ward_code,
            height: this.billInfo.data.height,
            length: this.billInfo.data.length,
            weight: this.billInfo.data.weight,
            width: this.billInfo.data.width,
            insurance_value: this.billInfo.data.insurance_value,
            service_id: this.billInfo.data.service_id,
            from_district_id: this.billInfo.data.from_district_id,
            from_ward_code: this.billInfo.data.from_ward_code
        };
        return info;
    }
    getData() {
        this.vhComponent.showLoading("").then(() => {
            this.vhQuerySales.getBill_details_byId_bill(this.dataRestore.billInfo._id).then((res) => {
                this.vhComponent.hideLoading(0).then(() => {
                    this.billDetail = res.map(item => {
                        let name_product = this.vhQuerySales.getlocalProduct(item.id_product).name;
                        return Object.assign(Object.assign({}, item), { name_product: name_product });
                    });
                });
            });
        });
    }
    cancelOrder() {
        if (this.vhAuth.checkMyPermission("shipping_enable_cancel_bill")) {
            this.modalService.confirm({
                nzTitle: this.lang.translate("Do you want to delete shipping bill ?"),
                nzCancelText: this.lang.translate("Cancel"),
                nzOnOk: () => {
                    return new Promise((resolve) => {
                        this.vnPost.deleteOrderVnpostByID(this.dataRestore.data_delivery.Token, this.billInfo.order_code).then(res => {
                            this.vhComponent.alertMessageDesktop('success', this.lang.translate('Delete bill successfully'));
                            this.dataRestore.reload = true;
                            this.goBack();
                            resolve(true);
                        }).catch(err => this.vhComponent.alertMessageDesktop('error', err));
                    });
                },
                nzOnCancel: () => { },
            });
        }
        else
            this.vhComponent.showToast(1500, this.lang.translate('You do not have this rights'), "alert-toast");
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-vnpost"], {
            state: { dataRestore: this.dataRestore }
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
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    /** kiểm tra dữ liệu máy in và show component in tương ứng
    * @example this.showPrint()
    */
    showPrint() {
        this.checkPrint().then((printer) => {
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: Object.assign(Object.assign({}, this.billInfo), { data: this.vnPost.renderFormatPrintOrder(this.billInfo.delivery), order_code: this.billInfo.delivery.ItemCode }),
                billDetails: this.billDetail,
                printer,
                data_delivery: Object.assign(Object.assign({}, this.dataRestore.data_delivery), { type: 4 })
            }, false, false, `modal-print-${printer['type']}`);
        }, (err) => {
            let name = 'Sales';
            this.vhComponent.alertMessage(this.lang.translate("Function"), "", this.lang.translate("Please turn on the printer function"), "OK")
                .then(() => this.router.navigate(['/sales/dashboard/manage/printer', 'page_desktop_sales'], { state: name }));
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            default: return src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryA45Component;
        }
    }
}
DetailBillVnpostComponent.ɵfac = function DetailBillVnpostComponent_Factory(t) { return new (t || DetailBillVnpostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_vnpostPost_vnpost_service_service__WEBPACK_IMPORTED_MODULE_3__.VnpostService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalService)); };
DetailBillVnpostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailBillVnpostComponent, selectors: [["app-detail-bill-vnpost"]], decls: 206, vars: 147, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "7"], ["nz-col", "", "nzSpan", "17", 1, "addInformation-button"], ["nz-button", "", 1, "nz-hover-border", 3, "click"], ["src", "assets/icon/management/printer.svg", 2, "font-size", "0.9rem", "margin-right", "4px", "margin-bottom", "-2px"], ["nz-button", "", 1, "nz-hover-border", 3, "disabled", "click"], ["name", "trash-outline", 2, "font-size", "0.9rem", "margin-right", "4px", "margin-bottom", "-2px"], ["nz-col", "", "nzSpan", "24", 1, "addInformation-info"], [4, "ngIf"], [1, "productInfo", "ant-table-body"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "5px"], [2, "color", "var(--ion-color-vh-orange)", "margin-bottom", "4px"], ["nz-col", "", "nzSpan", "6", 2, "margin-top", "5px"], [1, "deliveryInfo", "notReuseInfo"], [1, "deliveryInfo-form", "ant-table-body"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [2, "width", "70%", "font-weight", "bold"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "center"]], template: function DetailBillVnpostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBillVnpostComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBillVnpostComponent_Template_button_click_13_listener() { return ctx.showPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBillVnpostComponent_Template_button_click_17_listener() { return ctx.cancelOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, DetailBillVnpostComponent_p_45_Template, 5, 4, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "nz-table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, DetailBillVnpostComponent_tr_64_Template, 5, 2, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](142, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](149, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](182, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "b", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](190, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](195, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](202, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "b", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 67, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 69, "Shipment bill"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 71, "Print shipping bill"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.billInfo.delivery.IsCancelable == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 73, "Cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 75, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 77, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.bill_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 79, "Order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery == null ? null : ctx.billInfo.delivery.ItemCode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 81, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery == null ? null : ctx.billInfo.delivery.ReceiverFullname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 83, "Phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery == null ? null : ctx.billInfo.delivery.ReceiverTel, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.billInfo.delivery);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 85, "Products information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 87, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](146, _c0))("nzShowPagination", false)("nzData", ctx.billDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 89, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](62, 91, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r1.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](70, 93, "C\u00F4ng b\u00F4\u0301"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 95, "Weight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.WeightEvaluation, " (gram)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](81, 97, "Length"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.LengthEvaluation, " (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](87, 99, "Width"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.WidthEvaluation, " (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](93, 101, "Height"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.HeightEvaluation, " (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 103, "Th\u01B0\u0323c ti\u0301nh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](104, 105, "Weight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.Weight, " (gram)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](110, 107, "Length"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.Length, " (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](116, 109, "Width"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.Width, " (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](122, 111, "Height"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.Height, " (cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](128, 113, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](132, 115, "Original COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery.OriginalCodAmountEvaluation), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](137, 117, "COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery.CodAmountEvaluation), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](142, 119, "Order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery.OrderAmountEvaluation), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](147, 121, "Delivery time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](149, 123, ctx.billInfo.delivery.DeliveryDateEvaluation, "dd/MM/yyyy"), " - ", ctx.billInfo.delivery.ServiceName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](153, 126, "Add freight to COD amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](155, 128, ctx.billInfo.delivery.IsReceiverPayFreight == true ? "Yes" : "No"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](159, 130, "Note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.delivery.CustomerNote, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](165, 132, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](170, 134, "C\u00F4ng b\u00F4\u0301"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](175, 136, "COD fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery.CodFreightEvaluation));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](182, 138, "Total freight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery.TotalFreightIncludeVatEvaluation));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](190, 140, "Th\u01B0\u0323c ti\u0301nh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](195, 142, "COD fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery.CodFreight));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](202, 144, "Total freight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.delivery.TotalFreightIncludeVat));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 33% 33% 31%;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin: 0 !important;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  margin: 10 0 !important;\n  font-size: 1rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%] {\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 55% 45%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  overflow-y: auto !important;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1iaWxsLXZucG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBZ0JBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBWlI7QUFOUTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBUVo7QUFOUTtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFRWjtBQU5RO0VBQ0ksaUJBQUE7QUFRWjtBQUZROzs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlaO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFJWjtBQUhZO0VBQ0ksZUFBQTtBQUtoQjtBQUpnQjtFQUNJLGNBQUE7QUFNcEI7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FBSVo7QUFIWTtFQUNJLGFBQUE7QUFLaEI7QUFIWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUtoQjtBQUhvQjtFQUNJLFdBQUE7QUFLeEI7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRVo7QUFBUTtFQUNJLDJCQUFBO0FBRVo7QUFDSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFFQTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBQ0oiLCJmaWxlIjoiZGV0YWlsLWJpbGwtdm5wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5kZWxpdmVyeS1naG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAgMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMxJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbixcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0sXHJcbiAgICAgICAgLnByb2R1Y3RJbmZvLFxyXG4gICAgICAgIC50b3RhbERlbGl2ZXJ5LFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby5ub3RSZXVzZUluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1NSUgNDUlO1xyXG4gICAgICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVsaXZlcnlJbmZvLXRvdGFsRGVsaXZlcnkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgICAgICAgICAuc3ViLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdEluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


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
//# sourceMappingURL=src_app_sales_menu_manage_delivery_shipping-bill_delivery-vnpost_delivery-vnpost_module_ts-sr-45862b.js.map