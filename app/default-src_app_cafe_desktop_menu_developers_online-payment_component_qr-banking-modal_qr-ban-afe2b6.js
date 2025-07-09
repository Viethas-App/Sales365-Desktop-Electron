"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_cafe_desktop_menu_developers_online-payment_component_qr-banking-modal_qr-ban-afe2b6"],{

/***/ 40480:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/developers/online-payment/component/qr-banking-modal/qr-banking-modal.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrBankingModalComponent": () => (/* binding */ QrBankingModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/spin */ 80289);








function QrBankingModalComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.urlImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function QrBankingModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-spin", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function QrBankingModalComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrBankingModalComponent_ng_container_9_ng_container_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const bank_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.handleClick(bank_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bank_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, bank_r5.account_no == ctx_r4.bank_active.account_no));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", bank_r5.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", bank_r5.shortName);
} }
function QrBankingModalComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, QrBankingModalComponent_ng_container_9_ng_container_1_Template, 3, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.bankAccounts);
} }
function QrBankingModalComponent_nz_spin_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-spin", 10);
} }
class QrBankingModalComponent {
    constructor(vhQueryDealer, vhQueryCafe, vhComponent, languageService, router, nzModalService) {
        this.vhQueryDealer = vhQueryDealer;
        this.vhQueryCafe = vhQueryCafe;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.router = router;
        this.nzModalService = nzModalService;
        this.total = 5000;
        this.id_payment = '';
        this.banks = [];
        this.urlImg = 'https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<DESCRIPTION>&accountName=<ACCOUNT_NAME>';
        this.loading = false;
        this.loading_banks = false;
        this.bankAccounts = [];
        this.bank_active = {};
    }
    ngOnInit() {
        this.getBanks();
    }
    getBanks() {
        this.vhQueryDealer.vietqr_getBanks()
            .then((res) => {
            // console.log('vietqr_getBanks', res)
            if (res.vcode == 0) {
                this.banks = res.data;
                this.getBanksAccount();
            }
        })
            .catch((err) => console.error(err));
    }
    ngAfterViewInit() {
        this.interval = setInterval(() => {
            this.vhQueryCafe.getPayment(this.id_payment)
                .then((payment) => {
                console.log(payment);
                if (payment.payment_type == 1 && payment.paid_online) {
                    this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Thanh toán thành công"));
                    this.nzModalService.closeAll();
                    this.router.navigate(['/cafe/dashboard/developers/online-payment']);
                    clearInterval(this.interval);
                }
            });
        }, 5000);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.interval);
    }
    getBanksAccount() {
        this.bankAccounts = [
            // {
            //   _id: "1",
            //   acq_id: "970436",
            //   account_name: "CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ VIETHAS",
            //   account_no: "0441000644964",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            {
                _id: "7",
                acq_id: "970422",
                account_name: "LE DUC HUY",
                account_no: "0909925354",
                template: "compact2",
                // branch: this.vhQuerySales.getDefaultBranch()._id
            },
            // {
            //   _id: "2",
            //   acq_id: "970436",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "0251002660414",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "3",
            //   acq_id: "970406",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "0104782569",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "4",
            //   acq_id: "970403",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "060007797128",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "5",
            //   acq_id: "970416",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "115621719",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
            // {
            //   _id: "6",
            //   acq_id: "970405",
            //   account_name: "Nguyễn Hoàng Nam",
            //   account_no: "6360205227977",
            //   template: "compact2",
            //   // branch: this.vhQuerySales.getDefaultBranch()._id
            // },
        ];
        this.bankAccounts.forEach((bank) => {
            var _a;
            bank.logo = (_a = this.banks.find((b) => b.bin == bank.acq_id)) === null || _a === void 0 ? void 0 : _a.logo;
        });
        if (this.bankAccounts.length) {
            this.handleClick(this.bankAccounts[0]);
        }
    }
    handleClick(bank) {
        this.bank_active = bank;
        this.loading = true;
        const accountNo = bank.account_no;
        const accountName = bank.account_name;
        const acqId = bank.acq_id;
        const template = bank.template;
        const amount = this.total;
        const idBill = this.id_payment;
        this.vhQueryCafe.vietqr_generateQR(accountNo, accountName, acqId, template, idBill, amount)
            // this.vhQueryDealer.vietqr_generateQR('0909925354', 'LE DUC HUY', '970422', 'compact2', this.id_payment, 2000)
            .then((res) => {
            console.log('vietqr_generateQR', res);
            if (res.vcode == 0) {
                this.urlImg = res.data;
            }
        })
            .catch((err) => console.error(err))
            .finally(() => this.loading = false);
    }
}
QrBankingModalComponent.ɵfac = function QrBankingModalComponent_Factory(t) { return new (t || QrBankingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryDealer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService)); };
QrBankingModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QrBankingModalComponent, selectors: [["atw-qr-banking-modal"]], inputs: { total: "total", id_payment: "id_payment" }, decls: 11, vars: 4, consts: [[1, "modal-container"], [1, "content-left"], ["alt", "QR Code", "style", "width:80%; height: auto", 3, "src", 4, "ngIf"], ["style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);", 4, "ngIf"], [1, "content-right"], [1, "account-list"], [4, "ngIf"], ["nzSimple", "", 4, "ngIf"], ["alt", "QR Code", 2, "width", "80%", "height", "auto", 3, "src"], [2, "position", "absolute", "top", "50%", "left", "50%", "transform", "translate(-50%, -50%)"], ["nzSimple", ""], [4, "ngFor", "ngForOf"], [1, "account-item", 3, "ngClass", "click"], [2, "width", "100%", "height", "auto", 3, "src", "alt"]], template: function QrBankingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QrBankingModalComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, QrBankingModalComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "S\u1EED d\u1EE5ng Mobile Banking h\u1ED7 tr\u1EE3 QR");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, QrBankingModalComponent_ng_container_9_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, QrBankingModalComponent_nz_spin_10_Template, 1, 0, "nz-spin", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.urlImg && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading_banks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading_banks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__.NzSpinComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], styles: [".modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.content-left[_ngcontent-%COMP%], .content-right[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.content-left[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.active[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n}\n\n.account-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 1rem;\n  gap: 1rem;\n  align-items: center;\n  overflow-y: auto;\n}\n\n.account-list[_ngcontent-%COMP%]   .account-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30%;\n}\n\n@media (max-width: 767px) {\n  .content-left[_ngcontent-%COMP%], .content-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .modal-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  .account-list[_ngcontent-%COMP%]   .account-item[_ngcontent-%COMP%] {\n    width: 43%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLWJhbmtpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBOztFQUVJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSwyQ0FBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7QUFGSjs7QUFJSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBRlI7O0FBT0E7RUFDSTs7SUFFSSxXQUFBO0VBSk47O0VBT0U7SUFDSSxzQkFBQTtJQUNBLHVCQUFBO0VBSk47O0VBUU07SUFDSSxVQUFBO0VBTFY7QUFDRiIsImZpbGUiOiJxci1iYW5raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1sZWZ0LFxyXG4uY29udGVudC1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGVudC1sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuXHJcblxyXG4uYWNjb3VudC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgLmFjY291bnQtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jb250ZW50LWxlZnQsXHJcbiAgICAuY29udGVudC1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYWNjb3VudC1saXN0IHtcclxuICAgICAgICAuYWNjb3VudC1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQzJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_cafe_desktop_menu_developers_online-payment_component_qr-banking-modal_qr-ban-afe2b6.js.map