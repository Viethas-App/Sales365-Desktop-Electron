"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_interface_vh-quote-receipt_ts"],{

/***/ 37687:
/*!*****************************************************!*\
  !*** ./src/app/sales/interface/vh-quote-receipt.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VhQuoteReceipts": () => (/* binding */ VhQuoteReceipts)
/* harmony export */ });
class VhQuoteReceipts {
    constructor(invoice = null, invoiceDetail = [], warranty = []) {
        this.invoice = {
            payment_type: 1,
            date: (new Date()).toISOString(),
            date_schedule: (new Date(Date.now() + 86400000 * 3)).toISOString(),
            date_reminder: (new Date(Date.now() + 86400000)).toISOString(),
            id_customer: 'id_retail',
            id_technician: null,
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
            _id: null
        };
        this.subTotal = 0;
        this.taxValue = 0;
        this.invoiceDetail = [];
        this.warrantyProd = [];
        this.warrantyNote = [];
        this.warrantyDel = [];
        if (invoice) {
            this.invoice.bill_code = invoice['bill_code'] ? invoice['bill_code'] : null;
            this.invoice.payment_type = invoice['payment_type'] ? invoice['payment_type'] : 1;
            this.invoice.id_customer = invoice['id_customer'] ? invoice['id_customer'] : 'id_retail';
            this.invoice.id_branch = invoice['id_branch'] ? invoice['id_branch'] : null;
            this.invoice.id_employee = invoice['id_employee'] ? invoice['id_employee'] : null;
            this.invoice.id_technician = invoice['id_technician'] ? invoice['id_technician'] : null;
            this.invoice.id_wallet = invoice['id_wallet'] ? invoice['id_wallet'] : 'id_cash';
            this.invoice.total = invoice['total'] ? invoice['total'] : 0;
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
            this.invoice.discount = invoice['discount'] ? invoice['discount'] : 0;
            this.invoice.fee = invoice['fee'] ? invoice['fee'] : 0;
            this.invoice.bill_type = invoice['bill_type'] ? invoice['bill_type'] : null;
            this.invoice.date = invoice['date'] ? invoice['date'] : (new Date()).toISOString();
            this.invoice.date_reminder = invoice['date_reminder'] ? invoice['date_reminder'] : (new Date(Date.now() + 86400000)).toISOString();
            this.invoice.date_schedule = invoice['date_schedule'] ? invoice['date_schedule'] : (new Date(Date.now() + 86400000 * 3)).toISOString();
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.invoiceDetail = invoice['invoiceDetail'] ? invoice['invoiceDetail'] : [];
            this.taxValue = this.invoice.total * (this.invoice.tax / 100);
            if (invoice['id_customer'] == 'id_retail') {
                this.invoice.retail_name = invoice['retail_name'] || '';
                this.invoice.retail_phone = invoice['retail_phone'] || '';
                this.invoice.retail_address = invoice['retail_address'] || '';
            }
        }
        if (invoiceDetail) {
            this.invoiceDetail = invoiceDetail;
            this.subTotal = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
        }
        if (warranty) {
            this.warrantyProd = warranty.filter(item => item.type == 1);
            this.warrantyNote = warranty.filter(item => item.type == 2);
        }
    }
    /******************************Xu ly invoice *******************************/
    getID() {
        return this.invoice._id;
    }
    setID(value) {
        this.invoice._id = value;
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
    getDateSchedule() {
        return this.invoice.date_schedule;
    }
    setDateSchedule(value) {
        this.invoice.date_schedule = typeof (value) == 'string' ? value : value.toISOString();
    }
    getDateReminder() {
        return this.invoice.date_reminder;
    }
    setDateReminder(value) {
        this.invoice.date_reminder = typeof (value) == 'string' ? value : value.toISOString();
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
    }
    getIdEmployee() {
        return this.invoice.id_employee;
    }
    setIdEmployee(value) {
        this.invoice.id_employee = value;
    }
    getIdTechnician() {
        return this.invoice.id_technician;
    }
    setIdTechnician(value) {
        this.invoice.id_technician = value;
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
    /******************************Xu ly invoice detail *******************************/
    /** Thêm sản phẩm vô bill detail */
    addInvoiceDetail(value, new_price) {
        if (value['id_subproduct']) {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
        else {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
    }
    addBill_Detail(value, new_price) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            ptype: value.type,
            unit: value.unit,
            units: value.units ? value.units : [],
            ratio: value.ratio ? value.ratio : 1,
            price: new_price != null ? new_price : value.price,
            price_origin: value.price,
            id_category: value.id_category,
            earning_points_product: value.earning_points_product ? value.earning_points_product : 0,
        };
        if (value.type == 5) {
            detail['cbtype'] = 5;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product,
                        name: item.name,
                        ptype: item.type,
                        price: item.price,
                        quantity: item.quantity,
                        unit: item.unit,
                        units: item.units,
                        ratio: item.ratio ? item.ratio : 1,
                        lots: value.lots ? value.lots : [],
                        id_lotproduct: value.id_lotproduct,
                    };
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            detail['id_subproduct'] = value.id_subproduct;
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    addBill_detail_promotion(value) {
        this.invoiceDetail.push(value);
    }
    /** Thêm sản phẩm vào bill detail */
    addInvoiceDetailMutilLine(value, new_price) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            ptype: value.type,
            unit: value.unit,
            units: value.units ? value.units : [],
            ratio: value.ratio ? value.ratio : 1,
            price: new_price != null ? new_price : value.price,
            price_origin: value.price,
            id_category: value.id_category,
            earning_points_product: value.earning_points_product ? value.earning_points_product : 0,
        };
        if (value.type == 5) {
            detail['cbtype'] = 5;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product,
                        name: item.name,
                        ptype: item.type,
                        price: item.price,
                        quantity: item.quantity,
                        unit: item.unit,
                        units: item.units,
                        ratio: item.ratio ? item.ratio : 1,
                        lots: value.lots ? value.lots : [],
                        id_lotproduct: value.id_lotproduct,
                    };
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            detail['id_subproduct'] = value.id_subproduct;
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    removeInvoiceDetail(id) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }
    }
    getInvoiceDetail() {
        return this.invoiceDetail;
    }
    /******************************Xu ly warranty note *******************************/
    addWarrantyProd() {
        const add = () => {
            let item = { content: '', quantity: 1, type: 1, id_bill: this.invoice._id };
            if (this.getID())
                item['id_bill'] = this.getID();
            this.warrantyProd.unshift(item);
        };
        if (this.warrantyProd.length) {
            if (this.warrantyProd[0].content)
                add();
        }
        else
            add();
    }
    removeWarrantyProd(index, item) {
        if (index == 0) {
            if (this.warrantyProd.length > 1)
                this.warrantyProd.splice(index, 1);
            else if (this.warrantyProd[index].content.length)
                this.warrantyProd[0].content = '';
        }
        else
            this.warrantyProd.splice(index, 1);
        if (item._id)
            this.warrantyDel.push(item);
    }
    addWarrantyNote() {
        const add = () => {
            let item = { content: '', type: 2, id_bill: this.invoice._id };
            if (this.getID())
                item['id_bill'] = this.getID();
            this.warrantyNote.unshift(item);
        };
        if (this.warrantyNote.length) {
            if (this.warrantyNote[0].content)
                add();
        }
        else
            add();
    }
    removeWarrantyNote(index, item) {
        if (index == 0) {
            if (this.warrantyNote.length > 1)
                this.warrantyNote.splice(index, 1);
            else if (this.warrantyNote[index].content.length)
                this.warrantyNote[0].content = '';
        }
        else
            this.warrantyNote.splice(index, 1);
        if (item._id)
            this.warrantyDel.push(item);
    }
    getWarrantyProd() {
        return this.warrantyProd;
    }
    getWarrantyNote() {
        return this.warrantyNote;
    }
    getWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => item.content);
    }
    getDelWarranty() {
        return this.warrantyDel;
    }
    getUpdateWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => item.content && item._id);
    }
    getCreateWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => {
            if (!item.id_bill)
                item.id_bill = this.getID();
            if (item.content && !item._id)
                return true;
            else
                return false;
        });
    }
    getInvoiceDetailCombos(idDetail) {
        let detailBill = this.invoiceDetail.find(detail => detail._id == idDetail);
        return detailBill ? detailBill.combos : null;
    }
    /******************************create - update - delete invoice / detail *******************************/
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.setBillType(bill_type);
        return this.invoice;
    }
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            if (!item.pmtype) {
                let detail = {
                    id_product: item.id_product,
                    ptype: item.ptype,
                    price: item.price,
                    quantity: item.quantity,
                    earning_points_product: item.earning_points_product,
                    ratio: item.ratio,
                };
                if (item.id_lotproduct)
                    detail['id_lotproduct'] = item.id_lotproduct;
                if (item.id_subproduct)
                    detail['id_subproduct'] = item.id_subproduct;
                if (item.price < item.price_origin)
                    detail['price_origin'] = item.price_origin;
                if (item.price == item.price_origin)
                    detail['price_origin'] = item.price;
                if (item.ptype == 5) {
                    detail['combos'] = item.combos.map(combo => {
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
                return detail;
            }
            else {
                let detail = {
                    id_promotion: item.id_promotion,
                    pmtype: item.pmtype,
                };
                if (item.products_gift) {
                    if (item.products_gift.filter(ele => ele.choose).length) {
                        detail['products_gift'] = item.products_gift.filter(ele => ele.choose).map(e => {
                            let prod = {
                                id_product: e.id_product,
                                price: e.price,
                                price_origin: e.price_origin,
                                quantity: e.quantity,
                                ptype: e.ptype,
                                earning_points_product: e.earning_points_product,
                                ratio: e.ratio
                            };
                            if (e.ptype == 5) {
                                prod['combos'] = e.combos.map(combo => {
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
                            if (e.id_lotproduct)
                                prod['id_lotproduct'] = e.id_lotproduct;
                            if (e.id_subproduct)
                                prod['id_subproduct'] = e.id_subproduct;
                            return prod;
                        });
                        return detail;
                    }
                }
                else {
                    detail['products'] = item.products.map(e => {
                        let prod = {
                            id_product: e.id_product,
                            price: e.price,
                            price_origin: e.price_origin,
                            quantity: e.quantity,
                            ptype: e.ptype,
                            id_category: e.id_category,
                            earning_points_product: e.earning_points_product,
                            ratio: e.ratio
                        };
                        if (e.ptype == 5) {
                            prod['combos'] = e.combos.map(combo => {
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
                        if (e.id_lotproduct)
                            prod['id_lotproduct'] = e.id_lotproduct;
                        if (e.id_subproduct)
                            prod['id_subproduct'] = e.id_subproduct;
                        return prod;
                    });
                    return detail;
                }
            }
        }).filter(item => item);
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_sales_interface_vh-quote-receipt_ts.js.map