"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_services_bill_service_ts"],{

/***/ 8942:
/*!************************************************!*\
  !*** ./src/app/sales/services/bill.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillService": () => (/* binding */ BillService)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _interface_vh_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/vh-component/vh-component */ 20411);






class BillService {
  constructor(languageService, vhQuerySales, vhAuth, vhAlgorithm, vhComponent, vhEcommerce) {
    this.languageService = languageService;
    this.vhQuerySales = vhQuerySales;
    this.vhAuth = vhAuth;
    this.vhAlgorithm = vhAlgorithm;
    this.vhComponent = vhComponent;
    this.vhEcommerce = vhEcommerce;
    /** Danh sách thuế */

    this.listTax = this.vhQuerySales.getlocalTaxs().filter(item => item.status);
  }
  /**
   * Tính subtotal của hóa đơn
   * @param billDetails Danh sách billDetails của hóa đơn cần tính
   * @returns Subtotal của hóa đơn
   */


  getSubTotal(billDetails) {
    let subTotal = 0;

    for (let i of billDetails) {
      let total_product_gift = 0;
      let total_products = 0;

      if (i.products_gift) {
        total_product_gift = i.products_gift.filter(item => item.choose).reduce((prev, next) => prev + next.quantity * next.price, 0);
      } else if (i.products) {
        total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
      }

      subTotal += total_products + total_product_gift + (i.price ? i.price * i.quantity : 0);
    }

    return subTotal;
  }
  /**
   * Trả về điểm được tích của sản phẩm được thêm.
   * @param product sản phẩm được thêm
   * @param promotion Khuyến mãi áp dụng
   * @param program_product Chương trình tích điểm
   * @returns 0 | number
   */


  getTotalEarningPointProduct(product, promotion, program_product) {
    if (program_product) {
      let subTotal = 0;

      if (!program_product.include_promotion_product && promotion) {
        // tích điểm sp có km =>  tính lại subTotal
        subTotal = program_product.products.find(i => i == product._id) ? product.price : 0;
        return (subTotal - subTotal % program_product.exchange.money) / program_product.exchange.money * program_product.exchange.points;
      } else {
        subTotal = program_product.products.find(i => i == product._id) ? product.price : 0;
        return (subTotal - subTotal % program_product.exchange.money) / program_product.exchange.money * program_product.exchange.points;
      }
    } else return 0;
  }
  /**
   * Tính tổng tiền của bill
   * @returns Tổng tiền của bill
   */


  getTotal(subTotal, bill) {
    const total = subTotal - bill.discount - bill.discount_bill - bill.payment_coupons - bill.payment_points + bill.fee;
    return total > 0 ? total : 0;
  }
  /**
   * Tính giá trị thuế ra tiền
   * @param bill Hóa đơn cần tính
   * @returns Giá trị thuế
   */


  getTax(bill) {
    return bill.total * (bill.tax / 100);
  }
  /**
   * Trả về tên của phương thức thanh toán
   * @param payment_type Loại thanh toán
   * @param id_wallet
   * @returns 1: Tiền mặt, 2: Thẻ, 3: Ví
   */


  getPaymentName(payment_type, id_wallet = null) {
    var _a;

    switch (payment_type) {
      case 1:
        return this.languageService.translate('Cash');

      case 2:
        return this.languageService.translate('Debit');

      case 3:
        return (_a = this.vhQuerySales.getlocalWallet(id_wallet)) === null || _a === void 0 ? void 0 : _a.name;
    }
  }
  /**
   * Lấy hoá đơn trong ngày. Với bill_type = 5 (hoá đơn bán hàng).
   * @returns Mảng danh sách hoá đơn trong ngày.
   * @example
   * this.invoiceService.getBillsToday().then((bills: VhSaleInvoiceEdit[]) => {
   *  console.log(bills);
   * });
   */


  getBillsToday() {
    return this.vhQuerySales.getBills_byFields({
      bill_type: {
        $eq: 5
      },
      id_branch: {
        $eq: this.vhQuerySales.getDefaultBranch()._id
      },
      id_employee: {
        $eq: this.vhAuth.getUser()._id
      },
      id_shop: {
        $eq: 'local'
      }
    }, {});
  }
  /**
   * Trả về dữ liệu chuẩn của bill_detail để lưu DB
   * @param item bill_detail cần lưu
   * @returns dữ liệu chuẩn của bill_detail
   * @example let bill_detail = this.getCleanBillDetail({object product});
   */


  getCleanBillDetail(item) {
    let detail = {
      id_product: item.id_product,
      ptype: item.ptype,
      price: item.price,
      price_origin: item.price_origin,
      quantity: item.quantity,
      earning_points_product: item.earning_points_product,
      ratio: item.ratio
    };
    if (item.id_lotproduct) detail['id_lotproduct'] = item.id_lotproduct;
    if (item.id_subproduct) detail['id_subproduct'] = item.id_subproduct;

    if (item.ptype == 5) {
      detail['combos'] = item.combos.map(combo => {
        let product = {
          id_product: combo.id_product,
          price: combo.price,
          quantity: combo.quantity,
          ptype: combo.ptype,
          ratio: combo.ratio ? combo.ratio : 1
        };
        if (combo.id_lotproduct) product['id_lotproduct'] = combo.id_lotproduct;
        if (combo.id_subproduct) product['id_subproduct'] = combo.id_subproduct;
        return product;
      });
    }

    return detail;
  }
  /**
   * Cập nhật bill_detail lên database
   * @param id_bill_detail id của bill_detail cần cập nhật
   * @param data dữ liệu cần cập nhật
   * @param callbackSuccess callback khi cập nhật thành công
   * @param callbackError callback khi cập nhật thất bại
   * @example
   * this.updateBillDetail('id_bill_detail', billDetails);
   * this.updateBillDetail('id_bill_detail', billDetails, () => {console.log('success')}, (error) => {console.log(error)});
   */


  updateBillDetail(id_bill_detail, billDetails, callbackSuccess, callbackError) {
    this.vhQuerySales.updateBill_Detail(id_bill_detail, billDetails).then(bool => {
      if (callbackSuccess) callbackSuccess(bool);
    }, error => {
      console.log('error', error);
      if (callbackError) callbackError(error);
    });
  }
  /**
   * hàm get điểm tích lũy theo hóa đơn
   * 1. get hạng khách hàng
   * 2. từ hạng khách hàng get tích điểm theo bill
   * 3. check các điều kiện của chương trình
   * a check sản phẩm khuyến mãi include_promotion_product
   * b  check giảm giá/ chiết khấu include_discount
   * c check thanh toán = điểm thưởng include_paid_points
   * d check phí  include_fee
   * e check thuế include_tax
   * @returns 0 | number
   */


  getEarningPointBill(program_bill, selectedBill, subTotal, billDetails) {
    let sub = subTotal;

    if (program_bill && sub > program_bill.bill_total_minimum) {
      // ko tích điểm sp có km => tính lại sub
      if (!program_bill.include_promotion_product) {
        sub = this.getSubTotalNotPromotion(billDetails);

        if (program_bill.include_discount) {
          sub = sub - selectedBill.discount - selectedBill.discount_bill;
        }

        if (program_bill.include_paid_points && selectedBill.payment_points) {
          sub = sub - selectedBill.payment_points;
        }

        if (program_bill.include_fee) {
          sub += selectedBill.fee;
        }

        if (program_bill.include_tax) {
          sub += sub * (selectedBill.tax / 100);
        }

        return (sub - sub % program_bill.exchange.money) / program_bill.exchange.money * program_bill.exchange.points;
      } else {
        if (program_bill.include_discount) {
          sub = sub - selectedBill.discount - selectedBill.discount_bill;
        }

        if (program_bill.include_paid_points && selectedBill.payment_points) {
          sub = sub - selectedBill.payment_points;
        }

        if (program_bill.include_fee) {
          sub += selectedBill.fee;
        }

        if (program_bill.include_tax) {
          sub += sub * (selectedBill.tax / 100);
        }

        return (sub - sub % program_bill.exchange.money) / program_bill.exchange.money * program_bill.exchange.points;
      }
    } else return 0;
  }
  /**
  * Trả về tổng tiền của sản phẩm ko có chương trình khuyến mãi
  * @param billDetails Mảng billDetails cần tính
  * @returns Tổng tiền của sản phẩm ko có chương trình khuyến mãi
  */


  getSubTotalNotPromotion(billDetails) {
    return billDetails.filter(item => !item.id_promotion).reduce((prev, next) => prev + next.quantity * next.price, 0);
  }
  /**
   * hàm này trả về tổng điểm được tích của tất cả sản phẩm
   * @param program_product chương trình tích điểm sản phẩm
   * @param billDetails mảng billDetails
   * @returns 0 | number
   */


  getEarningPointAllProduct(program_product, billDetails) {
    if (program_product) {
      let subTotal = 0;

      if (!program_product.include_promotion_product) {
        // tích điểm sp có km => tính lại subTotal
        subTotal = this.getSubTotalNotPromotionOfProduct(program_product.products, billDetails);
        return (subTotal - subTotal % program_product.exchange.money) / program_product.exchange.money * program_product.exchange.points;
      } else {
        subTotal = billDetails.filter(item => item.price_origin == item.price && program_product.products.find(i => i == item.id_product)).reduce((prev, next) => prev + next.quantity * next.price, 0);
        return (subTotal - subTotal % program_product.exchange.money) / program_product.exchange.money * program_product.exchange.points;
      }
    } else return 0;
  }
  /**
   * Trả về tổng điểm được tích của hoá đơn và sản phẩm.
   * = Tổng điểm tích được của tất cả sản phẩm + Tổng điểm tích được của hoá đơn
   * @returns 0 | number
   */


  getTotalEarningPoint(program_product, program_bill, subTotal, selectedBill, billDetails) {
    return this.getEarningPointAllProduct(program_product, billDetails) + this.getEarningPointBill(program_bill, selectedBill, subTotal, billDetails);
  }
  /**
   * Trả về tổng tiền của sản phẩm ko có chương trình khuyến mãi thuộc chương trình tích điểm sản phẩm
   * @param products_of_program_earnig_product Mảng sản phẩm thuộc chương trình tích điểm sản phẩm
   * @param billDetails Mảng billDetails cần tính
   * @returns Tổng tiền của sản phẩm ko có chương trình khuyến mãi thuộc chương trình tích điểm sản phẩm
   */


  getSubTotalNotPromotionOfProduct(products_of_program_earnig_product, billDetails) {
    return billDetails.filter(item => item.price_origin == item.price && products_of_program_earnig_product.find(i => i == item.id_product || i == item.id_subproduct)).reduce((prev, next) => prev + next.quantity * next.price, 0);
  }
  /**
   * Tính lại thanh toán để lưu trường payment của bill
   * @param selectedBill bill đang chọn
   * @param taxValue giá trị thuế
   * @returns thanh toán
   */


  getPayment(selectedBill, taxValue) {
    if (selectedBill.payment_type == 2) {
      return 0;
    } else {
      return selectedBill.total + taxValue;
    }
  }
  /**
   * Cập nhật lại tiền khách đưa để lưu trường cash trong bill
   * @param selectedBill bill đang chọn
   * @param value giá trị khách đưa
   * @example this.setCash(100000)
   */


  getCash(selectedBill, value) {
    if (selectedBill.payment_type == 2) {
      return 0;
    } else {
      if (value) {
        return parseFloat(value);
      } else {
        return 0;
      }
    }
  }
  /**
   * Xoá bill
   * @param index vị trí của bill cần xoá
   * @param id id của bill cần xoá
   * @param selectedIndex vị trí của bill đang chọn
   * @returns Promise<void>
   * @example this.deleteBill(0, 'id_bill', 0).then(() => {console.log('success')}).catch((error) => {console.log(error)});
   */


  deleteBill(index, id, selectedIndex) {
    return new Promise((resolve, reject) => {
      if (this.vhAuth.checkMyPermission('sales_enable_create_bill')) {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the sales order")}?`, "OK", this.languageService.translate('Cancel')).then(() => {
          // Nếu cái cần xoá === cái đang chọn thì closeSyncOpeningBill
          if (index == selectedIndex) {
            this.vhQuerySales.closeSyncOpeningBill();
          } // Thực hiện xoá


          this.vhComponent.showLoading('').then(() => {
            this.vhQuerySales.deleteBill_Billdetail(id).then(() => {
              resolve();
            }, error => {
              reject(error);
            });
          }).catch(error => {
            reject(error);
          });
        }, cancel => {});
      } else {
        reject(new Error('Permission denied'));
      }
    });
  }
  /**
   * Tìm vị trí của sản phẩm trong mảng billDetails
   * @param value Sản phẩm cần tìm index trong bill
   * @param billDetails Mảng billDetails cần tìm
   * @returns Vị trí của sản phẩm trong mảng billDetails
   * @example this.getBillDetailIndex({object product}, billDetails);
   */


  getBillDetailIndex(value, billDetails) {
    let index = -1;

    if (value.lot_number) {
      index = billDetails.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
    } else {
      if (value.id_subproduct) {
        index = billDetails.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
      } else {
        index = billDetails.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
      }
    }

    return index;
  }
  /**
   * Lấy giá trị của discount_bill theo khách hàng
   * @param selectedBill bill đang chọn
   * @param subTotal subTotal hiện tại
   * @returns giá trị của discount_bill
   */


  getDiscountBillByCustomer(selectedBill, subTotal) {
    return this.vhQuerySales.getDiscount_bill_byCustomer(subTotal, selectedBill.id_customer) ? this.vhQuerySales.getDiscount_bill_byCustomer(subTotal, selectedBill.id_customer).discount : 0;
  }
  /**
   * Trả về dữ liệu thông tin bill_detail clean để lưu DB
   * @param billDetails danh sách bill_detail
   * @returns VhSaleInvoiceDetailEdit[]
   * @example this.getCreateUpdateInvoiceDetail(billDetails);
   */


  getCreateUpdateInvoiceDetail(billDetails) {
    return billDetails.map(item => {
      if (!item.pmtype) {
        let detail = {
          id_product: item.id_product,
          ptype: item.ptype,
          price: item.price,
          price_origin: item.price_origin,
          quantity: item.quantity,
          earning_points_product: item.earning_points_product,
          ratio: item.ratio,
          note: item.note,
          time_start_order: item.time_start_order,
          time_end_order: item.time_end_order,
          is_paused: item.is_paused
        };
        if (item._id) detail['_id'] = item._id;
        if (item.id_lotproduct) detail['id_lotproduct'] = item.id_lotproduct;
        if (item.id_subproduct) detail['id_subproduct'] = item.id_subproduct;

        if (item.ptype == 5) {
          detail['combos'] = item.combos.map(combo => {
            let product = {
              id_product: combo.id_product,
              price: combo.price,
              quantity: combo.quantity,
              ptype: combo.ptype,
              ratio: combo.ratio ? combo.ratio : 1
            };
            if (combo.id_lotproduct) product['id_lotproduct'] = combo.id_lotproduct;
            if (combo.id_subproduct) product['id_subproduct'] = combo.id_subproduct;
            return product;
          });
        }

        return detail;
      } else {
        let detail = {
          id_promotion: item.id_promotion,
          pmtype: item.pmtype
        };
        if (item._id) detail['_id'] = item._id;

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
                    ratio: combo.ratio ? combo.ratio : 1
                  };
                  if (combo.id_lotproduct) product['id_lotproduct'] = combo.id_lotproduct;
                  if (combo.id_subproduct) product['id_subproduct'] = combo.id_subproduct;
                  return product;
                });
              }

              if (e.id_lotproduct) prod['id_lotproduct'] = e.id_lotproduct;
              if (e.id_subproduct) prod['id_subproduct'] = e.id_subproduct;
              return prod;
            });
            return detail;
          }
        } else {
          detail['products'] = item.products.map(e => {
            let prod = {
              id_product: e.id_product,
              price: e.price,
              price_origin: e.price_origin,
              quantity: e.quantity,
              ptype: e.ptype,
              earning_points_product: e.earning_points_product,
              ratio: e.ratio,
              note: item.note
            };

            if (e.ptype == 5) {
              prod['combos'] = e.combos.map(combo => {
                let product = {
                  id_product: combo.id_product,
                  price: combo.price,
                  quantity: combo.quantity,
                  ptype: combo.ptype,
                  ratio: combo.ratio ? combo.ratio : 1
                };
                if (combo.id_lotproduct) product['id_lotproduct'] = combo.id_lotproduct;
                if (combo.id_subproduct) product['id_subproduct'] = combo.id_subproduct;
                return product;
              });
            }

            if (e.id_lotproduct) prod['id_lotproduct'] = e.id_lotproduct;
            if (e.id_subproduct) prod['id_subproduct'] = e.id_subproduct;
            return prod;
          });
          return detail;
        }
      }
    }).filter(item => item);
  }
  /* -------------------------------------------------------------------------------------------------------------------------------------- */

  /*                                                             HÓA ĐƠN ĐIỆN TỬ                                                            */

  /* -------------------------------------------------------------------------------------------------------------------------------------- */

  /**
   * Chuyển đổi bill từ local sang hóa đơn điện tử.
   * Nếu có truyền vào platform và có bật cấu hình Gửi hóa đơn lên Cơ quan thuế kèm phí giao dịch/phí sàn thì sẽ tính thêm phí sàn vào bill_detail Chiết khấu thương mại
   * @example
   * this.vhQuerySales.changeBill_byLocal_toInvoice_byMinvoice(id_bill,invoiceSeries)
    .then((rsp)=>{
      //-----------your code here-----------
    },(error:any)=>{
        console.log('error', error)
    })
   * @param id_bill
   * @param invoiceSeries
   * @param platform 'SHOPEE' | 'TIKTOK' | 'LAZADA'| 'TIKI' tên sàn
   * @param infoShop Thông tin sàn
   *
   * @returns Promise => {vcode, msg, data(array)}
   */


  changeBill_byLocal_toInvoice_byMinvoice(id_bill, invoiceSeries, platform, infoShop) {
    var _this = this;

    /** Hàng khuyến mãi được phép xuất 0đ. Nếu là true thì tchat2 sẽ có các cột = 0, ma_thue vẫn là số bình thường */
    const cqt_vat_ecommerce_allow_promotional_items_zero_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_allow_promotional_items_zero_price;
    /** Xuất riêng chiết khấu/giảm giá của sản phẩm thành 1 dòng riêng khi gửi CQT */

    const cqt_vat_ecommerce_separate_discount_line = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_separate_discount_line;
    /** Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT */

    const cqt_vat_ecommerce_keep_promotional_items_as_sold = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_keep_promotional_items_as_sold;
    /** Gửi hóa đơn lên Cơ quan thuế kèm phí giao dịch/phí sàn */

    const cqt_submit_invoice_with_ecommerce_fee = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_with_ecommerce_fee;
    /** Mã sản phẩm khi gửi CQT là mã vạch sản phẩm */

    const cqt_vat_ecommerce_item_code_is_barcode = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_code_is_barcode;
    /** Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm */

    const cqt_vat_ecommerce_item_price_is_discounted = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_price_is_discounted;
    return new Promise((resolve, reject) => {
      (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

        try {
          let invoices = new Array(); // Khởi tạo mảng Promise

          const promises = [_this.vhQuerySales.getBill(id_bill), _this.vhQuerySales.getBill_details_byId_bill(id_bill)]; // Sử dụng await để lấy kết quả từ Promise.all()

          const [bill, bill_details] = yield Promise.all(promises).catch(err => {
            console.error('❌ Lỗi trong quá trình lấy dữ liệu:', err);
            throw new Error('Không thể lấy dữ liệu hóa đơn');
          });
          console.log('bill', bill);
          console.log('bill_details', bill_details);
          /* ---------------------------------------------------------- Khởi tạo invoice ---------------------------------------------------------- */

          let invoice = {
            inv_invoiceSeries: invoiceSeries,
            inv_invoiceIssuedDate: _this.vhAlgorithm.formatDateToString(new Date()),
            inv_currencyCode: "VND",
            inv_exchangeRate: 1,
            inv_paymentMethodName: bill.payment_type == 1 ? "Tiền mặt" : "Chuyển khoản",
            inv_buyerDisplayName: bill.tax_buyerDisplayName,
            inv_buyerLegalName: bill.tax_buyerLegalName,
            inv_buyerTaxCode: bill.tax_buyerTaxCode,
            inv_buyerAddressLine: bill.tax_buyerAddressLine,
            inv_discountAmount: 0,
            inv_TotalAmountWithoutVat: 0,
            inv_vatAmount: 0,
            inv_TotalAmount: 0,
            key_api: id_bill,
            so_benh_an: bill.bill_code
          };
          /* ------------------------------------------------------ Tính toán invoice details ----------------------------------------------------- */

          /** Danh sách bill details */

          var invoice_details = new Array();
          /* ------------------------------------------------------ Lặp qua các bill details ------------------------------------------------------ */

          for (let i = 0; i < bill_details.length; i++) {
            // Bắt tường hợp CÓ Chương trình khuyến mãi

            /** Danh sách sản phẩm của đơn */
            let products = bill_details[i].products_gift || bill_details[i].products || [bill_details[i]];
            /* --------------------------------- Xử lý phân tách sản phẩm trong combo thành danh sách từng sản phẩm --------------------------------- */

            /** Mảng chứa danh sách sản phẩm trong combo */

            let productsCombo = [];

            for (let j = 0; j < products.length; j++) {
              // check xem có sản phẩm ptype: 5 (combo)
              if (products[j].ptype === _interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO && products[j].combos && products[j].combos.length > 0) {
                /** % Giảm giá. Bắt thêm trường hợp price_origin = 0 */
                const percentDiscount = products[j].price_origin > 0 ? (products[j].price_origin - products[j].price) / products[j].price_origin : 0; // Nếu có thì lấy tất cả sản phẩm trong combo

                const productInCombo = products[j].combos.map(combo => {
                  var _a;

                  return Object.assign(Object.assign({}, combo), {
                    price_origin: (_a = _this.vhQuerySales.getUnit_byRatio(combo.units, combo.ratio)) === null || _a === void 0 ? void 0 : _a.price,
                    price: combo.price * (1 - percentDiscount)
                  });
                }); // Thêm danh sách sản phẩm vào mảng

                productsCombo = productsCombo.concat(productInCombo); // Xóa sản phẩm combo khỏi danh sách products

                products.splice(j, 1);
                j--; // Giảm j để không bỏ qua sản phẩm tiếp theo
              }
            } // Nếu có sản phẩm combo thì thêm vào danh sách products


            if (productsCombo.length > 0) {
              products = products.concat(productsCombo);
            } // Lăp qua danh sách sản phẩm


            for (let j = 0; j < products.length; j++) {
              let id_sub_or_product = products[j].id_subproduct ? products[j].id_subproduct : products[j].id_product;
              let product = yield _this.vhQuerySales.getlocalDetailProduct(id_sub_or_product); // Trường hợp giá bán > giá gốc

              if (products[j].price > products[j].price_origin) {
                products[j].price_origin = products[j].price;
              }
              /** Đơn vị của sản phẩm, bắt trường hợp Dịch vụ thời gian thì thêm Dịch */


              let unitCodeValue = (_a = _this.vhQuerySales.getUnit_byRatio(product.units, products[j].ratio)) === null || _a === void 0 ? void 0 : _a.unit;
              const serviceTimeUnitMap = {
                'day': 'Ngày',
                'hour': 'Giờ',
                'minute': 'Phút',
                'second': 'Giây'
              };
              if (product.type === _interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.SERVICETIME) unitCodeValue = serviceTimeUnitMap[unitCodeValue] || unitCodeValue;
              /** Tính chất hàng hóa, nếu giá bán = 0 thì là hàng khuyến mại, ngược lại là hàng hóa dịch vụ */

              const tchat = products[j].price == 0 ? 2 : 1; // Khởi tạo chi tiết hóa đơn

              let invoice_detail = _this.createEInvoiceDetailTemplate(); // Gán các giá trị chung


              invoice_detail.tchat = tchat;
              invoice_detail.stt_rec0 = invoice_details.length + 1;
              invoice_detail.inv_unitCode = unitCodeValue;
              invoice_detail.inv_quantity = products[j].quantity;
              invoice_detail.inv_unitPrice = products[j].price_origin; // (Đơn giá)

              invoice_detail.ma_thue = bill.tax; // % thuế

              /* ------ Xử lý cqt_vat_ecommerce_item_code_is_barcode ------------------------------------------ */

              if (cqt_vat_ecommerce_item_code_is_barcode) {
                const barcode = (_b = _this.vhQuerySales.getUnit_byRatio(product.units, products[j].ratio)) === null || _b === void 0 ? void 0 : _b.barcode; // Nếu có barcode thì dùng barcode

                if (barcode) {
                  invoice_detail.inv_itemCode = barcode;
                } // Nếu không có barcode thì thông báo
                else {
                  _this.vhComponent.alertMessageDesktop("error", _this.languageService.translate("Gửi hóa đơn lên CQT thất bại. Hóa đơn có chứa sản phẩm chưa có mã vạch, vui lòng bổ sung và thử lại. Hoặc bỏ chọn cấu hình Mã sản phẩm khi xuất hóa đơn là mã vạch để tiếp tục"), 5000);

                  reject(new Error('Gửi hóa đơn lên CQT thất bại. Hóa đơn có chứa sản phẩm chưa có mã vạch, vui lòng bổ sung và thử lại. Hoặc bỏ chọn cấu hình Mã sản phẩm khi xuất hóa đơn là mã vạch để tiếp tục'));
                }
              } else {
                invoice_detail.inv_itemCode = products[j]._id || products[j].id_product;
              }
              /* ------ Xử lý tchat --------------------------------------------------------------------------- */


              if (tchat === 2) {
                // Gán lại tên
                invoice_detail.inv_itemName = 'Hàng khuyến mãi/hàng tặng ' + product.name; // Tính lại giá trị trợ giá (chiết khấu) của chi tiết hóa đơn trường hợp tchat2

                invoice_detail.inv_discountAmount = 0; // Trợ giá (chiết khấu) tính theo %

                invoice_detail.inv_discountPercentage = 0;
                /* ------ Xử lý Hàng khuyến mãi được phép xuất 0đ ----------------------------------------------- */
                // Nếu có bật cqt_vat_ecommerce_allow_promotional_items_zero_price và là tchat2 thì cần gán lại giá = 0, để các phép tính cho những trường khác bên dưới cũng sẽ tự tính = 0

                if (cqt_vat_ecommerce_allow_promotional_items_zero_price) {
                  invoice_detail.inv_unitPrice = 0;
                }
                /* ------ Xử lý Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT ------------------ */
                // Nếu có bật cqt_vat_ecommerce_keep_promotional_items_as_sold và là tchat2 thì sẽ set lại nso thành tchat1, discountAmount và discountPercentage vẫn là 0


                if (cqt_vat_ecommerce_keep_promotional_items_as_sold) {
                  // Gán lại tchat
                  invoice_detail.tchat = 1; // Gán lại tchat thành 1
                  // Gán lại tên

                  invoice_detail.inv_itemName = product.name;
                }
              } else {
                // Gán lại tên
                invoice_detail.inv_itemName = product.name; // Trợ giá (chiết khấu) của nhà bán hàng trên mỗi chi tiết hóa đơn = seller_discount + shopee_discount

                invoice_detail.inv_discountAmount = _this.roundTo4Decimal((invoice_detail.inv_unitPrice - products[j].price) * invoice_detail.inv_quantity);
                /* ------ Xử lý Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm ----------------------------------------- */

                if (cqt_vat_ecommerce_item_price_is_discounted) {
                  // Gán lại thành giá đã giảm
                  invoice_detail.inv_unitPrice = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount / invoice_detail.inv_quantity; // Gán lại Chiết khấu = 0

                  invoice_detail.inv_discountAmount = 0;
                } // Trợ giá (chiết khấu) tính theo %


                invoice_detail.inv_discountPercentage = (invoice_detail.inv_unitPrice - products[j].price) / invoice_detail.inv_unitPrice * 100;
              } // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn


              invoice_detail.inv_TotalAmountWithoutVat = _this.roundTo4Decimal(invoice_detail.inv_unitPrice * invoice_detail.inv_quantity - invoice_detail.inv_discountAmount); //Thuế VAT được tính theo chi tiết hóa đơn

              invoice_detail.inv_vatAmount = _this.roundTo4Decimal(invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100); //Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

              invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Thêm vào mảng

              invoice_details = _this.addEInvoiceDetail(invoice_detail, invoice_details, {
                cqt_vat_ecommerce_separate_discount_line: cqt_vat_ecommerce_separate_discount_line
              });
            }
          }
          /* -------------------------------------------------------------- Xử lý Phí ------------------------------------------------------------- */
          // Xử lý cho phí
          // Nếu fee > 0 thì thêm 1 invoice detail cho phí


          if (bill.fee > 0) {
            // Khởi tạo chi tiết hóa đơn
            let invoice_detail = _this.createEInvoiceDetailTemplate(); // Gán các giá trị chung


            invoice_detail.tchat = 1;
            invoice_detail.stt_rec0 = invoice_details.length + 1;
            invoice_detail.inv_itemCode = 'phi_phu_thu';
            invoice_detail.inv_itemName = 'Phụ thu';
            invoice_detail.inv_unitCode = 'Lần';
            invoice_detail.inv_quantity = 1;
            invoice_detail.inv_unitPrice = bill.fee;
            invoice_detail.inv_TotalAmountWithoutVat = _this.roundTo4Decimal(bill.fee); // Thành tiền trước thuế

            invoice_detail.ma_thue = bill.tax; // % thuế
            // Thuế VAT được tính theo chi tiết hóa đơn

            invoice_detail.inv_vatAmount = invoice_detail.inv_unitPrice * (invoice_detail.ma_thue / 100); // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

            invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Thêm vào mảng

            invoice_details = _this.addEInvoiceDetail(invoice_detail, invoice_details, {
              cqt_vat_ecommerce_separate_discount_line: cqt_vat_ecommerce_separate_discount_line
            });
          }
          /* ----------------------------------------------------------- Xử lý giảm giá ----------------------------------------------------------- */
          // Tính phí sàn


          let platformFee = 0;

          if (cqt_submit_invoice_with_ecommerce_fee && platform && infoShop) {
            platformFee = yield _this.calculatePlatformFee(bill, platform, infoShop);
            console.log('platformFee:', platformFee);
          } // Xử lý phần giảm giá (Giảm giá + Chiết khấu + Thanh toán điểm + Thanh toán phiếu)
          // tạo thành 1 invoice detail cso tchat3 cho phần giảm giá
          // invoice này vẫn sẽ tính thuế, nhưng khi tính tổng thuế sẽ bỏ qua nó (tương đương bill.total * (bill.tax / 100) của mình)


          if (((_c = bill.payment_points) !== null && _c !== void 0 ? _c : 0) > 0 || ((_d = bill.payment_coupons) !== null && _d !== void 0 ? _d : 0) > 0 || ((_e = bill.discount_bill) !== null && _e !== void 0 ? _e : 0) > 0 || ((_f = bill.discount) !== null && _f !== void 0 ? _f : 0) > 0 || cqt_submit_invoice_with_ecommerce_fee && platformFee > 0) {
            /** Tổng tiền giảm giá (Tổng tiền chiết khấu) */
            let totalDiscountAmount = ((_g = bill.payment_points) !== null && _g !== void 0 ? _g : 0) + ((_h = bill.payment_coupons) !== null && _h !== void 0 ? _h : 0) + ((_j = bill.discount_bill) !== null && _j !== void 0 ? _j : 0) + ((_k = bill.discount) !== null && _k !== void 0 ? _k : 0); // Nếu có phí sàn thì cộng thêm vào

            if (cqt_submit_invoice_with_ecommerce_fee && platformFee > 0) {
              totalDiscountAmount += platformFee;
            }
            /** Tiền thuế */


            const vatAmount = totalDiscountAmount * (bill.tax / 100); // Khởi tạo chi tiết hóa đơn

            let invoice_detail = _this.createEInvoiceDetailTemplate(); // Gán các giá trị chung


            invoice_detail.tchat = 3;
            invoice_detail.stt_rec0 = invoice_details.length + 1;
            invoice_detail.inv_itemCode = 'chiet_khau_thuong_mai';
            invoice_detail.inv_itemName = 'Chiết khấu thương mại';
            invoice_detail.inv_unitCode = 'Phần';
            invoice_detail.inv_quantity = 1;
            invoice_detail.inv_unitPrice = totalDiscountAmount;
            invoice_detail.inv_TotalAmountWithoutVat = _this.roundTo4Decimal(totalDiscountAmount); // Thành tiền trước thuế

            invoice_detail.ma_thue = bill.tax; // % thuế

            invoice_detail.inv_vatAmount = _this.roundTo4Decimal(vatAmount); // tiền thuế (Tiền thuế GTGT)

            invoice_detail.inv_TotalAmount = _this.roundTo4Decimal(totalDiscountAmount + vatAmount); // tổng tiền sau thuế (Thành tiền sau thuế)
            // Thêm vào mảng

            invoice_details = _this.addEInvoiceDetail(invoice_detail, invoice_details, {
              cqt_vat_ecommerce_separate_discount_line: cqt_vat_ecommerce_separate_discount_line
            });
          }
          /* ---------------------------------------------- Gán lại các trường tính toán cho invoice ---------------------------------------------- */


          for (let i = 0; i < invoice_details.length; i++) {
            if (invoice_details[i].tchat == 1) {
              // tchat 1 thì cộng dồn
              invoice.inv_discountAmount += invoice_details[i].inv_discountAmount;
              invoice.inv_vatAmount += invoice_details[i].inv_vatAmount;
              invoice.inv_TotalAmountWithoutVat += invoice_details[i].inv_TotalAmountWithoutVat;
              invoice.inv_TotalAmount += invoice_details[i].inv_TotalAmount;
            } else if (invoice_details[i].tchat == 2) {// tchat 2 thì bỏ qua
            } else if (invoice_details[i].tchat == 3) {
              // tchat 3 thì phải trừ lại
              invoice.inv_discountAmount -= invoice_details[i].inv_discountAmount;
              invoice.inv_vatAmount -= invoice_details[i].inv_vatAmount;
              invoice.inv_TotalAmountWithoutVat -= invoice_details[i].inv_TotalAmountWithoutVat;
              invoice.inv_TotalAmount -= invoice_details[i].inv_TotalAmount;
            }
          }
          /* ----------------------------------------------------------- Trả về giá trị ----------------------------------------------------------- */


          invoices = [Object.assign(Object.assign({}, invoice), {
            details: [{
              data: invoice_details
            }]
          })];
          console.log('data', invoices);
          resolve({
            vcode: 0,
            msg: 'success',
            data: invoices
          });
        } catch (err) {
          console.error('❌ Lỗi saveInvoice_noSign_byMinvoice:', err);
          reject(err);
        }
      })();
    });
  }
  /**
   * Công thức tính giá mới của sản phẩm (newPrice) để total sau khi áp thuế (thuế từ phần cài đặt của app mình) không thay đổi
   *
   * ((gia * sl - ck) / (1 + thue_cai_dat) + ck) / sl
   *
   * @param unitPrice Giá cũ
   * @param quantity Số lượng sản phẩm
   * @param discountAmount Tiền chiết khấu
   * @param taxSetting Thuế từ phần cài đặt của app mình (ví dụ 20% thì truyền vào: 20)
   * @param taxPlatform Thuế từ sàn (ví dụ 10% thì truyền vào: 10)
   *
   * @returns Giá mới của sản phẩm (newPrice) để total sau khi áp thuế không thay đổi
   *
   * @example
   *
    Tính giá mới của sản phẩm (newPrice) để total sau khi áp thuế (thuế từ phần cài đặt của app mình) không thay đổi
        vd: sl = 2, gia = 15000, ck = 5000, thue_san = 50%
    => total = ((gia * sl) - ck) * (1 + thue_san)
    => total = ((15000 * 2) - 5000) * (1 + 0.5)
    => total = 37500
        thue_cai_dat = 20% (thuế từ phần cài đặt của app mình)
    total = ((newPrice * sl - ck)) * (1 + thue_cai_dat)
    => newPrice = (total / (1 + thue_cai_dat) + ck) / sl   hoặc   ((((gia * sl) - ck) * (1 + thue_san)) / (1 + thue_cai_dat) + ck) / sl
    => newPrice = (37500 / (1 + 0.2) + 5000) / 2
    => newPrice = 18125
        thay 18125 vào công thức tính total với thuế cài đặt (sẽ bỏ qua thuế sàn)
    => total = ((gia * sl) - ck) * (1 + thue_cai_dat)
    => total = ((18125 * 2) - 5000) * (1 + 0.2)
    => total = 37500
    => total vẫn là 37500 không thay đổi
    
    Công thức tính ngược lại giá cảu sản phẩm:
    unitPrice = ((((newPrice * quantity - discountAmount) * (1 + taxSetting / 100)) / (1 + taxPlatform / 100)) + discountAmount) / quantity
        
    Sử dụng:
        invoice_detail.inv_unitPrice = calculateNewPrice(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, platformTax);
   
   */


  calculateNewPriceToUseSettingTax(unitPrice, quantity, discountAmount, taxSetting, taxPlatform) {
    return ((unitPrice * quantity - discountAmount) * (1 + taxPlatform / 100) / (1 + taxSetting / 100) + discountAmount) / quantity;
  }
  /**
   * Làm tròn 4 chữ số thập phân. VD: 123.456789 => 123.4568; 123.45671 => 123.4567
   *
   * @param num Số cần làm tròn
   *
   * @return Số đã làm tròn đến 4 chữ số thập phân
   *
   * @example
   * this.roundTo4Decimal(123.456789); // 123.4568
   */


  roundTo4Decimal(num) {
    return parseFloat(num.toFixed(4));
  }
  /**
   * Khởi tạo một object chi tiết hoá đơn điện tử với các trường mặc định.
   * tchat = 1, các trường số thì mặc định là 0, các trường chuỗi thì mặc định là rỗng.
   * @returns object mặc định
   * @example
   * let invoice_detail = this.billService.createEInvoiceDetailTemplate();
   *
   * Mẫu khởi tạo với các trường mặc định:
    {
      tchat: 1, // Tính chất hàng hóa: Hàng hóa dịch vụ (giá trị tchat là 1); Khuyến mại (giá trị tchat là 2); Chiết khấu thương mại (giá trị tchat là 3); Ghi chú/ diễn giải (giá trị tchat là 4); Hàng hóa đăc trưng (giá trị tchat là 5)
      stt_rec0: 0, // Số thứ tự của sản phẩm trong hóa đơn
      inv_itemCode: '', // Mã sản phẩm
      inv_itemName: '', // Tên sản phẩm, nếu tchatValue là 2 thì thêm chữ "Hàng khuyến mãi/hàng tặng" vào trước tên sản phẩm
      inv_unitCode: '', // Đơn vị của sản phẩm
      inv_quantity: 0, // Số lượng sản phẩm
      inv_unitPrice: 0, // Giá gốc bán sản phẩm
      ma_thue: 0, // % thuế
      inv_discountPercentage: 0,
      inv_discountAmount: 0, // Tiền chiết khấu (Giảm giá)
      inv_TotalAmountWithoutVat: 0, // Thành tiền trước thuế
      inv_vatAmount: 0, // thuế (Tiền thuế GTGT)
      inv_TotalAmount: 0 // Thành tiền sau thuế
    };
   */


  createEInvoiceDetailTemplate() {
    return {
      tchat: 1,
      stt_rec0: 0,
      inv_itemCode: '',
      inv_itemName: '',
      inv_unitCode: '',
      inv_quantity: 0,
      inv_unitPrice: 0,
      ma_thue: 0,
      inv_discountPercentage: 0,
      inv_discountAmount: 0,
      inv_TotalAmountWithoutVat: 0,
      inv_vatAmount: 0,
      inv_TotalAmount: 0 // Thành tiền sau thuế

    };
  }
  /**
   * Thêm invoice_detail vào invoice_details. Và kiểm tra các setting trong settings
   *
   * `cqt_vat_ecommerce_separate_discount_line` là true và `tchat1` và `inv_discountAmount > 0` thì sẽ tách chiết khấu ra thành một dòng riêng trong invoice_details.
   *
   * @param invoice_detail invoice_detail cần thêm vào invoice_details
   * @param invoice_details Danh sách invoice_details hiện tại
   * @param settings Các cài đặt sẽ kiểm tra
   * @returns Mảng invoice_details sau khi thêm
   */


  addEInvoiceDetail(invoice_detail, invoice_details, settings) {
    // Nếu KHÔNG cqt_vat_ecommerce_separate_discount_line hoặc KHÔNG phải tchat1 hoặc inv_discountAmount <= 0 thì thêm thẳng vào invoice_details
    if (!settings.cqt_vat_ecommerce_separate_discount_line || invoice_detail.tchat !== 1 || invoice_detail.inv_discountAmount <= 0) {
      invoice_details.push(invoice_detail);
      return invoice_details;
    } // NGƯỢC LẠI
    // Sẽ tách ra thành 2 invoice_detail:
    // 1. invoice_detail hiện tại (tchat1) sẽ giữ nguyên các trường như cũ, gán lại inv_discountAmount = 0, inv_discountPercentage = 0, tính lại inv_TotalAmountWithoutVat, inv_vatAmount, inv_TotalAmount
    // 2. invoice_detail mới (tchat3) sẽ set các trường như sau:
    //    - tchat = 3
    //    - stt_rec0 = invoice_details.length + 1
    //    - inv_itemCode = 'giam_gia_cho_' + cloneInvoiceDetail.inv_itemCode
    //    - inv_itemName = 'Giảm giá ' + cloneInvoiceDetail.inv_discountAmount + ' cho ' + cloneInvoiceDetail.inv_itemName
    //    - inv_unitCode = 'Phần'
    //    - inv_quantity = 1
    //    - inv_unitPrice = cloneInvoiceDetail.inv_discountAmount
    //    - ma_thue = cloneInvoiceDetail.ma_thue
    //    - inv_discountPercentage = 0
    //    - inv_discountAmount = 0
    //    - inv_TotalAmountWithoutVat, inv_vatAmount, inv_TotalAmount sẽ được tính lại dựa trên các trường mới này

    /* ----- Tạo newInvoiceDetailId mới và gán lại các trường ------------------------------------------ */


    const newInvoiceDetail = this.createEInvoiceDetailTemplate();
    newInvoiceDetail.tchat = 3;
    newInvoiceDetail.stt_rec0 = invoice_details.length + 2; // Cộng 2 là do lát nauwx sẽ chèn invoice_detail này vào sau invoice_detail hiện tại

    newInvoiceDetail.inv_itemCode = 'giam_gia_cho_' + invoice_detail.inv_itemCode;
    newInvoiceDetail.inv_itemName = 'Giảm giá ' + invoice_detail.inv_discountAmount + ' cho ' + invoice_detail.inv_itemName;
    newInvoiceDetail.inv_unitCode = 'Phần';
    newInvoiceDetail.inv_quantity = 1;
    newInvoiceDetail.inv_unitPrice = invoice_detail.inv_discountAmount;
    newInvoiceDetail.ma_thue = invoice_detail.ma_thue;
    newInvoiceDetail.inv_discountPercentage = 0;
    newInvoiceDetail.inv_discountAmount = 0;
    newInvoiceDetail.inv_TotalAmountWithoutVat = newInvoiceDetail.inv_unitPrice * newInvoiceDetail.inv_quantity - newInvoiceDetail.inv_discountAmount;
    newInvoiceDetail.inv_vatAmount = newInvoiceDetail.inv_TotalAmountWithoutVat * newInvoiceDetail.ma_thue / 100;
    newInvoiceDetail.inv_TotalAmount = newInvoiceDetail.inv_TotalAmountWithoutVat + newInvoiceDetail.inv_vatAmount;
    /* ----- Xử lý invoice_detail hiện tại --------------------------------------------------- */

    invoice_detail.inv_discountAmount = 0;
    invoice_detail.inv_discountPercentage = 0;
    invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice * invoice_detail.inv_quantity - invoice_detail.inv_discountAmount; // Tính lại sau khi gán lại inv_discountAmount

    invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; // Tính lại sau khi gán lại inv_discountAmount

    invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Tính lại sau khi gán lại inv_discountAmount

    /* ----- Thêm vào mảng ----------------------------------------------------------- */
    // Thêm invoice_detail đã xử lý vào invoice_details

    invoice_details.push(invoice_detail); // Thêm newInvoiceDetail vào invoice_details

    invoice_details.push(newInvoiceDetail); // Trả về mảng invoice_details đã thêm mới

    return invoice_details;
  }
  /**
   * Get lại thông tin và tính phí sàn
   * @param bill hóa đơn cần tính
   * @param platform sàn cần tính
   * @param infoShop
   * @returns trả về số tiền Phí sàn
   */


  calculatePlatformFee(bill, platform, infoShop) {
    var _this2 = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      if (!platform || !infoShop) return 0;
      let fee = 0;

      switch (platform) {
        /* --------------------------------------------------------------- SHOPEEE -------------------------------------------------------------- */
        case 'SHOPEE':
          const escrowShopee = yield _this2.vhEcommerce.getEscrowShopee(bill.order_number_ecommerce, infoShop.access_token, infoShop._id);
          fee = escrowShopee.order_income.seller_transaction_fee + escrowShopee.order_income.shipping_seller_protection_fee_amount + escrowShopee.order_income.commission_fee;
          break;

        /* --------------------------------------------------------------- TIKTOK --------------------------------------------------------------- */

        case 'TIKTOK':
          const transactionsTiktok = yield _this2.vhEcommerce.getOrderStatementTransactionsTiktok(infoShop.shop_cipher, infoShop.app_key, infoShop.access_token.toString(), bill.order_number_ecommerce);
          fee = transactionsTiktok === null || transactionsTiktok === void 0 ? void 0 : transactionsTiktok.fee_and_tax_amount;
          break;

        /* --------------------------------------------------------------- LAZADA --------------------------------------------------------------- */

        case 'LAZADA':
          const date = new Date(bill.date);
          date.setDate(date.getDate() - 30);
          const startTime = date;
          const endTime = new Date();
          const json = {
            start_time: startTime,
            end_time: endTime,
            limit: 100,
            offset: 0,
            trade_order_id: bill.order_number_ecommerce,
            trans_type: -1
          };
          const listFee = yield _this2.vhQuerySales.getTransactionDetailsLazada(json, infoShop['access_token']);

          const phi_co_dinh = _this2.calculateTotalLazadaFee(listFee, 'Commission');

          const phi_xu_ly_don_hang = _this2.calculateTotalLazadaFee(listFee, 'Payment Fee');

          fee = phi_co_dinh + phi_xu_ly_don_hang;
          break;

        /* ---------------------------------------------------------------- TIKI ---------------------------------------------------------------- */

        case 'TIKI':
          const tiki = yield _this2.vhQuerySales.getSalesOrderDetailTiki(bill.order_number_ecommerce, infoShop['access_token'], infoShop['_id']);
          let shipping_fee_discountAmount = 0;

          for (let i = 0; i < tiki['items'].length; i++) {
            // Cộng dồn tiền seller giảm giá phí ship
            shipping_fee_discountAmount += ((_b = (_a = tiki['items'][i].seller_income_detail.discount) === null || _a === void 0 ? void 0 : _a.discount_shipping_fee) === null || _b === void 0 ? void 0 : _b.seller_subsidy) || 0;
          }

          fee = Math.abs((_c = tiki === null || tiki === void 0 ? void 0 : tiki.invoice) === null || _c === void 0 ? void 0 : _c.total_seller_fee) - shipping_fee_discountAmount;
          break;

        default:
          fee = 0;
      }

      return fee;
    })();
  }

  calculateTotalLazadaFee(data, typeFee) {
    return data.filter(item => item.fee_name === typeFee).map(item => {
      // Remove commas and convert to a number
      const rawAmount = item.amount.replace(/,/g, '');
      return Math.abs(parseFloat(rawAmount));
    }).reduce((total, amount) => total + amount, 0);
  }

}

BillService.ɵfac = function BillService_Factory(t) {
  return new (t || BillService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhEcommerce));
};

BillService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: BillService,
  factory: BillService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_sales_services_bill_service_ts.js.map