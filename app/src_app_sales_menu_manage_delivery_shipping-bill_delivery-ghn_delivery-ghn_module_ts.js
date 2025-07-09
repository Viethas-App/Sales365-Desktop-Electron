"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_delivery_shipping-bill_delivery-ghn_delivery-ghn_module_ts"],{

/***/ 586:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ghnService/ghn.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhnService": () => (/* binding */ GhnService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class GhnService {
    constructor(http) {
        this.http = http;
    }
    /**
    * kiểm tra token của giao hàng nhanh có hợp lệ hay không
    * @example : this.transportService.connectTokenGhn(token).then(res =>{
    * @param : tokenName
    * @return :
    **/
    connectTokenGhn(token) {
        let urlGhn = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/all';
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            })
        };
        return this.http.get(urlGhn, options).toPromise();
    }
    /**
    * get các tỉnh trong nước Việt Nam
    * @param token
    * @example this.transportService.getProvinceGhn().then(res =>{})
    * @return
    **/
    getProvinceGhn(token) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/province';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            })
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * get các huyện trong tỉnh của Việt Nam
    * @param token ,province_id
    * @example this.transportService.getDistrictGhn().then(res =>{})
    * @return
    **/
    getDistrictGhn(token, province_id) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/district';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "province_id": province_id ? province_id : 0
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * get các xã trong huyện của Việt Nam
    * @param token ,district_id
    * @example this.transportService.getWardGhn().then(res =>{})
    * @return
    **/
    getWardGhn(token, district_id) {
        let url = `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?${district_id}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "district_id": district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * tính phí vận chuyển
    * @param token,data
    * @example this.transportService.calculate_delivery_fee().then(res =>{})
    * @return
    **/
    calculate_delivery_fee(token, data) {
        let url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee";
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
                "ShopId": data.shop_id.toString()
            }),
            params: {
                "service_id": data.service_id,
                "to_ward_code": data.to_ward_code,
                "from_district_id": data.from_district_id,
                "height": data.height,
                "length": data.length,
                "weight": data.weight,
                "width": data.width,
                "insurance_value": data.insurance_value,
                "to_district_id": data.to_district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * chọn service : đi bộ, bay...
    * @param token,data
    * @example this.transportService.calculate_delivery_fee().then(res =>{})
    * @return result { data : [service_id,short_name,service_type_id]}
    **/
    getServiceDelivery(token, data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "shop_id": data.shop_id,
                "from_district": data.from_district_id,
                "to_district": data.to_district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * tạo đơn giao hàng
    * @param data
    * @example this.transportService.createOrderGhn().then(res =>{})
    * @return
    **/
    createOrderGhn(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Token": data.token,
                "Content-Type": "application/json",
                "ShopId": data.shop_id.toString()
            }),
        };
        let params = {
            "to_name": data.to_name,
            "to_phone": data.to_phone,
            "to_address": data.to_address,
            "to_ward_code": data.to_ward_code,
            "to_district_id": data.to_district_id,
            "weight": data.weight,
            "height": data.height,
            "length": data.length,
            "width": data.width,
            "payment_type_id": data.payment_type_id,
            "required_note": data.required_note,
            "items": data.items,
            "service_id": data.service_id,
            "cod_amount": data.cod_amount,
            "insurance_value": data.insurance_value,
            "note": data.note ? data.note : ''
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    /**
     * Tính (đoán) ngày vận chuyển hàng hoàn thành
    * @param data;
    * @example : this.transportService.calculateTheExpectedDeliveryTime().then(res =>{})
    * @return :
    **/
    calculateTheExpectedDeliveryTime(token, data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/leadtime';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
                "ShopId": data.shop_id.toString()
            }),
        };
        let params = {
            "from_district_id": data.from_district_id,
            "from_ward_code": data.from_ward_code,
            "to_district_id": data.to_district_id,
            "to_ward_code": data.to_ward_code,
            "service_id": data.service_id
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    getInfoOrder(token, order_code) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
        };
        let params = {
            "order_code": order_code
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    cancelOrder(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": data.token,
                "ShopId": data.shop_id.toString(),
            }),
        };
        let params = {
            "order_codes": data.order_code
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    getOtpGhn(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/affiliateOTP';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": "5c8844f1-17f6-11eb-afc8-92a278719a56", //gán cứng token
            }),
        };
        let params = {
            "phone": data.phone
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    addStaffToStore(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/affiliateCreateWithShop';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": "5c8844f1-17f6-11eb-afc8-92a278719a56", //gán cứng token
            }),
        };
        let params = {
            "phone": data.phone,
            "otp": data.otp,
            "shop_id": data.shop_id
        };
        return this.http.post(url, params, opptions).toPromise();
    }
}
GhnService.ɵfac = function GhnService_Factory(t) { return new (t || GhnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
GhnService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GhnService, factory: GhnService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43443:
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/add-address-customer-ghn/add-address-customer-ghn.component.ts ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAddressCustomerGhnComponent": () => (/* binding */ AddAddressCustomerGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../choose-province-ghn/choose-province-ghn.component */ 4192);
/* harmony import */ var _choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../choose-district-ghn/choose-district-ghn.component */ 55176);
/* harmony import */ var _choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../choose-ward-ghn/choose-ward-ghn.component */ 31541);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function AddAddressCustomerGhnComponent_ng_container_2_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function AddAddressCustomerGhnComponent_ng_container_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddAddressCustomerGhnComponent_ng_container_2_ng_template_16_ng_container_0_Template, 3, 3, "ng-container", 15);
} if (rf & 2) {
    const control_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r14.hasError("required"));
} }
function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_23_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_23_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.province.ProvinceName, " ");
} }
function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_24_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r18.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Province"), " ");
} }
function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_30_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.province.ProvinceName ? ctx_r20.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r10.district.DistrictName, " ");
} }
function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_31_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_31_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.province.ProvinceName ? ctx_r22.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "District"), " ");
} }
function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_37_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_37_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r24.district.DistrictName ? ctx_r24.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r12.ward.WardName, " ");
} }
function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_38_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_38_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.district.DistrictName ? ctx_r26.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Ward"), " ");
} }
const _c0 = function (a0) { return { opacity: a0 }; };
function AddAddressCustomerGhnComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "nz-form-control", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddAddressCustomerGhnComponent_ng_container_2_ng_template_16_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_23_Template, 2, 1, "nz-input-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_24_Template, 3, 3, "nz-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_30_Template, 2, 1, "nz-input-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_31_Template, 3, 3, "nz-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_37_Template, 2, 1, "nz-input-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, AddAddressCustomerGhnComponent_ng_container_2_nz_input_group_38_Template, 3, 3, "nz-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.addInformation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 17, "Receiver Information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 19, "Address"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 21, "Enter your address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 23, "Province"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.province.ProvinceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.province.ProvinceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](29, _c0, ctx_r0.province.ProvinceName ? 1 : 0.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 25, "District"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.district.DistrictName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.district.DistrictName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](31, _c0, ctx_r0.district.DistrictName ? 1 : 0.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 27, "Ward"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.ward.WardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.ward.WardName);
} }
function AddAddressCustomerGhnComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAddressCustomerGhnComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.createAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.addInformation.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 5, "Save"));
} }
function AddAddressCustomerGhnComponent_app_choose_province_ghn_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-choose-province-ghn", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelModalProvinceGhn", function AddAddressCustomerGhnComponent_app_choose_province_ghn_5_Template_app_choose_province_ghn_cancelModalProvinceGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.cancelModalProvinceGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chooseProvinceGhn", ctx_r3.chooseProvinceGhn)("token", ctx_r3.data_delivery.token);
} }
function AddAddressCustomerGhnComponent_app_choose_district_ghn_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-choose-district-ghn", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelModalDistrictGhn", function AddAddressCustomerGhnComponent_app_choose_district_ghn_6_Template_app_choose_district_ghn_cancelModalDistrictGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.cancelModalDistrictGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chooseDistrictGhn", ctx_r4.chooseDistrictGhn)("token", ctx_r4.data_delivery.token)("province_idModal", ctx_r4.province_idModal);
} }
function AddAddressCustomerGhnComponent_app_choose_ward_ghn_7_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-choose-ward-ghn", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelModalWardGhn", function AddAddressCustomerGhnComponent_app_choose_ward_ghn_7_Template_app_choose_ward_ghn_cancelModalWardGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.cancelModalWardGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chooseWardGhn", ctx_r5.chooseWardGhn)("token", ctx_r5.data_delivery.token)("district_idModal", ctx_r5.district_idModal);
} }
const _c1 = function () { return { overflow: "auto" }; };
class AddAddressCustomerGhnComponent {
    constructor(languageService, vhComponent, vhQuerySales) {
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.visible_add_address_ghn = false;
        this.closeAndGetValueAddAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
        // ------modal province--------
        this.chooseProvinceGhn = false;
        // ------modal district--------
        this.chooseDistrictGhn = false;
        // ------modal ward--------
        this.chooseWardGhn = false;
    }
    ngOnInit() {
        this.initForm();
        this.data_delivery = this.data_add_address_ghn.data_delivery;
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
    }
    createAddress() {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create address Giao Hang Nhanh ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            let checkAddress = this.checkAddress(this.addInformation.value);
            if (checkAddress.result) {
                this.vhComponent.showToast(2000, this.languageService.translate("This address already exists"), "alert-toast");
            }
            else {
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    this.vhQuerySales.addAddress(this.exportAddress()).then(res => {
                        this.vhComponent.hideLoading(0).then(() => {
                            if (res) {
                                this.vhComponent.showToast(2000, this.languageService.translate("This address has been created successfully"), "success-toast");
                                this.closeAndGetValueAddAddress.emit(res);
                            }
                        });
                    });
                });
            }
        })
            .catch(() => { });
    }
    exportAddress() {
        let data = {
            id_customer: this.data_add_address_ghn.billInfo.id_customer,
            type: 1,
            province_id: this.addInformation.value.province,
            province: this.province.ProvinceName,
            district_id: this.addInformation.value.district,
            district: this.district.DistrictName,
            ward_id: this.addInformation.value.ward,
            ward: this.ward.WardName,
            address: this.addInformation.value.address,
            date: new Date().toISOString(),
        };
        return data;
    }
    /**
    * hàm này dùng để check xem địa chỉ của khách hàng đã có trong database hay chưa
    * result : true là địa chỉ đã được lưu không cần lưu lại, false tức là phải lưu địa chỉ đó lại
    * */
    checkAddress(data) {
        let result = false;
        let id_address;
        //duyệt for trường hợp trùng địa chỉ thì return true để khỏi lưu lại
        for (let i in this.data_add_address_ghn.infoAddress) {
            if (this.data_add_address_ghn.infoAddress[i].ward_id == data.ward && this.data_add_address_ghn.infoAddress[i].address == data.address) {
                result = true;
                id_address = this.data_add_address_ghn.infoAddress[i]._id;
            }
        }
        return {
            result: result,
            id_address: id_address
        };
    }
    onClose() {
        this.closeAndGetValueAddAddress.emit(false);
    }
    chooseProvince() {
        this.chooseProvinceGhn = true;
    }
    cancelModalProvinceGhn(event) {
        if (event) {
            this.province = event;
            this.addInformation.controls.province.setValue(this.province.ProvinceID);
            this.ward = '';
            this.district = '';
        }
        this.chooseProvinceGhn = false;
    }
    chooseDistrict() {
        if (this.province.ProvinceName) {
            this.chooseDistrictGhn = true;
            this.province_idModal = this.province.ProvinceID ? this.province.ProvinceID : this.addInformation.value.province;
        }
    }
    cancelModalDistrictGhn(event) {
        if (event) {
            this.district = event;
            this.ward = '';
            this.addInformation.controls.district.setValue(this.district.DistrictID);
            this.chooseService = '';
        }
        this.chooseDistrictGhn = false;
    }
    chooseWard() {
        if (this.district.DistrictName) {
            this.chooseWardGhn = true;
            this.district_idModal = this.district.DistrictID ? this.district.DistrictID : this.addInformation.value.district;
        }
    }
    cancelModalWardGhn(event) {
        if (event) {
            this.ward = event;
            this.addInformation.controls.ward.setValue(this.ward.WardCode);
            this.chooseService = '';
        }
        this.chooseWardGhn = false;
    }
}
AddAddressCustomerGhnComponent.ɵfac = function AddAddressCustomerGhnComponent_Factory(t) { return new (t || AddAddressCustomerGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales)); };
AddAddressCustomerGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddAddressCustomerGhnComponent, selectors: [["app-add-address-customer-ghn"]], inputs: { visible_add_address_ghn: "visible_add_address_ghn", data_add_address_ghn: "data_add_address_ghn" }, outputs: { closeAndGetValueAddAddress: "closeAndGetValueAddAddress" }, decls: 8, vars: 12, consts: [[3, "nzFooter", "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], ["footerTpll", ""], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn", 4, "ngIf"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn", 4, "ngIf"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn", 4, "ngIf"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24"], [3, "nzErrorTip"], ["formControlName", "address", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], ["class", "input-group all-content-center", 3, "click", 4, "ngIf"], ["class", "input-group all-content-center placeholder", 3, "click", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 2, "margin", "15px 0", 3, "ngStyle"], [4, "ngIf"], [1, "input-group", "all-content-center", 3, "click"], [1, "input-group", "all-content-center", "placeholder", 3, "click"], [2, "float", "right"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", "margin", "0 5px", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", "margin", "0 5px", 3, "disabled", "click"], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn"]], template: function AddAddressCustomerGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnClose", function AddAddressCustomerGhnComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddAddressCustomerGhnComponent_ng_container_2_Template, 39, 33, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddAddressCustomerGhnComponent_ng_template_3_Template, 7, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddAddressCustomerGhnComponent_app_choose_province_ghn_5_Template, 1, 2, "app-choose-province-ghn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddAddressCustomerGhnComponent_app_choose_district_ghn_6_Template, 1, 3, "app-choose-district-ghn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddAddressCustomerGhnComponent_app_choose_ward_ghn_7_Template, 1, 3, "app-choose-ward-ghn", 5);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 9, "Create Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzFooter", _r1)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c1))("nzMaskClosable", true)("nzWidth", 450)("nzVisible", ctx.visible_add_address_ghn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chooseProvinceGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chooseDistrictGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chooseWardGhn);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__.NzDrawerContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_2__.ChooseProvinceGhnComponent, _choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_3__.ChooseDistrictGhnComponent, _choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_4__.ChooseWardGhnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".input-group[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hZGRyZXNzLWN1c3RvbWVyLWdobi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUlKIiwiZmlsZSI6ImFkZC1hZGRyZXNzLWN1c3RvbWVyLWdobi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5wdXQtZ3JvdXAucGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjOGM3Y2M7XHJcbn1cclxuaDYge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 55176:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/choose-district-ghn/choose-district-ghn.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseDistrictGhnComponent": () => (/* binding */ ChooseDistrictGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












function ChooseDistrictGhnComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-input-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ChooseDistrictGhnComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.search = $event; })("ngModelChange", function ChooseDistrictGhnComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.searchBar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Search for district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.search);
} }
function ChooseDistrictGhnComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChooseDistrictGhnComponent_ng_container_3_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.chooseDistrict(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.DistrictName);
} }
function ChooseDistrictGhnComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChooseDistrictGhnComponent_ng_container_3_div_2_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.list);
} }
class ChooseDistrictGhnComponent {
    constructor(ghnService, vhComponent, languageService, vhAlgorithm) {
        this.ghnService = ghnService;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhAlgorithm = vhAlgorithm;
        this.cancelModalDistrictGhn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.search = '';
        this.list = [];
        this.sublist = [];
        this.setHeight = {
            "height": "400px"
        };
    }
    ngOnInit() {
        this.getProvince();
    }
    ;
    dismiss() {
        this.cancelModalDistrictGhn.emit(false);
    }
    getProvince() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.ghnService.getDistrictGhn(this.token, this.province_idModal).then((res) => {
                this.vhComponent.hideLoading(0);
                this.list = res.data;
                this.sublist = this.list;
            }).catch(err => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(2000, this.languageService.translate('An error occured while getting district !'), "alert-toast");
            });
        });
    }
    chooseDistrict(item) {
        this.cancelModalDistrictGhn.emit(item);
    }
    searchBar(value) {
        if (value.trim().length) {
            this.list = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value.toLowerCase()), this.sublist, ["DistrictName"]);
        }
        else {
            this.list = this.sublist;
        }
    }
}
ChooseDistrictGhnComponent.ɵfac = function ChooseDistrictGhnComponent_Factory(t) { return new (t || ChooseDistrictGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm)); };
ChooseDistrictGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChooseDistrictGhnComponent, selectors: [["app-choose-district-ghn"]], inputs: { chooseDistrictGhn: "chooseDistrictGhn", token: "token", province_idModal: "province_idModal" }, outputs: { cancelModalDistrictGhn: "cancelModalDistrictGhn" }, decls: 4, vars: 5, consts: [[3, "nzBodyStyle", "nzFooter", "nzVisible", "nzWidth", "nzTitle", "nzOnCancel", "nzVisibleChange"], ["modalTitle", ""], [4, "nzModalContent"], [1, "nz-hover-border", "input"], ["type", "text", "nz-input", "", 1, "nz-hover-border", "input", 2, "font-size", "0.9rem", "border-radius", "10px", 3, "ngModel", "placeholder", "ngModelChange"], [1, "modalGhn"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ChooseDistrictGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnCancel", function ChooseDistrictGhnComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.dismiss(); })("nzVisibleChange", function ChooseDistrictGhnComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.chooseDistrictGhn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChooseDistrictGhnComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChooseDistrictGhnComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", ctx.setHeight)("nzFooter", null)("nzVisible", ctx.chooseDistrictGhn)("nzWidth", 400)("nzTitle", _r0);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".modalGhn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e8e8e8;\n}\n.modalGhn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  cursor: pointer;\n  margin: 10px 0;\n  color: #373737ba;\n}\n.nz-hover-border.input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 80%;\n}\n.ant-modal-header[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS1kaXN0cmljdC1naG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFPSSxnQ0FBQTtBQU5SO0FBQVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBQUo7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoiY2hvb3NlLWRpc3RyaWN0LWdobi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEdobiB7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzNzM3MzdiYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICB9XHJcbn1cclxuLm56LWhvdmVyLWJvcmRlci5pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uYW50LW1vZGFsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 24375:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/choose-method-ghn/choose-method-ghn.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseMethodGhnComponent": () => (/* binding */ ChooseMethodGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function ChooseMethodGhnComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "Select service"));
} }
function ChooseMethodGhnComponent_ng_container_3_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChooseMethodGhnComponent_ng_container_3_ion_item_3_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.chooseService(ctx_r5.flightService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx_r3.flightService.sort_name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 6, "Delivery time"), " :", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 8, ctx_r3.flightService.leadtime, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.vhAlgorythm.vhcurrencyunit(ctx_r3.flightService.service_fee), " ");
} }
function ChooseMethodGhnComponent_ng_container_3_ion_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChooseMethodGhnComponent_ng_container_3_ion_item_4_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.chooseService(ctx_r7.roadService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, ctx_r4.roadService.sort_name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 6, "Delivery time"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 8, ctx_r4.roadService.leadtime, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorythm.vhcurrencyunit(ctx_r4.roadService.service_fee), " ");
} }
function ChooseMethodGhnComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChooseMethodGhnComponent_ng_container_3_ion_item_3_Template, 13, 11, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ChooseMethodGhnComponent_ng_container_3_ion_item_4_Template, 13, 11, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.flightService);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.roadService);
} }
class ChooseMethodGhnComponent {
    constructor(ghnService, languageService, vhComponent, vhAlgorythm) {
        this.ghnService = ghnService;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhAlgorythm = vhAlgorythm;
        this.cancelModalMethodGhn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.data = [];
        this.setHeight = {
            "height": "400px"
        };
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        for (let i in this.dataToGetMethod.service) {
            if (this.dataToGetMethod.service[i].service_type_id == 1) {
                this.getServiceFlight(this.dataToGetMethod.service[i].service_id);
            }
            else if (this.dataToGetMethod.service[i].service_type_id == 2) {
                this.getServiceRoad(this.dataToGetMethod.service[i].service_id);
            }
        }
    }
    /**
    *Hàm trả về thông tin để chuẩn bị cho vào các hàm getService
    **/
    prepareInfo(service_id) {
        let info = {
            shop_id: this.dataToGetMethod.shop_id,
            to_district_id: this.dataToGetMethod.to_district_id,
            to_ward_code: this.dataToGetMethod.to_ward_code,
            height: this.dataToGetMethod.height,
            length: this.dataToGetMethod.length,
            weight: this.dataToGetMethod.weight,
            width: this.dataToGetMethod.width,
            insurance_value: this.dataToGetMethod.insurance_value,
            service_id: service_id,
            from_district_id: this.dataToGetMethod.from_district_id,
            from_ward_code: this.dataToGetMethod.from_ward_code
        };
        return info;
    }
    getServiceRoad(service_id) {
        this.vhComponent.showLoading('');
        let info = this.prepareInfo(service_id);
        this.ghnService.calculate_delivery_fee(this.dataToGetMethod.token, info).then((res) => {
            if (res.data) {
                this.ghnService.calculateTheExpectedDeliveryTime(this.dataToGetMethod.token, info).then((i) => {
                    this.vhComponent.hideLoading(0);
                    this.roadService = Object.assign({ service_id: info.service_id, sort_name: this.languageService.translate('Road'), leadtime: new Date(i.data.leadtime * 1000) }, res.data);
                }).catch(err => {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
                });
            }
        }).catch(err => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        });
    }
    getServiceFlight(service_id) {
        let info = this.prepareInfo(service_id);
        this.ghnService.calculate_delivery_fee(this.dataToGetMethod.token, info).then((res) => {
            if (res.data) {
                this.ghnService.calculateTheExpectedDeliveryTime(this.dataToGetMethod.token, info).then((i) => {
                    this.vhComponent.hideLoading(0);
                    this.flightService = Object.assign({ service_id: info.service_id, sort_name: this.languageService.translate('Flight'), leadtime: new Date(i.data.leadtime * 1000) }, res.data);
                }).catch(err => {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
                });
            }
        }).catch(err => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        });
    }
    dismiss() {
        this.cancelModalMethodGhn.emit(false);
    }
    chooseService(item) {
        this.cancelModalMethodGhn.emit(item);
    }
}
ChooseMethodGhnComponent.ɵfac = function ChooseMethodGhnComponent_Factory(t) { return new (t || ChooseMethodGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm)); };
ChooseMethodGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChooseMethodGhnComponent, selectors: [["app-choose-method-ghn"]], inputs: { dataToGetMethod: "dataToGetMethod", chooseMethod: "chooseMethod" }, outputs: { cancelModalMethodGhn: "cancelModalMethodGhn" }, decls: 4, vars: 5, consts: [[3, "nzBodyStyle", "nzFooter", "nzVisible", "nzWidth", "nzTitle", "nzOnCancel", "nzVisibleChange"], ["modalTitle", ""], [4, "nzModalContent"], [1, "modalGhn"], ["style", "cursor: pointer;", "class", "ion-no-padding", 3, "click", 4, "ngIf"], [1, "ion-no-padding", 2, "cursor", "pointer", 3, "click"], ["mode", "ios", 2, "text-align", "start", "margin-left", "15px"], ["mode", "ios", "color", "vh-black", 1, "name-category", 2, "font-size", "0.9rem", "font-weight", "700", "padding-bottom", "5px", "text-transform", "capitalize"], ["mode", "ios", "color", "vh-gray", 2, "font-size", "0.8rem"], ["mode", "ios", 2, "text-align", "end", "margin-right", "0px"], ["mode", "ios", "color", "vh-green", 2, "font-size", "0.8rem", "padding-bottom", "5px", "margin-right", "10px"], ["mode", "ios", 2, "text-align", "end", "margin-right", "0px", "margin-right", "10px"], ["mode", "ios", "color", "vh-green", 2, "font-size", "0.8rem", "padding-bottom", "5px"]], template: function ChooseMethodGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnCancel", function ChooseMethodGhnComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.dismiss(); })("nzVisibleChange", function ChooseMethodGhnComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.chooseMethod = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChooseMethodGhnComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChooseMethodGhnComponent_ng_container_3_Template, 5, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", ctx.setHeight)("nzFooter", null)("nzVisible", ctx.chooseMethod)("nzWidth", 400)("nzTitle", _r0);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaG9vc2UtbWV0aG9kLWdobi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4192:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/choose-province-ghn/choose-province-ghn.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseProvinceGhnComponent": () => (/* binding */ ChooseProvinceGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












function ChooseProvinceGhnComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-input-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ChooseProvinceGhnComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.search = $event; })("ngModelChange", function ChooseProvinceGhnComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.searchBar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Search for province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.search);
} }
function ChooseProvinceGhnComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChooseProvinceGhnComponent_ng_container_3_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.chooseProvince(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.ProvinceName);
} }
function ChooseProvinceGhnComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChooseProvinceGhnComponent_ng_container_3_div_2_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.list);
} }
class ChooseProvinceGhnComponent {
    constructor(ghnService, vhComponent, languageService, vhAlgorithm) {
        this.ghnService = ghnService;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhAlgorithm = vhAlgorithm;
        this.cancelModalProvinceGhn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.search = '';
        this.list = [];
        this.sublist = [];
        this.setHeight = {
            "height": "400px"
        };
    }
    ngOnInit() {
        this.getProvince();
    }
    ;
    dismiss() {
        this.cancelModalProvinceGhn.emit(false);
    }
    getProvince() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.ghnService.getProvinceGhn(this.token).then((res) => {
                this.vhComponent.hideLoading(0);
                this.list = res.data;
                this.sublist = this.list;
            }).catch(err => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(2000, this.languageService.translate('An error occured while getting provinces !'), "alert-toast");
            });
        });
    }
    chooseProvince(item) {
        this.cancelModalProvinceGhn.emit(item);
    }
    searchBar(value) {
        if (value.trim().length) {
            this.list = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value.toLowerCase()), this.sublist, ["ProvinceName"]);
        }
        else {
            this.list = this.sublist;
        }
    }
}
ChooseProvinceGhnComponent.ɵfac = function ChooseProvinceGhnComponent_Factory(t) { return new (t || ChooseProvinceGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm)); };
ChooseProvinceGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChooseProvinceGhnComponent, selectors: [["app-choose-province-ghn"]], inputs: { chooseProvinceGhn: "chooseProvinceGhn", token: "token" }, outputs: { cancelModalProvinceGhn: "cancelModalProvinceGhn" }, decls: 4, vars: 5, consts: [[3, "nzBodyStyle", "nzFooter", "nzVisible", "nzWidth", "nzTitle", "nzOnCancel", "nzVisibleChange"], ["modalTitle", ""], [4, "nzModalContent"], [1, "nz-hover-border", "input"], ["type", "text", "nz-input", "", 1, "nz-hover-border", "input", 2, "font-size", "0.9rem", "border-radius", "10px", 3, "ngModel", "placeholder", "ngModelChange"], [1, "modalGhn"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ChooseProvinceGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnCancel", function ChooseProvinceGhnComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.dismiss(); })("nzVisibleChange", function ChooseProvinceGhnComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.chooseProvinceGhn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChooseProvinceGhnComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChooseProvinceGhnComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", ctx.setHeight)("nzFooter", null)("nzVisible", ctx.chooseProvinceGhn)("nzWidth", 400)("nzTitle", _r0);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".modalGhn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e8e8e8;\n}\n.modalGhn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  cursor: pointer;\n  margin: 10px 0;\n  color: #373737ba;\n}\n.nz-hover-border.input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 80%;\n}\n.ant-modal-header[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS1wcm92aW5jZS1naG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFPSSxnQ0FBQTtBQU5SO0FBQVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUdBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBQUo7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoiY2hvb3NlLXByb3ZpbmNlLWdobi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbEdobiB7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgY29sb3I6ICMzNzM3MzdiYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICB9XHJcbn1cclxuLm56LWhvdmVyLWJvcmRlci5pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uYW50LW1vZGFsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 31541:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/choose-ward-ghn/choose-ward-ghn.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseWardGhnComponent": () => (/* binding */ ChooseWardGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












function ChooseWardGhnComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-input-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ChooseWardGhnComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.search = $event; })("ngModelChange", function ChooseWardGhnComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.searchBar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Search for ward"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.search);
} }
function ChooseWardGhnComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChooseWardGhnComponent_ng_container_3_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.chooseProvince(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.WardName);
} }
function ChooseWardGhnComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChooseWardGhnComponent_ng_container_3_div_2_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.list);
} }
class ChooseWardGhnComponent {
    constructor(ghnService, vhComponent, languageService, vhAlgorithm) {
        this.ghnService = ghnService;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhAlgorithm = vhAlgorithm;
        this.cancelModalWardGhn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.search = '';
        this.list = [];
        this.sublist = [];
        this.setHeight = {
            "height": "400px"
        };
    }
    ngOnInit() {
        this.getProvince();
    }
    ;
    dismiss() {
        this.cancelModalWardGhn.emit(false);
    }
    getProvince() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.ghnService.getWardGhn(this.token, this.district_idModal).then((res) => {
                this.vhComponent.hideLoading(0);
                this.list = res.data;
                this.sublist = this.list;
            }).catch(err => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(2000, this.languageService.translate('An error occured while getting district !'), "alert-toast");
            });
        });
    }
    chooseProvince(item) {
        this.cancelModalWardGhn.emit(item);
    }
    searchBar(value) {
        if (value.trim().length) {
            this.list = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value.toLowerCase()), this.sublist, ["WardName"]);
        }
        else {
            this.list = this.sublist;
        }
    }
}
ChooseWardGhnComponent.ɵfac = function ChooseWardGhnComponent_Factory(t) { return new (t || ChooseWardGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_0__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm)); };
ChooseWardGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChooseWardGhnComponent, selectors: [["app-choose-ward-ghn"]], inputs: { chooseWardGhn: "chooseWardGhn", district_idModal: "district_idModal", token: "token" }, outputs: { cancelModalWardGhn: "cancelModalWardGhn" }, decls: 4, vars: 5, consts: [[3, "nzBodyStyle", "nzFooter", "nzVisible", "nzWidth", "nzTitle", "nzOnCancel", "nzVisibleChange"], ["modalTitle", ""], [4, "nzModalContent"], [1, "nz-hover-border", "input"], ["type", "text", "nz-input", "", 1, "nz-hover-border", "input", 2, "font-size", "0.9rem", "border-radius", "10px", 3, "ngModel", "placeholder", "ngModelChange"], [1, "modalGhn"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ChooseWardGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnCancel", function ChooseWardGhnComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.dismiss(); })("nzVisibleChange", function ChooseWardGhnComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.chooseWardGhn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChooseWardGhnComponent_ng_template_1_Template, 3, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChooseWardGhnComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", ctx.setHeight)("nzFooter", null)("nzVisible", ctx.chooseWardGhn)("nzWidth", 400)("nzTitle", _r0);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".modalGhn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e8e8e8;\n}\n.modalGhn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  cursor: pointer;\n  margin: 10px 0;\n  color: #373737ba;\n}\n.nz-hover-border.input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 80%;\n}\n.ant-modal-header[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS13YXJkLWdobi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQU9JLGdDQUFBO0FBTlI7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVaO0FBR0E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJjaG9vc2Utd2FyZC1naG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxHaG4ge1xyXG4gICAgZGl2IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzczNzM3YmE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgfVxyXG59XHJcbi5uei1ob3Zlci1ib3JkZXIuaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLmFudC1tb2RhbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 84326:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/edit-address-customer-ghn/edit-address-customer-ghn.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAddressCustomerGhnComponent": () => (/* binding */ EditAddressCustomerGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../choose-province-ghn/choose-province-ghn.component */ 4192);
/* harmony import */ var _choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../choose-district-ghn/choose-district-ghn.component */ 55176);
/* harmony import */ var _choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../choose-ward-ghn/choose-ward-ghn.component */ 31541);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function EditAddressCustomerGhnComponent_ng_container_2_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function EditAddressCustomerGhnComponent_ng_container_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, EditAddressCustomerGhnComponent_ng_container_2_ng_template_16_ng_container_0_Template, 3, 3, "ng-container", 15);
} if (rf & 2) {
    const control_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r14.hasError("required"));
} }
function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_23_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_23_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.province.ProvinceName, " ");
} }
function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_24_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r18.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Province"), " ");
} }
function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_30_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.province.ProvinceName ? ctx_r20.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r10.district.DistrictName, " ");
} }
function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_31_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_31_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.province.ProvinceName ? ctx_r22.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "District"), " ");
} }
function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_37_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_37_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r24.district.DistrictName ? ctx_r24.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r12.ward.WardName, " ");
} }
function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_38_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_38_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.district.DistrictName ? ctx_r26.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Ward"), " ");
} }
const _c0 = function (a0) { return { opacity: a0 }; };
function EditAddressCustomerGhnComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "nz-form-control", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, EditAddressCustomerGhnComponent_ng_container_2_ng_template_16_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_23_Template, 2, 1, "nz-input-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_24_Template, 3, 3, "nz-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_30_Template, 2, 1, "nz-input-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_31_Template, 3, 3, "nz-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_37_Template, 2, 1, "nz-input-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, EditAddressCustomerGhnComponent_ng_container_2_nz_input_group_38_Template, 3, 3, "nz-input-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.addInformation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 17, "Receiver Information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 19, "Address"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzErrorTip", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 21, "Enter your address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 23, "Province"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.province.ProvinceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.province.ProvinceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](29, _c0, ctx_r0.province.ProvinceName ? 1 : 0.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 25, "District"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.district.DistrictName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.district.DistrictName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](31, _c0, ctx_r0.district.DistrictName ? 1 : 0.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 27, "Ward"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.ward.WardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.ward.WardName);
} }
function EditAddressCustomerGhnComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.deleteAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditAddressCustomerGhnComponent_ng_template_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.updateAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "Delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.addInformation.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 8, "Update"));
} }
function EditAddressCustomerGhnComponent_app_choose_province_ghn_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-choose-province-ghn", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelModalProvinceGhn", function EditAddressCustomerGhnComponent_app_choose_province_ghn_5_Template_app_choose_province_ghn_cancelModalProvinceGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r32.cancelModalProvinceGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chooseProvinceGhn", ctx_r3.chooseProvinceGhn)("token", ctx_r3.data_delivery.token);
} }
function EditAddressCustomerGhnComponent_app_choose_district_ghn_6_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-choose-district-ghn", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelModalDistrictGhn", function EditAddressCustomerGhnComponent_app_choose_district_ghn_6_Template_app_choose_district_ghn_cancelModalDistrictGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.cancelModalDistrictGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chooseDistrictGhn", ctx_r4.chooseDistrictGhn)("token", ctx_r4.data_delivery.token)("province_idModal", ctx_r4.province_idModal);
} }
function EditAddressCustomerGhnComponent_app_choose_ward_ghn_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-choose-ward-ghn", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelModalWardGhn", function EditAddressCustomerGhnComponent_app_choose_ward_ghn_7_Template_app_choose_ward_ghn_cancelModalWardGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.cancelModalWardGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("chooseWardGhn", ctx_r5.chooseWardGhn)("token", ctx_r5.data_delivery.token)("district_idModal", ctx_r5.district_idModal);
} }
const _c1 = function () { return { overflow: "auto" }; };
class EditAddressCustomerGhnComponent {
    constructor(languageService, vhComponent, vhQuerySales) {
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.visible_edit_address_ghn = false;
        this.closeAndGetValueEditAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
        // ------modal province--------
        this.chooseProvinceGhn = false;
        // ------modal district--------
        this.chooseDistrictGhn = false;
        // ------modal ward--------
        this.chooseWardGhn = false;
    }
    ngOnInit() {
        this.initForm();
        this.data_delivery = this.data_edit_address_ghn.data_delivery;
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data_edit_address_ghn.infoAddressChose.address, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data_edit_address_ghn.infoAddressChose.province_id, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data_edit_address_ghn.infoAddressChose.district_id, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.data_edit_address_ghn.infoAddressChose.ward_id, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.province.ProvinceName = this.data_edit_address_ghn.infoAddressChose.province;
        this.district.DistrictName = this.data_edit_address_ghn.infoAddressChose.district;
        this.ward.WardName = this.data_edit_address_ghn.infoAddressChose.ward;
    }
    /**
    * hàm này dùng để check xem địa chỉ của khách hàng đã có trong database hay chưa
    * result : true là địa chỉ đã được lưu không cần lưu lại, false tức là phải lưu địa chỉ đó lại
    * */
    checkAddress(data) {
        let result = false;
        let id_address;
        //duyệt for trường hợp trùng địa chỉ thì return true để khỏi lưu lại
        for (let i in this.data_edit_address_ghn.infoAddress) {
            if (this.data_edit_address_ghn.infoAddress[i].ward_id == data.ward && this.data_edit_address_ghn.infoAddress[i].address == data.address) {
                result = true;
                id_address = this.data_edit_address_ghn.infoAddress[i]._id;
            }
        }
        return {
            result: result,
            id_address: id_address
        };
    }
    prepareData() {
        let data = {
            id_customer: this.data_edit_address_ghn.billInfo.id_customer,
            type: 1,
            province_id: this.addInformation.value.province,
            province: this.province.ProvinceName,
            district_id: this.addInformation.value.district,
            district: this.district.DistrictName,
            ward_id: this.addInformation.value.ward,
            ward: this.ward.WardName,
            address: this.addInformation.value.address,
            _id: this.data_edit_address_ghn.infoAddressChose._id
        };
        return data;
    }
    updateAddress() {
        let checkAddress = this.checkAddress(this.addInformation.value);
        if (checkAddress.result) {
            this.vhComponent.showToast(2000, this.languageService.translate("This address already exists"), "alert-toast");
        }
        else {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.vhQuerySales.updateAddress(this.data_edit_address_ghn.infoAddressChose._id, this.prepareData()).then((res) => {
                    this.vhComponent.hideLoading(0).then(() => {
                        this.closeAndGetValueEditAddress.emit(this.prepareData());
                    });
                });
            });
        }
    }
    deleteAddress() {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to delete address ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.vhQuerySales.deleteAddress(this.data_edit_address_ghn.infoAddressChose._id).then((res) => {
                    this.vhComponent.hideLoading(0).then(() => {
                        if (res) {
                            this.vhComponent.showToast(2000, this.languageService.translate("This address has been deleted successfully"), "success-toast");
                            this.closeAndGetValueEditAddress.emit(true);
                        }
                    });
                });
            });
        })
            .catch(() => { });
    }
    goBack() {
        this.closeAndGetValueEditAddress.emit(false);
    }
    chooseProvince() {
        this.chooseProvinceGhn = true;
    }
    cancelModalProvinceGhn(event) {
        if (event) {
            this.province = event;
            this.addInformation.controls.province.setValue(this.province.ProvinceID);
            this.ward = '';
            this.district = '';
        }
        this.chooseProvinceGhn = false;
    }
    chooseDistrict() {
        if (this.province.ProvinceName) {
            this.chooseDistrictGhn = true;
            this.province_idModal = this.province.ProvinceID ? this.province.ProvinceID : this.addInformation.value.province;
        }
    }
    cancelModalDistrictGhn(event) {
        if (event) {
            this.district = event;
            this.ward = '';
            this.addInformation.controls.district.setValue(this.district.DistrictID);
            this.chooseService = '';
        }
        this.chooseDistrictGhn = false;
    }
    chooseWard() {
        if (this.district.DistrictName) {
            this.chooseWardGhn = true;
            this.district_idModal = this.district.DistrictID ? this.district.DistrictID : this.addInformation.value.district;
        }
    }
    cancelModalWardGhn(event) {
        if (event) {
            this.ward = event;
            this.addInformation.controls.ward.setValue(this.ward.WardCode);
            this.chooseService = '';
        }
        this.chooseWardGhn = false;
    }
}
EditAddressCustomerGhnComponent.ɵfac = function EditAddressCustomerGhnComponent_Factory(t) { return new (t || EditAddressCustomerGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales)); };
EditAddressCustomerGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EditAddressCustomerGhnComponent, selectors: [["app-edit-address-customer-ghn"]], inputs: { visible_edit_address_ghn: "visible_edit_address_ghn", data_edit_address_ghn: "data_edit_address_ghn" }, outputs: { closeAndGetValueEditAddress: "closeAndGetValueEditAddress" }, decls: 8, vars: 12, consts: [[3, "nzFooter", "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], ["footerTpll", ""], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn", 4, "ngIf"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn", 4, "ngIf"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn", 4, "ngIf"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24"], [3, "nzErrorTip"], ["formControlName", "address", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], ["class", "input-group all-content-center", 3, "click", 4, "ngIf"], ["class", "input-group all-content-center placeholder", 3, "click", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 2, "margin", "15px 0", 3, "ngStyle"], [4, "ngIf"], [1, "input-group", "all-content-center", 3, "click"], [1, "input-group", "all-content-center", "placeholder", 3, "click"], [2, "float", "right"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", "margin", "0 5px", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", "margin", "0 5px", 3, "disabled", "click"], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn"]], template: function EditAddressCustomerGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnClose", function EditAddressCustomerGhnComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EditAddressCustomerGhnComponent_ng_container_2_Template, 39, 33, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EditAddressCustomerGhnComponent_ng_template_3_Template, 10, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, EditAddressCustomerGhnComponent_app_choose_province_ghn_5_Template, 1, 2, "app-choose-province-ghn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EditAddressCustomerGhnComponent_app_choose_district_ghn_6_Template, 1, 3, "app-choose-district-ghn", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, EditAddressCustomerGhnComponent_app_choose_ward_ghn_7_Template, 1, 3, "app-choose-ward-ghn", 5);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 9, "Create Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzFooter", _r1)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c1))("nzMaskClosable", true)("nzWidth", 450)("nzVisible", ctx.visible_edit_address_ghn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chooseProvinceGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chooseDistrictGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.chooseWardGhn);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_8__.NzDrawerContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_2__.ChooseProvinceGhnComponent, _choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_3__.ChooseDistrictGhnComponent, _choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_4__.ChooseWardGhnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".input-group[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWRkcmVzcy1jdXN0b21lci1naG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFJSiIsImZpbGUiOiJlZGl0LWFkZHJlc3MtY3VzdG9tZXItZ2huLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIHtcclxuICAgIHBhZGRpbmc6IDRweCAxMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbnB1dC1ncm91cC5wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2M4YzdjYztcclxufVxyXG5oNiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 26227:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/list-address-customer-ghn/list-address-customer-ghn.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListAddressCustomerGhnComponent": () => (/* binding */ ListAddressCustomerGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _add_address_customer_ghn_add_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-address-customer-ghn/add-address-customer-ghn.component */ 43443);
/* harmony import */ var _edit_address_customer_ghn_edit_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-address-customer-ghn/edit-address-customer-ghn.component */ 84326);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function ListAddressCustomerGhnComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "No data"), " ");
} }
function ListAddressCustomerGhnComponent_ng_container_2_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAddressCustomerGhnComponent_ng_container_2_ion_item_3_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.chooseAddress(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAddressCustomerGhnComponent_ng_container_2_ion_item_3_Template_ion_button_click_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r10.openEditAddressGhn(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](" ", item_r7.address, ", ", item_r7.ward, ", ", item_r7.district, ", ", item_r7.province, " ");
} }
function ListAddressCustomerGhnComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListAddressCustomerGhnComponent_ng_container_2_div_1_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ListAddressCustomerGhnComponent_ng_container_2_ion_item_3_Template, 5, 4, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.infoAddress.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.infoAddress);
} }
function ListAddressCustomerGhnComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAddressCustomerGhnComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAddressCustomerGhnComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.openAddAddressGhn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "Add"));
} }
function ListAddressCustomerGhnComponent_app_add_address_customer_ghn_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-add-address-customer-ghn", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeAndGetValueAddAddress", function ListAddressCustomerGhnComponent_app_add_address_customer_ghn_5_Template_app_add_address_customer_ghn_closeAndGetValueAddAddress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.closeAndGetValueAddAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible_add_address_ghn", ctx_r3.visible_add_address_ghn)("data_add_address_ghn", ctx_r3.data_add_address_ghn);
} }
function ListAddressCustomerGhnComponent_app_edit_address_customer_ghn_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-edit-address-customer-ghn", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeAndGetValueEditAddress", function ListAddressCustomerGhnComponent_app_edit_address_customer_ghn_6_Template_app_edit_address_customer_ghn_closeAndGetValueEditAddress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.closeAndGetValueEditAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible_edit_address_ghn", ctx_r4.visible_edit_address_ghn)("data_edit_address_ghn", ctx_r4.data_edit_address_ghn);
} }
const _c0 = function () { return { overflow: "auto" }; };
class ListAddressCustomerGhnComponent {
    constructor(languageService, vhComponent, vhQuerySales) {
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.visible_list_address = false;
        this.onCloseListAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.infoAddress = [];
        // -----modal add--------
        this.visible_add_address_ghn = false;
        // -----modal edit--------
        this.visible_edit_address_ghn = false;
    }
    ngOnInit() {
        this.getData();
    }
    ionViewWillEnter() {
    }
    getData() {
        this.vhQuerySales.refreshLocalAddresss().then(() => {
            this.infoAddress = this.vhQuerySales.getlocalAddresss().filter(item => item.type == 1 && item.id_customer == this.data_list_address_ghn.billInfo.id_customer).reverse();
        });
    }
    chooseAddress(item) {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to use this address ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.vhQuerySales.updateAddress(item._id, { date: new Date().toISOString() }).then((res) => {
                    this.vhComponent.hideLoading(0).then(() => {
                        if (res) {
                            this.onCloseListAddress.emit(item);
                        }
                    });
                });
            });
        })
            .catch(() => { });
    }
    onClose() {
        this.onCloseListAddress.emit(false);
    }
    openAddAddressGhn() {
        this.data_add_address_ghn = {
            billInfo: this.data_list_address_ghn.billInfo,
            data_delivery: this.data_list_address_ghn.data_delivery,
            infoAddress: this.infoAddress
        };
        this.visible_add_address_ghn = true;
    }
    closeAndGetValueAddAddress(event) {
        if (event) {
            this.getData();
            this.onCloseListAddress.emit(event);
        }
        this.visible_add_address_ghn = false;
    }
    openEditAddressGhn(item) {
        this.data_edit_address_ghn = {
            billInfo: this.data_list_address_ghn.billInfo,
            data_delivery: this.data_list_address_ghn.data_delivery,
            infoAddress: this.data_list_address_ghn.infoAddress,
            infoAddressChose: item
        };
        this.visible_edit_address_ghn = true;
    }
    closeAndGetValueEditAddress(event) {
        if (event) {
            this.getData();
            this.onCloseListAddress.emit(event);
        }
        this.visible_edit_address_ghn = false;
    }
}
ListAddressCustomerGhnComponent.ɵfac = function ListAddressCustomerGhnComponent_Factory(t) { return new (t || ListAddressCustomerGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales)); };
ListAddressCustomerGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListAddressCustomerGhnComponent, selectors: [["app-list-address-customer-ghn"]], inputs: { visible_list_address: "visible_list_address", data_list_address_ghn: "data_list_address_ghn" }, outputs: { onCloseListAddress: "onCloseListAddress" }, decls: 7, vars: 11, consts: [[3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzFooter", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], ["footerTpl", ""], [3, "visible_add_address_ghn", "data_add_address_ghn", "closeAndGetValueAddAddress", 4, "ngIf"], [3, "visible_edit_address_ghn", "data_edit_address_ghn", "closeAndGetValueEditAddress", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "custom-address-customer"], ["class", "ion-no-padding", 3, "click", 4, "ngFor", "ngForOf"], [1, "no-data"], [1, "ion-no-padding", 3, "click"], [1, "ion-text-wrap", 2, "font-size", "0.9rem", "color", "var(--ion-color-vh-black)", "margin", "0", "padding-left", "6px"], ["mode", "ios", "slot", "end", "fill", "clear", 1, "ion-no-padding", "ion-no-margin", 2, "color", "var(--ion-color-vh-black)", 3, "click"], ["name", "create-outline", "slot", "end"], [2, "float", "right"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", "margin", "0 5px", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", "margin", "0 5px", 3, "click"], [3, "visible_add_address_ghn", "data_add_address_ghn", "closeAndGetValueAddAddress"], [3, "visible_edit_address_ghn", "data_edit_address_ghn", "closeAndGetValueEditAddress"]], template: function ListAddressCustomerGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnClose", function ListAddressCustomerGhnComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ListAddressCustomerGhnComponent_ng_container_2_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ListAddressCustomerGhnComponent_ng_template_3_Template, 7, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ListAddressCustomerGhnComponent_app_add_address_customer_ghn_5_Template, 1, 2, "app-add-address-customer-ghn", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ListAddressCustomerGhnComponent_app_edit_address_customer_ghn_6_Template, 1, 2, "app-edit-address-customer-ghn", 4);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 8, "Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0))("nzMaskClosable", true)("nzWidth", 450)("nzFooter", _r1)("nzVisible", ctx.visible_list_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visible_add_address_ghn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visible_edit_address_ghn);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _add_address_customer_ghn_add_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_2__.AddAddressCustomerGhnComponent, _edit_address_customer_ghn_edit_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_3__.EditAddressCustomerGhnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".custom-address-customer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtYWRkcmVzcy1jdXN0b21lci1naG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FBQVIiLCJmaWxlIjoibGlzdC1hZGRyZXNzLWN1c3RvbWVyLWdobi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYWRkcmVzcy1jdXN0b21lciB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 39353:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/components/shipping-bill-history/shipping-bill-history.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingBillHistoryComponent": () => (/* binding */ ShippingBillHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function ShippingBillHistoryComponent_ng_container_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-note", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, item_r4.updated_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, item_r4.status));
} }
function ShippingBillHistoryComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShippingBillHistoryComponent_ng_container_2_div_1_div_1_Template, 7, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data_history_bills.history);
} }
function ShippingBillHistoryComponent_ng_container_2_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-note", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, item_r6.data.updated_date, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, item_r6.status));
} }
function ShippingBillHistoryComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShippingBillHistoryComponent_ng_container_2_div_2_div_1_Template, 7, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.data_history_bills.history);
} }
function ShippingBillHistoryComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShippingBillHistoryComponent_ng_container_2_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShippingBillHistoryComponent_ng_container_2_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data_history_bills.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.data_history_bills.history.length);
} }
const _c0 = function () { return { overflow: "auto" }; };
class ShippingBillHistoryComponent {
    constructor() {
        this.visible_history = false;
        this.onCloseHistoryBill = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onClose() {
        this.onCloseHistoryBill.emit(false);
    }
}
ShippingBillHistoryComponent.ɵfac = function ShippingBillHistoryComponent_Factory(t) { return new (t || ShippingBillHistoryComponent)(); };
ShippingBillHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShippingBillHistoryComponent, selectors: [["app-shipping-bill-history"]], inputs: { visible_history: "visible_history", data_history_bills: "data_history_bills" }, outputs: { onCloseHistoryBill: "onCloseHistoryBill" }, decls: 3, vars: 8, consts: [[3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], ["class", "history_list", 4, "ngIf"], [1, "history_list"], [4, "ngFor", "ngForOf"], ["slot", "end"]], template: function ShippingBillHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function ShippingBillHistoryComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShippingBillHistoryComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, "Shipping history"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("nzMaskClosable", false)("nzWidth", 400)("nzVisible", ctx.visible_history);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonNote], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".history_list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.history_list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n  color: var(--ion-color-vh-black);\n}\n.history_list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  font-weight: initial;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nLWJpbGwtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBRVI7QUFEUTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFHWiIsImZpbGUiOiJzaGlwcGluZy1iaWxsLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yeV9saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 51728:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/create-bill-customer/create-bill-customer.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillCustomerComponent": () => (/* binding */ CreateBillCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_list_address_customer_ghn_list_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/list-address-customer-ghn/list-address-customer-ghn.component */ 26227);
/* harmony import */ var _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/choose-method-ghn/choose-method-ghn.component */ 24375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























function CreateBillCustomerComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function CreateBillCustomerComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateBillCustomerComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r26.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r26.hasError("required"));
} }
function CreateBillCustomerComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r29.hasError("required"));
} }
function CreateBillCustomerComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.currentAddress.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", ctx_r4.currentAddress.ward, ", ", ctx_r4.currentAddress.district, ", ", ctx_r4.currentAddress.province, "");
} }
function CreateBillCustomerComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r31.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r31.quantity, " ");
} }
function CreateBillCustomerComponent_ng_template_78_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_78_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 1600kg"), " ");
} }
function CreateBillCustomerComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_78_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateBillCustomerComponent_ng_template_78_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r32.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r32.hasError("max"));
} }
function CreateBillCustomerComponent_ng_template_91_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_91_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 200cm"), " ");
} }
function CreateBillCustomerComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_91_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateBillCustomerComponent_ng_template_91_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r35.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r35.hasError("max"));
} }
function CreateBillCustomerComponent_ng_template_102_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_102_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 200cm"), " ");
} }
function CreateBillCustomerComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_102_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateBillCustomerComponent_ng_template_102_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r38.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r38.hasError("max"));
} }
function CreateBillCustomerComponent_ng_template_113_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_113_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 200cm"), " ");
} }
function CreateBillCustomerComponent_ng_template_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_113_ng_container_0_Template, 3, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateBillCustomerComponent_ng_template_113_ng_container_1_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r41.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r41.hasError("max"));
} }
function CreateBillCustomerComponent_ng_template_130_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_130_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r44.hasError("required"));
} }
function CreateBillCustomerComponent_ng_template_142_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillCustomerComponent_ng_template_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerComponent_ng_template_142_ng_container_0_Template, 3, 3, "ng-container", 64);
} if (rf & 2) {
    const control_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r46.hasError("required"));
} }
function CreateBillCustomerComponent_p_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Select service"), "");
} }
function CreateBillCustomerComponent_p_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r20.chooseService.sort_name, " - ", ctx_r20.vhAlgorithm.vhcurrencyunit(ctx_r20.chooseService.service_fee), "");
} }
function CreateBillCustomerComponent_p_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "Delivery time"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 4, ctx_r21.chooseService.leadtime, "dd/MM/yyyy"), "");
} }
function CreateBillCustomerComponent_nz_option_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 70);
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLabel", option_r48.name)("nzValue", option_r48.value);
} }
function CreateBillCustomerComponent_nz_option_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 70);
} if (rf & 2) {
    const option_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLabel", option_r49.name)("nzValue", option_r49.value);
} }
function CreateBillCustomerComponent_app_list_address_customer_ghn_210_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-list-address-customer-ghn", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onCloseListAddress", function CreateBillCustomerComponent_app_list_address_customer_ghn_210_Template_app_list_address_customer_ghn_onCloseListAddress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r50.onCloseListAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data_list_address_ghn", ctx_r24.data_list_address_ghn)("visible_list_address", ctx_r24.visible_list_address);
} }
function CreateBillCustomerComponent_app_choose_method_ghn_211_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-choose-method-ghn", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cancelModalMethodGhn", function CreateBillCustomerComponent_app_choose_method_ghn_211_Template_app_choose_method_ghn_cancelModalMethodGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r52.cancelModalMethodGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chooseMethod", ctx_r25.chooseMethod)("dataToGetMethod", ctx_r25.dataToGetMethod);
} }
const _c0 = function () { return { y: "200px" }; };
const _c1 = function (a0) { return { opacity: a0 }; };
const _c2 = function () { return { standalone: true }; };
class CreateBillCustomerComponent {
    constructor(router, vhComponent, vhQuerySales, languageService, ghnService, vhAlgorithm) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.ghnService = ghnService;
        this.vhAlgorithm = vhAlgorithm;
        this.billDetails = [];
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
        this.chooseService = {};
        this.infoAddress = [];
        this.currentAddress = {
            address: '',
            ward: '',
            district: '',
            province: ''
        };
        this.valueRequireNote = 1;
        this.valueListPayment = 1;
        this.listRequireNote = [
            {
                value: 1,
                name: this.languageService.translate("Not allow to unpack")
            },
            {
                value: 2,
                name: this.languageService.translate("Allow to try")
            },
            {
                value: 3,
                name: this.languageService.translate("Allow to unpack & not to try")
            },
        ];
        this.listPaymentType = [
            {
                value: 1,
                name: this.languageService.translate("Paid by seller")
            },
            {
                value: 2,
                name: this.languageService.translate("Pay by receiver")
            },
        ];
        this.checkPrinter = false;
        // ------modal province--------
        this.chooseProvinceGhn = false;
        // ------modal district--------
        this.chooseDistrictGhn = false;
        // ------modal ward--------
        this.chooseWardGhn = false;
        // ------modal choose--------
        this.chooseMethod = false;
        // ------drawer list address-----
        this.visible_list_address = false;
        this.billInfo = this.router.getCurrentNavigation().extras.state.billInfo;
        this.data_delivery = this.router.getCurrentNavigation().extras.state.data_delivery;
        this.dataSearchAndDate = this.router.getCurrentNavigation().extras.state.dataSearchAndDate;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(200)]),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(200)]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(1600000)]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(200)]),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            cod: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[0-9,]{1,10}$")]),
            orderValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[0-9,]{1,10}$")]),
            transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            required_note: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('KHONGCHOXEMHANG', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
            payment_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('1', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.cod_amount = this.vhAlgorithm.vhnumeral('.cod_amount');
            this.insurance_value = this.vhAlgorithm.vhnumeral('.order_value_amount');
        });
    }
    //lấy dữ liệu billDetail
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill_details_byId_bill(this.billInfo._id),
                this.vhQuerySales.getlocalCustomer(this.billInfo.id_customer),
                this.ghnService.connectTokenGhn(this.data_delivery.token),
                this.vhQuerySales.getlocalAddresss()
            ]).then((res) => {
                if (res[0]) {
                    this.billDetails = res[0].map(item => {
                        let nameProduct = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                        return Object.assign(Object.assign({}, item), { name_product: nameProduct });
                    });
                    this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.billInfo, this.billDetails, this.vhQuerySales);
                }
                if (res[1]) {
                    this.infoCustomer = res[1];
                    this.addInformation.controls.name.setValue(this.infoCustomer.name);
                    this.addInformation.controls.phone.setValue(this.infoCustomer.phone);
                }
                if (res[2]) {
                    this.shops = res[2].data.shops;
                    for (let i in this.shops) {
                        if (this.shops[i]._id == this.data_delivery.shop_id) {
                            this.data_delivery = Object.assign(Object.assign({}, this.data_delivery), { name: this.shops[i].name, phone: this.shops[i].phone, address: this.shops[i].address, district_id: this.shops[i].district_id, ward_code: this.shops[i].ward_code });
                        }
                    }
                }
                if (res[3]) {
                    let address = res[3].filter(item => item.type == 1 && item.id_customer == this.billInfo.id_customer).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];
                    if (address) {
                        this.currentAddress = address;
                        this.province.ProvinceName = this.currentAddress.province;
                        this.district.DistrictName = this.currentAddress.district;
                        this.ward.WardName = this.currentAddress.ward;
                        this.addInformation.controls.province.setValue(this.currentAddress.province_id);
                        this.addInformation.controls.district.setValue(this.currentAddress.district_id);
                        this.addInformation.controls.ward.setValue(this.currentAddress.ward_id);
                        this.addInformation.controls.address.setValue(this.currentAddress.address);
                        this.getServive();
                    }
                }
                let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                if (printer)
                    this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
            });
        }).finally(() => this.vhComponent.hideLoading(0));
    }
    //hàm này dùng để get về các phương thức giao hàng : đi bộ, bay , tiết kiệm
    getServive() {
        let data = {
            shop_id: this.data_delivery.shop_id,
            from_district_id: this.data_delivery.district_id,
            to_district_id: this.addInformation.value.district
        };
        this.vhComponent.showLoading('');
        this.ghnService.getServiceDelivery(this.data_delivery.token, data).then((res) => {
            this.vhComponent.hideLoading(0);
            this.service = res.data.filter(item => {
                return item.service_type_id == 1 || item.service_type_id == 2;
            });
        }).catch(err => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.showToast(2000, this.languageService.translate('An error occurred while getting data !'), "alert-toast");
        });
    }
    convertProducts() {
        let data = [];
        this.billDetails.forEach(item => {
            data.push({
                name: item.name_product,
                quantity: item.quantity,
                id: item.id_product
            });
        });
        return data;
    }
    prepareDataToCreateOrder() {
        let data = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_name: this.addInformation.value.name,
            to_phone: this.addInformation.value.phone,
            to_address: this.addInformation.value.address,
            to_ward_code: this.addInformation.value.ward,
            to_district_id: this.addInformation.value.district,
            weight: this.productInfo.value.weight,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            width: this.productInfo.value.width,
            payment_type_id: +this.deliveryInfo.value.payment_type_id,
            required_note: this.deliveryInfo.value.required_note,
            service_id: this.deliveryInfo.value.transport,
            cod_amount: parseInt(this.cod_amount.getRawValue()),
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            items: this.convertProducts(),
            note: this.deliveryInfo.value.note,
        };
        return data;
    }
    createOrder(print) {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create order ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.ghnService.createOrderGhn(this.prepareDataToCreateOrder()).then((res) => {
                    this.invoice.setOrderCode(res.data.order_code);
                    this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then(() => {
                        if (print) {
                            this.ghnService.getInfoOrder(this.data_delivery.token, res.data.order_code).then((ress) => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.billInfo.data = ress.data;
                                    this.billInfo.order_code = res.data.order_code;
                                    this.showPrint();
                                });
                            });
                        }
                        else {
                            this.vhComponent.hideLoading(0).then(() => {
                                this.goBack();
                                this.vhComponent.showToast(2000, this.languageService.translate('Create order successfully !'), "success-toast");
                            });
                        }
                    });
                }).catch(err => {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(2000, this.languageService.translate(err.error.message), "alert-toast");
                });
            });
        }).catch(err => { });
    }
    blurFee() {
        this.chooseService = {};
        this.deliveryInfo.controls.transport.setValue('');
    }
    checkedCod() {
        if (parseInt(this.cod_amount.getRawValue()) > 50000000) {
            this.deliveryInfo.controls.cod.setValue('50,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun cod is 50,000,000"), "alert-toast");
        }
    }
    checkedInsurance_value() {
        if (parseInt(this.insurance_value.getRawValue()) > 10000000) {
            this.deliveryInfo.controls.orderValue.setValue('10,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun insurance value is 10,000,000"), "alert-toast");
        }
        this.blurFee();
    }
    customDataBillDetail(billDetails) {
        let data = billDetails.map(item => {
            return {
                name_product: item.name,
                quantity: item.quantity
            };
        });
        return data;
    }
    customDataBillInfo() {
        this.billInfo.data.created = this.billInfo.data.created_date;
        this.billInfo.data.ship_money = this.chooseService.service_fee;
        this.billInfo.data.insurance = this.chooseService.insurance_fee;
        this.billInfo.data.pick_money = this.billInfo.data.cod_amount;
        this.billInfo.data.customer_fullname = this.billInfo.data.to_name;
        this.billInfo.data.customer_tel = this.billInfo.data.to_phone;
        this.billInfo.data.address = this.addInformation.value.address + ", " + this.ward.WardName + ", " + this.district.DistrictName + ", " + this.province.ProvinceName;
        this.billInfo.data.is_freeship = this.billInfo.data.payment_type_id == 1 ? 1 : 0;
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn"], {
            state: {
                dataSearchAndDate: this.dataSearchAndDate
            }
        });
    }
    chooseProvince() {
        this.chooseProvinceGhn = true;
    }
    cancelModalProvinceGhn(event) {
        if (event) {
            this.province = event;
            this.addInformation.controls.province.setValue(this.province.ProvinceID);
            this.ward = '';
            this.district = '';
        }
        this.chooseProvinceGhn = false;
    }
    chooseDistrict() {
        if (this.province.ProvinceName) {
            this.chooseDistrictGhn = true;
            this.province_idModal = this.province.ProvinceID ? this.province.ProvinceID : this.addInformation.value.province;
        }
    }
    cancelModalDistrictGhn(event) {
        if (event) {
            this.district = event;
            this.ward = '';
            this.addInformation.controls.district.setValue(this.district.DistrictID);
            this.resetService();
            this.getServive();
        }
        this.chooseDistrictGhn = false;
    }
    chooseWard() {
        if (this.district.DistrictName) {
            this.chooseWardGhn = true;
            this.district_idModal = this.district.DistrictID ? this.district.DistrictID : this.addInformation.value.district;
        }
    }
    cancelModalWardGhn(event) {
        if (event) {
            this.ward = event;
            this.addInformation.controls.ward.setValue(this.ward.WardCode);
            this.resetService();
        }
        this.chooseWardGhn = false;
    }
    paymentType(event) {
        this.deliveryInfo.controls.payment_type_id.setValue(event);
    }
    chooseRequireNote(event) {
        if (event == 1) {
            this.deliveryInfo.controls.required_note.setValue("KHONGCHOXEMHANG");
        }
        else if (event == 2) {
            this.deliveryInfo.controls.required_note.setValue("CHOTHUHANG");
        }
        else if (event == 3) {
            this.deliveryInfo.controls.required_note.setValue("CHOXEMHANGKHONGTHU");
        }
    }
    chooseMethodGhn() {
        this.dataToGetMethod = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_district_id: this.addInformation.value.district,
            to_ward_code: this.addInformation.value.ward,
            from_district_id: this.data_delivery.district_id,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            weight: this.productInfo.value.weight,
            width: this.productInfo.value.width,
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            service: this.service,
            from_ward_code: this.data_delivery.ward_code
        };
        this.chooseMethod = true;
    }
    cancelModalMethodGhn(event) {
        if (event) {
            this.chooseService = event;
            this.deliveryInfo.controls.transport.setValue(this.chooseService.service_id);
        }
        this.chooseMethod = false;
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
            this.customDataBillInfo();
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: this.billInfo,
                billDetails: this.customDataBillDetail(this.billInfo.data.items),
                data_delivery: this.data_delivery, printer
            }, false, false, "modal-print").then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack();
                });
            });
        }, (err) => {
            this.goBack();
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
    openListAddressCustomer() {
        this.data_list_address_ghn = {
            billInfo: this.billInfo,
            data_delivery: this.data_delivery
        };
        this.visible_list_address = true;
    }
    onCloseListAddress(event) {
        if (event) {
            this.currentAddress = event;
            this.province.ProvinceName = this.currentAddress.province;
            this.district.DistrictName = this.currentAddress.district;
            this.ward.WardName = this.currentAddress.ward;
            this.addInformation.controls.province.setValue(this.currentAddress.province_id);
            this.addInformation.controls.district.setValue(this.currentAddress.district_id);
            this.addInformation.controls.ward.setValue(this.currentAddress.ward_id);
            this.addInformation.controls.address.setValue(this.currentAddress.address);
            this.resetService();
            this.getServive();
        }
        this.visible_list_address = false;
    }
    /**
  * Reset lại dịch vụ nếu có thay đổi các trường
  */
    resetService() {
        this.chooseService = {};
        this.deliveryInfo.controls.transport.setValue('');
    }
}
CreateBillCustomerComponent.ɵfac = function CreateBillCustomerComponent_Factory(t) { return new (t || CreateBillCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm)); };
CreateBillCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CreateBillCustomerComponent, selectors: [["app-create-bill-customer"]], decls: 212, vars: 132, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "phone", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["nz-col", "", "nzSpan", "24", 1, "addInformation-address"], ["nzType", "text", "nz-button", "", 3, "click"], ["name", "create-outline"], ["class", "addInformation-address", "nz-col", "", "nzSpan", "24", 4, "ngIf"], [1, "productInfo"], ["nz-row", ""], [1, "all-content-center", 3, "formGroup"], ["nz-col", "", "nzSpan", "24", 1, "productInfo-table"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24"], ["nz-row", "", "nzGutter", "16"], ["formControlName", "weight", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplWeight", ""], ["nz-col", "", "nzSpan", "8"], ["formControlName", "length", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplLength", ""], ["formControlName", "width", "nz-input", "", "required", "", "type", "number"], ["combineTplWidth", ""], ["formControlName", "height", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["type", "text", "maxlength", "10", "formControlName", "cod", "nz-input", "", "required", "", 1, "cod_amount", 3, "ngModelChange"], ["combineTplCod", ""], ["type", "text", "maxlength", "10", "formControlName", "orderValue", "nz-input", "", "required", "", 1, "order_value_amount", 3, "placeholder"], ["combineTplOrder", ""], ["nz-col", "", "nzSpan", "24", 3, "ngStyle"], [1, "input-group", "all-content-center", 2, "cursor", "pointer", 3, "click"], [1, "input-group", "all-content-center", 2, "padding", "4px 11px", "border", "1px solid #c8c7cc !important", "border-radius", "5px"], ["class", "nz-no-margin", 4, "ngIf"], ["style", "display: inline-block;color:var(--ion-color-vh-green)", "class", "nz-no-margin", 4, "ngIf"], ["style", "float: right;", "class", "nz-no-margin", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 2, "margin", "15px 0"], [3, "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["formControlName", "note", "rows", "2", "nz-input", "", 1, "nz-hover-border", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [2, "width", "70%", "font-weight", "bold"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "data_list_address_ghn", "visible_list_address", "onCloseListAddress", 4, "ngIf"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn", 4, "ngIf"], [4, "ngIf"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"], [1, "nz-no-margin"], [1, "nz-no-margin", 2, "display", "inline-block", "color", "var(--ion-color-vh-green)"], [1, "nz-no-margin", 2, "float", "right"], [3, "nzLabel", "nzValue"], [3, "data_list_address_ghn", "visible_list_address", "onCloseListAddress"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn"]], template: function CreateBillCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CreateBillCustomerComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CreateBillCustomerComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerComponent_Template_button_click_42_listener() { return ctx.openListAddressCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CreateBillCustomerComponent_div_44_Template, 5, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "nz-table", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, CreateBillCustomerComponent_tr_66_Template, 5, 2, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerComponent_Template_input_ngModelChange_77_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, CreateBillCustomerComponent_ng_template_78_Template, 2, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerComponent_Template_input_ngModelChange_90_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, CreateBillCustomerComponent_ng_template_91_Template, 2, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](101, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, CreateBillCustomerComponent_ng_template_102_Template, 2, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerComponent_Template_input_ngModelChange_112_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, CreateBillCustomerComponent_ng_template_113_Template, 2, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerComponent_Template_input_ngModelChange_129_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, CreateBillCustomerComponent_ng_template_130_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](140, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](142, CreateBillCustomerComponent_ng_template_142_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "nz-input-group", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerComponent_Template_nz_input_group_click_149_listener() { return !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? "" : ctx.chooseMethodGhn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](151, CreateBillCustomerComponent_p_151_Template, 3, 3, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](152, CreateBillCustomerComponent_p_152_Template, 3, 2, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](153, CreateBillCustomerComponent_p_153_Template, 5, 7, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "nz-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerComponent_Template_nz_select_ngModelChange_159_listener($event) { return ctx.valueListPayment = $event; })("ngModelChange", function CreateBillCustomerComponent_Template_nz_select_ngModelChange_159_listener($event) { return ctx.paymentType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](161, CreateBillCustomerComponent_nz_option_161_Template, 1, 2, "nz-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "nz-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerComponent_Template_nz_select_ngModelChange_167_listener($event) { return ctx.valueRequireNote = $event; })("ngModelChange", function CreateBillCustomerComponent_Template_nz_select_ngModelChange_167_listener($event) { return ctx.chooseRequireNote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](168, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](169, CreateBillCustomerComponent_nz_option_169_Template, 1, 2, "nz-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](174, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](183, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](185, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](187, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](192, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](193, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](197, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](201, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](203, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerComponent_Template_button_click_204_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](207, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerComponent_Template_button_click_207_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](209, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](210, CreateBillCustomerComponent_app_list_address_customer_ghn_210_Template, 1, 2, "app-list-address-customer-ghn", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](211, CreateBillCustomerComponent_app_choose_method_ghn_211_Template, 1, 2, "app-choose-method-ghn", 63);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](79);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](92);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](103);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](131);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 65, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 67, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 69, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 71, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 73, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 75, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 77, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentAddress.ward);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 79, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](54, 81, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](127, _c0))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](60, 83, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](64, 85, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](73, 87, "Weight(gram)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](86, 89, "Length(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](97, 91, "Width(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](108, 93, "Height(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](119, 95, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](125, 97, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](136, 99, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](141, 101, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](128, _c1, !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](148, 103, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.chooseService.sort_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService.sort_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService.sort_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](158, 105, "Payment type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](160, 107, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.valueListPayment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](130, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.listPaymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](166, 109, "Require note"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](168, 111, "Require note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.valueRequireNote)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](131, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.listRequireNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](175, 113, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](180, 115, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](185, 117, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.service_fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](192, 119, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.insurance_fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](199, 121, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.total || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid && !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](206, 123, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](209, 125, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visible_list_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseMethod);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzOptionComponent, _components_list_address_customer_ghn_list_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_5__.ListAddressCustomerGhnComponent, _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_6__.ChooseMethodGhnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksV0FBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBR1I7QUFGUTs7Ozs7RUFLSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBSVo7QUFIWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUtoQjtBQUhvQjtFQUNJLGlCQUFBO0FBS3hCO0FBQVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQUVaO0FBRFk7RUFDSSxhQUFBO0FBR2hCO0FBRFk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFHaEI7QUFEb0I7RUFDSSxXQUFBO0FBR3hCO0FBQ1k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBRXBCO0FBQWdCO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFFcEI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUFaO0FBR0k7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQURSO0FBSUE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQURKO0FBR0E7RUFDSSxpQkFBQTtBQUFKO0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6ImNyZWF0ZS1iaWxsLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGVsaXZlcnktZ2huIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uLFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tZm9ybSxcclxuICAgICAgICAucHJvZHVjdEluZm8sXHJcbiAgICAgICAgLnRvdGFsRGVsaXZlcnksXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgJi1hZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NyUgMjMlIDEwJTtcclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAgICAgLnN1Yi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24tb3JkZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFudC1pbnB1dC1zdWZmaXgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2M4YzdjYyAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 21644:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/create-bill-retail/create-bill-retail.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillRetailComponent": () => (/* binding */ CreateBillRetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/choose-province-ghn/choose-province-ghn.component */ 4192);
/* harmony import */ var _components_choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/choose-district-ghn/choose-district-ghn.component */ 55176);
/* harmony import */ var _components_choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/choose-ward-ghn/choose-ward-ghn.component */ 31541);
/* harmony import */ var _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/choose-method-ghn/choose-method-ghn.component */ 24375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


























function CreateBillRetailComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function CreateBillRetailComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillRetailComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CreateBillRetailComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r35.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r35.hasError("required"));
} }
function CreateBillRetailComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillRetailComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r38.hasError("required"));
} }
function CreateBillRetailComponent_ng_template_46_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function CreateBillRetailComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_46_ng_container_0_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r40.hasError("required"));
} }
function CreateBillRetailComponent_nz_input_group_53_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_nz_input_group_53_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r42.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r6.province.ProvinceName, " ");
} }
function CreateBillRetailComponent_nz_input_group_54_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_nz_input_group_54_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r44.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Province"), " ");
} }
function CreateBillRetailComponent_nz_input_group_60_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_nz_input_group_60_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r46.province.ProvinceName ? ctx_r46.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r8.district.DistrictName, " ");
} }
function CreateBillRetailComponent_nz_input_group_61_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_nz_input_group_61_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r48.province.ProvinceName ? ctx_r48.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "District"), " ");
} }
function CreateBillRetailComponent_nz_input_group_67_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_nz_input_group_67_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r50.district.DistrictName ? ctx_r50.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r10.ward.WardName, " ");
} }
function CreateBillRetailComponent_nz_input_group_68_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_nz_input_group_68_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r52.district.DistrictName ? ctx_r52.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Ward"), " ");
} }
function CreateBillRetailComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r54.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r54.quantity, " ");
} }
function CreateBillRetailComponent_ng_template_102_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillRetailComponent_ng_template_102_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 1600kg"), " ");
} }
function CreateBillRetailComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_102_ng_container_0_Template, 3, 3, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CreateBillRetailComponent_ng_template_102_ng_container_1_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r55.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r55.hasError("max"));
} }
function CreateBillRetailComponent_ng_template_115_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function CreateBillRetailComponent_ng_template_115_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 200cm"), " ");
} }
function CreateBillRetailComponent_ng_template_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_115_ng_container_0_Template, 3, 3, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CreateBillRetailComponent_ng_template_115_ng_container_1_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r58.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r58.hasError("max"));
} }
function CreateBillRetailComponent_ng_template_126_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function CreateBillRetailComponent_ng_template_126_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 200cm"), " ");
} }
function CreateBillRetailComponent_ng_template_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_126_ng_container_0_Template, 3, 3, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CreateBillRetailComponent_ng_template_126_ng_container_1_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r61.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r61.hasError("max"));
} }
function CreateBillRetailComponent_ng_template_137_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function CreateBillRetailComponent_ng_template_137_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "V\u01B0\u1EE3t qu\u00E1 gi\u00E1 tr\u1ECB cho ph\u00E9p : 200cm"), " ");
} }
function CreateBillRetailComponent_ng_template_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_137_ng_container_0_Template, 3, 3, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CreateBillRetailComponent_ng_template_137_ng_container_1_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r64.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r64.hasError("max"));
} }
function CreateBillRetailComponent_ng_template_154_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillRetailComponent_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_154_ng_container_0_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r67.hasError("required"));
} }
function CreateBillRetailComponent_ng_template_166_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillRetailComponent_ng_template_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CreateBillRetailComponent_ng_template_166_ng_container_0_Template, 3, 3, "ng-container", 67);
} if (rf & 2) {
    const control_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r69.hasError("required"));
} }
function CreateBillRetailComponent_p_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Select service"), "");
} }
function CreateBillRetailComponent_p_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r27.chooseService.sort_name, " - ", ctx_r27.vhAlgorithm.vhcurrencyunit(ctx_r27.chooseService.service_fee), "");
} }
function CreateBillRetailComponent_p_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "Delivery time"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 4, ctx_r28.chooseService.leadtime, "dd/MM/yyyy"), "");
} }
function CreateBillRetailComponent_nz_option_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "nz-option", 75);
} if (rf & 2) {
    const option_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzLabel", option_r71.name)("nzValue", option_r71.value);
} }
function CreateBillRetailComponent_nz_option_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "nz-option", 75);
} if (rf & 2) {
    const option_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzLabel", option_r72.name)("nzValue", option_r72.value);
} }
function CreateBillRetailComponent_app_choose_province_ghn_234_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-province-ghn", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalProvinceGhn", function CreateBillRetailComponent_app_choose_province_ghn_234_Template_app_choose_province_ghn_cancelModalProvinceGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r73.cancelModalProvinceGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseProvinceGhn", ctx_r31.chooseProvinceGhn)("token", ctx_r31.data_delivery.token);
} }
function CreateBillRetailComponent_app_choose_district_ghn_235_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-district-ghn", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalDistrictGhn", function CreateBillRetailComponent_app_choose_district_ghn_235_Template_app_choose_district_ghn_cancelModalDistrictGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r75.cancelModalDistrictGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseDistrictGhn", ctx_r32.chooseDistrictGhn)("token", ctx_r32.data_delivery.token)("province_idModal", ctx_r32.province_idModal);
} }
function CreateBillRetailComponent_app_choose_ward_ghn_236_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-ward-ghn", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalWardGhn", function CreateBillRetailComponent_app_choose_ward_ghn_236_Template_app_choose_ward_ghn_cancelModalWardGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r77.cancelModalWardGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseWardGhn", ctx_r33.chooseWardGhn)("token", ctx_r33.data_delivery.token)("district_idModal", ctx_r33.district_idModal);
} }
function CreateBillRetailComponent_app_choose_method_ghn_237_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-method-ghn", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalMethodGhn", function CreateBillRetailComponent_app_choose_method_ghn_237_Template_app_choose_method_ghn_cancelModalMethodGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r79.cancelModalMethodGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseMethod", ctx_r34.chooseMethod)("dataToGetMethod", ctx_r34.dataToGetMethod);
} }
const _c0 = function (a0) { return { opacity: a0 }; };
const _c1 = function () { return { y: "200px" }; };
const _c2 = function () { return { standalone: true }; };
class CreateBillRetailComponent {
    constructor(router, vhComponent, vhQuerySales, languageService, ghnService, vhAlgorithm) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.ghnService = ghnService;
        this.vhAlgorithm = vhAlgorithm;
        this.billDetails = [];
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
        this.chooseService = {};
        this.valueRequireNote = 1;
        this.valueListPayment = 1;
        this.listRequireNote = [
            {
                value: 1,
                name: this.languageService.translate("Not allow to unpack")
            },
            {
                value: 2,
                name: this.languageService.translate("Allow to try")
            },
            {
                value: 3,
                name: this.languageService.translate("Allow to unpack & not to try")
            },
        ];
        this.listPaymentType = [
            {
                value: 1,
                name: this.languageService.translate("Paid by seller")
            },
            {
                value: 2,
                name: this.languageService.translate("Pay by receiver")
            },
        ];
        this.checkPrinter = false;
        // ------modal province--------
        this.chooseProvinceGhn = false;
        // ------modal district--------
        this.chooseDistrictGhn = false;
        // ------modal ward--------
        this.chooseWardGhn = false;
        // ------modal choose--------
        this.chooseMethod = false;
        this.billInfo = this.router.getCurrentNavigation().extras.state.billInfo;
        this.data_delivery = this.router.getCurrentNavigation().extras.state.data_delivery;
        this.dataSearchAndDate = this.router.getCurrentNavigation().extras.state.dataSearchAndDate;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.billInfo.retail_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.billInfo.retail_phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(100)]),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(100)]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(200000)]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(100)]),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            cod: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[0-9,]{1,10}$")]),
            orderValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[0-9,]{1,10}$")]),
            transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            required_note: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('KHONGCHOXEMHANG', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            payment_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('1', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.cod_amount = this.vhAlgorithm.vhnumeral('.cod_amount');
            this.insurance_value = this.vhAlgorithm.vhnumeral('.order_value_amount');
        });
    }
    //lấy dữ liệu billDetail
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill_details_byId_bill(this.billInfo._id),
                this.ghnService.connectTokenGhn(this.data_delivery.token)
            ]).then((res) => {
                this.vhComponent.hideLoading(0).then(() => {
                    if (res[0]) {
                        this.billDetails = res[0].map(item => {
                            let nameProduct = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                            return Object.assign(Object.assign({}, item), { name_product: nameProduct });
                        });
                        this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.billInfo, this.billDetails, this.vhQuerySales);
                    }
                    if (res[1]) {
                        this.shops = res[1].data.shops;
                        for (let i in this.shops) {
                            if (this.shops[i]._id == this.data_delivery.shop_id) {
                                this.data_delivery = Object.assign(Object.assign({}, this.data_delivery), { name: this.shops[i].name, phone: this.shops[i].phone, address: this.shops[i].address, district_id: this.shops[i].district_id, ward_code: this.shops[i].ward_code });
                            }
                        }
                    }
                });
                let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                if (printer)
                    this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
            });
        });
    }
    //hàm này dùng để get về các phương thức giao hàng : đi bộ, bay , tiết kiệm
    getServive() {
        let data = {
            shop_id: this.data_delivery.shop_id,
            from_district_id: this.data_delivery.district_id,
            to_district_id: this.addInformation.value.district
        };
        this.vhComponent.showLoading('');
        this.ghnService.getServiceDelivery(this.data_delivery.token, data).then((res) => {
            this.vhComponent.hideLoading(0);
            this.service = res.data.filter(item => {
                return item.service_type_id == 1 || item.service_type_id == 2;
            });
        }).catch(err => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.showToast(2000, this.languageService.translate('An error occurred while getting data !'), "alert-toast");
        });
    }
    convertProducts() {
        let data = [];
        this.billDetails.forEach(item => {
            data.push({
                name: item.name_product,
                quantity: item.quantity,
                id: item.id_product
            });
        });
        return data;
    }
    prepareDataToCreateOrder() {
        let data = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_name: this.addInformation.value.name,
            to_phone: this.addInformation.value.phone,
            to_address: this.addInformation.value.address,
            to_ward_code: this.addInformation.value.ward,
            to_district_id: this.addInformation.value.district,
            weight: this.productInfo.value.weight,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            width: this.productInfo.value.width,
            payment_type_id: +this.deliveryInfo.value.payment_type_id,
            required_note: this.deliveryInfo.value.required_note,
            service_id: this.deliveryInfo.value.transport,
            cod_amount: parseInt(this.cod_amount.getRawValue()),
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            items: this.convertProducts(),
            note: this.deliveryInfo.value.note,
        };
        return data;
    }
    createOrder(print) {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create order ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.ghnService.createOrderGhn(this.prepareDataToCreateOrder()).then((res) => {
                    this.invoice.setOrderCode(res.data.order_code);
                    this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then(() => {
                        if (print) {
                            this.ghnService.getInfoOrder(this.data_delivery.token, res.data.order_code).then((ress) => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.billInfo.data = ress.data;
                                    this.billInfo.order_code = res.data.order_code;
                                    this.showPrint();
                                });
                            });
                        }
                        else {
                            this.vhComponent.hideLoading(0).then(() => {
                                this.goBack();
                                this.vhComponent.showToast(2000, this.languageService.translate('Create order successfully !'), "success-toast");
                            });
                        }
                    });
                }).catch(err => {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(2000, this.languageService.translate(err.error.message), "alert-toast");
                });
            });
        }).catch(err => { });
    }
    checkedCod() {
        if (parseInt(this.cod_amount.getRawValue()) > 50000000) {
            this.deliveryInfo.controls.cod.setValue('50,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun cod is 50,000,000"), "alert-toast");
        }
    }
    checkedInsurance_value() {
        if (parseInt(this.insurance_value.getRawValue()) > 10000000) {
            this.deliveryInfo.controls.orderValue.setValue('10,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun insurance value is 10,000,000"), "alert-toast");
        }
        this.resetService();
    }
    customDataBillDetail(billDetails) {
        let data = billDetails.map(item => {
            return {
                name_product: item.name,
                quantity: item.quantity
            };
        });
        return data;
    }
    customDataBillInfo() {
        this.billInfo.data.created = this.billInfo.data.created_date;
        this.billInfo.data.ship_money = this.chooseService.service_fee;
        this.billInfo.data.insurance = this.chooseService.insurance_fee;
        this.billInfo.data.pick_money = this.billInfo.data.cod_amount;
        this.billInfo.data.customer_fullname = this.billInfo.data.to_name;
        this.billInfo.data.customer_tel = this.billInfo.data.to_phone;
        this.billInfo.data.address = this.addInformation.value.address + ", " + this.ward.WardName + ", " + this.district.DistrictName + ", " + this.province.ProvinceName;
        this.billInfo.data.is_freeship = this.billInfo.data.payment_type_id == 1 ? 1 : 0;
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn"], {
            state: {
                dataSearchAndDate: this.dataSearchAndDate
            }
        });
    }
    chooseProvince() {
        this.chooseProvinceGhn = true;
    }
    cancelModalProvinceGhn(event) {
        if (event) {
            this.province = event;
            this.addInformation.controls.province.setValue(this.province.ProvinceID);
            this.ward = '';
            this.district = '';
        }
        this.chooseProvinceGhn = false;
    }
    chooseDistrict() {
        if (this.province.ProvinceName) {
            this.chooseDistrictGhn = true;
            this.province_idModal = this.province.ProvinceID ? this.province.ProvinceID : this.addInformation.value.province;
        }
    }
    cancelModalDistrictGhn(event) {
        if (event) {
            this.district = event;
            this.ward = '';
            this.addInformation.controls.district.setValue(this.district.DistrictID);
            this.resetService();
            this.getServive();
        }
        this.chooseDistrictGhn = false;
    }
    chooseWard() {
        if (this.district.DistrictName) {
            this.resetService();
            this.chooseWardGhn = true;
            this.district_idModal = this.district.DistrictID ? this.district.DistrictID : this.addInformation.value.district;
        }
    }
    cancelModalWardGhn(event) {
        if (event) {
            this.ward = event;
            this.addInformation.controls.ward.setValue(this.ward.WardCode);
            this.resetService();
        }
        this.chooseWardGhn = false;
    }
    paymentType(event) {
        this.deliveryInfo.controls.payment_type_id.setValue(event);
    }
    chooseRequireNote(event) {
        if (event == 1) {
            this.deliveryInfo.controls.required_note.setValue("KHONGCHOXEMHANG");
        }
        else if (event == 2) {
            this.deliveryInfo.controls.required_note.setValue("CHOTHUHANG");
        }
        else if (event == 3) {
            this.deliveryInfo.controls.required_note.setValue("CHOXEMHANGKHONGTHU");
        }
    }
    chooseMethodGhn() {
        this.dataToGetMethod = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_district_id: this.addInformation.value.district,
            to_ward_code: this.addInformation.value.ward,
            from_district_id: this.data_delivery.district_id,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            weight: this.productInfo.value.weight,
            width: this.productInfo.value.width,
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            service: this.service,
            from_ward_code: this.data_delivery.ward_code
        };
        this.chooseMethod = true;
    }
    cancelModalMethodGhn(event) {
        if (event) {
            this.chooseService = event;
            this.deliveryInfo.controls.transport.setValue(this.chooseService.service_id);
        }
        this.chooseMethod = false;
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
            this.customDataBillInfo();
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: this.billInfo,
                billDetails: this.customDataBillDetail(this.billInfo.data.items),
                data_delivery: this.data_delivery, printer
            }, false, false, "modal-print").then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack();
                });
            });
        }, (err) => {
            this.goBack();
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
    /**
  * Reset lại dịch vụ nếu có thay đổi các trường
  */
    resetService() {
        this.chooseService = {};
        this.deliveryInfo.controls.transport.setValue('');
    }
}
CreateBillRetailComponent.ɵfac = function CreateBillRetailComponent_Factory(t) { return new (t || CreateBillRetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhAlgorithm)); };
CreateBillRetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CreateBillRetailComponent, selectors: [["app-create-bill-retail"]], decls: 238, vars: 158, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "phone", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["formControlName", "address", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplAddress", ""], ["class", "input-group all-content-center", 3, "click", 4, "ngIf"], ["class", "input-group all-content-center placeholder", 3, "click", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 3, "ngStyle"], [1, "productInfo"], ["nz-row", ""], [1, "all-content-center", 3, "formGroup"], ["nz-col", "", "nzSpan", "24", 1, "productInfo-table"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24"], ["nz-row", "", "nzGutter", "16"], ["formControlName", "weight", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplWeight", ""], ["nz-col", "", "nzSpan", "8"], ["formControlName", "length", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplLength", ""], ["formControlName", "width", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplWidth", ""], ["formControlName", "height", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["type", "text", "maxlength", "10", "formControlName", "cod", "nz-input", "", "required", "", 1, "cod_amount", 3, "ngModelChange"], ["combineTplCod", ""], ["type", "text", "maxlength", "10", "formControlName", "orderValue", "nz-input", "", "required", "", 1, "order_value_amount", 3, "placeholder"], ["combineTplOrder", ""], ["nz-col", "", "nzSpan", "24", 3, "ngStyle"], [1, "input-group", "all-content-center", 2, "cursor", "pointer", 3, "click"], [1, "input-group", "all-content-center", 2, "padding", "4px 11px", "border", "1px solid #c8c7cc !important", "border-radius", "5px"], ["class", "nz-no-margin", 4, "ngIf"], ["style", "display: inline-block;color:var(--ion-color-vh-green)", "class", "nz-no-margin", 4, "ngIf"], ["style", "float: right;", "class", "nz-no-margin", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 2, "margin", "15px 0"], [3, "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["clas", "", "formControlName", "note", "rows", "2", "nz-input", "", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [2, "width", "70%", "font-weight", "bold"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn", 4, "ngIf"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn", 4, "ngIf"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn", 4, "ngIf"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn", 4, "ngIf"], [4, "ngIf"], [1, "input-group", "all-content-center", 3, "click"], [1, "input-group", "all-content-center", "placeholder", 3, "click"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"], [1, "nz-no-margin"], [1, "nz-no-margin", 2, "display", "inline-block", "color", "var(--ion-color-vh-green)"], [1, "nz-no-margin", 2, "float", "right"], [3, "nzLabel", "nzValue"], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn"]], template: function CreateBillRetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, CreateBillRetailComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, CreateBillRetailComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, CreateBillRetailComponent_ng_template_46_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, CreateBillRetailComponent_nz_input_group_53_Template, 2, 1, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, CreateBillRetailComponent_nz_input_group_54_Template, 3, 3, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, CreateBillRetailComponent_nz_input_group_60_Template, 2, 1, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, CreateBillRetailComponent_nz_input_group_61_Template, 3, 3, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, CreateBillRetailComponent_nz_input_group_67_Template, 2, 1, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, CreateBillRetailComponent_nz_input_group_68_Template, 3, 3, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, CreateBillRetailComponent_tr_90_Template, 5, 2, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateBillRetailComponent_Template_input_ngModelChange_101_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, CreateBillRetailComponent_ng_template_102_Template, 2, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](114, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateBillRetailComponent_Template_input_ngModelChange_114_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](115, CreateBillRetailComponent_ng_template_115_Template, 2, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateBillRetailComponent_Template_input_ngModelChange_125_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, CreateBillRetailComponent_ng_template_126_Template, 2, 2, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateBillRetailComponent_Template_input_ngModelChange_136_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](137, CreateBillRetailComponent_ng_template_137_Template, 2, 2, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](149, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateBillRetailComponent_Template_input_ngModelChange_153_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](154, CreateBillRetailComponent_ng_template_154_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](164, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](166, CreateBillRetailComponent_ng_template_166_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](172, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "nz-input-group", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_Template_nz_input_group_click_173_listener() { return !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? "" : ctx.chooseMethodGhn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](175, CreateBillRetailComponent_p_175_Template, 3, 3, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](176, CreateBillRetailComponent_p_176_Template, 3, 2, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](177, CreateBillRetailComponent_p_177_Template, 5, 7, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](182, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "nz-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateBillRetailComponent_Template_nz_select_ngModelChange_183_listener($event) { return ctx.valueListPayment = $event; })("ngModelChange", function CreateBillRetailComponent_Template_nz_select_ngModelChange_183_listener($event) { return ctx.paymentType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](184, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](185, CreateBillRetailComponent_nz_option_185_Template, 1, 2, "nz-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](190, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "nz-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CreateBillRetailComponent_Template_nz_select_ngModelChange_191_listener($event) { return ctx.valueRequireNote = $event; })("ngModelChange", function CreateBillRetailComponent_Template_nz_select_ngModelChange_191_listener($event) { return ctx.chooseRequireNote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](192, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](193, CreateBillRetailComponent_nz_option_193_Template, 1, 2, "nz-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](198, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](204, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](209, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](211, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](216, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](219);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "td", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](223, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](225, "b", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](228, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_Template_button_click_228_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](229);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](230, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](231, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateBillRetailComponent_Template_button_click_231_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](233, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](234, CreateBillRetailComponent_app_choose_province_ghn_234_Template, 1, 2, "app-choose-province-ghn", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](235, CreateBillRetailComponent_app_choose_district_ghn_235_Template, 1, 3, "app-choose-district-ghn", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](236, CreateBillRetailComponent_app_choose_ward_ghn_236_Template, 1, 3, "app-choose-ward-ghn", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](237, CreateBillRetailComponent_app_choose_method_ghn_237_Template, 1, 2, "app-choose-method-ghn", 66);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](35);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](47);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](103);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](116);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](127);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](138);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](155);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 79, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 81, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 83, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 85, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 87, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 89, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 91, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 93, "Enter your address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 95, "Province"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.province.ProvinceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.province.ProvinceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](149, _c0, ctx.province.ProvinceName ? 1 : 0.5));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](59, 97, "District"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.district.DistrictName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.district.DistrictName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](151, _c0, ctx.district.DistrictName ? 1 : 0.5));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](66, 99, "Ward"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ward.WardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.ward.WardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](73, 101, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](78, 103, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](153, _c1))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](84, 105, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](88, 107, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](97, 109, "Weight(gram)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](110, 111, "Length(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](121, 113, "Width(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](132, 115, "Height(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](143, 117, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](149, 119, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](160, 121, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](165, 123, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](154, _c0, !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](172, 125, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.chooseService.sort_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseService.sort_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseService.sort_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](182, 127, "Payment type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](184, 129, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.valueListPayment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](156, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.listPaymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](190, 131, "Require note"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](192, 133, "Require note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.valueRequireNote)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](157, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.listRequireNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](199, 135, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](204, 137, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](209, 139, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.service_fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](216, 141, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.insurance_fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](223, 143, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.total || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](230, 145, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](233, 147, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseProvinceGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseDistrictGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseWardGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseMethod);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzOptionComponent, _components_choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_5__.ChooseProvinceGhnComponent, _components_choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_6__.ChooseDistrictGhnComponent, _components_choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_7__.ChooseWardGhnComponent, _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_8__.ChooseMethodGhnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLXJldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLFdBQUE7QUFHUjtBQURJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQUdSO0FBRlE7Ozs7O0VBS0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBSVo7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUlaO0FBSFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBS2hCO0FBSFk7RUFDSSxjQUFBO0FBS2hCO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBQUlaO0FBSFk7RUFDSSxhQUFBO0FBS2hCO0FBSFk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFLaEI7QUFIb0I7RUFDSSxXQUFBO0FBS3hCO0FBRFk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBR2hCO0FBRmdCO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBSXBCO0FBRmdCO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFJcEI7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUVaO0FBQ0k7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNSO0FBRUE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSSxpQkFBQTtBQUVKO0FBQUE7RUFDSSx5QkFBQTtBQUdKIiwiZmlsZSI6ImNyZWF0ZS1iaWxsLXJldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRlbGl2ZXJ5LWdobiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbixcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0sXHJcbiAgICAgICAgLnByb2R1Y3RJbmZvLFxyXG4gICAgICAgIC50b3RhbERlbGl2ZXJ5LFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTFweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjOGM3Y2M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mbyB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY3JSAyMyUgMTAlO1xyXG4gICAgICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXRvdGFsRGVsaXZlcnkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgICAgICAgICAuc3ViLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWJ1dHRvbi1vcmRlciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMy80O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdEluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uYW50LWlucHV0LXN1ZmZpeCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3325:
/*!*************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/delivery-ghn.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryGhnComponent": () => (/* binding */ DeliveryGhnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function DeliveryGhnComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 24);
} }
function DeliveryGhnComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, option_r5.name))("nzValue", option_r5.value);
} }
function DeliveryGhnComponent_tr_62_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Not enough information"));
} }
function DeliveryGhnComponent_tr_62_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Ready to pick"));
} }
function DeliveryGhnComponent_tr_62_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Delivering"));
} }
function DeliveryGhnComponent_tr_62_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Delivered"));
} }
function DeliveryGhnComponent_tr_62_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Returning"));
} }
function DeliveryGhnComponent_tr_62_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Returned"));
} }
function DeliveryGhnComponent_tr_62_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Cancelled"), "");
} }
function DeliveryGhnComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryGhnComponent_tr_62_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const item_r6 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return item_r6.data ? ctx_r14.gotoBillDetail(item_r6) : ctx_r14.gotoDetail(item_r6); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DeliveryGhnComponent_tr_62_td_13_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeliveryGhnComponent_tr_62_td_14_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DeliveryGhnComponent_tr_62_td_15_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DeliveryGhnComponent_tr_62_td_16_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DeliveryGhnComponent_tr_62_td_17_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DeliveryGhnComponent_tr_62_td_18_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DeliveryGhnComponent_tr_62_td_19_Template, 3, 3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 12, item_r6.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.order_code ? item_r6.order_code : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 15, item_r6.name_customer ? item_r6.name_customer : "Customer retail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.data ? ctx_r4.vhAlgorithm.vhcurrencyunit(item_r6.data.cod_amount) : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r6.data && ctx_r4.status_open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.group == 2 && ctx_r4.status_open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.group == 3 && ctx_r4.status_open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.group == 4 && ctx_r4.status_open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.group == 5 && ctx_r4.status_open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.group == 6 && ctx_r4.status_open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.group == 7 && ctx_r4.status_open);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class DeliveryGhnComponent {
    constructor(languageService, router, vhQuery, vhComponent, vhQuerySales, vhAlgorithm, ghnService, cdRef, vhAuth) {
        this.languageService = languageService;
        this.router = router;
        this.vhQuery = vhQuery;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.ghnService = ghnService;
        this.cdRef = cdRef;
        this.vhAuth = vhAuth;
        this.bills = [];
        this.show_bills = [];
        //Hôm nay 0h- 23h59
        this.startDateTime = new Date();
        this.subStartDateTime = new Date();
        this.endDateTime = new Date();
        this.subEndDateTime = new Date();
        //biến cờ show
        this.status_open = false;
        this.valueOfStatus = 1;
        this.search = '';
        this.list_status = [
            {
                value: 1,
                name: "All"
            },
            {
                value: 0,
                name: "Not enough information"
            },
            {
                value: 2,
                name: "Ready to pick"
            },
            {
                value: 3,
                name: "Picked"
            },
            {
                value: 4,
                name: "Delivered"
            },
            {
                value: 5,
                name: "Returning"
            },
            {
                value: 6,
                name: "Returning"
            },
        ];
        this.disabledDate = (current) => {
            if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000)
                return true;
            return false;
        };
        this.startDateTime.setHours(0, 0, 0);
        this.subStartDateTime = this.startDateTime;
        this.endDateTime.setHours(23, 59, 59);
        this.subEndDateTime = this.endDateTime;
        this.getSearchAndDate();
    }
    ngOnInit() {
        this.getData(this.startDateTime, this.endDateTime);
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill"]);
    }
    getSearchAndDate() {
        if (this.router.getCurrentNavigation().extras.state) {
            let dataSearchAndDate = this.router.getCurrentNavigation().extras.state.dataSearchAndDate;
            this.search = dataSearchAndDate.search ? dataSearchAndDate.search : "";
            this.startDateTime = dataSearchAndDate.startDateTime;
            this.endDateTime = dataSearchAndDate.endDateTime;
            this.subStartDateTime = this.startDateTime;
            this.subEndDateTime = this.endDateTime;
        }
    }
    /**
     * Hàm lấy bill trong khoăng thời gian được set
     */
    getData(startTime, endTime) {
        this.vhComponent.showLoading("").then(() => {
            Promise.all([
                this.vhQuerySales.getBills_byFields({ date: { $gte: startTime, $lte: endTime }, bill_type: { $eq: 1 }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {}),
                this.vhQuerySales.getlocalDeliverys()
            ]).then((res) => {
                if (res[1])
                    this.data_delivery = res[1].filter(item => item.active == true && item.type == 1)[0];
                if (res[0]) {
                    this.bills = res[0].filter(item => item.id_delivery == this.data_delivery._id).reverse();
                    let process = [];
                    this.bills.forEach(item => {
                        item.name_customer = this.vhQuerySales.getlocalCustomer(item.id_customer).name;
                        if (item.order_code)
                            process.push(this.ghnService.getInfoOrder(this.data_delivery.token, item.order_code));
                    });
                    Promise.all(process).then((result) => {
                        result.forEach(item => {
                            let index = this.bills.findIndex(data => data.order_code == item.data.order_code);
                            if (index >= 0) {
                                this.bills[index].data = item.data;
                                this.bills[index].group = this.filterGroup(item.data.status);
                            }
                        });
                        this.vhComponent.hideLoading(0);
                        this.show_bills = [...this.bills];
                        this.status_open = true;
                    }).catch(err => {
                        this.vhComponent.hideLoading(0);
                        this.vhComponent.showToast(2000, this.languageService.translate("An error occurred while getting data"), "alert-toast");
                    });
                }
            });
        });
    }
    filterGroup(status) {
        if (status == 'ready_to_pick' || status == 'picking' || status == 'money_collect_picking')
            return 2; // chờ lấy hàng
        else if (status == 'picked' || status == 'storing' || status == 'transporting' || status == 'sorting' || status == 'delivering' ||
            status == 'money_collect_delivering' || status == 'delivery_fail')
            return 3; //đang giao hàng
        else if (status == 'delivered')
            return 4; //giao hàng thành công
        else if (status == 'waiting_to_return' || status == 'return' || status == 'return_transporting' || status == 'return_sorting'
            || status == 'returning' || status == 'return_fail')
            return 5; //đang hoàn hành
        else if (status == 'returned')
            return 6; // hoàn hàng thành công
        else if (status == 'cancel')
            return 7;
        else
            return 0;
    }
    setStartTime(event) {
        if (this.endDateTime.getTime() - this.startDateTime.getTime() > 2678400000) {
            this.vhComponent.showToast(2000, this.languageService.translate("The time to view no more than 30 days"), "alert-toast");
            this.endDateTime = new Date(this.startDateTime.getTime() + 2678313600);
            this.subStartDateTime = this.startDateTime;
            this.subEndDateTime = this.endDateTime;
            this.getData(this.startDateTime, this.endDateTime);
        }
        else if (this.endDateTime.getTime() - this.startDateTime.getTime() < 0)
            this.vhComponent.alertMessage("", this.languageService.translate("Staring date must be less than or the same as ending date"), "", "OK");
        else
            this.getData(this.startDateTime, this.endDateTime);
    }
    setEndTime(event) {
        if (this.endDateTime.getTime() - this.startDateTime.getTime() > 2678400000) {
            this.vhComponent.showToast(2000, this.languageService.translate("The time to view no more than 30 days"), "alert-toast");
            this.startDateTime = new Date(this.endDateTime.getTime() - 2678313600);
            this.subStartDateTime = this.startDateTime;
            this.subEndDateTime = this.endDateTime;
            this.getData(this.startDateTime, this.endDateTime);
        }
        else if (this.endDateTime.getTime() - this.startDateTime.getTime() < 0)
            this.vhComponent.alertMessage("", this.languageService.translate("Staring date must be less than or the same as ending date"), "", "OK");
        else
            this.getData(this.startDateTime, this.endDateTime);
    }
    //searchbill
    searchBill(value) {
        this.show_bills = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value).toLowerCase(), this.bills, ["bill_code", "order_code"]);
    }
    gotoDetail(bill) {
        if (bill.id_customer != "id_retail") {
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn/order-bill-customer"], {
                state: {
                    billInfo: bill,
                    data_delivery: this.data_delivery,
                    dataSearchAndDate: {
                        search: this.search,
                        startDateTime: this.startDateTime,
                        endDateTime: this.endDateTime
                    }
                }
            });
        }
        else {
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn/order-bill-retail"], {
                state: {
                    billInfo: bill,
                    data_delivery: this.data_delivery,
                    dataSearchAndDate: {
                        search: this.search,
                        startDateTime: this.startDateTime,
                        endDateTime: this.endDateTime
                    }
                }
            });
        }
    }
    gotoBillDetail(bill) {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn/detail-bill"], {
            state: {
                billInfo: bill,
                data_delivery: this.data_delivery,
                dataSearchAndDate: {
                    search: this.search,
                    startDateTime: this.startDateTime,
                    endDateTime: this.endDateTime
                }
            }
        });
    }
    /**
    * filter các trạng thái của bill
    * */
    filterStatus(value) {
        value = parseInt(value);
        if (value == 0) {
            this.show_bills = this.bills.filter(item => !item.data);
        }
        else if (value == 1) {
            this.show_bills = this.bills;
        }
        else if (value == 2) {
            this.show_bills = this.bills.filter(item => item.group == 2);
        }
        else if (value == 3) {
            this.show_bills = this.bills.filter(item => item.group == 3);
        }
        else if (value == 4) {
            this.show_bills = this.bills.filter(item => item.group == 4);
        }
        else if (value == 5) {
            this.show_bills = this.bills.filter(item => item.group == 5);
        }
        else if (value == 6) {
            this.show_bills = this.bills.filter(item => item.group == 6);
        }
    }
    onCurrentPageDataChange(event) { }
    ngAfterViewChecked() {
        if (document.getElementById("table-delivery-ghn") && document.querySelector(".delivery-ghn-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.getElementById("table-delivery-ghn").clientHeight - document.querySelector(".delivery-ghn-header").clientHeight -
                document.querySelector(".ant-table-pagination").clientHeight - 150 + "px";
        }
        this.cdRef.detectChanges();
    }
}
DeliveryGhnComponent.ɵfac = function DeliveryGhnComponent_Factory(t) { return new (t || DeliveryGhnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_2__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth)); };
DeliveryGhnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeliveryGhnComponent, selectors: [["app-delivery-ghn"]], decls: 63, vars: 52, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "table-delivery-ghn"], ["nzGutter", "16", "nz-row", "", 1, "delivery-ghn", "delivery-ghn-header"], ["nz-col", "", "nzSpan", "6"], [1, "title", "nz-no-margin"], ["nz-col", "", "nzSpan", "8", 1, "title", "center-all-content"], [1, "nz-hover-border", 3, "nzSuffix"], ["type", "text", "nz-input", "", 1, "medium-size", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "4"], ["nzBorderless", "", 1, "nz-hover-border", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "date-picker-cus"], ["nzFormat", "dd/MM/yyyy", "nzBorderless", "", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], ["nzFormat", "dd/MM/yyyy", "nzBorderless", "", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "table-delivery-ghn"], [1, "medium-size"], [2, "color", "red"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult", "nzCurrentPageDataChange"], ["tableDelvieryGhn", ""], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "nzLabel", "nzValue"], [2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["style", "color: var(--ion-color-vh-orange)", 4, "ngIf"], [2, "color", "var(--ion-color-vh-orange)"]], template: function DeliveryGhnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryGhnComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhnComponent_Template_input_ngModelChange_12_listener($event) { return ctx.search = $event; })("ngModelChange", function DeliveryGhnComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchBill($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeliveryGhnComponent_ng_template_14_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhnComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.filterStatus($event); })("ngModelChange", function DeliveryGhnComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.valueOfStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DeliveryGhnComponent_nz_option_18_Template, 2, 4, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-date-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhnComponent_Template_nz_date_picker_ngModelChange_20_listener($event) { return ctx.startDateTime = $event; })("ngModelChange", function DeliveryGhnComponent_Template_nz_date_picker_ngModelChange_20_listener($event) { return ctx.setStartTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "nz-date-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhnComponent_Template_nz_date_picker_ngModelChange_22_listener($event) { return ctx.endDateTime = $event; })("ngModelChange", function DeliveryGhnComponent_Template_nz_date_picker_ngModelChange_22_listener($event) { return ctx.setEndTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCurrentPageDataChange", function DeliveryGhnComponent_Template_nz_table_nzCurrentPageDataChange_32_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, DeliveryGhnComponent_tr_62_Template, 20, 17, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 25, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 27, "Giao hang nhanh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 29, "Search for bill code, order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.valueOfStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.list_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("ngModel", ctx.startDateTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.endDateTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 31, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.show_bills.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 33, "shipping bills"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 35, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](49, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c1, ctx.heightScroll))("nzData", ctx.show_bills);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 37, "Time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 39, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 41, "Order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](52, 43, "Customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 45, "COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 47, "Status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r3.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzDatePickerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: initial;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%] {\n  border: 1px solid #d9d9d9;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: end;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LWdobi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUdSO0FBREk7RUFDSSxjQUFBO0FBR1I7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSVo7QUFGUTtFQUlJLHlCQUFBO0FBQ1o7QUFKWTtFQUNJLDBDQUFBO0FBTWhCO0FBRlE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSVoiLCJmaWxlIjoiZGVsaXZlcnktZ2huLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmRlbGl2ZXJ5LWdobiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgbnotaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUtcGlja2VyLWN1cyB7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3283:
/*!**********************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/delivery-ghn.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryGhnModule": () => (/* binding */ DeliveryGhnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _delivery_ghn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-ghn.component */ 3325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _create_bill_retail_create_bill_retail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-bill-retail/create-bill-retail.component */ 21644);
/* harmony import */ var _create_bill_customer_create_bill_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-bill-customer/create-bill-customer.component */ 51728);
/* harmony import */ var _reuse_bill_retail_reuse_bill_retail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reuse-bill-retail/reuse-bill-retail.component */ 98405);
/* harmony import */ var _reuse_bill_customer_reuse_bill_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reuse-bill-customer/reuse-bill-customer.component */ 73369);
/* harmony import */ var _detail_bill_detail_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-bill/detail-bill.component */ 15595);
/* harmony import */ var _components_choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/choose-province-ghn/choose-province-ghn.component */ 4192);
/* harmony import */ var _components_choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/choose-district-ghn/choose-district-ghn.component */ 55176);
/* harmony import */ var _components_choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/choose-ward-ghn/choose-ward-ghn.component */ 31541);
/* harmony import */ var _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/choose-method-ghn/choose-method-ghn.component */ 24375);
/* harmony import */ var _components_add_address_customer_ghn_add_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-address-customer-ghn/add-address-customer-ghn.component */ 43443);
/* harmony import */ var _components_edit_address_customer_ghn_edit_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-address-customer-ghn/edit-address-customer-ghn.component */ 84326);
/* harmony import */ var _components_list_address_customer_ghn_list_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list-address-customer-ghn/list-address-customer-ghn.component */ 26227);
/* harmony import */ var _components_shipping_bill_history_shipping_bill_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shipping-bill-history/shipping-bill-history.component */ 39353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);






















const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _delivery_ghn_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryGhnComponent
            },
            {
                path: "order-bill-retail",
                component: _create_bill_retail_create_bill_retail_component__WEBPACK_IMPORTED_MODULE_2__.CreateBillRetailComponent
            },
            {
                path: "detail-bill",
                component: _detail_bill_detail_bill_component__WEBPACK_IMPORTED_MODULE_6__.DetailBillComponent
            },
            {
                path: 'order-bill-customer',
                component: _create_bill_customer_create_bill_customer_component__WEBPACK_IMPORTED_MODULE_3__.CreateBillCustomerComponent
            },
            {
                path: 'reuse-info-retail',
                component: _reuse_bill_retail_reuse_bill_retail_component__WEBPACK_IMPORTED_MODULE_4__.ReuseBillRetailComponent
            },
            {
                path: 'reuse-info-customer',
                component: _reuse_bill_customer_reuse_bill_customer_component__WEBPACK_IMPORTED_MODULE_5__.ReuseBillCustomerComponent
            }
        ]
    },
];
class DeliveryGhnModule {
}
DeliveryGhnModule.ɵfac = function DeliveryGhnModule_Factory(t) { return new (t || DeliveryGhnModule)(); };
DeliveryGhnModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: DeliveryGhnModule });
DeliveryGhnModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](DeliveryGhnModule, { declarations: [_delivery_ghn_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryGhnComponent, _create_bill_retail_create_bill_retail_component__WEBPACK_IMPORTED_MODULE_2__.CreateBillRetailComponent, _create_bill_customer_create_bill_customer_component__WEBPACK_IMPORTED_MODULE_3__.CreateBillCustomerComponent, _reuse_bill_retail_reuse_bill_retail_component__WEBPACK_IMPORTED_MODULE_4__.ReuseBillRetailComponent, _reuse_bill_customer_reuse_bill_customer_component__WEBPACK_IMPORTED_MODULE_5__.ReuseBillCustomerComponent, _detail_bill_detail_bill_component__WEBPACK_IMPORTED_MODULE_6__.DetailBillComponent, _components_choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_7__.ChooseProvinceGhnComponent, _components_choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_8__.ChooseDistrictGhnComponent, _components_choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_9__.ChooseWardGhnComponent, _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_10__.ChooseMethodGhnComponent, _components_add_address_customer_ghn_add_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_11__.AddAddressCustomerGhnComponent, _components_edit_address_customer_ghn_edit_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_12__.EditAddressCustomerGhnComponent, _components_list_address_customer_ghn_list_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_13__.ListAddressCustomerGhnComponent, _components_shipping_bill_history_shipping_bill_history_component__WEBPACK_IMPORTED_MODULE_14__.ShippingBillHistoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 15595:
/*!************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/detail-bill/detail-bill.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBillComponent": () => (/* binding */ DetailBillComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _components_shipping_bill_history_shipping_bill_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shipping-bill-history/shipping-bill-history.component */ 39353);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function DetailBillComponent_p_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](": ", ctx_r0.billInfo.data.to_address, ", ", ctx_r0.data_ward.WardName, " , ", ctx_r0.data_district.DistrictName, " , ", ctx_r0.data_province.ProvinceName, "");
} }
function DetailBillComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r13.quantity, " ");
} }
function DetailBillComponent_p_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "Carriage"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "Road"), " - ", ctx_r3.vhAlgorithm.vhcurrencyunit(ctx_r3.calculate_fee.service_fee), "");
} }
function DetailBillComponent_p_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "Carriage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, "Road"), " - ", ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.calculate_fee.service_fee), " ");
} }
function DetailBillComponent_b_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.vhAlgorithm.vhcurrencyunit(ctx_r5.calculate_fee.service_fee));
} }
function DetailBillComponent_b_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DetailBillComponent_b_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.vhAlgorithm.vhcurrencyunit(ctx_r7.calculate_fee.insurance_fee));
} }
function DetailBillComponent_b_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DetailBillComponent_b_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.calculate_fee.total));
} }
function DetailBillComponent_b_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "b", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DetailBillComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillComponent_div_150_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.reuseInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Reuse information"), " ");
} }
function DetailBillComponent_app_shipping_bill_history_151_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-shipping-bill-history", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onCloseHistoryBill", function DetailBillComponent_app_shipping_bill_history_151_Template_app_shipping_bill_history_onCloseHistoryBill_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.onCloseHistoryBill($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible_history", ctx_r12.visible_history)("data_history_bills", ctx_r12.data_history_bills);
} }
const _c0 = function () { return { y: "200px" }; };
class DetailBillComponent {
    constructor(languageService, router, ghnService, vhComponent, vhAlgorithm, vhQuerySales, vhAuth) {
        this.languageService = languageService;
        this.router = router;
        this.ghnService = ghnService;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
        this.open_status = false;
        // ------drawer history--------
        this.visible_history = false;
        this.billInfo = this.router.getCurrentNavigation().extras.state.billInfo;
        this.data_delivery = this.router.getCurrentNavigation().extras.state.data_delivery;
        this.dataSearchAndDate = this.router.getCurrentNavigation().extras.state.dataSearchAndDate;
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
        this.vhComponent.showLoading('', "transparent-loading").then(() => {
            Promise.all([
                this.ghnService.getProvinceGhn(this.data_delivery.token),
                this.ghnService.getDistrictGhn(this.data_delivery.token),
                this.ghnService.getWardGhn(this.data_delivery.token, +this.billInfo.data.to_district_id),
                this.ghnService.calculate_delivery_fee(this.data_delivery.token, this.exportDelivery())
            ]).then((res) => {
                this.vhComponent.hideLoading(0);
                this.open_status = true;
                if (res[1]) {
                    for (let i in res[1].data) {
                        if (res[1].data[i].DistrictID == this.billInfo.data.to_district_id) {
                            this.data_district = res[1].data[i];
                            break;
                        }
                    }
                }
                if (res[0]) {
                    for (let i in res[0].data) {
                        if (res[0].data[i].ProvinceID == this.data_district.ProvinceID) {
                            this.data_province = res[0].data[i];
                            break;
                        }
                    }
                }
                if (res[2]) {
                    for (let i in res[2].data) {
                        if (res[2].data[i].WardCode == this.billInfo.data.to_ward_code) {
                            this.data_ward = res[2].data[i];
                            break;
                        }
                    }
                }
                if (res[3]) {
                    this.calculate_fee = res[3].data;
                }
            }).catch(err => {
                this.open_status = true;
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(2000, this.languageService.translate('An error occurred while getting data'), "alert-toast");
            });
        });
    }
    cancelOrder() {
        if (this.vhAuth.checkMyPermission("shipping_enable_cancel_bill")) {
            this.vhComponent.alertConfirm(this.languageService.translate('Confirm'), this.languageService.translate("Do you want to delete shipping bill ?"), "", "Ok", this.languageService.translate("Cancel")).then(() => {
                let data = {
                    token: this.data_delivery.token,
                    shop_id: this.billInfo.data.shop_id,
                    order_code: [this.billInfo.order_code],
                };
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    this.ghnService.cancelOrder(data).then((res) => {
                        this.vhComponent.hideLoading(0).then(() => {
                            this.vhComponent.showToast(2000, this.languageService.translate("Delete bill successfully"), "success-toast");
                            this.goBack();
                        });
                    }).catch(err => {
                        this.vhComponent.hideLoading(0);
                        this.vhComponent.showToast(2000, this.languageService.translate("An error occurred while deleting bill"), "alert-toast");
                    });
                });
            }).catch(() => { });
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    reuseInfo() {
        let data = {
            state: {
                item: {
                    billInfo: this.billInfo,
                    calculate_fee: this.calculate_fee,
                    address: {
                        province: this.data_province,
                        district: this.data_district,
                        ward: this.data_ward
                    },
                    data_delivery: this.data_delivery
                },
                dataSearchAndDate: this.dataSearchAndDate
            }
        };
        if (this.billInfo.id_customer == "id_retail") {
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn/reuse-info-retail"], data);
        }
        else {
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn/reuse-info-customer"], data);
        }
    }
    gotoHistoryBill() {
        this.router.navigate(["/mobile/management/delivery/shipping-bill/delivery-ghn/detail-bill/history"], {
            state: {
                item: {
                    history: this.billInfo.data.log ? this.billInfo.data.log : [],
                    billInfo: this.billInfo
                }
            }
        });
    }
    onOpenHistoryBill() {
        this.data_history_bills = {
            history: this.billInfo.data.log ? this.billInfo.data.log : [],
            billInfo: this.billInfo
        };
        this.visible_history = true;
    }
    onCloseHistoryBill(event) {
        this.visible_history = false;
    }
    customDataBillDetail(billDetails) {
        let data = billDetails.map(item => {
            return {
                name_product: item.name,
                quantity: item.quantity
            };
        });
        return data;
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
            this.customDataBillInfo();
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: this.billInfo,
                billDetails: this.customDataBillDetail(this.billInfo.data.items),
                data_delivery: this.data_delivery,
                printer
            }, false, false, "modal-print");
        }, (err) => {
            let name = 'Sales';
            this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
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
    customDataBillInfo() {
        this.billInfo.data.created = this.billInfo.data.created_date;
        this.billInfo.data.ship_money = this.calculate_fee.service_fee;
        this.billInfo.data.insurance = this.calculate_fee.insurance_fee;
        this.billInfo.data.pick_money = this.billInfo.data.cod_amount;
        this.billInfo.data.customer_fullname = this.billInfo.data.to_name;
        this.billInfo.data.customer_tel = this.billInfo.data.to_phone;
        this.billInfo.data.address = this.billInfo.data.to_address + ", " + this.data_ward.WardName + ", " + this.data_district.DistrictName + ", " + this.data_province.ProvinceName;
        this.billInfo.data.is_freeship = this.billInfo.data.payment_type_id == 1 ? 1 : 0;
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn"], {
            state: {
                dataSearchAndDate: this.dataSearchAndDate
            }
        });
    }
}
DetailBillComponent.ɵfac = function DetailBillComponent_Factory(t) { return new (t || DetailBillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_2__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth)); };
DetailBillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DetailBillComponent, selectors: [["app-detail-bill"]], decls: 152, vars: 121, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "7"], ["nz-col", "", "nzSpan", "17", 1, "all-content-center", "addInformation-button"], ["nz-button", "", 1, "nz-hover-border", 3, "click"], ["src", "assets/icon/management/printer.svg"], ["nz-button", "", 1, "nz-hover-border", 3, "disabled", "click"], ["name", "trash-outline"], ["name", "alarm-outline"], ["nz-col", "", "nzSpan", "24", 1, "addInformation-info"], [4, "ngIf"], [1, "productInfo"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "deliveryInfo", 3, "ngClass"], [1, "deliveryInfo-form", "ant-table-body"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [2, "width", "70%", "font-weight", "bold"], ["style", "color:var(--ion-color-vh-green);font-size: 1.2rem;", 4, "ngIf"], ["class", "deliveryInfo-button-order all-content-center", 4, "ngIf"], [3, "visible_history", "data_history_bills", "onCloseHistoryBill", 4, "ngIf"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "center"], [2, "color", "var(--ion-color-vh-green)"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "click"], [3, "visible_history", "data_history_bills", "onCloseHistoryBill"]], template: function DetailBillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillComponent_Template_button_click_13_listener() { return ctx.showPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillComponent_Template_button_click_17_listener() { return ctx.cancelOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailBillComponent_Template_button_click_21_listener() { return ctx.onOpenHistoryBill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, DetailBillComponent_p_49_Template, 5, 7, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "nz-table", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, DetailBillComponent_tr_68_Template, 5, 2, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, DetailBillComponent_p_96_Template, 5, 7, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, DetailBillComponent_p_97_Template, 6, 7, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](103, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](134, DetailBillComponent_b_134_Template, 2, 1, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](135, DetailBillComponent_b_135_Template, 2, 0, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](139, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, DetailBillComponent_b_141_Template, 2, 1, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](142, DetailBillComponent_b_142_Template, 2, 0, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](148, DetailBillComponent_b_148_Template, 2, 1, "b", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](149, DetailBillComponent_b_149_Template, 2, 0, "b", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](150, DetailBillComponent_div_150_Template, 4, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](151, DetailBillComponent_app_shipping_bill_history_151_Template, 1, 2, "app-shipping-bill-history", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 59, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 61, "Shipment bill"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 63, "Print shipping bill"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.billInfo.data.status == "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 65, "Cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 67, "Shipping history"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 69, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 71, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.bill_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 73, "Order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.order_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 75, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.data.to_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 77, "Phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.data.to_phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.open_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 79, "Products information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 81, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](120, _c0))("nzShowPagination", false)("nzData", ctx.billInfo.data.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](62, 83, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](66, 85, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.billInfo.data.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](74, 87, "Weight(gram)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.billInfo.data.weight, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](79, 89, "Size(cm)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](": ", ctx.billInfo.data.length, " x ", ctx.billInfo.data.width, " x ", ctx.billInfo.data.height, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.billInfo.data.status == "cancel" ? "reuseInfo" : "notReuseInfo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](85, 91, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 93, "COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.data.cod_amount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](94, 95, "Order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.data.insurance_value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.calculate_fee && ctx.billInfo.data.service_type_id == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.calculate_fee && ctx.billInfo.data.service_type_id == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](101, 97, "Delivery time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](103, 99, ctx.billInfo.data.leadtime, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](107, 102, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](109, 104, ctx.billInfo.data.payment_type_id == 1 ? "Paid by seller" : "Pay by receiver"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](113, 106, "Require note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](115, 108, ctx.billInfo.data.required_note), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](119, 110, "Note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.billInfo.data.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](127, 112, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](132, 114, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.calculate_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.calculate_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](139, 116, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.calculate_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.calculate_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](146, 118, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.calculate_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.calculate_fee);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.billInfo.data.status == "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.visible_history);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _components_shipping_bill_history_shipping_bill_history_component__WEBPACK_IMPORTED_MODULE_4__.ShippingBillHistoryComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 33% 33% 31%;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin: 0 !important;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  margin: 10 0 !important;\n  font-size: 1rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%] {\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-right: 4px;\n  margin-bottom: -2px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 33%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.reuseInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.reuseInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.reuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.reuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.reuseInfo[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.reuseInfo[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 100%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  overflow-y: auto !important;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFnQkEsa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFaUjtBQU5RO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFRWjtBQU5RO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVFaO0FBTlE7RUFDSSxpQkFBQTtBQVFaO0FBRlE7Ozs7O0VBS0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBSVo7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUlaO0FBSFk7RUFDSSxlQUFBO0FBS2hCO0FBSmdCO0VBQ0ksY0FBQTtBQU1wQjtBQUxvQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU94QjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFJWjtBQUhZO0VBQ0ksYUFBQTtBQUtoQjtBQUhZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBS2hCO0FBSG9CO0VBQ0ksV0FBQTtBQUt4QjtBQUFRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFFWjtBQURZO0VBQ0ksYUFBQTtBQUdoQjtBQURZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBR2hCO0FBRG9CO0VBQ0ksV0FBQTtBQUd4QjtBQUNZO0VBQ0ksb0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFFcEI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUFaO0FBRVE7RUFDSSwyQkFBQTtBQUFaO0FBR0k7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQURSO0FBSUE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQURKIiwiZmlsZSI6ImRldGFpbC1iaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5kZWxpdmVyeS1naG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAgMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMxJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbixcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0sXHJcbiAgICAgICAgLnByb2R1Y3RJbmZvLFxyXG4gICAgICAgIC50b3RhbERlbGl2ZXJ5LFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8ubm90UmV1c2VJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjclIDMzJTtcclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlbGl2ZXJ5SW5mby10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAgICAgLnN1Yi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby5yZXVzZUluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NyUgMjMlIDEwJTtcclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlbGl2ZXJ5SW5mby10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAgICAgLnN1Yi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlbGl2ZXJ5SW5mby1idXR0b24tb3JkZXIge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby1mb3JtIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 73369:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/reuse-bill-customer/reuse-bill-customer.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReuseBillCustomerComponent": () => (/* binding */ ReuseBillCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_list_address_customer_ghn_list_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/list-address-customer-ghn/list-address-customer-ghn.component */ 26227);
/* harmony import */ var _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/choose-method-ghn/choose-method-ghn.component */ 24375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























function ReuseBillCustomerComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function ReuseBillCustomerComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "name is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ReuseBillCustomerComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r32.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r32.hasError("required"));
} }
function ReuseBillCustomerComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r35.hasError("required"));
} }
function ReuseBillCustomerComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.currentAddress.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", ctx_r4.currentAddress.ward, ", ", ctx_r4.currentAddress.district, ", ", ctx_r4.currentAddress.province, "");
} }
function ReuseBillCustomerComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r37.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r37.quantity, " ");
} }
function ReuseBillCustomerComponent_ng_template_78_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_78_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r38.hasError("required"));
} }
function ReuseBillCustomerComponent_ng_template_91_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_91_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r40.hasError("required"));
} }
function ReuseBillCustomerComponent_ng_template_102_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_102_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r42.hasError("required"));
} }
function ReuseBillCustomerComponent_ng_template_113_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_113_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r44.hasError("required"));
} }
function ReuseBillCustomerComponent_ng_template_130_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_130_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r46.hasError("required"));
} }
function ReuseBillCustomerComponent_ng_template_142_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function ReuseBillCustomerComponent_ng_template_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ReuseBillCustomerComponent_ng_template_142_ng_container_0_Template, 3, 3, "ng-container", 57);
} if (rf & 2) {
    const control_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r48.hasError("required"));
} }
function ReuseBillCustomerComponent_p_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Select service"), "");
} }
function ReuseBillCustomerComponent_p_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r20.chooseService.sort_name, " - ", ctx_r20.vhAlgorithm.vhcurrencyunit(ctx_r20.chooseService.service_fee), "");
} }
function ReuseBillCustomerComponent_p_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "Delivery time"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 4, ctx_r21.chooseService.leadtime, "dd/MM/yyyy"), "");
} }
function ReuseBillCustomerComponent_nz_option_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 70);
} if (rf & 2) {
    const option_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLabel", option_r50.name)("nzValue", option_r50.value);
} }
function ReuseBillCustomerComponent_nz_option_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 70);
} if (rf & 2) {
    const option_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLabel", option_r51.name)("nzValue", option_r51.value);
} }
function ReuseBillCustomerComponent_b_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r24.vhAlgorithm.vhcurrencyunit(ctx_r24.chooseService.service_fee));
} }
function ReuseBillCustomerComponent_b_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ReuseBillCustomerComponent_b_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r26.vhAlgorithm.vhcurrencyunit(ctx_r26.chooseService.insurance_fee));
} }
function ReuseBillCustomerComponent_b_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ReuseBillCustomerComponent_b_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r28.vhAlgorithm.vhcurrencyunit(ctx_r28.chooseService.total));
} }
function ReuseBillCustomerComponent_b_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ReuseBillCustomerComponent_app_list_address_customer_ghn_210_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-list-address-customer-ghn", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onCloseListAddress", function ReuseBillCustomerComponent_app_list_address_customer_ghn_210_Template_app_list_address_customer_ghn_onCloseListAddress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r52.onCloseListAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data_list_address_ghn", ctx_r30.data_list_address_ghn)("visible_list_address", ctx_r30.visible_list_address);
} }
function ReuseBillCustomerComponent_app_choose_method_ghn_211_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-choose-method-ghn", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cancelModalMethodGhn", function ReuseBillCustomerComponent_app_choose_method_ghn_211_Template_app_choose_method_ghn_cancelModalMethodGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r54.cancelModalMethodGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chooseMethod", ctx_r31.chooseMethod)("dataToGetMethod", ctx_r31.dataToGetMethod);
} }
const _c0 = function () { return { y: "200px" }; };
const _c1 = function (a0) { return { opacity: a0 }; };
const _c2 = function () { return { standalone: true }; };
class ReuseBillCustomerComponent {
    constructor(router, vhComponent, vhQuerySales, languageService, ghnService, vhAlgorithm) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.ghnService = ghnService;
        this.vhAlgorithm = vhAlgorithm;
        this.billDetails = [];
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
        this.infoAddress = [];
        this.currentAddress = {
            address: '',
            ward: '',
            district: '',
            province: ''
        };
        this.valueRequireNote = 1;
        this.valueListPayment = 1;
        this.listRequireNote = [
            {
                value: 1,
                name: this.languageService.translate("Not allow to unpack")
            },
            {
                value: 2,
                name: this.languageService.translate("Allow to try")
            },
            {
                value: 3,
                name: this.languageService.translate("Allow to unpack & not to try")
            },
        ];
        this.listPaymentType = [
            {
                value: 1,
                name: this.languageService.translate("Paid by seller")
            },
            {
                value: 2,
                name: this.languageService.translate("Pay by receiver")
            },
        ];
        this.checkPrinter = false;
        // ------modal province--------
        this.chooseProvinceGhn = false;
        // ------modal district--------
        this.chooseDistrictGhn = false;
        // ------modal ward--------
        this.chooseWardGhn = false;
        // ------modal choose--------
        this.chooseMethod = false;
        // ------drawer list address-----
        this.visible_list_address = false;
        this.billInfo = this.router.getCurrentNavigation().extras.state.item.billInfo;
        this.calculate_fee = this.router.getCurrentNavigation().extras.state.item.calculate_fee;
        this.address = this.router.getCurrentNavigation().extras.state.item.address;
        this.data_delivery = this.router.getCurrentNavigation().extras.state.item.data_delivery;
        this.dataSearchAndDate = this.router.getCurrentNavigation().extras.state.dataSearchAndDate;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(100)]),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(100)]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(200000)]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(100)]),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            cod: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[0-9,]{1,10}$")]),
            orderValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[0-9,]{1,10}$")]),
            transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            required_note: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('KHONGCHOXEMHANG', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
            payment_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('1', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.cod_amount = this.vhAlgorithm.vhnumeral('.cod_amount');
            this.insurance_value = this.vhAlgorithm.vhnumeral('.order_value_amount');
        });
    }
    //lấy dữ liệu billDetail
    getData() {
        this.addInformation.controls.name.setValue(this.billInfo.data.to_name);
        this.addInformation.controls.phone.setValue(this.billInfo.data.to_phone);
        this.addInformation.controls.address.setValue(this.billInfo.data.to_address);
        this.addInformation.controls.province.setValue(this.address.province.ProvinceID);
        this.addInformation.controls.district.setValue(this.address.district.DistrictID);
        this.addInformation.controls.ward.setValue(this.address.ward.WardCode);
        this.productInfo.controls.weight.setValue(this.billInfo.data.weight);
        this.productInfo.controls.height.setValue(this.billInfo.data.height);
        this.productInfo.controls.length.setValue(this.billInfo.data.length);
        this.productInfo.controls.width.setValue(this.billInfo.data.width);
        this.province.ProvinceName = this.address.province.ProvinceName;
        this.district.DistrictName = this.address.district.DistrictName;
        this.ward.WardName = this.address.ward.WardName;
        this.deliveryInfo.controls.cod.setValue(this.billInfo.data.cod_amount);
        this.deliveryInfo.controls.orderValue.setValue(this.billInfo.data.insurance_value);
        this.deliveryInfo.controls.required_note.setValue(this.billInfo.data.required_note);
        this.deliveryInfo.controls.payment_type_id.setValue(this.billInfo.data.payment_type_id.toString());
        this.deliveryInfo.controls.note.setValue(this.billInfo.data.note);
        this.deliveryInfo.controls.transport.setValue(this.billInfo.data.service_id);
        this.chooseService = {
            service_id: this.billInfo.data.service_id,
            service_type_id: this.billInfo.data.service_type_id,
            insurance_fee: this.calculate_fee.insurance_fee,
            total: this.calculate_fee.total,
            service_fee: this.calculate_fee.service_fee,
            sort_name: this.filterSortname(this.billInfo.data.service_type_id),
            leadtime: this.billInfo.data.leadtime
        };
        this.currentAddress = {
            address: this.billInfo.data.to_address,
            ward: this.address.ward.WardName,
            district: this.address.district.DistrictName,
            province: this.address.district.ProvinceName
        };
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill_details_byId_bill(this.billInfo._id),
                this.vhQuerySales.getlocalCustomer(this.billInfo.id_customer),
                this.ghnService.connectTokenGhn(this.data_delivery.token),
                this.vhQuerySales.getlocalAddresss()
            ]).then((res) => {
                if (res[0]) {
                    this.billDetails = res[0].map(item => {
                        let nameProduct = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                        return Object.assign(Object.assign({}, item), { name_product: nameProduct });
                    });
                    this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.billInfo, this.billDetails, this.vhQuerySales);
                }
                if (res[1]) {
                    this.infoCustomer = res[1];
                    // this.addInformation.controls.name.setValue(this.infoCustomer.name);
                    // this.addInformation.controls.phone.setValue(this.infoCustomer.phone);
                }
                if (res[2]) {
                    this.shops = res[2].data.shops;
                    for (let i in this.shops) {
                        if (this.shops[i]._id == this.data_delivery.shop_id) {
                            this.data_delivery = Object.assign(Object.assign({}, this.data_delivery), { name: this.shops[i].name, phone: this.shops[i].phone, address: this.shops[i].address, district_id: this.shops[i].district_id, ward_code: this.shops[i].ward_code });
                        }
                    }
                }
                if (res[3]) {
                    let address = res[3].filter(item => item.type == 1 && item.id_customer == this.billInfo.id_customer).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];
                    if (address) {
                        this.currentAddress = address;
                        this.province.ProvinceName = this.currentAddress.province;
                        this.district.DistrictName = this.currentAddress.district;
                        this.ward.WardName = this.currentAddress.ward;
                        this.addInformation.controls.province.setValue(this.currentAddress.province_id);
                        this.addInformation.controls.district.setValue(this.currentAddress.district_id);
                        this.addInformation.controls.ward.setValue(this.currentAddress.ward_id);
                        this.addInformation.controls.address.setValue(this.currentAddress.address);
                        this.getServive();
                    }
                }
                let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                if (printer)
                    this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
            });
        }).finally(() => this.vhComponent.hideLoading(0));
    }
    filterSortname(type) {
        let sortname = '';
        if (type == 1) {
            sortname = this.languageService.translate('Flight');
        }
        else if (type == 2) {
            sortname = this.languageService.translate('Road');
        }
        return sortname;
    }
    //hàm này dùng để get về các phương thức giao hàng : đi bộ, bay , tiết kiệm
    getServive() {
        let data = {
            shop_id: this.data_delivery.shop_id,
            from_district_id: this.data_delivery.district_id,
            to_district_id: this.addInformation.value.district
        };
        this.vhComponent.showLoading('');
        this.ghnService.getServiceDelivery(this.data_delivery.token, data).then((res) => {
            this.vhComponent.hideLoading(0);
            this.service = res.data.filter(item => {
                return item.service_type_id == 1 || item.service_type_id == 2;
            });
        }).catch(err => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.showToast(2000, this.languageService.translate('An error occurred while getting data !'), "alert-toast");
        });
    }
    convertProducts() {
        let data = [];
        this.billDetails.forEach(item => {
            data.push({
                name: item.name_product,
                quantity: item.quantity,
                id: item.id_product
            });
        });
        return data;
    }
    prepareDataToCreateOrder() {
        let data = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_name: this.addInformation.value.name,
            to_phone: this.addInformation.value.phone,
            to_address: this.addInformation.value.address,
            to_ward_code: this.addInformation.value.ward,
            to_district_id: this.addInformation.value.district,
            weight: this.productInfo.value.weight,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            width: this.productInfo.value.width,
            payment_type_id: +this.deliveryInfo.value.payment_type_id,
            required_note: this.deliveryInfo.value.required_note,
            service_id: this.deliveryInfo.value.transport,
            cod_amount: parseInt(this.cod_amount.getRawValue()),
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            items: this.convertProducts(),
            note: this.deliveryInfo.value.note,
        };
        return data;
    }
    createOrder(print) {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create order ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.ghnService.createOrderGhn(this.prepareDataToCreateOrder()).then((res) => {
                    this.invoice.setOrderCode(res.data.order_code);
                    this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then(() => {
                        if (print) {
                            this.ghnService.getInfoOrder(this.data_delivery.token, res.data.order_code).then((ress) => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.billInfo.data = ress.data;
                                    this.billInfo.order_code = res.data.order_code;
                                    this.showPrint();
                                });
                            });
                        }
                        else {
                            this.vhComponent.hideLoading(0).then(() => {
                                this.goBack();
                                this.vhComponent.showToast(2000, this.languageService.translate('Create order successfully !'), "success-toast");
                            });
                        }
                    });
                }).catch(err => {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(2000, this.languageService.translate(err.error.message), "alert-toast");
                });
            });
        }).catch(err => { });
    }
    blurFee() {
        this.chooseService = '';
        this.deliveryInfo.controls.transport.setValue('');
    }
    checkedCod() {
        if (parseInt(this.cod_amount.getRawValue()) > 50000000) {
            this.deliveryInfo.controls.cod.setValue('50,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun cod is 50,000,000"), "alert-toast");
        }
    }
    checkedInsurance_value() {
        if (parseInt(this.insurance_value.getRawValue()) > 10000000) {
            this.deliveryInfo.controls.orderValue.setValue('10,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun insurance value is 10,000,000"), "alert-toast");
        }
        this.blurFee();
    }
    customDataBillDetail(billDetails) {
        let data = billDetails.map(item => {
            return {
                name_product: item.name,
                quantity: item.quantity
            };
        });
        return data;
    }
    customDataBillInfo() {
        this.billInfo.data.created = this.billInfo.data.created_date;
        this.billInfo.data.ship_money = this.chooseService.service_fee;
        this.billInfo.data.insurance = this.chooseService.insurance_fee;
        this.billInfo.data.pick_money = this.billInfo.data.cod_amount;
        this.billInfo.data.customer_fullname = this.billInfo.data.to_name;
        this.billInfo.data.customer_tel = this.billInfo.data.to_phone;
        this.billInfo.data.address = this.addInformation.value.address + ", " + this.ward.WardName + ", " + this.district.DistrictName + ", " + this.province.ProvinceName;
        this.billInfo.data.is_freeship = this.billInfo.data.payment_type_id == 1 ? 1 : 0;
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn"], {
            state: {
                dataSearchAndDate: this.dataSearchAndDate
            }
        });
    }
    chooseProvince() {
        this.chooseProvinceGhn = true;
    }
    cancelModalProvinceGhn(event) {
        if (event) {
            this.province = event;
            this.addInformation.controls.province.setValue(this.province.ProvinceID);
            this.ward = '';
            this.district = '';
        }
        this.chooseProvinceGhn = false;
    }
    chooseDistrict() {
        if (this.province.ProvinceName) {
            this.chooseDistrictGhn = true;
            this.province_idModal = this.province.ProvinceID ? this.province.ProvinceID : this.addInformation.value.province;
        }
    }
    cancelModalDistrictGhn(event) {
        if (event) {
            this.district = event;
            this.ward = '';
            this.addInformation.controls.district.setValue(this.district.DistrictID);
            this.chooseService = '';
            this.getServive();
        }
        this.chooseDistrictGhn = false;
    }
    chooseWard() {
        if (this.district.DistrictName) {
            this.chooseWardGhn = true;
            this.district_idModal = this.district.DistrictID ? this.district.DistrictID : this.addInformation.value.district;
        }
    }
    cancelModalWardGhn(event) {
        if (event) {
            this.ward = event;
            this.addInformation.controls.ward.setValue(this.ward.WardCode);
            this.chooseService = '';
            this.deliveryInfo.controls.transport.setValue('');
        }
        this.chooseWardGhn = false;
    }
    paymentType(event) {
        this.deliveryInfo.controls.payment_type_id.setValue(event);
    }
    chooseRequireNote(event) {
        if (event == 1) {
            this.deliveryInfo.controls.required_note.setValue("KHONGCHOXEMHANG");
        }
        else if (event == 2) {
            this.deliveryInfo.controls.required_note.setValue("CHOTHUHANG");
        }
        else if (event == 3) {
            this.deliveryInfo.controls.required_note.setValue("CHOXEMHANGKHONGTHU");
        }
    }
    chooseMethodGhn() {
        this.dataToGetMethod = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_district_id: this.addInformation.value.district,
            to_ward_code: this.addInformation.value.ward,
            from_district_id: this.data_delivery.district_id,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            weight: this.productInfo.value.weight,
            width: this.productInfo.value.width,
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            service: this.service,
            from_ward_code: this.data_delivery.ward_code
        };
        this.chooseMethod = true;
    }
    cancelModalMethodGhn(event) {
        if (event) {
            this.chooseService = event;
            this.deliveryInfo.controls.transport.setValue(this.chooseService.service_id);
        }
        this.chooseMethod = false;
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
            this.customDataBillInfo();
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: this.billInfo,
                billDetails: this.customDataBillDetail(this.billInfo.data.items),
                data_delivery: this.data_delivery, printer
            }, false, false, "modal-print").then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack();
                });
            });
        }, (err) => {
            this.goBack();
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
    openListAddressCustomer() {
        this.data_list_address_ghn = {
            billInfo: this.billInfo,
            data_delivery: this.data_delivery
        };
        this.visible_list_address = true;
    }
    onCloseListAddress(event) {
        if (event) {
            this.currentAddress = event;
            this.province.ProvinceName = this.currentAddress.province;
            this.district.DistrictName = this.currentAddress.district;
            this.ward.WardName = this.currentAddress.ward;
            this.addInformation.controls.province.setValue(this.currentAddress.province_id);
            this.addInformation.controls.district.setValue(this.currentAddress.district_id);
            this.addInformation.controls.ward.setValue(this.currentAddress.ward_id);
            this.addInformation.controls.address.setValue(this.currentAddress.address);
            this.chooseService = '';
            this.getServive();
        }
        this.visible_list_address = false;
    }
}
ReuseBillCustomerComponent.ɵfac = function ReuseBillCustomerComponent_Factory(t) { return new (t || ReuseBillCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm)); };
ReuseBillCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ReuseBillCustomerComponent, selectors: [["app-reuse-bill-customer"]], decls: 212, vars: 135, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "phone", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["nz-col", "", "nzSpan", "24", 1, "addInformation-address"], ["nzType", "text", "nz-button", "", 3, "click"], ["name", "create-outline"], ["class", "addInformation-address", "nz-col", "", "nzSpan", "24", 4, "ngIf"], [1, "productInfo"], ["nz-row", ""], [1, "all-content-center", 3, "formGroup"], ["nz-col", "", "nzSpan", "24", 1, "productInfo-table"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24"], ["nz-row", "", "nzGutter", "16"], ["formControlName", "weight", "nz-input", "", "required", "", "type", "number"], ["combineTplWeight", ""], ["nz-col", "", "nzSpan", "8"], ["formControlName", "length", "nz-input", "", "required", "", "type", "number"], ["combineTplLength", ""], ["formControlName", "width", "nz-input", "", "required", "", "type", "number"], ["combineTplWidth", ""], ["formControlName", "height", "nz-input", "", "required", "", "type", "number"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["type", "text", "maxlength", "10", "formControlName", "cod", "nz-input", "", "required", "", 1, "cod_amount"], ["combineTplCod", ""], ["type", "text", "maxlength", "10", "formControlName", "orderValue", "nz-input", "", "required", "", 1, "order_value_amount", 3, "placeholder"], ["combineTplOrder", ""], ["nz-col", "", "nzSpan", "24", 3, "ngStyle"], [1, "input-group", "all-content-center", 2, "cursor", "pointer", 3, "click"], [1, "input-group", "all-content-center", 2, "padding", "4px 11px", "border", "1px solid #c8c7cc !important", "border-radius", "5px"], ["class", "nz-no-margin", 4, "ngIf"], ["style", "display: inline-block;color:var(--ion-color-vh-green)", "class", "nz-no-margin", 4, "ngIf"], ["style", "float: right;", "class", "nz-no-margin", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 2, "margin", "15px 0"], [3, "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["formControlName", "note", "rows", "2", "nz-input", "", 1, "nz-hover-border", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [4, "ngIf"], [2, "width", "70%", "font-weight", "bold"], ["style", "color:var(--ion-color-vh-green);font-size: 1.2rem;", 4, "ngIf"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "data_list_address_ghn", "visible_list_address", "onCloseListAddress", 4, "ngIf"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn", 4, "ngIf"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"], [1, "nz-no-margin"], [1, "nz-no-margin", 2, "display", "inline-block", "color", "var(--ion-color-vh-green)"], [1, "nz-no-margin", 2, "float", "right"], [3, "nzLabel", "nzValue"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [3, "data_list_address_ghn", "visible_list_address", "onCloseListAddress"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn"]], template: function ReuseBillCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReuseBillCustomerComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ReuseBillCustomerComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ReuseBillCustomerComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReuseBillCustomerComponent_Template_button_click_42_listener() { return ctx.openListAddressCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ReuseBillCustomerComponent_div_44_Template, 5, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "nz-table", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, ReuseBillCustomerComponent_tr_66_Template, 5, 2, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, ReuseBillCustomerComponent_ng_template_78_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](90, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, ReuseBillCustomerComponent_ng_template_91_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](101, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, ReuseBillCustomerComponent_ng_template_102_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, ReuseBillCustomerComponent_ng_template_113_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](129, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, ReuseBillCustomerComponent_ng_template_130_Template, 1, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](140, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](142, ReuseBillCustomerComponent_ng_template_142_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "nz-input-group", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReuseBillCustomerComponent_Template_nz_input_group_click_149_listener() { return !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? "" : ctx.chooseMethodGhn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](151, ReuseBillCustomerComponent_p_151_Template, 3, 3, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](152, ReuseBillCustomerComponent_p_152_Template, 3, 2, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](153, ReuseBillCustomerComponent_p_153_Template, 5, 7, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "nz-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ReuseBillCustomerComponent_Template_nz_select_ngModelChange_159_listener($event) { return ctx.valueListPayment = $event; })("ngModelChange", function ReuseBillCustomerComponent_Template_nz_select_ngModelChange_159_listener($event) { return ctx.paymentType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](161, ReuseBillCustomerComponent_nz_option_161_Template, 1, 2, "nz-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "nz-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ReuseBillCustomerComponent_Template_nz_select_ngModelChange_167_listener($event) { return ctx.valueRequireNote = $event; })("ngModelChange", function ReuseBillCustomerComponent_Template_nz_select_ngModelChange_167_listener($event) { return ctx.chooseRequireNote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](168, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](169, ReuseBillCustomerComponent_nz_option_169_Template, 1, 2, "nz-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](174, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](183, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](184);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](185, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](187, ReuseBillCustomerComponent_b_187_Template, 2, 1, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](188, ReuseBillCustomerComponent_b_188_Template, 2, 0, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](190, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](192, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](193, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](194, ReuseBillCustomerComponent_b_194_Template, 2, 1, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](195, ReuseBillCustomerComponent_b_195_Template, 2, 0, "b", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](196, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](197, "td", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](201, ReuseBillCustomerComponent_b_201_Template, 2, 1, "b", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](202, ReuseBillCustomerComponent_b_202_Template, 2, 0, "b", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](203, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReuseBillCustomerComponent_Template_button_click_204_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](207, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReuseBillCustomerComponent_Template_button_click_207_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](209, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](210, ReuseBillCustomerComponent_app_list_address_customer_ghn_210_Template, 1, 2, "app-list-address-customer-ghn", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](211, ReuseBillCustomerComponent_app_choose_method_ghn_211_Template, 1, 2, "app-choose-method-ghn", 64);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](79);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](92);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](103);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](114);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](131);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 68, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 70, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 72, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 74, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 76, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 78, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 80, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentAddress.ward);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 82, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](54, 84, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](130, _c0))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](60, 86, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](64, 88, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](73, 90, "Weight(gram)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](86, 92, "Length(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](97, 94, "Width(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](108, 96, "Height(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](119, 98, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](125, 100, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](136, 102, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](141, 104, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](131, _c1, !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](148, 106, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](158, 108, "Payment type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](160, 110, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.valueListPayment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](133, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.listPaymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](166, 112, "Require note"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](168, 114, "Require note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.valueRequireNote)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](134, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.listRequireNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](175, 116, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](180, 118, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](185, 120, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](192, 122, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](199, 124, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid && !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](206, 126, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](209, 128, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visible_list_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseMethod);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzOptionComponent, _components_list_address_customer_ghn_list_address_customer_ghn_component__WEBPACK_IMPORTED_MODULE_5__.ListAddressCustomerGhnComponent, _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_6__.ChooseMethodGhnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldXNlLWJpbGwtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxXQUFBO0FBR1I7QUFESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFHUjtBQUZROzs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlaO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFJWjtBQUhZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBS2hCO0FBSG9CO0VBQ0ksaUJBQUE7QUFLeEI7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBRVo7QUFEWTtFQUNJLGFBQUE7QUFHaEI7QUFEWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUdoQjtBQURvQjtFQUNJLFdBQUE7QUFHeEI7QUFDWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFFcEI7QUFBZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUVwQjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQVo7QUFHSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFJQTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBREo7QUFHQTtFQUNJLGlCQUFBO0FBQUo7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoicmV1c2UtYmlsbC1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRlbGl2ZXJ5LWdobiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbixcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0sXHJcbiAgICAgICAgLnByb2R1Y3RJbmZvLFxyXG4gICAgICAgIC50b3RhbERlbGl2ZXJ5LFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgICYtYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnlJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjclIDIzJSAxMCU7XHJcbiAgICAgICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgICAgIC5zdWItdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtYnV0dG9uLW9yZGVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0SW5mbyB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hbnQtaW5wdXQtc3VmZml4IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjOGM3Y2MgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 98405:
/*!************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghn/reuse-bill-retail/reuse-bill-retail.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReuseBillRetailComponent": () => (/* binding */ ReuseBillRetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/choose-province-ghn/choose-province-ghn.component */ 4192);
/* harmony import */ var _components_choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/choose-district-ghn/choose-district-ghn.component */ 55176);
/* harmony import */ var _components_choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/choose-ward-ghn/choose-ward-ghn.component */ 31541);
/* harmony import */ var _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/choose-method-ghn/choose-method-ghn.component */ 24375);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


























function ReuseBillRetailComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function ReuseBillRetailComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ReuseBillRetailComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r41.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r41.hasError("required"));
} }
function ReuseBillRetailComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r44.hasError("required"));
} }
function ReuseBillRetailComponent_ng_template_46_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_46_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r46.hasError("required"));
} }
function ReuseBillRetailComponent_nz_input_group_53_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_nz_input_group_53_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r48.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r6.province.ProvinceName, " ");
} }
function ReuseBillRetailComponent_nz_input_group_54_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_nz_input_group_54_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r50.chooseProvince(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Province"), " ");
} }
function ReuseBillRetailComponent_nz_input_group_60_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_nz_input_group_60_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r52.province.ProvinceName ? ctx_r52.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r8.district.DistrictName, " ");
} }
function ReuseBillRetailComponent_nz_input_group_61_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_nz_input_group_61_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r54.province.ProvinceName ? ctx_r54.chooseDistrict() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "District"), " ");
} }
function ReuseBillRetailComponent_nz_input_group_67_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_nz_input_group_67_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r56.district.DistrictName ? ctx_r56.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r10.ward.WardName, " ");
} }
function ReuseBillRetailComponent_nz_input_group_68_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-input-group", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_nz_input_group_68_Template_nz_input_group_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r58.district.DistrictName ? ctx_r58.chooseWard() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Ward"), " ");
} }
function ReuseBillRetailComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r60.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r60.quantity, " ");
} }
function ReuseBillRetailComponent_ng_template_102_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_102_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r61.hasError("required"));
} }
function ReuseBillRetailComponent_ng_template_115_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Length is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_115_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r63.hasError("required"));
} }
function ReuseBillRetailComponent_ng_template_126_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Width is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_126_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r65.hasError("required"));
} }
function ReuseBillRetailComponent_ng_template_137_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Height is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_137_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r67.hasError("required"));
} }
function ReuseBillRetailComponent_ng_template_154_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_154_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r69.hasError("required"));
} }
function ReuseBillRetailComponent_ng_template_166_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function ReuseBillRetailComponent_ng_template_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ReuseBillRetailComponent_ng_template_166_ng_container_0_Template, 3, 3, "ng-container", 58);
} if (rf & 2) {
    const control_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", control_r71.hasError("required"));
} }
function ReuseBillRetailComponent_p_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Select service"), "");
} }
function ReuseBillRetailComponent_p_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r27.chooseService.sort_name, " - ", ctx_r27.vhAlgorithm.vhcurrencyunit(ctx_r27.chooseService.service_fee), "");
} }
function ReuseBillRetailComponent_p_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "Delivery time"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 4, ctx_r28.chooseService.leadtime, "dd/MM/yyyy"), "");
} }
function ReuseBillRetailComponent_nz_option_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "nz-option", 75);
} if (rf & 2) {
    const option_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzLabel", option_r73.name)("nzValue", option_r73.value);
} }
function ReuseBillRetailComponent_nz_option_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "nz-option", 75);
} if (rf & 2) {
    const option_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzLabel", option_r74.name)("nzValue", option_r74.value);
} }
function ReuseBillRetailComponent_b_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r31.vhAlgorithm.vhcurrencyunit(ctx_r31.chooseService.service_fee));
} }
function ReuseBillRetailComponent_b_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ReuseBillRetailComponent_b_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r33.vhAlgorithm.vhcurrencyunit(ctx_r33.chooseService.insurance_fee));
} }
function ReuseBillRetailComponent_b_219_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ReuseBillRetailComponent_b_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r35.vhAlgorithm.vhcurrencyunit(ctx_r35.chooseService.total));
} }
function ReuseBillRetailComponent_b_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "b", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ReuseBillRetailComponent_app_choose_province_ghn_234_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-province-ghn", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalProvinceGhn", function ReuseBillRetailComponent_app_choose_province_ghn_234_Template_app_choose_province_ghn_cancelModalProvinceGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r75.cancelModalProvinceGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseProvinceGhn", ctx_r37.chooseProvinceGhn)("token", ctx_r37.data_delivery.token);
} }
function ReuseBillRetailComponent_app_choose_district_ghn_235_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-district-ghn", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalDistrictGhn", function ReuseBillRetailComponent_app_choose_district_ghn_235_Template_app_choose_district_ghn_cancelModalDistrictGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r77.cancelModalDistrictGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseDistrictGhn", ctx_r38.chooseDistrictGhn)("token", ctx_r38.data_delivery.token)("province_idModal", ctx_r38.province_idModal);
} }
function ReuseBillRetailComponent_app_choose_ward_ghn_236_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-ward-ghn", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalWardGhn", function ReuseBillRetailComponent_app_choose_ward_ghn_236_Template_app_choose_ward_ghn_cancelModalWardGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r79.cancelModalWardGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseWardGhn", ctx_r39.chooseWardGhn)("token", ctx_r39.data_delivery.token)("district_idModal", ctx_r39.district_idModal);
} }
function ReuseBillRetailComponent_app_choose_method_ghn_237_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-choose-method-ghn", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelModalMethodGhn", function ReuseBillRetailComponent_app_choose_method_ghn_237_Template_app_choose_method_ghn_cancelModalMethodGhn_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r81.cancelModalMethodGhn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("chooseMethod", ctx_r40.chooseMethod)("dataToGetMethod", ctx_r40.dataToGetMethod);
} }
const _c0 = function (a0) { return { opacity: a0 }; };
const _c1 = function () { return { y: "200px" }; };
const _c2 = function () { return { standalone: true }; };
class ReuseBillRetailComponent {
    constructor(router, vhComponent, vhQuerySales, languageService, ghnService, vhAlgorithm) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.ghnService = ghnService;
        this.vhAlgorithm = vhAlgorithm;
        this.billDetails = [];
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
        this.valueRequireNote = 1;
        this.valueListPayment = 1;
        this.listRequireNote = [
            {
                value: 1,
                name: this.languageService.translate("Not allow to unpack")
            },
            {
                value: 2,
                name: this.languageService.translate("Allow to try")
            },
            {
                value: 3,
                name: this.languageService.translate("Allow to unpack & not to try")
            },
        ];
        this.listPaymentType = [
            {
                value: 1,
                name: this.languageService.translate("Paid by seller")
            },
            {
                value: 2,
                name: this.languageService.translate("Pay by receiver")
            },
        ];
        this.checkPrinter = false;
        // ------modal province--------
        this.chooseProvinceGhn = false;
        // ------modal district--------
        this.chooseDistrictGhn = false;
        // ------modal ward--------
        this.chooseWardGhn = false;
        // ------modal choose--------
        this.chooseMethod = false;
        this.billInfo = this.router.getCurrentNavigation().extras.state.item.billInfo;
        this.calculate_fee = this.router.getCurrentNavigation().extras.state.item.calculate_fee;
        this.address = this.router.getCurrentNavigation().extras.state.item.address;
        this.data_delivery = this.router.getCurrentNavigation().extras.state.item.data_delivery;
        this.dataSearchAndDate = this.router.getCurrentNavigation().extras.state.dataSearchAndDate;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(100)]),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(100)]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(200000)]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(100)]),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            cod: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[0-9,]{1,10}$")]),
            orderValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[0-9,]{1,10}$")]),
            transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            required_note: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('KHONGCHOXEMHANG', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
            payment_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('1', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
        });
        this.getData();
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.cod_amount = this.vhAlgorithm.vhnumeral('.cod_amount');
            this.insurance_value = this.vhAlgorithm.vhnumeral('.order_value_amount');
        });
    }
    //lấy dữ liệu billDetail
    getData() {
        this.addInformation.controls.name.setValue(this.billInfo.data.to_name);
        this.addInformation.controls.phone.setValue(this.billInfo.data.to_phone);
        this.addInformation.controls.address.setValue(this.billInfo.data.to_address);
        this.addInformation.controls.province.setValue(this.address.province.ProvinceID);
        this.addInformation.controls.district.setValue(this.address.district.DistrictID);
        this.addInformation.controls.ward.setValue(this.address.ward.WardCode);
        this.productInfo.controls.weight.setValue(this.billInfo.data.weight);
        this.productInfo.controls.height.setValue(this.billInfo.data.height);
        this.productInfo.controls.length.setValue(this.billInfo.data.length);
        this.productInfo.controls.width.setValue(this.billInfo.data.width);
        this.province.ProvinceName = this.address.province.ProvinceName;
        this.district.DistrictName = this.address.district.DistrictName;
        this.ward.WardName = this.address.ward.WardName;
        this.deliveryInfo.controls.cod.setValue(this.billInfo.data.cod_amount);
        this.deliveryInfo.controls.orderValue.setValue(this.billInfo.data.insurance_value);
        this.deliveryInfo.controls.required_note.setValue(this.billInfo.data.required_note);
        this.deliveryInfo.controls.payment_type_id.setValue(this.billInfo.data.payment_type_id.toString());
        this.deliveryInfo.controls.note.setValue(this.billInfo.data.note);
        this.deliveryInfo.controls.transport.setValue(this.billInfo.data.service_id);
        this.chooseService = {
            service_id: this.billInfo.data.service_id,
            service_type_id: this.billInfo.data.service_type_id,
            insurance_fee: this.calculate_fee.insurance_fee,
            total: this.calculate_fee.total,
            service_fee: this.calculate_fee.service_fee,
            sort_name: this.filterSortname(this.billInfo.data.service_type_id),
            leadtime: this.billInfo.data.leadtime
        };
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill_details_byId_bill(this.billInfo._id),
                this.ghnService.connectTokenGhn(this.data_delivery.token)
            ]).then((res) => {
                this.vhComponent.hideLoading(0).then(() => {
                    if (res[0]) {
                        this.billDetails = res[0].map(item => {
                            let nameProduct = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                            return Object.assign(Object.assign({}, item), { name_product: nameProduct });
                        });
                        this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.billInfo, this.billDetails, this.vhQuerySales);
                    }
                    if (res[1]) {
                        this.shops = res[1].data.shops;
                        for (let i in this.shops) {
                            if (this.shops[i]._id == this.data_delivery.shop_id) {
                                this.data_delivery = Object.assign(Object.assign({}, this.data_delivery), { name: this.shops[i].name, phone: this.shops[i].phone, address: this.shops[i].address, district_id: this.shops[i].district_id, ward_code: this.shops[i].ward_code });
                            }
                        }
                    }
                    if (this.addInformation.value.district) {
                        this.getServive();
                    }
                    let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                    if (printer)
                        this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
                });
            });
        });
    }
    filterSortname(type) {
        let sortname = '';
        if (type == 1) {
            sortname = this.languageService.translate('Flight');
        }
        else if (type == 2) {
            sortname = this.languageService.translate('Road');
        }
        return sortname;
    }
    //hàm này dùng để get về các phương thức giao hàng : đi bộ, bay , tiết kiệm
    getServive() {
        let data = {
            shop_id: this.data_delivery.shop_id,
            from_district_id: this.data_delivery.district_id,
            to_district_id: this.addInformation.value.district
        };
        this.vhComponent.showLoading('');
        this.ghnService.getServiceDelivery(this.data_delivery.token, data).then((res) => {
            this.vhComponent.hideLoading(0);
            this.service = res.data.filter(item => {
                return item.service_type_id == 1 || item.service_type_id == 2;
            });
        }).catch(err => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.showToast(2000, this.languageService.translate('An error occurred while getting data !'), "alert-toast");
        });
    }
    convertProducts() {
        let data = [];
        this.billDetails.forEach(item => {
            data.push({
                name: item.name_product,
                quantity: item.quantity,
                id: item.id_product
            });
        });
        return data;
    }
    prepareDataToCreateOrder() {
        let data = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_name: this.addInformation.value.name,
            to_phone: this.addInformation.value.phone,
            to_address: this.addInformation.value.address,
            to_ward_code: this.addInformation.value.ward,
            to_district_id: this.addInformation.value.district,
            weight: this.productInfo.value.weight,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            width: this.productInfo.value.width,
            payment_type_id: +this.deliveryInfo.value.payment_type_id,
            required_note: this.deliveryInfo.value.required_note,
            service_id: this.deliveryInfo.value.transport,
            cod_amount: parseInt(this.cod_amount.getRawValue()),
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            items: this.convertProducts(),
            note: this.deliveryInfo.value.note,
        };
        return data;
    }
    createOrder(print) {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create order ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.ghnService.createOrderGhn(this.prepareDataToCreateOrder()).then((res) => {
                    this.invoice.setOrderCode(res.data.order_code);
                    this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail()).then(() => {
                        if (print) {
                            this.ghnService.getInfoOrder(this.data_delivery.token, res.data.order_code).then((ress) => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.billInfo.data = ress.data;
                                    this.billInfo.order_code = res.data.order_code;
                                    this.showPrint();
                                });
                            });
                        }
                        else {
                            this.vhComponent.hideLoading(0).then(() => {
                                this.goBack();
                                this.vhComponent.showToast(2000, this.languageService.translate('Create order successfully !'), "alert-toast");
                            });
                        }
                    });
                }).catch(err => {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(2000, this.languageService.translate(err.error.message), "alert-toast");
                });
            });
        }).catch(err => { });
    }
    blurFee() {
        this.chooseService = '';
        this.deliveryInfo.controls.transport.setValue('');
    }
    checkedCod() {
        if (parseInt(this.cod_amount.getRawValue()) > 50000000) {
            this.deliveryInfo.controls.cod.setValue('50,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun cod is 50,000,000"), "alert-toast");
        }
    }
    checkedInsurance_value() {
        if (parseInt(this.insurance_value.getRawValue()) > 10000000) {
            this.deliveryInfo.controls.orderValue.setValue('10,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun insurance value is 10,000,000"), "alert-toast");
        }
        this.blurFee();
    }
    customDataBillDetail(billDetails) {
        let data = billDetails.map(item => {
            return {
                name_product: item.name,
                quantity: item.quantity
            };
        });
        return data;
    }
    customDataBillInfo() {
        this.billInfo.data.created = this.billInfo.data.created_date;
        this.billInfo.data.ship_money = this.chooseService.service_fee;
        this.billInfo.data.insurance = this.chooseService.insurance_fee;
        this.billInfo.data.pick_money = this.billInfo.data.cod_amount;
        this.billInfo.data.customer_fullname = this.billInfo.data.to_name;
        this.billInfo.data.customer_tel = this.billInfo.data.to_phone;
        this.billInfo.data.address = this.addInformation.value.address + ", " + this.ward.WardName + ", " + this.district.DistrictName + ", " + this.province.ProvinceName;
        this.billInfo.data.is_freeship = this.billInfo.data.payment_type_id == 1 ? 1 : 0;
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghn"], {
            state: {
                billInfo: this.billInfo,
                data_delivery: this.data_delivery,
                dataSearchAndDate: this.dataSearchAndDate
            }
        });
    }
    chooseProvince() {
        this.chooseProvinceGhn = true;
    }
    cancelModalProvinceGhn(event) {
        if (event) {
            this.province = event;
            this.addInformation.controls.province.setValue(this.province.ProvinceID);
            this.ward = '';
            this.district = '';
        }
        this.chooseProvinceGhn = false;
    }
    chooseDistrict() {
        if (this.province.ProvinceName) {
            this.chooseDistrictGhn = true;
            this.province_idModal = this.province.ProvinceID ? this.province.ProvinceID : this.addInformation.value.province;
        }
    }
    cancelModalDistrictGhn(event) {
        if (event) {
            this.district = event;
            this.ward = '';
            this.addInformation.controls.district.setValue(this.district.DistrictID);
            this.chooseService = '';
            this.getServive();
        }
        this.chooseDistrictGhn = false;
    }
    chooseWard() {
        if (this.district.DistrictName) {
            this.chooseWardGhn = true;
            this.district_idModal = this.district.DistrictID ? this.district.DistrictID : this.addInformation.value.district;
        }
    }
    cancelModalWardGhn(event) {
        if (event) {
            this.ward = event;
            this.addInformation.controls.ward.setValue(this.ward.WardCode);
            this.chooseService = '';
            this.deliveryInfo.controls.transport.setValue('');
        }
        this.chooseWardGhn = false;
    }
    paymentType(event) {
        this.deliveryInfo.controls.payment_type_id.setValue(event);
    }
    chooseRequireNote(event) {
        if (event == 1) {
            this.deliveryInfo.controls.required_note.setValue("KHONGCHOXEMHANG");
        }
        else if (event == 2) {
            this.deliveryInfo.controls.required_note.setValue("CHOTHUHANG");
        }
        else if (event == 3) {
            this.deliveryInfo.controls.required_note.setValue("CHOXEMHANGKHONGTHU");
        }
    }
    chooseMethodGhn() {
        this.dataToGetMethod = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            to_district_id: this.addInformation.value.district,
            to_ward_code: this.addInformation.value.ward,
            from_district_id: this.data_delivery.district_id,
            height: this.productInfo.value.height,
            length: this.productInfo.value.length,
            weight: this.productInfo.value.weight,
            width: this.productInfo.value.width,
            insurance_value: parseInt(this.insurance_value.getRawValue()),
            service: this.service,
            from_ward_code: this.data_delivery.ward_code
        };
        this.chooseMethod = true;
    }
    cancelModalMethodGhn(event) {
        if (event) {
            this.chooseService = event;
            this.deliveryInfo.controls.transport.setValue(this.chooseService.service_id);
        }
        this.chooseMethod = false;
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
            this.customDataBillInfo();
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: this.billInfo,
                billDetails: this.customDataBillDetail(this.billInfo.data.items),
                data_delivery: this.data_delivery,
                printer
            }, false, false, "modal-print").then(modal => {
                modal.onWillDismiss().then(() => {
                    this.goBack();
                });
            });
        }, (err) => {
            this.goBack();
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
ReuseBillRetailComponent.ɵfac = function ReuseBillRetailComponent_Factory(t) { return new (t || ReuseBillRetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_4__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhAlgorithm)); };
ReuseBillRetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ReuseBillRetailComponent, selectors: [["app-reuse-bill-retail"]], decls: 238, vars: 161, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "phone", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["formControlName", "address", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplAddress", ""], ["class", "input-group all-content-center", 3, "click", 4, "ngIf"], ["class", "input-group all-content-center placeholder", 3, "click", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 3, "ngStyle"], [1, "productInfo"], ["nz-row", ""], [1, "all-content-center", 3, "formGroup"], ["nz-col", "", "nzSpan", "24", 1, "productInfo-table"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24"], ["nz-row", "", "nzGutter", "16"], ["formControlName", "weight", "nz-input", "", "required", "", "type", "number"], ["combineTplWeight", ""], ["nz-col", "", "nzSpan", "8"], ["formControlName", "length", "nz-input", "", "required", "", "type", "number"], ["combineTplLength", ""], ["formControlName", "width", "nz-input", "", "required", "", "type", "number"], ["combineTplWidth", ""], ["formControlName", "height", "nz-input", "", "required", "", "type", "number"], ["combineTplHeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["type", "text", "maxlength", "9", "formControlName", "cod", "nz-input", "", "required", "", 1, "cod_amount"], ["combineTplCod", ""], ["type", "text", "maxlength", "9", "formControlName", "orderValue", "nz-input", "", "required", "", 1, "order_value_amount", 3, "placeholder"], ["combineTplOrder", ""], ["nz-col", "", "nzSpan", "24", 3, "ngStyle"], [1, "input-group", "all-content-center", 2, "cursor", "pointer", 3, "click"], [1, "input-group", "all-content-center", 2, "padding", "4px 11px", "border", "1px solid #c8c7cc !important", "border-radius", "5px"], ["class", "nz-no-margin", 4, "ngIf"], ["style", "display: inline-block;color:var(--ion-color-vh-green)", "class", "nz-no-margin", 4, "ngIf"], ["style", "float: right;", "class", "nz-no-margin", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 2, "margin", "15px 0"], [3, "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["formControlName", "note", "rows", "2", "nz-input", "", 1, "nz-hover-border", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [4, "ngIf"], [2, "width", "70%", "font-weight", "bold"], ["style", "color:var(--ion-color-vh-green);font-size: 1.2rem;", 4, "ngIf"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn", 4, "ngIf"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn", 4, "ngIf"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn", 4, "ngIf"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn", 4, "ngIf"], [1, "input-group", "all-content-center", 3, "click"], [1, "input-group", "all-content-center", "placeholder", 3, "click"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"], [1, "nz-no-margin"], [1, "nz-no-margin", 2, "display", "inline-block", "color", "var(--ion-color-vh-green)"], [1, "nz-no-margin", 2, "float", "right"], [3, "nzLabel", "nzValue"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [3, "chooseProvinceGhn", "token", "cancelModalProvinceGhn"], [3, "chooseDistrictGhn", "token", "province_idModal", "cancelModalDistrictGhn"], [3, "chooseWardGhn", "token", "district_idModal", "cancelModalWardGhn"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhn"]], template: function ReuseBillRetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ReuseBillRetailComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ReuseBillRetailComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, ReuseBillRetailComponent_ng_template_46_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, ReuseBillRetailComponent_nz_input_group_53_Template, 2, 1, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, ReuseBillRetailComponent_nz_input_group_54_Template, 3, 3, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, ReuseBillRetailComponent_nz_input_group_60_Template, 2, 1, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, ReuseBillRetailComponent_nz_input_group_61_Template, 3, 3, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, ReuseBillRetailComponent_nz_input_group_67_Template, 2, 1, "nz-input-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, ReuseBillRetailComponent_nz_input_group_68_Template, 3, 3, "nz-input-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, ReuseBillRetailComponent_tr_90_Template, 5, 2, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](101, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](102, ReuseBillRetailComponent_ng_template_102_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](114, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](115, ReuseBillRetailComponent_ng_template_115_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](125, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](126, ReuseBillRetailComponent_ng_template_126_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](136, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](137, ReuseBillRetailComponent_ng_template_137_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](149, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](153, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](154, ReuseBillRetailComponent_ng_template_154_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](164, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](166, ReuseBillRetailComponent_ng_template_166_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](169, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](172, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "nz-input-group", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_Template_nz_input_group_click_173_listener() { return !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? "" : ctx.chooseMethodGhn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](175, ReuseBillRetailComponent_p_175_Template, 3, 3, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](176, ReuseBillRetailComponent_p_176_Template, 3, 2, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](177, ReuseBillRetailComponent_p_177_Template, 5, 7, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](182, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "nz-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ReuseBillRetailComponent_Template_nz_select_ngModelChange_183_listener($event) { return ctx.valueListPayment = $event; })("ngModelChange", function ReuseBillRetailComponent_Template_nz_select_ngModelChange_183_listener($event) { return ctx.paymentType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](184, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](185, ReuseBillRetailComponent_nz_option_185_Template, 1, 2, "nz-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](190, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "nz-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ReuseBillRetailComponent_Template_nz_select_ngModelChange_191_listener($event) { return ctx.valueRequireNote = $event; })("ngModelChange", function ReuseBillRetailComponent_Template_nz_select_ngModelChange_191_listener($event) { return ctx.chooseRequireNote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](192, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](193, ReuseBillRetailComponent_nz_option_193_Template, 1, 2, "nz-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](198, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](201, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](203);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](204, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](209, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](211, ReuseBillRetailComponent_b_211_Template, 2, 1, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](212, ReuseBillRetailComponent_b_212_Template, 2, 0, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](216, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](218, ReuseBillRetailComponent_b_218_Template, 2, 1, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](219, ReuseBillRetailComponent_b_219_Template, 2, 0, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "td", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](223, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](225, ReuseBillRetailComponent_b_225_Template, 2, 1, "b", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](226, ReuseBillRetailComponent_b_226_Template, 2, 0, "b", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](228, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_Template_button_click_228_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](229);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](230, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](231, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ReuseBillRetailComponent_Template_button_click_231_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](233, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](234, ReuseBillRetailComponent_app_choose_province_ghn_234_Template, 1, 2, "app-choose-province-ghn", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](235, ReuseBillRetailComponent_app_choose_district_ghn_235_Template, 1, 3, "app-choose-district-ghn", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](236, ReuseBillRetailComponent_app_choose_ward_ghn_236_Template, 1, 3, "app-choose-ward-ghn", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](237, ReuseBillRetailComponent_app_choose_method_ghn_237_Template, 1, 2, "app-choose-method-ghn", 67);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](35);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](47);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](103);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](116);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](127);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](138);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](155);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 82, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 84, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 86, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](21, 88, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 90, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 92, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 94, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](45, 96, "Enter your address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 98, "Province"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.province.ProvinceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.province.ProvinceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](152, _c0, ctx.province.ProvinceName ? 1 : 0.5));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](59, 100, "District"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.district.DistrictName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.district.DistrictName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](154, _c0, ctx.district.DistrictName ? 1 : 0.5));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](66, 102, "Ward"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.ward.WardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.ward.WardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](73, 104, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](78, 106, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](156, _c1))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](84, 108, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](88, 110, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](97, 112, "Weight(gram)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](110, 114, "Length(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](121, 116, "Width(cm)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](132, 118, "Height"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](143, 120, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](149, 122, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](160, 124, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzErrorTip", _r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](165, 126, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](157, _c0, !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](172, 128, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](182, 130, "Payment type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](184, 132, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.valueListPayment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](159, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.listPaymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](190, 134, "Require note"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](192, 136, "Require note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.valueRequireNote)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](160, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.listRequireNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](199, 138, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](204, 140, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](209, 142, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](216, 144, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](223, 146, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid && ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](230, 148, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](233, 150, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseProvinceGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseDistrictGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseWardGhn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chooseMethod);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzOptionComponent, _components_choose_province_ghn_choose_province_ghn_component__WEBPACK_IMPORTED_MODULE_5__.ChooseProvinceGhnComponent, _components_choose_district_ghn_choose_district_ghn_component__WEBPACK_IMPORTED_MODULE_6__.ChooseDistrictGhnComponent, _components_choose_ward_ghn_choose_ward_ghn_component__WEBPACK_IMPORTED_MODULE_7__.ChooseWardGhnComponent, _components_choose_method_ghn_choose_method_ghn_component__WEBPACK_IMPORTED_MODULE_8__.ChooseMethodGhnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldXNlLWJpbGwtcmV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksV0FBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBR1I7QUFGUTs7Ozs7RUFLSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBSVo7QUFIWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFLaEI7QUFIWTtFQUNJLGNBQUE7QUFLaEI7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBSVo7QUFIWTtFQUNJLGFBQUE7QUFLaEI7QUFIWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUtoQjtBQUhvQjtFQUNJLFdBQUE7QUFLeEI7QUFEWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFHaEI7QUFGZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFJcEI7QUFGZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUlwQjtBQUFRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBRVo7QUFDSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFFQTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBQ0o7QUFDQTtFQUNJLGlCQUFBO0FBRUo7QUFBQTtFQUNJLHlCQUFBO0FBR0oiLCJmaWxlIjoicmV1c2UtYmlsbC1yZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgbnotc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5kZWxpdmVyeS1naG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgICAuYWRkSW5mb3JtYXRpb24sXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby1mb3JtLFxyXG4gICAgICAgIC5wcm9kdWN0SW5mbyxcclxuICAgICAgICAudG90YWxEZWxpdmVyeSxcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLXRvdGFsRGVsaXZlcnkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkSW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDExcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYzhjN2NjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NyUgMjMlIDEwJTtcclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAgICAgLnN1Yi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24tb3JkZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFudC1pbnB1dC1zdWZmaXgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2M4YzdjYyAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_delivery_shipping-bill_delivery-ghn_delivery-ghn_module_ts.js.map