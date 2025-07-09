"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_socials-channel_facebook_facebook_module_ts"],{

/***/ 25999:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookComponent": () => (/* binding */ FacebookComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/facebook.service */ 69404);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/notification */ 8175);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/spin */ 80289);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function FacebookComponent_div_46_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r3.category);
} }
function FacebookComponent_div_46_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("B\u1EA1n kh\u00F4ng c\u00F3 quy\u1EC1n k\u1EBFt n\u1ED1i v\u1EDBi trang n\u00E0y");
} }
function FacebookComponent_div_46_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 45);
} }
function FacebookComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FacebookComponent_div_46_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const page_r3 = restoredCtx.$implicit; const i_r4 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return !page_r3.otherUser ? ctx_r10.connectPage(page_r3, i_r4) : ctx_r10.gotoFacebook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FacebookComponent_div_46_div_7_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FacebookComponent_div_46_ng_template_8_Template, 3, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, FacebookComponent_div_46_i_10_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", page_r3.image_url || "assets/icon/no-avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !page_r3.otherUser)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", page_r3.checked);
} }
function FacebookComponent_ng_container_58_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FacebookComponent_ng_container_58_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const page_r14 = restoredCtx.$implicit; const i_r15 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.addTolistPage(page_r14, i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", page_r14.image_url || "assets/icon/no-avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", page_r14.category, " ");
} }
function FacebookComponent_ng_container_58_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "No data"), " ");
} }
function FacebookComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FacebookComponent_ng_container_58_div_2_Template, 9, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FacebookComponent_ng_container_58_div_3_Template, 3, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "nz-spin", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.listPageDrawer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.listPageDrawer.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("nzTip", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "Loading"), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpinning", ctx_r2.loadingDrawer);
} }
class FacebookComponent {
    constructor(router, fbService, lang, vhComponent, vhQuery, vhQuerySales, notification) {
        this.router = router;
        this.fbService = fbService;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.vhQuerySales = vhQuerySales;
        this.notification = notification;
        this.loading = false; // loading khi mới vào trang
        this.loadingDrawer = false; // loading khi tải danh sách
        this.infoUser = {}; //  thông tin của khách hàng
        this.listPage = [];
        this.listPageDrawer = [];
        this.listPageConnect = [];
        this.loadAllPage = false;
        this.visibleListPageNotConnect = false;
        this.fbAuthentication = {};
    }
    ngOnInit() {
        if (this.fbService.getStatusLogin())
            this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook/conversation']);
        else
            this.getData();
    }
    getData() {
        this.loading = true;
        let infoAuth = this.fbService.getAuthResponse();
        //lấy thông tin user hiện thời đăng nhập
        Promise.all([
            this.fbService.getInfoUser(infoAuth['userID'], infoAuth['accessToken']),
            this.vhQuery.getDocsByFields('fb_authentications', { id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } })
        ]).then((res) => {
            this.infoUser = res[0];
            this.fbAuthentication = res[1][0];
            //lấy danh sách các page đã connect(local)
            if (this.fbAuthentication && this.fbAuthentication.userID == this.infoUser.id) {
                this.listPage = this.fbAuthentication['listPage'];
                this.listPage.forEach(item => {
                    item.checked = true;
                    this.listPageConnect.push(item);
                });
            }
        }).finally(() => this.loading = false);
    }
    /**
     * Thêm, xóa page connect
     * @param page
     * @param index
     */
    connectPage(page, index) {
        if (!page.checked && this.listPageConnect.length < 3) {
            page.checked = !page.checked;
            this.listPageConnect.push(page);
        }
        else if (page.checked) {
            this.listPageConnect = this.listPageConnect.filter(item => item.id !== page.id);
            page.checked = !page.checked;
        }
    }
    /**
     * Tiến hành lấy long live access_token cho page
     * Note : chỗ này có thể có nhiều page chia làm nhiều request tuy nhiên thực tế 1 page k thể có 25 page được
     * Nên không viết thêm hàm lấy next page
     */
    connectFB() {
        this.loading = true;
        let infoAuth = this.fbService.getAuthResponse();
        this.fbService.getLongLiveAccessTokenUser(infoAuth['accessToken']).then(res => {
            let listpage = this.listPage.filter(item => item.checked);
            let user = Object.assign(Object.assign(Object.assign({}, infoAuth), this.infoUser), { access_token: res['access_token'] });
            delete user.accessToken;
            this.fbService.setInfoUserConnect(Object.assign({}, user));
            this.fbService.getLongLiveAccessTokenPage(res['access_token'], infoAuth['userID']).then((result) => {
                let list = result.data;
                if (list) {
                    for (let page of listpage) {
                        let index = list.findIndex(item => item.id == page.id);
                        index >= 0 && (page.access_token = list[index].access_token);
                    }
                    this.saveAuthenticationIntoDb(user, this.listPage).then(res => {
                        this.fbService.setListPageConnect(listpage, infoAuth['userID']);
                        this.fbService.setStatusLogin(true);
                        this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook/conversation']);
                    });
                }
            });
            this.loading = false;
        }).catch(() => this.loading = false);
        this.fbService.setListPageConnect(this.listPageConnect, infoAuth['userID']);
    }
    /**
     * Hàm này để lưu db thông tin đăng nhập facebook
     * @param user
     * @param listPage
     * @returns
     */
    saveAuthenticationIntoDb(user, listPage) {
        return new Promise((resolve) => {
            let json = {
                userID: user['userID'],
                name: user['name'],
                access_token: user['access_token'],
                id_branch: this.vhQuerySales.getDefaultBranch()._id,
                listPage: listPage.map(item => {
                    return {
                        access_token: item['access_token'],
                        category: item['category'],
                        name: item['name'],
                        id: item['id'],
                        image_url: item['image_url']
                    };
                })
            };
            if (this.fbAuthentication && this.fbAuthentication._id)
                this.vhQuery.updateDoc('fb_authentications', this.fbAuthentication._id, json).then(res => resolve(json)).catch(err => resolve(false));
            else
                this.vhQuery.addDoc('fb_authentications', json).then(res => resolve(json)).catch(err => resolve(false));
        });
    }
    /**
     * Show drawer hiển thị danh sách các page chưa liên kết
     */
    openDrawerListPage() {
        //this.vhQuerySales.refreshLocalRestrictionFacebookPackage()
        //.then(()=>{
        let fanpage_number = this.vhQuerySales.getLocalRestrictionMainPackage().fanpage_number; // số lượng shop cho phép
        let listPage = this.listPage.length; // số lượng shop đã thêm
        if (listPage < fanpage_number)
            this.openAddFbPage();
        else {
            this.notification
                .blank(`Số lượng FanPage có thể tạo là ${fanpage_number} `, `Vui lòng liên hệ 0934 60 60 60 để nâng cấp!`)
                .onClick.subscribe(() => {
                // 
            });
        }
        //})
    }
    openAddFbPage() {
        this.visibleListPageNotConnect = true;
        if (!this.loadAllPage) {
            this.loadingDrawer = true;
            let infoAuth = this.fbService.getAuthResponse();
            this.fbService.getPageAccessTokenByUserID(infoAuth['userID'], infoAuth['accessToken']).then((res) => {
                let listPageDrawer = [];
                listPageDrawer = res.data;
                let pages = [];
                listPageDrawer.forEach(item => {
                    pages.push(this.fbService.getProfileIamgeOfUserOrPage(infoAuth['accessToken'], item.id));
                });
                Promise.all(pages).then((result) => {
                    listPageDrawer.forEach((item, index) => { var _a; item.image_url = (_a = result[index].data) === null || _a === void 0 ? void 0 : _a.url; });
                    //vòng lặp for này sẽ duyệt qua và xóa những phần tử đã liên kết ra khỏi mảng
                    for (let page of this.listPage) {
                        let index = listPageDrawer.findIndex(data => data.id == page.id);
                        if (index >= 0)
                            listPageDrawer.splice(index, 1);
                    }
                    this.listPageDrawer = listPageDrawer;
                    this.loadingDrawer = false;
                    this.loadAllPage = true;
                }).catch(() => this.vhComponent.alertMessageDesktop('error', this.lang.translate('Có lỗi xảy ra') + '!'));
            }).catch(() => {
                this.vhComponent.alertMessageDesktop('error', this.lang.translate('Có lỗi xảy ra') + '!');
            });
        }
    }
    addTolistPage(page, index) {
        this.listPage.push(page);
        this.listPageDrawer.splice(index, 1);
        this.visibleListPageNotConnect = false;
    }
    gotoFacebook() {
        this.fbService.setListPageConnect(this.fbAuthentication['listPage'], this.fbAuthentication['userID']);
        this.fbService.setStatusLogin(true);
        this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook/conversation']);
    }
    logoutFb() {
        if (this.fbService.getAuthResponse()) {
            this.fbService.logoutFacebook().then(res => {
                this.vhComponent.alertMessageDesktop('success', "Đăng xuất thành công");
                this.router.navigate(['/sales/dashboard/manage/socials-channel/socials-connect']);
            }).catch(() => { console.error('Error'); });
        }
        else
            this.router.navigate(['/sales/dashboard/manage/socials-channel/socials-connect']);
    }
}
FacebookComponent.ɵfac = function FacebookComponent_Factory(t) { return new (t || FacebookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_facebook_service__WEBPACK_IMPORTED_MODULE_0__.FacebookService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__.NzNotificationService)); };
FacebookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FacebookComponent, selectors: [["app-facebook"]], decls: 59, vars: 35, consts: [["nz-row", "", 1, "facebook-header"], ["nz-col", "", "nzSpan", "6", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "18", 1, "right-all-content", "facebook-header-user"], ["nzTrigger", "click", "nz-dropdown", "", 1, "facebook-header-user-picture", 3, "nzDropdownMenu"], ["alt", "", 3, "src"], [1, "status", "active"], ["user", "nzDropdownMenu"], ["nz-menu", "", 2, "width", "320px"], ["nz-menu-item", ""], [1, "center-all-content"], [1, "left-all-content", 2, "width", "80%"], ["width", "40px", "height", "40px", "alt", "", 2, "border-radius", "50%", 3, "src"], [2, "margin-top", "12px"], [2, "display", "block", "color", "var(--ion-color-vh-green)"], ["title", "\u0110\u0103ng xu\u1EA5t", 1, "logout-action", 2, "width", "20%", "display", "inline-block", 3, "click"], ["width", "36", "height", "36", "viewBox", "0 0 36 36", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "18", "cy", "18", "r", "18", "fill", "#F2F2F2"], ["d", "M15 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9H15", "stroke", "#65676B", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22 23L27 18L22 13", "stroke", "#65676B", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M27 18H15", "stroke", "#65676B", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["nz-row", "", 1, "facebook-content"], ["nz-col", "", "nzSpan", "24"], [3, "nzTitle"], ["nz-col", "", "nzSpan", "16"], ["nz-col", "", "nzSpan", "8", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-green", "center-all-content", 2, "width", "auto !important", "margin-right", "8px", 3, "disabled", "click"], ["nz-row", "", "nzGutter", "16"], ["nz-col", "", "nzSpan", "8", 3, "click", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "8", 3, "click"], [1, "facebook-content-page"], [1, "facebook-content-page-avatar"], ["src", "assets/icon/add-quantity.svg", 2, "border-radius", "0"], [1, "facebook-content-page-info", 2, "align-self", "center"], [3, "nzSpinning", "nzTip"], ["nzPlacement", "right", 3, "nzMaskClosable", "nzWidth", "nzClosable", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], [3, "src"], [1, "facebook-content-page-info"], [1, "name"], ["class", "category", 4, "ngIf", "ngIfElse"], ["cannotAccess", ""], ["class", "checked", "nz-icon", "", "nzType", "check-circle", "nzTheme", "outline", 4, "ngIf"], [1, "category"], [1, "category-red"], ["nz-tooltip", "", "nzTooltipPlacement", "top", "nzTooltipTitle", "T\u00E0i kho\u1EA3n facebook hi\u1EC7n t\u1EA1i c\u1EE7a b\u1EA1n kh\u00F4ng c\u00F3 quy\u1EC1n qu\u1EA3n l\u00FD fanpage n\u00E0y, tuy nhi\u00EAn v\u1EABn c\u00F3 quy\u1EC1n truy c\u1EADp", "nz-icon", "", "nzType", "question-circle", "nzTheme", "outline", 1, "icon"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline", 1, "checked"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 3, "click"], [1, "facebook-content-page", 2, "margin-top", "8px", "width", "100%", "box-shadow", "1px 2px 6px rgba(0, 0, 0, 0.25)", "padding", "12px", "border-radius", "8px", "cursor", "pointer", "display", "flex", "justify-content", "start", "position", "relative"], [1, "facebook-content-page-avatar", 2, "width", "60px", "display", "inline", "float", "left"], [2, "width", "50px", "height", "50px", "border-radius", "25px", 3, "src"], [1, "facebook-content-page-info", 2, "width", "calc(100% - 60px)"], [1, "name", 2, "font-weight", "bold", "font-size", "0.9rem", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "status", 2, "font-size", "0.8rem", "color", "var(--ion-color-vh-gray)"], ["nz-col", "", "nzSpan", "24", 1, "no-data"]], template: function FacebookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nz-dropdown-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FacebookComponent_Template_span_click_25_listener() { return ctx.logoutFb(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "circle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "nz-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FacebookComponent_Template_button_click_41_listener() { return ctx.connectFB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, FacebookComponent_div_46_Template, 11, 5, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FacebookComponent_Template_div_click_47_listener() { return ctx.openDrawerListPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "nz-spin", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "nz-drawer", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function FacebookComponent_Template_nz_drawer_nzOnClose_56_listener() { return ctx.visibleListPageNotConnect = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, FacebookComponent_ng_container_58_Template, 6, 6, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 19, "System configuration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDropdownMenu", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (ctx.infoUser.picture == null ? null : ctx.infoUser.picture.data == null ? null : ctx.infoUser.picture.data.url) || "assets/icon/no-avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (ctx.infoUser.picture == null ? null : ctx.infoUser.picture.data == null ? null : ctx.infoUser.picture.data.url) || "assets/icon/no-avatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.infoUser.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 21, "Tr\u1EF1c tuy\u1EBFn"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 23, "Page management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 25, "List of connected pages (select up to 3 pages to connect)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.listPageConnect.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 27, "Connect"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 29, "Add new connected page"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("nzTip", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](55, 31, "Synchronizing data, please wait..."), "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpinning", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 33, "List of unmanaged pages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 450)("nzClosable", true)("nzVisible", ctx.visibleListPageNotConnect);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_9__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuItemDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__.NzSpinComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__.NzDrawerContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  margin-top: 30px;\n  height: 95%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 12px;\n  font-size: 1.5rem;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-header[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-header-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-header-user-picture[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  cursor: pointer;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-header-user-picture[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  background: #47d55e;\n  border: 1px solid #fff;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  position: absolute;\n  right: 10px;\n  bottom: -4px;\n  box-sizing: border-box;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page[_ngcontent-%COMP%] {\n  width: 90%;\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);\n  padding: 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  display: inline;\n  float: left;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page-info[_ngcontent-%COMP%] {\n  width: calc(100% - 60px);\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.9rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page-info[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page-info[_ngcontent-%COMP%]   .category-red[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--ion-color-vh-red);\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page-info[_ngcontent-%COMP%]   .category-red[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page[_ngcontent-%COMP%]   .checked[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -8px;\n  top: -8px;\n  font-size: 24px;\n  background: var(--ion-color-vh-green);\n  border-radius: 50%;\n  color: white;\n}\nnz-layout[_ngcontent-%COMP%]   .facebook-content-page[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 5px 1px rgba(110, 110, 110, 0.33);\n  background: #f3f7ff;\n}\nnz-layout[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2Vib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUNaO0FBRUk7RUFFSSxjQUFBO0FBRFI7QUFHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEaEI7QUFHWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFEaEI7QUFFZ0I7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFwQjtBQUtJO0VBQ0ksaUJBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7QUFGWjtBQUlRO0VBQ0ksVUFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBRlo7QUFHWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURoQjtBQUVnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBcEI7QUFHWTtFQUNJLHdCQUFBO0FBRGhCO0FBRWdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFwQjtBQUVnQjtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QUFBcEI7QUFFZ0I7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0FBQXBCO0FBQ29CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ3hCO0FBR1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRGhCO0FBSVE7RUFDSSxxREFBQTtFQUNBLG1CQUFBO0FBRlo7QUFLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFIUiIsImZpbGUiOiJmYWNlYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2staGVhZGVyIHtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiKDAgMCAwIC8gMjUlKTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgICAmLXVzZXIge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1waWN0dXJlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0N2Q1NWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC00cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mYWNlYm9vay1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXBhZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICYtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LXJlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1yZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1wYWdlOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4IGhzbGEoMCwgMCUsIDQzLjElLCAwLjMzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjdmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuei1zcGluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 91609:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/facebook/facebook.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookModule": () => (/* binding */ FacebookModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _facebook_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook.component */ 25999);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _facebook_component__WEBPACK_IMPORTED_MODULE_0__.FacebookComponent
    },
    {
        path: 'conversation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_interface_vh-sale-invoice_ts"), __webpack_require__.e("src_app_sales_menu_manage_socials-channel_facebook_facebook-conversation_facebook-conversatio-97950d")]).then(__webpack_require__.bind(__webpack_require__, /*! ./facebook-conversation/facebook-conversation.module */ 73698)).then(m => m.FacebookConversationModule)
    }
];
class FacebookModule {
}
FacebookModule.ɵfac = function FacebookModule_Factory(t) { return new (t || FacebookModule)(); };
FacebookModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FacebookModule });
FacebookModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FacebookModule, { declarations: [_facebook_component__WEBPACK_IMPORTED_MODULE_0__.FacebookComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_socials-channel_facebook_facebook_module_ts.js.map