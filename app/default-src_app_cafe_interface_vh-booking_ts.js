"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_cafe_interface_vh-booking_ts"],{

/***/ 97059:
/*!**********************************************!*\
  !*** ./src/app/cafe/interface/vh-booking.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VhBookingInvoices": () => (/* binding */ VhBookingInvoices)
/* harmony export */ });
class VhBookingInvoices {
    constructor(invoice = null, invoiceDetail = []) {
        this.invoice = {
            payment_type: 1,
            date: new Date().toISOString(),
            id_customer: 'id_retail',
            tax_buyerDisplayName: 'Người mua không lấy hoá đơn',
            tax_buyerLegalName: '',
            tax_buyerTaxCode: '',
            tax_buyerAddressLine: '',
            tax_buyerEmail: '',
            id_table: 'go_home',
            id_area: null,
            id_branch: null,
            id_employee: null,
            total: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            bill_type: null,
            note: '',
            id_wallet: 'id_cash',
            price_type: 1,
            cash: 0,
        };
        this.subTotal = 0;
        this.taxValue = 0;
        this.invoiceDetail = [];
        if (invoice) {
            if (invoice['_id'])
                this.invoice.bill_code = invoice['bill_code']
                    ? invoice['bill_code']
                    : null;
            this.invoice.id_customer = invoice['id_customer']
                ? invoice['id_customer']
                : 'id_retail';
            this.invoice.tax_buyerDisplayName = invoice['tax_buyerDisplayName'] ? invoice['tax_buyerDisplayName'] : '';
            this.invoice.tax_buyerLegalName = invoice['tax_buyerLegalName'] ? invoice['tax_buyerLegalName'] : '';
            this.invoice.tax_buyerTaxCode = invoice['tax_buyerTaxCode'] ? invoice['tax_buyerTaxCode'] : '';
            this.invoice.tax_buyerAddressLine = invoice['tax_buyerAddressLine'] ? invoice['tax_buyerAddressLine'] : '';
            this.invoice.tax_buyerEmail = invoice['tax_buyerEmail'] ? invoice['tax_buyerEmail'] : '';
            this.invoice.id_employee = invoice['id_employee']
                ? invoice['id_employee']
                : null;
            this.invoice.id_branch = invoice['id_branch']
                ? invoice['id_branch']
                : null;
            this.invoice.id_table = invoice['id_table'] ? invoice['id_table'] : null;
            this.invoice.id_area = invoice['id_area'] ? invoice['id_area'] : null;
            this.invoice.total = invoice['total'] ? invoice['total'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
            this.invoice.discount = invoice['discount'] ? invoice['discount'] : 0;
            this.invoice.fee = invoice['fee'] ? invoice['fee'] : 0;
            this.invoice.price_type = invoice['price_type']
                ? invoice['price_type']
                : 1;
            this.invoice.bill_type = invoice['bill_type']
                ? invoice['bill_type']
                : null;
            this.invoice.date = invoice['date']
                ? invoice['date']
                : new Date().toISOString();
            this.invoice.cash = invoice['cash'] ? invoice['cash'] : 0;
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            if (invoice['_id'])
                this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.taxValue = this.invoice.total * (this.invoice.tax / 100);
            if (invoice['id_customer'] == 'id_retail') {
                this.invoice.retail_name = invoice['retail_name'] || '';
                this.invoice.retail_phone = invoice['retail_phone'] || '';
                this.invoice.retail_address = invoice['retail_address'] || '';
            }
        }
        if (invoiceDetail) {
            this.invoiceDetail = invoiceDetail;
            this.subTotal = this.invoiceDetail.reduce((prev, next) => {
                let total = prev + next.quantity * next.price;
                if (next.toppings)
                    total += next.toppings.reduce((prevTopping, nextTopping) => prevTopping + nextTopping.quantity * nextTopping.price, 0);
                return total;
            }, 0);
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
        this.invoice.date = value;
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
    }
    getTaxBuyerDisplayName() {
        return this.invoice.tax_buyerDisplayName;
    }
    setTaxBuyerDisplayName(value) {
        this.invoice.tax_buyerDisplayName = value;
    }
    getTaxBuyerLegalName() {
        return this.invoice.tax_buyerLegalName;
    }
    setTaxBuyerLegalName(value) {
        this.invoice.tax_buyerLegalName = value;
    }
    getTaxBuyerTaxCode() {
        return this.invoice.tax_buyerTaxCode;
    }
    setTaxBuyerTaxCode(value) {
        this.invoice.tax_buyerTaxCode = value;
    }
    getTaxBuyerAddressLine() {
        return this.invoice.tax_buyerAddressLine;
    }
    setTaxBuyerAddressLine(value) {
        this.invoice.tax_buyerAddressLine = value;
    }
    getTaxBuyerEmail() {
        return this.invoice.tax_buyerEmail;
    }
    setTaxBuyerEmail(value) {
        this.invoice.tax_buyerEmail = value;
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
    getIdTable() {
        return this.invoice.id_table;
    }
    setIdTable(value) {
        this.invoice.id_table = value;
    }
    getIdArea() {
        return this.invoice.id_area;
    }
    setIdArea(value) {
        this.invoice.id_area = value;
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
    getSubTotal() {
        return this.subTotal;
    }
    setSubTotal() {
        this.subTotal = this.invoiceDetail.reduce((prev, next) => {
            let total = prev + next.quantity * next.price;
            if (next.toppings)
                total += next.toppings.reduce((prevTopping, nextTopping) => prevTopping + nextTopping.quantity * nextTopping.price, 0);
            return total;
        }, 0);
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
    getIdWallet() {
        return this.invoice.id_wallet;
    }
    setIdWallet(value) {
        this.invoice.id_wallet = value;
    }
    getPriceType() {
        return this.invoice.price_type;
    }
    setPriceType(price_type) {
        this.invoice.price_type = price_type;
    }
    /******************************Xu ly invoice detail *******************************/
    /**Đưa sản phẩm vô danh sách bill detail */
    addInvoiceDetail(value) {
        value['id_product'] = value['_id'];
        if (value['id_subproduct']) {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex((detail) => detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += value['quantity'];
                }
                else {
                    this.invoiceDetail.push(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex((detail) => detail['id_subproduct'] == value['id_subproduct'] &&
                    detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += value['quantity'];
                }
                else {
                    this.invoiceDetail.push(value);
                }
            }
        }
        else {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex((detail) => detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += value['quantity'];
                }
                else {
                    this.invoiceDetail.push(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex((detail) => detail['id_product'] == value['_id'] &&
                    detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += value['quantity'];
                }
                else {
                    this.invoiceDetail.push(value);
                }
            }
        }
        this.setSubTotal();
    }
    addInvoiceDetailMutilLine(value) {
        this.invoiceDetail.push(value);
        this.setSubTotal();
    }
    /** Xóa sản phẩm khỏi danh sách bill detail */
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoiceDetail.findIndex((detail) => detail['id_product'] == id || detail['id_subproduct'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            if (!notSetSub)
                this.setSubTotal();
        }
    }
    /** Lấy danh sách toàn bộ bill detail */
    getInvoiceDetail() {
        return this.invoiceDetail;
    }
    /** Lấy toàn bộ topping trong 1 bill detail */
    getInvoiceDetailToppings(idDetail) {
        let detailBill = this.invoiceDetail.find((detail) => detail._id == idDetail);
        return detailBill ? detailBill.toppings : null;
    }
    /**Lấy toàn bộ combo trong 1 bill detail */
    getInvoiceDetailCombos(idDetail) {
        let detailBill = this.invoiceDetail.find((detail) => detail._id == idDetail);
        return detailBill ? detailBill.combos : null;
    }
    /******************************create - update - delete invoice / detail *******************************/
    /** Hàm lấy collection bill dùng để đưa vô database */
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.setBillType(bill_type);
        return this.invoice;
    }
    /** Hàm lấy collection bill details dùng để đưa vô database */
    getCreateUpdateInvoiceDetail(toOrder = false) {
        console.log(this.invoiceDetail);
        return this.invoiceDetail.map((item) => {
            let detail = {
                id_product: item.id_product ? item.id_product : item._id,
                price: item.price,
                price_origin: item.price_origin,
                quantity: item.quantity,
                ptype: item.ptype ? item.ptype : item.type,
                note: item.note,
                ratio: item.ratio,
            };
            // xét điều kiện phụ
            if (detail.ptype == 5) {
                detail['combos'] = item.combos.map((combo) => {
                    let product = {
                        id_product: combo.id_product,
                        id_category: combo.id_category,
                        price: combo.price,
                        quantity: combo.quantity,
                        ptype: combo.ptype,
                        ratio: combo.ratio,
                    };
                    if (combo.id_subproduct)
                        product['id_subproduct'] = combo.id_subproduct;
                    return product;
                });
            }
            if (detail.ptype == 1) {
                if (item.toppings)
                    detail['toppings'] = [
                        ...item.toppings.map((item) => {
                            return {
                                id_product: item.id_product,
                                id_category: item.id_category,
                                price: item.price,
                                price_origin: item.price_origin,
                                quantity: item.quantity,
                                unit: item.unit,
                                units: item.units,
                                ratio: item.ratio,
                            };
                        }),
                    ];
                if (item.properties)
                    detail['properties'] = [
                        ...item.properties.map((item) => {
                            return {
                                name: item.name,
                                value: [...item.value],
                                selectedValue: item.selectedValue,
                            };
                        }),
                    ];
            }
            if (toOrder) {
                detail['dispatcher_done'] = false;
                detail['time_start_order'] = new Date().toISOString();
            }
            if (item.id_subproduct)
                detail['id_subproduct'] = item.id_subproduct;
            return detail;
        });
    }
    /**Tạo bill detail từ sản phẩm */
    getCreateItemDetail(food, subItem, dispatcher_done) {
        let detail = {
            id_bill: this.invoice._id,
            id_product: food.id_product ? food.id_product : food._id,
            name: food.name,
            quantity: food.quantity,
            ptype: food.ptype,
            price: food.price,
            dispatcher_done: dispatcher_done ? dispatcher_done : false,
            time_start_order: new Date().toISOString(),
            note: food.note,
            price_origin: food.price,
            ratio: food.ratio,
            units: food.units,
        };
        if (food.id_lotproduct)
            detail['id_lotproduct'] = food.id_lotproduct;
        if (food.id_subproduct)
            detail['id_subproduct'] = food.id_subproduct;
        if (detail.ptype == 1) {
            if (food.properties && food.properties.length)
                detail['properties'] = [
                    ...food.properties.map((item) => {
                        return Object.assign(Object.assign({}, item), { value: [...item.value] });
                    }),
                ];
            if (food.toppings && food.toppings.length)
                detail['toppings'] = [
                    ...food.toppings
                        .filter((item) => item.quantity)
                        .map((topping) => {
                        return {
                            id_product: topping.id_product,
                            ptype: 4,
                            price: topping.price,
                            price_origin: topping.price_origin,
                            quantity: topping.quantity,
                            units: topping.units,
                            name: topping.name,
                            unit: topping.unit,
                            ratio: topping.ratio,
                        };
                    }),
                ];
        }
        if (detail.ptype == 5) {
            detail['subComboName'] = food.subComboName;
            detail['combos'] = [
                ...food.combos.map((item) => {
                    let product = {
                        id_product: item.id_product,
                        name: item.name,
                        ptype: item.type,
                        ratio: item.ratio,
                        price: item.price,
                        quantity: item.quantity,
                        units: item.units,
                        id_category: item.id_category,
                        unit: item.unit,
                    };
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.lots)
                        product['lots'] = item.lots;
                    return product;
                }),
            ];
        }
        return detail;
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_cafe_interface_vh-booking_ts.js.map