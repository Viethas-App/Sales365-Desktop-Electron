"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_delivery_shipping-bill_delivery-ghtk_delivery-ghtk_module_ts"],{

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

/***/ 29890:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/components/add-adddress-customer-ghtk/add-adddress-customer-ghtk.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAdddressCustomerGhtkComponent": () => (/* binding */ AddAdddressCustomerGhtkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
















function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r13.hasError("required"));
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r15.hasError("required"));
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "District is required"), " ");
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r17.hasError("required"));
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Ward is required"), " ");
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r19.hasError("required"));
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Hamlet is required"), " ");
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r21.hasError("required"));
} }
function AddAdddressCustomerGhtkComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, AddAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](53);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](65);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.addInformation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 18, "Receiver Information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 20, "Address(Apartment Number)"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 22, "Ex: No 2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 24, "Province"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 26, "Example: Dong Nai Province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 28, "District"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 30, "Example: Long Thanh District"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 32, "Ward"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 34, "Example: Cam Duong Commune"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 36, "Hamlet"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 38, "Example: Hamlet 1"));
} }
function AddAdddressCustomerGhtkComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddAdddressCustomerGhtkComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddAdddressCustomerGhtkComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.createAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.addInformation.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, "Save"));
} }
const _c0 = function () { return { overflow: "auto" }; };
class AddAdddressCustomerGhtkComponent {
    constructor(languageService, vhQuerySales, vhComponent) {
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.visible_add_address_ghtk = false;
        this.closeAndGetValueAddAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
    }
    ngOnInit() {
        this.initForm();
        this.data_delivery = this.data_add_address_ghtk.data_delivery;
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            hamlet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
    }
    createAddress() {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create address Giao Hang Tiet Kiem ?"), "", "Ok", this.languageService.translate("Cancel"))
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
            id_customer: this.data_add_address_ghtk.billInfo.id_customer,
            type: 2,
            province: this.addInformation.value.province,
            district: this.addInformation.value.district,
            ward: this.addInformation.value.ward,
            address: this.addInformation.value.address,
            hamlet: this.addInformation.value.hamlet,
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
        for (let i in this.data_add_address_ghtk.infoAddress) {
            if (this.data_add_address_ghtk.infoAddress[i].address == data.address && this.data_add_address_ghtk.infoAddress[i].ward == data.ward && this.data_add_address_ghtk.infoAddress[i].hamlet == data.hamlet) {
                result = true;
                id_address = this.data_add_address_ghtk.infoAddress[i]._id;
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
}
AddAdddressCustomerGhtkComponent.ɵfac = function AddAdddressCustomerGhtkComponent_Factory(t) { return new (t || AddAdddressCustomerGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent)); };
AddAdddressCustomerGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddAdddressCustomerGhtkComponent, selectors: [["app-add-adddress-customer-ghtk"]], inputs: { visible_add_address_ghtk: "visible_add_address_ghtk", data_add_address_ghtk: "data_add_address_ghtk" }, outputs: { closeAndGetValueAddAddress: "closeAndGetValueAddAddress" }, decls: 5, vars: 9, consts: [[3, "nzFooter", "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], ["footerTpll", ""], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24"], [3, "nzErrorTip"], ["formControlName", "address", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplAddress", ""], ["formControlName", "province", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplProvince", ""], ["formControlName", "district", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplDistrict", ""], ["formControlName", "ward", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplWard", ""], ["formControlName", "hamlet", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplHamlet", ""], [4, "ngIf"], [2, "float", "right"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", "margin", "0 5px", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", "margin", "0 5px", 3, "disabled", "click"]], template: function AddAdddressCustomerGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function AddAdddressCustomerGhtkComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddAdddressCustomerGhtkComponent_ng_container_2_Template, 66, 40, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddAdddressCustomerGhtkComponent_ng_template_3_Template, 7, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 6, "Create Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFooter", _r1)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0))("nzMaskClosable", true)("nzWidth", 450)("nzVisible", ctx.visible_add_address_ghtk);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_5__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_5__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".input-group[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hZGRkcmVzcy1jdXN0b21lci1naHRrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBSUoiLCJmaWxlIjoiYWRkLWFkZGRyZXNzLWN1c3RvbWVyLWdodGsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAge1xyXG4gICAgcGFkZGluZzogNHB4IDExcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmlucHV0LWdyb3VwLnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYzhjN2NjO1xyXG59XHJcbmg2IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 71753:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/components/choose-method-ghtk/choose-method-ghtk.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChooseMethodGhtkComponent": () => (/* binding */ ChooseMethodGhtkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service */ 43089);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function ChooseMethodGhtkComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "Select service"));
} }
function ChooseMethodGhtkComponent_ng_container_3_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChooseMethodGhtkComponent_ng_container_3_ion_item_3_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.chooseService(ctx_r7.roadService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, ctx_r5.roadService.name_service), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.vhAlgorithm.vhcurrencyunit(ctx_r5.roadService.fee), " ");
} }
function ChooseMethodGhtkComponent_ng_container_3_ion_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChooseMethodGhtkComponent_ng_container_3_ion_item_4_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.chooseService(ctx_r9.flyService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, ctx_r6.flyService.name_service), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit(ctx_r6.flyService.fee), " ");
} }
function ChooseMethodGhtkComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChooseMethodGhtkComponent_ng_container_3_ion_item_3_Template, 8, 4, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ChooseMethodGhtkComponent_ng_container_3_ion_item_4_Template, 8, 4, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.roadService.fee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.flyService.fee);
} }
function ChooseMethodGhtkComponent_ng_template_4_Template(rf, ctx) { }
class ChooseMethodGhtkComponent {
    constructor(languageService, vhComponent, vhAlgorithm, ghtkService) {
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.ghtkService = ghtkService;
        this.chooseMethod = false;
        this.cancelModalMethodGhtk = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.roadService = {
            fee: ''
        };
        this.flyService = {
            fee: ''
        };
        this.setHeight = {
            "height": "400px"
        };
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.ghtkService.calculateFeeGhtk(this.data, 'road'),
                this.ghtkService.calculateFeeGhtk(this.data, 'fly')
            ]).then((res) => {
                this.vhComponent.hideLoading(0).then(() => {
                    if (res[0].success && res[0].fee.delivery) {
                        this.roadService = Object.assign({ name_service: this.languageService.translate("Standard"), type: 1 }, res[0].fee);
                    }
                    else {
                        this.vhComponent.showToast(2000, this.languageService.translate('GHTK does not support delivery at this address, please check again'), "alert-toast");
                    }
                    if (res[1].success && res[1].fee.delivery) {
                        if (this.roadService.fee != res[1].fee.fee) {
                            this.flyService = Object.assign({ name_service: this.languageService.translate("Fast"), type: 2 }, res[1].fee);
                        }
                    }
                });
            }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        });
    }
    goBack() {
        this.cancelModalMethodGhtk.emit(false);
    }
    chooseService(item) {
        this.cancelModalMethodGhtk.emit(item);
    }
}
ChooseMethodGhtkComponent.ɵfac = function ChooseMethodGhtkComponent_Factory(t) { return new (t || ChooseMethodGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_2__.GhtkService)); };
ChooseMethodGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChooseMethodGhtkComponent, selectors: [["app-choose-method-ghtk"]], inputs: { chooseMethod: "chooseMethod", data: ["dataToGetMethod", "data"] }, outputs: { cancelModalMethodGhtk: "cancelModalMethodGhtk" }, decls: 6, vars: 5, consts: [[3, "nzBodyStyle", "nzVisible", "nzWidth", "nzTitle", "nzFooter", "nzOnCancel", "nzVisibleChange"], ["modalTitle", ""], [4, "nzModalContent"], ["footerTpll", ""], [1, "modalGhn"], ["class", "ion-no-padding", 3, "click", 4, "ngIf"], [1, "ion-no-padding", 3, "click"], ["mode", "ios", 2, "text-align", "start", "margin-left", "15px"], ["mode", "ios", "color", "vh-black", 1, "name-category", 2, "font-size", "0.9rem", "font-weight", "700", "padding-bottom", "5px", "text-transform", "capitalize"], ["mode", "ios", 2, "text-align", "end", "margin-right", "0px"], ["mode", "ios", "color", "vh-green", 2, "font-size", "0.8rem", "padding-bottom", "5px", "margin-right", "10px"]], template: function ChooseMethodGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnCancel", function ChooseMethodGhtkComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.goBack(); })("nzVisibleChange", function ChooseMethodGhtkComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.chooseMethod = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChooseMethodGhtkComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChooseMethodGhtkComponent_ng_container_3_Template, 5, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ChooseMethodGhtkComponent_ng_template_4_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", ctx.setHeight)("nzVisible", ctx.chooseMethod)("nzWidth", 400)("nzTitle", _r0)("nzFooter", _r3);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["ion-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS1tZXRob2QtZ2h0ay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJjaG9vc2UtbWV0aG9kLWdodGsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 21846:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/components/edit-adddress-customer-ghtk/edit-adddress-customer-ghtk.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAdddressCustomerGhtkComponent": () => (/* binding */ EditAdddressCustomerGhtkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
















function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r13.hasError("required"));
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r15.hasError("required"));
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "District is required"), " ");
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r17.hasError("required"));
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Ward is required"), " ");
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r19.hasError("required"));
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Hamlet is required"), " ");
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_ng_container_0_Template, 3, 3, "ng-container", 17);
} if (rf & 2) {
    const control_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r21.hasError("required"));
} }
function EditAdddressCustomerGhtkComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_16_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_28_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_40_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_52_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, EditAdddressCustomerGhtkComponent_ng_container_2_ng_template_64_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](53);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](65);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.addInformation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 18, "Receiver Information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 20, "Address(Apartment Number)"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 22, "Ex: No 2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 24, "Province"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 26, "Example: Dong Nai Province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 28, "District"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 30, "Example: Long Thanh District"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 32, "Ward"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 34, "Example: Cam Duong Commune"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 36, "Hamlet"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzErrorTip", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 38, "Example: Hamlet 1"));
} }
function EditAdddressCustomerGhtkComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditAdddressCustomerGhtkComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditAdddressCustomerGhtkComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.deleteAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditAdddressCustomerGhtkComponent_ng_template_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.updateAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "Delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.addInformation.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "Update"));
} }
const _c0 = function () { return { overflow: "auto" }; };
class EditAdddressCustomerGhtkComponent {
    constructor(languageService, vhQuerySales, vhComponent) {
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.visible_edit_address_ghtk = false;
        this.closeAndGetValueEditAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.province = {
            ProvinceName: ''
        };
        this.district = {
            DistrictName: '',
        };
        this.ward = {
            WardName: ''
        };
    }
    ngOnInit() {
        this.initForm();
        this.data_delivery = this.data_edit_address_ghtk.data_delivery;
    }
    initForm() {
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data_edit_address_ghtk.infoAddressChose.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data_edit_address_ghtk.infoAddressChose.province, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data_edit_address_ghtk.infoAddressChose.district, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data_edit_address_ghtk.infoAddressChose.ward, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            hamlet: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.data_edit_address_ghtk.infoAddressChose.hamlet, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
    }
    exportAddress() {
        let data = {
            _id: this.data_edit_address_ghtk.infoAddressChose._id,
            province: this.addInformation.value.province,
            district: this.addInformation.value.district,
            ward: this.addInformation.value.ward,
            address: this.addInformation.value.address,
            hamlet: this.addInformation.value.hamlet,
            date: new Date().toISOString()
        };
        return data;
    }
    /**
    * hàm này dùng để check xem địa chỉ của khách hàng đã có trong database hay chưa
    * result : true là địa chỉ đã được lưu không cần lưu lại, false tức là phải lưu địa chỉ đó lại
    * */
    onClose() {
        this.closeAndGetValueEditAddress.emit(false);
    }
    updateAddress() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQuerySales.updateAddress(this.data_edit_address_ghtk.infoAddressChose._id, this.exportAddress()).then((res) => {
                if (res) {
                    this.vhComponent.hideLoading(0);
                    this.closeAndGetValueEditAddress.emit(this.exportAddress());
                }
                else {
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(2000, this.languageService.translate("An error occurred while udpating address"), "alert-toast");
                }
            });
        });
    }
    deleteAddress() {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to delete address ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.vhQuerySales.deleteAddress(this.data_edit_address_ghtk.infoAddressChose._id).then((res) => {
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
}
EditAdddressCustomerGhtkComponent.ɵfac = function EditAdddressCustomerGhtkComponent_Factory(t) { return new (t || EditAdddressCustomerGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent)); };
EditAdddressCustomerGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditAdddressCustomerGhtkComponent, selectors: [["app-edit-adddress-customer-ghtk"]], inputs: { visible_edit_address_ghtk: "visible_edit_address_ghtk", data_edit_address_ghtk: "data_edit_address_ghtk" }, outputs: { closeAndGetValueEditAddress: "closeAndGetValueEditAddress" }, decls: 5, vars: 9, consts: [[3, "nzFooter", "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], ["footerTpll", ""], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24"], [3, "nzErrorTip"], ["formControlName", "address", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplAddress", ""], ["formControlName", "province", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplProvince", ""], ["formControlName", "district", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplDistrict", ""], ["formControlName", "ward", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplWard", ""], ["formControlName", "hamlet", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplHamlet", ""], [4, "ngIf"], [2, "float", "right"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", "margin", "0 5px", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", "margin", "0 5px", 3, "disabled", "click"]], template: function EditAdddressCustomerGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function EditAdddressCustomerGhtkComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditAdddressCustomerGhtkComponent_ng_container_2_Template, 66, 40, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditAdddressCustomerGhtkComponent_ng_template_3_Template, 10, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 6, "Create Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFooter", _r1)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0))("nzMaskClosable", true)("nzWidth", 450)("nzVisible", ctx.visible_edit_address_ghtk);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_5__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_5__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".input-group[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWRkZHJlc3MtY3VzdG9tZXItZ2h0ay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUlKIiwiZmlsZSI6ImVkaXQtYWRkZHJlc3MtY3VzdG9tZXItZ2h0ay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cCB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5wdXQtZ3JvdXAucGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjOGM3Y2M7XHJcbn1cclxuaDYge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 50695:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/components/list-adddress-customer-ghtk/list-adddress-customer-ghtk.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListAdddressCustomerGhtkComponent": () => (/* binding */ ListAdddressCustomerGhtkComponent)
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
/* harmony import */ var _add_adddress_customer_ghtk_add_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-adddress-customer-ghtk/add-adddress-customer-ghtk.component */ 29890);
/* harmony import */ var _edit_adddress_customer_ghtk_edit_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-adddress-customer-ghtk/edit-adddress-customer-ghtk.component */ 21846);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function ListAdddressCustomerGhtkComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "No data"), " ");
} }
function ListAdddressCustomerGhtkComponent_ng_container_2_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAdddressCustomerGhtkComponent_ng_container_2_ion_item_3_Template_ion_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.chooseAddress(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAdddressCustomerGhtkComponent_ng_container_2_ion_item_3_Template_ion_button_click_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const item_r7 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r10.openEditAddressGhtk(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate5"](" ", item_r7.address, " - ", item_r7.hamlet, ", ", item_r7.ward, " , ", item_r7.district, ", ", item_r7.province, " ");
} }
function ListAdddressCustomerGhtkComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ListAdddressCustomerGhtkComponent_ng_container_2_div_1_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ListAdddressCustomerGhtkComponent_ng_container_2_ion_item_3_Template, 5, 5, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.infoAddress.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.infoAddress);
} }
function ListAdddressCustomerGhtkComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAdddressCustomerGhtkComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListAdddressCustomerGhtkComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.openAddAddressGhtk(); });
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
function ListAdddressCustomerGhtkComponent_app_add_adddress_customer_ghtk_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-add-adddress-customer-ghtk", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeAndGetValueAddAddress", function ListAdddressCustomerGhtkComponent_app_add_adddress_customer_ghtk_5_Template_app_add_adddress_customer_ghtk_closeAndGetValueAddAddress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.closeAndGetValueAddAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible_add_address_ghtk", ctx_r3.visible_add_address_ghtk)("data_add_address_ghtk", ctx_r3.data_add_address_ghtk);
} }
function ListAdddressCustomerGhtkComponent_app_edit_adddress_customer_ghtk_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-edit-adddress-customer-ghtk", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeAndGetValueEditAddress", function ListAdddressCustomerGhtkComponent_app_edit_adddress_customer_ghtk_6_Template_app_edit_adddress_customer_ghtk_closeAndGetValueEditAddress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.closeAndGetValueEditAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible_edit_address_ghtk", ctx_r4.visible_edit_address_ghtk)("data_edit_address_ghtk", ctx_r4.data_edit_address_ghtk);
} }
const _c0 = function () { return { overflow: "auto" }; };
class ListAdddressCustomerGhtkComponent {
    constructor(languageService, vhComponent, vhQuerySales) {
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.visible_list_address = false;
        this.onCloseListAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.infoAddress = [];
        // -----modal add--------
        this.visible_add_address_ghtk = false;
        // -----modal edit--------
        this.visible_edit_address_ghtk = false;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.vhQuerySales.refreshLocalAddresss().then(() => {
            this.infoAddress = this.vhQuerySales.getlocalAddresss().filter(item => item.type == 2 && item.id_customer == this.data_list_address_ghtk.billInfo.id_customer).reverse();
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
    openAddAddressGhtk() {
        this.data_add_address_ghtk = {
            billInfo: this.data_list_address_ghtk.billInfo,
            data_delivery: this.data_list_address_ghtk.data_delivery,
            infoAddress: this.infoAddress
        };
        this.visible_add_address_ghtk = true;
    }
    closeAndGetValueAddAddress(event) {
        if (event) {
            this.getData();
            this.onCloseListAddress.emit(event);
        }
        this.visible_add_address_ghtk = false;
    }
    openEditAddressGhtk(item) {
        this.data_edit_address_ghtk = {
            billInfo: this.data_list_address_ghtk.billInfo,
            data_delivery: this.data_list_address_ghtk.data_delivery,
            infoAddress: this.data_list_address_ghtk.infoAddress,
            infoAddressChose: item
        };
        this.visible_edit_address_ghtk = true;
    }
    closeAndGetValueEditAddress(event) {
        if (event) {
            this.getData();
            this.onCloseListAddress.emit(event);
        }
        this.visible_edit_address_ghtk = false;
    }
}
ListAdddressCustomerGhtkComponent.ɵfac = function ListAdddressCustomerGhtkComponent_Factory(t) { return new (t || ListAdddressCustomerGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales)); };
ListAdddressCustomerGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListAdddressCustomerGhtkComponent, selectors: [["app-list-adddress-customer-ghtk"]], inputs: { visible_list_address: "visible_list_address", data_list_address_ghtk: "data_list_address_ghtk" }, outputs: { onCloseListAddress: "onCloseListAddress" }, decls: 7, vars: 11, consts: [[3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzFooter", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], ["footerTpl", ""], [3, "visible_add_address_ghtk", "data_add_address_ghtk", "closeAndGetValueAddAddress", 4, "ngIf"], [3, "visible_edit_address_ghtk", "data_edit_address_ghtk", "closeAndGetValueEditAddress", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "custom-address-customer"], ["class", "ion-no-padding", 3, "click", 4, "ngFor", "ngForOf"], [1, "no-data"], [1, "ion-no-padding", 3, "click"], [1, "ion-text-wrap", 2, "font-size", "0.9rem", "color", "var(--ion-color-vh-black)", "margin", "0", "padding-left", "6px"], ["mode", "ios", "slot", "end", "fill", "clear", 1, "ion-no-padding", "ion-no-margin", 2, "color", "var(--ion-color-vh-black)", 3, "click"], ["name", "create-outline", "slot", "end"], [2, "float", "right"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", "margin", "0 5px", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", "margin", "0 5px", 3, "click"], [3, "visible_add_address_ghtk", "data_add_address_ghtk", "closeAndGetValueAddAddress"], [3, "visible_edit_address_ghtk", "data_edit_address_ghtk", "closeAndGetValueEditAddress"]], template: function ListAdddressCustomerGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnClose", function ListAdddressCustomerGhtkComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ListAdddressCustomerGhtkComponent_ng_container_2_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ListAdddressCustomerGhtkComponent_ng_template_3_Template, 7, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ListAdddressCustomerGhtkComponent_app_add_adddress_customer_ghtk_5_Template, 1, 2, "app-add-adddress-customer-ghtk", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ListAdddressCustomerGhtkComponent_app_edit_adddress_customer_ghtk_6_Template, 1, 2, "app-edit-adddress-customer-ghtk", 4);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 8, "Address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0))("nzMaskClosable", true)("nzWidth", 450)("nzFooter", _r1)("nzVisible", ctx.visible_list_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visible_add_address_ghtk);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visible_edit_address_ghtk);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _add_adddress_customer_ghtk_add_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_2__.AddAdddressCustomerGhtkComponent, _edit_adddress_customer_ghtk_edit_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_3__.EditAdddressCustomerGhtkComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".custom-address-customer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtYWRkZHJlc3MtY3VzdG9tZXItZ2h0ay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUFBUiIsImZpbGUiOiJsaXN0LWFkZGRyZXNzLWN1c3RvbWVyLWdodGsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWFkZHJlc3MtY3VzdG9tZXIge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 98283:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/create-bill-customer-ghtk/create-bill-customer-ghtk.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillCustomerGhtkComponent": () => (/* binding */ CreateBillCustomerGhtkComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service */ 43089);
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
/* harmony import */ var _components_choose_method_ghtk_choose_method_ghtk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/choose-method-ghtk/choose-method-ghtk.component */ 71753);
/* harmony import */ var _components_list_adddress_customer_ghtk_list_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/list-adddress-customer-ghtk/list-adddress-customer-ghtk.component */ 50695);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























function CreateBillCustomerGhtkComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerGhtkComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateBillCustomerGhtkComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 59);
} if (rf & 2) {
    const control_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r21.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r21.hasError("required"));
} }
function CreateBillCustomerGhtkComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerGhtkComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 59);
} if (rf & 2) {
    const control_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r24.hasError("required"));
} }
function CreateBillCustomerGhtkComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate5"]("", ctx_r4.currentAddress.address, "-", ctx_r4.currentAddress.hamlet, ", ", ctx_r4.currentAddress.ward, ", ", ctx_r4.currentAddress.district, ", ", ctx_r4.currentAddress.province, "");
} }
function CreateBillCustomerGhtkComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r26.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r26.quantity, " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_78_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_78_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Maximun weight 20kg"), " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerGhtkComponent_ng_template_78_ng_container_0_Template, 3, 3, "ng-container", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateBillCustomerGhtkComponent_ng_template_78_ng_container_1_Template, 3, 3, "ng-container", 59);
} if (rf & 2) {
    const control_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r27.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r27.hasError("max"));
} }
function CreateBillCustomerGhtkComponent_ng_template_95_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerGhtkComponent_ng_template_95_ng_container_0_Template, 3, 3, "ng-container", 59);
} if (rf & 2) {
    const control_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r30.hasError("required"));
} }
function CreateBillCustomerGhtkComponent_ng_template_107_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillCustomerGhtkComponent_ng_template_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CreateBillCustomerGhtkComponent_ng_template_107_ng_container_0_Template, 3, 3, "ng-container", 59);
} if (rf & 2) {
    const control_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r32.hasError("required"));
} }
function CreateBillCustomerGhtkComponent_p_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Select service"), "");
} }
function CreateBillCustomerGhtkComponent_p_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx_r14.chooseService.type == 1 ? "Standard" : "Fast"), " - ", ctx_r14.vhAlgorithm.vhcurrencyunit(ctx_r14.chooseService.fee), " ");
} }
function CreateBillCustomerGhtkComponent_nz_option_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 64);
} if (rf & 2) {
    const option_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLabel", option_r34.name)("nzValue", option_r34.value);
} }
function CreateBillCustomerGhtkComponent_nz_option_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 64);
} if (rf & 2) {
    const option_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLabel", option_r35.name)("nzValue", option_r35.value);
} }
function CreateBillCustomerGhtkComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerGhtkComponent_div_134_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r36.not_delivered_fee = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 2, "Enter collection fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r17.not_delivered_fee);
} }
function CreateBillCustomerGhtkComponent_b_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "b", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.vhAlgorithm.vhcurrencyunit(ctx_r18.chooseService.insurance_fee + ctx_r18.chooseService.fee || 0));
} }
function CreateBillCustomerGhtkComponent_app_choose_method_ghtk_174_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-choose-method-ghtk", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cancelModalMethodGhtk", function CreateBillCustomerGhtkComponent_app_choose_method_ghtk_174_Template_app_choose_method_ghtk_cancelModalMethodGhtk_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r38.cancelModalMethodGhtk($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("chooseMethod", ctx_r19.chooseMethod)("dataToGetMethod", ctx_r19.dataToGetMethod);
} }
function CreateBillCustomerGhtkComponent_app_list_adddress_customer_ghtk_175_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-list-adddress-customer-ghtk", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onCloseListAddress", function CreateBillCustomerGhtkComponent_app_list_adddress_customer_ghtk_175_Template_app_list_adddress_customer_ghtk_onCloseListAddress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.onCloseListAddress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible_list_address", ctx_r20.visible_list_address)("data_list_address_ghtk", ctx_r20.data_list_address_ghtk);
} }
const _c0 = function () { return { y: "200px" }; };
const _c1 = function (a0) { return { opacity: a0 }; };
const _c2 = function () { return { standalone: true }; };
class CreateBillCustomerGhtkComponent {
    constructor(router, vhComponent, vhQuerySales, languageService, vhAlgorithm, ghtkService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.vhAlgorithm = vhAlgorithm;
        this.ghtkService = ghtkService;
        this.billDetails = [];
        this.chooseService = {};
        this.infoAddress = [];
        this.currentAddress = {
            ward: ''
        };
        this.tags = [
            {
                name: 'Dễ vỡ',
                value: 1
            },
            {
                name: 'Nông sản/thực phẩm khô',
                value: 7
            },
            {
                name: 'Cho xem hàng',
                value: 10
            },
            {
                name: 'Cho thử hàng/ đồng kiểm',
                value: 11
            },
            {
                name: 'Gọi shop khi khách không nhận hàng, không liên lạc được, sai thông tin',
                value: 13
            },
            {
                name: 'Giao hàng 1 phần chọn sản phẩm',
                value: 17
            },
            {
                name: 'Giao hàng 1 phần đổi trả hàng',
                value: 18
            },
            {
                name: 'Không giao được thu',
                value: 19
            },
            {
                name: 'Hàng nguyên hộp',
                value: 20
            },
            {
                name: 'Thư tín, tài liệu',
                value: 22
            }
        ];
        this.not_delivered_fee = 5000; // phí thu nếu chọn tags là 19
        this.tags_selected = [];
        this.checkPrinter = false;
        this.valueOfPaymentTypeId = "1";
        this.listPaymentTypeId = [
            {
                value: "0",
                name: this.languageService.translate("Pay by receiver")
            },
            {
                value: "1",
                name: this.languageService.translate("Paid by seller")
            }
        ];
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
            hamlet: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(20)]),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            cod: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[0-9,]{1,10}$")]),
            orderValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("^[0-9,]{1,10}$")]),
            transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
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
                this.ghtkService.getWareHouseGhtk(this.data_delivery.token),
                this.vhQuerySales.getlocalAddresss(),
                this.vhQuerySales.getlocalCustomer(this.billInfo.id_customer)
            ]).then((res) => {
                this.vhComponent.hideLoading(0).then(() => {
                    if (res[3]) {
                        this.infoCustomer = res[3];
                        this.addInformation.controls.name.setValue(this.infoCustomer.name);
                        this.addInformation.controls.phone.setValue(this.infoCustomer.phone);
                    }
                    if (res[2]) {
                        let infoAddress = res[2].filter(item => item.id_customer == this.billInfo.id_customer && item.type == 2);
                        if (infoAddress.length) {
                            this.infoAddress = infoAddress.reverse();
                            this.currentAddress = this.infoAddress[0];
                            this.addInformation.controls.address.setValue(this.currentAddress.address);
                            this.addInformation.controls.province.setValue(this.currentAddress.province);
                            this.addInformation.controls.district.setValue(this.currentAddress.district);
                            this.addInformation.controls.ward.setValue(this.currentAddress.ward);
                            this.addInformation.controls.hamlet.setValue(this.currentAddress.hamlet);
                        }
                    }
                    if (res[1]) {
                        this.shops = res[1].data;
                        for (let item of this.shops) {
                            if (item.pick_address_id == this.data_delivery.shop_id) {
                                let data = this.filterAddress(item.address);
                                this.data_delivery = Object.assign(Object.assign({}, this.data_delivery), { pick_name: item.pick_name, pick_tel: item.pick_tel, pick_address: data.pick_address, pick_province: data.pick_province, pick_district: data.pick_district, pick_ward: data.pick_ward });
                            }
                        }
                    }
                    if (res[0]) {
                        this.billDetails = res[0].map(item => {
                            let name_product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                            return Object.assign(Object.assign({}, item), { name_product: name_product });
                        });
                        this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_1__.VhSaleInvoices(this.billInfo, this.billDetails, this.vhQuerySales);
                    }
                    let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                    if (printer)
                        this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
                });
            });
        });
    }
    selectPaymentTypeId(event) {
        this.deliveryInfo.controls.payment_type_id.setValue(event);
    }
    blurFee() {
        this.chooseService = '';
        this.deliveryInfo.controls.transport.setValue('');
    }
    checkedCod() {
        if (parseInt(this.cod_amount.getRawValue()) > 20000000) {
            this.deliveryInfo.controls.cod.setValue('20,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun cod is 20,000,000"), 'alert-toast');
        }
        this.resetService();
    }
    checkedInsurance_value() {
        if (parseInt(this.insurance_value.getRawValue()) > 20000000) {
            this.deliveryInfo.controls.orderValue.setValue('20,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun insurance value is 20,000,000"), 'alert-toast');
        }
        this.blurFee();
    }
    goBack(success) {
        if (success) {
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk"], {
                state: {
                    dataSearchAndDate: this.dataSearchAndDate
                }
            });
        }
        else {
            this.vhComponent
                .alertConfirm((this.languageService.translate("Confirm")), (this.languageService.translate("Changes will not be saved")), "", "OK", (this.languageService.translate("Cancel")))
                .then(() => {
                this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk"], {
                    state: {
                        dataSearchAndDate: this.dataSearchAndDate
                    }
                });
            }, () => { });
        }
    }
    prepareProducts() {
        let data = this.billDetails.map(item => {
            return {
                name: item.name_product,
                quantity: item.quantity
            };
        });
        return data;
    }
    prepareOrder() {
        let data = {
            id: this.billInfo.bill_code,
            pick_name: this.data_delivery.pick_name,
            pick_address_id: this.data_delivery.shop_id,
            pick_address: this.data_delivery.pick_address,
            pick_province: this.data_delivery.pick_province,
            pick_district: this.data_delivery.pick_district,
            pick_ward: this.data_delivery.pick_ward,
            pick_tel: this.data_delivery.pick_tel,
            tel: this.addInformation.value.phone,
            name: this.addInformation.value.name,
            address: this.addInformation.value.address,
            province: this.addInformation.value.province,
            district: this.addInformation.value.district,
            ward: this.addInformation.value.ward,
            hamlet: this.addInformation.value.hamlet,
            is_freeship: +this.deliveryInfo.value.payment_type_id,
            pick_money: +this.cod_amount.getRawValue(),
            note: this.deliveryInfo.value.note ? this.deliveryInfo.value.note : '',
            value: +this.insurance_value.getRawValue(),
            transport: this.chooseService.type == 1 ? 'road' : "fly",
            total_weight: this.productInfo.value.weight,
            tags: this.tags_selected
        };
        if (this.tags_selected.includes(19))
            data['not_delivered_fee'] = this.not_delivered_fee;
        return data;
    }
    createOrder(print) {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create order ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.ghtkService.createOrderGhtk(this.data_delivery.token, this.prepareProducts(), this.prepareOrder()).then((res) => {
                    if (!res.success) {
                        this.vhComponent.hideLoading(0);
                        this.vhComponent.showToast(2000, res.message, 'alert-toast');
                    }
                    else {
                        this.invoice.setOrderCode(res.order.label);
                        this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail())
                            .then(() => {
                            if (print) {
                                this.ghtkService.getStatusBill(this.data_delivery.token, res.order.label).then((ress) => {
                                    this.vhComponent.hideLoading(0).then(() => {
                                        this.billInfo.data = ress.order;
                                        this.billInfo.order_code = res.order.label;
                                        this.showPrint();
                                    });
                                });
                            }
                            else {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.vhComponent.showToast(2000, this.languageService.translate('Create order successfully !'), 'success-toast');
                                    this.goBack(true);
                                });
                            }
                        });
                    }
                });
            });
        }).catch(() => { });
    }
    filterAddress(address) {
        let pick_address = {};
        let indexProvince = address.lastIndexOf(",");
        let indexDistrict = address.lastIndexOf(",", indexProvince - 1);
        pick_address.pick_province = address.slice(indexProvince + 1).trim();
        pick_address.pick_district = address.slice(indexDistrict + 1, indexProvince).trim();
        pick_address.pick_ward = address.slice(0, indexDistrict).trim();
        pick_address.pick_address = pick_address.pick_ward;
        return pick_address;
    }
    prepareDataService() {
        let data = {};
        data = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            province: this.addInformation.value.province,
            district: this.addInformation.value.district,
            weight: this.productInfo.value.weight,
            insurance_value: parseInt(this.insurance_value.getRawValue()),
        };
        return data;
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
    /** kiểm tra dữ liệu máy in và show component in tương ứng
    * @example this.showPrint()
    */
    showPrint() {
        this.checkPrint().then((printer) => {
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: this.billInfo,
                billDetails: this.billDetails,
                data_delivery: this.data_delivery, printer
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
    chooseMethodGhtk() {
        this.dataToGetMethod = this.prepareDataService();
        this.chooseMethod = true;
    }
    cancelModalMethodGhtk(event) {
        if (event) {
            this.chooseService = event;
            this.deliveryInfo.controls.transport.setValue(this.chooseService.type);
        }
        this.chooseMethod = false;
    }
    gotoAddressCustomer() {
        this.data_list_address_ghtk = {
            billInfo: this.billInfo,
            data_delivery: this.data_delivery
        };
        this.visible_list_address = true;
    }
    onCloseListAddress(event) {
        if (event) {
            this.addInformation.controls.address.setValue(event.address);
            this.addInformation.controls.province.setValue(event.province);
            this.addInformation.controls.district.setValue(event.district);
            this.addInformation.controls.ward.setValue(event.ward);
            this.addInformation.controls.hamlet.setValue(event.hamlet);
            this.currentAddress = event;
            this.resetService();
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
CreateBillCustomerGhtkComponent.ɵfac = function CreateBillCustomerGhtkComponent_Factory(t) { return new (t || CreateBillCustomerGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_4__.GhtkService)); };
CreateBillCustomerGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CreateBillCustomerGhtkComponent, selectors: [["app-create-bill-customer-ghtk"]], decls: 176, vars: 121, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "phone", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["nz-col", "", "nzSpan", "24", 1, "addInformation-address"], ["nzType", "text", "nz-button", "", 3, "click"], ["name", "create-outline"], ["class", "addInformation-address", "nz-col", "", "nzSpan", "24", 4, "ngIf"], [1, "productInfo"], ["nz-row", ""], [1, "all-content-center", 3, "formGroup"], ["nz-col", "", "nzSpan", "24", 1, "productInfo-table"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "5px"], ["nz-row", "", "nzGutter", "16"], ["formControlName", "weight", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplWeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["nz-col", "", "nzSpan", "24"], ["type", "text", "maxlength", "15", "formControlName", "cod", "nz-input", "", "required", "", 1, "cod_amount", 3, "ngModelChange"], ["combineTplCod", ""], ["type", "text", "maxlength", "15", "formControlName", "orderValue", "nz-input", "", "required", "", 1, "order_value_amount", 3, "placeholder"], ["combineTplOrder", ""], ["nz-col", "", "nzSpan", "24", 3, "ngStyle"], [1, "input-group", "all-content-center", 3, "click"], [1, "input-group", "all-content-center", 2, "padding", "4px 11px", "border", "1px solid #c8c7cc !important", "border-radius", "5px"], ["class", "nz-no-margin", 4, "ngIf"], ["style", "display: inline-block;color:var(--ion-color-vh-green)", "class", "nz-no-margin", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 2, "margin", "15px 0"], [3, "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzMode", "multiple", 3, "nzMaxTagCount", "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["formControlName", "note", "rows", "2", "nz-input", "", 1, "nz-hover-border", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [2, "width", "70%", "font-weight", "bold"], ["style", "color:var(--ion-color-vh-green);font-size: 1.2rem;", 4, "ngIf"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhtk", 4, "ngIf"], [3, "visible_list_address", "data_list_address_ghtk", "onCloseListAddress", 4, "ngIf"], [4, "ngIf"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"], [1, "nz-no-margin"], [1, "nz-no-margin", 2, "display", "inline-block", "color", "var(--ion-color-vh-green)"], [3, "nzLabel", "nzValue"], ["nz-input", "", 1, "nz-hover-border", 3, "placeholder", "ngModel", "ngModelChange"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhtk"], [3, "visible_list_address", "data_list_address_ghtk", "onCloseListAddress"]], template: function CreateBillCustomerGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerGhtkComponent_Template_div_click_0_listener() { return ctx.goBack(false); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CreateBillCustomerGhtkComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CreateBillCustomerGhtkComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerGhtkComponent_Template_button_click_42_listener() { return ctx.gotoAddressCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CreateBillCustomerGhtkComponent_div_44_Template, 3, 5, "div", 15);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, CreateBillCustomerGhtkComponent_tr_66_Template, 5, 2, "tr", 24);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerGhtkComponent_Template_input_ngModelChange_77_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, CreateBillCustomerGhtkComponent_ng_template_78_Template, 2, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerGhtkComponent_Template_input_ngModelChange_94_listener() { return ctx.checkedCod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, CreateBillCustomerGhtkComponent_ng_template_95_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](105, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](107, CreateBillCustomerGhtkComponent_ng_template_107_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "nz-input-group", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerGhtkComponent_Template_nz_input_group_click_114_listener() { return !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? "" : ctx.chooseMethodGhtk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](116, CreateBillCustomerGhtkComponent_p_116_Template, 3, 3, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, CreateBillCustomerGhtkComponent_p_117_Template, 3, 4, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "nz-select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerGhtkComponent_Template_nz_select_ngModelChange_123_listener($event) { return ctx.valueOfPaymentTypeId = $event; })("ngModelChange", function CreateBillCustomerGhtkComponent_Template_nz_select_ngModelChange_123_listener($event) { return ctx.selectPaymentTypeId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, CreateBillCustomerGhtkComponent_nz_option_125_Template, 1, 2, "nz-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "nz-select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreateBillCustomerGhtkComponent_Template_nz_select_ngModelChange_131_listener($event) { return ctx.tags_selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](133, CreateBillCustomerGhtkComponent_nz_option_133_Template, 1, 2, "nz-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](134, CreateBillCustomerGhtkComponent_div_134_Template, 6, 4, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](139, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "td", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "td", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "td", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "td", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](164, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "td", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](166, CreateBillCustomerGhtkComponent_b_166_Template, 2, 1, "b", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerGhtkComponent_Template_button_click_168_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateBillCustomerGhtkComponent_Template_button_click_171_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](173, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](174, CreateBillCustomerGhtkComponent_app_choose_method_ghtk_174_Template, 1, 2, "app-choose-method-ghtk", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](175, CreateBillCustomerGhtkComponent_app_list_adddress_customer_ghtk_175_Template, 1, 2, "app-list-adddress-customer-ghtk", 58);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](79);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](96);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 60, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 62, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 64, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 66, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 68, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 70, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 72, "Address"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.currentAddress.ward);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 74, "Product information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](54, 76, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](116, _c0))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](60, 78, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](64, 80, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](73, 82, "Weight(kg)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](84, 84, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](90, 86, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](101, 88, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzErrorTip", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](106, 90, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](117, _c1, !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](113, 92, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.chooseService.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](122, 94, "Payment type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](124, 96, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.valueOfPaymentTypeId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](119, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.listPaymentTypeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](130, 98, "Order label"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](132, 100, "Select goods type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzMaxTagCount", 2)("ngModel", ctx.tags_selected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](120, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.tags_selected.includes(19));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](140, 102, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](145, 104, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](150, 106, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](157, 108, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.insurance_fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](164, 110, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](170, 112, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](173, 114, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.chooseMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visible_list_address);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzOptionComponent, _components_choose_method_ghtk_choose_method_ghtk_component__WEBPACK_IMPORTED_MODULE_5__.ChooseMethodGhtkComponent, _components_list_adddress_customer_ghtk_list_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_6__.ListAdddressCustomerGhtkComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-address[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLWN1c3RvbWVyLWdodGsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxXQUFBO0FBR1I7QUFESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFHUjtBQUZROzs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlaO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFJWjtBQUhZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBS2hCO0FBSG9CO0VBQ0ksaUJBQUE7QUFLeEI7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBRVo7QUFEWTtFQUNJLGFBQUE7QUFHaEI7QUFEWTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUdoQjtBQURvQjtFQUNJLFdBQUE7QUFHeEI7QUFDWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFFcEI7QUFBZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUVwQjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQVo7QUFHSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQUlBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtYmlsbC1jdXN0b21lci1naHRrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGVsaXZlcnktZ2huIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uLFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tZm9ybSxcclxuICAgICAgICAucHJvZHVjdEluZm8sXHJcbiAgICAgICAgLnRvdGFsRGVsaXZlcnksXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgJi1hZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NyUgMjMlIDEwJTtcclxuICAgICAgICAgICAgJi1mb3JtIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICAgICAgLnN1Yi10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24tb3JkZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMvNDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3RJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbnQtZm9ybS1pdGVtIHtcclxuICAgICAgICBtYXJnaW46IDAgMCA1cHg7XHJcbiAgICB9XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hbnQtaW5wdXQtc3VmZml4IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjOGM3Y2MgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 18291:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/create-bill-retail-ghtk/create-bill-retail-ghtk.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillRetailGhtkComponent": () => (/* binding */ CreateBillRetailGhtkComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-sale-invoice */ 45687);
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service */ 43089);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_choose_method_ghtk_choose_method_ghtk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/choose-method-ghtk/choose-method-ghtk.component */ 71753);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);























function CreateBillRetailGhtkComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Name is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_22_ng_container_0_Template, 3, 3, "ng-container", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillRetailGhtkComponent_ng_template_22_ng_container_1_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r29.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r29.hasError("required"));
} }
function CreateBillRetailGhtkComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_34_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r32.hasError("required"));
} }
function CreateBillRetailGhtkComponent_ng_template_46_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Address is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_46_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r34.hasError("required"));
} }
function CreateBillRetailGhtkComponent_ng_template_58_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Province is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_58_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r36.hasError("required"));
} }
function CreateBillRetailGhtkComponent_ng_template_70_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "District is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_70_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r38.hasError("required"));
} }
function CreateBillRetailGhtkComponent_ng_template_82_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Ward is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_82_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r40.hasError("required"));
} }
function CreateBillRetailGhtkComponent_ng_template_94_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Hamlet is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_94_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r42.hasError("required"));
} }
function CreateBillRetailGhtkComponent_tr_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r44.name_product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r44.quantity, " ");
} }
function CreateBillRetailGhtkComponent_ng_template_129_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Weight is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_129_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Maximun weight 20kg"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_129_ng_container_0_Template, 3, 3, "ng-container", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CreateBillRetailGhtkComponent_ng_template_129_ng_container_1_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r45.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r45.hasError("max"));
} }
function CreateBillRetailGhtkComponent_ng_template_146_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Cod is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_146_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r48.hasError("required"));
} }
function CreateBillRetailGhtkComponent_ng_template_158_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Order value is required"), " ");
} }
function CreateBillRetailGhtkComponent_ng_template_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CreateBillRetailGhtkComponent_ng_template_158_ng_container_0_Template, 3, 3, "ng-container", 63);
} if (rf & 2) {
    const control_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", control_r50.hasError("required"));
} }
function CreateBillRetailGhtkComponent_p_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "Select service"), "");
} }
function CreateBillRetailGhtkComponent_p_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r23.chooseService.type == 1 ? "Standard" : "Fast"), " - ", ctx_r23.vhAlgorithm.vhcurrencyunit(ctx_r23.chooseService.fee), " ");
} }
function CreateBillRetailGhtkComponent_nz_option_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-option", 68);
} if (rf & 2) {
    const option_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", option_r52.name)("nzValue", option_r52.value);
} }
function CreateBillRetailGhtkComponent_nz_option_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-option", 68);
} if (rf & 2) {
    const option_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", option_r53.name)("nzValue", option_r53.value);
} }
function CreateBillRetailGhtkComponent_div_185_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_div_185_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r54.not_delivered_fee = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "Enter collection fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r26.not_delivered_fee);
} }
function CreateBillRetailGhtkComponent_b_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "b", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r27.vhAlgorithm.vhcurrencyunit(ctx_r27.chooseService.insurance_fee + ctx_r27.chooseService.fee || 0));
} }
function CreateBillRetailGhtkComponent_app_choose_method_ghtk_225_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-choose-method-ghtk", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cancelModalMethodGhtk", function CreateBillRetailGhtkComponent_app_choose_method_ghtk_225_Template_app_choose_method_ghtk_cancelModalMethodGhtk_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r56.cancelModalMethodGhtk($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("chooseMethod", ctx_r28.chooseMethod)("dataToGetMethod", ctx_r28.dataToGetMethod);
} }
const _c0 = function () { return { y: "200px" }; };
const _c1 = function (a0) { return { opacity: a0 }; };
const _c2 = function () { return { standalone: true }; };
class CreateBillRetailGhtkComponent {
    constructor(router, vhComponent, vhQuerySales, languageService, vhAlgorithm, ghtkService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.vhAlgorithm = vhAlgorithm;
        this.ghtkService = ghtkService;
        this.billDetails = [];
        this.chooseService = {};
        this.infoAddress = [];
        this.tags = [
            {
                name: 'Dễ vỡ',
                value: 1
            },
            {
                name: 'Nông sản/thực phẩm khô',
                value: 7
            },
            {
                name: 'Cho xem hàng',
                value: 10
            },
            {
                name: 'Cho thử hàng/ đồng kiểm',
                value: 11
            },
            {
                name: 'Gọi shop khi khách không nhận hàng, không liên lạc được, sai thông tin',
                value: 13
            },
            {
                name: 'Giao hàng 1 phần chọn sản phẩm',
                value: 17
            },
            {
                name: 'Giao hàng 1 phần đổi trả hàng',
                value: 18
            },
            {
                name: 'Không giao được thu',
                value: 19
            },
            {
                name: 'Hàng nguyên hộp',
                value: 20
            },
            {
                name: 'Thư tín, tài liệu',
                value: 22
            }
        ];
        this.not_delivered_fee = 5000; // phí thu nếu chọn tags là 19
        this.tags_selected = [];
        this.checkPrinter = false;
        // choosePaymentTypeId() {
        //   this.vhComponent.actionSheet("", "", [
        //     { attribute: { text: this.languageService.translate("Pay by receiver"), icon: "", cssClass: 'action-sheet-current' }, value: "0" },
        //     { attribute: { text: this.languageService.translate("Paid by seller"), icon: "", cssClass: 'action-sheet-current' }, value: "1" }
        //   ]).then(res => {
        //     this.deliveryInfo.controls.payment_type_id.setValue(res);
        //   })
        // }
        this.valueOfPaymentTypeId = "1";
        this.listPaymentTypeId = [
            {
                value: "0",
                name: this.languageService.translate("Pay by receiver")
            },
            {
                value: "1",
                name: this.languageService.translate("Paid by seller")
            }
        ];
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
        this.addInformation = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            ward: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            hamlet: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
        });
        this.productInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.max(20)]),
        });
        this.deliveryInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            cod: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^[0-9,]{1,10}$")]),
            orderValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^[0-9,]{1,10}$")]),
            transport: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            payment_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('1', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
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
                this.ghtkService.getWareHouseGhtk(this.data_delivery.token)
            ]).then((res) => {
                if (res[0]) {
                    this.billDetails = res[0].map(item => {
                        let name_product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product).name;
                        return Object.assign(Object.assign({}, item), { name_product: name_product });
                    });
                    this.invoice = new src_app_sales_interface_vh_sale_invoice__WEBPACK_IMPORTED_MODULE_0__.VhSaleInvoices(this.billInfo, this.billDetails, this.vhQuerySales);
                }
                if (res[1]) {
                    this.shops = res[1].data;
                    for (let item of this.shops) {
                        if (item.pick_address_id == this.data_delivery.shop_id) {
                            let data = this.filterAddress(item.address);
                            this.data_delivery = Object.assign(Object.assign({}, this.data_delivery), { pick_name: item.pick_name, pick_tel: item.pick_tel, pick_address: data.pick_address, pick_province: data.pick_province, pick_district: data.pick_district, pick_ward: data.pick_ward });
                        }
                    }
                }
                let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
                if (printer)
                    this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
            });
        }).finally(() => this.vhComponent.hideLoading(0));
    }
    selectPaymentTypeId(event) {
        this.deliveryInfo.controls.payment_type_id.setValue(event);
    }
    blurFee() {
        this.chooseService = {};
        this.deliveryInfo.controls.transport.setValue('');
    }
    checkedCod() {
        if (parseInt(this.cod_amount.getRawValue()) > 20000000) {
            this.deliveryInfo.controls.cod.setValue('20,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun cod is 20,000,000"), 'alert-toast');
        }
        this.resetService();
    }
    checkedInsurance_value() {
        if (parseInt(this.insurance_value.getRawValue()) > 20000000) {
            this.deliveryInfo.controls.orderValue.setValue('20,000,000');
            this.vhComponent.showToast(2000, this.languageService.translate("Maximun insurance value is 20,000,000"), 'alert-toast');
        }
        this.blurFee();
    }
    goBack(success) {
        if (success) {
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk"], {
                state: {
                    dataSearchAndDate: this.dataSearchAndDate
                }
            });
        }
        else {
            this.vhComponent
                .alertConfirm((this.languageService.translate("Confirm")), (this.languageService.translate("Changes will not be saved")), "", "OK", (this.languageService.translate("Cancel")))
                .then(() => {
                this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk"], {
                    state: {
                        dataSearchAndDate: this.dataSearchAndDate
                    }
                });
            }, () => { });
        }
    }
    prepareProducts() {
        let data = this.billDetails.map(item => {
            return {
                name: item.name_product,
                quantity: item.quantity
            };
        });
        return data;
    }
    prepareOrder() {
        let data = {
            id: this.billInfo.bill_code,
            pick_name: this.data_delivery.pick_name,
            pick_address_id: this.data_delivery.shop_id,
            pick_address: this.data_delivery.pick_address,
            pick_province: this.data_delivery.pick_province,
            pick_district: this.data_delivery.pick_district,
            pick_ward: this.data_delivery.pick_ward,
            pick_tel: this.data_delivery.pick_tel,
            tel: this.addInformation.value.phone,
            name: this.addInformation.value.name,
            address: this.addInformation.value.address,
            province: this.addInformation.value.province,
            district: this.addInformation.value.district,
            ward: this.addInformation.value.ward,
            hamlet: this.addInformation.value.hamlet,
            is_freeship: +this.deliveryInfo.value.payment_type_id,
            pick_money: +this.cod_amount.getRawValue(),
            note: this.deliveryInfo.value.note ? this.deliveryInfo.value.note : '',
            value: +this.insurance_value.getRawValue(),
            transport: this.chooseService.type == 1 ? 'road' : "fly",
            total_weight: this.productInfo.value.weight,
            tags: this.tags_selected
        };
        if (this.tags_selected.includes(19))
            data['not_delivered_fee'] = this.not_delivered_fee;
        return data;
    }
    createOrder(print) {
        this.vhComponent.alertConfirm("", this.languageService.translate("Do you want to create order ?"), "", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.ghtkService.createOrderGhtk(this.data_delivery.token, this.prepareProducts(), this.prepareOrder()).then((res) => {
                    if (!res.success) {
                        this.vhComponent.hideLoading(0);
                        this.vhComponent.showToast(2000, res.message, 'alert-toast');
                    }
                    else {
                        this.invoice.setOrderCode(res.order.label);
                        this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(1), this.invoice.getCreateUpdateInvoiceDetail())
                            .then(() => {
                            if (print) {
                                this.ghtkService.getStatusBill(this.data_delivery.token, res.order.label).then((ress) => {
                                    this.vhComponent.hideLoading(0).then(() => {
                                        this.billInfo.data = ress.order;
                                        this.billInfo.order_code = res.order.label;
                                        this.showPrint();
                                    });
                                });
                            }
                            else {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.vhComponent.showToast(2000, this.languageService.translate('Create order successfully !'), 'success-toast');
                                    this.goBack(true);
                                });
                            }
                        });
                    }
                });
            });
        }).catch(() => { });
    }
    filterAddress(address) {
        let pick_address = {};
        let indexProvince = address.lastIndexOf(",");
        let indexDistrict = address.lastIndexOf(",", indexProvince - 1);
        pick_address.pick_province = address.slice(indexProvince + 1).trim();
        pick_address.pick_district = address.slice(indexDistrict + 1, indexProvince).trim();
        pick_address.pick_ward = address.slice(0, indexDistrict).trim();
        pick_address.pick_address = pick_address.pick_ward;
        return pick_address;
    }
    prepareDataService() {
        let data = {};
        data = {
            token: this.data_delivery.token,
            shop_id: this.data_delivery.shop_id,
            province: this.addInformation.value.province,
            district: this.addInformation.value.district,
            weight: this.productInfo.value.weight,
            insurance_value: parseInt(this.insurance_value.getRawValue()),
        };
        return data;
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
    /** kiểm tra dữ liệu máy in và show component in tương ứng
    * @example this.showPrint()
    */
    showPrint() {
        this.checkPrint().then((printer) => {
            this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
                billInfo: this.billInfo,
                billDetails: this.billDetails,
                data_delivery: this.data_delivery, printer
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
            default: return src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_1__.DeliveryA45Component;
        }
    }
    chooseMethodGhtk() {
        this.dataToGetMethod = this.prepareDataService();
        this.chooseMethod = true;
    }
    cancelModalMethodGhtk(event) {
        if (event) {
            this.chooseService = event;
            this.deliveryInfo.controls.transport.setValue(this.chooseService.type);
        }
        this.chooseMethod = false;
    }
    /**
     * Reset lại dịch vụ nếu có thay đổi các trường
     */
    resetService() {
        this.chooseService = {};
        this.deliveryInfo.controls.transport.setValue('');
    }
}
CreateBillRetailGhtkComponent.ɵfac = function CreateBillRetailGhtkComponent_Factory(t) { return new (t || CreateBillRetailGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_9__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_4__.GhtkService)); };
CreateBillRetailGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CreateBillRetailGhtkComponent, selectors: [["app-create-bill-retail-ghtk"]], decls: 226, vars: 151, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], [3, "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "minlength", "6", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "phone", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplPhone", ""], ["formControlName", "address", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplAddress", ""], ["formControlName", "province", "nz-input", "", "required", "", 3, "placeholder", "ngModelChange"], ["combineTplProvince", ""], ["nz-col", "", "nzSpan", "8"], ["formControlName", "district", "nz-input", "", "required", "", 3, "placeholder", "ngModelChange"], ["combineTplDistrict", ""], ["formControlName", "ward", "nz-input", "", "required", "", 3, "placeholder", "ngModelChange"], ["formControlName", "hamlet", "nz-input", "", "required", "", 3, "placeholder", "ngModelChange"], [1, "productInfo"], ["nz-row", ""], [1, "all-content-center", 3, "formGroup"], ["nz-col", "", "nzSpan", "24", 1, "productInfo-table"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "5px"], ["nz-row", "", "nzGutter", "16"], ["formControlName", "weight", "nz-input", "", "required", "", "type", "number", 3, "ngModelChange"], ["combineTplWeight", ""], [1, "deliveryInfo"], [1, "deliveryInfo-form", 3, "formGroup"], ["nz-row", "", "nzGutter", "8"], ["nz-col", "", "nzSpan", "24"], ["type", "text", "maxlength", "15", "formControlName", "cod", "nz-input", "", "required", "", 1, "cod_amount", 3, "ngModelChange"], ["combineTplCod", ""], ["type", "text", "maxlength", "15", "formControlName", "orderValue", "nz-input", "", "required", "", 1, "order_value_amount", 3, "placeholder", "blur"], ["combineTplOrder", ""], ["nz-col", "", "nzSpan", "24", 3, "ngStyle"], [1, "input-group", "all-content-center", 3, "click"], [1, "input-group", "all-content-center", 2, "padding", "4px 11px", "border", "1px solid #c8c7cc !important", "border-radius", "5px"], ["class", "nz-no-margin", 4, "ngIf"], ["style", "display: inline-block;color:var(--ion-color-vh-green)", "class", "nz-no-margin", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 2, "margin", "15px 0"], [3, "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzMode", "multiple", 3, "nzMaxTagCount", "nzPlaceHolder", "ngModel", "ngModelOptions", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["formControlName", "note", "rows", "2", "nz-input", "", 1, "nz-hover-border", 3, "placeholder"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [2, "width", "70%", "font-weight", "bold"], ["style", "color:var(--ion-color-vh-green);font-size: 1.2rem;", 4, "ngIf"], [1, "deliveryInfo-button-order", "all-content-center"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhtk", 4, "ngIf"], [4, "ngIf"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "right"], [1, "nz-no-margin"], [1, "nz-no-margin", 2, "display", "inline-block", "color", "var(--ion-color-vh-green)"], [3, "nzLabel", "nzValue"], ["nz-input", "", 1, "nz-hover-border", 3, "placeholder", "ngModel", "ngModelChange"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [3, "chooseMethod", "dataToGetMethod", "cancelModalMethodGhtk"]], template: function CreateBillRetailGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillRetailGhtkComponent_Template_div_click_0_listener() { return ctx.goBack(false); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, CreateBillRetailGhtkComponent_ng_template_22_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, CreateBillRetailGhtkComponent_ng_template_34_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, CreateBillRetailGhtkComponent_ng_template_46_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_input_ngModelChange_56_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, CreateBillRetailGhtkComponent_ng_template_58_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_input_ngModelChange_68_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, CreateBillRetailGhtkComponent_ng_template_70_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_input_ngModelChange_80_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, CreateBillRetailGhtkComponent_ng_template_82_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_input_ngModelChange_92_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, CreateBillRetailGhtkComponent_ng_template_94_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "nz-table", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, CreateBillRetailGhtkComponent_tr_117_Template, 5, 2, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_input_ngModelChange_128_listener() { return ctx.resetService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](129, CreateBillRetailGhtkComponent_ng_template_129_Template, 2, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_input_ngModelChange_145_listener() { return ctx.checkedCod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](146, CreateBillRetailGhtkComponent_ng_template_146_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CreateBillRetailGhtkComponent_Template_input_blur_156_listener() { return ctx.checkedInsurance_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](157, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](158, CreateBillRetailGhtkComponent_ng_template_158_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](164, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "nz-input-group", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillRetailGhtkComponent_Template_nz_input_group_click_165_listener() { return !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? "" : ctx.chooseMethodGhtk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](167, CreateBillRetailGhtkComponent_p_167_Template, 3, 3, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](168, CreateBillRetailGhtkComponent_p_168_Template, 3, 4, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](173, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "nz-select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_nz_select_ngModelChange_174_listener($event) { return ctx.valueOfPaymentTypeId = $event; })("ngModelChange", function CreateBillRetailGhtkComponent_Template_nz_select_ngModelChange_174_listener($event) { return ctx.selectPaymentTypeId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](175, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](176, CreateBillRetailGhtkComponent_nz_option_176_Template, 1, 2, "nz-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](181, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "nz-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CreateBillRetailGhtkComponent_Template_nz_select_ngModelChange_182_listener($event) { return ctx.tags_selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](183, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](184, CreateBillRetailGhtkComponent_nz_option_184_Template, 1, 2, "nz-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](185, CreateBillRetailGhtkComponent_div_185_Template, 6, 4, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](186, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](190, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](191, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](196, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](199, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](201, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](204);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](208, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](210, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](213, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](214);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](215, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](216, "td", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](217, CreateBillRetailGhtkComponent_b_217_Template, 2, 1, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](218, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](219, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillRetailGhtkComponent_Template_button_click_219_listener() { return ctx.createOrder(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](221, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateBillRetailGhtkComponent_Template_button_click_222_listener() { return ctx.createOrder(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](224, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](225, CreateBillRetailGhtkComponent_app_choose_method_ghtk_225_Template, 1, 2, "app-choose-method-ghtk", 62);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](47);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](59);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](71);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](130);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](147);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 72, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 74, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 76, "Name"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 78, "Enter full name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 80, "Phone number"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 82, "Enter your phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 84, "Address(Apartment Number)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](45, 86, "Ex: No 2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](52, 88, "Province"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](57, 90, "Example: Dong Nai Province"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](64, 92, "District"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](69, 94, "Example: Long Thanh District"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](76, 96, "Ward"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](81, 98, "Example: Cam Duong Commune"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](88, 100, "Hamlet"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](93, 102, "Example: Hamlet 1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](100, 104, "Product information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](105, 106, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](146, _c0))("nzShowPagination", false)("nzData", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](111, 108, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](115, 110, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.billDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](124, 112, "Weight(kg)"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.deliveryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](135, 114, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](141, 116, "COD"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](152, 118, "Order value"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzErrorTip", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](157, 120, "Enter order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](147, _c1, !ctx.addInformation.valid || !ctx.productInfo.valid || !ctx.deliveryInfo.controls.cod.valid || !ctx.deliveryInfo.controls.orderValue.valid ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](164, 122, "Carriage"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.chooseService.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.chooseService.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](173, 124, "Payment type"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](175, 126, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.valueOfPaymentTypeId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](149, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listPaymentTypeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](181, 128, "Order label"), "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](183, 130, "Select goods type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzMaxTagCount", 2)("ngModel", ctx.tags_selected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](150, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tags_selected.includes(19));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](191, 132, "Enter note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](196, 134, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](201, 136, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](208, 138, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.chooseService.insurance_fee || 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](215, 140, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.chooseService);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](221, 142, "Create bill & Print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.addInformation.invalid || ctx.productInfo.invalid || ctx.deliveryInfo.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](224, 144, "Create bill"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.chooseMethod);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_13__.NzLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzOptionComponent, _components_choose_method_ghtk_choose_method_ghtk_component__WEBPACK_IMPORTED_MODULE_5__.ChooseMethodGhtkComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%]   .input-group.placeholder[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 23% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%] {\n  grid-row: 3/4;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px;\n  align-self: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-button-order[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.ant-input-suffix[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #c8c7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLXJldGFpbC1naHRrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksV0FBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBR1I7QUFGUTs7Ozs7RUFLSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBSVo7QUFIWTtFQUNJLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUtoQjtBQUhZO0VBQ0ksY0FBQTtBQUtoQjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFJWjtBQUhZO0VBQ0ksYUFBQTtBQUtoQjtBQUhZO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBS2hCO0FBSG9CO0VBQ0ksV0FBQTtBQUt4QjtBQURZO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUdoQjtBQUZnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUlwQjtBQUZnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBSXBCO0FBQVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFFWjtBQUNJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUE7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSSxpQkFBQTtBQUVKO0FBQUE7RUFDSSx5QkFBQTtBQUdKIiwiZmlsZSI6ImNyZWF0ZS1iaWxsLXJldGFpbC1naHRrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGVsaXZlcnktZ2huIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uLFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tZm9ybSxcclxuICAgICAgICAucHJvZHVjdEluZm8sXHJcbiAgICAgICAgLnRvdGFsRGVsaXZlcnksXHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby10b3RhbERlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZEluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2M4YzdjYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnlJbmZvIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjclIDIzJSAxMCU7XHJcbiAgICAgICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgICAgIC5zdWItdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtYnV0dG9uLW9yZGVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0SW5mbyB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYW50LWZvcm0taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gICAgfVxyXG59XHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uYW50LWlucHV0LXN1ZmZpeCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 37944:
/*!***************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/delivery-ghtk.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryGhtkComponent": () => (/* binding */ DeliveryGhtkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service */ 43089);
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

















function DeliveryGhtkComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 24);
} }
function DeliveryGhtkComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, option_r5.name))("nzValue", option_r5.group);
} }
function DeliveryGhtkComponent_tr_62_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Not enough information"));
} }
function DeliveryGhtkComponent_tr_62_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Ready to pick"));
} }
function DeliveryGhtkComponent_tr_62_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Delivering"));
} }
function DeliveryGhtkComponent_tr_62_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Delivered"));
} }
function DeliveryGhtkComponent_tr_62_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Returning"));
} }
function DeliveryGhtkComponent_tr_62_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Returned"));
} }
function DeliveryGhtkComponent_tr_62_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Cancelled"), "");
} }
function DeliveryGhtkComponent_tr_62_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Can not get the goods"));
} }
function DeliveryGhtkComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryGhtkComponent_tr_62_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const item_r6 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return item_r6.data ? ctx_r15.gotoBillDetail(item_r6) : ctx_r15.gotoDetail(item_r6); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DeliveryGhtkComponent_tr_62_td_13_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeliveryGhtkComponent_tr_62_td_14_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DeliveryGhtkComponent_tr_62_td_15_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DeliveryGhtkComponent_tr_62_td_16_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DeliveryGhtkComponent_tr_62_td_17_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DeliveryGhtkComponent_tr_62_td_18_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DeliveryGhtkComponent_tr_62_td_19_Template, 3, 3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DeliveryGhtkComponent_tr_62_td_20_Template, 3, 3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 13, item_r6.date.seconds ? item_r6.date.toDate() : item_r6.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.order_code ? item_r6.order_code : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 16, item_r6.name_customer ? item_r6.name_customer : "Customer retail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.data ? ctx_r4.vhAlgorithm.vhcurrencyunit(item_r6.data.is_freeship == 1 ? item_r6.data.pick_money : item_r6.data.pick_money + item_r6.data.ship_money) : "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.group == 8 && ctx_r4.status_open);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class DeliveryGhtkComponent {
    constructor(lang, router, vhComponent, vhAlgorithm, ghtkService, vhQuerySales, vhQuery, cdRef, vhAuth) {
        this.lang = lang;
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.ghtkService = ghtkService;
        this.vhQuerySales = vhQuerySales;
        this.vhQuery = vhQuery;
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
                group: 1,
                name: "All"
            },
            {
                group: 0,
                name: "Not enough information"
            },
            {
                group: 2,
                name: "Ready to pick"
            },
            {
                group: 3,
                name: "Delivering"
            },
            {
                group: 4,
                name: "delivered"
            },
            {
                group: 5,
                name: "Returning"
            },
            {
                group: 6,
                name: "Returned"
            },
            {
                group: 7,
                name: "Cancelled"
            },
            {
                group: 8,
                name: "Can not get the goods"
            }
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
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getlocalDeliverys(),
                this.vhQuerySales.getBills_byFields({ date: { $gte: startTime, $lte: endTime }, bill_type: { $eq: 1 }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {}), //chưa bill_type
            ]).then((res) => {
                if (res[0])
                    this.data_delivery = res[0].filter(item => item.active == true && item.type == 2)[0];
                if (res[1]) {
                    let bills = res[1].filter(item => item.id_delivery == this.data_delivery._id);
                    this.bills = bills.reverse();
                    let process = [];
                    this.bills.forEach(item => {
                        item.name_customer = this.vhQuerySales.getlocalCustomer(item.id_customer) ? this.vhQuerySales.getlocalCustomer(item.id_customer).name : 'Not found';
                        if (item.order_code)
                            process.push(this.ghtkService.getStatusBill(this.data_delivery.token, item.order_code));
                    });
                    Promise.all(process).then((result) => {
                        result.forEach(item => {
                            var _a;
                            let index = this.bills.findIndex(bill => bill.order_code == item.order.label_id);
                            this.bills[index].data = item.order;
                            let data = this.filterGroup((_a = this.bills[index].data) === null || _a === void 0 ? void 0 : _a.status);
                            this.bills[index].name_group = data.name;
                            this.bills[index].group = data.group;
                        });
                        this.status_open = true;
                        this.show_bills = [...this.bills];
                        this.vhComponent.hideLoading(0);
                    }).catch(err => {
                        this.vhComponent.hideLoading(0);
                        this.vhComponent.showToast(2000, this.lang.translate("An error occurred while getting data"), "alert-toast");
                    });
                }
            });
        });
    }
    filterGroup(status) {
        let data = {
            group: '',
            name: ''
        };
        switch (status) {
            case 1:
            case 2:
            case 8:
            case 12:
            case 128:
                data.name = 'Ready to pick';
                data.group = 2;
                break;
            case 3:
            case 4:
            case 9:
            case 10:
            case 49:
            case 123:
            case 401:
                data.name = 'Delivering';
                data.group = 3;
                break;
            case 5:
            case 6:
            case 45:
                data.group = 4,
                    data.name = 'delivered';
                break;
            case 20:
                data.group = 5,
                    data.name = 'Returning';
                break;
            case 11:
            case 21:
                data.group = 6,
                    data.name = 'Returned';
                break;
            case -1:
                data.group = 7;
                data.name = 'Canceled';
                break;
            case 7:
            case 127:
                data.group = 8;
                data.name = "Can not get the goods";
                break;
            default:
                data.group = 1,
                    data.name = 'Not enough information';
        }
        return data;
    }
    setStartTime(event) {
        if (this.endDateTime.getTime() - this.startDateTime.getTime() > 2678400000) {
            this.vhComponent.showToast(2000, this.lang.translate("The time to view no more than 30 days"), "alert-toast");
            this.endDateTime = new Date(this.startDateTime.getTime() + 2678313600);
            this.subStartDateTime = this.startDateTime;
            this.subEndDateTime = this.endDateTime;
            this.getData(this.startDateTime, this.endDateTime);
        }
        else if (this.endDateTime.getTime() - this.startDateTime.getTime() < 0)
            this.vhComponent.alertMessage("", this.lang.translate("Staring date must be less than or the same as ending date"), "", "OK");
        else
            this.getData(this.startDateTime, this.endDateTime);
    }
    setEndTime(event) {
        if (this.endDateTime.getTime() - this.startDateTime.getTime() > 2678400000) {
            this.vhComponent.showToast(2000, this.lang.translate("The time to view no more than 30 days"), "alert-toast");
            this.startDateTime = new Date(this.endDateTime.getTime() - 2678313600);
            this.subStartDateTime = this.startDateTime;
            this.subEndDateTime = this.endDateTime;
            this.getData(this.startDateTime, this.endDateTime);
        }
        else if (this.endDateTime.getTime() - this.startDateTime.getTime() < 0)
            this.vhComponent.alertMessage("", this.lang.translate("Staring date must be less than or the same as ending date"), "", "OK");
        else
            this.getData(this.startDateTime, this.endDateTime);
    }
    //searchbill
    searchBill(value) {
        this.show_bills = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value).toLowerCase(), this.bills, ["bill_code", "order_code"]);
    }
    gotoDetail(bill) {
        if (bill.id_customer != "id_retail") {
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk/order-bill-customer-ghtk"], {
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
            this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk/order-bill-retail-ghtk"], {
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
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk/detail-bill"], {
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
        else if (value == 7) {
            this.show_bills = this.bills.filter(item => item.group == 7);
        }
        else if (value == 8) {
            this.show_bills = this.bills.filter(item => item.group == 8);
        }
    }
    onCurrentPageDataChange(event) { }
    ngAfterViewChecked() {
        if (document.getElementById("table-delivery-ghtk") && document.querySelector(".delivery-ghtk-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.getElementById("table-delivery-ghtk").clientHeight - document.querySelector(".delivery-ghtk-header").clientHeight -
                document.querySelector(".ant-table-pagination").clientHeight - 150 + "px";
        }
        this.cdRef.detectChanges();
    }
}
DeliveryGhtkComponent.ɵfac = function DeliveryGhtkComponent_Factory(t) { return new (t || DeliveryGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_2__.GhtkService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth)); };
DeliveryGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeliveryGhtkComponent, selectors: [["app-delivery-ghtk"]], decls: 63, vars: 52, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "table-delivery-ghtk"], ["nzGutter", "16", "nz-row", "", 1, "delivery-ghn", "delivery-ghtk-header"], ["nz-col", "", "nzSpan", "6"], [1, "title", "nz-no-margin"], ["nz-col", "", "nzSpan", "8", 1, "title", "center-all-content"], [1, "nz-hover-border", 3, "nzSuffix"], ["type", "text", "nz-input", "", 1, "medium-size", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "4"], ["nzBorderless", "", 1, "nz-hover-border", "medium-size", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "date-picker-cus"], ["nzFormat", "dd/MM/yyyy", "nzBorderless", "", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], ["nzFormat", "dd/MM/yyyy", "nzBorderless", "", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "table-delivery-ghtk"], [1, "medium-size"], [2, "color", "red"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult", "nzCurrentPageDataChange"], ["tableDelvieryGhtk", ""], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "nzLabel", "nzValue"], [2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["style", "color: var(--ion-color-vh-orange)", 4, "ngIf"], [2, "color", "var(--ion-color-vh-orange)"]], template: function DeliveryGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeliveryGhtkComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhtkComponent_Template_input_ngModelChange_12_listener($event) { return ctx.search = $event; })("ngModelChange", function DeliveryGhtkComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchBill($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DeliveryGhtkComponent_ng_template_14_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhtkComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.filterStatus($event); })("ngModelChange", function DeliveryGhtkComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.valueOfStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DeliveryGhtkComponent_nz_option_18_Template, 2, 4, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-date-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhtkComponent_Template_nz_date_picker_ngModelChange_20_listener($event) { return ctx.startDateTime = $event; })("ngModelChange", function DeliveryGhtkComponent_Template_nz_date_picker_ngModelChange_20_listener($event) { return ctx.setStartTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "nz-date-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DeliveryGhtkComponent_Template_nz_date_picker_ngModelChange_22_listener($event) { return ctx.endDateTime = $event; })("ngModelChange", function DeliveryGhtkComponent_Template_nz_date_picker_ngModelChange_22_listener($event) { return ctx.setEndTime($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCurrentPageDataChange", function DeliveryGhtkComponent_Template_nz_table_nzCurrentPageDataChange_32_listener($event) { return ctx.onCurrentPageDataChange($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, DeliveryGhtkComponent_tr_62_Template, 21, 18, "tr", 23);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 27, "Giao hang tiet kiem"));
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
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzDatePickerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 0;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: initial;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%] {\n  border: 1px solid #d9d9d9;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-table-content[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LWdodGsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUdSO0FBREk7RUFDSSxjQUFBO0FBR1I7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSVo7QUFGUTtFQUlJLHlCQUFBO0FBQ1o7QUFKWTtFQUNJLDBDQUFBO0FBTWhCO0FBRlE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUlaO0FBREk7RUFDSSxpQkFBQTtBQUdSIiwiZmlsZSI6ImRlbGl2ZXJ5LWdodGsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRlbGl2ZXJ5LWdobiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgbnotaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUtcGlja2VyLWN1cyB7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYW50LXRhYmxlLWNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 32709:
/*!************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/delivery-ghtk.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryGhtkModule": () => (/* binding */ DeliveryGhtkModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _delivery_ghtk_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-ghtk.component */ 37944);
/* harmony import */ var _create_bill_retail_ghtk_create_bill_retail_ghtk_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-bill-retail-ghtk/create-bill-retail-ghtk.component */ 18291);
/* harmony import */ var _create_bill_customer_ghtk_create_bill_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-bill-customer-ghtk/create-bill-customer-ghtk.component */ 98283);
/* harmony import */ var _detail_bill_ghtk_detail_bill_ghtk_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-bill-ghtk/detail-bill-ghtk.component */ 93345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _components_choose_method_ghtk_choose_method_ghtk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/choose-method-ghtk/choose-method-ghtk.component */ 71753);
/* harmony import */ var _components_list_adddress_customer_ghtk_list_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-adddress-customer-ghtk/list-adddress-customer-ghtk.component */ 50695);
/* harmony import */ var _components_add_adddress_customer_ghtk_add_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-adddress-customer-ghtk/add-adddress-customer-ghtk.component */ 29890);
/* harmony import */ var _components_edit_adddress_customer_ghtk_edit_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit-adddress-customer-ghtk/edit-adddress-customer-ghtk.component */ 21846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
















const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _delivery_ghtk_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryGhtkComponent
            },
            {
                path: "order-bill-retail-ghtk",
                component: _create_bill_retail_ghtk_create_bill_retail_ghtk_component__WEBPACK_IMPORTED_MODULE_1__.CreateBillRetailGhtkComponent
            },
            {
                path: "order-bill-customer-ghtk",
                component: _create_bill_customer_ghtk_create_bill_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_2__.CreateBillCustomerGhtkComponent
            },
            {
                path: "detail-bill",
                component: _detail_bill_ghtk_detail_bill_ghtk_component__WEBPACK_IMPORTED_MODULE_3__.DetailBillGhtkComponent
            }
        ]
    }
];
class DeliveryGhtkModule {
}
DeliveryGhtkModule.ɵfac = function DeliveryGhtkModule_Factory(t) { return new (t || DeliveryGhtkModule)(); };
DeliveryGhtkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: DeliveryGhtkModule });
DeliveryGhtkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](DeliveryGhtkModule, { declarations: [_delivery_ghtk_component__WEBPACK_IMPORTED_MODULE_0__.DeliveryGhtkComponent, _create_bill_retail_ghtk_create_bill_retail_ghtk_component__WEBPACK_IMPORTED_MODULE_1__.CreateBillRetailGhtkComponent, _create_bill_customer_ghtk_create_bill_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_2__.CreateBillCustomerGhtkComponent, _detail_bill_ghtk_detail_bill_ghtk_component__WEBPACK_IMPORTED_MODULE_3__.DetailBillGhtkComponent, _components_choose_method_ghtk_choose_method_ghtk_component__WEBPACK_IMPORTED_MODULE_5__.ChooseMethodGhtkComponent, _components_list_adddress_customer_ghtk_list_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_6__.ListAdddressCustomerGhtkComponent, _components_add_adddress_customer_ghtk_add_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_7__.AddAdddressCustomerGhtkComponent, _components_edit_adddress_customer_ghtk_edit_adddress_customer_ghtk_component__WEBPACK_IMPORTED_MODULE_8__.EditAdddressCustomerGhtkComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 93345:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/shipping-bill/delivery-ghtk/detail-bill-ghtk/detail-bill-ghtk.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBillGhtkComponent": () => (/* binding */ DetailBillGhtkComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_delivery_A45_delivery_a45_delivery_a45_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/delivery/A45/delivery-a45/delivery-a45.component */ 89773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service */ 43089);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function DetailBillGhtkComponent_p_45_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx_r0.billInfo.data.address, "");
} }
function DetailBillGhtkComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 30);
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
class DetailBillGhtkComponent {
    constructor(languageService, router, vhComponent, vhAlgorithm, ghtkService, vhQuerySales, vhAuth) {
        this.languageService = languageService;
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.ghtkService = ghtkService;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
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
        this.vhComponent.showLoading("").then(() => {
            this.vhQuerySales.getBill_details_byId_bill(this.billInfo._id).then((res) => {
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
            this.vhComponent.alertConfirm(this.languageService.translate('Confirm'), this.languageService.translate("Do you want to delete shipping bill ?"), "", "Ok", this.languageService.translate("Cancel")).then(() => {
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    this.ghtkService.cancelOrder(this.data_delivery.token, this.billInfo.order_code).then(res => {
                        this.vhComponent.hideLoading(0).then(() => {
                            this.vhComponent.showToast(2000, this.languageService.translate("Delete bill successfully"), 'success-toast');
                            this.goBack();
                        });
                    });
                });
            });
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/delivery/shipping-bill/delivery-ghtk"], {
            state: { dataSearchAndDate: this.dataSearchAndDate }
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
                billInfo: this.billInfo,
                billDetails: this.billDetail,
                printer,
                data_delivery: this.data_delivery
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
}
DetailBillGhtkComponent.ɵfac = function DetailBillGhtkComponent_Factory(t) { return new (t || DetailBillGhtkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_menu_manage_delivery_services_ghtkService_ghtk_service__WEBPACK_IMPORTED_MODULE_3__.GhtkService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth)); };
DetailBillGhtkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailBillGhtkComponent, selectors: [["app-detail-bill-ghtk"]], decls: 131, vars: 98, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "delivery-ghn"], [1, "addInformation"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "7"], ["nz-col", "", "nzSpan", "17", 1, "addInformation-button"], ["nz-button", "", 1, "nz-hover-border", 3, "click"], ["src", "assets/icon/management/printer.svg", 2, "font-size", "0.9rem", "margin-right", "4px", "margin-bottom", "-2px"], ["nz-button", "", 1, "nz-hover-border", 3, "disabled", "click"], ["name", "trash-outline", 2, "font-size", "0.9rem", "margin-right", "4px", "margin-bottom", "-2px"], ["nz-col", "", "nzSpan", "24", 1, "addInformation-info"], [4, "ngIf"], [1, "productInfo"], [3, "nzScroll", "nzShowPagination", "nzNoResult", "nzData"], ["rowSelectionTable", ""], ["colspan", "7", 2, "text-align", "left"], ["colspan", "3", 2, "text-align", "right"], ["class", "choose-product", 4, "ngFor", "ngForOf"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 2, "margin-top", "5px"], [1, "deliveryInfo", "notReuseInfo"], [1, "deliveryInfo-form", "ant-table-body"], [1, "deliveryInfo-totalDelivery"], [1, "sub-table"], [2, "width", "70%"], [1, "ion-text-end", 2, "width", "30%"], [2, "width", "70%", "font-weight", "bold"], [2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem"], [1, "choose-product"], ["colspan", "7", 2, "text-align", "center"]], template: function DetailBillGhtkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBillGhtkComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBillGhtkComponent_Template_button_click_13_listener() { return ctx.showPrint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBillGhtkComponent_Template_button_click_17_listener() { return ctx.cancelOrder(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, DetailBillGhtkComponent_p_45_Template, 5, 4, "p", 12);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, DetailBillGhtkComponent_tr_64_Template, 5, 2, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](92, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "b", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 44, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 46, "Shipment bill"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 48, "Print shipping bill"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.billInfo.group != 2 && ctx.billInfo.group != 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 50, "Cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 52, "Receiver Information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 54, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.bill_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 56, "Order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.order_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 58, "Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.data.customer_fullname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 60, "Phone number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.data.customer_tel, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.billInfo.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 62, "Products information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 64, "Not data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](97, _c0))("nzShowPagination", false)("nzData", ctx.billDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 66, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](62, 68, "Quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r1.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](70, 70, "Weight(kg)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.data.weight / 1000, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](76, 72, "Delivery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](80, 74, "COD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.data.is_freeship == 1 ? ctx.billInfo.data.pick_money : ctx.billInfo.data.pick_money + ctx.billInfo.data.ship_money), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](85, 76, "Order value"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.data.value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](90, 78, "Delivery time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](92, 80, ctx.billInfo.data.deliver_date, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](96, 83, "Payment type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](98, 85, ctx.billInfo.data.is_freeship == 1 ? "Paid by seller" : "Pay by receiver"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](102, 87, "Note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", ctx.billInfo.data.message, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](108, 89, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](113, 91, "Shipping fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.data.ship_money));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](120, 93, "Insurance fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.data.insurance));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](127, 95, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.billInfo.data.ship_money + ctx.billInfo.data.insurance));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 33% 33% 31%;\n  grid-template-rows: 1fr 1fr;\n  grid-column-gap: 20px;\n  column-gap: 20px;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin: 0 !important;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  margin: 10 0 !important;\n  font-size: 1rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .totalDelivery[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%] {\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .addInformation-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%] {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 67% 33%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo-form[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo.notReuseInfo[_ngcontent-%COMP%]   .deliveryInfo-totalDelivery[_ngcontent-%COMP%]   .sub-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .productInfo[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  grid-row: 2/3;\n}\nnz-layout[_ngcontent-%COMP%]   .delivery-ghn[_ngcontent-%COMP%]   .deliveryInfo-form[_ngcontent-%COMP%] {\n  overflow-y: auto !important;\n}\nnz-layout[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 0.9rem;\n  font-weight: bold;\n  margin: 10px 0 !important;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1iaWxsLWdodGsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQWdCQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtBQVpSO0FBTlE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQVFaO0FBTlE7RUFDSSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUVo7QUFOUTtFQUNJLGlCQUFBO0FBUVo7QUFGUTs7Ozs7RUFLSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBSVo7QUFIWTtFQUNJLGVBQUE7QUFLaEI7QUFKZ0I7RUFDSSxjQUFBO0FBTXBCO0FBRlE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQUlaO0FBSFk7RUFDSSxhQUFBO0FBS2hCO0FBSFk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFLaEI7QUFIb0I7RUFDSSxXQUFBO0FBS3hCO0FBQVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFFWjtBQUFRO0VBQ0ksMkJBQUE7QUFFWjtBQUNJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUVBO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJkZXRhaWwtYmlsbC1naHRrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5kZWxpdmVyeS1naG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAgMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMxJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbixcclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0sXHJcbiAgICAgICAgLnByb2R1Y3RJbmZvLFxyXG4gICAgICAgIC50b3RhbERlbGl2ZXJ5LFxyXG4gICAgICAgIC5kZWxpdmVyeUluZm8tdG90YWxEZWxpdmVyeSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRJbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGl2ZXJ5SW5mby5ub3RSZXVzZUluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NyUgMzMlO1xyXG4gICAgICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVsaXZlcnlJbmZvLXRvdGFsRGVsaXZlcnkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgICAgICAgICAuc3ViLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdEluZm8ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVsaXZlcnlJbmZvLWZvcm0ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_delivery_shipping-bill_delivery-ghtk_delivery-ghtk_module_ts.js.map