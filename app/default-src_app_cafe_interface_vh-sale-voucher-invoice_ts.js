"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_cafe_interface_vh-sale-voucher-invoice_ts"],{

/***/ 10297:
/*!***********************************************************!*\
  !*** ./src/app/cafe/interface/vh-sale-voucher-invoice.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VhSaleVoucherInvoices": () => (/* binding */ VhSaleVoucherInvoices),
/* harmony export */   "VhSaleExchangeVoucherInvoices": () => (/* binding */ VhSaleExchangeVoucherInvoices)
/* harmony export */ });
class VhSaleVoucherInvoices {
    constructor(invoice = null, invoiceDetail = []) {
        this.date = new Date();
        this.subTotal = 0;
        this.taxValue = 0;
        this.percent_discount_bill = 0;
        this.invoice = {
            payment_type: 1,
            date: this.date.toISOString(),
            id_customer: 'id_retail',
            id_delivery: '',
            id_branch: null,
            id_employee: null,
            id_wallet: 'id_cash',
            total: 0,
            payment: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            bill_type: null,
            note: '',
            _id: null,
            cash: 0,
            price_type: 1,
            bill_code: ''
        };
        this.invoiceDetail = [];
        if (invoice) {
            this.invoice.bill_code = invoice['bill_code'] ? invoice['bill_code'] : null;
            this.invoice.payment_type = invoice['payment_type'] ? invoice['payment_type'] : 1;
            this.invoice.id_customer = invoice['id_customer'] ? invoice['id_customer'] : 'id_retail';
            this.invoice.id_branch = invoice['id_branch'] ? invoice['id_branch'] : null;
            this.invoice.id_employee = invoice['id_employee'] ? invoice['id_employee'] : null;
            this.invoice.id_wallet = invoice['id_wallet'] ? invoice['id_wallet'] : 'id_cash';
            this.invoice.total = invoice['total'] ? invoice['total'] : 0;
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
            this.invoice.discount = invoice['discount'] ? invoice['discount'] : 0;
            this.invoice.fee = invoice['fee'] ? invoice['fee'] : 0;
            this.invoice.bill_type = invoice['bill_type'] ? invoice['bill_type'] : null;
            this.invoice.cash = invoice['cash'] ? invoice['cash'] : 0;
            this.invoice.date = invoice['date'] ? invoice['date'] : this.date.toISOString();
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.invoiceDetail = invoice['invoiceDetail'] ? invoice['invoiceDetail'] : [];
            this.invoice.id_delivery = invoice['id_delivery'] ? invoice['id_delivery'] : '';
            this.invoice.price_type = invoice['price_type'] ? invoice['price_type'] : 1;
            if (invoice['order_code']) {
                this.invoice.order_code = invoice['order_code'];
            }
            if (invoice['order_number_ecommerce'])
                this.invoice.order_number_ecommerce = invoice['order_number_ecommerce'];
            if (invoice['id_shop'])
                this.invoice.id_shop = invoice['id_shop'];
            this.taxValue = this.invoice.total * (this.invoice.tax / 100);
            if (invoice['id_customer'] == 'id_retail') {
                this.invoice.retail_name = invoice['retail_name'] || '';
                this.invoice.retail_phone = invoice['retail_phone'] || '';
                this.invoice.retail_address = invoice['retail_address'] || '';
            }
        }
        if (invoiceDetail) {
            this.invoiceDetail = invoiceDetail;
            this.subTotal = this.invoiceDetail.reduce((prev, next) => prev + 1 * next.price, 0);
            this.percent_discount_bill = this.subTotal ? (this.invoice.discount / this.subTotal) * 100 : 0;
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
        this.invoice.date = typeof (value) == 'string' ? value : value.toISOString();
    }
    getBillCode() {
        return this.invoice.bill_code;
    }
    setBillCode(value) {
        this.invoice.bill_code = value;
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
    getIdDelivery() {
        return this.invoice.id_delivery;
    }
    setIdDelivery(value) {
        this.invoice.id_delivery = value;
    }
    getOrderCode() {
        return this.invoice.order_code;
    }
    setOrderCode(value) {
        this.invoice.order_code = value;
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
        this.subTotal = this.invoiceDetail.reduce((prev, next) => prev + 1 * next.price, 0);
        this.setTotal();
    }
    getTotal() {
        return this.invoice.total;
    }
    setTotal() {
        this.invoice.total = this.getSubTotal() - this.getDiscount() + this.getFee();
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
        this.setCash(this.invoice.cash);
    }
    getCash() {
        return this.invoice.cash;
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
    getExcessCash() {
        return this.invoice.cash - this.getPayment() > 0 ? this.invoice.cash - this.getPayment() : 0;
    }
    getPriceType() {
        return this.invoice.price_type;
    }
    setPriceType(price_type) {
        this.invoice.price_type = price_type;
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
    /**
    * set lại giá trị percent_discount_bill khi nhập từ input giảm giá trường hợp giảm theo %
    * @param value
    */
    setPercentDiscountBill(value) {
        this.percent_discount_bill = parseFloat(value) <= 100 && parseFloat(value) ? parseFloat(value) : 0;
        this.setDiscount(this.getSubTotal() * (this.percent_discount_bill / 100));
    }
    getPercentDiscountBill() {
        return this.percent_discount_bill;
    }
    /******************************Xu ly invoice detail *******************************/
    /** Thêm sản phẩm vô bill detail */
    addInvoiceDetail(value) {
        let detail = {
            id_voucher_code: value.id_voucher_code,
            name: value.name,
            id_voucher: value.id_voucher,
            code: value.code,
            id_bill: value.id_bill,
            vtype: 1,
            price: value.price,
            products: value.products,
            name_voucher_release: value.name_voucher_release
        };
        this.invoiceDetail.push(detail);
        this.setSubTotal();
    }
    /** Thêm sản phẩm vô bill detail */
    addInvoiceDetailMutilLine(value) {
        let detail = {
            id_voucher_code: value.id_voucher_code,
            name: value.name,
            id_voucher: value.id_voucher,
            code: value.code,
            id_bill: value.id_bill,
            vtype: 1,
            price: value.price,
            products: value.products,
            name_voucher_release: value.name_voucher_release
        };
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    /** Thêm sản phẩm vô bill detail đã tạo*/
    addInvoiceDetailDB(value, id_billDetail) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id']);
        if (index != -1) {
            if (this.invoiceDetail[index]['quantity'] < 9999999999)
                this.invoiceDetail[index]['quantity'] += 1;
        }
        else {
            let detail = {
                id_voucher_code: value.id_voucher_code,
                name: value.name,
                id_voucher: value.id_voucher,
                code: value.code,
                id_bill: value.id_bill,
                vtype: 1,
                price: value.price,
                products: value.products
            };
            this.invoiceDetail.unshift(detail);
        }
        this.setSubTotal();
    }
    /** Thêm sản phẩm vô bill detail đã tạo*/
    addInvoiceDetailDBMutilLine(value, id_billDetail) {
        let detail = {
            id_voucher_code: value.id_voucher_code,
            name: value.name,
            id_voucher: value.id_voucher,
            code: value.code,
            id_bill: value.id_bill,
            vtype: 1,
            price: value.price,
            products: value.products
        };
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    /** xóa sản phẩm */
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoiceDetail.findIndex(detail => detail.id_voucher_code == id);
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
        let sub = this.invoiceDetail.reduce((prev, next) => prev + 1 * next.price, 0);
        if (sub == this.subTotal)
            return true;
        else
            return false;
    }
    /******************************create - update - delete invoice / detail *******************************/
    /** Lấy toàn bộ bill dùng để lưu database */
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.setBillType(bill_type);
        return this.invoice;
    }
    /** Lấy toàn bộ bill detail dùng để lưu database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            let detail = {
                id_voucher_code: item.id_voucher_code,
                id_voucher: item.id_voucher,
                code: item.code,
                id_bill: item.id_bill,
                vtype: 1,
                ratio: 1,
                quantity: 1,
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
            };
            return detail;
        });
    }
    /**Làm sạch bill detail */
    getCreateItemCleanDetail(cleanedDetail) {
        let detail = {
            id_voucher_code: cleanedDetail.id_voucher_code,
            id_bill: this.invoice._id,
            vtype: cleanedDetail.vtype,
            price: cleanedDetail.price,
            id_voucher: cleanedDetail.id_voucher,
            code: cleanedDetail.code,
            products: cleanedDetail.products
        };
        return detail;
    }
}
class VhSaleExchangeVoucherInvoices {
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
            bill_type: 41,
            note: '',
            bill_code: '',
            _id: null,
            payment_type: 1,
            discount: 0,
            fee: 0,
            tax: 0,
            payment: 0,
        };
        this.invoiceDetail = [];
        if (invoice) {
            this.invoice.bill_code = invoice['bill_code'] ? invoice['bill_code'] : null;
            this.invoice.id_customer = invoice['id_customer'] ? invoice['id_customer'] : 'id_retail';
            this.invoice.id_branch = invoice['id_branch'] ? invoice['id_branch'] : null;
            this.invoice.id_employee = invoice['id_employee'] ? invoice['id_employee'] : null;
            this.invoice.id_wallet = invoice['id_wallet'] ? invoice['id_wallet'] : 'id_cash';
            this.invoice.bill_type = invoice['bill_type'] ? invoice['bill_type'] : null;
            this.invoice.date = invoice['date'] ? invoice['date'] : this.date.toISOString();
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.invoiceDetail = invoice['invoiceDetail'] ? invoice['invoiceDetail'] : [];
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
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
        return 41;
    }
    setBillType(value) {
        this.invoice.bill_type = value;
    }
    getDate() {
        return this.invoice.date;
    }
    setDate(value) {
        this.invoice.date = typeof (value) == 'string' ? value : value.toISOString();
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
        return this.getTaxValue();
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
    /******************************Xu ly invoice detail *******************************/
    /** Thêm sản phẩm vô bill detail */
    addInvoiceDetail(value) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id']);
        if (index != -1) {
            if (this.invoiceDetail[index]['quantity'] < 9999999999)
                this.invoiceDetail[index]['quantity'] += 1;
        }
        else {
            let detail = {
                id_voucher: value.id_voucher,
                id_voucher_code: value.id_voucher_code,
                code: value.code,
                id_bill: value.id_bill,
                vtype: 1,
                name: value.name,
                products: [...value.products.map(item => {
                        let product = {
                            id_product: item.id_product,
                            ptype: item.type,
                            price: 0,
                            quantity: item.quantity,
                            name: item.name
                        };
                        return product;
                    })]
            };
            this.invoiceDetail.push(detail);
        }
    }
    /** Thêm sản phẩm vô bill detail */
    addInvoiceDetailMutilLine(value) {
        let detail = {
            id_voucher: value.id_voucher,
            id_voucher_code: value.id_voucher_code,
            code: value.code,
            id_bill: value.id_bill,
            vtype: 1,
            products: [...value.products.map(item => {
                    let product = Object.assign(Object.assign({}, item), { id_product: item.id_product, ptype: item.type, price: 0, quantity: item.quantity, name: item.name });
                    return product;
                })]
        };
        this.invoiceDetail.unshift(detail);
    }
    /** Thêm sản phẩm vô bill detail đã tạo*/
    addInvoiceDetailDB(value, id_billDetail) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id']);
        if (index != -1) {
            if (this.invoiceDetail[index]['quantity'] < 9999999999)
                this.invoiceDetail[index]['quantity'] += 1;
        }
        else {
            let detail = {
                id_voucher: value.id_voucher,
                id_voucher_code: value.id_voucher_code,
                code: value.code,
                id_bill: value.id_bill,
                vtype: 1,
                _id: id_billDetail,
                products: [...value.products.map(item => {
                        let product = Object.assign(Object.assign({}, item), { id_product: item.id_product, ptype: item.type, price: 0, quantity: item.quantity, name: item.name });
                        return product;
                    })]
            };
            this.invoiceDetail.unshift(detail);
        }
    }
    /** Thêm sản phẩm vô bill detail đã tạo*/
    addInvoiceDetailDBMutilLine(value, id_billDetail) {
        let detail = {
            id_voucher: value.id_voucher,
            id_voucher_code: value.id_voucher_code,
            code: value.code,
            id_bill: value.id_bill,
            vtype: 1,
            _id: id_billDetail,
            products: [...value.products.map(item => {
                    let product = Object.assign(Object.assign({}, item), { id_product: item.id_product, ptype: item.ptype, price: 0, quantity: item.quantity, name: item.name });
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.combos)
                        product['combos'] = item.combos;
                    return product;
                })]
        };
        this.invoiceDetail.unshift(detail);
    }
    /** xóa sản phẩm */
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_voucher'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
        }
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
        return this.invoiceDetail.map(item => {
            let detail = {
                id_voucher: item.id_voucher,
                id_voucher_code: item.id_voucher_code,
                code: item.code,
                id_bill: item.id_bill,
                vtype: 1,
                products: [...item.products.map(item => {
                        let product = {
                            id_product: item.id_product,
                            ptype: item.ptype,
                            price: 0,
                            ratio: item.ratio,
                            quantity: item.quantity,
                        };
                        if (item.id_subproduct)
                            product['id_subproduct'] = item.id_subproduct;
                        if (item.id_lotproduct)
                            product['id_lotproduct'] = item.id_lotproduct;
                        if (item.ptype == 5) {
                            product['combos'] = item.combos.map(combo => {
                                let e = {
                                    id_product: combo.id_product,
                                    price: combo.price,
                                    quantity: combo.quantity,
                                    ptype: combo.type,
                                    ratio: combo.ratio ? combo.ratio : 1,
                                };
                                if (combo.id_lotproduct)
                                    e['id_lotproduct'] = combo.id_lotproduct;
                                if (combo.id_subproduct)
                                    e['id_subproduct'] = combo.id_subproduct;
                                return e;
                            });
                        }
                        return product;
                    })]
            };
            return detail;
        });
    }
    /**Làm sạch bill detail */
    getCreateItemCleanDetail(cleanedDetail) {
        let detail = {
            id_bill: this.invoice._id,
            vtype: cleanedDetail.vtype,
            id_voucher: cleanedDetail.id_voucher,
            id_voucher_code: cleanedDetail.id_voucher_code,
            code: cleanedDetail.code,
            products: cleanedDetail.products,
            name: cleanedDetail.name
        };
        return detail;
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_cafe_interface_vh-sale-voucher-invoice_ts.js.map