"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_admin_customer-care-assignment_customer-care-assignment_module_ts"],{

/***/ 5345:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/customer-care-assignment/customer-care-assignment.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCareAssignmentComponent": () => (/* binding */ CustomerCareAssignmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _component_note_note_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/note/note.component */ 39027);
/* harmony import */ var _component_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/search-customer/search-customer.component */ 35455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);

// import { FirebaseAuth, QueryVhAPP, OrdinaryAlgorithm } from 'private-angular-vhframeworks';












function CustomerCareAssignmentComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function CustomerCareAssignmentComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r6.value, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
} }
function CustomerCareAssignmentComponent_mat_spinner_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 36);
} }
function CustomerCareAssignmentComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CustomerCareAssignmentComponent_tr_73_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partner_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", partner_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", partner_r10.name, " ");
} }
function CustomerCareAssignmentComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerCareAssignmentComponent_tr_73_Template_td_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const customer_r7 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.copyValue(customer_r7.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerCareAssignmentComponent_tr_73_Template_td_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const customer_r7 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.copyValue(0 + customer_r7.phone); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerCareAssignmentComponent_tr_73_Template_mat_icon_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const customer_r7 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.openZalo(customer_r7.countrycode + customer_r7.phone); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerCareAssignmentComponent_tr_73_Template_td_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const customer_r7 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.openNote(customer_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerCareAssignmentComponent_tr_73_Template_select_ngModelChange_26_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const customer_r7 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.updateEndUser_CareStaff(customer_r7, $event); })("ngModelChange", function CustomerCareAssignmentComponent_tr_73_Template_select_ngModelChange_26_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const customer_r7 = restoredCtx.$implicit; return customer_r7.id_carestaff = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CustomerCareAssignmentComponent_tr_73_option_27_Template, 2, 2, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r7.no);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 12, customer_r7.registrationdate, "dd/MM/yyyy, HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", customer_r7.countrycode, "", customer_r7.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r7.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r7.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx_r4.renderTitle(customer_r7.status_store ? customer_r7.status_store : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r7.status_store ? customer_r7.status_store : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", customer_r7.id_carestaff);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.list_partner);
} }
class CustomerCareAssignmentComponent {
    constructor(VhQueryAdministrator, dialog, 
    // public firebaseAuth: FirebaseAuth,
    // public ordinaryAlgorithm: OrdinaryAlgorithm,
    _snackBar) {
        this.VhQueryAdministrator = VhQueryAdministrator;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        /// panigatior ///
        this.app = 'bvhsales';
        this.pageIndex = 0;
        this.pageSize = 20;
        this.lowValue = 0;
        this.highValue = 20;
        this.pageSizeOption = [20, 50, 100, 200, 500];
        this.data = [];
        this.startTime = new Date();
        this.endTime = new Date();
        this.list_partner = [{ name: "Không xác định", _id: null }];
        this.idPartner = 'all';
        this.loading = false;
        this.status = 'all';
        this.list_status = [
            {
                value: 1,
                name: 'Chưa liên lạc cho khách, khách mới đăng kí vào hệ thống',
            },
            { value: 2, name: 'Đã gọi cho khách, nhưng không liên lạc được' },
            {
                value: 3,
                name: 'Đã gọi cho khách, liên lạc được, nhưng khách hẹn gọi lại sau',
            },
            {
                value: 4,
                name: 'Đã gọi cho khách, liên lạc được nhưng khách không có nhu cầu',
            },
            {
                value: 5,
                name: 'Đã gọi cho khách, liên lạc được, khách mới đăng kí, chưa nhập dữ liệu (chưa xài)',
            },
            {
                value: 6,
                name: 'Đã gọi cho khách, liên lạc được, khách đang xài thử demo, đang hỗ trợ',
            },
            { value: 7, name: 'Đã hỗ trợ cho khách trong quá trình xài thử, demo' },
            { value: 8, name: 'Khách đã xài thử, demo (nhưng lại không xài nữa)' },
            {
                value: 9,
                name: 'Khách đã xài chính thức, đang hỗ trợ hướng dẫn nghiệp vụ cho khách',
            },
            {
                value: 10,
                name: 'Khách đã xài chính thức, đang hỗ trợ, khách để nghị thêm tính năng cho phần mềm',
            },
            {
                value: 11,
                name: 'Khách đã xài chính thức, đang hỗ trợ, khách phản hồi lỗi phần mềm',
            },
            { value: 12, name: 'Khách đã xài chính thức, đã hỗ trợ khách (hoàn tất)' },
            { value: 13, name: 'Khách đã xài chính thức (nhưng lại không xài nữa)' },
        ];
    }
    ngOnInit() {
        this.startTime.setHours(0, 0, 0, 0);
        this.endTime.setHours(23, 59, 59, 59);
        this.getPartners();
    }
    getEndUsers_byTime_byCareStaff_byStatusStore(loading) {
        if (loading)
            this.loading = true;
        this.data = [];
        this.VhQueryAdministrator.getShops_byTime(this.startTime, this.endTime)
            .then((data) => {
            console.log(data);
            this.loading = false;
            if (data) {
                this.data = data.map((item, index) => {
                    if (!item.id_carestaff)
                        item.id_carestaff = null;
                    return Object.assign(Object.assign({}, item), { no: (index += 1) });
                });
                console.log(data);
            }
        }, (err) => {
            console.log(err), (this.loading = false);
        });
    }
    getPartners() {
        // this.firebaseAuth.getPartners()
        // .then((data) => {
        //    if (data) this.list_partner = this.list_partner.concat(data);
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // );
    }
    selectStartTime(event) {
        this.startTime = new Date(event).setHours(0, 0, 0, 0);
    }
    selectEndTime(event) {
        this.endTime = new Date(event).setHours(23, 59, 59, 59);
    }
    selectApp(event) {
        this.app = event;
    }
    selectEmployee(event) {
        this.idPartner = event;
    }
    selectType(event) {
        if (event != 'all')
            this.status = parseInt(event);
        else
            this.status = event;
    }
    openNote(item) {
        const dialogRef = this.dialog.open(_component_note_note_component__WEBPACK_IMPORTED_MODULE_0__.NoteComponent, {
            width: '80%',
            maxWidth: '100%',
            disableClose: true,
            data: {
                customer: item,
                project: this.app,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result.check && result.check.status != this.status) {
                if (this.status == 'all') {
                    // this.queryVhAPP.getEndUser_byEmail(result.customer.email, result.project).then((data: any) => {
                    //   let replace = data[0]
                    //   replace.no = result.customer.no
                    //   this.data.splice(this.data.findIndex((item) => item._id == result.customer._id), 1, replace);
                    // });
                }
                else {
                    this.data.splice(this.data.findIndex((item) => item._id == result.customer._id), 1);
                    // this.data = this.ordinaryAlgorithm.sortDatebyASC(this.data, 'registrationdate').map((item, index) => { return { ...item, no: (index += 1) } });
                }
            }
        });
    }
    openSearch() {
        const dialogRef = this.dialog.open(_component_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_1__.SearchCustomerComponent, {
            width: '85%',
            maxWidth: '100%',
            data: this.app,
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (this.data && result) {
                let index = this.data.findIndex((item) => item._id == result[0]._id);
                if (index != -1) {
                    // this.queryVhAPP.getEndUser_byEmail(result[0].email, this.app).then((data: any) => {
                    //   this.data.splice(index, 1, data[0]);
                    //   this.data = this.ordinaryAlgorithm.sortDatebyASC(this.data, 'registrationdate').map((item, index) => { return { ...item, no: (index += 1) } });
                    // })
                }
            }
        });
    }
    updateEndUser_CareStaff(customer, id_carestaff) {
        if (id_carestaff === "null")
            id_carestaff = null;
        // this.queryVhAPP
        //   .updateEndUser_CareStaff(customer._id, id_carestaff, this.app)
        //   .then(
        //     (result) => {
        //       console.log(result);
        //     },
        //     (err) => console.log(err)
        //   );
    }
    openZalo(customer) {
        window.open(`https://zalo.me/${customer}`);
    }
    // slice panigator
    getPaginatorData(event) {
        this.lowValue = event.pageIndex * event.pageSize;
        this.highValue = this.lowValue + event.pageSize;
        return event;
    }
    copyValue(value) {
        navigator.clipboard.writeText(value);
        this._snackBar.open('Copied', value, {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000
        });
    }
    renderTitle(value) {
        return this.list_status.filter(item => item.value == value)[0].name;
    }
}
CustomerCareAssignmentComponent.ɵfac = function CustomerCareAssignmentComponent_Factory(t) { return new (t || CustomerCareAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryAdministrator), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
CustomerCareAssignmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerCareAssignmentComponent, selectors: [["app-customer-care-assignment"]], viewQuery: function CustomerCareAssignmentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 77, vars: 23, consts: [[2, "height", "100%"], [2, "height", "8%", "display", "flex", "width", "100%", "align-items", "center"], [2, "display", "flex", "align-items", "flex-start", "width", "15%", "flex-direction", "column", "justify-content", "center"], ["for", "", 2, "padding-right", "4px", "margin", "0"], ["aria-placeholder", "Ch\u1ECDn nh\u00E2n vi\u00EAn", "id", "category", 2, "padding", "4px", "border-radius", "4px", "width", "90%", 3, "ngModel", "ngModelChange"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [2, "width", "15%", "display", "flex", "align-items", "flex-start", "flex-direction", "column", "justify-content", "center"], ["id", "category", 2, "padding", "4px", "border-radius", "4px", "width", "90%", 3, "ngModel", "ngModelChange"], ["value", "bvhsales"], ["value", "bvhcafe"], [2, "display", "flex", "width", "35%", "flex-direction", "column", "align-items", "flex-start", "justify-content", "center"], ["id", "category", 2, "padding", "4px", "border-radius", "4px", "width", "95%", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "align-items", "center", "width", "40%", "justify-content", "center"], [2, "display", "flex", "align-items", "flex-start", "flex-direction", "column", "width", "45%", "justify-content", "center"], ["for", "time", 2, "padding-right", "4px", "margin", "0"], ["type", "date", "id", "time", "name", "time", 1, "input", "shadow-none", 2, "padding", "4px", "width", "100%", 3, "ngModel", "ngModelChange"], [2, "display", "flex", "align-items", "flex-start", "flex-direction", "column", "padding-left", "8px", "width", "45%", "justify-content", "center"], [2, "display", "flex", "justify-content", "flex-end", "align-items", "center", "padding-top", "20px"], [1, "bg-success", "text-white", "px-3", "mx-2", "btn-view", 3, "click"], [2, "height", "91%", "margin-top", "1%", "overflow-y", "hidden"], [1, "body-tab", 2, "height", "92%"], ["color", "warn", "style", "top: 50%; left: 50%; position: absolute;", 4, "ngIf"], ["style", "top: 50%; left: 50%; position: absolute;", 4, "ngIf"], [1, "table"], ["scope", "col", 2, "width", "4%"], ["scope", "col", 2, "width", "11%"], ["scope", "col", 2, "width", "8%"], ["scope", "col", 2, "width", "10%"], ["scope", "col", 2, "width", "14%"], ["scope", "col", 2, "width", "7%"], ["scope", "col", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [2, "height", "8%", "width", "100%"], ["showFirstLastButtons", "false", 3, "length", "pageSizeOptions", "pageSize", "page"], [3, "value"], ["color", "warn", 2, "top", "50%", "left", "50%", "position", "absolute"], [2, "top", "50%", "left", "50%", "position", "absolute"], [2, "word-break", "break-word", "width", "4%"], [2, "word-break", "break-word", "width", "11%"], [2, "word-break", "break-word", "width", "8%"], ["matTooltip", "Click to copy", "matTooltipPosition", "above", 2, "word-break", "break-word", "width", "10%", "cursor", "pointer", 3, "click"], [2, "word-break", "break-word", "width", "14%", "cursor", "pointer", 3, "click"], ["matTooltip", "Click to copy", "matTooltipPosition", "above"], ["matTooltip", "Click to open Zalo", "matTooltipPosition", "above", 2, "margin", "auto", "cursor", "pointer", "color", "#00A859", 3, "click"], [2, "word-break", "break-word", "width", "14%"], [2, "word-break", "break-word", "width", "7%", 3, "click"], [2, "margin", "auto", "cursor", "pointer"], ["matTooltipPosition", "above", 2, "word-break", "break-word", "width", "4%", 3, "matTooltip"], [2, "word-break", "break-word", "width", "20%"], ["aria-placeholder", "Ch\u1ECDn nh\u00E2n vi\u00EAn", 2, "padding", "4px", "border-radius", "4px", "width", "150px", 3, "ngModel", "ngModelChange"]], template: function CustomerCareAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nh\u00E2n vi\u00EAn:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerCareAssignmentComponent_Template_select_ngModelChange_6_listener($event) { return ctx.selectEmployee($event); })("ngModelChange", function CustomerCareAssignmentComponent_Template_select_ngModelChange_6_listener($event) { return ctx.idPartner = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " T\u1EA5t c\u1EA3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CustomerCareAssignmentComponent_option_9_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "D\u1EF1 \u00E1n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerCareAssignmentComponent_Template_select_ngModelChange_14_listener($event) { return ctx.selectApp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Sales Viethas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Cafe Viethas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Tr\u1EA1ng th\u00E1i kh\u00E1ch h\u00E0ng:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerCareAssignmentComponent_Template_select_ngModelChange_23_listener($event) { return ctx.selectType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " T\u1EA5t c\u1EA3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CustomerCareAssignmentComponent_option_26_Template, 4, 3, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "T\u1EEB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerCareAssignmentComponent_Template_input_ngModelChange_33_listener($event) { return ctx.selectStartTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u0110\u1EBFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerCareAssignmentComponent_Template_input_ngModelChange_40_listener($event) { return ctx.selectEndTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerCareAssignmentComponent_Template_button_click_43_listener() { return ctx.getEndUsers_byTime_byCareStaff_byStatusStore(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Xem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, CustomerCareAssignmentComponent_mat_spinner_47_Template, 1, 0, "mat-spinner", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, CustomerCareAssignmentComponent_div_48_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Ng\u00E0y \u0111k");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "T\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u0110i\u1EC7n tho\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "C\u00F4ng ty");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "\u0110\u1ECBa ch\u1EC9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "H\u1ED7 tr\u1EE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "T.Th\u00E1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "CSKH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, CustomerCareAssignmentComponent_tr_73_Template, 28, 15, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "mat-paginator", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function CustomerCareAssignmentComponent_Template_mat_paginator_page_76_listener($event) { return ctx.getPaginatorData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.idPartner);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list_partner);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.app);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](34, 13, ctx.startTime, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](41, 16, ctx.endTime, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.data.length && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](74, 19, ctx.data, ctx.lowValue, ctx.highValue));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.data.length)("pageSizeOptions", ctx.pageSizeOption)("pageSize", ctx.pageSize);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nth[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  background-color: #529BFC;\n  color: #fff;\n}\n\n.body-tab[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n\n\n\n.body-tab[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none !important;\n}\n\n\n\n.body-tab[_ngcontent-%COMP%] {\n  -ms-overflow-style: none !important;\n  \n  scrollbar-width: none !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWNhcmUtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFFRCx5QkFBQTtFQUNDLFdBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREUsZ0RBQUE7O0FBQ0E7RUFDRSx3QkFBQTtBQUlKOztBQURFLDRDQUFBOztBQUNBO0VBQ0UsbUNBQUE7RUFBcUMsZ0JBQUE7RUFDckMsZ0NBQUE7RUFBa0MsWUFBQTtBQU10QyIsImZpbGUiOiJjdXN0b21lci1jYXJlLWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICB0aCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE1MiwgMTUyKTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOUJGQztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAuYm9keS10YWIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuICAuYm9keS10YWI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbiAgLmJvZHktdGFiIHtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZSAhaW1wb3J0YW50OyAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lICFpbXBvcnRhbnQ7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 58174:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/customer-care-assignment/customer-care-assignment.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerCareAssignmentModule": () => (/* binding */ CustomerCareAssignmentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _customer_care_assignment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-care-assignment.component */ 5345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dealer/material.module */ 25218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _customer_care_assignment_component__WEBPACK_IMPORTED_MODULE_0__.CustomerCareAssignmentComponent,
    },
];
class CustomerCareAssignmentModule {
}
CustomerCareAssignmentModule.ɵfac = function CustomerCareAssignmentModule_Factory(t) { return new (t || CustomerCareAssignmentModule)(); };
CustomerCareAssignmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerCareAssignmentModule });
CustomerCareAssignmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerCareAssignmentModule, { declarations: [_customer_care_assignment_component__WEBPACK_IMPORTED_MODULE_0__.CustomerCareAssignmentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_customer-care-assignment_customer-care-assignment_module_ts.js.map