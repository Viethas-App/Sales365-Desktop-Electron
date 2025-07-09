"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_cafe_interface_vh-order-invoice_ts"],{

/***/ 25500:
/*!****************************************************!*\
  !*** ./src/app/cafe/interface/vh-order-invoice.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VhOrderInvoices": () => (/* binding */ VhOrderInvoices)
/* harmony export */ });
/* harmony import */ var _vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vh-type */ 162);

class VhOrderInvoices {
    constructor(invoice = null, invoiceDetail = [], vhQueryCafe, plaform) {
        this.vhQueryCafe = vhQueryCafe;
        this.plaform = plaform;
        this.invoice = {
            payment_type: 1,
            date: new Date().toISOString(),
            id_customer: 'id_retail',
            id_table: 'go_home',
            id_area: null,
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
            cash: 0,
            price_type: 1,
            is_promotion: false,
            cqt_status: 1,
        };
        this.subTotal = 0;
        this.taxValue = 0;
        this.percent_discount_bill = 0;
        this.invoiceDetail = [];
        this.plaform = plaform;
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
            this.invoice.tax_buyerDisplayName = invoice['tax_buyerDisplayName'] ? invoice['tax_buyerDisplayName'] : '';
            this.invoice.tax_buyerLegalName = invoice['tax_buyerLegalName'] ? invoice['tax_buyerLegalName'] : '';
            this.invoice.tax_buyerTaxCode = invoice['tax_buyerTaxCode'] ? invoice['tax_buyerTaxCode'] : '';
            this.invoice.tax_buyerAddressLine = invoice['tax_buyerAddressLine'] ? invoice['tax_buyerAddressLine'] : '';
            this.invoice.tax_buyerEmail = invoice['tax_buyerEmail'] ? invoice['tax_buyerEmail'] : '';
            this.invoice.id_employee = invoice['id_employee']
                ? invoice['id_employee']
                : null;
            this.invoice.id_wallet = invoice['id_wallet']
                ? invoice['id_wallet']
                : 'id_cash';
            this.invoice.id_branch = invoice['id_branch']
                ? invoice['id_branch']
                : null;
            this.invoice.id_table = invoice['id_table'] ? invoice['id_table'] : null;
            this.invoice.id_area = invoice['id_area'] ? invoice['id_area'] : null;
            this.invoice.price_type = invoice['price_type']
                ? invoice['price_type']
                : 1;
            this.invoice.total = invoice['total'] ? invoice['total'] : 0;
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
            this.invoice.discount = invoice['discount'] ? invoice['discount'] : 0;
            this.invoice.discount_bill = invoice['discount_bill']
                ? invoice['discount_bill']
                : 0;
            this.invoice.payment_points = invoice['payment_points']
                ? invoice['payment_points']
                : 0;
            this.invoice.payment_coupons = invoice['payment_coupons']
                ? invoice['payment_coupons']
                : 0;
            this.invoice.earning_points_bill = invoice['earning_points_bill']
                ? invoice['earning_points_bill']
                : 0;
            this.invoice.use_points = invoice['use_points']
                ? invoice['use_points']
                : 0;
            this.invoice.coupon_codes = invoice['coupon_codes']
                ? invoice['coupon_codes']
                : [];
            this.invoice.fee = invoice['fee'] ? invoice['fee'] : 0;
            this.invoice.bill_type = invoice['bill_type']
                ? invoice['bill_type']
                : null;
            this.invoice.cash = invoice['cash'] ? invoice['cash'] : 0;
            this.invoice.date = invoice['date']
                ? invoice['date']
                : new Date().toISOString();
            this.invoice.note = invoice['note'] ? invoice['note'] : '';
            this.invoice._id = invoice['_id'] ? invoice['_id'] : null;
            this.invoice.is_promotion = invoice['is_promotion']
                ? invoice['is_promotion']
                : false;
            this.taxValue = this.invoice.total * (this.invoice.tax / 100);
            if (invoice['id_customer'] == 'id_retail') {
                this.invoice.retail_name = invoice['retail_name'] || '';
                this.invoice.retail_phone = invoice['retail_phone'] || '';
                this.invoice.retail_address = invoice['retail_address'] || '';
            }
            if (invoice['cqt_status'] !== undefined)
                this.invoice.cqt_status = invoice['cqt_status'];
            if (invoice['cqt_invoice_code'] !== undefined)
                this.invoice.cqt_invoice_code = invoice['cqt_invoice_code'];
        }
        else {
            this.invoice.discount_bill = 0;
            this.invoice.payment_points = 0;
            this.invoice.payment_coupons = 0;
            this.invoice.use_points = 0;
            this.invoice.earning_points_bill = 0;
        }
        if (invoiceDetail) {
            this.invoiceDetail = invoiceDetail;
            let subTotal = 0;
            for (let i of this.invoiceDetail) {
                let total_product_gift = 0;
                let total_products = 0;
                if (i.products_gift) {
                    total_product_gift = i.products_gift
                        .filter((item) => item.choose)
                        .reduce((prev, next) => prev + next.quantity * next.price, 0);
                    i.products_gift.forEach((element) => {
                        if (element.toppings)
                            total_product_gift += element.toppings.reduce((prev, next) => prev + next.quantity * next.price, 0);
                    });
                }
                else if (i.products) {
                    total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
                    i.products.forEach((element) => {
                        if (element.toppings)
                            total_product_gift += element.toppings.reduce((prev, next) => prev + next.quantity * next.price, 0);
                    });
                }
                if (i.toppings)
                    subTotal += i.toppings.reduce((prevTopping, nextTopping) => prevTopping + nextTopping.quantity * nextTopping.price, 0);
                subTotal +=
                    total_products +
                        total_product_gift +
                        (i.price ? i.price * i.quantity : 0);
            }
            this.subTotal = subTotal;
            // this.subTotal = this.invoiceDetail.reduce((prev: number, next: VhOrderInvoiceDetail) => {
            //     let total = prev + next.quantity * next.price
            //     if (next.toppings)
            //         total += next.toppings.reduce((prevTopping: number, nextTopping: VhOrderInvoiceDetailTopping) => prevTopping + nextTopping.quantity * nextTopping.price, 0)
            //     return total;
            // }, 0)
            this.percent_discount_bill = this.subTotal
                ? (this.invoice.discount / this.subTotal) * 100
                : 0;
            if (this.plaform && this.plaform.is('electron')) {
                // console.log('refreshLocalDisplayLEDs');
                // this.vhDisplayLEDService.refreshLocalDisplayLEDs()
                //     .then(() => {
                //         console.log('xong refreshLocalDisplayLEDs');
                console.log(' writeBill_BillDetails_toDisplayLEDScreens');
                this.vhQueryCafe.writeBill_BillDetails_toDisplayLEDScreens(this.invoice, this.invoiceDetail);
                // })
            }
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
        this.invoice.date = value;
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
        this.setDiscountBill();
        if (value === 'id_retail')
            this.setPayment(this.getTotalATax());
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
    /**
     * Cập nhật id_customer cho bill mà không thay đổi discount_bill (dùng cho booking)
     * @param value
     */
    setIdPartnerNoUpdateDiscountBill(value) {
        this.invoice.id_customer = value;
        if (value === 'id_retail')
            this.setPayment(this.getTotalATax());
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
        this.setPayment();
    }
    getDiscount() {
        return this.invoice.discount;
    }
    setDiscount(value) {
        this.invoice.discount = value;
        this.setTotal();
    }
    getEarningPointBill() {
        return this.invoice.earning_points_bill;
    }
    setEarningPointBill(value) {
        this.invoice.earning_points_bill = value;
    }
    getDiscountOther() {
        return this.getDiscountPoint() + this.getDiscountCoupon();
    }
    getDiscountPoint() {
        return this.invoice.payment_points;
    }
    setDiscountPoint(value) {
        this.invoice.payment_points = value;
        this.setTotal();
    }
    getDiscountCoupon() {
        return this.invoice.payment_coupons;
    }
    setDiscountCoupon(value) {
        this.invoice.payment_coupons += value;
        this.setTotal();
    }
    resetDiscountCoupon() {
        this.invoice.payment_coupons = 0;
        this.setTotal();
    }
    getUsePoint() {
        return this.invoice.use_points;
    }
    setUsePoint(value) {
        this.invoice.use_points = value;
    }
    getDiscountBill() {
        return this.invoice.discount_bill;
    }
    setDiscountBill() {
        this.invoice.discount_bill = this.vhQueryCafe.getDiscount_bill_byCustomer(this.getSubTotal(), this.getIdPartner())
            ? this.vhQueryCafe.getDiscount_bill_byCustomer(this.getSubTotal(), this.getIdPartner()).discount
            : 0;
        this.setTotal();
    }
    isPromotion() {
        return this.invoice.is_promotion;
    }
    setBillHavePromotion(value) {
        this.invoice.is_promotion = value;
    }
    getCqtStatus() {
        return this.invoice.cqt_status;
    }
    setCqtStatus(value) {
        this.invoice.cqt_status = value;
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
    /**
     * lấy % dc giảm của khách hàng có chiết khấu
     * @returns number
     */
    getPercentDiscountBillHasDiscountInvoice() {
        return parseFloat(parseFloat(((this.invoice.discount / this.subTotal) * 100).toString()).toFixed(2));
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
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            let total_product_gift = 0;
            let total_products = 0;
            if (i.products_gift) {
                total_product_gift = i.products_gift
                    .filter((item) => item.choose)
                    .reduce((prev, next) => prev + next.quantity * next.price, 0);
                i.products_gift.forEach((element) => {
                    if (element.toppings)
                        total_product_gift += element.toppings.reduce((prev, next) => prev + next.quantity * next.price, 0);
                });
            }
            else if (i.products) {
                total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
                i.products.forEach((element) => {
                    if (element.toppings)
                        total_product_gift += element.toppings.reduce((prev, next) => prev + next.quantity * next.price, 0);
                });
            }
            if (i.toppings)
                subTotal += i.toppings.reduce((prevTopping, nextTopping) => prevTopping + nextTopping.quantity * nextTopping.price, 0);
            subTotal +=
                total_products +
                    total_product_gift +
                    (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setDiscountBill();
    }
    getTotal() {
        return this.invoice.total;
    }
    setTotal() {
        this.invoice.total =
            this.getSubTotal() -
                this.getDiscount() -
                this.getDiscountBill() -
                this.getDiscountOther() +
                this.getFee() >
                0
                ? this.getSubTotal() -
                    this.getDiscount() -
                    this.getDiscountBill() -
                    this.getDiscountOther() +
                    this.getFee()
                : 0;
        this.setTaxValue();
        if (this.plaform && this.plaform.is('electron')) {
            // this.vhDisplayLEDService.refreshLocalDisplayLEDs()
            //     .then(() => {
            console.log('writeBill_BillDetails_toDisplayLEDScreens');
            this.vhQueryCafe.writeBill_BillDetails_toDisplayLEDScreens(this.invoice, this.invoiceDetail);
            // })
        }
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
            else {
                this.invoice.payment = this.getTotal() + this.getTaxValue();
            }
        }
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
        return this.invoice.cash - this.getPayment() > 0
            ? this.invoice.cash - this.getPayment()
            : 0;
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
    addInvoiceDetail(value) {
        if (this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable').dispatchers_enable)
            value['dispatcher_done'] = !this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable').dispatchers_enable;
        this.invoiceDetail.unshift(value);
        console.log(value);
        this.setDiscountBill();
        this.setSubTotal();
    }
    /** Xóa sản phẩm khỏi bill detail */
    removeInvoiceDetail(id) {
        let index = this.invoiceDetail.findIndex((detail) => detail['_id'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }
        this.setDiscountBill();
    }
    addBill_detail_promotion(value) {
        // thêm sp của khuyen mãi type 7
        this.invoiceDetail.push(Object.assign(Object.assign({}, value), { products_gift: value.products_gift.filter(e => e.choose) }));
    }
    /** Lấy toàn bộ bill detail */
    getInvoiceDetail() {
        return this.invoiceDetail;
    }
    /** Lấy toàn bộ topping trong 1 bill detail */
    getInvoiceDetailToppings(idDetail) {
        let detailBill = this.invoiceDetail.find((detail) => detail._id == idDetail);
        return detailBill ? detailBill.toppings : null;
    }
    /** Lấy toàn bộ combo trong 1 bill detail */
    getInvoiceDetailCombos(idDetail) {
        let detailBill = this.invoiceDetail.find((detail) => detail._id == idDetail);
        return detailBill ? detailBill.combos : null;
    }
    getPriceType() {
        return this.invoice.price_type;
    }
    setPriceType(price_type) {
        this.invoice.price_type = price_type;
    }
    getArrayCouponCodes() {
        return this.invoice.coupon_codes ? this.invoice.coupon_codes : [];
    }
    setArrayCouponCodes(coupons) {
        this.invoice.coupon_codes = coupons;
    }
    /******************************create - update - delete invoice / detail *******************************/
    /** Hàm lấy collection bill dùng để đưa vô database */
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.setBillType(bill_type);
        if (bill_type == 1 || bill_type == 36) {
            delete this.invoice.coupon_codes;
            delete this.invoice.is_promotion;
            return this.invoice;
        }
        else
            return this.invoice;
    }
    /** Hàm lấy collection bill details dùng để đưa vô database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map((item) => {
            if (!item.pmtype) {
                let detail = {
                    _id: item._id,
                    id_product: item.id_product,
                    ratio: item.ratio,
                    price: item.price,
                    price_origin: item.price_origin,
                    quantity: item.quantity,
                    ptype: item.ptype,
                    time_start_order: item.time_start_order,
                    note: item.note,
                    earning_points_product: item.earning_points_product
                        ? item.earning_points_product
                        : 0,
                };
                if (this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable')
                    .dispatchers_enable)
                    detail['dispatcher_done'] = item.dispatcher_done;
                if (item.id_dispatcherzone)
                    detail['id_dispatcherzone'] = item.id_dispatcherzone;
                if (item.id_lotproduct)
                    detail['id_lotproduct'] = item.id_lotproduct;
                if (item.id_subproduct)
                    detail['id_subproduct'] = item.id_subproduct;
                // xét điều kiện phụ
                if (item.ptype == 5)
                    detail['combos'] = item.combos.map((combo) => {
                        let product = {
                            id_product: combo.id_product,
                            ratio: combo.ratio,
                            price: combo.price,
                            quantity: combo.quantity,
                            ptype: combo.ptype,
                        };
                        if (combo.id_subproduct)
                            product['id_subproduct'] = combo.id_subproduct;
                        return product;
                    });
                if (item.ptype == 1) {
                    if (item.toppings && item.toppings.length)
                        detail['toppings'] = [
                            ...item.toppings.map((top) => {
                                return {
                                    id_product: top.id_product,
                                    ratio: 1,
                                    price: 0,
                                    price_origin: top.price_origin,
                                    quantity: top.quantity,
                                };
                            }),
                        ];
                    if (item.properties && item.properties.length)
                        detail['properties'] = [
                            ...item.properties.map((pro) => {
                                return {
                                    name: pro.name,
                                    value: [...pro.value],
                                    selectedValue: pro.selectedValue,
                                };
                            }),
                        ];
                }
                // Nếu là dịch vụ thời gian
                if (item.ptype == _vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
                    if (item.is_paused !== undefined)
                        detail.is_paused = item.is_paused;
                    if (item.time_end_order !== undefined)
                        detail.time_end_order = item.time_end_order;
                }
                return detail;
            }
            else {
                let detail = {
                    _id: item._id,
                    id_promotion: item.id_promotion,
                    pmtype: item.pmtype,
                };
                if (item.products_gift) {
                    if (item.products_gift.filter((ele) => ele.choose).length) {
                        detail['products_gift'] = item.products_gift
                            .filter((ele) => ele.choose)
                            .map((e) => {
                            let prod = {
                                id_product: e.id_product,
                                price: e.price,
                                price_origin: e.price_origin,
                                quantity: e.quantity,
                                ptype: e.ptype,
                                earning_points_product: e.earning_points_product,
                                ratio: e.ratio,
                                _id: e._id,
                                time_start_order: e.time_start_order,
                            };
                            if (e.ptype == 5) {
                                prod['combos'] = e.combos.map((combo) => {
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
                            if (e.ptype == 1) {
                                if (e.toppings && e.toppings.length)
                                    prod['toppings'] = [
                                        ...e.toppings.map((top) => {
                                            return {
                                                id_product: top.id_product,
                                                ratio: 1,
                                                price: 0,
                                                price_origin: top.price_origin,
                                                quantity: top.quantity,
                                            };
                                        }),
                                    ];
                                if (e.properties && e.properties.length)
                                    prod['properties'] = [
                                        ...e.properties.map((pro) => {
                                            return {
                                                name: pro.name,
                                                value: [...pro.value],
                                                selectedValue: pro.selectedValue,
                                            };
                                        }),
                                    ];
                            }
                            // Nếu là dịch vụ thời gian
                            if (e.ptype == _vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
                                prod['time_start_order'] = e.time_start_order;
                                if (e.is_paused !== undefined)
                                    prod['is_paused'] = e.is_paused;
                                if (e.time_end_order !== undefined)
                                    prod['time_end_order'] = e.time_end_order;
                            }
                            if (e.id_dispatcherzone)
                                prod['id_dispatcherzone'] = e.id_dispatcherzone;
                            if (e.id_lotproduct)
                                prod['id_lotproduct'] = e.id_lotproduct;
                            if (e.id_subproduct)
                                prod['id_subproduct'] = e.id_subproduct;
                            return prod;
                        });
                        return detail;
                    }
                    else {
                        detail['products_gift'] = [];
                        return detail;
                    }
                }
                else {
                    detail['products'] = item.products.map((e) => {
                        let prod = {
                            id_product: e.id_product,
                            price: e.price,
                            price_origin: e.price_origin,
                            quantity: e.quantity,
                            ptype: e.ptype,
                            earning_points_product: e.earning_points_product,
                            ratio: e.ratio,
                            _id: e._id,
                            time_start_order: e.time_start_order,
                        };
                        if (e.ptype == 5) {
                            prod['combos'] = e.combos.map((combo) => {
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
                        if (e.ptype == 1) {
                            if (e.toppings && e.toppings.length)
                                prod['toppings'] = [
                                    ...e.toppings.map((top) => {
                                        return {
                                            id_product: top.id_product,
                                            ratio: 1,
                                            price: item.price,
                                            price_origin: top.price_origin,
                                            quantity: top.quantity,
                                        };
                                    }),
                                ];
                            if (e.properties && e.properties.length)
                                prod['properties'] = [
                                    ...e.properties.map((pro) => {
                                        return {
                                            name: pro.name,
                                            value: [...pro.value],
                                            selectedValue: pro.selectedValue,
                                        };
                                    }),
                                ];
                        }
                        // Nếu là dịch vụ thời gian
                        if (e.ptype == _vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
                            prod['time_start_order'] = e.time_start_order;
                            if (e.is_paused !== undefined)
                                prod['is_paused'] = e.is_paused;
                            if (e.time_end_order !== undefined)
                                prod['time_end_order'] = e.time_end_order;
                        }
                        if (e.id_dispatcherzone)
                            prod['id_dispatcherzone'] = e.id_dispatcherzone;
                        if (e.id_lotproduct)
                            prod['id_lotproduct'] = e.id_lotproduct;
                        if (e.id_subproduct)
                            prod['id_subproduct'] = e.id_subproduct;
                        return prod;
                    });
                    return detail;
                }
            }
        });
    }
    /**Tạo bill detail từ sản phẩm */
    getCreateItemDetail(food, sub, dispatcher_done) {
        let detail = {
            id_bill: this.invoice._id,
            id_product: food._id,
            quantity: food.quantity,
            ptype: food.ptype,
            price: food.price,
            time_start_order: new Date().toISOString(),
            note: food.note,
            price_origin: food.price_origin,
            ratio: food.ratio,
            earning_points_product: food.earning_points_product
                ? food.earning_points_product
                : 0,
        };
        if (this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable')
            .dispatchers_enable)
            detail['dispatcher_done'] = food.dispatcher_done;
        if (food.id_lotproduct)
            detail['id_lotproduct'] = food.id_lotproduct;
        if (food.id_subproduct)
            detail['id_subproduct'] = food.id_subproduct;
        if (this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable')
            .dispatchers_enable)
            detail['id_dispatcherzone'] = food.id_dispatcherzone;
        if (food.ptype == 1) {
            if (food.properties && food.properties.length)
                detail['properties'] = [
                    ...food.properties.map((item) => {
                        return Object.assign(Object.assign({}, item), { value: [...item.value] });
                    }),
                ];
            if (food.toppings && food.toppings.length)
                detail['toppings'] = [
                    ...food.toppings
                        .map((item) => {
                        return {
                            id_product: item._id,
                            name: item.name,
                            ptype: 4,
                            price: item.price,
                            price_origin: item.price_origin,
                            quantity: item.quantity,
                        };
                    }),
                ];
        }
        if (food.ptype == 5) {
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
    /**Làm sạch bill detail */
    getCreateItemCleanDetail(cleanedDetail) {
        let detail = {
            id_bill: this.invoice._id,
            id_product: cleanedDetail.id_product,
            quantity: cleanedDetail.quantity,
            ptype: cleanedDetail.ptype,
            price: cleanedDetail.price,
            dispatcher_done: cleanedDetail.dispatcher_done,
            time_start_order: cleanedDetail.time_start_order,
            note: cleanedDetail.note,
            price_origin: cleanedDetail.price_origin,
            ratio: cleanedDetail.ratio,
            earning_points_product: cleanedDetail.earning_points_product
                ? cleanedDetail.earning_points_product
                : 0,
        };
        if (cleanedDetail.id_lotproduct)
            detail['id_lotproduct'] = cleanedDetail.id_lotproduct;
        if (cleanedDetail.id_subproduct)
            detail['id_subproduct'] = cleanedDetail.id_subproduct;
        if (cleanedDetail.id_dispatcherzone)
            detail['id_dispatcherzone'] = cleanedDetail.id_dispatcherzone;
        if (cleanedDetail.ptype == 1) {
            if (cleanedDetail.properties && cleanedDetail.properties.length)
                detail['properties'] = [
                    ...cleanedDetail.properties.map((item) => {
                        return {
                            name: item.name,
                            value: [...item.value],
                            selectedValue: item.selectedValue,
                        };
                    }),
                ];
            if (cleanedDetail.toppings && cleanedDetail.toppings.length)
                detail['toppings'] = [
                    ...cleanedDetail.toppings.map((item) => {
                        return {
                            id_product: item.id_product,
                            ratio: 1,
                            price: item.price,
                            price_origin: item.price_origin,
                            quantity: item.quantity,
                        };
                    }),
                ];
        }
        if (cleanedDetail.ptype == 5) {
            detail['combos'] = [
                ...cleanedDetail.combos.map((item) => {
                    let product = {
                        id_product: item.id_product,
                        ptype: item.ptype,
                        ratio: item.ratio,
                        price: item.price,
                        quantity: item.quantity,
                    };
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    return product;
                }),
            ];
        }
        return detail;
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_cafe_interface_vh-order-invoice_ts.js.map