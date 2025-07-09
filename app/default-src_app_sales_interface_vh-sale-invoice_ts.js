"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_interface_vh-sale-invoice_ts"],{

/***/ 45687:
/*!****************************************************!*\
  !*** ./src/app/sales/interface/vh-sale-invoice.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VhSaleInvoices": () => (/* binding */ VhSaleInvoices)
/* harmony export */ });
class VhSaleInvoices {
    constructor(invoice = null, invoiceDetail = [], vhQuerySales, plaform, vhDisplayLEDService) {
        this.date = new Date();
        this.subTotal = 0;
        this.percent_discount_bill = 0;
        this.taxValue = 0;
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
        };
        this.invoiceDetail = [];
        this.vhQuerySales = vhQuerySales;
        this.plaform = plaform;
        this.vhDisplayLEDService = vhDisplayLEDService;
        if (invoice) {
            this.invoice.bill_code = invoice['bill_code'] ? invoice['bill_code'] : null;
            this.invoice.payment_type = invoice['payment_type'] ? invoice['payment_type'] : 1;
            this.invoice.id_customer = invoice['id_customer'] ? invoice['id_customer'] : 'id_retail';
            this.invoice.tax_buyerDisplayName = invoice['tax_buyerDisplayName'] ? invoice['tax_buyerDisplayName'] : '';
            this.invoice.tax_buyerLegalName = invoice['tax_buyerLegalName'] ? invoice['tax_buyerLegalName'] : '';
            this.invoice.tax_buyerTaxCode = invoice['tax_buyerTaxCode'] ? invoice['tax_buyerTaxCode'] : '';
            this.invoice.tax_buyerAddressLine = invoice['tax_buyerAddressLine'] ? invoice['tax_buyerAddressLine'] : '';
            this.invoice.tax_buyerEmail = invoice['tax_buyerEmail'] ? invoice['tax_buyerEmail'] : '';
            this.invoice.id_branch = invoice['id_branch'] ? invoice['id_branch'] : null;
            this.invoice.id_employee = invoice['id_employee'] ? invoice['id_employee'] : null;
            this.invoice.id_wallet = invoice['id_wallet'] ? invoice['id_wallet'] : 'id_cash';
            this.invoice.total = invoice['total'] ? invoice['total'] : 0;
            this.invoice.payment = invoice['payment'] ? invoice['payment'] : 0;
            this.invoice.tax = invoice['tax'] ? invoice['tax'] : 0;
            this.invoice.discount = invoice['discount'] ? invoice['discount'] : 0;
            this.invoice.payment_points = invoice['payment_points'] ? invoice['payment_points'] : 0;
            this.invoice.payment_coupons = invoice['payment_coupons'] ? invoice['payment_coupons'] : 0;
            this.invoice.earning_points_bill = invoice['earning_points_bill'] ? invoice['earning_points_bill'] : 0;
            this.invoice.use_points = invoice['use_points'] ? invoice['use_points'] : 0;
            this.invoice.discount_bill = invoice['discount_bill'] ? invoice['discount_bill'] : 0;
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
            if (invoice['delivery_viettel_data'])
                this.invoice.delivery_viettel_data = invoice['delivery_viettel_data'];
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
                    total_product_gift = i.products_gift.filter(item => item.choose).reduce((prev, next) => prev + next.quantity * next.price, 0);
                }
                else if (i.products) {
                    total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
                }
                if (!i.pmtype)
                    i.percent_discount_product = i.price < i.price_origin ? parseFloat(parseFloat(((1 - (i.price / i.price_origin)) * 100).toString()).toFixed(2)) : 0;
                subTotal += total_products + total_product_gift + (i.price ? i.price * i.quantity : 0);
            }
            this.subTotal = subTotal;
            this.percent_discount_bill = this.subTotal ? (this.invoice.discount / this.subTotal) * 100 : 0;
            if (this.plaform && this.plaform.is('electron')) {
                this.vhQuerySales.writeBill_BillDetails_toDisplayLEDScreens(this.invoice, this.invoiceDetail);
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
    getDiscountBill() {
        return this.invoice.discount_bill;
    }
    getDiscountOther() {
        return this.getDiscountPoint() + this.getDiscountCoupon();
    }
    setDiscountBill(value) {
        this.invoice.discount_bill = value;
        this.setTotal();
    }
    getEarningPointBill() {
        return this.invoice.earning_points_bill;
    }
    setEarningPointBill(value) {
        this.invoice.earning_points_bill = value;
    }
    getUsePoint() {
        return this.invoice.use_points;
    }
    setUsePoint(value) {
        this.invoice.use_points = value;
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
    setSubTotal(value) {
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            let total_product_gift = 0;
            let total_products = 0;
            if (i.products_gift) {
                total_product_gift = i.products_gift.filter(item => item.choose).reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            else if (i.products) {
                total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            subTotal += total_products + total_product_gift + (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setTotal();
    }
    getTotal() {
        return this.invoice.total;
    }
    setTotal() {
        this.invoice.total = this.getSubTotal() - this.getDiscount() - this.getDiscountBill() - this.getDiscountOther() + this.getFee() > 0 ? this.getSubTotal() - this.getDiscount() - this.getDiscountBill() - this.getDiscountOther() + this.getFee() : 0;
        this.setTaxValue();
        if (this.plaform && this.plaform.is('electron')) {
            // this.vhDisplayLEDService.refreshLocalDisplayLEDs()
            //     .then(() => {
            this.vhQuerySales.writeBill_BillDetails_toDisplayLEDScreens(this.invoice, this.invoiceDetail);
            // })
        }
    }
    getNumbersProduct() {
        return this.invoiceDetail.reduce((sum, next) => sum + next.quantity, 0);
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
    getDeliveryViettelData() {
        return this.invoice.delivery_viettel_data;
    }
    setDeliveryViettelData(data) {
        this.invoice.delivery_viettel_data = data;
    }
    /**
     * get chiết khấu hóa đơn
     * @returns null : ko có cong thuc | value : co công thức
     */
    getDiscountInvoice() {
        let discount = this.vhQuerySales.getDiscount_bill_byCustomer(this.subTotal, this.invoice.id_customer);
        if (discount != null) {
            this.setDiscount(discount.discount);
            return discount.discount;
        }
        else
            return null;
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
        this.percent_discount_bill = parseFloat(value) <= 100 && parseFloat(value) ? parseFloat(value) : 0;
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
            this.percent_discount_bill = parseFloat(parseFloat((value / this.getSubTotal() * 100).toString()).toFixed(2));
        }
        else {
            this.setDiscount(0);
            this.percent_discount_bill = 0;
        }
    }
    /**Phương thức này dùng riêng cho sendo, không cần duyệt qua mảng detail để tính tổng mà set thẳng giá trị */
    setTotalEcommerce(total) {
        this.invoice.total = total;
    }
    /**Get/Set order number của sendo */
    getOrderNumberEcommerce() {
        return this.invoice.order_number_ecommerce;
    }
    setOrderNumberEcommerce(order_number) {
        this.invoice.order_number_ecommerce = order_number;
    }
    getIdShopEcommerce() {
        return this.invoice.id_shop;
    }
    setIdShopEcommerce(id_shop) {
        this.invoice.id_shop = id_shop;
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
                    this.setSubTotal();
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
                    this.setSubTotal();
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
                    this.setSubTotal();
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
                    this.setSubTotal();
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
            price2: value.price2,
            price_origin: value.price,
            earning_points_product: value.earning_points_product ? value.earning_points_product : 0,
            percent_discount_product: 0
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
                        lots: item.lots ? item.lots : [],
                        id_lotproduct: item.id_lotproduct,
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
    /** Thêm sản phẩm vô bill detail đã tạo*/
    addInvoiceDetailDB(value, id_billDetail, new_price) {
        if (value['id_subproduct']) {
            let index = this.invoiceDetail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
            if (index != -1) {
                if (this.invoiceDetail[index]['quantity'] < 9999999999)
                    this.invoiceDetail[index]['quantity'] += 1;
            }
            else {
                this.addBill_detail_DB(value, id_billDetail);
            }
        }
        else {
            let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
            if (index != -1) {
                if (this.invoiceDetail[index]['quantity'] < 9999999999)
                    this.invoiceDetail[index]['quantity'] += 1;
            }
            else {
                this.addBill_detail_DB(value, id_billDetail);
            }
        }
    }
    addBill_detail_DB(value, id_billDetail) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            ptype: value.type,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
            price2: value.price2,
            price: value.price,
            price_origin: value.price,
            id_category: value.id_category,
            _id: id_billDetail,
            earning_points_product: value.earning_points_product ? value.earning_points_product : 0,
            lot_number: value.lot_number,
            lots: value.lots ? value.lots : [],
            percent_discount_product: 0
        };
        if (value.type == 5) {
            detail['subComboName'] = value.subComboName;
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
                        lots: item.lots ? item.lots : [],
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
    /**Thêm sản phẩm từ sàn sendo
     * @params sku_detail : danh sách đơn hàng trên sendo
     * @params products : danh sách sp của app
     */
    addInvoiceDetailSendo(sku_details, products, id_branch) {
        for (let sku of sku_details) {
            let exist = false; //nếu duyệt hết các sp trong app mà không tồn tại thì sp sendo chưa được liên kết
            for (let index in products) {
                if (products[index][id_branch] && products[index][id_branch].sendos.findIndex(item => item.id == sku.product_variant_id) >= 0) {
                    exist = true;
                    this.invoiceDetail.unshift({
                        name: products[index].name,
                        id_product: products[index]._id,
                        quantity: sku.quantity,
                        ptype: products[index].type,
                        unit: products[index].unit,
                        units: products[index].units,
                        ratio: 1,
                        price: sku.price,
                        price_origin: products[index].price_origin,
                        id_subproduct: products.id_subproduct,
                        lots: products.lots,
                        id_lotproduct: products.id_lotproduct,
                        free: false //nếu có trường này true thì được quyền chỉnh số lượng
                    });
                }
            }
            if (!exist)
                this.invoiceDetail.unshift({
                    id_product: null,
                    quantity: sku.quantity,
                    price: sku.price,
                    ptype: 1,
                    ratio: 1,
                });
        }
    }
    /**Thêm sản phẩm từ sàn lazada
     */
    addInvoiceDetailLazada(price, product, exist) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == product['_id'] && product['_id'] != null);
        if (index != -1) {
            if (this.invoiceDetail[index]['quantity'] < 9999999999)
                this.invoiceDetail[index]['quantity'] += 1;
        }
        else {
            if (exist) {
                this.invoiceDetail.unshift({
                    name: product.name,
                    id_product: product._id,
                    quantity: 1,
                    ptype: product.type,
                    unit: product.unit,
                    ratio: 1,
                    units: product.units,
                    price: price,
                    price_origin: product.price_origin || null,
                    id_subproduct: product.id_subproduct,
                    lots: product.lots,
                    id_lotproduct: product.id_lotproduct,
                    free: false //nếu có trường này true thì được quyền chỉnh số lượng
                });
            }
            else {
                this.invoiceDetail.unshift({
                    id_product: null,
                    quantity: 1,
                    price: price,
                    ptype: 1,
                    ratio: 1,
                    name: product.name
                });
            }
        }
    }
    /**Thêm sản phẩm từ sàn tiki
     */
    addInvoiceDetailTiki(price, quantity, product, exist) {
        if (exist) {
            this.invoiceDetail.unshift({
                name: product.name,
                id_product: product._id,
                quantity: quantity,
                ptype: product.type,
                unit: product.unit,
                price: price,
                ratio: 1,
                units: product.units,
                price_origin: product.price_origin || null,
                id_subproduct: product.id_subproduct,
                lots: product.lots,
                id_lotproduct: product.id_lotproduct,
                free: false //nếu có trường này true thì được quyền chỉnh số lượng
            });
        }
        else {
            this.invoiceDetail.unshift({
                id_product: null,
                quantity: quantity,
                price: price,
                ptype: 1,
                ratio: 1,
                name: product.name
            });
        }
    }
    /**Thêm sản phẩm từ sàn shopee
     */
    addInvoiceDetailShopee(price, quantity, product, exist) {
        if (exist) {
            this.invoiceDetail.unshift({
                name: product.name,
                id_product: product._id,
                quantity: quantity,
                ptype: product.type,
                unit: product.unit,
                ratio: 1,
                units: product.units,
                price: price,
                price_origin: product.price_origin || null,
                id_subproduct: product.id_subproduct,
                lots: product.lots,
                id_lotproduct: product.id_lotproduct,
                free: false, //nếu có trường này true thì được quyền chỉnh số lượng
            });
        }
        else {
            this.invoiceDetail.unshift({
                id_product: null,
                quantity: quantity,
                price: price,
                ptype: 1,
                ratio: 1,
                name: product.name
            });
        }
    }
    addInvoiceDetailExtraEcommerce(value) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['free']);
        if (index != -1) {
            if (this.invoiceDetail[index]['quantity'] < 9999999999)
                this.invoiceDetail[index]['quantity'] += 1;
        }
        else {
            let detail = {
                name: value.name,
                id_product: value._id,
                quantity: 1,
                ptype: value.type,
                unit: value.unit,
                units: value.units,
                ratio: value.ratio,
                price: 0,
                price_origin: value.price,
                id_category: value.id_category,
                free: true,
                id_subproduct: value.id_subproduct,
                lots: value.lots,
                id_lotproduct: value.id_lotproduct,
            };
            if (value.type == 5) {
                detail['subComboName'] = value.subComboName;
                detail['combos'] = [...value.combos.map(item => {
                        let product = {
                            id_product: item.id_product, name: item.name, ptype: item.type,
                            price: 0, quantity: item.quantity, id_subproduct: item.id_subproduct,
                            lots: item.lots,
                            id_lotproduct: item.id_lotproduct, units: item.units, ratio: item.ratio,
                            free: true //nếu có trường này thì được quyền chỉnh số lượng
                        };
                        return product;
                    })];
            }
            this.invoiceDetail.unshift(detail);
        }
    }
    /** xóa sản phẩm */
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
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
    /** Lấy toàn bộ combo của 1 detail */
    getInvoiceDetailCombos(idDetail) {
        let detailBill = this.invoiceDetail.find(detail => detail._id == idDetail);
        return detailBill ? detailBill.combos : null;
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
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.setBillType(bill_type);
        return this.invoice;
    }
    /** Lấy toàn bộ bill dùng để lưu database dành cho giao diện pos */
    getCreateUpdateInvoicePosInterface(bill_type = null) {
        var _a, _b, _c, _d, _e;
        if (bill_type)
            this.setBillType(bill_type);
        return {
            payment_type: this.invoice.payment_type,
            date: this.invoice.date,
            id_customer: this.invoice.id_customer,
            tax_buyerDisplayName: ((_a = this.invoice) === null || _a === void 0 ? void 0 : _a.tax_buyerDisplayName) || '',
            tax_buyerLegalName: ((_b = this.invoice) === null || _b === void 0 ? void 0 : _b.tax_buyerLegalName) || '',
            tax_buyerTaxCode: ((_c = this.invoice) === null || _c === void 0 ? void 0 : _c.tax_buyerTaxCode) || '',
            tax_buyerAddressLine: ((_d = this.invoice) === null || _d === void 0 ? void 0 : _d.tax_buyerAddressLine) || '',
            tax_buyerEmail: ((_e = this.invoice) === null || _e === void 0 ? void 0 : _e.tax_buyerEmail) || '',
            id_delivery: this.invoice.id_delivery,
            id_branch: this.invoice.id_branch,
            id_employee: this.invoice.id_employee,
            id_wallet: this.invoice.id_wallet,
            total: this.invoice.total,
            payment: this.invoice.payment,
            tax: this.invoice.tax,
            discount: this.invoice.discount,
            fee: this.invoice.fee,
            bill_type: this.invoice.bill_type,
            note: this.invoice.note,
            cash: this.invoice.cash,
            price_type: this.invoice.price_type,
            _id: this.invoice._id,
            discount_bill: this.invoice.discount_bill,
            payment_points: this.invoice.payment_points,
            use_points: this.invoice.use_points,
            payment_coupons: this.invoice.payment_coupons,
            earning_points_bill: this.invoice.earning_points_bill,
        };
    }
    /** Lấy toàn bộ bill detail dùng để lưu database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            if (!item.pmtype) {
                let detail = {
                    id_product: item.id_product,
                    ptype: item.ptype,
                    price: item.price,
                    price_origin: item.price_origin,
                    quantity: item.quantity,
                    earning_points_product: item.earning_points_product,
                    ratio: item.ratio,
                };
                if (item.id_lotproduct)
                    detail['id_lotproduct'] = item.id_lotproduct;
                if (item.id_subproduct)
                    detail['id_subproduct'] = item.id_subproduct;
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
    /**Làm sạch bill detail */
    getCreateItemCleanDetail(cleanedDetail) {
        let detail = {
            id_bill: this.invoice._id,
            id_product: cleanedDetail.id_product,
            quantity: cleanedDetail.quantity,
            ptype: cleanedDetail.ptype,
            price: cleanedDetail.price,
            price_origin: cleanedDetail.price_origin,
            earning_points_product: cleanedDetail.earning_points_product,
            ratio: cleanedDetail.ratio,
            id_subproduct: cleanedDetail.id_subproduct
        };
        if (cleanedDetail.ptype == 5) {
            detail['combos'] = [...cleanedDetail.combos.map(item => {
                    let product = {
                        id_product: item.id_product,
                        id_subproduct: item.id_subproduct,
                        ptype: item.ptype,
                        price: item.price,
                        quantity: item.quantity,
                        ratio: item.ratio ? item.ratio : 1,
                        name: item.name
                    };
                    return product;
                })];
        }
        return detail;
    }
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_sales_interface_vh-sale-invoice_ts.js.map