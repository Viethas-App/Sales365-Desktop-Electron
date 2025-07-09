"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_shopee_update-stock_by-product-shopee_by-product-shopee_m-23d752"],{

/***/ 64311:
/*!******************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/update-stock/by-product-shopee/by-product-shopee.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByProductShopeeComponent": () => (/* binding */ ByProductShopeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function ByProductShopeeComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 23);
} }
function ByProductShopeeComponent_ng_container_51_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r4.image == null ? null : item_r4.image.image_url_list[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ByProductShopeeComponent_ng_container_51_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", "SKU ph\u00E2n lo\u1EA1i", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.model.model_sku);
} }
function ByProductShopeeComponent_ng_container_51_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ByProductShopeeComponent_ng_container_51_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.updateQuantity(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", item_r4.loading)("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, "Update"))("nzTooltipColor", "var(--ion-color-vh-green)");
} }
const _c0 = function (a0) { return { width: a0 }; };
function ByProductShopeeComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ByProductShopeeComponent_ng_container_51_ng_template_4_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ByProductShopeeComponent_ng_container_51_span_15_Template, 4, 2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "nz-input-number", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ByProductShopeeComponent_ng_container_51_Template_nz_input_number_ngModelChange_27_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const item_r4 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.checkStock(item_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ByProductShopeeComponent_ng_container_51_button_29_Template, 3, 5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", _r5)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, (item_r4.image == null ? null : item_r4.image.image_url_list) ? "40px" : "30px"))("src", item_r4.image == null ? null : item_r4.image.image_url_list[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.item_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 16, "SKU"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.item_sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r4.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 18, item_r4.update_time, "dd/MM/YYYY HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 21, "Seller warehouse"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.normal_stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 23, "Enter quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0)("nzStep", 1)("ngModel", item_r4.newQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r4.newQuantity >= 0);
} }
const _c1 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c2 = function (a0) { return { y: a0 }; };
class ByProductShopeeComponent {
    constructor(router, lang, vhComponent, vhAlgorithm, vhQuerySales, cdRef, vhEcommerce) {
        this.router = router;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.cdRef = cdRef;
        this.vhEcommerce = vhEcommerce;
        this.listProduct = []; //danh sách product theo từng id_shop
        this.listSubProduct = []; //danh sách product theo từng id_shop
        /**----------------------------------- */
        this.infoShop = {};
        this.searchValue = '';
        this.setHeight = { "max-height": "500px", "height": "500px" };
        this.sortQuantity = 'asc';
        this.indexSegment = 0;
        this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.infoShop = this.vhEcommerce.getlocalShopListShopee()[0];
        this.changeShop(this.infoShop._id);
    }
    /**Chọn shop và lọc sản phẩm theo shop đó */
    changeShop(id) {
        this.listProduct = [];
        this.syncProductShopee();
        this.listSubProduct = [...this.listProduct];
    }
    /**Đem các biến thể ra đứng độc lập, mục đích dễ sort */
    syncProductShopee() {
        this.vhEcommerce.getlocalProductListShopee(this.infoShop['_id']).forEach(item => {
            if (item.item_status == 'NORMAL') {
                let data = { has_model: item.has_model, item_id: item.item_id, item_name: item.item_name, item_sku: item.item_sku, update_time: new Date(item.update_time * 1000), image: item.image };
                if (item.model && item.model.length) {
                    item.model.forEach(model => this.listProduct.push(Object.assign(Object.assign({}, data), { model, normal_stock: model.stock_info_v2.summary_info.total_available_stock })));
                }
                else
                    this.listProduct.push(Object.assign(Object.assign({}, data), { stock_info: item.stock_info, price_info: item.price_info, normal_stock: item.stock_info_v2.summary_info.total_available_stock }));
            }
        });
    }
    // renderStockInfo(stock_info: Array<any>) {
    //   let normal_stock: number = 0
    //   let data = stock_info.find(item => item.stock_type == 2)
    //   data && (normal_stock = data.normal_stock)
    //   return normal_stock
    // }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/update-stock']);
    }
    searchShopee(value, products) {
        let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
        this.listProduct = this.vhAlgorithm.searchList(val, products ? [...products] : [...this.listSubProduct], ['item_name']);
    }
    ngAfterViewChecked() {
        if (document.querySelector("#by-product-shopee-stock") && document.querySelector(".ant-table-thead") && document.querySelector(".by-product-shopee-stock-header")) {
            this.heightScroll = document.querySelector("#by-product-shopee-stock").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".by-product-shopee-stock-header").clientHeight - 90 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * Sort số lượng tồn kho
     */
    sortQuantityFunc() {
        this.searchShopee(this.searchValue);
        if (this.sortQuantity == 'asc') {
            this.listProduct = this.vhAlgorithm.sortNumberbyASC([...this.listProduct], 'normal_stock');
            this.sortQuantity = 'desc';
        }
        else {
            this.listProduct = this.vhAlgorithm.sortNumberbyDESC([...this.listProduct], 'normal_stock');
            this.sortQuantity = 'asc';
        }
    }
    trackByFn(index, item) {
        return index;
    }
    /**Kiểm tra input nhập vào của stock */
    checkStock(product, event) {
        if (typeof event == 'string')
            delete product.newQuantity;
        else
            product.newQuantity = event;
    }
    /**Cập nhật stock */
    updateQuantity(product) {
        product.loading = true;
        this.vhEcommerce.updateProductStockByJSONshopee(this.renderFormUpdate(product), this.infoShop['access_token'], this.infoShop['_id']).then((res) => {
            if (!res.error) {
                this.vhEcommerce.getProductByItem_idShopee(this.infoShop['access_token'], product.item_id, this.infoShop['_id']).then(productShopee => {
                    if (this.checkQuantityAfterUpdate(product, productShopee)) {
                        product.loading = false;
                        this.vhComponent.alertMessageDesktop("success", this.lang.translate("Update successfully"));
                    }
                    else {
                        product.loading = false;
                        this.vhComponent.alertMessageDesktop("error", this.lang.translate("Update failed"));
                    }
                }).catch(err => console.error(err));
            }
            else {
                product.loading = false;
                this.vhComponent.alertMessageDesktop("error", this.lang.translate(res.message));
            }
        });
    }
    /**Kiểm tra xem sau khi update thì quantity có bằng với quantity khi update hay không */
    checkQuantityAfterUpdate(product, productShopee) {
        // if (product.newQuantity == productShopee.stock_info_v2.summary_info.total_available_stock)
        //   return true
        // return false
        if (product.model) {
            let modelShopee = productShopee.model.find(item => item.model_id == product.model.model_id);
            if (modelShopee) {
                let stock_info_v2 = modelShopee.stock_info_v2.summary_info.total_available_stock;
                if (stock_info_v2 == product.newQuantity) {
                    product.normal_stock = stock_info_v2;
                    delete product.newQuantity;
                    return true;
                }
                return false;
            }
        }
        else {
            let stock_info = productShopee.stock_info_v2.summary_info.total_available_stock;
            if (stock_info && stock_info == product.newQuantity) {
                product.normal_stock = stock_info;
                delete product.newQuantity;
                return true;
            }
            else
                return false;
        }
    }
    /**chuyển data theo đúng định dạng update */
    renderFormUpdate(product) {
        return {
            "item_id": product.item_id,
            "stock_list": [{
                    "model_id": product.model ? product.model.model_id : 0,
                    "seller_stock": [{
                            "location_id": "",
                            "stock": product.newQuantity
                        }]
                }]
        };
    }
}
ByProductShopeeComponent.ɵfac = function ByProductShopeeComponent_Factory(t) { return new (t || ByProductShopeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhEcommerce)); };
ByProductShopeeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ByProductShopeeComponent, selectors: [["app-by-product-shopee"]], decls: 52, vars: 43, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "by-product-shopee-stock"], ["nz-row", "", "nzGutter", "8", 1, "by-product-shopee-stock-header"], ["nz-col", "", "nzSpan", "4", 1, "title"], ["nz-col", "", "nzSpan", "6"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-row", "", "nzGutter", "16", 1, "by-product-shopee-stock-body"], ["nz-col", "", "nzSpan", "24"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData"], ["list_product_show", ""], ["nzWidth", "10%"], ["nzWidth", "35%"], ["nzWidth", "20%"], ["nzAlign", "right", "nzWidth", "20%"], [1, "sortTable"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType", "click"], ["nzAlign", "center", "nzWidth", "15%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-icon", "", "nzType", "search"], ["nz-tooltip", "", "nzTooltipColor", "white", "nzPopoverTrigger", "hover", "onerror", "this.src='./assets/icon/management/image_default.svg'", "width", "40px", "height", "40px", 3, "nzTooltipTitle", "ngStyle", "src"], ["zoomImage", ""], [1, "product-info"], [4, "ngIf"], ["nzAlign", "left", 1, "product-stock"], [1, "product-stock-has-model"], ["nzAlign", "center", 1, "sub-prod"], [1, "sub-prod-update"], [3, "nzPlaceHolder", "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-tooltip", "", "class", "btn-update", "nz-button", "", "nzShape", "circle", 3, "nzLoading", "nzTooltipTitle", "nzTooltipColor", "click", 4, "ngIf"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", "width", "150px", "height", "150px", 3, "src"], [1, "color-orange"], ["nz-tooltip", "", "nz-button", "", "nzShape", "circle", 1, "btn-update", 3, "nzLoading", "nzTooltipTitle", "nzTooltipColor", "click"], ["nz-icon", "", "nzType", "upload", "nzTheme", "outline"]], template: function ByProductShopeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ByProductShopeeComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nz-input-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ByProductShopeeComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function ByProductShopeeComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchShopee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ByProductShopeeComponent_ng_template_19_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ByProductShopeeComponent_Template_i_click_45_listener() { return ctx.sortQuantityFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ByProductShopeeComponent_ng_container_51_Template, 30, 27, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 20, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 22, "Product on Shopee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 24, "Shop name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 26, "Search for product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 28, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c1))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c2, ctx.heightScroll))("nzData", ctx.listProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 30, "Image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 32, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 34, "Last update date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 36, "Stock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.sortQuantity == "asc" ? "arrow-down" : "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 38, "Update"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r2.data)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__.NzInputNumberComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .by-product-shopee-stock-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\nnz-layout[_ngcontent-%COMP%]   .by-product-shopee-stock-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sortTable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sortTable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-info-category[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-stock[_ngcontent-%COMP%] {\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-stock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .sub-prod-update[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .sub-prod-update[_ngcontent-%COMP%]   nz-input-number[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 8px;\n  width: 100%;\n  margin-right: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .btn-update[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-white) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  color: var(--ion-color-vh-green);\n  border-color: var(--ion-color-vh-green);\n  padding: 0 !important;\n  transition: 0.4s;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .btn-update[_ngcontent-%COMP%]:hover {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  color: #ffffff;\n  transition: 0.4s;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-spin[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1000;\n}\n.color-green[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.color-orange[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-orange);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ5LXByb2R1Y3Qtc2hvcGVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRUE7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUlBLG1CQUFBO0FBRFI7QUFGUTtFQUNJLFVBQUE7QUFJWjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0FBR1o7QUFFWTtFQUNJLGNBQUE7QUFBaEI7QUFFWTtFQUNJLCtCQUFBO0FBQWhCO0FBR1E7RUFDSSxlQUFBO0FBRFo7QUFFWTtFQUNJLGNBQUE7QUFBaEI7QUFJWTtFQUNJLGNBQUE7QUFGaEI7QUFNWTtFQUNJLGNBQUE7QUFKaEI7QUFRWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQU5oQjtBQU9nQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFMcEI7QUFTUTtFQUNJLGlFQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBUFo7QUFTUTtFQUNJLGlFQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUFo7QUFVSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVBaO0FBU1E7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVBaO0FBU1E7RUFDSSxrQkFBQTtBQVBaO0FBWUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQVRKO0FBV0E7RUFDSSxnQ0FBQTtBQVJKO0FBVUE7RUFDSSxpQ0FBQTtBQVBKIiwiZmlsZSI6ImJ5LXByb2R1Y3Qtc2hvcGVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ5LXByb2R1Y3Qtc2hvcGVlLXN0b2NrLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbiAgICAuc29ydFRhYmxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1zdG9jayB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLXByb2Qge1xyXG4gICAgICAgICAgICAmLXVwZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgbnotaW5wdXQtbnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tdXBkYXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXVwZGF0ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8tYWZmaWxpYXRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubnotc3BpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLmNvbG9yLWdyZWVuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbi5jb2xvci1vcmFuZ2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1vcmFuZ2UpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 87623:
/*!***************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/update-stock/by-product-shopee/by-product-shopee.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByProductShopeeModule": () => (/* binding */ ByProductShopeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _by_product_shopee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./by-product-shopee.component */ 64311);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _by_product_shopee_component__WEBPACK_IMPORTED_MODULE_0__.ByProductShopeeComponent
    },
];
class ByProductShopeeModule {
}
ByProductShopeeModule.ɵfac = function ByProductShopeeModule_Factory(t) { return new (t || ByProductShopeeModule)(); };
ByProductShopeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ByProductShopeeModule });
ByProductShopeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ByProductShopeeModule, { declarations: [_by_product_shopee_component__WEBPACK_IMPORTED_MODULE_0__.ByProductShopeeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_shopee_update-stock_by-product-shopee_by-product-shopee_m-23d752.js.map