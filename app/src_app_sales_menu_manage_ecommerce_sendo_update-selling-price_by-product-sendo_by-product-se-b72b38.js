"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_sendo_update-selling-price_by-product-sendo_by-product-se-b72b38"],{

/***/ 2945:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/sendo/update-selling-price/by-product-sendo/by-product-sendo.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByProductSendoComponent": () => (/* binding */ ByProductSendoComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function ByProductSendoComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 23);
} }
function ByProductSendoComponent_tr_51_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ByProductSendoComponent_tr_51_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Subproduct code"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.variant_sku);
} }
function ByProductSendoComponent_tr_51_div_16_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ByProductSendoComponent_tr_51_div_16_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.updatePrice(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLoading", item_r4.loading)("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, "Update"))("nzTooltipColor", "var(--ion-color-vh-green)");
} }
function ByProductSendoComponent_tr_51_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ByProductSendoComponent_tr_51_div_16_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return item_r4.newPrice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ByProductSendoComponent_tr_51_div_16_button_3_Template, 3, 5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, "Enter price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r4.newPrice)("ngClass", item_r4.product_vhcurrency);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.newPrice && item_r4.newPrice != "");
} }
const _c0 = function (a0) { return { width: a0 }; };
function ByProductSendoComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ByProductSendoComponent_tr_51_ng_template_3_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ByProductSendoComponent_tr_51_p_8_Template, 5, 4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ByProductSendoComponent_tr_51_div_16_Template, 4, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzTooltipTitle", _r5)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, item_r4.image ? "40px" : "30px"))("src", item_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r4.variant_attribute_hash);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 8, item_r4.updated_date_timestamp, "dd/MM/YYYY HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.vhAlgorithm.vhcurrencyunit(item_r4.variant_price || item_r4.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r4.variants || !item_r4.variants.length);
} }
const _c1 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c2 = function (a0) { return { y: a0 }; };
class ByProductSendoComponent {
    constructor(router, lang, vhComponent, vhAlgorithm, vhQuerySales, cdRef) {
        this.router = router;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.cdRef = cdRef;
        this.listProduct = []; //danh sách product theo từng id_shop
        this.listSubProduct = []; //danh sách product theo từng id_shop
        this.listLocalProduct = [];
        /**----------------------------------- */
        this.infoShop = {};
        this.searchValue = '';
        this.searchOnSendo = '';
        this.setHeight = { "max-height": "500px", "height": "500px" };
        this.loadingDetail = false;
        this.sortPrice = 'desc';
        this.listPrice = {};
        this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
        this.arrayHidden = []; //mảng này chứa id của những sp đang tạm ẩn
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.infoShop = this.vhQuerySales.getlocalShopListSendo()[0];
        this.changeShop(this.infoShop._id);
    }
    /**Chọn shop và lọc sản phẩm theo shop đó */
    changeShop(id) {
        this.returnArrayHiddenProduct();
        this.loadProductsSendo();
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/sendo/update-selling-price']);
    }
    /**
     * search sp theo tên
     * @example this.searchSendo('')
     */
    searchSendo(value) {
        let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
        this.listProduct = this.vhAlgorithm.searchList(val, [...this.listSubProduct], ['name']);
        this.renderPrice();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#by-product-sendo-price") && document.querySelector(".ant-table-thead") && document.querySelector(".by-product-sendo-price-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#by-product-sendo-price").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".by-product-sendo-price-header").clientHeight - 90 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * Lấy ra những id của các sản phẩm bị tận ẩn
     *  @example   this.returnArrayHiddenProduct()
     */
    returnArrayHiddenProduct() {
        let arr = [];
        this.arrayHidden = [];
        let localProduct = this.vhQuerySales.getlocalProducts(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.PRODUCT);
        for (let product of localProduct) {
            if (product[this.id_branch] && product[this.id_branch].sendos && product[this.id_branch].sendos.length) {
                for (let prod of product[this.id_branch].sendos)
                    if (prod.hidden == true && prod.id_shop == this.infoShop['_id'])
                        arr.push(prod.id);
            }
        }
        this.arrayHidden = arr;
    }
    /**Lấy chi tiết từng sản phẩm con
     * @example this.loadProductsSendo()
    */
    loadProductsSendo() {
        let idArray = [];
        for (let prod of [...this.vhQuerySales.getlocalProductListSendo(this.infoShop['_id'])].filter(item => item.stock)) {
            if (!prod.variants)
                idArray.push(prod.id);
        }
        if (idArray.length) {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.vhQuerySales.getProductDetailSendo(idArray, this.infoShop['token'], this.infoShop['_id']).then((details) => {
                    this.vhComponent.hideLoading(0);
                    this.syncProductSendo();
                }).catch(err => {
                    this.vhComponent.hideLoading(0);
                    console.error(err);
                });
            });
        }
        else
            this.syncProductSendo();
    }
    renderDate(date) {
        return date ? new Date((date - 7 * 60 * 60) * 1000) : '';
    }
    /**
     * Đem sp con ra đứng độc lập, mục đích là dễ sort
     *  @example this.syncProductSendo()
     */
    syncProductSendo() {
        this.listProduct = [];
        this.listLocalProduct = [...this.vhQuerySales.getlocalProductListSendo(this.infoShop['_id'])].filter(item => item.stock && !this.arrayHidden.includes(item.id));
        for (let item of this.listLocalProduct) {
            let value = {
                id: item.id, name: item.name, price: item.price,
                stock_quantity: item.stock_quantity, image: item.image,
                sku: item.sku, updated_date_timestamp: this.renderDate(item.updated_date_timestamp)
            };
            if (item.variants && item.variants.length) {
                for (let prod of item.variants) {
                    this.listProduct.push(Object.assign(Object.assign({}, value), { variant_attribute_hash: prod.variant_attribute_hash, variant_quantity: prod.variant_quantity, variant_price: prod.variant_price, variant_sku: prod.variant_sku, product_vhcurrency: `product_vhcurrency-${this.listProduct.length}` }));
                }
            }
            else //TH không sp con
                this.listProduct.push(Object.assign(Object.assign({}, value), { variants: [], variant_attribute_hash: null, product_vhcurrency: `product_vhcurrency-${this.listProduct.length}` }));
            this.listSubProduct = [...this.listProduct];
            this.sortPriceFunc();
        }
        this.renderPrice();
    }
    trackByFn(index, item) {
        return index;
    }
    /**Sắp xếp tăng / giảm dần
     * @example this.sortPriceFunc()
    */
    sortPriceFunc() {
        this.searchSendo(this.searchValue);
        if (this.sortPrice == 'asc') {
            this.listProduct = [...this.listProduct].sort((a, b) => {
                if (a.variant_attribute_hash && b.variant_attribute_hash)
                    return (a.variant_price || 0) - (b.variant_price || 0);
                else if (!a.variant_attribute_hash && b.variant_attribute_hash)
                    return (a.price || 0) - (b.variant_price || 0);
                else if (a.variant_attribute_hash && !b.variant_attribute_hash)
                    return (a.variant_price || 0) - (b.price || 0);
                else if (!a.variant_attribute_hash && !b.variant_attribute_hash)
                    return (a.price || 0) - (b.price || 0);
            });
            this.sortPrice = 'desc';
        }
        else {
            this.listProduct = [...this.listProduct].sort((a, b) => {
                if (a.variant_attribute_hash && b.variant_attribute_hash)
                    return (b.variant_price || 0) - (a.variant_price || 0);
                else if (!a.variant_attribute_hash && b.variant_attribute_hash)
                    return (b.variant_price || 0) - (a.price || 0);
                else if (a.variant_attribute_hash && !b.variant_attribute_hash)
                    return (b.price || 0) - (a.variant_price || 0);
                else if (!a.variant_attribute_hash && !b.variant_attribute_hash)
                    return (b.price || 0) - (a.price || 0);
            });
            this.sortPrice = 'asc';
        }
        this.renderPrice();
    }
    /**Cleave js price
     * @example  this.renderPrice()
    */
    renderPrice() {
        setTimeout(() => {
            this.listPrice = [];
            for (let prod of this.listProduct) {
                if (document.querySelector(`.${prod['product_vhcurrency']}`))
                    this.listPrice[prod['product_vhcurrency']] = this.vhAlgorithm.vhnumeral(`.${prod['product_vhcurrency']}`);
            }
        }, 300);
    }
    /**
     * cập nhật price của sp lên sendo
     * @param product
     * @example  this.updatePrice(product_sendo)
     */
    updatePrice(product) {
        product.loading = true;
        this.vhQuerySales.updateByJSONSendo(this.renderFormUpdate(product), this.infoShop.token).then((res) => {
            if (res.success) {
                this.vhQuerySales.getProductDetailSendo([product.id], this.infoShop['token'], this.infoShop['_id']).then(productSendo => {
                    if (this.checkQuantityAfterUpdate(product, productSendo[0])) {
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
                this.vhComponent.alertMessageDesktop("error", this.lang.translate("Update failed"));
            }
        });
    }
    /**Kiểm tra xem sau khi update thì price có bằng với price khi update hay không
     *  @example  this.checkQuantityAfterUpdate(product, product_sendo)
    */
    checkQuantityAfterUpdate(product, productSendo) {
        if (!product.variant_attribute_hash && productSendo.variants.length == 0) {
            if (this.listPrice[product['product_vhcurrency']].getRawValue() == productSendo.price) {
                product.price = productSendo.price;
                delete product.newPrice;
                return true;
            }
            else
                return false;
        }
        else {
            let prod = productSendo.variants.find(item => product.variant_attribute_hash == item.variant_attribute_hash);
            if (prod && prod.variant_price == this.listPrice[product['product_vhcurrency']].getRawValue()) {
                product.variant_price = prod.variant_price;
                delete product.newPrice;
                return true;
            }
            else
                return false;
        }
    }
    /**chuyển data theo đúng định dạng update của sendo yêu cầu
     * @example this.renderFormUpdate(product)
     */
    renderFormUpdate(product) {
        if (!product.variant_attribute_hash) {
            return [{
                    "id": product.id,
                    "price": this.listPrice[product['product_vhcurrency']].getRawValue(),
                    "Field_Mask": [
                        "price"
                    ],
                    "variants": []
                }];
        }
        else {
            return [{
                    "id": product.id,
                    "variants": [
                        {
                            "variant_price": this.listPrice[product['product_vhcurrency']].getRawValue(),
                            "variant_attribute_hash": product.variant_attribute_hash,
                            "field_mask": [
                                "price"
                            ]
                        }
                    ]
                }];
        }
    }
}
ByProductSendoComponent.ɵfac = function ByProductSendoComponent_Factory(t) { return new (t || ByProductSendoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
ByProductSendoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ByProductSendoComponent, selectors: [["app-by-product-sendo"]], decls: 52, vars: 43, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "by-product-sendo-price"], ["nz-row", "", "nzGutter", "8", 1, "by-product-sendo-price-header"], ["nz-col", "", "nzSpan", "4", 1, "title"], ["nz-col", "", "nzSpan", "6"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-row", "", "nzGutter", "16", 1, "by-product-sendo-price-body"], ["nz-col", "", "nzSpan", "24"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData", "nzPageSizeChange", "nzPageIndexChange"], ["list_product_show", ""], ["nzWidth", "10%"], ["nzWidth", "35%"], ["nzWidth", "20%"], ["nzAlign", "right", "nzWidth", "20%"], [1, "sortTable"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType", "click"], ["nzAlign", "center", "nzWidth", "15%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-icon", "", "nzType", "search"], ["nz-tooltip", "", "nzTooltipColor", "white", "nzPopoverTrigger", "hover", "onerror", "this.src='./assets/icon/management/image_default.svg'", "width", "40px", "height", "40px", 3, "nzTooltipTitle", "ngStyle", "src"], ["zoomImage", ""], [4, "ngIf"], ["nzAlign", "right"], ["nzAlign", "center"], ["class", "sub-prod-update", 4, "ngIf"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", "width", "150px", "height", "150px", 3, "src"], [1, "sub-prod-update"], ["type", "text", "maxlength", "15", "nz-input", "", 3, "ngModel", "ngClass", "placeholder", "ngModelChange"], ["nz-tooltip", "", "class", "btn-update", "nz-button", "", "nzShape", "circle", 3, "nzLoading", "nzTooltipTitle", "nzTooltipColor", "click", 4, "ngIf"], ["nz-tooltip", "", "nz-button", "", "nzShape", "circle", 1, "btn-update", 3, "nzLoading", "nzTooltipTitle", "nzTooltipColor", "click"], ["nz-icon", "", "nzType", "upload", "nzTheme", "outline"]], template: function ByProductSendoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ByProductSendoComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-input-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ByProductSendoComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function ByProductSendoComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchSendo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ByProductSendoComponent_ng_template_19_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzPageSizeChange", function ByProductSendoComponent_Template_nz_table_nzPageSizeChange_23_listener() { return ctx.renderPrice(); })("nzPageIndexChange", function ByProductSendoComponent_Template_nz_table_nzPageIndexChange_23_listener() { return ctx.renderPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ByProductSendoComponent_Template_i_click_45_listener() { return ctx.sortPriceFunc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ByProductSendoComponent_tr_51_Template, 17, 13, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 20, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 22, "Product on Sendo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 24, "Shop name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 26, "Search for product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 28, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](40, _c1))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](41, _c2, ctx.heightScroll))("nzData", ctx.listProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 30, "Image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 32, "Product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 34, "Last update date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 36, "Selling price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.sortPrice == "asc" ? "arrow-down" : "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 38, "Update"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r2.data)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .by-product-sendo-price-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  margin-bottom: 12px;\n}\nnz-layout[_ngcontent-%COMP%]   .by-product-sendo-price-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sub-prod-update[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sub-prod-update[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 8px;\n  width: 100%;\n  margin-right: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .sub-prod-update[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sub-prod-update[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 8px;\n  width: 100%;\n  margin-right: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-update[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-white) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  color: var(--ion-color-vh-green);\n  border-color: var(--ion-color-vh-green);\n  padding: 0 !important;\n  transition: 0.4s;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-update[_ngcontent-%COMP%]:hover {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  color: #ffffff;\n  transition: 0.4s;\n}\nnz-layout[_ngcontent-%COMP%]   .sortTable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sortTable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .icon-expand[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 12px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-spin[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ5LXByb2R1Y3Qtc2VuZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFJQSxtQkFBQTtBQURSO0FBRlE7RUFDSSxVQUFBO0FBSVo7QUFBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBR1o7QUFBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBR1o7QUFBSTtFQUNJLGlFQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFBSTtFQUNJLGlFQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBQUdaO0FBQ1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDWjtBQUVZO0VBQ0ksY0FBQTtBQUFoQjtBQUlZO0VBQ0ksY0FBQTtBQUZoQjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpSO0FBS1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSFo7QUFLUTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBSFo7QUFLUTtFQUNJLGtCQUFBO0FBSFo7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFMSiIsImZpbGUiOiJieS1wcm9kdWN0LXNlbmRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ5LXByb2R1Y3Qtc2VuZG8tcHJpY2UtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnN1Yi1wcm9kLXVwZGF0ZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdWItcHJvZC11cGRhdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLXVwZGF0ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG4gICAgLmJ0bi11cGRhdGU6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICAuc29ydFRhYmxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgLmljb24tZXhwYW5kIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8tYWZmaWxpYXRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubnotc3BpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 99062:
/*!********************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/sendo/update-selling-price/by-product-sendo/by-product-sendo.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByProductSendoModule": () => (/* binding */ ByProductSendoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _by_product_sendo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./by-product-sendo.component */ 2945);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _by_product_sendo_component__WEBPACK_IMPORTED_MODULE_0__.ByProductSendoComponent
    },
];
class ByProductSendoModule {
}
ByProductSendoModule.ɵfac = function ByProductSendoModule_Factory(t) { return new (t || ByProductSendoModule)(); };
ByProductSendoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ByProductSendoModule });
ByProductSendoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ByProductSendoModule, { declarations: [_by_product_sendo_component__WEBPACK_IMPORTED_MODULE_0__.ByProductSendoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_sendo_update-selling-price_by-product-sendo_by-product-se-b72b38.js.map