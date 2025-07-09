"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_admin_partner_carestaff-commission_carestaff-commission_module_ts"],{

/***/ 58793:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/partner/carestaff-commission/add-carestaff-commission/add-carestaff-commission.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCarestaffCommissionComponent": () => (/* binding */ AddCarestaffCommissionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 15644);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);











function AddCarestaffCommissionComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vui l\u00F2ng nh\u1EADp t\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCarestaffCommissionComponent_mat_form_field_42_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_42_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.level1.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.level1.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_43_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_43_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.level1.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.level1.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_55_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_55_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.level2.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.level2.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_56_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_56_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.level2.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.level2.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_68_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_68_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.level3.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.level3.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_69_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 32, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_69_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.level3.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.level3.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_81_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_81_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.level4.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.level4.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_82_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 32, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_82_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.level4.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.level4.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_94_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_94_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.level5.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.level5.commission);
} }
function AddCarestaffCommissionComponent_mat_form_field_95_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 32, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_mat_form_field_95_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.level5.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.level5.commission);
} }
// import { FirebaseAuth, vhComponent, QueryVhweb, vhAlgorithm } from 'private-angular-vhframeworks';
class AddCarestaffCommissionComponent {
    constructor(vhAlgorithm, vhComponent, 
    // public queryVhweb:QueryVhweb,
    dialog, dialogRef) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.level1 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 1
        this.level2 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 2
        this.level3 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 3
        this.level4 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 4
        this.level5 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 4
    }
    ngOnInit() {
        this.initForm();
    }
    ngAfterViewInit() {
        this.initNumberral();
    }
    initNumberral() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.sales1 = this.vhAlgorithm.vhnumeral(".sales1");
            this.sales2 = this.vhAlgorithm.vhnumeral(".sales2");
            this.sales3 = this.vhAlgorithm.vhnumeral(".sales3");
            this.sales4 = this.vhAlgorithm.vhnumeral(".sales4");
            this.sales5 = this.vhAlgorithm.vhnumeral(".sales5");
        });
    }
    initValue(event) {
        console.log("A", event);
        if (event.value == 2) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.sales1 = this.vhAlgorithm.vhnumeral(".sales1");
                this.sales2 = this.vhAlgorithm.vhnumeral(".sales2");
                this.sales3 = this.vhAlgorithm.vhnumeral(".sales3");
                this.sales4 = this.vhAlgorithm.vhnumeral(".sales4");
                this.sales5 = this.vhAlgorithm.vhnumeral(".sales5");
                this.commission1 = this.vhAlgorithm.vhnumeral(".commission1");
                this.commission2 = this.vhAlgorithm.vhnumeral(".commission2");
                this.commission3 = this.vhAlgorithm.vhnumeral(".commission3");
                this.commission4 = this.vhAlgorithm.vhnumeral(".commission4");
                this.commission5 = this.vhAlgorithm.vhnumeral(".commission5");
            });
        }
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            method: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: 0, commission: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: 0, commission: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: 0, commission: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: 0, commission: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level5: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: 0, commission: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        });
    }
    /**
     * check price hợp lệ
     * @param item
     * @param fieldName
     * @param event
     */
    checkEditPrice(item, fieldName, event) {
        if (event)
            if (fieldName == 'commission' && this.form.value.type == 1)
                item[fieldName] = parseFloat(event.toString().replaceAll(',', '')) < 0 || parseFloat(event.toString().replaceAll(',', '')) > 100 ? 0 : parseFloat(parseFloat(event.toString().replaceAll(',', '')).toFixed(2));
            else
                item[fieldName] = parseFloat(event.toString().replaceAll(',', '')) < 0 ? 0 : parseFloat(event.toString().replaceAll(',', ''));
        else
            item[fieldName] = 0;
    }
    /**
     * kiểm tra doanh số mức 2 phải lớn hơn múc 1
     */
    checkSalesLevel1() {
        let level1 = parseFloat(this.sales1.getRawValue());
        let level2 = parseFloat(this.sales2.getRawValue());
        if (level1 > level2 && level2) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level1.sales = level2 - 1;
        }
        if (level2 < level1 && this.level2.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level1.sales = level2 - 1;
        }
    }
    /**
    * kiểm tra doanh số mức 2 phải lớn hơn múc 1
    */
    checkSalesLevel2() {
        let level1 = parseFloat(this.sales1.getRawValue());
        let level2 = parseFloat(this.sales2.getRawValue());
        if (level2 < level1 && level2) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level2.sales = level1 + 1;
            this.initNumberral();
        }
        if (level2 < level1 && this.level2.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level2.sales = level1 + 1;
            this.initNumberral();
        }
    }
    /**
    * kiểm tra doanh số mức 3 phải lớn hơn múc 2
    */
    checkSalesLevel3() {
        this.checkSalesLevel2();
        let level2 = parseFloat(this.sales2.getRawValue());
        let level3 = parseFloat(this.sales3.getRawValue());
        if (level3 < level2 && level3) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level3.sales = level2 + 1;
            this.initNumberral();
        }
        if (level3 < level2 && this.level3.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level3.sales = level2 + 1;
            this.initNumberral();
        }
        if (!this.level2.sales && !this.level2.commission && (this.level3.sales || this.level3.commission)) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level3 = { sales: 0, commission: 0 };
            this.initNumberral();
        }
    }
    /**
     * kiểm tra doanh số mức 4 phải lớn hơn múc 3
     */
    checkSalesLevel4() {
        this.checkSalesLevel2();
        this.checkSalesLevel3();
        let level3 = parseFloat(this.sales3.getRawValue());
        let level4 = parseFloat(this.sales4.getRawValue());
        if (level4 < level3 && this.level4.sales) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level4.sales = level3 + 1;
            this.initNumberral();
        }
        if (level4 < level3 && this.level4.commission) {
            //  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng nhập doanh số tăng dần theo từng mức"))
            this.level4.sales = level3 + 1;
            this.initNumberral();
        }
        if (!this.level3.sales && !this.level3.commission && (this.level4.sales || this.level4.commission)) {
            //  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng nhập doanh số tăng dần theo từng mức"))
            this.level4 = { sales: 0, commission: 0 };
            this.initNumberral();
        }
    }
    checkSalesLevel5() {
        this.checkSalesLevel2();
        this.checkSalesLevel3();
        this.checkSalesLevel4();
        let level4 = parseFloat(this.sales4.getRawValue());
        let level5 = parseFloat(this.sales5.getRawValue());
        if (level5 < level4 && this.level5.sales) {
            //  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng nhập doanh số tăng dần theo từng mức"))
            this.level5.sales = level4 + 1;
            this.initNumberral();
        }
        if (level5 < level4 && this.level5.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level5.sales = level4 + 1;
            this.initNumberral();
        }
        if (!this.level4.sales && !this.level4.commission && (this.level5.sales || this.level5.commission)) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level5 = { sales: 0, commission: 0 };
            this.initNumberral();
        }
    }
    setValueLevel() {
        this.level1 = { sales: parseFloat(this.sales1.getRawValue()) ? parseFloat(this.sales1.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission1.getRawValue()) : parseFloat(this.level1.commission) };
        this.form.controls['level1'].setValue(this.level1);
        this.level2 = { sales: parseFloat(this.sales2.getRawValue()) ? parseFloat(this.sales2.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission2.getRawValue()) : parseFloat(this.level2.commission) };
        this.form.controls['level2'].setValue(this.level2);
        this.level3 = { sales: parseFloat(this.sales3.getRawValue()) ? parseFloat(this.sales3.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission3.getRawValue()) : parseFloat(this.level3.commission) };
        this.form.controls['level3'].setValue(this.level3);
        this.level4 = { sales: parseFloat(this.sales4.getRawValue()) ? parseFloat(this.sales4.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission4.getRawValue()) : parseFloat(this.level4.commission) };
        this.form.controls['level4'].setValue(this.level4);
        this.level5 = { sales: parseFloat(this.sales5.getRawValue()) ? parseFloat(this.sales5.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission5.getRawValue()) : parseFloat(this.level5.commission) };
        this.form.controls['level5'].setValue(this.level5);
    }
    addCareStaffCommission() {
        this.setValueLevel();
        console.log(this.form.value);
        if (this.form.valid) {
            // this.queryVhweb.addCommission_CareStaff_payment(this.form.value)
            //   .then((data) => {
            //     this.vhComponent.showToast(1500, "Thêm thành công")
            //     this.dialogRef.close(true)
            //   }, err => this.vhComponent.showToast(1500, "Có lỗi vui lòng thử lại"))
        }
        else {
            this.vhComponent.showToast(1500, "Nhập đầy dủ thông tin");
        }
    }
}
AddCarestaffCommissionComponent.ɵfac = function AddCarestaffCommissionComponent_Factory(t) { return new (t || AddCarestaffCommissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef)); };
AddCarestaffCommissionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCarestaffCommissionComponent, selectors: [["app-add-carestaff-commission"]], decls: 101, vars: 21, consts: [[2, "background-color", "white !important", "margin", "auto", "padding", "24px"], [2, "height", "10%", "font-size", "22px !important", "display", "flex", "justify-content", "space-between"], [2, "width", "100%", "height", "80%", "display", "flex"], [2, "height", "100%", "width", "100%"], [1, "row"], [1, "col-6"], [2, "width", "100%", 3, "formGroup"], [2, "width", "80%"], ["matInput", "", "formControlName", "name", "matInput", ""], [4, "ngIf"], ["id", "example-radio-group-label"], ["formControlName", "method", "aria-labelledby", "example-radio-group-label", 1, "example-radio-group"], [1, "example-radio-button", 3, "value"], ["formControlName", "type", "aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "change"], [1, "row", "level"], [1, "col-2"], [1, "col-5"], [1, "example-full-width"], ["type", "text", "matInput", "", 1, "sales1", 3, "ngModel", "ngModelChange", "blur"], ["sales", ""], ["class", "example-full-width", 4, "ngIf"], ["type", "text", "matInput", "", 1, "sales2", 3, "ngModel", "ngModelChange", "blur"], ["sales2", ""], ["type", "text", "matInput", "", 1, "sales3", 3, "ngModel", "ngModelChange", "blur"], ["type", "text", "matInput", "", 1, "sales4", 3, "ngModel", "ngModelChange", "blur"], ["type", "text", "matInput", "", 1, "sales5", 3, "ngModel", "ngModelChange", "blur"], ["align", "end", 2, "height", "10%"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["type", "text", "matInput", "", 1, "commission1", 3, "ngModel", "ngModelChange"], ["min", "0", "max", "100", "type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 1, "commission2", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 1, "commission3", 3, "ngModel", "ngModelChange"], ["value2", ""], ["type", "text", "matInput", "", 1, "commission4", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 1, "commission5", 3, "ngModel", "ngModelChange"]], template: function AddCarestaffCommissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Th\u00EAm hoa h\u1ED3ng CSKH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "T\u00EAn hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddCarestaffCommissionComponent_mat_error_13_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "C\u00F4ng th\u1EE9c hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Theo t\u1EEBng m\u1EE9c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Theo m\u1EE9c cu\u1ED1i ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Lo\u1EA1i hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-radio-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddCarestaffCommissionComponent_Template_mat_radio_group_change_25_listener($event) { return ctx.initValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Theo % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Theo ti\u1EC1n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "M\u1EE9c 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_Template_input_ngModelChange_39_listener($event) { return ctx.level1.sales = $event; })("blur", function AddCarestaffCommissionComponent_Template_input_blur_39_listener() { return ctx.checkSalesLevel1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AddCarestaffCommissionComponent_mat_form_field_42_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddCarestaffCommissionComponent_mat_form_field_43_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "M\u1EE9c 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_Template_input_ngModelChange_52_listener($event) { return ctx.level2.sales = $event; })("blur", function AddCarestaffCommissionComponent_Template_input_blur_52_listener() { return ctx.checkSalesLevel2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddCarestaffCommissionComponent_mat_form_field_55_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AddCarestaffCommissionComponent_mat_form_field_56_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "M\u1EE9c 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "input", 23, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_Template_input_ngModelChange_65_listener($event) { return ctx.level3.sales = $event; })("blur", function AddCarestaffCommissionComponent_Template_input_blur_65_listener() { return ctx.checkSalesLevel3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, AddCarestaffCommissionComponent_mat_form_field_68_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AddCarestaffCommissionComponent_mat_form_field_69_Template, 5, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "M\u1EE9c 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 24, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_Template_input_ngModelChange_78_listener($event) { return ctx.level4.sales = $event; })("blur", function AddCarestaffCommissionComponent_Template_input_blur_78_listener() { return ctx.checkSalesLevel4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, AddCarestaffCommissionComponent_mat_form_field_81_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, AddCarestaffCommissionComponent_mat_form_field_82_Template, 5, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "M\u1EE9c 5:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "input", 25, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddCarestaffCommissionComponent_Template_input_ngModelChange_91_listener($event) { return ctx.level5.sales = $event; })("blur", function AddCarestaffCommissionComponent_Template_input_blur_91_listener() { return ctx.checkSalesLevel5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, AddCarestaffCommissionComponent_mat_form_field_94_Template, 4, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, AddCarestaffCommissionComponent_mat_form_field_95_Template, 5, 1, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-dialog-actions", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCarestaffCommissionComponent_Template_button_click_99_listener() { return ctx.addCareStaffCommission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "L\u01B0u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level1.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level2.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level3.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level4.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level5.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: [".mat-focused .mat-form-field-label {\n  \n  color: #00a859 !important;\n}\n\n  .mat-input-element {\n  \n  caret-color: #00a859 !important;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  opacity: 0.03 !important;\n  background-color: #00a859 !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: #00a859 !important;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXJlc3RhZmYtY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7QUFBSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFHQTtFQUNJLHlDQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBREU7RUFDRSw0QkFBQTtBQUlKIiwiZmlsZSI6ImFkZC1jYXJlc3RhZmYtY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbiAgICBjb2xvcjogIzAwYTg1OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNhcmV0LWNvbG9yOiAjMDBhODU5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuICAgIG9wYWNpdHk6IDAuMDMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE4NTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE4NTkgIWltcG9ydGFudDtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIC5sZXZlbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 2048:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/partner/carestaff-commission/carestaff-commission.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarestaffCommissionComponent": () => (/* binding */ CarestaffCommissionComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _add_carestaff_commission_add_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-carestaff-commission/add-carestaff-commission.component */ 58793);
/* harmony import */ var _edit_carestaff_commission_edit_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-carestaff-commission/edit-carestaff-commission.component */ 95158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);

// import { QueryVhweb, OrdinaryAlgorithm, FirebaseAuth, OrdinaryComponent } from 'private-angular-vhframeworks';







function CarestaffCommissionComponent_mat_progress_bar_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 17);
} }
function CarestaffCommissionComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CarestaffCommissionComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarestaffCommissionComponent_tr_51_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const item_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.openEditCommission(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.method == 1 ? "Theo t\u1EEBng m\u1EE9c" : "Theo m\u1EE9c cu\u1ED1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level1.sales));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.type == 2 ? ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level1.commission) : item_r3.level1.commission + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level2.sales));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.type == 2 ? ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level2.commission) : item_r3.level2.commission + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level3.sales));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.type == 2 ? ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level3.commission) : item_r3.level3.commission + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level4.sales));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.type == 2 ? ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level4.commission) : item_r3.level4.commission + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level5.sales));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.type == 2 ? ctx_r2.ordinaryAlgorithm.vhcurrencyunit(item_r3.level5.commission) : item_r3.level5.commission + "%");
} }
class CarestaffCommissionComponent {
    constructor(
    // public queryVhweb:QueryVhweb,
    // public ordinaryAlgorithm:OrdinaryAlgorithm,
    dialog) {
        this.dialog = dialog;
        /// panigatior ///
        this.loading = false;
        this.pageIndex = 0;
        this.pageSize = 10;
        this.lowValue = 0;
        this.highValue = 10;
        this.pageSizeOption = [10, 25, 50, 100];
        this.careStaffCommission = [];
    }
    ngOnInit() {
        this.loading = true;
        this.getCommission_CareStaff_Payments();
    }
    getCommission_CareStaff_Payments() {
        // this.queryVhweb.getCommission_CareStaff_Payments()
        // .then((data)=>{
        //   this.careStaffCommission = this.ordinaryAlgorithm.sortbyASC(data,'name') 
        //   this.loading =false
        //   console.log(data)
        // }, err=> {
        //   this.loading =false
        //   console.log(err)
        // })
    }
    openAddCommission() {
        const dialogRef = this.dialog.open(_add_carestaff_commission_add_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_0__.AddCarestaffCommissionComponent, {
            width: '80%',
            maxWidth: '100%',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result)
                this.getCommission_CareStaff_Payments();
        });
    }
    openEditCommission(item) {
        const dialogRef = this.dialog.open(_edit_carestaff_commission_edit_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_1__.EditCarestaffCommissionComponent, {
            width: '80%',
            maxWidth: '100%',
            disableClose: true,
            data: item
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result)
                this.getCommission_CareStaff_Payments();
        });
    }
    // slice panigator
    getPaginatorData(event) {
        this.lowValue = event.pageIndex * event.pageSize;
        this.highValue = this.lowValue + event.pageSize;
        return event;
    }
}
CarestaffCommissionComponent.ɵfac = function CarestaffCommissionComponent_Factory(t) { return new (t || CarestaffCommissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
CarestaffCommissionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarestaffCommissionComponent, selectors: [["app-carestaff-commission"]], viewQuery: function CarestaffCommissionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 55, vars: 10, consts: [[2, "height", "100%"], [2, "padding-bottom", "8px", "display", "flex", "justify-content", "space-between", "border-bottom", "1px solid lightgray"], [2, "display", "flex", "align-items", "center"], [2, "font-size", "18px", "color", "#00a859"], [2, "display", "flex"], [1, "bg-success", "text-white", "px-5", "mx-2", "btn-view", 3, "click"], ["style", "height: 4px;", "mode", "indeterminate", 4, "ngIf"], [2, "height", "91%", "margin-top", "8px"], [1, "body-tab"], ["style", "top: 50%; left: 50%; position: absolute;", 4, "ngIf"], [1, "table"], ["scope", "col", "rowspan", "2"], ["scope", "col", "colspan", "2"], ["scope", "col"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "height", "10%"], ["showFirstLastButtons", "false", 2, "bottom", "2%", "position", "absolute", "height", "10%", "width", "75%", 3, "length", "pageSizeOptions", "pageSize", "page"], ["mode", "indeterminate", 2, "height", "4px"], [2, "top", "50%", "left", "50%", "position", "absolute"], [2, "cursor", "pointer", 3, "click"]], template: function CarestaffCommissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Hoa h\u1ED3ng CSKH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CarestaffCommissionComponent_Template_button_click_6_listener() { return ctx.openAddCommission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Th\u00EAm hoa h\u1ED3ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CarestaffCommissionComponent_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CarestaffCommissionComponent_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "T\u00EAn hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Lo\u1EA1i hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "M\u1EE9c 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "M\u1EE9c 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "M\u1EE9c 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "M\u1EE9c 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "M\u1EE9c 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Gi\u00E1 tr\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Gi\u00E1 tr\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Gi\u00E1 tr\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Gi\u00E1 tr\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Gi\u00E1 tr\u1ECB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, CarestaffCommissionComponent_tr_51_Template, 25, 12, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function CarestaffCommissionComponent_Template_mat_paginator_page_54_listener($event) { return ctx.getPaginatorData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.careStaffCommission.length && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](52, 6, ctx.careStaffCommission, ctx.lowValue, ctx.highValue));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.careStaffCommission.length)("pageSizeOptions", ctx.pageSizeOption)("pageSize", ctx.pageSize);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nth[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  background-color: #f1f3f7;\n  color: #181717;\n  font-weight: 500;\n  vertical-align: middle !important;\n  border: 1px solid lightgray;\n  text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  color: #181717;\n  font-weight: 400;\n  vertical-align: middle !important;\n  border: 1px solid lightgray;\n  text-align: center;\n}\n\n.body-tab[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n\n\n\n.body-tab[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none !important;\n}\n\n\n\n.body-tab[_ngcontent-%COMP%] {\n  -ms-overflow-style: none !important;\n  \n  scrollbar-width: none !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmVzdGFmZi1jb21taXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtBQUVKOztBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIRSxnREFBQTs7QUFDQTtFQUNFLHdCQUFBO0FBTUo7O0FBSEUsNENBQUE7O0FBQ0E7RUFDRSxtQ0FBQTtFQUFxQyxnQkFBQTtFQUNyQyxnQ0FBQTtFQUFrQyxZQUFBO0FBUXRDIiwiZmlsZSI6ImNhcmVzdGFmZi1jb21taXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgdGgge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNztcclxuICAgIGNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICB0ZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMywgMjMpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJvZHktdGFiIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbiAgLmJvZHktdGFiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xyXG4gIC5ib2R5LXRhYiB7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmUgIWltcG9ydGFudDsgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZSAhaW1wb3J0YW50OyAvKiBGaXJlZm94ICovXHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 43309:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/partner/carestaff-commission/carestaff-commission.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarestaffCommissionModule": () => (/* binding */ CarestaffCommissionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _carestaff_commission_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carestaff-commission.component */ 2048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dealer/material.module */ 25218);
/* harmony import */ var _add_carestaff_commission_add_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-carestaff-commission/add-carestaff-commission.component */ 58793);
/* harmony import */ var _edit_carestaff_commission_edit_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-carestaff-commission/edit-carestaff-commission.component */ 95158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _carestaff_commission_component__WEBPACK_IMPORTED_MODULE_0__.CarestaffCommissionComponent,
    },
];
class CarestaffCommissionModule {
}
CarestaffCommissionModule.ɵfac = function CarestaffCommissionModule_Factory(t) { return new (t || CarestaffCommissionModule)(); };
CarestaffCommissionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CarestaffCommissionModule });
CarestaffCommissionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CarestaffCommissionModule, { declarations: [_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_0__.CarestaffCommissionComponent, _add_carestaff_commission_add_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_2__.AddCarestaffCommissionComponent, _edit_carestaff_commission_edit_carestaff_commission_component__WEBPACK_IMPORTED_MODULE_3__.EditCarestaffCommissionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        src_app_dealer_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 95158:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/partner/carestaff-commission/edit-carestaff-commission/edit-carestaff-commission.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCarestaffCommissionComponent": () => (/* binding */ EditCarestaffCommissionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 15644);














function EditCarestaffCommissionComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Vui l\u00F2ng nh\u1EADp t\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditCarestaffCommissionComponent_mat_form_field_57_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_57_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.level1.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.level1.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_58_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_58_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.level1.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.level1.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_70_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_70_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.level2.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.level2.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_71_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_71_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.level2.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.level2.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_83_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_83_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.level3.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.level3.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_84_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 38, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_84_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.level3.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.level3.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_96_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_96_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.level4.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.level4.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_97_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 38, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_97_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.level4.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.level4.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_109_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_109_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.level5.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.level5.commission);
} }
function EditCarestaffCommissionComponent_mat_form_field_110_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gi\u00E1 tr\u1ECB %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 38, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_mat_form_field_110_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.level5.commission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.level5.commission);
} }
// import { vhAlgorithm, vhComponent, QueryVhweb } from 'private-angular-vhframeworks';
class EditCarestaffCommissionComponent {
    constructor(vhAlgorithm, vhComponent, 
    // public queryVhweb: QueryVhweb,
    dialog, dialogRef, data) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.level1 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 1
        this.level2 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 2
        this.level3 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 3
        this.level4 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 4
        this.level5 = { sales: 0, commission: 0 }; // biến dùng để xử lý mức 4
    }
    ngOnInit() {
        this.initForm(this.data);
    }
    ngAfterViewInit() {
        this.initNumberral();
    }
    initNumberral() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.sales1 = this.vhAlgorithm.vhnumeral(".sales1");
            this.sales2 = this.vhAlgorithm.vhnumeral(".sales2");
            this.sales3 = this.vhAlgorithm.vhnumeral(".sales3");
            this.sales4 = this.vhAlgorithm.vhnumeral(".sales4");
            this.sales5 = this.vhAlgorithm.vhnumeral(".sales5");
            if (this.data.type == 2) {
                this.commission1 = this.vhAlgorithm.vhnumeral(".commission1");
                this.commission2 = this.vhAlgorithm.vhnumeral(".commission2");
                this.commission3 = this.vhAlgorithm.vhnumeral(".commission3");
                this.commission4 = this.vhAlgorithm.vhnumeral(".commission4");
                this.commission5 = this.vhAlgorithm.vhnumeral(".commission5");
            }
        });
    }
    initValue(event) {
        if (event.value == 2) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.sales1 = this.vhAlgorithm.vhnumeral(".sales1");
                this.sales2 = this.vhAlgorithm.vhnumeral(".sales2");
                this.sales3 = this.vhAlgorithm.vhnumeral(".sales3");
                this.sales4 = this.vhAlgorithm.vhnumeral(".sales4");
                this.sales5 = this.vhAlgorithm.vhnumeral(".sales5");
                this.commission1 = this.vhAlgorithm.vhnumeral(".commission1");
                this.commission2 = this.vhAlgorithm.vhnumeral(".commission2");
                this.commission3 = this.vhAlgorithm.vhnumeral(".commission3");
                this.commission4 = this.vhAlgorithm.vhnumeral(".commission4");
                this.commission5 = this.vhAlgorithm.vhnumeral(".commission5");
            });
        }
    }
    initForm(data) {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            method: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.method, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: data.level1.sales, commission: data.level1.commission }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: data.level2.sales, commission: data.level2.commission }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: data.level3.sales, commission: data.level3.commission }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: data.level4.sales, commission: data.level4.commission }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            level5: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({ sales: data.level5.sales, commission: data.level5.commission }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        });
        this.level1 = data.level1;
        this.level2 = data.level2;
        this.level3 = data.level3;
        this.level4 = data.level4;
        this.level5 = data.level5;
    }
    /**
     * check price hợp lệ
     * @param item
     * @param fieldName
     * @param event
     */
    checkEditPrice(item, fieldName, event) {
        if (event)
            if (fieldName == 'commission' && this.form.value.type == 1)
                item[fieldName] = parseFloat(event.toString().replaceAll(',', '')) < 0 || parseFloat(event.toString().replaceAll(',', '')) > 100 ? 0 : parseFloat(parseFloat(event.toString().replaceAll(',', '')).toFixed(2));
            else
                item[fieldName] = parseFloat(event.toString().replaceAll(',', '')) < 0 ? 0 : parseFloat(event.toString().replaceAll(',', ''));
        else
            item[fieldName] = 0;
    }
    /**
     * kiểm tra doanh số mức 2 phải lớn hơn múc 1
     */
    checkSalesLevel1() {
        let level1 = parseFloat(this.sales1.getRawValue());
        let level2 = parseFloat(this.sales2.getRawValue());
        if (level1 > level2 && level2) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level1.sales = level2 - 1;
        }
        if (level2 < level1 && this.level2.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level1.sales = level2 - 1;
        }
    }
    /**
    * kiểm tra doanh số mức 2 phải lớn hơn múc 1
    */
    checkSalesLevel2() {
        let level1 = parseFloat(this.sales1.getRawValue());
        let level2 = parseFloat(this.sales2.getRawValue());
        if (level2 < level1 && level2) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level2.sales = level1 + 1;
            this.initNumberral();
        }
        if (level2 < level1 && this.level2.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level2.sales = level1 + 1;
            this.initNumberral();
        }
    }
    /**
    * kiểm tra doanh số mức 3 phải lớn hơn múc 2
    */
    checkSalesLevel3() {
        this.checkSalesLevel2();
        let level2 = parseFloat(this.sales2.getRawValue());
        let level3 = parseFloat(this.sales3.getRawValue());
        if (level3 < level2 && level3) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level3.sales = level2 + 1;
            this.initNumberral();
        }
        if (level3 < level2 && this.level3.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level3.sales = level2 + 1;
            this.initNumberral();
        }
        if (!this.level2.sales && !this.level2.commission && (this.level3.sales || this.level3.commission)) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level3 = { sales: 0, commission: 0 };
            this.initNumberral();
        }
    }
    /**
     * kiểm tra doanh số mức 4 phải lớn hơn múc 3
     */
    checkSalesLevel4() {
        this.checkSalesLevel2();
        this.checkSalesLevel3();
        let level3 = parseFloat(this.sales3.getRawValue());
        let level4 = parseFloat(this.sales4.getRawValue());
        if (level4 < level3 && this.level4.sales) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level4.sales = level3 + 1;
            this.initNumberral();
        }
        if (level4 < level3 && this.level4.commission) {
            //  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng nhập doanh số tăng dần theo từng mức"))
            this.level4.sales = level3 + 1;
            this.initNumberral();
        }
        if (!this.level3.sales && !this.level3.commission && (this.level4.sales || this.level4.commission)) {
            //  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng nhập doanh số tăng dần theo từng mức"))
            this.level4 = { sales: 0, commission: 0 };
            this.initNumberral();
        }
    }
    checkSalesLevel5() {
        this.checkSalesLevel2();
        this.checkSalesLevel3();
        this.checkSalesLevel4();
        let level4 = parseFloat(this.sales4.getRawValue());
        let level5 = parseFloat(this.sales5.getRawValue());
        if (level5 < level4 && this.level5.sales) {
            //  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng nhập doanh số tăng dần theo từng mức"))
            this.level5.sales = level4 + 1;
            this.initNumberral();
        }
        if (level5 < level4 && this.level5.commission) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level5.sales = level4 + 1;
            this.initNumberral();
        }
        if (!this.level4.sales && !this.level4.commission && (this.level5.sales || this.level5.commission)) {
            this.vhComponent.showToast(2000, "Vui lòng nhập theo từng mức");
            this.level5 = { sales: 0, commission: 0 };
            this.initNumberral();
        }
    }
    setValueLevel() {
        this.level1 = { sales: parseFloat(this.sales1.getRawValue()) ? parseFloat(this.sales1.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission1.getRawValue()) : parseFloat(this.level1.commission) };
        this.form.controls['level1'].setValue(this.level1);
        this.level2 = { sales: parseFloat(this.sales2.getRawValue()) ? parseFloat(this.sales2.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission2.getRawValue()) : parseFloat(this.level2.commission) };
        this.form.controls['level2'].setValue(this.level2);
        this.level3 = { sales: parseFloat(this.sales3.getRawValue()) ? parseFloat(this.sales3.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission3.getRawValue()) : parseFloat(this.level3.commission) };
        this.form.controls['level3'].setValue(this.level3);
        this.level4 = { sales: parseFloat(this.sales4.getRawValue()) ? parseFloat(this.sales4.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission4.getRawValue()) : parseFloat(this.level4.commission) };
        this.form.controls['level4'].setValue(this.level4);
        this.level5 = { sales: parseFloat(this.sales5.getRawValue()) ? parseFloat(this.sales5.getRawValue()) : 0, commission: this.form.value.type == 2 ? parseFloat(this.commission5.getRawValue()) : parseFloat(this.level5.commission) };
        this.form.controls['level5'].setValue(this.level5);
    }
    saveCareStaffCommission() {
        this.setValueLevel();
        if (this.form.valid) {
            // this.queryVhweb.updateCommission_CareStaff_Payment(this.data._id, this.form.value)
            //   .then((data) => {
            //     this.vhComponent.showToast(1500, "Cập nhật thành công")
            //     this.dialogRef.close(true)
            //   }, err => this.vhComponent.showToast(1500, "Có lỗi vui lòng thử lại"))
        }
        else {
            this.vhComponent.showToast(1500, "Nhập đầy dủ thông tin");
        }
    }
    deleteCareStaffCommission() {
        // this.queryVhweb.deleteCommission_CareStaff_Payment(this.data._id)
        //   .then((bol) => {
        //     if (bol) {
        //       this.vhComponent.showToast(1500, "Xóa thành công")
        //       this.dialogRef.close(true)
        //     }
        //   }, error => {
        //     this.vhComponent.showToast(1500, "Có lỗi vui lòng thử lại")
        //     console.log('error', error);
        //   })
    }
}
EditCarestaffCommissionComponent.ɵfac = function EditCarestaffCommissionComponent_Factory(t) { return new (t || EditCarestaffCommissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
EditCarestaffCommissionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditCarestaffCommissionComponent, selectors: [["app-edit-carestaff-commission"]], decls: 116, vars: 22, consts: [[2, "background-color", "white !important", "margin", "auto", "padding", "24px"], [2, "height", "10%", "font-size", "22px !important", "display", "flex", "justify-content", "space-between", "width", "100%"], ["mat-button", ""], ["matSuffix", "", 2, "color", "rgb(192, 6, 6)", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], [2, "width", "100%", "height", "80%", "display", "flex"], [2, "height", "100%", "width", "100%"], [1, "row"], [1, "col-6"], [2, "width", "100%", 3, "formGroup"], [2, "width", "80%"], ["matInput", "", "formControlName", "name", "matInput", ""], [4, "ngIf"], ["id", "example-radio-group-label"], ["formControlName", "method", "aria-labelledby", "example-radio-group-label", 1, "example-radio-group"], [1, "example-radio-button", 3, "value"], ["formControlName", "type", "aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "change"], [1, "row", "level"], [1, "col-2"], [1, "col-5"], [1, "example-full-width"], ["type", "text", "matInput", "", 1, "sales1", 3, "ngModel", "ngModelChange", "blur"], ["sales", ""], ["class", "example-full-width", 4, "ngIf"], ["type", "text", "matInput", "", 1, "sales2", 3, "ngModel", "ngModelChange", "blur"], ["sales2", ""], ["type", "text", "matInput", "", 1, "sales3", 3, "ngModel", "ngModelChange", "blur"], ["type", "text", "matInput", "", 1, "sales4", 3, "ngModel", "ngModelChange", "blur"], ["type", "text", "matInput", "", 1, "sales5", 3, "ngModel", "ngModelChange", "blur"], ["align", "end", 2, "height", "10%"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["type", "text", "matInput", "", 1, "commission1", 3, "ngModel", "ngModelChange"], ["min", "0", "max", "100", "type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 1, "commission2", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 1, "commission3", 3, "ngModel", "ngModelChange"], ["value2", ""], ["type", "text", "matInput", "", 1, "commission4", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", 1, "commission5", 3, "ngModel", "ngModelChange"]], template: function EditCarestaffCommissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ch\u1EC9nh s\u1EEDa hoa h\u1ED3ng CSKH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCarestaffCommissionComponent_Template_button_click_9_listener() { return ctx.deleteCareStaffCommission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "H\u1EE7y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "T\u00EAn hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, EditCarestaffCommissionComponent_mat_error_28_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "C\u00F4ng th\u1EE9c hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-radio-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Theo t\u1EEBng m\u1EE9c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Theo m\u1EE9c cu\u1ED1i ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Lo\u1EA1i hoa h\u1ED3ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-radio-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditCarestaffCommissionComponent_Template_mat_radio_group_change_40_listener($event) { return ctx.initValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Theo % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Theo ti\u1EC1n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "M\u1EE9c 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_Template_input_ngModelChange_54_listener($event) { return ctx.level1.sales = $event; })("blur", function EditCarestaffCommissionComponent_Template_input_blur_54_listener() { return ctx.checkSalesLevel1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, EditCarestaffCommissionComponent_mat_form_field_57_Template, 4, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EditCarestaffCommissionComponent_mat_form_field_58_Template, 4, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "M\u1EE9c 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_Template_input_ngModelChange_67_listener($event) { return ctx.level2.sales = $event; })("blur", function EditCarestaffCommissionComponent_Template_input_blur_67_listener() { return ctx.checkSalesLevel2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, EditCarestaffCommissionComponent_mat_form_field_70_Template, 4, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, EditCarestaffCommissionComponent_mat_form_field_71_Template, 4, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "M\u1EE9c 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "input", 29, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_Template_input_ngModelChange_80_listener($event) { return ctx.level3.sales = $event; })("blur", function EditCarestaffCommissionComponent_Template_input_blur_80_listener() { return ctx.checkSalesLevel3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, EditCarestaffCommissionComponent_mat_form_field_83_Template, 4, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, EditCarestaffCommissionComponent_mat_form_field_84_Template, 5, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "M\u1EE9c 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 30, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_Template_input_ngModelChange_93_listener($event) { return ctx.level4.sales = $event; })("blur", function EditCarestaffCommissionComponent_Template_input_blur_93_listener() { return ctx.checkSalesLevel4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, EditCarestaffCommissionComponent_mat_form_field_96_Template, 4, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, EditCarestaffCommissionComponent_mat_form_field_97_Template, 5, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "M\u1EE9c 5:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Doanh s\u1ED1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "input", 31, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditCarestaffCommissionComponent_Template_input_ngModelChange_106_listener($event) { return ctx.level5.sales = $event; })("blur", function EditCarestaffCommissionComponent_Template_input_blur_106_listener() { return ctx.checkSalesLevel5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, EditCarestaffCommissionComponent_mat_form_field_109_Template, 4, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, EditCarestaffCommissionComponent_mat_form_field_110_Template, 5, 1, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "mat-dialog-actions", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCarestaffCommissionComponent_Template_button_click_114_listener() { return ctx.saveCareStaffCommission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "L\u01B0u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level1.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level2.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level3.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level4.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.level5.sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.value.type == 1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: [".mat-focused .mat-form-field-label {\n  \n  color: #00a859 !important;\n}\n\n  .mat-input-element {\n  \n  caret-color: #00a859 !important;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  opacity: 0.03 !important;\n  background-color: #00a859 !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: #00a859 !important;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY2FyZXN0YWZmLWNvbW1pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLG9DQUFBO0FBQUo7O0FBR0E7RUFDSSx5Q0FBQTtFQUNBLG9DQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0U7RUFDRSxXQUFBO0FBRUo7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURFO0VBQ0UsNEJBQUE7QUFJSiIsImZpbGUiOiJlZGl0LWNhcmVzdGFmZi1jb21taXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiAjMDBhODU5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgY2FyZXQtY29sb3I6ICMwMGE4NTkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xyXG4gICAgb3BhY2l0eTogMC4wMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTg1OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTg1OSAhaW1wb3J0YW50O1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLmxldmVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_partner_carestaff-commission_carestaff-commission_module_ts.js.map