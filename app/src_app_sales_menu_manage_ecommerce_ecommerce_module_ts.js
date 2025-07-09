"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_ecommerce_module_ts"],{

/***/ 83565:
/*!********************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/ecommerce.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EcommerceComponent": () => (/* binding */ EcommerceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/notification */ 8175);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function EcommerceComponent_ng_container_88_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 24);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", (item_r3.data == null ? null : item_r3.data.name) || item_r3.account)("nzValue", item_r3._id);
} }
function EcommerceComponent_ng_container_88_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Danh s\u00E1ch c\u00E1c gian h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EcommerceComponent_ng_container_88_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.id_selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EcommerceComponent_ng_container_88_nz_option_8_Template, 1, 2, "nz-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.srcImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.id_selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.listShop);
} }
function EcommerceComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_div_89_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.connectShop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "K\u1EBFt n\u1ED1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.id_selected);
} }
class EcommerceComponent {
    constructor(router, vhQuerySales, lang, vhComponent, vhEcommerce, notification, vhAuth) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.vhEcommerce = vhEcommerce;
        this.notification = notification;
        this.vhAuth = vhAuth;
        this.allShops = [];
        this.listShop = [];
        this.id_selected = '';
        this.srcImage = '';
        //xử lý modal
        this.visibleShop = false;
        this.shopSelected = {};
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.vhComponent.showLoading('', "transparent-loading").then(() => {
            this.vhEcommerce.getAllShops(this.vhQuerySales.getDefaultBranch()._id).then((shops) => {
                this.vhComponent.hideLoading().then(() => {
                    this.allShops = shops;
                    console.log('allShops----', this.allShops);
                });
            }).catch(err => {
                console.error(err);
                this.vhComponent.hideLoading();
            });
        });
    }
    /**
     * Đồng bộ dữ liệu sendo trước khi vào, riêng sendo thời gian loading có thể lên tới 60s
     */
    gotoSendo() {
        this.srcImage = 'assets/icon/management/ecommerce/Sendo.svg';
        this.listShop = this.allShops.filter(item => item.type == 'sendo');
        if (this.listShop.length == 1)
            this.syncSendo(this.listShop[0]._id);
        else if (this.listShop.length == 0)
            this.vhComponent.alertMessageDesktop('error', "Bạn chưa có gian hàng nào, vui lòng vào mục kết nối để thêm gian hàng");
        else {
            this.id_selected = this.listShop[0]._id;
            this.visibleShop = true;
        }
    }
    syncSendo(id_shop) {
        Promise.all([
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Sendo..."), "transparent-loading", undefined, 0, true, 90000),
            this.vhQuerySales.refreshLocalProductListSendo(id_shop)
        ]).then(([refresh, loading]) => {
            this.vhComponent.hideLoading(0);
            this.router.navigate(['/sales/dashboard/manage/ecommerce/sendo']);
        }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        this.expireTimeOut = setTimeout(() => {
            this.vhComponent.alertMessageDesktop('error', "Xảy ra lỗi khi đồng bộ, vui lòng thử lại");
        }, 90000);
    }
    /**
     * Đồng bộ dữ liệu lazada trước khi vào, thời gian loading tối đa 30s
     */
    gotoLazada() {
        this.srcImage = 'assets/icon/management/ecommerce/lazada.svg';
        this.listShop = this.allShops.filter(item => item.type == 'lazada');
        if (this.listShop.length == 1)
            this.syncLazada(this.listShop[0]._id);
        else if (this.listShop.length == 0)
            this.vhComponent.alertMessageDesktop('error', "Bạn chưa có gian hàng nào, vui lòng vào mục kết nối để thêm gian hàng");
        else {
            this.id_selected = this.listShop[0]._id;
            this.visibleShop = true;
        }
    }
    syncLazada(id_shop) {
        Promise.all([
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Lazada..."), "transparent-loading", undefined, 0, true, 90000),
            this.vhQuerySales.refreshLocalProductListLazadas(id_shop)
        ]).then(([refresh, loading]) => {
            this.vhComponent.hideLoading(0);
            this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada']);
        }, error => { console.error(error); this.vhComponent.hideLoading(0); }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        this.expireTimeOut = setTimeout(() => {
            this.vhComponent.alertMessageDesktop('error', "Xảy ra lỗi khi đồng bộ, vui lòng thử lại");
        }, 90000);
    }
    /**
     * Đồng bộ dữ liệu tiki trước khi vào, thời gian loading tối đa 30s
     */
    gotoTiki() {
        this.srcImage = 'assets/icon/management/ecommerce/Tiki.svg';
        this.listShop = this.allShops.filter(item => item.type == 'tiki');
        if (this.listShop.length == 1)
            this.syncTiki(this.listShop[0]._id);
        else if (this.listShop.length == 0)
            this.vhComponent.alertMessageDesktop('error', "Bạn chưa có gian hàng nào, vui lòng vào mục kết nối để thêm gian hàng");
        else {
            this.id_selected = this.listShop[0]._id;
            this.visibleShop = true;
        }
    }
    syncTiki(id_shop) {
        Promise.all([
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Tiki..."), "transparent-loading", undefined, 0, true, 90000),
            this.vhQuerySales.refreshLocalProductListTikis(id_shop)
        ]).then(([refresh, loading]) => {
            this.vhComponent.hideLoading(0);
            this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki']);
        }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        this.expireTimeOut = setTimeout(() => {
            this.vhComponent.alertMessageDesktop('error', "Xảy ra lỗi khi đồng bộ, vui lòng thử lại");
        }, 90000);
    }
    /**
     * Đồng bộ dữ liệu shopee trước khi vào, thời gian loading tối đa 30s
     */
    gotoShopee() {
        this.srcImage = 'assets/icon/management/ecommerce/shopee.svg';
        this.listShop = this.allShops.filter(item => item.type == 'shopee');
        if (this.listShop.length == 1)
            this.syncShopee(this.listShop[0]._id);
        else if (this.listShop.length == 0)
            this.vhComponent.alertMessageDesktop('error', "Bạn chưa có gian hàng nào, vui lòng vào mục kết nối để thêm gian hàng");
        else {
            this.id_selected = this.listShop[0]._id;
            this.visibleShop = true;
        }
    }
    syncShopee(id_shop) {
        Promise.all([
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Shopee..."), "transparent-loading", undefined, 0, true, 90000),
            this.vhEcommerce.refreshLocalProductListShopee(this.vhQuerySales.getDefaultBranch()._id, id_shop),
        ]).then(([refresh, loading]) => {
            this.vhComponent.hideLoading(0);
            this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee']);
        }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        this.expireTimeOut = setTimeout(() => {
            this.vhComponent.alertMessageDesktop('error', "Xảy ra lỗi khi đồng bộ, vui lòng thử lại");
        }, 90000);
    }
    gotoTiktok() {
        this.srcImage = 'assets/icon/management/ecommerce/tiktok.svg';
        // this.router.navigate(['/sales/dashboard/manage/ecommerce/tiktok'])
        this.listShop = this.allShops.filter(item => item.type == 'tiktok');
        if (this.listShop.length == 1)
            this.syncTiktok(this.listShop[0]._id);
        else if (this.listShop.length == 0)
            this.vhComponent.alertMessageDesktop('error', "Bạn chưa có gian hàng nào, vui lòng vào mục kết nối để thêm gian hàng");
        else {
            this.id_selected = this.listShop[0]._id;
            this.visibleShop = true;
        }
    }
    syncTiktok(id_shop) {
        console.log('id_shop----', id_shop);
        console.log('id_branch----', this.vhQuerySales.getDefaultBranch()._id);
        Promise.all([
            this.vhComponent.showLoading(this.lang.translate("Syncing product data Tiktok..."), "transparent-loading", undefined, 0, true, 90000),
            this.vhEcommerce.refreshLocalProductListTiktok(this.vhQuerySales.getDefaultBranch()._id, id_shop),
        ]).then(([refresh, loading]) => {
            console.log(loading);
            this.vhComponent.hideLoading(0);
            this.router.navigate(['/sales/dashboard/manage/ecommerce/tiktok']);
        }).catch(err => { console.error(err); this.vhComponent.hideLoading(0); });
        this.expireTimeOut = setTimeout(() => {
            this.vhComponent.alertMessageDesktop('error', "Xảy ra lỗi khi đồng bộ, vui lòng thử lại");
        }, 90000);
    }
    gotoAnalytics() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/analytics']);
    }
    /**
     * Cấu hình gian hàng cho tất cả các sàn
     */
    gotoSettings() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/settings']);
    }
    ngOnDestroy() {
        clearTimeout(this.expireTimeOut);
    }
    downloadChat() {
        // let check = this.vhAuth.getStore()
        // if (check.isTester)
        window.open("https://drive.google.com/file/d/16aub1FTSh95mMDAhZ9yU7XPu1j-8JS7S/view?usp=sharing", "_blank");
        // else {
        //   this.notification
        //     .blank(
        //       "",
        //       this.lang.translate("Vui lòng liên hệ hotline 0934 60 60 60 để sử dụng chức năng này") + "."
        //     )
        //     .onClick.subscribe(() => {
        //     });
        // }
    }
    connectShop() {
        if (this.srcImage.indexOf('lazada') >= 0)
            this.syncLazada(this.id_selected);
        else if (this.srcImage.indexOf('Tiki') >= 0)
            this.syncTiki(this.id_selected);
        else if (this.srcImage.indexOf('Sendo') >= 0)
            this.syncSendo(this.id_selected);
        else if (this.srcImage.indexOf('shopee') >= 0)
            this.syncShopee(this.id_selected);
        else if (this.srcImage.indexOf('tiktok') >= 0)
            this.syncTiktok(this.id_selected);
        this.visibleShop = false;
    }
}
EcommerceComponent.ɵfac = function EcommerceComponent_Factory(t) { return new (t || EcommerceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhEcommerce), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth)); };
EcommerceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EcommerceComponent, selectors: [["app-ecommerce"]], decls: 90, vars: 29, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nz-row", "", 1, "cus-row"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "item-cus"], [1, "ng-item", "center-all-content", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["src", "assets/icon/management/ecommerce/shopee.svg", 1, "ion-icon"], [1, "center-text", "medium-size"], ["src", "assets/icon/management/ecommerce/tiktok.svg", 1, "ion-icon"], ["src", "assets/icon/management/ecommerce/lazada.svg", 1, "ion-icon"], ["src", "assets/icon/management/ecommerce/Tiki.svg", 1, "ion-icon"], ["src", "assets/icon/management/ecommerce/Sendo.svg", 1, "ion-icon"], ["name", "analytics-outline", "color", "vh-green", 2, "font-size", "4rem"], ["src", "assets/icon/management/ecommerce/settings1.svg", 2, "font-size", "4rem", "color", "var(--ion-color-vh-green)"], ["src", "assets/icon/management/ecommerce/chat.svg", 2, "font-size", "4rem", "color", "var(--ion-color-vh-green)"], ["nzWidth", "400", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], ["class", "modal-shop", 4, "nzModalContent"], [4, "nzModalFooter"], [1, "modal-shop"], [1, "modal-shop-logo"], [3, "src"], [1, "modal-shop-select"], [3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function EcommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_8_listener() { return ctx.gotoShopee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_18_listener() { return ctx.gotoTiktok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_28_listener() { return ctx.gotoLazada(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_38_listener() { return ctx.gotoTiki(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_48_listener() { return ctx.gotoSendo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_58_listener() { return ctx.gotoAnalytics(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_68_listener() { return ctx.gotoSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EcommerceComponent_Template_div_click_78_listener() { return ctx.downloadChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "nz-modal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function EcommerceComponent_Template_nz_modal_nzVisibleChange_87_listener($event) { return ctx.visibleShop = $event; })("nzOnCancel", function EcommerceComponent_Template_nz_modal_nzOnCancel_87_listener() { ctx.visibleShop = false; return ctx.id_selected = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, EcommerceComponent_ng_container_88_Template, 9, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, EcommerceComponent_div_89_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 11, "E-commerce"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 13, "Shopee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 15, "Tiktok"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 17, "Lazada"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 19, "Tiki"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 21, "Sendo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 23, "Business analysis"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 25, "Shop settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](86, 27, "General chat for e-commerce platforms"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.visibleShop)("nzTitle", null);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalFooterDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: auto;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000040;\n  border-radius: 15px;\n  flex-direction: column;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   ion-icon.ion-icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .item-cus[_ngcontent-%COMP%] {\n  padding: 8px;\n  height: 24vh;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.modal-shop[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.modal-shop-logo[_ngcontent-%COMP%], .modal-shop-select[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.modal-shop-logo[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .modal-shop-select[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 120px;\n}\n.modal-shop-logo[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%], .modal-shop-select[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.modal-shop-select[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVjb21tZXJjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBR1o7QUFGWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFJaEI7QUFBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFFSTtFQUNJLGVBQUE7QUFDUjtBQUNJO0VBRUksV0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ1o7QUFDUTtFQUNJLFdBQUE7QUFDWjtBQUVJO0VBQ0ksaUJBQUE7QUFBUiIsImZpbGUiOiJlY29tbWVyY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5jdXMtcm93IHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgLm5nLWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwNDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaW9uLWljb24uaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jdXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDI0dmg7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4ubW9kYWwtc2hvcCB7XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgJi1sb2dvLFxyXG4gICAgJi1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbnotc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zZWxlY3Qge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 26206:
/*!*****************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/ecommerce.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EcommerceModule": () => (/* binding */ EcommerceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecommerce.component */ 83565);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _ecommerce_component__WEBPACK_IMPORTED_MODULE_0__.EcommerceComponent
    },
    {
        path: 'shopee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_qrcode_lib_browser_js"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_shopee_shopee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shopee/shopee.module */ 5500)).then(m => m.ShopeeModule)
    },
    {
        path: 'sendo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_sendo_sendo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sendo/sendo.module */ 89491)).then(m => m.SendoModule)
    },
    {
        path: 'lazada',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_lazada_lazada_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lazada/lazada.module */ 8387)).then(m => m.LazadaModule)
    },
    {
        path: 'tiki',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_qrcode_lib_browser_js"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_tiki_tiki_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tiki/tiki.module */ 40098)).then(m => m.TikiModule)
    },
    {
        path: 'tiktok',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_qrcode_lib_browser_js"), __webpack_require__.e("src_app_sales_menu_manage_ecommerce_tiktok_tiktok_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tiktok/tiktok.module */ 54113)).then(m => m.TiktokModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 88793)).then(m => m.SettingsModule)
    },
    {
        path: 'analytics',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_ecommerce_analytics_analytics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./analytics/analytics.module */ 45648)).then(m => m.AnalyticsModule)
    }
];
class EcommerceModule {
}
EcommerceModule.ɵfac = function EcommerceModule_Factory(t) { return new (t || EcommerceModule)(); };
EcommerceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EcommerceModule });
EcommerceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EcommerceModule, { declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_0__.EcommerceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_ecommerce_module_ts.js.map