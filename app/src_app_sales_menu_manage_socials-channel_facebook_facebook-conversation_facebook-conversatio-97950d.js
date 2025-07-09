"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_socials-channel_facebook_facebook-conversation_facebook-conversatio-97950d"],{

/***/ 29021:
/*!***************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ahamoveService/ahamove.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AhamoveService": () => (/* binding */ AhamoveService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);



class AhamoveService {
    constructor(http, vhQuerySales) {
        this.http = http;
        this.vhQuerySales = vhQuerySales;
        this.URL = this.vhQuerySales.getShippingAhamoveURL();
        // api_key = '183a9baa5176ebbaa9c10fe67fc02161d63f6849'; //dev
        this.api_key = 'fc0ee646897ef09f19fd61075337728c61bc9480'; //production
    }
    getTokenAhaMove(phone) {
        const options = {
            params: {
                "url": 'https://api.ahamove.com/v1/partner/register_account',
                "mobile": phone,
                "api_key": this.api_key,
                "name": "Viethas",
                "address": "Khách hàng"
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    getAllServiceAhaMove(city_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/service_types?city_id=${city_id}`,
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    calculateFeeAhamove(data) {
        const options = {
            params: {
                "url": "https://api.ahamove.com/v2/order/estimated_fee",
            }
        };
        const body = {
            "token": data.token,
            "order_time": 0,
            "path": data.path,
            "services": data.services,
            "payment_method": "CASH"
        };
        return this.http.post(this.URL, body, options).toPromise();
    }
    createOrderAhamove(data) {
        let x = `[{"address":"${data.pick_address}","name":"${data.pick_name}","mobile":"${data.pick_tel}"},{"address":"${data.address}","name":"${data.name}","mobile":"${data.phone}","cod":${data.cod},"remarks":"${data.note}"}]`;
        const options = {
            params: {
                "url": "https://api.ahamove.com/v1/order/create",
                "token": data.token,
                "order_time": data.order_time,
                "service_id": data.service_id,
                "payment_method": "CASH",
                "path": x
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    getDetailBillAhamove(token, order_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/detail`,
                "token": token,
                "order_id": order_id
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    cancelOrderAhamove(token, order_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/cancel`,
                "token": token,
                "order_id": order_id,
                "comment": "No comment"
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
}
AhamoveService.ɵfac = function AhamoveService_Factory(t) { return new (t || AhamoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales)); };
AhamoveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AhamoveService, factory: AhamoveService.ɵfac, providedIn: 'root' });


/***/ }),

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

/***/ 43089:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhtkService": () => (/* binding */ GhtkService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);



class GhtkService {
    constructor(http, vhQuerySales) {
        this.http = http;
        this.vhQuerySales = vhQuerySales;
        this.URL = this.vhQuerySales.getShippingGHTKURL();
    }
    /**
    * kiểm tra token của giao hàng tiết kiệm có hợp lệ hay không và lấy thông tin kho
    * @example : this.transportService.connectTokenGhtk(token).then(res =>{
    * @param : tokenName
    * @return :
    **/
    getWareHouseGhtk(token) {
        // let options:any = {
        //   method: 'GET',
        //   url: 'http://115.78.100.57:8013/miscellaneous/ghtk',                       
        //   params: {
        //     token:token,
        //     url: 'https://services.giaohangtietkiem.vn/services/shipment/list_pick_add'
        //   }            
        // };          
        // return axios.request(options);
        const opptions = {
            params: {
                "token": token,
                "url": 'https://services.giaohangtietkiem.vn/services/shipment/list_pick_add'
            }
        };
        return this.http.get(this.URL, opptions).toPromise();
    }
    /**
    * tính toán phí vận chuyển
    * @example : this.transportService.calculateFeeGhtk(data,transport).then(res =>{
    * @param : data,transport
    * @return :
    **/
    calculateFeeGhtk(data, transport) {
        const opptions = {
            params: {
                "token": data.token,
                "url": "https://services.giaohangtietkiem.vn/services/shipment/fee"
            }
        };
        let params = {
            "pick_address_id": data.shop_id,
            "province": data.province,
            "district": data.district,
            "weight": data.weight * 1000,
            "value": data.insurance_value,
            "transport": transport
        };
        return this.http.post(this.URL, params, opptions).toPromise();
    }
    /**
    * tính toán phí vận chuyển
    * @example : this.transportService.calculateFeeGhtk(data,transport).then(res =>{
    * @param : data,transport
    * @return :
    **/
    createOrderGhtk(token, products, order) {
        const opptions = {
            params: {
                "token": token,
                "url": "https://services.giaohangtietkiem.vn/services/shipment/order/?ver=1.6.3"
            }
        };
        let params = {
            "products": products,
            "order": order
        };
        return this.http.post(this.URL, params, opptions).toPromise();
    }
    getStatusBill(token, order_code) {
        const opptions = {
            params: {
                "token": token,
                "url": `https://services.giaohangtietkiem.vn/services/shipment/v2/${order_code}`
            }
        };
        return this.http.get(this.URL, opptions).toPromise();
    }
    cancelOrder(token, order_code) {
        const opptions = {
            params: {
                "token": token,
                "url": `https://services.giaohangtietkiem.vn/services/shipment/cancel/${order_code}`
            }
        };
        let params = {};
        return this.http.post(this.URL, params, opptions).toPromise();
    }
}
GhtkService.ɵfac = function GhtkService_Factory(t) { return new (t || GhtkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales)); };
GhtkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GhtkService, factory: GhtkService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 25006:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-comment/conversation-comment.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationCommentComponent": () => (/* binding */ ConversationCommentComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/facebook.service */ 69404);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 79314);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/spin */ 80289);
/* harmony import */ var _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../components/search/search-product/search-product.component */ 99767);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function ConversationCommentComponent_img_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 36);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.post.full_picture, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ConversationCommentComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r1.renderDate(ctx_r1.comment.created_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.comment.message, " ");
  }
}

function ConversationCommentComponent_a_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r2.comment.attachment.media == null ? null : ctx_r2.comment.attachment.media.image == null ? null : ctx_r2.comment.attachment.media.image.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r2.renderDate(ctx_r2.comment.created_time))("src", ctx_r2.comment.attachment.media == null ? null : ctx_r2.comment.attachment.media.image == null ? null : ctx_r2.comment.attachment.media.image.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ConversationCommentComponent_div_32_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_32_a_7_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r15.infoSendMessage = ctx_r15.comment;
      return ctx_r15.infoSendMessage.visible = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nh\u1EAFn tin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ConversationCommentComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_32_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r17.likeCommentByCommentId(ctx_r17.comment);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_32_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r19.hideCommentByID(ctx_r19.comment);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_32_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r20.deleteCommentByID(ctx_r20.comment, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ConversationCommentComponent_div_32_a_7_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.comment.user_likes ? "B\u1ECF th\u00EDch" : "Th\u00EDch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.comment.is_hidden ? "B\u1ECF \u1EA9n b\u00ECnh lu\u1EADn" : "\u1EA8n b\u00ECnh lu\u1EADn", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.comment.can_reply_privately);
  }
}

function ConversationCommentComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0110\u00E3 x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "bg-green": a0,
    "loading": a1
  };
};

function ConversationCommentComponent_div_36_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, (item_r21.from == null ? null : item_r21.from.id) == ctx_r22.fanpageSelected.id, item_r21.id == ""))("nzTooltipTitle", ctx_r22.renderDate(item_r21.created_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r21.senderName || "Ch\u01B0a x\u00E1c \u0111\u1ECBnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r21.message, " ");
  }
}

const _c1 = function (a0) {
  return {
    "loading": a0
  };
};

function ConversationCommentComponent_div_36_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", item_r21.attachment.media == null ? null : item_r21.attachment.media.image == null ? null : item_r21.attachment.media.image.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, item_r21.id == ""))("nzTooltipTitle", ctx_r23.renderDate(item_r21.created_time))("src", item_r21.attachment.media == null ? null : item_r21.attachment.media.image == null ? null : item_r21.attachment.media.image.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ConversationCommentComponent_div_36_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_36_div_6_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r31.hideCommentByID(item_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r21.is_hidden ? "B\u1ECF \u1EA9n b\u00ECnh lu\u1EADn" : "\u1EA8n b\u00ECnh lu\u1EADn");
  }
}

function ConversationCommentComponent_div_36_div_6_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_36_div_6_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r35.infoSendMessage = item_r21;
      return ctx_r35.infoSendMessage.visible;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Nh\u1EAFn tin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ConversationCommentComponent_div_36_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_36_div_6_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r38.likeCommentByCommentId(item_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConversationCommentComponent_div_36_div_6_a_3_Template, 2, 1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_36_div_6_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r41.deleteCommentByID(item_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ConversationCommentComponent_div_36_div_6_a_6_Template, 2, 0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r21.user_likes ? "B\u1ECF th\u00EDch" : "Th\u00EDch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (item_r21.from == null ? null : item_r21.from.id) != ctx_r24.fanpageSelected.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (item_r21.from == null ? null : item_r21.from.id) != ctx_r24.fanpageSelected.id && item_r21.can_reply_privately);
  }
}

function ConversationCommentComponent_div_36_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0110\u00E3 x\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ConversationCommentComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ConversationCommentComponent_div_36_div_4_Template, 4, 7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ConversationCommentComponent_div_36_a_5_Template, 2, 6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ConversationCommentComponent_div_36_div_6_Template, 7, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ConversationCommentComponent_div_36_ng_template_7_Template, 3, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r21 = ctx.$implicit;

    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", (item_r21.participants == null ? null : item_r21.participants.data[0] == null ? null : item_r21.participants.data[0].picture == null ? null : item_r21.participants.data[0].picture.data == null ? null : item_r21.participants.data[0].picture.data.url) || "assets/icon/no-avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r21.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r21.attachment && (item_r21.attachment.type == "photo" || item_r21.attachment.type == "sticker"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r21.deleted)("ngIfElse", _r25);
  }
}

function ConversationCommentComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_37_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r44.loadMoreMessage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Xem th\u00EAm b\u00ECnh lu\u1EADn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", "sync")("nzSpin", ctx_r7.loadingMoreMessage);
  }
}

function ConversationCommentComponent_div_38_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_div_2_Template_i_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52);
      const item_r49 = restoredCtx.$implicit;
      const i_r50 = restoredCtx.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r51.removeImage(item_r49, i_r50);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-spin", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r49.buffer, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpinning", item_r49.loadingAttachment);
  }
}

function ConversationCommentComponent_div_38_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r54.appendEmoji("\uD83D\uDE0A");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDE0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r56.appendEmoji("\uD83D\uDE06");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\uD83D\uDE06");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r57.appendEmoji("\uD83D\uDE03");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\uD83D\uDE03");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r58.appendEmoji("\uD83D\uDE01");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\uD83D\uDE01");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r59.appendEmoji("\uD83D\uDE05");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\uD83D\uDE05");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r60.appendEmoji("\uD83D\uDE02");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\uD83D\uDE02");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r61.appendEmoji("\uD83D\uDE0A");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\uD83D\uDE0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r62.appendEmoji("\uD83D\uDE07");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\uD83D\uDE07");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r63.appendEmoji("\uD83D\uDE42");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\uD83D\uDE42");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r64.appendEmoji("\uD83D\uDE43");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\uD83D\uDE43");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r65.appendEmoji("\uD83D\uDE09");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\uD83D\uDE09");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r66.appendEmoji("\uD83D\uDE0C");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\uD83D\uDE0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r67.appendEmoji("\uD83D\uDE0D");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\uD83D\uDE0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r68.appendEmoji("\uD83E\uDD70");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\uD83E\uDD70");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r69.appendEmoji("\uD83D\uDE18");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\uD83D\uDE18");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r70.appendEmoji("\uD83D\uDE17");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\uD83D\uDE17");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r71.appendEmoji("\uD83D\uDE19");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\uD83D\uDE19");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r72.appendEmoji("\uD83D\uDE0B");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\uD83D\uDE0B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r73.appendEmoji("\uD83D\uDE1B");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\uD83D\uDE1B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r74.appendEmoji("\uD83E\uDD2A");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\uD83E\uDD2A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r75.appendEmoji("\uD83E\uDDD0");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\uD83E\uDDD0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r76.appendEmoji("\uD83E\uDD13");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\uD83E\uDD13");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r77.appendEmoji("\uD83D\uDE0E");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\uD83D\uDE0E");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r78.appendEmoji("\uD83E\uDD29");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\uD83E\uDD29");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r79.appendEmoji("\uD83E\uDD73");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\uD83E\uDD73");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r80.appendEmoji("\uD83D\uDE0F");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "\uD83D\uDE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r81.appendEmoji("\uD83D\uDE12");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\uD83D\uDE12");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r82.appendEmoji("\uD83D\uDE1E");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\uD83D\uDE1E");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r83.appendEmoji("\uD83D\uDE1F");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\uD83D\uDE1F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r84.appendEmoji("\uD83D\uDE15");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\uD83D\uDE15");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r85.appendEmoji("\uD83D\uDE41");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\uD83D\uDE41");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_ng_template_16_Template_span_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r86.appendEmoji("\u2639\uFE0F");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\u2639\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c2 = function (a0) {
  return {
    "have-image-upload": a0
  };
};

const _c3 = function (a0) {
  return {
    "d-none": a0
  };
};

const _c4 = function () {
  return {
    minRows: 2,
    maxRows: 2
  };
};

function ConversationCommentComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ConversationCommentComponent_div_38_div_2_Template, 4, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConversationCommentComponent_div_38_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r87.messageText = $event;
    })("keypress", function ConversationCommentComponent_div_38_Template_textarea_keypress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r89.keyPress($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r90.updateImage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_Template_i_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r91.searchProductList = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ConversationCommentComponent_div_38_Template_input_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r92.onUploadImage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_div_38_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r93.sendAllMessage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "G\u1EEDi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ConversationCommentComponent_div_38_ng_template_16_Template, 65, 0, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);

    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c2, ctx_r8.listAttachment.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c3, ctx_r8.listAttachment.length == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.listAttachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r8.messageText)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.messageText == "");
  }
}

function ConversationCommentComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u0110\u00E3 h\u1EBFt th\u1EDDi h\u1EA1n g\u1EEDi tin nh\u1EAFn cho kh\u00E1ch h\u00E0ng kh\u00F4ng t\u01B0\u01A1ng t\u00E1c v\u1EDBi trang theo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0111i\u1EC1u kho\u1EA3n c\u1EE7a Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ". B\u1EA1n c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng Facebook \u0111\u1EC3 ph\u1EA3n h\u1ED3i cho kh\u00E1ch h\u00E0ng. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_ng_template_39_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r95);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r94.gotoInbox();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Xem h\u1ED9i tho\u1EA1i tr\u00EAn Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ConversationCommentComponent_app_search_product_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-search-product", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeSearchProductList", function ConversationCommentComponent_app_search_product_41_Template_app_search_product_closeSearchProductList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r97);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r96.closeSearch($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("searchProductList", ctx_r11.searchProductList)("default_price_type", 1);
  }
}

function ConversationCommentComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_ng_container_43_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r98.isVisibleSendMessage = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_ng_container_43_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r99);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r100.sendProductAndPrice();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_ng_container_43_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r99);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r101.sendMessageUrl();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_ng_container_43_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r99);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r102.sendMessageUrl(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r12.productSelected.img || "./assets/icon/management/image_default.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 11, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r12.productSelected.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 13, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r12.vhAlgorithm.vhcurrencyunit(ctx_r12.productSelected.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 15, "Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 17, "Send product name + price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r12.productSelected["img"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 19, "Send image"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r12.productSelected["img"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 21, "Send all"), " ");
  }
}

function ConversationCommentComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "g", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "polygon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "polygon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "polygon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Tin nh\u1EAFn m\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Ng\u01B0\u1EDDi nh\u1EADn : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "textarea", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConversationCommentComponent_ng_container_45_Template_textarea_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r104);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r103.infoSendMessage.textMessage = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_ng_container_45_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r104);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r105.infoSendMessage = {};
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "H\u1EE7y");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_ng_container_45_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r104);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r106.sendPrivateMessage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "G\u1EEDi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r13.infoSendMessage.from == null ? null : ctx_r13.infoSendMessage.from.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r13.infoSendMessage.textMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r13.infoSendMessage.textMessage);
  }
}

class ConversationCommentComponent {
  constructor(fbService, vhComponent, routes, vhAlgorithm, datePiPe, modal, router) {
    this.fbService = fbService;
    this.vhComponent = vhComponent;
    this.routes = routes;
    this.vhAlgorithm = vhAlgorithm;
    this.datePiPe = datePiPe;
    this.modal = modal;
    this.router = router;
    this.commentId = '';
    this.loading = false;
    this.fanpageSelected = {};
    this.infoSender = {};
    this.messageList = [];
    this.dataPaging = {};
    this.messageText = '';
    this.loadingMoreMessage = false;
    this.listAttachment = [];
    this.loadingAttachment = false;
    this.searchProductList = false;
    this.productSelected = {};
    this.expiresToSend = false;
    this.post = {};
    this.comment = {};
    this.childComment = [];
    this.listUserJoinComment = [];
    this.infoSendMessage = {};
    this.isVisibleSendMessage = false;
  }

  ngOnInit() {
    this.subscribeRouter();
  } //subscribe router


  subscribeRouter() {
    this.routes.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(params => params.commentId)).subscribe(val => {
      this.commentId = val.commentId;
      this.commentId != '' && this.getData();
    });
  }
  /**
   * Lấy bài post và lấy chi tiết tin nhắn hiển thị ra
   */


  getData() {
    this.loading = true;
    this.dataPaging = {};
    this.childComment = [];
    Promise.all([this.fbService.getPostByIdPost(this.fanpageSelected['access_token'], this.fanpageSelected['id'], this.commentId.split('_')[0]), this.fbService.getCommentByID(this.fanpageSelected['access_token'], this.commentId), this.fbService.getReplyCommentByID(this.fanpageSelected['access_token'], this.commentId)]).then(([post, comment, childComment]) => {
      this.post = post;
      this.comment = comment;
      this.dataPaging = childComment.paging; //Tiếp tục lấy chi tiết comment theo id

      if (childComment.data.length > 0) {
        this.getPromiseDetailComment(childComment.data).then(result1 => {
          this.getListIDUser(result1).then(result2 => {
            this.childComment = this.renderListUserIntoPost(result1, result2);
            this.loading = false;
          });
        });
      } else this.loading = false;
    }).catch(() => {
      this.showMessageError();
      this.loading = false;
    });
  }
  /**
   * Hàm này trả về promise detail comment
   * @param data
   */


  getPromiseDetailComment(data) {
    let process = [];
    data.forEach(item => {
      process.push(this.fbService.getCommentByID(this.fanpageSelected['access_token'], item.id));
    });
    return Promise.all(process);
  }
  /**
   * Hàm này trả về danh sách những id_user đã comment
   * @param listComment
   */


  getListIDUser(listComment) {
    let arrayID = [];
    let listArrayReturn = [];
    listComment.forEach(item => {
      if (item.from && this.fanpageSelected.id != item.from.id && !arrayID.includes(item.from.id)) {
        arrayID.push(item.from.id);
        listArrayReturn.push(this.fbService.getInfoUser(item.from.id, this.fanpageSelected['access_token']));
      }
    });
    return Promise.all(listArrayReturn);
  }
  /**
   * Lấy message sticker
   * @param messageList
   * @returns
   */


  getStickerMessage(messageList) {
    return new Promise((resolve, reject) => {
      let shares = [];
      messageList.forEach(item => {
        if (item.shares) shares.push(this.fbService.getLinkShares(this.fanpageSelected['access_token'], item.id));
      });
      Promise.all(shares).then(res => {
        resolve(res);
      }).catch(() => reject());
    });
  }

  ngAfterViewChecked() {
    if (document.getElementById('conversation-dialog') && document.getElementById('conversation-dialog-message')) {
      let height = document.getElementById('conversation-dialog').clientHeight - (this.listAttachment.length > 0 ? 220 : 160);
      document.getElementById('conversation-dialog-message').style.height = `${height}px`;
    }
  }

  renderDate(date) {
    return this.datePiPe.transform(date, 'dd/MM/YYYY HH:mm');
  }

  trackByFn(index, item) {
    return index;
  }
  /**
   * Sự kiện typing bất kì phím nào, bắt sự kiện enter để send message
   * @param event
   */


  keyPress(event) {
    const keyCode = event.which || event.keyCode;

    if (keyCode == 13 && !event.shiftKey) {
      event.preventDefault();
      this.sendAllMessage();
    }
  }

  sendAllMessage() {
    let dataPush = {
      id: '',
      can_comment: true,
      can_hide: true,
      can_like: true,
      can_remove: true,
      can_reply_privately: true,
      comment_count: 0,
      created_time: new Date(),
      from: {
        name: this.fanpageSelected.name,
        id: this.fanpageSelected.id
      },
      is_hidden: false,
      like_count: 0,
      message: this.messageText,
      user_likes: false,
      senderName: this.fanpageSelected.name,
      participants: {
        data: [{
          picture: {
            data: {
              url: this.fanpageSelected.image_url
            }
          }
        }]
      }
    };

    if (this.messageText && (!this.listAttachment.length || !this.listAttachment[0].loadingAttachment)) {
      let json = {
        message: `${this.messageText}`
      };
      this.childComment.unshift(dataPush);
      this.messageText = '';
      this.fbService.replyCommentFacebookText(this.fanpageSelected.access_token, this.commentId, json).then(res => {
        var _a;

        if (res.error) {
          this.vhComponent.alertMessageDesktop('error', (_a = res.error) === null || _a === void 0 ? void 0 : _a.message);
          this.childComment.splice(0, 1);
        } else this.childComment[0].id = res.id;

        if (this.listAttachment.length) {
          dataPush.message = '';
          this.childComment.unshift(dataPush);
          this.sendMessageImage();
        }
      });
    } else if (this.listAttachment.length && this.listAttachment[0].loadingAttachment) this.vhComponent.alertMessageDesktop('warning', 'Đang tải ảnh lên, vui lòng chờ giây lát...');else if (this.listAttachment.length && !this.listAttachment[0].loadingAttachment) {
      this.childComment.unshift(dataPush);
      this.sendMessageImage();
    }
  }
  /**
   * Gửi hình ảnh
   */


  sendMessageImage() {
    this.childComment[0] = Object.assign({
      attachment: {
        media: {
          image: {
            src: this.listAttachment[0].buffer
          }
        },
        type: 'photo'
      }
    }, this.childComment[0]);
    this.fbService.replyCommentFacebookImage(this.commentId, this.listAttachment[0].formData).then(res => {
      var _a;

      if (res.error) {
        this.vhComponent.alertMessageDesktop('error', (_a = res.error) === null || _a === void 0 ? void 0 : _a.message);
        this.childComment.splice(0, 1);
      } else {
        this.childComment[0].id = res.id;
      }
    });
    this.listAttachment = [];
  }

  appendEmoji(emoji) {
    this.messageText += emoji;
  }

  loadMoreMessage() {
    this.loadingMoreMessage = true;
    this.fbService.getNextPaging(this.dataPaging.next).then(childComment => {
      if (childComment.error) {
        this.showMessageError();
        this.loadingMoreMessage = false;
      } else {
        this.getPromiseDetailComment(childComment.data).then(result1 => {
          this.getListIDUser(result1).then(result2 => {
            this.childComment = this.childComment.concat(this.renderListUserIntoPost(result1, result2));
            this.dataPaging = childComment.paging;
            this.loadingMoreMessage = false;
          });
        });
      }
    }).catch(() => {
      this.showMessageError();
      this.loadingMoreMessage = false;
    });
  }
  /**
   * Upload hình ảnh
   * @param event
   */


  onUploadImage(event) {
    var _this = this;

    const fileReader = new FileReader();
    const readerBase64 = new FileReader();
    const file = event.target.files[0];
    readerBase64.readAsDataURL(file);

    readerBase64.onload = e => {
      fileReader.onloadend = /*#__PURE__*/(0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const photoData = new Blob([fileReader.result], {
          type: 'image/jpg'
        });
        const formData = new FormData();
        formData.append('access_token', _this.fanpageSelected.access_token);
        formData.append('source', photoData);

        _this.listAttachment.push({
          formData,
          buffer: readerBase64.result,
          loadingAttachment: false
        });
      });
      fileReader.readAsArrayBuffer(file);
    };
  }

  updateImage() {
    if (this.listAttachment.length >= 1) this.vhComponent.alertMessageDesktop('warning', 'Chỉ được gửi tối đa 1 ảnh. Vui lòng thử lại');else document.getElementById('image-message').click();
  }

  removeImage(image, index) {
    this.listAttachment.splice(index, 1);
  }

  showMessageError() {
    this.vhComponent.alertMessageDesktop('error', "Xảy ra lỗi khi đồng bộ, vui lòng thử lại");
  }

  closeSearch(data) {
    if (data) {
      this.productSelected = data;
      this.isVisibleSendMessage = true;
    }

    this.searchProductList = false;
  }

  sendProductAndPrice() {
    this.messageText = `Tên sản phẩm: ${this.productSelected['name']}, Giá : ${this.vhAlgorithm.vhcurrencyunit_symbol(this.productSelected['price'])}`;
    this.isVisibleSendMessage = false;
  }

  sendMessageUrl(all) {
    this.messageList.push({
      id: '',
      from: this.fanpageSelected,
      to: {
        data: [this.infoSender]
      },
      message: '',
      created_time: new Date().toISOString(),
      attachments: {
        data: [{
          image_data: {
            preview_url: this.productSelected['img'],
            url: this.productSelected['img']
          }
        }]
      }
    });
    this.isVisibleSendMessage = false;
    this.fbService.sendImageWithUrl(this.fanpageSelected['access_token'], this.productSelected['img'], this.infoSender['id']).then(res => {
      if (res.error) {
        this.vhComponent.alertMessageDesktop('error', "Xảy ra khi gửi hình ảnh, vui lòng thử lại");
        this.messageList.splice(this.messageList.length - 1, 1);
      } else this.messageList[this.messageList.length - 1].id = res['message_id'];

      if (all) {
        this.sendProductAndPrice();
        this.sendAllMessage();
      }
    });
  }

  gotoInbox() {
    window.open(`https://www.facebook.com/${this.fanpageSelected.id}/inbox`, '_blank');
  }

  likeCommentByCommentId(comment) {
    this.fbService.likeCommentByCommentId(this.fanpageSelected['access_token'], comment.id, comment.user_likes);
    comment.user_likes = !comment.user_likes;
  }
  /**
   * Hàm nàm để render thông tin người dùng đã bình luận
   * @param listUser
   */


  renderListUserIntoPost(childComment, listUser) {
    childComment.forEach(item => {
      if (item.from && item.from.id == this.fanpageSelected.id) {
        item.senderName = this.fanpageSelected.name;
        item.participants = {
          data: []
        };
        item.participants.data[0] = {
          id: this.fanpageSelected.id,
          name: this.fanpageSelected.name,
          picture: {
            data: {
              url: this.fanpageSelected.image_url
            }
          }
        };
      } else if (item.from && item.from.id != this.fanpageSelected.id) {
        let user = listUser.find(userInfo => userInfo.id == item.from.id);
        item.participants = {
          data: []
        };
        item.participants.data[0] = user;
        item.senderName = user.name;
      }
    });
    return this.vhAlgorithm.sortDatebyDESC(childComment, 'created_time');
  }

  trackByMyComment(index, item) {
    return index;
  }

  deleteCommentByID(comment, emit) {
    this.modal.confirm({
      nzTitle: 'Xác nhận',
      nzContent: '<i>Bạn có muốn xóa bình luận này?</i>',
      nzOkText: 'OK',
      nzOnOk: () => {
        return new Promise((resolve, reject) => {
          this.fbService.deleteCommentByID(this.fanpageSelected['access_token'], comment.id).then(res => {
            if (res.success) {
              comment.deleted = true;
              emit && this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook/conversation'], {
                queryParams: {
                  deleteCommentID: comment.id
                }
              });
            } else this.vhComponent.alertMessageDesktop('error', 'Xóa bình luận thất bại');

            resolve(true);
          });
        });
      },
      nzOnCancel: () => {},
      nzCancelText: 'Hủy'
    });
  }

  hideCommentByID(comment) {
    this.modal.confirm({
      nzTitle: 'Xác nhận',
      nzContent: '<i>Bạn có muốn ẩn bình luận này?</i>',
      nzOkText: 'OK',
      nzOnOk: () => {
        return new Promise((resolve, reject) => {
          this.fbService.updateCommentByID(this.fanpageSelected['access_token'], comment.id, {
            is_hidden: !comment.is_hidden
          }).then(res => {
            if (res.success) comment.is_hidden = !comment.is_hidden;else this.vhComponent.alertMessageDesktop('error', 'Ẩn bình luận thất bại');
            resolve(true);
          });
        });
      },
      nzOnCancel: () => {},
      nzCancelText: 'Hủy'
    });
  }

  sendPrivateMessage() {
    let json = {
      recipient: {
        comment_id: this.infoSendMessage.id
      },
      message: {
        text: this.infoSendMessage.textMessage
      }
    };
    this.fbService.replyPrivateMessageOnComment(this.fanpageSelected.access_token, json).then(res => {
      if (res.comment_id) this.vhComponent.alertMessageDesktop('success', 'Phản hồi bình luận thành công');else this.vhComponent.alertMessageDesktop('error', 'Bình luận này đã được phản hồi trước đó, vui lòng kiểm tra lại');
      this.infoSendMessage = {};
    });
  }

}

ConversationCommentComponent.ɵfac = function ConversationCommentComponent_Factory(t) {
  return new (t || ConversationCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_facebook_service__WEBPACK_IMPORTED_MODULE_1__.FacebookService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

ConversationCommentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConversationCommentComponent,
  selectors: [["app-conversation-comment"]],
  inputs: {
    fanpageSelected: "fanpageSelected",
    infoSender: "infoSender"
  },
  decls: 46,
  vars: 31,
  consts: [["id", "conversation-dialog", 1, "layout"], [1, "dialog", 3, "ngClass"], [1, "d-flex", "header-detail"], [1, "header-detail-left"], [1, "user", "d-flex"], ["alt", "avatar", 3, "src"], [1, "user-name"], [1, "header-detail-right"], ["nzTooltipTitle", "Ch\u1EB7n ng\u01B0\u1EDDi d\u00F9ng", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "stop", "nzTheme", "outline", 1, "icon"], ["nzTooltipTitle", "Chuy\u1EC3n sang trang tin nh\u1EAFn", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "facebook", "nzTheme", "outline", 1, "icon", 3, "click"], ["nzTooltipTitle", "\u0110\u00E1nh d\u1EA5u ch\u01B0a \u0111\u1ECDc", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "mail", "nzTheme", "outline", 1, "icon"], ["nzTooltipTitle", "\u0110\u1ED3ng b\u1ED9 l\u1EA1i tin nh\u1EAFn", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "sync", "nzTheme", "outline", 1, "icon", 3, "click"], ["id", "conversation-dialog-message", 1, "dialog-message", "ant-table-body"], [3, "nzActive", "nzLoading"], [1, "dialog-message-post"], ["target", "_blank", 1, "icon", 3, "href"], ["nz-tooltip", "", "nzTooltipPlacement", "top", "nzTooltipTitle", "Xem b\u00E0i vi\u1EBFt \u1EDF facebook", "nz-icon", "", "nzType", "exception", "nzTheme", "outline"], [1, "message"], [1, "create-time"], ["class", "image", "alt", "", 3, "src", 4, "ngIf"], [1, "dialog-message-parent"], [1, "dialog-message-parent-profile"], [1, "dialog-message-parent-owner"], ["nz-tooltip", "", "nzTooltipPlacement", "right", "class", "message", 3, "nzTooltipTitle", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "action", 4, "ngIf", "ngIfElse"], ["hasDeleted", ""], [1, "dialog-message-child"], ["class", "dialog-message-parent", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "loading-more-message", 3, "click", 4, "ngIf"], ["class", "reply-inbox", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["expiresToSendTemplate", ""], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], ["nzTitle", "G\u1EEDi nhanh s\u1EA3n ph\u1EA9m", 3, "nzWidth", "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], ["alt", "", 1, "image", 3, "src"], ["nz-tooltip", "", "nzTooltipPlacement", "right", 1, "message", 3, "nzTooltipTitle"], ["target", "_blank", 3, "href"], ["nz-tooltip", "", "nzTooltipPlacement", "right", "alt", "", 1, "image", 3, "nzTooltipTitle", "src"], [1, "action"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-button", "", "nzType", "link", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "link"], ["class", "message", "nz-tooltip", "", "nzTooltipPlacement", "right", 3, "ngClass", "nzTooltipTitle", 4, "ngIf"], ["nz-tooltip", "", "nzTooltipPlacement", "right", 1, "message", 3, "ngClass", "nzTooltipTitle"], [2, "display", "block"], ["nz-tooltip", "", "nzTooltipPlacement", "right", "alt", "", 1, "image", 3, "ngClass", "nzTooltipTitle", "src"], [1, "loading-more-message", 3, "click"], ["nz-icon", "", 3, "nzType", "nzSpin"], [1, "reply-inbox", 3, "ngClass"], ["nz-row", "", "nzGutter", "16", 1, "reply-inbox-upload", 3, "ngClass"], ["class", "reply-inbox-upload-relative", "nz-col", "", "nzSpan", "4", 4, "ngFor", "ngForOf"], [1, "reply-inbox-text"], ["placeholder", "Nh\u1EADp tin nh\u1EAFn v\u00E0 nh\u1EA5n enter \u0111\u1EC3 g\u1EEDi, nh\u1EA5n shift + enter \u0111\u1EC3 xu\u1ED1ng d\u00F2ng", "rows", "2", "nz-input", "", 3, "ngModel", "nzAutosize", "ngModelChange", "keypress"], [1, "reply-inbox-icon"], [1, "reply-inbox-icon-action"], ["nzTooltipTrigger", "click", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "smile", "nzTheme", "outline", 1, "icon", 3, "nzTooltipTitle"], ["nzTooltipTitle", "T\u1EA3i h\u00ECnh", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "camera", "nzTheme", "outline", 1, "icon", 3, "click"], ["nzTooltipTitle", "S\u1EA3n ph\u1EA9m", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "shopping-cart", "nzTheme", "outline", 1, "icon", 3, "click"], ["id", "image-message", "type", "file", 2, "display", "none", 3, "change"], [1, "reply-inbox-icon-send"], ["nz-button", "", 3, "disabled", "click"], ["nz-icon", "", "nzType", "send", "nzTheme", "outline"], ["listEmoil", ""], ["nz-col", "", "nzSpan", "4", 1, "reply-inbox-upload-relative"], ["width", "100%", "height", "50px", "alt", "", 3, "src"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline", 1, "icon-remove", 3, "click"], [3, "nzSpinning"], [1, "list-emoji"], [3, "click"], [1, "reply-inbox", "d-flex"], [1, "warning"], ["nz-icon", "", "nzType", "warning", "nzTheme", "outline", 1, "icon-warning"], ["href", "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], ["nz-row", "", 1, "quick-send-product"], ["nz-col", "", "nzSpan", "24", 1, "text-center"], ["width", "150", "height", "150", "alt", "", 3, "src"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "right-all-content"], ["nz-button", "", 1, "width-fit-content", 3, "click"], ["nz-button", "", 1, "btn-hover", "width-fit-content", 3, "click"], ["nz-button", "", 1, "btn-hover", "width-fit-content", 3, "disabled", "click"], ["nz-row", "", "nzGutter", "16", 1, "modal-send-message"], ["nz-col", "", "nzSpan", "24", 1, "d-flex-center"], ["width", "28px", "height", "28px", "viewBox", "0 0 27 26", 2, "margin-right", "8px"], ["fill", "none", "fill-rule", "evenodd", "transform", "translate(1 1)"], ["fill", "#FFF", "points", "24.457 4.159 12.5 0 .543 4.159 .543 16.635 10.326 19.565 10.326 23.913 24.457 16.635"], ["fill", "#2962FF", "fill-opacity", ".299", "points", "21.739 3.214 21.739 14.461 10.326 20.34 10.326 23.913 24.457 16.635 24.457 4.159"], ["stroke", "#2962FF", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "points", "24.457 4.159 12.5 0 .543 4.159 .543 16.635 10.326 19.565 10.326 23.913 17.195 20.375 24.457 16.635"], ["stroke", "#2962FF", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M4.89130435 6.52173913L20.1086957 6.52173913M4.89130435 9.7826087L20.1086957 9.7826087M4.89130435 13.0434783L12.5 13.0434783"], ["nz-col", "", "nzSpan", "24", 1, "receiver"], ["rows", "4", "nz-input", "", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 1, "button-action"], ["nzType", "text", "nz-button", "", 1, "cancel", 3, "click"], ["nzType", "text", "nz-button", "", 1, "send", "bg-green", 3, "disabled", "click"]],
  template: function ConversationCommentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_Template_i_click_11_listener() {
        return ctx.gotoInbox();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationCommentComponent_Template_i_click_13_listener() {
        return ctx.getData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-skeleton", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ConversationCommentComponent_img_25_Template, 1, 1, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ConversationCommentComponent_div_30_Template, 2, 2, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ConversationCommentComponent_a_31_Template, 2, 3, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ConversationCommentComponent_div_32_Template, 8, 3, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ConversationCommentComponent_ng_template_33_Template, 3, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ConversationCommentComponent_div_36_Template, 9, 5, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ConversationCommentComponent_div_37_Template, 3, 2, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ConversationCommentComponent_div_38_Template, 18, 12, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ConversationCommentComponent_ng_template_39_Template, 10, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ConversationCommentComponent_app_search_product_41_Template, 1, 2, "app-search-product", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "nz-modal", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function ConversationCommentComponent_Template_nz_modal_nzVisibleChange_42_listener($event) {
        return ctx.isVisibleSendMessage = $event;
      })("nzOnCancel", function ConversationCommentComponent_Template_nz_modal_nzOnCancel_42_listener() {
        return ctx.isVisibleSendMessage = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ConversationCommentComponent_ng_container_43_Template, 28, 23, "ng-container", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "nz-modal", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function ConversationCommentComponent_Template_nz_modal_nzVisibleChange_44_listener($event) {
        return ctx.infoSendMessage.visible = $event;
      })("nzOnCancel", function ConversationCommentComponent_Template_nz_modal_nzOnCancel_44_listener() {
        return ctx.infoSendMessage = {};
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ConversationCommentComponent_ng_container_45_Template, 22, 3, "ng-container", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c2, ctx.listAttachment.length > 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.infoSender["profile_pic"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.infoSender["name"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActive", true)("nzLoading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.post.permalink_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 26, ctx.post.created_time, "dd/MM/YYYY HH:mm"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.post.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.post.full_picture);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.infoSender["profile_pic"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.comment.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.comment.attachment && (ctx.comment.attachment.type == "photo" || ctx.comment.attachment.type == "sticker"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.comment.deleted)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.childComment)("ngForTrackBy", ctx.trackByMyComment);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataPaging == null ? null : ctx.dataPaging.next);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.expiresToSend)("ngIfElse", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchProductList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzWidth", 520)("nzVisible", ctx.isVisibleSendMessage)("nzFooter", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzFooter", null)("nzVisible", ctx.infoSendMessage.visible)("nzTitle", null);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__.NzTooltipDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_13__.NzSkeletonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalContentDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzRowDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzAutosizeDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__.NzColDirective, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__.NzSpinComponent, _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_3__.SearchProductComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: [".layout[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 60px auto 100px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 8px;\n  cursor: pointer;\n  color: var(--ion-color-vh-gray);\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .header-detail[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  background-color: var(--ion-color-vh-white);\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 400px;\n  border-right: 1px solid #e3e9ed;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  padding: 0 16px 0 8px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.9rem;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .header-detail-right[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 250px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-post[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  background: var(--ion-color-vh-white);\n  margin-top: 4px;\n  border-radius: 4px;\n  padding: 8px;\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-post[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  top: 0;\n  font-size: 16px;\n  color: var(--ion-color-vh-green) !important;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-post[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: auto;\n  max-height: 150px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-post[_ngcontent-%COMP%]   .create-time[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n  margin: 0;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 8px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent-profile[_ngcontent-%COMP%] {\n  width: 36px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent-owner[_ngcontent-%COMP%] {\n  width: calc(100% - 40px) !important;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent-owner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: start;\n  padding: 7px 12px;\n  display: block;\n  background: #fff;\n  color: #212121;\n  box-shadow: -2px 0 3px 0 rgba(80, 95, 121, 0.05), 0 2px 3px 0 rgba(80, 95, 121, 0.05);\n  border-radius: 16px;\n  margin-bottom: 4px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent-owner[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  cursor: pointer;\n  width: auto;\n  max-height: 520px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent-owner[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  color: var(--ion-color-vh-gray);\n  font-weight: 700;\n  font-size: 0.8rem;\n  transition: 0.4s;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-parent-owner[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n  transition: 0.4s;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .dialog-message-child[_ngcontent-%COMP%] {\n  padding: 0 4px 0 48px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .loading-more-message[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  height: 100px;\n  width: 100%;\n  background-color: #ffffff;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-upload[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-upload-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-upload-relative[_ngcontent-%COMP%]   .icon-remove[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 16px;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: var(--ion-color-vh-red);\n  border-radius: 50%;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-upload-relative[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: black;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-text[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  padding: 8px 20px;\n  margin-bottom: 8px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-icon-action[_ngcontent-%COMP%] {\n  width: 60%;\n  align-self: center;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-icon-send[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-icon-send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  display: flex;\n  font-size: 0.9rem;\n  align-items: center;\n  float: right;\n  margin-right: 4px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox-icon-send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.layout[_ngcontent-%COMP%]   .dialog[_ngcontent-%COMP%]   .reply-inbox[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]   .icon-warning[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 8px;\n  color: #e52e2e;\n}\n.layout[_ngcontent-%COMP%]   .dialog.have-image-upload[_ngcontent-%COMP%] {\n  grid-template-rows: 60px auto 160px;\n}\n.layout[_ngcontent-%COMP%]   .have-image-upload[_ngcontent-%COMP%] {\n  height: 160px;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.d-flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loading[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.d-flex-row-reverse[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.list-emoji[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n.quick-send-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.quick-send-product[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.quick-send-product[_ngcontent-%COMP%]   .width-fit-content[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.quick-send-product[_ngcontent-%COMP%]   .btn-hover[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n}\n.quick-send-product[_ngcontent-%COMP%]   .btn-hover[_ngcontent-%COMP%]:hover {\n  transition: 0.6s;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n}\n.quick-send-product[_ngcontent-%COMP%]   .width-fit-content[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.bg-green[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) !important;\n  color: var(--ion-color-vh-white) !important;\n}\n.modal-send-message[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.modal-send-message[_ngcontent-%COMP%]   .receiver[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.modal-send-message[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  text-align: end;\n}\n.modal-send-message[_ngcontent-%COMP%]   .button-action[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  border: 1px solid var(--ion-color-vh-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLDJDQUFBO0FBR1o7QUFGWTtFQUNJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBSWhCO0FBSGdCO0VBQ0kscUJBQUE7QUFLcEI7QUFKb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTXhCO0FBSm9CO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQU14QjtBQUZZO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0FBSWhCO0FBRFE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUhnQjtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7QUFLcEI7QUFIZ0I7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFLcEI7QUFIZ0I7RUFDSSwrQkFBQTtFQUNBLFNBQUE7QUFLcEI7QUFGWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSWhCO0FBSGdCO0VBQ0ksV0FBQTtBQUtwQjtBQUpvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNeEI7QUFIZ0I7RUFDSSxtQ0FBQTtBQUtwQjtBQUpvQjtFQUNJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFGQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU14QjtBQUpvQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU14QjtBQUh3QjtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUs1QjtBQUh3QjtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7QUFLNUI7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNaO0FBQVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVoQjtBQURnQjtFQUNJLGtCQUFBO0FBR3BCO0FBRm9CO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFJeEI7QUFGb0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFJeEI7QUFDZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNwQjtBQUVZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBQ3BCO0FBRWdCO0VBQ0ksVUFBQTtBQUFwQjtBQUNvQjtFQUNJLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ3hCO0FBQXdCO0VBQ0ksaUJBQUE7QUFFNUI7QUFJZ0I7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFGcEI7QUFPSTtFQUNJLG1DQUFBO0FBTFI7QUFPSTtFQUNJLGFBQUE7QUFMUjtBQVFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1BO0VBQ0ksWUFBQTtBQUhKO0FBS0E7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUlBO0VBQ0ksd0JBQUE7QUFESjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFEUjtBQUtJO0VBQ0ksa0JBQUE7QUFGUjtBQUlJO0VBQ0ksa0JBQUE7QUFGUjtBQUlJO0VBQ0ksYUFBQTtBQUZSO0FBSUk7RUFDSSwyQ0FBQTtBQUZSO0FBSUk7RUFDSSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7QUFGUjtBQUlJO0VBQ0ksZ0JBQUE7QUFGUjtBQUtBO0VBQ0ksZ0RBQUE7RUFDQSwyQ0FBQTtBQUZKO0FBSUE7RUFDSSxpQkFBQTtBQURKO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsMENBQUE7QUFDWiIsImZpbGUiOiJjb252ZXJzYXRpb24tY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuZGlhbG9nIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0byAxMDBweDtcclxuICAgICAgICBpLmljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1kZXRhaWwge1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2U5ZWQ7XHJcbiAgICAgICAgICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpYWxvZy1tZXNzYWdlIHtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgJi1wb3N0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY3JlYXRlLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtcGFyZW50IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgICAgICAgICAgJi1wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1vd25lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMnB4IDAgM3B4IDAgcmdiKDgwIDk1IDEyMSAvIDUlKSwgMCAycHggM3B4IDAgcmdiKDgwIDk1IDEyMSAvIDUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaWFsb2ctbWVzc2FnZS1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4IDAgNDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmctbW9yZS1tZXNzYWdlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXBseS1pbmJveCB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAmLXVwbG9hZCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICYtcmVsYXRpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAuaWNvbi1yZW1vdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbnotc3BpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgJi1hY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYtc2VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53YXJuaW5nIHtcclxuICAgICAgICAgICAgICAgIC5pY29uLXdhcm5pbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTUyZTJlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpYWxvZy5oYXZlLWltYWdlLXVwbG9hZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG8gMTYwcHg7XHJcbiAgICB9XHJcbiAgICAuaGF2ZS1pbWFnZS11cGxvYWQge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZC1mbGV4LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2FkaW5nIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uZC1mbGV4LXJvdy1yZXZlcnNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtZW1vamkge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4ucXVpY2stc2VuZC1wcm9kdWN0IHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAud2lkdGgtZml0LWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ob3Zlcjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgfVxyXG4gICAgLndpZHRoLWZpdC1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG59XHJcbi5iZy1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1zZW5kLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAucmVjZWl2ZXIge1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLWFjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAuY2FuY2VsIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 850:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/add-customer/add-customer.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerComponent": () => (/* binding */ AddCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function AddCustomerComponent_ng_container_2_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Customer name is required"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 21);
} if (rf & 2) {
    const control_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r11.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "_Invalid phone number"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Phone number is required"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddCustomerComponent_ng_container_2_ng_template_28_ng_container_1_Template, 3, 3, "ng-container", 21);
} if (rf & 2) {
    const control_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r13.hasError("invalidPhone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r13.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Phone number already exists"), " ");
} }
function AddCustomerComponent_ng_container_2_nz_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 16);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", item_r16._id)("nzLabel", item_r16.name);
} }
function AddCustomerComponent_ng_container_2_ng_container_74_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Tax code is required"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_container_74_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_container_74_ng_template_11_ng_container_0_Template, 3, 3, "ng-container", 21);
} if (rf & 2) {
    const control_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r19.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddCustomerComponent_ng_container_2_ng_container_74_ng_template_11_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "Tax code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "Enter tax code"));
} }
function AddCustomerComponent_ng_container_2_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_div_75_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.selectedValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "nz-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "nz-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "nz-date-picker", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "Gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 9, "Select gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r10.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 11, "Female"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 13, "Male"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 15, "Date of birth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 17, "Select date of birth"));
} }
const _c0 = function () { return { minRows: 3, maxRows: 5 }; };
function AddCustomerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddCustomerComponent_ng_container_2_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_container_2_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.openSearchCountryCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddCustomerComponent_ng_container_2_Template_input_input_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.formatPhoneNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddCustomerComponent_ng_container_2_ng_template_28_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddCustomerComponent_ng_container_2_div_30_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "nz-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "nz-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, AddCustomerComponent_ng_container_2_nz_option_52_Template, 1, 2, "nz-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "nz-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_Template_nz_select_ngModelChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.changeBusiness($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, AddCustomerComponent_ng_container_2_ng_container_74_Template, 13, 7, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, AddCustomerComponent_ng_container_2_div_75_Template, 20, 19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](105, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](117, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.addCustomerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 38, "Customer name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 40, "Enter customer name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 42, "Phone number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", ctx_r0.callingCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.formattedPhone)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 44, "Enter customer phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isExitsPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 46, "Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 48, "Email is not correct"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 50, "Enter customer mail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 52, "Customer tier"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAllowClear", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 54, "Undefined"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.customerGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 56, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](62, 58, "Enter address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](67, 60, "Customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 62, "Select customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](71, 64, "Individual"))("nzValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 66, "Business/Business household"))("nzValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.addCustomerForm.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.addCustomerForm.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 68, "Country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 70, "Enter country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 72, "Province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](95, 74, "Enter province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](100, 76, "District"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](105, 78, "Enter district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 80, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](112, 82, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](86, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](117, 84, "Debit permission"));
} }
const _c1 = function (a0) { return { opacity: a0 }; };
function AddCustomerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.addCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.addCustomerForm.invalid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r2.addCustomerForm.invalid ? 0.5 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "Add"));
} }
class AddCustomerComponent {
    constructor(vhComponent, lang, vhQuerySales, functionService) {
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.vhQuerySales = vhQuerySales;
        this.functionService = functionService;
        this.showDrawerAddCusomer = false;
        this.infoSender = {};
        this.closeAddCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.customerGroups = this.vhQuerySales.getlocalCustomerClasss();
        /** Kiểm tra số điện thoại đã tồn tại ha chưa để hiển thị thông báo */
        this.isExitsPhone = false;
        /** Mã quốc gia */
        this.countryCode = this.functionService.defaultCountryCode;
        /** Calling code */
        this.callingCode = this.functionService.defaultCallingCode;
        /** Số điện thoại đã format. VD: 333 333 333 */
        this.formattedPhone = '';
    }
    ngOnInit() {
        this.initaddCustomerForm();
    }
    close(success) {
        this.closeAddCustomer.emit(success ? true : false);
    }
    initaddCustomerForm() {
        this.addCustomerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.infoSender.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.infoSender.email),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            datebirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                this.functionService.phoneValidator(() => this.countryCode),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            id_customer_class: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            debt_enable: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true),
            delete_hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            isBusiness: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            taxcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
        });
    }
    addCustomer() {
        this.vhComponent.showLoading("").then(() => {
            let customer = Object.assign({}, this.addCustomerForm.value);
            const phoneNumberValue = customer.phone;
            customer.countryCode = this.countryCode;
            customer.phone = this.functionService.getNationalPhoneNumber(phoneNumberValue, this.countryCode);
            customer.phoneNumber = this.functionService.getInternationalPhoneNumber(phoneNumberValue, this.countryCode);
            customer.date = new Date();
            customer.email = this.infoSender.email;
            if (customer.isBusiness) {
                delete customer.gender;
                delete customer.datebirth;
            }
            else {
                delete customer.taxcode;
            }
            this.vhQuerySales.addCustomer(customer)
                .then((res) => {
                if (res.vcode == 0) {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(1500, `${this.lang.translate("Customer")} ${customer.name} ${this.lang.translate("has been added successfully")}`, "success-toast");
                    this.closeAddCustomer.emit(res);
                }
                else if (res.vcode == 1) {
                    //This phone number is already in use with another customer
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(1500, this.lang.translate("This phone number is already in use with another customer"), 'alert-toast');
                }
            }, error => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(1500, this.lang.translate("An eror occured while adding customer. Please try again"), 'alert-toast');
            });
        });
    }
    /**
     * Khi thay đổi Loại khách hàng
     */
    changeBusiness(event) {
        var _a, _b, _c, _d;
        // taxcode required khi isBusiness = true
        if (event) {
            (_a = this.addCustomerForm.get('taxcode')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            (_b = this.addCustomerForm.get('taxcode')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
        }
        else {
            (_c = this.addCustomerForm.get('taxcode')) === null || _c === void 0 ? void 0 : _c.clearValidators();
            (_d = this.addCustomerForm.get('taxcode')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
        }
    }
    /**
     * Mở modal chọn mã quốc gia
     */
    openSearchCountryCode() {
        this.functionService.openSearchCountryCode().then((data) => {
            var _a, _b, _c;
            this.countryCode = data.code;
            this.callingCode = data.callingCode;
            this.formattedPhone = this.functionService.getFormattedPhoneNumber(this.addCustomerForm.value.phone, this.countryCode);
            (_a = this.addCustomerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.markAsTouched();
            (_b = this.addCustomerForm.get('phone')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
            (_c = this.addCustomerForm.get('phone')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
        }).catch((error) => {
            console.error('Error opening country code search:', error);
        });
    }
    /**
     * Format số điện thoại khi nhập và set vào form
     * @param event Sự kiện khi nhập số điện thoại
     */
    formatPhoneNumber(event) {
        var _a;
        // Lấy số điện thoại đã format
        const input = event.target.value;
        this.formattedPhone = this.functionService.getFormattedPhoneNumber(input, this.countryCode);
        // Cập nhật vào form
        (_a = this.addCustomerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.setValue(this.formattedPhone, { emitEvent: false });
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
AddCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["app-add-customer"]], inputs: { showDrawerAddCusomer: "showDrawerAddCusomer", infoSender: "infoSender" }, outputs: { closeAddCustomer: "closeAddCustomer" }, decls: 5, vars: 7, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzFooter", "nzOnClose"], [4, "nzDrawerContent"], ["footerAddCustomer", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], [1, "calling-code", 3, "click"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["formControlName", "phone", "type", "tel", "nz-input", "", "required", "", 3, "value", "placeholder", "input"], ["combineTplPhone", ""], ["class", "ng-tns-c300-27 ant-form-item-explain ant-form-item-explain-error ng-star-inserted", "ng-reflect-ng-class", "ant-form-item-explain,ant-form", 4, "ngIf"], ["type", "email", "formControlName", "email", "nz-input", "", 3, "placeholder"], ["nzShowSearch", "", "formControlName", "id_customer_class", 3, "nzAllowClear"], [3, "nzValue", "nzLabel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["formControlName", "address", "nz-input", "", 3, "placeholder"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "isBusiness", 3, "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue"], [4, "ngIf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["formControlName", "country", "nz-input", "", 3, "placeholder"], ["formControlName", "province", "nz-input", "", 3, "placeholder"], ["formControlName", "district", "nz-input", "", 3, "placeholder"], ["nz-input", "", "formControlName", "note", 3, "placeholder", "nzAutosize"], ["nz-col", "", "nzSpan", "12", 2, "padding-top", "22px"], ["nz-checkbox", "", "formControlName", "debt_enable"], ["ng-reflect-ng-class", "ant-form-item-explain,ant-form", 1, "ng-tns-c300-27", "ant-form-item-explain", "ant-form-item-explain-error", "ng-star-inserted"], [1, "ng-tns-c300-27", "ng-trigger", "ng-trigger-helpMotion"], ["formControlName", "taxcode", "nz-input", "", 3, "placeholder"], ["taxcode", ""], ["nz-row", "", "nzGutter", "16"], ["nz-col", "", "nzSpan", "12"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "gender", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], ["nzValue", "Female", 3, "nzLabel"], ["nzValue", "Male", 3, "nzLabel"], ["formControlName", "datebirth", 3, "nzPlaceHolder"], [1, "footerAddCustomer", 2, "float", "right"], ["nz-button", "", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", 3, "disabled", "ngStyle", "click"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function AddCustomerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddCustomerComponent_ng_container_2_Template, 118, 87, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddCustomerComponent_ng_template_3_Template, 7, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, "Add customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzVisible", ctx.showDrawerAddCusomer)("nzFooter", _r1);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__.NzCheckboxComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n  background-color: var(--ion-color-vh-white);\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-white);\n  border: 1px solid var(--ion-color-vh-green);\n  background-color: var(--ion-color-vh-green);\n}\n\nnz-date-picker[_ngcontent-%COMP%], nz-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code) {\n  position: relative;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code)   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.calling-code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 60px;\n  color: var(--ion-color-vh-gray);\n  cursor: pointer;\n  grid-gap: 2px;\n  gap: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTs7RUFFRSxvQ0FBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQUVKOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7QUFFSjs7QUFDQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBRUYiLCJmaWxlIjoiYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxufVxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyQWRkQ3VzdG9tZXIge1xyXG4gIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICB9XHJcbiAgYnV0dG9uOm50aC1jaGlsZCgyKSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgfVxyXG59XHJcbm56LWRhdGUtcGlja2VyLFxyXG5uei1zZWxlY3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubnotaW5wdXQtZ3JvdXA6aGFzKC5jYWxsaW5nLWNvZGUpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm56LWlucHV0LWdyb3VwOmhhcyguY2FsbGluZy1jb2RlKSBpbnB1dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4uY2FsbGluZy1jb2RlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 33161:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/check-fees/check-fees.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckFeesComponent": () => (/* binding */ CheckFeesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghnService/ghn.service */ 586);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service */ 43089);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ahamoveService_ahamove_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ahamoveService/ahamove.service */ 29021);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function CheckFeesComponent_ng_container_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.delivery.logo, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function CheckFeesComponent_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-form-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CheckFeesComponent_ng_container_2_div_4_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.dataAddress.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, "Address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.dataAddress.address);
} }
function CheckFeesComponent_ng_container_2_ng_container_14_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 24);
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r18.ProvinceID)("nzLabel", item_r18.ProvinceName);
} }
function CheckFeesComponent_ng_container_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CheckFeesComponent_ng_container_2_ng_container_14_nz_option_1_Template, 1, 2, "nz-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
} }
function CheckFeesComponent_ng_container_2_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CheckFeesComponent_ng_container_2_ng_container_25_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 24);
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r21.DistrictID)("nzLabel", item_r21.DistrictName);
} }
function CheckFeesComponent_ng_container_2_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CheckFeesComponent_ng_container_2_ng_container_25_nz_option_1_Template, 1, 2, "nz-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isLoading);
} }
function CheckFeesComponent_ng_container_2_nz_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CheckFeesComponent_ng_container_2_ng_container_36_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 24);
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzValue", item_r24.WardCode)("nzLabel", item_r24.WardName);
} }
function CheckFeesComponent_ng_container_2_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CheckFeesComponent_ng_container_2_ng_container_36_nz_option_1_Template, 1, 2, "nz-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r7.isLoading);
} }
function CheckFeesComponent_ng_container_2_nz_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "Loading..."), " ");
} }
function CheckFeesComponent_ng_container_2_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-number", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CheckFeesComponent_ng_container_2_div_38_Template_nz_input_number_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.dataProduct.length = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "Length(cm)"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 6, "Length is required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r9.dataProduct.length);
} }
function CheckFeesComponent_ng_container_2_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-form-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-number", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CheckFeesComponent_ng_container_2_div_39_Template_nz_input_number_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r29.dataProduct.width = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "Width(cm)"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 6, "Width is required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.dataProduct.width);
} }
function CheckFeesComponent_ng_container_2_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-form-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-number", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CheckFeesComponent_ng_container_2_div_40_Template_nz_input_number_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r31.dataProduct.height = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "Height(cm)"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 6, "Height is required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.dataProduct.height);
} }
function CheckFeesComponent_ng_container_2_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nz-form-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-input-number", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CheckFeesComponent_ng_container_2_div_41_Template_nz_input_number_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r33.dataProduct.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "Weight(gram)"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 6, "Weight is required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r12.dataProduct.weight);
} }
function CheckFeesComponent_ng_container_2_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r35.short_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.vhAlgorithm.vhcurrencyunit_symbol(item_r35.total));
} }
function CheckFeesComponent_ng_container_2_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, item_r36.short_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r14.vhAlgorithm.vhcurrencyunit_symbol(item_r36.fee));
} }
function CheckFeesComponent_ng_container_2_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, item_r37.short_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, item_r37.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.vhAlgorithm.vhcurrencyunit_symbol(item_r37.total_fee));
} }
function CheckFeesComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CheckFeesComponent_ng_container_2_img_3_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CheckFeesComponent_ng_container_2_div_4_Template, 8, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "nz-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzFocus", function CheckFeesComponent_ng_container_2_Template_nz_select_nzFocus_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.getProvinceGHN(); })("ngModelChange", function CheckFeesComponent_ng_container_2_Template_nz_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return (ctx_r40.dataAddress["ProvinceID"] = $event); })("ngModelChange", function CheckFeesComponent_ng_container_2_Template_nz_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.changeProvinceGHN($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CheckFeesComponent_ng_container_2_ng_container_14_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CheckFeesComponent_ng_container_2_nz_option_15_Template, 4, 3, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-form-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "nz-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CheckFeesComponent_ng_container_2_Template_nz_select_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return (ctx_r42.dataAddress["DistrictID"] = $event); })("nzFocus", function CheckFeesComponent_ng_container_2_Template_nz_select_nzFocus_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r43.getDistrictGHN(); })("ngModelChange", function CheckFeesComponent_ng_container_2_Template_nz_select_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r44.changeDistrictGHN($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CheckFeesComponent_ng_container_2_ng_container_25_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CheckFeesComponent_ng_container_2_nz_option_26_Template, 4, 3, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "nz-form-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "nz-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "nz-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CheckFeesComponent_ng_container_2_Template_nz_select_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return (ctx_r45.dataAddress["WardCode"] = $event); })("nzFocus", function CheckFeesComponent_ng_container_2_Template_nz_select_nzFocus_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r46.getWardGHN(); })("ngModelChange", function CheckFeesComponent_ng_container_2_Template_nz_select_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r47.changeWardGHN($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CheckFeesComponent_ng_container_2_ng_container_36_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, CheckFeesComponent_ng_container_2_nz_option_37_Template, 4, 3, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, CheckFeesComponent_ng_container_2_div_38_Template, 9, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, CheckFeesComponent_ng_container_2_div_39_Template, 9, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CheckFeesComponent_ng_container_2_div_40_Template, 9, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, CheckFeesComponent_ng_container_2_div_41_Template, 9, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, CheckFeesComponent_ng_container_2_div_43_Template, 8, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, CheckFeesComponent_ng_container_2_div_44_Template, 9, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CheckFeesComponent_ng_container_2_div_45_Template, 12, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckFeesComponent_ng_container_2_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r48.viewResult(ctx_r48.delivery.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.delivery.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.delivery.type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 40, "Province"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 42, "Select province, city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzShowSearch", true)("ngModel", ctx_r0.dataAddress["ProvinceID"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.listProvinceGHN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 44, "District"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 46, "Select district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.dataAddress["DistrictID"])("nzDisabled", !ctx_r0.dataAddress["ProvinceID"])("nzShowSearch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.listDistrictGHN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 48, "Ward"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 50, "Select ward"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.dataAddress["WardCode"])("nzDisabled", !ctx_r0.dataAddress["DistrictID"])("nzShowSearch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.listWardGHN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.delivery.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.delivery.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.delivery.type == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.delivery.type != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.resultFeesGHN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.resultFeesGHTK);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.resultFeesAhamove);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.delivery.type == 1 && (!ctx_r0.dataAddress.WardCode || !ctx_r0.dataProduct.width || !ctx_r0.dataProduct.height || !ctx_r0.dataProduct.length || !ctx_r0.dataProduct.weight) || ctx_r0.delivery.type == 2 && (!ctx_r0.dataProduct.weight || !ctx_r0.dataAddress.WardCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 52, "View shipping fee"));
} }
const _c0 = function () { return { "overflow": "auto", "max-height": "700px", "overflow-y": "auto" }; };
const GHNTOKEN = '656776fd-1e78-11eb-aaa9-3e267f98f494';
class CheckFeesComponent {
    constructor(vhQuerySales, vhComponent, ghnService, ghtkService, ahamoveService, lang, vhAlgorithm) {
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.ghnService = ghnService;
        this.ghtkService = ghtkService;
        this.ahamoveService = ahamoveService;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.visibleCheckFees = false;
        this.hideModalCheckFees = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.delivery = {};
        this.isLoading = false;
        this.listProvinceGHN = [];
        this.listDistrictGHN = [];
        this.listWardGHN = [];
        this.serviceGHN = [];
        this.dataAddress = { ProvinceID: '', ProvinceName: '', DistrictID: '', DistrictName: '', WardCode: '', WardName: '' };
        this.dataProduct = { height: '', weight: '', length: '', width: '' };
        this.resultFeesGHN = [];
        this.resultFeesGHTK = [];
        this.resultFeesAhamove = [];
        this.services_SGN = [{ "_id": "SGN-BIKE" }, { "_id": "SGN-EXPRESS" }, { "_id": "SGN-POOL" }, { "_id": "SGN-SAMEDAY" }, { "_id": "SGN-TRICYCLE" }, { "_id": "SGN-TRUCK-500" }, { "_id": "SGN-TRUCK-2000" }];
        this.services_HAN = [{ "_id": "HAN-BIKE" }, { "_id": "HAN-EXPRESS" }, { "_id": "HAN-POOL" }, { "_id": "HAN-SAMEDAY" }];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.vhComponent.showLoading('', 'transparent-loading').then(() => {
            this.vhQuerySales.refreshLocalDeliverys().then(() => {
                this.delivery = this.vhQuerySales.getlocalDelivery(this.id_delivery);
                if (this.delivery.type == 1)
                    this.getDataGHN();
                else if (this.delivery.type == 2)
                    this.getDataGHTK();
                else if (this.delivery.type == 3)
                    this.getDataAhamove();
            });
        });
    }
    //Lấy dữ liệu giao hàng nhanh
    getDataGHN() {
        this.ghnService.connectTokenGhn(this.delivery.token).then((resultShop) => {
            this.vhComponent.hideLoading(0);
            if (resultShop.code == 200) {
                let shops = resultShop.data.shops.find(item => item._id == this.delivery.shop_id);
                this.delivery = Object.assign(Object.assign({}, this.delivery), { name: shops.name, phone: shops.phone, address: shops.address, district_id: shops.district_id, ward_code: shops.ward_code, logo: './assets/icon/management/deliverys/1.svg' });
            }
            else
                this.messageError();
        }).catch(err => { this.messageError(), this.vhComponent.hideLoading(0); });
    }
    //Lấy dữ liệu giao hàng tiết kiệm
    getDataGHTK() {
        this.ghtkService.getWareHouseGhtk(this.delivery.token).then((res) => {
            this.vhComponent.hideLoading(0);
            let shops = res.data.find(item => item.pick_address_id == this.delivery.shop_id);
            let data = this.renderAddressGHTK(shops.address);
            this.delivery = Object.assign(Object.assign({}, this.delivery), { pick_name: shops.pick_name, pick_address: data.pick_address, pick_province: data.pick_province, pick_district: data.pick_district, logo: './assets/icon/management/deliverys/2.svg' });
        }).catch(err => { this.messageError(), this.vhComponent.hideLoading(0); });
    }
    //lấy dữ liệu giao hàng ahamove
    getDataAhamove() {
        this.ahamoveService.getTokenAhaMove(this.delivery.phone).then((res) => {
            this.vhComponent.hideLoading(0);
            this.delivery.token = res.token;
            let addresss = this.vhQuerySales.getlocalAddresss().filter(item => item.id_delivery == this.delivery._id && item.type == 4);
            let pickAddress = addresss.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0];
            this.delivery = Object.assign(Object.assign(Object.assign({}, pickAddress), this.delivery), { logo: './assets/icon/management/deliverys/3.svg' });
        }).catch(err => { this.messageError(), this.vhComponent.hideLoading(0); });
    }
    renderAddressGHTK(address) {
        let pick_address = {};
        let indexProvince = address.lastIndexOf(",");
        let indexDistrict = address.lastIndexOf(",", indexProvince - 1);
        pick_address.pick_province = address.slice(indexProvince + 1).trim();
        pick_address.pick_district = address.slice(indexDistrict + 1, indexProvince).trim();
        pick_address.pick_ward = address.slice(0, indexDistrict).trim();
        pick_address.pick_address = pick_address.pick_ward;
        return pick_address;
    }
    messageError() {
        this.vhComponent.alertMessageDesktop('error', this.lang.translate('An error occured while getting transport'));
    }
    hideModal() {
        this.visibleCheckFees = false;
        this.hideModalCheckFees.emit(false);
    }
    getProvinceGHN() {
        this.isLoading = true;
        this.ghnService.getProvinceGhn(GHNTOKEN).then((res) => {
            this.isLoading = false;
            if (res.code == 200 && this.delivery.type != 3)
                this.listProvinceGHN = res.data;
            else if (res.code == 200 && this.delivery.type == 3)
                this.listProvinceGHN = res.data.filter(item => item.ProvinceID == 201 || item.ProvinceID == 202);
        }).catch(err => { this.messageError(); this.isLoading = false; });
    }
    /**
     * Sự kiện thay đổi tỉnh => reset huyện xã
     * @param event
     */
    changeProvinceGHN(event) {
        if (event) {
            this.listDistrictGHN = [];
            this.listWardGHN = [];
            this.dataAddress['WardCode'] = '';
            this.dataAddress['DistrictID'] = '';
            if (this.delivery.type == 2 || this.delivery.type == 3) {
                let province = this.listProvinceGHN.find(item => item.ProvinceID == event);
                this.dataAddress['ProvinceName'] = province.ProvinceName;
            }
        }
    }
    /**
     * Lấy danh sách huyện
     */
    getDistrictGHN() {
        this.isLoading = true;
        this.ghnService.getDistrictGhn(GHNTOKEN, this.dataAddress['ProvinceID']).then((res) => {
            this.isLoading = false;
            if (res.code == 200)
                this.listDistrictGHN = res.data;
        }).catch(err => { this.messageError(); this.isLoading = false; });
    }
    /**
     * Sự kiện thay đổi địa chỉ huyện => reset xã
     * @param event
     */
    changeDistrictGHN(event) {
        if (event) {
            this.dataAddress['WardCode'] = '';
            this.dataAddress['DistrictID'] = event;
            if (this.delivery.type == 2 || this.delivery.type == 3) {
                let district = this.listDistrictGHN.find(item => item.DistrictID == event);
                this.dataAddress['DistrictName'] = district.DistrictName;
            }
        }
    }
    /**
     * Lấy danh sách xã, phường
     */
    getWardGHN() {
        this.isLoading = true;
        this.ghnService.getWardGhn(GHNTOKEN, this.dataAddress['DistrictID']).then((res) => {
            this.isLoading = false;
            if (res.code == 200)
                this.listWardGHN = res.data;
        }).catch(err => { this.messageError(); this.isLoading = false; });
    }
    /**
     * Sau khi chọn xong xã phường, dùng api get về các dịch vụ hỗ trợ(đi bộ, máy bay...)
     * @param event
     */
    changeWardGHN(event) {
        if (event && this.delivery.type == 1) {
            let json = {
                shop_id: this.delivery.shop_id,
                from_district_id: this.delivery.district_id,
                to_district_id: this.dataAddress.DistrictID
            };
            this.ghnService.getServiceDelivery(this.delivery.token, json).then((res) => {
                this.serviceGHN = res.data.filter(item => {
                    return item.service_type_id == 1 || item.service_type_id == 2;
                });
            }).catch(err => { this.messageError(); });
        }
        else if (event && this.delivery.type == 3) {
            let ward = this.listWardGHN.find(item => item.WardCode == event);
            this.dataAddress['WardName'] = ward.WardName;
        }
    }
    /**
      * Hàm trả về thông tin để chuẩn bị cho vào các hàm getService
    **/
    prepareInfo(service_id) {
        return {
            shop_id: this.delivery.shop_id, to_district_id: this.dataAddress.DistrictID,
            to_ward_code: this.dataAddress.WardCode,
            height: this.dataProduct.height, length: this.dataProduct.length, weight: this.dataProduct.weight, width: this.dataProduct.width,
            insurance_value: 0, service_id: service_id,
            from_district_id: this.delivery.district_id, from_ward_code: this.delivery.ward_code
        };
    }
    /**
     * Nếu type = 1 là ghn,
     * Type = 2 là ghtk
     * Type = 3 là ahamove
     */
    viewResult(type) {
        switch (type) {
            case 1:
                this.viewResultGHN();
                break;
            case 2:
                this.viewResultGHTK();
                break;
            case 3:
                this.viewResultAhamove();
                break;
        }
    }
    viewResultGHN() {
        this.vhComponent.showLoading('', 'transparent-loading').then(() => {
            let process = [];
            this.serviceGHN.forEach(item => process.push(this.ghnService.calculate_delivery_fee(this.delivery.token, this.prepareInfo(item.service_id))));
            Promise.all(process).then((result) => {
                this.vhComponent.hideLoading(0);
                this.resultFeesGHN = result.map((item, index) => {
                    var _a;
                    return Object.assign(Object.assign({}, item.data), { short_name: (_a = this.serviceGHN[index]) === null || _a === void 0 ? void 0 : _a.short_name });
                });
            }).catch(err => { this.messageError(); this.vhComponent.hideLoading(0); });
        });
    }
    viewResultGHTK() {
        this.resultFeesGHTK = [];
        let json = {
            shop_id: this.delivery.shop_id, province: this.dataAddress.ProvinceName, token: this.delivery.token,
            district: this.dataAddress.DistrictName, weight: this.dataProduct.weight / 1000, insurance_value: 0,
        };
        this.vhComponent.showLoading('', 'transparent-loading').then(() => {
            Promise.all([
                this.ghtkService.calculateFeeGhtk(json, 'road'),
                this.ghtkService.calculateFeeGhtk(json, 'fly')
            ]).then((result) => {
                result.forEach((item, index) => {
                    var _a, _b;
                    if (((_a = item.fee) === null || _a === void 0 ? void 0 : _a.delivery) && index == 0)
                        this.resultFeesGHTK.push(Object.assign(Object.assign({}, item.fee), { short_name: 'Standard' }));
                    if (((_b = item.fee) === null || _b === void 0 ? void 0 : _b.delivery) && index == 1 && item.fee.fee != this.resultFeesGHTK[0].fee)
                        this.resultFeesGHTK.push(Object.assign(Object.assign({}, item.fee), { short_name: 'Fast' }));
                });
                this.vhComponent.hideLoading(0);
            }).catch(err => { this.vhComponent.hideLoading(0); this.messageError(); });
        });
    }
    prepareDataCalculate() {
        const data = {
            token: this.delivery.token,
            services: this.dataAddress.ProvinceID == 202 ? this.services_SGN : this.services_HAN,
            path: [
                { address: this.formatAddressAhamove(this.delivery.address, this.delivery.ward, this.delivery.district, this.delivery.province) },
                { address: this.formatAddressAhamove(this.dataAddress.address, this.dataAddress.WardName, this.dataAddress.DistrictName, this.dataAddress.ProvinceName), cod: 0 }
            ]
        };
        return data;
    }
    /**Format địa chỉ của ahamove */
    formatAddressAhamove(address, ward, district, province) {
        return address + ", " + ward + ", " + district + ", " + province;
    }
    viewResultAhamove() {
        this.resultFeesAhamove = [];
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.ahamoveService.calculateFeeAhamove(this.prepareDataCalculate()).then((res) => {
                this.vhComponent.hideLoading(0);
                res.forEach(item => {
                    if (item.total_fee && item.total_fee >= 0) {
                        let data = this.filterTitleServiceAhamove(item._id);
                        this.resultFeesAhamove.push(Object.assign({ short_name: data.title, description: data.description }, item));
                    }
                });
            }).catch(err => { this.messageError(); this.vhComponent.hideLoading(0); });
        });
    }
    filterTitleServiceAhamove(id) {
        let title = '';
        let description = '';
        switch (id) {
            case 'SGN-BIKE':
                title = 'Over speed';
                description = 'Deliver within an hour';
                break;
            case 'SGN-EXPRESS':
                title = 'Near delivery';
                description = 'Super fast delivery only 30 minutes';
                break;
            case 'SGN-POOL':
                title = 'Dirt cheap';
                description = 'Save 20%, 2-hour delivery';
                break;
            case 'SGN-SAMEDAY':
                title = '4-Hour';
                description = 'Delivery within the city, committed in 4 hours';
                break;
            case 'SGN-TRICYCLE':
                title = 'Delivery tricycle';
                description = 'Tricycle service description';
                break;
            case 'SGN-TRUCK-500':
                title = '500kg truck';
                description = 'Delivered by small truck';
                break;
            case 'SGN-TRUCK-2000':
                title = '2000kg truct';
                description = 'Delivered by big truck';
                break;
            case 'HAN-BIKE':
                title = 'Over speed';
                description = 'Deliver within an hour';
                break;
            case 'HAN-EXPRESS':
                title = 'Near delivery';
                description = 'Super fast delivery only 30 minutes';
                break;
            case 'HAN-POOL':
                title = 'Dirt cheap';
                description = 'Save 20%, 2-hour delivery';
                break;
            case 'HAN-SAMEDAY':
                title = '4-Hour';
                description = 'Delivery within the city, committed in 4 hours';
                break;
        }
        return {
            title: title,
            description: description
        };
    }
}
CheckFeesComponent.ɵfac = function CheckFeesComponent_Factory(t) { return new (t || CheckFeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghnService_ghn_service__WEBPACK_IMPORTED_MODULE_1__.GhnService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_2__.GhtkService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ahamoveService_ahamove_service__WEBPACK_IMPORTED_MODULE_3__.AhamoveService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm)); };
CheckFeesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CheckFeesComponent, selectors: [["app-check-fees"]], inputs: { id_delivery: "id_delivery", visibleCheckFees: "visibleCheckFees" }, outputs: { hideModalCheckFees: "hideModalCheckFees" }, decls: 3, vars: 10, consts: [[3, "nzWidth", "nzMaskClosable", "nzVisible", "nzClosable", "nzBodyStyle", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], ["nz-row", "", "nzGutter", "16", 1, "modal-check-fees"], ["nz-col", "", "nzSpan", "24", 1, "logo"], ["alt", "", 3, "src", 4, "ngIf"], ["nz-col", "", "nzSpan", "8", 4, "ngIf"], ["nz-col", "", "nzSpan", "8"], ["nzFor", "ProvinceID", 1, "text-left", 3, "nzSpan"], [3, "nzSpan"], [3, "nzShowSearch", "ngModel", "nzPlaceHolder", "nzFocus", "ngModelChange"], [4, "ngFor", "ngForOf"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], ["nzFor", "DistrictID", 1, "text-left", 3, "nzSpan"], [3, "ngModel", "nzDisabled", "nzShowSearch", "nzPlaceHolder", "ngModelChange", "nzFocus"], ["nzFor", "WardCode", 1, "text-left", 3, "nzSpan"], ["nz-col", "", "nzSpan", "6", 4, "ngIf"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "8", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-green", 2, "width", "fit-content !important", 3, "disabled", "click"], ["alt", "", 3, "src"], ["nzFor", "Address", 1, "text-left", 3, "nzSpan"], ["placeholder", "14A C\u1ED9ng H\u00F2a", "type", "text", "nz-input", "", 2, "border-radius", "8px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"], ["nz-col", "", "nzSpan", "6"], ["nzFor", "Length", 1, "text-left", 3, "nzSpan"], ["nz-input", "", "required", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], ["nzFor", "Width", 1, "text-left", 3, "nzSpan"], ["nzFor", "Height", 1, "text-left", 3, "nzSpan"], ["nzFor", "Weight", 1, "text-left", 3, "nzSpan"], [1, "fees-item"], [1, "name"], [1, "price"], [1, "fees-item-ahamove"], [1, "sub-name"]], template: function CheckFeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzVisibleChange", function CheckFeesComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.visibleCheckFees = $event; })("nzOnCancel", function CheckFeesComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.hideModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CheckFeesComponent_ng_container_2_Template, 50, 54, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzWidth", 800)("nzMaskClosable", false)("nzVisible", ctx.visibleCheckFees)("nzClosable", true)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0))("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 7, "Check shipping fee_"))("nzFooter", null);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".modal-check-fees[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.modal-check-fees[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.modal-check-fees[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.modal-check-fees[_ngcontent-%COMP%]   .fees-item[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid var(--ion-color-vh-green);\n  border-radius: 8px;\n  text-align: center;\n  padding: 20px;\n  font-size: 1.2rem;\n  margin: 8px auto;\n}\n.modal-check-fees[_ngcontent-%COMP%]   .fees-item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.modal-check-fees[_ngcontent-%COMP%]   .fees-item-ahamove[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid var(--ion-color-vh-green);\n  border-radius: 8px;\n  padding: 8px;\n  font-size: 0.9rem;\n  margin: 8px 0;\n}\n.modal-check-fees[_ngcontent-%COMP%]   .fees-item-ahamove[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n}\n.modal-check-fees[_ngcontent-%COMP%]   .fees-item-ahamove[_ngcontent-%COMP%]   .sub-name[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--ion-color-vh-orange);\n}\n.modal-check-fees[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%], .modal-check-fees[_ngcontent-%COMP%]   nz-input-number[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n}\n.modal-check-fees[_ngcontent-%COMP%]   nz-form-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWZlZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFEUTtFQUNJLFlBQUE7QUFHWjtBQUFJO0VBQ0ksVUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNJLGdDQUFBO0FBR1o7QUFBSTtFQUNJLFVBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FBR1o7QUFEUTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7QUFHWjtBQUFJOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxpQkFBQTtBQUVSIiwiZmlsZSI6ImNoZWNrLWZlZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY2hlY2stZmVlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mZWVzLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbWFyZ2luOiA4cHggYXV0bztcclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mZWVzLWl0ZW0tYWhhbW92ZSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Yi1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtb3JhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3QsXHJcbiAgICBuei1pbnB1dC1udW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICAgIG56LWZvcm0tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 42786:
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/customer-profile/customer-profile.component.ts ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerProfileComponent": () => (/* binding */ CustomerProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);






function CustomerProfileComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 21, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 23, "Customer name"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 25, "Phone number"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 27, "Email"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 29, "Gender"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 31, ctx_r0.customer.gender), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 33, "Date of birth"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 35, ctx_r0.customer.datebirth, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 38, "Address"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 40, "Country"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 42, "Province"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.province, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 44, "District"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.district, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 46, "Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.note, "");
} }
class CustomerProfileComponent {
    constructor() {
        this.visibleInfoCustomer = false;
        this.closeInfoCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    goBack() {
        this.closeInfoCustomer.emit(false);
    }
}
CustomerProfileComponent.ɵfac = function CustomerProfileComponent_Factory(t) { return new (t || CustomerProfileComponent)(); };
CustomerProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerProfileComponent, selectors: [["app-customer-profile"]], inputs: { visibleInfoCustomer: "visibleInfoCustomer", customer: ["infoSender", "customer"] }, outputs: { closeInfoCustomer: "closeInfoCustomer" }, decls: 2, vars: 4, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], ["nz-row", "", 1, "info-customer"], ["nz-col", "", "nzSpan", "24"]], template: function CustomerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function CustomerProfileComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerProfileComponent_ng_container_1_Template, 67, 48, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzTitle", null)("nzVisible", ctx.visibleInfoCustomer);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: [".info-customer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 5px 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.2 rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJjdXN0b21lci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY3VzdG9tZXIge1xyXG4gIGRpdiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG59XHJcbmgzIHtcclxuICBmb250LXNpemU6IDEuMiByZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 39129:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/customer/customer.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function CustomerComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzValue", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r1.name, " - ", item_r1.phone, " ");
} }
class CustomerComponent {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.closeAndReceiveCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.debt = null;
        this.customerList = [];
        this.searchList = [];
        this.searchList = [...this.customerList];
    }
    ngOnInit() {
        this.getData();
    }
    ngOnDestroy() {
        this.observableCustomers.unsubscribe();
    }
    getData() {
        this.observableCustomers = this.vhQuerySales.getObservableLocalCustomers().subscribe((localCustomers) => {
            this.customerList = localCustomers.filter(customer => {
                if (customer['_id'] != "id_retail") {
                    if (this.debt == null)
                        return true;
                    else if (customer['debt_enable'] == this.debt)
                        return true;
                    else
                        return false;
                }
                return false;
            });
            this.id_customer = this.id_customer ? this.id_customer : this.customerList[0]._id;
            this.searchList = this.customerList;
        });
    }
    cancel(value) {
        this.closeAndReceiveCustomer.emit(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.customerList, ['name', 'phone']);
        else
            this.searchList = this.customerList;
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQuerySales)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], inputs: { id_customer: "id_customer" }, outputs: { closeAndReceiveCustomer: "closeAndReceiveCustomer" }, decls: 3, vars: 6, consts: [["nzShowSearch", "", 1, "cus-select", 3, "ngModel", "nzServerSearch", "nzPlaceHolder", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.cancel($event); })("nzOnSearch", function CustomerComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerComponent_nz_option_2_Template, 1, 3, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "Select customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id_customer)("nzServerSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--ion-color-vh-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoiY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4209:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/delivery/delivery.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryComponent": () => (/* binding */ DeliveryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);







function DeliveryComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzValue", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", item_r1.name);
} }
class DeliveryComponent {
    constructor(vhQuerySales, languageService) {
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.closeAndReceiveDelivery = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.deliveryList = this.vhQuerySales.getlocalDeliverys().filter(item => item.active);
        this.deliveryList.unshift({
            name: this.languageService.translate("None"),
            _id: '',
            type: 0
        });
        if (this.id_delivery)
            this.id_delivery = this.deliveryList[0]._id;
    }
    selectDelivery(item) {
        if (item) {
            this.closeAndReceiveDelivery.emit(item);
        }
        this.closeAndReceiveDelivery.emit(false);
    }
}
DeliveryComponent.ɵfac = function DeliveryComponent_Factory(t) { return new (t || DeliveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService)); };
DeliveryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeliveryComponent, selectors: [["app-delivery"]], inputs: { id_delivery: "id_delivery" }, outputs: { closeAndReceiveDelivery: "closeAndReceiveDelivery" }, decls: 2, vars: 2, consts: [["nzBorderless", "", 1, "cus-select", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function DeliveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DeliveryComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectDelivery($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DeliveryComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.id_delivery);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.deliveryList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzOptionComponent], styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--ion-color-vh-black);\n  text-align: end;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 89861:
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/fb-create-order/fb-create-order.component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FbCreateOrderComponent": () => (/* binding */ FbCreateOrderComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../components/search/search-product/search-product.component */ 99767);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function FbCreateOrderComponent_div_12_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.subComboName);
} }
function FbCreateOrderComponent_div_12_del_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.price_origin > item_r8.price ? ctx_r10.vhAlgorithm.vhcurrencyunit(item_r8.price_origin) : "", " ");
} }
function FbCreateOrderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function FbCreateOrderComponent_div_12_Template_div_nzOnConfirm_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r8 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.deleteGoods(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FbCreateOrderComponent_div_12_p_8_Template, 2, 1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FbCreateOrderComponent_div_12_del_12_Template, 2, 1, "del", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nz-input-number", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FbCreateOrderComponent_div_12_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r8 = restoredCtx.$implicit; return item_r8.quantity = $event; })("ngModelChange", function FbCreateOrderComponent_div_12_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r8 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.checkQuantityProduct(item_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 11, "Are you sure to delete"), " ", item_r8.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r8.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(item_r8.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 1)("nzStep", 1)("ngModel", item_r8.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(item_r8.price * item_r8.quantity));
} }
function FbCreateOrderComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Please select a product"), " ");
} }
function FbCreateOrderComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function FbCreateOrderComponent_div_24_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.vhAlgorithm.vhcurrencyunit(ctx_r2.invoice.getDiscount()));
} }
function FbCreateOrderComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function FbCreateOrderComponent_div_25_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.vhAlgorithm.vhcurrencyunit(ctx_r3.invoice.getFee()));
} }
function FbCreateOrderComponent_div_26_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 46);
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzValue", item_r24._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r23.vhAlgorithm.vhpercent(item_r24.value / 100));
} }
function FbCreateOrderComponent_div_26_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FbCreateOrderComponent_div_26_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r25.id_tax = $event; })("ngModelChange", function FbCreateOrderComponent_div_26_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r27.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FbCreateOrderComponent_div_26_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r21.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r21.listTax);
} }
function FbCreateOrderComponent_div_26_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FbCreateOrderComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FbCreateOrderComponent_div_26_nz_select_5_Template, 2, 2, "nz-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FbCreateOrderComponent_div_26_span_6_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoice.getTaxValue()), "");
} }
function FbCreateOrderComponent_img_40_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FbCreateOrderComponent_img_40_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FbCreateOrderComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(ctx_r6.invoice.getTotalATax() - ctx_r6.invoice.getPayment()), " ");
} }
function FbCreateOrderComponent_app_search_product_51_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-search-product", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeSearchProductList", function FbCreateOrderComponent_app_search_product_51_Template_app_search_product_closeSearchProductList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.closeSearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("searchProductList", ctx_r7.searchProductList)("default_price_type", ctx_r7.default_price_type);
} }
class FbCreateOrderComponent {
    constructor(vhAuth, vhQuerySales, vhComponent, lang, vhAlgorithm) {
        this.vhAuth = vhAuth;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.searchProductList = false;
        this.default_price_type = 1;
        this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_0__.VhSaleInvoices();
        this.employee = {};
        this.promotions = [];
        this.listTax = [];
        this.display_promotion_selling_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        // ----set customer-----
        this.radioValue = 1;
        // -------modal edit pay---------
        this.edit_pay = false;
    }
    ngOnInit() {
        // set nhân viên mặc định
        if (!this.invoice.getIdEmployee())
            this.invoice.setIdEmployee(this.vhAuth.getUser()._id);
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.getIdEmployee());
        this.invoice.setIdBranch(this.vhQuerySales.getDefaultBranch()._id);
        if (this.vhAuth.checkMyPermission('default_price_type_1'))
            this.default_price_type = 1;
        else if (this.vhAuth.checkMyPermission('default_price_type_2'))
            this.default_price_type = 2;
        this.invoice.setPriceType(this.default_price_type);
        // this.invoice.setPriceType(this.default_price_type)
    }
    /**HÀM KIỂM TRA KHUYẾN MÃI */
    checkPromotions(product) {
        return new Promise(resolve => {
            for (let i = 0; i < this.promotions.length; i++) {
                let promotion = this.promotions[i].promotion_detail.find(item => item.id_product == product._id);
                if (promotion) {
                    this.vhComponent.showToast(5000, `${product.name} ${this.lang.translate("is getting a")} ${this.promotions[i].promotion.type == 1 ? this.vhAlgorithm.vhcurrencyunit_symbol(promotion.discount) : this.vhAlgorithm.vhpercent(promotion.discount / 100)} ${this.lang.translate("discount from")} ${this.promotions[i].promotion.name}`, "success-toast");
                    resolve(promotion);
                    break;
                }
            }
            resolve(null);
        });
    }
    closeSearch(data) {
        if (data) {
            this.checkPromotions(data).then(promotion => {
                let price = this.default_price_type == 1 ? data.price : data.price2 ? data.price2 : data.price; // check 2 đk là kiểu giá bán và có giá bán sỉ hay ko
                this.invoice.addInvoiceDetail(Object.assign(Object.assign({}, data), { price: price }), promotion ? promotion.new_price : null);
            });
        }
        this.searchProductList = false;
    }
    /**
    *  sự kiện nhận thay đổi giá từ output component app-change-price-type
    * @event : boolean | null
    */
    changePriceType(event) {
        if (event != null) { // nếu có thay đổi kiểu giá bán thì cập nhật lại giá các sản phẩm thành giá bán sỉ
            this.default_price_type = event;
            if (this.invoice.getInvoiceDetail().length) { // nếu có  length mơi update
                let bill_details = this.invoice.getInvoiceDetail();
                for (let i in bill_details) {
                    let price_update = 0;
                    let product = this.vhQuerySales.getlocalDetailProduct(bill_details[i].id_subproduct ? bill_details[i].id_subproduct : bill_details[i].id_product);
                    product = Object.assign(Object.assign({}, product), this.vhQuerySales.getUnit_byRatio(product.units, bill_details[i].ratio));
                    if (event == 1) {
                        price_update = product.price;
                    }
                    else {
                        price_update = product.price2 ? product.price2 : product.price;
                    }
                    bill_details[i].price = price_update;
                    bill_details[i].price_origin = price_update;
                }
                this.invoice.setSubTotal();
            }
            this.invoice.setPriceType(event);
        }
    }
    deleteGoods(detail) {
        this.invoice.removeInvoiceDetail(detail.id_product);
    }
    checkQuantityProduct(product, event) {
        if (!event)
            product.quantity = 1;
        this.invoice.setSubTotal();
    }
    openEditUnitPrice(detail) {
        this.tempDetail = detail;
        this.isVisibleEditUnitPrice = true;
        this.vhAlgorithm.waitingStack().then(() => {
            this.unit_price = this.vhAlgorithm.vhnumeral('.unit_price');
        });
    }
    handleEditUnit() {
        if (this.unit_price.getRawValue() != '' && this.unit_price.getRawValue() >= 0) {
            this.tempDetail.price = parseFloat(this.unit_price.getRawValue());
            this.invoice.setSubTotal();
            this.isVisibleEditUnitPrice = false;
        }
        else {
            this.vhComponent.showToast(5000, this.lang.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    handleCancelEditUnit() { this.isVisibleEditUnitPrice = false; }
    // -------set employee-------
    closeAndReceiveEmployee(event) {
        if (event) {
            this.invoice.setIdEmployee(event);
        }
    }
    closeAndReceiveCustomer(event) {
        if (event) {
            this.invoice.setIdPartner(event);
            if (!this.vhQuerySales.getlocalCustomer(event).debt_enable)
                this.invoice.setPayment(this.invoice.getTotalATax());
        }
    }
    changeCustomerType(event) {
        if (this.radioValue == 1) {
            this.invoice.setIdPartner("id_retail");
            this.invoice.setPayment(this.invoice.getTotalATax());
        }
    }
    // ----set delivery ------
    closeAndReceiveDelivery(event) {
        if (event) {
            this.invoice.setIdDelivery(event);
        }
    }
    closeAndGetValuePayment(event) {
        if (event[0] == 1 || event[0] == 2) {
            this.setPaymentType(event[0]);
        }
        else if (event[0] == 3) {
            this.setPaymentType(event[0], event[1]);
        }
    }
    setPaymentType(type, id_wallet) {
        this.invoice.setPaymentType(type);
        switch (type) {
            case 1: {
                this.invoice.setIdWallet('id_cash');
                this.invoice.setPayment(this.invoice.getPayment() ? this.invoice.getPayment() : null);
                break;
            }
            case 2: {
                this.invoice.setPayment(0);
                this.invoice.setIdWallet(null);
                this.invoice.setCash(0);
                break;
            }
            case 3: {
                if (id_wallet) {
                    this.invoice.setIdWallet(id_wallet);
                    this.invoice.setPayment(this.invoice.getPayment() ? this.invoice.getPayment() : null);
                    break;
                }
            }
        }
        ;
    }
    setPickerTime(event) {
        this.invoice.setDate(event);
    }
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.setTax(tax.value);
    }
    editDiscount() {
        if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0) {
            this.invoice.setDiscount(parseFloat(this.discount_price.getRawValue()));
        }
        else {
            document.getElementById("discount-price")['value'] = this.invoice.getDiscount();
            this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
        }
    }
    editFee() {
        if (this.invoice_fee.getRawValue() && this.invoice_fee.getRawValue() >= 0) {
            this.invoice.setFee(parseFloat(this.invoice_fee.getRawValue()));
        }
        else {
            document.getElementById("invoice-fee")['value'] = this.invoice.getFee();
            this.invoice_fee = this.vhAlgorithm.vhnumeral('.invoice-fee');
        }
    }
    showModalEditTotalPay() {
        if (this.invoice.getPaymentType() != 2 && this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner()).debt_enable) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.edit_paytotal = this.vhAlgorithm.vhnumeral(".edit-pay");
            });
            this.edit_pay = true;
        }
        else if (!this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner()).debt_enable) {
            this.vhComponent.showToast(5000, this.lang.translate("This customer is not allowed to debt"), "alert-toast");
        }
    }
    handleEditPay() {
        if (this.edit_paytotal.getRawValue() >= 0 && this.edit_paytotal.getRawValue() <= this.invoice.getTotalATax()) {
            this.invoice.setPayment(parseFloat(this.edit_paytotal.getRawValue()));
        }
        this.edit_pay = false;
    }
    handleCancelEditPay() {
        this.edit_pay = false;
    }
    payInvoice(bill_type, print) {
    }
}
FbCreateOrderComponent.ɵfac = function FbCreateOrderComponent_Factory(t) { return new (t || FbCreateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm)); };
FbCreateOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FbCreateOrderComponent, selectors: [["app-fb-create-order"]], decls: 52, vars: 34, consts: [[1, "fb-create-order"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "show-cart", "d-flex"], [1, "d-flex", 3, "click"], ["nz-icon", "", "nzType", "plus-circle", "nzTheme", "outline", 1, "icon"], [3, "ngModel", "ngModelChange"], ["nzLabel", "Gi\u00E1 b\u00E1n l\u1EBB", 3, "nzValue"], ["nzLabel", "Gi\u00E1 b\u00E1n bu\u00F4n", 3, "nzValue"], ["nz-col", "", "nzSpan", "24", 1, "fb-create-order-cart"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 1, "d-flex"], ["class", "sales-bills-content-discount d-flex", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-fee d-flex", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax d-flex", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total", "d-flex"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay", "d-flex"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest d-flex", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type", "d-flex"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [1, "invoiceDetail-item"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-col", "", "nzSpan", "1", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "13"], [2, "font-weight", "bold", "margin-bottom", "0"], [1, "max-width-two-line"], ["style", "margin-left:5px;font-size: 0.7rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "right"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "5", 2, "text-align", "right"], [2, "margin-left", "5px", "font-size", "0.7rem"], [2, "text-align", "center"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", "d-flex"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee", "d-flex"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "border_bottom", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax", "d-flex"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest", "d-flex"], [3, "searchProductList", "default_price_type", "closeSearchProductList"]], template: function FbCreateOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FbCreateOrderComponent_Template_div_click_3_listener() { return ctx.searchProductList = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Th\u00EAm s\u1EA3n ph\u1EA9m");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nz-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FbCreateOrderComponent_Template_nz_select_ngModelChange_8_listener($event) { return ctx.default_price_type = $event; })("ngModelChange", function FbCreateOrderComponent_Template_nz_select_ngModelChange_8_listener($event) { return ctx.changePriceType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "nz-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FbCreateOrderComponent_div_12_Template, 19, 13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FbCreateOrderComponent_ng_container_13_Template, 4, 3, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, FbCreateOrderComponent_div_24_Template, 5, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, FbCreateOrderComponent_div_25_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, FbCreateOrderComponent_div_26_Template, 9, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, FbCreateOrderComponent_img_40_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, FbCreateOrderComponent_div_41_Template, 6, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FbCreateOrderComponent_Template_button_click_45_listener() { return ctx.payInvoice(1, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FbCreateOrderComponent_Template_button_click_48_listener() { return ctx.payInvoice(1, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, FbCreateOrderComponent_app_search_product_51_Template, 1, 2, "app-search-product", 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.default_price_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.invoice.getInvoiceDetail());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.invoice.getInvoiceDetail().length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 22, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 24, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getSubTotal()));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_discount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 26, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 28, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getPayment()), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.invoice.getPaymentType() != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.invoice.getInvoiceDetail().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 30, "Pay & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.invoice.getInvoiceDetail().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 32, "Pay"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchProductList);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_15__.NzInputNumberComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_3__.SearchProductComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".fb-create-order[_ngcontent-%COMP%]   .show-cart[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  border-bottom: 1px solid #8e8e9326;\n  padding: 8px 0;\n  text-align: center;\n  cursor: pointer;\n}\n.fb-create-order[_ngcontent-%COMP%]   .show-cart[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.fb-create-order[_ngcontent-%COMP%]   .show-cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%] {\n  padding: 12px 0;\n}\n.fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.8rem;\n}\n.fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\n.fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   nz-input-number[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  margin: 8px 12px;\n  border: 1px solid #e3e9ed;\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 35%;\n  text-align: end;\n  padding: 0;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-end;\n  justify-content: space-between;\n  padding: 4px 20px;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.8rem;\n  width: 49% !important;\n  height: 45px !important;\n}\n.fb-create-order[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.8rem;\n  width: 49% !important;\n  height: 45px !important;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZiLWNyZWF0ZS1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUFZO0VBQ0ksZUFBQTtBQUVoQjtBQUFZO0VBQ0ksNkJBQUE7RUFDQSw2QkFBQTtBQUVoQjtBQUFZO0VBQ0ksV0FBQTtBQUVoQjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7QUFDWjtBQUFZO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBRWhCO0FBR1k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFEaEI7QUFLWTtFQUNJLFVBQUE7QUFIaEI7QUFPWTtFQUNJLGVBQUE7QUFMaEI7QUFPWTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFMaEI7QUFRUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBTlo7QUFPWTtFQUNJLFdBQUE7QUFMaEI7QUFTWTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBUGhCO0FBV0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBVFI7QUFVUTtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFSWjtBQVVRO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBUlo7QUFZQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVEoiLCJmaWxlIjoiZmItY3JlYXRlLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZiLWNyZWF0ZS1vcmRlciB7XHJcbiAgICAuc2hvdy1jYXJ0IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhlOGU5MzI2O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mYi1jcmVhdGUtb3JkZXItY2FydCB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgIC5pbnZvaWNlRGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAmLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG56LWlucHV0LW51bWJlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDhweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2U5ZWQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1kaXNjb3VudCxcclxuICAgICAgICAmLWZlZSB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGF4IHtcclxuICAgICAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcGF5IHtcclxuICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXBheW1lbnRfdHlwZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgYXBwLXRheCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLW5vdGUge1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zYWxlcy1iaWxscy1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xyXG4gICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 62331:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/fb-info-user/fb-info-user.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FbInfoUserComponent": () => (/* binding */ FbInfoUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-customer/add-customer.component */ 850);
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer-profile/customer-profile.component */ 42786);









function FbInfoUserComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FbInfoUserComponent_i_7_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.showDrawerAddCusomer = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FbInfoUserComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FbInfoUserComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.visibleInfoCustomer = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FbInfoUserComponent_app_add_customer_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-add-customer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeAddCustomer", function FbInfoUserComponent_app_add_customer_21_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infoSender", ctx_r2.infoSender)("showDrawerAddCusomer", ctx_r2.showDrawerAddCusomer);
} }
function FbInfoUserComponent_app_customer_profile_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-customer-profile", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeInfoCustomer", function FbInfoUserComponent_app_customer_profile_22_Template_app_customer_profile_closeInfoCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.closeInfoCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infoSender", ctx_r3.infoSender)("visibleInfoCustomer", ctx_r3.visibleInfoCustomer);
} }
class FbInfoUserComponent {
    constructor(vhQuerySales) {
        this.vhQuerySales = vhQuerySales;
        this.infoSender = {};
        this.addCustomerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.showDrawerAddCusomer = false;
        this.visibleInfoCustomer = false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.infoSender) {
            this.infoSender = changes.infoSender.currentValue;
            this.getLocalCustomer();
        }
    }
    getLocalCustomer() {
        let person = this.vhQuerySales.getlocalCustomers().filter(item => item.type != 3).find(item => {
            if (item.email) {
                let email = this.infoSender.id + '@facebook.com';
                if (email == item.email)
                    return true;
            }
        });
        person && (this.infoSender = Object.assign(Object.assign({}, this.infoSender), person));
    }
    closeAddCustomer(result) {
        this.showDrawerAddCusomer = false;
        if (result) {
            this.addCustomerEvent.emit(result);
            this.infoSender = Object.assign(Object.assign({}, result), this.infoSender);
        }
    }
    closeInfoCustomer(event) {
        this.visibleInfoCustomer = false;
    }
}
FbInfoUserComponent.ɵfac = function FbInfoUserComponent_Factory(t) { return new (t || FbInfoUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales)); };
FbInfoUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FbInfoUserComponent, selectors: [["app-fb-info-user"]], inputs: { infoSender: "infoSender" }, outputs: { addCustomerEvent: "addCustomerEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 9, consts: [[1, "fb-info-user"], [1, "fb-info-user-image"], ["width", "100%", "alt", "", 3, "src"], [1, "fb-info-user-info"], [1, "name", "mt-4"], ["style", "cursor: pointer;", "nz-tooltip", "", "nzTooltipPlacement", "top", "nzTooltipTitle", "Th\u00EAm nhanh kh\u00E1ch h\u00E0ng", "nz-icon", "", "nzType", "edit", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "nz-tooltip", "", "nzTooltipPlacement", "top", "nzTooltipTitle", "Xem th\u00F4ng tin kh\u00E1ch h\u00E0ng", "nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 3, "click", 4, "ngIf"], [1, "phone", "mt-4"], ["nz-icon", "", "nzType", "phone", "nzTheme", "outline"], [1, "email", "mt-4"], ["nz-icon", "", "nzType", "mail", "nzTheme", "outline"], [1, "address", "mt-4"], ["nz-icon", "", "nzType", "home", "nzTheme", "outline"], [3, "infoSender", "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], [3, "infoSender", "visibleInfoCustomer", "closeInfoCustomer", 4, "ngIf"], ["nz-tooltip", "", "nzTooltipPlacement", "top", "nzTooltipTitle", "Th\u00EAm nhanh kh\u00E1ch h\u00E0ng", "nz-icon", "", "nzType", "edit", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], ["nz-tooltip", "", "nzTooltipPlacement", "top", "nzTooltipTitle", "Xem th\u00F4ng tin kh\u00E1ch h\u00E0ng", "nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], [3, "infoSender", "showDrawerAddCusomer", "closeAddCustomer"], [3, "infoSender", "visibleInfoCustomer", "closeInfoCustomer"]], template: function FbInfoUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FbInfoUserComponent_i_7_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FbInfoUserComponent_i_8_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, FbInfoUserComponent_app_add_customer_21_Template, 1, 2, "app-add-customer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FbInfoUserComponent_app_customer_profile_22_Template, 1, 2, "app-customer-profile", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.infoSender["profile_pic"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.infoSender.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.infoSender._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.infoSender._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.infoSender.phone || "Ch\u01B0a c\u00F3 th\u00F4ng tin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.infoSender.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.infoSender.address || "Ch\u01B0a c\u00F3 th\u00F4ng tin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__.NzTooltipDirective, _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_0__.AddCustomerComponent, _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_1__.CustomerProfileComponent], styles: [".fb-info-user[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  margin-top: 4px;\n}\n.fb-info-user-image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  text-align: center;\n}\n.fb-info-user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 200px;\n  border-radius: 8px;\n}\n.fb-info-user-info[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 8px;\n}\n.fb-info-user-info[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .fb-info-user-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .fb-info-user-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #8080804d;\n  padding-bottom: 4px;\n  margin-left: 8px;\n}\n.fb-info-user[_ngcontent-%COMP%]   .mt-4[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZiLWluZm8tdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdaO0FBQUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7OztFQUdJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBQUk7RUFDSSxlQUFBO0FBRVIiLCJmaWxlIjoiZmItaW5mby11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZiLWluZm8tdXNlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgJi1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAucGhvbmUgc3BhbixcclxuICAgICAgICAuZW1haWwgc3BhbixcclxuICAgICAgICAuYWRkcmVzcyBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA0ZDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubXQtNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7356:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/staff/staff.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffComponent": () => (/* binding */ StaffComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








function StaffComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzValue", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", item_r1.name);
} }
class StaffComponent {
    constructor(vhComponent, vhAlgorithm, vhAuth) {
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.closeAndReceiveEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.employeeList = this.vhAuth.getlocalEmployees();
        this.searchList = [];
        this.searchList = [...this.employeeList];
        if (!this.id_employee && this.searchList.length) {
            this.id_employee = this.searchList[0]._id;
        }
    }
    cancel(value) {
        if (value)
            this.closeAndReceiveEmployee.emit(value);
    }
    selectEmployees(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    searchBar(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.employeeList, ['name']);
        else
            this.searchList = this.employeeList;
    }
    goBack() {
        this.closeAndReceiveEmployee.emit(false);
    }
}
StaffComponent.ɵfac = function StaffComponent_Factory(t) { return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAuth)); };
StaffComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaffComponent, selectors: [["app-staff"]], inputs: { id_employee: "id_employee" }, outputs: { closeAndReceiveEmployee: "closeAndReceiveEmployee" }, decls: 3, vars: 5, consts: [["nzBorderless", "", "nzShowSearch", "", 1, "cus-select", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function StaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StaffComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StaffComponent_nz_option_2_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, "Select employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 55%;\n}\n\n.cus-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLFVBQUE7QUFwQko7O0FBc0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBbkJKIiwiZmlsZSI6InN0YWZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbnotbGlzdCB7XHJcbi8vICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuLy8gICAgIGhlaWdodDogNDAwcHg7XHJcbi8vICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbi8vICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4vLyAgICAgbnotbGlzdC1pdGVtLW1ldGEtdGl0bGUge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIG56LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuLy8gICAgIHdpZHRoOiAwcHg7IC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbi8vIH1cclxuLy8gbnotaW5wdXQtZ3JvdXAge1xyXG4vLyAgICAgd2lkdGg6IDgwJTtcclxuLy8gICAgIGlucHV0IHtcclxuLy8gICAgICAgICB3aWR0aDogODAlO1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbi8vICAgICB9XHJcbi8vIH1cclxubnotc2VsZWN0IHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbn1cclxuLmN1cy1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2392:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/components/tax/tax.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxComponent": () => (/* binding */ TaxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 92131);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







class TaxComponent {
    constructor(vhQuerySales, languageService, vhAuth) {
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.id_customer = 'id_retail';
        this.payment_type = 1;
        this.id_wallet = 'id_cash';
        this.closeAndGetValuePayment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.listWallets = [];
        this.nzOptions = [
            { value: 1, label: this.languageService.translate("Cash"), isLeaf: true },
            { value: 2, label: this.languageService.translate("Debit"), disabled: true, isLeaf: true },
            { value: 3, label: this.languageService.translate("Account"), children: [] }
        ];
    }
    ngOnInit() {
        this.listWallets = this.vhQuerySales.getlocalWallets().filter(wallet => wallet._id != 'id_cash' && wallet.id_branch == this.vhQuerySales.getDefaultBranch()._id)
            .map(wallet => { return { label: wallet.name, value: wallet._id, isLeaf: true }; });
        this.nzOptions[2].children = this.listWallets;
        if (this.payment_type) {
            if (this.payment_type == 2 || this.payment_type == 1)
                this.type_payment = [this.payment_type];
            else if (this.payment_type == 3)
                this.type_payment = [3, this.id_wallet];
        }
    }
    onChanges(event) {
        this.closeAndGetValuePayment.emit(event);
    }
    ngOnChanges(valueChange) {
        if (valueChange.payment_type) {
            let type = valueChange.payment_type.currentValue;
            if (type == 2 || type == 1)
                this.type_payment = [this.payment_type];
            else if (type == 3)
                this.type_payment = [3, this.id_wallet];
        }
        if (valueChange.id_customer) {
            if (valueChange.id_customer.currentValue == "id_retail" || (valueChange.id_customer.currentValue != "id_retail" && !this.vhQuerySales.getlocalCustomer(valueChange.id_customer.currentValue).debt_enable)) {
                this.disableDebt();
            }
            else
                this.nzOptions[1].disabled = false;
        }
        if (this.id_customer == 'id_retail' && this.payment_type == 2) {
            this.disableDebt();
        }
    }
    disableDebt() {
        this.nzOptions[1].disabled = true;
        this.closeAndGetValuePayment.emit([1]);
        this.type_payment = [this.payment_type];
    }
}
TaxComponent.ɵfac = function TaxComponent_Factory(t) { return new (t || TaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAuth)); };
TaxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaxComponent, selectors: [["app-tax"]], inputs: { id_customer: "id_customer", payment_type: "payment_type", id_wallet: "id_wallet" }, outputs: { closeAndGetValuePayment: "closeAndGetValuePayment" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 6, consts: [[3, "nzOptions", "nzAllowClear", "ngModel", "nzPlaceHolder", "ngModelChange"]], template: function TaxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TaxComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.type_payment = $event; })("ngModelChange", function TaxComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, "Payment method"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("nzAllowClear", false)("ngModel", ctx.type_payment);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__.NzCascaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".ant-cascader-input[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRheC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FBQ0oiLCJmaWxlIjoidGF4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1jYXNjYWRlci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 74842:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-detail/conversation-detail.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationDetailComponent": () => (/* binding */ ConversationDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k57-col3/sales-k57-col3.component */ 59035);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col3/sales-k80-col3.component */ 10419);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col4/sales-k80-col4.component */ 81989);
/* harmony import */ var src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a5/sales-a5.component */ 92166);
/* harmony import */ var src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a4/sales-a4.component */ 70963);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _components_fb_info_user_fb_info_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fb-info-user/fb-info-user.component */ 62331);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _components_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/delivery/delivery.component */ 4209);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_check_fees_check_fees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/check-fees/check-fees.component */ 33161);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/staff/staff.component */ 7356);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/customer/customer.component */ 39129);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _components_tax_tax_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tax/tax.component */ 2392);
/* harmony import */ var _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../components/search/search-product/search-product.component */ 99767);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/customer-profile/customer-profile.component */ 42786);
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ 850);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











































function ConversationDetailComponent_app_fb_info_user_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-fb-info-user", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("addCustomerEvent", function ConversationDetailComponent_app_fb_info_user_2_Template_app_fb_info_user_addCustomerEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r20.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("infoSender", ctx_r0.infoSender);
} }
function ConversationDetailComponent_div_4_app_check_fees_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-check-fees", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("hideModalCheckFees", function ConversationDetailComponent_div_4_app_check_fees_9_Template_app_check_fees_hideModalCheckFees_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r23.visibleCheckFees = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visibleCheckFees", ctx_r22.visibleCheckFees)("id_delivery", ctx_r22.invoice.getIdDelivery());
} }
function ConversationDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "b", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "app-delivery", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveDelivery", function ConversationDetailComponent_div_4_Template_app_delivery_closeAndReceiveDelivery_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r25.closeAndReceiveDelivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r27.visibleCheckFees = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Tra c\u1EE9u c\u01B0\u1EDBc ph\u00ED giao h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ConversationDetailComponent_div_4_app_check_fees_9_Template, 1, 2, "app-check-fees", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 4, "Lookup shipping fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_delivery", ctx_r1.invoice.getIdDelivery());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r1.invoice.getIdDelivery());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.visibleCheckFees);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_4_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r42.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r30.name);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r51); const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r49.openModalChooseLot(data_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r46.getLotNumber(data_r45.lots, data_r45.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r54 = ctx.$implicit;
    const i_r55 = ctx.index;
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r55 == data_r45.combos.length - 1 ? combo_r54.quantity + "x " + combo_r54.name + " (" + ctx_r53.getUnit(combo_r54.units, combo_r54.ratio) + ") " : combo_r54.quantity + "x " + combo_r54.name + " (" + ctx_r53.getUnit(combo_r54.units, combo_r54.ratio) + ") " + " ,", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_p_6_span_1_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r45.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r45.price_origin > data_r45.price ? ctx_r48.vhAlgorithm.vhcurrencyunit(data_r45.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_ng_container_5_Template, 4, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_p_6_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r60); const data_r45 = restoredCtx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r59.openEditUnitPrice(data_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_del_15_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r45 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r45.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r45.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r45.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r45.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r45.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r41.vhAlgorithm.vhcurrencyunit(data_r45.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r41.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r41.vhAlgorithm.vhcurrencyunit(data_r45.price * data_r45.quantity));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_4_div_1_Template, 7, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_4_div_2_Template, 20, 8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.products);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_5_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r64.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r30.name);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r73); const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r71.openModalChooseLot(data_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r68.getLotNumber(data_r67.lots, data_r67.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r76 = ctx.$implicit;
    const i_r77 = ctx.index;
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r77 == data_r67.combos.length - 1 ? combo_r76.quantity + "x " + combo_r76.name + " (" + ctx_r75.getUnit(combo_r76.units, combo_r76.ratio) + ") " : combo_r76.quantity + "x " + combo_r76.name + " (" + ctx_r75.getUnit(combo_r76.units, combo_r76.ratio) + ") " + " ,", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_p_6_span_1_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r67.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.price_origin > data_r67.price ? ctx_r70.vhAlgorithm.vhcurrencyunit(data_r67.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_ng_container_5_Template, 4, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_p_6_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r82); const data_r67 = restoredCtx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r81.openEditUnitPrice(data_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_del_15_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r67.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r67.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r67.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r63.vhAlgorithm.vhcurrencyunit(data_r67.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r63.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r63.vhAlgorithm.vhcurrencyunit(data_r67.price * data_r67.quantity));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_5_div_1_Template, 7, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_5_div_2_Template, 20, 8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.products);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_6_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r86.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r30.name);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r95); const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r93.openModalChooseLot(data_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r90.getLotNumber(data_r89.lots, data_r89.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r98 = ctx.$implicit;
    const i_r99 = ctx.index;
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r99 == data_r89.combos.length - 1 ? combo_r98.quantity + "x " + combo_r98.name + " (" + ctx_r97.getUnit(combo_r98.units, combo_r98.ratio) + ") " : combo_r98.quantity + "x " + combo_r98.name + " (" + ctx_r97.getUnit(combo_r98.units, combo_r98.ratio) + ") " + " ,", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_p_6_span_1_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r89.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.price_origin > data_r89.price ? ctx_r92.vhAlgorithm.vhcurrencyunit(data_r89.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_ng_container_5_Template, 4, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_p_6_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r104); const data_r89 = restoredCtx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r103.openEditUnitPrice(data_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_del_15_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = ctx.$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r89.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r89.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r89.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r85.vhAlgorithm.vhcurrencyunit(data_r89.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r85.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r85.vhAlgorithm.vhcurrencyunit(data_r89.price * data_r89.quantity));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_6_div_1_Template, 7, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_6_div_2_Template, 20, 8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.products);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_7_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r108.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r30.name);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r117); const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r115.openModalChooseLot(data_r111); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r112.getLotNumber(data_r111.lots, data_r111.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r120 = ctx.$implicit;
    const i_r121 = ctx.index;
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r121 == data_r111.combos.length - 1 ? combo_r120.quantity + "x " + combo_r120.name + " (" + ctx_r119.getUnit(combo_r120.units, combo_r120.ratio) + ") " : combo_r120.quantity + "x " + combo_r120.name + " (" + ctx_r119.getUnit(combo_r120.units, combo_r120.ratio) + ") " + " ,", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_p_6_span_1_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r111.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.price_origin > data_r111.price ? ctx_r114.vhAlgorithm.vhcurrencyunit(data_r111.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_ng_container_5_Template, 4, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_p_6_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r126); const data_r111 = restoredCtx.$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r125.openEditUnitPrice(data_r111); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_del_15_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = ctx.$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r111.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r111.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r111.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r107.vhAlgorithm.vhcurrencyunit(data_r111.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r107.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r107.vhAlgorithm.vhcurrencyunit(data_r111.price * data_r111.quantity));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_7_div_1_Template, 7, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_7_div_2_Template, 20, 8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.products);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_8_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r130.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r30.name);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r139); const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r137.openModalChooseLot(data_r133); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r134.getLotNumber(data_r133.lots, data_r133.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r142 = ctx.$implicit;
    const i_r143 = ctx.index;
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r143 == data_r133.combos.length - 1 ? combo_r142.quantity + "x " + combo_r142.name + " (" + ctx_r141.getUnit(combo_r142.units, combo_r142.ratio) + ") " : combo_r142.quantity + "x " + combo_r142.name + " (" + ctx_r141.getUnit(combo_r142.units, combo_r142.ratio) + ") " + " ,", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_p_6_span_1_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r133.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.price_origin > data_r133.price ? ctx_r136.vhAlgorithm.vhcurrencyunit(data_r133.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_ng_container_5_Template, 4, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_p_6_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r148); const data_r133 = restoredCtx.$implicit; const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r147.openEditUnitPrice(data_r133); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_del_15_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = ctx.$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r133.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r133.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r133.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r129.vhAlgorithm.vhcurrencyunit(data_r133.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r129.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r129.vhAlgorithm.vhcurrencyunit(data_r133.price * data_r133.quantity));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_8_div_1_Template, 7, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_8_div_2_Template, 20, 8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.products);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_9_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r152.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_9_div_1_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r154.showProductGift = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", item_r30.name, " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r163); const data_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r161.openModalChooseLot(data_r156); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r158.getLotNumber(data_r156.lots, data_r156.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r166 = ctx.$implicit;
    const i_r167 = ctx.index;
    const data_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r167 == data_r156.combos.length - 1 ? combo_r166.quantity + "x " + combo_r166.name + " (" + ctx_r165.getUnit(combo_r166.units, combo_r166.ratio) + ") " : combo_r166.quantity + "x " + combo_r166.name + " (" + ctx_r165.getUnit(combo_r166.units, combo_r166.ratio) + ") " + " ,", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_p_6_span_1_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r156.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r156.price_origin > data_r156.price ? ctx_r160.vhAlgorithm.vhcurrencyunit(data_r156.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_ng_container_5_Template, 4, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_p_6_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r173); const data_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r171.openEditUnitPrice(data_r156); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_del_15_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r156.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r156.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r156.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r156.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r156.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r157.vhAlgorithm.vhcurrencyunit(data_r156.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r157.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r157.vhAlgorithm.vhcurrencyunit(data_r156.price * data_r156.quantity));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_ng_container_1_Template, 20, 8, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r156.choose);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_9_div_1_Template, 8, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_9_div_2_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.products_gift);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_10_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r178.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_10_div_1_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r179); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r180.showProductGiftType7 = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", item_r30.name, " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r189); const data_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r187.openModalChooseLot(data_r182); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r184.getLotNumber(data_r182.lots, data_r182.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r192 = ctx.$implicit;
    const i_r193 = ctx.index;
    const data_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r193 == data_r182.combos.length - 1 ? combo_r192.quantity + "x " + combo_r192.name + " (" + ctx_r191.getUnit(combo_r192.units, combo_r192.ratio) + ") " : combo_r192.quantity + "x " + combo_r192.name + " (" + ctx_r191.getUnit(combo_r192.units, combo_r192.ratio) + ") " + " ,", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_p_6_span_1_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r182.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r182.price_origin > data_r182.price ? ctx_r186.vhAlgorithm.vhcurrencyunit(data_r182.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_ng_container_5_Template, 3, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_p_6_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r199); const data_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r197.openEditUnitPrice(data_r182); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_del_15_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r182.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r182.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r182.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r182.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r182.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r183.vhAlgorithm.vhcurrencyunit(data_r182.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r183.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r183.vhAlgorithm.vhcurrencyunit(data_r182.price * data_r182.quantity));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_ng_container_1_Template, 20, 8, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r182.choose);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_10_div_1_Template, 8, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_10_div_2_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.products_gift.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.products_gift);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_11_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_11_ng_container_8_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r208); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r206.openModalChooseLot(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r202.getLotNumber(item_r30.lots, item_r30.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_11_p_9_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_11_p_9_span_1_ng_container_2_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r216); const combo_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](5); return ctx_r214.openModalChooseLot(combo_r211); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r213.getLotNumber(combo_r211.lots, combo_r211.id_lotproduct));
} }
function ConversationDetailComponent_div_5_div_12_ng_container_11_p_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_div_5_div_12_ng_container_11_p_9_span_1_ng_container_2_Template, 3, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r211 = ctx.$implicit;
    const i_r212 = ctx.index;
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r212 == item_r30.combos.length - 1 ? combo_r211.quantity + "x " + combo_r211.name + " (" + ctx_r210.getUnit(combo_r211.units, combo_r211.ratio) + ") " : combo_r211.quantity + "x " + combo_r211.name + " (" + ctx_r210.getUnit(combo_r211.units, combo_r211.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", combo_r211.id_lotproduct);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_11_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_5_div_12_ng_container_11_p_9_span_1_Template, 3, 2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.combos);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_11_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 80);
} if (rf & 2) {
    const i_r220 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzLabel", i_r220.unit)("nzValue", i_r220.ratio);
} }
function ConversationDetailComponent_div_5_div_12_ng_container_11_del_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r30.price_origin > item_r30.price ? ctx_r205.vhAlgorithm.vhcurrencyunit(item_r30.price_origin) : "", " ");
} }
function ConversationDetailComponent_div_5_div_12_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function ConversationDetailComponent_div_5_div_12_ng_container_11_Template_div_nzOnConfirm_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r224); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r222.deleteGoods(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ConversationDetailComponent_div_5_div_12_ng_container_11_ng_container_8_Template, 3, 1, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ConversationDetailComponent_div_5_div_12_ng_container_11_p_9_Template, 2, 1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "nz-select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_div_5_div_12_ng_container_11_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r224); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r30.ratio = $event; })("ngModelChange", function ConversationDetailComponent_div_5_div_12_ng_container_11_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r224); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r227.changeUnit($event, item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, ConversationDetailComponent_div_5_div_12_ng_container_11_nz_option_12_Template, 1, 2, "nz-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-input-number", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_div_5_div_12_ng_container_11_Template_nz_input_number_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r224); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r30.quantity = $event; })("ngModelChange", function ConversationDetailComponent_div_5_div_12_ng_container_11_Template_nz_input_number_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r224); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r231.checkQuantityProduct(item_r30, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_div_12_ng_container_11_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r224); const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r233.openEditUnitPrice(item_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, ConversationDetailComponent_div_5_div_12_ng_container_11_del_19_Template, 2, 1, "del", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 14, "Are you sure to delete"), " ", item_r30.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r30.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", item_r30.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r30.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", item_r30.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r39.vhAlgorithm.vhcurrencyunit(item_r30.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r39.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r39.vhAlgorithm.vhcurrencyunit(item_r30.price * item_r30.quantity));
} }
function ConversationDetailComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](3, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ConversationDetailComponent_div_5_div_12_ng_container_4_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_div_12_ng_container_5_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_5_div_12_ng_container_6_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ConversationDetailComponent_div_5_div_12_ng_container_7_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ConversationDetailComponent_div_5_div_12_ng_container_8_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ConversationDetailComponent_div_5_div_12_ng_container_9_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, ConversationDetailComponent_div_5_div_12_ng_container_10_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, ConversationDetailComponent_div_5_div_12_ng_container_11_Template, 24, 16, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitch", item_r30.pmtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 7);
} }
function ConversationDetailComponent_div_5_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 1, "Please select a product"), " ");
} }
function ConversationDetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r237); const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r236.searchProductList = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Th\u00EAm s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "nz-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_div_5_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r237); const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r238.default_price_type = $event; })("ngModelChange", function ConversationDetailComponent_div_5_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r237); const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r239.changePriceType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "nz-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "nz-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, ConversationDetailComponent_div_5_div_12_Template, 12, 8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, ConversationDetailComponent_div_5_ng_container_13_Template, 4, 3, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_5_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r237); const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r240.getPromotions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r2.default_price_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r2.invoice.getInvoiceDetail());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.invoice.getInvoiceDetail().length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 6, "Promotions"), "");
} }
function ConversationDetailComponent_div_6_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "app-customer", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveCustomer", function ConversationDetailComponent_div_6_ng_container_26_Template_app_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r244); const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r243.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_6_ng_container_26_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r244); const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r245.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_customer", ctx_r241.invoice.getIdPartner());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r241.invoice.getIdPartner() != "id_retail" ? "active" : "deactive");
} }
function ConversationDetailComponent_div_6_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Accumulated points"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r242.point_validity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 6, "Plus"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r242.getTotalEarningPoint());
} }
function ConversationDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "app-staff", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveEmployee", function ConversationDetailComponent_div_6_Template_app_staff_closeAndReceiveEmployee_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r247); const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r246.closeAndReceiveEmployee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "nz-date-picker", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_div_6_Template_nz_date_picker_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r247); const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r248.pickerTime = $event; })("ngModelChange", function ConversationDetailComponent_div_6_Template_nz_date_picker_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r247); const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r249.setPickerTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_6_Template_ion_icon_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r247); const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r250.showDrawerAddCusomer = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "nz-radio-group", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_div_6_Template_nz_radio_group_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r247); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r251.radioValue = $event; })("ngModelChange", function ConversationDetailComponent_div_6_Template_nz_radio_group_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r247); const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r252.changeCustomerType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, ConversationDetailComponent_div_6_ng_container_26_Template, 3, 2, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, ConversationDetailComponent_div_6_div_27_Template, 11, 8, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "app-delivery", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveDelivery", function ConversationDetailComponent_div_6_Template_app_delivery_closeAndReceiveDelivery_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r247); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r253.closeAndReceiveDelivery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 14, "Salesman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_employee", ctx_r3.invoice.getIdEmployee());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 16, "Sales date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r3.pickerTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 18, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r3.radioValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](21, 20, "Retail customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](24, 22, "Member"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r3.radioValue == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r3.radioValue == 2 && ctx_r3.invoice.getIdPartner() != "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 24, "Delivery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_delivery", ctx_r3.invoice.getIdDelivery());
} }
function ConversationDetailComponent_div_7_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Other payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r255.vhAlgorithm.vhcurrencyunit(ctx_r255.invoice.getDiscountOther()));
} }
function ConversationDetailComponent_div_7_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Discount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r256.vhAlgorithm.vhcurrencyunit(ctx_r256.discount_bill));
} }
function ConversationDetailComponent_div_7_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function ConversationDetailComponent_div_7_div_28_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r264); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r263.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r257.vhAlgorithm.vhcurrencyunit(ctx_r257.invoice.getFee()));
} }
function ConversationDetailComponent_div_7_div_29_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 123);
} if (rf & 2) {
    const item_r268 = ctx.$implicit;
    const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzValue", item_r268._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r267.vhAlgorithm.vhpercent(item_r268.value / 100));
} }
function ConversationDetailComponent_div_7_div_29_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-select", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_div_7_div_29_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r270); const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r269.id_tax = $event; })("ngModelChange", function ConversationDetailComponent_div_7_div_29_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r270); const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r271.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_div_7_div_29_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r265.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r265.listTax);
} }
function ConversationDetailComponent_div_7_div_29_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ConversationDetailComponent_div_7_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_7_div_29_nz_select_5_Template, 2, 2, "nz-select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_7_div_29_span_6_Template, 2, 0, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r258.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r258.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r258.vhAlgorithm.vhcurrencyunit(ctx_r258.invoice.getTaxValue()), "");
} }
function ConversationDetailComponent_div_7_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_7_ng_container_41_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r273); const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r272.showProductGiftType7 = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} }
function ConversationDetailComponent_div_7_img_44_Template(rf, ctx) { if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_7_img_44_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r275); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r274.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function ConversationDetailComponent_div_7_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r261.vhAlgorithm.vhcurrencyunit_symbol(ctx_r261.invoice.getTotalATax() - ctx_r261.invoice.getPayment()), " ");
} }
const _c0 = function () { return { minRows: 2, maxRows: 4 }; };
function ConversationDetailComponent_div_7_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "textarea", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_div_7_div_48_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r277); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r276.note = $event; })("blur", function ConversationDetailComponent_div_7_div_48_Template_textarea_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r277); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r278.edit_note(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "Enter note..."));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r262.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](5, _c0));
} }
function ConversationDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_7_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r280); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r279.openModalOtherDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "input", 101, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function ConversationDetailComponent_div_7_Template_input_blur_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r280); const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](22); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); ctx_r281.invoice.setPercentDiscountBill(_r254.value); return ctx_r281.editPercentDiscount(_r254.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function ConversationDetailComponent_div_7_Template_input_blur_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r280); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r282.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, ConversationDetailComponent_div_7_div_26_Template, 6, 4, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, ConversationDetailComponent_div_7_div_27_Template, 6, 4, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](28, ConversationDetailComponent_div_7_div_28_Template, 5, 4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](29, ConversationDetailComponent_div_7_div_29_Template, 9, 6, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](41, ConversationDetailComponent_div_7_ng_container_41_Template, 2, 0, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](44, ConversationDetailComponent_div_7_img_44_Template, 1, 0, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](45, ConversationDetailComponent_div_7_div_45_Template, 6, 4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "app-tax", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndGetValuePayment", function ConversationDetailComponent_div_7_Template_app_tax_closeAndGetValuePayment_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r280); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r283.closeAndGetValuePayment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](48, ConversationDetailComponent_div_7_div_48_Template, 3, 6, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 22, "Payment information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 24, "Add other payment"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 26, "SubTotal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoice.getSubTotal()));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 28, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](23, 30, ctx_r4.percent_discount_bill, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoice.getDiscount()));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.invoice.getDiscountOther());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.discount_bill > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.vhAuth.localStorageGET("show_fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.vhAuth.localStorageGET("show_tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](33, 33, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoice.getTotalATax()));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](40, 35, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.product_gift_type7.length && !ctx_r4.gotten_gift_type7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoice.getPayment()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.invoice.getPaymentType() != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.vhAuth.localStorageGET("show_rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("payment_type", ctx_r4.invoice.getPaymentType())("id_wallet", ctx_r4.invoice.getIdWallet())("id_customer", ctx_r4.invoice.getIdPartner());
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r4.vhAuth.localStorageGET("show_note"));
} }
function ConversationDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r285); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r284.payInvoice(1, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_div_8_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r285); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r286.payInvoice(1, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r5.invoice.getInvoiceDetail().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 4, "Pay & Print"), " (F2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r5.invoice.getInvoiceDetail().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 6, "Pay"), " (F1)");
} }
function ConversationDetailComponent_app_search_product_9_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-search-product", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeSearchProductList", function ConversationDetailComponent_app_search_product_9_Template_app_search_product_closeSearchProductList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r288); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r287.closeSearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("searchProductList", ctx_r6.searchProductList)("default_price_type", ctx_r6.default_price_type);
} }
function ConversationDetailComponent_nz_modal_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r289.tempDetail.price);
} }
function ConversationDetailComponent_nz_modal_20_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r293 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_nz_modal_20_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r293); const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r292.isVisibleEditUnitPrice = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_nz_modal_20_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r293); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r294.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function ConversationDetailComponent_nz_modal_20_Template(rf, ctx) { if (rf & 1) {
    const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-modal", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function ConversationDetailComponent_nz_modal_20_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r296); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r295.isVisibleEditUnitPrice = $event; })("nzOnCancel", function ConversationDetailComponent_nz_modal_20_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r296); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r297.isVisibleEditUnitPrice = false; })("nzOnOk", function ConversationDetailComponent_nz_modal_20_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r296); const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r298.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_nz_modal_20_ng_container_2_Template, 8, 7, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ConversationDetailComponent_nz_modal_20_ng_template_3_Template, 6, 6, "ng-template", null, 134, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r290)("nzVisible", ctx_r7.isVisibleEditUnitPrice);
} }
function ConversationDetailComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.invoice.getPayment()));
} }
function ConversationDetailComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_template_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r300); const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r299.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_template_24_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r300); const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r301.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r308 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", data_r308.name, "(", data_r308.unit, ") x", data_r308.quantity, " ");
} }
function ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_nz_select_4_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r312 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r312.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r312.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r312._id);
} }
function ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_nz_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-select", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_nz_select_4_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r315); const data_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r309.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_nz_select_4_nz_option_2_Template, 2, 6, "nz-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r309.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r309.lots);
} }
function ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_nz_select_4_Template, 3, 5, "nz-select", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-switch", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r318); const data_r309 = restoredCtx.$implicit; return data_r309.choose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r309 = ctx.$implicit;
    const item_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r309.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r309.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r307.getUnit(data_r309.units, data_r309.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r309.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r307.vhAlgorithm.vhcurrencyunit(data_r309.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r307.vhAlgorithm.vhcurrencyunit(data_r309.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r309.choose)("nzDisabled", ctx_r307.checkDisableChooseProductGift(item_r304) && !data_r309.choose);
} }
function ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_span_13_Template, 3, 3, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "td", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_tr_19_Template, 15, 8, "tr", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r304.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", "SL qu\u00E0 \u0111\u01B0\u1EE3c ch\u1ECDn", ": ", item_r304.promotions_maximum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 7, "List of purchased products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r304.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 9, "List of gifted products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r304.products_gift);
} }
function ConversationDetailComponent_ng_container_27_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_ng_container_27_ng_container_24_ng_container_1_Template, 20, 11, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r304 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r304.pmtype == 6);
} }
const _c1 = function () { return { y: "400px" }; };
function ConversationDetailComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, ConversationDetailComponent_ng_container_27_ng_container_24_Template, 2, 1, "ng-container", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r11.invoice.getInvoiceDetail())("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](22, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 10, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 12, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 14, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 16, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 18, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 20, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r302.data);
} }
function ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_nz_select_4_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 80);
} if (rf & 2) {
    const element_r329 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("nzLabel", "", element_r329.lot_number, " - HSD: {{element.date_exp | date : 'dd/MM/yyyy'}");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r329._id);
} }
function ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_nz_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r332 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-select", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_nz_select_4_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r332); const data_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r326.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_nz_select_4_nz_option_2_Template, 1, 2, "nz-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r326.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r326.lots);
} }
function ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_nz_select_4_Template, 3, 5, "nz-select", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-switch", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r335); const data_r326 = restoredCtx.$implicit; return data_r326.choose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r326 = ctx.$implicit;
    const item_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r326.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r326.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r325.getUnit(data_r326.units, data_r326.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r326.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r325.vhAlgorithm.vhcurrencyunit(data_r326.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r325.vhAlgorithm.vhcurrencyunit(data_r326.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r326.choose)("nzDisabled", ctx_r325.checkDisableChooseProductGift(item_r323) && !data_r326.choose);
} }
function ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_tr_7_Template, 15, 8, "tr", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r323.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", "SL qu\u00E0 \u0111\u01B0\u1EE3c ch\u1ECDn", ": ", item_r323.promotions_maximum, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r323.products_gift);
} }
function ConversationDetailComponent_ng_container_29_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_ng_container_29_ng_container_24_ng_container_1_Template, 8, 4, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r323 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r323.products_gift);
} }
function ConversationDetailComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, ConversationDetailComponent_ng_container_29_ng_container_24_Template, 2, 1, "ng-container", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r12.product_gift_type7)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](22, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 10, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 12, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 14, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 16, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 18, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 20, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r321.data);
} }
function ConversationDetailComponent_ng_container_32_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 155);
} }
function ConversationDetailComponent_ng_container_32_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "label", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r343 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", item_r343._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r343.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](8, 4, item_r343.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](11, 7, item_r343.date_exp, "dd/MM/yyyy"), " ");
} }
function ConversationDetailComponent_ng_container_32_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function ConversationDetailComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r345 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "nz-input-group", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "input", 151, 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup", function ConversationDetailComponent_ng_container_32_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r345); const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4); const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r344.searchLot(_r338.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_ng_container_32_ng_template_6_Template, 1, 0, "ng-template", null, 153, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "nz-radio-group", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_ng_container_32_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r345); const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r346.tempDetail.id_lotproduct = $event; })("ngModelChange", function ConversationDetailComponent_ng_container_32_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r345); const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r347.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ConversationDetailComponent_ng_container_32_div_9_Template, 12, 10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, ConversationDetailComponent_ng_container_32_div_10_Template, 3, 3, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzSuffix", _r339);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r13.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r13.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r13.tempDetail.lots.length);
} }
function ConversationDetailComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_template_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r349); const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r348.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_template_33_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r349); const ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r350.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r15.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 5, "Ok"));
} }
function ConversationDetailComponent_nz_modal_35_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 80);
} if (rf & 2) {
    const element_r359 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r359.lot_number, " - HSD: ", element_r359.date_exp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r359._id);
} }
function ConversationDetailComponent_nz_modal_35_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "nz-select", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_nz_modal_35_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r362); const data_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r356.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ConversationDetailComponent_nz_modal_35_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 1, 3, "nz-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r356.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r356.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r356.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r357.getUnit(data_r356.units, data_r356.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r356.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r357.vhAlgorithm.vhcurrencyunit(data_r356.price), " ");
} }
function ConversationDetailComponent_nz_modal_35_ng_container_2_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ConversationDetailComponent_nz_modal_35_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r356 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r356.lots);
} }
function ConversationDetailComponent_nz_modal_35_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, ConversationDetailComponent_nz_modal_35_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r351.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 11, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r354.data);
} }
function ConversationDetailComponent_nz_modal_35_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r365 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_nz_modal_35_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r365); const ctx_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r364.show_modal_select_lots_combo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_nz_modal_35_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r365); const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r366.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Ok"));
} }
function ConversationDetailComponent_nz_modal_35_Template(rf, ctx) { if (rf & 1) {
    const _r368 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-modal", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function ConversationDetailComponent_nz_modal_35_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r368); const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r367.show_modal_select_lots_combo = $event; })("nzOnCancel", function ConversationDetailComponent_nz_modal_35_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r368); const ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r369.show_modal_select_lots_combo = false; })("nzOnOk", function ConversationDetailComponent_nz_modal_35_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r368); const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r370.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_nz_modal_35_ng_container_2_Template, 22, 20, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ConversationDetailComponent_nz_modal_35_ng_template_3_Template, 6, 6, "ng-template", null, 159, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r16.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r352)("nzVisible", ctx_r16.show_modal_select_lots_combo);
} }
function ConversationDetailComponent_app_customer_profile_36_Template(rf, ctx) { if (rf & 1) {
    const _r372 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-customer-profile", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeInfoCustomer", function ConversationDetailComponent_app_customer_profile_36_Template_app_customer_profile_closeInfoCustomer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r372); const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r371.visibleInfoCustomer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visibleInfoCustomer", ctx_r17.visibleInfoCustomer)("infoSender", ctx_r17.customer);
} }
function ConversationDetailComponent_app_add_customer_37_Template(rf, ctx) { if (rf & 1) {
    const _r374 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-add-customer", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAddCustomer", function ConversationDetailComponent_app_add_customer_37_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r374); const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r373.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("infoSender", ctx_r18.infoSender)("showDrawerAddCusomer", ctx_r18.showDrawerAddCusomer);
} }
function ConversationDetailComponent_ng_container_40_nz_tag_17_Template(rf, ctx) { if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-tag", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnClose", function ConversationDetailComponent_ng_container_40_nz_tag_17_Template_nz_tag_nzOnClose_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r380); const item_r378 = restoredCtx.$implicit; const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r379.onCloseProductCode(item_r378); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r378 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzColor", "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r378.code);
} }
function ConversationDetailComponent_ng_container_40_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "nz-input-number", 175, 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function ConversationDetailComponent_ng_container_40_ng_container_18_Template_nz_input_number_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r383); const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r382.value_discount_point = $event; })("keyup", function ConversationDetailComponent_ng_container_40_ng_container_18_Template_nz_input_number_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r383); const _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r384.calculatePoint2Money(_r381["value"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 12, "Accumulated points"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 14, "Enter points"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r377.value_discount_point)("nzMin", 0)("nzMax", ctx_r377.point_validity)("nzStep", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r377.vhAlgorithm.vhcurrencyunit(ctx_r377.invoice.getDiscountPoint()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 16, "Conversion rate"), ": ", ctx_r377.customer_class.payment.points, " \u0110i\u1EC3m = ", ctx_r377.vhAlgorithm.vhcurrencyunit_symbol(ctx_r377.customer_class.payment.money), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 18, "Current accumulated points"), " : ", ctx_r377.point_validity, " ");
} }
function ConversationDetailComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r386 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 165, 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup.enter", function ConversationDetailComponent_ng_container_40_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r386); const _r375 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r385.getDiscountOfCoupon(_r375.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_ng_container_40_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r386); const _r375 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r387.getDiscountOfCoupon(_r375.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, ConversationDetailComponent_ng_container_40_nz_tag_17_Template, 2, 2, "nz-tag", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](18, ConversationDetailComponent_ng_container_40_ng_container_18_Template, 19, 20, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 8, "Coupon"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 10, "Enter or scan code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 12, "Apply"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r19.vhAlgorithm.vhcurrencyunit(ctx_r19.invoice.getDiscountCoupon()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r19.product_codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r19.customer_class == null ? null : ctx_r19.customer_class.payment.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 14, "Total discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r19.vhAlgorithm.vhcurrencyunit(ctx_r19.invoice.getDiscountOther()));
} }
class ConversationDetailComponent {
    constructor(vhAuth, vhQuerySales, vhComponent, lang, vhAlgorithm, modal, router, fncService) {
        this.vhAuth = vhAuth;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.modal = modal;
        this.router = router;
        this.fncService = fncService;
        this.infoSender = {};
        this.list_earning_point_bills = [];
        this.list_earning_points_products = [];
        this.customer_group = [];
        this.addCustomerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
        this.indexTab = 0;
        this.searchProductList = false;
        this.default_price_type = 1;
        this.pickerTime = new Date();
        this.employee = {};
        this.promotions = [];
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.note = '';
        this.checkPrinter = false;
        this.visibleCheckFees = false;
        this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
        this.display_promotion_selling_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
        this.is_discount_bill = false;
        this.point_validity = 0;
        this.discount_bill = 0;
        this.earning_point = 0;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        // ----set customer-----
        this.radioValue = 1;
        this.product_codes = [];
        this.value_discount_point = 0;
        this.showModalOtherDiscount = false;
        this.percent_discount_bill = 0;
        // -------modal edit pay---------
        this.edit_pay = false;
        /**add customer */
        this.showDrawerAddCusomer = false;
        this.visibleInfoCustomer = false;
        this.isGotPromotion = false;
        this.showProductGift = false;
        this.product_gift_type7 = [];
        this.showProductGiftType7 = false;
        this.gotten_gift_type7 = false;
        this.bill_details_pmtype_7 = [];
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        this.show_modal_select_lots_combo = false;
    }
    ngOnInit() {
        this.initBill();
        let printer = this.vhQuerySales.getlocalPrinters().find(item => item.desktop);
        if (printer && printer.sales)
            this.checkPrinter = printer.sales.enable;
    }
    ngAfterViewInit() {
    }
    initBill() {
        this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_5__.VhSaleInvoices();
        // set nhân viên mặc định
        if (!this.invoice.getIdEmployee())
            this.invoice.setIdEmployee(this.vhAuth.getUser()._id);
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.getIdEmployee());
        this.invoice.setIdBranch(this.vhQuerySales.getDefaultBranch()._id);
        if (this.vhAuth.checkMyPermission('default_price_type_1'))
            this.default_price_type = 1;
        else if (this.vhAuth.checkMyPermission('default_price_type_2'))
            this.default_price_type = 2;
        this.invoice.setPriceType(this.default_price_type);
        let tax = this.listTax.find(item => item.default);
        if (tax) {
            this.id_tax = tax._id;
            this.invoice.setTax(tax['value']);
        }
        this.percent_discount_bill = this.invoice.getSubTotal() ? (this.invoice.getDiscount() / this.invoice.getSubTotal()) * 100 : 0;
        this.getClassAndProgram(this.invoice.getIdPartner());
    }
    ngOnChanges(changes) {
        (changes.infoSender) && (this.infoSender = changes.infoSender.currentValue);
    }
    changeTabs(tab) {
        this.indexTab = tab;
        if (tab == 3) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
                this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
            });
        }
    }
    closeSearch(data) {
        if (data.manylot && !data.lot_number)
            this.openModalChooseLot(data);
        else {
            if (data) {
                if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
                    this.tempDetail = data;
                    this.show_modal_select_lots_combo = true;
                }
                else {
                    let price = this.default_price_type == 1 ? data.price : data.price2 ? data.price2 : data.price; // check 2 đk là kiểu giá bán và có giá bán sỉ hay ko
                    this.invoice.addInvoiceDetail(Object.assign(Object.assign({}, data), { price: price, earning_points_product: this.getTotalEarningPointProduct(data, null) }), null);
                }
            }
            if (this.is_discount_bill) {
                setTimeout(() => {
                    this.getDiscountBillOfCustomer();
                }, 200);
            }
            else {
                this.invoice.setDiscountBill(0);
                this.discount_bill = 0;
            }
        }
        this.searchProductList = false;
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    changeUnit(ev, item) {
        if (this.default_price_type == 1) {
            if (ev == -1) {
                item.price = this.vhQuerySales.getlocalProduct(item.id_product).price;
                item.ratio = 1;
                item.unit_name = item.unit;
                item.price_origin = this.vhQuerySales.getlocalProduct(item.id_product).price;
            }
            else {
                item.unit_name = item.units[ev].unit;
                item.price = parseFloat(item.units[ev].price);
                item.ratio = parseFloat(item.units[ev].ratio);
                item.price_origin = parseFloat(item.units[ev].price);
            }
        }
        else {
            if (ev == -1) {
                item.price = this.vhQuerySales.getlocalProduct(item.id_product).price2 ? this.vhQuerySales.getlocalProduct(item.id_product).price2 : this.vhQuerySales.getlocalProduct(item.id_product).price;
                item.ratio = 1;
                item.unit_name = item.unit;
                item.price_origin = this.vhQuerySales.getlocalProduct(item.id_product).price2 ? this.vhQuerySales.getlocalProduct(item.id_product).price2 : this.vhQuerySales.getlocalProduct(item.id_product).price;
            }
            else {
                item.unit_name = item.units[ev].unit;
                item.price = parseFloat(item.units[ev].price2 ? item.units[ev].price2 : item.units[ev].price);
                item.ratio = parseFloat(item.units[ev].ratio);
                item.price_origin = parseFloat(item.units[ev].price2 ? item.units[ev].price2 : item.units[ev].price);
            }
        }
        this.invoice.setSubTotal();
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
    *  sự kiện nhận thay đổi giá từ output component app-change-price-type
    * @event : boolean | null
    */
    changePriceType(event) {
        if (event != null) { // nếu có thay đổi kiểu giá bán thì cập nhật lại giá các sản phẩm thành giá bán sỉ
            this.default_price_type = event;
            if (this.invoice.getInvoiceDetail().length) { // nếu có  length mơi update
                let bill_details = this.invoice.getInvoiceDetail();
                for (let i in bill_details) {
                    let price_update = 0;
                    let product = this.vhQuerySales.getlocalDetailProduct(bill_details[i].id_subproduct ? bill_details[i].id_subproduct : bill_details[i].id_product);
                    product = Object.assign(Object.assign({}, product), this.vhQuerySales.getUnit_byRatio(product.units, bill_details[i].ratio));
                    if (event == 1) {
                        price_update = product.price;
                    }
                    else {
                        price_update = product.price2 ? product.price2 : product.price;
                    }
                    bill_details[i].price = price_update;
                    bill_details[i].price_origin = price_update;
                }
                this.invoice.setSubTotal();
            }
            this.invoice.setPriceType(event);
        }
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
     * hàm get điểm tích lũy theo hóa đơn
     * 1. get hạng khách hàng
     * 2. từ hạng khách hàng get tích điểm theo bill
     * 3. check các điều kiện của chương trình
     * a check sản phẩm khuyến mãi include_promotion_product
     * b  check giảm giá/ chiết khấu include_discount
     * c check thanh toán = điểm thưởng include_paid_points
     * d check phí  include_fee
     * e check thuế include_tax
     * @returns 0 | number
     */
    getEarningBill() {
        if (this.program_bill && this.invoice.getSubTotal() > this.program_bill.bill_total_minimum) {
            let subTotal = this.invoice.getSubTotal();
            if (!this.program_bill.include_promotion_product) { // ko tích điểm sp có km =>  tính lại subTotal
                subTotal = this.getSubTotalNotPromotion();
                if (this.program_bill.include_discount)
                    subTotal = subTotal - this.invoice.getDiscount() - this.invoice.getDiscountBill();
                if (this.program_bill.include_paid_points && this.invoice.getDiscountPoint())
                    subTotal = subTotal - this.invoice.getDiscountPoint();
                if (this.program_bill.include_fee)
                    subTotal += this.invoice.getFee();
                if (this.program_bill.include_tax)
                    subTotal += subTotal * (this.invoice.getTax() / 100);
                return ((subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money) * this.program_bill.exchange.points;
            }
            else {
                subTotal = this.invoice.getSubTotal();
                if (this.program_bill.include_discount)
                    subTotal = subTotal - this.invoice.getDiscount() - this.invoice.getDiscountBill();
                if (this.program_bill.include_paid_points && this.invoice.getDiscountPoint())
                    subTotal = subTotal - this.invoice.getDiscountPoint();
                if (this.program_bill.include_fee)
                    subTotal += this.invoice.getFee();
                if (this.program_bill.include_tax)
                    subTotal += subTotal * (this.invoice.getTax() / 100);
                return ((subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money) * this.program_bill.exchange.points;
            }
        }
        else
            return 0;
    }
    /**
    * hàm này trả về tổng tiền của sản phẩm ko có chương trình khuyến mãi
    * return : number
    */
    getSubTotalNotPromotion() {
        return this.invoice.getInvoiceDetail().filter(item => !item.id_promotion).reduce((prev, next) => prev + next.quantity * next.price, 0);
    }
    /**
     * hàm này trả về tổng tiền của sản phẩm  ko có chương trình khuyến mãi thuộc chương trình tích điểm sản phẩm
     * return : number
     */
    getSubTotalNotPromotionOFProduct(products_of_program_earnig_product) {
        return this.invoice.getInvoiceDetail()
            .filter(item => !item.id_promotion && products_of_program_earnig_product.find(i => i == item.id_product))
            .reduce((prev, next) => prev + next.quantity * next.price, 0);
    }
    /**
     * hàm này trả về tổng điểm được tích của tất cả sản phẩm
     * @returns 0 | number
     */
    getEarningProduct() {
        if (this.program_product) {
            let subTotal = 0;
            if (!this.program_product.include_promotion_product) { // tích điểm sp có km =>  tính lại subTotal
                subTotal = this.getSubTotalNotPromotionOFProduct(this.program_product.products);
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
            else {
                subTotal = this.invoice.getInvoiceDetail().filter(item => item.price_origin == item.price && this.program_product.products.find(i => i == item.id_product)).reduce((prev, next) => prev + next.quantity * next.price, 0);
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
        }
        else
            return 0;
    }
    /**
     * hàm này trả về tổng điểm được tích của đơn và sản phẩm
     * @returns 0 | number
     */
    getTotalEarningPoint() {
        this.earning_point = this.getEarningProduct() + this.getEarningBill();
        return this.earning_point;
    }
    /**
     * hàm này trả về điểm được tích của sản phẩm được thêm
     * @param product sản phẩm được thêm
     * @returns 0 | number
     */
    getTotalEarningPointProduct(product, promotion) {
        if (this.program_product) {
            let subTotal = 0;
            if (!this.program_product.include_promotion_product && promotion) { // tích điểm sp có km =>  tính lại subTotal
                subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
            else {
                subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
        }
        else
            return 0;
    }
    deleteGoods(detail) {
        this.invoice.removeInvoiceDetail(detail.id_product);
        if (this.is_discount_bill) {
            setTimeout(() => {
                this.getDiscountBillOfCustomer();
            }, 200);
        }
        else {
            this.invoice.setDiscountBill(0);
            this.discount_bill = 0;
        }
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    checkQuantityProduct(product, event) {
        if (!event)
            product.quantity = 1;
        this.invoice.setSubTotal();
        if (this.is_discount_bill) {
            setTimeout(() => {
                this.getDiscountBillOfCustomer();
            }, 200);
        }
        else {
            this.invoice.setDiscountBill(0);
            this.discount_bill = 0;
        }
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    openEditUnitPrice(detail) {
        this.tempDetail = detail;
        this.isVisibleEditUnitPrice = true;
        this.vhAlgorithm.waitingStack().then(() => {
            this.unit_price = this.vhAlgorithm.vhnumeral('.unit_price');
        });
    }
    handleEditUnit() {
        if (this.unit_price.getRawValue() != '' && this.unit_price.getRawValue() >= 0) {
            this.tempDetail.price = parseFloat(this.unit_price.getRawValue());
            this.invoice.setSubTotal();
            this.isVisibleEditUnitPrice = false;
            if (this.is_discount_bill) {
                setTimeout(() => {
                    this.getDiscountBillOfCustomer();
                }, 200);
            }
            else {
                this.invoice.setDiscountBill(0);
                this.discount_bill = 0;
            }
            if (!this.gotten_gift_type7)
                this.handlePromotionType7(this.bill_details_pmtype_7);
        }
        else {
            this.vhComponent.showToast(5000, this.lang.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    // -------set employee-------
    closeAndReceiveEmployee(event) {
        if (event) {
            this.invoice.setIdEmployee(event);
        }
    }
    closeAndReceiveCustomer(event) {
        if (event) {
            this.invoice.setIdPartner(event);
            if (!this.vhQuerySales.getlocalCustomer(event).debt_enable)
                this.invoice.setPayment(this.invoice.getTotalATax());
            this.getClassAndProgram(event);
        }
    }
    changeCustomerType(event) {
        if (this.radioValue == 1) {
            this.invoice.setIdPartner("id_retail");
            this.invoice.setPayment(this.invoice.getTotalATax());
        }
    }
    /**
     * hàm này để gán chương trình tich diem hóa đơn và sản phẩm của khách hàng
     */
    getClassAndProgram(id_customer) {
        this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner());
        this.customer_class = this.customer_group.find(item => item._id == this.vhQuerySales.getlocalCustomer(id_customer).id_customer_class);
        if (this.customer_class && this.customer_class.id_earning_points_bill) {
            this.program_bill = this.list_earning_point_bills.find(item => item._id == this.customer_class.id_earning_points_bill);
        }
        if (this.customer_class && this.customer_class.id_earning_points_product) {
            this.program_product = this.list_earning_points_products.find(item => item._id == this.customer_class.id_earning_points_product);
        }
        if (!this.customer_class) {
            this.program_bill = null;
            this.program_product = null;
        }
        this.point_validity = this.vhQuerySales.getlocalCustomerPoints(this.invoice.getIdPartner());
        this.getDiscountMethodCustomer(this.invoice.getIdPartner());
    }
    getDiscountMethodCustomer(id_customer) {
        var _a;
        let check = this.vhQuerySales.getlocalDiscount_bill((_a = this.customer_class) === null || _a === void 0 ? void 0 : _a.id_discount_bill);
        if (check) {
            this.is_discount_bill = true;
            this.getDiscountBillOfCustomer();
            this.vhComponent.alertMessageDesktop('success', this.lang.translate("This customer applies the discount calculation formula ") + check.name, 5000);
        }
        else {
            this.is_discount_bill = false;
            this.invoice.setDiscountBill(0);
        }
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    getDiscountBillOfCustomer() {
        this.discount_bill = this.vhQuerySales.getDiscount_bill_byCustomer(this.invoice.getSubTotal(), this.invoice.getIdPartner()) ? this.vhQuerySales.getDiscount_bill_byCustomer(this.invoice.getSubTotal(), this.invoice.getIdPartner()).discount : 0;
        this.invoice.setDiscountBill(this.discount_bill);
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    // ----set delivery ------
    closeAndReceiveDelivery(event) {
        if (event) {
            this.invoice.setIdDelivery(event);
        }
    }
    closeAndGetValuePayment(event) {
        if (event[0] == 1 || event[0] == 2) {
            this.setPaymentType(event[0]);
        }
        else if (event[0] == 3) {
            this.setPaymentType(event[0], event[1]);
        }
    }
    setPaymentType(type, id_wallet) {
        this.invoice.setPaymentType(type);
        switch (type) {
            case 1: {
                this.invoice.setIdWallet('id_cash');
                this.invoice.setPayment(this.invoice.getPayment() ? this.invoice.getPayment() : null);
                break;
            }
            case 2: {
                this.invoice.setPayment(0);
                this.invoice.setIdWallet(null);
                this.invoice.setCash(0);
                break;
            }
            case 3: {
                if (id_wallet) {
                    this.invoice.setIdWallet(id_wallet);
                    this.invoice.setPayment(this.invoice.getPayment() ? this.invoice.getPayment() : null);
                    break;
                }
            }
        }
        ;
    }
    setPickerTime(event) {
        this.vhQuerySales.getValidityDate(event)
            .then((validitydate) => {
            if (validitydate) {
                this.vhComponent.alertMessageDesktop("warning", `${this.lang.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 8000);
                this.invoice.setDate(new Date());
            }
            else
                this.invoice.setDate(event);
        });
    }
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.setTax(tax.value);
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    editDiscount() {
        if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0 && this.discount_price.getRawValue() <= this.invoice.getSubTotal()) {
            this.invoice.setDiscount(parseFloat(this.discount_price.getRawValue()));
            this.percent_discount_bill = this.invoice.getSubTotal() ? (this.invoice.getDiscount() / this.invoice.getSubTotal()) * 100 : 0;
        }
        else {
            document.getElementById("discount-price")['value'] = this.invoice.getDiscount();
            this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
        }
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    openModalOtherDiscount() {
        this.showModalOtherDiscount = true;
        this.radioValueProgramEarningPoint = this.program_bill ? this.program_bill._id : this.program_product ? this.program_product._id : '';
    }
    handleOkOtherDiscount() {
        if (this.invoice.getPayment() < this.invoice.getDiscountOther())
            this.invoice.setPayment(0);
        this.showModalOtherDiscount = false;
    }
    getDiscountOfCoupon(code) {
        if (code)
            this.vhQuerySales.getCoupon_Code_Name_Release_byCode(code)
                .then((product_codes) => {
                if (product_codes && !this.product_codes.find(item => item.code == code)) {
                    switch (product_codes.status) {
                        case 1: {
                            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Phiếu này chưa được quy đổi"));
                            break;
                        }
                        case 3: {
                            if (new Date() < new Date(product_codes.date_expire)) {
                                this.product_codes.push(product_codes);
                                this.invoice.setDiscountCoupon(product_codes.value);
                                this.vhComponent.alertMessageDesktop("success", this.lang.translate("Sử dụng coupon thành công"));
                            }
                            else {
                                this.vhComponent.alertMessageDesktop("error", this.lang.translate("Phiếu này đã hết hạn sử dụng"), 8000);
                            }
                            break;
                        }
                        case 4: {
                            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Phiếu này đã được sử dụng"), 8000);
                            break;
                        }
                    }
                }
                if (!product_codes)
                    this.vhComponent.alertMessageDesktop("error", this.lang.translate("Không tìm thấy phiếu này"), 8000);
                setTimeout(() => {
                    document.getElementById('coupon').getElementsByTagName("input")[0].value = '';
                }, 200);
            });
    }
    onCloseProductCode(item) {
        this.product_codes.splice(this.product_codes.findIndex(i => i._id == item._id), 1);
        this.invoice.setDiscountCoupon(-item.value);
    }
    calculatePoint2Money(value) {
        if (value <= this.point_validity) {
            this.value_discount_point = value;
            this.invoice.setDiscountPoint((value / this.customer_class.payment.points) * this.customer_class.payment.money);
            this.invoice.setUsePoint(value);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Vượt quá giới hạn điểm cho phép"));
        }
    }
    editPercentDiscount(value) {
        if (parseFloat(value) > 100)
            document.getElementById("percent-discount-price")['value'] = 0;
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    editFee() {
        if (this.invoice_fee.getRawValue() && this.invoice_fee.getRawValue() >= 0) {
            this.invoice.setFee(parseFloat(this.invoice_fee.getRawValue()));
        }
        else {
            document.getElementById("invoice-fee")['value'] = this.invoice.getFee();
            this.invoice_fee = this.vhAlgorithm.vhnumeral('.invoice-fee');
        }
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    showModalEditTotalPay() {
        if (this.invoice.getPaymentType() != 2 && this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner()).debt_enable) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.edit_paytotal = this.vhAlgorithm.vhnumeral(".edit-pay");
            });
            this.edit_pay = true;
        }
        else if (!this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner()).debt_enable) {
            this.vhComponent.showToast(5000, this.lang.translate("This customer is not allowed to debt"), "alert-toast");
        }
    }
    handleEditPay() {
        if (this.edit_paytotal.getRawValue() >= 0 && this.edit_paytotal.getRawValue() <= this.invoice.getTotalATax()) {
            this.invoice.setPayment(parseFloat(this.edit_paytotal.getRawValue()));
        }
        this.edit_pay = false;
    }
    handleCancelEditPay() {
        this.edit_pay = false;
    }
    closeAddCustomer(result) {
        this.showDrawerAddCusomer = false;
        if (result) {
            this.invoice.setIdPartner(result._id);
            this.addCustomerEvent.emit(result);
        }
    }
    openInfoCustomer() {
        if (this.invoice.getIdPartner() != 'id_retail') {
            this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner());
            this.visibleInfoCustomer = true;
        }
    }
    edit_note() {
        if (this.note) {
            this.invoice.setNote(this.note);
        }
    }
    payInvoice(bill_type = 1, print) {
        if (this.vhAuth.checkMyPermission("sales_enable_payment")) {
            this.vhComponent.alertConfirm(this.lang.translate("Pay") + "?", "", "", "OK", this.lang.translate("Cancel"))
                .then(() => {
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    this.createOrUpdate(1).then(bill => {
                        if (bill.bill_code)
                            this.invoice.setBillCode(bill.bill_code);
                        this.vhComponent.hideLoading(0).then(() => {
                            this.vhComponent.showToast(2000, `${this.lang.translate("Sales invoice")} ${bill.bill_code || this.invoice.getBillCode()} ${this.lang.translate("has been created successfully")}`, "success-toast");
                            if (print)
                                this.handlePrint();
                            else {
                                this.modal.confirm({
                                    nzTitle: this.lang.translate("Chuyển sang trang hóa đơn") + "?",
                                    nzContent: "Bạn vừa bán hàng thành công, bạn có muốn chuyển sang trang hóa đơn?",
                                    nzOkText: 'Sang trang hóa đơn',
                                    nzOnOk: () => {
                                        this.router.navigate(['/sales/dashboard/manage/invoice/sales-return-invoice']);
                                    },
                                    nzOnCancel: () => { this.initBill(); },
                                    nzCancelText: this.lang.translate("Tiếp tục chat")
                                });
                            }
                        });
                    });
                });
            }, () => { });
        }
        else
            this.vhComponent.showToast(1500, this.lang.translate('You do not have this rights'), "alert-toast");
    }
    createOrUpdate(bill_type) {
        return this.vhQuerySales.createBill_Billdetail(Object.assign(Object.assign({}, this.invoice.getCreateUpdateInvoice(bill_type)), { uuid: null }), this.invoice.getCreateUpdateInvoiceDetail());
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
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.SalesK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.SalesK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.SalesK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_3__.SalesA5Component;
            case 'print_size_a4': return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesA4Component;
            default: return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesA4Component;
        }
    }
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => { });
                });
        }, (err) => { });
    }
    checkFee() {
        this.invoice;
    }
    handleAddGiftType7() {
        this.showProductGiftType7 = false;
        if (!this.gotten_gift_type7)
            for (let i in this.product_gift_type7) {
                // this.product_gift_type7[i].products_gift = this.product_gift_type7[i].products_gift.filter(item => item.choose).map(e => { return { ...e } })
                if (this.product_gift_type7[i].products_gift.length)
                    this.invoice.addBill_detail_promotion(this.product_gift_type7[i]);
            }
        this.gotten_gift_type7 = true;
    }
    /**
     * hàm lấy quà
     */
    getPromotions() {
        this.gotten_gift_type7 = false;
        this.vhComponent.showLoading('')
            .then(() => {
            this.vhQuerySales.changeBillDetails_withPromotions(this.invoice.getInvoiceDetail(), this.invoice.getDate()).then((bill_details_display) => {
                this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_0to6);
                this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_7);
                this.bill_details_pmtype_7 = this.vhAlgorithm.sortNumberbyASC([...bill_details_display.bill_details_pmtype_7], 'total_bill_value');
                this.isGotPromotion = true;
                this.vhComponent.hideLoading(0);
                this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_5__.VhSaleInvoices(this.invoice.getCreateUpdateInvoice(5), [...bill_details_display.bill_details_pmtype_0to6,], this.vhQuerySales);
                // if (bill_details_display.filter(item => item.products_gift).length) this.showProductGift = true;
                this.getEarningpointPromotion();
                // this.product_gift_type7 = [...bill_details_display.bill_details_pmtype_7]
                this.handlePromotionType7(this.bill_details_pmtype_7);
            }, error => {
                this.vhComponent.hideLoading(0).then(() => {
                    this.vhComponent.showToast(5000, error, "alert-toast");
                });
            });
        });
    }
    deletePromotion() {
        return new Promise((resolve) => {
            let bill_details = this.vhQuerySales.destroyBillDetails_withPromotions(this.invoice.getInvoiceDetail());
            this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_5__.VhSaleInvoices(this.invoice.getCreateUpdateInvoice(5), bill_details, this.vhQuerySales);
            this.invoice.setSubTotal();
            this.product_gift_type7 = [];
            this.bill_details_pmtype_7 = [];
            resolve(true);
        });
    }
    handlePromotionType7(bill_details_pmtype_7) {
        if (bill_details_pmtype_7.length)
            if (bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.invoice.getTotalATax()) != -1)
                this.product_gift_type7 = [bill_details_pmtype_7[bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.invoice.getTotalATax())]];
            else
                this.product_gift_type7 = [];
        else
            this.product_gift_type7 = [];
    }
    handleChooseLotForPromotion(promotion) {
        for (let i of promotion) {
            if (i.products_gift) {
                for (let product of i.products_gift) {
                    if (product.lots && product.lots.length) {
                        let min_date_exp = this.vhAlgorithm.sortDatebyASC(product.lots, 'date_exp');
                        product['id_lotproduct'] = min_date_exp[0]._id;
                        product['lot_number'] = min_date_exp[0].lot_number;
                    }
                    if (product.combos) {
                        product.combos.forEach(element => {
                            if (element.lots && element.lots.length) {
                                let min_date_exp = this.vhAlgorithm.sortDatebyASC(element.lots, 'date_exp');
                                element['id_lotproduct'] = min_date_exp[0]._id;
                                element['lot_number'] = min_date_exp[0].lot_number;
                            }
                        });
                    }
                }
            }
        }
    }
    /**
     * hàm này để get SubTotal mới của mảng đã lấy quà
     * đồng thời gán điểm tích lũy sản phẩm mới của các sản phẩm trong khuyến mãi nếu có
     */
    getEarningpointPromotion() {
        for (let i of this.invoice.getInvoiceDetail()) {
            if (i.products_gift) {
                for (let product of i.products_gift) {
                    product.earning_points_product = this.getTotalEarningPointProduct(i, true);
                }
            }
            if (i.products) {
                for (let product of i.products) {
                    product.earning_points_product = this.getTotalEarningPointProduct(i, true);
                }
            }
            if (!i.id_promotion)
                i.earning_points_product = this.getTotalEarningPointProduct(i, null);
        }
        this.invoice.setSubTotal();
    }
    /**
     * hàm này để kiểm tra disable sản phẩm tặng hay ko
     * @param data phần tử trong mảng đã lấy quà
     * @returns
     */
    checkDisableChooseProductGift(data) {
        if (data.products_gift.filter(item => item.choose).length == data.promotions_maximum)
            return true;
        else
            return false;
    }
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
    }
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number;
    }
    searchLot(value) {
        this.tempDetail.lots = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.list_search_lot, ['lot_number']);
    }
    openModalChooseLot(data) {
        this.tempDetail = data;
        this.list_search_lot = this.tempDetail.lots;
        if (!this.list_search_lot.length)
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Sản phẩm này không có lô khả dụng để bán!"));
        else
            this.show_modal_select_lots = true;
    }
    changeLot(e) {
        this.tempDetail.lot_number = this.tempDetail.lots.find(item => item._id == e).lot_number;
    }
    handleChooseLot() {
        if (this.warning_lot_expried) {
            let lot_select = this.list_search_lot.find(e => e._id == this.tempDetail.id_lotproduct);
            if (new Date().getTime() >= new Date(lot_select.date_exp).getTime()) {
                this.modal.confirm({
                    nzTitle: this.lang.translate("Lô này đã hết hạn! Tiếp tục bán sản phẩm này?"),
                    nzOnOk: () => {
                        this.show_modal_select_lots = false;
                        this.tempDetail.lots = this.list_search_lot;
                        if (!this.tempDetail.id_product)
                            this.closeSearch(this.tempDetail);
                    },
                    nzOnCancel: () => {
                        // this.show_modal_select_lots = false;
                        // this.tempDetail.lots = this.list_search_lot;
                    }
                });
            }
            else {
                this.show_modal_select_lots = false;
                this.tempDetail.lots = this.list_search_lot;
                if (!this.tempDetail.id_product)
                    this.closeSearch(this.tempDetail);
            }
        }
        else {
            this.show_modal_select_lots = false;
            this.tempDetail.lots = this.list_search_lot;
            if (!this.tempDetail.id_product)
                this.closeSearch(this.tempDetail);
        }
    }
    handleCancelChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
    }
    handleChooseLotCombo() {
        if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length)
            this.vhComponent.alertMessageDesktop("warning", this.lang.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));
        else {
            this.show_modal_select_lots_combo = false;
            this.closeSearch(this.tempDetail);
        }
    }
}
ConversationDetailComponent.ɵfac = function ConversationDetailComponent_Factory(t) { return new (t || ConversationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_19__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_19__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_19__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_8__.FunctionService)); };
ConversationDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: ConversationDetailComponent, selectors: [["app-conversation-detail"]], inputs: { infoSender: "infoSender", list_earning_point_bills: "list_earning_point_bills", list_earning_points_products: "list_earning_points_products", customer_group: "customer_group" }, outputs: { addCustomerEvent: "addCustomerEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵNgOnChangesFeature"]], decls: 41, vars: 34, consts: [[1, "layout"], [1, "tab-left", "ant-table-body"], [3, "infoSender", "addCustomerEvent", 4, "ngIf"], [1, "fb-create-order"], ["nz-row", "", 4, "ngIf"], ["nz-row", "", "class", "card-products", 4, "ngIf"], ["class", "sales-bills-customer hideScrollbar", "nz-row", "", 4, "ngIf"], ["class", "sales-bills-content hideScrollbar", "nz-row", "", 4, "ngIf"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [1, "tab-right"], ["nz-menu", "", "nzMode", "inline", 3, "nzInlineCollapsed"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "left", "nzTooltipTitle", "Th\u00F4ng tin kh\u00E1ch h\u00E0ng", 3, "nzSelected", "click"], ["nz-icon", "", "nzType", "user-add", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "left", "nzTooltipTitle", "Tra c\u01B0\u1EDBc ph\u00ED giao h\u00E0ng", 3, "nzSelected", "click"], ["src", "assets/icon/management/delivery.svg"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "left", "nzTooltipTitle", "Gi\u1ECF h\u00E0ng", 3, "nzSelected", "click"], ["nz-icon", "", "nzType", "shopping-cart", "nzTheme", "outline"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "left", "nzTooltipTitle", "Thanh to\u00E1n", 3, "nzSelected", "click"], ["nz-icon", "", "nzType", "dollar", "nzTheme", "outline"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], ["nzWidth", "80vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "visibleInfoCustomer", "infoSender", "closeInfoCustomer", 4, "ngIf"], [3, "infoSender", "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], ["nzWidth", "50vw", "nzCancelText", "", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [3, "infoSender", "addCustomerEvent"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "d-flex", 2, "margin-top", "12px"], [2, "width", "50%", "font-size", "1rem"], [2, "width", "50%", 3, "id_delivery", "closeAndReceiveDelivery"], ["nz-col", "", "nzSpan", "24", 1, "right-all-content"], ["nz-button", "", 1, "check-fees", 3, "disabled", "click"], [3, "visibleCheckFees", "id_delivery", "hideModalCheckFees", 4, "ngIf"], [3, "visibleCheckFees", "id_delivery", "hideModalCheckFees"], ["nz-row", "", 1, "card-products"], ["nz-col", "", "nzSpan", "24", 1, "show-cart", "d-flex"], [1, "d-flex", 3, "click"], ["nz-icon", "", "nzType", "plus-circle", "nzTheme", "outline", 1, "icon"], [3, "ngModel", "ngModelChange"], ["nzLabel", "Gi\u00E1 b\u00E1n l\u1EBB", 3, "nzValue"], ["nzLabel", "Gi\u00E1 b\u00E1n bu\u00F4n", 3, "nzValue"], ["nz-col", "", "nzSpan", "24", 1, "fb-create-order-cart"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], [1, "invoiceDetail-item"], ["nz-col", "", "nzSpan", "24"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-col", "", "nzSpan", "1", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "23"], [2, "font-weight", "bold", "margin-bottom", "0"], ["nz-col", "", "nzSpan", "1"], ["nz-col", "", "nzSpan", "8"], [2, "margin-bottom", "0"], ["nz-col", "", "nzSpan", "3", 2, "text-align", "center"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "center"], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], ["style", "margin-left:5px;font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "right"], [1, "max-width-two-line"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [2, "margin-left", "5px", "font-size", "0.8rem"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], ["nz-col", "", "nzSpan", "3"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["id", "quantity", 3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue"], [2, "text-align", "center"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], [1, "d-flex"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "d-flex"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["src", "assets/icon/add.svg", 2, "color", "var(--ion-color-vh-green)", "padding-right", "5px", "cursor", "pointer", "font-size", "16px", 3, "click"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["nz-col", "", "nzSpan", "24", "style", "display: flex; justify-content: space-between;margin: 8px 0;", 4, "ngIf"], [2, "width", "70%", 3, "id_delivery", "closeAndReceiveDelivery"], [2, "width", "90%", 3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "color", "var(--ion-color-vh-green)", "padding-right", "5px", "cursor", "pointer", "font-size", "16px", 3, "ngClass", "click"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between", "margin", "8px 0"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between"], [2, "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "width", "auto"], ["id", "percent-discount-price", "type", "number", "max", "100", "min", "0", "step", "1", "maxlength", "3", "nz-input", "", 1, "border_bottom", 2, "width", "50px", 3, "value", "blur"], ["percentDiscount", ""], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 3, "value", "blur"], ["style", "display: flex;justify-content: space-between;align-items: center;", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-discount", "style", "display: flex;justify-content: space-between;align-items: center;", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-fee d-flex", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax d-flex", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total", "d-flex"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay", "d-flex"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest d-flex", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type", "d-flex"], [3, "payment_type", "id_wallet", "id_customer", "closeAndGetValuePayment"], ["class", "sales-bills-content-note", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee", "d-flex"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "border_bottom", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax", "d-flex"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "font-size", "1rem", "margin-left", "8px", "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest", "d-flex"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["colspan", "3"], ["colspan", "3", "nzAlign", "right"], ["colspan", "6"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "nzDisabled", "ngModelChange"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "visibleInfoCustomer", "infoSender", "closeInfoCustomer"], [3, "infoSender", "showDrawerAddCusomer", "closeAddCustomer"], ["nz-row", "", 1, "center-all-content"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "12", "id", "coupon", 2, "display", "flex"], ["nz-input", "", 3, "placeholder", "keyup.enter"], ["coupon", ""], ["nz-button", "", "nzType", "primary", 2, "margin-left", "8px", 3, "click"], ["nz-col", "", "nzSpan", "6", 1, "text-end"], ["nz-col", "", "nzSpan", "18"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "mt-8", "beetween-all-content"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose"], ["nz-row", "", 1, "center-all-content", "mt-8"], ["nz-col", "", "nzSpan", "12"], [2, "width", "100%", 3, "ngModel", "nzPlaceHolder", "nzMin", "nzMax", "nzStep", "ngModelChange", "keyup"], ["point", ""], ["nz-row", "", 1, "mt-8"], ["nz-col", "", "nzSpan", "14"], ["nz-col", "", "nzSpan", "10", 1, "text-end"]], template: function ConversationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ConversationDetailComponent_app_fb_info_user_2_Template, 1, 1, "app-fb-info-user", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ConversationDetailComponent_div_4_Template, 10, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ConversationDetailComponent_div_5_Template, 20, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ConversationDetailComponent_div_6_Template, 33, 26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, ConversationDetailComponent_div_7_Template, 49, 37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ConversationDetailComponent_div_8_Template, 8, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ConversationDetailComponent_app_search_product_9_Template, 1, 2, "app-search-product", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_Template_li_click_12_listener() { return ctx.changeTabs(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_Template_li_click_14_listener() { return ctx.changeTabs(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_Template_li_click_16_listener() { return ctx.changeTabs(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ConversationDetailComponent_Template_li_click_18_listener() { return ctx.changeTabs(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, ConversationDetailComponent_nz_modal_20_Template, 5, 5, "nz-modal", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "nz-modal", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function ConversationDetailComponent_Template_nz_modal_nzVisibleChange_21_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function ConversationDetailComponent_Template_nz_modal_nzOnCancel_21_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function ConversationDetailComponent_Template_nz_modal_nzOnOk_21_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, ConversationDetailComponent_ng_container_23_Template, 7, 4, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, ConversationDetailComponent_ng_template_24_Template, 6, 6, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "nz-modal", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function ConversationDetailComponent_Template_nz_modal_nzVisibleChange_26_listener($event) { return ctx.showProductGift = $event; })("nzOnCancel", function ConversationDetailComponent_Template_nz_modal_nzOnCancel_26_listener() { return ctx.showProductGift = false; })("nzOnOk", function ConversationDetailComponent_Template_nz_modal_nzOnOk_26_listener() { ctx.showProductGift = false; return ctx.getEarningpointPromotion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, ConversationDetailComponent_ng_container_27_Template, 25, 23, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "nz-modal", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function ConversationDetailComponent_Template_nz_modal_nzVisibleChange_28_listener($event) { return ctx.showProductGiftType7 = $event; })("nzOnCancel", function ConversationDetailComponent_Template_nz_modal_nzOnCancel_28_listener() { return ctx.showProductGiftType7 = false; })("nzOnOk", function ConversationDetailComponent_Template_nz_modal_nzOnOk_28_listener() { ctx.showProductGiftType7 = false; return ctx.handleAddGiftType7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](29, ConversationDetailComponent_ng_container_29_Template, 25, 23, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "nz-modal", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function ConversationDetailComponent_Template_nz_modal_nzVisibleChange_30_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function ConversationDetailComponent_Template_nz_modal_nzOnCancel_30_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function ConversationDetailComponent_Template_nz_modal_nzOnOk_30_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, ConversationDetailComponent_ng_container_32_Template, 11, 7, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, ConversationDetailComponent_ng_template_33_Template, 6, 7, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, ConversationDetailComponent_nz_modal_35_Template, 5, 6, "nz-modal", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, ConversationDetailComponent_app_customer_profile_36_Template, 1, 2, "app-customer-profile", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](37, ConversationDetailComponent_app_add_customer_37_Template, 1, 2, "app-add-customer", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "nz-modal", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function ConversationDetailComponent_Template_nz_modal_nzVisibleChange_38_listener($event) { return ctx.showModalOtherDiscount = $event; })("nzOnCancel", function ConversationDetailComponent_Template_nz_modal_nzOnCancel_38_listener() { return ctx.showModalOtherDiscount = false; })("nzOnOk", function ConversationDetailComponent_Template_nz_modal_nzOnOk_38_listener() { return ctx.handleOkOtherDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](40, ConversationDetailComponent_ng_container_40_Template, 25, 16, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](25);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.indexTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.indexTab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.indexTab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.indexTab == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.indexTab == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.indexTab == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.searchProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzInlineCollapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzSelected", ctx.indexTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzSelected", ctx.indexTab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzSelected", ctx.indexTab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzSelected", ctx.indexTab == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 28, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showProductGift);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showProductGiftType7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 30, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r14)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](39, 32, "Other payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showModalOtherDiscount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__.NzMenuDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__.NzMenuItemDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzTooltipDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_26__.NzIconDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.IonIcon, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalContentDirective, _components_fb_info_user_fb_info_user_component__WEBPACK_IMPORTED_MODULE_9__.FbInfoUserComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__.NzColDirective, _components_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_10__.DeliveryComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__.NzWaveDirective, _components_check_fees_check_fees_component__WEBPACK_IMPORTED_MODULE_11__.CheckFeesComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_33__.NzPopconfirmDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_34__.NzInputNumberComponent, _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_12__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_35__.NzDatePickerComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_36__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_36__.NzRadioComponent, _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_13__.CustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__.NzInputDirective, _components_tax_tax_component__WEBPACK_IMPORTED_MODULE_14__.TaxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__.NzAutosizeDirective, _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_15__.SearchProductComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzCellAlignDirective, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_39__.NzSwitchComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__.NzInputGroupWhitSuffixOrPrefixDirective, _components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_16__.CustomerProfileComponent, _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_17__.AddCustomerComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_40__.NzTagComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_41__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], styles: [".layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  display: grid;\n  grid-template-rows: 100%;\n  grid-template-columns: auto 50px;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .show-cart[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  border-bottom: 1px solid #8e8e9326;\n  padding: 8px 0;\n  text-align: center;\n  cursor: pointer;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .show-cart[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .show-cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .card-products[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 10% 80% 10%;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%] {\n  padding: 12px 0;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.8rem;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .fb-create-order-cart[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   nz-input-number[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  margin: 8px 12px;\n  border: 1px solid #e3e9ed;\n  padding: 8px;\n  border-radius: 8px;\n  font-size: 0.8rem;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.8rem;\n  width: 40%;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 35%;\n  text-align: end;\n  padding: 0;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-end;\n  justify-content: space-between;\n  padding: 4px 20px;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.8rem;\n  width: 49% !important;\n  height: 45px !important;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .fb-create-order[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.8rem;\n  width: 49% !important;\n  height: 45px !important;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.layout[_ngcontent-%COMP%]   .tab-left[_ngcontent-%COMP%]   .check-fees[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  text-align: center;\n  padding: 8px 0;\n  margin-top: 12px;\n}\n.layout[_ngcontent-%COMP%]   .tab-right[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 2px 6px #00000014;\n}\n.layout[_ngcontent-%COMP%]   .tab-right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtBQUdaO0FBRlk7RUFDSSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUloQjtBQUhnQjtFQUNJLGVBQUE7QUFLcEI7QUFIZ0I7RUFDSSxnQkFBQTtBQUtwQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUloQjtBQUZZO0VBQ0ksZUFBQTtBQUloQjtBQUhnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUtwQjtBQUpvQjtFQUNJLGVBQUE7QUFNeEI7QUFKb0I7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBTXhCO0FBSm9CO0VBQ0ksV0FBQTtBQU14QjtBQUZZOztFQUVJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUloQjtBQURnQjtFQUNJLGFBQUE7QUFHcEI7QUFGb0I7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFJeEI7QUFDb0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDeEI7QUFHb0I7RUFDSSxVQUFBO0FBRHhCO0FBS29CO0VBQ0ksaUJBQUE7QUFIeEI7QUFLb0I7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUh4QjtBQU1nQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBSnBCO0FBS29CO0VBQ0ksV0FBQTtBQUh4QjtBQU9vQjtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBTHhCO0FBU1k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBUGhCO0FBUWdCO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQU5wQjtBQVFnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQU5wQjtBQVVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFSWjtBQVVRO0VBQ0ksV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVJaO0FBV0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBVFI7QUFVUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUlo7QUFZQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVEo7QUFZQTtFQUNJLFdBQUE7QUFUSjtBQVVHO0VBQ0ksMEJBQUE7QUFSUDtBQVlBO0VBQ0csV0FBQTtBQVRIIiwiZmlsZSI6ImNvbnZlcnNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNTBweDtcclxuICAgIC50YWItbGVmdCB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAuZmItY3JlYXRlLW9yZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAuc2hvdy1jYXJ0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ZThlOTMyNjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtcHJvZHVjdHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgODAlIDEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmItY3JlYXRlLW9yZGVyLWNhcnQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgICAgICAgICAgLmludm9pY2VEZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICYtcXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBuei1pbnB1dC1udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNhbGVzLWJpbGxzLWNvbnRlbnQsXHJcbiAgICAgICAgICAgIC5zYWxlcy1iaWxscy1jdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTllZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAmLWZlZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi10YXgge1xyXG4gICAgICAgICAgICAgICAgICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtcGF5IHtcclxuICAgICAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXBheW1lbnRfdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLXRheCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbm90ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2FsZXMtYmlsbHMtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmQtZmxleCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrLWZlZXMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhYi1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5iZWV0d2Vlbi1hbGwtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICBzcGFue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIC5hbnQtcmFkaW97XHJcbiAgICAgICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICAuYW50LXJhZGlve1xyXG4gICB3aWR0aDogMTZweDsgXHJcbn0iXX0= */"] });


/***/ }),

/***/ 95979:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-dialog/conversation-dialog.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationDialogComponent": () => (/* binding */ ConversationDialogComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/facebook.service */ 69404);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 79314);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/spin */ 80289);
/* harmony import */ var _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../components/search/search-product/search-product.component */ 99767);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function ConversationDialogComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r7.loadMoreMessage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "T\u1EA3i th\u00EAm tin nh\u1EAFn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", "sync")("nzSpin", ctx_r0.loadingMoreMessage);
  }
}

function ConversationDialogComponent_div_16_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 31);
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r13.renderDate(message_r9.created_time))("src", message_r9.shares.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ConversationDialogComponent_div_16_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r14.renderDate(message_r9.created_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", message_r9.message, " ");
  }
}

function ConversationDialogComponent_div_16_div_1_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r18.renderDate(message_r9.created_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", item_r19.image_data == null ? null : item_r19.image_data.preview_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r19.image_data == null ? null : item_r19.image_data.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ConversationDialogComponent_div_16_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ConversationDialogComponent_div_16_div_1_ng_container_6_div_2_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", message_r9.attachments == null ? null : message_r9.attachments.data);
  }
}

function ConversationDialogComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ConversationDialogComponent_div_16_div_1_img_4_Template, 1, 2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ConversationDialogComponent_div_16_div_1_span_5_Template, 2, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ConversationDialogComponent_div_16_div_1_ng_container_6_Template, 3, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r10.infoSender["profile_pic"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r9.shares);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !message_r9.attachments && !message_r9.shares);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r9.attachments && !message_r9.shares);
  }
}

function ConversationDialogComponent_div_16_ng_template_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 42);
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r23.renderDate(message_r9.created_time))("src", message_r9.shares.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ConversationDialogComponent_div_16_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r24.renderDate(message_r9.created_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r9.message);
  }
}

function ConversationDialogComponent_div_16_ng_template_2_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r28.renderDate(message_r9.created_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", item_r29.image_data == null ? null : item_r29.image_data.preview_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r29.image_data == null ? null : item_r29.image_data.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ConversationDialogComponent_div_16_ng_template_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ConversationDialogComponent_div_16_ng_template_2_ng_container_5_div_2_Template, 3, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", message_r9.attachments == null ? null : message_r9.attachments.data);
  }
}

const _c0 = function (a0) {
  return {
    "loading": a0
  };
};

function ConversationDialogComponent_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConversationDialogComponent_div_16_ng_template_2_img_3_Template, 1, 2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ConversationDialogComponent_div_16_ng_template_2_span_4_Template, 2, 2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ConversationDialogComponent_div_16_ng_template_2_ng_container_5_Template, 3, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, message_r9.id == ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r9.shares);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !message_r9.attachments && !message_r9.shares);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r9.attachments);
  }
}

function ConversationDialogComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConversationDialogComponent_div_16_div_1_Template, 8, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ConversationDialogComponent_div_16_ng_template_2_Template, 6, 6, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const message_r9 = ctx.$implicit;

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (message_r9.from == null ? null : message_r9.from.id) != ctx_r1.fanpageSelected.id)("ngIfElse", _r11);
  }
}

function ConversationDialogComponent_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_div_2_Template_i_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);
      const item_r36 = restoredCtx.$implicit;
      const i_r37 = restoredCtx.index;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r38.removeImage(item_r36, i_r37);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-spin", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r36.buffer, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpinning", item_r36.loadingAttachment);
  }
}

function ConversationDialogComponent_div_17_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r41.appendEmoji("\uD83D\uDE0A");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDE0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r43.appendEmoji("\uD83D\uDE06");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\uD83D\uDE06");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r44.appendEmoji("\uD83D\uDE03");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\uD83D\uDE03");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r45.appendEmoji("\uD83D\uDE01");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\uD83D\uDE01");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r46.appendEmoji("\uD83D\uDE05");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\uD83D\uDE05");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r47.appendEmoji("\uD83D\uDE02");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\uD83D\uDE02");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r48.appendEmoji("\uD83D\uDE0A");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\uD83D\uDE0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r49.appendEmoji("\uD83D\uDE07");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\uD83D\uDE07");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r50.appendEmoji("\uD83D\uDE42");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\uD83D\uDE42");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r51.appendEmoji("\uD83D\uDE43");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\uD83D\uDE43");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r52.appendEmoji("\uD83D\uDE09");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\uD83D\uDE09");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r53.appendEmoji("\uD83D\uDE0C");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\uD83D\uDE0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r54.appendEmoji("\uD83D\uDE0D");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\uD83D\uDE0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r55.appendEmoji("\uD83E\uDD70");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\uD83E\uDD70");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r56.appendEmoji("\uD83D\uDE18");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\uD83D\uDE18");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r57.appendEmoji("\uD83D\uDE17");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\uD83D\uDE17");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r58.appendEmoji("\uD83D\uDE19");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\uD83D\uDE19");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r59.appendEmoji("\uD83D\uDE0B");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\uD83D\uDE0B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r60.appendEmoji("\uD83D\uDE1B");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\uD83D\uDE1B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r61.appendEmoji("\uD83E\uDD2A");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\uD83E\uDD2A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r62.appendEmoji("\uD83E\uDDD0");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\uD83E\uDDD0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r63.appendEmoji("\uD83E\uDD13");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\uD83E\uDD13");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r64.appendEmoji("\uD83D\uDE0E");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\uD83D\uDE0E");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r65.appendEmoji("\uD83E\uDD29");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\uD83E\uDD29");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r66.appendEmoji("\uD83E\uDD73");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\uD83E\uDD73");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r67.appendEmoji("\uD83D\uDE0F");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "\uD83D\uDE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r68.appendEmoji("\uD83D\uDE12");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\uD83D\uDE12");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r69.appendEmoji("\uD83D\uDE1E");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\uD83D\uDE1E");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r70.appendEmoji("\uD83D\uDE1F");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\uD83D\uDE1F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r71.appendEmoji("\uD83D\uDE15");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\uD83D\uDE15");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r72.appendEmoji("\uD83D\uDE41");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\uD83D\uDE41");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_ng_template_16_Template_span_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r73.appendEmoji("\u2639\uFE0F");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\u2639\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c1 = function (a0) {
  return {
    "have-image-upload": a0
  };
};

const _c2 = function (a0) {
  return {
    "d-none": a0
  };
};

const _c3 = function () {
  return {
    minRows: 2,
    maxRows: 2
  };
};

function ConversationDialogComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ConversationDialogComponent_div_17_div_2_Template, 4, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ConversationDialogComponent_div_17_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r74.messageText = $event;
    })("keypress", function ConversationDialogComponent_div_17_Template_textarea_keypress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r75);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r76.keyPress($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r75);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r77.updateImage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_Template_i_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r75);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r78.searchProductList = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ConversationDialogComponent_div_17_Template_input_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r75);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r79.onUploadImage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_div_17_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r75);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r80.sendAllMessage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "G\u1EEDi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ConversationDialogComponent_div_17_ng_template_16_Template, 65, 0, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c1, ctx_r2.listAttachment.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c2, ctx_r2.listAttachment.length == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.listAttachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.messageText)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.messageText == "");
  }
}

function ConversationDialogComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u0110\u00E3 h\u1EBFt th\u1EDDi h\u1EA1n g\u1EEDi tin nh\u1EAFn cho kh\u00E1ch h\u00E0ng kh\u00F4ng t\u01B0\u01A1ng t\u00E1c v\u1EDBi trang theo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0111i\u1EC1u kho\u1EA3n c\u1EE7a Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, ". B\u1EA1n c\u00F3 th\u1EC3 s\u1EED d\u1EE5ng Facebook \u0111\u1EC3 ph\u1EA3n h\u1ED3i cho kh\u00E1ch h\u00E0ng. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_ng_template_18_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r82);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r81.gotoInbox();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Xem h\u1ED9i tho\u1EA1i tr\u00EAn Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ConversationDialogComponent_app_search_product_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-search-product", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeSearchProductList", function ConversationDialogComponent_app_search_product_20_Template_app_search_product_closeSearchProductList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r83.closeSearch($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("searchProductList", ctx_r5.searchProductList)("default_price_type", 1);
  }
}

function ConversationDialogComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_ng_container_22_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r86);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r85.isVisibleSendMessage = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_ng_container_22_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r86);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r87.sendProductAndPrice();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_ng_container_22_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r86);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r88.sendMessageUrl();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_ng_container_22_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r86);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r89.sendMessageUrl(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r6.productSelected.img || "./assets/icon/management/image_default.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 11, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r6.productSelected.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 13, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r6.vhAlgorithm.vhcurrencyunit(ctx_r6.productSelected.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 15, "Cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 17, "Send product name + price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r6.productSelected["img"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 19, "Send image"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r6.productSelected["img"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 21, "Send all"), " ");
  }
}

class ConversationDialogComponent {
  constructor(fbService, vhComponent, router, routes, vhAlgorithm, datePiPe) {
    this.fbService = fbService;
    this.vhComponent = vhComponent;
    this.router = router;
    this.routes = routes;
    this.vhAlgorithm = vhAlgorithm;
    this.datePiPe = datePiPe;
    this.conversationId = '';
    this.loading = false;
    this.fanpageSelected = {};
    this.infoSender = {};
    this.pushMessage = {};
    this.messageList = [];
    this.dataPaging = {};
    this.messageText = '';
    this.loadingMoreMessage = false;
    this.listAttachment = [];
    this.loadingAttachment = false;
    this.searchProductList = false;
    this.productSelected = {};
    this.expiresToSend = false;
    this.isVisibleSendMessage = false;
  }

  ngOnInit() {
    this.subscribeRouter();
  } //subscribe router


  subscribeRouter() {
    this.routes.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(params => params.conversationId)).subscribe(val => {
      this.conversationId = val.conversationId;
      this.conversationId != '' && this.getData();
    });
  }

  ngOnChanges({
    pushMessage
  }) {
    if (pushMessage) {
      this.messageList.push(pushMessage.currentValue);
      setTimeout(() => {
        this.scrollToBottom();
      }, 300);
    }
  }
  /**
   * Lấy tin nhắn và lấy thông tin người gửi
   */


  getData() {
    this.loading = true;
    this.fbService.getListMessageByConversationID(this.fanpageSelected['access_token'], this.conversationId).then(res => {
      if (res) {
        let messages = [];
        this.dataPaging = res.messages.paging;
        res.messages.data.forEach(item => messages.push(this.fbService.getMessageDetailByMessageID(this.fanpageSelected['access_token'], item.id)));
        Promise.all(messages).then(result => {
          this.messageList = result.map((item, index) => {
            return Object.assign(Object.assign({}, res.messages.data[index]), item);
          }).reverse();
          this.getStickerMessage(this.messageList).then(resultSticker => {
            resultSticker.forEach(item => {
              let index = this.messageList.findIndex(mess => {
                if (mess.shares && mess.shares.data && mess.shares.data[0] && mess.shares.data[0].id == item.data[0].id) return true;else return false;
              });
              if (index >= 0) this.messageList[index].shares = item.data[0];
            });
            this.getLastMessageFromUserAndCheckTime(this.messageList);
            this.loading = false;
            setTimeout(() => {
              this.scrollToBottom();
            }, 300);
          }).catch(() => {
            this.showMessageError();
            this.loading = false;
          });
        }).catch(() => {
          this.showMessageError();
          this.loading = false;
        });
      }
    }).catch(() => {
      this.showMessageError();
      this.loading = false;
    });
  }
  /**
   * Hàm này để tìm ra tin nhắn lần cuối khách hàng đã nhắn
   * Đem so sánh với hiện tại, nếu > 3 ngày thì k thể trả lời tin nhắn được nữa
   * @param messageList
   */


  getLastMessageFromUserAndCheckTime(messageList) {
    let lastMessage = messageList[messageList.length - 1];
    this.expiresToSend = false; //3 ngày đổi ra milisecond = 24*60*60*1000*3 = 259200000

    if (lastMessage.id) {
      if (Date.now() - 259200000 >= new Date(lastMessage.created_time).getTime()) this.expiresToSend = true;
    } else this.expiresToSend = true;
  }
  /**
   * Lấy message sticker
   * @param messageList
   * @returns
   */


  getStickerMessage(messageList) {
    return new Promise((resolve, reject) => {
      let shares = [];
      messageList.forEach(item => {
        if (item.shares) shares.push(this.fbService.getLinkShares(this.fanpageSelected['access_token'], item.id));
      });
      Promise.all(shares).then(res => {
        resolve(res);
      }).catch(() => reject());
    });
  }

  ngAfterViewChecked() {
    if (document.getElementById('conversation-dialog') && document.getElementById('conversation-dialog-message')) {
      let height = document.getElementById('conversation-dialog').clientHeight - (this.listAttachment.length > 0 ? 220 : 160);
      document.getElementById('conversation-dialog-message').style.height = `${height}px`;
    }
  }

  renderDate(date) {
    return this.datePiPe.transform(date, 'dd/MM/YYYY HH:mm');
  }

  trackByFn(index, item) {
    return index;
  }
  /**
   * Tự động scroll xuống dưới cùng
   */


  scrollToBottom() {
    let element = document.getElementById('conversation-dialog-message');
    element.scrollTop = element.scrollHeight;
  }
  /**
   * Sự kiện typing bất kì phím nào, bắt sự kiện enter để send message
   * @param event
   */


  keyPress(event) {
    const keyCode = event.which || event.keyCode;

    if (keyCode == 13 && !event.shiftKey) {
      event.preventDefault();
      this.sendAllMessage();
    }
  }

  sendAllMessage() {
    if (this.messageText) {
      let body = {
        recipient: {
          id: this.infoSender['id']
        },
        message: {
          text: this.messageText
        },
        tag: "ACCOUNT_UPDATE",
        messaging_type: "MESSAGE_TAG"
      };
      this.messageList.push({
        id: '',
        from: this.fanpageSelected,
        to: {
          data: [this.infoSender]
        },
        message: this.messageText,
        created_time: new Date().toISOString()
      });
      this.messageText = '';
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
      this.fbService.sendMessageToUserTypeText(this.fanpageSelected['access_token'], body).then(res => {
        var _a;

        if (res.error) {
          this.vhComponent.alertMessageDesktop('error', (_a = res.error) === null || _a === void 0 ? void 0 : _a.message);
          this.messageList.splice(this.messageList.length - 1, 1);
        } else this.messageList[this.messageList.length - 1].id = res.message_id;

        if (this.listAttachment.length > 0) this.sendMessageImage();
      }).catch(err => console.error(err));
    } else if (!this.messageText && this.listAttachment.length > 0) this.sendMessageImage();
  }
  /**
   * Gửi hình ảnh
   */


  sendMessageImage() {
    this.listAttachment.forEach(item => {
      this.messageList.push({
        id: '',
        from: this.fanpageSelected,
        to: {
          data: [this.infoSender]
        },
        message: '',
        created_time: new Date().toISOString(),
        attachments: {
          data: [{
            image_data: {
              preview_url: item.buffer,
              url: item.buffer
            }
          }]
        }
      });
    });
    let listAttachment = [...this.listAttachment];
    this.listAttachment = [];
    let processs = [];

    for (let item of listAttachment) processs.push(this.fbService.sendImageFromFile(this.fanpageSelected['access_token'], this.infoSender['id'], item.attachment_id));

    Promise.all(processs).then(res => {
      let messages = [];
      res.forEach(item => messages.push(this.fbService.getMessageDetailByMessageID(this.fanpageSelected['access_token'], item.message_id)));
      Promise.all(messages).then(result => {
        let length = this.messageList.length;
        result.forEach((mess, index) => {
          this.messageList[length - result.length + index] = mess;
        });
      }).catch(() => {
        this.showMessageError();
      });
    }).catch(() => this.vhComponent.alertMessageDesktop('error', "Xảy ra khi gửi hình ảnh, vui lòng thử lại"));
  }

  appendEmoji(emoji) {
    this.messageText += emoji;
  }

  loadMoreMessage() {
    this.loadingMoreMessage = true;
    this.fbService.getNextPaging(this.dataPaging.next).then(res => {
      if (res.error) {
        this.showMessageError();
        this.loadingMoreMessage = false;
      } else {
        this.dataPaging = res.paging;
        let messages = [];
        res.data.forEach(item => messages.push(this.fbService.getMessageDetailByMessageID(this.fanpageSelected['access_token'], item.id)));
        Promise.all(messages).then(result => {
          let message = result.map((item, index) => {
            return Object.assign(Object.assign({}, res.data[index]), item);
          }).reverse();
          this.getStickerMessage(message).then(resultSticker => {
            resultSticker.forEach(item => {
              let index = message.findIndex(mess => {
                if (mess.shares && mess.shares.data && mess.shares.data[0] && mess.shares.data[0].id == item.data[0].id) return true;else return false;
              });
              if (index >= 0) message[index].shares = item.data[0];
            });
            this.messageList = message.concat(this.messageList);
            this.loadingMoreMessage = false;
          }).catch(() => {
            this.showMessageError();
            this.loading = false;
          }); // this.messageList = mess.concat(this.messageList)
          // this.loadingMoreMessage = false
        }).catch(() => {
          this.showMessageError();
          this.loadingMoreMessage = false;
        });
      }
    }).catch(() => {
      this.showMessageError();
      this.loadingMoreMessage = false;
    });
  }
  /**
   * Upload hình ảnh
   * @param event
   */


  onUploadImage(event) {
    var _this = this;

    let file = event.target.files[0];
    let fileBase64 = event.target.files[0];

    if (fileBase64) {
      let readerBase64 = new FileReader();
      readerBase64.readAsDataURL(fileBase64);

      readerBase64.onload = event => {
        this.listAttachment.push({
          attachment_id: '',
          buffer: readerBase64.result,
          loadingAttachment: true
        });
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);

        reader.onload = /*#__PURE__*/function () {
          var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
            let arrayBuffer = e.target.result;
            let blob = new Blob([arrayBuffer], {
              type: file.type
            });
            let data = new FormData();
            data.append('message', JSON.stringify({
              "attachment": {
                "type": "image",
                "payload": {
                  "is_reusable": true
                }
              }
            }));
            data.append('filedata', blob);

            _this.fbService.updateImageToSendMessageAndReceiveAttachment(_this.fanpageSelected['access_token'], data).then(res => {
              if (res.error) {
                _this.listAttachment.splice(_this.listAttachment.length - 1, 1);

                _this.vhComponent.alertMessageDesktop('error', res.error.message);
              } else {
                _this.listAttachment[_this.listAttachment.length - 1].attachment_id = res.attachment_id;
                _this.listAttachment[_this.listAttachment.length - 1].loadingAttachment = false;
              }
            });
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      };
    }
  }

  updateImage() {
    if (this.listAttachment.length > 0 && this.listAttachment[this.listAttachment.length - 1].loadingAttachment == true) this.vhComponent.alertMessageDesktop('warning', 'Đang tải ảnh lên, vui lòng chờ trong giây lát để tải ảnh tiếp theo');else document.getElementById('image-message').click();
  }

  removeImage(image, index) {
    this.listAttachment.splice(index, 1);
  }

  showMessageError() {
    this.vhComponent.alertMessageDesktop('error', "Xảy ra lỗi khi đồng bộ, vui lòng thử lại");
  }

  closeSearch(data) {
    if (data) {
      this.productSelected = data;
      this.isVisibleSendMessage = true;
    }

    this.searchProductList = false;
  }

  sendProductAndPrice() {
    this.messageText = `Tên sản phẩm: ${this.productSelected['name']}, Giá : ${this.vhAlgorithm.vhcurrencyunit_symbol(this.productSelected['price'])}`;
    this.isVisibleSendMessage = false;
  }

  sendMessageUrl(all) {
    this.messageList.push({
      id: '',
      from: this.fanpageSelected,
      to: {
        data: [this.infoSender]
      },
      message: '',
      created_time: new Date().toISOString(),
      attachments: {
        data: [{
          image_data: {
            preview_url: this.productSelected['img'],
            url: this.productSelected['img']
          }
        }]
      }
    });
    this.isVisibleSendMessage = false;
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
    this.fbService.sendImageWithUrl(this.fanpageSelected['access_token'], this.productSelected['img'], this.infoSender['id']).then(res => {
      if (res.error) {
        this.vhComponent.alertMessageDesktop('error', "Xảy ra khi gửi hình ảnh, vui lòng thử lại");
        this.messageList.splice(this.messageList.length - 1, 1);
      } else this.messageList[this.messageList.length - 1].id = res['message_id'];

      if (all) {
        this.sendProductAndPrice();
        this.sendAllMessage();
      }
    });
  }

  gotoInbox() {
    window.open(`https://www.facebook.com/${this.fanpageSelected.id}/inbox`, '_blank');
  }

}

ConversationDialogComponent.ɵfac = function ConversationDialogComponent_Factory(t) {
  return new (t || ConversationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_facebook_service__WEBPACK_IMPORTED_MODULE_1__.FacebookService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe));
};

ConversationDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConversationDialogComponent,
  selectors: [["app-conversation-dialog"]],
  inputs: {
    fanpageSelected: "fanpageSelected",
    infoSender: "infoSender",
    pushMessage: "pushMessage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 23,
  vars: 16,
  consts: [["id", "conversation-dialog", 1, "layout"], [1, "facebook-dialog", 3, "ngClass"], [1, "d-flex", "header-detail"], [1, "header-detail-left"], [1, "user", "d-flex"], ["alt", "avatar", 3, "src"], [1, "user-name"], [1, "header-detail-right"], ["nzTooltipTitle", "Ch\u1EB7n ng\u01B0\u1EDDi d\u00F9ng", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "stop", "nzTheme", "outline", 1, "icon"], ["nzTooltipTitle", "Chuy\u1EC3n sang trang tin nh\u1EAFn", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "facebook", "nzTheme", "outline", 1, "icon", 3, "click"], ["nzTooltipTitle", "\u0110\u1ED3ng b\u1ED9 l\u1EA1i tin nh\u1EAFn", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "sync", "nzTheme", "outline", 1, "icon", 3, "click"], ["id", "conversation-dialog-message", 1, "dialog-message", "ant-table-body"], [3, "nzActive", "nzLoading"], ["class", "loading-more-message", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "reply-inbox", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["expiresToSendTemplate", ""], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], ["nzTitle", "G\u1EEDi nhanh s\u1EA3n ph\u1EA9m", 3, "nzWidth", "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], [1, "loading-more-message", 3, "click"], ["nz-icon", "", 3, "nzType", "nzSpin"], ["class", "d-flex dialog-message-content", 4, "ngIf", "ngIfElse"], ["isFormOwner", ""], [1, "d-flex", "dialog-message-content"], [1, "left"], ["alt", "avatar", 1, "user-image", 3, "src"], ["nz-tooltip", "", "nzTooltipPlacement", "right", "width", "100px", "height", "100px", "alt", "", 3, "nzTooltipTitle", "src", 4, "ngIf"], ["class", "text", "nzTooltipPlacement", "right", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"], [4, "ngIf"], [1, "right"], ["nz-tooltip", "", "nzTooltipPlacement", "right", "width", "100px", "height", "100px", "alt", "", 3, "nzTooltipTitle", "src"], ["nzTooltipPlacement", "right", "nz-tooltip", "", 1, "text", 3, "nzTooltipTitle"], ["nz-row", "", "nzGutter", "16"], ["nz-col", "", "nzSpan", "12", "class", "image-message", "nzTooltipPlacement", "right", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", "nzTooltipPlacement", "right", "nz-tooltip", "", 1, "image-message", 3, "nzTooltipTitle"], ["target", "_blank", 3, "href"], ["alt", "", 3, "src"], [1, "d-flex", "dialog-message-content", "is-from-page"], [1, "left", 3, "ngClass"], ["nz-tooltip", "", "nzTooltipPlacement", "left", "width", "100px", "height", "100px", "alt", "", 3, "nzTooltipTitle", "src", 4, "ngIf"], ["nzTooltipPlacement", "left", "nz-tooltip", "", "class", "text", 3, "nzTooltipTitle", 4, "ngIf"], ["nz-tooltip", "", "nzTooltipPlacement", "left", "width", "100px", "height", "100px", "alt", "", 3, "nzTooltipTitle", "src"], ["nzTooltipPlacement", "left", "nz-tooltip", "", 1, "text", 3, "nzTooltipTitle"], ["nz-row", "", "nzGutter", "16", 1, "d-flex-row-reverse"], ["nz-col", "", "nzSpan", "12", "class", "image-message", "nzTooltipPlacement", "left", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", "nzTooltipPlacement", "left", "nz-tooltip", "", 1, "image-message", 3, "nzTooltipTitle"], [1, "reply-inbox", 3, "ngClass"], ["nz-row", "", "nzGutter", "16", 1, "reply-inbox-upload", 3, "ngClass"], ["class", "reply-inbox-upload-relative", "nz-col", "", "nzSpan", "4", 4, "ngFor", "ngForOf"], [1, "reply-inbox-text"], ["placeholder", "Nh\u1EADp tin nh\u1EAFn v\u00E0 nh\u1EA5n enter \u0111\u1EC3 g\u1EEDi, nh\u1EA5n shift + enter \u0111\u1EC3 xu\u1ED1ng d\u00F2ng", "rows", "2", "nz-input", "", 3, "ngModel", "nzAutosize", "ngModelChange", "keypress"], [1, "reply-inbox-icon"], [1, "reply-inbox-icon-action"], ["nzTooltipTrigger", "click", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "smile", "nzTheme", "outline", 1, "icon", 3, "nzTooltipTitle"], ["nzTooltipTitle", "T\u1EA3i h\u00ECnh", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "camera", "nzTheme", "outline", 1, "icon", 3, "click"], ["nzTooltipTitle", "S\u1EA3n ph\u1EA9m", "nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "shopping-cart", "nzTheme", "outline", 1, "icon", 3, "click"], ["id", "image-message", "type", "file", 2, "display", "none", 3, "change"], [1, "reply-inbox-icon-send"], ["nz-button", "", 3, "disabled", "click"], ["nz-icon", "", "nzType", "send", "nzTheme", "outline"], ["listEmoil", ""], ["nz-col", "", "nzSpan", "4", 1, "reply-inbox-upload-relative"], ["width", "100%", "height", "50px", "alt", "", 3, "src"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline", 1, "icon-remove", 3, "click"], [3, "nzSpinning"], [1, "list-emoji"], [3, "click"], [1, "reply-inbox", "d-flex"], [1, "warning"], ["nz-icon", "", "nzType", "warning", "nzTheme", "outline", 1, "icon-warning"], ["href", "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], ["nz-row", "", 1, "quick-send-product"], ["nz-col", "", "nzSpan", "24", 1, "text-center"], ["width", "150", "height", "150", "alt", "", 3, "src"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "right-all-content"], ["nz-button", "", 1, "width-fit-content", 3, "click"], ["nz-button", "", 1, "btn-hover", "width-fit-content", 3, "click"], ["nz-button", "", 1, "btn-hover", "width-fit-content", 3, "disabled", "click"]],
  template: function ConversationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_Template_i_click_11_listener() {
        return ctx.gotoInbox();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConversationDialogComponent_Template_i_click_12_listener() {
        return ctx.getData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nz-skeleton", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ConversationDialogComponent_div_15_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ConversationDialogComponent_div_16_Template, 4, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ConversationDialogComponent_div_17_Template, 18, 12, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ConversationDialogComponent_ng_template_18_Template, 10, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ConversationDialogComponent_app_search_product_20_Template, 1, 2, "app-search-product", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "nz-modal", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function ConversationDialogComponent_Template_nz_modal_nzVisibleChange_21_listener($event) {
        return ctx.isVisibleSendMessage = $event;
      })("nzOnCancel", function ConversationDialogComponent_Template_nz_modal_nzOnCancel_21_listener() {
        return ctx.isVisibleSendMessage = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ConversationDialogComponent_ng_container_22_Template, 28, 23, "ng-container", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c1, ctx.listAttachment.length > 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.infoSender["profile_pic"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.infoSender["name"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzActive", true)("nzLoading", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataPaging.next);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.messageList)("ngForTrackBy", ctx.trackByFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.expiresToSend)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchProductList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzWidth", 520)("nzVisible", ctx.isVisibleSendMessage)("nzFooter", null);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__.NzTooltipDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_12__.NzSkeletonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzAutosizeDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_19__.NzSpinComponent, _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_3__.SearchProductComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe],
  styles: [".layout[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 60px auto 100px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   i.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0 8px;\n  cursor: pointer;\n  color: var(--ion-color-vh-gray);\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .header-detail[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  background-color: var(--ion-color-vh-white);\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 400px;\n  border-right: 1px solid #e3e9ed;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  padding: 0 16px 0 8px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .header-detail-left[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.9rem;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .header-detail-right[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 250px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  width: 100%;\n  overflow-y: auto;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message-content[_ngcontent-%COMP%] {\n  word-break: break-word;\n  margin: 8px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img.user-image[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  float: left;\n  margin-right: 8px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: start;\n  padding: 7px 12px;\n  display: inline-block;\n  background: #fff;\n  color: #212121;\n  box-shadow: -2px 0 3px 0 rgba(80, 95, 121, 0.05), 0 2px 3px 0 rgba(80, 95, 121, 0.05);\n  border-radius: 16px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .image-message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 200px;\n  max-height: 200px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%]   .is-from-page[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%]   .is-from-page[_ngcontent-%COMP%]   .left.loading[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%]   .is-from-page[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  display: inline-block;\n  background: var(--ion-color-vh-green);\n  color: #ffffff;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%]   .loading-more-message[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .dialog-message[_ngcontent-%COMP%]   .loading-more-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 4px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  height: 100px;\n  width: 100%;\n  background-color: #ffffff;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-upload[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-upload-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-upload-relative[_ngcontent-%COMP%]   .icon-remove[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 16px;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: var(--ion-color-vh-red);\n  border-radius: 50%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-upload-relative[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background: black;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-text[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  padding: 8px 20px;\n  margin-bottom: 8px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-icon-action[_ngcontent-%COMP%] {\n  width: 60%;\n  align-self: center;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-icon-send[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-icon-send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  display: flex;\n  font-size: 0.9rem;\n  align-items: center;\n  float: right;\n  margin-right: 4px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox-icon-send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-dialog[_ngcontent-%COMP%]   .reply-inbox[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]   .icon-warning[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 8px;\n  color: #e52e2e;\n}\n.layout[_ngcontent-%COMP%]   .dialog.have-image-upload[_ngcontent-%COMP%] {\n  grid-template-rows: 60px auto 160px;\n}\n.layout[_ngcontent-%COMP%]   .have-image-upload[_ngcontent-%COMP%] {\n  height: 160px;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.d-flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.d-flex-row-reverse[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.list-emoji[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n.quick-send-product[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.quick-send-product[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.quick-send-product[_ngcontent-%COMP%]   .width-fit-content[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.quick-send-product[_ngcontent-%COMP%]   .btn-hover[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n}\n.quick-send-product[_ngcontent-%COMP%]   .btn-hover[_ngcontent-%COMP%]:hover {\n  transition: 0.6s;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n}\n.quick-send-product[_ngcontent-%COMP%]   .width-fit-content[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0EsMkNBQUE7QUFHWjtBQUZZO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFJaEI7QUFIZ0I7RUFDSSxxQkFBQTtBQUtwQjtBQUpvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNeEI7QUFKb0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBTXhCO0FBRlk7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFJaEI7QUFEUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUZZO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBSWhCO0FBSGdCO0VBQ0ksVUFBQTtBQUtwQjtBQUpvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNeEI7QUFKb0I7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUZBQUE7RUFDQSxtQkFBQTtBQU14QjtBQUh3QjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSzVCO0FBRGdCO0VBQ0ksVUFBQTtBQUdwQjtBQUFZO0VBQ0ksZUFBQTtBQUVoQjtBQURnQjtFQUNJLFlBQUE7QUFHcEI7QUFEZ0I7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBR3BCO0FBQVk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVoQjtBQURnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUdwQjtBQUNRO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDWjtBQUFZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFEZ0I7RUFDSSxrQkFBQTtBQUdwQjtBQUZvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBSXhCO0FBRm9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBSXhCO0FBQ2dCO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDcEI7QUFFWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFoQjtBQUNnQjtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNwQjtBQUVnQjtFQUNJLFVBQUE7QUFBcEI7QUFDb0I7RUFDSSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUN4QjtBQUF3QjtFQUNJLGlCQUFBO0FBRTVCO0FBSWdCO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRnBCO0FBT0k7RUFDSSxtQ0FBQTtBQUxSO0FBT0k7RUFDSSxhQUFBO0FBTFI7QUFRQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSko7QUFNQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQUhKO0FBS0E7RUFDSSx3QkFBQTtBQUZKO0FBS0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUZSO0FBTUk7RUFDSSxrQkFBQTtBQUhSO0FBS0k7RUFDSSxrQkFBQTtBQUhSO0FBS0k7RUFDSSxhQUFBO0FBSFI7QUFLSTtFQUNJLDJDQUFBO0FBSFI7QUFLSTtFQUNJLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtBQUhSO0FBS0k7RUFDSSxnQkFBQTtBQUhSIiwiZmlsZSI6ImNvbnZlcnNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmZhY2Vib29rLWRpYWxvZyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgaS5pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXItZGV0YWlsIHtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlOWVkO1xyXG4gICAgICAgICAgICAgICAgLnVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAwIDhweDtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaWFsb2ctbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnVzZXItaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTJweCAwIDNweCAwIHJnYig4MCA5NSAxMjEgLyA1JSksIDAgMnB4IDNweCAwIHJnYig4MCA5NSAxMjEgLyA1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pcy1mcm9tLXBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgLmxlZnQubG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxlZnQgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2FkaW5nLW1vcmUtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVwbHktaW5ib3gge1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMy80O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgJi11cGxvYWQge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAmLXJlbGF0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLmljb24tcmVtb3ZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG56LXNwaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICYtYWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLXNlbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAud2FybmluZyB7XHJcbiAgICAgICAgICAgICAgICAuaWNvbi13YXJuaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1MmUyZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaWFsb2cuaGF2ZS1pbWFnZS11cGxvYWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvIDE2MHB4O1xyXG4gICAgfVxyXG4gICAgLmhhdmUtaW1hZ2UtdXBsb2FkIHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG59XHJcbi5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmQtZmxleC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmQtZmxleC1yb3ctcmV2ZXJzZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcbi5kLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0LWVtb2ppIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLnF1aWNrLXNlbmQtcHJvZHVjdCB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLndpZHRoLWZpdC1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIH1cclxuICAgIC5idG4taG92ZXI6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgIH1cclxuICAgIC53aWR0aC1maXQtY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 5639:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/conversation-inbox/conversation-inbox.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationInboxComponent": () => (/* binding */ ConversationInboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/facebook.service */ 69404);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 79314);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function ConversationInboxComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConversationInboxComponent_li_10_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const item_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.changePage(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx_r1.fanpageSelected.id == item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r8.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.name);
} }
function ConversationInboxComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Message"), " ");
} }
function ConversationInboxComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Comment"), " ");
} }
function ConversationInboxComponent_nz_skeleton_23_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r16.unread_count);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
const _c1 = function (a0) { return { "font-weight": a0 }; };
function ConversationInboxComponent_nz_skeleton_23_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConversationInboxComponent_nz_skeleton_23_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const item_r16 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r19.viewMessageDetail(item_r16); return ctx_r19.displayingSenderAction(item_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ellipse", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ConversationInboxComponent_nz_skeleton_23_div_2_span_7_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx_r13.conversationId == item_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r16.participants == null ? null : item_r16.participants.data[0] == null ? null : item_r16.participants.data[0].profile_pic, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r16.unread_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r16.participants == null ? null : item_r16.participants.data[0] == null ? null : item_r16.participants.data[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c1, item_r16.unread_count != 0 ? "bold" : "normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r13.fanpageSelected.id != (item_r16.messages == null ? null : item_r16.messages.data[0] == null ? null : item_r16.messages.data[0].to == null ? null : item_r16.messages.data[0].to.data[0] == null ? null : item_r16.messages.data[0].to.data[0].id) && !item_r16.webhook_send ? "B\u1EA1n: " : "", "", (item_r16.messages == null ? null : item_r16.messages.data[0] == null ? null : item_r16.messages.data[0].message) || "\u0110\u00E3 g\u1EEDi m\u1ED9t \u1EA3nh", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 8, item_r16.messages == null ? null : item_r16.messages.data[0] == null ? null : item_r16.messages.data[0].created_time, "dd/MM"));
} }
function ConversationInboxComponent_nz_skeleton_23_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConversationInboxComponent_nz_skeleton_23_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.loadMoreMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "T\u1EA3i th\u00EAm...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", "sync")("nzSpin", ctx_r14.loadingMoreMessage);
} }
function ConversationInboxComponent_nz_skeleton_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 d\u1EEF li\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConversationInboxComponent_nz_skeleton_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-skeleton", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ConversationInboxComponent_nz_skeleton_23_div_2_Template, 18, 15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ConversationInboxComponent_nz_skeleton_23_div_3_Template, 4, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ConversationInboxComponent_nz_skeleton_23_div_4_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx_r6.loading)("nzActive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.listConversation)("ngForTrackBy", ctx_r6.trackByFnChat);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedIndex == 0 && (ctx_r6.dataPagingMess == null ? null : ctx_r6.dataPagingMess.next));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.listConversation.length);
} }
function ConversationInboxComponent_nz_skeleton_24_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConversationInboxComponent_nz_skeleton_24_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const item_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.viewCommentDetail(item_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx_r23.commentId == item_r25.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (item_r25.participants == null ? null : item_r25.participants.data[0] == null ? null : item_r25.participants.data[0].picture == null ? null : item_r25.participants.data[0].picture.data == null ? null : item_r25.participants.data[0].picture.data.url) || "assets/icon/no-avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.senderName || "Ch\u01B0a x\u00E1c \u0111\u1ECBnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.message || "\u0110\u00E3 g\u1EEDi m\u1ED9t \u1EA3nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 5, item_r25.created_time, "dd/MM"));
} }
function ConversationInboxComponent_nz_skeleton_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 d\u1EEF li\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConversationInboxComponent_nz_skeleton_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-skeleton", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ConversationInboxComponent_nz_skeleton_24_div_2_Template, 19, 10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ConversationInboxComponent_nz_skeleton_24_div_3_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx_r7.loading)("nzActive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.listCommentPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r7.listCommentPost.length);
} }
class ConversationInboxComponent {
    constructor(fbService, vhComponent, router, routes, vhAlgorithm) {
        this.fbService = fbService;
        this.vhComponent = vhComponent;
        this.router = router;
        this.routes = routes;
        this.vhAlgorithm = vhAlgorithm;
        this.listFanpage = [];
        this.newMessage = {};
        this.newComment = {};
        this.changeFanpageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.changeInfoSender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.emitNewMessageFB = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.fanpageSelected = {};
        this.listSubFanpage = [];
        this.listConversation = [];
        this.listSubConversation = [];
        this.listCommentPost = [];
        this.listSubCommentPost = [];
        this.listUserComment = [];
        this.loading = false;
        this.conversationId = '';
        this.commentId = '';
        this.dataPagingMess = {};
        this.dataPagingPost = {};
        this.searchValue = '';
        this.selectedIndex = 0;
        this.loadingMoreMessage = false;
    }
    ngOnInit() {
        this.fanpageSelected = this.listFanpage[0];
        this.listSubFanpage = [...this.listFanpage];
        this.clearPageSelected();
        this.getData();
        this.subscribeRouter();
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d, _e;
        if ((_a = changes.newMessage) === null || _a === void 0 ? void 0 : _a.currentValue[0]) {
            let data = changes.newMessage.currentValue[0];
            //tìm index xem có trong list conversation chưa
            let index = this.listConversation.findIndex(item => { var _a, _b, _c; return ((_b = (_a = item.participants) === null || _a === void 0 ? void 0 : _a.data[0]) === null || _b === void 0 ? void 0 : _b.id) == ((_c = data.sender) === null || _c === void 0 ? void 0 : _c.id); });
            if (index >= 0) {
                let conversation = Object.assign({}, this.listConversation[index]);
                this.listConversation.splice(index, 1);
                conversation.unread_count++;
                (_c = (_b = conversation.messages) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.unshift(Object.assign(Object.assign({}, data.message), { webhook_send: true, message: data.message.text || '', created_time: new Date().toISOString() }));
                this.listConversation.unshift(Object.assign(Object.assign({}, conversation), { can_reply: true }));
                this.listSubConversation = [...this.listConversation];
                //bắn message qua chi tiết tin nhắn
                if (this.listConversation[0].id == this.routes.snapshot.queryParamMap.get('conversationId'))
                    this.emitNewMessage(changes.newMessage.currentValue[0]);
            }
            else
                this.getNewConversation(changes.newMessage.currentValue[0]);
        }
        if (((_e = (_d = changes.newComment) === null || _d === void 0 ? void 0 : _d.currentValue) === null || _e === void 0 ? void 0 : _e.field) == 'feed') {
            let newCommentFB = changes.newComment.currentValue.value;
            //Trường hợp là comment cha, không phải reply comment
            if (newCommentFB.post_id == newCommentFB.parent_id) {
                let user = this.listUserComment.find(item => { var _a; return item.id == ((_a = newCommentFB.from) === null || _a === void 0 ? void 0 : _a.id); });
                if (user) {
                    this.listCommentPost.unshift(this.renderDataNewComment(newCommentFB, user));
                    this.listSubCommentPost = [...this.listCommentPost];
                }
                else {
                    this.fbService.getInfoUser(newCommentFB.from.id, this.fanpageSelected['access_token']).then(res => {
                        if (!res.error) {
                            this.listUserComment.push(res);
                            this.renderDataNewComment(newCommentFB, res);
                        }
                    });
                }
            }
        }
    }
    //bắn message qua chi tiết tin nhắn
    emitNewMessage(messageInfo) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let data = {
            id: messageInfo.message.mid,
            from: { id: (_a = messageInfo.sender) === null || _a === void 0 ? void 0 : _a.id },
            created_time: new Date().toISOString(),
            message: messageInfo.message.text,
            to: { data: [{ id: messageInfo === null || messageInfo === void 0 ? void 0 : messageInfo.recipient.id }] }
        };
        if ((_b = messageInfo.message) === null || _b === void 0 ? void 0 : _b.attachments)
            data = Object.assign(Object.assign({}, data), { attachments: {
                    data: [{ id: '', type: (_d = (_c = messageInfo.message) === null || _c === void 0 ? void 0 : _c.attachments[0]) === null || _d === void 0 ? void 0 : _d.type, image_data: { url: (_g = (_f = (_e = messageInfo.message) === null || _e === void 0 ? void 0 : _e.attachments[0]) === null || _f === void 0 ? void 0 : _f.payload) === null || _g === void 0 ? void 0 : _g.url, preview_url: (_k = (_j = (_h = messageInfo.message) === null || _h === void 0 ? void 0 : _h.attachments[0]) === null || _j === void 0 ? void 0 : _j.payload) === null || _k === void 0 ? void 0 : _k.url } }]
                } });
        this.emitNewMessageFB.emit(data);
    }
    //subscribe router
    subscribeRouter() {
        this.routes.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(params => (params.conversationId || params.commentId || params.deleteCommentID)))
            .subscribe(val => {
            if (val.conversationId)
                this.conversationId = val.conversationId;
            else if (val.commentId)
                this.commentId = val.commentId;
            else if (val.deleteCommentID)
                this.deleteCommentInList(val.deleteCommentID);
        });
    }
    deleteCommentInList(id) {
        this.listCommentPost.splice(this.listCommentPost.findIndex(item => item.id == id), 1);
        this.changeInfoSender.emit({ id: '' });
        this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook/conversation']);
    }
    ngAfterViewChecked() {
        if (document.getElementById('conversation-inbox') && document.querySelector('.facebook-tabs') && document.querySelector('.facebook-header-user') && document.getElementById('block-conversation-inbox')) {
            let height = document.getElementById('conversation-inbox').clientHeight - document.querySelector('.facebook-tabs').clientHeight
                - document.querySelector('.facebook-header-user').clientHeight - 32;
            document.getElementById('block-conversation-inbox').style.height = `${height}px`;
        }
    }
    getData() {
        this.loading = true;
        //bước đầu tiên là lấy danh sách các cuộc hội thoại
        this.fbService.getListConversationID(this.fanpageSelected['access_token'], this.fanpageSelected['id']).then(res => {
            this.listConversation = res.data;
            this.dataPagingMess = res.paging;
            let conversation = [];
            this.listConversation.forEach(item => {
                //bước 2 đối với mỗi cuộc hội thoại phải get danh sách nhắn tin
                conversation.push(this.fbService.getListMessageByConversationID(this.fanpageSelected['access_token'], item.id));
            });
            Promise.all(conversation).then((result) => {
                this.listConversation = result;
                // //bước 3 đối với mỗi tn phải lấy ra tn đầu tiên để hiển thị và get thông tin người gửi
                let messages = [];
                this.listConversation.forEach((item) => {
                    messages.push(this.fbService.getInfoUserByPSID(item.participants.data[0].id, this.fanpageSelected['access_token']));
                });
                Promise.all(messages).then((results) => {
                    for (let index in results) {
                        if (!results[index].error)
                            this.listConversation[index].participants.data[0].profile_pic = results[index].profile_pic;
                        else
                            this.listConversation[index].participants.data[0].profile_pic = 'assets/icon/no-avatar.svg';
                        this.listConversation[index].senderName = this.listConversation[index].participants.data[0].name;
                    }
                    let firstMessage = [];
                    this.listConversation.forEach((item) => {
                        var _a, _b;
                        firstMessage.push(this.fbService.getMessageDetailByMessageID(this.fanpageSelected['access_token'], (_b = (_a = item.messages) === null || _a === void 0 ? void 0 : _a.data[0]) === null || _b === void 0 ? void 0 : _b.id));
                    });
                    this.listSubConversation = this.listConversation;
                    Promise.all(firstMessage).then((results2) => {
                        for (let index in results2) {
                            if (!results2[index].error)
                                this.listConversation[index].messages.data[0] = Object.assign(Object.assign({}, this.listConversation[index].messages.data[0]), results2[index]);
                        }
                        //Bước 4 : lấy danh sách các bài post về
                        this.fbService.getAllPostInPageByID(this.fanpageSelected['access_token'], this.fanpageSelected['id']).then(result3 => {
                            this.dataPagingPost = result3.paging;
                            let processPost = [];
                            //Bước 5: lấy danh sách từng comment dựa trên mỗi bài post
                            result3.data.forEach(item => processPost.push(this.fbService.getCommentByPostID(this.fanpageSelected['access_token'], item.id)));
                            Promise.all(processPost).then((result4) => {
                                let commentArray = [];
                                let detailCommentArray = [];
                                result4.forEach((item, index) => {
                                    item.data.forEach(data => {
                                        commentArray.push(Object.assign({ id_post: result3.data[index].id }, data));
                                        detailCommentArray.push(this.fbService.getCommentByID(this.fanpageSelected['access_token'], data.id));
                                    });
                                });
                                //Bước 6 Lấy chi tiết comment
                                Promise.all(detailCommentArray).then((result5) => {
                                    this.listCommentPost = result5.map((item, index) => {
                                        return Object.assign(Object.assign({}, commentArray[index]), item);
                                    });
                                    Promise.all(this.getListIDUser(this.listCommentPost)).then((result6) => {
                                        this.listUserComment = result6;
                                        this.renderListUserIntoPost(result6);
                                        this.loading = false;
                                    }).catch(() => { this.messageError(); this.loading = false; });
                                }).catch(() => { this.messageError(); this.loading = false; });
                            }).catch(() => { this.messageError(); this.loading = false; });
                        });
                    }).catch(() => { this.messageError(); this.loading = false; });
                }).catch(() => { this.messageError(); this.loading = false; });
            }).catch(() => { this.messageError(); this.loading = false; });
        }).catch(() => { this.messageError(); this.loading = false; });
    }
    /**
     * Thay đổi page quản lý
     */
    changePage(page) {
        this.fanpageSelected = page;
        this.changeFanpageSelected.emit(this.fanpageSelected);
        this.clearPageSelected();
        this.getData();
    }
    /**
     * Xóa page này ra khỏi list chọn, vì page này là page hiện hành
     */
    clearPageSelected() {
        let listTemp = [...this.listSubFanpage];
        listTemp.splice(listTemp.findIndex(item => item.id == this.fanpageSelected.id), 1);
        this.listFanpage = [...listTemp];
    }
    logout() {
        this.fbService.setStatusLogin(false);
        this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook']);
    }
    viewMessageDetail(conversation) {
        var _a;
        this.changeInfoSender.emit((_a = conversation.participants) === null || _a === void 0 ? void 0 : _a.data[0]);
        this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook/conversation'], { queryParams: { conversationId: conversation.id } });
    }
    viewCommentDetail(comment) {
        var _a, _b, _c, _d, _e;
        let dataUser = {
            id: (_a = comment.participants) === null || _a === void 0 ? void 0 : _a.data[0].id,
            name: (_b = comment.participants) === null || _b === void 0 ? void 0 : _b.data[0].name,
            profile_pic: (_e = (_d = (_c = comment.participants) === null || _c === void 0 ? void 0 : _c.data[0].picture) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.url
        };
        this.changeInfoSender.emit(dataUser);
        this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook/conversation'], { queryParams: { commentId: comment.id } });
    }
    searchUser(value) {
        let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
        if (this.selectedIndex == 0)
            this.listConversation = this.vhAlgorithm.searchList(val, this.listSubConversation, ['senderName']);
        else
            this.listCommentPost = this.vhAlgorithm.searchList(val, this.listSubCommentPost, ['senderName']);
    }
    /**
     * Hàm này trả về danh sách những id_user đã comment
     * @param listComment
     */
    getListIDUser(listComment) {
        let arrayID = [];
        let listArrayReturn = [];
        listComment.forEach(item => {
            if (item.from && this.fanpageSelected.id != item.from.id && !arrayID.includes(item.from.id)) {
                arrayID.push(item.from.id);
                listArrayReturn.push(this.fbService.getInfoUser(item.from.id, this.fanpageSelected['access_token']));
            }
        });
        return listArrayReturn;
    }
    messageError() {
        this.vhComponent.alertMessageDesktop('error', 'Xảy ra lỗi trong lỗi quá trình đồng bộ');
    }
    renderListUserIntoPost(listUser) {
        this.listCommentPost.forEach(item => {
            if (item.from && item.from.id == this.fanpageSelected.id) {
                item.senderName = this.fanpageSelected.name;
                item.participants = { data: [] };
                item.participants.data[0] = {
                    id: this.fanpageSelected.id,
                    name: this.fanpageSelected.name,
                    picture: {
                        data: { url: this.fanpageSelected.image_url }
                    }
                };
            }
            else if (item.from && item.from.id != this.fanpageSelected.id) {
                let user = listUser.find(userInfo => userInfo.id == item.from.id);
                item.participants = { data: [] };
                item.participants.data[0] = user;
                item.senderName = user.name;
            }
        });
        this.listCommentPost = this.vhAlgorithm.sortDatebyDESC(this.listCommentPost, 'created_time');
        this.listSubCommentPost = [...this.listCommentPost];
    }
    trackByFnChat(index, item) {
        return index;
    }
    getNewConversation(data) {
        //lấy về danh sách hội thoại sau đó ra cuộc hội thoại đầu tiên
        this.fbService.getListConversationID(this.fanpageSelected['access_token'], this.fanpageSelected['id']).then((result1) => {
            if (!result1.error) {
                let newConversation = result1.data[0];
                //lấy danh sách tin nhắn của cuộc hội thoại này về
                this.fbService.getListMessageByConversationID(this.fanpageSelected['access_token'], newConversation.id).then((result2) => {
                    if (!result2.error) {
                        newConversation = result2;
                        //lấy thông tin người nhắn về
                        this.fbService.getInfoUserByPSID(result2.participants.data[0].id, this.fanpageSelected['access_token']).then((result3) => {
                            if (!result3.error)
                                newConversation.participants.data[0].profile_pic = result3.profile_pic;
                            else
                                newConversation.participants.data[0].profile_pic = 'assets/icon/no-avatar.svg';
                            newConversation.senderName = newConversation.participants.data[0].name;
                            newConversation.messages.data[0] = Object.assign(Object.assign(Object.assign({}, newConversation.messages.data[0]), data), { message: data.message.text || '' });
                            this.listConversation.unshift(newConversation);
                        });
                    }
                });
            }
        });
    }
    //hàm này để render dữ liệu khớp với dữ liệu trong listComment hiện tại
    renderDataNewComment(data, user) {
        return {
            id_post: data.id_post, created_time: data.created_time, from: data.from,
            message: data.message, id: data.comment_id, can_comment: true, can_remove: true, can_hide: true,
            can_like: true, can_reply_privately: true, comment_count: 0, like_count: 0, user_likes: false, is_hidden: false,
            participants: { data: [user] }, senderName: user.name
        };
    }
    /**Tải thêm tin nhắn */
    loadMoreMessage() {
        this.loadingMoreMessage = true;
        this.fbService.getNextPaging(this.dataPagingMess.next).then(res => {
            if (res.error) {
                this.messageError();
                this.loadingMoreMessage = false;
            }
            else {
                this.dataPagingMess = res.paging;
                let listConversation = res.data;
                let conversation = [];
                listConversation.forEach(item => {
                    //bước 2 đối với mỗi cuộc hội thoại phải get danh sách nhắn tin
                    conversation.push(this.fbService.getListMessageByConversationID(this.fanpageSelected['access_token'], item.id));
                });
                Promise.all(conversation).then((result) => {
                    listConversation = result;
                    // //bước 3 đối với mỗi tn phải lấy ra tn đầu tiên để hiển thị và get thông tin người gửi
                    let messages = [];
                    listConversation.forEach((item) => {
                        messages.push(this.fbService.getInfoUserByPSID(item.participants.data[0].id, this.fanpageSelected['access_token']));
                    });
                    Promise.all(messages).then((results) => {
                        for (let index in results) {
                            if (!results[index].error)
                                listConversation[index].participants.data[0].profile_pic = results[index].profile_pic;
                            else
                                listConversation[index].participants.data[0].profile_pic = 'assets/icon/no-avatar.svg';
                            listConversation.senderName = listConversation[index].participants.data[0].name;
                        }
                        let firstMessage = [];
                        listConversation.forEach((item) => {
                            var _a, _b;
                            firstMessage.push(this.fbService.getMessageDetailByMessageID(this.fanpageSelected['access_token'], (_b = (_a = item.messages) === null || _a === void 0 ? void 0 : _a.data[0]) === null || _b === void 0 ? void 0 : _b.id));
                        });
                        Promise.all(firstMessage).then((results2) => {
                            for (let index in results2) {
                                if (!results2[index].error)
                                    listConversation[index].messages.data[0] = Object.assign(Object.assign({}, listConversation[index].messages.data[0]), results2[index]);
                            }
                            this.listConversation = this.listConversation.concat(listConversation);
                            this.listSubConversation = [...this.listConversation];
                            this.loadingMoreMessage = false;
                        });
                    });
                });
            }
        });
    }
    displayingSenderAction(item) {
        var _a;
        if (item.unread_count >= 0) {
            this.fbService.displayingSenderAction(this.fanpageSelected['access_token'], (_a = item.participants) === null || _a === void 0 ? void 0 : _a.data[0].id, 'typing_on').then(res => item.unread_count = 0);
        }
    }
}
ConversationInboxComponent.ɵfac = function ConversationInboxComponent_Factory(t) { return new (t || ConversationInboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_facebook_service__WEBPACK_IMPORTED_MODULE_0__.FacebookService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm)); };
ConversationInboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConversationInboxComponent, selectors: [["app-conversation-inbox"]], inputs: { listFanpage: "listFanpage", newMessage: "newMessage", newComment: "newComment" }, outputs: { changeFanpageSelected: "changeFanpageSelected", changeInfoSender: "changeInfoSender", emitNewMessageFB: "emitNewMessageFB" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 25, vars: 12, consts: [["id", "conversation-inbox", 1, "layout"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "facebook-header-user"], ["nzTrigger", "click", "nz-dropdown", "", 1, "facebook-header-user-picture", 3, "nzDropdownMenu"], ["alt", "", 3, "src"], [1, "status", "active"], ["user", "nzDropdownMenu"], ["nz-menu", "", 2, "width", "100%", "background-color", "white", "border-radius", "4px", "max-width", "300px"], ["style", "margin: 4px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;", "nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"], ["stype", "border-radius: 15px;width: 30px;margin-right: 4px;", "nz-menu-item", "", 3, "click"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 1, "facebook-tabs"], [3, "nzSelectedIndex", "nzSelectedIndexChange"], [3, "nzTitle"], ["titleTinNhan", ""], ["titleBinhLuan", ""], [3, "nzLoading", "nzActive", 4, "ngIf"], ["nz-menu-item", "", 2, "margin", "4px", "white-space", "nowrap", "text-overflow", "ellipsis", "overflow", "hidden", 3, "nzSelected", "click"], ["alt", "", 2, "border-radius", "15px", "width", "30px", "margin-right", "4px", 3, "src"], ["nz-icon", "", "nzType", "message", "nzTheme", "outline"], ["nz-icon", "", "nzType", "comment", "nzTheme", "outline"], [3, "nzLoading", "nzActive"], ["id", "block-conversation-inbox", 1, "block-conversation", "ant-table-body"], ["nz-col", "", "nzSpan", "24", "class", "conversation-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-col", "", "nzSpan", "24", "class", "view-more", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "conversation-item", 3, "ngClass", "click"], [1, "conversation-item-avatar"], [1, "image-placeholder"], ["width", "19", "height", "19", "viewBox", "0 0 19 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "svg-icon"], ["cx", "9.49996", "cy", "9.77172", "rx", "7.32857", "ry", "5.97143", "fill", "white"], ["d", "M9.52107 0C4.15702 0 0 3.92048 0 9.21585C0 11.9856 1.13808 14.3791 2.99058 16.0325C3.31044 16.3201 3.24456 16.4868 3.29895 18.2631C3.30323 18.3876 3.33789 18.5091 3.39991 18.617C3.46192 18.725 3.54941 18.8161 3.65473 18.8825C3.76005 18.9489 3.88002 18.9885 4.00416 18.9978C4.1283 19.0072 4.25285 18.9861 4.36694 18.9362C6.39373 18.0436 6.41978 17.9732 6.76339 18.0666C12.6354 19.6829 19 15.9248 19 9.21585C19 3.92048 14.8855 0 9.52107 0ZM15.2379 7.09204L12.4416 11.5193C12.336 11.6858 12.1971 11.8287 12.0337 11.939C11.8703 12.0493 11.6859 12.1247 11.492 12.1604C11.2982 12.1961 11.099 12.1914 10.907 12.1465C10.7151 12.1017 10.5344 12.0177 10.3765 11.8997L8.15161 10.2345C8.05215 10.1599 7.93118 10.1195 7.80686 10.1195C7.68253 10.1195 7.56156 10.1599 7.4621 10.2345L4.46002 12.5115C4.05933 12.8153 3.53454 12.3353 3.8046 11.9112L6.60097 7.48393C6.70653 7.31741 6.84535 7.17449 7.00874 7.06414C7.17213 6.9538 7.35655 6.8784 7.55044 6.84269C7.74434 6.80697 7.94352 6.8117 8.1355 6.85659C8.32747 6.90147 8.50811 6.98555 8.66607 7.10353L10.8901 8.76841C10.9896 8.84301 11.1106 8.88334 11.2349 8.88334C11.3592 8.88334 11.4802 8.84301 11.5797 8.76841L14.5833 6.49366C14.9832 6.18796 15.508 6.66758 15.2379 7.09204Z", "fill", "#1877F2"], ["class", "number-message", 4, "ngIf"], [1, "conversation-item-content"], [1, "sender"], [1, "message", 3, "ngStyle"], [1, "conversation-item-time", "text-end"], [1, "number-message"], ["nz-col", "", "nzSpan", "24", 1, "view-more"], ["nz-button", "", 3, "click"], ["nz-icon", "", 3, "nzType", "nzSpin"], [1, "no-data"], ["nz-col", "", "nzSpan", "24", "class", "conversation-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["width", "19", "height", "19", "rx", "9.5", "fill", "#34518C"], ["d", "M7.29975 15.6471V9.87839H5.58789V7.80136H7.29975V6.02731C7.29975 4.63324 8.31095 3.35303 10.641 3.35303C11.5844 3.35303 12.2819 3.43362 12.2819 3.43362L12.227 5.37321C12.227 5.37321 11.5156 5.36704 10.7392 5.36704C9.89896 5.36704 9.76434 5.71207 9.76434 6.28474V7.80136H12.2938L12.1837 9.87839H9.76434V15.6471H7.29975Z", "fill", "white"], [1, "message"]], template: function ConversationInboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-dropdown-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ConversationInboxComponent_li_10_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConversationInboxComponent_Template_li_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u0110\u0103ng xu\u1EA5t");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConversationInboxComponent_Template_input_ngModelChange_13_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function ConversationInboxComponent_Template_input_ngModelChange_13_listener($event) { return ctx.searchUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nz-tabset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzSelectedIndexChange", function ConversationInboxComponent_Template_nz_tabset_nzSelectedIndexChange_16_listener($event) { return ctx.selectedIndex = $event; })("nzSelectedIndexChange", function ConversationInboxComponent_Template_nz_tabset_nzSelectedIndexChange_16_listener() { return ctx.searchUser(ctx.searchValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ConversationInboxComponent_ng_template_18_Template, 3, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ConversationInboxComponent_ng_template_21_Template, 3, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ConversationInboxComponent_nz_skeleton_23_Template, 5, 6, "nz-skeleton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ConversationInboxComponent_nz_skeleton_24_Template, 4, 4, "nz-skeleton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDropdownMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.fanpageSelected.image_url || "assets/icon/no-avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listFanpage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 10, "Search by name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedIndex == 1);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuItemDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_15__.NzSkeletonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  overflow: hidden;\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .facebook-header-user[_ngcontent-%COMP%] {\n  padding: 8px;\n  display: flex;\n  justify-content: space-between;\n}\n.layout[_ngcontent-%COMP%]   .facebook-header-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.layout[_ngcontent-%COMP%]   .facebook-header-user-picture[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  cursor: pointer;\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .facebook-header-user-picture[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  background: #47d55e;\n  border: 1px solid #fff;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  position: absolute;\n  right: 10px;\n  bottom: -4px;\n  box-sizing: border-box;\n}\n.layout[_ngcontent-%COMP%]   .facebook-header-user[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-tabs[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.layout[_ngcontent-%COMP%]   .facebook-tabs[_ngcontent-%COMP%]   nz-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-right: 4px;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 100%;\n  grid-template-columns: 60px auto 60px;\n  cursor: pointer;\n  padding: 16px 8px;\n  overflow-y: auto;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  grid-column: 1/2;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-avatar[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-avatar[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-avatar[_ngcontent-%COMP%]   .image-placeholder[_ngcontent-%COMP%]   .svg-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-content[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .conversation-item-content[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%] {\n  max-width: 120px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-content[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item-time[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  font-size: 0.8rem;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .number-message[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -4px;\n  top: -4px;\n  width: 16px;\n  height: 16px;\n  background: #ff5722;\n  border-radius: 100%;\n  text-align: center;\n  color: #fff;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.layout[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]:hover {\n  background-color: #bfb0b024;\n  transition: 0.2s;\n}\n.layout[_ngcontent-%COMP%]   .block-conversation[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.layout[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.layout[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px !important;\n  border-radius: 0 !important;\n}\n.layout[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.layout[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%]:focus   button[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  color: var(--ion-color-vh-green) !important;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #bfb0b024;\n  border-right: 2px solid var(--ion-color-vh-green);\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1pbmJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR1o7QUFGWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBSWhCO0FBRFE7RUFDSSxrQkFBQTtBQUdaO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFBWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFFaEI7QUFFSTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0FBRWhCO0FBRGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdwQjtBQURnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHcEI7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7QUFBWTs7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksaUJBQUE7QUFFaEI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUVJO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUFSO0FBQ1E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNaO0FBQVk7RUFDSSxpQkFBQTtBQUVoQjtBQUVJOztFQUVJLGdCQUFBO0VBQ0EsMkNBQUE7QUFBUjtBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQUo7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoiY29udmVyc2F0aW9uLWluYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmZhY2Vib29rLWhlYWRlci11c2VyIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXBpY3R1cmUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0N2Q1NWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZhY2Vib29rLXRhYnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBuei10YWIge1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udmVyc2F0aW9uLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvIDYwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgJi1hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgICAgICAgICAgLmltYWdlLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3ZnLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgICAgICAgICAgLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIC5zZW5kZXIge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aW1lIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5udW1iZXItbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IC00cHg7XHJcbiAgICAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmNTcyMjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnZlcnNhdGlvbi1pdGVtOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiMGIwMjQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgIH1cclxuICAgIC5ibG9jay1jb252ZXJzYXRpb24ge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbiAgICAudmlldy1tb3JlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC52aWV3LW1vcmU6aG92ZXIgYnV0dG9uLFxyXG4gICAgLnZpZXctbW9yZTpmb2N1cyBidXR0b24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmIwYjAyNDtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmluZmluaXRlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 63772:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/facebook-conversation.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookConversationComponent": () => (/* binding */ FacebookConversationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/facebook.service */ 69404);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _conversation_inbox_conversation_inbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation-inbox/conversation-inbox.component */ 5639);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversation-detail/conversation-detail.component */ 74842);
/* harmony import */ var _waiting_select_user_waiting_select_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waiting-select-user/waiting-select-user.component */ 89577);
/* harmony import */ var _conversation_dialog_conversation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conversation-dialog/conversation-dialog.component */ 95979);
/* harmony import */ var _conversation_comment_conversation_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversation-comment/conversation-comment.component */ 25006);










function FacebookConversationComponent_app_conversation_dialog_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-conversation-dialog", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pushMessage", ctx_r0.pushMessage)("infoSender", ctx_r0.infoSender)("fanpageSelected", ctx_r0.fanpageSelected);
} }
function FacebookConversationComponent_app_conversation_comment_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-conversation-comment", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("infoSender", ctx_r1.infoSender)("fanpageSelected", ctx_r1.fanpageSelected);
} }
const _c0 = function (a0) { return { "display": a0 }; };
class FacebookConversationComponent {
    constructor(fbService, routes, vhQuerySales) {
        this.fbService = fbService;
        this.routes = routes;
        this.vhQuerySales = vhQuerySales;
        this.listFanpage = [];
        this.fanpageSelected = {};
        this.infoSender = {}; //thông tin người gửi tin nhắn
        this.typeDialog = 1; //1 là message , 2 là comment
        this.newMessage = {};
        this.newComment = {};
        this.pushMessage = {};
        this.list_earning_point_bills = [];
        this.list_earning_points_products = [];
        this.customer_group = [];
        this.subscribeParams();
    }
    ngOnInit() {
        this.listFanpage = this.fbService.getListAccountConnect().listPage;
        this.fanpageSelected = this.listFanpage[0];
        //lắng nghe message
        this.subscribePage(this.fanpageSelected.id);
        this.getSaleProgram();
    }
    getSaleProgram() {
        Promise.all([
            this.vhQuerySales.getEarningPointsBills(),
            this.vhQuerySales.getEarningPointsProducts(),
        ])
            .then(([earning_point_bills, earning_points_products,]) => {
            this.list_earning_point_bills = earning_point_bills;
            this.list_earning_points_products = earning_points_products;
            this.customer_group = this.vhQuerySales.getlocalCustomerClasss();
        });
    }
    ngOnDestroy() {
        this.unscriblePage();
    }
    subscribePage(id_page) {
        //lắng nghe message
        this.fbService.connectWebhook(id_page, this.fanpageSelected.access_token);
        this.vhQuerySales.observableWebhookMessagesFacebook(id_page).subscribe((entry) => {
            this.newMessage = entry.messaging;
        });
        //lắng nghe comment
        this.vhQuerySales.observableWebhookFeedFacebook(id_page).subscribe((entry) => {
            if (entry.changes && this.fanpageSelected.id == entry.id)
                this.newComment = entry.changes[0];
        });
    }
    subscribeParams() {
        this.routes.queryParams.subscribe(val => {
            if (val.conversationId)
                this.typeDialog = 1;
            else if (val.commentId)
                this.typeDialog = 2;
        });
    }
    changeFanpageSelected(page) {
        this.unscriblePage();
        if (page)
            this.fanpageSelected = page;
        this.subscribePage(this.fanpageSelected.id);
    }
    changeInfoSender(info) {
        info && (this.infoSender = info);
    }
    emitNewMessageFB(event) {
        if (event) {
            event.from.name = this.infoSender.name;
            event.from.profile_pic = this.infoSender.profile_pic;
            this.pushMessage = event;
        }
    }
    unscriblePage() {
        this.vhQuerySales.unsubscribeWebhookMessagesFacebook(this.fanpageSelected.id);
        this.vhQuerySales.unsubscribeWebhookFeedFacebook(this.fanpageSelected.id);
    }
    test(event) {
        this.infoSender = Object.assign(Object.assign({}, event), this.infoSender);
    }
}
FacebookConversationComponent.ɵfac = function FacebookConversationComponent_Factory(t) { return new (t || FacebookConversationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_facebook_service__WEBPACK_IMPORTED_MODULE_0__.FacebookService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuerySales)); };
FacebookConversationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FacebookConversationComponent, selectors: [["app-facebook-conversation"]], decls: 10, vars: 18, consts: [[1, "conversation"], [1, "conversation-inbox"], [3, "newMessage", "newComment", "listFanpage", "changeInfoSender", "emitNewMessageFB", "changeFanpageSelected"], [1, "conversation-dialog", 3, "ngStyle"], [3, "pushMessage", "infoSender", "fanpageSelected", 4, "ngIf"], [3, "infoSender", "fanpageSelected", 4, "ngIf"], [1, "conversation-detail", 3, "ngStyle"], [3, "infoSender", "customer_group", "list_earning_point_bills", "list_earning_points_products", "addCustomerEvent"], [1, "conversation-select-user", 3, "ngStyle"], [3, "pushMessage", "infoSender", "fanpageSelected"], [3, "infoSender", "fanpageSelected"]], template: function FacebookConversationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "app-conversation-inbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changeInfoSender", function FacebookConversationComponent_Template_app_conversation_inbox_changeInfoSender_2_listener($event) { return ctx.changeInfoSender($event); })("emitNewMessageFB", function FacebookConversationComponent_Template_app_conversation_inbox_emitNewMessageFB_2_listener($event) { return ctx.emitNewMessageFB($event); })("changeFanpageSelected", function FacebookConversationComponent_Template_app_conversation_inbox_changeFanpageSelected_2_listener($event) { return ctx.changeFanpageSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FacebookConversationComponent_app_conversation_dialog_4_Template, 1, 3, "app-conversation-dialog", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, FacebookConversationComponent_app_conversation_comment_5_Template, 1, 2, "app-conversation-comment", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-conversation-detail", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("addCustomerEvent", function FacebookConversationComponent_Template_app_conversation_detail_addCustomerEvent_7_listener($event) { return ctx.test($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-waiting-select-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("newMessage", ctx.newMessage)("newComment", ctx.newComment)("listFanpage", ctx.listFanpage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c0, ctx.infoSender.id ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.typeDialog == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.typeDialog == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c0, ctx.infoSender.id ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("infoSender", ctx.infoSender)("customer_group", ctx.customer_group)("list_earning_point_bills", ctx.list_earning_point_bills)("list_earning_points_products", ctx.list_earning_points_products);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c0, ctx.infoSender.id ? "none" : "block"));
    } }, directives: [_conversation_inbox_conversation_inbox_component__WEBPACK_IMPORTED_MODULE_1__.ConversationInboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_2__.ConversationDetailComponent, _waiting_select_user_waiting_select_user_component__WEBPACK_IMPORTED_MODULE_3__.WaitingSelectUserComponent, _conversation_dialog_conversation_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ConversationDialogComponent, _conversation_comment_conversation_comment_component__WEBPACK_IMPORTED_MODULE_5__.ConversationCommentComponent], styles: [".conversation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 100%;\n}\n.conversation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.25) -1px 0px 4px;\n}\n.conversation-inbox[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.conversation-dialog[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.conversation-detail[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.conversation-select-user[_ngcontent-%COMP%] {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2Vib29rLWNvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksNENBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtBQUVSIiwiZmlsZSI6ImZhY2Vib29rLWNvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb252ZXJzYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgID4gZGl2IHtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNSUpIC0xcHggMHB4IDRweDtcclxuICAgIH1cclxuICAgICYtaW5ib3gge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgICAmLWRpYWxvZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgICYtZGV0YWlsIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG4gICAgJi1zZWxlY3QtdXNlciB7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 73698:
/*!******************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/facebook-conversation.module.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookConversationModule": () => (/* binding */ FacebookConversationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _facebook_conversation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook-conversation.component */ 63772);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _conversation_inbox_conversation_inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversation-inbox/conversation-inbox.component */ 5639);
/* harmony import */ var _conversation_dialog_conversation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation-dialog/conversation-dialog.component */ 95979);
/* harmony import */ var _conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conversation-detail/conversation-detail.component */ 74842);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _waiting_select_user_waiting_select_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waiting-select-user/waiting-select-user.component */ 89577);
/* harmony import */ var _conversation_detail_components_fb_info_user_fb_info_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation-detail/components/fb-info-user/fb-info-user.component */ 62331);
/* harmony import */ var _conversation_detail_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversation-detail/components/add-customer/add-customer.component */ 850);
/* harmony import */ var _conversation_detail_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conversation-detail/components/customer-profile/customer-profile.component */ 42786);
/* harmony import */ var _conversation_detail_components_fb_create_order_fb_create_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conversation-detail/components/fb-create-order/fb-create-order.component */ 89861);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _conversation_detail_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./conversation-detail/components/staff/staff.component */ 7356);
/* harmony import */ var _conversation_detail_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./conversation-detail/components/customer/customer.component */ 39129);
/* harmony import */ var _conversation_detail_components_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./conversation-detail/components/delivery/delivery.component */ 4209);
/* harmony import */ var _conversation_detail_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./conversation-detail/components/tax/tax.component */ 2392);
/* harmony import */ var _conversation_comment_conversation_comment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conversation-comment/conversation-comment.component */ 25006);
/* harmony import */ var _conversation_detail_components_check_fees_check_fees_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./conversation-detail/components/check-fees/check-fees.component */ 33161);
/* harmony import */ var src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/sales/components/search/search.module */ 43818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);

























const routes = [
    {
        path: '',
        component: _facebook_conversation_component__WEBPACK_IMPORTED_MODULE_0__.FacebookConversationComponent
    },
];
class FacebookConversationModule {
}
FacebookConversationModule.ɵfac = function FacebookConversationModule_Factory(t) { return new (t || FacebookConversationModule)(); };
FacebookConversationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: FacebookConversationModule });
FacebookConversationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.ScrollingModule,
            src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_16__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](FacebookConversationModule, { declarations: [_facebook_conversation_component__WEBPACK_IMPORTED_MODULE_0__.FacebookConversationComponent, _conversation_inbox_conversation_inbox_component__WEBPACK_IMPORTED_MODULE_2__.ConversationInboxComponent, _conversation_dialog_conversation_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConversationDialogComponent, _conversation_detail_conversation_detail_component__WEBPACK_IMPORTED_MODULE_4__.ConversationDetailComponent, _waiting_select_user_waiting_select_user_component__WEBPACK_IMPORTED_MODULE_5__.WaitingSelectUserComponent, _conversation_detail_components_fb_info_user_fb_info_user_component__WEBPACK_IMPORTED_MODULE_6__.FbInfoUserComponent, _conversation_detail_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_7__.AddCustomerComponent, _conversation_detail_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_8__.CustomerProfileComponent, _conversation_detail_components_fb_create_order_fb_create_order_component__WEBPACK_IMPORTED_MODULE_9__.FbCreateOrderComponent, _conversation_detail_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__.StaffComponent, _conversation_detail_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__.CustomerComponent, _conversation_detail_components_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_12__.DeliveryComponent, _conversation_detail_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_13__.TaxComponent, _conversation_comment_conversation_comment_component__WEBPACK_IMPORTED_MODULE_14__.ConversationCommentComponent, _conversation_detail_components_check_fees_check_fees_component__WEBPACK_IMPORTED_MODULE_15__.CheckFeesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.ScrollingModule,
        src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_16__.SearchModule] }); })();


/***/ }),

/***/ 89577:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook-conversation/waiting-select-user/waiting-select-user.component.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingSelectUserComponent": () => (/* binding */ WaitingSelectUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


class WaitingSelectUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
WaitingSelectUserComponent.ɵfac = function WaitingSelectUserComponent_Factory(t) { return new (t || WaitingSelectUserComponent)(); };
WaitingSelectUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitingSelectUserComponent, selectors: [["app-waiting-select-user"]], decls: 29, vars: 3, consts: [[1, "dialog-empty"], [1, "icon-empty-page-container"], [1, "icon-empty-page-item"], [1, "icon-empty-page-item-avatar"], [1, "icon-empty-page-item-list"], [1, "icon-empty-page-item-list-item"], [2, "font-size", "0.9rem"]], template: function WaitingSelectUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 1, "Please select a conversation"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".dialog-empty[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%] {\n  width: 156.37px;\n  height: 220px;\n  margin: 0 auto 25px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.6s;\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%]   .icon-empty-page-item[_ngcontent-%COMP%] {\n  height: 47.24px;\n  width: 156.37px;\n  border-radius: 8px;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  margin-bottom: 9px;\n  position: relative;\n  box-shadow: 0 2px 6px 0 rgba(166, 174, 188, 0.32);\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%]   .icon-empty-page-item[_ngcontent-%COMP%]   .icon-empty-page-item-avatar[_ngcontent-%COMP%] {\n  height: 34.81px;\n  width: 34.93px;\n  background-color: #dae0e6;\n  border-radius: 50%;\n  margin: 6px;\n  display: inline-block;\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%]   .icon-empty-page-item[_ngcontent-%COMP%]   .icon-empty-page-item-list-item[_ngcontent-%COMP%] {\n  height: 7.05px;\n  border-radius: 8.5px;\n  background-color: #dae0e6;\n  margin-bottom: 4.5px;\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%]   .icon-empty-page-item[_ngcontent-%COMP%]   .icon-empty-page-item-list-item[_ngcontent-%COMP%]:nth-child(1) {\n  width: 97px;\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%]   .icon-empty-page-item[_ngcontent-%COMP%]   .icon-empty-page-item-list-item[_ngcontent-%COMP%]:nth-child(2) {\n  width: 74px;\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%]   .icon-empty-page-item[_ngcontent-%COMP%]   .icon-empty-page-item-list-item[_ngcontent-%COMP%]:nth-child(3) {\n  width: 27.45px;\n  opacity: 0.5;\n  background-color: #dae0e6;\n}\n.dialog-empty[_ngcontent-%COMP%]   .icon-empty-page-container[_ngcontent-%COMP%]:hover   .icon-empty-page-item[_ngcontent-%COMP%]:nth-child(2) {\n  height: 47.24px;\n  width: 156.37px;\n  border-radius: 8px;\n  background-color: #4c9aff;\n  display: flex;\n  align-items: center;\n  margin-bottom: 14px;\n  position: relative;\n  left: -25px;\n  box-shadow: 5px 4px 5px 0 rgba(76, 154, 255, 0.5);\n  transition: 0.6s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmctc2VsZWN0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUFHWjtBQUZZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBSWhCO0FBRlk7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBSWhCO0FBRlk7RUFDSSxXQUFBO0FBSWhCO0FBRlk7RUFDSSxXQUFBO0FBSWhCO0FBRlk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBSWhCO0FBQUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUFFUiIsImZpbGUiOiJ3YWl0aW5nLXNlbGVjdC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1lbXB0eSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5pY29uLWVtcHR5LXBhZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTU2LjM3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgICAgICAuaWNvbi1lbXB0eS1wYWdlLWl0ZW0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ3LjI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTYuMzdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiKDE2NiAxNzQgMTg4IC8gMzIlKTtcclxuICAgICAgICAgICAgLmljb24tZW1wdHktcGFnZS1pdGVtLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0LjgxcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQuOTNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWUwZTY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbi1lbXB0eS1wYWdlLWl0ZW0tbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNy4wNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOC41cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNC41cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb24tZW1wdHktcGFnZS1pdGVtLWxpc3QtaXRlbTpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb24tZW1wdHktcGFnZS1pdGVtLWxpc3QtaXRlbTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb24tZW1wdHktcGFnZS1pdGVtLWxpc3QtaXRlbTpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3LjQ1cHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb24tZW1wdHktcGFnZS1jb250YWluZXI6aG92ZXIgLmljb24tZW1wdHktcGFnZS1pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgaGVpZ2h0OiA0Ny4yNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTYuMzdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjOWFmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDRweCA1cHggMCByZ2IoNzYgMTU0IDI1NSAvIDUwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_socials-channel_facebook_facebook-conversation_facebook-conversatio-97950d.js.map