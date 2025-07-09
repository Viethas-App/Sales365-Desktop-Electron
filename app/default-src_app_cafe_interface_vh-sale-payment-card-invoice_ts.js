"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_cafe_interface_vh-sale-payment-card-invoice_ts"],{

/***/ 57093:
/*!****************************************************************!*\
  !*** ./src/app/cafe/interface/vh-sale-payment-card-invoice.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VhSalePaymentCardInvoices": () => (/* binding */ VhSalePaymentCardInvoices),
/* harmony export */   "VhSaleInvoicesExchangePaymentCard": () => (/* binding */ VhSaleInvoicesExchangePaymentCard)
/* harmony export */ });
class VhSalePaymentCardInvoices {
    constructor(invoice = null, invoiceDetail = []) {
        this.date = new Date();
        this.subTotal = 0;
        this.percent_discount_bill = 0;
        this.taxValue = 0;
        this.invoice = {
            payment_type: 1,
            date: this.date.toISOString(),
            id_customer: 'id_retail',
            id_branch: null,
            id_employee: null,
            id_wallet: 'id_cash',
            total: 0,
            payment: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            bill_type: 50,
            note: '',
            bill_code: '',
            _id: null,
            cash: 0,
        };
        this.invoiceDetail = [];
        if (invoice) {
            this.invoice.bill_code = invoice['bill_code']
                ? invoice['bill_code']
                : null;
            this.invoice.payment_type = invoice['payment_type']
                ? invoice['payment_type']
                : 1;
            this.invoice.id_customer = invoice['id_customer']
                ? invoice['id_customer']
                : 'id_retail';
            this.invoice.id_branch = invoice['id_branch']
                ? invoice['id_branch']
                : null;
            this.invoice.id_employee = invoice['id_employee']
                ? invoice['id_employee']
                : null;
            this.invoice.id_wallet = invoice['id_wallet']
                ? invoice['id_wallet']
                : 'id_cash';
            this.invoice.total = invoice['total'] ? invoice['total'] : 0;
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
            this.invoice.discount = invoice['discount'] ? invoice['discount'] : 0;
            this.invoice.cash = invoice['cash'] ? invoice['cash'] : 0;
            this.invoice.discount_bill = invoice['discount_bill']
                ? invoice['discount_bill']
                : 0;
            this.invoice.fee = invoice['fee'] ? invoice['fee'] : 0;
            this.invoice.bill_type = invoice['bill_type']
                ? invoice['bill_type']
                : null;
            this.invoice.date = invoice['date']
                ? invoice['date']
                : this.date.toISOString();
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.invoiceDetail = invoice['invoiceDetail']
                ? invoice['invoiceDetail']
                : [];
            this.taxValue = this.invoice.total * (this.invoice.tax / 100);
            if (invoice['id_customer'] == 'id_retail') {
                this.invoice.retail_name = invoice['retail_name'] || '';
                this.invoice.retail_phone = invoice['retail_phone'] || '';
                this.invoice.retail_address = invoice['retail_address'] || '';
            }
        }
        if (invoiceDetail) {
            this.invoiceDetail = invoiceDetail;
            this.subTotal = this.invoiceDetail.reduce((prev, next) => prev + next.price, 0);
            this.percent_discount_bill = this.subTotal
                ? (this.invoice.discount / this.subTotal) * 100
                : 0;
        }
        else
            this.percent_discount_bill = 0;
    }
    /******************************Xu ly invoice *******************************/
    getID() {
        return this.invoice._id;
    }
    getBillType() {
        return this.invoice.bill_type;
    }
    setBillType(value) {
        this.invoice.bill_type = value;
    }
    getDate() {
        return this.invoice.date;
    }
    setDate(value) {
        this.invoice.date = typeof value == 'string' ? value : value.toISOString();
    }
    getBillCode() {
        return this.invoice.bill_code;
    }
    setBillCode(value) {
        this.invoice.bill_code = value;
    }
    getRetailName() {
        return this.invoice.retail_name;
    }
    setRetailName(retail_name) {
        this.invoice.retail_name = retail_name;
    }
    getRetailPhone() {
        return this.invoice.retail_phone;
    }
    setRetailPhone(retail_phone) {
        this.invoice.retail_phone = retail_phone;
    }
    getRetailAddress() {
        return this.invoice.retail_address;
    }
    setRetailAddress(retail_address) {
        this.invoice.retail_address = retail_address;
    }
    getPaymentType() {
        return this.invoice.payment_type;
    }
    setPaymentType(value) {
        this.invoice.payment_type = value;
    }
    getIdPartner() {
        return this.invoice.id_customer;
    }
    setIdPartner(value) {
        this.invoice.id_customer = value;
        // this.getDiscountInvoice();
    }
    getIdEmployee() {
        return this.invoice.id_employee;
    }
    setIdEmployee(value) {
        this.invoice.id_employee = value;
    }
    getIdBranch() {
        return this.invoice.id_branch;
    }
    setIdBranch(value) {
        this.invoice.id_branch = value;
    }
    getIdWallet() {
        return this.invoice.id_wallet;
    }
    setIdWallet(value) {
        this.invoice.id_wallet = value;
    }
    getNote() {
        return this.invoice.note;
    }
    setNote(value) {
        this.invoice.note = value;
    }
    getTax() {
        return this.invoice.tax;
    }
    setTax(value) {
        this.invoice.tax = value;
        this.setTaxValue();
    }
    getTaxValue() {
        return this.taxValue;
    }
    setTaxValue() {
        this.taxValue = this.invoice.total * (this.invoice.tax / 100);
        this.setPayment();
    }
    getDiscount() {
        return this.invoice.discount;
    }
    setDiscount(value) {
        this.invoice.discount = value;
        this.setTotal();
    }
    getFee() {
        return this.invoice.fee;
    }
    setFee(value) {
        this.invoice.fee = value;
        this.setTotal();
    }
    getSubTotal() {
        return this.subTotal;
    }
    setSubTotal() {
        this.subTotal = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
        this.setTotal();
    }
    getTotal() {
        return this.invoice.total;
    }
    setTotal() {
        this.invoice.total =
            this.getSubTotal() - this.getDiscount() + this.getFee();
        this.setTaxValue();
    }
    getTotalATax() {
        return this.getTotal() + this.getTaxValue();
    }
    getPayment() {
        return this.invoice.payment;
    }
    setPayment(value) {
        if (this.invoice.payment_type == 2) {
            this.invoice.payment = 0;
        }
        else {
            if (value != null)
                this.invoice.payment = value;
            else
                this.invoice.payment = this.getTotal() + this.getTaxValue();
        }
    }
    getCash() {
        return this.invoice.cash;
    }
    getExcessCash() {
        return this.invoice.cash - this.getPayment() > 0
            ? this.invoice.cash - this.getPayment()
            : 0;
    }
    setCash(value) {
        if (this.invoice.payment_type == 2)
            this.invoice.cash = 0;
        else {
            if (value)
                this.invoice.cash = parseFloat(value);
            else
                this.invoice.cash = 0;
        }
    }
    getDiscountBill() {
        return this.invoice.discount_bill;
    }
    /**
     * lấy % dc giảm của khách hàng có chiết khấu
     * @returns number
     */
    getPercentDiscountBillHasDiscountInvoice() {
        return parseFloat(parseFloat(((this.invoice.discount / this.subTotal) * 100).toString()).toFixed(2));
    }
    /**
     * set lại giá trị percent_discount_bill khi nhập từ input giảm giá trường hợp giảm theo %
     * @param value
     */
    setPercentDiscountBill(value) {
        this.percent_discount_bill =
            parseFloat(value) <= 100 && parseFloat(value) ? parseFloat(value) : 0;
        this.setDiscount(this.getSubTotal() * (this.percent_discount_bill / 100));
    }
    getPercentDiscountBill() {
        return this.percent_discount_bill;
    }
    /**
     * set lại giá trị giảm giá cho khách ko có công thức chiết khấu trường hợp giảm giá tiền
     * @param value
     */
    setDiscountForCustomerNotDiscountInvoice(value) {
        if (value < this.subTotal) {
            this.setDiscount(value);
            this.percent_discount_bill = parseFloat(parseFloat(((value / this.getSubTotal()) * 100).toString()).toFixed(2));
        }
        else {
            this.setDiscount(0);
            this.percent_discount_bill = 0;
        }
    }
    /******************************Xu ly invoice detail *******************************/
    /** Thêm sản phẩm vô bill detail */
    addInvoiceDetail(value) {
        let index = this.invoiceDetail.findIndex((detail) => detail['id_product'] == value['_id']);
        if (index != -1) {
            if (this.invoiceDetail[index]['quantity'] < 9999999999)
                this.invoiceDetail[index]['quantity'] += 1;
        }
        else {
            let detail = {
                name: value.name,
                id_payment_card: value.id_payment_card,
                id_payment_card_code: value.id_payment_card_code,
                id_bill: value.id_bill,
                quantity: 1,
                pctype: 1,
                price: value.price,
                products: value.products,
                product_name: value.product_name,
                code: value.code,
                name_payment_card_release: value.name_payment_card_release
            };
            this.invoiceDetail.unshift(detail);
        }
        this.setSubTotal();
    }
    /** Thêm sản phẩm vô bill detail */
    addInvoiceDetailMutilLine(value) {
        let detail = {
            name: value.name,
            id_payment_card: value.id_payment_card,
            id_payment_card_code: value.id_payment_card_code,
            id_bill: value.id_bill,
            quantity: 1,
            pctype: 1,
            price: value.price,
            products: value.products,
            product_name: value.product_name,
            code: value.code,
            name_payment_card_release: value.name_payment_card_release
        };
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    /** xóa sản phẩm */
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoiceDetail.findIndex((detail) => detail['_id'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            if (!notSetSub)
                this.setSubTotal();
        }
    }
    /** Lấy toàn bộ bill detail */
    getInvoiceDetail() {
        return this.invoiceDetail;
    }
    compareSubTotal() {
        let sub = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
        if (sub == this.subTotal)
            return true;
        else
            return false;
    }
    /******************************create - update - delete invoice / detail *******************************/
    /** Lấy toàn bộ bill dùng để lưu database */
    getCreateUpdateInvoice(bill_type) {
        if (bill_type)
            this.setBillType(bill_type);
        return this.invoice;
    }
    /** Lấy toàn bộ bill detail dùng để lưu database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map((item) => {
            let detail = {
                id_payment_card: item.id_payment_card,
                id_payment_card_code: item.id_payment_card_code,
                quantity: 1,
                pctype: 1,
                ratio: 1,
                price: item.price,
                products: item.products.map(pro => {
                    let data = {
                        id_product: pro.id_product,
                        ptype: pro.ptype,
                        ratio: pro.ratio,
                        quantity: pro.quantity,
                        price: 0,
                    };
                    if (pro.id_subproduct)
                        data['id_subproduct'] = pro.id_subproduct;
                    if (pro.combos) {
                        data['combos'] = pro.combos.map(combo => {
                            let product = {
                                id_product: combo.id_product,
                                price: combo.price,
                                quantity: combo.quantity,
                                ptype: combo.ptype,
                                ratio: combo.ratio ? combo.ratio : 1,
                            };
                            if (combo.id_lotproduct)
                                product['id_lotproduct'] = combo.id_lotproduct;
                            if (combo.id_subproduct)
                                product['id_subproduct'] = combo.id_subproduct;
                            return product;
                        });
                    }
                    return data;
                }),
                code: item.code,
            };
            return detail;
        });
    }
    /**Làm sạch bill detail */
    getCreateItemCleanDetail(cleanedDetail) {
        let detail = {
            products: cleanedDetail.products,
            id_bill: this.invoice._id,
            quantity: cleanedDetail.quantity,
            pctype: cleanedDetail.pctype,
            price: cleanedDetail.price,
            id_payment_card: cleanedDetail.id_payment_card,
            id_payment_card_code: cleanedDetail.id_payment_card_code,
        };
        return detail;
    }
}
class VhSaleInvoicesExchangePaymentCard {
    constructor(invoice = null, invoiceDetail = []) {
        this.date = new Date();
        this.subTotal = 0;
        this.percent_discount_bill = 0;
        this.taxValue = 0;
        this.invoice = {
            date: this.date.toISOString(),
            id_customer: 'id_retail',
            id_branch: null,
            id_employee: null,
            id_wallet: 'id_cash',
            bill_type: 51,
            note: '',
            _id: null,
            bill_code: '',
        };
        this.invoiceDetail = [];
        if (invoice) {
            this.invoice.bill_code = invoice['bill_code']
                ? invoice['bill_code']
                : null;
            this.invoice.id_customer = invoice['id_customer']
                ? invoice['id_customer']
                : 'id_retail';
            this.invoice.id_branch = invoice['id_branch']
                ? invoice['id_branch']
                : null;
            this.invoice.id_employee = invoice['id_employee']
                ? invoice['id_employee']
                : null;
            this.invoice.id_wallet = invoice['id_wallet']
                ? invoice['id_wallet']
                : 'id_cash';
            this.invoice.bill_type = invoice['bill_type']
                ? invoice['bill_type']
                : null;
            this.invoice.date = invoice['date']
                ? invoice['date']
                : this.date.toISOString();
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.invoiceDetail = invoice['invoiceDetail']
                ? invoice['invoiceDetail']
                : [];
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
        }
        if (invoiceDetail) {
            this.invoiceDetail = invoiceDetail;
        }
    }
    /******************************Xu ly invoice *******************************/
    getID() {
        return this.invoice._id;
    }
    getBillType() {
        return this.invoice.bill_type;
    }
    setBillType(value) {
        this.invoice.bill_type = value;
    }
    getDate() {
        return this.invoice.date;
    }
    setDate(value) {
        this.invoice.date = typeof value == 'string' ? value : value.toISOString();
    }
    getBillCode() {
        return this.invoice.bill_code;
    }
    setBillCode(value) {
        this.invoice.bill_code = value;
    }
    getIdPartner() {
        return this.invoice.id_customer;
    }
    setIdPartner(value) {
        this.invoice.id_customer = value;
        // this.getDiscountInvoice();
    }
    getIdEmployee() {
        return this.invoice.id_employee;
    }
    setIdEmployee(value) {
        this.invoice.id_employee = value;
    }
    getIdBranch() {
        return this.invoice.id_branch;
    }
    setIdBranch(value) {
        this.invoice.id_branch = value;
    }
    getIdWallet() {
        return this.invoice.id_wallet;
    }
    setIdWallet(value) {
        this.invoice.id_wallet = value;
    }
    getNote() {
        return this.invoice.note;
    }
    setNote(value) {
        this.invoice.note = value;
    }
    getTaxValue() {
        return this.taxValue;
    }
    getSubTotal() {
        return this.subTotal;
    }
    getPercentDiscountBill() {
        return this.percent_discount_bill;
    }
    getRetailName() {
        return this.invoice.retail_name;
    }
    setRetailName(retail_name) {
        this.invoice.retail_name = retail_name;
    }
    getRetailPhone() {
        return this.invoice.retail_phone;
    }
    setRetailPhone(retail_phone) {
        this.invoice.retail_phone = retail_phone;
    }
    getRetailAddress() {
        return this.invoice.retail_address;
    }
    setRetailAddress(retail_address) {
        this.invoice.retail_address = retail_address;
    }
    getDiscount() {
        return this.invoice.discount;
    }
    setDiscount(value) {
        this.invoice.discount = value;
    }
    getFee() {
        return this.invoice.fee;
    }
    setFee(value) {
        this.invoice.fee = value;
    }
    getTax() {
        return this.invoice.tax;
    }
    setTax(value) {
        this.invoice.tax = value;
    }
    getTotalATax() {
        return 0;
    }
    getPayment() {
        return this.invoice.payment;
    }
    setPayment(value) {
        if (this.invoice.payment_type == 2) {
            this.invoice.payment = 0;
        }
        else {
            if (value != null)
                this.invoice.payment = value;
            else
                this.invoice.payment = this.getTaxValue();
        }
    }
    getPaymentType() {
        return this.invoice.payment_type;
    }
    /** Lấy toàn bộ bill detail */
    getInvoiceDetail() {
        return this.invoiceDetail;
    }
    /******************************create - update - delete invoice / detail *******************************/
    /** Lấy toàn bộ bill dùng để lưu database */
    getCreateUpdateInvoice(bill_type) {
        if (bill_type)
            this.setBillType(bill_type);
        return this.invoice;
    }
    /** Lấy toàn bộ bill detail dùng để lưu database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map((item) => {
            let detail = {
                id_payment_card: item.id_payment_card,
                id_payment_card_code: item.id_payment_card_code,
                quantity: 1,
                pctype: 1,
                ratio: 1,
                price: 0,
                products: item.products.map(pro => {
                    let data = {
                        id_product: pro.id_product,
                        ptype: pro.ptype,
                        ratio: pro.ratio,
                        quantity: pro.quantity,
                        price: 0,
                        outquantity: pro.outquantity,
                        restquantity: pro.restquantity
                    };
                    if (pro.id_lotproduct)
                        data['id_lotproduct'] = pro.id_lotproduct;
                    if (pro.id_subproduct)
                        data['id_subproduct'] = pro.id_subproduct;
                    if (pro.combos) {
                        data['combos'] = pro.combos.map(combo => {
                            let product = {
                                id_product: combo.id_product,
                                price: 0,
                                quantity: combo.quantity,
                                ptype: combo.ptype,
                                ratio: combo.ratio ? combo.ratio : 1,
                            };
                            if (combo.id_lotproduct)
                                product['id_lotproduct'] = combo.id_lotproduct;
                            if (combo.id_subproduct)
                                product['id_subproduct'] = combo.id_subproduct;
                            return product;
                        });
                    }
                    return data;
                }),
                code: item.code,
            };
            return detail;
        });
    }
    /**Làm sạch bill detail */
    getCreateItemCleanDetail(cleanedDetail) {
        let detail = {
            code: cleanedDetail.code,
            id_payment_card: cleanedDetail.id_payment_card,
            id_bill: this.invoice._id,
            products: cleanedDetail.products,
            ptype: cleanedDetail.ptype,
            id_payment_card_code: cleanedDetail.id_payment_card_code,
        };
        return detail;
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_cafe_interface_vh-sale-payment-card-invoice_ts.js.map