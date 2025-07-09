"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_dishes_dishes_module_ts"],{

/***/ 30834:
/*!*************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/dishes/dishes.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DishesComponent": () => (/* binding */ DishesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








class DishesComponent {
    constructor(router, vhComponent, vhAuth, languageService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.languageService = languageService;
    }
    ngOnInit() {
    }
    gotoMenu() {
        if (this.vhAuth.checkMyPermission('dishes_enable_manage_menu')) {
            this.router.navigate(['/cafe/dashboard/management/dishes/menu']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoDishList() {
        if (this.vhAuth.checkMyPermission('dishes_enable_manage_dishes')) {
            this.router.navigate(['/cafe/dashboard/management/dishes/dish-list']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoTopping() {
        if (this.vhAuth.checkMyPermission('topping_enable_manage_topping')) {
            this.router.navigate(['/cafe/dashboard/management/dishes/topping']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoToppingCategory() {
        if (this.vhAuth.checkMyPermission('topping_enable_manage_topping')) {
            this.router.navigate(['/cafe/dashboard/management/dishes/topping-category']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoCombo() {
        if (this.vhAuth.checkMyPermission('combo_enable_manage_combo')) {
            this.router.navigate(['/cafe/dashboard/management/dishes/combo']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoComboCategory() {
        if (this.vhAuth.checkMyPermission('combo_enable_manage_combo')) {
            this.router.navigate(['/cafe/dashboard/management/dishes/combo-category']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
}
DishesComponent.ɵfac = function DishesComponent_Factory(t) { return new (t || DishesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
DishesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DishesComponent, selectors: [["app-dishes"]], decls: 100, vars: 21, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nz-row", "", 1, "cus-row"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "item-cus"], [1, "ng-item", "center-all-content", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["height", "60", "width", "60", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["fill", "var(--ion-color-vh-green)", "d", "M472.9,224.2H448c-2.9-10.6-12.5-17.9-23.4-18H398v-65c0.1-2.5-1.2-4.8-3.3-6.1L207.1,26.8\nc-2.2-1.3-4.8-1.3-7,0L12.5,135.1c-2.2,1.3-3.5,3.6-3.5,6.1v216.7c0,2.5,1.3,4.8,3.5,6.1l187.7,108.3c1.1,0.6,2.3,0.9,3.5,0.9\nc1.3,0,2.5-0.3,3.6-0.9l98.7-57v41.2c0,16.4,13.2,29.7,29.6,29.7c0.1,0,0.2,0,0.3,0h137c16.5,0.2,29.9-13.1,30.1-29.5\nc0-0.1,0-0.1,0-0.2V254.4C503,237.8,489.5,224.3,472.9,224.2z M424.8,220.2c5.6,0,10.2,4.5,10.2,10.2l0,0v0.7\nc0,5.6-4.5,10.2-10.2,10.2l0,0h-40.7c-5.6,0-10.2-4.5-10.2-10.2l0,0v-0.7c0-5.6,4.5-10.2,10.2-10.2l0,0H424.8z M203.7,40.9l78,45\nL108,186.2l-78-45L203.7,40.9z M197,454.1L23,353.8V153.3l174,100.3V454.1z M203.7,241.4L122,194.3L295.6,94l81.7,47.2L203.7,241.4\nz M306,254.4v144.8l-95,54.9V253.5l173-100.3v53h0.2c-10.9,0.1-20.5,7.4-23.4,18h-24.9C319.3,224.3,305.9,237.8,306,254.4z\nM489,456.5c0,8.7-7.1,15.8-15.9,15.7c-0.1,0-0.1,0-0.2,0h-137c-8.6,0.1-15.7-6.7-15.9-15.4c0-0.1,0-0.2,0-0.4v-202\nc-0.1-8.8,7-16.1,15.9-16.2l0,0h25.2c3.1,10.2,12.5,17.1,23.1,17h40.4c10.6,0.1,20.1-6.8,23.1-17h25.2c8.9,0.1,16.1,7.3,16.1,16.2\nL489,456.5L489,456.5z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M343.9,325.2h7.3c3.9,0,7-3.1,7-7s-3.1-7-7-7H351v-19h19.3c0.9,2.9,3.6,4.8,6.7,4.7c3.9,0,7-3.1,7-7v-4.7\nc0-3.9-3.2-7-7.1-7h-33c-3.9,0-7,3.2-6.9,7l0,0v33C337,322,340.1,325.2,343.9,325.2L343.9,325.2z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M344,389.2h33c3.9,0,7-3.1,7-7v-33c0-3.9-3.1-7-7-7h-33c-3.9,0-7,3.1-7,7v33C337,386.1,340.1,389.2,344,389.2z\nM351,356.2h19v19h-19V356.2z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M351.3,439.2H351v-19h18.9c0.1,3.9,3.3,7,7.2,6.9c3.8-0.1,6.8-3.1,6.9-6.9v-6.7c0-3.9-3.1-7.1-7.1-7.3h-33\nc-3.9,0.1-7,3.4-6.9,7.3v33c0,3.7,3,6.8,6.7,6.8c0.1,0,0.1,0,0.2,0h7.3c3.9,0,7-3.1,7-7S355.1,439.2,351.3,439.2L351.3,439.2z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M393,286.8l-20.5,20.5l-6.2-6.2c-2.7-2.7-7.2-2.7-9.9,0s-2.7,7.2,0,9.9l11.2,11.2c2.7,2.7,7.2,2.7,9.9,0l0,0\nl25.5-25.5c2.7-2.7,2.7-7.2,0-9.9S395.8,284.1,393,286.8L393,286.8z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M393,416l-20.5,20.5l-6.2-6.2c-2.7-2.7-7.2-2.7-9.9,0s-2.7,7.2,0,9.9l11.2,11.2c2.7,2.7,7.2,2.7,9.9,0l0,0\nl25.5-25.5c2.7-2.7,2.7-7.2,0-9.9S395.8,413.3,393,416L393,416z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M464.9,295.2h-44c-3.9,0-7,3.1-7,7s3.1,7,7,7h44c3.9,0,7-3.1,7-7S468.7,295.2,464.9,295.2z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M464.9,359.2h-44c-3.9,0-7,3.1-7,7s3.1,7,7,7h44c3.9,0,7-3.1,7-7S468.7,359.2,464.9,359.2z", 1, "st0"], ["fill", "var(--ion-color-vh-green)", "d", "M464.9,423.2h-44c-3.9,0-7,3.1-7,7s3.1,7,7,7h44c3.9,0,7-3.1,7-7S468.7,423.2,464.9,423.2z", 1, "st0"], [1, "center-text"], ["id", "icons", "height", "60", "width", "60", "enable-background", "new 0 0 64 64", "viewBox", "0 0 64 64", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "var(--ion-color-vh-green)", "d", "m55.5 64c.553 0 1-.447 1-1v-10-52c0-.553-.447-1-1-1h-42c-3.309 0-6 2.691-6 6v52c0 3.309 2.691 6 6 6zm-1-12h-38v-50h38zm-2 2h2v8h-2zm-39-52h1v50h-1c-1.537 0-2.938.586-4 1.54v-47.54c0-2.206 1.794-4 4-4zm-4 56c0-2.206 1.794-4 4-4h37v3.002h-37c-.553 0-1 .447-1 1s.447 1 1 1h37v2.998h-37c-2.206 0-4-1.794-4-4z"], ["fill", "var(--ion-color-vh-green)", "d", "m21.503 16.999c0 2.967 2.166 5.431 4.999 5.909v9.09c0 .553.447 1 1 1h16.001c.553 0 1-.447 1-1v-9.09c2.832-.479 4.998-2.942 4.998-5.909 0-3.309-2.691-6-6-6h-2.263c-1.267-1.811-3.364-3-5.736-3s-4.47 1.189-5.736 3h-2.264c-3.309.001-5.999 2.691-5.999 6zm6.999 13.001h14.001v.998h-14.001zm-.999-17.001h1.294c-.189.635-.295 1.305-.295 2 0 .553.447 1 1 1s1-.447 1-1c0-2.757 2.243-5 5-5s5 2.243 5 5c0 .553.447 1 1 1s1-.447 1-1c0-.695-.105-1.365-.295-2h1.294c2.206 0 4 1.794 4 4 0 2.203-1.79 3.995-3.992 3.999-.002 0-.004-.001-.006-.001-.276 0-.527.112-.708.294-.182.181-.294.432-.294.708 0 .003.002.006.002.01v5.991h-14.001v-5.996c0-.002.001-.003.001-.005 0-.139-.028-.271-.079-.391-.151-.359-.507-.611-.922-.611-.002 0-.004.001-.006.001-2.203-.004-3.993-1.795-3.993-3.999 0-2.206 1.794-4 4-4z"], ["fill", "var(--ion-color-vh-green)", "d", "m46.499 36.999h-21.994c-.553 0-1 .447-1 1s.447 1 1 1h21.994c.553 0 1-.447 1-1s-.447-1-1-1z"], ["fill", "var(--ion-color-vh-green)", "d", "m46.499 39.999h-21.994c-.553 0-1 .447-1 1s.447 1 1 1h21.994c.553 0 1-.447 1-1s-.447-1-1-1z"], ["fill", "var(--ion-color-vh-green)", "d", "m41.5 43.025h-11.996c-.553 0-1 .447-1 1s.447 1 1 1h11.996c.553 0 1-.447 1-1s-.447-1-1-1z"], ["height", "512pt", "viewBox", "0 0 512 512", "width", "512pt", "xmlns", "http://www.w3.org/2000/svg", 2, "height", "60px", "width", "60px"], ["fill", "var(--ion-color-vh-green)", "d", "m218.296875 66.578125c4.167969 0 7.542969-3.375 7.542969-7.542969 0-4.167968-3.375-7.542968-7.542969-7.542968h-65.640625c-4.164062 0-7.542969 3.375-7.542969 7.542968 0 4.167969 3.378907 7.542969 7.542969 7.542969h25.277344v21.910156c-15.875.757813-31.324219 4.15625-46.015625 10.132813-3.859375 1.570312-5.714844 5.972656-4.144531 9.832031 1.570312 3.859375 5.972656 5.710937 9.832031 4.144531 80.550781-32.773437 173.8125 24.828125 173.8125 116.042969v20.765625h-251.878907v-20.765625c0-40.671875 19.875-78.964844 53.164063-102.429687 3.40625-2.402344 4.222656-7.105469 1.820313-10.511719-2.398438-3.40625-7.105469-4.21875-10.511719-1.820313-37.296875 26.289063-59.5625 69.191406-59.5625 114.761719v23.914063c-7.273438 4.144531-12.191407 11.96875-12.191407 20.921874v.53125c0 13.273438 10.800782 24.074219 24.074219 24.074219h258.292969c13.273438 0 24.074219-10.796875 24.074219-24.074219v-.53125c0-8.953124-4.917969-16.777343-12.191407-20.921874v-23.914063c0-75.078125-59.273437-136.570313-133.484374-140.144531v-21.917969zm105.3125 206.898437v.535157c0 4.953125-4.03125 8.984375-8.984375 8.984375h-258.296875c-4.949219 0-8.980469-4.03125-8.980469-8.984375v-.535157c0-4.953124 4.027344-8.984374 8.980469-8.984374h258.296875c4.953125 0 8.984375 4.03125 8.984375 8.984374zm0 0"], ["fill", "var(--ion-color-vh-green)", "d", "m46.09375 350.152344h215.71875c4.167969 0 7.546875-3.378906 7.546875-7.542969 0-4.167969-3.378906-7.546875-7.546875-7.546875h-215.71875c-4.167969 0-7.546875 3.378906-7.546875 7.546875 0 4.164063 3.378906 7.542969 7.546875 7.542969zm0 0"], ["fill", "var(--ion-color-vh-green)", "d", "m256.617188 389.441406c0-4.164062-3.378907-7.542968-7.542969-7.542968h-202.980469c-4.167969 0-7.546875 3.378906-7.546875 7.542968 0 4.167969 3.378906 7.542969 7.546875 7.542969h202.980469c4.164062 0 7.542969-3.375 7.542969-7.542969zm0 0"], ["fill", "var(--ion-color-vh-green)", "d", "m46.09375 428.734375c-4.167969 0-7.546875 3.375-7.546875 7.542969 0 4.167968 3.378906 7.542968 7.546875 7.542968h150.882812c4.164063 0 7.542969-3.375 7.542969-7.542968 0-4.167969-3.378906-7.542969-7.542969-7.542969zm0 0"], ["fill", "var(--ion-color-vh-green)", "d", "m227.152344 443.820312h41.367187c4.167969 0 7.542969-3.375 7.542969-7.542968 0-4.167969-3.375-7.542969-7.542969-7.542969h-41.367187c-4.164063 0-7.542969 3.375-7.542969 7.542969 0 4.167968 3.378906 7.542968 7.542969 7.542968zm0 0"], ["fill", "var(--ion-color-vh-green)", "d", "m494.847656 338.179688c-2.160156-3.570313-6.796875-4.707032-10.359375-2.542969-3.570312 2.164062-4.707031 6.800781-2.542969 10.359375 39.789063 65.695312-7.542968 150.746094-85.007812 150.746094-54.792969 0-99.324219-44.597657-99.324219-99.332032 0-85.988281 102.925781-131.800781 166.625-73.050781 3.070313 2.828125 7.835938 2.625 10.664063-.429687 2.828125-3.070313 2.625-7.835938-.433594-10.664063-28.367188-26.148437-67.3125-35.75-103.515625-27.289063v-265.253906c0-11.429687-9.304687-20.722656-20.730469-20.722656h-134.890625c-4.175781 0-7.542969 3.378906-7.542969 7.542969 0 4.164062 3.367188 7.546875 7.542969 7.546875h134.890625c3.109375 0 5.640625 2.523437 5.640625 5.632812v269.898438c-90.160156 34.789062-99.222656 158.554687-15.359375 206.289062h-319.773437c-3.105469 0-5.640625-2.523437-5.640625-5.632812v-470.554688c0-3.109375 2.535156-5.632812 5.640625-5.632812h164.425781c4.164062 0 7.542969-3.382813 7.542969-7.546875 0-4.164063-3.378907-7.542969-7.542969-7.542969h-164.425781c-11.425781 0-20.730469 9.292969-20.730469 20.722656v470.554688c0 11.429687 9.304688 20.722656 20.730469 20.722656h329.492187c5.179688 0 9.917969-1.910156 13.558594-5.070312 73.34375 22.269531 147.574219-32.980469 147.574219-109.519532 0-20.933594-5.710938-41.414062-16.507813-59.230468zm0 0"], ["fill", "var(--ion-color-vh-green)", "d", "m396.9375 473.878906c12.480469 0 22.632812-10.152344 22.632812-22.632812v-31.203125h31.203126c12.855468 0 23.214843-10.757813 22.609374-23.714844-.570312-12.085937-10.6875-21.550781-23.03125-21.550781h-30.78125v-30.777344c0-12.347656-9.464843-22.464844-21.554687-23.035156-12.988281-.609375-23.710937 9.769531-23.710937 22.605468v31.207032h-30.777344c-12.6875 0-23.058594 10.007812-23.058594 22.632812 0 12.480469 10.152344 22.632813 22.632812 22.632813h31.203126v30.777343c0 12.6875 10.007812 23.058594 22.632812 23.058594zm-53.839844-68.925781c-4.230468 0-7.730468-3.515625-7.535156-7.917969.1875-3.953125 3.757812-7.167968 7.964844-7.167968h35.429687c5.753907 0 10.4375-4.683594 10.4375-10.4375v-35.855469c0-4.234375 3.519531-7.730469 7.917969-7.535157 3.953125.183594 7.167969 3.757813 7.167969 7.960938v35.429688c0 5.757812 4.683593 10.4375 10.4375 10.4375h35.433593c4.238282 0 7.96875 3.300781 7.96875 7.542968 0 4.160156-3.382812 7.546875-7.542968 7.546875h-35.859375c-5.753907 0-10.433594 4.679688-10.433594 10.433594v35.859375c0 4.230469-3.519531 7.730469-7.921875 7.535156-3.953125-.1875-7.167969-3.757812-7.167969-7.960937v-35.433594c0-5.753906-4.679687-10.4375-10.4375-10.4375zm0 0"], ["xmlns", "http://www.w3.org/2000/svg", "id", "Outline", "viewBox", "0 0 512 512", "width", "512", "height", "512", 2, "height", "60px", "width", "60px"], ["fill", "var(--ion-color-vh-green)", "d", "M408,192a40,40,0,1,0,40,40A40.045,40.045,0,0,0,408,192Zm0,16a24.024,24.024,0,0,1,23.989,23.563l-42.909-14.3A23.964,23.964,0,0,1,408,208Zm0,48a24.024,24.024,0,0,1-23.989-23.563l42.909,14.3A23.964,23.964,0,0,1,408,256Z", 1, "a"], ["fill", "var(--ion-color-vh-green)", "d", "M495.887,296a8,8,0,0,0-1.344-4.433l-14.656-21.984V210.422l14.656-21.984A8,8,0,0,0,495.887,184V128c0-30.191-35.353-53.388-48-60.72V64H448a8,8,0,0,0,8-8V24a8,8,0,0,0-8-8H368a8,8,0,0,0-8,8V56a8,8,0,0,0,8,8h.113v3.28c-12.647,7.332-48,30.529-48,60.72v13.035a44,44,0,0,0-27.586-1.159c-.74-10.888-4.866-25.692-20.25-34.63A22.04,22.04,0,0,0,280,88a32.036,32.036,0,0,0-32-32,24.3,24.3,0,0,0-17.336,7.655,25.145,25.145,0,0,0-2.573,3.155A29.692,29.692,0,0,0,216,64a32.009,32.009,0,0,0-27.7,16.008c-.106,0-.209-.008-.315-.008-26.57,0-40.353,10.348-47.237,19.029a43.373,43.373,0,0,0-4.372,6.7,38.426,38.426,0,0,0-9.647-4.813A32.04,32.04,0,0,0,95,73a29.692,29.692,0,0,0-12.091,2.81,25.145,25.145,0,0,0-2.573-3.155A24.3,24.3,0,0,0,63,65,32.036,32.036,0,0,0,31,97a22.128,22.128,0,0,0,10.291,19.184A32.547,32.547,0,0,0,39,129a31.789,31.789,0,0,0,3.375,14.279,35.75,35.75,0,0,0-3.636,2.682c-.059.052-.118.1-.176.158-11.325,10.442-15.892,23.139-13.192,36.192A39.813,39.813,0,0,0,16,208c0,2.426,17.431,154.1,32.053,280.917A8,8,0,0,0,56,496H312a8,8,0,0,0,7.947-7.083s.408-3.54,1.131-9.808A24.028,24.028,0,0,0,344.01,496H471.99a24,24,0,0,0,24-24.014ZM465.23,203.562A8,8,0,0,0,463.887,208v64a8,8,0,0,0,1.343,4.438l14.658,21.986,0,5.576H336.109l0-5.576,14.658-21.986A8,8,0,0,0,352.113,272V208a8,8,0,0,0-1.343-4.438l-14.657-21.984V176H479.887v5.578ZM479.887,136v24H336.113V136ZM376,32h64V48H376Zm3.75,47.125A8,8,0,0,0,384.113,72V64h47.774v8a8,8,0,0,0,4.363,7.125c10.641,5.432,36.161,22.134,42.292,40.875H337.465C343.61,101.31,369.117,84.576,379.75,79.125ZM216,80c2.171,0,7.3,1.327,9.314,4.393a8,8,0,0,0,14.679-4.719,7.148,7.148,0,0,1,2.213-4.939A8.38,8.38,0,0,1,248,72a16.019,16.019,0,0,1,16,16c0,1.583,0,6.4-9.442,8.131a8,8,0,0,0-1.292,15.388c2.016.732,2.734,4.861,2.734,8.481a16,16,0,0,1-32,0,8,8,0,0,0-8-8,16,16,0,0,1,0-32Zm-82.562,44.594a8.061,8.061,0,0,0,6.581,3.446,7.832,7.832,0,0,0,2.043-.271,7.939,7.939,0,0,0,5.886-7,25.846,25.846,0,0,1,5.821-12.394C160.07,100.873,170.237,96.76,184,96.1a32.059,32.059,0,0,0,24.811,31.083,32,32,0,0,0,62.68-1.551c7.353,10.229,4.792,24.062,4.656,24.759a8.015,8.015,0,0,0,12.107,8.37c.663-.411,16.373-9.97,31.319-.091.188.124.357.271.538.4v9.762A39.908,39.908,0,0,0,280,184.025a39.963,39.963,0,0,0-64,0,39.96,39.96,0,0,0-64,0,39.958,39.958,0,0,0-64,0,39.933,39.933,0,0,0-46.945-13.121c1.025-4.473,3.753-8.747,8.216-12.9a27.606,27.606,0,0,1,3.808-2.512,31.987,31.987,0,0,0,49.108-19.311,32.132,32.132,0,0,0,22.355-18.9A27.381,27.381,0,0,1,133.438,124.594Zm15.979,273.135L151.768,480H111.556l-5.3-92.853C118.71,392.078,133.635,395.626,149.417,397.729Zm16.053,1.622c6.162.43,12.367.649,18.53.649s12.368-.219,18.53-.649L200.225,480h-32.45Zm53.113-1.622c15.782-2.1,30.707-5.651,43.166-10.582L256.444,480H216.232ZM184,384c-59.479,0-96-18.638-96-32s36.521-32,96-32,96,18.638,96,32S243.479,384,184,384ZM96,207.838A24,24,0,0,1,144,208c0,.077.009.152.011.228H144l2.812,98.4c-16.5,2.38-31.956,6.356-44.488,11.855Zm109.225,97.014C198.184,304.287,191.064,304,184,304s-14.184.287-21.229.852L160,207.933a24,24,0,0,1,48,0Zm15.956,1.78,2.812-98.4h-.008c0-.076.011-.151.011-.228a24,24,0,0,1,48-.162l-6.323,110.649C253.141,312.988,237.686,309.011,221.185,306.632ZM63,81a8.38,8.38,0,0,1,5.794,2.735,7.148,7.148,0,0,1,2.213,4.939,8,8,0,0,0,14.679,4.719C87.7,90.327,92.829,89,95,89a16,16,0,0,1,0,32,8,8,0,0,0-8,8,16,16,0,0,1-32,0c0-3.62.718-7.749,2.734-8.481a8,8,0,0,0-1.292-15.388C47,103.4,47,98.583,47,97A16.019,16.019,0,0,1,63,81ZM32,207.721A24,24,0,0,1,80,208c0,.154.014.3.023.456h-.01L86.8,327.233C77.542,334.063,72,342.342,72,352c0,10.644,6.729,19.613,17.748,26.812L95.53,480h-32.4C52.189,385.091,32.792,216.355,32,207.721ZM319.931,349.073C313.5,405.122,307.089,460.744,304.869,480h-32.4l5.782-101.188C289.271,371.613,296,362.644,296,352c0-9.658-5.542-17.937-14.8-24.767l6.787-118.776h-.01c.009-.152.023-.3.023-.456a23.984,23.984,0,0,1,32.268-22.524,7.993,7.993,0,0,0,1.189,2.962l14.656,21.984v59.156l-14.656,21.984A8,8,0,0,0,320.113,296l-.031,53.1ZM477.649,477.655A7.948,7.948,0,0,1,471.99,480H344.01a8,8,0,0,1-8-8l.09-152H479.9l.09,152A7.948,7.948,0,0,1,477.649,477.655Z", 1, "a"], ["xmlns", "http://www.w3.org/2000/svg", "id", "Outline", "viewBox", "0 0 512 512", "width", "512", "height", "512", 2, "height", "4rem", "width", "4rem"]], template: function DishesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishesComponent_Template_div_click_8_listener() { return ctx.gotoDishList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishesComponent_Template_div_click_28_listener() { return ctx.gotoMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishesComponent_Template_div_click_43_listener() { return ctx.gotoTopping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishesComponent_Template_div_click_60_listener() { return ctx.gotoToppingCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishesComponent_Template_div_click_77_listener() { return ctx.gotoCombo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DishesComponent_Template_div_click_89_listener() { return ctx.gotoComboCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, "Food and drink"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 9, "List of dishes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 11, "Dishes category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 13, "List of toppings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 15, "Topping category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 17, "Combo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](99, 19, "Combo category"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  max-width: 1366px;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000040;\n  border-radius: 15px;\n  flex-direction: column;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .item-cus[_ngcontent-%COMP%] {\n  padding: 16px;\n  height: 24vh;\n}\n.center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2hlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxpQkFBQTtFQUVBLGVBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRU47QUFETTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQUdSO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImRpc2hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWxheW91dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIC5jdXMtcm93IHtcclxuICAgIG1heC13aWR0aDogMTM2NnB4O1xyXG4gICBcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIC5uZy1pdGVtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLml0ZW0tY3VzIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDI0dmg7XHJcbiAgfVxyXG59XHJcbi5jZW50ZXItdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 53279:
/*!**********************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/dishes/dishes.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DishesModule": () => (/* binding */ DishesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _dishes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishes.component */ 30834);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _dishes_component__WEBPACK_IMPORTED_MODULE_0__.DishesComponent
    },
    {
        path: 'menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_dishes_menu_menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menu/menu.module */ 55177)).then(m => m.MenuModule)
    },
    {
        path: 'dish-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_dishes_dish-list_dish-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dish-list/dish-list.module */ 79939)).then(m => m.DishListModule)
    },
    {
        path: 'topping',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_dishes_topping_topping_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./topping/topping.module */ 79070)).then(m => m.ToppingModule)
    },
    {
        path: 'combo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_dishes_combo_combo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./combo/combo.module */ 51812)).then(m => m.ComboModule)
    },
    {
        path: 'combo-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_dishes_combo-category_combo-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./combo-category/combo-category.module */ 82009)).then(m => m.ComboCategoryModule)
    },
    {
        path: 'topping-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_dishes_topping-category_topping-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./topping-category/topping-category.module */ 19049)).then(m => m.ToppingCategoryModule)
    },
];
class DishesModule {
}
DishesModule.ɵfac = function DishesModule_Factory(t) { return new (t || DishesModule)(); };
DishesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DishesModule });
DishesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DishesModule, { declarations: [_dishes_component__WEBPACK_IMPORTED_MODULE_0__.DishesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_dishes_dishes_module_ts.js.map