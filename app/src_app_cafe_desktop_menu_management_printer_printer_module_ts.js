"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_printer_printer_module_ts"],{

/***/ 20237:
/*!***************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/printer/printer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterComponent": () => (/* binding */ PrinterComponent)
/* harmony export */ });
/* harmony import */ var src_app_cafe_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-k57-col3/sales-k57-col3.component */ 40808);
/* harmony import */ var src_app_cafe_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-a5/sales-a5.component */ 12365);
/* harmony import */ var src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-a4/sales-a4.component */ 62241);
/* harmony import */ var src_app_cafe_components_print_sales_payment_card_sales_payment_card_a4_sales_payment_card_a4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/components/print/sales-payment-card/sales-payment-card-a4/sales-payment-card-a4.component */ 28350);
/* harmony import */ var src_app_cafe_components_print_sales_payment_card_sales_payment_card_k80_col3_sales_payment_card_k80_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cafe/components/print/sales-payment-card/sales-payment-card-k80-col3/sales-payment-card-k80-col3.component */ 38245);
/* harmony import */ var src_app_cafe_components_print_sales_payment_card_sales_payment_card_k80_col4_sales_payment_card_k80_col4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cafe/components/print/sales-payment-card/sales-payment-card-k80-col4/sales-payment-card-k80-col4.component */ 69691);
/* harmony import */ var src_app_cafe_components_print_sales_payment_card_sales_payment_card_a5_sales_payment_card_a5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cafe/components/print/sales-payment-card/sales-payment-card-a5/sales-payment-card-a5.component */ 97407);
/* harmony import */ var src_app_cafe_components_print_purchase_purchase_a4_purchase_a4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cafe/components/print/purchase/purchase-a4/purchase-a4.component */ 6517);
/* harmony import */ var src_app_cafe_components_print_purchase_purchase_a5_purchase_a5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cafe/components/print/purchase/purchase-a5/purchase-a5.component */ 14331);
/* harmony import */ var src_app_cafe_components_print_purchase_purchase_k80_col4_purchase_k80_col4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/cafe/components/print/purchase/purchase-k80-col4/purchase-k80-col4.component */ 87170);
/* harmony import */ var src_app_cafe_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/cafe/components/print/return-supplier/return-supplier-a4/return-supplier-a4.component */ 12013);
/* harmony import */ var src_app_cafe_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/cafe/components/print/return-supplier/return-supplier-a5/return-supplier-a5.component */ 92619);
/* harmony import */ var src_app_cafe_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/cafe/components/print/return-supplier/return-supplier-k80-col4/return-supplier-k80-col4.component */ 86809);
/* harmony import */ var src_app_cafe_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/cafe/components/print/return-supplier/return-supplier-k80-col3/return-supplier-k80-col3.component */ 77004);
/* harmony import */ var src_app_cafe_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/cafe/components/print/return-supplier/return-supplier-k57-col3/return-supplier-k57-col3.component */ 23354);
/* harmony import */ var src_app_cafe_components_print_prepaid_card_exchange_payment_card_k57_col3_exchange_payment_card_k57_col3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/cafe/components/print/prepaid-card/exchange-payment-card-k57-col3/exchange-payment-card-k57-col3.component */ 98828);
/* harmony import */ var src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/cafe/interface/vh-order-invoice */ 25500);
/* harmony import */ var src_app_cafe_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-k80-col3/sales-k80-col3.component */ 34672);
/* harmony import */ var src_app_cafe_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-k80-col4/sales-k80-col4.component */ 17308);
/* harmony import */ var src_app_cafe_components_print_purchase_purchase_k57_col3_purchase_k57_col3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/cafe/components/print/purchase/purchase-k57-col3/purchase-k57-col3.component */ 83941);
/* harmony import */ var src_app_cafe_components_print_purchase_purchase_k80_col3_purchase_k80_col3_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/cafe/components/print/purchase/purchase-k80-col3/purchase-k80-col3.component */ 74997);
/* harmony import */ var src_app_cafe_components_print_expenses_expense_k57_col3_expense_k57_col3_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/cafe/components/print/expenses/expense-k57-col3/expense-k57-col3.component */ 95506);
/* harmony import */ var src_app_cafe_components_print_expenses_expense_k80_col3_expense_k80_col3_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/cafe/components/print/expenses/expense-k80-col3/expense-k80-col3.component */ 66214);
/* harmony import */ var src_app_cafe_components_print_expenses_expense_k80_col4_expense_k80_col4_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/cafe/components/print/expenses/expense-k80-col4/expense-k80-col4.component */ 11650);
/* harmony import */ var src_app_cafe_components_print_expenses_expenses_a5_expenses_a5_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/cafe/components/print/expenses/expenses-a5/expenses-a5.component */ 90725);
/* harmony import */ var src_app_cafe_components_print_expenses_expense_a4_expense_a4_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/cafe/components/print/expenses/expense-a4/expense-a4.component */ 94149);
/* harmony import */ var src_app_cafe_components_print_receipt_receipt_k57_col3_receipt_k57_col3_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/cafe/components/print/receipt/receipt-k57-col3/receipt-k57-col3.component */ 62656);
/* harmony import */ var src_app_cafe_components_print_receipt_receipt_k80_col3_receipt_k80_col3_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/cafe/components/print/receipt/receipt-k80-col3/receipt-k80-col3.component */ 39950);
/* harmony import */ var src_app_cafe_components_print_receipt_receipt_k80_col4_receipt_k80_col4_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/cafe/components/print/receipt/receipt-k80-col4/receipt-k80-col4.component */ 18301);
/* harmony import */ var src_app_cafe_components_print_receipt_receipt_a5_receipt_a5_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/cafe/components/print/receipt/receipt-a5/receipt-a5.component */ 1030);
/* harmony import */ var src_app_cafe_components_print_receipt_receipt_a4_receipt_a4_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/cafe/components/print/receipt/receipt-a4/receipt-a4.component */ 29487);
/* harmony import */ var src_app_cafe_components_print_delivery_goods_delivery_goods_k57_col3_delivery_goods_k57_col3_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/cafe/components/print/delivery-goods/delivery-goods-k57-col3/delivery-goods-k57-col3.component */ 1293);
/* harmony import */ var src_app_cafe_components_print_delivery_goods_delivery_goods_k80_col3_delivery_goods_k80_col3_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/cafe/components/print/delivery-goods/delivery-goods-k80-col3/delivery-goods-k80-col3.component */ 16078);
/* harmony import */ var src_app_cafe_components_print_delivery_goods_delivery_goods_k80_col4_delivery_goods_k80_col4_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/cafe/components/print/delivery-goods/delivery-goods-k80-col4/delivery-goods-k80-col4.component */ 94651);
/* harmony import */ var src_app_cafe_components_print_delivery_goods_delivery_goods_a5_delivery_goods_a5_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/cafe/components/print/delivery-goods/delivery-goods-a5/delivery-goods-a5.component */ 75028);
/* harmony import */ var src_app_cafe_components_print_delivery_goods_delivery_goods_a4_delivery_goods_a4_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/cafe/components/print/delivery-goods/delivery-goods-a4/delivery-goods-a4.component */ 60637);
/* harmony import */ var src_app_cafe_components_print_transfer_money_transfer_money_k57_col3_transfer_money_k57_col3_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/cafe/components/print/transfer-money/transfer-money-k57-col3/transfer-money-k57-col3.component */ 54303);
/* harmony import */ var src_app_cafe_components_print_transfer_money_transfer_money_k80_col3_transfer_money_k80_col3_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/cafe/components/print/transfer-money/transfer-money-k80-col3/transfer-money-k80-col3.component */ 81690);
/* harmony import */ var src_app_cafe_components_print_transfer_money_transfer_money_k80_col4_transfer_money_k80_col4_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/cafe/components/print/transfer-money/transfer-money-k80-col4/transfer-money-k80-col4.component */ 31670);
/* harmony import */ var src_app_cafe_components_print_transfer_money_transfer_money_a5_transfer_money_a5_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/app/cafe/components/print/transfer-money/transfer-money-a5/transfer-money-a5.component */ 14422);
/* harmony import */ var src_app_cafe_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/app/cafe/components/print/transfer-money/transfer-money-a4/transfer-money-a4.component */ 36635);
/* harmony import */ var src_app_cafe_components_print_sales_payment_card_sales_payment_card_k57_col3_sales_payment_card_k57_col3_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/cafe/components/print/sales-payment-card/sales-payment-card-k57-col3/sales-payment-card-k57-col3.component */ 47070);
/* harmony import */ var src_app_cafe_components_print_prepaid_card_exchange_payment_card_k80_col3_exchange_payment_card_k80_col3_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! src/app/cafe/components/print/prepaid-card/exchange-payment-card-k80-col3/exchange-payment-card-k80-col3.component */ 10753);
/* harmony import */ var src_app_cafe_components_print_prepaid_card_exchange_payment_card_k80_col4_exchange_payment_card_k80_col4_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/app/cafe/components/print/prepaid-card/exchange-payment-card-k80-col4/exchange-payment-card-k80-col4.component */ 17698);
/* harmony import */ var src_app_cafe_components_print_prepaid_card_exchange_payment_card_a5_exchange_payment_card_a5_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! src/app/cafe/components/print/prepaid-card/exchange-payment-card-a5/exchange-payment-card-a5.component */ 6871);
/* harmony import */ var src_app_cafe_components_print_prepaid_card_exchange_payment_card_a4_exchange_payment_card_a4_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! src/app/cafe/components/print/prepaid-card/exchange-payment-card-a4/exchange-payment-card-a4.component */ 66336);
/* harmony import */ var src_app_cafe_components_print_sales_voucher_sales_voucher_k57_col3_sales_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! src/app/cafe/components/print/sales-voucher/sales-voucher-k57-col3/sales-voucher-k57-col3.component */ 90979);
/* harmony import */ var src_app_cafe_components_print_sales_voucher_sales_voucher_k80_col3_sales_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! src/app/cafe/components/print/sales-voucher/sales-voucher-k80-col3/sales-voucher-k80-col3.component */ 9481);
/* harmony import */ var src_app_cafe_components_print_sales_voucher_sales_voucher_k80_col4_sales_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! src/app/cafe/components/print/sales-voucher/sales-voucher-k80-col4/sales-voucher-k80-col4.component */ 86452);
/* harmony import */ var src_app_cafe_components_print_sales_voucher_sales_voucher_a5_sales_voucher_a5_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! src/app/cafe/components/print/sales-voucher/sales-voucher-a5/sales-voucher-a5.component */ 38683);
/* harmony import */ var src_app_cafe_components_print_sales_voucher_sales_voucher_a4_sales_voucher_a4_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! src/app/cafe/components/print/sales-voucher/sales-voucher-a4/sales-voucher-a4.component */ 68335);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-k57-col3/exchange-voucher-k57-col3.component */ 77914);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-k80-col3/exchange-voucher-k80-col3.component */ 76114);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-k80-col4/exchange-voucher-k80-col4.component */ 86304);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-a5/exchange-voucher-a5.component */ 86202);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-a4/exchange-voucher-a4.component */ 7805);
/* harmony import */ var src_app_cafe_components_print_inventory_A45_inventory_a45_inventory_a45_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! src/app/cafe/components/print/inventory/A45/inventory-a45/inventory-a45.component */ 54330);
/* harmony import */ var src_app_cafe_components_print_destroy_product_destroy_product_k57_col3_destroy_product_k57_col3_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! src/app/cafe/components/print/destroy-product/destroy-product-k57-col3/destroy-product-k57-col3.component */ 84899);
/* harmony import */ var src_app_cafe_components_print_destroy_product_destroy_product_k80_col3_destroy_product_k80_col3_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! src/app/cafe/components/print/destroy-product/destroy-product-k80-col3/destroy-product-k80-col3.component */ 78102);
/* harmony import */ var src_app_cafe_components_print_destroy_product_destroy_product_k80_col4_destroy_product_k80_col4_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! src/app/cafe/components/print/destroy-product/destroy-product-k80-col4/destroy-product-k80-col4.component */ 68706);
/* harmony import */ var src_app_cafe_components_print_destroy_product_destroy_product_a5_destroy_product_a5_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! src/app/cafe/components/print/destroy-product/destroy-product-a5/destroy-product-a5.component */ 61096);
/* harmony import */ var src_app_cafe_components_print_destroy_product_destroy_product_a4_destroy_product_a4_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! src/app/cafe/components/print/destroy-product/destroy-product-a4/destroy-product-a4.component */ 21914);
/* harmony import */ var src_app_cafe_components_print_import_kitchen_import_kitchen_a4_import_kitchen_a4_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! src/app/cafe/components/print/import_kitchen/import-kitchen-a4/import-kitchen-a4.component */ 80508);
/* harmony import */ var src_app_cafe_components_print_import_kitchen_import_kitchen_a5_import_kitchen_a5_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! src/app/cafe/components/print/import_kitchen/import-kitchen-a5/import-kitchen-a5.component */ 82404);
/* harmony import */ var src_app_cafe_components_print_import_kitchen_import_kitchen_k57_col3_import_kitchen_k57_col3_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! src/app/cafe/components/print/import_kitchen/import-kitchen-k57-col3/import-kitchen-k57-col3.component */ 41361);
/* harmony import */ var src_app_cafe_components_print_import_kitchen_import_kitchen_k80_col3_import_kitchen_k80_col3_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! src/app/cafe/components/print/import_kitchen/import-kitchen-k80-col3/import-kitchen-k80-col3.component */ 39972);
/* harmony import */ var src_app_cafe_components_print_import_kitchen_import_kitchen_k80_col4_import_kitchen_k80_col4_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! src/app/cafe/components/print/import_kitchen/import-kitchen-k80-col4/import-kitchen-k80-col4.component */ 34611);
/* harmony import */ var src_app_cafe_components_print_export_kitchen_export_kitchen_k57_col3_export_kitchen_k57_col3_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! src/app/cafe/components/print/export-kitchen/export-kitchen-k57-col3/export-kitchen-k57-col3.component */ 62851);
/* harmony import */ var src_app_cafe_components_print_export_kitchen_export_kitchen_k80_col3_export_kitchen_k80_col3_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! src/app/cafe/components/print/export-kitchen/export-kitchen-k80-col3/export-kitchen-k80-col3.component */ 78930);
/* harmony import */ var src_app_cafe_components_print_export_kitchen_export_kitchen_k80_col4_export_kitchen_k80_col4_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! src/app/cafe/components/print/export-kitchen/export-kitchen-k80-col4/export-kitchen-k80-col4.component */ 15150);
/* harmony import */ var src_app_cafe_components_print_export_kitchen_export_kitchen_a5_export_kitchen_a5_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! src/app/cafe/components/print/export-kitchen/export-kitchen-a5/export-kitchen-a5.component */ 82888);
/* harmony import */ var src_app_cafe_components_print_export_kitchen_export_kitchen_a4_export_kitchen_a4_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! src/app/cafe/components/print/export-kitchen/export-kitchen-a4/export-kitchen-a4.component */ 45319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




























































































function PrinterComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](); return ctx_r3.printTemp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelement"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 1, "Print a draft"), " ");
} }
function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_1_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelement"](0, "nz-option", 26);
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("nzValue", item_r49.name)("nzLabel", item_r49.name);
} }
function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_1_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](3); return ctx_r50.item.printer_name = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_1_Template_nz_select_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](3); return ctx_r52.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](5, PrinterComponent_nz_row_10_nz_list_5_nz_list_item_1_nz_option_5_Template, 1, 2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 3, "Select printer"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r43.item.printer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngForOf", ctx_r43.list_printer_name);
} }
function PrinterComponent_nz_row_10_nz_list_5_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelement"](0, "nz-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](1, 2, item_r53.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("nzValue", item_r53._id);
} }
function PrinterComponent_nz_row_10_nz_list_5_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelement"](0, "nz-option", 26);
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("nzValue", item_r54.value)("nzLabel", item_r54.name);
} }
function PrinterComponent_nz_row_10_nz_list_5_nz_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelement"](0, "nz-option", 26);
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("nzValue", item_r55)("nzLabel", item_r55);
} }
function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_25_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelement"](0, "nz-option", 26);
} if (rf & 2) {
    const item_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("nzValue", item_r57)("nzLabel", item_r57);
} }
function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_25_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_25_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](3); return ctx_r58.item.copies = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_nz_list_item_25_Template_nz_select_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](3); return ctx_r60.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](5, PrinterComponent_nz_row_10_nz_list_5_nz_list_item_25_nz_option_5_Template, 1, 2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 3, "_Number of copies"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r47.item.copies);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngForOf", ctx_r47.list_number_print);
} }
function PrinterComponent_nz_row_10_nz_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](1, PrinterComponent_nz_row_10_nz_list_5_nz_list_item_1_Template, 6, 5, "nz-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](2, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](6, "nz-switch", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_switch_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r61.item.enable = $event; })("click", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_switch_click_6_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_switch_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r64.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](7, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](11, "nz-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r65.printer.print_size_default = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r66.updatePrintPageType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](12, PrinterComponent_nz_row_10_nz_list_5_nz_option_12_Template, 2, 4, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](13, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](17, "nz-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r67.item.font_family = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_select_ngModelChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r68.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](18, PrinterComponent_nz_row_10_nz_list_5_nz_option_18_Template, 1, 2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](19, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](23, "nz-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_select_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r69.item.font_size = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_select_ngModelChange_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r70.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](24, PrinterComponent_nz_row_10_nz_list_5_nz_option_24_Template, 1, 2, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](25, PrinterComponent_nz_row_10_nz_list_5_nz_list_item_25_Template, 6, 5, "nz-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](26, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](30, "nz-input-number", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_input_number_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r71.item.left = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_input_number_ngModelChange_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r72.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](31, "nz-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](35, "nz-input-number", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_input_number_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r73.item.right = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_5_Template_nz_input_number_ngModelChange_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r62); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r74.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r5.platform.is("electron"));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](5, 19, "Allow print"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r5.item.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](10, 21, "Print size"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r5.printer.print_size_default);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngForOf", ctx_r5.printer.print_sizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](16, 23, "Font style"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r5.item.font_family);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngForOf", ctx_r5.list_font);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](22, 25, "Font size"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r5.item.font_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngForOf", ctx_r5.list_font_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r5.platform.is("electron"));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](29, 27, "Align left"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("nzMin", 0)("ngModel", ctx_r5.item.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](34, 29, "Align right"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("nzMin", 0)("ngModel", ctx_r5.item.right);
} }
function PrinterComponent_nz_row_10_nz_list_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_11_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r75.item.header = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_11_Template_textarea_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r77.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Header"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r6.item.header);
} }
function PrinterComponent_nz_row_10_nz_list_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_12_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r78.item.footer = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_12_Template_textarea_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r80.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Footer"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r7.item.footer);
} }
function PrinterComponent_nz_row_10_nz_list_item_18_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_18_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_18_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r82.item.discount_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_18_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r84.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide discount"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r8.item.discount_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_19_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_19_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_19_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r86.item.discount_bill_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_19_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r88.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide discount bill"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r9.item.discount_bill_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_20_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_20_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_20_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r90.item.payment_points_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_20_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r92.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide payment by point"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r10.item.payment_points_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_21_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_21_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_21_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r94.item.payment_coupon_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_21_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r95); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r96.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide payment by coupon"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r11.item.payment_coupon_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_22_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_22_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_22_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r98.item.fee_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_22_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r100.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide fee"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r12.item.fee_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_23_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_23_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_23_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r102.item.tax_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_23_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r103); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r104.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide tax"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r13.item.tax_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_24_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_24_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_24_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r106.item.debt_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_24_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r108.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide debt"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r14.item.debt_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_25_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_25_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_25_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r110.item.note_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_25_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r111); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r112.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide note"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r15.item.note_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_26_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_26_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_26_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r114.item.cash_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_26_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r115); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r116.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide customer money"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r16.item.cash_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_27_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_27_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_27_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r118.item.signature_buyer_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_27_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r120.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide buyer signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r17.item.signature_buyer_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_28_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_28_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_28_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r122.item.signature_store_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_28_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r123); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r124.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide store signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r18.item.signature_store_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_29_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_29_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_29_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r126.item.signature_treasurer_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_29_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r127); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r128.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide treasurer signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r19.item.signature_treasurer_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_30_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_30_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_30_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r130.item.signature_receiver_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_30_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r131); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r132.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide recipient signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r20.item.signature_receiver_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_31_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_31_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_31_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r135); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r134.item.signature_shipper_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_31_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r135); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r136.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide delivery person signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r21.item.signature_shipper_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_32_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_32_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_32_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r139); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r138.item.signature_creator_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_32_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r139); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r140.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide voucher creator signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r22.item.signature_creator_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_33_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_33_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_33_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r142.item.signature_stocker_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_33_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r143); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r144.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide employee signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r23.item.signature_stocker_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_34_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_34_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_34_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r146.item.signature_accountancy_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_34_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r147); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r148.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide chief accountant signature"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r24.item.signature_accountancy_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_35_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_35_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_35_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r150.item.header_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_35_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r151); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r152.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide header content when printing"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r25.item.header_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_36_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_36_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_36_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r155); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r154.item.footer_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_36_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r155); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r156.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide footer content when printing"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r26.item.footer_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_37_Template(rf, ctx) { if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_37_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_37_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r159); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r158.item.logo_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_37_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r159); const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r160.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide store logo"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r27.item.logo_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_38_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_38_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_38_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r163); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r162.item.name_store_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_38_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r163); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r164.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide store name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r28.item.name_store_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_39_Template(rf, ctx) { if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_39_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_39_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r167); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r166.item.address_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_39_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r167); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r168.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide store address"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r29.item.address_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_45_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_45_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_45_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r171); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r170.item.name_branch_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_45_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r171); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r172.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide branch name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r30.item.name_branch_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_46_Template(rf, ctx) { if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_46_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_46_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r175); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r174.item.phone_number_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_46_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r175); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r176.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide store phone number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r31.item.phone_number_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_47_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_47_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_47_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r178.item.bill_code_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_47_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r179); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r180.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide invoice code"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r32.item.bill_code_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_48_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_48_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_48_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r183); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r182.item.barcode_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_48_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r183); const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r184.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide invoice code barcode"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r33.item.barcode_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_49_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_49_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_49_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r187); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r186.item.qr_ibanking = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_49_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r187); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r188.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide QR code for bank transfer"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r34.item.qr_ibanking);
} }
function PrinterComponent_nz_row_10_nz_list_item_50_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_50_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_50_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r191); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r190.item.date_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_50_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r191); const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r192.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide order creation time"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r35.item.date_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_51_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_51_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_51_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r195); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r194.item.employee_name_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_51_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r195); const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r196.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide employee name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r36.item.employee_name_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_52_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_52_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_52_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r199); const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r198.item.customer_name_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_52_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r199); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r200.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide customer name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r37.item.customer_name_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_53_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_53_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_53_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r203); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r202.item.customer_address_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_53_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r203); const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r204.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide customer address"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r38.item.customer_address_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_54_Template(rf, ctx) { if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_54_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_54_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r207); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r206.item.customer_phone_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_54_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r207); const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r208.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide customer phone number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r39.item.customer_phone_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_55_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_55_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_55_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r210.item.supplier_name_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_55_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r211); const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r212.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide supplier name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r40.item.supplier_name_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_56_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_56_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_56_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r215); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r214.item.supplier_address_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_56_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r215); const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r216.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide supplier address"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r41.item.supplier_address_hidden);
} }
function PrinterComponent_nz_row_10_nz_list_item_57_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](4, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_nz_list_item_57_Template_nz_switch_click_4_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_57_Template_nz_switch_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r218.item.supplier_phone_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_nz_list_item_57_Template_nz_switch_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r219); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2); return ctx_r220.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](3, 2, "Hide supplier phone number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r42.item.supplier_phone_hidden);
} }
function PrinterComponent_nz_row_10_Template(rf, ctx) { if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](2, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](5, PrinterComponent_nz_row_10_nz_list_5_Template, 36, 31, "nz-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](7, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](10, "nz-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](11, PrinterComponent_nz_row_10_nz_list_item_11_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](12, PrinterComponent_nz_row_10_nz_list_item_12_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](13, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](17, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("ngModelChange", function PrinterComponent_nz_row_10_Template_textarea_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r222); const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](); return ctx_r221.item.notice = $event; })("blur", function PrinterComponent_nz_row_10_Template_textarea_blur_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r222); const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](); return ctx_r223.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](18, PrinterComponent_nz_row_10_nz_list_item_18_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](19, PrinterComponent_nz_row_10_nz_list_item_19_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](20, PrinterComponent_nz_row_10_nz_list_item_20_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](21, PrinterComponent_nz_row_10_nz_list_item_21_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](22, PrinterComponent_nz_row_10_nz_list_item_22_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](23, PrinterComponent_nz_row_10_nz_list_item_23_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](24, PrinterComponent_nz_row_10_nz_list_item_24_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](25, PrinterComponent_nz_row_10_nz_list_item_25_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](26, PrinterComponent_nz_row_10_nz_list_item_26_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](27, PrinterComponent_nz_row_10_nz_list_item_27_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](28, PrinterComponent_nz_row_10_nz_list_item_28_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](29, PrinterComponent_nz_row_10_nz_list_item_29_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](30, PrinterComponent_nz_row_10_nz_list_item_30_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](31, PrinterComponent_nz_row_10_nz_list_item_31_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](32, PrinterComponent_nz_row_10_nz_list_item_32_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](33, PrinterComponent_nz_row_10_nz_list_item_33_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](34, PrinterComponent_nz_row_10_nz_list_item_34_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](35, PrinterComponent_nz_row_10_nz_list_item_35_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](36, PrinterComponent_nz_row_10_nz_list_item_36_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](37, PrinterComponent_nz_row_10_nz_list_item_37_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](38, PrinterComponent_nz_row_10_nz_list_item_38_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](39, PrinterComponent_nz_row_10_nz_list_item_39_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](40, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](44, "nz-switch", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_nz_row_10_Template_nz_switch_click_44_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PrinterComponent_nz_row_10_Template_nz_switch_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r222); const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](); return ctx_r225.item.email_hidden = $event; })("ngModelChange", function PrinterComponent_nz_row_10_Template_nz_switch_ngModelChange_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r222); const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](); return ctx_r226.updatePrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](45, PrinterComponent_nz_row_10_nz_list_item_45_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](46, PrinterComponent_nz_row_10_nz_list_item_46_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](47, PrinterComponent_nz_row_10_nz_list_item_47_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](48, PrinterComponent_nz_row_10_nz_list_item_48_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](49, PrinterComponent_nz_row_10_nz_list_item_49_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](50, PrinterComponent_nz_row_10_nz_list_item_50_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](51, PrinterComponent_nz_row_10_nz_list_item_51_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](52, PrinterComponent_nz_row_10_nz_list_item_52_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](53, PrinterComponent_nz_row_10_nz_list_item_53_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](54, PrinterComponent_nz_row_10_nz_list_item_54_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](55, PrinterComponent_nz_row_10_nz_list_item_55_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](56, PrinterComponent_nz_row_10_nz_list_item_56_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](57, PrinterComponent_nz_row_10_nz_list_item_57_Template, 5, 4, "nz-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](4, 44, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.printer);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](9, 46, "Page display information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.header));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.footer));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](16, 48, "Notice"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r1.item.notice);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.discount_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.discount_bill_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.payment_points_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.payment_coupon_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.fee_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.tax_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.debt_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.note_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.cash_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_buyer_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_store_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_treasurer_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_receiver_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_shipper_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_creator_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_stocker_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.signature_accountancy_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.header_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.footer_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.logo_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.name_store_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.address_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](43, 50, "Hide email"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngModel", ctx_r1.item.email_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.name_branch_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.phone_number_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.bill_code_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.barcode_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.qr_ibanking));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.date_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.employee_name_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.customer_name_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.customer_address_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.customer_phone_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.supplier_name_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.supplier_address_hidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx_r1.checktype(ctx_r1.item.supplier_phone_hidden));
} }
function PrinterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵlistener"]("click", function PrinterComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵrestoreView"](_r228); const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵnextContext"](); return ctx_r227.addPrinter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](4, 1, "Add printer"));
} }
class PrinterComponent {
    constructor(router, vhQueryCafe, vhComponent, languageService, vhAuth, platform, route) {
        this.router = router;
        this.vhQueryCafe = vhQueryCafe;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.platform = platform;
        this.route = route;
        this.printer = {};
        this.item = {};
        this.list_font = [
            {
                value: 'sans-serif',
                name: "Arial"
            },
            {
                value: 'serif',
                name: "Times New Roman"
            },
            {
                value: 'monospace',
                name: "Courier New"
            },
            {
                value: 'system-ui',
                name: 'System-ui',
            }
        ];
        this.list_font_size = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.list_printer_name = [];
        this.list_number_print = [1, 2, 3, 4, 5];
        this.page_name = '';
        // dữ liệu dùng để thêm máy in
        this.sales = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_sales',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    payment_points_hidden: false,
                    payment_coupon_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    qr_ibanking: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    payment_points_hidden: false,
                    payment_coupon_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    payment_points_hidden: false,
                    payment_coupon_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    payment_points_hidden: false,
                    payment_coupon_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    payment_points_hidden: false,
                    payment_coupon_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                }
            ]
        };
        this.sales_voucher = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_sales_voucher',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    qr_ibanking: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    qr_ibanking: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'k80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'k80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'k57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                }
            ]
        };
        this.sales_payment_card = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_sales_payment_card',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    qr_ibanking: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    qr_ibanking: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'k80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'k80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'k57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    discount_bill_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    cash_hidden: false,
                    note_hidden: false,
                    qr_ibanking: false,
                }
            ]
        };
        this.purchase = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_purchase',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                }
            ]
        };
        this.return_supplier = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_return_supplier',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    debt_hidden: false,
                    note_hidden: false,
                }
            ]
        };
        this.import_kitchen = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_import_kitchen',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                }
            ]
        };
        this.export_kitchen = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_export_kitchen',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                }
            ]
        };
        this.destroy_product = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_destroy_product',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false,
                    signature_stocker_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                }
            ]
        };
        this.expense = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_expense',
            print_sizes: [{
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_receiver_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_receiver_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_receiver_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_receiver_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    supplier_name_hidden: false,
                    supplier_address_hidden: false,
                    supplier_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    signature_receiver_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false,
                    note_hidden: false,
                }]
        };
        this.receipt = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_receipt',
            print_sizes: [{
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_payer_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_payer_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_payer_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_payer_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_payer_hidden: false,
                    signature_treasurer_hidden: false
                }]
        };
        this.delivery_receive_goods = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_delivery_receive_goods',
            print_sizes: [{
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                    send_branch_hidden: false,
                    send_recieve_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                    send_branch_hidden: false,
                    send_recieve_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    discount_hidden: false,
                    tax_hidden: false,
                    fee_hidden: false,
                    note_hidden: false,
                }]
        };
        this.delivery_receive_money = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_delivery_receive_money',
            print_sizes: [{
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_receiver_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_receiver_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    note_hidden: false,
                    signature_creator_hidden: false,
                    signature_treasurer_hidden: false
                }]
        };
        this.exchange_voucher = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_exchange_voucher',
            print_sizes: [{
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                }
            ]
        };
        this.exchange_payment_card = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_exchange_payment_card',
            print_sizes: [{
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    signature_buyer_hidden: false,
                    signature_shipper_hidden: false,
                    signature_creator_hidden: false,
                    signature_accountancy_hidden: false
                },
                {
                    _id: 'print_size_k80_4c',
                    name: 'K80 - 4 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                },
                {
                    _id: 'print_size_k80_3c',
                    name: 'K80 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                },
                {
                    _id: 'print_size_k57_3c',
                    name: 'K57 - 3 cột',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    header: this.languageService.translate("Welcome to the Restaurant"),
                    footer: this.languageService.translate("Goodbye, see you again!"),
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    customer_name_hidden: false,
                    customer_address_hidden: false,
                    customer_phone_hidden: false,
                    header_hidden: false,
                    footer_hidden: false,
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    logo_hidden: false,
                    date_hidden: false,
                    name_store_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                }]
        };
        // dữ liệu dùng để thêm máy in
        this.inventory = {
            print_size_default: "print_size_a4",
            print_page_type: 'page_desktop_inventory',
            print_sizes: [
                {
                    _id: 'print_size_a4',
                    name: 'A4',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '',
                    employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    date_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    name_store_hidden: false,
                    header_hidden: false
                },
                {
                    _id: 'print_size_a5',
                    name: 'A5',
                    font_size: 16,
                    font_family: 'sans-serif',
                    enable: true,
                    notice: '',
                    copies: 1,
                    left: 0,
                    right: 0,
                    printer_name: '', employee_name_hidden: false,
                    bill_code_hidden: false,
                    barcode_hidden: false,
                    date_hidden: false,
                    address_hidden: false,
                    name_branch_hidden: false,
                    phone_number_hidden: false,
                    name_store_hidden: false,
                    header_hidden: false
                }
            ]
        };
        /** --------- dữ liệu mẫu --------- */
        // khách trả hàng -- bán hàng - bảo hành sửa chữa
        this.tempBillCustomerReturn = {
            title: "Invoice",
            bill_code: "8935006535893",
            bill_type: 1,
            date: new Date().toISOString(),
            id_customer: 'id_retail',
            id_employee: this.vhAuth.getUser()._id,
            fee: 0,
            payment_type: 1,
            discount: 5000,
            note: "Đây là hoá đơn in thử...",
            qty_total: 3,
            root_total: 65000,
            tax: 0,
            tax_value: 0,
            total: 65000,
            payment: 60000,
            id_table: "go_home"
        };
        this.bill_details_CustomerReturn = [
            {
                name: "Rau má sữa dừa (lớn)",
                unit: "ly",
                price: 20000,
                price_origin: 22000,
                quantity: 1,
            },
            {
                name: "Bánh tráng trộn",
                unit: "bịch",
                price: 20000,
                quantity: 1,
            },
            {
                name: "Cafe sữa",
                unit: "ly",
                price: 25000,
                quantity: 1,
            }
        ];
        // khách nhập hàng - trả hàng ncc
        this.tempBillPurchase = {
            title: "Invoice",
            bill_code: "A35DE4F",
            bill_type: 1,
            date: new Date().toISOString(),
            id_supplier: this.vhQueryCafe.getlocalSuppliers().length ? this.vhQueryCafe.getlocalSuppliers()[0]._id : '',
            id_employee: this.vhAuth.getUser()._id,
            fee: 0,
            payment_type: 1,
            discount: 0,
            note: "Đây là hoá đơn in thử...",
            qty_total: 3,
            root_total: 45000,
            tax: 0,
            tax_value: 0,
            total: 45000,
            payment: 40000,
        };
        this.bill_details_Purchase = [
            {
                name: "Pepsi lon cao",
                unit: "lon",
                price: 20000,
                price_origin: 25000,
                quantity: 1,
                ratio: 1,
                units: [{
                        unit: 'lon',
                        ratio: 1,
                    }]
            },
            {
                name: "Bia Tiger chai",
                unit: "chai",
                price: 20000,
                quantity: 1,
                ratio: 1,
                units: [{
                        unit: 'chai',
                        ratio: 1,
                    }]
            },
            {
                name: "Muối",
                unit: "kg",
                price: 5000,
                quantity: 1,
                ratio: 1,
                units: [{
                        unit: 'kg',
                        ratio: 1,
                    }]
            }
        ];
        // phiếu chi
        this.tempBillExpense = {
            bill_code: "XBGO0707",
            bill_type: 12,
            content: "Đây là hoá đơn in thử...",
            date: new Date(),
            id_branch: this.vhQueryCafe.getDefaultBranch()._id,
            id_employee: this.vhAuth.getUser()._id,
            employee: {
                name: this.vhAuth.getUser().name,
            },
            id_supplier: this.vhQueryCafe.getlocalSuppliers().length ? this.vhQueryCafe.getlocalSuppliers()[0]._id : '',
            supplier: {
                name: 'CTY TNHH GPCN VIETHAS',
                phone: '028.3866.1111',
                address: '116/18, Thiên Phước, Phường 9, Quận Tân Bình, Thành phố Hồ Chí Minh'
            },
            id_wallet: "id_cash",
            payment: 10000,
            payment_type: 1,
            tax: 0,
            total: 10000
        };
        // phiếu chi
        this.tempBillReceipt = {
            bill_code: "XBGO0707",
            bill_type: 12,
            content: "Đây là hoá đơn in thử...",
            date: new Date(),
            id_branch: this.vhQueryCafe.getDefaultBranch()._id,
            id_employee: this.vhAuth.getUser()._id,
            employee: {
                name: this.vhAuth.getUser().name,
            },
            customer: {
                name: 'CTY TNHH GPCN VIETHAS',
                phone: '028.3866.1111',
                address: '116/18, Thiên Phước, Phường 9, Quận Tân Bình, Thành phố Hồ Chí Minh'
            },
            id_customer: this.vhQueryCafe.getlocalCustomers().filter(item => item.type != 3)[0]._id,
            id_wallet: "id_cash",
            payment: 10000,
            payment_type: 1,
            tax: 0,
            total: 10000
        };
        // phiếu chuyển - nhận hàng
        this.tempBillTransferGoods = {
            title: "Invoice",
            bill_code: "A35DE4F",
            bill_type: 29,
            id_branch: this.vhQueryCafe.getDefaultBranch()._id,
            id_branch_receive: this.vhQueryCafe.getDefaultBranch()._id,
            id_employee: this.vhAuth.getUser()._id,
            fee: 0,
            payment_type: 2,
            discount: 0,
            note: "Đây là hoá đơn in thử...",
            qty_total: 3,
            root_total: 45000,
            tax: 0,
            tax_value: 0,
            total: 45000,
            payment: 45000,
        };
        this.bill_details_TransferGoods = [
            {
                name: "Rau má sữa dừa (lớn)",
                unit: "ly",
                price: 20000,
                price_origin: 22000,
                quantity: 1,
            },
            {
                name: "Bánh tráng trộn",
                unit: "bịch",
                price: 20000,
                quantity: 1,
            },
            {
                name: "Cafe sữa",
                unit: "ly",
                price: 25000,
                quantity: 1,
            }
        ];
        // phiếu chuyển - nhận tiền
        this.tempBill_TransferMoney = {
            bill_code: "VFLC0707",
            content: "tset",
            date: new Date(),
            id_branch: this.vhQueryCafe.getDefaultBranch()._id,
            id_branch_receive: this.vhQueryCafe.getDefaultBranch()._id,
            employee: this.vhAuth.getUser()._id,
            name_branch_reception: { name: 'Chi nhánh 2' },
            id_wallet: "id_cash",
            payment: 10000,
            payment_type: 1,
            total: 10000,
        };
        // bán voucher
        this.tempBillSalesVoucher = {
            title: "Invoice",
            bill_code: "A35DE4F",
            bill_type: 40,
            date: new Date().toISOString(),
            id_customer: 'id_retail',
            id_employee: this.vhAuth.getUser()._id,
            fee: 0,
            payment_type: 1,
            discount: 200000,
            note: "Đây là hoá đơn in thử...",
            qty_total: 3,
            root_total: 11129000,
            tax: 0,
            tax_value: 0,
            total: 10929000,
            payment: 10929000,
        };
        this.bill_details_SalesVoucher = [
            {
                name: "Voucher mùa hè rực rỡ",
                code: "J6JLST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_voucher: "dwYfCEHUerZTutzv45CV",
                id_voucher_code: "QdZ350rrnaNL8676l0QA",
                price: 191000,
                products: [
                    {
                        name: "Rau má sữa dừa (lớn)",
                        unit: "ly",
                        price: 4800000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }]
                    },
                    {
                        name: "Bánh tráng trộn",
                        unit: "bịch",
                        price: 6290000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }]
                    },
                    {
                        name: "Cafe sữa",
                        unit: "ly",
                        price: 39000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }]
                    }
                ],
                vtype: 1
            },
        ];
        this.bill_details_ExchangeVoucher = [
            {
                name_voucher: "Voucher mùa hè rực rỡ",
                name_voucher_release: "Sự kiện tháng 7",
                code: "J6JLST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_voucher: "dwYfCEHUerZTutzv45CV",
                id_voucher_code: "QdZ350rrnaNL8676l0QA",
                date_validity: new Date(),
                products: [
                    {
                        name: "Rau má sữa dừa (lớn)",
                        unit: "ly",
                        price: 4800000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1
                    },
                    {
                        name: "Bánh tráng trộn",
                        unit: "bịch",
                        price: 6290000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1
                    },
                    {
                        name: "Cafe sữa",
                        unit: "ly",
                        price: 39000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1
                    }
                ],
                vtype: 1
            },
            {
                name_voucher: "Voucher mùa hè rực rỡ 3",
                name_voucher_release: "Sự kiện tháng 7",
                code: "CLMMST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_voucher: "dwYfCEHUerZTutzv45CV",
                id_voucher_code: "QdZ350rrnaNL8676l0QA",
                date_validity: new Date(),
                products: [
                    {
                        name: "Rau má sữa dừa (lớn)",
                        unit: "ly",
                        price: 4800000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1
                    },
                    {
                        name: "Bánh tráng trộn",
                        unit: "bịch",
                        price: 6290000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1
                    },
                    {
                        name: "Cafe sữa",
                        unit: "ly",
                        price: 39000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1
                    }
                ],
                vtype: 1
            },
        ];
        // bán payment card
        this.tempBillSalesCard = {
            title: "Invoice",
            bill_code: "A35DE4F",
            bill_type: 50,
            date: new Date().toISOString(),
            id_customer: 'id_retail',
            id_employee: this.vhAuth.getUser()._id,
            fee: 0,
            payment_type: 1,
            discount: 200000,
            note: "Đây là hoá đơn in thử...",
            qty_total: 3,
            root_total: 11129000,
            tax: 0,
            tax_value: 0,
            total: 10929000,
            payment: 10929000,
        };
        this.bill_details_SalesCard = [
            {
                name: "Thẻ trả trước",
                code: "J6JLST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_payment_card: "dwYfCEHUerZTutzv45CV",
                id_payment_card_code: "QdZ350rrnaNL8676l0QA",
                price: 191000,
                products: [
                    {
                        name: "Rau má sữa dừa (lớn)",
                        unit: "ly",
                        price: 4800000,
                        price_origin: 2000000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }]
                    },
                    {
                        name: "Bánh tráng trộn",
                        unit: "bịch",
                        price: 6290000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }]
                    },
                    {
                        name: "Cafe sữa",
                        unit: "ly",
                        price: 39000,
                        quantity: 1,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }]
                    }
                ],
                vtype: 1
            },
        ];
        this.bill_details_ExchangeCard = [
            {
                name: "Thẻ trả trước 1",
                code: "J6JLST0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_payment_card: "dwYfCEHUerZTutzv45CV",
                id_payment_card_code: "QdZ350rrnaNL8676l0QA",
                ptype: 1,
                products: [
                    {
                        name: "Rau má sữa dừa (lớn)",
                        unit: "ly",
                        price: 4800000,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1,
                        quantity: 1,
                        restquantity: 4
                    },
                    {
                        name: "Bánh tráng trộn",
                        unit: "bịch",
                        price: 6290000,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1,
                        quantity: 1,
                        restquantity: 4
                    },
                    {
                        name: "Cafe sữa",
                        unit: "ly",
                        price: 39000,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1,
                        quantity: 1,
                        restquantity: 4
                    }
                ],
            },
            {
                name: "Thẻ trả trước 2",
                code: "J6JLTT0705",
                id_bill: "dwYfCADWQrZTutzv45CV",
                id_payment_card: "dwYfCEHUerZTutzv45CV",
                id_payment_card_code: "QdZ350rrnaNL8676l0QA",
                ptype: 1,
                products: [
                    {
                        name: "Rau má sữa dừa (lớn)",
                        unit: "ly",
                        price: 4800000,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1,
                        quantity: 1,
                        restquantity: 4
                    },
                    {
                        name: "Bánh tráng trộn",
                        unit: "bịch",
                        price: 6290000,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1,
                        quantity: 1,
                        restquantity: 4
                    },
                    {
                        name: "Cafe sữa",
                        unit: "ly",
                        price: 39000,
                        ratio: 1,
                        units: [{
                                unit: 'Cái',
                                ratio: 1,
                            }],
                        ptype: 1,
                        quantity: 1,
                        restquantity: 4
                    }
                ],
            },
        ];
        this.route.params.subscribe((routeParams) => {
            this.id = routeParams.id;
            this.page_name = this.router.getCurrentNavigation().extras.state;
            this.printer = this.vhQueryCafe.getLocalPrintPage(routeParams.id);
            if (this.printer) {
                let type = this.printer.print_size_default;
                this.item = this.printer.print_sizes.find(e => e._id == type);
                if (this.platform.is("electron"))
                    this.getPrint();
            }
            else
                this.item = null;
        });
    }
    ngOnInit() {
    }
    /**
     * bắt sk thay đổi loại trang in (a4,a5,k57,k80)
     */
    updatePrintPageType(value) {
        this.item = this.printer.print_sizes[this.printer.print_sizes.findIndex(e => e._id == value)];
        this.updatePrint();
    }
    /**
     * kiểm tra loại trang in này có trường này hay ko, nếu có thì hiển thị lên giao diện để cấu hình
     * ngược lại trang in ko có cấu hình này
     * @example this.checktype('bill_code_hidden')
     */
    checktype(value) {
        if (typeof (value) != 'undefined')
            return true;
        if (typeof (value) == 'undefined')
            return false;
    }
    addPrinter() {
        let dataAdd = {};
        switch (this.id) {
            case 'page_desktop_sales': {
                dataAdd = this.sales;
                break;
            }
            case 'page_desktop_purchase': {
                dataAdd = this.purchase;
                break;
            }
            case 'page_desktop_return_supplier': {
                dataAdd = this.return_supplier;
                break;
            }
            case 'page_desktop_expense': {
                dataAdd = this.expense;
                break;
            }
            case 'page_desktop_receipt': {
                dataAdd = this.receipt;
                break;
            }
            case 'page_desktop_import_kitchen': {
                dataAdd = this.import_kitchen;
                break;
            }
            case 'page_desktop_export_kitchen': {
                dataAdd = this.export_kitchen;
                break;
            }
            case 'page_desktop_delivery_receive_money': {
                dataAdd = this.delivery_receive_money;
                break;
            }
            case 'page_desktop_delivery_receive_goods': {
                dataAdd = this.delivery_receive_goods;
                break;
            }
            case 'page_desktop_sales_voucher': {
                dataAdd = this.sales_voucher;
                break;
            }
            case 'page_desktop_exchange_voucher': {
                dataAdd = this.exchange_voucher;
                break;
            }
            case 'page_desktop_sales_payment_card': {
                dataAdd = this.sales_payment_card;
                break;
            }
            case 'page_desktop_exchange_payment_card': {
                dataAdd = this.exchange_payment_card;
                break;
            }
            case 'page_desktop_inventory': {
                dataAdd = this.inventory;
                break;
            }
            case 'page_desktop_destroy_product': {
                dataAdd = this.destroy_product;
                break;
            }
        }
        this.vhComponent.showLoading('').then(() => {
            this.vhQueryCafe.addPrintPage(this.id, dataAdd)
                .then((printer) => {
                console.log('addPrintPage', printer);
                this.printer = printer;
                this.item = printer.print_sizes[0];
                setTimeout(() => {
                    this.vhComponent.hideLoading(0);
                }, 500);
            }).catch(err => console.error(err));
            if (this.platform.is("electron"))
                this.getPrint();
        });
    }
    /**
     * chỉ dùng cho electron, get danh sách máy in đã cài driver
     * @example this.getPrint();
     */
    getPrint() {
        electron.ipcRenderer.send("allPrint");
        electron.ipcRenderer.on("printName", (event, data) => {
            this.list_printer_name = data;
        });
    }
    /**
     * cập nhật cấu hình in
     * @example this.updatePrint()
     */
    updatePrint() {
        let value = Object.assign({}, this.printer);
        delete value._id;
        this.vhQueryCafe.updatePrintPage(this.printer._id, value);
    }
    /**
     * bắt sk nhấn nút in thử
     * @example this.printTemp()
     */
    printTemp() {
        let data = Object.assign({}, this.item);
        switch (this.id) {
            case 'page_desktop_sales':
                {
                    let invoice = new src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_16__.VhOrderInvoices(this.tempBillCustomerReturn, this.bill_details_CustomerReturn, this.vhQueryCafe);
                    this.vhComponent.showModal(this.renderPrintSalesPage(this.printer.print_size_default), { printer: data, invoice: invoice }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            case 'page_desktop_purchase':
                {
                    this.vhComponent.showModal(this.renderPrintPurchasePage(this.printer.print_size_default), { printer: data, invoice: this.tempBillPurchase, invoice_detail: this.bill_details_Purchase }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            case 'page_desktop_return_supplier':
                {
                    this.vhComponent.showModal(this.renderPrintReturnSupplierPage(this.printer.print_size_default), { printer: data, invoice: this.tempBillPurchase, invoice_detail: this.bill_details_Purchase }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            case 'page_desktop_export_kitchen':
                {
                    this.vhComponent.showModal(this.renderPrintExportKitchenPage(this.printer.print_size_default), { printer: data, invoice: this.tempBillPurchase, invoice_detail: this.bill_details_Purchase }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            case 'page_desktop_import_kitchen':
                {
                    this.vhComponent.showModal(this.renderPrintImportKitchenPage(this.printer.print_size_default), { printer: data, invoice: this.tempBillPurchase, invoice_detail: this.bill_details_Purchase }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            case 'page_desktop_receipt':
                {
                    this.vhComponent.showModal(this.renderPrintPageReceipt(this.printer.print_size_default), { printer: data, billInfo: this.tempBillReceipt }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            case 'page_desktop_expense': {
                this.vhComponent.showModal(this.renderPrintPageExpend(this.printer.print_size_default), { printer: data, billInfo: this.tempBillExpense }, false, false, `modal-print-${this.printer.print_size_default}`);
                break;
            }
            case 'page_desktop_delivery_receive_goods': {
                this.vhComponent.showModal(this.renderPrintPageDeliveryGoods(this.printer.print_size_default), { printer: data, invoice: this.tempBillTransferGoods, invoice_detail: this.bill_details_Purchase }, false, false, `modal-print-${this.printer.print_size_default}`);
                break;
            }
            case 'page_desktop_delivery_receive_money': {
                this.vhComponent.showModal(this.renderPrintPageTransfer(this.printer.print_size_default), { printer: data, billInfo: this.tempBill_TransferMoney }, false, false, `modal-print-${this.printer.print_size_default}`);
                break;
            }
            case 'page_desktop_sales_voucher': {
                this.vhComponent.showModal(this.renderPrintPageSalesVoucher(this.printer.print_size_default), { printer: data, invoice: this.tempBillSalesVoucher, invoice_detail: this.bill_details_SalesVoucher }, false, false, `modal-print-${this.printer.print_size_default}`);
                break;
            }
            case 'page_desktop_exchange_voucher': {
                this.vhComponent.showModal(this.renderPrintPageExchangeVoucher(this.printer.print_size_default), { printer: data, invoice: this.tempBillSalesVoucher, invoice_detail: this.bill_details_SalesVoucher }, false, false, `modal-print-${this.printer.print_size_default}`);
                break;
            }
            case 'page_desktop_sales_payment_card': {
                this.vhComponent.showModal(this.renderPrintPagePaymentCard(this.printer.print_size_default), { printer: data, invoice: this.tempBillSalesCard, invoice_detail: this.bill_details_SalesVoucher }, false, false, `modal-print-${this.printer.print_size_default}`);
                break;
            }
            case 'page_desktop_exchange_payment_card': {
                this.vhComponent.showModal(this.renderPrintPageExchangePaymentCard(this.printer.print_size_default), { printer: data, invoice: this.tempBillSalesCard, invoice_detail: this.bill_details_SalesVoucher }, false, false, `modal-print-${this.printer.print_size_default}`);
                break;
            }
            case 'page_desktop_inventory':
                {
                    this.vhComponent.showModal(this.renderPrintPageInventory(this.printer.print_size_default), { printer: data, billInfo: Object.assign(Object.assign({}, this.tempBillPurchase), { total_checked: 100, employee: { name: this.vhAuth.getUser().name } }), billDetails: this.bill_details_Purchase, }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            case 'page_desktop_destroy_product':
                {
                    this.vhComponent.showModal(this.renderPrintPageDestroyProduct(this.printer.print_size_default), { printer: data, invoice: this.tempBillPurchase, invoice_detail: this.bill_details_Purchase }, false, false, `modal-print-${this.printer.print_size_default}`);
                    break;
                }
                ;
            default: {
                this.vhComponent.showModal(this.renderPrintPage(this.printer.print_size_default), { printer: data }, false, false, `modal-print-${this.printer.print_size_default}`);
            }
        }
    }
    renderPrintImportKitchenPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return (src_app_cafe_components_print_import_kitchen_import_kitchen_k57_col3_import_kitchen_k57_col3_component__WEBPACK_IMPORTED_MODULE_64__.ImportKitchenK57Col3Component);
            case 'print_size_k80_3c': return (src_app_cafe_components_print_import_kitchen_import_kitchen_k80_col3_import_kitchen_k80_col3_component__WEBPACK_IMPORTED_MODULE_65__.ImportKitchenK80Col3Component);
            case 'print_size_k80_4c': return (src_app_cafe_components_print_import_kitchen_import_kitchen_k80_col4_import_kitchen_k80_col4_component__WEBPACK_IMPORTED_MODULE_66__.ImportKitchenK80Col4Component);
            case 'print_size_a5': return (src_app_cafe_components_print_import_kitchen_import_kitchen_a5_import_kitchen_a5_component__WEBPACK_IMPORTED_MODULE_63__.ImportKitchenA5Component);
            case 'print_size_a4': return (src_app_cafe_components_print_import_kitchen_import_kitchen_a4_import_kitchen_a4_component__WEBPACK_IMPORTED_MODULE_62__.ImportKitchenA4Component);
            default: return (src_app_cafe_components_print_import_kitchen_import_kitchen_a4_import_kitchen_a4_component__WEBPACK_IMPORTED_MODULE_62__.ImportKitchenA4Component);
        }
    }
    renderPrintExportKitchenPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return (src_app_cafe_components_print_export_kitchen_export_kitchen_k57_col3_export_kitchen_k57_col3_component__WEBPACK_IMPORTED_MODULE_67__.ExportKitchenK57Col3Component);
            case 'print_size_k80_3c': return (src_app_cafe_components_print_export_kitchen_export_kitchen_k80_col3_export_kitchen_k80_col3_component__WEBPACK_IMPORTED_MODULE_68__.ExportKitchenK80Col3Component);
            case 'print_size_k80_4c': return (src_app_cafe_components_print_export_kitchen_export_kitchen_k80_col4_export_kitchen_k80_col4_component__WEBPACK_IMPORTED_MODULE_69__.ExportKitchenK80Col4Component);
            case 'print_size_a5': return (src_app_cafe_components_print_export_kitchen_export_kitchen_a5_export_kitchen_a5_component__WEBPACK_IMPORTED_MODULE_70__.ExportKitchenA5Component);
            case 'print_size_a4': return (src_app_cafe_components_print_export_kitchen_export_kitchen_a4_export_kitchen_a4_component__WEBPACK_IMPORTED_MODULE_71__.ExportKitchenA4Component);
            default: return (src_app_cafe_components_print_export_kitchen_export_kitchen_a4_export_kitchen_a4_component__WEBPACK_IMPORTED_MODULE_71__.ExportKitchenA4Component);
        }
    }
    renderPrintSalesPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.SalesK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_17__.SalesK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_18__.SalesK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_1__.SalesA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_2__.SalesA4Component;
            default: return src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_2__.SalesA4Component;
        }
    }
    renderPrintPurchasePage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_purchase_purchase_k57_col3_purchase_k57_col3_component__WEBPACK_IMPORTED_MODULE_19__.PurchaseK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_purchase_purchase_k80_col3_purchase_k80_col3_component__WEBPACK_IMPORTED_MODULE_20__.PurchaseK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_purchase_purchase_k80_col4_purchase_k80_col4_component__WEBPACK_IMPORTED_MODULE_9__.PurchaseK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_purchase_purchase_a5_purchase_a5_component__WEBPACK_IMPORTED_MODULE_8__.PurchaseA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_purchase_purchase_a4_purchase_a4_component__WEBPACK_IMPORTED_MODULE_7__.PurchaseA4Component;
            default: return src_app_cafe_components_print_purchase_purchase_a4_purchase_a4_component__WEBPACK_IMPORTED_MODULE_7__.PurchaseA4Component;
        }
    }
    renderPrintReturnSupplierPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_14__.ReturnSupplierK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_13__.ReturnSupplierK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_12__.ReturnSupplierK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_11__.ReturnSupplierA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_10__.ReturnSupplierA4Component;
            default: return src_app_cafe_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_10__.ReturnSupplierA4Component;
        }
    }
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.SalesK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_17__.SalesK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_18__.SalesK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_1__.SalesA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_2__.SalesA4Component;
            default: return src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_2__.SalesA4Component;
        }
    }
    renderPrintPageExpend(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_expenses_expense_k57_col3_expense_k57_col3_component__WEBPACK_IMPORTED_MODULE_21__.ExpenseK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_expenses_expense_k80_col3_expense_k80_col3_component__WEBPACK_IMPORTED_MODULE_22__.ExpenseK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_expenses_expense_k80_col4_expense_k80_col4_component__WEBPACK_IMPORTED_MODULE_23__.ExpenseK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_expenses_expenses_a5_expenses_a5_component__WEBPACK_IMPORTED_MODULE_24__.ExpensesA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_expenses_expense_a4_expense_a4_component__WEBPACK_IMPORTED_MODULE_25__.ExpenseA4Component;
            default: return src_app_cafe_components_print_expenses_expense_a4_expense_a4_component__WEBPACK_IMPORTED_MODULE_25__.ExpenseA4Component;
        }
    }
    renderPrintPageReceipt(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_receipt_receipt_k57_col3_receipt_k57_col3_component__WEBPACK_IMPORTED_MODULE_26__.ReceiptK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_receipt_receipt_k80_col3_receipt_k80_col3_component__WEBPACK_IMPORTED_MODULE_27__.ReceiptK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_receipt_receipt_k80_col4_receipt_k80_col4_component__WEBPACK_IMPORTED_MODULE_28__.ReceiptK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_receipt_receipt_a5_receipt_a5_component__WEBPACK_IMPORTED_MODULE_29__.ReceiptA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_receipt_receipt_a4_receipt_a4_component__WEBPACK_IMPORTED_MODULE_30__.ReceiptA4Component;
            default: return src_app_cafe_components_print_receipt_receipt_a4_receipt_a4_component__WEBPACK_IMPORTED_MODULE_30__.ReceiptA4Component;
        }
    }
    renderPrintPageDeliveryGoods(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_delivery_goods_delivery_goods_k57_col3_delivery_goods_k57_col3_component__WEBPACK_IMPORTED_MODULE_31__.DeliveryGoodsK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_delivery_goods_delivery_goods_k80_col3_delivery_goods_k80_col3_component__WEBPACK_IMPORTED_MODULE_32__.DeliveryGoodsK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_delivery_goods_delivery_goods_k80_col4_delivery_goods_k80_col4_component__WEBPACK_IMPORTED_MODULE_33__.DeliveryGoodsK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_delivery_goods_delivery_goods_a5_delivery_goods_a5_component__WEBPACK_IMPORTED_MODULE_34__.DeliveryGoodsA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_delivery_goods_delivery_goods_a4_delivery_goods_a4_component__WEBPACK_IMPORTED_MODULE_35__.DeliveryGoodsA4Component;
            default: return src_app_cafe_components_print_delivery_goods_delivery_goods_a4_delivery_goods_a4_component__WEBPACK_IMPORTED_MODULE_35__.DeliveryGoodsA4Component;
        }
    }
    renderPrintPageTransfer(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_transfer_money_transfer_money_k57_col3_transfer_money_k57_col3_component__WEBPACK_IMPORTED_MODULE_36__.TransferMoneyK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_transfer_money_transfer_money_k80_col3_transfer_money_k80_col3_component__WEBPACK_IMPORTED_MODULE_37__.TransferMoneyK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_transfer_money_transfer_money_k80_col4_transfer_money_k80_col4_component__WEBPACK_IMPORTED_MODULE_38__.TransferMoneyK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_transfer_money_transfer_money_a5_transfer_money_a5_component__WEBPACK_IMPORTED_MODULE_39__.TransferMoneyA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_40__.TransferMoneyA4Component;
            default: return src_app_cafe_components_print_transfer_money_transfer_money_a4_transfer_money_a4_component__WEBPACK_IMPORTED_MODULE_40__.TransferMoneyA4Component;
        }
    }
    // Sales Payment Card
    renderPrintPagePaymentCard(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_sales_payment_card_sales_payment_card_k57_col3_sales_payment_card_k57_col3_component__WEBPACK_IMPORTED_MODULE_41__.SalesPaymentCardK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_sales_payment_card_sales_payment_card_k80_col3_sales_payment_card_k80_col3_component__WEBPACK_IMPORTED_MODULE_4__.SalesPaymentCardK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_sales_payment_card_sales_payment_card_k80_col4_sales_payment_card_k80_col4_component__WEBPACK_IMPORTED_MODULE_5__.SalesPaymentCardK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_sales_payment_card_sales_payment_card_a5_sales_payment_card_a5_component__WEBPACK_IMPORTED_MODULE_6__.SalesPaymentCardA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_sales_payment_card_sales_payment_card_a4_sales_payment_card_a4_component__WEBPACK_IMPORTED_MODULE_3__.SalesPaymentCardA4Component;
            default: return src_app_cafe_components_print_sales_payment_card_sales_payment_card_a4_sales_payment_card_a4_component__WEBPACK_IMPORTED_MODULE_3__.SalesPaymentCardA4Component;
        }
    }
    // Exchange Payment Card
    renderPrintPageExchangePaymentCard(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_prepaid_card_exchange_payment_card_k57_col3_exchange_payment_card_k57_col3_component__WEBPACK_IMPORTED_MODULE_15__.ExchangePaymentCardK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_prepaid_card_exchange_payment_card_k80_col3_exchange_payment_card_k80_col3_component__WEBPACK_IMPORTED_MODULE_42__.ExchangePaymentCardK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_prepaid_card_exchange_payment_card_k80_col4_exchange_payment_card_k80_col4_component__WEBPACK_IMPORTED_MODULE_43__.ExchangePaymentCardK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_prepaid_card_exchange_payment_card_a5_exchange_payment_card_a5_component__WEBPACK_IMPORTED_MODULE_44__.ExchangePaymentCardA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_prepaid_card_exchange_payment_card_a4_exchange_payment_card_a4_component__WEBPACK_IMPORTED_MODULE_45__.ExchangePaymentCardA4Component;
            default: return src_app_cafe_components_print_prepaid_card_exchange_payment_card_a4_exchange_payment_card_a4_component__WEBPACK_IMPORTED_MODULE_45__.ExchangePaymentCardA4Component;
        }
    }
    // Sales Voucher
    renderPrintPageSalesVoucher(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_sales_voucher_sales_voucher_k57_col3_sales_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_46__.SalesVoucherK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_sales_voucher_sales_voucher_k80_col3_sales_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_47__.SalesVoucherK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_sales_voucher_sales_voucher_k80_col4_sales_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_48__.SalesVoucherK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_sales_voucher_sales_voucher_a5_sales_voucher_a5_component__WEBPACK_IMPORTED_MODULE_49__.SalesVoucherA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_sales_voucher_sales_voucher_a4_sales_voucher_a4_component__WEBPACK_IMPORTED_MODULE_50__.SalesVoucherA4Component;
            default: return src_app_cafe_components_print_sales_voucher_sales_voucher_a4_sales_voucher_a4_component__WEBPACK_IMPORTED_MODULE_50__.SalesVoucherA4Component;
        }
    }
    // Exchange Voucher
    renderPrintPageExchangeVoucher(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_51__.ExchangeVoucherK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_52__.ExchangeVoucherK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_53__.ExchangeVoucherK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_54__.ExchangeVoucherA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_55__.ExchangeVoucherA4Component;
            default: return src_app_cafe_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_55__.ExchangeVoucherA4Component;
        }
    }
    // Exchange Voucher
    renderPrintPageInventory(type) {
        switch (type) {
            case 'print_size_a5': return src_app_cafe_components_print_inventory_A45_inventory_a45_inventory_a45_component__WEBPACK_IMPORTED_MODULE_56__.InventoryA45Component;
            case 'print_size_a4': return src_app_cafe_components_print_inventory_A45_inventory_a45_inventory_a45_component__WEBPACK_IMPORTED_MODULE_56__.InventoryA45Component;
            default: return src_app_cafe_components_print_inventory_A45_inventory_a45_inventory_a45_component__WEBPACK_IMPORTED_MODULE_56__.InventoryA45Component;
        }
    }
    renderPrintPageDestroyProduct(type) {
        switch (type) {
            case 'print_size_k57_3c': return (src_app_cafe_components_print_destroy_product_destroy_product_k57_col3_destroy_product_k57_col3_component__WEBPACK_IMPORTED_MODULE_57__.DestroyProductK57Col3Component);
            case 'print_size_k80_3c': return (src_app_cafe_components_print_destroy_product_destroy_product_k80_col3_destroy_product_k80_col3_component__WEBPACK_IMPORTED_MODULE_58__.DestroyProductK80Col3Component);
            case 'print_size_k80_4c': return (src_app_cafe_components_print_destroy_product_destroy_product_k80_col4_destroy_product_k80_col4_component__WEBPACK_IMPORTED_MODULE_59__.DestroyProductK80Col4Component);
            case 'print_size_a5': return (src_app_cafe_components_print_destroy_product_destroy_product_a5_destroy_product_a5_component__WEBPACK_IMPORTED_MODULE_60__.DestroyProductA5Component);
            case 'print_size_a4': return (src_app_cafe_components_print_destroy_product_destroy_product_a4_destroy_product_a4_component__WEBPACK_IMPORTED_MODULE_61__.DestroyProductA4Component);
            default: return (src_app_cafe_components_print_destroy_product_destroy_product_a4_destroy_product_a4_component__WEBPACK_IMPORTED_MODULE_61__.DestroyProductA4Component);
        }
    }
    updateSetting(title, event) {
        this.vhAuth.localStorageSET(title, event);
    }
}
PrinterComponent.ɵfac = function PrinterComponent_Factory(t) { return new (t || PrinterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_75__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_76__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_72__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_73__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_76__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_77__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_75__.ActivatedRoute)); };
PrinterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdefineComponent"]({ type: PrinterComponent, selectors: [["app-printer"]], decls: 12, vars: 9, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "19", 1, "title"], [2, "padding-right", "16px"], ["nz-col", "", "nzSpan", "5", 1, "print"], ["class", "btn-print center-all-content", "nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["nz-row", "", 1, "cus-row", "ant-table-body", 2, "width", "100%"], ["nz-row", "", 4, "ngIf"], ["class", "center-all-content no-data", 4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "btn-print", "center-all-content", 3, "click"], ["src", "assets/icon/management/printer.svg", 2, "font-size", "0.9rem", "margin-right", "4px"], ["nz-col", "", "nzSpan", "10"], [2, "font-weight", "600", "text-align", "center", "font-size", "16px"], ["nzSize", "default", 4, "ngIf"], ["nz-col", "", "nzSpan", "14"], ["class", "no-border", 4, "ngIf"], [1, "no-border"], ["rows", "2", "nz-input", "", 3, "ngModel", "ngModelChange", "blur"], [3, "ngModel", "click", "ngModelChange"], ["nzSize", "default"], [4, "ngIf"], [3, "ngModel", "ngModelChange", "click"], [2, "width", "120px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [2, "width", "200px", 3, "ngModel", "ngModelChange"], [2, "text-align", "end", 3, "nzMin", "ngModel", "ngModelChange"], [2, "width", "250px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"], ["rows", "1", "nz-input", "", 3, "ngModel", "ngModelChange"], ["mode", "ios", 3, "ngModel", "click", "ngModelChange"], [1, "center-all-content", "no-data"], ["nz-button", "", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"]], template: function PrinterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](3, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](8, PrinterComponent_button_8_Template, 4, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](10, PrinterComponent_nz_row_10_Template, 58, 52, "nz-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtemplate"](11, PrinterComponent_div_11_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](5, 5, "Print page settings"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵpipeBind1"](6, 7, ctx.page_name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx.printer);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", ctx.printer);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵproperty"]("ngIf", !ctx.printer);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_78__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_79__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_79__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_80__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_81__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_82__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_83__["ɵNzTransitionPatchDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_77__.IonIcon, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_84__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_84__.NzListItemComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_85__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_86__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_86__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_86__.NgModel, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_87__.NzSwitchComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_88__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_80__.NgForOf, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_89__.NzInputNumberComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_88__.NzOptionComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_90__.NzIconDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_91__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .print[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-white);\n  background-color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .btn-print[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-white);\n  background-color: var(--ion-color-vh-red);\n}\nnz-layout[_ngcontent-%COMP%]   .btn-print[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 5px;\n  overflow-y: auto;\n  padding-right: 12px;\n  position: relative;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   nz-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .no-border[_ngcontent-%COMP%] {\n  margin-left: 5vw;\n}\nnz-layout[_ngcontent-%COMP%]   .printer-device-active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-weight: bold;\n  border-bottom: 1px solid;\n}\nnz-layout[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 20vw;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EseUNBQUE7QUFFSjtBQUNFO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtBQUNKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtBQUVOO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVOO0FBQUk7RUFDRSxnQkFBQTtBQUVOO0FBQ0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicHJpbnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWxheW91dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIC5wcmludCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICB9XHJcbiAgLmJ0bi1hZGR7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgfVxyXG4gIC5idG4tcHJpbnQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICAuYnRuLWRlbGV0ZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXJlZCk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW50OmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICB9XHJcbiAgLmN1cy1yb3cge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBuei1yb3cge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgLm5vLWJvcmRlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcmludGVyLWRldmljZS1hY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICB9XHJcbiAgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 56151:
/*!************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/printer/printer.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrinterModule": () => (/* binding */ PrinterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _printer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer.component */ 20237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: ":id",
        component: _printer_component__WEBPACK_IMPORTED_MODULE_0__.PrinterComponent
    },
];
class PrinterModule {
}
PrinterModule.ɵfac = function PrinterModule_Factory(t) { return new (t || PrinterModule)(); };
PrinterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PrinterModule });
PrinterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrinterModule, { declarations: [_printer_component__WEBPACK_IMPORTED_MODULE_0__.PrinterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_printer_printer_module_ts.js.map